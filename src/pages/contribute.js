// AZEDEV Learn - "Material əlavə et": how anyone can suggest a course, video, book or official guide. One structured
// JSON shape per kind (the same fields the site stores), the quality rules every suggestion is checked against, the
// valid path ids, and where to send it. Nothing is published automatically: AZEDEV checks it by hand and by script.
import { categories } from '../data.js'
import { stagesOf } from '../progress.js'
import { azedevBrand } from '../azedev-data.js'
import { getLocalizedContent } from '../core.js'
import { Page } from '../shell.js'
import { icon } from '../icons.js'
import { Button, esc, PageTitle, Section } from '../ui.js'

const base = (type, extra = {}) => ({
    path: 'frontend',
    lesson: 1,
    role: 'start',
    type,
    title: '',
    url: 'https://',
    lang: 'tr',
    level: 'beginner',
    source: '',
    ...extra,
    learn: 'Nə öyrənəcəksən? (bir cümlə, azərbaycanca)',
    audience: 'Kim üçündür?',
    prereq: 'Bundan əvvəl nəyi bilməlisən? (yoxdursa boş saxla)',
    why: 'Niyə keyfiyyətlidir? (mənbə, aktuallıq, praktika)'
});

const TEMPLATES = [
    {
        id: 'video', title: 'Video və ya playlist', icon: 'circle-play',
        rules: ['Kanal ana səhifəsi yox, konkret video və ya playlist linki.', 'Müəllifin öz kanalı; başqasının kursunun yenidən yüklənməsi qəbul olunmur.', 'Müddəti yaz: "3 saat", "24 video".'],
        json: base('youtube', { title: 'HTML Dersleri', url: 'https://www.youtube.com/playlist?list=…', source: 'Kanalın adı', duration: '24 video, ~6 saat' })
    },
    {
        id: 'book', title: 'Kitab', icon: 'book-open',
        rules: ['Yalnız müəllifin və ya nəşriyyatın özünün pulsuz yaydığı versiya.', 'Başqa saytdakı PDF nüsxəsi (pirat) qəbul olunmur.', 'Pullu kitabı nəşriyyatın səhifəsi ilə təklif et və "paid": true yaz.'],
        json: base('book', { role: 'more', title: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/', lang: 'en', source: 'Marijn Haverbeke', paid: false })
    },
    {
        id: 'course', title: 'Kurs', icon: 'graduation-cap',
        rules: ['Kursun özü pulsuz olmalıdır; pullu sertifikat varsa "free_note"-da yaz.', 'Universitet, dövlət proqramı (BTK, Geleceği Yazanlar) və ya tanınmış platforma.', 'Qeydiyyat lazımdırsa, bunu da yaz.'],
        json: base('course', { title: 'Python Programlama', url: 'https://www.btkakademi.gov.tr/portal/course/…', source: 'BTK Akademi', duration: '~44 saat', free_note: 'Pulsuz qeydiyyat lazımdır' })
    },
    {
        id: 'doc', title: 'Texniki təlimat (rəsmi sənəd)', icon: 'file-text',
        rules: ['Texnologiyanın öz rəsmi sənədi və ya onun rəsmi başlanğıc bələdçisi.', 'Mümkünsə, dərsin mövzusuna aparan konkret səhifə.', 'role adətən "reference" olur.'],
        json: base('doc', { role: 'reference', title: 'Python Tutorial', url: 'https://docs.python.org/3/tutorial/', lang: 'en', source: 'Python Software Foundation' })
    }
];

const FIELDS = [
    ['path', 'Yolun ID-si (aşağıdakı siyahıdan)'],
    ['lesson', 'Dərsin nömrəsi, 1-dən başlayır'],
    ['role', 'start (əsas material), more (əlavə), practice (məşq), build (layihə), reference (əlində saxla)'],
    ['type', 'youtube, book, course, doc, article, interactive'],
    ['lang', 'az, tr, ru, en'],
    ['level', 'beginner, intermediate, advanced'],
    ['learn · audience · prereq', 'Sənin qısa izahın: nə öyrədir, kim üçündür, əvvəl nə bilmək lazımdır'],
    ['why', 'Niyə etibarlıdır: mənbə, aktuallıq, tapşırıqlar']
];

const CHECKS = ['Link işləyir', 'Mənbə etibarlıdır', 'Mövzu düzgündür və aktualdır', 'Səviyyə və dil düzgün yazılıb', 'Pulsuz və qanunidir', 'Dərsə uyğundur, tədris dəyəri var'];

window.copyTemplate = (id) => {
    const t = TEMPLATES.find((x) => x.id === id);
    if (t) window.copyToClipboard(JSON.stringify(t.json, null, 2));
};

const Template = (t) => `
    <li class="py-6">
        <div class="flex items-start justify-between gap-4">
            <h3 class="ln-chapter flex items-center gap-2"><span class="text-text-mute" aria-hidden="true">${icon(t.icon, 'size-[18px]')}</span>${t.title}</h3>
            ${Button('Kopyala', { onclick: `window.copyTemplate('${t.id}')`, size: 'sm', icon: 'copy', cls: 'min-h-11 shrink-0' })}
        </div>
        <ul class="mt-3 grid gap-1.5 pl-5 text-[14px] leading-relaxed text-text-soft list-disc marker:text-text-mute">${t.rules.map((r) => `<li>${r}</li>`).join('')}</ul>
        <div class="az-code mt-4"><pre class="overflow-x-auto !text-[13px] !leading-[1.6]"><code>${esc(JSON.stringify(t.json, null, 2))}</code></pre></div>
    </li>`;

export const ContributePage = () => {
    const paths = categories.flatMap((c) => c.subCategories.map((s) => ({ id: s.id, name: getLocalizedContent(s.title), lessons: stagesOf(s.id, 'az').length }))).filter((p) => p.lessons);
    return Page(`
    ${PageTitle({ title: 'Material əlavə et', description: 'Faydalı kurs, video, kitab və ya rəsmi sənəd tanıyırsan? Aşağıdakı şablonla göndər. Hər təklifi AZEDEV əvvəlcə skriptlə, sonra əl ilə yoxlayır.' })}

    ${Section({
        title: 'Hər material bu yoxlamadan keçir',
        note: 'Hər şeyi toplamırıq, seçirik. Heç bir materialı "ən yaxşı" adlandırmırıq.',
        body: `<ul class="ln-rows sm:grid sm:grid-cols-2 sm:gap-x-8">${CHECKS.map((c) => `<li class="flex items-center gap-3 py-3 text-[15px] text-text-soft"><span class="text-status-live" aria-hidden="true">${icon('check', 'size-4')}</span>${c}</li>`).join('')}</ul>`
    })}

    ${Section({
        title: 'Şablonlar',
        note: 'Hər növün öz qaydaları var. Kopyala, doldur, göndər.',
        body: `<ol class="ln-rows">${TEMPLATES.map(Template).join('')}</ol>`
    })}

    ${Section({
        title: 'Sahələr',
        body: `<dl class="ln-rows">${FIELDS.map(([k, v]) => `<div class="grid gap-1 py-3 sm:grid-cols-[14rem_1fr] sm:gap-4"><dt class="font-mono text-[13px] text-text">${k}</dt><dd class="text-[14px] text-text-soft">${v}</dd></div>`).join('')}</dl>`
    })}

    ${Section({
        title: 'Yol ID-ləri',
        body: `<ul class="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">${paths.map((p) => `<li class="flex items-baseline justify-between gap-3 border-b border-line py-2.5"><span class="font-mono text-[13px] text-text">${esc(p.id)}</span><span class="t-small text-right">${esc(p.name)} · ${p.lessons} dərs</span></li>`).join('')}</ul>`
    })}

    ${Section({
        title: 'Hara göndərim?',
        body: `
        <ol class="ln-rows text-[15px] text-text-soft">
            <li class="flex items-baseline gap-3 py-4"><span class="ln-num w-5 shrink-0 text-[18px]" aria-hidden="true">1</span><div><span class="text-text">GitHub-da pull request:</span> <code class="font-mono text-[13px]">src/curated-resources.json</code> faylında yolun siyahısına əlavə et. <a class="underline decoration-alpha-25 underline-offset-4 hover:text-text" href="${azedevBrand.urls.github}" target="_blank" rel="noopener noreferrer">Repo</a></div></li>
            <li class="flex items-baseline gap-3 py-4"><span class="ln-num w-5 shrink-0 text-[18px]" aria-hidden="true">2</span><div><span class="text-text">WhatsApp icması:</span> doldurduğun JSON-u mesaj kimi göndər. <a class="underline decoration-alpha-25 underline-offset-4 hover:text-text" href="${azedevBrand.urls.whatsapp}" target="_blank" rel="noopener noreferrer">İcmaya keç</a></div></li>
            <li class="flex items-baseline gap-3 py-4"><span class="ln-num w-5 shrink-0 text-[18px]" aria-hidden="true">3</span><div><span class="text-text">Saytdakı forma:</span> JSON bilmirsənsə, sadəcə linki və qısa izahı göndər. <button type="button" onclick="window.openUploadModal()" class="underline decoration-alpha-25 underline-offset-4 hover:text-text">Formu aç</button></div></li>
        </ol>`
    })}
    `, { width: 'narrow' });
};
