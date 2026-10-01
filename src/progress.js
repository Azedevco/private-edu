// AZEDEV Learn - the learner's progress, kept on this device (localStorage; there are no accounts).
// The learning loop: a path (a direction such as Frontend) has stages; each stage is learnt, practised and completed;
// quizzes, challenges and projects add to it. Everything the UI shows about progress is computed here from what the
// learner actually did: nothing is estimated or invented.
import { categories, contentData } from './data.js'
import { quizzesData, codingChallengesData } from './azedev-data.js'
import { getLocalizedContent } from './core.js'
import { levelAz } from './plain.js'

const KEY = 'azedev_progress_v1';
const empty = () => ({ v: 1, stages: {}, items: {}, quizzes: {}, challenges: {}, projects: {}, touched: {}, days: [] });

let cache = null;
const load = () => {
    if (cache) return cache;
    try {
        cache = { ...empty(), ...JSON.parse(localStorage.getItem(KEY) || '{}') };
    } catch {
        cache = empty();
    }
    return cache;
};
const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch { /* storage full or blocked: progress lives for this visit */ }
    // Tell the sync layer (src/sync.js) that there is something new to back up.
    window.dispatchEvent(new CustomEvent('azedev:progress'));
};
const today = () => new Date().toISOString().slice(0, 10);
const touch = (sub) => {
    const p = load();
    if (sub) p.touched[sub] = Date.now();
    const d = today();
    if (!p.days.includes(d)) p.days.push(d);
};

// ---- Paths, stages and projects from the content data ----

export const categoryOfSub = (sub) => categories.find((c) => c.subCategories.some((s) => s.id === sub));
export const subTitle = (sub) => {
    const cat = categoryOfSub(sub);
    return getLocalizedContent(cat?.subCategories.find((s) => s.id === sub)?.title) || sub;
};
// Stages of a path in the page language (the arrays are aligned across languages, so an index names the same stage).
export const stagesOf = (sub, lang) => {
    const r = contentData[sub]?.roadmap || {};
    return r[lang] || r.az || r.en || [];
};
export const projectsOf = (sub) => contentData[sub]?.projects || contentData[sub]?.devops_projects || [];
export const allProjects = () => Object.keys(contentData).flatMap((sub) => projectsOf(sub).map((project) => ({ sub, cat: categoryOfSub(sub)?.id, project })));

// ---- Stages ----

export const isStageDone = (sub, i) => Boolean(load().stages[`${sub}#${i}`]);
export const setStageDone = (sub, i, done = true) => {
    const p = load();
    if (done) p.stages[`${sub}#${i}`] = Date.now(); else delete p.stages[`${sub}#${i}`];
    touch(sub);
    save();
};
export const toggleStage = (sub, i) => setStageDone(sub, i, !isStageDone(sub, i));

// ---- Items inside a lesson ("öyrəndim" ticks): small steps that show progress before the whole lesson is done ----

export const isItemDone = (sub, stage, i) => Boolean(load().items[`${sub}#${stage}#${i}`]);
export const toggleItem = (sub, stage, i) => {
    const p = load();
    const key = `${sub}#${stage}#${i}`;
    if (p.items[key]) delete p.items[key]; else p.items[key] = Date.now();
    touch(sub);
    save();
};
export const itemsDone = (sub, stage, count) => {
    let n = 0;
    for (let i = 0; i < count; i++) if (isItemDone(sub, stage, i)) n++;
    return n;
};

// A path's progress: done / total stages, the first stage not done yet (the current one), and whether it was started.
export const trackProgress = (sub, lang) => {
    const total = stagesOf(sub, lang).length;
    let done = 0;
    let next = -1;
    for (let i = 0; i < total; i++) {
        if (isStageDone(sub, i)) done++;
        else if (next < 0) next = i;
    }
    return { sub, cat: categoryOfSub(sub)?.id, total, done, pct: total ? Math.round((done / total) * 100) : 0, next, started: done > 0 || Boolean(load().touched[sub]) };
};

