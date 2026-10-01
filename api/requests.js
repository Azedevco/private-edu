// AZEDEV Learn API - mentor review and certificate requests, so mentors have one list instead of chat scrollback.
//   POST  /api/requests                 anyone: { kind: "review" | "certificate", path, project, repo, finalScore, contact }
//   GET   /api/requests?repo=…          anyone: the mentor's decision for that repository
//   GET   /api/requests?kind=…          admin: open requests, newest first
//   PATCH /api/requests?id=…            admin: { status: "done" | "declined", note, mentor }
import { ObjectId } from 'mongodb'
import { db, send, readBody, isAdmin, rateLimit, text, oneOf, handle } from './_lib.js'

const REPO = /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/;

export default handle(async (req, res) => {
    const database = await db();
    const col = database.collection('requests');

    if (req.method === 'POST') {
        const b = await readBody(req);
        if (b.website) return send(res, 200, { ok: true });
        const repo = text(b.repo, 200);
        if (!REPO.test(repo)) return send(res, 400, { ok: false, error: 'a public GitHub repository URL is required' });
        const doc = {
            kind: oneOf(b.kind, ['review', 'certificate'], 'review'),
            path: text(b.path, 40),
            project: text(b.project, 120),
            repo,
            finalScore: text(b.finalScore, 10),
            contact: text(b.contact, 120),
            status: 'open',
            createdAt: new Date()
        };
        await rateLimit(database, req, 'request', 6);
        // One open request per kind and repository: a repeat updates the date instead of adding a copy.
        await col.updateOne({ kind: doc.kind, repo: doc.repo, status: 'open' }, { $set: doc }, { upsert: true });
        return send(res, 201, { ok: true });
    }

    // Public: the learner looks up the mentor's decision for their own repository (only the decision, note and mentor).
    if (req.method === 'GET' && req.query?.repo) {
        const repo = text(req.query.repo, 200);
        if (!REPO.test(repo)) return send(res, 400, { ok: false, error: 'bad repo' });
        const items = await col.find({ repo }, { projection: { _id: 0, kind: 1, status: 1, note: 1, mentor: 1, closedAt: 1, createdAt: 1 } }).sort({ createdAt: -1 }).limit(10).toArray();
        return send(res, 200, { ok: true, items });
    }

    if (!isAdmin(req)) return send(res, 401, { ok: false, error: 'unauthorized' });

    if (req.method === 'GET') {
        const q = { status: oneOf(req.query?.status, ['open', 'done', 'declined'], 'open') };
        if (req.query?.kind) q.kind = oneOf(req.query.kind, ['review', 'certificate'], 'review');
        const items = await col.find(q).sort({ createdAt: -1 }).limit(200).toArray();
        return send(res, 200, { ok: true, items });
    }

    if (req.method === 'PATCH') {
        const b = await readBody(req);
        let _id;
        try { _id = new ObjectId(String(req.query.id)); } catch { return send(res, 400, { ok: false, error: 'bad id' }); }
        const status = oneOf(b.status, ['done', 'declined'], null);
        if (!status) return send(res, 400, { ok: false, error: 'bad status' });
        const r = await col.updateOne({ _id }, { $set: { status, note: text(b.note, 500), mentor: text(b.mentor, 80), closedAt: new Date() } });
        return send(res, r.matchedCount ? 200 : 404, { ok: Boolean(r.matchedCount) });
    }

    send(res, 405, { ok: false, error: 'method not allowed' });
});
