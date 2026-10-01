// AZEDEV Learn API - GET /api/health: is the database reachable, and how much of the 512 MB is used.
import { db, send, handle } from './_lib.js'

export default handle(async (req, res) => {
    const database = await db();
    const stats = await database.command({ dbStats: 1, scale: 1024 * 1024 });
    send(res, 200, { ok: true, db: database.databaseName, dataMB: Number(stats.dataSize.toFixed(2)), storageMB: Number(stats.storageSize.toFixed(2)), limitMB: 512 });
});