// Paths the learner has worked on, most recent first.
export const startedTracks = (lang) => Object.entries(load().touched)
    .sort((a, b) => b[1] - a[1])
    .map(([sub]) => trackProgress(sub, lang))
    .filter((t) => t.total && t.cat);

// The path to continue: the most recently touched one, else the last roadmap page visited.
export const currentTrack = (lang) => {
    const [first] = startedTracks(lang);
    if (first) return first;
    try {
        const last = JSON.parse(localStorage.getItem('azedev_last_track') || 'null');
        if (last?.sub && contentData[last.sub]) return trackProgress(last.sub, lang);
    } catch { /* no last track */ }
    return null;
};

// Opening a path's page counts as starting it (it then shows up in "continue").
export const touchTrack = (sub) => { touch(sub); save(); };

// ---- Practice ----

export const recordQuiz = (id, score, total) => {
    const p = load();
    const prev = p.quizzes[id];
    p.quizzes[id] = { score, total, best: Math.max(score, prev?.best || 0), at: Date.now(), attempts: (prev?.attempts || 0) + 1 };
    touch();
    save();
};
export const quizResult = (id) => load().quizzes[id] || null;

export const isChallengeSolved = (id) => Boolean(load().challenges[id]);
export const setChallengeSolved = (id, solved = true) => {
    const p = load();
    if (solved) p.challenges[id] = Date.now(); else delete p.challenges[id];
    touch();
    save();
};

// ---- Projects: status 'started' | 'done', plus the learner's own GitHub repository ----

const pKey = (sub, id) => `${sub}#${id}`;
export const projectState = (sub, id) => load().projects[pKey(sub, id)] || { status: '', repo: '' };
export const setProject = (sub, id, patch) => {
    const p = load();
    const next = { ...projectState(sub, id), ...patch, at: Date.now() };
    if (!next.status && !next.repo) delete p.projects[pKey(sub, id)]; else p.projects[pKey(sub, id)] = next;
    touch(sub);
    save();
};
// Only GitHub repository URLs are accepted as a project's repo.
export const isRepoUrl = (url) => /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/.test(String(url || '').trim());

// ---- Summary and next steps ----

export const hasProgress = () => {
    const p = load();
    return Object.keys(p.stages).length + Object.keys(p.quizzes).length + Object.keys(p.challenges).length + Object.keys(p.projects).length + Object.keys(p.touched).length > 0;
};

export const summary = (lang) => {
    const p = load();
    const projects = Object.entries(p.projects).map(([key, v]) => {
        const [sub, id] = key.split('#');
        return { sub, project: projectsOf(sub).find((x) => String(x.id) === id), ...v };
    }).filter((x) => x.project);
    const quizzes = Object.entries(p.quizzes);
    // Skills: the technologies of finished projects and the titles of completed stages.
    const skills = new Set();
    projects.filter((x) => x.status === 'done').forEach((x) => (x.project.tech || []).forEach((tag) => skills.add(tag)));
    Object.keys(p.stages).forEach((key) => {
        const [sub, i] = key.split('#');
        const stage = stagesOf(sub, lang)[Number(i)];
        if (stage) skills.add(stage.title);
    });
    return {
        tracks: startedTracks(lang),
        stagesDone: Object.keys(p.stages).length,
        quizzesTaken: quizzes.length,
        quizzesTotal: quizzesData.length,
        quizScore: quizzes.reduce((n, [, q]) => n + q.best, 0),
        quizMax: quizzes.reduce((n, [, q]) => n + q.total, 0),
        challengesSolved: Object.keys(p.challenges).length,
        challengesTotal: codingChallengesData.length,
        projects,
        projectsDone: projects.filter((x) => x.status === 'done').length,
        activeDays: p.days.length,
        skills: [...skills]
    };
};

/**
 * The next right steps, most useful first. Each: { kind, title, meta, go, icon }.
 * With no progress it suggests where to start instead.
 */
