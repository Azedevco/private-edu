// AZEDEV Learn - "Problem bildir": a learner flags a material in two taps (what is wrong, optional note, send). It opens
// from the material itself (lesson plan, library rows), goes to AZEDEV's report queue (/api/reports) and ends in a
// clear "thank you" state. Without the API (offline, local dev) the sheet says so and keeps the choice.
import { state } from '../core.js'
import { apiCall } from '../api.js'
import { icon } from '../icons.js'
import { esc } from '../ui.js'
import { Sheet, Field } from './downloads.js'

export const REPORT_REASONS = [
    { id: 'broken', label: 'Link işləmir', hint: 'Səhifə açılmır, video silinib və ya pullu olub' },
    { id: 'outdated', label: 'Məlumat köhnədir', hint: 'Köhnə versiya, artıq işləməyən əmrlər' },
    { id: 'wrong', label: 'Mövzu və ya səviyyə uyğun deyil', hint: 'Bu dərsə aid deyil, çox çətin və ya çox asandır' },
    { id: 'inappropriate', label: 'Uyğunsuz məzmun', hint: 'Təhqir, reklam və ya zərərli məzmun' },
    { id: 'copyright', label: 'Müəllif hüququ', hint: 'İcazəsiz paylaşılmış kitab və ya kurs' },
    { id: 'other', label: 'Başqa problem', hint: '' }
];
export const reasonLabel = (id) => (REPORT_REASONS.find((r) => r.id === id) || {}).label || id;

// Materials are registered by index while a page renders, so the button never carries a URL or title in its markup.
const registry = [];
export const resetReportTargets = () => { registry.length = 0; };

window.openReport = (n) => {
    const target = registry[n];
    if (!target) return;
    state.report = { ...target, reason: '', note: '', sending: false, sent: false, error: '' };
    window.__azRender?.();
    requestAnimationFrame(() => document.querySelector('#report-sheet input[type="radio"]')?.focus());
};
window.closeReport = () => { state.report = null; window.__azRender?.(); };
window.pickReportReason = (id) => {
    if (!state.report) return;
    state.report.reason = id;
    state.report.error = '';
    state.report.note = document.getElementById('report-note')?.value || state.report.note;
    window.__azRender?.();
    document.getElementById(`report-${id}`)?.focus();
};
window.submitReport = async (e) => {
    e.preventDefault();
    const r = state.report;
    if (!r || r.sending) return;
    r.note = document.getElementById('report-note')?.value || '';
    if (!r.reason) { r.error = 'Əvvəlcə problemi seç.'; window.__azRender?.(); return; }
    r.sending = true;
    r.error = '';
    window.__azRender?.();
    const res = await apiCall('/api/reports', { method: 'POST', body: { url: r.url, title: r.title, where: r.where, reason: r.reason, note: r.note, website: document.getElementById('report-website')?.value || '' } });
    if (state.report !== r) return;
    r.sending = false;
    if (res.ok) r.sent = true;
    else if (res.status === 429) r.error = 'Çox şikayət göndərdin. Bir saatdan sonra yenidən cəhd et.';
    else if (res.offline) r.error = 'Göndərmək alınmadı: server əlçatan deyil. İnternetini yoxla və yenidən cəhd et.';
    else r.error = 'Göndərmək alınmadı. Bir az sonra yenidən cəhd et.';
    window.__azRender?.();
    document.getElementById(r.sent ? 'report-done' : 'report-submit')?.focus();
};

// The small entry point next to a material: quiet, but always there.
export const ReportButton = (url, title, where = '') => {
    const n = registry.push({ url, title: String(title || ''), where }) - 1;
    return `<button type="button" onclick="window.openReport(${n})" class="inline-flex min-h-11 items-center gap-1.5 text-[13px] text-text-mute transition-colors hover:text-text" aria-label="Problem bildir: ${esc(title)}">${icon('flag', 'size-3.5')}Problem bildir</button>`;
};

export const ReportModal = () => {
    const r = state.report;
    if (!r) return '';
    if (r.sent) {
        return Sheet({
            labelledBy: 'report-title', onClose: 'window.closeReport()', short: true, width: 'sm:max-w-md',
            title: 'Təşəkkürlər',
            body: `
            <div id="report-sheet" role="status">
                <p class="flex items-start gap-3 text-[16px] leading-relaxed text-text"><span class="mt-1 text-status-live">${icon('circle-check', 'size-5')}</span><span>Şikayətin AZEDEV-ə çatdı. Materialı yoxlayıb düzəldəcəyik və ya başqası ilə əvəz edəcəyik.</span></p>
                <p class="t-small mt-3">Bu vaxt dərsin digər materiallarından istifadə edə bilərsən.</p>
            </div>`,
            footer: `<button type="button" id="report-done" class="az-btn az-btn--primary w-full" onclick="window.closeReport()">Bağla</button>`
        });
    }
    return Sheet({
        labelledBy: 'report-title', onClose: 'window.closeReport()', short: true, width: 'sm:max-w-md',
        title: 'Nə problem var?',
        subtitle: esc(r.title),
        form: 'onsubmit="window.submitReport(event)" novalidate',
        body: `
        <div id="report-sheet" class="grid gap-5">
            <div class="sr-only" aria-hidden="true"><label for="report-website">Vebsayt</label><input id="report-website" type="text" tabindex="-1" autocomplete="off"></div>
            <fieldset>
                <legend class="sr-only">Problemi seç</legend>
                <div class="border-t border-line">
                    ${REPORT_REASONS.map((x) => `
                    <label class="flex min-h-14 cursor-pointer items-start gap-3 border-b border-line py-3">
                        <input type="radio" name="report-reason" id="report-${x.id}" value="${x.id}" ${r.reason === x.id ? 'checked' : ''} onchange="window.pickReportReason('${x.id}')" class="mt-1 size-5 shrink-0 accent-[var(--accent)]">
                        <span class="min-w-0"><span class="block text-[16px] text-text">${x.label}</span>${x.hint ? `<span class="t-small block">${x.hint}</span>` : ''}</span>
                    </label>`).join('')}
                </div>
            </fieldset>
            ${Field({ id: 'report-note', label: 'Qeyd (istəyə bağlı)', control: `<textarea id="report-note" class="az-input" rows="2" maxlength="500" placeholder="Məsələn: video 3-cü dəqiqədən sonra açılmır">${esc(r.note)}</textarea>` })}
            ${r.error ? `<p class="text-[14px] text-danger" role="alert">${esc(r.error)}</p>` : ''}
        </div>`,
        footer: `<button type="submit" id="report-submit" class="az-btn az-btn--primary w-full" ${r.sending ? 'disabled aria-busy="true"' : ''}>${r.sending ? 'Göndərilir…' : 'Şikayəti göndər'}${r.sending ? '' : icon('arrow-right')}</button>`
    });
};
