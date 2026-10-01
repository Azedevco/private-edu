// AZEDEV EDU guidance: the first-visit introduction, contextual hints, beginner mode and term tooltips.
// Rule: never leave the learner lost. Every important screen can say where you are, what this is and what to do next.
// Everything is short, skippable and remembered on this device (localStorage).
import { state } from './core.js'
import { icon } from './icons.js'
import { Button, ProgressBar, AreaTile } from './ui.js'
import { RouteArt } from './art/RouteArt.js'
import { Mascot } from './art/mascot.js'
import { googleEnabled, syncState } from './sync.js'
import { azedevBrand } from './azedev-data.js'

const KEY = 'azedev_guide_v1';
let guide = { onboarded: false, beginner: true, hints: {} };
try { guide = { ...guide, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { /* defaults */ }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(guide)); } catch { /* ignore */ } };
const rerender = () => window.__azRender?.();

export const isBeginner = () => guide.beginner;
export const isOnboarded = () => guide.onboarded;
// A first-time visitor sees the landing page until they step into the app ("Öyrənməyə başla" or Google sign-in).
export const hasEntered = () => Boolean(guide.entered);
export const markEntered = () => { if (!guide.entered) { guide.entered = true; save(); } };

// ---- Beginner mode: explanations, hints, tooltips, fewer advanced tabs. Advanced learners switch it off. ----
window.setBeginnerMode = (on) => {
    guide.beginner = Boolean(on);
    save();
    rerender();
};

// ---- Term tooltips: plain text for advanced learners; a dotted word with a short definition in beginner mode. ----
export const TERMS = {
    yol: 'Öyrənmə yolu: dərsləri hansı ardıcıllıqla keçəcəyini göstərən plan.',
    dərs: 'Dərs: yolun bir addımı, məsələn "HTML" və ya "Funksiyalar".',
    material: 'Material: dərsi öyrənmək üçün video, məqalə, kitab və ya təlimat.',
    məşq: 'Məşq: öyrəndiklərini yoxlamaq üçün test və tapşırıqlar.',
    layihə: 'Layihə: öyrəndiklərinlə düzəltdiyin kiçik real iş, məsələn sadə sayt.',
    irəliləyiş: 'İrəliləyiş: neçə dərs bitirdiyini göstərən say və faiz.',
    bacarıq: 'Bacarıq: bitirdiyin dərs və layihələrdən qazandığın bilik.',
    github: 'GitHub: kodunu pulsuz saxladığın və başqaları ilə paylaşdığın sayt.',
    // Older keys, still used by some pages.
    mövzu: 'Dərs: yolun bir addımı, məsələn "HTML" və ya "Funksiyalar".',
    resurs: 'Material: dərsi öyrənmək üçün video, məqalə, kitab və ya təlimat.',
    praktika: 'Məşq: öyrəndiklərini yoxlamaq üçün test və tapşırıqlar.'
};
// Term('yol', 'yollar') → the word, with a tooltip in beginner mode.
export const Term = (key, text = key) => {
    const tip = TERMS[key];
    if (!guide.beginner || !tip) return text;
    return `<span class="ln-term" tabindex="0">${text}<span class="ln-term__tip" role="tooltip">${tip}</span></span>`;
};