export const recommendations = (lang, limit = 3) => {
    const out = [];
    const track = currentTrack(lang);
    if (track && track.next >= 0) {
        const stage = stagesOf(track.sub, lang)[track.next];
        out.push({ kind: 'stage', icon: 'map', title: stage.title, meta: `${subTitle(track.sub)} · dərs ${track.next + 1} / ${track.total}`, go: `window.openTopic('${track.cat}', '${track.sub}', ${track.next})` });
    }
    const quiz = quizzesData.find((q) => !quizResult(q.id));
    if (quiz) out.push({ kind: 'quiz', icon: 'list-checks', title: quiz.title, meta: `Test · ${quiz.questions.length} sual`, go: `window.navigateTo('quizzes'); window.switchQuiz('${quiz.id}')` });
    const challenge = codingChallengesData.find((c) => !isChallengeSolved(c.id));
    if (challenge) out.push({ kind: 'challenge', icon: 'square-terminal', title: challenge.title, meta: `Kod tapşırığı · ${levelAz(challenge.difficulty)}`, go: `window.navigateTo('challenges'); window.selectChallenge('${challenge.id}')` });
    if (track && track.done >= 2) {
        const project = projectsOf(track.sub).find((x) => !projectState(track.sub, x.id).status);
        if (project) out.splice(1, 0, { kind: 'project', icon: 'hammer', title: getLocalizedContent(project.title), meta: `Layihə · ${subTitle(track.sub)} · ${levelAz(project.level)}`, go: `window.navigateTo('projects')` });
    }
    if (!track) {
        ['frontend', 'backend', 'data-science'].forEach((sub) => {
            const cat = categoryOfSub(sub);
            out.unshift({ kind: 'start', icon: 'map', title: subTitle(sub), meta: `${getLocalizedContent(cat.title)} · ${stagesOf(sub, lang).length} dərs`, go: `window.navigateToCategory('${cat.id}', '${sub}', 'roadmap')` });
        });
    }
    return out.slice(0, limit);
};

export const exportProgress = () => JSON.stringify(load(), null, 2);
export const progressSnapshot = () => JSON.parse(JSON.stringify(load()));

// Merge two progress records without losing work from either device: completed items are united (earliest time kept),
// quiz results keep the best score, projects keep the most recent change, active days are united.
export const mergeProgress = (a = {}, b = {}) => {
    const x = { ...empty(), ...a };
    const y = { ...empty(), ...b };
    const unionTimes = (p, q) => {
        const out = { ...p };
        for (const [k, v] of Object.entries(q)) out[k] = out[k] ? Math.min(out[k], v) : v;
        return out;
    };
    const quizzes = { ...x.quizzes };
    for (const [id, r] of Object.entries(y.quizzes)) {
        const l = quizzes[id];
        quizzes[id] = !l ? r : { ...(r.at > l.at ? r : l), best: Math.max(l.best || 0, r.best || 0), attempts: Math.max(l.attempts || 0, r.attempts || 0) };
    }
    const projects = { ...x.projects };
    for (const [k, v] of Object.entries(y.projects)) if (!projects[k] || (v.at || 0) > (projects[k].at || 0)) projects[k] = v;
    const touched = { ...x.touched };
    for (const [k, v] of Object.entries(y.touched)) touched[k] = Math.max(touched[k] || 0, v);
    return {
        v: 1,
        stages: unionTimes(x.stages, y.stages),
        items: unionTimes(x.items || {}, y.items || {}),
        challenges: unionTimes(x.challenges, y.challenges),
        quizzes,
        projects,
        touched,
        days: [...new Set([...x.days, ...y.days])].sort()
    };
};

// Replace this device's progress (after a merge with the cloud copy). Does not announce a change: nothing new to upload.
export const replaceProgress = (data) => {
    cache = { ...empty(), ...data };
    try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch { /* ignore */ }
};
export const resetProgress = () => {
    cache = empty();
    save();
};
