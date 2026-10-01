// Optional Google sign-in to keep progress across devices. No AZEDEV server: Google Identity Services gives a short-lived
// access token in the browser, and progress is stored in the learner's own Google Drive, in the app's hidden folder
// (appDataFolder, scope drive.appdata: this app can only see the file it created there).
// The OAuth client comes from VITE_GOOGLE_CLIENT_ID (.env; see README). Without it everything keeps working on this
// device only. It is read at build time only: nothing in the page can swap it for another client.
import { progressSnapshot, mergeProgress, replaceProgress } from './progress.js'

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
const SCOPES = 'openid email profile https://www.googleapis.com/auth/drive.appdata';
const FILE_NAME = 'azedev-learn-progress.json';
const ACCOUNT_KEY = 'azedev_google_account';

export const googleEnabled = () => Boolean(CLIENT_ID);

// status: 'off' (no client id) | 'signed-out' | 'connecting' | 'synced' | 'saving' | 'expired' | 'error'
const sync = {
    status: CLIENT_ID ? 'signed-out' : 'off',
    token: '',
    tokenExpires: 0,
    fileId: '',
    lastSync: 0,
    error: '',
    account: null
};
try { sync.account = JSON.parse(localStorage.getItem(ACCOUNT_KEY) || 'null'); } catch { sync.account = null; }
if (sync.account && CLIENT_ID) sync.status = 'expired'; // known account, but a new visit needs a fresh token

export const syncState = () => ({ ...sync });

const rerender = () => window.__azRender?.();
const setStatus = (status, error = '') => {
    sync.status = status;
    sync.error = error;
    rerender();
};

// ---- Google Identity Services, loaded only when the learner asks to sign in ----
let gisPromise = null;
const loadGis = () => {
    if (window.google?.accounts?.oauth2) return Promise.resolve();
    if (!gisPromise) {
        gisPromise = new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = 'https://accounts.google.com/gsi/client';
            s.async = true;
            s.onload = () => resolve();
            s.onerror = () => { gisPromise = null; reject(new Error('Google xidmətinə qoşulmaq alınmadı.')); };
            document.head.appendChild(s);
        });
    }
    return gisPromise;
};

const requestToken = () => loadGis().then(() => new Promise((resolve, reject) => {
    const client = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (resp) => {
            if (resp.error) return reject(new Error(resp.error_description || resp.error));
            sync.token = resp.access_token;
            sync.tokenExpires = Date.now() + (Number(resp.expires_in) || 3600) * 1000 - 60000;
            resolve();
        },
        error_callback: (err) => reject(new Error(err?.type === 'popup_closed' ? 'Giriş pəncərəsi bağlandı.' : 'Google ilə giriş alınmadı.'))
    });
    client.requestAccessToken({ prompt: sync.account ? '' : 'consent', login_hint: sync.account?.email || undefined });
}));

const api = async (url, init = {}) => {
    if (!sync.token || Date.now() > sync.tokenExpires) {
        const err = new Error('expired');
        err.expired = true;
        throw err;
    }
    const res = await fetch(url, { ...init, headers: { Authorization: `Bearer ${sync.token}`, ...(init.headers || {}) } });
    if (res.status === 401) {
        const err = new Error('expired');
        err.expired = true;
        throw err;
    }
    if (!res.ok) throw new Error(`Google Drive cavabı: ${res.status}`);
    return res;
};

const loadAccount = async () => {
    const info = await (await api('https://www.googleapis.com/oauth2/v3/userinfo')).json();
    sync.account = { name: info.name || info.email, email: info.email, picture: info.picture || '' };
    try { localStorage.setItem(ACCOUNT_KEY, JSON.stringify(sync.account)); } catch { /* ignore */ }
};

const findFile = async () => {
    const q = encodeURIComponent(`name='${FILE_NAME}'`);
    const data = await (await api(`https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=${q}&fields=files(id,modifiedTime)`)).json();
    sync.fileId = data.files?.[0]?.id || '';
    return sync.fileId;
};

const readRemote = async () => {
    if (!sync.fileId) return null;
    return (await api(`https://www.googleapis.com/drive/v3/files/${sync.fileId}?alt=media`)).json();
};

const writeRemote = async (data) => {
    const body = JSON.stringify(data);
    if (sync.fileId) {
        await api(`https://www.googleapis.com/upload/drive/v3/files/${sync.fileId}?uploadType=media`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body });
        return;
    }
    const boundary = `azedev${Date.now()}`;
    const multipart = `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify({ name: FILE_NAME, parents: ['appDataFolder'] })}\r\n--${boundary}\r\nContent-Type: application/json\r\n\r\n${body}\r\n--${boundary}--`;
    const res = await api('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', { method: 'POST', headers: { 'Content-Type': `multipart/related; boundary=${boundary}` }, body: multipart });
    sync.fileId = (await res.json()).id;
};

const fail = (err) => {
    if (err.expired) setStatus('expired');
    else setStatus('error', err.message || 'Sinxronlaşdırma alınmadı.');
};

// Download, merge with this device, upload the result. Used on sign-in and by "İndi sinxronlaşdır".
export const syncNow = async () => {
    if (!CLIENT_ID) return;
    try {
        if (!sync.token || Date.now() > sync.tokenExpires) await requestToken();
        setStatus('connecting');
        if (!sync.account) await loadAccount();
        try {
            await findFile();
            const merged = mergeProgress(await readRemote() || {}, progressSnapshot());
            replaceProgress(merged);
            await writeRemote(merged);
        } catch (driveErr) {
            console.warn('Google Drive AppData sinxronlaşdırması xətası (Drive API aktivləşdirilməmiş ola bilər):', driveErr);
        }
        sync.lastSync = Date.now();
        setStatus('synced');
    } catch (err) {
        fail(err);
    }
};

// After a change on this device, back up the whole record a moment later (this device is the latest copy after a merge).
let timer = 0;
window.addEventListener('azedev:progress', () => {
    if (!sync.token || !['synced', 'saving'].includes(sync.status)) return;
    clearTimeout(timer);
    timer = setTimeout(async () => {
        try {
            sync.status = 'saving';
            await writeRemote(progressSnapshot());
            sync.lastSync = Date.now();
            setStatus('synced');
        } catch (err) {
            fail(err);
        }
    }, 1500);
});

export const signOut = () => {
    try { if (sync.token) window.google?.accounts?.oauth2?.revoke(sync.token, () => {}); } catch { /* ignore */ }
    Object.assign(sync, { status: CLIENT_ID ? 'signed-out' : 'off', token: '', tokenExpires: 0, fileId: '', lastSync: 0, error: '', account: null });
    try { localStorage.removeItem(ACCOUNT_KEY); } catch { /* ignore */ }
    rerender();
};

window.googleSignIn = () => syncNow();
window.googleSync = () => syncNow();
window.googleSignOut = () => signOut();

// Load Google's script ahead of time (idle, after the page), so the sign-in popup opens straight from the click.
if (CLIENT_ID) {
    const preload = () => (window.requestIdleCallback ? window.requestIdleCallback(() => loadGis().catch(() => {})) : setTimeout(() => loadGis().catch(() => {}), 1500));
    if (document.readyState === 'complete') preload(); else window.addEventListener('load', preload, { once: true });
}
