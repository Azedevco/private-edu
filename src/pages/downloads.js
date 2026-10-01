// AZEDEV Learn - Konspektlər (the Learn section's files): official cheat sheets and community uploads as compact cards,
// the submission sheet, the reading view, and the admin panel. Phones get full-screen sheets; desktop, centred windows.
import { ruSheet } from '../ru.js'
import { categories } from '../data.js'
import { downloadableCheatSheets } from '../azedev-data.js'
import { getCommunityUploads } from '../storage.js'
import { renderMarkdown, readingMinutes } from '../markdown.js'
import { loadAdminData, loadCommunity, getAdminData } from '../api.js'
import { levelAz } from '../plain.js'
import { state, getLocalizedContent } from '../core.js'
import { Page } from '../shell.js'
import { Hint, isBeginner } from '../onboarding.js'
import { icon } from '../icons.js'
import {
    Button, ExternalLink, Status, Badge, Label, Chips, Segmented, EmptyState, esc,
    PageTitle, Section, ResourceCard, LearnTabs, Stats
} from '../ui.js'

// Hub filters. Colour only names the category (label dots); the rest stay neutral.
const HUB_CATEGORIES = [
    { id: 'web-dev', label: 'Veb', color: 'violet' },
    { id: 'infra-sec', label: 'DevOps və kiber', color: 'orange' },
    { id: 'data-ai', label: 'Data və AI', color: 'green' },
    { id: 'mobile-dev', label: 'Mobil', color: '' },
    { id: 'qa-test', label: 'QA və test', color: '' }
];

const TYPE_LABEL = {
    cheatsheet: 'Konspekt',
    guide: 'Bələdçi',
    template: 'Şablon',
    course: 'Kurs',
    tool: 'Alət',
    doc: 'Texniki təlimat'
};

// Community uploads live in localStorage (and backups can be imported), so their ids and URLs are untrusted.
const safeId = (id) => String(id ?? '').replace(/[^\w-]/g, '');
const safeUrl = (url) => {
    const value = String(url ?? '').trim();
    return /^https?:\/\//i.test(value) ? esc(value) : '';
};

const categoryName = (id) => {
    const hub = HUB_CATEGORIES.find((c) => c.id === id);
    if (hub) return hub.label;
    const cat = categories.find((c) => c.id === id);
    if (cat) return getLocalizedContent(cat.title);
    return id && id !== 'other' ? esc(id) : 'Digər';
};
const categoryLabel = (id) => Label(categoryName(id), HUB_CATEGORIES.find((c) => c.id === id)?.color || '');
const typeName = (type) => TYPE_LABEL[type] || esc(type || 'Material');

const sheetCategory = (cs) => cs.hubCategory || (
    cs.id === 'js-modern-cheatsheet' ? 'web-dev' :
    ['git-mastery', 'docker-cheat', 'linux-commands'].includes(cs.id) ? 'infra-sec' :
    ['sql-optimization', 'system-design-primer'].includes(cs.id) ? 'data-ai' : cs.category
);

// A title that opens the reading view: the card's secondary way in, next to its one "Yüklə" action.
const PreviewTitle = (title, onclick) => `<button type="button" onclick="${onclick}" class="text-left underline decoration-alpha-20 underline-offset-4 transition-colors hover:decoration-alpha-40">${title}</button>`;

