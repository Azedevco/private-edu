// AZEDEV Learn - Projects: every path's project ideas, turning what was learnt into real work.
// Course → Project → GitHub: a learner starts a project, links their own repository and marks it done; the state lives
// on this device (src/progress.js). Each card shows only what helps choose: description, difficulty, required skills,
// the related path and its first topics, and the one action for its status. Filters by area and level stay local.
import { categories } from '../data.js'
import { state, getLocalizedContent, requestRender } from '../core.js'
import { Page } from '../shell.js'
import { icon } from '../icons.js'
import {
    PageTitle, Chips, Segmented, Status, Badge, Button, Label, ExternalLink, EmptyState, TextLink, AreaTile, levelKind, esc
} from '../ui.js'
import { allProjects, projectState, isRepoUrl, subTitle, stagesOf, currentTrack } from '../progress.js'
import { checkRun, checkButtonId, formatDate, autoRefreshReview } from '../repo-check.js'
import { azedevBrand } from '../azedev-data.js'
import { Hint, Term, isBeginner } from '../onboarding.js'
import { levelAz } from '../plain.js'

const L = getLocalizedContent;
// Values handed to inline handlers: numbers as they are, strings stripped to safe characters and quoted.
const jsArg = (v) => (typeof v === 'number' ? v : `'${String(v).replace(/[^\w-]/g, '')}'`);

// Levels from the data, easiest first; the words shown are Azerbaijani (levelAz: junior → Başlanğıc, mid → Orta).
const LEVELS = ['junior', 'mid', 'expert'];

const STATUS = {
    '': { label: 'Başlanmayıb', kind: 'dev' },
    started: { label: 'Davam edir', kind: 'beta' },
    done: { label: 'Tamamlandı', kind: 'live' }
};

// Page-local filters. level null = not chosen yet: beginners start on the easiest level, everyone else on all.
// sub: one path's projects only (opened from a lesson's "Qur" block).
const filters = { area: 'all', level: null, sub: '' };
window.setProjectsArea = (id) => { filters.area = id; filters.sub = ''; requestRender(); };
window.setProjectsLevel = (id) => { filters.level = id; requestRender(); };
window.openProjectsFor = (sub) => { filters.sub = String(sub || '').replace(/[^\w-]/g, ''); filters.level = 'all'; window.navigateTo('projects'); };

// The learner's own repository, once started: a GitHub URL field with a save button, and the saved link.
const RepoField = (sub, project, repo) => {
    const inputId = `repo-${sub}-${project.id}`.replace(/[^\w-]/g, '');
    return `
        <div class="az-field mt-5 border-t border-line pt-5">
            <label class="az-field__label" for="${inputId}">Kodunun saxlandığı yer (GitHub linki, istəyə bağlı)</label>
            <div class="flex flex-col gap-2 sm:flex-row">
                <input id="${inputId}" class="az-input" type="url" inputmode="url" autocomplete="url" spellcheck="false"
                    placeholder="https://github.com/istifadeci/layihe-adi" value="${esc(repo)}" aria-describedby="${inputId}-hint">
                ${Button('Yadda saxla', { onclick: `window.saveProjectRepo(${jsArg(sub)}, ${jsArg(project.id)}, '${inputId}')`, icon: null, cls: 'shrink-0' })}
            </div>
            <p class="az-field__hint" id="${inputId}-hint">${isRepoUrl(repo)
                ? `Bağlı kod qovluğu: ${ExternalLink(esc(repo.replace('https://github.com/', '')), esc(repo))}`
                : 'Məcburi deyil: layihənin kodunu GitHub-da saxlayırsansa, linkini bura yapışdır. Yoxdursa, boş saxla.'}</p>
        </div>`;
};

// A check result row: an icon and a word (never colour alone), then what was found or how to fix it.
const MARK = {
    pass: { icon: 'check', word: 'Keçdi', cls: 'text-status-live' },
    fail: { icon: 'x', word: 'Keçmədi', cls: 'text-danger' },
    skip: { icon: 'minus', word: 'Yoxlanmadı', cls: 'text-text-mute' },
    info: { icon: 'clock', word: 'Məlumat', cls: 'text-text-mute' }
};
const CheckRow = (item) => {
    const m = item.info ? MARK.info : item.ok === true ? MARK.pass : item.ok === false ? MARK.fail : MARK.skip;
    return `
        <li class="flex items-start gap-3 py-2.5">
            <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center ${m.cls}" aria-hidden="true">${icon(m.icon, 'size-4')}</span>
            <div class="min-w-0 flex-1">
                <p class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <span class="text-[14px] font-medium text-text">${esc(item.label)}</span>
                    <span class="text-[13px] font-medium ${m.cls}">${m.word}</span>
                </p>
                ${item.detail ? `<p class="mt-0.5 text-[13px] leading-snug text-text-soft [overflow-wrap:anywhere]">${esc(item.detail)}</p>` : ''}
            </div>
        </li>`;
};

