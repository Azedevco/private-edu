// AZEDEV Learn API - shared helpers for the Vercel functions: one cached MongoDB connection, indexes, JSON replies,
// admin auth and a small rate limit. The database is a 512 MB free Atlas cluster, so every document is size-capped,
// rate-limit records expire by themselves (TTL index) and rejected items are removed after 30 days.
import { MongoClient } from 'mongodb'
import crypto from 'node:crypto'

const DB_NAME = process.env.MONGODB_DB || 'azedev_learn';
let clientPromise = null;
let indexed = false;

export const db = async () => {
    if (!process.env.MONGODB_URI) throw Object.assign(new Error('MONGODB_URI is not set'), { status: 503 });
    if (!clientPromise) {
        clientPromise = new MongoClient(process.env.MONGODB_URI, { maxPoolSize: 5, serverSelectionTimeoutMS: 8000 }).connect()
            .catch((e) => { clientPromise = null; throw e; });
    }
    const database = (await clientPromise).db(DB_NAME);
    if (!indexed) {
        indexed = true;
        await Promise.all([
            database.collection('submissions').createIndex({ status: 1, createdAt: -1 }),
            database.collection('submissions').createIndex({ url: 1 }, { sparse: true }),
            database.collection('submissions').createIndex({ rejectedAt: 1 }, { expireAfterSeconds: 30 * 24 * 3600, sparse: true }),
            database.collection('requests').createIndex({ kind: 1, status: 1, createdAt: -1 }),
            database.collection('ratelimits').createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 }),
            database.collection('ratelimits').createIndex({ key: 1 })
        ]).catch(() => { indexed = false; });
    }
    return database;
};

export const send = (res, status, body) => {
    res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
    if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'no-store');
    res.end(JSON.stringify(body));
};

export const readBody = async (req) => {
    if (req.body && typeof req.body === 'object') return req.body;
    const chunks = [];
    let size = 0;
    for await (const c of req) {
        size += c.length;
        if (size > 64 * 1024) throw Object.assign(new Error('Body too large'), { status: 413 });
        chunks.push(c);
    }
    try { return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'); } catch { throw Object.assign(new Error('Invalid JSON'), { status: 400 }); }
};

// Admin: a long random ADMIN_TOKEN set in Vercel, sent as "Authorization: Bearer <token>". Compared in constant time.
export const isAdmin = (req) => {
    const expected = process.env.ADMIN_TOKEN || '';
    const given = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
    if (expected.length < 24 || given.length !== expected.length) return false;
    return crypto.timingSafeEqual(Buffer.from(given), Buffer.from(expected));
};

// The visitor's IP, hashed with a server-side salt (the raw IP is never stored).
export const ipHash = (req) => {
    const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '').split(',')[0].trim();
    return crypto.createHash('sha256').update(`${process.env.IP_SALT || 'azedev-learn'}:${ip}`).digest('hex').slice(0, 32);
};

// At most `limit` writes of one kind per IP per hour.
export const rateLimit = async (database, req, kind, limit) => {
    const key = `${kind}:${ipHash(req)}`;
    const count = await database.collection('ratelimits').countDocuments({ key });
    if (count >= limit) throw Object.assign(new Error('Too many requests'), { status: 429 });
    await database.collection('ratelimits').insertOne({ key, createdAt: new Date() });
};

export const text = (v, max) => String(v ?? '').trim().slice(0, max);
export const httpUrl = (v) => {
    const s = text(v, 500);
    try { const u = new URL(s); return /^https?:$/.test(u.protocol) ? u.toString() : ''; } catch { return ''; }
};
export const oneOf = (v, list, fallback) => (list.includes(v) ? v : fallback);

export const handle = (fn) => async (req, res) => {
    try {
        await fn(req, res);
    } catch (e) {
        const status = e.status || 500;
        if (status >= 500) console.error('[api]', e.message);
        send(res, status, { ok: false, error: status >= 500 ? 'server_error' : e.message });
    }
};