// ---- Contextual hints: two short lines answer "what is this?" and "what do I do now?"; one optional next step.
// After "Başa düşdüm" the card folds into a small "Bu səhifə nədir?" button, so the help is never lost. ----
export const HINTS = {
    home: { where: 'Ana səhifə', what: 'Buradan öyrənməyə başlayır və qaldığın yerə qayıdırsan.', todo: 'Aşağıdakı böyük düyməyə bas.' },
    learn: { where: 'Öyrən', what: 'Haradan başlayacağını bilmirsənsə,', todo: '"Sayt düzəltmək" yolunu seç: heç bir ilkin bilik istəmir və nəticəni dərhal ekranda görürsən.', next: { label: 'Sayt düzəltməyi öyrən', go: "window.navigateToCategory('web-dev', 'frontend', 'roadmap')" } },
    path: { where: 'Öyrən → Yol', what: 'Bu yolun dərsləri yuxarıdan aşağı sıralanıb.', todo: 'Yuxarıdakı düymə ilə növbəti dərsi aç.' },
    lesson: { where: 'Öyrən → Dərs', what: 'Tələsmə.', todo: 'Bir dərsi bir neçə günə bitirmək normaldır; vacib olan sıranı pozmamaqdır.' },
    resources: { where: 'Materiallar', what: 'Dərsi öyrənmək üçün pulsuz video, məqalə və kitablar.', todo: 'Birini seç. Material başqa saytda açılacaq.' },
    practice: { where: 'Məşq', what: 'Burada səhv etmək normaldır.', todo: 'Bir test seç: hər cavabdan sonra düzgün cavabı izahı ilə görəcəksən.' },
    projects: { where: 'Layihələr', what: 'Hələ tezdir deyə düşünürsənsə,', todo: 'əvvəl bir yolun ilk dərslərini keç, sonra başlanğıc səviyyəli bir layihə seç.' },
    profile: { where: 'Profil', what: 'Neçə dərs bitirdiyini və nə qədər irəlilədiyini burada görürsən.', todo: 'Davam etmək üçün yolunun düyməsinə bas.' }
};

window.dismissHint = (id) => {
    guide.hints[id] = true;
    save();
    state.hintOpen = { ...(state.hintOpen || {}), [id]: false };
    rerender();
};
window.showHint = (id) => {
    state.hintOpen = { ...(state.hintOpen || {}), [id]: true };
    rerender();
};

// Hint('learn') or Hint('lesson', { next: { label, go } }). Beginner mode off: nothing. Dismissed: a small "?" button.
export const Hint = (id, { next } = {}) => {
    const h = HINTS[id];
    if (!h || !guide.beginner) return '';
    const open = !guide.hints[id] || state.hintOpen?.[id];
    if (!open) {
        // One "Bu səhifə nədir?" per screen, even when a page holds two folded hints.
        if (state.hintFoldShown) return '';
        state.hintFoldShown = true;
        return `<button type="button" onclick="window.showHint('${id}')" class="mt-3 inline-flex min-h-11 items-center gap-2 text-[14px] text-text-mute transition-colors hover:text-text">${icon('circle-help', 'size-[18px]')}Bu səhifə nədir?</button>`;
    }
    const action = next || h.next;
    return `
    <aside class="ln-hint" aria-label="Kömək: ${h.where}">
        <span class="shrink-0 pt-0.5" aria-hidden="true">${Mascot({ mood: 'think', cls: 'size-7' })}</span>
        <div class="min-w-0 flex-1">
            <p class="text-[15px] leading-relaxed text-text-soft"><span class="text-text">${h.what}</span> ${h.todo}</p>
            <div class="flex flex-wrap items-center gap-x-5">
                ${action ? `<button type="button" onclick="${action.go}" class="inline-flex min-h-11 items-center gap-1.5 text-[14px] font-medium text-text underline decoration-alpha-25 underline-offset-4 transition-colors hover:decoration-text">${action.label}${icon('arrow-right', 'size-3.5')}</button>` : ''}
                <button type="button" onclick="window.dismissHint('${id}')" class="inline-flex min-h-11 items-center text-[14px] text-text-mute transition-colors hover:text-text">Başa düşdüm</button>
            </div>
        </div>
    </aside>`;
};

// ---- First-visit introduction: welcome + six steps, each one message and one visual example ----

