import { loadRu, ruLoaded, translateTree, watchRu, ruText } from './ru.js'
import './style.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import {
    languages, countries, ui, categories, contentData, globalFaqData, globalResourcesData, glossary, toolOfTheWeek
} from './data.js'
import {
    azedevBrand, learningLifecycle, coursesData, booksData, videosData, documentationLinks,
    codingChallengesData, quizzesData, careerPathsData, azedevOpenSourceProjects,
    azedevCommunityInfo, downloadableCheatSheets
} from './azedev-data.js'
import {
    getCommunityUploads, addCommunityUpload, approveUpload, deleteUpload,
    incrementDownloadCount, getDownloadCount, getCustomResources, addCustomResource,
    deleteCustomResource, isAdminAuthenticated, logoutAdmin,
    triggerBrowserDownload, exportPlatformDatabase, importPlatformDatabase
} from './storage.js'
import { state, t, getLocalizedContent, showToast, updateMeta } from './core.js'
import { Navbar, MobileMenu, CommandPalette, Sidebar, BottomNav } from './shell.js'
import { LandingPage } from './pages/landing.js'
import { WelcomePage } from './pages/welcome.js'
import { getQuiz, newQuizSeed } from './quizzes.js'
import { VerifyPage } from './certificates.js'
import { apiCall, loadCommunity, loadAdminData, setAdminToken, loadReports, setReportStatus } from './api.js'
import { ContributePage } from './pages/contribute.js'
import { hydrateArt } from './art/particles.js'
import { Onboarding, maybeStartOnboarding, hasEntered } from './onboarding.js'
import './sync.js'
import { CoursesPage, BooksPage, VideosPage, DocsPage } from './pages/learn.js'
import { ChallengesPage, QuizzesPage } from './pages/practice.js'
import { CareerPathsPage, OpenSourcePage, AboutAzedevPage, GlobalFaqPage, GlossaryPage, HallOfFamePage, LegalPage } from './pages/explore.js'
import { DownloadsHubPage, UploadResourceModal, ResourcePreviewModal, AdminPage } from './pages/downloads.js'
import { ReportModal, resetReportTargets } from './pages/report.js'
import { CategoryDetail, RoadmapsPage, TopicPage } from './pages/category.js'
import { ProjectsPage } from './pages/projects.js'
import { JourneyPage } from './pages/journey.js'
import { toggleItem, toggleStage, setStageDone, recordQuiz, setChallengeSolved, isChallengeSolved, setProject, projectState, isRepoUrl, touchTrack, stagesOf, hasProgress } from './progress.js'

// Initialize Vercel Analytics
inject();
injectSpeedInsights();


const app = document.querySelector('#app');

// --- Global Action Handlers Attached to Window ---

// A page change closes whatever modal is open.
const closeOverlays = () => {
    state.uploadModalOpen = false;
    state.previewResource = null;
    state.report = null;
};

window.navigateTo = (view) => {
    closeOverlays();
    // Opening the quizzes page shows the quiz picker.
    if (view === 'quizzes') {
        state.quizOpen = false;
        state.quizChecked = {};
    }
    state.view = view;
    state.isMobileMenuOpen = false;
    window.scrollTo(0, 0);
    render();
    updateMeta();
};

window.navigateToCategory = (catId, subId = null, tab = 'roadmap') => {
    closeOverlays();
    state.view = 'category';
    state.currentCategory = catId;
    const cat = categories.find(c => c.id === catId);
    state.currentSubCategory = subId || (cat?.subCategories[0]?.id || null);
    state.currentTab = tab;
    state.isMobileMenuOpen = false;
    window.scrollTo(0, 0);
    render();
    updateMeta();
};

window.navigateToSub = (catId, subId) => {
    state.currentCategory = catId;
    state.currentSubCategory = subId;
    render();
    updateMeta();
};

// --- Learning loop: topics, stage completion, challenges and projects (progress lives on this device, src/progress.js) ---

