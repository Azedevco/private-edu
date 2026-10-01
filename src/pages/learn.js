// AZEDEV Learn - the Learn section's library (materials): courses, books, videos and technical guides (official docs).
// Each page: the Learn title with its tabs, one section, compact resource cards (title, one meta line, one action).
import { coursesData, booksData, videosData, documentationLinks } from '../azedev-data.js'
import curated from '../curated-resources.json' with { type: 'json' }
import { getLocalizedContent } from '../core.js'
import { Page } from '../shell.js'
import { icon } from '../icons.js'
import { Button, esc, PageTitle, Section, ResourceCard, LearnTabs } from '../ui.js'
import { Hint } from '../onboarding.js'
import { levelAz } from '../plain.js'
import { ReportButton } from './report.js'

// --- Courses: free full courses, grouped by language (Azerbaijani and Turkish first); each says who teaches it. ---
const COURSE_GROUPS = [['az', 'Azərbaycanca'], ['tr', 'Türkcə'], ['ru', 'Rusca'], ['en', 'İngiliscə']];
export const CoursesPage = () => {
    const all = [
        ...coursesData.map((c) => ({ title: c.title, provider: c.provider, url: c.url, lang: c.lang || 'en', level: c.level, duration: c.duration, desc: getLocalizedContent(c.desc) })),
        ...(curated.library?.courses || []).map((c) => ({ ...c, note: c.free_note }))
    ];
    return Page(`
    ${PageTitle({
        title: 'Öyrən',
        description: 'Universitetlərin, dövlət proqramlarının və icmanın pulsuz tam kursları, dilə görə.',
        tabs: LearnTabs('courses')
    })}
    ${Hint('resources')}
    ${COURSE_GROUPS.map(([lang, name]) => {
        const list = all.filter((c) => c.lang === lang);
        return list.length ? Section({
            title: `${name} kurslar`,
            note: `${list.length} pulsuz kurs`,
            body: `<ul class="ln-rows">${list.map((c) => ResourceCard({
                tag: 'li',
                title: esc(c.title),
                icon: 'graduation-cap',
                meta: [c.level ? esc(levelAz(c.level)) : '', esc(c.duration || ''), `<span translate="no">${esc(c.provider || '')}</span>`],
                note: [c.desc ? esc(c.desc) : '', c.note ? `<span class="text-text-mute">${esc(c.note)}</span>` : ''].filter(Boolean).join(' '),
                href: c.url,
                action: 'Kursa keç',
                after: ReportButton(c.url, c.title, 'Kurslar')
            })).join('')}</ul>`
        }) : '';
    }).join('')}
`);
};

// Checked library lists (curated-resources.json): easy to hard, languages in words, duplicates by address dropped.
const LEVEL_ORDER = { beginner: 0, intermediate: 1, advanced: 2 };
const byLevel = (a, b) => (LEVEL_ORDER[a.level] ?? 1) - (LEVEL_ORDER[b.level] ?? 1);
const LANG_WORD = { az: 'Azərbaycanca', tr: 'Türkcə', en: 'İngiliscə', ru: 'Rusca' };
const urlKey = (url) => String(url || '').replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '').toLowerCase();
const library = curated.library || { books: [], videos: [], docs: [] };

// --- Books: compact cards; the summary and key lessons wait behind "Əsas fikirlər" so the list stays scannable. ---
// A paid book says so and links to its publisher, never to a copy somewhere else.
const BookCard = (b) => {
    const lessons = (b.keyLessons || []).map((lesson) => getLocalizedContent(lesson)).filter(Boolean);
    const summary = getLocalizedContent(b.summary);
    const link = b.freeReadUrl || b.url || '';
    return `
    <li>
        ${ResourceCard({
            tag: 'div',
            title: esc(b.title),
            icon: 'book-open',
            meta: [b.paid ? 'Pullu kitab' : 'Pulsuz kitab', esc(b.author), esc(b.year)],
            href: link,
            action: b.paid ? 'Kitaba bax' : 'Oxu',
            after: link ? ReportButton(link, b.title, 'Kitablar') : ''
        })}
        ${summary || lessons.length ? `
        <details class="group -mt-2 pb-3 pl-[30px]">
            <summary class="flex min-h-11 cursor-pointer list-none items-center gap-2 text-[14px] font-medium text-text-soft transition-colors hover:text-text [&::-webkit-details-marker]:hidden">
                Əsas fikirlər${icon('chevron-down', 'size-4 transition-transform group-open:rotate-180')}
            </summary>
            <div class="pb-1 pt-2">
                ${summary ? `<p class="t-body">${summary}</p>` : ''}
                ${lessons.length ? `
                <ul class="mt-4 grid gap-2.5">
                    ${lessons.map((lesson) => `<li class="flex gap-3 text-[14px] leading-[1.55] text-text-soft"><span class="mt-0.5 text-text-mute">${icon('check', 'size-4')}</span><span>${lesson}</span></li>`).join('')}
                </ul>` : ''}
            </div>
        </details>` : ''}
    </li>`;
};

