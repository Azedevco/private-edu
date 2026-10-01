// AZEDEV Learn - app shell on the AZEDEV design system: desktop sidebar, phone top bar and bottom navigation, menus,
// the global search and the quiet footer.
import { languages, categories, contentData, globalFaqData, glossary } from './data.js'
import { azedevBrand, downloadableCheatSheets, coursesData, booksData, videosData, documentationLinks } from './azedev-data.js'
import { state, t, getLocalizedContent } from './core.js'
import { icon } from './icons.js'
import { Button, Kbd, newTabNote, categoryIcon, esc } from './ui.js'
import { LearnMark } from './art/learn-mark.js'
import { allProjects, stagesOf, startedTracks, subTitle } from './progress.js'
import { googleEnabled, syncState } from './sync.js'

// Information architecture (mobile first): Ana · Öyrən · Məşq · Layihələr · Profil, the same five in the phone's
// bottom bar and the desktop sidebar. Explore and AZEDEV pages live in "Daha çox", the footer and search.
export const NAV = [
    { id: 'home', label: () => L({ az: 'Ana', en: 'Home', tr: 'Ana sayfa' }), icon: 'house', go: "window.navigateTo('home')", views: ['home'] },
    {
        id: 'learn', label: () => t('nav.learn'), icon: 'map', go: "window.navigateTo('roadmaps')",
        views: ['roadmaps', 'category', 'topic', 'courses', 'downloads', 'books', 'videos', 'docs'],
        items: [
            { label: () => t('nav.roadmaps'), desc: 'Dərslər düzgün ardıcıllıqla', icon: 'map', go: "window.navigateTo('roadmaps')", view: 'roadmaps', station: 0 },
            { label: () => t('nav.courses'), desc: 'Seçilmiş pulsuz kurslar', icon: 'graduation-cap', go: "window.navigateTo('courses')", view: 'courses', station: 1 },
            { label: () => t('nav.downloads'), desc: 'Konspektlər və icma faylları', icon: 'file-down', go: "window.navigateTo('downloads')", view: 'downloads', station: 1 },
            { label: () => t('nav.books'), desc: 'Oxunmalı kitablar və əsas fikirlər', icon: 'book-open', go: "window.navigateTo('books')", view: 'books', station: 1 },
            { label: () => t('nav.videos'), desc: 'Texniki YouTube kanalları', icon: 'circle-play', go: "window.navigateTo('videos')", view: 'videos', station: 1 },
            { label: () => t('nav.docs'), desc: 'Rəsmi sənədlər və qısa keçidlər', icon: 'library', go: "window.navigateTo('docs')", view: 'docs', station: 1 }
        ]
    },
    {
        id: 'practice', label: () => t('nav.practice'), icon: 'list-checks', go: "window.navigateTo('quizzes')",
        views: ['quizzes', 'challenges'],
        items: [
            { label: () => t('nav.quizzes'), desc: 'Vaxtlı interaktiv testlər (Yeni başlayanlar üçün)', icon: 'list-checks', go: "window.navigateTo('quizzes')", view: 'quizzes', station: 2 },
            { label: () => t('nav.challenges'), desc: 'Alqoritmlər və praktik kod', icon: 'square-terminal', go: "window.navigateTo('challenges')", view: 'challenges', station: 2 },
            { label: () => t('nav.interview'), desc: 'Texniki sual-cavab kartları', icon: 'message-square', go: "window.navigateToCategory('web-dev', 'frontend', 'interview')", station: 2 }
        ]
    },
    { id: 'projects', label: () => L({ az: 'Layihələr', en: 'Projects', tr: 'Projeler' }), icon: 'hammer', go: "window.navigateTo('projects')", views: ['projects'] },
    { id: 'journey', label: () => L({ az: 'Profil', en: 'Profile', tr: 'Profil' }), icon: 'user-round', go: "window.navigateTo('journey')", views: ['journey'] }
];