// Open one stage of a path as a focused topic view.
window.openTopic = (catId, subId, idx = 0) => {
    closeOverlays();
    state.view = 'topic';
    state.currentCategory = catId;
    state.currentSubCategory = subId;
    state.currentStage = Math.max(0, Math.min(idx, stagesOf(subId, state.lang).length - 1));
    state.isMobileMenuOpen = false;
    window.scrollTo(0, 0);
    render();
    updateMeta();
};

// Mark a stage done or not done; stays on the same scroll position.
window.toggleStageDone = (subId, idx) => {
    toggleStage(subId, idx);
    render();
};
// Complete the open topic and move to the next one (the topic view's main action).
window.completeTopicAndNext = () => {
    const sub = state.currentSubCategory;
    const idx = state.currentStage || 0;
    setStageDone(sub, idx, true);
    const last = stagesOf(sub, state.lang).length - 1;
    if (idx < last) window.openTopic(state.currentCategory, sub, idx + 1);
    else {
        showToast('Yolun bütün dərslərini bitirdin. İndi kiçik bir layihə düzəlt.', 'success');
        render();
    }
};

// Tick one item of a lesson as learnt ("öyrəndim").
window.toggleLessonItem = (subId, stage, idx) => {
    toggleItem(subId, stage, idx);
    render();
};

window.toggleChallengeSolved = (id) => {
    setChallengeSolved(id, !isChallengeSolved(id));
    render();
};

// Project status: '' (not started) → 'started' → 'done'.
window.setProjectStatus = (subId, projectId, status) => {
    setProject(subId, projectId, { status });
    render();
    if (status === 'done') showToast('Layihə tamamlandı kimi qeyd edildi.', 'success');
};
// Attach the learner's own GitHub repository to a project (read from the input with the given id).
window.saveProjectRepo = (subId, projectId, inputId) => {
    const value = (document.getElementById(inputId)?.value || '').trim();
    if (value && !isRepoUrl(value)) {
        showToast('Repo ünvanı https://github.com/istifadəçi/repo formatında olmalıdır.', 'error');
        return;
    }
    setProject(subId, projectId, { repo: value, status: projectState(subId, projectId).status || 'started' });
    render();
    showToast(value ? 'GitHub reposu layihəyə bağlandı.' : 'Repo ünvanı silindi.', value ? 'success' : 'info');
};

window.switchTab = (tab) => {
    state.currentTab = tab;
    render();
};

window.setLanguage = (langCode) => {
    state.lang = langCode;
    if (langCode === 'ru') loadRu();
    localStorage.setItem('azedev_lang', langCode);
    localStorage.setItem('dsss_lang', langCode);
    render();
    updateMeta();
    showToast(langCode === 'ru' ? 'Язык изменён: RU' : `Dil dəyişdirildi: ${langCode.toUpperCase()}`, 'info');
};

window.toggleMobileMenu = () => {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
    render();
};

window.setDropdown = (name) => {
    state.activeNavDropdown = name;
};

// Command Palette actions
window.openCommandPalette = () => {
    state.isCommandPaletteOpen = true;
    state.searchQuery = '';
    state.commandPaletteSelectedIndex = 0;
    render();
    setTimeout(() => {
        document.getElementById('cmd-input')?.focus();
    }, 50);
};

window.closeCommandPalette = () => {
    state.isCommandPaletteOpen = false;
    render();
};

window.setCommandSearch = (q) => {
    const prevInput = document.getElementById('cmd-input');
    const cursor = prevInput ? prevInput.selectionStart : q.length;
    state.searchQuery = q;
    state.commandPaletteSelectedIndex = 0;
    render();
    const input = document.getElementById('cmd-input');
    if (input) {
        input.focus();
        input.selectionStart = input.selectionEnd = cursor;
    }
};

// Challenges actions
window.selectChallenge = (id) => {
    state.activeChallengeId = id;
    state.showChallengeSolution = false;
    render();
};

