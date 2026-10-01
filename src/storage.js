// AZEDEV Learn - Local Storage & State Persistence Layer
// Handles Community Resource Uploads, Downloads, Admin Moderation, and Backups

import { downloadableCheatSheets } from './azedev-data.js';
import { getAdminToken, clearAdminToken, getRemoteUploads, clearAdminData } from './api.js';

const UPLOADS_STORAGE_KEY = 'azedev_community_uploads_v1';
const DOWNLOAD_STATS_KEY = 'azedev_download_stats_v1';
const ADMIN_SESSION_KEY = 'azedev_admin_auth_v1';
const CUSTOM_RESOURCES_KEY = 'azedev_custom_resources_v1';

// Default initial community uploads so the section is immediately rich
// No seeded examples: the community list shows only real, approved suggestions (from the API, or this browser).
const defaultCommunityUploads = [];
const SEEDED_IDS = new Set(['upload-1', 'upload-2', 'upload-3']);

// Initialize storage if empty
export const initStorage = () => {
    try {
        if (typeof localStorage === 'undefined' || !localStorage) return;
        if (!localStorage.getItem(UPLOADS_STORAGE_KEY)) {
            localStorage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(defaultCommunityUploads));
        } else {
            // Earlier versions seeded three example uploads credited to groups that do not exist; drop them.
            const list = JSON.parse(localStorage.getItem(UPLOADS_STORAGE_KEY) || '[]');
            const clean = list.filter((item) => !SEEDED_IDS.has(item.id));
            if (clean.length !== list.length) localStorage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(clean));
        }
        if (!localStorage.getItem(DOWNLOAD_STATS_KEY)) {
            const initialStats = {};
            downloadableCheatSheets.forEach(item => {
                initialStats[item.id] = item.downloads;
            });
            defaultCommunityUploads.forEach(item => {
                initialStats[item.id] = item.downloads;
            });
            localStorage.setItem(DOWNLOAD_STATS_KEY, JSON.stringify(initialStats));
        }
        if (!localStorage.getItem(CUSTOM_RESOURCES_KEY)) {
            localStorage.setItem(CUSTOM_RESOURCES_KEY, JSON.stringify([]));
        }
    } catch (e) {
        console.warn('LocalStorage error during initStorage:', e);
    }
};

// Get all uploaded community resources
export const getCommunityUploads = (includePending = false) => {
    try {
        const raw = localStorage.getItem(UPLOADS_STORAGE_KEY);
        const local = (raw ? JSON.parse(raw) : defaultCommunityUploads).filter((item) => !SEEDED_IDS.has(item.id));
        const remote = getRemoteUploads();
        const list = [...remote, ...local];
        if (includePending) return list;
        return list.filter(item => item.status === 'approved');
    } catch (e) {
        return getRemoteUploads();
    }
};

// Add a new community resource upload
export const addCommunityUpload = (resource) => {
    try {
        const raw = localStorage.getItem(UPLOADS_STORAGE_KEY);
        const list = raw ? JSON.parse(raw) : defaultCommunityUploads;
        
        const newResource = {
            id: `upload-${Date.now()}`,
            title: resource.title.trim(),
            category: resource.category || 'web-dev',
            subCategory: resource.subCategory || 'frontend',
            type: resource.type || 'guide',
            format: resource.format || 'MD / TXT',
            author: resource.author?.trim() || 'Anonim Developer',
            authorEmail: resource.authorEmail || '',
            authorPicture: resource.authorPicture || '',
            userId: resource.userId || null,
            github: resource.github?.trim() || '',
            date: new Date().toISOString().split('T')[0],
            status: resource.isAdmin ? 'approved' : 'pending', // Admins approve immediately, users go to pending
            downloads: 0,
            url: resource.url?.trim() || '',
            content: resource.content || '',
            desc: resource.desc?.trim() || 'İcma tərəfindən təqdim edilmiş resurs.'
        };

        list.unshift(newResource);
        localStorage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(list));
        return { success: true, resource: newResource };
    } catch (e) {
        console.error('Error adding upload:', e);
        return { success: false, error: e.message };
    }
};

// Approve an upload (Admin only)
export const approveUpload = (id) => {
    try {
        const raw = localStorage.getItem(UPLOADS_STORAGE_KEY);
        if (!raw) return false;
        const list = JSON.parse(raw);
        const item = list.find(r => r.id === id);
        if (item) {
            item.status = 'approved';
            localStorage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(list));
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
};

// Delete an upload (Admin only)
export const deleteUpload = (id) => {
    try {
        const raw = localStorage.getItem(UPLOADS_STORAGE_KEY);
        if (!raw) return false;
        let list = JSON.parse(raw);
        list = list.filter(r => r.id !== id);
        localStorage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(list));
        return true;
    } catch (e) {
        return false;
    }
};

