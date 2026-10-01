// AZEDEV Learn - verified certificates. A certificate means three things were checked: the path's final test (80% or
// more), a project whose GitHub repository passed the automatic check, and a mentor who read that project. The site
// has no server, so issuing is a human step: AZEDEV adds the entry to certificates.json after the mentor review, and
// learn.azedev.com/verify/<ID> shows it to anyone. The site never says "issued" for something not in that list.
import registry from './certificates.json' with { type: 'json' }
import { state, showToast } from './core.js'
import { quizResult, projectsOf, projectState, subTitle } from './progress.js'
import { finalQuizId, hasFinalQuiz } from './quizzes.js'
import { azedevBrand } from './azedev-data.js'
import { Page } from './shell.js'
import { icon } from './icons.js'
import { Button, esc, PageTitle } from './ui.js'
import { sendRequest } from './api.js'

export const findCertificate = (id = '') => registry.certificates.find((c) => c.id.toLowerCase() === String(id).trim().toLowerCase()) || null;

// The three conditions, each with its own state, for one path.
export const certEligibility = (sub) => {
    const final = quizResult(finalQuizId(sub));
    const projects = projectsOf(sub).map((p) => ({ p, st: projectState(sub, p.id) }));
    const checked = projects.find(({ st }) => st.check?.passed && st.check.repo === st.repo);
    const reviewed = projects.find(({ st }) => st.check?.passed && st.check.repo === st.repo && st.reviewResult?.status === 'done');
    const requested = projects.find(({ st }) => st.check?.passed && st.check.repo === st.repo && st.review === 'requested');
    return {
        final: Boolean(final && final.best >= 0.8 * final.total),
        finalText: final ? `${final.best} / ${final.total}` : '',
        project: Boolean(checked),
        review: Boolean(reviewed),
        requested: Boolean(requested),
        chosen: reviewed || requested || checked || null,
        ready: Boolean(final && final.best >= 0.8 * final.total && reviewed)
    };
};

const REQ_KEY = 'azedev_cert_requests_v1';
const requests = () => { try { return JSON.parse(localStorage.getItem(REQ_KEY) || '{}'); } catch { return {}; } };

window.requestCertificate = (sub) => {
    const e = certEligibility(sub);
    if (!e.ready) return;
    const text = `Sertifikat müraciəti · Yol: ${subTitle(sub)} · Final testi: ${e.finalText} · Layihə: ${e.chosen.st.repo}`;
    try { navigator.clipboard?.writeText(text); } catch { /* the text is also shown on the page */ }
    try { localStorage.setItem(REQ_KEY, JSON.stringify({ ...requests(), [sub]: { at: Date.now(), text } })); } catch { /* ignore */ }
    sendRequest({ kind: 'certificate', path: sub, project: e.chosen.p.title?.az || e.chosen.p.title?.en || '', repo: e.chosen.st.repo, finalScore: e.finalText });
    window.open(azedevBrand.urls.whatsapp, '_blank', 'noopener');
    showToast('Müraciət mətni kopyalandı. WhatsApp icmasına yapışdır.', 'success');
    window.__azRender?.();
};

// On the path page and after the final test: what a certificate needs, what is done, and the request.
export const CertificateRequest = (sub) => {
    if (!hasFinalQuiz(sub)) return '';
    const e = certEligibility(sub);
    const sent = requests()[sub];
    const Row = (ok, title, detail) => `
        <li class="flex items-start gap-3 py-3">
            <span class="mt-0.5 shrink-0 ${ok ? 'text-status-live' : 'text-text-mute'}" aria-hidden="true">${icon(ok ? 'circle-check' : 'circle', 'size-[18px]')}</span>
            <div class="min-w-0"><p class="text-[15px] ${ok ? 'text-text' : 'text-text-soft'}">${title} <span class="sr-only">${ok ? '(edilib)' : '(edilməyib)'}</span></p><p class="t-small mt-0.5">${detail}</p></div>
        </li>`;
    return `
    <section class="mt-10" aria-labelledby="cert-title">
        <h2 id="cert-title" class="t-title">Yoxlanmış sertifikat</h2>
        <p class="t-small mt-0.5">AZEDEV sertifikatı yalnız bu üç addımdan sonra verilir və hər kəs onu ictimai səhifədə yoxlaya bilər.</p>
        <ol class="ln-rows mt-3">
            ${Row(e.final, 'Final testi: 80% və ya daha çox', e.finalText ? `Ən yaxşı nəticən: ${e.finalText}` : 'Hələ keçilməyib')}
            ${Row(e.project, 'Layihə avtomatik yoxlamadan keçib', e.project ? esc(e.chosen.p.title?.az || e.chosen.p.title?.en || e.chosen.p.title || 'Layihə') : 'Layihələr bölməsində reponu bağla və "Yoxla" bas')}
            ${Row(e.review, 'Mentor layihəni qəbul edib', e.review ? 'Mentorun qərarı layihənin altında görünür' : e.requested ? 'Yoxlama istənib, mentorun qərarını gözlə' : 'Layihənin altında "Mentor yoxlaması istə" bas')}
        </ol>
        <div class="mt-4">
            ${e.ready
                ? `${Button(sent ? 'Müraciəti yenidən göndər' : 'Sertifikat üçün müraciət et', { onclick: `window.requestCertificate('${sub}')`, icon: 'arrow-up-right' })}
                   <p class="t-small mt-2">${sent ? 'Müraciət göndərilib. ' : ''}AZEDEV sənə sertifikat ID-si verəcək. Sertifikat yalnız siyahıya düşəndən sonra etibarlıdır.</p>`
                : '<p class="t-small">Üç addım bitəndə müraciət düyməsi açılacaq.</p>'}
        </div>
    </section>`;
};