window.toggleChallengeSolution = () => {
    state.showChallengeSolution = !state.showChallengeSolution;
    render();
};

// Quiz actions
// Switching to a quiz opens it (the picker → question flow in pages/practice.js).
window.switchQuiz = (id) => {
    // A test can be opened from anywhere (a lesson, a path, the Məşq page): it always shows on the test screen.
    closeOverlays();
    state.view = 'quizzes';
    window.scrollTo(0, 0);
    state.quizOpen = true;
    state.quizChecked = {};
    state.activeQuizId = id;
    newQuizSeed();
    state.quizQuestionIdx = 0;
    state.quizAnswers = {};
    state.quizSubmitted = false;
    render();
};

window.selectQuizAnswer = (qIdx, optIdx) => {
    state.quizAnswers[qIdx] = optIdx;
    render();
};

window.nextQuizQuestion = () => {
    const quiz = getQuiz(state.activeQuizId);
    if (quiz && state.quizQuestionIdx < quiz.questions.length - 1) {
        state.quizQuestionIdx++;
        render();
    }
};

window.prevQuizQuestion = () => {
    if (state.quizQuestionIdx > 0) {
        state.quizQuestionIdx--;
        render();
    }
};

window.submitQuiz = () => {
    state.quizSubmitted = true;
    const quiz = getQuiz(state.activeQuizId);
    if (quiz) {
        const score = quiz.questions.reduce((n, q, i) => n + (state.quizAnswers[i] === q.correctIndex ? 1 : 0), 0);
        recordQuiz(quiz.id, score, quiz.questions.length);
    }
    render();
    window.scrollTo(0, 0);
    showToast('Test bitdi. Nəticən aşağıdadır.');
};

window.resetQuiz = () => {
    newQuizSeed();
    state.quizQuestionIdx = 0;
    state.quizAnswers = {};
    state.quizSubmitted = false;
    render();
};

// Downloads Hub actions
window.setDownloadsFilter = (cat) => {
    state.downloadsCategoryFilter = cat;
    render();
};

window.setDownloadsSearch = (q) => {
    const prevInput = document.getElementById('downloads-search-input');
    const cursor = prevInput ? prevInput.selectionStart : q.length;
    state.downloadsSearch = q;
    render();
    const input = document.getElementById('downloads-search-input');
    if (input) {
        input.focus();
        input.selectionStart = input.selectionEnd = cursor;
    }
};

window.previewCheatSheet = (id) => {
    const sheet = downloadableCheatSheets.find(s => s.id === id);
    if (sheet) {
        state.previewResource = sheet;
        render();
    }
};

window.previewUploadedResource = (id) => {
    const uploads = getCommunityUploads();
    const res = uploads.find(u => u.id === id);
    if (res) {
        state.previewResource = res;
        render();
    }
};

window.closePreviewModal = () => {
    state.previewResource = null;
    render();
};

window.downloadSingleCheatSheet = (id) => {
    const sheet = downloadableCheatSheets.find(s => s.id === id);
    if (sheet) {
        incrementDownloadCount(id);
        triggerBrowserDownload(sheet.filename, sheet.content, 'text/markdown;charset=utf-8');
        showToast(`“${sheet.title}” yükləndi.`, 'success');
        render();
    }
};

