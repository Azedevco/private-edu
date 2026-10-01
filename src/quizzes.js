// AZEDEV Learn - every test in one place: the general tests (azedev-data.js), a 3-question test at the end of each
// lesson and a 10-question final test per path (lesson-quizzes.json, the correct answer written first). The learner
// never sees the stored order: options are shuffled once per attempt (state.quizSeed) and stay put across re-renders.
import topics from './topic-quizzes.json' with { type: 'json' }
import { quizzesData } from './azedev-data.js'
import { state } from './core.js'
import { stagesOf, subTitle, categoryOfSub } from './progress.js'

// The lesson and final tests (~250 KB) load right after start-up instead of in the first bundle; until they arrive
// the lesson and path pages simply show no test row, then re-render.
let generated = {};
export const quizzesReady = import('./lesson-quizzes.json')
    .then((m) => { generated = m.default; window.__azRender?.(); })
    .catch(() => { /* offline on first visit: tests appear on the next load */ });

export const lessonQuizId = (sub, i) => `lesson:${sub}:${i}`;
export const finalQuizId = (sub) => `final:${sub}`;
export const hasLessonQuiz = (sub, i) => Boolean(generated[sub]?.lessons?.[i]?.questions?.length);
export const hasFinalQuiz = (sub) => Boolean(generated[sub]?.final?.length);
export const pathsWithFinal = () => Object.keys(generated).filter(hasFinalQuiz);

const fromGenerated = (x) => ({ q: x.q, options: x.options, correct: 0, explanation: x.explain || '' });

// The quiz as stored (answers not shuffled yet), with where it belongs.
const stored = (id = '') => {
    if (id.startsWith('lesson:')) {
        const [, sub, i] = id.split(':');
        const lesson = generated[sub]?.lessons?.[Number(i)];
        if (!lesson) return null;
        const stage = stagesOf(sub, 'az')[Number(i)];
        return { id, kind: 'lesson', sub, cat: categoryOfSub(sub)?.id, stage: Number(i), title: stage?.title || 'Dərs testi', questions: lesson.questions.map(fromGenerated) };
    }
    if (id.startsWith('final:')) {
        const sub = id.slice(6);
        const final = generated[sub]?.final;
        if (!final) return null;
        return { id, kind: 'final', sub, cat: categoryOfSub(sub)?.id, title: `${subTitle(sub)}: final testi`, questions: final.map(fromGenerated) };
    }
    const topic = topics.find((q) => q.id === id);
    if (topic) return { ...topic, kind: 'general', questions: topic.questions.map((x) => ({ q: x.q, options: x.options, correct: 0, explanation: x.explanation || '' })) };
    const quiz = quizzesData.find((q) => q.id === id);
    return quiz ? { ...quiz, kind: 'general', questions: quiz.questions.map((x) => ({ q: x.q, options: x.options, correct: x.correctIndex, explanation: x.explanation })) } : null;
};

// Small seeded generator: the same seed gives the same order, so one attempt keeps its order while you answer.
const seeded = (seed) => () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
};

export const getQuiz = (id) => {
    const quiz = stored(id);
    if (!quiz) return null;
    const rnd = seeded(state.quizSeed || 1);
    return {
        ...quiz,
        questions: quiz.questions.map((x) => {
            const order = x.options.map((_, i) => i);
            for (let i = order.length - 1; i > 0; i--) {
                const j = Math.floor(rnd() * (i + 1));
                [order[i], order[j]] = [order[j], order[i]];
            }
            return { q: x.q, options: order.map((i) => x.options[i]), correctIndex: order.indexOf(x.correct), explanation: x.explanation };
        })
    };
};

// A fresh order for a new attempt.
export const newQuizSeed = () => { state.quizSeed = 1 + Math.floor(Math.random() * 4294967295); };

// Topic tests for the Məşq page: the original general tests plus the topic tests (Git, HTML, SQL, …).
export const topicQuizzes = () => [...quizzesData, ...topics];
// Real totals for the Məşq page.
export const quizTotals = () => {
    const paths = Object.values(generated);
    const lessonTests = paths.reduce((n, p) => n + (p.lessons?.length || 0), 0);
    const finals = paths.filter((p) => p.final?.length).length;
    const questions = paths.reduce((n, p) => n + (p.lessons || []).reduce((m, l) => m + l.questions.length, 0) + (p.final?.length || 0), 0)
        + topicQuizzes().reduce((n, q) => n + q.questions.length, 0);
    return { tests: lessonTests + finals + topicQuizzes().length, questions, lessonTests, finals, topics: topicQuizzes().length };
};
