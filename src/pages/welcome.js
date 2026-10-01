// AZEDEV Learn - the landing page: what a first-time visitor sees before stepping into the app. It says what Learn is,
// how it works, how the materials are chosen, who makes it, and offers one action (Öyrənməyə başla). No app chrome.
// Numbers are counted from the data, never typed in. A returning learner (progress or already entered) skips it.
import { categories } from '../data.js'
import { stagesOf, allProjects, trackProgress, subTitle, categoryOfSub } from '../progress.js'
import { pathPlan } from '../curriculum.js'
import { state, getLocalizedContent } from '../core.js'
import { BrandLogo, Footer } from '../shell.js'
import { icon } from '../icons.js'
import { Button, PathCard, esc } from '../ui.js'
import { RouteArt } from '../art/RouteArt.js'
import { Mascot } from '../art/mascot.js'
import { googleEnabled } from '../sync.js'
import { markEntered, isOnboarded } from '../onboarding.js'
import { STARTER_PATHS } from '../plain.js'
import { CommunityRows } from './landing.js'

// Step into the app: the path list, with the short guide on top the first time.
window.enterLearn = (view = 'roadmaps') => {
    markEntered();
    if (!isOnboarded()) state.onboardingShownThisVisit = false;
    window.navigateTo(view);
};
// Straight into one starter path.
window.markEnteredAndOpen = (cat, sub) => {
    markEntered();
    if (!isOnboarded()) state.onboardingShownThisVisit = false;
    window.navigateToCategory(cat, sub, 'roadmap');
};
// Started on another device: sign in with Google and the progress comes back.
window.landingSignIn = () => {
    markEntered();
    window.navigateTo('home');
    window.googleSignIn();
};

const LANG_WORD = { en: 'ingiliscə', tr: 'türkcə', ru: 'rusca', az: 'azərbaycanca' };

// Real counts: paths with lessons, lessons, projects, and the distinct materials the study plans use (and their languages).
const facts = () => {
    const subs = categories.flatMap((c) => c.subCategories).filter((s) => stagesOf(s.id, 'az').length > 0);
    const urls = new Set();
    const langs = new Set();
    for (const s of subs) {
        const plan = pathPlan(s.id);
        if (!plan) continue;
        plan.lessons.flat().forEach((step) => [step.res, ...step.alt].forEach((r) => { urls.add(r.url); if (r.lang) langs.add(r.lang); }));
    }
    return {
        paths: subs.length,
        lessons: subs.reduce((n, s) => n + stagesOf(s.id, 'az').length, 0),
        projects: allProjects().length,
        materials: urls.size,
        langs: ['en', 'tr', 'ru', 'az'].filter((l) => langs.has(l)).map((l) => LANG_WORD[l])
    };
};

const TopBar = () => `
    <header class="border-b border-line">
        <div class="ln-page ln-page--footer flex items-center justify-between gap-4">
            <button type="button" onclick="window.navigateTo('welcome')" class="min-h-11" aria-label="AZEDEV Learn, əsas səhifə">${BrandLogo()}</button>
            <nav aria-label="Əsas keçidlər" class="flex items-center gap-1 sm:gap-3">
                <button type="button" onclick="window.enterLearn('roadmaps')" class="hidden min-h-11 px-2 text-[14px] text-text-mute transition-colors hover:text-text sm:inline-flex sm:items-center">Yollar</button>
                <button type="button" onclick="window.navigateTo('about')" class="hidden min-h-11 px-2 text-[14px] text-text-mute transition-colors hover:text-text sm:inline-flex sm:items-center">Haqqımızda</button>
                ${Button('Başla', { onclick: "window.enterLearn('roadmaps')", variant: 'primary', size: 'sm', cls: 'min-h-11' })}
            </nav>
        </div>
    </header>`;