window.verifyCertificate = () => {
    state.verifyId = (document.getElementById('verify-id')?.value || '').trim();
    try { history.replaceState(null, '', state.verifyId ? `/verify/${encodeURIComponent(state.verifyId)}` : '/verify'); } catch { /* ignore */ }
    window.__azRender?.();
};

const CertificateCard = (c) => `
    <article class="ln-cert mt-8 border border-alpha-15 p-6 sm:p-10" aria-labelledby="cert-name">
        <p class="t-label">AZEDEV Learn · Yoxlanmış sertifikat</p>
        <h2 id="cert-name" class="ln-display mt-6 !text-[36px] sm:!text-[48px]">${esc(c.name)}</h2>
        <p class="mt-4 text-[17px] leading-relaxed text-text-soft"><span class="text-text">${esc(subTitle(c.path))}</span> yolunu bitirib, final testindən keçib (${esc(c.finalScore)}) və layihəsi mentor tərəfindən yoxlanılıb.</p>
        <dl class="mt-8 grid grid-cols-1 border-t border-line sm:grid-cols-2">
            ${[['Sertifikat ID', `<span class="font-mono">${esc(c.id)}</span>`], ['Verilib', esc(c.issued)], ['Layihə', `<a class="underline decoration-alpha-25 underline-offset-4" href="${esc(c.project)}" target="_blank" rel="noopener noreferrer">${esc(c.projectTitle || c.project)}</a>`], ['Yoxlayan', esc(c.mentor)]]
                .map(([k, v]) => `<div class="border-b border-line py-3"><dt class="t-small">${k}</dt><dd class="mt-1 text-[15px] text-text">${v}</dd></div>`).join('')}
        </dl>
        <p class="t-small mt-6">Bu səhifə learn.azedev.com/verify/${esc(c.id)} ünvanındadır. Sertifikatı yalnız bu ünvandakı məlumat təsdiqləyir.</p>
    </article>
    <div class="mt-4 print:hidden">${Button('Çap et və ya PDF saxla', { onclick: 'window.print()', icon: 'printer' })}</div>`;

export const VerifyPage = () => {
    const id = state.verifyId || '';
    const cert = id ? findCertificate(id) : null;
    return Page(`
    ${PageTitle({ title: 'Sertifikatı yoxla', description: 'AZEDEV Learn sertifikatının ID-sini yaz: həqiqi sertifikatlar burada göstərilir.' })}
    <form class="mt-6 flex flex-col gap-2 sm:flex-row print:hidden" onsubmit="event.preventDefault(); window.verifyCertificate()">
        <label for="verify-id" class="sr-only">Sertifikat ID</label>
        <input id="verify-id" class="az-input min-h-12 font-mono sm:max-w-xs" placeholder="AZL-2026-0001" value="${esc(id)}" autocomplete="off">
        ${Button('Yoxla', { onclick: 'window.verifyCertificate()', variant: 'primary', icon: 'search', cls: 'min-h-12' })}
    </form>
    ${id ? (cert ? CertificateCard(cert) : `
    <section class="mt-8 border-l-2 border-danger pl-4" role="status">
        <p class="text-[15px] text-text">“${esc(id)}” ID-li sertifikat tapılmadı.</p>
        <p class="t-small mt-1">ID-ni yoxla. Siyahıda olmayan sertifikat AZEDEV tərəfindən verilməyib.</p>
    </section>`) : ''}
    <section class="mt-12 print:hidden" aria-labelledby="how-cert">
        <h2 id="how-cert" class="t-title">Sertifikat necə verilir?</h2>
        <ol class="ln-rows mt-3 text-[15px] text-text-soft">
            ${['Öyrənən yolun final testində sualların ən azı 80%-ni düzgün cavablandırır.', 'Yolun layihəsini qurur; GitHub reposu avtomatik yoxlamadan keçir (açıqdır, README və kod var, dillər uyğundur).', 'AZEDEV icmasından mentor layihəni oxuyub rəy verir.', 'Bundan sonra AZEDEV sertifikatı siyahıya əlavə edir və ID verir. Hər sertifikat bu səhifədə açıq yoxlanır.']
                .map((t, i) => `<li class="flex items-baseline gap-3 py-3"><span class="ln-num w-5 shrink-0 text-[18px]" aria-hidden="true">${i + 1}</span>${t}</li>`).join('')}
        </ol>
    </section>`, { width: 'narrow' });
};