// Automatic check: the stored result for the saved repo (a result for an older link counts as not checked), the running
// state, the last error in one sentence, and the button that runs it.
const RepoCheck = (sub, project, repo, check) => {
    const run = checkRun(sub, project.id);
    const result = check && check.repo === repo ? check : null;
    const hid = `check-h-${sub}-${project.id}`.replace(/[^\w-]/g, '');
    const onclick = `window.checkProjectRepo(${jsArg(sub)}, ${jsArg(project.id)})`;
    return `
        <section class="mt-5 border-t border-line pt-5" aria-labelledby="${hid}">
            <h4 id="${hid}" class="t-item">Avtomatik yoxlama</h4>
            <p class="t-small mt-1">GitHub-dakı açıq repon yoxlanılır: README, kod və layihənin dilləri.</p>
            ${result ? `
            <p class="mt-3 flex items-center gap-2 text-[14px] font-medium ${result.passed ? 'text-status-live' : 'text-danger'}">${icon(result.passed ? 'circle-check' : 'circle-alert', 'size-4')}${result.passed ? 'Avtomatik yoxlama keçdi' : 'Avtomatik yoxlama keçmədi'}</p>
            <ul class="mt-1 divide-y divide-line">${result.items.map(CheckRow).join('')}</ul>
            <p class="t-small mt-1">Yoxlandı: ${formatDate(result.checkedAt, true)}</p>` : `
            <p class="mt-3 text-[14px] text-text-soft">${check ? 'Repo linki dəyişib: yeni reponu yoxla.' : 'Hələ yoxlanmayıb.'}</p>`}
            <div role="status" aria-live="polite">${run.error && !run.loading ? `
                <p class="mt-3 flex items-start gap-2 text-[14px] leading-snug text-danger"><span class="mt-0.5 shrink-0" aria-hidden="true">${icon('circle-alert', 'size-4')}</span><span>${esc(run.error)}</span></p>` : ''}</div>
            <div class="mt-4 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${Button(run.loading ? 'Yoxlanılır…' : 'Yoxla', {
                onclick, icon: run.loading ? null : 'refresh-cw',
                // aria-disabled, not disabled: the button keeps focus while the check runs and says "Yoxlanılır…".
                attrs: `id="${checkButtonId(sub, project.id)}"${run.loading ? ' aria-disabled="true" aria-busy="true"' : ''}`
            })}</div>
        </section>`;
};