// --- Konspektlər ---
export const DownloadsHubPage = () => {
    loadCommunity();
    const allUploads = getCommunityUploads();
    const query = (state.downloadsSearch || '').toLowerCase().trim();
    const catFilter = state.downloadsCategoryFilter;

    const sheetMatches = (cs) => !query || `${cs.title} ${cs.desc} ${cs.category}`.toLowerCase().includes(query);
    const uploadMatches = (up) => !query || `${up.title} ${up.desc} ${up.author}`.toLowerCase().includes(query);

    const filteredSheets = downloadableCheatSheets.filter((cs) => (catFilter === 'all' || sheetCategory(cs) === catFilter) && sheetMatches(cs));
    const filteredUploads = allUploads.filter((up) => (catFilter === 'all' || up.category === catFilter) && uploadMatches(up));

    // Chip counts follow the search, so each chip says how many results it would show.
    const countFor = (id) =>
        downloadableCheatSheets.filter((cs) => (id === 'all' || sheetCategory(cs) === id) && sheetMatches(cs)).length +
        allUploads.filter((up) => (id === 'all' || up.category === id) && uploadMatches(up)).length;
    const chips = [{ id: 'all', label: 'Hamısı' }, ...HUB_CATEGORIES].map((c) => ({ id: c.id, label: c.label, count: countFor(c.id) }));

    const official = filteredSheets.length === 0
        ? EmptyState('Bu filtrə uyğun konspekt tapılmadı', 'Axtarış sözünü dəyiş və ya “Hamısı” filtrini seç.')
        : `<ul class="ln-rows">${filteredSheets.map((cs) => {
            const id = safeId(cs.id);
            return ResourceCard({
                tag: 'li',
                title: esc(cs.title),
                icon: 'file-text',
                meta: [categoryName(sheetCategory(cs)), cs.level ? esc(levelAz(cs.level)) : '', `${readingMinutes(cs.content)} dəq oxu`],
                note: cs.desc ? esc(cs.desc) : '',
                onclick: `window.previewCheatSheet('${id}')`,
                action: 'Oxu'
            });
        }).join('')}</ul>`;

    const community = filteredUploads.length === 0
        ? EmptyState('İcma materialı tapılmadı', 'Filtri dəyiş və ya ilk materialı sən göndər.')
        : `<ul class="ln-rows">${filteredUploads.map((up) => {
            const id = safeId(up.id);
            const link = safeUrl(up.url);
            const title = up.content ? PreviewTitle(esc(up.title), `window.previewUploadedResource('${id}')`) : esc(up.title);
            const action = up.content
                ? { onclick: `window.downloadUploadedResource('${id}')`, action: 'Yüklə' }
                : link ? { href: link, action: 'Keçidi aç' } : {};
            return ResourceCard({
                tag: 'li',
                title,
                icon: up.content ? 'file-text' : 'link',
                meta: [typeName(up.type), esc(up.format), esc(up.author), `<span class="tabular-nums">${esc(up.date)}</span>`, categoryName(up.category)],
                ...action
            });
        }).join('')}</ul>`;

    return Page(`
        ${PageTitle({
            title: 'Öyrən',
            description: 'Yükləyib oflayn oxuya biləcəyin qısa qeydlər və icmanın göndərdiyi materiallar.',
            // Beginners come here to read: sending a material is offered, not pushed.
            action: Button('Material göndər', { onclick: 'window.openUploadModal()', variant: isBeginner() ? 'ghost' : 'primary', icon: 'upload' }),
            tabs: LearnTabs('downloads')
        })}
        ${Hint('resources')}

        <div class="mt-8 grid gap-3">
            <div class="relative w-full sm:max-w-md">
                <span class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-mute">${icon('search')}</span>
                <input type="search" id="downloads-search-input" value="${esc(state.downloadsSearch)}"
                    oninput="window.setDownloadsSearch(this.value)" aria-label="Konspekt axtarışı" autocomplete="off"
                    placeholder="Git, Docker, Linux, React..." class="az-input pl-10">
            </div>
            <div class="-mx-5 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:px-0 [&>div]:flex-nowrap sm:[&>div]:flex-wrap">
                ${Chips(chips, catFilter, (id) => `window.setDownloadsFilter('${id}')`, 'Kateqoriya')}
            </div>
        </div>

        ${Section({ id: 'official-title', title: 'Rəsmi konspektlər', note: `${filteredSheets.length} fayl`, body: official })}
        ${Section({ id: 'community-title', title: 'İcmanın materialları', note: `${filteredUploads.length} təsdiqlənmiş material`, body: community })}
    `);
};

