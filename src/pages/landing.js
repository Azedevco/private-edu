// AZEDEV Learn - home. It answers one question for a beginner on a phone: "what do I do now?". At most four blocks and
// one primary action. New learner: welcome + start, three plain choices, how it works (the route drawing), more.
// Returning learner: continue the lesson, one next step, their paths, more. One route canvas per page. Both end with
// one quiet card that says who makes this (AZEDEV), with the WhatsApp community and optional Kofe.al support.
import { categories } from '../data.js'
import { coursesData, azedevBrand } from '../azedev-data.js'
import curated from '../curated-resources.json' with { type: 'json' }
import { getCommunityUploads } from '../storage.js'
import { state, getLocalizedContent, requestRender } from '../core.js'
import { Page } from '../shell.js'
import { icon } from '../icons.js'
import { Button, Badge, IconTile, PageTitle, Section, TextLink, AreaTile, ResourceCard, PathCard, ProgressLine, newTabNote, esc } from '../ui.js'
import { currentTrack, recommendations, startedTracks, trackProgress, stagesOf, subTitle, categoryOfSub, hasProgress } from '../progress.js'
import { plainPath, STARTER_PATHS, levelAz } from '../plain.js'
import { RouteArt } from '../art/RouteArt.js'
import { Mascot } from '../art/mascot.js'
import { Hint } from '../onboarding.js'
import { googleEnabled, syncState } from '../sync.js'

const L = getLocalizedContent;
const areaName = (sub) => L(categoryOfSub(sub)?.title);

const pathCard = (sub) => {
    const tr = trackProgress(sub, state.lang);
    return PathCard({
        catId: tr.cat,
        sub,
        name: esc(subTitle(sub)),
        area: esc(areaName(sub)),
        total: tr.total,
        done: tr.done,
        onclick: `window.navigateToCategory('${tr.cat}', '${sub}', 'roadmap')`,
        badge: false
    });
};

// ---- New learner ----

// Block 1: what this is, in one sentence (the page title), and the one big button. The guide link answers
// "I don't know what to pick".
const Welcome = () => `
    <section aria-label="Başla" class="mt-6">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center [&>.az-btn]:min-h-12 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">
            ${Button('Öyrənməyə başla', { onclick: "window.navigateToCategory('web-dev', 'frontend', 'roadmap')", variant: 'primary', icon: 'arrow-right' })}
        </div>
        <button type="button" onclick="window.openOnboarding()" class="mt-3 inline-flex min-h-11 items-center gap-2.5 text-[14px] text-text-soft transition-colors hover:text-text">
            ${Mascot({ mood: 'hello', cls: 'size-7' })}<span>Nəyi öyrənəcəyini bilmirsən? <span class="underline decoration-alpha-25 underline-offset-4">Qısa bələdçiyə bax</span></span>
        </button>
    </section>`;

// Block 2: three plain choices, nothing more.
const Choices = () => Section({
    id: 'choices-title',
    title: 'Nə öyrənmək istəyirsən?',
    link: TextLink('Bütün yollara bax', "window.navigateTo('roadmaps')"),
    body: `<ul class="grid grid-cols-1 gap-2 md:grid-cols-3">${STARTER_PATHS.map((sub) => `<li>${pathCard(sub)}</li>`).join('')}</ul>`
});

// Block 3: how it works. The route drawing with its four steps written out beside it, so it reads as a guide.
const HOW = [
    ['Yol seç', 'Nə düzəltmək istədiyini seç: sayt, tətbiq, oyun…'],
    ['Öyrən', 'Hər dərsdə əvvəl bir əsas video və ya məqalə, sonra əlavələr.'],
    ['Məşq et', 'Dərsin sonunda 3 qısa sual: səhv etsən, izahını görürsən.'],
    ['Qur', 'Öyrəndiklərinlə kiçik real iş düzəlt və GitHub-a yüklə.'],
    ['İrəliləyişini izlə', 'Profil səhifəsində harada qaldığını və nə qaldığını görürsən.']
];
const HowItWorks = () => Section({
    id: 'how-title',
    title: 'Necə işləyir?',
    body: `
        <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-10">
            <div class="mx-auto hidden w-full max-w-[420px] lg:order-last lg:block">${RouteArt()}</div>
            <div class="min-w-0">
                <ol class="ln-rows">
                    ${HOW.map(([step, text], i) => `
                    <li class="flex items-baseline gap-3 py-3.5">
                        <span class="ln-num w-6 shrink-0" aria-hidden="true">${i + 1}</span>
                        <span class="min-w-0"><span class="block text-[16px] font-medium text-text">${step}</span><span class="t-small mt-0.5 block">${text}</span></span>
                    </li>`).join('')}
                </ol>
                <button type="button" onclick="window.openOnboarding()" class="mt-3 inline-flex min-h-11 items-center gap-2 text-[14px] text-text-soft transition-colors hover:text-text">
                    ${icon('circle-play', 'size-4')}Qısa bələdçini aç
                </button>
            </div>
        </div>`
});