// Everything else: reachable from "Daha çox" (the more menu), the footer and search.
export const MORE = [
    {
        id: 'library', label: () => 'Öyrən',
        items: [
            { label: () => 'Kurslar', desc: 'Pulsuz onlayn kurslar', icon: 'graduation-cap', go: "window.navigateTo('courses')", view: 'courses' },
            { label: () => 'Kitablar', desc: 'Oxumağa dəyər kitablar', icon: 'book-open', go: "window.navigateTo('books')", view: 'books' },
            { label: () => 'Videolar', desc: 'Faydalı video kanallar', icon: 'circle-play', go: "window.navigateTo('videos')", view: 'videos' },
            { label: () => 'Texniki təlimatlar', desc: 'Proqramların rəsmi təlimatları', icon: 'library', go: "window.navigateTo('docs')", view: 'docs' },
            { label: () => 'Konspektlər', desc: 'Yüklənən qısa qeydlər', icon: 'file-down', go: "window.navigateTo('downloads')", view: 'downloads' }
        ]
    },
    {
        id: 'practice-more', label: () => 'Məşq',
        items: [
            { label: () => 'Kod tapşırıqları', desc: 'Kod yazmağı bilənlər üçün', icon: 'square-terminal', go: "window.navigateTo('challenges')", view: 'challenges' },
            { label: () => 'Müsahibə sualları', desc: 'İşə müraciətə hazırlıq', icon: 'message-square', go: "window.navigateToCategory('web-dev', 'frontend', 'interview')" }
        ]
    },
    {
        id: 'help', label: () => 'Kömək',
        items: [
            { label: () => 'WhatsApp icması', desc: 'Sual ver, birlikdə öyrən', icon: 'message-circle', href: azedevBrand.urls.whatsapp },
            { label: () => 'Qısa bələdçi', desc: 'Sayt necə işləyir, 1 dəqiqədə', icon: 'circle-help', go: 'window.openOnboarding()' },
            { label: () => 'Learn nədir?', desc: 'Materialları necə seçirik, kim edir', icon: 'info', go: "window.navigateTo('welcome')", view: 'welcome' },
            { label: () => 'Suallar və cavablar', desc: 'Tez-tez verilən suallar', icon: 'message-circle', go: "window.navigateTo('faq')", view: 'faq' },
            { label: () => 'Terminlər lüğəti', desc: 'Çətin sözlərin sadə izahı', icon: 'book-marked', go: "window.navigateTo('glossary')", view: 'glossary' }
        ]
    },
    {
        id: 'azedev', label: () => 'AZEDEV',
        items: [
            { label: () => t('nav.aboutAzedev'), desc: 'Biz kimik', icon: 'info', go: "window.navigateTo('about')", view: 'about' },
            { label: () => 'İcma', desc: 'Birlikdə öyrənmək və planlar', icon: 'users', go: "window.navigateTo('community')", view: 'community' },
            { label: () => 'Açıq layihələr', desc: 'AZEDEV-in kodu hamıya açıq layihələri', icon: 'git-pull-request', go: "window.navigateTo('open-source')", view: 'open-source' },
            { label: () => 'Karyera yolları', desc: 'Başlanğıcdan təcrübəliyə qədər', icon: 'compass', go: "window.navigateTo('career-paths')", view: 'career-paths' },
            { label: () => t('hallOfFame'), desc: 'Layihəyə əməyi keçən insanlar', icon: 'award', go: "window.navigateTo('hall-of-fame')", view: 'hall-of-fame' },
            { label: () => 'Dəstək ol', desc: 'Kofe.al ilə layihəyə dəstək', icon: 'heart', href: azedevBrand.urls.kofe }
        ]
    }
];

function L(obj) { return getLocalizedContent(obj); }
const activeGroup = () => NAV.findIndex((g) => g.views.includes(state.view));

// The AZEDEV mark is a white-on-black PNG: `mix-blend-mode: lighten` drops its black on dark surfaces.
const Mark = (size = 22) => `<img src="/azedev.png" alt="" width="${size}" height="${size}" class="mix-blend-lighten" decoding="async">`;

// Wordmark: the mark, AZEDEV in Inter 600 at 0.04em, the product name in text-mute.
// Wordmark: Learn's own mark and name, with AZEDEV as the maker ("by AZEDEV", its gear small and quiet).
export const BrandLogo = () => `
    <span class="flex items-center gap-2.5">
        ${LearnMark(26)}
        <span class="flex flex-col leading-none" translate="no">
            <span class="text-[16px] font-semibold tracking-[-0.01em] text-text">Learn</span>
            <span class="mt-1 flex items-center gap-1 text-[11px] font-medium text-text-mute">by ${Mark(11)} AZEDEV</span>
        </span>
    </span>`;

const SQUARE = 'pointer-events-auto flex h-12 shrink-0 items-center justify-center rounded-card border border-alpha-8 bg-card/90 backdrop-blur transition-colors hover:bg-card-2';

// Items on the learning route carry their station number, so the menus read as the same map as the pages.
const StationTag = () => '';

