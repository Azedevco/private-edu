// AZEDEV Learn - the browser side of the small API (/api/*, Vercel functions over MongoDB). Suggestions, mentor and
// certificate requests reach AZEDEV here instead of staying in one browser. The admin token is typed by the admin
// and kept only for this tab (sessionStorage); the server checks it. When the API is not reachable (local `npm run
// dev` without `vercel dev`), callers get { ok: false, offline: true } and fall back honestly. No imports on purpose:
// core.js and storage.js depend on this module, so it must not depend on them (a cycle broke the production build).

const TOKEN_KEY = 'azedev_admin_token';
export const getAdminToken = () => { try { return sessionStorage.getItem(TOKEN_KEY) || ''; } catch { return ''; } };
export const setAdminToken = (t) => { try { sessionStorage.setItem(TOKEN_KEY, t); } catch { /* ignore */ } };
export const clearAdminToken = () => { try { sessionStorage.removeItem(TOKEN_KEY); } catch { /* ignore */ } };

export const apiCall = async (path, { method = 'GET', body, admin = false } = {}) => {
    const headers = { Accept: 'application/json' };
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    if (admin) headers.Authorization = `Bearer ${getAdminToken()}`;
    try {
        const r = await fetch(path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
        const type = r.headers.get('content-type') || '';
        if (!type.includes('application/json')) return { ok: false, offline: true, status: r.status };
        const data = await r.json();
        return { ...data, ok: r.ok && data.ok !== false, status: r.status, offline: r.status === 503 };
    } catch {
        return { ok: false, offline: true, status: 0 };
    }
};

const render = () => window.__azRender?.();

// Approved community materials, loaded once per visit.
let communityLoaded = false;
let remoteUploads = [];
export const getRemoteUploads = () => remoteUploads;
export const loadCommunity = async (force = false) => {
    if (communityLoaded && !force) return;
    communityLoaded = true;
    const r = await apiCall('/api/submissions');
    remoteUploads = r.ok ? r.items.map((x) => ({
        id: String(x._id), title: x.title, url: x.url, desc: x.desc, content: x.content, category: x.category, type: x.type,
        author: x.author, date: String(x.createdAt || '').slice(0, 10), status: 'approved', remote: true
    })) : [];
    render();
};

// The admin panel's data: the moderation queue, approved materials, and open mentor/certificate requests.
let adminData = null;
export const getAdminData = () => adminData;
export const clearAdminData = () => { adminData = null; };
export const loadAdminData = async () => {
    const [pending, approved, requests] = await Promise.all([
        apiCall('/api/submissions?status=pending', { admin: true }),
        apiCall('/api/submissions'),
        apiCall('/api/requests', { admin: true })
    ]);
    if (pending.status === 401) return { ok: false, unauthorized: true };
    if (!pending.ok) return { ok: false, offline: true };
    const norm = (x, status) => ({ id: String(x._id), title: x.title, url: x.url, desc: x.desc, content: x.content, category: x.category, type: x.type, author: x.author, date: String(x.createdAt || '').slice(0, 10), status });
    adminData = {
        queue: pending.items.map((x) => norm(x, 'pending')),
        approved: approved.ok ? approved.items.map((x) => norm(x, 'approved')) : [],
        requests: requests.ok ? requests.items : []
    };
    return { ok: true };
};

// Mentor review and certificate requests: recorded for mentors (best effort; WhatsApp stays the conversation).
export const sendRequest = (payload) => apiCall('/api/requests', { method: 'POST', body: payload });