const Hero = (f) => `
    <section class="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14" aria-labelledby="welcome-title">
        <div>
            <p class="t-label">Pulsuz · Azərbaycan dilində · Hesab lazım deyil</p>
            <h1 id="welcome-title" class="ln-display mt-4">Proqramlaşdırmanı addım-addım öyrən</h1>
            <p class="mt-5 max-w-[36rem] text-[17px] leading-relaxed text-text-soft sm:text-[18px]">Bir yol seç, dərsləri sırayla keç, məşq et və sonda öz layihəni qur. Hər dərs üçün internetdəki minlərlə materialın içindən nə oxumalı, nə izləməli olduğunu biz seçmişik.</p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center [&>.az-btn]:min-h-12 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">
                ${Button('Öyrənməyə başla', { onclick: "window.enterLearn('roadmaps')", variant: 'primary', icon: 'arrow-right' })}
            </div>
            ${googleEnabled() ? `
            <button type="button" onclick="window.landingSignIn()" class="mt-3 inline-flex min-h-11 items-center text-left text-[14px] text-text-soft transition-colors hover:text-text">
                Başqa cihazda başlamısan?&nbsp;<span class="underline decoration-alpha-25 underline-offset-4">Google ilə daxil ol</span>
            </button>` : ''}
        </div>
        <div class="mx-auto w-full max-w-[420px]">${RouteArt()}</div>
    </section>
    <dl class="mt-14 grid grid-cols-2 border-y border-line sm:grid-cols-4">
        ${[[f.paths, 'öyrənmə yolu'], [f.lessons, 'dərs'], [f.projects, 'layihə'], [f.materials, 'seçilmiş material']].map(([n, label], i) => `
        <div class="flex flex-col-reverse gap-1 py-5 ${i % 2 ? 'border-l border-line pl-5' : ''} ${i >= 2 ? 'border-t border-line sm:border-t-0' : ''} ${i === 2 ? 'sm:border-l sm:pl-5' : ''}">
            <dt class="text-[14px] text-text-mute">${label}</dt>
            <dd class="font-serif text-[34px] leading-none tabular-nums text-text">${n}</dd>
        </div>`).join('')}
    </dl>`;

const HOW = [
    ['Yol seç', 'Sayt, mobil tətbiq, məlumat analizi, kiber təhlükəsizlik… Bilmirsənsə, "Yeni başlayanlar üçün" işarəli yollardan birini götür.'],
    ['Dərsləri sırayla keç', 'Hər dərsdə 1–3 addım var: əvvəl izlə, sonra oxu, sonra məşq et. Hər addımda "bu dərs üçün nəyi götür" yazılıb.'],
    ['Özünü yoxla', 'Qısa testlər və kod tapşırıqları. Səhv etsən, düzgün cavabı izahı ilə görürsən.'],
    ['Öz layihəni qur', 'Kodunu GitHub-a yüklə: sayt reponu avtomatik yoxlayır, WhatsApp icmasında mentor rəyi də istəyə bilərsən.']
];

const HowItWorks = () => `
    <section class="mt-20 sm:mt-28" aria-labelledby="how-title">
        <h2 id="how-title" class="ln-h1">Necə işləyir</h2>
        <ol class="mt-8 grid grid-cols-1 border-t border-line md:grid-cols-2 md:gap-x-10">
            ${HOW.map(([title, text], i) => `
            <li class="flex gap-4 border-b border-line py-6">
                <span class="ln-num w-7 shrink-0 text-[26px]" aria-hidden="true">${i + 1}</span>
                <div><h3 class="ln-chapter">${title}</h3><p class="mt-2 text-[15px] leading-relaxed text-text-soft">${text}</p></div>
            </li>`).join('')}
        </ol>
    </section>`;

const CHECKS = [
    ['Link işləyir', 'Hər ünvan avtomatik yoxlanır; YouTube videoları ayrıca.'],
    ['Mənbə etibarlıdır', 'Rəsmi sənədlər, universitetlər, tanınmış müəlliflər və kanallar.'],
    ['Aktualdır', 'Köhnəlmiş texnologiyanı əsas material kimi saxlamırıq.'],
    ['Pulsuz və qanunidir', 'Yalnız müəllifin və ya nəşriyyatın özünün pulsuz yaydığı materiallar; pirat nüsxə yoxdur.'],
    ['Dərsə uyğundur', 'Səviyyəsi dərsin yerinə uyğundur və dərsin mövzusunu həqiqətən öyrədir.']
];