const Visual = {
    choose: () => `
        <div class="grid grid-cols-1 gap-2">
            ${[['web-dev', 'Frontend', 'Veb saytların görünən hissəsi'], ['web-dev', 'Backend', 'Server və məlumat bazası'], ['data-ai', 'Data Science', 'Məlumatla işləmək']].map(([cat, name, desc], i) => `
            <div class="flex items-center gap-3 rounded-md border ${i === 0 ? 'border-alpha-25 bg-alpha-6' : 'border-alpha-8'} p-3">
                ${AreaTile(cat, 'size-9')}
                <div class="min-w-0 flex-1"><p class="text-[14px] font-medium text-text">${name}</p><p class="text-[13px] text-text-mute">${desc}</p></div>
                ${i === 0 ? `<span class="text-text">${icon('circle-check', 'size-5')}</span>` : ''}
            </div>`).join('')}
        </div>`,
    path: () => `
        <ol class="ln-stops">
            ${[['HTML', 'done'], ['CSS', 'done'], ['JavaScript', 'current'], ['React', ''], ['Layihələr', '']].map(([name, st]) => `
            <li class="ln-stop"${st ? ` data-state="${st}"` : ''}>
                <div class="flex min-h-11 items-center justify-between gap-3 rounded-md border border-alpha-8 px-3 py-2">
                    <span class="text-[14px] ${st === 'current' ? 'font-medium text-text' : 'text-text-soft'}">${name}</span>
                    <span class="inline-flex items-center gap-1 text-[12px] ${st === 'done' ? 'text-status-live' : 'text-text-mute'}">${st === 'done' ? `${icon('check', 'size-3.5')}Tamamlandı` : st === 'current' ? 'Hazırkı' : 'Növbəti'}</span>
                </div>
            </li>`).join('')}
        </ol>`,
    study: () => `
        <div class="az-card flex flex-col gap-3 p-4">
            <div class="flex items-start gap-3">
                <span class="flex size-10 shrink-0 items-center justify-center rounded-md border border-alpha-8 bg-alpha-3 text-text-soft">${icon('circle-play', 'size-[18px]')}</span>
                <div><p class="t-item">JavaScript funksiyaları</p><p class="t-small mt-1">Başlanğıc · 35 dəq · Video</p></div>
            </div>
            <span class="az-btn az-btn--ghost pointer-events-none w-full" aria-hidden="true">Başla${icon('arrow-right')}</span>
        </div>`,
    practice: () => `
        <div class="az-card p-4">
            <p class="font-mono text-[12px] tracking-[0.04em] text-text-mute">Sual 1 / 5</p>
            <p class="mt-2 text-[15px] font-medium text-text">const nədir?</p>
            <div class="mt-3 grid gap-2">
                ${['Dəyişməyən dəyişən', 'Dövr (loop)'].map((o, i) => `
                <div class="flex min-h-11 items-center gap-3 rounded-md border px-3 ${i === 0 ? 'border-status-live-line bg-status-live-wash' : 'border-alpha-8'}">
                    ${i === 0 ? `<span class="text-status-live">${icon('circle-check', 'size-4')}</span>` : `<span class="size-4 rounded-full border border-alpha-25"></span>`}
                    <span class="text-[14px] text-text">${o}</span>${i === 0 ? '<span class="ml-auto text-[12px] text-status-live">Düzgün</span>' : ''}
                </div>`).join('')}
            </div>
        </div>`,
    build: () => `
        <div class="az-card p-4">
            <div class="flex items-center gap-2"><span class="az-status az-status--live" lang="en">Junior</span></div>
            <p class="t-item mt-3">Hava proqnozu tətbiqi</p>
            <p class="t-small mt-1">Açıq API ilə canlı hava proqnozu göstərən kiçik tətbiq.</p>
            <div class="mt-3 flex flex-wrap gap-1.5">${['HTML', 'CSS', 'JavaScript'].map((x) => `<span class="az-label">${x}</span>`).join('')}</div>
            <p class="mt-3 inline-flex items-center gap-1.5 text-[13px] text-text-soft">${icon('github', 'size-4')} GitHub reponuzu bağlayın</p>
        </div>`,
    track: () => `
        <div class="az-card p-4">
            <div class="flex items-center gap-3">${AreaTile('web-dev', 'size-9')}<div><p class="t-item">Frontend</p><p class="t-small">Veb İnkişafı</p></div></div>
            <div class="mt-4">${ProgressBar(72, '12 dərs bitib, 5 dərs qalıb')}</div>
            <div class="mt-3 grid grid-cols-2 gap-2 text-[13px] text-text-mute"><span>8 / 10 test</span><span>3 / 5 layihə</span></div>
        </div>`
};

