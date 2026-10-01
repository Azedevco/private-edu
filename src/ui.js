// AZEDEV Learn - shared UI primitives on the AZEDEV design system (tokens + az- components).
// Pages never define their own button, heading, status or card styles: they compose these.
import { icon } from './icons.js'
import { state } from './core.js'
import { levelAz, plainPath, progressSentence } from './plain.js'

// Escape text that did not come from our own data (community uploads, search input) before it reaches innerHTML.
export const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const NEW_TAB = { az: '(yeni pəncərədə açılır)', en: '(opens in a new tab)', tr: '(yeni sekmede açılır)' };
export const newTabNote = () => `<span class="sr-only"> ${NEW_TAB[state.lang] || NEW_TAB.az}</span>`;

// Lucide icons for the roadmap categories (data.js still carries emoji, which the UI never shows).
export const CATEGORY_ICON = {
    'web-dev': 'code-xml',
    'mobile-dev': 'smartphone',
    'data-ai': 'brain',
    'infra-sec': 'shield',
    'game-dev': 'gamepad-2',
    'embedded-iot': 'cpu',
    'emerging': 'blocks',
    'qa-test': 'flask-conical'
};
export const categoryIcon = (id, cls = 'size-5') => icon(CATEGORY_ICON[id] || 'map', cls);

// Each technology area's own card colour (Expa's portfolio tints, as on azedev.com's product cards): the same low
// lightness around the hue wheel, so text-soft and text hold well above 4.5:1 on every one of them.
export const CATEGORY_TINT = {
    'web-dev': 'oklch(0.23 0.045 255)',
    'mobile-dev': 'oklch(0.23 0.045 295)',
    'data-ai': 'oklch(0.23 0.04 160)',
    'infra-sec': 'oklch(0.23 0.05 22)',
    'game-dev': 'oklch(0.23 0.045 340)',
    'embedded-iot': 'oklch(0.23 0.045 55)',
    'emerging': 'oklch(0.23 0.02 275)',
    'qa-test': 'oklch(0.23 0.035 205)'
};
export const categoryTint = (id) => CATEGORY_TINT[id] || 'var(--card)';


/**
 * Button or link in the az-btn look. One `primary` (the white pill) per view; everything else is `ghost`.
 *   Button('Yol xəritələri', { onclick: "window.navigateTo('roadmaps')", variant: 'primary', icon: 'arrow-right' })
 *   Button('GitHub', { href: 'https://github.com/Azedevco' })   // external: new tab, arrow-up-right, screen-reader note
 */
export const Button = (label, { onclick = '', href = '', variant = 'ghost', size = '', icon: iconName, attrs = '', cls = '' } = {}) => {
    const external = /^https?:/.test(href);
    const trailing = iconName === null ? '' : icon(iconName || (external ? 'arrow-up-right' : ''));
    const classes = `az-btn az-btn--${variant}${size === 'sm' ? ' az-btn--sm' : ''} ${cls}`.trim();
    if (href) {
        return `<a class="${classes}" href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''} ${attrs}>${label}${trailing}${external ? newTabNote() : ''}</a>`;
    }
    return `<button type="button" class="${classes}" onclick="${onclick}" ${attrs}>${label}${trailing}</button>`;
};

// A plain text link to another site: text-soft, hairline underline, opens a new tab and says so.
export const ExternalLink = (label, href, cls = '') =>
    `<a href="${href}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-text-soft underline decoration-alpha-20 underline-offset-4 transition-colors hover:text-text ${cls}">${label}${icon('arrow-up-right', 'size-3.5')}${newTabNote()}</a>`;

// Status: a dot and a mono label. kind: 'live' | 'beta' | 'dev'.
// English labels get lang="en" so uppercase stays I, not İ, on Azerbaijani pages (design system: Content).
const enLang = (text) => (/^[\x00-\x7F]+$/.test(String(text).replace(/<[^>]*>/g, '')) ? ' lang="en"' : '');
// Level words from the data are shown in Azerbaijani (junior → Başlanğıc, mid → Orta).
export const Status = (label, kind = 'dev') => {
    const text = levelAz(label);
    return `<span class="az-status az-status--${kind}"${enLang(text)}>${text}</span>`;
};

