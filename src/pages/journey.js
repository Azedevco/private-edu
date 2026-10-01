// AZEDEV Learn - Profil (view 'journey'): where the learner stands, in plain words. First the account (optional Google
// sign-in, never required), then each started path as one bar and one sentence, the work in numbers, the next steps,
// skills, projects, the device settings, and the WhatsApp community with optional Kofe.al support. Çarx (the mascot)
// waves in the empty state and smiles beside a finished path. No points or streak games: only what the learner did.
import { languages } from '../data.js'
import { state, getLocalizedContent, requestRender, showToast } from '../core.js'
import { Page } from '../shell.js'
import { icon } from '../icons.js'
import {
    PageTitle, Section, Stats, AreaTile, PathCard, TextLink, EmptyState,
    Status, Badge, Label, Button, ExternalLink, ProgressLine, esc
} from '../ui.js'
import {
    hasProgress, summary, recommendations, subTitle, stagesOf, projectState,
    isRepoUrl, exportProgress, resetProgress, categoryOfSub
} from '../progress.js'
import { plainPath, STARTER_PATHS } from '../plain.js'
import { Hint, isBeginner } from '../onboarding.js'
import { googleEnabled, syncState } from '../sync.js'
import { Mascot } from '../art/mascot.js'
import { CommunityRows } from './landing.js'

const L = getLocalizedContent;