// Increment download counter
export const incrementDownloadCount = (resourceId) => {
    try {
        const rawStats = localStorage.getItem(DOWNLOAD_STATS_KEY);
        const stats = rawStats ? JSON.parse(rawStats) : {};
        stats[resourceId] = (stats[resourceId] || 0) + 1;
        localStorage.setItem(DOWNLOAD_STATS_KEY, JSON.stringify(stats));

        // Also update in uploads list if present
        const rawUploads = localStorage.getItem(UPLOADS_STORAGE_KEY);
        if (rawUploads) {
            const list = JSON.parse(rawUploads);
            const item = list.find(r => r.id === resourceId);
            if (item) {
                item.downloads = (item.downloads || 0) + 1;
                localStorage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(list));
            }
        }
        return stats[resourceId];
    } catch (e) {
        return 1;
    }
};

export const getDownloadCount = (resourceId) => {
    try {
        const rawStats = localStorage.getItem(DOWNLOAD_STATS_KEY);
        if (!rawStats) return 0;
        const stats = JSON.parse(rawStats);
        return stats[resourceId] || 0;
    } catch (e) {
        return 0;
    }
};

// Custom Resources added by Admin for Category views
export const getCustomResources = () => {
    try {
        const raw = localStorage.getItem(CUSTOM_RESOURCES_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
};

export const addCustomResource = (res) => {
    try {
        const raw = localStorage.getItem(CUSTOM_RESOURCES_KEY);
        const list = raw ? JSON.parse(raw) : [];
        const newItem = {
            id: `res-${Date.now()}`,
            subId: res.subId,
            type: res.type || 'link',
            title: res.title,
            url: res.url,
            desc: res.desc,
            lang: res.lang || 'az',
            addedAt: new Date().toISOString()
        };
        list.push(newItem);
        localStorage.setItem(CUSTOM_RESOURCES_KEY, JSON.stringify(list));
        return newItem;
    } catch (e) {
        return null;
    }
};

export const deleteCustomResource = (id) => {
    try {
        const raw = localStorage.getItem(CUSTOM_RESOURCES_KEY);
        if (!raw) return false;
        let list = JSON.parse(raw);
        list = list.filter(r => r.id !== id);
        localStorage.setItem(CUSTOM_RESOURCES_KEY, JSON.stringify(list));
        return true;
    } catch (e) {
        return false;
    }
};

// Admin authentication happens on the server (ADMIN_TOKEN in Vercel, checked by /api/*). The browser only keeps the
// token the admin typed, for this tab; there is no passcode in the site's code.
export const isAdminAuthenticated = () => Boolean(getAdminToken());

export const logoutAdmin = () => { clearAdminToken(); clearAdminData(); };

// Trigger Browser File Download (Markdown/Text/JSON)
export const triggerBrowserDownload = (filename, content, mimeType = 'text/markdown;charset=utf-8') => {
    try {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        return true;
    } catch (e) {
        console.error('Download error:', e);
        return false;
    }
};

// Export entire database as JSON for backup
export const exportPlatformDatabase = () => {
    const data = {
        exportedAt: new Date().toISOString(),
        version: "AZEDEV-Learn-2026",
        communityUploads: getCommunityUploads(true),
        downloadStats: JSON.parse(localStorage.getItem(DOWNLOAD_STATS_KEY) || '{}'),
        customResources: getCustomResources()
    };
    const jsonStr = JSON.stringify(data, null, 2);
    triggerBrowserDownload(`AZEDEV-Learn-Backup-${new Date().toISOString().split('T')[0]}.json`, jsonStr, 'application/json');
};

// Import database from JSON string
export const importPlatformDatabase = (jsonStr) => {
    try {
        if (!jsonStr || typeof jsonStr !== 'string') {
            return { success: false, error: 'Fayl məzmunu boşdur' };
        }
        const data = JSON.parse(jsonStr);
        if (!data || typeof data !== 'object' || Array.isArray(data)) {
            return { success: false, error: 'Yararsız JSON formatı (Obyekt gözlənilirdi)' };
        }

        let importedCount = 0;
        if (data.communityUploads !== undefined) {
            if (!Array.isArray(data.communityUploads)) {
                return { success: false, error: 'communityUploads massiv (array) formatında olmalıdır' };
            }
            localStorage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(data.communityUploads));
            importedCount++;
        }
        if (data.downloadStats !== undefined) {
            if (typeof data.downloadStats !== 'object' || Array.isArray(data.downloadStats) || data.downloadStats === null) {
                return { success: false, error: 'downloadStats obyekt formatında olmalıdır' };
            }
            localStorage.setItem(DOWNLOAD_STATS_KEY, JSON.stringify(data.downloadStats));
            importedCount++;
        }
        if (data.customResources !== undefined) {
            if (!Array.isArray(data.customResources)) {
                return { success: false, error: 'customResources massiv (array) formatında olmalıdır' };
            }
            localStorage.setItem(CUSTOM_RESOURCES_KEY, JSON.stringify(data.customResources));
            importedCount++;
        }

        if (importedCount === 0) {
            return { success: false, error: 'Bərpa ediləcək tanınan verilənlər bazası tapılmadı' };
        }

        return { success: true, count: importedCount };
    } catch (e) {
        return { success: false, error: e.message };
    }
};

// Initialize right away
initStorage();