// Mentor check: the learner asks (recorded for mentors, shared in the WhatsApp community); the mentor's decision and
// note come back here. The site shows only what a mentor actually recorded.
const MentorReview = (sub, project, repo, { review, reviewAt, reviewResult }) => {
    const hid = `review-h-${sub}-${project.id}`.replace(/[^\w-]/g, '');
    const textId = `review-text-${sub}-${project.id}`.replace(/[^\w-]/g, '');
    const line = `Layihə: ${L(project.title)} · Repo: ${repo}`;
    const decided = reviewResult && reviewResult.status !== 'open' ? reviewResult : null;
    if (review === 'requested') autoRefreshReview(sub, project.id);
    const ask = Button(decided?.status === 'declined' ? 'Düzəltdim, yenidən yoxlat' : 'Mentor yoxlaması istə', { onclick: `window.requestProjectReview(${jsArg(sub)}, ${jsArg(project.id)})`, icon: 'message-circle' });
    return `
        <section class="mt-5 border-t border-line pt-5" aria-labelledby="${hid}">
            <h4 id="${hid}" class="t-item">Mentor yoxlaması</h4>
            ${decided ? `
            <p class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">${decided.status === 'done' ? Badge('Mentor qəbul etdi', { success: true }) : Badge('Düzəliş lazımdır', { dot: 'beta' })}<span class="t-small">${formatDate(new Date(decided.at).getTime())}${decided.mentor ? ` · ${esc(decided.mentor)}` : ''}</span></p>
            ${decided.note ? `<p class="mt-2 border-l-2 border-alpha-15 pl-3 text-[15px] leading-relaxed text-text-soft">${esc(decided.note)}</p>` : ''}
            ${decided.status === 'declined' ? `<div class="mt-4 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${ask}</div>` : ''}` : `
            <p class="t-small mt-1">Avtomatik yoxlama keçəndən sonra layihəni WhatsApp icmasında paylaş: mentor kodu oxuyub qərarını və qeydini bura yazacaq.</p>
            ${review === 'requested' ? `
            <p class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">${Badge('Mentor yoxlaması istənib', { dot: 'beta' })}<span class="t-small">${formatDate(reviewAt)}</span>
                <button type="button" onclick="window.refreshReview(${jsArg(sub)}, ${jsArg(project.id)})" class="inline-flex min-h-11 items-center text-[14px] text-text-soft underline decoration-alpha-25 underline-offset-4 hover:text-text">Rəyi yoxla</button></p>
            <p class="mt-3 text-[13px] text-text-mute">Bu mətni qrupa yapışdır:</p>
            <div class="mt-1.5 flex flex-col gap-2 sm:flex-row sm:items-center [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">
                <p id="${textId}" class="min-w-0 flex-1 rounded-md border border-alpha-8 bg-alpha-3 px-3 py-2.5 font-mono text-[13px] leading-snug text-text-soft [overflow-wrap:anywhere]">${esc(line)}</p>
                ${Button('Kopyala', { onclick: `window.copyToClipboard(document.getElementById('${textId}').textContent)`, icon: 'copy', cls: 'shrink-0' })}
            </div>
            <p class="mt-2">${ExternalLink('WhatsApp icmasını aç', azedevBrand.urls.whatsapp, 'min-h-11 text-[14px]')}</p>` : `
            <div class="mt-4 [&>.az-btn]:w-full sm:[&>.az-btn]:w-auto">${ask}</div>`}`}
        </section>`;
};

// A project card: area and path, title, description, difficulty, required skills, related topics, and the status action.
const ProjectCard = ({ sub, cat, project }) => {
    const st = projectState(sub, project.id);
    const { status = '', repo = '' } = st;
    const hasRepo = isRepoUrl(repo);
    const passed = Boolean(hasRepo && st.check?.passed && st.check.repo === repo);
    const label = STATUS[status] || STATUS[''];
    const area = categories.find((c) => c.id === cat);
    const topics = stagesOf(sub, state.lang).slice(0, 3).map((s) => s.title);
    const id = jsArg(project.id);
    const s = jsArg(sub);

    let action;
    if (status === 'done') {
        action = `
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex flex-wrap items-center gap-3">${Badge('Tamamlandı', { success: true })}${isRepoUrl(repo) ? ExternalLink('Kodu GitHub-da aç', esc(repo), 'text-[14px]') : ''}</div>
                ${Button('Yenidən aç', { onclick: `window.setProjectStatus(${s}, ${id}, 'started')`, icon: 'rotate-ccw' })}
            </div>`;
    } else if (status === 'started') {
        // Marking done never waits for a check; the note only says the automatic one has not passed yet.
        action = `
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                ${Button('Tamamlandı kimi qeyd et', { onclick: `window.setProjectStatus(${s}, ${id}, 'done')`, icon: 'check' })}
                ${passed ? '' : `<p class="t-small">${hasRepo ? 'Avtomatik yoxlama hələ keçməyib' : 'Avtomatik yoxlama hələ keçməyib: yoxlamaq üçün GitHub linkini əlavə et'}</p>`}
            </div>`;
    } else {
        action = `${Button('Layihəyə başla', { onclick: `window.setProjectStatus(${s}, ${id}, 'started')`, icon: 'arrow-right' })}
            <p class="t-small mt-2">Başladıqdan sonra layihə Profil səhifəndə görünəcək.</p>`;
    }

    return `
    <li>
        <article class="az-card flex h-full flex-col p-4 sm:p-5">
            <div class="flex items-start justify-between gap-3">
                <span class="flex min-w-0 items-center gap-2.5">
                    ${AreaTile(cat, 'size-8')}
                    <span class="min-w-0 text-[13px] leading-snug text-text-mute"><span class="text-text-soft">${esc(subTitle(sub))}</span>${area ? ` · ${esc(L(area.title))}` : ''}</span>
                </span>
                ${Status(label.label, label.kind)}
            </div>

            <h3 class="t-title mt-4">${esc(L(project.title))}</h3>
            <p class="t-body mt-1.5">${esc(L(project.desc))}</p>

            <dl class="mt-5 grid gap-4">
                <div>
                    <dt class="text-[13px] text-text-mute">Çətinlik</dt>
                    <dd class="mt-1">${Status(esc(project.level), levelKind(project.level))}</dd>
                </div>
                ${(project.tech || []).length ? `
                <div>
                    <dt class="text-[13px] text-text-mute">Tələb olunan bacarıqlar</dt>
                    <dd class="mt-2 flex flex-wrap gap-1.5" lang="en">${project.tech.map((x) => Label(esc(x))).join('')}</dd>
                </div>` : ''}
                <div>
                    <dt class="text-[13px] text-text-mute">Əlaqəli dərslər</dt>
                    <dd class="mt-1">
                        ${topics.length ? `<p class="text-[14px] leading-snug text-text-soft">${topics.map(esc).join(' · ')}</p>` : ''}
                        ${cat ? TextLink(`${esc(subTitle(sub))} yolu`, `window.navigateToCategory('${cat}', ${s}, 'roadmap')`) : ''}
                    </dd>
                </div>
            </dl>

            ${status ? RepoField(sub, project, repo) : ''}
            ${status && hasRepo ? RepoCheck(sub, project, repo, st.check) + MentorReview(sub, project, repo, st) : ''}

            <div class="mt-auto pt-5 [&_.az-btn]:w-full sm:[&_.az-btn]:w-auto">
                <div class="border-t border-line pt-4">${action}</div>
            </div>
        </article>
    </li>`;
};

