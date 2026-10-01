// AZEDEV Learn - Learn → paths, written for a first-time learner on a phone (plain words, one primary per screen):
// RoadmapsPage (every path, beginner picks first), CategoryDetail (one path: progress, the lesson stepper, materials,
// practice, projects) and TopicPage (one lesson: what you will learn, materials, check yourself, finish and go on).
import { categories, contentData } from '../data.js'
import { state, t, getLocalizedContent } from '../core.js'
import { Page, SupportNote } from '../shell.js'
import { icon } from '../icons.js'
import {
    Button, Status, Badge, Chips, EmptyState, esc, ExternalLink, newTabNote,
    PageTitle, Tabs, LearnTabs, TextLink, Section, AreaTile, ResourceCard, PathCard, ProgressLine
} from '../ui.js'
import { trackProgress, isStageDone, stagesOf, isItemDone, itemsDone, categoryOfSub, quizResult } from '../progress.js'
import { Hint, Term, isBeginner } from '../onboarding.js'
import { plainPath, STARTER_PATHS, levelAz } from '../plain.js'
import { lessonPlan, pathPlan, planSize, pathVideos } from '../curriculum.js'
import { hasLessonQuiz, hasFinalQuiz, lessonQuizId, finalQuizId, finalSize } from '../quizzes.js'
import { CertificateRequest } from '../certificates.js'

const L = getLocalizedContent;
const pad = (n) => String(n).padStart(2, '0');

// Lesson levels from the data on the status colours: start = live, mid = beta, later = dev (neutral).
const STAGE = {
    start: { kind: 'live', label: 'Başlanğıc' },
    mid: { kind: 'beta', label: 'Orta' },
    advanced: { kind: 'dev', label: 'Çətin' },
    expert: { kind: 'dev', label: 'Çətin' }
};

// Material types: a Lucide icon, a word, and the verb on its button.
const RESOURCE_TYPE = {
    youtube: { icon: 'circle-play', label: 'Video', verb: 'İzlə' },
    course: { icon: 'graduation-cap', label: 'Kurs', verb: 'Kursa keç' },
    doc: { icon: 'file-text', label: 'Təlimat', verb: 'Oxu' },
    tool: { icon: 'wrench', label: 'Alət', verb: 'Aç' },
    roadmap: { icon: 'map', label: 'Öyrənmə yolu', verb: 'Aç' },
    site: { icon: 'globe', label: 'Sayt', verb: 'Aç' },
    book: { icon: 'book-open', label: 'Kitab', verb: 'Oxu' },
    article: { icon: 'file-text', label: 'Məqalə', verb: 'Oxu' },
    interactive: { icon: 'square-terminal', label: 'İnteraktiv', verb: 'Başla' }
};
const typeOf = (res) => RESOURCE_TYPE[res.type] || { icon: 'link', label: 'Keçid', verb: 'Aç' };

// Material language in words, not codes.
const LANG = { az: 'Azərbaycanca', tr: 'Türkcə', en: 'İngiliscə', ru: 'Rusca' };
const langWord = (code) => LANG[String(code || '').toLowerCase()] || '';

const MARKETS = [
    { id: 'AZ', label: 'Azərbaycan' },
    { id: 'TR', label: 'Türkiyə' },
    { id: 'GLOBAL', label: 'Qlobal, uzaqdan iş' }
];

