// AZEDEV Learn - shared state, i18n helpers, toast and document meta
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
import { icon } from './icons.js'

// Application State
export const state = {
    lang: localStorage.getItem('azedev_lang') || localStorage.getItem('dsss_lang') || 'az', // Default to AZ
    country: localStorage.getItem('azedev_country') || localStorage.getItem('dsss_country') || 'AZ', // Default to AZ
    view: 'home',
    currentCategory: null,
    currentSubCategory: null,
    currentTab: 'roadmap',
    isMobileMenuOpen: false,
    activeNavDropdown: null,
    searchQuery: '',
    isCommandPaletteOpen: false,
    commandPaletteResults: [],
    commandPaletteSelectedIndex: 0,
    activeChallengeId: codingChallengesData[0]?.id || null,
    showChallengeSolution: false,
    // Quiz state
    activeQuizId: quizzesData[0]?.id || null,
    quizQuestionIdx: 0,
    quizAnswers: {},
    quizSubmitted: false,
    // Admin state
    isAdmin: isAdminAuthenticated(),
    adminTab: 'overview',
    adminPasscode: '',
    adminError: '',
    // Downloads Hub state
    downloadsCategoryFilter: 'all',
    downloadsSearch: '',
    uploadModalOpen: false,
    previewResource: null,
    // Topic view: index of the open stage in the current path
    currentStage: 0,
    // Toast notification
    toast: null
};


// Translation & Localization Helpers
// The interface speaks Azerbaijani; the language switch changes the learning content (paths, lessons, explanations).
// One interface language keeps screens from mixing languages until every label is translated.
export const UI_LANG = 'az';
export const t = (key) => {
    const langData = ui[UI_LANG];
    const val = key.split('.').reduce((obj, k) => obj && obj[k], langData);
    return val !== undefined ? val : key;
};

export const getLocalizedContent = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[state.lang] || obj['az'] || obj['en'] || obj['tr'] || Object.values(obj)[0] || '';
};

export const showToast = (message, type = 'success') => {
    state.toast = { message, type };
    renderToast();
    setTimeout(() => {
        state.toast = null;
        renderToast();
    }, 3200);
};

export const renderToast = () => {
    let container = document.getElementById('azedev-toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'azedev-toast-container';
        container.setAttribute('role', 'status');
        container.setAttribute('aria-live', 'polite');
        container.className = 'pointer-events-none fixed inset-x-4 bottom-[calc(80px+env(safe-area-inset-bottom))] z-[1000] flex justify-center lg:inset-x-auto lg:bottom-6 lg:right-6';
        document.body.appendChild(container);
    }
    if (!state.toast) {
        container.innerHTML = '';
        return;
    }
    // A card on card-2 with a hairline; the icon colour carries the state (status-live, danger or text-mute).
    const { type, message } = state.toast;
    const mark = type === 'error' ? icon('circle-alert', 'size-4 text-danger') : type === 'success' ? icon('circle-check', 'size-4 text-status-live') : icon('info', 'size-4 text-text-mute');
    container.innerHTML = `
        <div class="pointer-events-auto flex max-w-sm animate-rise items-center gap-3 rounded-card border border-alpha-10 bg-card-2 px-4 py-3 [box-shadow:var(--shadow-window)]">
            ${mark}
            <span class="text-[14px] text-text">${message}</span>
        </div>
    `;
};

export const updateMeta = () => {
    let title = "AZEDEV Learn | Proqramlaşdırmanı addım-addım, pulsuz öyrən";
    let subTitle = "";

    if (state.view === 'category' && state.currentCategory) {
        const cat = categories.find(c => c.id === state.currentCategory);
        if (cat) {
            subTitle = getLocalizedContent(cat.title);
            if (state.currentSubCategory) {
                const sub = cat.subCategories.find(s => s.id === state.currentSubCategory);
                if (sub) subTitle = `${getLocalizedContent(sub.title)} - ${subTitle}`;
            }
        }
    } else if (state.view === 'topic') {
        const cat = categories.find(c => c.id === state.currentCategory);
        const sub = cat?.subCategories.find(s => s.id === state.currentSubCategory);
        const stage = (contentData[state.currentSubCategory]?.roadmap?.[state.lang] || contentData[state.currentSubCategory]?.roadmap?.az || [])[state.currentStage || 0];
        subTitle = [stage?.title, getLocalizedContent(sub?.title)].filter(Boolean).join(' - ');
    } else if (state.view === 'contribute') subTitle = 'Material əlavə et';
    else if (state.view === 'verify') subTitle = 'Sertifikatı yoxla';
    else if (state.view === 'projects') subTitle = 'Layihələr';
    else if (state.view === 'journey') subTitle = 'Profil';
    else if (state.view === 'roadmaps') subTitle = t('nav.roadmaps');
    else if (state.view === 'courses') subTitle = t('nav.courses');
    else if (state.view === 'books') subTitle = t('nav.books');
    else if (state.view === 'videos') subTitle = t('nav.videos');
    else if (state.view === 'docs') subTitle = t('nav.docs');
    else if (state.view === 'challenges') subTitle = t('nav.challenges');
    else if (state.view === 'quizzes') subTitle = t('nav.quizzes');
    else if (state.view === 'career-paths') subTitle = t('nav.careerPaths');
    else if (state.view === 'open-source') subTitle = t('nav.openSource');
    else if (state.view === 'community') subTitle = t('nav.community');
    else if (state.view === 'downloads') subTitle = t('nav.downloads');
    else if (state.view === 'about') subTitle = "About AZEDEV";
    else if (state.view === 'admin') subTitle = "Admin Dashboard";
    else if (state.view === 'privacy') subTitle = state.lang === 'az' ? 'Məxfilik Siyasəti' : (state.lang === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy');
    else if (state.view === 'terms') subTitle = state.lang === 'az' ? 'İstifadə Şərtləri' : (state.lang === 'tr' ? 'Kullanım Koşulları' : 'Terms of Service');
    else if (state.view === 'faq') subTitle = t('globalFaq');
    else if (state.view === 'resources') subTitle = t('globalResources');
    else if (state.view === 'glossary') subTitle = t('glossary');
    else if (state.view === 'hall-of-fame') subTitle = t('hallOfFame');

    if (subTitle) title = `${subTitle} | AZEDEV Learn`;
    document.title = title;

    const metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) metaTitle.setAttribute('content', title);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
};

// Page modules re-render through this hook (main.js registers its render function on startup).
export const requestRender = () => window.__azRender?.();
