// AZEDEV Learn - Explore and AZEDEV pages in the product system: career paths and the glossary under "Kəşf et"; about,
// the community, open projects, contributors, questions and the legal pages under "AZEDEV". Each is Page(PageTitle +
// plain sections): compact cards, ruled rows, a stepper where order matters, at most one primary action. The community
// lives on WhatsApp; nothing that has not started yet is shown as if it had.
import { globalFaqData, glossary } from '../data.js'
import { azedevBrand, careerPathsData, azedevCommunityInfo, learnContributors } from '../azedev-data.js'
import { getCommunityUploads } from '../storage.js'
import { state, t, getLocalizedContent, requestRender } from '../core.js'
import { Page } from '../shell.js'
import { icon } from '../icons.js'
import {
    Button, Status, Badge, Label, Chips, EmptyState, esc, PageTitle, Section, TextLink, levelKind
} from '../ui.js'
import { Term } from '../onboarding.js'
import { Mascot } from '../art/mascot.js'

const L = getLocalizedContent;
const pad = (n) => String(n).padStart(2, '0');

// Icon tile beside a card title.
const Tile = (name) => `<span class="flex size-10 shrink-0 items-center justify-center rounded-md border border-alpha-8 bg-alpha-3 text-text-soft" aria-hidden="true">${icon(name, 'size-[18px]')}</span>`;

// A step on the vertical stepper (.ln-stops): number, title, one sentence. The first step is lit: it is where you start.
const Step = (n, title, text, { lit = false, titleLang = '' } = {}) => `
    <li class="ln-stop pb-5"${lit ? ' data-lit' : ''}>
        <p class="ln-stop__n pt-3.5">${pad(n)}</p>
        <p class="t-item mt-1"${titleLang ? ` lang="${titleLang}"` : ''}>${title}</p>
        <p class="t-small mt-1 max-w-[52ch]">${text}</p>
    </li>`;

// --- Career paths (Kəşf et): three paths, each a card with its junior → mid → senior stepper; market numbers in a table ---