// "Niyə bu material?" is shown only when the material shares a word with the lesson (its title or its items).
const STOP_WORDS = new Set(['və', 'ilə', 'üçün', 'nədir', 'necə', 'əsasları', 'əsaslar', 'giriş', 'the', 'and', 'for', 'with', 'what', 'how', 'basics', 'fundamentals', 'intro', 'introduction', 've', 'ile', 'için', 'nedir', 'nasıl', 'temelleri']);
const words = (text) => String(text || '').toLowerCase().split(/[^\p{L}\p{N}#+]+/u).filter((w) => w.length >= 3 && !STOP_WORDS.has(w));
const matchTopic = (stage, text) => {
    const set = new Set(words(text));
    if (!set.size || !stage) return null;
    for (const topic of [...(stage.items || []), stage.title]) {
        if (words(topic).some((w) => set.has(w))) return topic;
    }
    return null;
};

// Lesson state as a word with an icon, never colour alone: finished, the one to do now, later.
const STATE = {
    done: { icon: 'circle-check', word: 'Bitib', cls: 'text-status-live' },
    current: { icon: 'circle-dot', word: 'İndiki', cls: 'text-text' },
    next: { icon: 'circle', word: 'Növbəti', cls: 'text-text-mute' }
};
const StateWord = (st) => `<span class="inline-flex items-center gap-1.5"><span class="${STATE[st].cls}">${icon(STATE[st].icon, 'size-3.5')}</span><span class="${st === 'next' ? 'text-text-mute' : 'text-text-soft'}">${STATE[st].word}</span></span>`;

// A test as one ruled row: what it is, how many questions, the best result so far, and one action.
const QuizRow = (id, title, count) => {
    const result = quizResult(id);
    return `<ul class="ln-rows">${ResourceCard({
        tag: 'li',
        title,
        icon: 'list-checks',
        meta: [`${count} sual`, result ? `Ən yaxşı nəticə: ${result.best} / ${result.total}` : 'Hələ keçilməyib'],
        onclick: `window.openQuiz('${id}')`,
        action: result ? 'Yenidən keç' : 'Testə başla'
    })}</ul>`;
};

// --- The study plan (curriculum.js): each lesson's materials in order, each with what to do and why now. ---
const hostOf = (url) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return ''; } };
const StepNumber = (n) => `<span class="ln-num w-6 shrink-0 pt-0.5" aria-hidden="true">${n}</span>`;
// The same material in another language, as quiet links: "Türkcə: Python 3 Dersleri".
const AltLinks = (alt) => alt.length ? `
    <p class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">${alt.map((a) => `<span class="text-text-mute">${langWord(a.lang) || 'Başqa dildə'}:</span>${ExternalLink(esc(a.title), a.url)}`).join('')}</p>` : '';

// Lesson page: one ruled row per step: the number, the verb (İzlə, Oxu, Məşq et), the material as a link, its note.
const PlanStep = (step, n) => {
    const res = step.res;
    const type = typeOf(res);
    const host = hostOf(res.url);
    return `
    <li class="flex gap-3 py-5">
        ${StepNumber(n)}
        <div class="min-w-0 flex-1">
            <p class="text-[13px] font-medium text-text-soft"><span class="sr-only">Addım ${n}: </span>${step.verb}</p>
            <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="group mt-1 flex items-start justify-between gap-3 py-1">
                <span class="min-w-0">
                    <span class="ln-row__title t-item block">${esc(res.title)}</span>
                    <span class="t-small mt-1 block">${[type.label, langWord(res.lang), res.source ? `<span translate="no">${esc(res.source)}</span>` : '', host ? `<span translate="no">${esc(host)}</span>` : ''].filter(Boolean).join(' · ')}</span>
                </span>
                <span class="inline-flex shrink-0 items-center gap-1 text-[14px] font-medium text-text-soft transition-colors group-hover:text-text">${type.verb}${icon('arrow-up-right', 'size-4')}</span>
                ${newTabNote()}
            </a>
            ${step.note ? `<p class="mt-2 text-[15px] leading-relaxed text-text-soft">${esc(step.note)}</p>` : ''}
            ${AltLinks(step.alt)}
        </div>
    </li>`;
};

// Path Materiallar tab: one compact row per step under its lesson; the whole row opens the material.
const PlanRow = (step, n) => {
    const type = typeOf(step.res);
    return `
    <li>
        <a href="${step.res.url}" target="_blank" rel="noopener noreferrer" class="group flex min-h-14 items-start gap-3 py-3.5">
            ${StepNumber(n)}
            <span class="min-w-0 flex-1">
                <span class="ln-row__title block text-[15px] leading-snug text-text">${esc(step.res.title)}</span>
                <span class="mt-0.5 block text-[13px] text-text-mute">${[step.verb, type.label, langWord(step.res.lang)].filter(Boolean).join(' · ')}</span>
            </span>
            <span class="shrink-0 pt-0.5 text-text-mute transition-colors group-hover:text-text">${icon('arrow-up-right', 'size-4')}</span>
            ${newTabNote()}
        </a>
    </li>`;
};

// Kept for links elsewhere: switch a path tab and bring the tabs back into view.
window.goToLifecycleTab = (tab, scroll = true) => {
    window.switchTab(tab);
    if (scroll) document.getElementById('path-tabs')?.scrollIntoView({ block: 'start' });
};

// Path picker by value "categoryId|subId", keeping the open tab.
window.jumpToTrack = (value) => {
    const [catId, subId] = String(value).split('|');
    window.navigateToCategory(catId, subId, state.currentTab);
};