const HowWeChoose = (f) => `
    <section class="mt-20 grid grid-cols-1 gap-10 sm:mt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14" aria-labelledby="choose-title">
        <div>
            <h2 id="choose-title" class="ln-h1">Hər şeyi toplamırıq, seçirik</h2>
            <p class="mt-5 text-[16px] leading-relaxed text-text-soft">İnternetdə hər mövzu üçün yüzlərlə video və məqalə var. Yeni başlayana lazım olan onların hamısı deyil, düzgün sıra ilə düzülmüş bir neçəsidir. Ona görə hər dərsdə əvvəl <span class="text-text">bir əsas material</span>, sonra bir-iki əlavə, sonra məşq və layihə göstəririk.</p>
            <p class="mt-4 text-[16px] leading-relaxed text-text-soft">Heç bir materialı "ən yaxşı" adlandırmırıq. Hər birinin yanında nə öyrədəcəyini, kim üçün olduğunu və hansı dildə olduğunu yazırıq. Materiallar ${f.langs.length > 1 ? f.langs.slice(0, -1).join(', ') + ' və ' + f.langs.slice(-1) : f.langs.join('')} dillərindədir, sayt özü isə azərbaycancadır.</p>
        </div>
        <ul class="ln-rows self-start" aria-label="Hər material bu yoxlamadan keçir">
            ${CHECKS.map(([title, text]) => `
            <li class="flex gap-3 py-4">
                <span class="mt-0.5 shrink-0 text-status-live" aria-hidden="true">${icon('check', 'size-[18px]')}</span>
                <div><p class="t-item">${title}</p><p class="mt-1 text-[14px] leading-snug text-text-mute">${text}</p></div>
            </li>`).join('')}
        </ul>
    </section>`;

const Starters = () => `
    <section class="mt-20 sm:mt-28" aria-labelledby="start-title">
        <div class="flex items-end justify-between gap-4">
            <h2 id="start-title" class="ln-h1">Haradan başlayım?</h2>
            <button type="button" onclick="window.enterLearn('roadmaps')" class="inline-flex min-h-11 shrink-0 items-center gap-1 text-[14px] text-text-mute transition-colors hover:text-text">Bütün yollar${icon('arrow-right', 'size-3.5')}</button>
        </div>
        <p class="mt-3 text-[16px] text-text-soft">Heç bir ilkin bilik istəməyən üç yol:</p>
        <ul class="mt-6 grid grid-cols-1 gap-2 md:grid-cols-3">
            ${STARTER_PATHS.map((sub) => {
                const tr = trackProgress(sub, state.lang);
                return `<li>${PathCard({
                    catId: tr.cat, sub, name: esc(subTitle(sub)), area: esc(getLocalizedContent(categoryOfSub(sub)?.title)),
                    total: tr.total, done: tr.done, badge: false,
                    onclick: `window.markEnteredAndOpen('${tr.cat}', '${sub}')`
                })}</li>`;
            }).join('')}
        </ul>
    </section>`;

const Who = () => `
    <section class="mt-20 grid grid-cols-1 gap-10 sm:mt-28 lg:grid-cols-2 lg:gap-14" aria-labelledby="who-title">
        <div>
            <h2 id="who-title" class="ln-h1">Kim edir?</h2>
            <p class="mt-5 text-[16px] leading-relaxed text-text-soft">AZEDEV Learn AZEDEV-in pulsuz təhsil layihəsidir. AZEDEV Bakıda 2024-cü ildə yaradılmış texnologiya studiyasıdır: rəqəmsal məhsullar qurur və insanların texnologiyaya daha asan girməsini istəyir.</p>
            <button type="button" onclick="window.navigateTo('about')" class="mt-3 inline-flex min-h-11 items-center gap-1 text-[14px] text-text-soft underline decoration-alpha-25 underline-offset-4 transition-colors hover:text-text">Biz kimik${icon('arrow-right', 'size-3.5')}</button>
        </div>
        <div class="self-start border-t border-line pt-4">
            <div class="flex items-start gap-3">
                <span class="shrink-0 pt-1">${Mascot({ mood: 'happy', cls: 'size-9' })}</span>
                <p class="text-[15px] leading-relaxed text-text-soft">Sualın olanda tək qalma: WhatsApp icmasında soruş, layihəni paylaş, başqalarına kömək et.</p>
            </div>
            <div class="mt-3">${CommunityRows()}</div>
        </div>
    </section>`;