export const CareerPathsPage = () => {
    const market = `
        <div class="az-table-wrap">
            <table class="az-table">
                <thead>
                    <tr>
                        <th scope="col">İstiqamət</th>
                        <th scope="col">Tələbat</th>
                        <th scope="col">Uzaqdan iş</th>
                        <th scope="col">Azərbaycan</th>
                        <th scope="col">Qlobal</th>
                    </tr>
                </thead>
                <tbody>
                    ${careerPathsData.map((cp) => `
                    <tr>
                        <th scope="row" class="font-sans text-[14px] font-medium normal-case tracking-normal text-text" lang="en">${esc(cp.title)}</th>
                        <td class="text-text-soft">${esc(cp.marketInsight.demand)}</td>
                        <td class="az-num">${esc(cp.marketInsight.remotePotential)}</td>
                        <td class="az-num whitespace-nowrap">${esc(cp.marketInsight.avgSalaryAz)}</td>
                        <td class="az-num whitespace-nowrap">${esc(cp.marketInsight.avgSalaryGlobal)}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
        <p class="t-small mt-3">Maaş diapazonları təxminidir və şirkətdən, şəhərdən və təcrübədən asılı olaraq dəyişir.</p>`;

    const RUNG = [['junior', 'Başlanğıc səviyyə'], ['mid', 'Orta səviyyə'], ['senior', 'Təcrübəli']];
    const level = (st, i) => `
        <li class="ln-stop pb-5"${i === 0 ? ' data-lit' : ''}>
            <p class="ln-stop__n pt-3.5">${pad(i + 1)} · ${esc(st.duration)}</p>
            ${RUNG[i] ? `<p class="mt-1">${Status(RUNG[i][1], levelKind(RUNG[i][0]))}</p>` : ''}
            <p class="t-item mt-1" lang="en">${esc(st.level)}</p>
            <p class="t-small mt-1">${esc(st.goal)}</p>
            <details class="group mt-2">
                <summary class="inline-flex min-h-11 cursor-pointer list-none items-center gap-1.5 text-[13px] text-text-soft transition-colors hover:text-text [&::-webkit-details-marker]:hidden">
                    Bacarıqlar (${st.skills.length})${icon('chevron-down', 'size-3.5 transition-transform group-open:rotate-180')}
                </summary>
                <ul class="mt-1 border-t border-line-subtle">
                    ${st.skills.map((sk) => `<li class="flex items-start gap-2 border-b border-line-subtle py-2 text-[14px] leading-snug text-text-soft">${icon('check', 'size-3.5 mt-1 text-text-mute')}<span>${esc(sk)}</span></li>`).join('')}
                </ul>
            </details>
        </li>`;

    const pathCard = (cp) => `
        <li class="az-card flex flex-col p-4 sm:p-5" aria-labelledby="career-${cp.id}-title">
            <div class="flex items-start gap-3">
                ${Tile('compass')}
                <div class="min-w-0">
                    <h3 id="career-${cp.id}-title" class="t-item" lang="en">${esc(cp.title)}</h3>
                    <p class="t-small mt-0.5">${cp.stages.length} pillə · ${esc(cp.marketInsight.avgSalaryAz)}</p>
                </div>
            </div>
            <p class="t-small mt-4">${L(cp.overview)}</p>
            <ol class="ln-stops mt-5" aria-label="${esc(cp.title)}: pillələr">${cp.stages.map(level).join('')}</ol>
        </li>`;

    return Page(`
        ${PageTitle({
            eyebrow: 'Kəşf et',
            title: 'Karyera yolları',
            description: 'Başlanğıcdan təcrübəli mütəxəssisə qədər: hər pillədə gözləntilər, bacarıqlar və təxmini maaş.'
        })}
        ${Section({
            id: 'career-paths-title',
            title: 'İstiqamətlər',
            note: `${careerPathsData.length} karyera yolu`,
            body: `<ul class="grid grid-cols-1 gap-2 lg:grid-cols-3">${careerPathsData.map(pathCard).join('')}</ul>`
        })}
        ${Section({ id: 'market-title', title: 'Bazar göstəriciləri', body: market })}
    `);
};

// --- Shared pieces for the AZEDEV pages: the WhatsApp community is the one place people meet ---

const WhatsAppButton = (variant = 'primary') => Button('WhatsApp icmasına qoşul', { href: azedevBrand.urls.whatsapp, variant });

// Initials for an avatar: "Yusif Əzizov" → "YƏ".
const initials = (name) => name.split(/[\s&]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toLocaleUpperCase('az');
const Avatar = (name) => `<span class="az-avatar" aria-hidden="true" translate="no">${esc(initials(name))}</span>`;

// Sentence case for titles that arrive in title case: capitalised words after the first are lowered (acronyms stay).
// ASCII words are lowered in English so "Interviews" does not become "ınterviews".
const sentenceCase = (text) => String(text).split(' ').map((w, i) => {
    if (i === 0 || !/^[(\[]?\p{Lu}\p{Ll}/u.test(w)) return w;
    return /^[\x00-\x7F]+$/.test(w) ? w.toLowerCase() : w.toLocaleLowerCase('az');
}).join(' ');

// --- Açıq layihələr (open source): not started yet. An honest announcement, then how contributing will work ---

export const OpenSourcePage = () => {
    const steps = [
        ['Layihənin öz nüsxəni yarat (fork)', `${Term('github', 'GitHub')}-da layihənin öz hesabında nüsxəsini yarat və onu kompüterinə yüklə.`],
        ['Dəyişiklik üçün ayrıca qol aç (branch)', 'Hər yeni iş üçün ayrıca qol aç ki, əsas kod toxunulmaz qalsın.'],
        ['Dəyişikliyi yadda saxla (commit)', 'Kodu dəyiş, yoxla və nə etdiyini bir cümlə ilə yazıb yadda saxla.'],
        ['Dəyişikliyi yoxlamağa göndər (pull request)', 'GitHub-da sorğu aç. Komanda kodunu yoxlayıb rəy yazacaq.']
    ];

    // The commands are for people who already use git: closed by default, so beginners are not met by a terminal.
    // No repository exists yet, so the commands use placeholders instead of a made-up address.
    const code = `
        <details class="group">
            <summary class="flex min-h-11 cursor-pointer list-none items-center gap-2 text-[14px] font-medium text-text-soft transition-colors hover:text-text [&::-webkit-details-marker]:hidden">
                ${icon('square-terminal', 'size-4')}<span class="flex-1">Təcrübəlilər üçün: əmrlər</span>${icon('chevron-down', 'size-4 transition-transform group-open:rotate-180')}
            </summary>
        <div class="az-code mt-2">
            <div class="az-code__bar"><span>terminal</span>${Badge('bash', { mono: true })}</div>
<pre><span class="az-code__ln" aria-hidden="true">01</span><span class="tok-kw">git clone</span> <span class="tok-str">https://github.com/&lt;istifadəçi-adın&gt;/&lt;layihə&gt;.git</span>
<span class="az-code__ln" aria-hidden="true">02</span><span class="tok-kw">cd</span> <span class="tok-id">&lt;layihə&gt;</span>
<span class="az-code__ln" aria-hidden="true">03</span><span class="tok-kw">git checkout</span> <span class="tok-meta">-b</span> <span class="tok-id">ilk-tohfe</span>
<span class="az-code__ln" aria-hidden="true">04</span><span class="tok-kw">git commit</span> <span class="tok-meta">-am</span> <span class="tok-str">"Nə etdiyini qısa yaz"</span>
<span class="az-code__ln" aria-hidden="true">05</span><span class="tok-kw">git push</span> <span class="tok-id">origin ilk-tohfe</span></pre>
        </div>
        </details>`;

    const soon = `
        <section class="az-card mt-8 flex flex-col items-start gap-5 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6" aria-labelledby="os-soon-title">
            <span class="shrink-0 text-text">${Mascot({ mood: 'hello', cls: 'size-14' })}</span>
            <div class="min-w-0 flex-1">
                <h2 id="os-soon-title" class="t-title">Açıq layihələr tezliklə başlayır</h2>
                <p class="t-body mt-2 max-w-[56ch]">Başlayanda WhatsApp icmasında elan edəcəyik və yeni başlayanlar üçün sadə tapşırıqlar hazırlayacağıq.</p>
                <div class="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">
                    ${WhatsAppButton('primary')}
                    ${Button('GitHub', { href: azedevBrand.urls.github })}
                </div>
            </div>
        </section>`;

    return Page(`
        ${PageTitle({
            eyebrow: 'AZEDEV',
            title: 'Açıq layihələr',
            description: 'Kodu hamıya açıq olan layihələr. Kod yazmağı öyrəndikdən sonra burada real komandada işləməyi sınayacaqsan.'
        })}
        ${soon}
        ${Section({
            id: 'first-contribution-title',
            title: 'Töhfə necə verilir',
            note: 'Layihələr başlayanda belə olacaq: 4 addım',
            body: `
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    <ol class="ln-stops" aria-label="Töhfənin addımları">${steps.map(([title, text], i) => Step(i + 1, title, text, { lit: i === 0 })).join('')}</ol>
                    <div class="lg:sticky lg:top-6 lg:self-start">${code}</div>
                </div>`
        })}
    `);
};

// --- About AZEDEV (view 'about') and the community (view 'community') ---

// Facts from azedev.com: the studio, its products and its leaders. Nothing here is estimated.
const PRODUCTS = ['Rəqəmsal Sənəd Dövriyyəsi', 'TalentAI', 'Bordaz', 'Pomo', 'AzLang', 'Palecrest'];
const TEAM = [
    ['Yusif Əzizov', 'Təsisçi, CEO'],
    ['Denis Gülməmmədov', 'COO'],
    ['Ramazan Nuhbalayev', 'CPO'],
    ['Rashad Mammadov', 'CMO']
];
const REASONS = [
    ['Yaxşı material dağınıqdır', 'Keyfiyyətli dərs, kitab və video çoxdur, amma müxtəlif saytlara səpələnib və əksəriyyəti başqa dillərdədir. Biz onları seçib bir yerə yığırıq və Azərbaycan dilində izah edirik.'],
    ['Başlayana ardıcıllıq lazımdır', 'Yeni başlayanın ən çətin sualı “nədən başlayım, sonra nəyə keçim?” olur. Öyrənmə yolları dərsləri düzgün ardıcıllıqla göstərir ki, yolunu azmayasan.'],
    ['Daha çox insan real iş qursun', 'Azərbaycanda daha çox insanın öz saytını, tətbiqini və məhsulunu qurmasını istəyirik. Bunun üçün bilik pulsuz və hamıya açıq olmalıdır.']
];

const AboutPage = () => {
    const who = Section({
        id: 'who-title',
        title: 'AZEDEV kimdir',
        body: `
            <div class="az-card p-5 sm:p-6">
                <p class="t-body max-w-[62ch]"><span translate="no">AZEDEV</span> 2024-cü ildə Bakıda yaradılmış texnologiya studiyasıdır (<span lang="en">venture studio</span>). Öz rəqəmsal məhsullarımızı qurur, idarə edir və böyüdürük:</p>
                <ul class="mt-4 flex flex-wrap gap-1.5" aria-label="AZEDEV məhsulları">
                    ${PRODUCTS.map((p) => `<li translate="no">${Label(p)}</li>`).join('')}
                </ul>
                <p class="t-body mt-4 max-w-[62ch]">Bundan əlavə, şirkətlər və dövlət qurumları üçün sistemlər hazırlayırıq. <span translate="no">AZEDEV Learn</span> isə bizim pulsuz təhsil layihəmizdir.</p>
                <div class="mt-5 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${Button('azedev.com saytına keç', { href: azedevBrand.urls.azedev })}</div>
            </div>`
    });

    const why = Section({
        id: 'why-title',
        title: 'Niyə AZEDEV Learn',
        note: 'Pulsuz və Azərbaycan dilində, üç səbəbə görə',
        body: `
            <ol class="border-t border-line">
                ${REASONS.map(([title, text], i) => `
                <li class="grid grid-cols-1 gap-1.5 border-b border-line py-5 sm:grid-cols-3 sm:gap-8">
                    <p class="flex items-baseline gap-3"><span class="font-mono text-[13px] text-text-mute" aria-hidden="true">${pad(i + 1)}</span><span class="t-item">${title}</span></p>
                    <p class="t-body sm:col-span-2 max-w-[62ch]">${text}</p>
                </li>`).join('')}
            </ol>`
    });

    const team = Section({
        id: 'team-title',
        title: 'Komanda',
        note: 'AZEDEV-in rəhbərliyi',
        body: `
            <ul class="max-w-[720px] border-t border-line" aria-label="AZEDEV-in rəhbərliyi">
                ${TEAM.map(([name, role]) => `
                <li class="flex min-h-16 items-center gap-3 border-b border-line py-3">
                    ${Avatar(name)}
                    <span class="min-w-0 flex-1 text-[15px] font-medium text-text" translate="no">${esc(name)}</span>
                    <span class="shrink-0 text-[14px] text-text-mute">${esc(role)}</span>
                </li>`).join('')}
            </ul>`
    });

    const join = Section({
        id: 'join-title',
        title: 'İcmaya qoşul',
        link: TextLink('İcma haqqında', "window.navigateTo('community')"),
        body: `
            <div class="az-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <p class="t-body max-w-[52ch]">Əsas icmamız WhatsApp-dadır. Orada sual verə, öyrəndiklərini paylaşa və yeniliklərdən ilk xəbər tuta bilərsən.</p>
                <div class="shrink-0 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${WhatsAppButton('primary')}</div>
            </div>`
    });

    const support = Section({
        id: 'support-title',
        title: 'Dəstək ol',
        body: `
            <div class="flex flex-col gap-4 rounded-card border border-line p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <p class="t-body max-w-[60ch]"><span translate="no">AZEDEV Learn</span> pulsuzdur və pulsuz qalacaq. Server, domen və yeni dərslərin hazırlanması xərc tələb edir. Faydalı olubsa, istəsən bir kofe ilə dəstək ola bilərsən.</p>
                <div class="shrink-0 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${Button('Kofe.al ilə dəstək ol', { href: azedevBrand.urls.kofe })}</div>
            </div>`
    });

    return Page(`
        ${PageTitle({
            eyebrow: 'AZEDEV',
            title: 'Biz kimik və niyə bunu edirik',
            description: 'Kim olduğumuzu və AZEDEV Learn-i niyə pulsuz etdiyimizi qısaca yazmışıq.'
        })}
        ${who}${why}${team}${join}${support}
    `);
};

const CommunityPage = () => {
    const main = `
        <section class="az-card mt-8 flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6" aria-labelledby="whatsapp-title">
            <div class="flex min-w-0 items-start gap-4">
                ${Tile('message-circle')}
                <div class="min-w-0">
                    <h2 id="whatsapp-title" class="t-title">WhatsApp icması</h2>
                    <p class="t-body mt-1.5 max-w-[56ch]">İcmamızın əsas yeri. Sualını yaz, öyrəndiklərini paylaş, başqalarına kömək et və yeniliklərdən ilk sən xəbər tut.</p>
                </div>
            </div>
            <div class="shrink-0 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${WhatsAppButton('primary')}</div>
        </section>`;

    const planned = Section({
        id: 'planned-title',
        title: 'Planlaşdırılır',
        note: 'Bunlar hələ başlamayıb. Hər biri başlayanda WhatsApp icmasında elan olunacaq.',
        body: `
            <ul class="grid grid-cols-1 gap-2 md:grid-cols-3">
                ${azedevCommunityInfo.initiatives.map((it) => `
                <li class="az-card flex flex-col items-start p-4 sm:p-5">
                    ${Badge('Planlaşdırılır', { dot: 'dev' })}
                    <h3 class="t-item mt-4">${esc(sentenceCase(it.title))}</h3>
                    <p class="t-small mt-1">${esc(it.desc)}</p>
                </li>`).join('')}
            </ul>
            <p class="mt-4 flex items-start gap-2.5 text-[14px] leading-snug text-text-soft">
                <span class="mt-0.5 shrink-0 text-text-mute">${icon('school', 'size-4')}</span>
                <span>Universitet klubları da planlaşdırılır. İlk klub açılanda bunu WhatsApp icmasında elan edəcəyik.</span>
            </p>`
    });

    return Page(`
        ${PageTitle({
            eyebrow: 'AZEDEV',
            title: 'İcma',
            description: 'Proqramlaşdırmanı tək öyrənmək çətindir. İcmada sual verir, bir-birimizə kömək edir və birlikdə öyrənirik.'
        })}
        ${main}
        ${planned}
    `);
};

export const AboutAzedevPage = () => (state.view === 'community' ? CommunityPage() : AboutPage());

// --- Questions and answers (AZEDEV): one list of native disclosures per section ---

export const GlobalFaqPage = () => Page(`
    ${PageTitle({ eyebrow: 'AZEDEV', title: t('faqTitle'), description: t('faqSubtitle') })}
    ${globalFaqData.map((section, sIdx) => Section({
        id: `faq-section-${sIdx}`,
        title: L(section.category),
        note: `${section.questions.length} sual`,
        body: `
            <div class="border-t border-line">
                ${section.questions.map((q) => `
                <details class="group border-b border-line">
                    <summary class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 [&::-webkit-details-marker]:hidden">
                        <span class="t-item">${L(q.q)}</span>
                        <span class="shrink-0 text-text-mute transition-transform duration-300 group-open:rotate-180">${icon('chevron-down')}</span>
                    </summary>
                    <div class="t-body max-w-[62ch] pb-5">${L(q.a)}</div>
                </details>`).join('')}
            </div>`
    })).join('')}
`);

// --- Glossary (Kəşf et): search and category chips over an A–Z list ---

window.setGlossarySearch = (q) => {
    const prev = document.getElementById('glossary-search');
    const cursor = prev ? prev.selectionStart : q.length;
    state.glossaryQuery = q;
    requestRender();
    const input = document.getElementById('glossary-search');
    if (input) {
        input.focus();
        input.selectionStart = input.selectionEnd = cursor;
    }
};

window.setGlossaryCategory = (category) => {
    state.glossaryCategory = category;
    requestRender();
};

// Jump to a letter without touching the URL (the app has no routes yet).
window.jumpToGlossaryLetter = (idx) => {
    document.getElementById(`glossary-letter-${idx}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const initialOf = (term) => (term.trim()[0] || '#').toLocaleUpperCase('en');

export const GlossaryPage = () => {
    const query = (state.glossaryQuery || '').toLowerCase().trim();
    const active = state.glossaryCategory || 'all';
    const definition = (item) => L(item.desc || item.def);
    const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, 'az'));

    const counts = sorted.reduce((acc, item) => ({ ...acc, [item.category]: (acc[item.category] || 0) + 1 }), {});
    const chips = [
        { id: 'all', label: 'Hamısı', count: sorted.length },
        ...Object.keys(counts).sort().map((c) => ({ id: c, label: `<span lang="en">${esc(c)}</span>`, count: counts[c] }))
    ];

    const results = sorted.filter((item) =>
        (active === 'all' || item.category === active) &&
        (!query || `${item.term} ${definition(item)}`.toLowerCase().includes(query)));

    // Group the results by initial letter, in sorted order.
    const groups = [];
    results.forEach((item) => {
        const letter = initialOf(item.term);
        const last = groups[groups.length - 1];
        if (last && last.letter === letter) last.items.push(item);
        else groups.push({ letter, items: [item] });
    });

    const index = groups.map((g, i) => `
        <li><button type="button" onclick="window.jumpToGlossaryLetter(${i})" aria-label="${esc(g.letter)} hərfi, ${g.items.length} termin"
            class="flex size-11 items-center justify-center rounded-md font-mono text-[13px] text-text-mute transition-colors hover:bg-alpha-4 hover:text-text" translate="no">${esc(g.letter)}</button></li>`).join('');

    const list = `
        <nav aria-label="Hərflər" class="-mx-5 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:px-0">
            <ul class="flex gap-1 sm:flex-wrap">${index}</ul>
        </nav>
        <div class="mt-6">
            ${groups.map((g, i) => `
            <section id="glossary-letter-${i}" aria-labelledby="glossary-letter-${i}-title" class="${i ? 'mt-8' : ''}">
                <h3 id="glossary-letter-${i}-title" class="flex items-baseline gap-3 border-b border-line pb-2">
                    <span class="t-title font-mono" translate="no">${esc(g.letter)}</span>
                    <span class="t-caption ml-auto">${g.items.length} termin</span>
                </h3>
                <ul>
                    ${g.items.map((item) => `
                    <li class="grid grid-cols-1 gap-1.5 border-b border-line py-4 sm:grid-cols-3 sm:gap-8">
                        <span class="t-item" translate="no">${esc(item.term)}</span>
                        <div class="sm:col-span-2">
                            <p class="t-small">${definition(item)}</p>
                            <div class="mt-2"><span lang="en">${Label(esc(item.category))}</span></div>
                        </div>
                    </li>`).join('')}
                </ul>
            </section>`).join('')}
        </div>`;

    return Page(`
        ${PageTitle({
            eyebrow: 'Kəşf et',
            title: t('glossary'),
            description: 'Proqramlaşdırmada ən çox işlənən terminlər, sadə dildə izahı ilə.'
        })}
        <div class="mt-6 grid grid-cols-1 gap-4">
            <div class="az-field">
                <label class="az-field__label" for="glossary-search">Termin axtarın</label>
                <div class="relative">
                    <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-mute">${icon('search')}</span>
                    <input id="glossary-search" class="az-input pl-10" type="search" autocomplete="off" placeholder="API, Docker, CI/CD..."
                        value="${esc(state.glossaryQuery || '')}" oninput="window.setGlossarySearch(this.value)">
                </div>
            </div>
            <div class="-mx-5 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:overflow-visible sm:px-0">
                ${Chips(chips, active, (id) => `window.setGlossaryCategory('${id}')`, 'Kateqoriya')}
            </div>
        </div>
        ${Section({
            id: 'glossary-results-title',
            title: 'Terminlər',
            note: `${results.length} termin`,
            body: results.length ? list : EmptyState('Termin tapılmadı', 'Başqa söz yoxla və ya kateqoriya filtrini “Hamısı” et.', Button('Filtri sıfırla', { onclick: "window.setGlossaryCategory('all'); window.setGlossarySearch('')", icon: null }))
        })}
    `);
};