const MenuItem = (it) => {
    const inner = `${icon(it.icon)}<span class="min-w-0"><span class="block text-[14px] font-medium leading-snug text-text">${it.label()}</span><span class="block text-[13px] leading-snug text-text-mute">${it.desc}</span></span>${StationTag(it)}`;
    if (it.href) return `<a class="az-menu__item" href="${it.href}" target="_blank" rel="noopener noreferrer">${inner}${icon('arrow-up-right', 'size-3.5 ml-auto mt-1')}${newTabNote()}</a>`;
    return `<button type="button" class="az-menu__item" onclick="${it.go}"${it.view && it.view === state.view ? ' aria-current="page"' : ''}>${inner}</button>`;
};

// App shell. Desktop: a fixed sidebar (logo, search, the five sections, the learner's paths, more). Phones and tablets:
// a slim top bar (mark, section name, search, more) and the bottom navigation. Content sits right of the sidebar.
const NavItem = (g, active) => `
    <li>
        <button type="button" onclick="${g.go}" ${active ? 'aria-current="page"' : ''}
            class="flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-[14px] font-medium transition-colors ${active ? 'bg-alpha-8 text-text [&>svg]:text-accent-text' : 'text-text-mute hover:bg-alpha-4 hover:text-text'}">
            ${icon(g.icon, 'size-[18px]')}<span>${g.label()}</span>
        </button>
    </li>`;

const SidebarPaths = () => {
    const tracks = startedTracks(state.lang).slice(0, 4);
    if (!tracks.length) return '';
    return `
        <div class="mt-8 px-3">
            <p class="px-3 pb-2 font-mono text-[12px] tracking-[0.04em] text-text-mute">Yollarım</p>
            <ul class="grid gap-0.5">
                ${tracks.map((tr) => `
                <li>
                    <button type="button" onclick="window.navigateToCategory('${tr.cat}', '${tr.sub}', 'roadmap')" class="block w-full rounded-md px-3 py-2 text-left transition-colors hover:bg-alpha-4">
                        <span class="flex items-center justify-between gap-2 text-[13px]"><span class="truncate text-text-soft">${esc(subTitle(tr.sub))}</span><span class="font-mono text-[12px] text-text-mute">${tr.pct}%</span></span>
                        <span class="az-meter mt-1.5" aria-hidden="true"><span class="az-meter__fill" style="width:${tr.pct}%"></span></span>
                    </button>
                </li>`).join('')}
            </ul>
        </div>`;
};

// Google account line (only when sign-in is configured): signed in → who, and whether progress is saved; otherwise the
// recommendation, one tap from signing in.
const SidebarAccount = () => {
    if (!googleEnabled()) return '';
    const s = syncState();
    if (s.account && ['synced', 'saving', 'connecting'].includes(s.status)) {
        return `
            <button type="button" onclick="window.navigateTo('journey')" class="mb-1 flex min-h-11 w-full items-center gap-3 rounded-md px-3 text-left transition-colors hover:bg-alpha-4">
                ${s.account.picture ? `<img src="${esc(s.account.picture)}" alt="" width="24" height="24" class="size-6 rounded-full" referrerpolicy="no-referrer">` : `<span class="az-avatar az-avatar--sm az-avatar--lavender">${esc((s.account.name || '?').slice(0, 1))}</span>`}
                <span class="min-w-0 flex-1"><span class="block truncate text-[13px] text-text">${esc(s.account.name)}</span><span class="block text-[12px] text-text-mute">${s.status === 'synced' ? 'İrəliləyiş saxlanılır' : 'Sinxronlaşdırılır'}</span></span>
            </button>`;
    }
    return `
        <button type="button" onclick="window.googleSignIn()" class="mb-1 flex min-h-11 w-full items-center gap-3 rounded-md px-3 text-left text-[14px] font-medium text-text-mute transition-colors hover:bg-alpha-4 hover:text-text">
            ${icon('user-round', 'size-[18px]')}<span class="flex-1">${s.status === 'expired' ? 'Google-a yenidən qoşul' : 'Google ilə daxil ol'}</span>
        </button>`;
};

const sectionName = () => {
    const g = NAV[activeGroup()];
    if (g) return g.label();
    const more = MORE.flatMap((m) => m.items).find((it) => it.view === state.view);
    return more ? more.label() : 'AZEDEV Learn';
};