// Questions as native disclosures on ruled lines: tap a question to see the answer.
const QuestionList = (items) => `
    <div class="border-t border-line">
        ${items.map((item) => `
        <details class="group border-b border-line">
            <summary class="flex min-h-14 cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
                <span class="t-item flex-1">${esc(L(item.q))}</span>
                <span class="text-text-mute transition-transform duration-300 group-open:rotate-45">${icon('plus')}</span>
            </summary>
            <p class="t-body max-w-[48rem] pb-5 pr-8">${esc(L(item.a))}</p>
        </details>`).join('')}
    </div>`;

// The site's own practice: short tests first, code tasks for those who already write code.
const MorePractice = () => `
    <ul class="ln-rows">
        ${ResourceCard({ tag: 'li', title: 'Testlər', meta: ['Qısa suallarla özünü yoxla'], icon: 'list-checks', onclick: "window.navigateTo('quizzes')", action: 'Aç' })}
        ${ResourceCard({ tag: 'li', title: 'Kod tapşırıqları', meta: ['Kod yazmağı bilənlər üçün'], icon: 'square-terminal', onclick: "window.navigateTo('challenges')", action: 'Aç' })}
    </ul>`;

// A path card for a sub id, with its own progress. The card leads with what the learner wants to do.
const pathCardFor = (cat, sub) => {
    const prog = trackProgress(sub.id, state.lang);
    return PathCard({
        catId: cat.id,
        sub: sub.id,
        name: esc(L(sub.title)),
        area: esc(L(cat.title)),
        total: prog.total,
        done: prog.done,
        onclick: `window.navigateToCategory('${cat.id}', '${sub.id}', 'roadmap')`
    });
};