// --- Töhfəçilər (view 'hall-of-fame'): the people who built AZEDEV Learn, as equals; then the community's authors ---

export const HallOfFamePage = () => {
    // Authors of approved community uploads, alphabetical: the page thanks people, it does not rank them. The samples
    // bundled with the app (upload-1 … upload-9, signed by AZEDEV groups) are not people, so they are left out.
    const isSample = (u) => /^upload-\d$/.test(String(u.id || ''));
    const uploads = getCommunityUploads().filter((u) => (!u.status || u.status === 'approved') && !isSample(u));
    const byAuthor = new Map();
    uploads.forEach((u) => {
        const name = (u.author || '').trim();
        if (!name) return;
        const entry = byAuthor.get(name) || { name, github: u.github || '' };
        if (!entry.github && u.github) entry.github = u.github;
        byAuthor.set(name, entry);
    });
    const authors = [...byAuthor.values()].sort((a, b) => a.name.localeCompare(b.name, 'az'));

    const card = (name, sub = '') => `
        <li class="az-card flex min-h-16 items-center gap-3 p-4">
            ${Avatar(name)}
            <span class="min-w-0">
                <span class="block text-[15px] font-medium text-text" translate="no">${esc(name)}</span>
                ${sub ? `<span class="block text-[13px] text-text-mute">${sub}</span>` : ''}
            </span>
        </li>`;

    const builders = `
        <ul class="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label="AZEDEV Learn-in töhfəçiləri">
            ${learnContributors.map((c) => card(c.name, c.role ? esc(c.role) : '')).join('')}
        </ul>`;

    const community = authors.length ? `
        <section class="mt-10 sm:mt-14" aria-labelledby="authors-title">
            <h2 id="authors-title" class="t-item">İcmadan material göndərənlər</h2>
            <p class="t-small mt-0.5">Təsdiqlənmiş materialların müəllifləri</p>
            <ul class="mt-3 border-t border-line">
                ${authors.map((p) => `
                <li class="flex min-h-12 items-center gap-3 border-b border-line py-2">
                    <span class="az-avatar az-avatar--sm text-text-soft" aria-hidden="true" translate="no">${esc(initials(p.name))}</span>
                    <span class="min-w-0 flex-1" translate="no">
                        <span class="block truncate text-[14px] text-text">${esc(p.name)}</span>
                        ${p.github ? `<span class="block truncate text-[13px] text-text-mute">@${esc(p.github)}</span>` : ''}
                    </span>
                </li>`).join('')}
            </ul>
        </section>` : '';

    const invite = `
        <section class="mt-10 flex flex-col gap-4 rounded-card border border-line p-5 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-6" aria-labelledby="invite-title">
            <div class="min-w-0">
                <h2 id="invite-title" class="t-item">Sən də töhfə verə bilərsən</h2>
                <p class="t-small mt-1 max-w-[52ch]">Material göndər, səhv gördüyün yeri bildir və ya kodla kömək et. Haradan başlayacağını WhatsApp icmasında soruş.</p>
            </div>
            <div class="flex shrink-0 flex-col gap-2 sm:flex-row [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">
                ${WhatsAppButton('ghost')}
                ${Button(t('nav.upload'), { onclick: 'window.openUploadModal()', icon: 'upload' })}
            </div>
        </section>`;

    return Page(`
        ${PageTitle({
            eyebrow: 'AZEDEV',
            title: 'Töhfəçilər',
            description: 'AZEDEV Learn-i birlikdə quran insanlar. AZEDEV-in təsisçisi Yusif Əzizov onların əməyindən və töhfəsindən qürur duyur.'
        })}
        ${builders}
        ${community}
        ${invite}
    `);
};