// Free, legal books first (easy to hard), then the well-known ones, some of which are paid.
export const BooksPage = () => {
    const free = [...library.books].sort(byLevel);
    const freeKeys = new Set(free.map((b) => urlKey(b.url)));
    const known = booksData.filter((b) => !freeKeys.has(urlKey(b.freeReadUrl)));
    return Page(`
    ${PageTitle({
        title: 'Öyrən',
        description: 'Əvvəl pulsuz oxuya biləcəyin kitablar, sonra hər proqramçının adını eşitdiyi kitablar.',
        tabs: LearnTabs('books')
    })}
    ${Hint('resources')}
    ${Section({
        title: 'Pulsuz oxu',
        note: `${free.length} kitab, ${new Set(free.map((b) => b.topic || b.title)).size} mövzu, asandan çətinə. Hamısını müəllif və ya nəşriyyat pulsuz yayır.`,
        body: `<ul class="ln-rows">${free.map((b) => ResourceCard({
            tag: 'li',
            title: esc(b.title),
            icon: 'book-open',
            meta: [b.topic ? esc(b.topic) : 'Pulsuz kitab', esc(levelAz(b.level)), esc(b.source || b.author || ''), LANG_WORD[b.lang] || ''],
            note: esc(b.desc),
            href: b.url,
            action: 'Oxu',
            after: ReportButton(b.url, b.title, 'Kitablar')
        })).join('')}</ul>`
    })}
    ${Section({
        title: 'Tanınmış kitablar',
        note: 'Pullu olanlar nəşriyyatın səhifəsinə aparır.',
        body: `<ul class="ln-rows">${known.map(BookCard).join('')}</ul>`
    })}
`);
};

// --- Videos: channels grouped by language, Turkish first (closest to Azerbaijani); one action, straight to the channel. ---
const channelKey = (url) => (String(url).match(/@([\w.-]+)/)?.[1] || urlKey(url)).toLowerCase();
const CHANNEL_GROUPS = [['az', 'Azərbaycanca kanallar'], ['tr', 'Türkcə kanallar'], ['en', 'İngiliscə kanallar'], ['ru', 'Rusca kanallar']];

export const VideosPage = () => {
    const seen = new Set();
    const channels = [
        ...videosData.map((v) => ({ title: v.title, url: v.url, lang: v.lang, source: v.channel, note: getLocalizedContent(v.desc) })),
        ...library.videos.map((v) => ({ title: v.title.replace(/\s*\((?:[^)]*,\s*)?YouTube channel[^)]*\)/i, ''), url: v.url, lang: v.lang, source: v.source, note: esc(v.desc) }))
    ].filter((c) => !seen.has(channelKey(c.url)) && seen.add(channelKey(c.url)));
    return Page(`
    ${PageTitle({
        title: 'Öyrən',
        description: 'Proqramlaşdırmanı pulsuz öyrədən YouTube kanalları, dilə görə.',
        tabs: LearnTabs('videos')
    })}
    ${Hint('resources')}
    ${CHANNEL_GROUPS.map(([lang, title]) => {
        const list = channels.filter((c) => c.lang === lang);
        return list.length ? Section({
            title,
            note: `${list.length} kanal`,
            body: `<ul class="ln-rows">${list.map((c) => ResourceCard({
                tag: 'li',
                title: `<span translate="no">${esc(c.title)}</span>`,
                icon: 'circle-play',
                meta: ['Video kanal', c.source && c.source !== c.title ? `<span translate="no">${esc(c.source)}</span>` : ''],
                note: c.note || '',
                href: c.url,
                action: 'İzlə',
                after: ReportButton(c.url, c.title, 'Videolar')
            })).join('')}</ul>`
        }) : '';
    }).join('')}
`);
};

// --- Official documentation: one card per documentation hub, straight to the docs. ---
// Category of a documentation hub → a Lucide icon (the data's emoji is never shown).
const DOC_ICON = {
    'Web Standards': 'globe',
    'All-in-one API Docs': 'library',
    'Frontend': 'code-xml',
    'Backend': 'server',
    'Language': 'code',
    'Styling': 'layers',
    'DevOps': 'box',
    'Databases': 'database'
};