export const STEPS = [
    { key: 'choose', title: 'Nə öyrənmək istədiyini seç', text: 'Sənə maraqlı olanı seç: sayt düzəltmək, telefon tətbiqi, məlumatla işləmək və ya sistemləri qorumaq.' },
    { key: 'path', title: 'Öyrənmə yolunu izlə', text: 'Yol dərsləri düzgün ardıcıllıqla düzür: əvvəl HTML, sonra CSS, sonra JavaScript. Nəyi öyrənəcəyini düşünməyə ehtiyac yoxdur.' },
    { key: 'study', title: 'Dərsi materiallardan öyrən', text: 'Hər dərsdə nələri öyrənəcəyin yazılıb və seçilmiş pulsuz materiallar var: videolar, məqalələr, təlimatlar.' },
    { key: 'practice', title: 'Məşq et', text: 'Qısa testlərlə öyrəndiklərini yoxla. Səhv etsən, düzgün cavabı izahı ilə dərhal görürsən.' },
    { key: 'build', title: 'Kiçik real iş düzəlt', text: 'Öyrəndiklərinlə sadə sayt və ya tətbiq düzəlt. Onu GitHub-da (kodu pulsuz saxladığın saytda) saxla.' },
    { key: 'track', title: 'Nə qədər irəlilədiyini gör', text: 'Profil səhifəsi neçə dərs bitirdiyini, testlərini və layihələrini göstərir.' }
];

// state.onboardingStep: 0 = welcome, 1..6 = steps.
window.openOnboarding = () => {
    state.onboardingOpen = true;
    state.onboardingStep = 0;
    rerender();
    setTimeout(() => document.getElementById('onboarding-dialog')?.focus(), 30);
};
const finish = () => {
    guide.onboarded = true;
    save();
    state.onboardingOpen = false;
    rerender();
};
window.onboardingNext = () => {
    if (state.onboardingStep >= STEPS.length) return finish();
    state.onboardingStep += 1;
    rerender();
    document.getElementById('onboarding-dialog')?.focus();
};
window.onboardingPrev = () => {
    state.onboardingStep = Math.max(0, state.onboardingStep - 1);
    rerender();
    document.getElementById('onboarding-dialog')?.focus();
};
window.onboardingSkip = () => finish();
window.onboardingStart = () => {
    finish();
    window.navigateTo('roadmaps');
};
window.onboardingKey = (e) => {
    if (e.key === 'ArrowRight') window.onboardingNext();
    else if (e.key === 'ArrowLeft') window.onboardingPrev();
    else if (e.key === 'Escape') window.onboardingSkip();
};

// First visit: the landing page explains the product; the short guide to the app opens once, right after the visitor
// steps in (never over the landing page).
export const maybeStartOnboarding = () => {
    if (guide.entered && !guide.onboarded && !state.onboardingOpen && !state.onboardingShownThisVisit) {
        state.onboardingShownThisVisit = true;
        state.onboardingOpen = true;
        state.onboardingStep = 0;
    }
};

const Dots = (current) => `
    <div class="flex items-center gap-1.5" aria-hidden="true">
        ${STEPS.map((_, i) => `<span class="h-1.5 rounded-full transition-[width,background-color] duration-300 ${i + 1 === current ? 'w-5 bg-text' : i + 1 < current ? 'w-1.5 bg-alpha-40' : 'w-1.5 bg-alpha-15'}"></span>`).join('')}
    </div>`;

const GoogleOffer = () => {
    if (!googleEnabled()) return '';
    const s = syncState();
    if (s.status === 'synced' || s.status === 'saving') return `<p class="mt-4 inline-flex items-center gap-2 text-[14px] text-status-live">${icon('circle-check', 'size-4')}Google hesabın qoşulub: irəliləyişin saxlanılır</p>`;
    return `
        <div class="mt-5 rounded-md border border-alpha-10 p-4">
            <p class="text-[14px] font-medium text-text">İrəliləyişini qoru (tövsiyə olunur)</p>
            <p class="mt-1 text-[13px] leading-relaxed text-text-mute">Google ilə daxil olsan, irəliləyişin telefonunda və kompüterində eyni olar. Məcburi deyil: hesabsız da hər şey bu cihazda işləyir.</p>
            <button type="button" onclick="window.googleSignIn()" class="az-btn az-btn--ghost mt-3 w-full sm:w-auto">${icon('user-round')}Google ilə daxil ol</button>
        </div>`;
};