// --- Legal pages (privacy / terms) ---

export const LegalPage = (type) => {
    const isPrivacy = type === 'privacy';
    return Page(`
        ${PageTitle({
            eyebrow: 'AZEDEV',
            title: isPrivacy ? 'Məxfilik siyasəti' : 'İstifadə şərtləri',
            description: isPrivacy ? '<span lang="en">Privacy policy</span>' : '<span lang="en">Terms of service</span>'
        })}
        <div class="az-prose mt-8 border-t border-line pt-8">
            <p><b translate="no">AZEDEV Learn</b> açıq təhsil platformasıdır. Biz istifadəçilərin şəxsi məlumatlarını üçüncü tərəflərlə paylaşmırıq.</p>
            <p>İrəliləyişiniz (tamamlanmış mövzular, test nəticələri, layihələr) standart olaraq yalnız bu cihazda, brauzerin yaddaşında saxlanılır və serverə göndərilmir.</p>
            <p>Google ilə daxil olmaq istəyə bağlıdır. Daxil olsanız, irəliləyişiniz sizin öz Google Drive hesabınızda, tətbiqin gizli qovluğunda (appDataFolder) saxlanılır. AZEDEV bu faylı öz serverində saxlamır; tətbiq Drive-da yalnız öz yaratdığı faylı görür. Adınız, e-poçtunuz və şəkliniz yalnız bu cihazda göstərmək üçün istifadə olunur. İstənilən vaxt Profil səhifəsindən çıxış edə bilərsiniz.</p>
            <p>Bütün təhsil materialları, yol xəritələri və konspektlər cəmiyyətin açıq inkişafı üçün nəzərdə tutulmuşdur və kommersiya məqsədi daşımır.</p>
            <p>© 2026 <span translate="no">AZEDEV</span>. Bütün hüquqlar qorunur.</p>
        </div>
    `, { width: 'narrow' });
};