export const Navbar = () => {
    const active = activeGroup();
    return `
    <aside class="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col overflow-y-auto border-r border-line bg-bg no-scrollbar lg:flex" aria-label="Naviqasiya">
        <div class="flex h-16 shrink-0 items-center px-6">
            <button type="button" onclick="window.navigateTo('home')" aria-label="AZEDEV Learn, ana səhifə" class="flex min-h-11 items-center">${BrandLogo()}</button>
        </div>
        <div class="px-3">
            <button type="button" onclick="window.openCommandPalette()" class="flex h-11 w-full items-center gap-2.5 rounded-md border border-alpha-8 bg-alpha-3 px-3 text-left text-[14px] text-text-mute transition-colors hover:border-alpha-15 hover:text-text">
                ${icon('search')}<span class="flex-1">Axtarış</span>${Kbd('⌘K')}
            </button>
        </div>
        <nav aria-label="Əsas bölmələr" class="mt-4 px-3">
            <ul class="grid gap-0.5">${NAV.map((g, i) => NavItem(g, active === i)).join('')}</ul>
        </nav>
        ${SidebarPaths()}
        <div class="mt-auto px-3 pb-3">${SupportNote({ compact: true })}</div>
        <div class="border-t border-line p-3">
            ${SidebarAccount()}
            <details class="group">
                <summary class="flex h-11 cursor-pointer list-none items-center gap-3 rounded-md px-3 text-[14px] font-medium text-text-mute transition-colors hover:bg-alpha-4 hover:text-text [&::-webkit-details-marker]:hidden">
                    ${icon('menu', 'size-[18px]')}<span class="flex-1">Daha çox</span>${icon('chevron-up', 'size-4 transition-transform group-open:rotate-180')}
                </summary>
                <div class="pb-2">
                    ${MORE.map((g) => `<p class="px-3 pb-1 pt-3 font-mono text-[12px] tracking-[0.04em] text-text-mute">${g.label()}</p>${g.items.map(MenuItem).join('')}`).join('')}
                </div>
            </details>
            <p class="mt-2 px-3 font-mono text-[12px] tracking-[0.04em] text-text-mute" id="content-lang-label">Məzmun dili</p>
            <div class="mt-1 flex items-center gap-1 px-1" role="group" aria-labelledby="content-lang-label">
                ${languages.map((l) => `<button type="button" onclick="window.setLanguage('${l.code}')" translate="no" aria-pressed="${state.lang === l.code}" aria-label="${l.name}" class="flex h-11 flex-1 items-center justify-center rounded-md font-mono text-[12px] uppercase transition-colors ${state.lang === l.code ? 'bg-alpha-6 text-text' : 'text-text-mute hover:text-text'}">${l.code}</button>`).join('')}
            </div>
        </div>
    </aside>

    <header class="sticky top-0 z-40 flex h-14 items-center gap-1 border-b border-line bg-bg/90 px-2 backdrop-blur lg:hidden">
        <button type="button" onclick="window.navigateTo('home')" aria-label="AZEDEV Learn, ana səhifə" class="flex size-11 items-center justify-center">${LearnMark(26)}</button>
        <p class="min-w-0 flex-1 truncate text-[15px] font-medium text-text">${sectionName()}</p>
        <button type="button" onclick="window.openCommandPalette()" aria-label="Axtarış" class="flex size-11 items-center justify-center rounded-md text-text-soft hover:bg-alpha-4">${icon('search', 'size-5')}</button>
        <button type="button" onclick="window.toggleMobileMenu()" aria-label="Daha çox" aria-expanded="${state.isMobileMenuOpen}" class="flex size-11 items-center justify-center rounded-md text-text-soft hover:bg-alpha-4">${icon(state.isMobileMenuOpen ? 'x' : 'menu', 'size-5')}</button>
    </header>`;
};

// Bottom navigation (phones and tablets): the five sections within thumb reach. The current one is filled text.
export const BottomNav = () => {
    const active = activeGroup();
    return `
    <nav aria-label="Əsas bölmələr" class="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        <ul class="grid grid-cols-5">
            ${NAV.map((g, i) => `
            <li>
                <button type="button" onclick="${g.go}" ${active === i ? 'aria-current="page"' : ''}
                    class="relative flex min-h-16 w-full flex-col items-center justify-center gap-1 text-[12px] font-medium transition-colors ${active === i ? 'text-text [&>svg]:text-accent-text' : 'text-text-mute hover:text-text'}">
                    ${active === i ? '<span aria-hidden="true" class="absolute inset-x-5 top-0 h-0.5 rounded-full bg-accent-text"></span>' : ''}
                    ${icon(g.icon, 'size-5')}
                    <span>${g.label()}</span>
                </button>
            </li>`).join('')}
        </ul>
    </nav>`;
};