// ---- Returning learner ----

// Block 1: the lesson to go back to. "Başla" before the first lesson, "Dərsi davam et" after. The route drawing sits
// beside it from lg only; phones keep the compact card.
const ContinueCard = (track) => {
    const plain = plainPath(track.sub);
    const finished = track.next < 0;
    const stage = finished ? null : stagesOf(track.sub, state.lang)[track.next];
    const action = finished
        ? Button('Layihələrə keç', { onclick: "window.navigateTo('projects')", icon: 'arrow-right' })
        : Button(track.done === 0 ? 'Başla' : 'Dərsi davam et', { onclick: `window.openTopic('${track.cat}', '${track.sub}', ${track.next})`, variant: 'primary', icon: 'arrow-right' });
    return `
    <section aria-labelledby="continue-title" class="mt-6">
        <div class="az-card grid grid-cols-1 items-center gap-8 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
            <div class="min-w-0">
                <h2 id="continue-title" class="t-label">${track.done === 0 ? 'Başladığın yol' : 'Qaldığın yer'}</h2>
                <div class="mt-4 flex items-start gap-3">
                    ${AreaTile(track.cat)}
                    <div class="min-w-0">
                        <p class="t-title">${esc(plain.want || subTitle(track.sub))}</p>
                        <p class="t-small">${esc(subTitle(track.sub))} · ${track.total} dərs</p>
                    </div>
                </div>
                <div class="mt-5 border-t border-line pt-5">
                    ${stage ? `
                    <p class="t-caption">Dərs ${track.next + 1} / ${track.total}</p>
                    <p class="t-item mt-1">${esc(stage.title)}</p>` : `
                    ${Badge('Yol bitdi', { success: true })}
                    <p class="t-small mt-2">Bütün dərsləri bitirdin. İndi öyrəndiklərinlə kiçik bir layihə düzəlt.</p>`}
                </div>
                <div class="mt-5">${ProgressLine(track.done, track.total)}</div>
                <div class="mt-6 flex flex-col gap-2 sm:flex-row [&>.az-btn]:min-h-12 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${action}</div>
                <button type="button" onclick="window.navigateToCategory('${track.cat}', '${track.sub}', 'roadmap')" class="mt-2 inline-flex min-h-11 items-center gap-1.5 text-[14px] text-text-soft transition-colors hover:text-text">Bütün dərslərə bax${icon('arrow-right', 'size-3.5')}</button>
            </div>
            <div class="hidden lg:block">${RouteArt()}</div>
        </div>
    </section>`;
};

// Recommended, never required: once there is progress to protect, offer Google sign-in. "Sonra" remembers the choice.
const BANNER_KEY = 'azedev_sync_banner_dismissed';
const bannerDismissed = () => {
    try { return localStorage.getItem(BANNER_KEY) === '1'; } catch { return false; }
};
window.dismissSyncBanner = () => {
    try { localStorage.setItem(BANNER_KEY, '1'); } catch { /* storage blocked: hides for this render only */ }
    requestRender();
};
const SyncBanner = () => {
    if (!googleEnabled() || !hasProgress() || bannerDismissed()) return '';
    const s = syncState();
    if (s.status === 'synced' || s.status === 'saving') return '';
    const expired = s.status === 'expired';
    const connecting = s.status === 'connecting';
    return `
    <section aria-labelledby="sync-title" class="mt-3">
        <div class="az-card az-card--inset flex flex-col gap-4 sm:flex-row sm:items-center">
            <div class="flex min-w-0 flex-1 items-start gap-3">
                ${IconTile('user-round')}
                <div class="min-w-0">
                    <h2 id="sync-title" class="t-item">${expired ? 'Google hesabına yenidən qoşul' : 'İrəliləyişini qoru'}</h2>
                    <p class="t-small mt-1">${expired
                        ? 'Qoşulmanın vaxtı bitib. Yenidən qoşul ki, irəliləyişin saxlanmağa davam etsin. Bu cihazdakı heç nə itmir.'
                        : 'Hesab açsan, irəliləyişin telefonunda və kompüterində eyni olar. Hesab açmasan da davam edə bilərsən.'}</p>
                    ${s.status === 'error' && s.error ? `<p class="mt-1 text-[13px] text-danger">${esc(s.error)} Yenidən cəhd et.</p>` : ''}
                </div>
            </div>
            <div class="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">
                ${Button(connecting ? 'Qoşulur' : expired ? 'Yenidən qoşul' : 'Google ilə daxil ol', { onclick: 'window.googleSignIn()', icon: null, attrs: connecting ? 'aria-disabled="true"' : '' })}
                <button type="button" onclick="window.dismissSyncBanner()" class="inline-flex min-h-11 items-center justify-center px-3 text-[14px] text-text-soft transition-colors hover:text-text">Sonra</button>
            </div>
        </div>
    </section>`;
};