export const Onboarding = () => {
    if (!state.onboardingOpen) return '';
    const i = state.onboardingStep || 0;
    const step = STEPS[i - 1];
    const body = i === 0 ? `
        <div class="mx-auto w-full max-w-[420px]">${RouteArt()}</div>
        <div class="mt-2 flex items-center gap-3"><span class="text-text">${Mascot({ mood: 'hello', cls: 'size-12' })}</span><h2 id="onboarding-title" class="ln-h1"><span class="whitespace-nowrap">AZEDEV Learn-ə</span> xoş gəldin</h2></div>
        <p class="mt-3 text-[15px] leading-relaxed text-text-soft">Burada proqramlaşdırmanı addım-addım, pulsuz öyrənirsən: nə öyrənəcəyini seçirsən, dərsləri keçirsən, məşq edirsən və kiçik real iş düzəldirsən. Necə işlədiyini 6 qısa addımda göstərək.</p>
        <ol class="mt-5 grid gap-2 text-[14px] text-text-soft">
            ${STEPS.map((st, n) => `<li class="flex items-baseline gap-3"><span class="ln-num w-5 shrink-0 text-[18px]" aria-hidden="true">${n + 1}</span>${st.title}</li>`).join('')}
        </ol>` : `
        <p class="font-mono text-[12px] tracking-[0.04em] text-text-mute">Addım ${i} / ${STEPS.length}</p>
        <h2 id="onboarding-title" class="mt-2 text-[24px] font-medium leading-tight tracking-[-0.02em] text-text sm:text-[28px]">${step.title}</h2>
        <p class="mt-3 text-[15px] leading-relaxed text-text-soft">${step.text}</p>
        <div class="mt-6">${Visual[step.key]()}</div>
        ${i === STEPS.length ? `
        ${GoogleOffer()}
        <a href="${azedevBrand.urls.whatsapp}" target="_blank" rel="noopener noreferrer" class="mt-4 flex min-h-11 items-center gap-2 text-[14px] text-text-soft hover:text-text">${icon('message-circle', 'size-4')}Sualın olsa, WhatsApp icmasına qoşul${icon('arrow-up-right', 'size-3.5')}</a>
        <label class="mt-4 flex min-h-11 cursor-pointer items-center gap-3 text-[14px] text-text-soft">
            <input type="checkbox" class="size-5 accent-[var(--text)]" ${guide.beginner ? 'checked' : ''} onchange="window.setBeginnerMode(this.checked)">
            Başlanğıc rejimi: səhifələrdə qısa izahlar göstər
        </label>` : ''}`;

    const primary = i === 0 ? Button('Başlayaq', { onclick: 'window.onboardingNext()', variant: 'primary', icon: 'arrow-right' })
        : i < STEPS.length ? Button('İrəli', { onclick: 'window.onboardingNext()', variant: 'primary', icon: 'arrow-right' })
        : Button('Yol seç', { onclick: 'window.onboardingStart()', variant: 'primary', icon: 'arrow-right' });

    return `
    <div class="fixed inset-0 z-[1001] flex items-stretch justify-center bg-bg sm:items-center sm:bg-bg/80 sm:p-6 sm:backdrop-blur-sm">
        <div id="onboarding-dialog" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="onboarding-title" onkeydown="window.onboardingKey(event)"
            class="flex h-full w-full flex-col bg-bg outline-none sm:h-auto sm:max-h-[92vh] sm:max-w-[560px] sm:rounded-window sm:border sm:border-alpha-10 sm:bg-card sm:[box-shadow:var(--shadow-window)]">
            <div class="flex h-14 shrink-0 items-center justify-between px-5 pt-[env(safe-area-inset-top)]">
                ${i > 0 ? Dots(i) : '<span class="font-mono text-[12px] tracking-[0.04em] text-text-mute">Qısa bələdçi</span>'}
                <button type="button" onclick="window.onboardingSkip()" class="inline-flex min-h-11 items-center px-2 text-[14px] text-text-mute transition-colors hover:text-text">Keç</button>
            </div>
            <div class="flex-1 overflow-y-auto px-5 pb-6 sm:px-8">${body}</div>
            <div class="flex shrink-0 items-center gap-2 border-t border-line px-5 py-4 pb-[max(16px,env(safe-area-inset-bottom))] sm:px-8">
                ${i > 0 ? `<button type="button" onclick="window.onboardingPrev()" class="az-btn az-btn--ghost">${icon('arrow-left')}Geri</button>` : ''}
                <div class="ml-auto [&>.az-btn]:min-w-[9rem]">${primary}</div>
            </div>
        </div>
    </div>`;
};
