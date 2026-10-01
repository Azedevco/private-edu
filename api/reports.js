// AZEDEV Learn API - problem reports on materials ("the link is broken", "outdated", …), so a learner can flag a bad
// material in two taps and AZEDEV has one queue to work through.
//   POST  /api/reports            anyone: { url, title, reason, note, where }
//   GET   /api/reports?status=…   admin: reports with that status (new | reviewing | resolved | rejected), newest first
//   PATCH /api/reports?id=…       admin: { status, adminNote }
// Several reports about the same link and reason fold into one item with a counter. Closed items expire after 90 days.
import { ObjectId } from 'mongodb'
import { db, send, readBody, isAdmin, rateLimit, text, httpUrl, oneOf, handle } from './_lib.js'

const REASONS = ['broken', 'outdated', 'wrong', 'inappropriate', 'copyright', 'other'];
const STATUSES = ['new', 'reviewing', 'resolved', 'rejected'];
let indexed = false;

export default handle(async (req, res) => {
    const database = await db();
    const col = database.collection('reports');
    if (!indexed) {
        indexed = true;
        await Promise.all([
            col.createIndex({ status: 1, updatedAt: -1 }),
            col.createIndex({ url: 1, reason: 1, status: 1 }),
            col.createIndex({ closedAt: 1 }, { expireAfterSeconds: 90 * 24 * 3600, sparse: true })
        ]).catch(() => { indexed = false; });
    }

    if (req.method === 'POST') {
        const b = await readBody(req);
        if (b.website) return send(res, 200, { ok: true });
        const url = httpUrl(b.url);
        const reason = oneOf(b.reason, REASONS, null);
        if (!url || !reason) return send(res, 400, { ok: false, error: 'url and reason are required' });
        const note = text(b.note, 500);
        await rateLimit(database, req, 'report', 10);
        const now = new Date();
        // An open report about the same link and problem gets a +1 (and the newest note) instead of a copy.
        await col.updateOne(
            { url, reason, status: { $in: ['new', 'reviewing'] } },
            {
                $setOnInsert: { url, reason, status: 'new', createdAt: now },
                $set: { title: text(b.title, 200), where: text(b.where, 120), updatedAt: now, ...(note ? { note } : {}) },
                $inc: { count: 1 }
            },
            { upsert: true }
        );
        return send(res, 201, { ok: true });
    }

    if (!isAdmin(req)) return send(res, 401, { ok: false, error: 'unauthorized' });

    if (req.method === 'GET') {
        const status = oneOf(req.query?.status, STATUSES, 'new');
        const items = await col.find({ status }).sort({ updatedAt: -1 }).limit(200).toArray();
        const counts = Object.fromEntries(await Promise.all(STATUSES.map(async (s) => [s, await col.countDocuments({ status: s })])));
        return send(res, 200, { ok: true, items, counts });
    }

    if (req.method === 'PATCH') {
        const b = await readBody(req);
        let _id;
        try { _id = new ObjectId(String(req.query.id)); } catch { return send(res, 400, { ok: false, error: 'bad id' }); }
        const status = oneOf(b.status, STATUSES, null);
        if (!status) return send(res, 400, { ok: false, error: 'bad status' });
        const closed = status === 'resolved' || status === 'rejected';
        const update = { $set: { status, adminNote: text(b.adminNote, 500), updatedAt: new Date() } };
        if (closed) update.$set.closedAt = new Date(); else update.$unset = { closedAt: '' };
        const r = await col.updateOne({ _id }, update);
        return send(res, r.matchedCount ? 200 : 404, { ok: Boolean(r.matchedCount) });
    }

    send(res, 405, { ok: false, error: 'method not allowed' });
});
