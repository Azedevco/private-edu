// AZEDEV Learn - the Russian site. When the learner picks Russian, the whole screen is Russian:
// - interface texts, study-plan notes and material descriptions: each text node (and aria-label/placeholder/title/alt)
//   whose exact text has a translation is replaced after every render; numbers are kept ({n} in the dictionary);
// - leftovers built from pieces of source text are translated piece by piece (longest first);
// - tests and cheat sheets have their own Russian data (ru-quizzes / ru-topics / ru-sheets).
// Everything is loaded only when Russian is chosen. No imports on purpose: core.js, main.js and pages use this module.
let ui = null;
let quizzes = null;
let topics = null;
let sheets = null;
let loading = null;

export const ruLoaded = () => Boolean(ui);
export const loadRu = () => {
    if (!loading) {
        loading = Promise.all([
            import('./i18n/ru-ui.json'), import('./i18n/ru-quizzes.json'), import('./i18n/ru-topics.json'), import('./i18n/ru-sheets.json')
        ]).then(([u, q, t, s]) => {
            ui = u.default;
            quizzes = q.default;
            topics = t.default;
            sheets = s.default;
            ui.chunkList = [...(ui.chunks || [])].filter((c) => ui.exact[c] && ui.exact[c] !== c).sort((a, b) => b.length - a.length);
            ui.patternList = (ui.patterns || []).map(([from, to]) => [new RegExp(`^${from.replace(/[.*+?^$()|[\]\\]/g, '\\$&').replace(/\{x\}/g, '(.+?)')}$`), (() => { let i = 0; return to.replace(/\{x\}/g, () => `{${i++}}`); })()]);
            window.__azRender?.();
        }).catch(() => { loading = null; });
    }
    return loading;
};

export const ruQuizzes = () => quizzes;
export const ruTopic = (id) => (topics || []).find((t) => t.id === id) || null;
export const ruSheet = (id) => (sheets || []).find((s) => s.id === id) || null;

const AZ_LETTERS = /[əğışçöüƏĞİŞÇÖÜ]/;

// One text: exact (with numbers put back), else piece by piece for texts that still look Azerbaijani.
export const ruText = (raw) => {
    if (!ui || !raw) return raw;
    const lead = raw.match(/^\s*/)[0];
    const tail = raw.match(/\s*$/)[0];
    const text = raw.replace(/\s+/g, ' ').trim();
    if (!text) return raw;
    const nums = text.match(/\d+/g) || [];
    const hit = ui.exact[text.replace(/\d+/g, '{n}')];
    if (hit) {
        let i = 0;
        return lead + hit.replace(/\{n\}/g, () => nums[i++] ?? '') + tail;
    }
    if (!AZ_LETTERS.test(text)) return raw;
    // "Oxu · Kitab · Rusca": each part on its own; "{x} bölmələri": templates with a translated name inside.
    if (text.includes(' · ')) {
        const parts = text.split(' · ').map((x) => ruText(x));
        return lead + parts.join(' · ') + tail;
    }
    for (const [re, to] of ui.patternList) {
        const m = text.match(re);
        if (m) return lead + to.replace(/\{(\d)\}/g, (_, i) => ruText(m[Number(i) + 1])) + tail;
    }
    // Piece by piece only for Azerbaijani (ə), never inside Turkish titles of materials; whole words only.
    if (!/[əƏ]/.test(text)) return raw;
    let out = text;
    for (const piece of ui.chunkList) {
        if (piece.includes('{n}') || !out.includes(piece)) continue;
        out = out.replace(new RegExp(`(?<![\\p{L}\\p{N}])${piece.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}])`, 'gu'), () => ui.exact[piece]);
        if (!AZ_LETTERS.test(out)) break;
    }
    return out === text ? raw : lead + out + tail;
};

// Translate everything rendered under root (text nodes and the attributes people read or hear).
export const translateTree = (root) => {
    if (!ui || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: (n) => (n.parentElement && !n.parentElement.closest('script,style,pre,code,[translate="no"],[data-no-ru]') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT)
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
        const v = ruText(n.nodeValue);
        if (v !== n.nodeValue) n.nodeValue = v;
    }
    root.querySelectorAll('[aria-label],[placeholder],[title],[alt]').forEach((el) => {
        if (el.closest('[data-no-ru]')) return;
        for (const a of ['aria-label', 'placeholder', 'title', 'alt']) {
            const v = el.getAttribute(a);
            if (v) { const t = ruText(v); if (t !== v) el.setAttribute(a, t); }
        }
    });
};

// Parts drawn after the main render (toasts, lists filled later, modals) are translated as they appear.
let observer = null;
export const watchRu = (on) => {
    if (!on) { observer?.disconnect(); observer = null; return; }
    if (observer || !ui || typeof MutationObserver === 'undefined') return;
    observer = new MutationObserver((list) => {
        for (const m of list) for (const n of m.addedNodes) {
            if (n.nodeType === 1) translateTree(n);
            else if (n.nodeType === 3 && n.parentElement && !n.parentElement.closest('script,style,pre,code,[translate="no"],[data-no-ru]')) { const v = ruText(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
};