// "Daha çox" sheet on phones: Explore and AZEDEV as ruled lists, language, and the two community actions.
export const MobileMenu = () => {
    if (!state.isMobileMenuOpen) return '';
    const Row = (it) => `
        <li class="border-b border-line">
            ${it.href
                ? `<a href="${it.href}" target="_blank" rel="noopener noreferrer" class="flex min-h-12 items-center gap-3 text-[15px] text-text-soft">${icon(it.icon)}${it.label()}${icon('arrow-up-right', 'size-3.5 ml-auto')}${newTabNote()}</a>`
                : `<button type="button" onclick="${it.go}" class="flex min-h-12 w-full items-center gap-3 text-left text-[15px] ${it.view === state.view ? 'text-text' : 'text-text-soft'}">${icon(it.icon)}${it.label()}${StationTag(it)}</button>`}
        </li>`;
    return `
    <div class="fixed inset-0 z-40 overflow-y-auto bg-bg px-5 pb-28 pt-20 lg:hidden" role="dialog" aria-modal="true" aria-label="Daha çox">
        ${MORE.map((g) => `
        <section class="mt-6">
            <h2 class="t-label">${g.label()}</h2>
            <ul class="mt-2 border-t border-line">${g.items.map(Row).join('')}</ul>
        </section>`).join('')}
        <section class="mt-8">
            <h2 class="t-label">Məzmun dili</h2>
            <p class="mt-1 text-[13px] text-text-mute">Dərslər və izahlar bu dildə göstərilir. Menyular Azərbaycan dilində qalır.</p>
            <div class="mt-3 flex flex-wrap gap-2">${languages.map((l) => `<button type="button" onclick="window.setLanguage('${l.code}')" class="az-chip" translate="no" aria-pressed="${state.lang === l.code}">${l.name}</button>`).join('')}</div>
        </section>
        <div class="mt-8 grid gap-3">
            ${SupportNote({ compact: true })}
            ${Button(t('nav.upload'), { onclick: 'window.openUploadModal()', icon: 'upload' })}
        </div>
    </div>`;
};

// ---- Global search: one box for topics, roadmaps, resources, projects and questions ----

const GROUPS = [
    { id: 'all', label: 'Hamısı' },
    { id: 'topics', label: 'Dərslər' },
    { id: 'paths', label: 'Öyrənmə yolları' },
    { id: 'resources', label: 'Materiallar' },
    { id: 'projects', label: 'Layihələr' },
    { id: 'questions', label: 'Suallar' },
    { id: 'pages', label: 'Bölmələr' }
];
const QUICK = ['React', 'JavaScript', 'Kiber təhlükəsizlik', 'Python', 'Docker'];