// A project not started yet, as one ruled row: what it is, its path and level, the skills, one action. Starting it
// moves it up to "Sənin layihələrin" as a full card (GitHub link, checks, mentor review).
const ProjectRow = ({ sub, cat, project }) => `
    <li class="py-5">
        <div class="flex items-start gap-3">
            <div class="min-w-0 flex-1">
                <h3 class="t-item">${esc(L(project.title))}</h3>
                <p class="t-small mt-1">${[esc(subTitle(sub)), esc(levelAz(project.level)), (project.tech || []).slice(0, 3).map(esc).join(', ')].filter(Boolean).join(' · ')}</p>
                <p class="mt-2 text-[15px] leading-relaxed text-text-soft">${esc(L(project.desc))}</p>
            </div>
        </div>
        <div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            ${Button('Layihəyə başla', { onclick: `window.setProjectStatus(${jsArg(sub)}, ${jsArg(project.id)}, 'started')`, icon: 'arrow-right', size: 'sm' })}
            ${cat ? TextLink(`${esc(subTitle(sub))} dərsləri`, `window.navigateToCategory('${cat}', ${jsArg(sub)}, 'roadmap')`) : ''}
        </div>
    </li>`;

// --- Projects page: yours first, then this path's, then everything with filters (rows, not big cards) ---
export const ProjectsPage = () => {
    const all = allProjects().filter((p) => p.cat);
    const mine = all.filter((p) => projectState(p.sub, p.project.id).status);
    const rest = all.filter((p) => !projectState(p.sub, p.project.id).status);
    const track = currentTrack(state.lang);
    const focusSub = filters.sub || '';
    const areas = categories.filter((c) => rest.some((p) => p.cat === c.id));
    const levels = LEVELS.filter((lv) => rest.some((p) => p.project.level === lv));
    const level = filters.level ?? (isBeginner() && levels.includes('junior') ? 'junior' : 'all');
    const scope = focusSub ? rest.filter((p) => p.sub === focusSub) : filters.area === 'all' ? rest : rest.filter((p) => p.cat === filters.area);
    const shown = level === 'all' ? scope : scope.filter((p) => p.project.level === level);
    // The current path's projects lead the list (without hiding the others).
    if (track && !focusSub) shown.sort((a, b) => (b.sub === track.sub) - (a.sub === track.sub));
    const done = mine.filter((p) => projectState(p.sub, p.project.id).status === 'done').length;

    return Page(`
        ${PageTitle({
            title: 'Layihələr',
            description: `${Term('layihə', 'Layihə')} öyrəndiklərinlə düzəltdiyin kiçik real işdir: sayt, tətbiq və ya proqram. Birini seç, kodunu ${Term('github', 'GitHub')}-a yüklə və yoxlat.`
        })}
        ${Hint('projects')}

        ${mine.length ? `
        <section class="mt-8" aria-labelledby="my-projects">
            <h2 id="my-projects" class="t-title">Sənin layihələrin</h2>
            <p class="t-small mt-1">${mine.length - done} davam edir · ${done} tamamlanıb</p>
            <ul class="mt-4 grid grid-cols-1 gap-2 xl:grid-cols-2">${mine.map(ProjectCard).join('')}</ul>
        </section>` : isBeginner() ? `
        <ol class="ln-rows mt-6 text-[15px] text-text-soft" aria-label="Layihə necə işləyir">
            ${['Aşağıdan bir layihə seç və “Layihəyə başla” bas', 'Kodunu GitHub-a yüklə və linkini əlavə et', 'Avtomatik yoxlamadan keç, sonra mentor rəyi istə'].map((text, i) => `
            <li class="flex items-baseline gap-3 py-3"><span class="ln-num w-5 shrink-0 text-[18px]" aria-hidden="true">${i + 1}</span>${text}</li>`).join('')}
        </ol>` : ''}

        <section class="mt-10" aria-labelledby="pick-project">
            <div class="flex items-baseline justify-between gap-3">
                <h2 id="pick-project" class="t-title">${focusSub ? `${esc(subTitle(focusSub))} layihələri` : mine.length ? 'Yeni layihə seç' : 'Layihə seç'}</h2>
                ${focusSub ? TextLink('Bütün layihələr', "window.setProjectsArea('all')") : ''}
            </div>
            ${focusSub ? '' : `
            <div class="mt-4 grid grid-cols-1 gap-3">
                <div class="-mx-5 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:overflow-visible sm:px-0 [&>div]:flex-nowrap sm:[&>div]:flex-wrap">${Chips(
                    [{ id: 'all', label: 'Bütün sahələr', count: rest.length }, ...areas.map((c) => ({ id: c.id, label: esc(L(c.title)), count: rest.filter((p) => p.cat === c.id).length }))],
                    filters.area, (id) => `window.setProjectsArea('${id}')`, 'Sahə'
                )}</div>
                <div>${Segmented(
                    [{ id: 'all', label: 'Hamısı' }, ...levels.map((lv) => ({ id: lv, label: levelAz(lv) }))],
                    level, (id) => `window.setProjectsLevel('${id}')`, 'Çətinlik'
                )}</div>
            </div>`}
            <p class="t-small mt-6">${shown.length} layihə${track && !focusSub && shown.some((p) => p.sub === track.sub) ? ` · əvvəlcə ${esc(subTitle(track.sub))} yolunun layihələri` : ''}</p>
            ${shown.length ? `<ul class="ln-rows mt-2">${shown.slice(0, 8).map(ProjectRow).join('')}</ul>
            ${shown.length > 8 ? `
            <details class="group">
                <summary class="flex min-h-12 cursor-pointer list-none items-center gap-2 text-[14px] text-text-soft hover:text-text [&::-webkit-details-marker]:hidden">Daha ${shown.length - 8} layihə<span class="transition-transform group-open:rotate-180">${icon('chevron-down', 'size-4')}</span></summary>
                <ul class="ln-rows">${shown.slice(8).map(ProjectRow).join('')}</ul>
            </details>` : ''}` : `
            <div class="mt-3">${EmptyState(
                'Bu seçimə uyğun layihə yoxdur',
                'Bu sahədə bu səviyyədə layihə hələ yoxdur. Filtrləri sıfırla və ya başlanğıc səviyyəli layihələrə bax.',
                `<div class="flex flex-wrap justify-center gap-2">
                    ${Button('Filtrləri sıfırla', { onclick: "window.setProjectsArea('all'); window.setProjectsLevel('all')", icon: 'rotate-ccw' })}
                    ${Button('Başlanğıc layihələr', { onclick: "window.setProjectsArea('all'); window.setProjectsLevel('junior')", icon: 'arrow-right' })}
                </div>`
            )}</div>`}
        </section>
    `);
};