// Sheet frame: full screen on phones (sticky header and footer), a centred app window from 640px.
const Sheet = ({ labelledBy, onClose, width = 'sm:max-w-xl', title, subtitle = '', body, footer, form = '' }) => {
    const inner = `
        <header class="flex shrink-0 items-start gap-3 border-b border-line px-4 py-3 pt-[calc(12px+env(safe-area-inset-top))] sm:px-6 sm:pt-4">
            <div class="min-w-0 flex-1 py-1">
                <h2 id="${labelledBy}" class="t-title">${title}</h2>
                ${subtitle ? `<p class="t-small mt-0.5 truncate">${subtitle}</p>` : ''}
            </div>
            <button type="button" class="flex size-11 shrink-0 items-center justify-center rounded-md text-text-soft transition-colors hover:bg-alpha-4 hover:text-text" onclick="${onClose}" aria-label="Bağla">${icon('x', 'size-5')}</button>
        </header>
        <div class="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">${body}</div>
        <footer class="shrink-0 border-t border-line px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] sm:px-6 sm:pb-3">${footer}</footer>`;
    return `
    <div class="fixed inset-0 z-[999] flex items-stretch justify-center bg-bg sm:items-center sm:bg-bg/80 sm:p-4" onclick="if (event.target === this) ${onClose}">
        <div class="flex h-full w-full flex-col bg-bg sm:h-auto sm:max-h-[90vh] ${width} sm:overflow-hidden sm:rounded-window sm:border sm:border-alpha-10 sm:bg-card sm:[box-shadow:var(--shadow-window)]" role="dialog" aria-modal="true" aria-labelledby="${labelledBy}">
            ${form ? `<form ${form} class="flex min-h-0 flex-1 flex-col">${inner}</form>` : inner}
        </div>
    </div>`;
};

const Field = ({ id, label, control, hint = '' }) => `
    <div class="az-field">
        <label class="az-field__label" for="${id}">${label}</label>
        ${control}
        ${hint ? `<p class="az-field__hint" id="${id}-hint">${hint}</p>` : ''}
    </div>`;

// --- Submit a resource: one short form; the submit button stays at the bottom of the sheet ---
export const UploadResourceModal = () => {
    if (!state.uploadModalOpen) return '';

    return Sheet({
        labelledBy: 'upload-title',
        onClose: 'window.closeUploadModal()',
        title: 'Material göndər',
        subtitle: 'Yoxlandıqdan sonra saytda görünəcək',
        form: 'onsubmit="window.handleUploadSubmit(event)"',
        body: `
            <div class="grid gap-5">
                <div class="sr-only" aria-hidden="true"><label for="up-website">Vebsayt</label><input id="up-website" type="text" tabindex="-1" autocomplete="off"></div>
                ${Field({ id: 'up-title', label: 'Başlıq', control: '<input id="up-title" class="az-input" type="text" required placeholder="Məsələn: Next.js 15 Server Actions bələdçisi">' })}
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    ${Field({ id: 'up-cat', label: 'Kateqoriya', control: `
                        <select id="up-cat" class="az-input">
                            ${HUB_CATEGORIES.map((c) => `<option value="${c.id}">${c.label}</option>`).join('')}
                            <option value="other">Digər</option>
                        </select>` })}
                    ${Field({ id: 'up-type', label: 'Növ', control: `
                        <select id="up-type" class="az-input">
                            <option value="cheatsheet">Konspekt (MD / TXT)</option>
                            <option value="guide">Təlimat və ya bələdçi</option>
                            <option value="template">Layihə şablonu</option>
                            <option value="course">Video kurs və ya pleylist</option>
                            <option value="tool">Proqramçı aləti</option>
                        </select>` })}
                </div>
                ${Field({ id: 'up-author', label: 'Adın və ya GitHub adın', control: '<input id="up-author" class="az-input" type="text" autocomplete="name" placeholder="Adın (@github)">' })}
                ${Field({ id: 'up-desc', label: 'Qısa təsvir', control: '<textarea id="up-desc" class="az-input" required rows="2" placeholder="Bu material nə haqqındadır və kimə faydalıdır?"></textarea>' })}
                ${Field({ id: 'up-url', label: 'Xarici keçid (istəyə bağlı)', control: '<input id="up-url" class="az-input" type="url" inputmode="url" placeholder="https://github.com/...">' })}
                ${Field({
                    id: 'up-content',
                    label: 'Məzmun (Markdown və ya mətn, istəyə bağlı)',
                    control: '<textarea id="up-content" class="az-input font-mono text-[14px]" rows="6" aria-describedby="up-content-hint" placeholder="# Başlıq&#10;Yüklənəcək faylın mətni..."></textarea>',
                    hint: 'Mətni olan materialı başqaları .md faylı kimi yükləyə biləcək.'
                })}
            </div>`,
        footer: `
            <div class="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p class="t-small">AZEDEV komandası hər göndərilən materialı yoxlayır.</p>
                <button type="submit" class="az-btn az-btn--primary w-full sm:w-auto">Göndər${icon('arrow-right')}</button>
            </div>`
    });
};