const openUrl = (url) => () => window.open(url, '_blank', 'noopener');
let searchIndex = null;
let searchIndexLang = '';
const buildIndex = () => {
    if (searchIndex && searchIndexLang === state.lang) return searchIndex;
    const idx = [];
    for (const cat of categories) {
        for (const sub of cat.subCategories) {
            const subName = L(sub.title);
            idx.push({ group: 'paths', title: subName, subtitle: L(cat.title), iconHtml: categoryIcon(cat.id, 'size-4'), action: () => window.navigateToCategory(cat.id, sub.id) });
            stagesOf(sub.id, state.lang).forEach((stage, i) => idx.push({
                group: 'topics', title: stage.title, subtitle: `${subName} · ${(stage.items || []).slice(0, 3).join(', ')}`,
                keywords: (stage.items || []).join(' '), iconHtml: icon('map'), action: () => window.openTopic(cat.id, sub.id, i)
            }));
            for (const r of contentData[sub.id]?.resources?.items || []) {
                idx.push({ group: 'resources', title: r.title, subtitle: `${subName} · ${r.desc || ''}`, iconHtml: icon(r.type === 'youtube' ? 'circle-play' : 'file-text'), action: openUrl(r.url) });
            }
            for (const q of contentData[sub.id]?.interview || []) {
                idx.push({ group: 'questions', title: L(q.q), subtitle: `Müsahibə · ${subName}`, iconHtml: icon('message-square'), action: () => window.navigateToCategory(cat.id, sub.id, 'interview') });
            }
        }
    }
    coursesData.forEach((c) => idx.push({ group: 'resources', title: c.title, subtitle: `Kurs · ${c.provider}`, iconHtml: icon('graduation-cap'), action: openUrl(c.url) }));
    booksData.forEach((b) => idx.push({ group: 'resources', title: b.title, subtitle: `Kitab · ${b.author}`, iconHtml: icon('book-open'), action: () => window.navigateTo('books') }));
    videosData.forEach((v) => idx.push({ group: 'resources', title: v.name || v.title || v.channel, subtitle: `Video · ${v.category || ''}`, iconHtml: icon('circle-play'), action: v.url ? openUrl(v.url) : () => window.navigateTo('videos') }));
    documentationLinks.forEach((d) => idx.push({ group: 'resources', title: d.name || d.title, subtitle: `Sənəd · ${d.category || ''}`, iconHtml: icon('library'), action: d.url ? openUrl(d.url) : () => window.navigateTo('docs') }));
    downloadableCheatSheets.forEach((cs) => idx.push({ group: 'resources', title: cs.title, subtitle: 'Konspekt', iconHtml: icon('file-text'), action: () => { window.navigateTo('downloads'); window.previewCheatSheet(cs.id); } }));
    allProjects().forEach(({ sub, project }) => idx.push({ group: 'projects', title: L(project.title), subtitle: `Layihə · ${subTitle(sub)} · ${(project.tech || []).slice(0, 3).join(', ')}`, keywords: sub, iconHtml: icon('hammer'), action: () => window.openProjectsFor(sub) }));
    (globalFaqData || []).forEach((sec) => (sec.questions || sec.items || []).forEach((q) => idx.push({ group: 'questions', title: L(q.q || q.question), subtitle: 'Suallar və cavablar', iconHtml: icon('circle-help'), action: () => window.navigateTo('faq') })));
    (glossary || []).forEach((g) => idx.push({ group: 'questions', title: g.term, subtitle: `Termin · ${L(g.desc) || ''}`, iconHtml: icon('book-marked'), action: () => window.navigateTo('glossary') }));
    [...NAV.flatMap((g) => g.items || [{ ...g, desc: '' }]), ...MORE.flatMap((g) => g.items)].filter((it) => it.go).forEach((it) => idx.push({
        group: 'pages', title: it.label(), subtitle: it.desc || 'Bölmə', iconHtml: icon(it.icon), action: () => new Function(it.go)()
    }));
    searchIndex = idx.filter((x) => x.title);
    searchIndexLang = state.lang;
    return searchIndex;
};

window.setSearchGroup = (group) => {
    state.searchGroup = group;
    state.commandPaletteSelectedIndex = 0;
    window.__azRender?.();
    document.getElementById('cmd-input')?.focus();
};
window.quickSearch = (q) => window.setCommandSearch(q);