// Badge: an outlined pill with an optional state dot ('live' | 'beta' | 'dev'), mono for IDs and counts, or success.
export const Badge = (label, { dot = '', mono = false, success = false } = {}) => {
    if (success) return `<span class="az-badge az-badge--success">${icon('check', 'size-3.5')}${label}</span>`;
    if (mono) return `<span class="az-badge az-badge--mono">${label}</span>`;
    return `<span class="az-badge">${dot ? `<span class="az-badge__dot az-badge__dot--${dot}" aria-hidden="true"></span>` : ''}${label}</span>`;
};

// Label: a category tag whose 6px dot names the category. color: 'violet' | 'red' | 'orange' | 'green' | '' (neutral).
export const Label = (label, color = '') => `<span class="az-label${color ? ` az-label--${color}` : ''}">${label}</span>`;

// Difficulty and level words map onto the status colours: easy = live, medium = beta, hard = dev (neutral).
export const levelKind = (level = '') => {
    const l = String(level).toLowerCase();
    if (/(asan|easy|kolay|beginner|başlanğıc|başlangıç|junior)/.test(l)) return 'live';
    if (/(orta|medium|intermediate|mid)/.test(l)) return 'beta';
    return 'dev';
};

// Filter pills. Selected = filled with text colour (the segmented-control rule).
//   Chips([{ id: 'all', label: 'Hamısı', count: 12 }, ...], state.filter, (id) => `window.setFilter('${id}')`, 'Kateqoriya')
export const Chips = (items, activeId, onclickFor, ariaLabel = '') => `
    <div class="flex flex-wrap gap-2" role="group"${ariaLabel ? ` aria-label="${ariaLabel}"` : ''}>
        ${items.map((it) => `
            <button type="button" class="az-chip" aria-pressed="${it.id === activeId}" onclick="${onclickFor(it.id)}">
                ${it.label}${it.count !== undefined ? `<span class="az-chip__count">${it.count}</span>` : ''}
            </button>`).join('')}
    </div>`;

// Segmented control for 2 to 5 views of one thing (tabs inside a page).
export const Segmented = (items, activeId, onclickFor, ariaLabel = '') => `
    <div class="az-seg max-w-full overflow-x-auto no-scrollbar" role="tablist"${ariaLabel ? ` aria-label="${ariaLabel}"` : ''}>
        ${items.map((it) => `<button type="button" class="az-seg__item" role="tab" aria-selected="${it.id === activeId}" onclick="${onclickFor(it.id)}">${it.label}</button>`).join('')}
    </div>`;

// Empty state: a dashed hairline box, a title and one sentence that says what to do.
export const EmptyState = (title, text = '', action = '') => `
    <div class="rounded-card border border-dashed border-alpha-10 px-6 py-14 text-center">
        <p class="t-title">${title}</p>
        ${text ? `<p class="t-body mx-auto mt-2 max-w-[28rem]">${text}</p>` : ''}
        ${action ? `<div class="mt-6 flex justify-center">${action}</div>` : ''}
    </div>`;

// Square icon tile beside card titles: a 20px Lucide icon in text-soft on a hairline square.
export const IconTile = (name, cls = '') => `<span class="flex size-10 shrink-0 items-center justify-center rounded-md border border-alpha-8 bg-alpha-3 text-text-soft ${cls}">${icon(name, 'size-5')}</span>`;

// Keyboard key.
export const Kbd = (key) => `<kbd class="az-kbd">${key}</kbd>`;

// ---------------------------------------------------------------------------------------------------------------------
// AZEDEV EDU product components (the current system). Simple → clear → fast: a page title with at most one primary
// action, sections with a heading and an optional "all" link, compact cards, honest progress. Built only from the AZEDEV
// design system (tokens, az- components, t- type). Colour carries meaning only: status and the current place.
// ---------------------------------------------------------------------------------------------------------------------

/**
 * Page title: optional back link and eyebrow, the title, one sentence, one primary action on the right, and tabs below.
 *   PageTitle({ title: 'Öyrən', description: '…', action: Button(…, { variant: 'primary' }), tabs: Tabs(…) })
 */
export const PageTitle = ({ eyebrow = '', title, description = '', action = '', tabs = '', back = null, home = false }) => `
    <header class="pb-2">
        ${back ? `<button type="button" onclick="${back.go}" class="-ml-1 mb-3 inline-flex min-h-11 items-center gap-1.5 px-1 text-[14px] text-text-mute transition-colors hover:text-text">${icon('arrow-left')}<span>${back.label}</span></button>` : ''}
        ${eyebrow ? `<p class="t-label">${eyebrow}</p>` : ''}
        <div class="${eyebrow ? 'mt-2 ' : ''}flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div class="min-w-0">
                <h1 class="ln-h1${home ? ' ln-h1--home' : ''}">${title}</h1>
                ${description ? `<p class="mt-3 max-w-[40rem] text-[16px] leading-relaxed text-text-soft">${description}</p>` : ''}
            </div>
            ${action ? `<div class="shrink-0">${action}</div>` : ''}
        </div>
        ${tabs}
    </header>`;

