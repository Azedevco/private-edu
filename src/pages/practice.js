// AZEDEV Learn - Məşq (practice): quizzes and coding challenges, in the AZEDEV EDU product system. In beginner mode the
// tests come alone; coding challenges and interview questions wait under "Daha çox məşq".
// Quizzes: a picker of quiz cards, then one focused question per screen (check the answer, read why, go on), then the
// result with a review. Challenges: a list and a workspace; on phones the list folds into a select above the code.
// Every screen has one primary action, in a sticky bar within thumb reach on phones.
import { codingChallengesData, quizzesData } from '../azedev-data.js'
import { state, getLocalizedContent, requestRender } from '../core.js'
import { Page, SupportNote } from '../shell.js'
import { icon } from '../icons.js'
import { Button, Status, Label, Badge, esc, levelKind, PageTitle, PracticeTabs, Section, ProgressBar, TextLink, ResourceCard } from '../ui.js'
import { quizResult, isChallengeSolved, recommendations, subTitle, categoryOfSub, currentTrack, stagesOf } from '../progress.js'
import { getQuiz, finalQuizId, pathsWithFinal, topicQuizzes, quizTotals, lessonQuizId, hasLessonQuiz, finalSize } from '../quizzes.js'
import { CertificateRequest } from '../certificates.js'
import { Hint, Term, isBeginner } from '../onboarding.js'

// Difficulty words from the data, in Azerbaijani; the status dot carries the level (easy = live, medium = beta, hard = dev).
const DIFFICULTY = { 'Easy': 'Asan', 'Medium': 'Orta', 'Hard': 'Çətin', 'Easy to Medium': 'Asan və orta' };
const difficulty = (level) => Status(DIFFICULTY[level] || level, levelKind(level));
const pad = (n) => String(n).padStart(2, '0');

// Inline `code` in quiz text becomes a mono chip; everything else is escaped.
// Fenced blocks (```lang ... ```), used by the practical final questions, become a small code panel.
const inlineCode = (html) => html.replace(/`([^`]+)`/g, '<code class="rounded-xs bg-alpha-6 px-1 py-0.5 font-mono text-[0.92em] text-text-soft break-words">$1</code>');
const richText = (text) => String(text ?? '').split(/```[\w+-]*\n?/).map((part, i) => (i % 2
    ? `<pre class="az-code mt-3 block overflow-x-auto whitespace-pre !text-[14px] !leading-[1.6] font-normal"><code>${esc(part.replace(/\n$/, ''))}</code></pre>`
    : inlineCode(esc(part)))).join('');

