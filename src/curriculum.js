// AZEDEV Learn - the study plan: for every lesson of a path, which materials to use, in what order and why now.
// src/curriculum.json is built from the checked material pool (HTTP/oEmbed check, then a manual review) and names
// materials by URL; they resolve to the path's resource items in data.js. Materials no plan names stay hidden.
import plan from './curriculum.json' with { type: 'json' }
import { contentData } from './data.js'

// What the learner does with a material, as the verb on its step.
export const DO = {
    watch: 'İzlə',
    read: 'Oxu',
    practice: 'Məşq et',
    build: 'Qur',
    reference: 'Açıq saxla'
};

const key = (url) => String(url || '').replace(/\/$/, '');
const index = new Map();
const find = (sub, url) => {
    if (!index.has(sub)) index.set(sub, new Map((contentData[sub]?.resources?.items || []).map((r) => [key(r.url), r])));
    return index.get(sub).get(key(url)) || null;
};

// One lesson's steps in order: [{ res, do, verb, note, alt: [res] }]. Empty when the path has no plan.
// prefer: the learner's content language; when a step has a variant in it, that variant leads and the original
// becomes the alternative (the note still describes the step, which both materials teach).
export const lessonPlan = (sub, idx, prefer = '') => ((plan.paths[sub]?.lessons || [])[idx] || [])
    .map((step) => {
        const res = find(sub, step.url);
        let alt = (step.alt || []).map((url) => find(sub, url)).filter(Boolean);
        let main = res;
        const own = prefer && res?.lang !== prefer ? alt.find((a) => a.lang === prefer) : null;
        if (own) { main = own; alt = [res, ...alt.filter((a) => a !== own)]; }
        return { res: main, do: step.do, verb: DO[step.do] || 'Aç', note: own ? (typeof own.desc === 'string' ? own.desc : '') : step.note || '', alt };
    })
    .filter((step) => step.res);

// The whole path: lessons (each a list of steps), then tools and "for later", or null without a plan.
export const pathPlan = (sub, prefer = '') => {
    const p = plan.paths[sub];
    if (!p) return null;
    const list = (urls) => (urls || []).map((url) => find(sub, url)).filter(Boolean);
    return { lessons: p.lessons.map((_, i) => lessonPlan(sub, i, prefer)), tools: list(p.tools), more: list(p.more) };
};

// How many different materials the plan uses (the Materiallar tab count).
export const planSize = (sub) => {
    const p = pathPlan(sub);
    if (!p) return 0;
    const urls = new Set();
    p.lessons.flat().forEach((s) => { urls.add(key(s.res.url)); s.alt.forEach((a) => urls.add(key(a.url))); });
    [...p.tools, ...p.more].forEach((r) => urls.add(key(r.url)));
    return urls.size;
};

// One full video course per language for the whole path (English, Turkish, Russian; Azerbaijani when one exists).
const VIDEO_ORDER = ['az', 'tr', 'ru', 'en'];
export const pathVideos = (sub) => {
    const v = plan.paths[sub]?.videos || {};
    return VIDEO_ORDER.filter((lang) => v[lang]).map((lang) => ({ lang, res: find(sub, v[lang]) })).filter((x) => x.res);
};