// Underline tabs: Tabs([{ id, label, count?, go }], activeId, 'Bölmə').
export const Tabs = (items, activeId, label = '') => `
    <nav class="ln-tabs"${label ? ` aria-label="${label}"` : ''}>
        ${items.map((it) => `<button type="button" class="ln-tab" onclick="${it.go}"${it.id === activeId ? ' aria-current="page"' : ''}>${it.label}${it.count !== undefined ? `<span class="ln-tab__count">${it.count}</span>` : ''}</button>`).join('')}
    </nav>`;

// A plain text link to more of something ("Hamısına baxın →").
export const TextLink = (label, onclick) => `<button type="button" onclick="${onclick}" class="inline-flex min-h-11 shrink-0 items-center gap-1 text-[14px] text-text-mute transition-colors hover:text-text">${label}${icon('arrow-right', 'size-3.5')}</button>`;

// A section: heading, optional link on the right, content.
export const Section = ({ title, link = '', body, id = '', note = '' }) => `
    <section class="mt-10 sm:mt-14"${id ? ` aria-labelledby="${id}"` : ''}>
        <div class="mb-4 flex items-end justify-between gap-4">
            <div class="min-w-0"><h2 ${id ? `id="${id}"` : ''} class="t-title">${title}</h2>${note ? `<p class="t-small mt-0.5">${note}</p>` : ''}</div>
            ${link}
        </div>
        ${body}
    </section>`;

// Progress bar with its label: ProgressBar(72, '12 / 17 mövzu'). Success colour only when complete.
export const ProgressBar = (pct, label = '') => `
    <div>
        <span class="az-meter${pct >= 100 ? ' az-meter--success' : ''}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"${label ? ` aria-label="${label}"` : ''}><span class="az-meter__fill" style="width:${Math.max(0, Math.min(100, pct))}%"></span></span>
        ${label ? `<p class="mt-2 flex justify-between gap-3 text-[13px] text-text-mute"><span>${label}</span><span class="font-mono tabular-nums text-text-soft">${pct}%</span></p>` : ''}
    </div>`;

// Numbers at a glance: Stats([['12 / 17', 'mövzu'], ['8', 'test']]). Real counts only.
export const Stats = (pairs) => `
    <dl class="grid grid-cols-2 overflow-hidden rounded-card border border-line ${({ 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4' })[Math.min(4, pairs.length)] || ''}">
        ${pairs.map(([value, label], i) => `
        <div class="flex flex-col-reverse gap-1 border-line p-4 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t sm:border-t-0' : ''} ${i > 0 && i % 2 === 0 ? 'sm:border-l' : ''}">
            <dt class="text-[13px] text-text-mute">${label}</dt>
            <dd class="text-[20px] font-medium tracking-[-0.01em] text-text [font-variant-numeric:tabular-nums]">${value}</dd>
        </div>`).join('')}
    </dl>`;

// Small area tile: the area's icon on its own tint (the only place area colour appears).
export const AreaTile = (catId, size = 'size-10') => `<span class="flex ${size} shrink-0 items-center justify-center rounded-md border border-alpha-10 text-text-soft" aria-hidden="true">${categoryIcon(catId, 'size-[18px]')}</span>`;

/**
 * Resource row (in a ruled .ln-rows list): type icon, title, one meta line (Video · İngiliscə · youtube.com), an optional
 * note and the verb. The whole row is the link; an external href opens a new tab and says so.
 */