// --- Reading view: the file's text before downloading it ---
export const ResourcePreviewModal = () => {
    if (!state.previewResource) return '';

    const ruSheetText = state.lang === 'ru' && ruSheet(state.previewResource.id);
    const res = ruSheetText ? { ...state.previewResource, ...ruSheetText } : state.previewResource;
    const official = downloadableCheatSheets.some((cs) => cs.id === res.id);
    const category = official ? categoryName(sheetCategory(res)) : categoryName(res.category);

    return Sheet({
        labelledBy: 'preview-title',
        onClose: 'window.closePreviewModal()',
        width: 'sm:max-w-3xl',
        title: esc(res.title),
        subtitle: [category, `${readingMinutes(res.content)} dəq oxu`, official ? 'AZEDEV' : esc(res.author)].filter(Boolean).join(' · '),
        body: res.content
            ? `<article class="ln-md pb-4">${renderMarkdown(res.content)}</article>`
            : EmptyState('Mətn məzmunu yoxdur', 'Bu material yalnız keçid kimi paylaşılıb.'),
        footer: `
            <div class="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
                ${Button('Mətni kopyala', { onclick: 'window.copyPreviewContent()', icon: 'copy' })}
                ${Button('Yüklə (.md)', { onclick: 'window.downloadPreviewResource()', variant: 'primary', icon: 'download' })}
            </div>`
    });
};

const StatusBadge = (status) => status === 'approved'
    ? Badge('Təsdiqlənib', { dot: 'live' })
    : Badge('Gözləmədə', { dot: 'beta' });

const Author = (sub) => {
    const link = safeUrl(sub.url);
    return `${esc(sub.author)}${link ? `<span class="az-cell-sub">${ExternalLink('Keçid', link, 'text-[13px]')}</span>` : ''}`;
};