const FAQ = () => {
    const items = [
        ['Həqiqətən pulsuzdur?', 'Bəli. Dərslər, planlar, testlər və layihələr pulsuzdur. Materialların hamısını müəllif və ya nəşriyyat pulsuz yayır; bəziləri yalnız pulsuz qeydiyyat istəyir və bunu yanında yazırıq.'],
        ['Hesab açmalıyam?', `Yox. İrəliləyişin bu cihazda saxlanılır.${googleEnabled() ? ' İstəsən, Google ilə daxil olub onu Google Drive-ının gizli tətbiq qovluğunda saxlaya və başqa cihazda davam edə bilərsən.' : ''}`],
        ['Heç nə bilmirəm. Başlaya bilərəm?', 'Bəli. "Yeni başlayanlar üçün" işarəli yollar sıfırdan başlayır, çətin sözlərin yanında qısa izah var. Başa düşmədiyin yer olsa, icmada soruş.'],
        ['Materiallar hansı dildədir?', 'Çoxu ingiliscədir. Mümkün olan yerdə eyni dərs üçün türkcə və ya rusca material da göstəririk. Saytın özü azərbaycancadır.'],
        ['Sertifikat verirsiniz?', 'Bəli, amma yalnız yoxlanmış sertifikat: yolun final testindən 8/10 topla, layihənin reposu avtomatik yoxlamadan keçsin və mentor onu oxusun. Sonra AZEDEV sənə ID verir və sertifikatı hər kəs learn.azedev.com/verify səhifəsində yoxlaya bilir.']
    ];
    return `
    <section class="mt-20 sm:mt-28" aria-labelledby="faq-title">
        <h2 id="faq-title" class="ln-h1">Suallar</h2>
        <div class="ln-rows mt-8">
            ${items.map(([q, a]) => `
            <details class="group">
                <summary class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                    <span class="ln-chapter">${q}</span>
                    <span class="shrink-0 text-text-mute transition-transform group-open:rotate-45" aria-hidden="true">${icon('plus', 'size-5')}</span>
                </summary>
                <p class="max-w-[46rem] pb-5 text-[15px] leading-relaxed text-text-soft">${a}</p>
            </details>`).join('')}
        </div>
    </section>`;
};

const Closing = () => `
    <section class="mt-20 border-t border-line pt-14 sm:mt-28" aria-labelledby="closing-title">
        <h2 id="closing-title" class="ln-h1 max-w-[30rem]">Birinci dərs səni gözləyir</h2>
        <p class="mt-4 text-[16px] text-text-soft">Hesab lazım deyil. İstədiyin vaxt dayanıb qaldığın yerdən davam edə bilərsən.</p>
        <div class="mt-8 [&>.az-btn]:min-h-12 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${Button('Öyrənməyə başla', { onclick: "window.enterLearn('roadmaps')", variant: 'primary', icon: 'arrow-right' })}</div>
    </section>`;

export const WelcomePage = () => {
    const f = facts();
    return `
    <div class="flex min-h-screen flex-col">
        ${TopBar()}
        <main id="main" class="flex-1">
            <div class="ln-page">
                ${Hero(f)}
                ${HowItWorks()}
                ${HowWeChoose(f)}
                ${Starters()}
                ${Who()}
                ${FAQ()}
                ${Closing()}
            </div>
        </main>
        ${Footer()}
    </div>`;
};