export const ResourceCard = ({ title, meta = [], icon: iconName = 'file-text', href = '', onclick = '', action = 'Başla', note = '', tag = 'article', after = '' }) => {
    // External links name their site in the meta line and carry ↗, so it is clear before the tap that another site opens.
    let host = '';
    const external = /^https?:/.test(href);
    if (external) { try { host = new URL(href).hostname.replace(/^www\./, ''); } catch { host = ''; } }
    const line = [...meta.filter(Boolean), host ? `<span translate="no">${host}</span>` : ''].filter(Boolean).join(' · ');
    const inner = `
            <span class="mt-0.5 shrink-0 text-text-mute" aria-hidden="true">${icon(iconName, 'size-[18px]')}</span>
            <span class="min-w-0 flex-1">
                <span class="ln-row__title t-item block">${title}</span>
                ${line ? `<span class="t-small mt-1 block">${line}</span>` : ''}
                ${note ? `<span class="mt-2 block text-[14px] leading-snug text-text-soft">${note}</span>` : ''}
            </span>
            ${href || onclick ? `<span class="mt-0.5 inline-flex shrink-0 items-center gap-1 text-[14px] font-medium text-text-soft transition-colors group-hover:text-text">${action}${icon(external ? 'arrow-up-right' : 'arrow-right', 'size-4')}</span>` : ''}`;
    const cls = 'group flex min-h-16 w-full items-start gap-3 py-4 text-left';
    const body = href
        ? `<a href="${href}" class="${cls}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${inner}${external ? newTabNote() : ''}</a>`
        : onclick ? `<button type="button" onclick="${onclick}" class="${cls}">${inner}</button>` : `<div class="${cls}">${inner}</div>`;
    return `<${tag}>${body}${after ? `<div class="-mt-3 pb-2 pl-[30px]">${after}</div>` : ''}</${tag}>`;
};

/**
 * Path card: area tile, path name, area and topic count, progress (or "Başlanmayıb"), the whole card opens the path.
 */
export const PathCard = ({ catId, sub = '', name, area, total, done = 0, onclick, compact = false, badge = true }) => {
    const plain = plainPath(sub);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const title = plain.want || name;
    return `
    <button type="button" onclick="${onclick}" class="az-card az-card--link flex h-full w-full flex-col gap-2 p-4 sm:p-5">
        <span class="t-small flex items-center gap-1.5"><span class="text-text-mute" aria-hidden="true">${categoryIcon(catId, 'size-3.5')}</span>${plain.want ? name : area} · ${total} dərs</span>
        <span class="ln-chapter block line-clamp-2">${title}</span>
        ${!compact && plain.promise ? `<span class="text-[14px] leading-snug text-text-soft">${plain.promise}</span>` : ''}
        ${badge && plain.beginner && done === 0 ? `<span class="az-badge self-start"><span class="az-badge__dot az-badge__dot--live" aria-hidden="true"></span>Yeni başlayanlar üçün</span>` : ''}
        ${done > 0 ? ProgressLine(done, total) : ''}
        <span class="mt-auto inline-flex items-center gap-1.5 pt-1 text-[14px] font-medium text-text">${done === 0 ? 'Başla' : done >= total ? 'Yola bax' : 'Davam et'}${icon('arrow-right', 'size-3.5')}</span>
    </button>`;
};

// Progress as one bar and one sentence: "7 dərs bitirdin, 2 dərs qalıb."
export const ProgressLine = (done, total) => {
    const pct = total ? Math.round((done / total) * 100) : 0;
    return `
    <div>
        <span class="az-meter${pct >= 100 ? ' az-meter--success' : ''}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="${progressSentence(done, total)}"><span class="az-meter__fill" style="width:${pct}%"></span></span>
        <p class="mt-2 text-[13px] text-text-soft">${progressSentence(done, total)}</p>
    </div>`;
};

// The Learn section's own tabs: paths first, then the library.
export const LearnTabs = (active) => Tabs([
    { id: 'roadmaps', label: 'Yollar', go: "window.navigateTo('roadmaps')" },
    { id: 'courses', label: 'Kurslar', go: "window.navigateTo('courses')" },
    { id: 'books', label: 'Kitablar', go: "window.navigateTo('books')" },
    { id: 'videos', label: 'Videolar', go: "window.navigateTo('videos')" },
    { id: 'docs', label: 'Texniki təlimatlar', go: "window.navigateTo('docs')" },
    { id: 'downloads', label: 'Konspektlər', go: "window.navigateTo('downloads')" }
], active, 'Öyrən bölməsi');

// The Practice section's tabs.
export const PracticeTabs = (active) => Tabs([
    { id: 'quizzes', label: 'Testlər', go: "window.navigateTo('quizzes')" },
    { id: 'challenges', label: 'Kod tapşırıqları', go: "window.navigateTo('challenges')" },
    { id: 'interview', label: 'Suallar', go: "window.navigateToCategory('web-dev', 'frontend', 'interview')" }
], active, 'Məşq bölməsi');