// One tappable next step: icon, title, what it is, arrow. Titles may wrap to two lines.
const StepRow = (r) => `
    <button type="button" onclick="${r.go}" class="az-card az-card--link flex min-h-16 w-full items-center gap-3 p-4">
        ${IconTile(r.icon)}
        <span class="min-w-0 flex-1">
            <span class="t-item block line-clamp-2">${esc(r.title)}</span>
            <span class="t-small block">${esc(r.meta)}</span>
        </span>
        ${icon('arrow-right', 'size-4 text-text-mute')}
    </button>`;

// Block 2: one next step. The lesson itself is the continue card, so the step here is the next other thing (a test, a
// task or a project); the rest waits behind "Başqa variantlar".
const NextStep = (track) => {
    const items = recommendations(state.lang, 6).filter((r) => r.kind !== 'start' && !(r.kind === 'stage' && track));
    if (!items.length) return '';
    const [first, ...rest] = items;
    return Section({
        id: 'next-title',
        title: 'Növbəti addım',
        body: `
            ${StepRow(first)}
            ${rest.length ? `
            <details class="group mt-2">
                <summary class="flex min-h-11 cursor-pointer list-none items-center gap-2 text-[14px] text-text-soft transition-colors hover:text-text [&::-webkit-details-marker]:hidden">
                    Başqa variantlar (${Math.min(rest.length, 3)})${icon('chevron-down', 'size-4 transition-transform group-open:rotate-180')}
                </summary>
                <ul class="mt-2 grid grid-cols-1 gap-2">${rest.slice(0, 3).map((r) => `<li>${StepRow(r)}</li>`).join('')}</ul>
            </details>` : ''}`
    });
};

// Block 3: the learner's paths, started ones first, then the first path of each area; six at most.
const YourPaths = () => {
    const subs = startedTracks(state.lang).map((tr) => tr.sub);
    for (const cat of categories) {
        const first = cat.subCategories[0]?.id;
        if (first && !subs.includes(first)) subs.push(first);
    }
    return Section({
        id: 'paths-title',
        title: 'Yolların',
        link: TextLink('Hamısına bax', "window.navigateTo('roadmaps')"),
        body: `<ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">${subs.slice(0, 6).map((sub) => `<li>${pathCard(sub)}</li>`).join('')}</ul>`
    });
};

// ---- Both: everything else waits behind one closed "Daha çox" ----

// A curated pick: two courses and the two highest-rated books in the data. Not a popularity chart.
const Picks = () => {
    const courses = coursesData.slice(0, 2).map((c) => ResourceCard({
        tag: 'li',
        title: esc(c.title),
        icon: 'graduation-cap',
        meta: ['Kurs', c.level ? esc(levelAz(c.level)) : '', esc(c.duration), esc(c.provider)],
        href: c.url,
        action: 'Kursa keç'
    }));
    // Books a beginner can open and read now, free and legal (the checked library list).
    const books = (curated.library?.books || []).filter((b) => b.level === 'beginner').slice(0, 2).map((b) => ResourceCard({
        tag: 'li',
        title: esc(b.title),
        icon: 'book-open',
        meta: ['Pulsuz kitab', esc(b.source)],
        href: b.url,
        action: 'Oxu'
    }));
    return `
        <section aria-labelledby="picks-title" class="mt-6">
            <div class="mb-3 flex items-end justify-between gap-4">
                <div><h3 id="picks-title" class="t-title">Seçilmiş materiallar</h3><p class="t-small mt-0.5">AZEDEV komandasının seçimi</p></div>
                ${TextLink('Hamısı', "window.navigateTo('courses')")}
            </div>
            <ul class="ln-rows">${[...courses, ...books].join('')}</ul>
        </section>`;
};