window.downloadUploadedResource = (id) => {
    const uploads = getCommunityUploads();
    const res = uploads.find(u => u.id === id);
    if (res && res.content) {
        incrementDownloadCount(id);
        const filename = `${res.title.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
        triggerBrowserDownload(filename, res.content, 'text/markdown;charset=utf-8');
        showToast(`“${res.title}” yükləndi.`, 'success');
        render();
    }
};

window.downloadPreviewResource = () => {
    if (!state.previewResource) return;
    const res = state.previewResource;
    const sheet = downloadableCheatSheets.find(s => s.id === res.id);
    if (sheet) {
        window.downloadSingleCheatSheet(sheet.id);
    } else {
        incrementDownloadCount(res.id);
        const filename = res.filename || `${(res.title || 'resource').replace(/[^a-zA-Z0-9]/g, '_')}.md`;
        triggerBrowserDownload(filename, res.content || '', 'text/markdown;charset=utf-8');
        showToast(`“${res.title || 'Material'}” yükləndi.`, 'success');
        render();
    }
};

// Upload Modal actions
window.openUploadModal = () => {
    state.isMobileMenuOpen = false;
    state.uploadModalOpen = true;
    render();
};

window.closeUploadModal = () => {
    state.uploadModalOpen = false;
    render();
};

window.handleUploadSubmit = async (e) => {
    e.preventDefault();
    const val = (id, fallback = '') => document.getElementById(id)?.value || fallback;
    const payload = {
        title: val('up-title'), category: val('up-cat', 'web-dev'), type: val('up-type', 'cheatsheet'), author: val('up-author', 'Anonim'),
        url: val('up-url'), desc: val('up-desc'), content: val('up-content'), website: val('up-website')
    };
    // The suggestion goes to AZEDEV's moderation queue. Without the API (local development) it stays on this device and
    // the message says so.
    const r = await apiCall('/api/submissions', { method: 'POST', body: payload, admin: state.isAdmin });
    state.uploadModalOpen = false;
    if (r.ok) {
        render();
        showToast(state.isAdmin ? 'Material dərc olundu.' : 'Göndərildi. AZEDEV yoxlayandan sonra saytda görünəcək.', 'success');
        if (state.isAdmin) { await loadAdminData(); render(); }
        return;
    }
    if (r.status === 409) { render(); return showToast('Bu link artıq göndərilib və ya saytda var.', 'info'); }
    if (r.status === 429) { render(); return showToast('Çox tez-tez göndərirsən. Bir saatdan sonra yenidən cəhd et.', 'info'); }
    if (r.status === 400) { render(); return showToast('Başlıq və link (və ya mətn) lazımdır.', 'info'); }
    addCommunityUpload({ ...payload, isAdmin: false });
    render();
    showToast('Server hazırda əlçatan deyil: material bu cihazda saxlandı, sonra yenidən göndər.', 'info');
};

// Admin actions
window.handleAdminLogin = async (e) => {
    e.preventDefault();
    setAdminToken((document.getElementById('admin-passcode')?.value || '').trim());
    const r = await loadAdminData();
    if (r.ok) {
        state.isAdmin = true;
        state.adminError = '';
        state.adminTab = 'overview';
        render();
        showToast('Admin panelinə daxil oldunuz.', 'success');
        loadReports('new');
    } else {
        logoutAdmin();
        state.isAdmin = false;
        state.adminError = r.unauthorized ? 'Token yanlışdır.' : 'Server əlçatan deyil (MONGODB_URI və ADMIN_TOKEN Vercel-də təyin olunubmu?).';
        render();
    }
};

window.adminLogoutHandler = () => {
    logoutAdmin();
    state.isAdmin = false;
    render();
    showToast('Admin sessiyası bağlandı.', 'info');
};

window.setAdminTab = (tab) => {
    state.adminTab = tab;
    render();
    if (tab === 'reports') loadReports();
};

const adminAct = async (call, done) => {
    const r = await call();
    if (!r.ok) return showToast(r.status === 401 ? 'Sessiyanın vaxtı bitib, yenidən daxil ol.' : 'Əməliyyat alınmadı.', 'info');
    await loadAdminData();
    render();
    showToast(done, 'success');
};
window.adminApprove = (id) => adminAct(() => apiCall(`/api/submissions?id=${encodeURIComponent(id)}`, { method: 'PATCH', body: { status: 'approved' }, admin: true }), 'Material təsdiqləndi və saytda göründü.');
window.adminReject = (id) => adminAct(() => apiCall(`/api/submissions?id=${encodeURIComponent(id)}`, { method: 'PATCH', body: { status: 'rejected' }, admin: true }), 'Rədd edildi (30 gündən sonra avtomatik silinir).');
window.adminDelete = (id) => {
    if (confirm('Bu materialı silmək istədiyinizdən əminsiniz?')) adminAct(() => apiCall(`/api/submissions?id=${encodeURIComponent(id)}`, { method: 'DELETE', admin: true }), 'Material silindi.');
};
// Closing a request records the mentor's decision; the note is what the learner reads under the project.
window.adminReportsTab = (status) => { loadReports(status); };
window.adminSetReport = async (id, status) => {
    const adminNote = status === 'resolved' || status === 'rejected' ? (prompt(status === 'resolved' ? 'Nə etdin? (məsələn: link dəyişdirildi)' : 'Niyə rədd edildi?') ?? null) : '';
    if (adminNote === null) return;
    const r = await setReportStatus(id, status, adminNote);
    if (!r.ok) return showToast(r.status === 401 ? 'Sessiyanın vaxtı bitib, yenidən daxil ol.' : 'Əməliyyat alınmadı.', 'info');
    await loadReports();
    showToast({ reviewing: 'Yoxlanılır kimi qeyd edildi.', resolved: 'Həll olundu.', rejected: 'Rədd edildi.', new: 'Yenidən açıldı.' }[status], 'success');
};

window.adminCloseRequest = (id, status) => {
    const note = prompt(status === 'done' ? 'Öyrənənə qeyd (nə yaxşıdır, nəyi inkişaf etdirsin):' : 'Nəyi düzəltməlidir? (öyrənən bunu görəcək)');
    if (note === null) return;
    const mentor = prompt('Mentorun adı (öyrənən görəcək):', sessionStorage.getItem('azedev_mentor_name') || '') || '';
    try { sessionStorage.setItem('azedev_mentor_name', mentor); } catch { /* ignore */ }
    adminAct(() => apiCall(`/api/requests?id=${encodeURIComponent(id)}`, { method: 'PATCH', body: { status, note, mentor }, admin: true }), status === 'done' ? 'Qəbul edildi, öyrənən qeydi görəcək.' : 'Düzəliş istəndi, öyrənən qeydi görəcək.');
};

window.handleAdminAddResource = async (e) => {
    e.preventDefault();
    const val = (id, fallback = '') => document.getElementById(id)?.value || fallback;
    const body = { title: val('adm-title'), category: val('adm-cat', 'web-dev'), type: val('adm-type', 'cheatsheet'), author: 'AZEDEV', desc: val('adm-desc'), content: val('adm-content') };
    const r = await apiCall('/api/submissions', { method: 'POST', body, admin: true });
    if (!r.ok) return showToast('Əlavə olunmadı: ' + (r.status === 401 ? 'yenidən daxil ol.' : 'server cavab vermədi.'), 'info');
    await loadAdminData();
    state.adminTab = 'overview';
    render();
    showToast('Material dərc olundu.', 'success');
};

window.exportBackup = () => {
    exportPlatformDatabase();
    showToast('Platforma məlumatları JSON faylı kimi ixrac edildi.', 'success');
};

window.handleImportBackup = (event) => {
    const file = event.target?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
            const result = importPlatformDatabase(content);
            if (result.success) {
                showToast('Platforma məlumatları bərpa edildi.', 'success');
                render();
            } else {
                showToast('İmport xətası: ' + (result.error || 'Naməlum xəta'), 'error');
            }
        }
    };
    reader.onerror = () => {
        showToast('Fayl oxunmadı. JSON ehtiyat faylını yenidən seçin.', 'error');
    };
    reader.readAsText(file);
    event.target.value = '';
};

// Copy helper
window.copyToClipboard = (text) => {
    const fallbackCopy = (str) => {
        try {
            const textarea = document.createElement('textarea');
            textarea.value = str;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            const successful = document.execCommand('copy');
            document.body.removeChild(textarea);
            if (successful) {
                showToast('Panoya kopyalandı.', 'success');
            } else {
                showToast('Kopyalamaq alınmadı. Mətni əl ilə seçin.', 'error');
            }
        } catch (err) {
            showToast('Kopyalamaq alınmadı. Mətni əl ilə seçin.', 'error');
        }
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Panoya kopyalandı.', 'success');
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
};

window.copyActiveChallengeCode = () => {
    const active = codingChallengesData.find(c => c.id === state.activeChallengeId) || codingChallengesData[0];
    if (active && active.starterCode) {
        window.copyToClipboard(active.starterCode);
    }
};

window.copyPreviewContent = () => {
    if (state.previewResource && state.previewResource.content) {
        window.copyToClipboard(state.previewResource.content);
    }
};

// Global Keyboard Shortcut: '/' or 'Cmd+K' / 'Ctrl+K', Command Palette navigation, and Escape key
window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        window.openCommandPalette();
        return;
    } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        window.openCommandPalette();
        return;
    }

    if (state.isCommandPaletteOpen) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (state.commandPaletteResults && state.commandPaletteResults.length > 0) {
                state.commandPaletteSelectedIndex = (state.commandPaletteSelectedIndex + 1) % state.commandPaletteResults.length;
                render();
                const input = document.getElementById('cmd-input');
                if (input) {
                    input.focus();
                }
                document.getElementById(`cmd-item-${state.commandPaletteSelectedIndex}`)?.scrollIntoView({ block: 'nearest' });
            }
            return;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (state.commandPaletteResults && state.commandPaletteResults.length > 0) {
                state.commandPaletteSelectedIndex = (state.commandPaletteSelectedIndex - 1 + state.commandPaletteResults.length) % state.commandPaletteResults.length;
                render();
                const input = document.getElementById('cmd-input');
                if (input) {
                    input.focus();
                }
                document.getElementById(`cmd-item-${state.commandPaletteSelectedIndex}`)?.scrollIntoView({ block: 'nearest' });
            }
            return;
        } else if (e.key === 'Enter') {
            e.preventDefault();
            window.selectCommandItem(state.commandPaletteSelectedIndex);
            return;
        } else if (e.key === 'Escape') {
            window.closeCommandPalette();
            return;
        }
    }

    if (e.key === 'Escape') {
        if (state.report) {
            window.closeReport();
        } else if (state.previewResource) {
            window.closePreviewModal();
        } else if (state.uploadModalOpen) {
            window.closeUploadModal();
        } else if (state.isMobileMenuOpen) {
            window.toggleMobileMenu();
        }
    }
});

// Main Render Function
const render = () => {
    // A first-time visitor (no progress, not stepped in yet) gets the landing page, without the app's navigation.
    // 'welcome' shows it on request ("Learn haqqında").
    if (state.view === 'welcome' || (state.view === 'home' && !hasProgress() && !hasEntered())) {
        app.innerHTML = WelcomePage() + CommandPalette() + Onboarding();
        hydrateArt();
        applyRussian();
        return;
    }
    // First time inside the app: the short guide opens once.
    maybeStartOnboarding();
    state.hintFoldShown = false;
    resetReportTargets();
    let content = '';
    content += Navbar();
    content += MobileMenu();
    // The view sits right of the desktop sidebar.
    content += '<div class="flex min-h-screen flex-1 flex-col lg:pl-64">';

    if (state.view === 'home') {
        content += LandingPage();
    } else if (state.view === 'roadmaps') {
        content += RoadmapsPage();
    } else if (state.view === 'category') {
        content += Sidebar();
        content += CategoryDetail();
    } else if (state.view === 'topic') {
        content += TopicPage();
    } else if (state.view === 'projects') {
        content += ProjectsPage();
    } else if (state.view === 'journey') {
        content += JourneyPage();
    } else if (state.view === 'courses') {
        content += CoursesPage();
    } else if (state.view === 'books') {
        content += BooksPage();
    } else if (state.view === 'videos') {
        content += VideosPage();
    } else if (state.view === 'docs') {
        content += DocsPage();
    } else if (state.view === 'challenges') {
        content += ChallengesPage();
    } else if (state.view === 'quizzes') {
        content += QuizzesPage();
    } else if (state.view === 'career-paths') {
        content += CareerPathsPage();
    } else if (state.view === 'open-source') {
        content += OpenSourcePage();
    } else if (state.view === 'downloads') {
        content += DownloadsHubPage();
    } else if (state.view === 'admin') {
        content += AdminPage();
    } else if (state.view === 'about' || state.view === 'community') {
        content += AboutAzedevPage();
    } else if (state.view === 'contribute') {
        content += ContributePage();
    } else if (state.view === 'verify') {
        content += VerifyPage();
    } else if (state.view === 'faq') {
        content += GlobalFaqPage();
    } else if (state.view === 'glossary') {
        content += GlossaryPage();
    } else if (state.view === 'hall-of-fame') {
        content += HallOfFamePage();
    } else if (state.view === 'privacy') {
        content += LegalPage('privacy');
    } else if (state.view === 'terms') {
        content += LegalPage('terms');
    }

    content += '</div>';
    content += BottomNav();
    content += CommandPalette();
    content += UploadResourceModal();
    content += ResourcePreviewModal();
    content += ReportModal();
    content += Onboarding();

    app.innerHTML = content;
    applyRussian();

    // The route drawing (home, onboarding) comes alive after render.
    hydrateArt();

    // Keep keyboard focus inside the introduction while it is open.
    const dialog = document.getElementById('onboarding-dialog');
    if (dialog && !dialog.contains(document.activeElement)) dialog.focus();

    // Tab bars scroll sideways on phones: bring the current tab into view without moving the page.
    document.querySelectorAll('.ln-tabs').forEach((bar) => {
        const current = bar.querySelector('[aria-current], [aria-selected="true"]');
        if (current) bar.scrollLeft += current.getBoundingClientRect().left - bar.getBoundingClientRect().left - (bar.clientWidth - current.offsetWidth) / 2;
    });

    // Remember the last roadmap view for the landing page's "continue" link.
    if ((state.view === 'category' || state.view === 'topic') && state.currentCategory && state.currentSubCategory) {
        touchTrack(state.currentSubCategory);
        try {
            localStorage.setItem('azedev_last_track', JSON.stringify({ cat: state.currentCategory, sub: state.currentSubCategory, tab: state.currentTab || 'roadmap' }));
        } catch { /* storage unavailable: the link is a convenience */ }
    }
};

// Russian: the whole screen is translated after each render (the translations load on first use).
function applyRussian() {
    if (state.lang !== 'ru') { watchRu(false); return; }
    if (ruLoaded()) { translateTree(app); watchRu(true); document.title = ruText(document.title); } else loadRu();
}

// Initial Execution. A shared certificate link (learn.azedev.com/verify/<ID>) opens the verification page directly.
// The admin panel has its own address (learn.azedev.com/admin); it is not in the learner's menus or search.
if (/^\/admin\/?$/.test(location.pathname)) state.view = 'admin';
const verifyMatch = location.pathname.match(/^\/verify\/?([\w-]*)/);
if (verifyMatch) {
    state.view = 'verify';
    state.verifyId = decodeURIComponent(verifyMatch[1] || '');
}
window.__azRender = render;
render();
updateMeta();

// PWA service worker: production only. In development an old worker could keep serving an outdated page, so any
// registered worker and its caches are removed.
if ('serviceWorker' in navigator) {
    if (import.meta.env.PROD) {
        window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(() => {}); });
    } else {
        navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister())).catch(() => {});
        if (window.caches) caches.keys().then((keys) => keys.forEach((k) => caches.delete(k))).catch(() => {});
    }
}