// --- Öyrən → Yollar: beginner picks first, then every path grouped by area. ---
export const RoadmapsPage = () => {
    const beginner = isBeginner();
    const starters = STARTER_PATHS.map((id) => {
        const cat = categoryOfSub(id);
        const sub = cat && cat.subCategories.find((s) => s.id === id);
        return cat && sub ? `<li>${pathCardFor(cat, sub)}</li>` : '';
    }).join('');
    return Page(`
    ${PageTitle({
        title: 'Öyrən',
        description: `${Term('yol', 'Öyrənmə yolu')} dərsləri hansı ardıcıllıqla keçəcəyini göstərir. Sənə maraqlı olan yolu seç.`,
        tabs: LearnTabs('roadmaps')
    })}
    ${Hint('learn')}
    ${beginner ? Section({
        id: 'starter-paths',
        title: 'Yeni başlayanlar üçün',
        note: 'Heç bir ilkin bilik lazım deyil',
        body: `<ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">${starters}</ul>`
    }) : ''}
    ${beginner ? '<h2 class="t-label mt-12 sm:mt-16">Bütün sahələr</h2>' : ''}
    ${categories.map((cat) => Section({
        id: `area-${cat.id}`,
        title: `<span class="flex items-center gap-3">${AreaTile(cat.id, 'size-8')}<span>${esc(L(cat.title))}</span></span>`,
        note: `${cat.subCategories.length} yol`,
        body: `
        <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            ${cat.subCategories.map((sub) => `<li>${pathCardFor(cat, sub)}</li>`).join('')}
        </ul>`
    })).join('')}
    `);
};

// --- A path: what it is, one primary (Başla / Dərsi davam et), progress, then its tabs. ---
export const CategoryDetail = () => {
    const cat = categories.find((c) => c.id === state.currentCategory) || categories[0];
    const sub = (cat && cat.subCategories.find((s) => s.id === state.currentSubCategory)) || (cat && cat.subCategories[0]);
    if (!cat || !sub) {
        return Page(EmptyState('Yol seç', 'Öyrən bölməsindən bir yol seç.', Button('Yollara keç', { onclick: "window.navigateTo('roadmaps')", icon: 'arrow-right' })));
    }

    const data = contentData[sub.id] || {};
    const pathName = L(sub.title);
    const plain = plainPath(sub.id);
    const steps = stagesOf(sub.id, state.lang);
    const resources = (data.resources && data.resources.items) || [];
    const questions = data.interview || [];
    const projects = data.projects || data.devops_projects || [];
    const faq = data.faq || [];
    const jobs = data.jobs || {};
    const markets = MARKETS.filter((m) => jobs[m.id]);
    const prog = trackProgress(sub.id, state.lang);
    const plan = pathPlan(sub.id, state.lang);
    const materialCount = plan ? planSize(sub.id) : resources.length;

    // Short tabs in plain words. Karyera and Suallar appear only when beginner mode is off.
    const beginner = isBeginner();
    const TABS = [
        { id: 'roadmap', label: 'Dərslər', count: steps.length, show: steps.length > 0 },
        { id: 'resources', label: 'Materiallar', count: materialCount, show: materialCount > 0 },
        { id: 'interview', label: 'Məşq', show: true },
        { id: 'projects', label: 'Layihələr', count: projects.length, show: projects.length > 0 },
        { id: 'jobs', label: 'Karyera', show: !beginner && markets.length > 0 },
        { id: 'faq', label: 'Suallar', count: faq.length, show: !beginner && faq.length > 0 }
    ].filter((x) => x.show);
    const tab = TABS.some((x) => x.id === state.currentTab) ? state.currentTab : TABS[0].id;

    const soon = (text) => EmptyState(t('comingSoon'), text, Button(t('nav.upload'), { onclick: 'window.openUploadModal()', icon: 'upload' }));

    // Dərslər: the vertical stepper. Bitib (check), İndiki (the first not finished), Növbəti. A row opens the lesson.
    const renderLessons = () => {
        if (steps.length === 0) return soon(`${esc(pathName)} üçün dərslər hazırlanır. Faydalı materialın varsa, göndər.`);
        return `
        <ol class="ln-stops ln-stops--rows" aria-label="${esc(pathName)} yolunun dərsləri">
            ${steps.map((step, idx) => {
                const done = isStageDone(sub.id, idx);
                const st = done ? 'done' : idx === prog.next ? 'current' : 'next';
                const level = STAGE[step.status];
                const count = (step.items || []).length;
                return `
            <li class="ln-stop"${st !== 'next' ? ` data-state="${st}"` : ''}>
                <div class="flex items-center gap-1">
                    <button type="button" onclick="window.openTopic('${cat.id}', '${sub.id}', ${idx})" class="group flex min-h-16 min-w-0 flex-1 items-center gap-3 py-3.5 pr-2 text-left">
                        <span class="min-w-0 flex-1">
                            <span class="block font-mono text-[12px] tracking-[0.04em] text-text-mute">Dərs ${idx + 1}</span>
                            <span class="ln-chapter ln-row__title mt-1 block">${esc(step.title)}</span>
                            <span class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]">${StateWord(st)}${count ? `<span class="text-text-mute">${count} hissə</span>` : ''}${level ? `<span class="text-text-mute">${level.label}</span>` : ''}</span>
                        </span>
                        <span class="text-text-mute">${icon('chevron-right')}</span>
                    </button>
                    <button type="button" onclick="window.toggleStageDone('${sub.id}', ${idx})" aria-pressed="${done}" aria-label="Dərs ${idx + 1}, ${esc(step.title)}: ${done ? 'bitmədi kimi qeyd et' : 'bitdi kimi qeyd et'}"
                        class="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-full border px-3 text-[13px] font-medium transition-colors ${done ? 'border-status-live-line bg-status-live-wash text-status-live' : 'border-alpha-10 text-text-soft hover:border-alpha-20 hover:text-text'}">
                        ${icon('check', 'size-3.5')}<span>Bitdi</span>
                    </button>
                </div>
            </li>`;
            }).join('')}
        </ol>
        ${VideoCourses() ? `<div class="mt-10">${VideoCourses()}</div>` : ''}
        ${hasFinalQuiz(sub.id) ? `
        <section class="mt-10" aria-labelledby="final-title">
            <h2 id="final-title" class="t-title">Final testi</h2>
            <p class="t-small mt-0.5">${prog.total > 0 && prog.next < 0 ? `Bütün dərsləri bitirdin. İndi ${finalSize(sub.id)} sualla özünü yoxla.` : `Dərsləri bitirəndən sonra bütün yol üzrə ${finalSize(sub.id)} sual.`}</p>
            <div class="mt-3">${QuizRow(finalQuizId(sub.id), `${esc(pathName)}: final testi`, finalSize(sub.id))}</div>
        </section>
        ${CertificateRequest(sub.id)}` : ''}`;
    };

    // Materiallar: the study plan in lesson order (each lesson's steps, numbered), then tools and "for later".
    // A path without a plan keeps the plain list below.
    const MaterialCards = (list) => `
        <ul class="ln-rows">
            ${list.map((res) => {
                const type = typeOf(res);
                return ResourceCard({ tag: 'li', title: esc(res.title), icon: type.icon, meta: [type.label, langWord(res.lang)], note: res.desc ? esc(res.desc) : '', href: res.url, action: type.verb });
            }).join('')}
        </ul>`;
    // One complete video course per language for the whole path, before the lesson-by-lesson plan.
    const videos = pathVideos(sub.id);
    const VideoCourses = () => videos.length ? `
        <section class="mb-10" aria-labelledby="video-courses">
            <h2 id="video-courses" class="t-title">Video kurslar</h2>
            <p class="t-small mt-0.5">Bütün yolu videolarla öyrənmək istəsən, öz dilində birini seç. Dərslərdəki addımlar da bu mövzuları izləyir.</p>
            <ul class="ln-rows mt-3">${videos.map(({ lang, res }) => ResourceCard({ tag: 'li', title: esc(res.title), icon: 'circle-play', meta: [langWord(lang), res.source ? `<span translate="no">${esc(res.source)}</span>` : '', res.duration ? esc(res.duration) : ''], note: res.desc ? esc(res.desc) : '', href: res.url, action: 'İzlə' })).join('')}</ul>
        </section>` : '';
    const renderPlan = () => `
        ${VideoCourses()}
        <p class="t-body max-w-[42rem]">Materiallar dərslərin sırası ilə düzülüb. Hər dərsdə 1-ci addımdan başla, sonra növbətinə keç.</p>
        <ol class="mt-6 grid gap-8" aria-label="${esc(pathName)}: dərs-dərs materiallar">
            ${plan.lessons.map((lessonSteps, i) => lessonSteps.length && steps[i] ? `
            <li>
                <button type="button" onclick="window.openTopic('${cat.id}', '${sub.id}', ${i})" class="group flex min-h-11 w-full items-baseline gap-3 text-left">
                    <span class="shrink-0 font-mono text-[12px] tracking-[0.04em] text-text-mute">Dərs ${i + 1}</span>
                    <span class="ln-chapter min-w-0 flex-1 group-hover:underline group-hover:decoration-alpha-20 group-hover:underline-offset-4">${esc(steps[i].title)}</span>
                    ${isStageDone(sub.id, i) ? `<span class="shrink-0 text-[13px] text-status-live">${icon('circle-check', 'size-3.5 inline')} Bitib</span>` : ''}
                </button>
                <ol class="ln-rows mt-2">${lessonSteps.map((step, n) => PlanRow(step, n + 1)).join('')}</ol>
            </li>` : '').join('')}
        </ol>
        ${plan.tools.length ? Section({ title: 'Alətlər', note: 'Bu yolda istifadə edəcəyin proqramlar və saytlar, lazım olduğu sıra ilə.', body: MaterialCards(plan.tools) }) : ''}
        ${plan.more.length ? Section({ title: 'Sonra üçün', note: 'Dərsləri bitirəndən sonra: kanallar, xəritələr və daha dərin kitablar.', body: MaterialCards(plan.more) }) : ''}`;

    const renderMaterials = () => plan ? renderPlan() : `
        ${Hint('resources')}
        <ul class="ln-rows${beginner ? ' mt-4' : ''}">
            ${resources.map((res) => {
                const type = typeOf(res);
                return ResourceCard({
                    tag: 'li',
                    title: esc(res.title),
                    icon: type.icon,
                    meta: [type.label, langWord(res.lang)],
                    href: res.url,
                    action: type.verb
                });
            }).join('')}
        </ul>`;

    // Məşq: this path's questions (tap to see the answer), then the site-wide tests and code tasks.
    const lessonTests = steps.map((st, i) => (hasLessonQuiz(sub.id, i) ? { i, st } : null)).filter(Boolean);
    const renderPractice = () => `
        ${lessonTests.length ? `
        <section aria-labelledby="lesson-tests">
            <h2 id="lesson-tests" class="t-title">Dərs testləri</h2>
            <p class="t-small mt-0.5">Hər dərs üçün 3 sual. Dərsi bitirəndən sonra keç.</p>
            <ul class="ln-rows mt-3">${lessonTests.map(({ i, st }) => {
                const id = lessonQuizId(sub.id, i);
                const result = quizResult(id);
                return ResourceCard({ tag: 'li', title: `Dərs ${i + 1}: ${esc(st.title)}`, icon: 'list-checks', meta: ['3 sual', result ? `Ən yaxşı nəticə: ${result.best} / ${result.total}` : (isStageDone(sub.id, i) ? 'Dərs bitib' : '')], onclick: `window.openQuiz('${id}')`, action: result ? 'Yenidən' : 'Başla' });
            }).join('')}</ul>
        </section>` : ''}
        ${hasFinalQuiz(sub.id) ? `<section class="mt-10" aria-labelledby="final-tests"><h2 id="final-tests" class="t-title">Final testi</h2><div class="mt-3">${QuizRow(finalQuizId(sub.id), `${esc(pathName)}: final testi`, finalSize(sub.id))}</div></section>` : ''}
        <div class="mt-10"></div>
        ${questions.length ? `
        <p class="t-small mb-4">Cavabı görmək üçün suala toxun.</p>
        ${QuestionList(questions)}` : `<p class="t-body">${esc(pathName)} üzrə suallar hazırlanır.</p>`}
        ${Section({ title: 'Daha çox məşq', body: MorePractice() })}`;

    // Layihələr: compact cards; the Layihələr page tracks status and the GitHub repo.
    const renderProjects = () => `
        <ul class="ln-rows">
            ${projects.map((p) => ResourceCard({
                tag: 'li',
                title: esc(L(p.title)),
                icon: 'hammer',
                meta: [p.level ? `${esc(levelAz(p.level))} səviyyə` : '', (p.tech || []).slice(0, 3).map(esc).join(', ')],
                onclick: "window.navigateTo('projects')",
                action: 'Layihəyə bax'
            })).join('')}
        </ul>`;

    // Karyera (beginner mode off): one row per market. The table scrolls inside itself on phones.
    const renderJobs = () => `
        <div class="az-table-wrap">
            <table class="az-table min-w-[640px]">
                <thead>
                    <tr><th scope="col">Bazar</th><th scope="col">İş axtarmaq üçün saytlar</th><th scope="col">Tələb olunan bacarıqlar</th><th scope="col">Maaş aralığı</th></tr>
                </thead>
                <tbody>
                    ${markets.map((m) => {
                        const j = jobs[m.id];
                        return `
                    <tr${state.country === m.id ? ' aria-selected="true"' : ''}>
                        <td class="align-top font-medium">${m.label}</td>
                        <td class="align-top text-text-soft">${(j.platforms || []).map(esc).join(', ')}</td>
                        <td class="align-top"><div class="flex flex-wrap gap-1.5">${(j.top_skills || []).map((s) => Badge(esc(s), { mono: true })).join('')}</div></td>
                        <td class="align-top tabular-nums text-text-soft">${String(j.avg_salary || '').split('|').map((s) => `<span class="block whitespace-nowrap">${esc(s.trim())}</span>`).join('')}</td>
                    </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
        <p class="t-small mt-4">Maaş aralıqları təxminidir. Dəqiq rəqəmləri iş elanlarında yoxla.</p>`;

    const panel = tab === 'resources' ? renderMaterials()
        : tab === 'interview' ? renderPractice()
        : tab === 'projects' ? renderProjects()
        : tab === 'jobs' ? renderJobs()
        : tab === 'faq' ? QuestionList(faq)
        : renderLessons();

    // One primary: Başla before the first lesson, Dərsi davam et after; a badge when the path is finished.
    const complete = prog.total > 0 && prog.next < 0;
    const nextTitle = prog.next >= 0 && steps[prog.next] ? steps[prog.next].title : '';
    const action = prog.total === 0 ? ''
        : complete ? Badge('Yol bitdi', { success: true })
        : `
        <div class="flex w-full flex-col gap-1 sm:w-auto">
            ${Button(prog.done === 0 ? 'Başla' : 'Dərsi davam et', { onclick: `window.openTopic('${cat.id}', '${sub.id}', ${prog.next})`, variant: 'primary', icon: 'arrow-right', cls: 'w-full min-h-12 sm:w-auto sm:min-h-11' })}
            <span class="text-center text-[12px] text-text-mute sm:text-right">Dərs ${prog.next + 1} açılacaq: ${esc(nextTitle)}</span>
        </div>`;

    const below = `
        ${prog.total ? `<div class="mt-6 max-w-[42rem]">${ProgressLine(prog.done, prog.total)}</div>` : ''}
        ${cat.subCategories.length > 1 ? `<div class="mt-5 [&_.az-chip]:min-h-11">${Chips(cat.subCategories.map((s) => ({ id: s.id, label: esc(L(s.title)) })), sub.id, (id) => `window.navigateToCategory('${cat.id}', '${id}', 'roadmap')`, `${esc(L(cat.title))} yolları`)}</div>` : ''}
        <div id="path-tabs" class="scroll-mt-16">${Tabs(TABS.map((x) => ({ ...x, go: `window.switchTab('${x.id}')` })), tab, `${esc(pathName)} bölmələri`)}</div>`;

    return Page(`
    ${PageTitle({
        back: { label: 'Öyrən', go: "window.navigateTo('roadmaps')" },
        eyebrow: `<span class="normal-case tracking-normal">${esc(plain.want || L(cat.title))}</span>`,
        title: esc(pathName),
        description: plain.promise ? esc(plain.promise) : '',
        action,
        tabs: below
    })}
    ${Hint('path', prog.next >= 0 ? { next: { label: 'İndiki dərsi aç', go: `window.openTopic('${cat.id}', '${sub.id}', ${prog.next})` } } : {})}
    <div class="mt-6">${panel}</div>
    `);
};

// --- A lesson: what you will learn (tick each), materials, check yourself, then finish and go on (sticky). ---
export const TopicPage = () => {
    const cat = categories.find((c) => c.id === state.currentCategory);
    const sub = cat && cat.subCategories.find((s) => s.id === state.currentSubCategory);
    const steps = sub ? stagesOf(sub.id, state.lang) : [];
    if (!cat || !sub || steps.length === 0) {
        return Page(EmptyState('Dərs tapılmadı', 'Öyrən bölməsindən bir yol və dərs seç.', Button('Yollara keç', { onclick: "window.navigateTo('roadmaps')", icon: 'arrow-right' })), { width: 'narrow' });
    }
    const idx = Math.max(0, Math.min(state.currentStage || 0, steps.length - 1));
    const stage = steps[idx];
    const pathName = L(sub.title);
    const prog = trackProgress(sub.id, state.lang);
    const done = isStageDone(sub.id, idx);
    const st = done ? 'done' : idx === prog.next ? 'current' : 'next';
    const level = STAGE[stage.status];
    const last = idx === steps.length - 1;
    const data = contentData[sub.id] || {};
    const items = stage.items || [];
    const learnt = itemsDone(sub.id, idx, items.length);

    // The study plan's steps for this lesson, in order. A path without a plan falls back to materials that share a
    // word with the lesson (those first; only those say why).
    const planSteps = lessonPlan(sub.id, idx, state.lang);
    const scored = planSteps.length ? [] : ((data.resources && data.resources.items) || []).map((res) => ({ res, topic: matchTopic(stage, `${res.title} ${res.desc || ''}`) }));
    const materials = [...scored.filter((x) => x.topic), ...scored.filter((x) => !x.topic)].slice(0, 4);

    // Questions about this lesson (a word shared with the question); else the path's first ones, and it says so.
    const qs = (data.interview || []).map((q) => ({ q, topic: matchTopic(stage, L(q.q)) }));
    const related = qs.filter((x) => x.topic).slice(0, 3);
    const questions = (related.length ? related : qs.slice(0, 3)).map((x) => x.q);

    const primary = !done
        ? Button(last ? 'Dərsi bitir' : 'Dərsi bitir və davam et', { onclick: 'window.completeTopicAndNext()', variant: 'primary', icon: last ? 'check' : 'arrow-right', cls: 'min-h-12' })
        : last
            ? Button('Layihələrə keç', { onclick: `window.navigateToCategory('${cat.id}', '${sub.id}', 'projects')`, variant: 'primary', icon: 'arrow-right', cls: 'min-h-12' })
            : Button('Növbəti dərs', { onclick: `window.openTopic('${cat.id}', '${sub.id}', ${idx + 1})`, variant: 'primary', icon: 'arrow-right', cls: 'min-h-12' });

    const howTo = isBeginner() ? `
    <section class="mt-8" aria-labelledby="how-to">
        <h2 id="how-to" class="t-title">Necə öyrənim?</h2>
        <ol class="ln-rows mt-3 text-[15px] text-text-soft">
            ${[planSteps.length ? 'Aşağıdakı planda 1-ci addımdan başla.' : 'Aşağıdan bir material aç.', 'Öyrəndiyin hər hissəni işarələ.', 'Sonda "Dərsi bitir" düyməsini bas.'].map((text, i) => `
            <li class="flex items-baseline gap-3 py-2.5"><span class="ln-num w-5 shrink-0 text-[18px]" aria-hidden="true">${i + 1}</span>${text}</li>`).join('')}
        </ol>
    </section>` : '';

    return Page(`
    ${PageTitle({
        back: { label: esc(pathName), go: `window.navigateToCategory('${cat.id}', '${sub.id}', 'roadmap')` },
        eyebrow: `Dərs ${idx + 1} / ${steps.length}`,
        title: esc(stage.title),
        tabs: `
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
            ${StateWord(st)}
            ${level ? Status(level.label, level.kind) : ''}
            ${done ? `<button type="button" onclick="window.toggleStageDone('${sub.id}', ${idx})" class="inline-flex min-h-11 items-center text-text-mute underline decoration-alpha-20 underline-offset-4 transition-colors hover:text-text">Bitmədi kimi qeyd et</button>` : ''}
        </div>
        <div class="mt-4">
            <p class="mb-2 text-[13px] text-text-mute">${esc(pathName)} yolu</p>
            ${ProgressLine(prog.done, prog.total)}
        </div>`
    })}
    ${Hint('lesson')}
    ${howTo}

    ${items.length ? Section({
        id: 'lesson-items',
        title: 'Bu dərsdə öyrənəcəyin',
        note: `${learnt} / ${items.length} öyrənildi`,
        body: `
        <ul class="border-t border-line">
            ${items.map((item, i) => {
                const ok = isItemDone(sub.id, idx, i);
                return `
            <li class="border-b border-line">
                <button type="button" role="checkbox" aria-checked="${ok}" onclick="window.toggleLessonItem('${sub.id}', ${idx}, ${i})"
                    class="flex min-h-12 w-full items-center gap-4 py-3 text-left">
                    <span class="flex size-6 shrink-0 items-center justify-center rounded-md border ${ok ? 'border-status-live-line bg-status-live-wash text-status-live' : 'border-alpha-25 text-transparent'}" aria-hidden="true">${icon('check', 'size-4')}</span>
                    <span class="flex-1 text-[17px] leading-[1.6] ${ok ? 'text-text-soft' : 'text-text'}">${esc(item)}</span>
                    <span class="shrink-0 text-[12px] ${ok ? 'text-status-live' : 'text-text-mute'}">${ok ? 'öyrəndim' : 'işarələ'}</span>
                </button>
            </li>`;
            }).join('')}
        </ul>
        ${learnt === items.length && !done ? '<p class="mt-3 text-[14px] text-text-soft">Hamısını öyrəndin. İndi aşağıdakı düymə ilə dərsi bitir.</p>' : ''}`
    }) : ''}

    ${planSteps.length ? Section({
        id: 'lesson-materials',
        title: 'Bu ardıcıllıqla öyrən',
        note: 'Pulsuz, yoxlanmış materiallar. 1-ci addımdan başla.',
        link: TextLink('Bütün plan', `window.navigateToCategory('${cat.id}', '${sub.id}', 'resources')`),
        body: `<ol class="ln-rows">${planSteps.map((step, n) => PlanStep(step, n + 1)).join('')}</ol>`
    }) : ''}

    ${materials.length ? Section({
        id: 'lesson-materials',
        title: 'Materiallar',
        note: 'Pulsuz video, məqalə və təlimatlar',
        link: TextLink('Hamısı', `window.navigateToCategory('${cat.id}', '${sub.id}', 'resources')`),
        body: `
        <ul class="ln-rows">
            ${materials.map(({ res, topic }) => {
                const type = typeOf(res);
                return ResourceCard({
                    tag: 'li',
                    title: esc(res.title),
                    icon: type.icon,
                    meta: [type.label, langWord(res.lang)],
                    href: res.url,
                    action: type.verb,
                    note: topic ? `<span class="text-text-mute">Niyə bu material?</span> Bu dərsin “${esc(topic)}” hissəsi üçün.` : ''
                });
            }).join('')}
        </ul>`
    }) : ''}

    ${Section({
        id: 'lesson-check',
        title: 'Özünü yoxla',
        note: hasLessonQuiz(sub.id, idx) ? '3 qısa sual. Hər cavabdan sonra izahı görəcəksən.' : questions.length ? (related.length ? 'Bu dərslə bağlı suallar. Cavabı görmək üçün suala toxun.' : `${esc(pathName)} yolunun suallarından. Cavabı görmək üçün suala toxun.`) : '',
        body: hasLessonQuiz(sub.id, idx)
            ? QuizRow(lessonQuizId(sub.id, idx), `Dərs testi: ${esc(stage.title)}`, 3)
            : `${questions.length ? QuestionList(questions) : ''}<div class="${questions.length ? 'mt-4' : ''}">${MorePractice()}</div>`
    })}

    ${done ? SupportNote({ lead: 'Bu dərsi bitirdin.' }) : ''}

    ${isBeginner() && !done ? '<p class="mt-10 text-[13px] text-text-mute">Dərsi bitirəndə irəliləyişin saxlanılır və növbəti dərs açılır. Bu dərsə istədiyin vaxt qayıda bilərsən.</p>' : ''}

    <div class="ln-actionbar" role="group" aria-label="Dərs düymələri">
        ${idx > 0 ? `<button type="button" class="az-btn az-btn--ghost min-h-12 !flex-none w-12 !px-0 sm:w-auto sm:!px-5" aria-label="Əvvəlki dərs" onclick="window.openTopic('${cat.id}', '${sub.id}', ${idx - 1})">${icon('arrow-left')}<span class="hidden sm:inline">Əvvəlki</span></button>` : ''}
        ${primary}
    </div>
    `, { width: 'narrow' });
};