window.downloadJourney = () => {
    const blob = new Blob([exportProgress()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `azedev-learn-profil-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
};
window.resetJourney = () => {
    if (!window.confirm('Bu cihazdakı bütün irəliləyiş silinsin? Bunu geri qaytarmaq olmur.')) return;
    resetProgress();
    requestRender();
    showToast('İrəliləyiş sıfırlandı.', 'info');
};

// One tappable next step: icon, title, what it is, arrow. Titles may wrap to two lines.
const StepRow = (r) => `
    <li>
        <button type="button" onclick="${r.go}" class="az-row min-h-16 w-full text-left transition-colors hover:border-alpha-20 hover:bg-alpha-4">
            <span class="flex size-10 shrink-0 items-center justify-center rounded-md border border-alpha-8 bg-alpha-3 text-text-soft" aria-hidden="true">${icon(r.icon, 'size-[18px]')}</span>
            <span class="az-row__main"><span class="az-row__title line-clamp-2">${esc(r.title)}</span><span class="t-small block">${esc(r.meta)}</span></span>
            <span class="text-text-mute" aria-hidden="true">${icon('arrow-right')}</span>
        </button>
    </li>`;

// A started path: what it is for, one bar with one sentence, the next lesson and the way back in. "Başla" before the
// first lesson, "Dərsi davam et" after. The most recent path carries the page's one primary action.
const PathProgress = (tr, primary) => {
    const plain = plainPath(tr.sub);
    const nextTitle = tr.next >= 0 ? stagesOf(tr.sub, state.lang)[tr.next]?.title : '';
    const action = tr.next >= 0
        ? Button(tr.done === 0 ? 'Başla' : 'Dərsi davam et', { onclick: `window.openTopic('${tr.cat}', '${tr.sub}', ${tr.next})`, variant: primary ? 'primary' : 'ghost', icon: 'arrow-right' })
        : Button('Layihələrə keç', { onclick: "window.navigateTo('projects')", icon: 'arrow-right' });
    return `
    <li class="az-card flex flex-col gap-4 p-4 sm:p-5">
        <div class="flex items-start gap-3">
            ${AreaTile(tr.cat)}
            <div class="min-w-0 flex-1">
                <h3 class="t-item">${esc(plain.want || subTitle(tr.sub))}</h3>
                <p class="t-small">${esc(subTitle(tr.sub))} · ${tr.total} dərs</p>
            </div>
            ${tr.pct >= 100 ? Badge('Bitdi', { success: true }) : ''}
        </div>
        ${ProgressLine(tr.done, tr.total)}
        <div class="flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
            ${tr.next < 0 ? `
            <p class="flex min-w-0 items-center gap-3 text-[13px] text-text-mute">
                <span class="shrink-0 text-text">${Mascot({ mood: 'happy', cls: 'size-10' })}</span>
                <span><span class="block text-[14px] font-medium text-text">Yol bitdi</span>Bütün dərsləri bitirdin</span>
            </p>` : `
            <p class="min-w-0 text-[13px] text-text-mute">${nextTitle ? `Növbəti dərs: <span class="text-text-soft">${esc(nextTitle)}</span>` : ''}</p>`}
            <div class="shrink-0 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${action}</div>
        </div>
    </li>`;
};

const PROJECT_STATUS = { started: ['Davam edir', 'beta'], done: ['Bitdi', 'live'] };

// HH:MM of the last sync, in the learner's clock.
const clock = (ms) => {
    const d = new Date(ms);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};
const initials = (name = '') => name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || '').join('').toUpperCase() || 'G';

// The signed-in account: Google's photo when there is one (https only), otherwise initials.
const AccountLine = (account) => {
    if (!account) return '';
    const pic = String(account.picture || '');
    const avatar = pic.startsWith('https://')
        ? `<img src="${esc(pic)}" alt="" width="32" height="32" class="size-8 shrink-0 rounded-full object-cover" referrerpolicy="no-referrer" loading="lazy">`
        : `<span class="az-avatar az-avatar--sm !size-8 shrink-0" aria-hidden="true">${esc(initials(account.name))}</span>`;
    return `
        <div class="flex min-w-0 items-center gap-3">
            ${avatar}
            <div class="min-w-0">
                <p class="truncate text-[15px] font-medium text-text">${esc(account.name || account.email || 'Google hesabı')}</p>
                ${account.email ? `<p class="truncate text-[13px] text-text-mute">${esc(account.email)}</p>` : ''}
            </div>
        </div>`;
};

// The account comes first: it answers "do I need to register?". Google sign-in is optional and recommended; without the
// site's Google client the answer is simply that no account is needed.
const Account = () => {
    if (!googleEnabled()) {
        return Section({
            id: 'account-title',
            title: 'Hesab',
            body: `<div class="az-card p-4 sm:p-5"><p class="text-[15px] font-medium text-text">Qeydiyyat lazım deyil</p><p class="t-small mt-1">İrəliləyişin bu cihazda avtomatik saxlanılır.</p></div>`
        });
    }
    const sync = syncState();
    const signOut = `<button type="button" onclick="window.googleSignOut()" class="inline-flex min-h-11 items-center px-2 text-[14px] text-text-soft transition-colors hover:text-text">Çıxış</button>`;
    let body;
    if (sync.status === 'synced' || sync.status === 'saving') {
        body = `
            ${AccountLine(sync.account)}
            <p class="mt-4 flex items-center gap-2 text-[14px] text-text-soft" role="status">
                <span class="text-status-live">${icon('circle-check', 'size-4')}</span>
                ${sync.status === 'saving' ? 'Dəyişikliklər saxlanılır' : `İrəliləyişin saxlanılır${sync.lastSync ? ` · Son sinxronlaşdırma: ${clock(sync.lastSync)}` : ''}`}
            </p>
            <p class="t-small mt-1">İrəliləyişin həm bu cihazda, həm də öz Google Drive-ında saxlanılır.</p>
            <div class="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                ${Button('İndi sinxronlaşdır', { onclick: 'window.googleSync()', icon: 'refresh-cw' })}
                ${signOut}
            </div>`;
    } else if (sync.status === 'connecting') {
        body = `
            ${AccountLine(sync.account)}
            <p class="${sync.account ? 'mt-4 ' : ''}flex items-center gap-2 text-[14px] text-text-soft" role="status" aria-live="polite">${icon('refresh-cw', 'size-4')}Google hesabına qoşulur, irəliləyişin birləşdirilir</p>`;
    } else if (sync.status === 'expired') {
        body = `
            ${AccountLine(sync.account)}
            <p class="${sync.account ? 'mt-4 ' : ''}text-[14px] leading-relaxed text-text-soft">Qoşulmanın vaxtı bitib. Yenidən qoşul ki, irəliləyişin saxlanmağa davam etsin. Bu cihazdakı heç nə itmir.</p>
            <div class="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                ${Button('Yenidən qoşul', { onclick: 'window.googleSignIn()', icon: 'refresh-cw' })}
                ${signOut}
            </div>`;
    } else if (sync.status === 'error') {
        body = `
            ${AccountLine(sync.account)}
            <p class="${sync.account ? 'mt-4 ' : ''}flex items-start gap-2 text-[14px] leading-relaxed text-danger" role="alert">${icon('circle-alert', 'size-4 mt-0.5')}<span>${esc(sync.error || 'Sinxronlaşdırma alınmadı.')} Bir az sonra yenidən cəhd et.</span></p>
            <div class="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                ${Button('Yenidən cəhd et', { onclick: 'window.googleSync()', icon: 'rotate-ccw' })}
                ${sync.account ? signOut : ''}
            </div>`;
    } else {
        body = `
            <p class="text-[15px] font-medium text-text">Hesabsız da başlaya bilərsən</p>
            <p class="t-small mt-1 max-w-[42rem]">Google ilə daxil olsan, irəliləyişin telefonunda və kompüterində eyni olar. Məlumatların öz Google Drive-ında saxlanılır.</p>
            <div class="mt-4 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${Button('Google ilə daxil ol', { onclick: 'window.googleSignIn()', icon: 'user-round' })}</div>`;
    }
    return Section({
        id: 'account-title',
        title: 'Hesab',
        body: `<div class="az-card p-4 sm:p-5">${body}</div>`
    });
};

// Beginner mode as a switch: explanations, word meanings and next-step suggestions on or off.
const BeginnerSwitch = () => {
    const on = isBeginner();
    return `
        <button type="button" role="switch" aria-checked="${on}" onclick="window.setBeginnerMode(${!on})" class="flex min-h-11 w-full items-center justify-between gap-4 text-left">
            <span class="min-w-0">
                <span class="block text-[15px] font-medium text-text">Başlanğıc rejimi</span>
                <span class="mt-0.5 block text-[13px] leading-snug text-text-mute">Səhifələrdə qısa izahlar, çətin sözlərin mənası və növbəti addım göstərilir.</span>
            </span>
            <span aria-hidden="true" class="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border transition-colors ${on ? 'border-transparent bg-text' : 'border-alpha-20 bg-alpha-6'}">
                <span class="absolute left-[3px] size-5 rounded-full transition-transform duration-300 ${on ? 'translate-x-5 bg-bg' : 'translate-x-0 bg-text-mute'}"></span>
            </span>
        </button>`;
};

// Device settings: beginner mode, the short guide, content language, export, reset.
const Settings = () => {
    const synced = ['synced', 'saving'].includes(syncState().status);
    return Section({
        id: 'settings-title',
        title: 'Tənzimləmələr',
        body: `
        <div class="az-card flex flex-col gap-6 p-4 sm:p-5">
            ${BeginnerSwitch()}
            <div class="border-t border-line pt-5">
                <p class="text-[15px] font-medium text-text">Qısa bələdçi</p>
                <p class="mt-0.5 text-[13px] leading-snug text-text-mute">Saytın necə işlədiyini 6 addımda yenidən göstərir.</p>
                <div class="mt-3 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${Button('Qısa bələdçini yenidən göstər', { onclick: 'window.openOnboarding()', icon: 'circle-help' })}</div>
            </div>
            <div class="border-t border-line pt-5">
                <p class="text-[15px] font-medium text-text" id="profile-lang-label">Məzmun dili</p>
                <p class="mt-0.5 text-[13px] leading-snug text-text-mute">Dərslər bu dildə göstərilir, menyular Azərbaycan dilində qalır.</p>
                <div class="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="profile-lang-label">
                    ${languages.map((l) => `<button type="button" class="az-chip min-h-11" translate="no" aria-pressed="${state.lang === l.code}" onclick="window.setLanguage('${l.code}')">${l.name}</button>`).join('')}
                </div>
            </div>
            <div class="border-t border-line pt-5">
                <p class="t-small">${synced
                    ? 'İrəliləyişin bu cihazda və Google Drive-ında saxlanılır. İstəsən, faylı yükləyib ayrıca da saxlaya bilərsən.'
                    : 'İrəliləyişin bu cihazda, brauzerin yaddaşında saxlanılır. Başqa cihaza keçmək üçün faylı yükləyib saxla.'}</p>
                <div class="mt-3 flex flex-col gap-2 sm:flex-row">
                    ${Button('Məlumatları yüklə (JSON)', { onclick: 'window.downloadJourney()', icon: 'download' })}
                    ${Button('Sıfırla', { onclick: 'window.resetJourney()', icon: 'trash-2' })}
                </div>
            </div>
        </div>`
    });
};

// Community and support at the bottom of Profil: the same quiet rows as on home.
const Community = () => Section({
    id: 'community-title',
    title: 'İcma və dəstək',
    body: `<div class="az-card p-4 sm:p-5">${CommunityRows()}</div>`
});

// --- Profil ---
export const JourneyPage = () => {
    const synced = ['synced', 'saving'].includes(syncState().status);
    const title = `${PageTitle({ title: 'Profil', description: synced ? 'İrəliləyişin bu cihazda və Google hesabında saxlanılır.' : 'İrəliləyişin bu cihazda saxlanılır.' })}${Hint('profile')}`;

    if (!hasProgress()) {
        const starters = STARTER_PATHS.map((sub) => {
            const cat = categoryOfSub(sub);
            return `<li>${PathCard({
                catId: cat.id,
                sub,
                name: esc(subTitle(sub)),
                area: esc(L(cat.title)),
                total: stagesOf(sub, state.lang).length,
                onclick: `window.navigateToCategory('${cat.id}', '${sub}', 'roadmap')`
            })}</li>`;
        }).join('');
        return Page(`
            ${title}
            ${Account()}
            <div class="mt-10 sm:mt-14">
                ${EmptyState(`<span class="mb-3 flex justify-center text-text">${Mascot({ mood: 'hello', cls: 'size-12' })}</span>Hələ başlamamısan.`, 'Bir yol seç, sənə dərs-dərs yol göstərək. Bitirdiyin dərslər, testlər və layihələr burada görünəcək.', Button('Öyrənməyə başla', { onclick: "window.navigateToCategory('web-dev', 'frontend', 'roadmap')", variant: 'primary', icon: 'arrow-right' }))}
            </div>
            ${Section({
                id: 'starters-title',
                title: 'Buradan başlaya bilərsən',
                body: `<ul class="grid grid-cols-1 gap-2 md:grid-cols-3">${starters}</ul>`
            })}
            ${Settings()}
            ${Community()}
        `);
    }

    const s = summary(state.lang);
    const next = recommendations(state.lang, 4);

    const paths = Section({
        id: 'paths-title',
        title: 'Yolların',
        body: s.tracks.length
            ? `<ul class="grid grid-cols-1 gap-2 md:grid-cols-2">${s.tracks.map((tr, i) => PathProgress(tr, i === 0)).join('')}</ul>`
            : `<p class="t-body">Hələ heç bir yol açmamısan.</p><div class="mt-4">${Button('Öyrənməyə başla', { onclick: "window.navigateToCategory('web-dev', 'frontend', 'roadmap')", variant: 'primary', icon: 'arrow-right' })}</div>`
    });

    const overview = Section({
        id: 'overview-title',
        title: 'Ümumi',
        body: `
            ${Stats([
                [s.stagesDone, 'dərs bitirilib'],
                [`${s.quizzesTaken} / ${s.quizzesTotal}`, 'test keçilib'],
                [s.projectsDone, 'layihə bitirilib'],
                [s.activeDays, 'aktiv gün']
            ])}
            <p class="t-small mt-3">Kod tapşırıqları: ${s.challengesSolved} / ${s.challengesTotal} həll edilib.${s.quizMax ? ` Testlərdə ən yaxşı nəticələrin: ${s.quizScore} / ${s.quizMax} düzgün cavab.` : ''}</p>`
    });

    const steps = next.length ? Section({
        id: 'next-title',
        title: 'Növbəti addımlar',
        body: `<ul class="az-list">${next.map(StepRow).join('')}</ul>`
    }) : '';

    const skills = Section({
        id: 'skills-title',
        title: 'Bacarıqların',
        body: s.skills.length
            ? `<div class="flex flex-wrap gap-2">${s.skills.map((x) => Label(esc(x))).join('')}</div>`
            : '<p class="t-body">Dərs və ya layihə bitirdikcə bacarıqların burada görünəcək.</p>'
    });

    const projects = Section({
        id: 'projects-title',
        title: 'Layihələrin',
        link: TextLink('Bütün layihələr', "window.navigateTo('projects')"),
        body: s.projects.length ? `
            <ul class="az-list">
                ${s.projects.map((p) => {
                    const [label, kind] = PROJECT_STATUS[p.status] || ['Başlanmayıb', 'dev'];
                    return `
                <li class="az-row flex-wrap">
                    <span class="flex size-10 shrink-0 items-center justify-center rounded-md border border-alpha-8 bg-alpha-3 text-text-soft" aria-hidden="true">${icon('hammer', 'size-[18px]')}</span>
                    <span class="az-row__main">
                        <span class="az-row__title">${esc(L(p.project.title))}</span>
                        <span class="t-small block">${esc(subTitle(p.sub))}</span>
                    </span>
                    <span class="az-row__end flex flex-col items-end gap-1">
                        ${p.status === 'done' ? Badge('Bitdi', { success: true }) : Status(label, kind)}
                        ${isRepoUrl(p.repo) ? ExternalLink(esc(p.repo.replace('https://github.com/', '')), esc(p.repo), 'text-[13px]') : ''}
                    </span>
                </li>`;
                }).join('')}
            </ul>` : '<p class="t-body">Hələ layihəyə başlamamısan. Layihələr bölməsində birini seç, kodunu GitHub-a yüklə və keçidini bura bağla.</p>'
    });

    return Page(`
        ${title}
        ${Account()}
        ${paths}
        ${overview}
        ${steps}
        ${skills}
        ${projects}
        ${Settings()}
        ${Community()}
    `);
};
