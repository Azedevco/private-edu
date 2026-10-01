// AZEDEV Learn API - material suggestions ("Material göndər" and "Material əlavə et").
//   POST   /api/submissions                  anyone: a suggestion goes in as "pending" (rate-limited, size-capped)
//   GET    /api/submissions                  anyone: approved community materials (public fields only)
//   GET    /api/submissions?status=pending   admin: the moderation queue
//   PATCH  /api/submissions?id=…             admin: { status: "approved" | "rejected" }
//   DELETE /api/submissions?id=…             admin
import { ObjectId } from 'mongodb'
import { db, send, readBody, isAdmin, rateLimit, text, httpUrl, oneOf, handle } from './_lib.js'

const TYPES = ['cheatsheet', 'guide', 'template', 'course', 'tool', 'doc', 'youtube', 'book', 'article', 'interactive'];
const CATEGORIES = ['web-dev', 'mobile-dev', 'data-ai', 'infra-sec', 'game-dev', 'embedded-iot', 'emerging', 'qa-test'];
const LANGS = ['az', 'tr', 'ru', 'en'];
const PUBLIC = { title: 1, url: 1, desc: 1, content: 1, category: 1, type: 1, lang: 1, author: 1, createdAt: 1 };

const toId = (v) => { try { return new ObjectId(String(v)); } catch { throw Object.assign(new Error('Bad id'), { status: 400 }); } };

export default handle(async (req, res) => {
    const database = await db();
    const col = database.collection('submissions');

    if (req.method === 'GET') {
        if (req.query?.status && req.query.status !== 'approved') {
            if (!isAdmin(req)) return send(res, 401, { ok: false, error: 'unauthorized' });
            const items = await col.find({ status: oneOf(req.query.status, ['pending', 'rejected'], 'pending') }).sort({ createdAt: -1 }).limit(200).toArray();
            return send(res, 200, { ok: true, items });
        }
        const items = await col.find({ status: 'approved' }, { projection: PUBLIC }).sort({ createdAt: -1 }).limit(200).toArray();
        res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
        return send(res, 200, { ok: true, items });
    }

    if (req.method === 'POST') {
        const b = await readBody(req);
        if (b.website) return send(res, 200, { ok: true }); // honeypot: bots fill the hidden field
        const doc = {
            title: text(b.title, 160),
            url: httpUrl(b.url),
            desc: text(b.desc, 600),
            content: text(b.content, 20000),
            category: oneOf(b.category, CATEGORIES, 'web-dev'),
            type: oneOf(b.type, TYPES, 'guide'),
            lang: oneOf(b.lang, LANGS, 'az'),
            author: text(b.author, 80) || 'Anonim',
            path: text(b.path, 40),
            lesson: Number.isInteger(b.lesson) ? b.lesson : null,
            status: 'pending',
            createdAt: new Date()
        };
        if (doc.title.length < 3 || (!doc.url && doc.content.length < 20)) return send(res, 400, { ok: false, error: 'title and url or content are required' });
        if (isAdmin(req)) { doc.status = 'approved'; doc.approvedAt = new Date(); }
        else await rateLimit(database, req, 'submission', 5);
        if (doc.url && await col.countDocuments({ url: doc.url, status: { $ne: 'rejected' } })) return send(res, 409, { ok: false, error: 'duplicate' });
        const r = await col.insertOne(doc);
        return send(res, 201, { ok: true, id: r.insertedId });
    }

    if (!isAdmin(req)) return send(res, 401, { ok: false, error: 'unauthorized' });

    if (req.method === 'PATCH') {
        const b = await readBody(req);
        const status = oneOf(b.status, ['approved', 'rejected'], null);
        if (!status) return send(res, 400, { ok: false, error: 'bad status' });
        const update = status === 'approved'
            ? { $set: { status, approvedAt: new Date() }, $unset: { rejectedAt: '' } }
            : { $set: { status, rejectedAt: new Date() } };
        const r = await col.updateOne({ _id: toId(req.query.id) }, update);
        return send(res, r.matchedCount ? 200 : 404, { ok: Boolean(r.matchedCount) });
    }

    if (req.method === 'DELETE') {
        const r = await col.deleteOne({ _id: toId(req.query.id) });
        return send(res, r.deletedCount ? 200 : 404, { ok: Boolean(r.deletedCount) });
    }

    send(res, 405, { ok: false, error: 'method not allowed' });
});
