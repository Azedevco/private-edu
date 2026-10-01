// AZEDEV Learn - the two checks of a learner's project: an automatic one and a mentor one.
// Automatic: public facts from the GitHub REST API, without a token (60 requests an hour per network): the repository
// exists and is public, it has a README, it holds code, its languages match the project's, and when it last changed.
// Mentor: a request. The site opens the WhatsApp community and remembers that the learner asked; it cannot know whether a
// mentor answered, so it never says so. Results are stored with the project (src/progress.js), so they sync like it.
import { azedevBrand } from './azedev-data.js'
import { requestRender, showToast } from './core.js'
import { setProject, projectState, projectsOf, isRepoUrl } from './progress.js'
import { sendRequest, apiCall } from './api.js'

const API = 'https://api.github.com';
const TIMEOUT_MS = 12000;

const MONTHS = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];
const pad = (n) => String(n).padStart(2, '0');
// "1 oktyabr 2026" (and ", 14:05" with the time), without relying on the browser having Azerbaijani locale data.
export const formatDate = (value, withTime = false) => {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    const date = `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    return withTime ? `${date}, ${pad(d.getHours())}:${pad(d.getMinutes())}` : date;
};

// A problem that stops the whole check (limit, network): shown as one sentence; the last stored result stays.
class CheckError extends Error {}

const get = async (path) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    let res;
    try {
        res = await fetch(`${API}${path}`, { signal: ctrl.signal });
    } catch {
        throw new CheckError('GitHub-a qoşulmaq alınmadı: internet bağlantını yoxla və bir az sonra yenidən cəhd et.');
    } finally {
        clearTimeout(timer);
    }
    if (res.status === 403 || res.status === 429) {
        if (res.status === 429 || res.headers.get('x-ratelimit-remaining') === '0') {
            const reset = Number(res.headers.get('x-ratelimit-reset')) * 1000;
            const when = reset > Date.now() ? `saat ${pad(new Date(reset).getHours())}:${pad(new Date(reset).getMinutes())}-dən sonra` : 'bir saatdan sonra';
            throw new CheckError(`GitHub-ın saatlıq yoxlama limiti dolub: ${when} yenidən yoxla.`);
        }
        throw new CheckError('GitHub sorğunu qəbul etmədi: bir az sonra yenidən yoxla.');
    }
    if (res.status === 404) return null;
    if (!res.ok) throw new CheckError(`GitHub cavab vermədi (kod ${res.status}): bir az sonra yenidən yoxla.`);
    try {
        return await res.json();
    } catch {
        throw new CheckError('GitHub-ın cavabını oxumaq alınmadı: bir az sonra yenidən yoxla.');
    }
};

// https://github.com/owner/repo(.git)(/) → { owner, repo }
export const parseRepo = (url) => {
    const m = String(url || '').trim().match(/^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+?)(?:\.git)?\/?$/);
    return m ? { owner: m[1], repo: m[2] } : null;
};

// Project skills that are languages GitHub can see in a repository (its "languages" names). Anything else (a library,
// framework, API or tool, such as React or OpenWeather API) cannot be seen in the code this way and is not checked.
const LANGUAGES = {
    html: ['HTML'],
    css: ['CSS', 'SCSS', 'Sass', 'Less'],
    javascript: ['JavaScript'],
    typescript: ['TypeScript'],
    python: ['Python', 'Jupyter Notebook'],
    kotlin: ['Kotlin'],
    swift: ['Swift'],
    dart: ['Dart'],
    java: ['Java'],
    'c#': ['C#'],
    'c++': ['C++'],
    c: ['C'],
    go: ['Go'],
    solidity: ['Solidity']
};
// "C/C++" or "Go/Java" are alternatives: checkable when every one is a language, met when any is found.
// A note in brackets ("Python (Netmiko/Nornir)") is dropped first.
const languagesFor = (tech) => {
    const parts = String(tech).replace(/\([^)]*\)/g, ' ').split('/').map((s) => s.trim().toLowerCase()).filter(Boolean);
    if (!parts.length || !parts.every((p) => LANGUAGES[p])) return null;
    return parts.flatMap((p) => LANGUAGES[p]);
};

const techItem = (tech, languages) => {
    const label = 'Texnologiyalar uyğundur';
    const have = new Set(Object.keys(languages || {}).map((l) => l.toLowerCase()));
    const found = [];
    const missing = [];
    const skipped = [];
    for (const t of tech) {
        const langs = languagesFor(t);
        if (!langs) skipped.push(t);
        else if (langs.some((l) => have.has(l.toLowerCase()))) found.push(t);
        else missing.push(t);
    }
    const notChecked = skipped.length ? ` Yoxlanmadı: ${skipped.join(', ')}.` : '';
    if (!found.length && !missing.length) {
        return { id: 'tech', ok: null, required: false, label, detail: tech.length ? `Kitabxana, API və alətlər kodda avtomatik tanınmır: ${tech.join(', ')}.` : 'Bu layihə üçün texnologiya siyahısı yoxdur.' };
    }
    if (missing.length) {
        const seen = Object.keys(languages || {});
        return {
            id: 'tech', ok: false, required: true, label,
            detail: `Repoda tapılmadı: ${missing.join(', ')}. ${seen.length ? `GitHub-ın gördüyü dillər: ${seen.join(', ')}.` : 'GitHub repoda kod dili tanımadı: kod fayllarını yüklə.'}${notChecked}`
        };
    }
    return { id: 'tech', ok: true, required: true, label, detail: `Tapıldı: ${found.join(', ')}.${notChecked}` };
};

/**
 * Check a learner's GitHub repository against a project.
 * Returns { checkedAt, repo, items: [{ id, ok: true|false|null, required, info?, label, detail }], passed }.
 * Throws CheckError (with an Azerbaijani sentence) when GitHub cannot be asked: rate limit, network, server error.
 */
export const checkRepo = async (url, project = {}) => {
    const repoLabel = 'Repo tapıldı və açıqdır';
    const skippedAll = 'Repo tapılmayanda yoxlanmır.';
    const parsed = parseRepo(url);
    const pending = [
        { id: 'readme', ok: null, required: false, label: 'README var', detail: skippedAll },
        { id: 'code', ok: null, required: false, label: 'Kod var', detail: skippedAll },
        { id: 'tech', ok: null, required: false, label: 'Texnologiyalar uyğundur', detail: skippedAll },
        { id: 'pushed', ok: null, required: false, label: 'Son dəyişiklik', detail: skippedAll }
    ];
    const result = (items) => ({ checkedAt: Date.now(), repo: url, items, passed: items.filter((i) => i.required).every((i) => i.ok === true) });

    if (!parsed) {
        return result([{ id: 'repo', ok: false, required: true, label: repoLabel, detail: 'Ünvan GitHub reposu deyil: https://github.com/istifadəçi/repo formatında yaz.' }, ...pending]);
    }
    const base = `/repos/${encodeURIComponent(parsed.owner)}/${encodeURIComponent(parsed.repo)}`;
    const repo = await get(base);
    if (!repo) {
        return result([{ id: 'repo', ok: false, required: true, label: repoLabel, detail: 'Repo tapılmadı: ünvanı və reponun açıq olduğunu yoxla.' }, ...pending]);
    }

    const [readme, languages] = await Promise.all([get(`${base}/readme`), get(`${base}/languages`)]);
    const langCount = Object.keys(languages || {}).length;
    const pushedGap = Date.parse(repo.pushed_at) - Date.parse(repo.created_at);
    const hasCode = repo.size > 0 || langCount > 0 || pushedGap > 60 * 1000;

    const items = [
        repo.private
            ? { id: 'repo', ok: false, required: true, label: repoLabel, detail: 'Repo gizlidir: GitHub-da Settings bölməsində onu açıq (public) et.' }
            : { id: 'repo', ok: true, required: true, label: repoLabel, detail: `${repo.full_name} hamıya açıqdır.` },
        readme
            ? { id: 'readme', ok: true, required: true, label: 'README var', detail: `${readme.name || 'README'} faylı tapıldı.` }
            : { id: 'readme', ok: false, required: true, label: 'README var', detail: 'README yoxdur: layihənin nə etdiyini və necə işə salındığını README.md faylında yaz.' },
        hasCode
            ? { id: 'code', ok: true, required: true, label: 'Kod var', detail: repo.size > 0 ? `Repoda təxminən ${repo.size} KB fayl var.` : 'Repoya kod yüklənib.' }
            : { id: 'code', ok: false, required: true, label: 'Kod var', detail: 'Repo boşdur: kodunu GitHub-a yüklə (git push) və yenidən yoxla.' },
        techItem(project.tech || [], languages),
        { id: 'pushed', ok: null, required: false, info: true, label: 'Son dəyişiklik', detail: repo.pushed_at ? `${formatDate(repo.pushed_at)} tarixində.` : 'Tarix məlum deyil.' }
    ];
    return result(items);
};

// ---- In-page state of a running check (not stored): loading and the last error, per project ----

const runs = new Map();
const key = (sub, id) => `${sub}#${id}`;
export const checkRun = (sub, id) => runs.get(key(sub, id)) || {};
export const checkButtonId = (sub, id) => `check-${sub}-${id}`.replace(/[^\w-]/g, '');

const refocus = (id) => document.getElementById(id)?.focus({ preventScroll: true });

window.checkProjectRepo = async (sub, id) => {
    const k = key(sub, id);
    if (runs.get(k)?.loading) return;
    const btn = checkButtonId(sub, id);
    const { repo } = projectState(sub, id);
    if (!isRepoUrl(repo)) {
        runs.set(k, { error: 'Repo linki yoxdur: əvvəlcə GitHub linkini yadda saxla, sonra yoxla.' });
        requestRender();
        return;
    }
    const project = projectsOf(sub).find((p) => String(p.id) === String(id)) || {};
    runs.set(k, { loading: true });
    requestRender();
    refocus(btn);
    try {
        const result = await checkRepo(repo, project);
        runs.delete(k);
        setProject(sub, id, { check: result });
        showToast(result.passed ? 'Avtomatik yoxlama keçdi.' : 'Yoxlama bitdi: keçməyən bəndləri düzəlt və yenidən yoxla.', result.passed ? 'success' : 'info');
    } catch (err) {
        runs.set(k, { error: err instanceof CheckError ? err.message : 'Yoxlama alınmadı: bir az sonra yenidən cəhd et.' });
    }
    requestRender();
    refocus(btn);
};

// Mentor check: remember the request, open the community in a new tab. Whether a mentor answers stays in WhatsApp.
// The mentor's decision for a repository, from the API: { status: 'open' | 'done' | 'declined', note, mentor, at }.
const lookedUp = new Set();
export const refreshReview = async (sub, id, { quiet = false } = {}) => {
    const st = projectState(sub, id);
    if (!st.repo) return;
    lookedUp.add(`${sub}#${id}#${st.repo}`);
    const r = await apiCall(`/api/requests?repo=${encodeURIComponent(st.repo)}`);
    if (!r.ok) { if (!quiet) showToast('Rəyi indi yoxlamaq alınmadı. Bir az sonra yenidən cəhd et.', 'info'); return; }
    const latest = r.items.find((x) => x.kind === 'review');
    if (latest) setProject(sub, id, { reviewResult: { status: latest.status, note: latest.note || '', mentor: latest.mentor || '', at: latest.closedAt || latest.createdAt } });
    if (!quiet) showToast(latest && latest.status !== 'open' ? 'Mentor rəyi gəldi.' : 'Mentor hələ baxmayıb.', 'info');
    requestRender();
};
// Once per visit, a requested review looks its decision up by itself.
export const autoRefreshReview = (sub, id) => {
    const st = projectState(sub, id);
    if (st.review === 'requested' && st.repo && st.reviewResult?.status !== 'done' && !lookedUp.has(`${sub}#${id}#${st.repo}`)) refreshReview(sub, id, { quiet: true });
};
window.refreshReview = (sub, id) => refreshReview(sub, id);

window.requestProjectReview = (sub, id) => {
    setProject(sub, id, { review: 'requested', reviewAt: Date.now(), reviewResult: null });
    // Mentors get the request in their list (best effort); the WhatsApp conversation stays the main channel.
    const st = projectState(sub, id);
    // A fresh request: do not look the decision up right away (an earlier decision could answer before this request
    // is saved). "Rəyi yoxla" and the next visit look it up.
    lookedUp.add(`${sub}#${id}#${st.repo}`);
    const project = projectsOf(sub).find((p) => p.id === id);
    if (st.repo) sendRequest({ kind: 'review', path: sub, project: project?.title?.az || project?.title?.en || String(project?.title || ''), repo: st.repo });
    window.open(azedevBrand.urls.whatsapp, '_blank', 'noopener,noreferrer');
    requestRender();
};