// The newest approved community uploads.
const TYPE_LABEL = { guide: 'Təlimat', template: 'Hazır nümunə', cheatsheet: 'Konspekt', link: 'Keçid' };
const formatDate = (iso = '') => (/^\d{4}-\d{2}-\d{2}$/.test(iso) ? iso.split('-').reverse().join('.') : esc(iso));
const Recent = () => {
    const uploads = getCommunityUploads()
        .filter((u) => u.status === 'approved')
        .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
        .slice(0, 3);
    if (!uploads.length) return '';
    return `
        <section aria-labelledby="recent-title" class="mt-8">
            <div class="mb-3 flex items-end justify-between gap-4">
                <div><h3 id="recent-title" class="t-title">Yeni əlavə olunanlar</h3><p class="t-small mt-0.5">İcmanın göndərdiyi, yoxlanılmış materiallar</p></div>
                ${TextLink('Konspektlər', "window.navigateTo('downloads')")}
            </div>
            <ul class="ln-rows">
                ${uploads.map((u) => ResourceCard({
                    tag: 'li',
                    title: esc(u.title),
                    icon: 'file-text',
                    meta: [TYPE_LABEL[u.type] || 'Material', formatDate(u.date), esc(u.author)],
                    onclick: `window.previewUploadedResource('${String(u.id).replace(/[^\w-]/g, '')}')`,
                    action: 'Bax'
                })).join('')}
            </ul>
        </section>`;
};

const More = () => `
    <details class="group mt-10 sm:mt-14">
        <summary class="az-card flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 transition-colors hover:border-alpha-20 [&::-webkit-details-marker]:hidden">
            <span><span class="block text-[15px] font-medium text-text">Daha çox</span><span class="block text-[13px] text-text-mute">Seçilmiş materiallar və yeni əlavə olunanlar</span></span>
            ${icon('chevron-down', 'size-5 text-text-soft transition-transform group-open:rotate-180')}
        </summary>
        ${Picks()}
        ${Recent()}
    </details>`;

// ---- Both: who makes this. One quiet card after the learning blocks: ghost and text links only ----

// The community and support rows, also used at the bottom of Profil. Support is an offer, never a condition.
export const CommunityRows = () => `
    <div class="flex flex-col items-start gap-2">
        ${Button('Sualın var? WhatsApp icmasına qoşul', { href: azedevBrand.urls.whatsapp, size: 'sm', cls: 'min-h-11 max-w-full whitespace-normal text-left' })}
        <a href="${azedevBrand.urls.kofe}" target="_blank" rel="noopener noreferrer" class="inline-block max-w-full py-3 text-[14px] leading-5 text-text-soft underline decoration-alpha-20 underline-offset-4 transition-colors hover:text-text">Faydalı olubsa, istəsən Kofe.al ilə dəstək ola bilərsən${icon('arrow-up-right', 'ml-1 inline-block size-3.5 align-[-2px]')}${newTabNote()}</a>
    </div>`;

const WhoMakesThis = () => `
    <section aria-labelledby="who-title" class="mt-10 sm:mt-14">
        <div class="az-card p-4 sm:p-5">
            <h2 id="who-title" class="t-title">Bu layihəni kim edir?</h2>
            <p class="t-body mt-2 max-w-[42rem]">AZEDEV Learn AZEDEV-in pulsuz təhsil layihəsidir. AZEDEV Bakıda 2024-cü ildə yaradılmış texnologiya studiyasıdır: rəqəmsal məhsullar qurur və insanların texnologiyaya daha asan girməsini istəyir.</p>
            ${TextLink('Biz kimik', "window.navigateTo('about')")}
            <div class="mt-3 border-t border-line pt-4">${CommunityRows()}</div>
        </div>
    </section>`;

// --- Page 1: Home ---
export const LandingPage = () => {
    const track = currentTrack(state.lang);
    if (!track && !hasProgress()) {
        return Page(`
            ${PageTitle({
                home: true,
                title: 'Proqramlaşdırmanı addım-addım öyrən',
                description: 'Pulsuzdur, hesab lazım deyil. Bir yol seç, dərsləri sırayla keç, sonda öz layihəni qur.'
            })}
            ${Welcome()}
            ${Choices()}
            ${HowItWorks()}
            ${More()}
            ${WhoMakesThis()}
        `);
    }
    return Page(`
        ${PageTitle({ home: true, title: 'Yenidən xoş gəldin', description: 'Qaldığın yerdən davam et.' })}
        ${track ? ContinueCard(track) : Welcome()}
        ${SyncBanner()}
        ${NextStep(track)}
        ${YourPaths()}
        ${More()}
        ${WhoMakesThis()}
    `);
};