// Full screen on phones, an app window from 640px. Results come in groups; the group filter narrows them.
export const CommandPalette = () => {
    if (!state.isCommandPaletteOpen) return '';
    const query = (state.searchQuery || '').toLowerCase().trim();
    const group = state.searchGroup || 'all';
    const words = query.split(/\s+/).filter(Boolean);
    const match = (x) => words.every((w) => `${x.title} ${x.subtitle} ${x.keywords || ''}`.toLowerCase().includes(w));
    const index = buildIndex();

    let sections = [];
    if (words.length) {
        const hits = index.filter(match);
        const counts = Object.fromEntries(GROUPS.map((g) => [g.id, g.id === 'all' ? hits.length : hits.filter((h) => h.group === g.id).length]));
        state.searchCounts = counts;
        sections = GROUPS.filter((g) => g.id !== 'all' && (group === 'all' || group === g.id))
            .map((g) => ({ ...g, items: hits.filter((h) => h.group === g.id).slice(0, group === 'all' ? 4 : 40) }))
            .filter((s) => s.items.length);
    } else {
        state.searchCounts = null;
        sections = [{ id: 'pages', label: 'Bölmələr', items: index.filter((x) => x.group === 'pages').slice(0, 9) }];
    }
    const flat = sections.flatMap((s) => s.items);
    state.commandPaletteResults = flat;
    if (state.commandPaletteSelectedIndex >= flat.length) state.commandPaletteSelectedIndex = Math.max(0, flat.length - 1);

    let n = -1;
    const Item = (item) => {
        n += 1;
        const selected = n === state.commandPaletteSelectedIndex;
        return `
            <li id="cmd-item-${n}" role="option" aria-selected="${selected}" onclick="window.selectCommandItem(${n})"
                class="flex min-h-12 cursor-pointer items-center gap-3 rounded-md px-3 py-2 transition-colors ${selected ? 'bg-alpha-6' : 'hover:bg-alpha-4'}">
                <span class="${selected ? 'text-text' : 'text-text-mute'}">${item.iconHtml}</span>
                <span class="min-w-0 flex-1">
                    <span class="block truncate text-[14px] font-medium text-text">${esc(item.title)}</span>
                    <span class="block truncate text-[13px] text-text-mute">${esc(item.subtitle)}</span>
                </span>
                ${icon('arrow-right', `size-3.5 ${selected ? 'text-text' : 'text-text-dim'}`)}
            </li>`;
    };

    return `
    <div class="fixed inset-0 z-[999] flex items-start justify-center bg-bg sm:bg-bg/80 sm:px-4 sm:pt-[10vh] sm:backdrop-blur-sm" onclick="if (event.target === this) window.closeCommandPalette()">
        <div class="az-window flex h-full w-full max-w-none flex-col !rounded-none !border-0 sm:h-auto sm:max-h-[76vh] sm:max-w-2xl sm:!rounded-window sm:!border" role="dialog" aria-modal="true" aria-label="Axtarış">
            <div class="flex items-center gap-3 border-b border-line px-4 pt-[env(safe-area-inset-top)]">
                <span class="text-text-mute">${icon('search', 'size-5')}</span>
                <input id="cmd-input" type="search" value="${esc(state.searchQuery)}" oninput="window.setCommandSearch(this.value)"
                    placeholder="Dərs, material, layihə və ya sual axtar" aria-label="Axtarış sorğusu" autocomplete="off" enterkeyhint="search"
                    class="h-14 w-full bg-transparent text-[16px] text-text placeholder:text-text-mute focus:outline-none">
                <button type="button" onclick="window.closeCommandPalette()" class="shrink-0 text-[14px] text-text-soft sm:hidden">Bağla</button>
                <button type="button" onclick="window.closeCommandPalette()" aria-label="Bağla" class="hidden sm:block">${Kbd('Esc')}</button>
            </div>
            ${words.length ? `
            <div class="flex gap-2 overflow-x-auto border-b border-line px-4 py-2.5 no-scrollbar" role="group" aria-label="Nəticə qrupu">
                ${GROUPS.filter((g) => g.id === 'all' || state.searchCounts?.[g.id]).map((g) => `
                <button type="button" class="az-chip shrink-0" aria-pressed="${group === g.id}" onclick="window.setSearchGroup('${g.id}')">${g.label}<span class="az-chip__count">${state.searchCounts?.[g.id] ?? 0}</span></button>`).join('')}
            </div>` : `
            <div class="border-b border-line px-4 py-3">
                <p class="t-caption">Tez axtarış</p>
                <div class="mt-2 flex flex-wrap gap-2">${QUICK.map((q) => `<button type="button" class="az-chip" onclick="window.quickSearch('${q}')">${q}</button>`).join('')}</div>
            </div>`}
            <div class="flex-1 overflow-y-auto p-2" role="listbox" aria-label="Nəticələr">
                ${flat.length === 0 ? `
                    <div class="px-4 py-10 text-center">
                        <p class="text-[15px] text-text">“${esc(state.searchQuery)}” üçün nəticə tapılmadı</p>
                        <p class="t-small mt-1">Daha qısa və ya başqa söz yaz (məsələn: “html”, “python”), ya da bütün yollara bax.</p>
                        <button type="button" class="az-btn az-btn--ghost mt-4" onclick="window.closeCommandPalette(); window.navigateTo('roadmaps')">Bütün yollar${icon('arrow-right')}</button>
                    </div>
                ` : sections.map((s) => `
                    <p class="t-label px-3 pb-1 pt-3">${s.label}</p>
                    <ul>${s.items.map(Item).join('')}</ul>`).join('')}
            </div>
            <div class="hidden items-center gap-4 border-t border-line px-4 py-2.5 text-[12px] text-text-mute sm:flex">
                <span class="flex items-center gap-1.5">${Kbd('↑')}${Kbd('↓')} seç</span>
                <span class="flex items-center gap-1.5">${Kbd('Enter')} aç</span>
                <span class="ml-auto flex items-center gap-1.5">${Kbd('/')} və ya ${Kbd('⌘K')} ilə açılır</span>
            </div>
        </div>
    </div>`;
};

// Global command item selection helper
window.selectCommandItem = (idx) => {
    const item = state.commandPaletteResults && state.commandPaletteResults[idx];
    if (item && item.action) {
        window.closeCommandPalette();
        item.action();
    }
};