// Minimal JavaScript highlighting for the az-code block: keywords, strings, comments; then line numbers.
const JS_TOKEN = /(\/\/[^\n]*)|('(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|`(?:\\.|[^`\\])*`)|\b(function|const|let|var|return|if|else|for|while|do|of|in|new|class|extends|this|true|false|null|undefined|break|continue|typeof|instanceof|async|await|throw|try|catch|finally|switch|case|default)\b/g;
const highlightJs = (code) => {
    let html = '';
    let last = 0;
    for (const m of code.matchAll(JS_TOKEN)) {
        html += esc(code.slice(last, m.index));
        const cls = m[1] ? 'text-text-mute' : m[2] ? 'tok-str' : 'tok-kw';
        html += `<span class="${cls}">${esc(m[0])}</span>`;
        last = m.index + m[0].length;
    }
    html += esc(code.slice(last));
    return html.split('\n').map((line, i) => `<span class="az-code__ln" aria-hidden="true">${pad(i + 1)}</span>${line}`).join('\n');
};

// "Həll edildi": solved on this device (src/progress.js), shown with an icon and the word, never colour alone.
const SolvedMark = () => `<span class="inline-flex items-center gap-1 text-[13px] font-medium text-status-live">${icon('check', 'size-3.5')}Həll edildi</span>`;

// ---- Quiz flow state: picker (quizOpen false) → questions → result. Checked questions show their explanation. ----

const openQuizState = () => {
    state.quizOpen = true;
    state.quizChecked = {};
};

// main.js opens the quiz on switchQuiz(id) and shows the picker on navigateTo('quizzes').
window.openQuiz = (id) => { openQuizState(); window.switchQuiz(id); };
// Leaving a test goes back to where it came from: the lesson, the path, or the list of tests.
window.closeQuiz = () => {
    const quiz = getQuiz(state.activeQuizId);
    state.quizOpen = false;
    state.quizChecked = {};
    if (quiz?.kind === 'lesson') return window.openTopic(quiz.cat, quiz.sub, quiz.stage);
    if (quiz?.kind === 'final') return window.navigateToCategory(quiz.cat, quiz.sub, 'roadmap');
    requestRender();
    window.scrollTo(0, 0);
};
// Where the back link of a test leads, in words.
const backLabel = (quiz) => (quiz.kind === 'lesson' ? 'Dərsə qayıt' : quiz.kind === 'final' ? esc(subTitle(quiz.sub)) : 'Testlər');
const quizTitle = (quiz) => (quiz.kind === 'lesson' ? `Dərs testi: ${esc(quiz.title)}` : esc(quiz.title));
window.checkQuizAnswer = () => {
    if (state.quizAnswers[state.quizQuestionIdx] === undefined) return;
    state.quizChecked = { ...(state.quizChecked || {}), [state.quizQuestionIdx]: true };
    requestRender();
};
window.retryQuiz = () => {
    state.quizChecked = {};
    window.resetQuiz();
};
// Jump straight to a question (kept for callers; main.js only steps one question at a time).
window.goToQuizQuestion = (idx) => {
    state.quizQuestionIdx = idx;
    requestRender();
};

// --- Challenges: list + workspace. ---
export const ChallengesPage = () => {
    const list = codingChallengesData;
    const activeIdx = Math.max(0, list.findIndex((c) => c.id === state.activeChallengeId));
    const active = list[activeIdx];
    const next = list[activeIdx + 1];
    const shown = state.showChallengeSolution;
    const solved = isChallengeSolved(active.id);
    const solvedCount = list.filter((c) => isChallengeSolved(c.id)).length;

    const ListItem = (ch, i) => {
        const current = i === activeIdx;
        return `
            <li>
                <button type="button" onclick="window.selectChallenge('${ch.id}')" ${current ? 'aria-current="true"' : ''}
                    class="flex min-h-11 w-full flex-col gap-1.5 rounded-md border px-4 py-3 text-left transition-colors ${current ? 'border-alpha-25 bg-alpha-6' : 'border-alpha-8 bg-alpha-2 hover:border-alpha-20 hover:bg-alpha-4'}">
                    <span class="text-[14px] font-medium leading-snug text-text">${esc(ch.title)}</span>
                    <span class="flex flex-wrap items-center justify-between gap-2">
                        <span class="text-[13px] text-text-mute" lang="en">${esc(ch.category)}</span>
                        ${isChallengeSolved(ch.id) ? SolvedMark() : difficulty(ch.difficulty)}
                    </span>
                </button>
            </li>`;
    };

    const beginner = isBeginner();
    return Page(`
        ${PageTitle(beginner ? {
            back: { label: 'Məşq', go: "window.navigateTo('quizzes')" },
            title: 'Kod tapşırıqları',
            description: 'Kod yazmağı bilənlər üçün kiçik məsələlər. İpucuna bax, həllini yaz və izahla müqayisə et.'
        } : {
            title: 'Məşq',
            description: `Kiçik kod məsələlərini həll et, ipucuna bax və həllini izahla müqayisə et. Bu, öyrəndiklərini ${Term('məşq', 'məşqdə')} yoxlamaq üçündür.`,
            tabs: PracticeTabs('challenges')
        })}
        ${Hint('practice')}

        <div class="az-card az-card--inset mt-6 flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-start gap-3">
                <span class="mt-0.5 text-text-soft" aria-hidden="true">${icon('lightbulb', 'size-[18px]')}</span>
                <div>
                    <p class="text-[14px] font-medium text-text">Kod yazmaq hələ tezdir?</p>
                    <p class="text-[13px] text-text-soft">Proqramlaşdırmaya yenicə başlayırsansa, əvvəlcə dərsləri oxu və qısa testlərdən keç.</p>
                </div>
            </div>
            <button type="button" onclick="window.navigateTo('quizzes')" class="az-btn az-btn--ghost shrink-0">
                Testlərə keç${icon('arrow-right')}
            </button>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-10">
            <div>
                <div class="az-field lg:hidden">
                    <label class="az-field__label" for="challenge-pick">Tapşırıq</label>
                    <select id="challenge-pick" class="az-input" onchange="window.selectChallenge(this.value)">
                        ${list.map((ch, i) => `<option value="${ch.id}"${i === activeIdx ? ' selected' : ''}>${pad(i + 1)}. ${esc(ch.title)}${isChallengeSolved(ch.id) ? ' (həll edildi)' : ''}</option>`).join('')}
                    </select>
                    <p class="az-field__hint">${solvedCount} / ${list.length} həll edilib</p>
                </div>
                <div class="hidden lg:block">
                    <p class="flex items-baseline justify-between gap-3"><span class="t-title">Tapşırıqlar</span><span class="t-small">${solvedCount} / ${list.length} həll edilib</span></p>
                    <ul class="mt-4 grid gap-2">${list.map(ListItem).join('')}</ul>
                </div>
            </div>

            <article class="az-card min-w-0 p-5 sm:p-6" aria-labelledby="challenge-title">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <p class="t-small">Tapşırıq ${activeIdx + 1} / ${list.length}</p>
                    ${solved ? Badge('Həll edildi', { success: true }) : difficulty(active.difficulty)}
                </div>
                <h2 id="challenge-title" class="mt-3 text-[22px] font-medium leading-tight tracking-[-0.02em] text-text sm:text-[24px]">${esc(active.title)}</h2>
                <div class="mt-3" lang="en">${Label(esc(active.category))}</div>
                <p class="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-text-soft">${richText(getLocalizedContent(active.desc))}</p>

                <details class="az-card az-card--inset group mt-6">
                    <summary class="flex min-h-11 cursor-pointer list-none items-center gap-3 text-[15px] font-medium text-text [&::-webkit-details-marker]:hidden">
                        <span class="text-text-soft">${icon('lightbulb')}</span><span class="flex-1">İpucu</span>${icon('chevron-down', 'size-4 text-text-mute transition-transform group-open:rotate-180')}
                    </summary>
                    <p class="pb-1 text-[15px] leading-relaxed text-text-soft">${richText(getLocalizedContent(active.hint))}</p>
                </details>

                <div class="az-code mt-6">
                    <div class="az-code__bar">
                        <span class="flex min-w-0 items-center gap-2">${icon('file-code')}<span class="truncate" translate="no">${esc(active.id)}.js</span></span>
                        <button type="button" onclick="window.copyActiveChallengeCode()" class="az-btn az-btn--ghost az-btn--sm" aria-label="Kodu panoya kopyala">${icon('copy')}Kopyala</button>
                    </div>
                    <pre><code>${highlightJs(active.starterCode || '')}</code></pre>
                </div>

                ${shown ? `
                <div id="challenge-solution" class="az-card az-card--inset mt-6">
                    <p class="t-label">Həllin izahı</p>
                    <p class="mt-2 text-[15px] leading-relaxed text-text">${richText(getLocalizedContent(active.solutionExplanation))}</p>
                </div>` : ''}

                <div class="mt-6 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
                    ${Button(shown ? 'İzahı gizlət' : 'Həllin izahı', {
                        onclick: 'window.toggleChallengeSolution()',
                        icon: shown ? 'x' : 'eye',
                        attrs: `aria-expanded="${shown}" aria-controls="challenge-solution"`
                    })}
                    ${Button(solved ? 'Həll edilməyib kimi qeyd et' : 'Həll etdim', {
                        onclick: `window.toggleChallengeSolved('${active.id}')`,
                        icon: solved ? 'rotate-ccw' : 'check',
                        attrs: `aria-pressed="${solved}"`
                    })}
                </div>
                <p class="t-small mt-3">Həll etdiyin tapşırıqlar bu cihazda saxlanılır və Profildə görünür.</p>

                <div class="ln-actionbar">
                    ${next
                        ? Button('Növbəti tapşırıq', { onclick: `window.selectChallenge('${next.id}')`, variant: 'primary', icon: 'arrow-right', cls: 'min-h-12' })
                        : Button('Testlərə keç', { onclick: "window.navigateTo('quizzes')", variant: 'primary', icon: 'arrow-right', cls: 'min-h-12' })}
                </div>
            </article>
        </div>
    `);
};

// --- Quizzes ---

const minutes = (quiz) => Math.max(1, Math.round((quiz.timeLimitSeconds || 0) / 60));

// Picker: the learner's own next tests first, then topic tests, then every path's tests. Rows, not a wall of cards:
// the page reads top to bottom and every number on it is counted from the data.
const TestRow = (id, title, meta) => {
    const result = quizResult(id);
    return ResourceCard({
        tag: 'li',
        title,
        icon: 'list-checks',
        meta: [...meta, result ? `Ən yaxşı nəticə: ${result.best} / ${result.total}` : ''],
        onclick: `window.openQuiz('${id}')`,
        action: result ? 'Yenidən' : 'Başla'
    });
};

const MyTests = () => {
    const track = currentTrack(state.lang);
    if (!track) return '';
    const rows = [];
    const next = track.next >= 0 ? track.next : track.total - 1;
    if (hasLessonQuiz(track.sub, next)) rows.push(TestRow(lessonQuizId(track.sub, next), `Dərs testi: ${esc(stagesOf(track.sub, state.lang)[next]?.title || '')}`, ['3 sual', esc(subTitle(track.sub))]));
    if (pathsWithFinal().includes(track.sub)) rows.push(TestRow(finalQuizId(track.sub), `${esc(subTitle(track.sub))}: final testi`, [`${finalSize(track.sub)} sual`]));
    return rows.length ? Section({ title: 'Sənin yolun', note: 'Hazırda keçdiyin dərsin testi və yolun final testi.', body: `<ul class="ln-rows">${rows.join('')}</ul>` }) : '';
};

const PathTests = () => {
    const row = (sub) => ResourceCard({
        tag: 'li',
        title: esc(subTitle(sub)),
        icon: 'list-checks',
        meta: [`${stagesOf(sub, state.lang).length} dərs testi`, 'final testi'],
        onclick: `window.navigateToCategory('${categoryOfSub(sub)?.id}', '${sub}', 'interview')`,
        action: 'Testlərə bax'
    });
    const subs = pathsWithFinal();
    return Section({
        title: 'Yolların testləri',
        note: 'Hər yolda dərs testləri (hər biri 3 sual) və praktiki final testi var.',
        body: `<ul class="ln-rows">${subs.slice(0, 5).map(row).join('')}</ul>${More(subs.slice(5).map(row), `Daha ${subs.length - 5} yol`)}`
    });
};

// The rest of a long list behind one native disclosure.
const More = (rows, label) => (rows.length ? `
    <details class="group">
        <summary class="flex min-h-12 cursor-pointer list-none items-center gap-2 text-[14px] text-text-soft hover:text-text [&::-webkit-details-marker]:hidden">${label}<span class="transition-transform group-open:rotate-180">${icon('chevron-down', 'size-4')}</span></summary>
        <ul class="ln-rows">${rows.join('')}</ul>
    </details>` : '');

// No path yet: say where tests come from and give one easy test to try right now.
const NoPathYet = (topics) => {
    const first = topics.find((q) => /html/i.test(q.title)) || topics[0];
    return Section({
        title: 'Haradan başlayım?',
        note: 'Testlər dərslərin sonunda gəlir: bir yol seçəndə hər dərsin öz testi olur.',
        body: `<ul class="ln-rows">
            ${ResourceCard({ tag: 'li', title: 'Öyrənmə yolu seç', meta: ['Dərslər, testlər və layihə bir ardıcıllıqla'], icon: 'map', onclick: "window.navigateTo('roadmaps')", action: 'Yollar' })}
            ${first ? TestRow(first.id, `İndi sına: ${esc(first.title)}`, [`${first.questions.length} sual`, `${minutes(first)} dəq`]) : ''}
        </ul>`
    });
};

const QuizPicker = () => {
    const beginner = isBeginner();
    const t = quizTotals();
    const topics = topicQuizzes();
    return Page(`
        ${PageTitle({
            title: 'Məşq',
            description: `Qısa testlərlə öyrəndiklərini yoxla: bu, ${Term('məşq')} addımıdır. Hər sualdan sonra düzgün cavabı izahı ilə görəcəksən. Variantların yeri hər dəfə dəyişir.`,
            tabs: beginner ? '' : PracticeTabs('quizzes')
        })}
        ${Hint('practice')}
        <p class="mt-6 font-serif text-[20px] text-text"><span class="tabular-nums">${t.tests}</span> test · <span class="tabular-nums">${t.questions}</span> sual</p>
        ${currentTrack(state.lang) ? MyTests() : NoPathYet(topics)}
        ${PathTests()}
        ${(() => {
            const row = (quiz) => TestRow(quiz.id, esc(quiz.title), [`${quiz.questions.length} sual`, `${minutes(quiz)} dəq`]);
            return Section({
                title: 'Mövzu testləri',
                note: `${topics.length} mövzu: bir texnologiyanı ayrıca yoxla.`,
                body: `<ul class="ln-rows">${topics.slice(0, 6).map(row).join('')}</ul>${More(topics.slice(6).map(row), `Daha ${topics.length - 6} mövzu testi`)}`
            });
        })()}
        ${beginner ? MorePractice() : ''}
    `);
};

// Beginner mode: tests come first; the harder kinds of practice wait here, each saying who it is for.
const MorePractice = () => Section({
    title: 'Daha çox məşq',
    note: 'Testləri keçəndən sonra',
    body: `<ul class="ln-rows">
        ${ResourceCard({ tag: 'li', title: 'Kod tapşırıqları', meta: ['Kod yazmağı bilənlər üçün'], icon: 'square-terminal', onclick: "window.navigateTo('challenges')", action: 'Aç' })}
        ${ResourceCard({ tag: 'li', title: 'Müsahibə sualları', meta: ['İşə hazırlaşanlar üçün'], icon: 'message-square', onclick: "window.navigateToCategory('web-dev', 'frontend', 'interview')", action: 'Aç' })}
    </ul>`
});

// One answer choice: a radio marker and the text. After checking, the correct choice and a wrong pick say so in words
// and with an icon, not only with the border colour.
const QuizOption = (opt, optIdx, qIdx, selected, checked, correctIdx) => {
    const isCorrect = checked && optIdx === correctIdx;
    const isWrong = checked && selected && optIdx !== correctIdx;
    const tone = isCorrect
        ? 'border-status-live-line bg-status-live-wash text-text'
        : isWrong
            ? 'border-danger bg-alpha-3 text-text'
            : selected
                ? 'border-alpha-40 bg-alpha-6 text-text'
                : checked
                    ? 'border-alpha-6 bg-alpha-2 text-text-mute'
                    : 'border-alpha-10 bg-alpha-2 text-text-soft hover:border-alpha-20 hover:bg-alpha-4';
    return `
        <li>
            <button type="button" role="radio" aria-checked="${selected}" ${checked ? 'disabled' : ''} onclick="window.selectQuizAnswer(${qIdx}, ${optIdx})"
                class="flex min-h-[52px] w-full items-center gap-3 rounded-md border px-4 py-3 text-left text-[15px] leading-snug transition-colors ${tone}">
                <span aria-hidden="true" class="flex size-5 shrink-0 items-center justify-center rounded-full border ${selected ? 'border-text' : 'border-alpha-25'}">${selected ? '<span class="size-2.5 rounded-full bg-text"></span>' : ''}</span>
                <span class="min-w-0 flex-1 break-words">${richText(opt)}</span>
                ${isCorrect ? `<span class="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-status-live">${icon('check', 'size-4')}Düzgün</span>` : ''}
                ${isWrong ? `<span class="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-danger">${icon('x', 'size-4')}Səhv</span>` : ''}
            </button>
        </li>`;
};

// The focused question screen: where you are, the question, the choices, the explanation once checked, and one action.
const QuizQuestion = (quiz) => {
    const total = quiz.questions.length;
    const qIdx = Math.min(state.quizQuestionIdx, total - 1);
    const q = quiz.questions[qIdx];
    const selected = state.quizAnswers[qIdx];
    const checked = Boolean(state.quizChecked?.[qIdx]);
    const answered = Object.keys(state.quizAnswers).length;
    const last = qIdx === total - 1;
    const right = checked && selected === q.correctIndex;

    const primary = !checked
        ? Button('Cavabı yoxla', { onclick: 'window.checkQuizAnswer()', variant: 'primary', icon: 'check', cls: 'min-h-12', attrs: selected === undefined ? 'disabled aria-disabled="true"' : '' })
        : last
            ? Button('Testi bitir', { onclick: 'window.submitQuiz()', variant: 'primary', icon: 'arrow-right', cls: 'min-h-12' })
            : Button('Növbəti sual', { onclick: 'window.nextQuizQuestion()', variant: 'primary', icon: 'arrow-right', cls: 'min-h-12' });

    return Page(`
        ${PageTitle({ back: { label: backLabel(quiz), go: 'window.closeQuiz()' }, title: quizTitle(quiz) })}

        <section class="mt-6" aria-labelledby="quiz-question">
            <div class="flex items-center justify-between gap-3">
                <p class="font-mono text-[13px] tracking-[0.04em] text-text-soft">Sual ${pad(qIdx + 1)} / ${pad(total)}</p>
                <p class="t-small">${answered} / ${total} cavablandırılıb</p>
            </div>
            <div class="mt-3">${ProgressBar(Math.round(((qIdx + 1) / total) * 100))}</div>

            <h2 id="quiz-question" class="mt-8 text-[20px] font-medium leading-snug tracking-[-0.01em] text-text sm:text-[24px]">${richText(q.q)}</h2>
            <ul class="mt-6 grid gap-2" role="radiogroup" aria-labelledby="quiz-question">
                ${q.options.map((opt, i) => QuizOption(opt, i, qIdx, selected === i, checked, q.correctIndex)).join('')}
            </ul>

            ${checked ? `
            <div class="az-card az-card--inset mt-5" role="status">
                <p class="flex items-center gap-2 text-[15px] font-medium ${right ? 'text-status-live' : 'text-danger'}">${icon(right ? 'circle-check' : 'circle-alert', 'size-4')}${right ? 'Düzgün cavab' : 'Səhv cavab'}</p>
                ${q.explanation ? `<p class="mt-2 text-[15px] leading-relaxed text-text-soft">${richText(q.explanation)}</p>` : ''}
            </div>` : `<p class="t-small mt-4">${selected === undefined ? 'Bir cavab seç, sonra yoxla.' : 'Cavabını yoxla.'}</p>`}

            <div class="ln-actionbar">
                ${Button('Əvvəlki', { onclick: 'window.prevQuizQuestion()', icon: null, cls: 'min-h-12 flex-none', attrs: qIdx === 0 ? 'disabled aria-disabled="true"' : '' })}
                ${primary}
            </div>
        </section>
    `, { width: 'narrow' });
};

// What to do after a quiz: the next useful step that is not this quiz again (the path's next topic, a project, a
// challenge), plus the way to projects. A tappable row, not a second primary.
const NextAfterQuiz = (quiz) => {
    const next = recommendations(state.lang, 4).find((r) => !(r.kind === 'quiz' && r.go.includes(quiz.id)));
    return `
        <section class="mt-6" aria-labelledby="quiz-next">
            <h2 id="quiz-next" class="t-label">Növbəti addım</h2>
            ${next ? `
            <button type="button" onclick="${next.go}" class="az-row mt-3 min-h-16 w-full text-left transition-colors hover:border-alpha-20 hover:bg-alpha-4">
                <span class="flex size-10 shrink-0 items-center justify-center rounded-md border border-alpha-8 bg-alpha-3 text-text-soft" aria-hidden="true">${icon(next.icon, 'size-[18px]')}</span>
                <span class="az-row__main"><span class="az-row__title">${esc(next.title)}</span><span class="az-row__meta">${esc(next.meta)}</span></span>
                <span class="text-text-mute" aria-hidden="true">${icon('arrow-right')}</span>
            </button>` : ''}
            <p class="t-small mt-2 flex flex-wrap items-center gap-x-2">Öyrəndiklərini real işdə yoxlamaq istəyirsən? ${TextLink('Layihələrə keç', "window.navigateTo('projects')")}</p>
        </section>`;
};

// The result: score, a plain verdict, where it was saved, and every answer with its explanation.
const QuizResult = (quiz) => {
    const total = quiz.questions.length;
    const score = quiz.questions.reduce((n, q, i) => n + (state.quizAnswers[i] === q.correctIndex ? 1 : 0), 0);
    const pct = Math.round((score / total) * 100);
    const verdict = pct >= 80 ? 'Mövzunu yaxşı bilirsən.' : pct >= 50 ? 'Yaxşı başlanğıcdır. Səhv cavabların izahını oxu.' : 'İzahları oxu və testi yenidən keç.';

    return Page(`
        ${PageTitle({ back: { label: backLabel(quiz), go: 'window.closeQuiz()' }, title: quizTitle(quiz) })}

        <section class="az-card mt-6 p-5 sm:p-6" aria-labelledby="quiz-score">
            <p class="t-label">Nəticə</p>
            <p id="quiz-score" class="mt-2 text-[40px] font-medium leading-none tracking-[-0.03em] text-text [font-variant-numeric:tabular-nums]">${score} / ${total}</p>
            <div class="mt-5">${ProgressBar(pct, `${score} düzgün cavab`)}</div>
            <p class="mt-4 text-[15px] text-text-soft">${verdict}</p>
            <p class="t-small mt-3 flex flex-wrap items-center gap-x-2">Nəticə Profildə saxlanıldı. ${TextLink('Profilə keç', "window.navigateTo('journey')")}</p>
        </section>

        ${quiz.kind === 'general' ? NextAfterQuiz(quiz) : ''}
        ${quiz.kind === 'final' ? `${CertificateRequest(quiz.sub)}${SupportNote({ lead: 'Bir yolu sona çatdırdın.' })}` : ''}

        ${Section({
            title: 'Cavablar',
            body: `
            <ol class="grid gap-2">
                ${quiz.questions.map((q, i) => {
                    const ok = state.quizAnswers[i] === q.correctIndex;
                    const picked = state.quizAnswers[i];
                    return `
                    <li class="az-card p-4 sm:p-5">
                        <div class="flex items-center justify-between gap-3">
                            <span class="font-mono text-[13px] tracking-[0.04em] text-text-mute">Sual ${pad(i + 1)}</span>
                            <span class="inline-flex items-center gap-1 text-[13px] font-medium ${ok ? 'text-status-live' : 'text-danger'}">${icon(ok ? 'check' : 'x', 'size-3.5')}${ok ? 'Düzgün' : 'Səhv'}</span>
                        </div>
                        <p class="t-item mt-2">${richText(q.q)}</p>
                        <p class="t-small mt-2">Sənin cavabın: <span class="text-text-soft">${picked === undefined ? 'cavab verilməyib' : richText(q.options[picked])}</span></p>
                        ${ok ? '' : `<p class="t-small mt-1">Düzgün cavab: <span class="text-text">${richText(q.options[q.correctIndex])}</span></p>`}
                        ${q.explanation ? `<p class="mt-3 border-t border-line pt-3 text-[14px] leading-relaxed text-text-soft">${richText(q.explanation)}</p>` : ''}
                    </li>`;
                }).join('')}
            </ol>`
        })}

        <div class="ln-actionbar">
            ${quiz.kind === 'general'
                ? `${Button('Başqa test', { onclick: 'window.closeQuiz()', icon: null, cls: 'min-h-12 flex-none' })}${Button('Yenidən keç', { onclick: 'window.retryQuiz()', variant: 'primary', icon: 'rotate-ccw', cls: 'min-h-12' })}`
                : `${Button('Yenidən keç', { onclick: 'window.retryQuiz()', icon: null, cls: 'min-h-12 flex-none' })}${Button(quiz.kind === 'lesson' ? 'Dərsə qayıt' : 'Yola qayıt', { onclick: 'window.closeQuiz()', variant: 'primary', icon: 'arrow-right', cls: 'min-h-12' })}`}
        </div>
    `, { width: 'narrow' });
};

export const QuizzesPage = () => {
    const quiz = getQuiz(state.activeQuizId) || getQuiz(quizzesData[0].id);
    if (!state.quizOpen || !quiz) return QuizPicker();
    return state.quizSubmitted ? QuizResult(quiz) : QuizQuestion(quiz);
};