// One card per documentation site: the checked library's hubs join the list unless that site is already there.
// Groups for the documentation list (about 100 entries): the area in Azerbaijani, in reading order.
const DOC_GROUPS = [
    ['Web', 'Veb'], ['Languages', 'Proqramlaşdırma dilləri'], ['Backend', 'Backend'], ['Databases', 'Verilənlər bazaları'],
    ['Mobile', 'Mobil'], ['DevOps & Cloud', 'DevOps və bulud'], ['Data & AI', 'Data və süni intellekt'], ['Security', 'Təhlükəsizlik'],
    ['Testing', 'Test'], ['Games & Graphics', 'Oyun və qrafika'], ['Hardware & IoT', 'Avadanlıq və IoT'], ['Tools', 'Alətlər']
];
const LEGACY_GROUP = { 'Web Standards': 'Web', 'All-in-one API Docs': 'Tools', Frontend: 'Web', Backend: 'Backend', Language: 'Languages', Styling: 'Web', DevOps: 'DevOps & Cloud', Databases: 'Databases' };
// Older entries carry free-text categories: sort them into a group by keywords.
const docGroup = (doc) => {
    const c = doc.category || '';
    if (DOC_GROUPS.some(([id]) => id === c)) return c;
    if (LEGACY_GROUP[c]) return LEGACY_GROUP[c];
    const t = `${c} ${doc.source || ''} ${doc.name || doc.title || ''}`.toLowerCase();
    if (/secur|owasp/.test(t)) return 'Security';
    if (/test/.test(t)) return 'Testing';
    if (/mobile|android|ios|flutter|swift|kotlin/.test(t)) return 'Mobile';
    if (/data|ml|machine|pandas|torch|scikit|tensor|ai\b/.test(t)) return 'Data & AI';
    if (/devops|cloud|kubernetes|docker|terraform|linux|arch/.test(t)) return 'DevOps & Cloud';
    if (/database|sql|mongo|redis|postgres/.test(t)) return 'Databases';
    if (/game|godot|unity|graphic/.test(t)) return 'Games & Graphics';
    if (/arduino|iot|embedded|hardware/.test(t)) return 'Hardware & IoT';
    if (/frontend|web|css|html|javascript|vue|angular|react|mdn/.test(t)) return 'Web';
    if (/backend|node|express|django/.test(t)) return 'Backend';
    if (/language|go\b|rust|java|c#|php|python|typescript/.test(t)) return 'Languages';
    return 'Tools';
};

// One card per documentation entry (no duplicates by address), grouped by area, with a short list of areas on top.
export const DocsPage = () => {
    const seen = new Set();
    const docs = [
        ...documentationLinks.map((doc) => ({ name: doc.name, url: doc.url, category: doc.category, icon: DOC_ICON[doc.category] || 'file-text', note: esc(doc.desc || '') })),
        ...library.docs.map((doc) => ({ name: doc.title, url: doc.url, category: doc.category, source: doc.source, icon: 'file-text', note: esc(doc.desc), lang: doc.lang }))
    ].filter((doc) => !seen.has(urlKey(doc.url)) && seen.add(urlKey(doc.url)));
    const groups = DOC_GROUPS.map(([id, name]) => ({ id, name, list: docs.filter((d) => docGroup(d) === id) })).filter((g) => g.list.length);
    const anchor = (id) => 'docs-' + id.toLowerCase().replace(/[^a-z]+/g, '-');
    return Page(`
    ${PageTitle({
        title: 'Öyrən',
        description: `Proqramlaşdırma dillərinin və alətlərin ${docs.length} rəsmi təlimatı, sahələrə görə. Hər biri başqa saytda açılır.`,
        tabs: LearnTabs('docs')
    })}
    ${Hint('resources')}
    <nav class="mt-6 flex flex-wrap gap-2" aria-label="Sahələr">${groups.map((g) => `<a href="#${anchor(g.id)}" class="az-chip min-h-11">${g.name}<span class="az-chip__count">${g.list.length}</span></a>`).join('')}</nav>
    ${groups.map((g) => `<div id="${anchor(g.id)}" class="scroll-mt-20">${Section({
        title: g.name,
        note: `${g.list.length} təlimat`,
        body: `<ul class="ln-rows">${g.list.map((doc) => ResourceCard({
            tag: 'li',
            title: `<span translate="no">${esc(doc.name)}</span>`,
            icon: doc.icon,
            meta: ['Texniki təlimat', doc.lang && doc.lang !== 'en' ? LANG_WORD[doc.lang] : ''],
            note: doc.note,
            href: doc.url,
            action: 'Təlimatı aç',
            after: ReportButton(doc.url, doc.name, 'Təlimatlar')
        })).join('')}</ul>`
    })}</div>`).join('')}
`);
};