// --- Admin: a login card, then the dashboard (moderation, add, all resources, backup) ---
export const AdminPage = () => {
    if (!state.isAdmin) {
        const error = state.adminError;
        return Page(`
            ${PageTitle({ title: 'Admin', description: 'Materialları idarə etmək və icma göndərişlərini yoxlamaq üçün daxil olun.' })}
            <div class="az-card mt-8 w-full max-w-md">
                <form onsubmit="window.handleAdminLogin(event)" class="grid gap-5">
                    <div class="az-field${error ? ' az-field--error' : ''}">
                        <label class="az-field__label" for="admin-passcode">Admin token</label>
                        <input id="admin-passcode" class="az-input font-mono" type="password" required autocomplete="current-password"${error ? ' aria-invalid="true" aria-describedby="admin-passcode-hint"' : ''}>
                        ${error ? `<p class="az-field__hint" id="admin-passcode-hint">${esc(error)}</p>` : ''}
                    </div>
                    <button type="submit" class="az-btn az-btn--primary w-full">Daxil ol${icon('arrow-right')}</button>
                </form>
            </div>
        `, { width: 'narrow' });
    }

    // The queue lives on the server; load it once after a reload (the token is kept for this tab).
    const data = getAdminData();
    if (!data) {
        loadAdminData().then((r) => { if (!r.ok) { state.isAdmin = false; state.adminError = r.unauthorized ? 'Sessiyanın vaxtı bitib, yenidən daxil ol.' : 'Server əlçatan deyil.'; } window.__azRender?.(); });
        return Page(`${PageTitle({ title: 'Admin' })}<p class="t-body mt-6">Yüklənir…</p>`, { width: 'narrow' });
    }
    const pendingSubmissions = data.queue;
    const allSubmissions = data.approved;
    const requests = data.requests;
    const tab = state.adminTab;

    const Actions = (sub) => `
        <div class="flex justify-end gap-2">
            ${sub.status !== 'approved' ? Button('Təsdiqlə', { onclick: `window.adminApprove('${safeId(sub.id)}')`, size: 'sm', icon: 'check' }) : ''}
            ${sub.status === 'pending' ? Button('Rədd et', { onclick: `window.adminReject('${safeId(sub.id)}')`, size: 'sm', icon: 'x' }) : ''}
            ${Button('Sil', { onclick: `window.adminDelete('${safeId(sub.id)}')`, size: 'sm', icon: 'trash-2' })}
        </div>`;

    const requestList = requests.length === 0
        ? EmptyState('Açıq müraciət yoxdur', 'Mentor yoxlaması və sertifikat müraciətləri burada görünəcək.')
        : `
        <div class="az-table-wrap">
            <table class="az-table">
                <thead><tr><th scope="col">Növ</th><th scope="col">Yol</th><th scope="col">Repo</th><th scope="col">Final</th><th scope="col">Tarix</th><th scope="col"><span class="sr-only">Əməliyyatlar</span></th></tr></thead>
                <tbody>
                    ${requests.map((r) => `
                    <tr>
                        <td>${r.kind === 'certificate' ? 'Sertifikat' : 'Mentor yoxlaması'}</td>
                        <td>${esc(r.path)}${r.project ? `<span class="az-cell-sub">${esc(r.project)}</span>` : ''}</td>
                        <td>${safeUrl(r.repo) ? ExternalLink(esc(r.repo.replace('https://github.com/', '')), safeUrl(r.repo), 'text-[13px]') : ''}</td>
                        <td class="tabular-nums">${esc(r.finalScore || '')}</td>
                        <td class="whitespace-nowrap tabular-nums">${esc(String(r.createdAt || '').slice(0, 10))}</td>
                        <td><div class="flex justify-end gap-2">${Button(r.kind === 'certificate' ? 'Verildi' : 'Qəbul et', { onclick: `window.adminCloseRequest('${safeId(r._id)}', 'done')`, size: 'sm', icon: 'check' })}${Button(r.kind === 'certificate' ? 'Rədd et' : 'Düzəliş istə', { onclick: `window.adminCloseRequest('${safeId(r._id)}', 'declined')`, size: 'sm', icon: 'x' })}</div></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;

    const moderation = pendingSubmissions.length === 0
        ? EmptyState('Təsdiq gözləyən material yoxdur', 'Yeni icma göndərişləri burada görünəcək.')
        : `
        <div class="az-table-wrap">
            <table class="az-table">
                <thead><tr><th scope="col">Material</th><th scope="col">Müəllif</th><th scope="col">Kateqoriya</th><th scope="col">Tarix</th><th scope="col">Status</th><th scope="col"><span class="sr-only">Əməliyyatlar</span></th></tr></thead>
                <tbody>
                    ${pendingSubmissions.map((sub) => `
                    <tr>
                        <td class="min-w-[16rem]">${esc(sub.title)}<span class="az-cell-sub">${typeName(sub.type)} · ${esc(sub.desc)}</span></td>
                        <td class="whitespace-nowrap">${Author(sub)}</td>
                        <td>${categoryLabel(sub.category)}</td>
                        <td class="whitespace-nowrap tabular-nums">${esc(sub.date)}</td>
                        <td>${StatusBadge(sub.status)}</td>
                        <td>${Actions(sub)}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;

    const addResource = `
        <div class="az-card max-w-2xl">
            <h2 class="t-title">Rəsmi material əlavə edin</h2>
            <p class="t-body mt-1">Admin əlavə etdiyi material moderasiyasız dərhal dərc olunur.</p>
            <form onsubmit="window.handleAdminAddResource(event)" class="mt-6 grid gap-5">
                ${Field({ id: 'adm-title', label: 'Başlıq', control: '<input id="adm-title" class="az-input" type="text" required placeholder="Məsələn: Go mikroxidmətlər konspekti">' })}
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    ${Field({ id: 'adm-cat', label: 'Kateqoriya', control: `
                        <select id="adm-cat" class="az-input">
                            ${categories.map((c) => `<option value="${c.id}">${getLocalizedContent(c.title)}</option>`).join('')}
                        </select>` })}
                    ${Field({ id: 'adm-type', label: 'Növ', control: `
                        <select id="adm-type" class="az-input">
                            <option value="cheatsheet">Konspekt</option>
                            <option value="guide">Bələdçi</option>
                            <option value="doc">Texniki təlimat</option>
                            <option value="tool">Alət</option>
                        </select>` })}
                </div>
                ${Field({ id: 'adm-desc', label: 'Qısa təsvir', control: '<textarea id="adm-desc" class="az-input" required rows="2" placeholder="Materialın qısa icmalı"></textarea>' })}
                ${Field({ id: 'adm-content', label: 'Məzmun (Markdown)', control: '<textarea id="adm-content" class="az-input font-mono text-[14px]" required rows="8" placeholder="# Başlıq&#10;Yüklənəcək faylın mətni..."></textarea>' })}
                <div><button type="submit" class="az-btn az-btn--primary w-full sm:w-auto">Dərc et${icon('arrow-right')}</button></div>
            </form>
        </div>`;

    const allUploads = allSubmissions.length === 0
        ? EmptyState('Hələ material yoxdur', 'İcma göndərişləri və admin materialları burada siyahılanır.')
        : `
        <div class="az-table-wrap">
            <table class="az-table">
                <thead><tr><th scope="col">Material</th><th scope="col">Müəllif</th><th scope="col">Tarix</th><th scope="col">Status</th><th scope="col"><span class="sr-only">Əməliyyatlar</span></th></tr></thead>
                <tbody>
                    ${allSubmissions.map((sub) => `
                    <tr>
                        <td class="min-w-[16rem]">${esc(sub.title)}<span class="az-cell-sub">${categoryName(sub.category)} · ${typeName(sub.type)}</span></td>
                        <td class="whitespace-nowrap">${Author(sub)}</td>
                        <td class="whitespace-nowrap tabular-nums">${esc(sub.date)}</td>
                        <td>${StatusBadge(sub.status)}</td>
                        <td>${Actions(sub)}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;

    const backup = `
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div class="az-card">
                <h2 class="t-title">Ehtiyat nüsxəni ixrac edin</h2>
                <p class="t-body mt-2">İcma materialları, yükləmə qeydləri və admin materialları bir JSON faylında saxlanılır.</p>
                <div class="mt-6">${Button('JSON kimi ixrac et', { onclick: 'window.exportBackup()', icon: 'download' })}</div>
            </div>
            <div class="az-card">
                <h2 class="t-title">Ehtiyat nüsxədən bərpa edin</h2>
                <p class="t-body mt-2">Əvvəl ixrac edilmiş JSON faylını seçin. Mövcud məlumatlar fayldakı ilə əvəz olunur.</p>
                <input type="file" id="admin-import-file" accept=".json,application/json" onchange="window.handleImportBackup(event)" class="sr-only" tabindex="-1" aria-hidden="true">
                <div class="mt-6">${Button('JSON faylını seçin', { onclick: "document.getElementById('admin-import-file').click()", icon: 'upload' })}</div>
            </div>
        </div>`;

    const panels = { overview: moderation, requests: requestList, 'add-resource': addResource, 'all-uploads': allUploads, backup };

    return Page(`
        ${PageTitle({
            title: 'Admin',
            description: 'İcma göndərişlərini yoxlayın, rəsmi material əlavə edin və məlumatların ehtiyat nüsxəsini saxlayın.',
            action: `<div class="flex items-center gap-3">${Status('Aktiv sessiya', 'live')}${Button('Çıxış', { onclick: 'window.adminLogoutHandler()', icon: 'log-out' })}</div>`
        })}

        <div class="mt-8">${Stats([
            [pendingSubmissions.length, 'təsdiq gözləyir'],
            [requests.length, 'açıq müraciət'],
            [allSubmissions.length, 'icma materialı'],
            [downloadableCheatSheets.length, 'rəsmi konspekt']
        ])}</div>

        <div class="mt-10">
            ${Segmented([
                { id: 'overview', label: 'Moderasiya' },
                { id: 'requests', label: 'Müraciətlər' },
                { id: 'add-resource', label: 'Əlavə et' },
                { id: 'all-uploads', label: 'Bütün materiallar' },
                { id: 'backup', label: 'Ehtiyat nüsxə' }
            ], tab, (id) => `window.setAdminTab('${id}')`, 'Admin bölmələri')}
        </div>

        <div class="mt-6" role="tabpanel">${panels[tab] ?? moderation}</div>
    `);
};
