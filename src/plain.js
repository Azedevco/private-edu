// Plain words for beginners: every path described as what the learner wants to do and what they will learn, and every
// level word in Azerbaijani. Pages show these first; the technical name (Frontend, DevOps…) comes second.
export const PATH_PLAIN = {
    frontend: { want: 'Sayt düzəltmək istəyirəm', promise: 'Saytın gördüyün hissəsini düzəltməyi öyrən: səhifələr, düymələr, dizayn.', beginner: true },
    backend: { want: 'Saytın arxa tərəfini qurmaq istəyirəm', promise: 'Məlumatı saxlayan və saytı işlədən server hissəsini öyrən.' },
    fullstack: { want: 'Saytı başdan-sona qurmaq istəyirəm', promise: 'Saytın həm görünən hissəsini, həm də server tərəfini birlikdə öyrən.' },
    ios: { want: 'iPhone tətbiqi düzəltmək istəyirəm', promise: 'iPhone və iPad üçün tətbiq düzəltməyi öyrən.' },
    android: { want: 'Android tətbiqi düzəltmək istəyirəm', promise: 'Android telefonlar üçün tətbiq düzəltməyi öyrən.' },
    'cross-platform': { want: 'Telefon tətbiqi düzəltmək istəyirəm', promise: 'Bir kodla həm iPhone, həm Android üçün tətbiq düzəltməyi öyrən.', beginner: true },
    'data-science': { want: 'Məlumatla işləmək istəyirəm', promise: 'Rəqəmlərdən və cədvəllərdən faydalı nəticə çıxarmağı öyrən.', beginner: true },
    ml: { want: 'Kompüterə öyrənməyi öyrətmək istəyirəm', promise: 'Məlumatdan özü öyrənən proqramlar (maşın öyrənməsi) qurmağı öyrən.' },
    'deep-learning': { want: 'Süni intellekt modeli qurmaq istəyirəm', promise: 'Şəkil və mətn tanıyan neyron şəbəkələri öyrən.' },
    'ai-engineering': { want: 'Süni intellektli tətbiq qurmaq istəyirəm', promise: 'Hazır süni intellekt modellərini (məsələn, çatbotları) öz tətbiqinə qoşmağı öyrən.' },
    'big-data': { want: 'Çox böyük məlumatla işləmək istəyirəm', promise: 'Milyonlarla sətirlik məlumatı saxlamağı və emal etməyi öyrən.' },
    'cyber-security': { want: 'Sistemləri qorumaq istəyirəm', promise: 'Kompüterləri və saytları hücumlardan qorumağı öyrən.' },
    network: { want: 'Şəbəkələri anlamaq istəyirəm', promise: 'İnternetin və kompüter şəbəkələrinin necə işlədiyini öyrən.' },
    devops: { want: 'Proqramları serverdə işə salmaq istəyirəm', promise: 'Proqramları avtomatik yoxlamağı və serverə çıxarmağı öyrən.' },
    cloud: { want: 'Bulud serverləri ilə işləmək istəyirəm', promise: 'Bulud xidmətlərində (məsələn, AWS) sistem qurmağı öyrən.' },
    'game-programming': { want: 'Oyun düzəltmək istəyirəm', promise: 'Kompüter və telefon oyunlarını proqramlaşdırmağı öyrən.' },
    'graphics-programming': { want: 'Kompüter qrafikası ilə işləmək istəyirəm', promise: 'Ekranda 2D və 3D görüntü yaradan proqramları öyrən.' },
    embedded: { want: 'Cihazları proqramlaşdırmaq istəyirəm', promise: 'Kiçik elektron cihazların içindəki proqramları yazmağı öyrən.' },
    iot: { want: 'Ağıllı cihazlar qurmaq istəyirəm', promise: 'İnternetə qoşulan sensor və cihazlar (ağıllı ev) qurmağı öyrən.' },
    blockchain: { want: 'Blokçeyn tətbiqi qurmaq istəyirəm', promise: 'Blokçeyn texnologiyası üzərində tətbiq qurmağı öyrən.' },
    'ar-vr': { want: 'Virtual reallıq yaratmaq istəyirəm', promise: 'Artırılmış və virtual reallıq təcrübələri qurmağı öyrən.' },
    'qa-automation': { want: 'Proqramları yoxlamaq istəyirəm', promise: 'Proqramlardakı səhvləri tapan avtomatik testlər yazmağı öyrən.' }
};

// Where a beginner should start, in this order (the home page shows these three).
export const STARTER_PATHS = ['frontend', 'data-science', 'cross-platform'];

export const plainPath = (sub) => PATH_PLAIN[sub] || { want: '', promise: '', beginner: false };

// Level words from the data (English, mixed case) → Azerbaijani. Unknown words pass through unchanged.
const LEVELS = {
    junior: 'Başlanğıc', beginner: 'Başlanğıc', easy: 'Asan', 'başlanğıc': 'Başlanğıc',
    mid: 'Orta', middle: 'Orta', intermediate: 'Orta', medium: 'Orta', 'orta': 'Orta',
    senior: 'Çətin', advanced: 'Çətin', hard: 'Çətin', expert: 'Çətin',
    'beginner to intermediate': 'Başlanğıc–orta', 'all levels': 'Bütün səviyyələr'
};
export const levelAz = (level) => LEVELS[String(level ?? '').trim().toLowerCase()] || level;

// Progress in one sentence, no grammar traps: "7 dərs bitirdin, 2 dərs qalıb."
export const progressSentence = (done, total) => {
    if (!total) return '';
    if (done <= 0) return `Hələ başlamamısan. Bu yolda ${total} dərs var.`;
    if (done >= total) return `Bütün ${total} dərsi bitirdin.`;
    return `${done} dərs bitirdin, ${total - done} dərs qalıb.`;
};