// The roadmap tree sidebar was retired with the app shell: a path page switches paths in its own header.
export const Sidebar = () => '';

// Quiet product footer: legal and community links under a hairline.
// Support, in AZEDEV's voice: we build Learn as a hobby and keep it free; a coffee is welcome, never required.
// compact: the sidebar's small note; otherwise a ruled row for the end of a lesson, a test result or the profile.
export const SupportNote = ({ compact = false, lead = '' } = {}) => compact ? `
    <a href="${azedevBrand.urls.kofe}" target="_blank" rel="noopener noreferrer" class="group block rounded-md border border-alpha-8 px-3 py-3 transition-colors hover:border-alpha-15">
        <span class="flex items-center gap-2 text-[13px] font-medium text-text">${icon('coffee', 'size-4 text-accent-text')}Bizə bir kofe al</span>
        <span class="mt-1 block text-[12px] leading-snug text-text-mute">Learn-i hobbi kimi, pulsuz edirik. Xoşuna gəlirsə, dəstək ol.</span>
        ${newTabNote()}
    </a>` : `
    <aside class="mt-10 flex items-start gap-3 border-y border-line py-5" aria-label="Dəstək ol">
        <span class="mt-0.5 shrink-0 text-accent-text" aria-hidden="true">${icon('coffee', 'size-5')}</span>
        <div class="min-w-0 flex-1">
            <p class="text-[15px] leading-relaxed text-text-soft">${lead ? `<span class="text-text">${lead}</span> ` : ''}AZEDEV Learn-i işdən sonra, hobbi kimi qururuq və pulsuz saxlayırıq. Faydalı olubsa, bizə bir kofe ala bilərsən.</p>
            <a href="${azedevBrand.urls.kofe}" target="_blank" rel="noopener noreferrer" class="mt-2 inline-flex min-h-11 items-center gap-1 text-[14px] font-medium text-text underline decoration-alpha-25 underline-offset-4 transition-colors hover:decoration-text">Kofe.al-da dəstək ol${icon('arrow-up-right', 'size-3.5')}${newTabNote()}</a>
        </div>
    </aside>`;

export const Footer = () => `
    <footer class="mt-auto border-t border-line">
        <div class="ln-page ln-page--footer flex flex-col gap-3 text-[13px] text-text-mute sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 AZEDEV · Açıq təhsil platforması</p>
            <nav aria-label="Alt keçidlər" class="flex flex-wrap items-center gap-x-5">
                <button type="button" onclick="window.navigateTo('about')" class="min-h-11 min-w-11 px-1 hover:text-text">Haqqımızda</button>
                <button type="button" onclick="window.navigateTo('faq')" class="min-h-11 min-w-11 px-1 hover:text-text">Suallar</button>
                <button type="button" onclick="window.navigateTo('contribute')" class="min-h-11 min-w-11 px-1 hover:text-text">Material əlavə et</button>
                <button type="button" onclick="window.navigateTo('verify')" class="min-h-11 min-w-11 px-1 hover:text-text">Sertifikatı yoxla</button>
                <button type="button" onclick="window.navigateTo('privacy')" class="min-h-11 min-w-11 px-1 hover:text-text">Məxfilik</button>
                <button type="button" onclick="window.navigateTo('terms')" class="min-h-11 min-w-11 px-1 hover:text-text">Şərtlər</button>
                <a href="${azedevBrand.urls.whatsapp}" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 min-w-11 items-center gap-1 px-1 hover:text-text">WhatsApp icması${icon('arrow-up-right', 'size-3.5')}${newTabNote()}</a>
                <a href="${azedevBrand.urls.kofe}" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 min-w-11 items-center gap-1 px-1 hover:text-text">Dəstək ol${icon('arrow-up-right', 'size-3.5')}${newTabNote()}</a>
                <a href="${azedevBrand.urls.github}" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 min-w-11 items-center gap-1 px-1 hover:text-text">GitHub${icon('arrow-up-right', 'size-3.5')}${newTabNote()}</a>
            </nav>
        </div>
    </footer>`;

// The page frame: every view is Page(content). width: 'default' (1080px) or 'narrow' (720px, reading).
export const Page = (content, { width = 'default' } = {}) => `
    <main id="main" class="flex-1">
        <div class="ln-page${width === 'narrow' ? ' ln-page--narrow' : ''}">${content}</div>
    </main>
    ${Footer()}`;
