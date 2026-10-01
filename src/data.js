import curatedResources from './curated-resources.json' with { type: 'json' }
// Languages
export const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
];

// Countries
export const countries = [
    { code: 'GLOBAL', name: 'Global', flag: '🌍' },
    { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
    { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿' },
];

// UI Hello World! Hello Devs! Hello mello sello
export const ui = {
    en: {
        welcome: "AZEDEV Learn",
        heroTag: "AZEDEV ecosystem · Open learning platform",
        heroTitle: "Learn. Build. Contribute.",
        heroSubtitle: "An open, practical learning and career platform for developers. From first fundamentals to verified open-source contributions.",
        searchPlaceholder: "Search roadmaps, courses, cheat sheets or interview questions",
        tabs: { roadmap: "Roadmap", resources: "Resources", jobs: "Career and jobs", faq: "FAQ", interview: "Interview prep", projects: "Projects", contribution: "Contribute" },
        nav: {
            learn: "Learn",
            practice: "Practice",
            explore: "Explore",
            ecosystem: "AZEDEV",
            roadmaps: "Roadmaps",
            courses: "Courses",
            resources: "Resources",
            books: "Books",
            videos: "Videos",
            docs: "Documentation",
            interview: "Interview questions",
            challenges: "Coding challenges",
            projects: "Project ideas",
            quizzes: "Interactive quizzes",
            techRadar: "Technologies",
            careerPaths: "Career paths",
            openSource: "Open-source projects",
            community: "Community and IT Club",
            downloads: "Resources and cheat sheets",
            upload: "Submit a resource",
            admin: "Admin",
            aboutAzedev: "About AZEDEV",
            itClub: "AZEDEV IT Club"
        },
        comingSoon: "Content in preparation",
        globalFaq: "Questions and answers",
        globalResources: "Global resources",
        faqTitle: "Frequently asked questions",
        faqSubtitle: "Common questions about software engineering, careers, and security.",
        hallOfFame: "Hall of fame",
        glossary: "Developer glossary",
        toolOfTheWeek: "Tool of the week",
        viewTool: "View the tool",
        back: "Back",
        stepGuideTitle: "The AZEDEV five-step learning system",
        stepGuideSubtitle: "Roadmap → Resources → Practice → Real project → Open-source contribution"
    },
    tr: {
        welcome: "AZEDEV Learn",
        heroTag: "AZEDEV ekosistemi · Açık öğrenme platformu",
        heroTitle: "Learn. Build. Contribute.",
        heroSubtitle: "Yazılımcılar için açık ve pratik teknoloji platformu. Sıfırdan öğrenmeden gerçek açık kaynak projelere uzanan yolculuk.",
        searchPlaceholder: "Yol haritası, kurs, not veya mülakat sorusu arayın",
        tabs: { roadmap: "Yol haritası", resources: "Kaynaklar", jobs: "Kariyer ve ilanlar", faq: "SSS", interview: "Mülakat hazırlığı", projects: "Projeler", contribution: "Katkı" },
        nav: {
            learn: "Öğren",
            practice: "Pratik",
            explore: "Keşfet",
            ecosystem: "AZEDEV",
            roadmaps: "Yol haritaları",
            courses: "Kurslar",
            resources: "Kaynaklar",
            books: "Kitaplar",
            videos: "Videolar",
            docs: "Dokümantasyon",
            interview: "Mülakat soruları",
            challenges: "Kodlama görevleri",
            projects: "Proje fikirleri",
            quizzes: "Etkileşimli testler",
            techRadar: "Teknolojiler",
            careerPaths: "Kariyer yolları",
            openSource: "Açık kaynak projeler",
            community: "Topluluk ve IT Club",
            downloads: "Kaynaklar ve notlar",
            upload: "Kaynak gönder",
            admin: "Yönetici",
            aboutAzedev: "Hakkımızda",
            itClub: "AZEDEV IT Club"
        },
        comingSoon: "İçerik hazırlanıyor",
        globalFaq: "Sorular ve cevaplar",
        globalResources: "Genel kaynaklar",
        faqTitle: "Sıkça sorulan sorular",
        faqSubtitle: "Yazılım dünyası, kariyer ve güvenlik hakkında genel sorular.",
        hallOfFame: "Onur listesi",
        glossary: "Yazılım sözlüğü",
        toolOfTheWeek: "Haftanın aracı",
        viewTool: "Aracı incele",
        back: "Geri",
        stepGuideTitle: "AZEDEV 5 aşamalı öğrenme sistemi",
        stepGuideSubtitle: "Yol haritası → Kaynaklar → Pratik → Gerçek proje → Açık kaynak katkısı"
    },
    az: {
        welcome: "AZEDEV Learn",
        heroTag: "AZEDEV ekosistemi · Açıq təhsil platforması",
        heroTitle: "Learn. Build. Contribute.",
        heroSubtitle: "Azərbaycanlı developer-lər üçün açıq və praktik texnologiya platforması. Sıfırdan öyrənmədən real open-source layihələrə və qlobal karyeraya qədər.",
        searchPlaceholder: "Yol xəritəsi, kurs, konspekt və ya sual axtarın",
        tabs: { roadmap: "Dərslər", resources: "Materiallar", jobs: "Karyera və bazar", faq: "Suallar", interview: "Müsahibə hazırlığı", projects: "Layihələr", contribution: "Töhfə ver" },
        nav: {
            learn: "Öyrən",
            practice: "Məşq",
            explore: "Kəşf et",
            ecosystem: "AZEDEV",
            roadmaps: "Öyrənmə yolları",
            courses: "Kurslar",
            resources: "Materiallar",
            books: "Kitablar",
            videos: "Videolar",
            docs: "Texniki təlimatlar",
            interview: "Müsahibə sualları",
            challenges: "Kod tapşırıqları",
            projects: "Layihə fikirləri",
            quizzes: "Testlər",
            techRadar: "Texnologiyalar",
            careerPaths: "Karyera yolları",
            openSource: "Open-source layihələr",
            community: "İcma",
            downloads: "Konspektlər",
            upload: "Material göndər",
            admin: "Admin",
            aboutAzedev: "Haqqımızda",
            itClub: "İcma"
        },
        comingSoon: "Məzmun hazırlanır",
        globalFaq: "Suallar və cavablar",
        globalResources: "Ümumi resurslar",
        faqTitle: "Tez-tez verilən suallar",
        faqSubtitle: "Proqramlaşdırma, karyera və texnologiya haqqında ümumi suallar.",
        hallOfFame: "Töhfəçilər",
        glossary: "Terminlər lüğəti",
        toolOfTheWeek: "Həftənin aləti",
        viewTool: "Alətə baxın",
        back: "Geri",
        stepGuideTitle: "AZEDEV-in 5 mərhələli öyrənmə sistemi",
        stepGuideSubtitle: "Yol xəritəsi → Resurslar → Praktika → Real layihə → Open-source töhfə"
    }
};

// Categories
export const categories = [
    {
        id: 'web-dev',
        icon: '💻',
        color: 'from-cyan-400 to-blue-500',
        title: { en: 'Web Development', tr: 'Web Geliştirme', az: 'Veb İnkişafı' },
        desc: { en: 'Frontend, Backend, Full Stack', tr: 'Frontend, Backend, Full Stack', az: 'Frontend, Backend, Full Stack' },
        subCategories: [
            { id: 'frontend', title: { en: 'Frontend', tr: 'Ön Yüz (Frontend)', az: 'Frontend' } },
            { id: 'backend', title: { en: 'Backend', tr: 'Arka Yüz (Backend)', az: 'Backend' } },
            { id: 'fullstack', title: { en: 'Full Stack', tr: 'Full Stack', az: 'Full Stack' } }
        ]
    },
    {
        id: 'mobile-dev',
        icon: '📱',
        color: 'from-purple-500 to-pink-500',
        title: { en: 'Mobile Development', tr: 'Mobil Geliştirme', az: 'Mobil İnkişafı' },
        desc: { en: 'iOS, Android, Cross-Platform', tr: 'iOS, Android, Cross-Platform', az: 'iOS, Android, Cross-Platform' },
        subCategories: [
            { id: 'ios', title: { en: 'Native iOS', tr: 'Native iOS', az: 'Native iOS' } },
            { id: 'android', title: { en: 'Native Android', tr: 'Native Android', az: 'Native Android' } },
            { id: 'cross-platform', title: { en: 'Cross-Platform', tr: 'Hibrit (Cross-Platform)', az: 'Hibrit' } }
        ]
    },
    {
        id: 'data-ai',
        icon: '📊',
        color: 'from-emerald-500 to-green-500',
        title: { en: 'Data & AI', tr: 'Veri ve Yapay Zeka', az: 'Məlumat və AI' },
        desc: { en: 'Data Science, ML, AI', tr: 'Veri Bilimi, Makine Öğrenmesi, AI', az: 'Data Science, ML, AI' },
        subCategories: [
            { id: 'data-science', title: { en: 'Data Science', tr: 'Veri Bilimi', az: 'Data Science' } },
            { id: 'ml', title: { en: 'Machine Learning', tr: 'Makine Öğrenmesi', az: 'Maşın Öyrənməsi' } },
            { id: 'deep-learning', title: { en: 'Deep Learning & AI', tr: 'Derin Öğrenme & AI', az: 'Dərin Öyrənmə & AI' } },
            { id: 'ai-engineering', title: { en: 'AI Engineering', tr: 'AI Mühendisliği', az: 'AI Mühəndisliyi' } },
            { id: 'big-data', title: { en: 'Big Data', tr: 'Büyük Veri', az: 'Big Data' } }
        ]
    },
    {
        id: 'infra-sec',
        icon: '🔒',
        color: 'from-red-500 to-orange-500',
        title: { en: 'Infrastructure & Security', tr: 'Altyapı ve Güvenlik', az: 'İnfrastruktur və Təhlükəsizlik' },
        desc: { en: 'Cyber Security, DevOps, Cloud', tr: 'Siber Güvenlik, DevOps, Bulut', az: 'Kiber Təhlükəsizlik, DevOps, Cloud' },
        subCategories: [
            { id: 'cyber-security', title: { en: 'Cyber Security', tr: 'Siber Güvenlik', az: 'Kiber Təhlükəsizlik' } },
            { id: 'network', title: { en: 'Network Engineering', tr: 'Ağ Mühendisliği', az: 'Şəbəkə Mühəndisliyi' } },
            { id: 'devops', title: { en: 'DevOps Engineering', tr: 'DevOps Mühendisliği', az: 'DevOps Mühəndisliyi' } },
            { id: 'cloud', title: { en: 'Cloud Computing', tr: 'Bulut Bilişim', az: 'Bulud Hesablamaları' } }
        ]
    },
    {
        id: 'game-dev',
        icon: '🎮',
        color: 'from-indigo-500 to-violet-500',
        title: { en: 'Game Development', tr: 'Oyun Geliştirme', az: 'Oyun İnkişafı' },
        desc: { en: 'Game Programming, Graphics', tr: 'Oyun Programlama, Grafikler', az: 'Oyun Proqramlaşdırma, Qrafika' },
        subCategories: [
            { id: 'game-programming', title: { en: 'Game Programming', tr: 'Oyun Programlama', az: 'Oyun Proqramlaşdırma' } },
            { id: 'graphics-programming', title: { en: 'Graphics Programming', tr: 'Grafik Programlama', az: 'Qrafik Proqramlaşdırma' } }
        ]
    },
    {
        id: 'embedded-iot',
        icon: '🔌',
        color: 'from-yellow-500 to-amber-500',
        title: { en: 'Embedded & IoT', tr: 'Gömülü Sistemler & IoT', az: 'Gömülü Sistemlər & IoT' },
        desc: { en: 'Microcontrollers, IoT', tr: 'Mikrodenetleyiciler, IoT', az: 'Mikrokontrollerlər, IoT' },
        subCategories: [
            { id: 'embedded', title: { en: 'Embedded Systems', tr: 'Gömülü Sistemler', az: 'Gömülü Sistemlər' } },
            { id: 'iot', title: { en: 'IoT', tr: 'Nesnelerin İnterneti (IoT)', az: 'Əşyaların İnterneti (IoT)' } }
        ]
    },
    {
        id: 'emerging',
        icon: '🔮',
        color: 'from-fuchsia-500 to-purple-500',
        title: { en: 'Emerging Tech', tr: 'Geleceğin Teknolojileri', az: 'Gələcək Texnologiyalar' },
        desc: { en: 'Blockchain, Web3, AR/VR', tr: 'Blockchain, Web3, AR/VR', az: 'Blockchain, Web3, AR/VR' },
        subCategories: [
            { id: 'blockchain', title: { en: 'Blockchain & Web3', tr: 'Blockchain & Web3', az: 'Blockchain & Web3' } },
            { id: 'ar-vr', title: { en: 'AR / VR', tr: 'Artırılmış & Sanal Gerçeklik', az: 'Artırılmış & Virtual Reallıq' } }
        ]
    },
    {
        id: 'qa-test',
        icon: '🧪',
        color: 'from-teal-500 to-emerald-500',
        title: { en: 'QA & Testing', tr: 'Kalite & Test', az: 'Keyfiyyət & Test' },
        desc: { en: 'Automation, Manual Testing', tr: 'Otomasyon, Manuel Test', az: 'Avtomatlaşdırma, Manuel Test' },
        subCategories: [
            { id: 'qa-automation', title: { en: 'QA Automation', tr: 'QA Otomasyon', az: 'QA Avtomatlaşdırma' } }
        ]
    }
];

// Initial Empty Data Structure
export const contentData = {};

// Fill Data Structure
categories.forEach(cat => {
    cat.subCategories.forEach(sub => {
        contentData[sub.id] = {
            roadmap: { en: [], tr: [], az: [] },
            resources: { items: [] },
            jobs: { TR: [], GLOBAL: [], AZ: [] },
            faq: { en: [], tr: [], az: [] }
        };
    });
});

// --- 🚀 DATA ENTRY AREA ---
// You can add your own data by copying the following templates.
// You can enter data for each ID (e.g., 'frontend', 'cyber-security').

contentData['android'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Giriş ve Kurulum", items: ["Android Studio Kurulumu", "JDK & SDK Yönetimi", "Emülatör (AVD) Ayarları"], status: "start" },
            { title: "Kotlin Dili (Modern Standart)", items: ["Değişkenler (val/var)", "Null Safety (!! ?)", "Data Classes", "Higher-Order Functions"], status: "start" },
            { title: "Modern UI: Jetpack Compose", items: ["Composable Functions", "State Management (Remember/State)", "Scaffold & Layouts", "Material Design 3"], status: "mid" },
            { title: "Legacy UI: XML (Eski Projeler)", items: ["View Binding", "ConstraintLayout", "RecyclerView & Adapters", "Activity/Fragment Lifecycle"], status: "mid" },
            { title: "Veri ve Ağ (Networking)", items: ["Retrofit (API İstekleri)", "Coroutines & Flow (Asenkron)", "Room Database (Yerel Veri)", "JSON Parsing (Gson/Moshi)"], status: "mid" },
            { title: "Mimari (Architecture)", items: ["MVVM (Model-View-ViewModel)", "Clean Architecture", "Dependency Injection (Hilt/Koin)", "Repository Pattern"], status: "advanced" },
            { title: "Arka Plan & Servisler", items: ["WorkManager (Zamanlı İşler)", "Broadcast Receivers", "Notifications", "Foreground Services"], status: "expert" },
            { title: "Yayınlama (Deployment)", items: ["Google Play Console", "App Bundles (.aab)", "Keystore & İmzalama", "Firebase Crashlytics"], status: "expert" }
        ],
        az: [
            { title: "Giriş və Quraşdırma", items: ["Android Studio Quraşdırılması", "JDK & SDK İdarəetməsi", "Emulyator (AVD) Tənzimləmələri"], status: "start" },
            { title: "Kotlin Dili (Müasir Standart)", items: ["Dəyişənlər (val/var)", "Null Safety", "Data Classes", "Higher-Order Functions"], status: "start" },
            { title: "Müasir UI: Jetpack Compose", items: ["Composable Functions", "State İdarəetməsi", "Scaffold & Layouts", "Material Design 3"], status: "mid" },
            { title: "Köhnə UI: XML (Eski Layihələr)", items: ["View Binding", "ConstraintLayout", "RecyclerView", "Həyat Dövrü (Lifecycle)"], status: "mid" },
            { title: "Məlumat və Şəbəkə", items: ["Retrofit (API İstəkləri)", "Coroutines & Flow", "Room Database", "JSON Parsing"], status: "mid" },
            { title: "Memarlıq (Architecture)", items: ["MVVM", "Clean Architecture", "Dependency Injection (Hilt)", "Repository Pattern"], status: "advanced" },
            { title: "Arxa Plan & Servislər", items: ["WorkManager", "Broadcast Receivers", "Bildirişlər", "Foreground Services"], status: "expert" },
            { title: "Yayımlama", items: ["Google Play Console", "App Bundles (.aab)", "İmzalama (Signing)", "Firebase Crashlytics"], status: "expert" }
        ],
        en: [
            { title: "Intro & Setup", items: ["Android Studio Setup", "JDK & SDK Manager", "Emulator (AVD) Config"], status: "start" },
            { title: "Kotlin Language", items: ["Variables (val/var)", "Null Safety", "Data Classes", "Higher-Order Functions"], status: "start" },
            { title: "Modern UI: Jetpack Compose", items: ["Composable Functions", "State Hoisting", "Scaffold & Modifiers", "Material Design 3"], status: "mid" },
            { title: "Legacy UI: XML", items: ["View Binding", "ConstraintLayout", "RecyclerView & Adapters", "Activity/Fragment Lifecycle"], status: "mid" },
            { title: "Data & Networking", items: ["Retrofit (REST API)", "Coroutines & Flow", "Room Database (SQL)", "Serialization (Moshi)"], status: "mid" },
            { title: "Architecture", items: ["MVVM Pattern", "Clean Architecture", "Dependency Injection (Hilt)", "Repository Pattern"], status: "advanced" },
            { title: "Background Tasks", items: ["WorkManager", "Broadcast Receivers", "Push Notifications", "Services"], status: "expert" },
            { title: "Deployment", items: ["Google Play Console", "App Bundles (.aab)", "Signing & Keystore", "CI/CD (Bitrise/GitHub)"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // YouTube & Education
            { type: 'course', title: 'Android Basics with Compose', url: 'https://developer.android.com/courses/android-basics-compose/course', desc: 'Google\'ın kendi hazırladığı, sertifikalı ve ücretsiz efsanevi başlangıç kursu.', lang: 'en' },
            { type: 'youtube', title: 'Philipp Lackner', url: 'https://youtube.com/@PhilippLackner', desc: 'Modern Android (Kotlin/Compose) üzerine dünyadaki en iyi ve en güncel kanal.', lang: 'en' },
            { type: 'youtube', title: 'Stevdza-San', url: 'https://youtube.com/@StevdzaSan', desc: 'Görsel ağırlıklı, hızlı ve pratik Android dersleri.', lang: 'en' },
            { type: 'course', title: 'Atıl Samancıoğlu', url: 'https://www.udemy.com/user/atilsamancioglu/', desc: 'Udemy\'de Türkçe Android eğitimi denince akla gelen ilk isim.', lang: 'tr' },

            // Documentation & Tools
            { type: 'doc', title: 'Android Developer Docs', url: 'https://developer.android.com/docs', desc: 'Android\'in resmi kutsal kitabı. Her şey burada.', lang: 'en' },
            { type: 'tool', title: 'Android Studio', url: 'https://developer.android.com/studio', desc: 'Android geliştirmek için Google\'ın resmi IDE\'si.', lang: 'global' },
            { type: 'tool', title: 'Kotlin Playground', url: 'https://play.kotlinlang.org', desc: 'Android Studio kurmadan tarayıcıda Kotlin kodu yazıp test edin.', lang: 'global' },
            { type: 'tool', title: 'Firebase', url: 'https://firebase.google.com', desc: 'Backend yazmadan Auth, Veritabanı ve Bildirim işlemleri için Google servisi.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/android', desc: 'Android geliştirici yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Armut", "Teknokent İlanları"],
            top_skills: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Git"],
            avg_salary: "Junior: 35k-50k TL | Mid: 65k-100k TL | Senior: 130k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankacılık & Telecom"],
            top_skills: ["Kotlin", "Java (Legacy)", "Android SDK", "REST API"],
            avg_salary: "Junior: 800-1200 AZN | Mid: 1800-3000 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "Android Jobs", "RemoteOK", "Upwork"],
            top_skills: ["Kotlin Multiplatform", "CI/CD", "Unit Testing", "Hilt"],
            avg_salary: "Junior: $4k-$6k | Mid: $8k-$12k | Senior: $14k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Java mı yoksa Kotlin mi öğrenmeliyim?",
                az: "Java yoxsa Kotlin öyrənməliyəm?",
                en: "Should I learn Java or Kotlin?"
            },
            a: {
                tr: "Kesinlikle Kotlin. Google 2019'da Kotlin'i resmi dil ilan etti. Modern işlerin %95'i Kotlin ile yapılıyor. Java sadece çok eski projelerin bakımı için gereklidir.",
                az: "Mütləq Kotlin. Google 2019-da Kotlin-i rəsmi dil elan etdi. Müasir işlərin 95%-i Kotlin ilə görülür. Java yalnız çox köhnə layihələrin baxımı üçün lazımdır.",
                en: "Definitely Kotlin. Google announced it as the preferred language in 2019. 95% of modern jobs require Kotlin. Java is only needed for maintaining legacy code."
            }
        },
        {
            id: 2,
            q: {
                tr: "Bilgisayarım Android Studio'yu kaldırır mı?",
                az: "Kompüterim Android Studio-nu açar?",
                en: "Can my computer run Android Studio?"
            },
            a: {
                tr: "Android Studio bir RAM canavarıdır. Rahat çalışmak için en az 16GB RAM önerilir. 8GB ile çalışır ama emülatör açınca çok kasar. SSD disk zorunludur.",
                az: "Android Studio bir RAM canavarıdır. Rahat işləmək üçün ən azı 16GB RAM tövsiyə olunur. 8GB ilə işləyir, amma emulyator açanda çox donur. SSD disk məcburidir.",
                en: "Android Studio is a RAM monster. Minimum 16GB RAM is recommended for smooth work. 8GB works but lags heavily with the emulator. SSD is mandatory."
            }
        },
        {
            id: 3,
            q: {
                tr: "XML mi yoksa Jetpack Compose mu?",
                az: "XML yoxsa Jetpack Compose?",
                en: "XML or Jetpack Compose?"
            },
            a: {
                tr: "Yolun başındaysanız Jetpack Compose. Bu geleceğin teknolojisidir (Flutter/SwiftUI benzeri). Ancak iş ilanlarında hala XML (eski yapı) bilgisi de istenmektedir.",
                az: "Yolun başındasınızsa Jetpack Compose. Bu gələcəyin texnologiyasıdır. Lakin iş elanlarında hələ də XML (köhnə struktur) biliyi tələb olunur.",
                en: "If you are starting fresh, Jetpack Compose. It is the future. However, XML knowledge is still required in many job postings for legacy codebases."
            }
        },
        {
            id: 4,
            q: {
                tr: "Uygulamayı mağazaya yüklemek ne kadar?",
                az: "Tətbiqi mağazaya yükləmək neçəyədir?",
                en: "How much does it cost to publish an app?"
            },
            a: {
                tr: "Google Play Store için tek seferlik 25$ ödersiniz ve ömür boyu geliştirici hesabınız olur. (Apple'da bu her yıl 99$'dır).",
                az: "Google Play Store üçün birdəfəlik 25$ ödəyirsiniz və ömürlük tərtibatçı hesabınız olur. (Apple-da bu hər il 99$-dır).",
                en: "You pay a one-time fee of $25 for a Google Play Developer account, valid for a lifetime. (Unlike Apple's $99/year)."
            }
        },
        {
            id: 5,
            q: {
                tr: "Sadece Android öğrensem iş bulabilir miyim?",
                az: "Sadəcə Android öyrənsəm iş tapa bilərəm?",
                en: "Can I find a job knowing only Android?"
            },
            a: {
                tr: "Evet. Özellikle Türkiye ve Azerbaycan gibi ülkelerde Android cihaz kullanımı iOS'tan çok daha fazladır (Pazar payı %70+). Bu da yerel pazarda çok fazla iş imkanı demektir.",
                az: "Bəli. Xüsusilə Türkiyə və Azərbaycan kimi ölkələrdə Android cihaz istifadəsi iOS-dan daha çoxdur. Bu da yerli bazarda çoxlu iş imkanı deməkdir.",
                en: "Yes. Especially in regions like TR/AZ, Android market share is huge (70%+). This means plenty of job opportunities in the local market."
            }
        },
        {
            id: 6,
            q: {
                tr: "Kotlin Multiplatform (KMP) nedir?",
                az: "Kotlin Multiplatform (KMP) nədir?",
                en: "What is Kotlin Multiplatform (KMP)?"
            },
            a: {
                tr: "KMP, Kotlin ile yazdığınız kodun (iş mantığının) hem Android hem iOS'ta çalışmasını sağlayan yeni bir teknolojidir. Geleceği çok parlaktır, ileri seviyede öğrenilmelidir.",
                az: "KMP, Kotlin ilə yazdığınız kodun həm Android, həm də iOS-da işləməsini təmin edən yeni texnologiyadır. Gələcəyi çox parlaqdır.",
                en: "KMP allows sharing Kotlin code (business logic) between Android and iOS. It has a very bright future and should be learned at an advanced level."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "Kotlin'de 'Null Safety' nasıl çalışır?",
            az: "Kotlin-də 'Null Safety' necə işləyir?",
            en: "How does Null Safety work in Kotlin?"
        },
        a: {
            tr: "Değişkenler varsayılan olarak null olamaz. Null olabilecek değişkenler '?' ile tanımlanır. Bu, NullPointerException (NPE) hatalarını derleme zamanında önler.",
            az: "Dəyişənlər susmaya görə null ola bilməz. Null ola biləcək dəyişənlər '?' ilə təyin edilir. Bu, NullPointerException (NPE) xətalarının qarşısını hələ kod yazılarkən alır.",
            en: "Variables are non-nullable by default. Nullable variables are defined with '?'. This prevents NullPointerException at compile time."
        }
    },
    {
        id: 2,
        q: {
            tr: "Activity Yaşam Döngüsü (Lifecycle) aşamaları nelerdir?",
            az: "Activity Yaşam Döngüsü (Lifecycle) mərhələləri nələrdir?",
            en: "What are the Activity Lifecycle stages?"
        },
        a: {
            tr: "onCreate, onStart, onResume, onPause, onStop, onDestroy ve onRestart.",
            az: "onCreate, onStart, onResume, onPause, onStop, onDestroy və onRestart.",
            en: "The stages are: onCreate, onStart, onResume, onPause, onStop, onDestroy, and onRestart."
        }
    },
    {
        id: 3,
        q: {
            tr: "Fragment nedir ve neden kullanılır?",
            az: "Fragment nədir və nə üçün istifadə olunur?",
            en: "What is a Fragment and why use it?"
        },
        a: {
            tr: "Activity içinde çalışan modüler bir kullanıcı arayüzü parçasıdır. Yeniden kullanılabilir ekran bölümleri oluşturmayı sağlar.",
            az: "Activity daxilində çalışan modulyar istifadəçi interfeysi hissəsidir. Təkrar istifadə edilə bilən ekran bölmələri yaratmağa imkan verir.",
            en: "A modular portion of a user interface within an activity. It enables reusable UI components and multi-pane layouts."
        }
    },
    {
        id: 4,
        q: {
            tr: "ViewModel'in amacı nedir?",
            az: "ViewModel-in məqsədi nədir?",
            en: "What is the purpose of ViewModel?"
        },
        a: {
            tr: "UI ile ilgili verileri saklamak ve yönetmek için kullanılır. Ekran döndürme gibi yapılandırma değişikliklerinde verilerin kaybolmasını önler.",
            az: "UI ilə bağlı məlumatları saxlamaq və idarə etmək üçün istifadə olunur. Ekranın döndərilməsi kimi hallarda məlumatların itməsinin qarşısını alır.",
            en: "Designed to store and manage UI-related data in a lifecycle-conscious way, allowing data to survive configuration changes like screen rotations."
        }
    },
    {
        id: 5,
        q: {
            tr: "Coroutines nedir?",
            az: "Coroutines nədir?",
            en: "What are Coroutines?"
        },
        a: {
            tr: "Asenkron işlemleri (ağ istekleri, veritabanı) basitleştiren, ana iş parçacığını (Main Thread) bloklamadan çalışan hafif iş parçacıklarıdır.",
            az: "Asinxron əməliyyatları (şəbəkə sorğuları, verilənlər bazası) sadələşdirən, ana thread-i bloklamadan çalışan yüngül iş parçacıqlarıdır.",
            en: "Lightweight threads for asynchronous programming that simplify long-running tasks without blocking the main thread."
        }
    },
    {
        id: 6,
        q: {
            tr: "Jetpack Compose ve XML farkı nedir?",
            az: "Jetpack Compose və XML fərqi nədir?",
            en: "Jetpack Compose vs XML?"
        },
        a: {
            tr: "XML imperatiftir (View hiyerarşisi). Jetpack Compose ise modern, deklaratif bir UI kütüphanesidir; arayüz kodla tanımlanır ve durum (state) değiştikçe güncellenir.",
            az: "XML imperativdir. Jetpack Compose isə müasir, deklarativ UI kitabxanasıdır; interfeys kodla təsvir edilir və vəziyyət (state) dəyişdikcə yenilənir.",
            en: "XML is an imperative UI approach. Jetpack Compose is a modern declarative toolkit that builds UI by calling composable functions."
        }
    },
    {
        id: 7,
        q: {
            tr: "LiveData ve StateFlow farkı nedir?",
            az: "LiveData və StateFlow fərqi nədir?",
            en: "Difference between LiveData and StateFlow?"
        },
        a: {
            tr: "LiveData yaşam döngüsüne duyarlıdır (Lifecycle-aware). StateFlow ise Kotlin Flow tabanlıdır, varsayılan değer gerektirir ve daha geniş operatör desteğine sahiptir.",
            az: "LiveData lifecycle-a duyarlıdır. StateFlow isə Kotlin Flow əsaslıdır, başlanğıc dəyər tələb edir və daha geniş operator dəstəyinə malikdir.",
            en: "LiveData is lifecycle-aware but Android-bound. StateFlow is a pure Kotlin Flow that requires an initial state and offers better operators."
        }
    },
    {
        id: 8,
        q: {
            tr: "Dependency Injection (Hilt/Dagger) neden gereklidir?",
            az: "Dependency Injection (Hilt/Dagger) niyə lazımdır?",
            en: "Why is Dependency Injection necessary?"
        },
        a: {
            tr: "Sınıflar arasındaki bağımlılığı azaltır (Loose coupling). Kodun test edilebilirliğini ve bakımını kolaylaştırır.",
            az: "Klaslar arasındakı asılılığı azaldır. Kodun test edilməsini və idarə olunmasını asanlaşdırır.",
            en: "It promotes loose coupling, improves code reusability, and makes unit testing much easier by injecting mock dependencies."
        }
    },
    {
        id: 9,
        q: {
            tr: "Intent nedir ve türleri nelerdir?",
            az: "Intent nədir və növləri hansılardır?",
            en: "What is an Intent and its types?"
        },
        a: {
            tr: "Bileşenler arası iletişimi sağlar. Explicit (Açık): Hedef bileşen bellidir. Implicit (Kapalı): Eylem belirtilir, sistem uygun uygulamayı bulur.",
            az: "Komponentlər arası əlaqəni təmin edir. Explicit (Açıq): Hədəf bəllidir. Implicit (Qapalı): Tapşırıq qeyd edilir, sistem uyğun tətbiqi tapır.",
            en: "An abstract description of an operation to be performed. Explicit targets a specific component; Implicit asks the system to find an app for an action."
        }
    },
    {
        id: 10,
        q: {
            tr: "Room Database nedir?",
            az: "Room Database nədir?",
            en: "What is Room Database?"
        },
        a: {
            tr: "SQLite üzerinde bir soyutlama katmanıdır. Daha güvenli, kolay ve performanslı bir veritabanı yönetimi sağlar.",
            az: "SQLite üzərində bir təbəqədir. Daha təhlükəsiz, asan və performanslı bir verilənlər bazası idarəetməsini təmin edir.",
            en: "A persistence library that provides an abstraction layer over SQLite to allow fluent database access while harnessing the full power of SQLite."
        }
    },
    {
        id: 11,
        q: {
            tr: "WorkManager ne zaman kullanılır?",
            az: "WorkManager nə vaxt istifadə olunur?",
            en: "When to use WorkManager?"
        },
        a: {
            tr: "Uygulama kapalı olsa bile mutlaka çalışması gereken (deferrable) arka plan görevleri için kullanılır (Örn: Veri senkronizasyonu).",
            az: "Tətbiq bağlı olsa belə mütləq yerinə yetirilməli olan arxa plan tapşırıqları üçün istifadə olunur (Məs: Məlumat sinxronizasiyası).",
            en: "For background tasks that need to run reliably even if the app exits or the device restarts, such as syncing data or uploading logs."
        }
    },
    {
        id: 12,
        q: {
            tr: "Service nedir?",
            az: "Service nədir?",
            en: "What is a Service?"
        },
        a: {
            tr: "Kullanıcı arayüzü olmayan, arka planda uzun süren işlemler yapmak için kullanılan bileşendir (Örn: Müzik çalma).",
            az: "İstifadəçi interfeysi olmayan, arxa planda uzun müddətli işləri görmək üçün istifadə olunan komponentdir (Məs: Musiqi oxutmaq).",
            en: "An application component that can perform long-running operations in the background without a user interface."
        }
    },
    {
        id: 13,
        q: {
            tr: "Retrofit nedir?",
            az: "Retrofit nədir?",
            en: "What is Retrofit?"
        },
        a: {
            tr: "Android için popüler bir HTTP istemcisidir. REST API isteklerini kolayca Java/Kotlin arayüzlerine dönüştürür.",
            az: "Android üçün məşhur bir HTTP müştərisidir. REST API sorğularını asanlıqla Java/Kotlin interfeyslərinə çevirir.",
            en: "A type-safe HTTP client for Android and Java, used to communicate with web services and handle API requests easily."
        }
    },
    {
        id: 14,
        q: {
            tr: "ViewBinding ve DataBinding farkı nedir?",
            az: "ViewBinding və DataBinding fərqi nədir?",
            en: "Difference between ViewBinding and DataBinding?"
        },
        a: {
            tr: "ViewBinding sadece görünümlere erişim sağlar. DataBinding ise XML içinde mantıksal işlemler ve veri bağlama yapılmasına izin verir.",
            az: "ViewBinding yalnız vizual elementlərə müraciət üçün istifadə olunur. DataBinding isə XML daxilində məntiqi əməliyyatlar və data bağlamağa imkan verir.",
            en: "ViewBinding is only for replacing findViewById. DataBinding allows binding data directly to UI components inside XML files."
        }
    },
    {
        id: 15,
        q: {
            tr: "Lazy Column nedir (Compose)?",
            az: "Lazy Column nədir (Compose)?",
            en: "What is a Lazy Column in Compose?"
        },
        a: {
            tr: "UIKit'teki UITableView veya Android XML'deki RecyclerView gibidir. Sadece ekranda görünen öğeleri oluşturur, performansı artırır.",
            az: "XML-dəki RecyclerView kimidir. Yalnız ekranda görünən elementləri yaradır və yaddaşa qənaət edir.",
            en: "A vertically scrolling list that only composes and lays out the items that are currently visible on the screen, similar to RecyclerView."
        }
    },
    {
        id: 16,
        q: {
            tr: "Companion Object nedir?",
            az: "Companion Object nədir?",
            en: "What is a Companion Object?"
        },
        a: {
            tr: "Bir sınıfın örneğini (instance) oluşturmadan, içindeki metodlara veya değişkenlere erişmemizi sağlayan yapıdır (Static benzeri).",
            az: "Bir klasın nüsxəsini yaratmadan, daxilindəki metodlara və ya dəyişənlərə müraciət etməyə imkan verən strukturdur (Static-ə bənzəyir).",
            en: "An object tied to a class that allows accessing its members without instantiating the class, similar to static members in Java."
        }
    },
    {
        id: 17,
        q: {
            tr: "Android'de 'Context' nedir?",
            az: "Android-də 'Context' nədir?",
            en: "What is Context in Android?"
        },
        a: {
            tr: "Uygulamanın o anki durumuna erişim sağlayan, kaynaklara (resources) ve sistem servislerine ulaşmamıza yarayan köprüdür.",
            az: "Tətbiqin cari vəziyyətinə müraciət etməyi təmin edən, resurslara və sistem xidmətlərinə çatmağa yarayan körpüdür.",
            en: "An interface to global information about an application environment; used to access resources, databases, and system-level services."
        }
    },
    {
        id: 18,
        q: {
            tr: "Proguard/R8 nedir?",
            az: "Proguard/R8 nədir?",
            en: "What is Proguard/R8?"
        },
        a: {
            tr: "Kodu küçültmek, optimize etmek ve karıştırmak (obfuscation) için kullanılır. Uygulama boyutunu azaltır ve tersine mühendisliği zorlaştırır.",
            az: "Kodu kiçiltmək, optimallaşdırmaq və qarışdırmaq (obfuscation) üçün istifadə olunur. Tətbiq ölçüsünü azaldır və kodun oğurlanmasını çətinləşdirir.",
            en: "Tools that shrink, optimize, and obfuscate your code to reduce app size and make reverse engineering more difficult."
        }
    },
    {
        id: 19,
        q: {
            tr: "Clean Architecture katmanları nelerdir?",
            az: "Clean Architecture təbəqələri nələrdir?",
            en: "What are Clean Architecture layers?"
        },
        a: {
            tr: "Genellikle 3 katmandır: Presentation (UI), Domain (Business Logic/UseCases) ve Data (Repositories/API/DB).",
            az: "Adətən 3 təbəqədən ibarətdir: Presentation (UI), Domain (Biznes məntiqi) və Data (API və verilənlər bazası).",
            en: "Typically divided into: Presentation (UI), Domain (Business Logic), and Data (Data sources like API and DB)."
        }
    },
    {
        id: 20,
        q: {
            tr: "Sealed Class nedir?",
            az: "Sealed Class nədir?",
            en: "What is a Sealed Class?"
        },
        a: {
            tr: "Kısıtlı bir sınıf hiyerarşisi tanımlar. Enum'a benzer ama her alt sınıfın farklı parametreleri ve durumu olabilir. 'When' ile kullanımı güvenlidir.",
            az: "Məhdud bir klas iyerarxiyası yaradır. Enum-a bənzəyir, lakin hər alt klasın fərqli parametrləri ola bilər. 'When' bloku ilə istifadəsi çox əlverişlidir.",
            en: "Used to represent restricted class hierarchies. Each subclass can have its own properties, making it more powerful than Enums for handling states."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { tr: "Akıllı Not Defteri", az: "Ağıllı Qeyd Dəftəri", en: "Smart Note-Taking App" },
        desc: { tr: "Kullanıcıların notlarını kategorize edip yerel olarak saklayabildiği bir uygulama.", az: "İstifadəçilərin qeydlərini kateqoriyalara ayırıb lokal yadda saxladığı tətbiq.", en: "An app where users can categorize and store notes locally." },
        tech: ["Kotlin", "Jetpack Compose", "Room Database", "ViewModel"],
        features: { tr: ["CRUD işlemleri", "Arama filtresi", "SQLite ile yerel depolama"], az: ["CRUD əməliyyatları", "Axtarış filtri", "SQLite ilə lokal yaddaş"], en: ["CRUD operations", "Search filter", "Local storage with SQLite"] }
    },
    {
        id: 2,
        level: "mid",
        title: { tr: "Film & Dizi Keşif Platformu", az: "Film və Serial Platforması", en: "Movie Discovery App" },
        desc: { tr: "Popüler filmleri listeleyen ve detaylı bilgi sunan bir medya uygulaması.", az: "Populyar filmləri sıralayan və ətraflı məlumat təqdim edən media tətbiqi.", en: "A media app listing popular movies and providing detailed information." },
        tech: ["Retrofit", "Hilt/Koin (DI)", "Paging 3", "Coroutines & Flow"],
        features: { tr: ["TMDB API entegrasyonu", "Sonsuz kaydırma", "Favorilere ekleme (Offline mod)"], az: ["TMDB API inteqrasiyası", "Sonsuz sürüşdürmə", "Favorilərə əlavə etmə"], en: ["TMDB API integration", "Infinite scrolling", "Offline caching"] }
    },
    {
        id: 3,
        level: "expert",
        title: { tr: "Kripto Cüzdan Takibi & Widget", az: "Kripto Pul Qabı İzləyicisi", en: "Crypto Wallet Tracker" },
        desc: { tr: "Canlı fiyat takibi yapan ve ana ekran widget desteği sunan kompleks uygulama.", az: "Canlı qiymət izləyən və ana ekran vidcet dəstəyi olan kompleks tətbiq.", en: "Complex app with live price tracking and home screen widget support." },
        tech: ["WebSockets", "WorkManager", "Jetpack Glance", "Clean Architecture"],
        features: { tr: ["Anlık fiyat güncellemeleri", "Arka plan servisleri", "Ana ekran widget'ı"], az: ["Anlıq qiymət yeniləmələri", "Arxa plan servisləri", "Ana ekran vidceti"], en: ["Real-time price updates", "Background workers", "Home screen widgets"] }
    }
]
};


contentData['devops'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Temeller (Ön Koşul)", items: ["Linux Terminal (Bash)", "Ağ Bilgisi (DNS, HTTP, OSI)", "Git & Versiyon Kontrol", "Vim/Nano Editörleri"], status: "start" },
            { title: "Programlama Dili", items: ["Python (Scripting için)", "Go (Golang - Cloud Native araçlar için)", "Bash Scripting"], status: "start" },
            { title: "Sunucu Yönetimi", items: ["Linux Yönetimi (Ubuntu/RHEL)", "Web Sunucuları (Nginx/Apache)", "SSH Güvenliği", "Cron Jobs"], status: "mid" },
            { title: "Konteynerleşme", items: ["Docker Temelleri", "Dockerfile Yazımı", "Docker Compose", "Container Registry"], status: "mid" },
            { title: "Orkestrasyon", items: ["Kubernetes (K8s) Mimarisi", "Pod/Service/Ingress", "Helm Charts", "Cluster Yönetimi"], status: "advanced" },
            { title: "CI/CD (Sürekli Entegrasyon)", items: ["Jenkins (Klasik)", "GitHub Actions / GitLab CI (Modern)", "Pipeline Yazımı", "Otomatik Testler"], status: "advanced" },
            { title: "IaC (Kod Olarak Altyapı)", items: ["Terraform (Provisioning)", "Ansible (Configuration)", "Infrastructure State Yönetimi"], status: "expert" },
            { title: "Bulut & İzleme", items: ["AWS / Azure / GCP", "Prometheus & Grafana", "ELK Stack (Loglama)", "Cloud Security"], status: "expert" }
        ],
        az: [
            { title: "Təməllər (Mütləq)", items: ["Linux Terminal (Bash)", "Şəbəkə Biliyi (DNS, OSI)", "Git & Versiya Nəzarəti", "Vim/Nano"], status: "start" },
            { title: "Proqramlaşdırma Dili", items: ["Python (Skriptlər üçün)", "Go (Golang)", "Bash Scripting"], status: "start" },
            { title: "Server İdarəetməsi", items: ["Linux İdarəçiliyi", "Veb Serverlər (Nginx)", "SSH Təhlükəsizliyi", "Cron İşləri"], status: "mid" },
            { title: "Konteynerləşdirmə", items: ["Docker Əsasları", "Dockerfile Yazımı", "Docker Compose", "Container Registry"], status: "mid" },
            { title: "Orkestrasiya", items: ["Kubernetes (K8s)", "Pod/Service/Ingress", "Helm Charts", "Klaster İdarəetməsi"], status: "advanced" },
            { title: "CI/CD (Davamlı İnteqrasiya)", items: ["Jenkins", "GitHub Actions / GitLab CI", "Pipeline Yazımı", "Avtomatik Testlər"], status: "advanced" },
            { title: "IaC (İnfrastruktur Kodu)", items: ["Terraform", "Ansible", "İnfrastruktur Vəziyyəti"], status: "expert" },
            { title: "Bulud & İzləmə", items: ["AWS / Azure / GCP", "Prometheus & Grafana", "ELK Stack (Loglar)", "Bulud Təhlükəsizliyi"], status: "expert" }
        ],
        en: [
            { title: "Prerequisites", items: ["Linux Terminal (Bash)", "Networking (DNS, OSI, HTTP)", "Git & Version Control", "Vim/Nano"], status: "start" },
            { title: "Programming Language", items: ["Python (For Scripting)", "Go (Golang - Cloud Native)", "Bash Scripting"], status: "start" },
            { title: "Server Management", items: ["Linux Admin (Ubuntu/RHEL)", "Web Servers (Nginx)", "SSH Security", "Cron Jobs"], status: "mid" },
            { title: "Containerization", items: ["Docker Basics", "Writing Dockerfiles", "Docker Compose", "Container Registry"], status: "mid" },
            { title: "Orchestration", items: ["Kubernetes (K8s) Architecture", "Pod/Service/Ingress", "Helm Charts", "Cluster Ops"], status: "advanced" },
            { title: "CI/CD Pipelines", items: ["Jenkins (Legacy)", "GitHub Actions / GitLab CI", "Pipeline Syntax", "Automated Testing"], status: "advanced" },
            { title: "IaC (Infrastructure as Code)", items: ["Terraform (Provisioning)", "Ansible (Config Mgmt)", "State Management"], status: "expert" },
            { title: "Cloud & Monitoring", items: ["AWS / Azure / GCP", "Prometheus & Grafana", "ELK Stack (Logging)", "DevSecOps"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'TechWorld with Nana', url: 'https://youtube.com/@TechWorldwithNana', desc: 'Dünyanın en iyi DevOps anlatıcısı. Docker, K8s, Jenkins için 1 numara.', lang: 'en' },
            { type: 'youtube', title: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck', desc: 'Ağ, Linux ve Cloud konularını çok enerjik ve basit anlatan kanal.', lang: 'en' },
            { type: 'youtube', title: 'Jeff Geerling', url: 'https://youtube.com/@JeffGeerling', desc: 'Ansible ve Raspberry Pi/Server yönetimi üzerine efsanevi içerikler.', lang: 'en' },
            { type: 'youtube', title: 'DevOps Toolkit', url: 'https://youtube.com/@DevOpsToolkit', desc: 'Modern DevOps araçlarını (ArgoCD, K8s) inceleyen ileri seviye kanal.', lang: 'en' },

            // Documentation & Books
            { type: 'doc', title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/', desc: 'K8s öğrenmek için en doğru ve güncel kaynak.', lang: 'global' },
            { type: 'doc', title: 'The Phoenix Project', url: 'https://itrevolution.com/book/the-phoenix-project/', desc: 'DevOps kültürünü ve mantığını anlatan, roman tadında efsanevi bir kitap.', lang: 'en' },
            { type: 'doc', title: 'Google SRE Book', url: 'https://sre.google/books/', desc: 'Google\'ın sistemleri nasıl ayakta tuttuğunu anlatan ücretsiz başyapıt.', lang: 'en' },

            // Tools
            { type: 'tool', title: 'Killer.sh', url: 'https://killer.sh', desc: 'CKA (Kubernetes) sertifikası sınav simülatörü. Zor ama öğretici.', lang: 'en' },
            { type: 'tool', title: 'Terraform Registry', url: 'https://registry.terraform.io', desc: 'Hazır altyapı kodları bulabileceğiniz kütüphane.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (DevOps)', url: 'https://roadmap.sh/devops', desc: 'DevOps uzmanlığı için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "DevOps Türkiye (Discord/Slack)"],
            top_skills: ["Kubernetes", "Docker", "AWS", "Terraform", "Jenkins"],
            avg_salary: "Junior: 45k-65k TL | Mid: 85k-130k TL | Senior: 180k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankalar & Telecom (Azercell/Bakcell)"],
            top_skills: ["Linux", "Docker", "CI/CD", "Bash Scripting", "Monitoring"],
            avg_salary: "Junior: 1200-1800 AZN | Mid: 2500-4000 AZN | Senior: 6000+ AZN"
        },
        GLOBAL: {
            platforms: ["We Work Remotely", "RemoteOK", "Hired", "Toptal"],
            top_skills: ["AWS Solutions Architect", "CKA (K8s Certified)", "Terraform", "Python"],
            avg_salary: "Junior: $6k-$9k | Mid: $10k-$15k | Senior: $20k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Yazılım bilmek zorunda mıyım?",
                az: "Proqramlaşdırma bilmək məcburiyyətindəyəm?",
                en: "Do I have to know coding?"
            },
            a: {
                tr: "Bir yazılımcı kadar derinlemesine değil ama otomasyon yapacak kadar 'Scripting' (Python, Bash, Go) bilmek zorundasınız. Kod okuyamayan bir DevOps mühendisi kör gibidir.",
                az: "Bir proqramçı qədər dərin yox, amma avtomatlaşdırma edəcək qədər 'Scripting' (Python, Bash) bilmək məcburiyyətindəsiniz. Kod oxuya bilməyən DevOps mühəndisi kor kimidir.",
                en: "Not as deep as a developer, but you must know 'Scripting' (Python, Bash, Go) for automation. A DevOps engineer who can't read code is flying blind."
            }
        },
        {
            id: 2,
            q: {
                tr: "Doğrudan DevOps olarak başlayabilir miyim?",
                az: "Birbaşa DevOps kimi başlaya bilərəm?",
                en: "Can I start directly as DevOps?"
            },
            a: {
                tr: "Zordur. Genellikle 'Junior DevOps' ilanları azdır. Çoğu kişi önce Sistem Yöneticisi (SysAdmin) veya Backend Developer olarak başlar, sonra DevOps'a evrilir.",
                az: "Çətindir. Adətən 'Junior DevOps' elanları azdır. Çox adam əvvəlcə Sistem İdarəçisi (SysAdmin) və ya Backend Developer kimi başlayır, sonra DevOps-a keçir.",
                en: "It's hard. 'Junior DevOps' roles are rare. Most people start as SysAdmins or Backend Developers and then evolve into DevOps."
            }
        },
        {
            id: 3,
            q: {
                tr: "CI/CD nedir?",
                az: "CI/CD nədir?",
                en: "What is CI/CD?"
            },
            a: {
                tr: "CI (Continuous Integration): Yazılımcıların kodunun sürekli birleşip test edilmesi. CD (Continuous Deployment): Testten geçen kodun otomatik olarak sunucuya yüklenmesi.",
                az: "CI: Proqramçıların kodunun davamlı birləşib test edilməsi. CD: Testdən keçən kodun avtomatik olaraq serverə yüklənməsi.",
                en: "CI (Continuous Integration): Merging and testing code frequently. CD (Continuous Deployment): Automatically deploying the tested code to servers."
            }
        },
        {
            id: 4,
            q: {
                tr: "Hangi Bulut (Cloud) sağlayıcısını öğrenmeliyim?",
                az: "Hansı Bulud (Cloud) provayderini öyrənməliyəm?",
                en: "Which Cloud provider should I learn?"
            },
            a: {
                tr: "Pazar payı en yüksek olan AWS (Amazon Web Services) ile başlayın. AWS bilen biri Azure veya Google Cloud'u (GCP) çok hızlı öğrenir.",
                az: "Bazar payı ən yüksək olan AWS (Amazon Web Services) ilə başlayın. AWS bilən biri Azure və ya Google Cloud-u (GCP) çox tez öyrənir.",
                en: "Start with AWS (Amazon Web Services) as it has the largest market share. Once you know AWS, learning Azure or GCP is easy."
            }
        },
        {
            id: 5,
            q: {
                tr: "Sertifika önemli mi? (AWS, CKA)",
                az: "Sertifikat vacibdirmi? (AWS, CKA)",
                en: "Are certifications important? (AWS, CKA)"
            },
            a: {
                tr: "Evet! Özellikle DevOps alanında sertifikalar (CKA - Kubernetes Admin, AWS Solutions Architect) bilginizi kanıtlar ve maaşınızı doğrudan artırır.",
                az: "Bəli! Xüsusilə DevOps sahəsində sertifikatlar (CKA, AWS) biliyinizi sübut edir və maaşınızı birbaşa artırır.",
                en: "Yes! Especially in DevOps, certifications (CKA, AWS Solutions Architect) validate your skills and directly increase your salary."
            }
        },
        {
            id: 6,
            q: {
                tr: "Kubernetes gerçekten o kadar zor mu? ",
                az: "Kubernetes həqiqətən o qədər çətindir?",
                en: "Is Kubernetes really that hard?"
            },
            a: {
                tr: "Evet, öğrenme eğrisi diktir. Çok fazla hareketli parça (Pods, Nodes, Ingress, Services) vardır. Ama bir kere mantığını kavradığınızda sektörün en güçlü silahına sahip olursunuz.",
                az: "Bəli, öyrənmə əyrisi dikdir. Çoxlu hərəkətli hissə var. Amma bir dəfə məntiqi anlayanda sektorun ən güclü silahına sahib olursunuz.",
                en: "Yes, the learning curve is steep. It has many moving parts. But once you grasp the logic, you possess the industry's most powerful tool."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "DevOps nedir?",
            az: "DevOps nədir?",
            en: "What is DevOps?"
        },
        a: {
            tr: "Yazılım geliştirme (Dev) ve sistem operasyonları (Ops) arasındaki engelleri kaldıran, otomasyon ve sürekli iyileştirmeyi hedefleyen bir kültür ve pratikler bütünüdür.",
            az: "Proqram təminatının hazırlanması (Dev) və sistem əməliyyatları (Ops) arasındakı maneələri aradan qaldıran, avtomatlaşdırma və davamlı təkmilləşdirməni hədəfləyən bir mədəniyyətdir.",
            en: "A set of practices and a culture that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide high quality."
        }
    },
    {
        id: 2,
        q: {
            tr: "CI/CD Pipeline bileşenleri nelerdir?",
            az: "CI/CD Pipeline-ın komponentləri hansılardır?",
            en: "What are the components of a CI/CD Pipeline?"
        },
        a: {
            tr: "Source (Kod), Build (Derleme), Test (Otomatik testler) ve Deploy (Canlıya alma) aşamalarından oluşur.",
            az: "Source (Kod), Build (Yığma), Test (Avtomatlaşdırılmış testlər) və Deploy (İstifadəyə vermə) mərhələlərindən ibarətdir.",
            en: "It consists of Source (Code), Build, Test (Automated testing), and Deploy (Release to production) stages."
        }
    },
    {
        id: 3,
        q: {
            tr: "Infrastructure as Code (IaC) nedir?",
            az: "Infrastructure as Code (IaC) nədir?",
            en: "What is Infrastructure as Code (IaC)?"
        },
        a: {
            tr: "Altyapının (Server, Network vb.) manuel yerine kod dosyalarıyla (Terraform, CloudFormation) yönetilmesidir. Hızlı, tekrarlanabilir ve hatasız kurulum sağlar.",
            az: "İnfrastrukturun (Server, Şəbəkə və s.) əllə deyil, kod faylları vasitəsilə (Terraform, CloudFormation) idarə edilməsidir. Sürətli və səhvsiz quraşdırma təmin edir.",
            en: "Managing and provisioning infrastructure through code (Terraform, Ansible) rather than manual processes. It ensures consistency and speed."
        }
    },
    {
        id: 4,
        q: {
            tr: "Docker Image ve Container farkı nedir?",
            az: "Docker Image və Container fərqi nədir?",
            en: "Difference between Docker Image and Container?"
        },
        a: {
            tr: "Image, uygulamanın çalışması için gereken her şeyi içeren salt okunur bir şablondur. Container ise bu imajın çalışan canlı örneğidir.",
            az: "Image tətbiqin işləməsi üçün lazım olan hər şeyi ehtiva edən oxunaqlı şablondur. Container isə həmin imicin işlək vəziyyətdə olan nümunəsidir.",
            en: "An Image is a read-only template containing the app and its dependencies. A Container is a running instance of that image."
        }
    },
    {
        id: 5,
        q: {
            tr: "Kubernetes (K8s) nedir?",
            az: "Kubernetes (K8s) nədir?",
            en: "What is Kubernetes (K8s)?"
        },
        a: {
            tr: "Konteynerize edilmiş uygulamaların dağıtımını, ölçeklenmesini ve yönetimini otomatize eden bir orkestrasyon platformudur.",
            az: "Konteynerləşdirilmiş tətbiqlərin paylanmasını, miqyaslanmasını və idarə edilməsini avtomatlaşdıran bir orkestrasiya platformadır.",
            en: "An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications."
        }
    },
    {
        id: 6,
        q: {
            tr: "Blue-Green Deployment nedir?",
            az: "Blue-Green Deployment nədir?",
            en: "What is Blue-Green Deployment?"
        },
        a: {
            tr: "Sıfır kesinti için iki özdeş ortam kullanılır: Biri canlı (Blue), diğeri yeni sürümün yüklendiği (Green). Testten sonra trafik Green'e aktarılır.",
            az: "Sıfır kəsinti üçün iki eyni mühit istifadə olunur: Biri canlı (Blue), digəri yeni versiyanın yükləndiyi (Green). Testdən sonra trafik Green-ə yönləndirilir.",
            en: "A deployment strategy with two identical environments (Blue and Green). Traffic is switched to Green after the new version is tested there."
        }
    },
    {
        id: 7,
        q: {
            tr: "GitOps nedir?",
            az: "GitOps nədir?",
            en: "What is GitOps?"
        },
        a: {
            tr: "Altyapı ve uygulama yapılandırmaları için Git'i 'tek gerçeklik kaynağı' (source of truth) olarak kullanan bir operasyonel modeldir.",
            az: "İnfrastruktur və tətbiq konfiqurasiyaları üçün Git-i 'vahid həqiqət mənbəyi' kimi istifadə edən əməliyyat modelidir.",
            en: "An operational model where Git is used as the single source of truth for infrastructure and application configurations."
        }
    },
    {
        id: 8,
        q: {
            tr: "Microservices vs Monolithic?",
            az: "Mikroservis vs Monolitik?",
            en: "Microservices vs Monolithic?"
        },
        a: {
            tr: "Monolitik tek bir büyük parçadır. Mikroservisler bağımsız, küçük servislerdir; hata izolasyonu ve bağımsız ölçekleme sağlar.",
            az: "Monolitik vahid böyük blokdur. Mikroservislər isə müstəqil, kiçik servislərdir; xətaların təcrid olunmasını və müstəqil miqyaslanmanı təmin edir.",
            en: "Monolithic is a single unified unit. Microservices break the app into independent services for better fault isolation and scalability."
        }
    },
    {
        id: 9,
        q: {
            tr: "Rolling Update nedir?",
            az: "Rolling Update nədir?",
            en: "What is a Rolling Update?"
        },
        a: {
            tr: "Kubernetes'te uygulamaları eski versiyonu birer birer kapatıp yeni versiyonu açarak, hizmet kesintisi olmadan güncelleme yöntemidir.",
            az: "Kubernetes-də köhnə versiyaları tək-tək söndürüb yenisini yandırmaqla, xidmətdə fasilə yaratmadan tətbiqi yeniləmə üsuludur.",
            en: "A deployment strategy that updates an application by replacing instances one by one with the new version to ensure zero downtime."
        }
    },
    {
        id: 10,
        q: {
            tr: "Mutable vs Immutable Infrastructure?",
            az: "Mutable vs Immutable İnfrastruktur?",
            en: "Mutable vs Immutable Infrastructure?"
        },
        a: {
            tr: "Mutable: Mevcut sunucu üzerinde değişiklik yapılır. Immutable: Değişiklik için eski sunucu silinir, yerine yenisi kurulur (daha güvenli).",
            az: "Mutable: Mövcud server üzərində dəyişiklik edilir. Immutable: Dəyişiklik üçün köhnə server silinir, yerinə yenisi qurulur (daha etibarlıdır).",
            en: "Mutable infra is modified in place. Immutable infra is never modified; instead, it is replaced by a new instance when changes are needed."
        }
    },
    {
        id: 11,
        q: {
            tr: "Observability (Gözlemlenebilirlik) sütunları nelerdir?",
            az: "Observability-nin sütunları hansılardır?",
            en: "What are the pillars of Observability?"
        },
        a: {
            tr: "Metrics (Sayısal veriler), Logging (Olay kayıtları) ve Tracing (İstek izleme).",
            az: "Metrics (Sayısal göstəricilər), Logging (Hadisə qeydləri) və Tracing (Sorğu izləmə).",
            en: "The three pillars are Metrics, Logging, and Tracing."
        }
    },
    {
        id: 12,
        q: {
            tr: "Config Management (Ansible, Puppet) ne için kullanılır?",
            az: "Config Management nə üçün istifadə olunur?",
            en: "What is Configuration Management used for?"
        },
        a: {
            tr: "Yüzlerce sunucunun yapılandırmasını (yazılım yükleme, ayar yapma) merkezi ve otomatik bir şekilde yönetmek için kullanılır.",
            az: "Yüzlərlə serverin konfiqurasiyasını (proqram yükləmə, tənzimləmə) mərkəzi və avtomatlaşdırılmış şəkildə idarə etmək üçün istifadə olunur.",
            en: "Used to manage the configuration of hundreds of servers automatically and consistently from a central point."
        }
    },
    {
        id: 13,
        q: {
            tr: "Canary Deployment nedir?",
            az: "Canary Deployment nədir?",
            en: "What is Canary Deployment?"
        },
        a: {
            tr: "Yeni sürümü önce trafiğin küçük bir kısmına (%5) açıp, sorun yoksa kademeli olarak herkese yayma stratejisidir.",
            az: "Yeni versiyanı əvvəlcə trafikin kiçik bir hissəsinə (%5) təqdim edib, problem yoxdursa tədricən hamı üçün aktivləşdirməkdir.",
            en: "A deployment strategy where a small percentage of users get the new version first to test stability before full rollout."
        }
    },
    {
        id: 14,
        q: {
            tr: "Helm nedir?",
            az: "Helm nədir?",
            en: "What is Helm?"
        },
        a: {
            tr: "Kubernetes için bir paket yöneticisidir (yum veya apt gibi). Karmaşık K8s uygulamalarını tanımlamayı ve paylaşmayı kolaylaştırır.",
            az: "Kubernetes üçün paket idarəçisidir (yum və ya apt kimi). Mürəkkəb K8s tətbiqlərini asanlıqla quraşdırmağa kömək edir.",
            en: "A package manager for Kubernetes. It simplifies the definition, installation, and upgrade of complex K8s applications."
        }
    },
    {
        id: 15,
        q: {
            tr: "Site Reliability Engineering (SRE) nedir?",
            az: "SRE nədir?",
            en: "What is Site Reliability Engineering (SRE)?"
        },
        a: {
            tr: "Google tarafından ortaya atılan, sistem operasyonlarına bir yazılım mühendisliği yaklaşımıyla yaklaşan disiplindir.",
            az: "Google tərəfindən yaradılan, sistem əməliyyatlarına proqram mühəndisliyi yanaşması ilə yanaşan intizamdır.",
            en: "A discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems."
        }
    },
    {
        id: 16,
        q: {
            tr: "Self-healing (Kendi kendini iyileştirme) nedir?",
            az: "Self-healing nədir?",
            en: "What is Self-healing?"
        },
        a: {
            tr: "Bir servisin çökmesi durumunda Kubernetes gibi sistemlerin bunu fark edip otomatik olarak yeni bir instance başlatmasıdır.",
            az: "Bir servisin sıradan çıxması halında Kubernetes kimi sistemlərin bunu fəhm edib avtomat olaraq yeni bir nüsxə başlatmasıdır.",
            en: "The ability of a system (like K8s) to automatically detect failure and restart or replace failed components."
        }
    },
    {
        id: 17,
        q: {
            tr: "Stateful vs Stateless?",
            az: "Stateful vs Stateless?",
            en: "Stateful vs Stateless?"
        },
        a: {
            tr: "Stateless veri saklamaz, kolay ölçeklenir. Stateful (veritabanı gibi) veriyi tutar ve yönetimi daha zordur.",
            az: "Stateless məlumat saxlamır, asan miqyaslanır. Stateful (verilənlər bazası kimi) məlumatı saxlayır və idarə edilməsi daha çətindir.",
            en: "Stateless apps don't store data between sessions. Stateful apps (like DBs) require persistent storage and session tracking."
        }
    },
    {
        id: 18,
        q: {
            tr: "Zero Downtime Deployment nedir?",
            az: "Zero Downtime Deployment nədir?",
            en: "What is Zero Downtime Deployment?"
        },
        a: {
            tr: "Yeni sürüm yüklenirken kullanıcının hiçbir kesinti hissetmemesi durumudur.",
            az: "Yeni versiya yüklənərkən istifadəçinin heç bir kəsinti hiss etməməsi vəziyyətidir.",
            en: "A deployment process where the application remains available to users without any interruption during the update."
        }
    },
    {
        id: 19,
        q: {
            tr: "Docker Compose ne işe yarar?",
            az: "Docker Compose nə işə yarayır?",
            en: "What is Docker Compose used for?"
        },
        a: {
            tr: "Birden fazla konteyneri tek bir YAML dosyasıyla tanımlayıp aynı anda çalıştırmayı sağlar (Örn: App + DB).",
            az: "Birdən çox konteyneri tək bir YAML faylı ilə təyin edib eyni anda işə salmağı təmin edir (Məs: App + DB).",
            en: "A tool for defining and running multi-container Docker applications using a single YAML file."
        }
    },
    {
        id: 20,
        q: {
            tr: "Horizontal Pod Autoscaler (HPA) nedir?",
            az: "HPA nədir?",
            en: "What is HPA (Horizontal Pod Autoscaler)?"
        },
        a: {
            tr: "CPU veya RAM kullanımı arttığında Kubernetes'in pod sayısını otomatik olarak artırmasıdır.",
            az: "CPU və ya RAM istifadəsi artdıqda Kubernetes-in pod sayını avtomatik olaraq artırmasıdır.",
            en: "A Kubernetes feature that automatically scales the number of pods in a deployment based on observed CPU/RAM utilization."
        }
    }
],

devops_projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "Statik Web Sitesi CI/CD Pipeline", 
            az: "Statik Veb Sayt CI/CD Pipeline", 
            en: "Static Website CI/CD Pipeline" 
        },
        desc: { 
            tr: "GitHub'a kod atıldığında otomatik olarak AWS S3 veya Netlify'a yükleme yapan sistem.", 
            az: "GitHub-a kod atıldıqda avtomatik olaraq AWS S3 və ya Netlify-a yükləmə edən sistem.", 
            en: "A system that automatically deploys code to AWS S3 or Netlify whenever changes are pushed to GitHub." 
        },
        tech: ["GitHub Actions", "AWS S3/CloudFront", "HTML/CSS"],
        features: { 
            tr: ["Kod analizi (Linting)", "Otomatik dağıtım", "CDN entegrasyonu"], 
            az: ["Kod analizi (Linting)", "Avtomatik deploy", "CDN inteqrasiyası"], 
            en: ["Linting checks", "Automated deployment", "CDN integration"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "Dockerize Edilmiş App ve Monitoring", 
            az: "Dockerizasiya olunmuş Tətbiq və Monitoring", 
            en: "Dockerized App with Monitoring" 
        },
        desc: { 
            tr: "Konteyner içinde çalışan bir uygulamanın performansını izleyen ve loglayan altyapı.", 
            az: "Konteyner daxilində çalışan tətbiqin performansını izləyən və loqlayan infrastruktur.", 
            en: "Infrastructure that monitors and logs the performance of an application running inside containers." 
        },
        tech: ["Docker & Compose", "Prometheus", "Grafana", "ELK Stack"],
        features: { 
            tr: ["Metrik görselleştirme", "Log yönetimi", "Konteyner orkestrasyonu"], 
            az: ["Metrik vizuallaşdırma", "Log idarəetməsi", "Konteyner orkestrasiyası"], 
            en: ["Metrics visualization", "Log aggregation", "Container orchestration"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "Kubernetes Üzerinde GitOps ve IaC", 
            az: "Kubernetes üzərində GitOps və IaC", 
            en: "GitOps and IaC on Kubernetes" 
        },
        desc: { 
            tr: "Tüm altyapının Terraform ile kurulduğu ve uygulama güncellemelerinin ArgoCD ile yönetildiği ileri seviye yapı.", 
            az: "Bütün infrastrukturun Terraform ilə qurulduğu və yenilənmələrin ArgoCD ilə idarə edildiyi irəli səviyyəli struktur.", 
            en: "Advanced setup where all infrastructure is provisioned via Terraform and app updates are managed via ArgoCD." 
        },
        tech: ["Kubernetes", "Terraform", "ArgoCD", "Helm Charts"],
        features: { 
            tr: ["Otomatik iyileştirme (Self-healing)", "Infrastructure as Code", "Declarative CD"], 
            az: ["Avtomatik bərpa (Self-healing)", "Kod olaraq infrastruktur", "Deklarativ CD"], 
            en: ["Self-healing clusters", "Infrastructure as Code", "Declarative CD"] 
        }
    }
]
};

contentData['cyber-security'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Temeller (Olmazsa Olmaz)", items: ["Ağ Bilgisi (OSI, TCP/IP, DNS)", "Linux Komut Satırı (CLI)", "Temel Python/Bash Scripting", "Sanal Makineler (VirtualBox)"], status: "start" },
            { title: "İşletim Sistemi Mimarisi", items: ["Windows & Linux İç Yapısı", "File Systems", "Memory Management", "Process & Services"], status: "start" },
            { title: "Sızma Testi (Pentesting)", items: ["Bilgi Toplama (Nmap, OSINT)", "Zafiyet Tarama (Nessus)", "Metasploit Framework", "Yetki Yükseltme (Privilege Escalation)"], status: "mid" },
            { title: "Web Uygulama Güvenliği", items: ["OWASP Top 10 (SQLi, XSS)", "Burp Suite Kullanımı", "API Güvenliği", "HTTP Request Smuggling"], status: "mid" },
            { title: "Savunma (Blue Team)", items: ["SIEM (Splunk, Wazuh)", "Log Analizi", "Incident Response (Olay Müdahale)", "Firewall & IPS/IDS"], status: "mid" },
            { title: "İleri Saldırı Teknikleri", items: ["Reverse Engineering (Tersine Mühendislik)", "Malware Analizi", "Buffer Overflow", "Active Directory Hacking"], status: "advanced" },
            { title: "Bulut Güvenliği (Cloud Sec)", items: ["AWS/Azure Security", "Docker & K8s Security", "IAM Policies", "Misconfiguration Hunting"], status: "expert" },
            { title: "Sertifikasyon & Kariyer", items: ["eJPT (Başlangıç)", "OSCP (Sektör Standardı)", "CISSP (Yönetim)", "Bug Bounty"], status: "expert" }
        ],
        az: [
            { title: "Təməllər (Mütləq)", items: ["Şəbəkə Biliyi (OSI, TCP/IP)", "Linux Əmrləri", "Təməl Python/Bash", "Virtual Maşınlar"], status: "start" },
            { title: "Əməliyyat Sistemi Arxitekturası", items: ["Windows & Linux Daxili", "Fayl Sistemləri", "Yaddaş İdarəetməsi", "Proseslər"], status: "start" },
            { title: "Sızma Testi (Pentesting)", items: ["Məlumat Toplama (Nmap)", "Zəiflik Axtarışı", "Metasploit", "Səlahiyyət Yüksəltmə"], status: "mid" },
            { title: "Veb Tətbiq Təhlükəsizliyi", items: ["OWASP Top 10", "Burp Suite", "API Təhlükəsizliyi", "HTTP Qaçaqçılığı"], status: "mid" },
            { title: "Müdafiə (Blue Team)", items: ["SIEM (Splunk)", "Log Analizi", "Hadisəyə Müdaxilə", "Firewall & IPS/IDS"], status: "mid" },
            { title: "İrəli Hücum Texnikaları", items: ["Tərs Mühəndislik", "Zərərli Proqram Analizi", "Buffer Overflow", "Active Directory"], status: "advanced" },
            { title: "Bulud Təhlükəsizliyi", items: ["AWS/Azure Security", "Konteyner Təhlükəsizliyi", "IAM Qaydaları", "Yanlış Konfiqurasiya"], status: "expert" },
            { title: "Sertifikatlaşdırma", items: ["eJPT", "OSCP (Standart)", "CISSP", "Bug Bounty"], status: "expert" }
        ],
        en: [
            { title: "Foundations", items: ["Networking (OSI, TCP/IP)", "Linux CLI Basics", "Python/Bash Scripting", "Virtualization (VMs)"], status: "start" },
            { title: "OS Architecture", items: ["Windows/Linux Internals", "File Systems", "Memory Management", "Processes"], status: "start" },
            { title: "Penetration Testing", items: ["Reconnaissance (Nmap)", "Vulnerability Scanning", "Metasploit Framework", "Privilege Escalation"], status: "mid" },
            { title: "Web App Security", items: ["OWASP Top 10", "Burp Suite Mastery", "API Security", "Request Smuggling"], status: "mid" },
            { title: "Blue Team (Defense)", items: ["SIEM (Splunk, Wazuh)", "Log Analysis", "Incident Response", "Firewall & IPS/IDS"], status: "mid" },
            { title: "Advanced Attack Ops", items: ["Reverse Engineering", "Malware Analysis", "Buffer Overflow", "Active Directory Attacks"], status: "advanced" },
            { title: "Cloud Security", items: ["AWS/Azure Security", "Container Security", "IAM & Compliance", "Cloud Pentesting"], status: "expert" },
            { title: "Certs & Career", items: ["eJPT (Junior)", "OSCP (Gold Standard)", "CISSP (Management)", "Bug Bounty Hunting"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // Education Platforms
            { type: 'course', title: 'TryHackMe', url: 'https://tryhackme.com', desc: 'Siber güvenliği oyunlaştırarak öğreten, yeni başlayanlar için en iyi platform.', lang: 'global' },
            { type: 'course', title: 'HackTheBox', url: 'https://www.hackthebox.com', desc: 'Gerçekçi lab ortamları sunan, orta ve ileri seviye için sızma testi platformu.', lang: 'global' },
            { type: 'course', title: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', desc: 'Web güvenliği (Burp Suite) öğrenmek için dünyanın en iyi ücretsiz kaynağı.', lang: 'en' },

            // YouTube Channels
            { type: 'youtube', title: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck', desc: 'Ağ, Linux ve hack konularını çok enerjik anlatan kanal.', lang: 'en' },
            { type: 'youtube', title: 'John Hammond', url: 'https://youtube.com/@_JohnHammond', desc: 'CTF çözümleri ve malware analizi üzerine harika içerikler.', lang: 'en' },
            { type: 'youtube', title: 'Can Değer', url: 'https://youtube.com/@CanDeger', desc: 'Türkiye\'nin siber güvenlik duayeni. Kariyer ve teknik sohbetler.', lang: 'tr' },
            { type: 'youtube', title: 'LiveOverflow', url: 'https://youtube.com/@LiveOverflow', desc: 'Hacking mantığını ve derin teknik detayları (Minecraft hackleri dahil) anlatır.', lang: 'en' },

            // Tools & Lists
            { type: 'tool', title: 'Kali Linux', url: 'https://www.kali.org', desc: 'Siber güvenlikçilerin İsviçre çakısı olan işletim sistemi.', lang: 'global' },
            { type: 'doc', title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', desc: 'Web uygulamalarındaki en kritik 10 güvenlik açığı listesi.', lang: 'global' },
            { type: 'tool', title: 'GTFOBins', url: 'https://gtfobins.github.io', desc: 'Linux sistemlerde yetki yükseltmek için kullanılan komutlar listesi.', lang: 'en' },
            { type: 'roadmap', title: 'Roadmap.sh (Cyber)', url: 'https://roadmap.sh/cyber-security', desc: 'Siber güvenlik uzmanlığı için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Vizyoner Genç (Savunma Sanayi)"],
            top_skills: ["Pentest", "SIEM (Splunk)", "Network Security", "KVKK/ISO 27001", "Forensics"],
            avg_salary: "Junior: 40k-60k TL | Mid: 75k-110k TL | Senior: 150k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Dövlət Qurumları (DTX, Xüsusi Rabitə)"],
            top_skills: ["Network Security", "Information Security", "Cisco", "Linux"],
            avg_salary: "Junior: 1000-1500 AZN | Mid: 2200-3500 AZN | Senior: 5500+ AZN"
        },
        GLOBAL: {
            platforms: ["HackerOne (Bug Bounty)", "Synack", "LinkedIn", "Clearance Jobs"],
            top_skills: ["Cloud Security", "DevSecOps", "OSCP Certified", "Incident Response"],
            avg_salary: "Junior: $5k-$8k | Mid: $9k-$13k | Senior: $16k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Red Team ve Blue Team nedir?",
                az: "Red Team və Blue Team nədir?",
                en: "What are Red Team and Blue Team?"
            },
            a: {
                tr: "Red Team (Kırmızı Takım) saldırgandır; sistemi hacklemeye çalışır. Blue Team (Mavi Takım) savunmacıdır; saldırıları tespit edip engellemeye çalışır. Bir de ikisinin karışımı Purple Team vardır.",
                az: "Red Team (Qırmızı Komanda) hücumçudur; sistemi sındırmağa çalışır. Blue Team (Mavi Komanda) müdafiəçidir; hücumları aşkarlayıb qarşısını almağa çalışır.",
                en: "Red Team involves offensive security (attacking). Blue Team involves defensive security (protecting/monitoring). Purple Team is a mix of both."
            }
        },
        {
            id: 2,
            q: {
                tr: "Yazılım bilmek zorunda mıyım?",
                az: "Proqramlaşdırma bilmək məcburiyyətindəyəm?",
                en: "Do I have to know coding?"
            },
            a: {
                tr: "Başlangıç için hayır, araçları kullanmak yeterlidir. Ancak 'Script Kiddie' (lamer) seviyesinden çıkmak ve kendi araçlarınızı yazmak/zararlı yazılım analizi yapmak için Python ve Bash şarttır.",
                az: "Başlanğıc üçün xeyr. Lakin peşəkar olmaq və öz alətlərinizi yazmaq üçün Python və Bash şərtdir.",
                en: "Not for starters. But to advance beyond being a 'Script Kiddie' and to write your own exploits/tools, Python and Bash are mandatory."
            }
        },
        {
            id: 3,
            q: {
                tr: "Hangi sertifikayı almalıyım?",
                az: "Hansı sertifikatı almalıyam?",
                en: "Which certification should I get?"
            },
            a: {
                tr: "Başlangıç için CompTIA Security+ veya eJPT. Sektörde saygı görmek ve iş bulmak için 'OSCP' (Offensive Security Certified Professional) altın standarttır.",
                az: "Başlanğıc üçün CompTIA Security+ və ya eJPT. Sektorda hörmət qazanmaq və iş tapmaq üçün 'OSCP' qızıl standartdır.",
                en: "Start with CompTIA Security+ or eJPT. For industry respect and jobs, 'OSCP' is the gold standard."
            }
        },
        {
            id: 4,
            q: {
                tr: "Kali Linux'u ana bilgisayarıma kurmalı mıyım?",
                az: "Kali Linux-u əsas kompüterimə qurmalıyam?",
                en: "Should I install Kali Linux as my main OS?"
            },
            a: {
                tr: "Hayır! Kali günlük kullanım için güvenli ve stabil değildir. Sanal Makine (VirtualBox/VMware) içine kurmanız veya USB'den (Live Boot) çalıştırmanız en doğrusudur.",
                az: "Xeyr! Kali gündəlik istifadə üçün təhlükəsiz və stabil deyil. Virtual Maşın (VirtualBox) içinə qurmaq və ya USB-dən işlətmək ən doğrusudur.",
                en: "No! Kali is not secure or stable for daily use. It is best to run it inside a Virtual Machine (VM) or via Live USB."
            }
        },
        {
            id: 5,
            q: {
                tr: "Bug Bounty yaparak para kazanabilir miyim?",
                az: "Bug Bounty edərək pul qazana bilərəm?",
                en: "Can I make money with Bug Bounty?"
            },
            a: {
                tr: "Evet, ama zordur. HackerOne gibi platformlarda şirketler açık bulanlara ödül verir. Ancak rekabet çok yüksektir ve sürekli kendinizi geliştirmeniz gerekir. Ek gelir olarak harikadır.",
                az: "Bəli, amma çətindir. HackerOne kimi platformalarda şirkətlər boşluq tapanlara mükafat verir. Rəqabət yüksəkdir, amma əlavə gəlir üçün əladır.",
                en: "Yes, but it's hard. Platforms like HackerOne pay for bugs. Competition is high, so you need to be skilled. It's great for side income."
            }
        },
        {
            id: 6,
            q: {
                tr: "Wifi kırmak için hangi adaptörü almalıyım?",
                az: "Wifi sındırmaq üçün hansı adaptoru almalıyam?",
                en: "Which adapter do I need for Wifi hacking?"
            },
            a: {
                tr: "Markaya değil 'Chipset'e bakın. 'Monitor Mode' ve 'Packet Injection' destekleyen adaptörler gerekir. (Örn: Atheros AR9271, Realtek RTL8812AU).",
                az: "Markaya yox 'Chipset'ə baxın. 'Monitor Mode' və 'Packet Injection' dəstəkləyən adaptorlar lazımdır. (Məs: Atheros AR9271).",
                en: "Look for the 'Chipset', not the brand. You need support for 'Monitor Mode' and 'Packet Injection'. (e.g., Atheros AR9271)."
            }
        }
    ],

interview: [
    {
        id: 1,
        q: {
            tr: "CIA Üçlüsü (Confidentiality, Integrity, Availability) nedir?",
            az: "CIA Triadası (Məxfilik, Bütövlük, Əlçatanlıq) nədir?",
            en: "What is the CIA Triad?"
        },
        a: {
            tr: "Bilgi güvenliğinin üç temel direğidir: Gizlilik (verinin yetkisiz erişime kapalı olması), Bütünlük (verinin değiştirilmemiş olması) ve Erişilebilirlik (verinin ihtiyaç duyulduğunda ulaşılabilir olması).",
            az: "İnformasiya təhlükəsizliyinin üç əsas sütunudur: Məxfilik (yetkisiz girişin qarşısının alınması), Bütövlük (məlumatın dəyişdirilməməsi) və Əlçatanlıq (ehtiyac duyulduqda məlumatın əldə edilməsi).",
            en: "The three pillars of info-sec: Confidentiality (preventing unauthorized access), Integrity (ensuring data isn't altered), and Availability (ensuring data is accessible when needed)."
        }
    },
    {
        id: 2,
        q: {
            tr: "Phishing (Oltalama) saldırısı nedir?",
            az: "Phishing (Fişinq) hücumu nədir?",
            en: "What is a Phishing attack?"
        },
        a: {
            tr: "Saldırganın güvenilir bir kurum gibi davranarak (e-posta veya sahte site üzerinden) kullanıcı şifrelerini veya kredi kartı bilgilerini çalmaya çalışmasıdır.",
            az: "Hücumçunun özünü etibarlı bir qurum kimi təqdim edərək (e-poçt və ya saxta sayt vasitəsilə) istifadəçi şifrələrini və ya kredit kartı məlumatlarını oğurlamağa çalışmasıdır.",
            en: "A social engineering attack where an attacker poses as a trusted entity to steal sensitive data like login credentials or credit card numbers."
        }
    },
    {
        id: 3,
        q: {
            tr: "IDS ve IPS arasındaki fark nedir?",
            az: "IDS və IPS arasındakı fərq nədir?",
            en: "Difference between IDS and IPS?"
        },
        a: {
            tr: "IDS (Intrusion Detection System) saldırıyı sadece tespit eder ve uyarır. IPS (Intrusion Prevention System) ise saldırıyı tespit eder ve otomatik olarak durdurur.",
            az: "IDS (Müdaxiləni Müəyyən Etmə Sistemi) hücumu yalnız aşkar edir və xəbərdarlıq edir. IPS (Müdaxilənin Qarşısını Alma Sistemi) isə hücumu aşkar edir və avtomatik dayandırır.",
            en: "IDS (Intrusion Detection System) only monitors and alerts about threats. IPS (Intrusion Prevention System) monitors, alerts, and actively takes steps to block the threat."
        }
    },
    {
        id: 4,
        q: {
            tr: "Salting (Tuzlama) nedir?",
            az: "Salting nədir?",
            en: "What is Salting?"
        },
        a: {
            tr: "Şifreler özetlenmeden (hashing) önce her şifreye eklenen rastgele veridir. Rainbow table saldırılarını engellemek için kullanılır.",
            az: "Şifrələr hash olunmazdan əvvəl hər şifrəyə əlavə edilən təsadüfi məlumatdır. Rainbow table hücumlarının qarşısını almaq üçün istifadə olunur.",
            en: "Adding unique, random characters to a password before hashing it to protect against pre-computed hash attacks like Rainbow Tables."
        }
    },
    {
        id: 5,
        q: {
            tr: "Brute Force saldırısı nedir?",
            az: "Brute Force (Kobud qüvvə) hücumu nədir?",
            en: "What is a Brute Force attack?"
        },
        a: {
            tr: "Bir şifreyi kırmak için tüm olası kombinasyonların sistematik olarak denenmesidir. Güçlü şifreler ve hesap kilitleme ile önlenir.",
            az: "Bir şifrəni qırmaq üçün bütün mümkün kombinasiyaların sistemli şəkildə sınanmasıdır. Güclü şifrələr və hesabın bloklanması ilə qarşısı alınır.",
            en: "A trial-and-error method used to guess login credentials or encryption keys by trying every possible combination."
        }
    },
    {
        id: 6,
        q: {
            tr: "XSS (Cross-Site Scripting) nedir?",
            az: "XSS (Cross-Site Scripting) nədir?",
            en: "What is XSS?"
        },
        a: {
            tr: "Saldırganın web sayfasına kötü amaçlı JavaScript kodu enjekte etmesi ve bu kodun diğer kullanıcıların tarayıcısında çalışmasıdır.",
            az: "Hücumçunun veb səhifəsinə zərərli JavaScript kodu yerləşdirməsi və bu kodun digər istifadəçilərin brauzerində işləməsidir.",
            en: "A vulnerability where an attacker injects malicious scripts into a trusted website, which then execute in the victim's browser."
        }
    },
    {
        id: 7,
        q: {
            tr: "Privilege Escalation (Yetki Yükseltme) nedir?",
            az: "Privilege Escalation (Səlahiyyət artırılması) nədir?",
            en: "What is Privilege Escalation?"
        },
        a: {
            tr: "Bir kullanıcının sistemde sahip olduğundan daha yüksek (admin/root) yetkilere sahip olmaya çalışmasıdır.",
            az: "Bir istifadəçinin sistemdə sahib olduğundan daha yüksək (admin/root) səlahiyyətlər əldə etməyə çalışmasıdır.",
            en: "The act of gaining unauthorized access to elevated rights, permissions, or privileges beyond what is assigned to a user."
        }
    },
    {
        id: 8,
        q: {
            tr: "HoneyPot (Bal Küpü) nedir?",
            az: "HoneyPot nədir?",
            en: "What is a Honeypot?"
        },
        a: {
            tr: "Saldırganları kandırmak ve hareketlerini izlemek için bilerek zafiyetli bırakılmış sahte bir sistem veya veritabanıdır.",
            az: "Hücumçuları aldatmaq və hərəkətlərini izləmək üçün qəsdən zəifliklərlə buraxılmış saxta sistem və ya verilənlər bazasıdır.",
            en: "A decoy system set up to gather intelligence on attackers by lure them into a controlled environment."
        }
    },
    {
        id: 9,
        q: {
            tr: "DDoS saldırısı nedir?",
            az: "DDoS hücumu nədir?",
            en: "What is a DDoS attack?"
        },
        a: {
            tr: "Bir web sitesini veya servisi, birden fazla kaynaktan yoğun trafik göndererek erişilemez hale getirme girişimidir.",
            az: "Bir veb saytı və ya xidməti bir çox mənbədən gələn trafiklə yükləyərək onu əlçatmaz hala gətirmək cəhdidir.",
            en: "Distributed Denial of Service; an attempt to crash a server or network by overwhelming it with a flood of internet traffic."
        }
    },
    {
        id: 10,
        q: {
            tr: "VPN nedir ve nasıl çalışır?",
            az: "VPN nədir və necə işləyir?",
            en: "What is a VPN and how does it work?"
        },
        a: {
            tr: "İnternet üzerinde şifreli bir tünel oluşturarak kullanıcının gerçek IP adresini gizleyen ve veri iletimini güvenli hale getiren teknolojidir.",
            az: "İnternet üzərində şifrəli bir tunel yaradaraq istifadəçinin real IP ünvanını gizləyən və məlumat ötürülməsini təhlükəsiz edən texnologiyadır.",
            en: "Virtual Private Network; it creates an encrypted connection over a less secure network, hiding your IP and securing your data."
        }
    },
    {
        id: 11,
        q: {
            tr: "Zero-Day (Sıfırıncı Gün) zafiyeti nedir?",
            az: "Zero-Day (Sıfırıncı gün) boşluğu nədir?",
            en: "What is a Zero-Day vulnerability?"
        },
        a: {
            tr: "Yazılım geliştiricisi tarafından henüz bilinmeyen veya yaması (patch) yayınlanmamış olan güvenlik açığıdır.",
            az: "Proqram təminatçısı tərəfindən hələ bilinməyən və ya yaması (patch) çıxarılmamış təhlükəsizlik boşluğudur.",
            en: "A software security flaw that is unknown to the vendor and for which no patch has yet been released."
        }
    },
    {
        id: 12,
        q: {
            tr: "Penetrasyon (Sızma) Testi nedir?",
            az: "Penetrasiya (Sızma) testi nədir?",
            en: "What is a Penetration Test?"
        },
        a: {
            tr: "Bir sistemin güvenliğini ölçmek için etik bir şekilde yapılan yetkili saldırı simülasyonudur.",
            az: "Bir sistemin təhlükəsizliyini yoxlamaq üçün etik şəkildə həyata keçirilən icazəli hücum simulyasiyasıdır.",
            en: "An authorized simulated cyberattack on a computer system, performed to evaluate the security of the system."
        }
    },
    {
        id: 13,
        q: {
            tr: "Ransomware (Fidye Yazılımı) nedir?",
            az: "Ransomware (Fidyə proqramı) nədir?",
            en: "What is Ransomware?"
        },
        a: {
            tr: "Kurbanın dosyalarını şifreleyen ve erişim için fidye talep eden zararlı yazılımdır.",
            az: "Qurbanın fayllarını şifrələyən və yenidən giriş üçün fidyə tələb edən zərərli proqram növüdür.",
            en: "A type of malware that encrypts a victim's files, with the attacker demanding a ransom to restore access."
        }
    },
    {
        id: 14,
        q: {
            tr: "SOC (Security Operations Center) nedir?",
            az: "SOC nədir?",
            en: "What is a SOC?"
        },
        a: {
            tr: "Bir organizasyonun güvenlik durumunu 7/24 izleyen, siber saldırıları tespit eden ve yanıtlayan merkezi birimdir.",
            az: "Bir təşkilatın təhlükəsizlik vəziyyətini 24/7 izləyən, kiberhücumları aşkar edən və reaksiya verən mərkəzi bölmədir.",
            en: "A centralized unit that monitors an organization's security posture 24/7, detecting and responding to cybersecurity incidents."
        }
    },
    {
        id: 15,
        q: {
            tr: "Red Team ve Blue Team farkı nedir?",
            az: "Red Team və Blue Team fərqi nədir?",
            en: "Red Team vs Blue Team?"
        },
        a: {
            tr: "Red Team saldırı simülasyonu yapar (saldırgan rolü), Blue Team ise sistemleri savunur ve saldırıları durdurmaya çalışır.",
            az: "Red Team hücum simulyasiyası edir (hücumçu rolu), Blue Team isə sistemləri müdafiə edir və hücumların qarşısını alır.",
            en: "Red Team acts as the adversary (attacking), while Blue Team is responsible for defending and responding to attacks."
        }
    },
    {
        id: 16,
        q: {
            tr: "2FA (İki Faktörlü Doğrulama) neden önemlidir?",
            az: "2FA (İki faktorlu təsdiqləmə) niyə vacibdir?",
            en: "Why is 2FA important?"
        },
        a: {
            tr: "Sadece şifre yeterli değildir; ikinci bir doğrulama katmanı (SMS, App kodu) ekleyerek hesap güvenliğini büyük ölçüde artırır.",
            az: "Yalnız şifrə kifayət deyil; ikinci bir təsdiqləmə qatı (SMS, tətbiq kodu) əlavə edərək hesabın təhlükəsizliyini əhəmiyyətli dərəcədə artırır.",
            en: "It adds an extra layer of security, making it much harder for attackers to gain access even if they have your password."
        }
    },
    {
        id: 17,
        q: {
            tr: "Man-in-the-Middle (MitM) saldırısı nedir?",
            az: "MitM (Ortadakı adam) hücumu nədir?",
            en: "What is a MitM attack?"
        },
        a: {
            tr: "Saldırganın iki taraf arasındaki iletişimi gizlice dinlemesi veya veriyi değiştirmesidir (Örn: Halka açık Wi-Fi saldırıları).",
            az: "Hücumçunun iki tərəf arasındakı ünsiyyəti gizlicə dinləməsi və ya məlumatı dəyişdirməsidir.",
            en: "An attack where the perpetrator positions themselves between two parties to eavesdrop or alter communication."
        }
    },
    {
        id: 18,
        q: {
            tr: "Symmetric vs Asymmetric Encryption farkı?",
            az: "Simmetrik və Asimmetrik şifrələmə fərqi?",
            en: "Symmetric vs Asymmetric Encryption?"
        },
        a: {
            tr: "Simetrikte tek anahtar (key) kullanılır. Asimetrikte ise biri şifrelemek (Public), diğeri çözmek (Private) için iki farklı anahtar kullanılır.",
            az: "Simmetrikdə tək açar istifadə olunur. Asimmetrikdə isə biri şifrələmək (Public), digəri şifri açmaq (Private) üçün iki fərqli açar istifadə olunur.",
            en: "Symmetric uses one key for both encryption and decryption. Asymmetric uses a public key to encrypt and a private key to decrypt."
        }
    },
    {
        id: 19,
        q: {
            tr: "DMZ (Demilitarized Zone) nedir?",
            az: "DMZ nədir?",
            en: "What is a DMZ?"
        },
        a: {
            tr: "İç ağ ile dış ağ (İnternet) arasında bulunan, dışarıya açık servislerin (Web sunucusu gibi) yer aldığı tampon bölgedir.",
            az: "Daxili şəbəkə ilə xarici şəbəkə (İnternet) arasında yerləşən, kənara açıq xidmətlərin (Veb server kimi) olduğu bufer zonadır.",
            en: "A sub-network that exposes an organization's external-facing services to the internet while keeping the rest of the network private."
        }
    },
    {
        id: 20,
        q: {
            tr: "Hashing ve Encryption arasındaki fark nedir?",
            az: "Hashing və Şifrələmə arasındakı fərq nədir?",
            en: "Difference between Hashing and Encryption?"
        },
        a: {
            tr: "Şifreleme çift yönlüdür (Geri çözülebilir). Hashing tek yönlüdür; veri bir kez özetlendikten sonra orijinal haline geri döndürülemez.",
            az: "Şifrələmə iki tərəflidir (geri qaytarıla bilər). Hashing tək tərəflidir; məlumat bir dəfə hash olunduqdan sonra orijinal halına qaytarıla bilməz.",
            en: "Encryption is two-way (can be decrypted). Hashing is one-way; once data is hashed, it cannot be reversed to its original form."
        }
    }
],

    projects: [
    {
        id: 1,
        level: "junior",
        title: { tr: "Brute-Force Log Analiz Aracı", az: "Brute-Force Log Analiz Aləti", en: "Brute-Force Log Analyzer" },
        desc: { tr: "Sistem loglarını tarayarak şüpheli giriş denemelerini tespit eden script.", az: "Sistem loqlarını skan edərək şübhəli giriş cəhdlərini aşkar edən skript.", en: "A script that scans system logs to detect suspicious login attempts." },
        tech: ["Python", "Regex", "Linux Logs"],
        features: { 
            tr: ["Başarısız giriş tespiti", "IP bazlı raporlama", "E-posta uyarı sistemi"], 
            az: ["Uğursuz giriş təyini", "IP əsaslı hesabat", "E-poçt xəbərdarlığı"], 
            en: ["Failed login detection", "IP-based reporting", "Email alerting"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { tr: "Zafiyet Tarayıcı (Vulnerability Scanner)", az: "Zəiflik Skaneri", en: "Vulnerability Scanner" },
        desc: { tr: "Hedef web sitelerindeki açık portları ve yaygın güvenlik açıklarını (XSS, SQLi) tarayan araç.", az: "Hədəf saytlarda açıq portları və yaygın boşluqları (XSS, SQLi) skan edən alət.", en: "Tool that scans target websites for open ports and common vulnerabilities like XSS and SQLi." },
        tech: ["Python/Go", "Nmap API", "Requests/HTTP", "BeautifulSoup"],
        features: { 
            tr: ["Port tarama", "Payload enjeksiyonu", "HTML rapor çıktısı"], 
            az: ["Port skanlama", "Payload inyeksiyası", "HTML hesabat çıxışı"], 
            en: ["Port scanning", "Payload injection", "HTML report generation"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { tr: "Bal Küpü (Honeypot) & IDS", az: "Honeypot və IDS Sistemi", en: "Honeypot & IDS System" },
        desc: { tr: "Saldırganları yanıltmak için sahte servisler sunan ve aktiviteleri izleyen gelişmiş sistem.", az: "Hücum edənləri aldatmaq üçün saxta servislər yaradan və aktivliyi izləyən sistem.", en: "Advanced system that deploys decoy services to mislead attackers and monitor their activity." },
        tech: ["Docker", "ELK Stack (Elasticsearch, Logstash, Kibana)", "Suricata/Snort"],
        features: { 
            tr: ["Gerçek zamanlı trafik analizi", "Dashboard görselleştirme", "Otomatik IP engelleme"], 
            az: ["Real-time trafik analizi", "Dashboard vizuallaşdırma", "Avtomatik IP bloklama"], 
            en: ["Real-time traffic analysis", "Visual dashboards", "Automated IP blocking"] 
        }
    }
]
};

contentData['big-data'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Temeller", items: ["Linux Terminali & Bash Scripting", "İleri Seviye SQL", "Programlama (Python veya Scala)", "JVM Mantığı (Java Virtual Machine)"], status: "start" },
            { title: "Veri Mimarisi Kavramları", items: ["CAP Teoremi", "ETL vs ELT", "Data Warehouse vs Data Lake", "Batch vs Stream Processing"], status: "start" },
            { title: "Depolama (Storage)", items: ["Hadoop (HDFS)", "Amazon S3 / GCS (Object Storage)", "Parquet / Avro / ORC Formatları"], status: "mid" },
            { title: "İşleme (Processing)", items: ["Apache Spark (Standart)", "Hadoop MapReduce (Eski ama Temel)", "Databricks"], status: "mid" },
            { title: "Akış (Streaming)", items: ["Apache Kafka (Event Bus)", "Apache Flink (Real-time Processing)", "Spark Streaming"], status: "mid" },
            { title: "NoSQL & Modern Veritabanları", items: ["Apache Cassandra (Wide Column)", "HBase", "Elasticsearch (Search Engine)", "Neo4j (Graph DB)"], status: "advanced" },
            { title: "Veri Ambarı & SQL Motorları", items: ["Snowflake", "Google BigQuery", "Apache Hive", "Trino / Presto"], status: "advanced" },
            { title: "Orkestrasyon & Yönetim", items: ["Apache Airflow (Workflow)", "Docker & Kubernetes", "Data Governance (Veri Yönetişimi)"], status: "expert" }
        ],
        az: [
            { title: "Təməllər", items: ["Linux Terminal & Bash", "İrəli Səviyyə SQL", "Proqramlaşdırma (Python/Scala)", "JVM Məntiqi"], status: "start" },
            { title: "Məlumat Arxitekturası", items: ["CAP Teoremi", "ETL vs ELT", "Data Warehouse vs Data Lake", "Batch vs Stream Emalı"], status: "start" },
            { title: "Saxlama (Storage)", items: ["Hadoop (HDFS)", "Amazon S3 / GCS", "Parquet / Avro Formatları"], status: "mid" },
            { title: "Emal (Processing)", items: ["Apache Spark (Standart)", "Hadoop MapReduce", "Databricks"], status: "mid" },
            { title: "Axın (Streaming)", items: ["Apache Kafka", "Apache Flink (Real-time)", "Spark Streaming"], status: "mid" },
            { title: "NoSQL & Müasir Bazalar", items: ["Apache Cassandra", "HBase", "Elasticsearch", "Neo4j"], status: "advanced" },
            { title: "Məlumat Anbarı & SQL", items: ["Snowflake", "Google BigQuery", "Apache Hive", "Trino"], status: "advanced" },
            { title: "Orkestrasiya & İdarəetmə", items: ["Apache Airflow", "Docker & Kubernetes", "Məlumat İdarəçiliyi"], status: "expert" }
        ],
        en: [
            { title: "Foundations", items: ["Linux CLI & Bash", "Advanced SQL", "Programming (Python/Scala)", "JVM Internals"], status: "start" },
            { title: "Architecture Concepts", items: ["CAP Theorem", "ETL vs ELT", "Data Warehouse vs Lake", "Batch vs Stream"], status: "start" },
            { title: "Storage", items: ["Hadoop (HDFS)", "Amazon S3 / GCS", "File Formats (Parquet/Avro)"], status: "mid" },
            { title: "Processing", items: ["Apache Spark (Standard)", "Hadoop MapReduce", "Databricks"], status: "mid" },
            { title: "Streaming", items: ["Apache Kafka", "Apache Flink", "Spark Streaming"], status: "mid" },
            { title: "NoSQL & Modern DBs", items: ["Apache Cassandra", "HBase", "Elasticsearch", "Neo4j"], status: "advanced" },
            { title: "Warehousing & SQL Engines", items: ["Snowflake", "BigQuery", "Apache Hive", "Trino / Presto"], status: "advanced" },
            { title: "Orchestration & Ops", items: ["Apache Airflow", "Docker & Kubernetes", "Data Governance"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // Books & Reading
            { type: 'doc', title: 'Designing Data-Intensive Applications', url: 'https://dataintensive.net', desc: 'Martin Kleppmann\'ın yazdığı, bu işin "Kutsal Kitabı". Her veri mühendisi okumalı.', lang: 'en' },
            { type: 'doc', title: 'Apache Spark Docs', url: 'https://spark.apache.org/docs/latest/', desc: 'Büyük veri işlemenin kralı olan Spark\'ın resmi belgeleri.', lang: 'en' },

            // YouTube
            { type: 'youtube', title: 'Seattle Data Guy', url: 'https://youtube.com/@SeattleDataGuy', desc: 'Veri mühendisliği kariyeri ve araçları hakkında harika analizler.', lang: 'en' },
            { type: 'youtube', title: 'Marc Lamberti', url: 'https://youtube.com/@marclamberti', desc: 'Airflow ve Data Engineering üzerine çok detaylı teknik videolar.', lang: 'en' },
            { type: 'youtube', title: 'Data Engineering (FreeCodeCamp)', url: 'https://www.youtube.com/watch?v=qWru-b6m030', desc: '3 saatlik devasa başlangıç kursu.', lang: 'en' },

            // Tools
            { type: 'tool', title: 'Databricks Community', url: 'https://community.cloud.databricks.com', desc: 'Spark ve Big Data öğrenmek için ücretsiz bulut ortamı.', lang: 'global' },
            { type: 'tool', title: 'Confluent Cloud', url: 'https://confluent.cloud', desc: 'Kafka öğrenmek için en kolay, yönetilen (managed) platform.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (Data Engineer)', url: 'https://roadmap.sh/data-engineer', desc: 'Veri Mühendisliği için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Bankacılık & E-Ticaret"],
            top_skills: ["Spark", "Hadoop", "Kafka", "Airflow", "SQL"],
            avg_salary: "Junior: 45k-65k TL | Mid: 85k-125k TL | Senior: 170k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Kapital Bank / Pasha Bank"],
            top_skills: ["PL/SQL", "Hadoop", "Python", "ETL Tools"],
            avg_salary: "Junior: 1200-1800 AZN | Mid: 2500-4000 AZN | Senior: 6000+ AZN"
        },
        GLOBAL: {
            platforms: ["LinkedIn", "RemoteOK", "Dice", "Toptal"],
            top_skills: ["Databricks", "Snowflake", "AWS Glue", "Python/Scala"],
            avg_salary: "Junior: $6k-$9k | Mid: $11k-$16k | Senior: $22k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Veri Bilimcisi (Data Scientist) ile Veri Mühendisi (Data Engineer) farkı ne?",
                az: "Məlumat Alimi ilə Məlumat Mühəndisi fərqi nədir?",
                en: "Difference between Data Scientist and Data Engineer?"
            },
            a: {
                tr: "Veri Mühendisi 'tesisatçıdır'; boruları döşer, veriyi taşır ve temizler. Veri Bilimcisi ise o temiz veriyi alıp analiz eder ve modeller kurar. Mühendis olmadan Bilimci çalışamaz.",
                az: "Məlumat Mühəndisi 'santexnikdir'; boruları çəkir, məlumatı daşıyır və təmizləyir. Məlumat Alimi isə o təmiz məlumatı alıb analiz edir. Mühəndis olmadan Alim işləyə bilməz.",
                en: "Data Engineer is the 'plumber'; building pipelines and cleaning data. Data Scientist analyzes that clean data. Scientists can't work without Engineers."
            }
        },
        {
            id: 2,
            q: {
                tr: "Hadoop öldü mü?",
                az: "Hadoop öldü?",
                en: "Is Hadoop dead?"
            },
            a: {
                tr: "Hadoop'un hesaplama kısmı (MapReduce) öldü, yerini Spark aldı. Ancak depolama kısmı (HDFS) hala büyük şirketlerde (On-Premise) kullanılıyor. Bulutta ise yerini S3/GCS aldı.",
                az: "Hadoop-un hesablama hissəsi (MapReduce) öldü, yerini Spark aldı. Lakin saxlama hissəsi (HDFS) hələ də böyük şirkətlərdə istifadə olunur. Buludda isə yerini S3/GCS aldı.",
                en: "Hadoop's compute part (MapReduce) is dead, replaced by Spark. But its storage (HDFS) is still used in large on-premise systems. In Cloud, S3/GCS replaced it."
            }
        },
        {
            id: 3,
            q: {
                tr: "Python mı Scala mı öğrenmeliyim?",
                az: "Python yoxsa Scala öyrənməliyəm?",
                en: "Should I learn Python or Scala?"
            },
            a: {
                tr: "Başlangıç ve genel kullanım için Python (PySpark). Ancak Spark ve Kafka'nın ana dili Scala'dır; çok yüksek performanslı, devasa sistemler kuracaksanız Scala (ve Java) bilmek sizi 'Senior' yapar.",
                az: "Başlanğıc üçün Python (PySpark). Lakin Spark və Kafka-nın ana dili Scala-dır; çox yüksək performanslı sistemlər quracaqsınızsa Scala bilmək sizi 'Senior' edər.",
                en: "Python (PySpark) for beginners and general use. However, Scala is the native language of Spark/Kafka; knowing it makes you a 'Senior' for high-performance systems."
            }
        },
        {
            id: 4,
            q: {
                tr: "ETL nedir?",
                az: "ETL nədir?",
                en: "What is ETL?"
            },
            a: {
                tr: "Extract (Çek), Transform (Dönüştür), Load (Yükle). Veriyi bir yerden alıp, formatını değiştirip (örn: para birimi çevirme), hedef veritabanına kaydetme sürecidir.",
                az: "Extract, Transform, Load. Məlumatı bir yerdən alıb, formatını dəyişdirib (məs: valyuta çevirmə), hədəf bazaya yazma prosesidir.",
                en: "Extract, Transform, Load. It is the process of taking data from a source, changing its format, and saving it to a target database."
            }
        },
        {
            id: 5,
            q: {
                tr: "Kafka ne işe yarar?",
                az: "Kafka nə işə yarayır?",
                en: "What does Kafka do?"
            },
            a: {
                tr: "Kafka, gerçek zamanlı veri boru hattıdır. Milyonlarca veriyi (loglar, tıklamalar) anlık olarak bir yerden bir yere kayıpsız taşımak için kullanılır. Big Data'nın sinir sistemidir.",
                az: "Kafka, real vaxt məlumat boru xəttidir. Milyonlarla məlumatı (loglar, kliklər) anlıq olaraq bir yerdən digərinə itkisiz daşımaq üçün istifadə olunur.",
                en: "Kafka is a real-time data pipeline. It is used to transport millions of data points (logs, clicks) instantly without loss. It is the nervous system of Big Data."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "Big Data'nın 5V'si nedir?",
            az: "Big Data-nın 5V-si nədir?",
            en: "What are the 5Vs of Big Data?"
        },
        a: {
            tr: "Volume (Hacim), Velocity (Hız), Variety (Çeşitlilik), Veracity (Doğruluk) ve Value (Değer).",
            az: "Volume (Həcm), Velocity (Sürət), Variety (Müxtəliflik), Veracity (Dürüstlük) və Value (Dəyər).",
            en: "Volume, Velocity, Variety, Veracity, and Value."
        }
    },
    {
        id: 2,
        q: {
            tr: "Hadoop Ecosystem nedir?",
            az: "Hadoop Ecosystem nədir?",
            en: "What is the Hadoop Ecosystem?"
        },
        a: {
            tr: "Büyük veri setlerini dağıtık olarak depolamak (HDFS) ve işlemek (MapReduce) için kullanılan açık kaynaklı bir framework topluluğudur.",
            az: "Böyük məlumat setlərini paylanmış şəkildə saxlamaq (HDFS) və emal etmək (MapReduce) üçün istifadə olunan açıq mənbəli platformadır.",
            en: "An open-source framework that allows for the distributed processing of large data sets across clusters of computers."
        }
    },
    {
        id: 3,
        q: {
            tr: "HDFS (Hadoop Distributed File System) nasıl çalışır?",
            az: "HDFS (Hadoop Distributed File System) necə işləyir?",
            en: "How does HDFS work?"
        },
        a: {
            tr: "Verileri bloklara böler ve farklı düğümlere (DataNodes) kopyalayarak saklar. NameNode ise bu verilerin nerede olduğunu yönetir.",
            az: "Məlumatları bloklara bölür və fərqli qovşaqlarda (DataNodes) kopyalayaraq saxlayır. NameNode isə bu məlumatların harada olduğunu idarə edir.",
            en: "It breaks data into blocks and distributes them across clusters. It uses a Master-Slave architecture with NameNode and DataNodes."
        }
    },
    {
        id: 4,
        q: {
            tr: "Apache Spark'ın MapReduce'tan farkı nedir?",
            az: "Apache Spark-ın MapReduce-dan fərqi nədir?",
            en: "What is the difference between Apache Spark and MapReduce?"
        },
        a: {
            tr: "Spark veriyi bellek içinde (in-memory) işler, bu yüzden MapReduce'tan (disk bazlı) çok daha hızlıdır.",
            az: "Spark məlumatı operativ yaddaş daxilində (in-memory) emal edir, buna görə də MapReduce-dan (disk əsaslı) qat-qat sürətlidir.",
            en: "Spark processes data in-memory, making it significantly faster than the disk-based MapReduce."
        }
    },
    {
        id: 5,
        q: {
            tr: "RDD (Resilient Distributed Dataset) nedir?",
            az: "RDD (Resilient Distributed Dataset) nədir?",
            en: "What is RDD?"
        },
        a: {
            tr: "Spark'ın temel veri yapısıdır. Hata toleranslıdır ve verilerin paralel olarak işlenmesini sağlar.",
            az: "Spark-ın əsas məlumat strukturudur. Xətalara qarşı davamlıdır və məlumatların paralel emalını təmin edir.",
            en: "The fundamental data structure of Spark. It is an immutable, fault-tolerant collection of objects distributed across a cluster."
        }
    },
    {
        id: 6,
        q: {
            tr: "Apache Kafka nedir?",
            az: "Apache Kafka nədir?",
            en: "What is Apache Kafka?"
        },
        a: {
            tr: "Gerçek zamanlı veri akışlarını (data streams) yüksek performansla toplamak ve iletmek için kullanılan bir mesajlaşma sistemidir.",
            az: "Real zamanlı məlumat axınlarını (data streams) yüksək performansla toplamaq və ötürmək üçün istifadə olunan mesajlaşma sistemidir.",
            en: "A distributed streaming platform used for building real-time data pipelines and streaming apps."
        }
    },
    {
        id: 7,
        q: {
            tr: "NoSQL veritabanı türleri nelerdir?",
            az: "NoSQL verilənlər bazası növləri hansılardır?",
            en: "What are the types of NoSQL databases?"
        },
        a: {
            tr: "Key-Value (Redis), Document (MongoDB), Column-family (Cassandra) ve Graph (Neo4j).",
            az: "Key-Value (Redis), Document (MongoDB), Column-family (Cassandra) və Graph (Neo4j).",
            en: "Key-Value, Document-based, Column-family, and Graph databases."
        }
    },
    {
        id: 8,
        q: {
            tr: "Data Lake ve Data Warehouse farkı nedir?",
            az: "Data Lake və Data Warehouse fərqi nədir?",
            en: "Difference between Data Lake and Data Warehouse?"
        },
        a: {
            tr: "Data Lake ham ve işlenmemiş veriyi saklar. Data Warehouse ise işlenmiş, yapılandırılmış veriyi analiz için depolar.",
            az: "Data Lake xam və emal olunmamış məlumatı saxlayır. Data Warehouse isə strukturlaşdırılmış və analizə hazır məlumatı saxlayır.",
            en: "A Data Lake stores raw, unstructured data. A Data Warehouse stores processed, structured data for reporting and analysis."
        }
    },
    {
        id: 9,
        q: {
            tr: "ETL (Extract, Transform, Load) süreci nedir?",
            az: "ETL (Extract, Transform, Load) prosesi nədir?",
            en: "What is the ETL process?"
        },
        a: {
            tr: "Veriyi kaynaktan çekme, dönüştürme (temizleme, formatlama) ve hedef sisteme yükleme sürecidir.",
            az: "Məlumatı mənbədən götürmə, dəyişdirmə (təmizləmə, formatlama) və hədəf sistemə yükləmə prosesidir.",
            en: "The process of extracting data from sources, transforming it into a usable format, and loading it into a destination system."
        }
    },
    {
        id: 10,
        q: {
            tr: "Partitioning ve Sharding farkı nedir?",
            az: "Partitioning və Sharding fərqi nədir?",
            en: "Difference between Partitioning and Sharding?"
        },
        a: {
            tr: "Partitioning veriyi aynı sunucu içinde böler. Sharding ise veriyi farklı fiziksel sunuculara dağıtır.",
            az: "Partitioning məlumatı eyni server daxilində bölür. Sharding isə məlumatı fərqli fiziki serverlərə paylayır.",
            en: "Partitioning splits data within a single server. Sharding distributes data across multiple physical machines."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "E-Ticaret Log Analizi (Batch Processing)", 
            az: "E-Ticarət Log Analizi (Batch Processing)", 
            en: "E-commerce Log Analysis" 
        },
        desc: { 
            tr: "Milyonlarca satırlık web sunucu loglarını analiz ederek en popüler ürünleri bulan sistem.", 
            az: "Milyonlarla sətirlik web server loglarını analiz edərək ən populyar məhsulları tapan sistem.", 
            en: "A system that analyzes millions of web server log entries to find the most popular products." 
        },
        tech: ["Apache Spark (PySpark)", "HDFS", "SQL", "Python"],
        features: { 
            tr: ["Veri temizleme (Data Cleaning)", "Agregasyon işlemleri", "Parquet formatında depolama"], 
            az: ["Məlumat təmizləmə", "Aqreqasiya əməliyyatları", "Parquet formatında saxlama"], 
            en: ["Data cleaning", "Aggregation operations", "Storage in Parquet format"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "Gerçek Zamanlı Sahtekarlık Tespit Sistemi", 
            az: "Real Zamanlı Fırıldaqçılıq Aşkarlama Sistemi", 
            en: "Real-time Fraud Detection System" 
        },
        desc: { 
            tr: "Banka işlemlerini anlık olarak takip edip şüpheli aktiviteleri saniyeler içinde belirleyen yapı.", 
            az: "Bank əməliyyatlarını anlıq izləyərək şübhəli fəaliyyətləri saniyələr daxilində müəyyən edən struktur.", 
            en: "A pipeline that monitors bank transactions in real-time and identifies suspicious activities within seconds." 
        },
        tech: ["Apache Kafka", "Spark Streaming", "NoSQL (Cassandra/Redis)", "Grafana"],
        features: { 
            tr: ["Stream Processing", "Düşük gecikmeli veri işleme", "Anlık dashboard görselleştirme"], 
            az: ["Stream Processing", "Aşağı gecikməli emal", "Anlıq dashboard vizuallaşdırma"], 
            en: ["Stream Processing", "Low-latency data processing", "Real-time dashboard visualization"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "Modern Data Lakehouse Mimarisi", 
            az: "Müasir Data Lakehouse Memarlığı", 
            en: "Modern Data Lakehouse Architecture" 
        },
        desc: { 
            tr: "Hem yapısal hem yapısal olmayan büyük verileri yöneten, ACID desteği sunan bütünsel veri platformu.", 
            az: "Həm strukturlaşmış, həm də qeyri-struktur böyük məlumatları idarə edən, ACID dəstəkli vahid data platforması.", 
            en: "A unified data platform that manages structured and unstructured big data while providing ACID transaction support." 
        },
        tech: ["Delta Lake", "Apache Iceberg", "Trino/Presto", "AWS/Azure Cloud"],
        features: { 
            tr: ["Schema Enforcement", "Time Travel (Veri versiyonlama)", "Dağıtık sorgu optimizasyonu"], 
            az: ["Schema Enforcement", "Time Travel (Data versiyalaması)", "Paylanmış sorğu optimallaşdırılması"], 
            en: ["Schema Enforcement", "Time Travel (Data versioning)", "Distributed query optimization"] 
        }
    }
]
};

contentData['deep-learning'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Sinir Ağları Temelleri", items: ["Nöronlar & Perceptrons", "Aktivasyon Fonksiyonları (ReLU, Sigmoid)", "Loss Functions & Backpropagation", "Optimizers (Adam, SGD)"], status: "start" },
            { title: "Framework Seçimi", items: ["PyTorch (Sektör Standardı)", "TensorFlow / Keras", "Tensor İşlemleri", "GPU/CUDA Kullanımı"], status: "start" },
            { title: "Bilgisayarlı Göru (Computer Vision)", items: ["Convolutional Neural Networks (CNN)", "Nesne Tanıma (YOLO)", "Görüntü Segmentasyonu", "OpenCV"], status: "mid" },
            { title: "Doğal Dil İşleme (NLP)", items: ["RNN & LSTM (Eski ama Temel)", "Word Embeddings (Word2Vec)", "Attention Mechanism", "Transformers Mimarisi"], status: "mid" },
            { title: "Üretken Yapay Zeka (GenAI)", items: ["GANs (Generative Adversarial Networks)", "Diffusion Models (Stable Diffusion)", "LLMs (GPT, Llama)", "Prompt Engineering"], status: "advanced" },
            { title: "İleri Seviye Konular", items: ["Reinforcement Learning (Pekiştirmeli Öğrenme)", "Graph Neural Networks", "Explainable AI (XAI)", "Model Fine-Tuning"], status: "expert" },
            { title: "Deployment & Ölçekleme", items: ["Model Quantization (Küçültme)", "ONNX Runtime", "TorchServe", "Multi-GPU Training"], status: "expert" }
        ],
        az: [
            { title: "Sinir Şəbəkələrinin Əsasları", items: ["Neyronlar & Perceptronlar", "Aktivasiya Funksiyaları", "İtki Funksiyaları & Backpropagation", "Optimayzerlər (Adam)"], status: "start" },
            { title: "Freymvörk Seçimi", items: ["PyTorch (Sənaye Standartı)", "TensorFlow / Keras", "Tensor Əməliyyatları", "GPU/CUDA İstifadəsi"], status: "start" },
            { title: "Kompüter Görmə", items: ["Konvolyusiya Şəbəkələri (CNN)", "Obyekt Tanıma (YOLO)", "Təsvir Seqmentasiyası", "OpenCV"], status: "mid" },
            { title: "Təbii Dil Emalı (NLP)", items: ["RNN & LSTM", "Söz Vektorları", "Diqqət Mexanizmi (Attention)", "Transformers Arxitekturası"], status: "mid" },
            { title: "Generativ Süni İntellekt", items: ["GANs", "Diffuziya Modelləri", "LLMs (Böyük Dil Modelləri)", "Prompt Mühəndisliyi"], status: "advanced" },
            { title: "İrəli Səviyyə Mövzular", items: ["Gücləndirməli Öyrənmə (RL)", "Qraf Sinir Şəbəkələri", "İzah Edilə bilən AI", "Model Fine-Tuning"], status: "expert" },
            { title: "Yerləşdirmə & Ölçəkləmə", items: ["Model Kvantizasiyası", "ONNX Runtime", "TorchServe", "Multi-GPU Təlimi"], status: "expert" }
        ],
        en: [
            { title: "Neural Network Basics", items: ["Neurons & Perceptrons", "Activation Functions", "Backpropagation & Loss", "Optimizers (Adam, SGD)"], status: "start" },
            { title: "Framework Mastery", items: ["PyTorch (Industry Standard)", "TensorFlow / Keras", "Tensor Operations", "GPU/CUDA Usage"], status: "start" },
            { title: "Computer Vision", items: ["CNNs (Convolutional Networks)", "Object Detection (YOLO)", "Image Segmentation", "OpenCV"], status: "mid" },
            { title: "NLP Mastery", items: ["RNNs & LSTMs", "Word Embeddings", "Attention Mechanism", "Transformers Architecture"], status: "mid" },
            { title: "Generative AI", items: ["GANs", "Diffusion Models", "Large Language Models (LLMs)", "Fine-Tuning"], status: "advanced" },
            { title: "Advanced Topics", items: ["Reinforcement Learning (RL)", "Graph Neural Networks", "Explainable AI (XAI)", "Self-Supervised Learning"], status: "expert" },
            { title: "Deployment & Scaling", items: ["Model Quantization", "ONNX Runtime", "Serving (TorchServe)", "Distributed Training"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // Courses & YouTube
            { type: 'course', title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning', desc: 'Andrew Ng tarafından hazırlanan, bu alanın "üniversite diploması" sayılan kurs serisi.', lang: 'en' },
            { type: 'course', title: 'Fast.ai', url: 'https://course.fast.ai', desc: 'Jeremy Howard\'ın "kod yazarak öğren" mantığıyla hazırladığı efsanevi pratik kurs.', lang: 'en' },
            { type: 'youtube', title: 'Andrej Karpathy', url: 'https://youtube.com/@AndrejKarpathy', desc: 'Eski Tesla AI direktöründen, "Neural Networks from Scratch" gibi başyapıt videolar.', lang: 'en' },
            { type: 'youtube', title: '3Blue1Brown', url: 'https://youtube.com/@3blue1brown', desc: 'Sinir ağlarının matematiğini görsel şölenle anlatan kanal.', lang: 'en' },

            // Documentation & Tools
            { type: 'doc', title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', desc: 'Meta\'nın geliştirdiği ve araştırmacıların favorisi olan kütüphanenin resmi dersleri.', lang: 'en' },
            { type: 'tool', title: 'Papers with Code', url: 'https://paperswithcode.com', desc: 'En son akademik makalelerin ve onların kodlarının bulunduğu hazine.', lang: 'en' },
            { type: 'tool', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'Transformer modellerinin ve açık kaynak yapay zekanın kalbi.', lang: 'global' },
            { type: 'tool', title: 'Google Colab Pro', url: 'https://colab.research.google.com', desc: 'Bulutta GPU (T4/A100) kiralayıp model eğitmek için en erişilebilir yol.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (AI)', url: 'https://roadmap.sh/ai-data-scientist', desc: 'Görsel öğrenme yolu.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Teknokent (Aselsan/Havelsan/TUSAŞ)", "AI Startups"],
            top_skills: ["PyTorch", "Computer Vision", "NLP", "CUDA", "C++"],
            avg_salary: "Junior: 50k-70k TL | Mid: 90k-130k TL | Senior: 180k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Innovations Center"],
            top_skills: ["Python", "TensorFlow/PyTorch", "Data Science", "Computer Vision"],
            avg_salary: "Junior: 1500-2000 AZN | Mid: 3000-4500 AZN | Senior: 7000+ AZN"
        },
        GLOBAL: {
            platforms: ["OpenAI Careers", "Anthropic", "DeepMind", "RemoteOK"],
            top_skills: ["LLM Training", "Distributed Systems", "Research Paper Implementation"],
            avg_salary: "Junior: $8k-$12k | Mid: $15k-$20k | Senior: $25k+ (Aylık/Remote/US)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Machine Learning ile Deep Learning farkı ne?",
                az: "Machine Learning ilə Deep Learning fərqi nədir?",
                en: "What is the difference between ML and Deep Learning?"
            },
            a: {
                tr: "ML daha geneldir; veriden öğrenen her şeyi kapsar (Excel tablosu analizi gibi). Deep Learning ise ML'in 'yapay sinir ağları' kullanan, resim/ses gibi karmaşık verileri işleyen alt kümesidir.",
                az: "ML daha ümumidir; məlumatdan öyrənən hər şeyi əhatə edir. Deep Learning isə ML-in 'süni sinir şəbəkələri' istifadə edən, şəkil/səs kimi mürəkkəb məlumatları emal edən alt çoxluğudur.",
                en: "ML is general; covering anything that learns from data. Deep Learning is a subset of ML using 'neural networks' to process complex data like images/audio."
            }
        },
        {
            id: 2,
            q: {
                tr: "GPU (Ekran Kartı) olmadan öğrenebilir miyim?",
                az: "GPU (Video Kart) olmadan öyrənə bilərəm?",
                en: "Can I learn without a GPU?"
            },
            a: {
                tr: "Teoriyi öğrenirsiniz ama model eğitemezsiniz. Deep Learning çok yüksek işlem gücü ister. Bilgisayarınız kötüyse Google Colab veya Kaggle gibi bulut servislerini kullanmalısınız.",
                az: "Teoriyanı öyrənərsiniz, amma model öyrədə bilməzsiniz. Deep Learning çox yüksək emal gücü tələb edir. Kompüteriniz zəifdirsə Google Colab və ya Kaggle kimi bulud servislərini istifadə etməlisiniz.",
                en: "You can learn the theory, but can't train models. Deep Learning requires massive compute. If your PC is weak, use cloud services like Google Colab or Kaggle."
            }
        },
        {
            id: 3,
            q: {
                tr: "Hangi Matematik konularını bilmeliyim?",
                az: "Hansı Riyaziyyat mövzularını bilməliyəm?",
                en: "Which Math topics should I know?"
            },
            a: {
                tr: "Kalkülüs (Türev - Backpropagation için), Lineer Cebir (Matris çarpımları için) ve İstatistik. Framework'ler (PyTorch) bu işlemleri otomatik yapar ama mantığı anlamak için matematik şarttır.",
                az: "Kalkulus (Törəmə), Xətti Cəbr (Matrislər) və Statistika. Freymvörklər (PyTorch) bu əməliyyatları avtomatik edir, amma məntiqi anlamaq üçün riyaziyyat şərtdir.",
                en: "Calculus (Derivatives), Linear Algebra (Matrix ops), and Statistics. Frameworks (PyTorch) automate this, but math is required to understand the 'why'."
            }
        },
        {
            id: 4,
            q: {
                tr: "Sektörde en çok hangi Framework kullanılıyor?",
                az: "Sektorda ən çox hansı Freymvörk istifadə olunur?",
                en: "Which Framework is used most in the industry?"
            },
            a: {
                tr: "PyTorch. Araştırma (OpenAI, Meta) ve modern üretim ortamlarında açık ara liderdir. TensorFlow (Google) hala kullanılıyor ama popülaritesi azalıyor.",
                az: "PyTorch. Araşdırma və müasir istehsalat mühitlərində liderdir. TensorFlow hələ də istifadə olunur, amma populyarlığı azalır.",
                en: "PyTorch. It is the leader in research (OpenAI, Meta) and modern production. TensorFlow is still used but declining in popularity."
            }
        },
        {
            id: 5,
            q: {
                tr: "Black Box (Kara Kutu) problemi nedir?",
                az: "Black Box (Qara Qutu) problemi nədir?",
                en: "What is the Black Box problem?"
            },
            a: {
                tr: "Deep Learning modellerinin nasıl karar verdiğini tam olarak anlayamamamızdır. Milyarlarca parametre arasında kararın 'neden' alındığını açıklamak zordur (Explainable AI bu sorunu çözmeye çalışır).",
                az: "Deep Learning modellərinin necə qərar verdiyini tam anlaya bilməməyimizdir. Milyardlarla parametr arasında qərarın 'niyə' verildiyini izah etmək çətindir.",
                en: "It's the inability to fully understand how DL models make decisions. Explaining 'why' a decision was made among billions of parameters is hard."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "Yapay Sinir Ağları (ANN) nasıl çalışır?",
            az: "Süni Sinir Şəbəkələri (ANN) necə işləyir?",
            en: "How do Artificial Neural Networks (ANN) work?"
        },
        a: {
            tr: "Giriş katmanı, gizli katmanlar ve çıkış katmanından oluşur. Veri ileri yayılım (forward propagation) ile iletilir ve hata geri yayılım (backpropagation) ile optimize edilir.",
            az: "Giriş, gizli və çıxış təbəqələrindən ibarətdir. Məlumat irəli ötürülmə ilə ötürülür və xəta geri ötürülmə (backpropagation) alqoritmi ilə optimallaşdırılır.",
            en: "Consists of input, hidden, and output layers. Data moves through forward propagation, and weights are updated via backpropagation to minimize error."
        }
    },
    {
        id: 2,
        q: {
            tr: "Aktivasyon Fonksiyonu (ReLU, Sigmoid, Softmax) neden kullanılır?",
            az: "Aktivasiya Funksiyası (ReLU, Sigmoid, Softmax) nə üçün istifadə olunur?",
            en: "Why are Activation Functions used?"
        },
        a: {
            tr: "Ağa doğrusal olmayan (non-linear) özellikler kazandırmak için kullanılır. Bu sayede ağ karmaşık ilişkileri öğrenebilir.",
            az: "Şəbəkəyə xətti olmayan xüsusiyyətlər qazandırmaq üçün istifadə olunur. Bu sayədə şəbəkə mürəkkəb asılılıqları öyrənə bilir.",
            en: "They introduce non-linearity to the network, allowing it to learn complex patterns that a simple linear model cannot."
        }
    },
    {
        id: 3,
        q: {
            tr: "Backpropagation (Geri Yayılım) nedir?",
            az: "Backpropagation (Geri ötürülmə) nədir?",
            en: "What is Backpropagation?"
        },
        a: {
            tr: "Modelin yaptığı hatayı çıkıştan girişe doğru yayarak, ağırlıkların (weights) Gradyan İnişi ile güncellenmesini sağlayan temel eğitim algoritmasıdır.",
            az: "Modelin etdiyi xətanı çıxışdan girişə doğru yayaraq, çəki əmsallarının (weights) Gradient Descent ilə yenilənməsini təmin edən təlim alqoritmidir.",
            en: "The central algorithm for training neural networks, calculating the gradient of the loss function with respect to the weights."
        }
    },
    {
        id: 4,
        q: {
            tr: "CNN (Convolutional Neural Networks) nerelerde kullanılır?",
            az: "CNN (Konvolüsyonel Sinir Şəbəkələri) harada istifadə olunur?",
            en: "Where are CNNs used?"
        },
        a: {
            tr: "Özellikle görüntü işleme (image processing), nesne tanıma ve video analizinde kullanılır. Mekansal özellikleri yakalamada çok başarılıdır.",
            az: "Xüsusilə təsvirlərin emalı (image processing), obyektlərin tanınması və video analizində istifadə olunur. Məkansal xüsusiyyətləri tutmaqda çox uğurludur.",
            en: "Primarily used in computer vision tasks like image classification, object detection, and facial recognition due to their ability to capture spatial features."
        }
    },
    {
        id: 5,
        q: {
            tr: "RNN ve LSTM arasındaki fark nedir?",
            az: "RNN və LSTM arasındakı fərq nədir?",
            en: "Difference between RNN and LSTM?"
        },
        a: {
            tr: "RNN kısa süreli belleğe sahiptir ve uzun dizilerde 'vanishing gradient' sorunu yaşar. LSTM ise özel kapı (gate) mekanizmasıyla uzun vadeli bilgileri saklayabilir.",
            az: "RNN qısamüddətli yaddaşa malikdir və uzun ardıcıllıqlarda 'vanishing gradient' problemi yaşayır. LSTM isə xüsusi qapı (gate) mexanizmi ilə uzunmüddətli məlumatları saxlaya bilir.",
            en: "RNNs struggle with long-term dependencies (vanishing gradient). LSTMs solve this using 'gates' to regulate the flow of information over long sequences."
        }
    },
    {
        id: 6,
        q: {
            tr: "Vanishing Gradient (Kaybolan Gradyan) problemi nedir?",
            az: "Vanishing Gradient (Yox olan qradient) problemi nədir?",
            en: "What is the Vanishing Gradient problem?"
        },
        a: {
            tr: "Derin ağlarda geriye doğru gidildikçe gradyanların çok küçülmesi ve eğitimin durma noktasına gelmesidir. ReLU kullanımı bu sorunu azaltır.",
            az: "Dərin şəbəkələrdə geri qayıtdıqca qradientlərin həddindən artıq kiçilməsi və təlimin dayanma dərəcəsinə çatmasıdır. ReLU istifadəsi bu problemi azaldır.",
            en: "Occurs when gradients become extremely small during backpropagation, preventing weights from changing and halting the learning process."
        }
    },
    {
        id: 7,
        q: {
            tr: "Transfer Learning nedir?",
            az: "Transfer Learning nədir?",
            en: "What is Transfer Learning?"
        },
        a: {
            tr: "Önceden büyük bir veri setinde eğitilmiş bir modeli (örn: ResNet, BERT), kendi daha küçük veri setimiz için özelleştirip kullanma tekniğidir.",
            az: "Əvvəlcədən böyük bir məlumat setində öyrədilmiş modeli (məs: ResNet, BERT), özümüzün daha kiçik məlumat setimiz üçün yenidən tənzimləyib istifadə etməkdir.",
            en: "The practice of reusing a pre-trained model on a new, related task, significantly reducing the amount of data and time needed for training."
        }
    },
    {
        id: 8,
        q: {
            tr: "Dropout katmanı ne işe yarar?",
            az: "Dropout təbəqəsi nə işə yarayır?",
            en: "What is the purpose of a Dropout layer?"
        },
        a: {
            tr: "Eğitim sırasında bazı nöronları rastgele devre dışı bırakarak ağın belirli nöronlara aşırı bağımlı olmasını engeller ve overfitting'i azaltır.",
            az: "Təlim zamanı bəzi neyronları təsadüfi olaraq söndürərək şəbəkənin müəyyən neyronlardan asılı olmasını əngəlləyir və overfitting-i azaldır.",
            en: "A regularization technique where randomly selected neurons are ignored during training to prevent overfitting."
        }
    },
    {
        id: 9,
        q: {
            tr: "Transformer mimarisi ve Attention mekanizması nedir?",
            az: "Transformer arxitekturası və Attention mexanizmi nədir?",
            en: "What is Transformer architecture and Attention mechanism?"
        },
        a: {
            tr: "Dizideki her kelimenin diğer tüm kelimelerle olan ilişkisini (önemini) hesaplayan bir yapıdır. Modern NLP (ChatGPT vb.) modellerinin temelidir.",
            az: "Ardıcıllıqdakı hər bir sözün digər bütün sözlərlə olan əlaqəsini (əhəmiyyətini) hesablayan strukturdur. Müasir NLP modellərinin əsasıdır.",
            en: "The foundation of modern NLP. It uses self-attention to weight the significance of different parts of the input data regardless of distance."
        }
    },
    {
        id: 10,
        q: {
            tr: "Generative AI (Üretken YZ) nedir?",
            az: "Generative AI (Yaradıcı SY) nədir?",
            en: "What is Generative AI?"
        },
        a: {
            tr: "Mevcut verilerden öğrenerek yeni ve özgün içerikler (metin, resim, ses, kod) üretebilen yapay zeka sistemleridir (Örn: GANs, Diffusion Models, LLMs).",
            az: "Mövcud məlumatlardan öyrənərək yeni və orijinal məzmunlar (mətn, şəkil, səs, kod) yarada bilən süni intellekt sistemləridir.",
            en: "AI systems capable of generating new content like text, images, or audio by learning patterns from existing data."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "Trafik İşaretleri Tanıma Sistemi", 
            az: "Yol Nişanlarının Tanınması Sistemi", 
            en: "Traffic Sign Recognition System" 
        },
        desc: { 
            tr: "Bilgisayarlı görü kullanarak trafik işaretlerini gerçek zamanlı sınıflandıran model.", 
            az: "Computer Vision istifadə edərək yol nişanlarını real zamanlı təsnif edən model.", 
            en: "A model that classifies traffic signs in real-time using computer vision." 
        },
        tech: ["Python", "Keras/TensorFlow", "OpenCV", "CNN"],
        features: { 
            tr: ["Görüntü Artırma (Augmentation)", "CNN Katman Tasarımı", "%95+ Doğruluk Oranı"], 
            az: ["Görüntü artırma (Augmentation)", "CNN təbəqə dizaynı", "%95+ dəqiqlik dərəcəsi"], 
            en: ["Image Augmentation", "Custom CNN architecture", "95%+ Accuracy"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "Dil Çeviri Modeli (Encoder-Decoder)", 
            az: "Dil Tərcümə Modeli (Encoder-Decoder)", 
            en: "Language Translation Model" 
        },
        desc: { 
            tr: "Bir dilden diğerine otomatik çeviri yapan Sequence-to-Sequence modeli.", 
            az: "Bir dildən digərinə avtomatik tərcümə edən Sequence-to-Sequence modeli.", 
            en: "A sequence-to-sequence model that performs neural machine translation between two languages." 
        },
        tech: ["PyTorch", "LSTM/GRU", "Attention Mechanism", "NLTK"],
        features: { 
            tr: ["Attention mekanizması", "Tokenization ve Word Embeddings", "BLEU Score değerlendirmesi"], 
            az: ["Attention mexanizmi", "Tokenization və Word Embeddings", "BLEU Score qiymətləndirilməsi"], 
            en: ["Attention Mechanism", "Tokenization & Embeddings", "BLEU Score evaluation"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "Generative Adversarial Network (GAN) ile Yüz Oluşturma", 
            az: "GAN ilə Realistik İnsan Üzlərinin Yaradılması", 
            en: "Face Generation using GANs" 
        },
        desc: { 
            tr: "Gerçekte var olmayan, yüksek çözünürlüklü insan yüzleri üreten yapay zeka.", 
            az: "Reallıqda mövjud olmayan, yüksək keyfiyyətli insan üzləri yaradan süni intellekt.", 
            en: "A generative model that creates high-resolution, synthetic human faces that don't exist in reality." 
        },
        tech: ["PyTorch/TensorFlow", "DCGAN/StyleGAN", "GPU Computing (CUDA)", "Matplotlib"],
        features: { 
            tr: ["Generator ve Discriminator eğitimi", "Zarar (Loss) fonksiyonu optimizasyonu", "Hiperparametre tuning"], 
            az: ["Generator və Discriminator təlimi", "Loss funksiyası optimallaşdırması", "Hyperparameter tuning"], 
            en: ["Generator & Discriminator training", "Loss function optimization", "Hyperparameter tuning"] 
        }
    }
]
};

contentData['ml'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Matematiksel Temeller", items: ["Lineer Cebir (Matrisler)", "Kalkülüs (Gradient Descent)", "İstatistik & Olasılık", "Vektör Uzayları"], status: "start" },
            { title: "Python & Veri İşleme", items: ["NumPy & Pandas", "Veri Temizleme (Preprocessing)", "Feature Engineering", "Görselleştirme"], status: "start" },
            { title: "Klasik Makine Öğrenmesi", items: ["Scikit-Learn", "Regression (Lineer/Lojistik)", "Decision Trees & Random Forest", "SVM & K-Means"], status: "mid" },
            { title: "Derin Öğrenme (Deep Learning)", items: ["Yapay Sinir Ağları (ANN)", "PyTorch veya TensorFlow", "Backpropagation Mantığı", "Aktivasyon Fonksiyonları"], status: "mid" },
            { title: "İleri Uzmanlık Alanları", items: ["Computer Vision (CNN, YOLO)", "NLP (Transformers, HuggingFace)", "LLM (Large Language Models)", "Reinforcement Learning"], status: "advanced" },
            { title: "MLOps & Deployment", items: ["Model API (FastAPI)", "Docker & Kubernetes", "Model Monitoring (MLflow)", "Cloud AI (AWS SageMaker)"], status: "expert" }
        ],
        az: [
            { title: "Riyazi Əsaslar", items: ["Xətti Cəbr (Matrislər)", "Kalkulus (Gradient Descent)", "Statistika & Ehtimal", "Vektor Fəzaları"], status: "start" },
            { title: "Python & Məlumat Emalı", items: ["NumPy & Pandas", "Məlumat Təmizləmə", "Feature Engineering", "Vizuallaşdırma"], status: "start" },
            { title: "Klassik Maşın Öyrənməsi", items: ["Scikit-Learn", "Reqressiya", "Qərar Ağacları & Random Forest", "SVM & K-Means"], status: "mid" },
            { title: "Dərin Öyrənmə (Deep Learning)", items: ["Süni Sinir Şəbəkələri", "PyTorch və ya TensorFlow", "Backpropagation", "Aktivasiya Funksiyaları"], status: "mid" },
            { title: "İrəli İxtisas Sahələri", items: ["Kompüter Görmə (CNN)", "NLP (Transformers)", "LLM (Böyük Dil Modelləri)", "Gücləndirməli Öyrənmə"], status: "advanced" },
            { title: "MLOps & Yerləşdirmə", items: ["Model API (FastAPI)", "Docker & Kubernetes", "Model İzləmə (MLflow)", "Bulud AI"], status: "expert" }
        ],
        en: [
            { title: "Math Foundations", items: ["Linear Algebra", "Calculus (Gradient Descent)", "Probability & Stats", "Vector Spaces"], status: "start" },
            { title: "Python & Data Prep", items: ["NumPy & Pandas", "Data Preprocessing", "Feature Engineering", "Visualization"], status: "start" },
            { title: "Classical ML", items: ["Scikit-Learn", "Regression", "Decision Trees & Random Forest", "SVM & K-Means"], status: "mid" },
            { title: "Deep Learning", items: ["Neural Networks (ANN)", "PyTorch or TensorFlow", "Backpropagation", "Activation Functions"], status: "mid" },
            { title: "Advanced Domains", items: ["Computer Vision (CNN)", "NLP (Transformers/LLMs)", "Generative AI", "Reinforcement Learning"], status: "advanced" },
            { title: "MLOps & Deployment", items: ["Model Serving (FastAPI)", "Docker & K8s", "MLflow/WandB", "Cloud AI (AWS/Azure)"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // Courses & YouTube
            { type: 'course', title: 'Andrew Ng - Machine Learning', url: 'https://www.coursera.org/specializations/machine-learning-introduction', desc: 'This is the father of this field Andrew Ng\'den sertifikalı efsanevi başlangıç kursu.', lang: 'en' },
            { type: 'course', title: 'Fast.ai', url: 'https://www.fast.ai', desc: 'Pratik odaklı, kod yazarak öğreten dünyanın en iyi ücretsiz Deep Learning kursu.', lang: 'en' },
            { type: 'youtube', title: 'Two Minute Papers', url: 'https://youtube.com/@TwoMinutePapers', desc: 'En yeni AI makalelerini ve gelişmeleri harika görsellerle anlatan kanal.', lang: 'en' },
            { type: 'youtube', title: 'Murat Yücedağ', url: 'https://youtube.com/@MuratYucedag', desc: 'Türkçe Python ve Yapay Zeka dersleri için kapsamlı bir kaynak.', lang: 'tr' },

            // Documentation & Tools
            { type: 'doc', title: 'PyTorch Docs', url: 'https://pytorch.org', desc: 'Facebook (Meta) tarafından geliştirilen, araştırmacıların favori kütüphanesi.', lang: 'en' },
            { type: 'doc', title: 'Scikit-Learn', url: 'https://scikit-learn.org', desc: 'Klasik makine öğrenmesi algoritmaları için ana kütüphane.', lang: 'en' },
            { type: 'tool', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'Hazır LLM modelleri (GPT, Llama vb.) ve veri setleri için AI\'ın GitHub\'ı.', lang: 'global' },
            { type: 'tool', title: 'Kaggle', url: 'https://www.kaggle.com', desc: 'Veri setleri bulmak ve yarışmalara katılmak için bir numaralı platform.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (AI/ML)', url: 'https://roadmap.sh/ai-data-scientist', desc: 'Yapay Zeka uzmanlığı için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Teknokent Savunma Sanayi"],
            top_skills: ["Python", "PyTorch", "NLP", "Computer Vision", "MLOps"],
            avg_salary: "Junior: 45k-65k TL | Mid: 80k-120k TL | Senior: 160k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankalar & Telekom"],
            top_skills: ["Python", "SQL", "Data Analysis", "Machine Learning Basics"],
            avg_salary: "Junior: 1200-1800 AZN | Mid: 2500-4000 AZN | Senior: 6000+ AZN"
        },
        GLOBAL: {
            platforms: ["Hacker News Jobs", "RemoteOK", "Toptal", "AI Startups"],
            top_skills: ["LLM Fine-Tuning", "Transformers", "AWS SageMaker", "CUDA"],
            avg_salary: "Junior: $7k-$9k | Mid: $12k-$16k | Senior: $20k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "AI, Machine Learning ve Deep Learning farkı nedir?",
                az: "AI, Machine Learning və Deep Learning fərqi nədir?",
                en: "Difference between AI, ML, and Deep Learning?"
            },
            a: {
                tr: "AI (Yapay Zeka) genel çatı kavramdır. ML (Makine Öğrenmesi) bunun, veriden öğrenen alt dalıdır. DL (Derin Öğrenme) ise ML'in, insan beynini taklit eden (sinir ağları) en gelişmiş alt dalıdır.",
                az: "AI (Süni İntellekt) ümumi anlayışdır. ML (Maşın Öyrənməsi) bunun, məlumatdan öyrənən alt sahəsidir. DL (Dərin Öyrənmə) isə ML-in insan beynini təqlid edən ən qabaqcıl sahəsidir.",
                en: "AI is the broad concept. ML is a subset that learns from data. DL is a subset of ML that uses neural networks to mimic the human brain."
            }
        },
        {
            id: 2,
            q: {
                tr: "PyTorch mu yoksa TensorFlow mu?",
                az: "PyTorch yoxsa TensorFlow?",
                en: "PyTorch or TensorFlow?"
            },
            a: {
                tr: "2024 itibariyle PyTorch, hem akademik araştırmalarda hem de endüstride (Tesla, OpenAI) lider konumdadır. Öğrenmesi daha kolay ve 'Pythonic'tir. TensorFlow daha eski ve hantaldır.",
                az: "2024 etibarilə PyTorch həm akademik araşdırmalarda, həm də sənayedə (Tesla, OpenAI) liderdir. Öyrənmək daha asandır. TensorFlow daha köhnədir.",
                en: "As of 2024, PyTorch leads in both research and industry (Tesla, OpenAI). It is easier to learn and more 'Pythonic'. TensorFlow is older and clunkier."
            }
        },
        {
            id: 3,
            q: {
                tr: "Doktora (PhD) yapmak şart mı?",
                az: "Doktorantura (PhD) oxumaq şərtdir?",
                en: "Is a PhD required?"
            },
            a: {
                tr: "Google DeepMind veya OpenAI gibi yerlerde 'Araştırmacı' olmak istiyorsanız evet. Ancak 'Machine Learning Engineer' (Mühendis) olarak modelleri uygulamak için lisans diploması ve sağlam bir portfolyo yeterlidir.",
                az: "Google DeepMind və ya OpenAI kimi yerlərdə 'Tədqiqatçı' olmaq istəyirsinizsə, bəli. Lakin 'Mühəndis' kimi işləmək üçün bakalavr diplomu və güclü portfolio kifayətdir.",
                en: "If you want to be a 'Researcher' at places like DeepMind, yes. But to work as an 'ML Engineer' applying models, a bachelor's degree and a strong portfolio are enough."
            }
        },
        {
            id: 4,
            q: {
                tr: "Ekran kartı (GPU) ne kadar önemli?",
                az: "Video kart (GPU) nə qədər vacibdir?",
                en: "How important is the GPU?"
            },
            a: {
                tr: "Çok önemli. Derin öğrenme modelleri (Neural Networks) paralel işlem gücüne ihtiyaç duyar. NVIDIA kartlar (CUDA desteği için) şarttır. Mac M1/M2/M3 çipleri de artık iyi destek veriyor.",
                az: "Çox vacibdir. Dərin öyrənmə modelləri paralel emal gücünə ehtiyac duyur. NVIDIA kartları (CUDA üçün) şərtdir. Mac M1/M2/M3 çipləri də artıq yaxşı dəstəkləyir.",
                en: "Very important. Deep Learning models require parallel processing power. NVIDIA cards (for CUDA) are mandatory. Mac M-series chips also have good support now."
            }
        },
        {
            id: 5,
            q: {
                tr: "MLOps nedir, neden öğrenmeliyim?",
                az: "MLOps nədir, niyə öyrənməliyəm?",
                en: "What is MLOps and why learn it?"
            },
            a: {
                tr: "Modeli eğitmek işin %20'sidir. O modeli canlı sisteme almak, izlemek ve güncellemek %80'idir. Şirketler artık sadece model kuran değil, onu üretime (production) alabilen mühendis arıyor.",
                az: "Modeli öyrətmək işin 20%-dir. O modeli canlı sistemə almaq, izləmək və yeniləmək 80%-dir. Şirkətlər artıq modeli istehsalata (production) buraxa bilən mühəndis axtarır.",
                en: "Training the model is 20% of the work. Deploying, monitoring, and updating it is 80%. Companies want engineers who can take models to production, not just build them."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "Parametrik ve Parametrik Olmayan modeller arasındaki fark nedir?",
            az: "Parametrik və Parametrik Olmayan modellər arasındakı fərq nədir?",
            en: "Difference between Parametric and Non-parametric models?"
        },
        a: {
            tr: "Parametrik modeller verinin belirli bir dağılıma sahip olduğunu varsayar (örn: Lineer Regresyon). Parametrik olmayanlar ise veri hakkında güçlü varsayımlarda bulunmaz (örn: KNN, Karar Ağaçları).",
            az: "Parametrik modellər məlumatın müəyyən bir paylanmaya (distribution) sahib olduğunu fərz edir. Parametrik olmayanlar isə məlumat haqqında güclü fərziyyələr yürütmür.",
            en: "Parametric models assume a specific functional form for the data (e.g., Linear Regression). Non-parametric models do not make strong assumptions (e.g., KNN)."
        }
    },
    {
        id: 2,
        q: {
            tr: "L1 (Lasso) ve L2 (Ridge) Regularization farkı nedir?",
            az: "L1 (Lasso) və L2 (Ridge) Regularization fərqi nədir?",
            en: "Difference between L1 and L2 Regularization?"
        },
        a: {
            tr: "L1, katsayıları sıfıra çekerek özellik seçimi (feature selection) yapabilir. L2 katsayıları küçültür ama sıfıra eşitlemez. İkisi de overfitting'i önlemek içindir.",
            az: "L1 bəzi əmsalları sıfıra endirərək parametr seçimi edir. L2 əmsalları kiçildir amma tam sıfır etmir. Hər ikisi overfitting-in qarşısını almaq üçündür.",
            en: "L1 can shrink coefficients to zero (performing feature selection). L2 shrinks them towards zero but never exactly zero. Both prevent overfitting."
        }
    },
    {
        id: 3,
        q: {
            tr: "K-Nearest Neighbors (KNN) algoritmasında 'K' nasıl seçilir?",
            az: "KNN alqoritmində 'K' necə seçilir?",
            en: "How to choose 'K' in KNN?"
        },
        a: {
            tr: "K genelde çapraz doğrulama (cross-validation) ile seçilir. Küçük K gürültüye duyarlıdır (overfit), büyük K ise modeli çok basitleştirir (underfit).",
            az: "K adətən cross-validation ilə seçilir. Kiçik K səs-küyə qarşı həssasdır (overfit), böyük K isə modeli həddindən artıq sadələşdirir (underfit).",
            en: "K is usually chosen via cross-validation. Small K is sensitive to noise (overfit), while large K makes the model too simple (underfit)."
        }
    },
    {
        id: 4,
        q: {
            tr: "Ensemble Learning (Topluluk Öğrenme) nedir?",
            az: "Ensemble Learning (Ansambl Öyrənmə) nədir?",
            en: "What is Ensemble Learning?"
        },
        a: {
            tr: "Birden fazla zayıf modeli birleştirerek daha güçlü ve doğru bir tahmin modeli oluşturma tekniğidir (Örn: Random Forest, Gradient Boosting).",
            az: "Bir neçə zəif modeli birləşdirərək daha güclü və dəqiq bir təxmin modeli yaratmaq texnikasıdır.",
            en: "A technique that combines multiple weak models to create a stronger, more accurate prediction model."
        }
    },
    {
        id: 5,
        q: {
            tr: "Support Vector Machines (SVM) 'Kernel Trick' nedir?",
            az: "SVM-də 'Kernel Trick' nədir?",
            en: "What is the Kernel Trick in SVM?"
        },
        a: {
            tr: "Veriyi daha yüksek boyutlu bir uzaya taşıyarak, doğrusal olmayan verileri ayrıştırılabilir hale getirmek için kullanılan matematiksel bir fonksiyondur.",
            az: "Məlumatı daha yüksək ölçülü sahəyə keçirərək, xətti olmayan məlumatları bir-birindən ayırmaq üçün istifadə olunan riyazi funksiyadır.",
            en: "A method used to transform non-linear data into a higher-dimensional space where it becomes linearly separable."
        }
    },
    {
        id: 6,
        q: {
            tr: "Gradient Boosting nasıl çalışır?",
            az: "Gradient Boosting necə işləyir?",
            en: "How does Gradient Boosting work?"
        },
        a: {
            tr: "Modeller sıralı (sequential) olarak eklenir. Her yeni model, bir önceki modelin yaptığı hataları (artıkları) tahmin etmeye ve düzeltmeye odaklanır.",
            az: "Modellər ardıcıl olaraq əlavə edilir. Hər yeni model özündən əvvəlkinin etdiyi xətaları təxmin etməyə və onları düzəltməyə fokuslanır.",
            en: "It builds models sequentially, where each new model attempts to correct the errors (residuals) of the previous models."
        }
    },
    {
        id: 7,
        q: {
            tr: "Principal Component Analysis (PCA) nedir?",
            az: "PCA (Əsas Komponent Analizi) nədir?",
            en: "What is PCA?"
        },
        a: {
            tr: "Verideki bilgiyi koruyarak boyut sayısını azaltmak için kullanılan bir boyutsallık azaltma (dimensionality reduction) yöntemidir.",
            az: "Məlumatdakı vacib hissələri qoruyaraq ölçülərin sayını azaltmaq üçün istifadə olunan ölçü azaltma metodudur.",
            en: "A dimensionality reduction technique that transforms a large set of variables into a smaller one while retaining most of the information."
        }
    },
    {
        id: 8,
        q: {
            tr: "Imbalanced Dataset (Dengesiz Veri) sorunu nasıl çözülür?",
            az: "Balanssız məlumat seti problemi necə həll olunur?",
            en: "How to handle Imbalanced Datasets?"
        },
        a: {
            tr: "Azınlık sınıfı çoğaltarak (Oversampling/SMOTE), çoğunluk sınıfı azaltarak (Undersampling) veya farklı metrikler (F1-Score) kullanarak.",
            az: "Azlıq təşkil edən sinfi süni artıraraq (SMOTE), çoxluq təşkil edəni azaldaraq və ya Accuracy yerinə F1-Score kimi metrikalara baxaraq.",
            en: "Using techniques like Oversampling (SMOTE), Undersampling, or choosing appropriate metrics like F1-Score instead of Accuracy."
        }
    },
    {
        id: 9,
        q: {
            tr: "Cost Function (Maliyet Fonksiyonu) nedir?",
            az: "Cost Function (Maliyyət funksiyası) nədir?",
            en: "What is a Cost Function?"
        },
        a: {
            tr: "Modelin tahminleri ile gerçek değerler arasındaki farkı ölçen fonksiyondur. Amaç bu fonksiyonu minimize etmektir (Örn: Mean Squared Error).",
            az: "Modelin təxminləri ilə real dəyərlər arasındakı fərqi ölçən funksiyadır. Məqsəd bu funksiyanın dəyərini minimuma endirməkdir.",
            en: "A function that measures the performance of a model by calculating the error between predicted and actual values."
        }
    },
    {
        id: 10,
        q: {
            tr: "Reinforcement Learning (Pekiştirmeli Öğrenme) nedir?",
            az: "Reinforcement Learning nədir?",
            en: "What is Reinforcement Learning?"
        },
        a: {
            tr: "Bir ajanın çevreyle etkileşime girerek ödül mekanizması sayesinde en iyi stratejiyi deneme-yanılma yoluyla öğrenmesidir.",
            az: "Bir agentin ətraf mühitlə əlaqəyə girərək mükafat mexanizmi vasitəsilə ən yaxşı strategiyanı sınaq-yanılma yolu ilə öyrənməsidir.",
            en: "A type of machine learning where an agent learns to make decisions by performing actions in an environment to maximize rewards."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "Emlak Fiyat Tahminleme Sistemi", 
            az: "Əmlak Qiymətlərinin Təxmin Edilməsi", 
            en: "Real Estate Price Predictor" 
        },
        desc: { 
            tr: "Ev özelliklerine göre piyasa değerini tahmin eden regresyon modeli.", 
            az: "Evin xüsusiyyətlərinə görə bazar qiymətini təxmin edən reqressiya modeli.", 
            en: "A regression model that predicts property market value based on various features." 
        },
        tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
        features: { 
            tr: ["Çoklu Doğrusal Regresyon", "Aykırı Değer Analizi", "Model Performans Metrikleri (MAE/RMSE)"], 
            az: ["Çoxsaylı Xətti Reqressiya", "Kənar dəyər (Outlier) analizi", "Model performans metrikaları (MAE/RMSE)"], 
            en: ["Multiple Linear Regression", "Outlier Analysis", "Model Metrics (MAE/RMSE)"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "Haber Metni Sınıflandırıcı (NLP)", 
            az: "Xəbər Mətnlərinin Təsnifatı (NLP)", 
            en: "News Text Classifier (NLP)" 
        },
        desc: { 
            tr: "Metin verilerini analiz ederek haberleri kategorilere (spor, siyaset vb.) ayıran sistem.", 
            az: "Mətn məlumatlarını analiz edərək xəbərləri kateqoriyalara ayıran sistem.", 
            en: "A natural language processing system that categorizes news articles into topics like sports or politics." 
        },
        tech: ["NLTK/SpaCy", "TF-IDF / Word2Vec", "Support Vector Machines (SVM)", "Flask"],
        features: { 
            tr: ["Metin Ön İşleme", "Duygu Analizi Entegrasyonu", "Confusion Matrix Görselleştirme"], 
            az: ["Mətnin ilkin emalı", "Sentiment (Hiss) analizi inteqrasiyası", "Confusion Matrix vizuallaşdırma"], 
            en: ["Text Preprocessing", "Sentiment Analysis integration", "Confusion Matrix visualization"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "Öneri Sistemi ve Hibrit Mimari", 
            az: "Tövsiyə Sistemi və Hibrid Memarlıq", 
            en: "Hybrid Recommendation System" 
        },
        desc: { 
            tr: "Kullanıcı davranışlarını analiz ederek kişiselleştirilmiş ürün önerileri sunan motor.", 
            az: "İstifadəçi davranışlarını analiz edərək fərdiləşdirilmiş məhsul tövsiyələri verən motor.", 
            en: "An engine that provides personalized product recommendations by analyzing user behavior." 
        },
        tech: ["Surprise Library", "Collaborative Filtering", "LightFM", "PySpark"],
        features: { 
            tr: ["Matris Ayrıştırma (SVD)", "Cold-start problemi çözümü", "Büyük Veri (Big Data) entegrasyonu"], 
            az: ["Matrix Factorization (SVD)", "Cold-start problemi həlli", "Böyük məlumat (Big Data) inteqrasiyası"], 
            en: ["Matrix Factorization (SVD)", "Solving the Cold-start problem", "Big Data integration"] 
        }
    }
]
};

contentData['data-science'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Matematik ve İstatistik", items: ["Lineer Cebir", "Olasılık ve İstatistik", "Kalkülüs (Türev/İntegral Temelleri)", "Hipotez Testleri"], status: "start" },
            { title: "Programlama (Python)", items: ["Python Temelleri", "Veri Yapıları", "List Comprehensions", "SQL (Veritabanı Sorgulama)"], status: "start" },
            { title: "Veri Analizi & Görselleştirme", items: ["NumPy (Matematiksel İşlemler)", "Pandas (Veri Manipülasyonu)", "Matplotlib & Seaborn (Görselleştirme)", "Tableau / PowerBI"], status: "mid" },
            { title: "Makine Öğrenmesi (ML)", items: ["Scikit-Learn", "Gözetimli Öğrenme (Regression/Classification)", "Gözetimsiz Öğrenme (Clustering)", "Model Değerlendirme"], status: "mid" },
            { title: "Derin Öğrenme (Deep Learning)", items: ["Neural Networks", "TensorFlow veya PyTorch", "CNN (Görüntü İşleme)", "RNN/LSTM (NLP)"], status: "advanced" },
            { title: "Büyük Veri & MLOps", items: ["Apache Spark", "Hadoop", "Model Deployment (Streamlit/Flask)", "Docker for Data Science"], status: "expert" }
        ],
        az: [
            { title: "Riyaziyyat və Statistika", items: ["Xətti Cəbr", "Ehtimal və Statistika", "Kalkulus (Törəmə/İnteqral)", "Hipotez Testləri"], status: "start" },
            { title: "Proqramlaşdırma (Python)", items: ["Python Əsasları", "Məlumat Strukturları", "SQL (Sorğulama)", "Verilənlərin Təmizlənməsi"], status: "start" },
            { title: "Məlumat Analizi & Vizuallaşdırma", items: ["NumPy", "Pandas (Məlumat Manipulyasiyası)", "Matplotlib & Seaborn", "Tableau / PowerBI"], status: "mid" },
            { title: "Maşın Öyrənməsi (ML)", items: ["Scikit-Learn", "Nəzarətli Öyrənmə", "Nəzarətsiz Öyrənmə", "Model Qiymətləndirmə"], status: "mid" },
            { title: "Dərin Öyrənmə (Deep Learning)", items: ["Süni Sinir Şəbəkələri", "TensorFlow və ya PyTorch", "Kompüter Görmə (CNN)", "Təbii Dil Emalı (NLP)"], status: "advanced" },
            { title: "Böyük Məlumat & MLOps", items: ["Apache Spark", "Hadoop", "Modelin Yerləşdirilməsi", "Docker"], status: "expert" }
        ],
        en: [
            { title: "Math & Statistics", items: ["Linear Algebra", "Probability & Statistics", "Calculus Basics", "Hypothesis Testing"], status: "start" },
            { title: "Programming (Python)", items: ["Python Basics", "Data Structures", "SQL (Querying)", "Data Cleaning"], status: "start" },
            { title: "Data Analysis & Viz", items: ["NumPy", "Pandas (Data Manipulation)", "Matplotlib & Seaborn", "Tableau / PowerBI"], status: "mid" },
            { title: "Machine Learning (ML)", items: ["Scikit-Learn", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"], status: "mid" },
            { title: "Deep Learning (DL)", items: ["Neural Networks", "TensorFlow or PyTorch", "Computer Vision (CNN)", "NLP (RNN/Transformers)"], status: "advanced" },
            { title: "Big Data & MLOps", items: ["Apache Spark", "Hadoop", "Model Deployment (Streamlit)", "Docker for DS"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'StatQuest with Josh Starmer', url: 'https://youtube.com/@statquest', desc: 'İstatistik ve Makine Öğrenmesi mantığını dünyada en iyi anlatan kanal ("BAM!" diyerek).', lang: 'en' },
            { type: 'youtube', title: 'Veri Bilimi Okulu', url: 'https://youtube.com/@VeriBilimiOkulu', desc: 'Türkçe veri bilimi, makine öğrenmesi ve yapay zeka kaynakları.', lang: 'tr' },
            { type: 'youtube', title: 'Krish Naik', url: 'https://youtube.com/@krishnaik06', desc: 'Sektör odaklı pratik veri bilimi ve mülakat hazırlık dersleri.', lang: 'en' },

            // Courses
            { type: 'course', title: 'Kaggle', url: 'https://www.kaggle.com/learn', desc: 'Veri bilimcilerin oyun alanı. Ücretsiz mikro kurslar, veri setleri ve yarışmalar.', lang: 'en' },
            { type: 'course', title: 'Machine Learning Specialization', url: 'https://www.coursera.org/specializations/machine-learning-introduction', desc: 'Andrew Ng\'nin (Yapay zekanın babası) hazırladığı efsanevi başlangıç kursu.', lang: 'en' },
            { type: 'course', title: 'Patika.dev Veri Bilimi', url: 'https://www.patika.dev', desc: 'Türkçe ve projeli veri bilimi bootcamp\'leri.', lang: 'tr' },

            // Tools
            { type: 'tool', title: 'Google Colab', url: 'https://colab.research.google.com', desc: 'Kurulum yapmadan tarayıcıda Python kodu çalıştırın (Ücretsiz GPU verir).', lang: 'global' },
            { type: 'tool', title: 'Anaconda', url: 'https://www.anaconda.com', desc: 'Veri bilimi kütüphanelerini yönetmek için en popüler paket yöneticisi.', lang: 'global' },
            { type: 'tool', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'Hazır yapay zeka modelleri ve veri setleri için dünyanın en büyük deposu.', lang: 'en' },
            { type: 'roadmap', title: 'Roadmap.sh (AI/Data)', url: 'https://roadmap.sh/ai-data-scientist', desc: 'Veri Bilimcisi olmak için adım adım görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Datacamp Jobs"],
            top_skills: ["Python", "SQL", "Machine Learning", "Pandas", "PowerBI"],
            avg_salary: "Junior: 40k-60k TL | Mid: 75k-110k TL | Senior: 150k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankacılık Sektörü (Kapital, Pasha)"],
            top_skills: ["SQL", "Python", "Excel (İleri)", "Veri Analizi", "Tableau"],
            avg_salary: "Junior: 1000-1600 AZN | Mid: 2200-3500 AZN | Senior: 5000+ AZN"
        },
        GLOBAL: {
            platforms: ["LinkedIn", "Indeed", "Glassdoor", "Toptal"],
            top_skills: ["Python", "AWS/Cloud", "TensorFlow/PyTorch", "MLOps", "SQL"],
            avg_salary: "Junior: $6k-$8k | Mid: $10k-$14k | Senior: $18k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Matematik bilmek zorunda mıyım?",
                az: "Riyaziyyat bilmək məcburiyyətindəyəm?",
                en: "Do I have to know Math?"
            },
            a: {
                tr: "Evet. Web geliştirmeden farklı olarak veri bilimi; İstatistik, Olasılık ve Lineer Cebir üzerine kuruludur. Modellerin nasıl çalıştığını anlamak için bu şarttır.",
                az: "Bəli. Veb inkişafından fərqli olaraq məlumat elmi; Statistika, Ehtimal və Xətti Cəbr üzərində qurulub. Modellərin necə işlədiyini anlamaq üçün bu şərtdir.",
                en: "Yes. Unlike web development, Data Science is built on Statistics, Probability, and Linear Algebra. It's essential to understand how models work."
            }
        },
        {
            id: 2,
            q: {
                tr: "Python mı R mı öğrenmeliyim?",
                az: "Python yoxsa R öyrənməliyəm?",
                en: "Should I learn Python or R?"
            },
            a: {
                tr: "Kesinlikle Python. Sektörün %90'ı Python kullanıyor. R daha çok akademik araştırmalar ve sadece istatistiksel analizler için kullanılır.",
                az: "Mütləq Python. Sektorun 90%-i Python istifadə edir. R daha çox akademik araşdırmalar və yalnız statistik analizlər üçün istifadə olunur.",
                en: "Definitely Python. 90% of the industry uses Python. R is mostly used for academic research and pure statistical analysis."
            }
        },
        {
            id: 3,
            q: {
                tr: "Veri Analisti ile Veri Bilimcisi farkı nedir?",
                az: "Məlumat Analitiki ilə Məlumat Alimi fərqi nədir?",
                en: "Difference between Data Analyst and Data Scientist?"
            },
            a: {
                tr: "Veri Analisti, 'geçmişte ne olduğunu' anlamak için veriyi raporlar (SQL, Excel, PowerBI). Veri Bilimcisi ise 'gelecekte ne olacağını' tahmin etmek için modeller kurar (Python, ML, AI).",
                az: "Məlumat Analitiki, 'keçmişdə nə olduğunu' anlamaq üçün məlumatı raporlayır (SQL, Excel). Məlumat Alimi isə 'gələcəkdə nə olacağını' təxmin etmək üçün modellər qurur (ML, AI).",
                en: "Data Analyst reports data to understand 'what happened' (SQL, Excel). Data Scientist builds models to predict 'what will happen' (Python, ML, AI)."
            }
        },
        {
            id: 4,
            q: {
                tr: "Güçlü bir bilgisayar şart mı?",
                az: "Güclü kompüter şərtdir?",
                en: "Is a powerful computer required?"
            },
            a: {
                tr: "Derin Öğrenme (Deep Learning) yapacaksanız NVIDIA GPU'lu bir cihaz iyidir. Ancak başlangıç için 'Google Colab' veya 'Kaggle Kernels' kullanarak bulut üzerinden ücretsiz güçlü bilgisayarlar kullanabilirsiniz.",
                az: "Dərin Öyrənmə edəcəksinizsə NVIDIA GPU-lu cihaz yaxşıdır. Lakin başlanğıc üçün 'Google Colab' istifadə edərək bulud üzərindən pulsuz güclü kompüterlər istifadə edə bilərsiniz.",
                en: "If doing Deep Learning, an NVIDIA GPU is good. However, for starters, you can use free powerful cloud computers via 'Google Colab' or 'Kaggle Kernels'."
            }
        },
        {
            id: 5,
            q: {
                tr: "ChatGPT varken Veri Bilimcisine ihtiyaç var mı?",
                az: "ChatGPT varkən Məlumat Aliminə ehtiyac var?",
                en: "Do we need Data Scientists when ChatGPT exists?"
            },
            a: {
                tr: "Evet. ChatGPT kodu yazar ama veriyi temizleyemez, şirketin özel verisine erişip strateji kuramaz veya modelin matematiksel doğruluğunu garanti edemez. AI, veri bilimcinin asistanıdır.",
                az: "Bəli. ChatGPT kod yaza bilər, amma məlumatı təmizləyə bilməz, şirkət strategiyası qura bilməz. AI, məlumat aliminin köməkçisidir.",
                en: "Yes. ChatGPT can write code but can't clean messy data, access private company data for strategy, or guarantee mathematical accuracy. AI is an assistant."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "Supervised ve Unsupervised Learning farkı nedir?",
            az: "Supervised və Unsupervised Learning fərqi nədir?",
            en: "Difference between Supervised and Unsupervised Learning?"
        },
        a: {
            tr: "Supervised: Etiketlenmiş veri kullanılır (Girdi-Çıktı belli). Unsupervised: Etiketlenmemiş veri kullanılır, sistem veri içindeki gizli yapıları/grupları bulur.",
            az: "Supervised: Etiketlənmiş məlumat istifadə olunur (Giriş-Çıxış bəllidir). Unsupervised: Etiketlənməmiş məlumat istifadə olunur, sistem daxili qruplaşmaları özü tapır.",
            en: "Supervised learning uses labeled data to train models. Unsupervised learning finds hidden patterns or structures in unlabeled data."
        }
    },
    {
        id: 2,
        q: {
            tr: "Overfitting (Aşırı Öğrenme) nedir?",
            az: "Overfitting (Həddindən artıq öyrənmə) nədir?",
            en: "What is Overfitting?"
        },
        a: {
            tr: "Modelin eğitim verisini ezberlemesi ve yeni gelen verilerde başarısız olmasıdır. Model karmaşıklığı çok yüksek olduğunda ortaya çıkar.",
            az: "Modelin təlim məlumatlarını əzbərləməsi və yeni məlumatlarda uğursuz olmasıdır. Modelin mürəkkəbliyi çox yüksək olduqda baş verir.",
            en: "A modeling error that occurs when a function is too closely fit to a limited set of data points, failing to generalize to new data."
        }
    },
    {
        id: 3,
        q: {
            tr: "Bias-Variance Tradeoff nedir?",
            az: "Bias-Variance Tradeoff nədir?",
            en: "What is the Bias-Variance Tradeoff?"
        },
        a: {
            tr: "Modelin hatasını minimize etmek için düşük bias (doğruluk) ve düşük variance (tutarlılık) arasındaki dengedir.",
            az: "Modelin xətasını minimuma endirmək üçün aşağı bias (doğruluq) və aşağı variance (ardıcıllıq) arasındakı tarazlıqdır.",
            en: "The balance between a model's ability to minimize errors from erroneous assumptions (bias) and sensitivity to fluctuations in the training set (variance)."
        }
    },
    {
        id: 4,
        q: {
            tr: "P-value nedir?",
            az: "P-value nədir?",
            en: "What is a P-value?"
        },
        a: {
            tr: "Hipotez testlerinde sonucun istatistiksel olarak anlamlı olup olmadığını belirlemek için kullanılır. Genelde 0.05'ten küçük olması anlamlı kabul edilir.",
            az: "Hipotez testlərində nəticənin statistik olaraq əhəmiyyətli olub-olmadığını müəyyən etmək üçün istifadə olunur. Adətən 0.05-dən kiçik olması əhəmiyyətli sayılır.",
            en: "A statistical measure that helps determine the significance of results. A value less than 0.05 typically suggests strong evidence against the null hypothesis."
        }
    },
    {
        id: 5,
        q: {
            tr: "Confusion Matrix (Karmaşıklık Matrisi) nedir?",
            az: "Confusion Matrix nədir?",
            en: "What is a Confusion Matrix?"
        },
        a: {
            tr: "Sınıflandırma modelinin performansını ölçmek için kullanılan; True Positive, True Negative, False Positive ve False Negative değerlerini gösteren tablodur.",
            az: "Təsnifat modelinin performansını ölçmək üçün istifadə olunan; True Positive, True Negative, False Positive və False Negative dəyərlərini göstərən cədvəldir.",
            en: "A table used to describe the performance of a classification model by comparing predicted values with actual labels."
        }
    },
    {
        id: 6,
        q: {
            tr: "Normalization ve Standardization farkı nedir?",
            az: "Normalization və Standardization fərqi nədir?",
            en: "Difference between Normalization and Standardization?"
        },
        a: {
            tr: "Normalization veriyi 0-1 arasına sıkıştırır. Standardization ise veriyi ortalaması 0, standart sapması 1 olacak şekilde dönüştürür.",
            az: "Normalization məlumatı 0-1 aralığına sıxışdırır. Standardization isə məlumatın ortalamasını 0, standart yayılmasını 1 edəcək şəkildə dəyişir.",
            en: "Normalization scales data to a range of [0, 1]. Standardization scales data to have a mean of 0 and a standard deviation of 1."
        }
    },
    {
        id: 7,
        q: {
            tr: "Random Forest nasıl çalışır?",
            az: "Random Forest necə işləyir?",
            en: "How does Random Forest work?"
        },
        a: {
            tr: "Birden fazla Karar Ağacı'nın (Decision Tree) bir araya gelerek çoğunluk oyuyla karar verdiği bir topluluk (ensemble) öğrenme yöntemidir.",
            az: "Bir neçə Qərar Ağacının (Decision Tree) bir araya gələrək səs çoxluğu ilə qərar verdiyi bir ansambl (ensemble) öyrənmə metodudur.",
            en: "An ensemble learning method that operates by constructing multiple decision trees and outputting the class that is the mode of the classes."
        }
    },
    {
        id: 8,
        q: {
            tr: "Linear Regression varsayımları nelerdir?",
            az: "Linear Regression fərziyyələri nələrdir?",
            en: "What are the assumptions of Linear Regression?"
        },
        a: {
            tr: "Doğrusallık, Bağımsızlık, Normallik ve Eşit Varyans (Homoscedasticity).",
            az: "Xəttilik (Linearity), Müstəqillik (Independence), Normallik və Bərabər Varyans (Homoscedasticity).",
            en: "Linearity, Independence, Normality of residuals, and Homoscedasticity (constant variance of errors)."
        }
    },
    {
        id: 9,
        q: {
            tr: "Missing Data (Eksik Veri) nasıl ele alınır?",
            az: "Missing Data (Əskik məlumat) necə idarə olunur?",
            en: "How to handle Missing Data?"
        },
        a: {
            tr: "Eksik veriler silinebilir, ortalama/medyan ile doldurulabilir (Imputation) veya tahminleme modelleriyle tamamlanabilir.",
            az: "Əskik məlumatlar silinə bilər, orta/median dəyərlə doldurula bilər (Imputation) və ya təxmin modelləri ilə tamamlana bilər.",
            en: "By deleting rows, imputing values using mean/median/mode, or using algorithms that handle missing values internally."
        }
    },
    {
        id: 10,
        q: {
            tr: "A/B Testi nedir?",
            az: "A/B Testi nədir?",
            en: "What is A/B Testing?"
        },
        a: {
            tr: "İki farklı senaryonun (A ve B) performansını karşılaştırmak için kullanılan istatistiksel bir deney yöntemidir.",
            az: "İki fərqli ssenarinin (A və B) performansını müqayisə etmək üçün istifadə olunan statistik təcrübə metodudur.",
            en: "A statistical way of comparing two versions of a variable to determine which one performs better."
        }
    },
    {
        id: 11,
        q: {
            tr: "Gradient Descent nedir?",
            az: "Gradient Descent nədir?",
            en: "What is Gradient Descent?"
        },
        a: {
            tr: "Bir fonksiyonun (genelde maliyet fonksiyonu) minimum değerini bulmak için kullanılan bir optimizasyon algoritmasıdır.",
            az: "Bir funksiyanın (adətən maliyyət funksiyası) minimum dəyərini tapmaq üçün istifadə olunan optimallaşdırma alqoritmidir.",
            en: "An optimization algorithm used to minimize a cost function by iteratively moving in the direction of steepest descent."
        }
    },
    {
        id: 12,
        q: {
            tr: "Curse of Dimensionality (Boyutun Laneti) nedir?",
            az: "Curse of Dimensionality nədir?",
            en: "What is the Curse of Dimensionality?"
        },
        a: {
            tr: "Öznitelik (feature) sayısı arttıkça verinin seyrelmesi ve modellerin performansının düşmesi durumudur.",
            az: "Giriş parametrlərinin (feature) sayı artdıqca məlumatın seyrəlməsi və modellərin performansının düşməsi vəziyyətidir.",
            en: "Issues that arise when analyzing data in high-dimensional spaces that do not occur in low-dimensional settings."
        }
    },
    {
        id: 13,
        q: {
            tr: "ROC-AUC eğrisi neyi ifade eder?",
            az: "ROC-AUC əyrisi nəyi ifadə edir?",
            en: "What does the ROC-AUC curve represent?"
        },
        a: {
            tr: "Sınıflandırma modelinin farklı eşik değerlerindeki performansını gösterir. AUC değeri 1'e yaklaştıkça modelin başarısı artar.",
            az: "Təsnifat modelinin fərqli limit dəyərlərindəki performansını göstərir. AUC 1-ə yaxınlaşdıqca model daha uğurlu sayılır.",
            en: "A graph showing the performance of a classification model at all thresholds. AUC measures the entire two-dimensional area under the ROC curve."
        }
    },
    {
        id: 14,
        q: {
            tr: "Deep Learning ve Machine Learning farkı?",
            az: "Deep Learning və Machine Learning fərqi?",
            en: "Deep Learning vs Machine Learning?"
        },
        a: {
            tr: "ML daha yapısal verilerle ve manuel öznitelik mühendisliğiyle çalışır. DL, yapay sinir ağlarını kullanır ve büyük veride öznitelikleri kendi öğrenir.",
            az: "ML daha çox strukturlaşmış məlumatlar və əllə düzəldilən parametrlərlə işləyir. DL süni sinir şəbəkələrindən istifadə edir və böyük məlumatda parametrləri özü öyrənir.",
            en: "ML involves manual feature extraction, while DL (Deep Learning) uses neural networks to automatically learn features from large data."
        }
    },
    {
        id: 15,
        q: {
            tr: "Outlier (Aykırı Değer) tespiti nasıl yapılır?",
            az: "Outlier (Kənar dəyər) aşkar edilməsi necə olur?",
            en: "How to detect Outliers?"
        },
        a: {
            tr: "Z-skoru, IQR (Interquartile Range) yöntemi veya Box-plot grafikleri kullanılarak tespit edilebilir.",
            az: "Z-score, IQR (Interquartile Range) metodu və ya Box-plot qrafikləri vasitəsilə aşkar edilə bilər.",
            en: "Outliers can be detected using Z-score, IQR method, or visualization tools like Box-plots."
        }
    },
    {
        id: 16,
        q: {
            tr: "Cross-Validation neden yapılır?",
            az: "Cross-Validation niyə edilir?",
            en: "Why use Cross-Validation?"
        },
        a: {
            tr: "Modelin veriye aşırı uyum (overfitting) sağlamadığından emin olmak ve farklı veri setlerinde nasıl performans göstereceğini ölçmek için.",
            az: "Modelin overfitting edib-etmədiyini yoxlamaq və fərqli məlumat setlərində necə performans göstərəcəyini ölçmək üçün.",
            en: "To assess how the results of a statistical analysis will generalize to an independent data set and to prevent overfitting."
        }
    },
    {
        id: 17,
        q: {
            tr: "Precision ve Recall farkı nedir?",
            az: "Precision və Recall fərqi nədir?",
            en: "Difference between Precision and Recall?"
        },
        a: {
            tr: "Precision: Pozitif tahminlerin ne kadarının doğru olduğu. Recall: Gerçek pozitiflerin ne kadarının doğru tahmin edildiği.",
            az: "Precision: Müsbət təxminlərin nə qədərinin doğru olduğu. Recall: Real müsbət halların nə qədərinin doğru təxmin edildiyi.",
            en: "Precision is the ratio of correctly predicted positive observations to the total predicted positives. Recall is the ratio to all actual positives."
        }
    },
    {
        id: 18,
        q: {
            tr: "Correlation ve Causation farkı nedir?",
            az: "Correlation və Causation fərqi nədir?",
            en: "Correlation vs Causation?"
        },
        a: {
            tr: "Korelasyon iki değişkenin birlikte hareket etmesidir. Nedensellik (Causation) ise birinin diğerine sebep olmasıdır. Korelasyon nedensellik gerektirmez.",
            az: "Korelyasiya iki dəyişənin birlikdə hərəkət etməsidir. Səbəbiyyət (Causation) isə birinin digərinə səbəb olmasıdır. Korelyasiya səbəbiyyət demək deyil.",
            en: "Correlation means variables change together, but causation means one variable specifically causes the other to change."
        }
    },
    {
        id: 19,
        q: {
            tr: "K-Means kümeleme nasıl çalışır?",
            az: "K-Means klasterləşmə necə işləyir?",
            en: "How does K-Means clustering work?"
        },
        a: {
            tr: "Veriyi birbirine en yakın özelliklere sahip K adet gruba ayırır. Her grup merkezine (centroid) olan uzaklığa göre atama yapar.",
            az: "Məlumatı bir-birinə yaxın xüsusiyyətlərinə görə K sayda qrupa ayırır. Hər qrupun mərkəzinə (centroid) olan məsafəyə görə təyin edilir.",
            en: "An unsupervised algorithm that groups data points into K clusters by minimizing the distance between points and their cluster centroid."
        }
    },
    {
        id: 20,
        q: {
            tr: "Bagging ve Boosting farkı nedir?",
            az: "Bagging və Boosting fərqi nədir?",
            en: "Difference between Bagging and Boosting?"
        },
        a: {
            tr: "Bagging (Random Forest): Ağaçlar paralel çalışır. Boosting (XGBoost): Ağaçlar sıralı çalışır, her ağaç bir öncekinin hatasını düzeltmeye odaklanır.",
            az: "Bagging: Ağaclar paralel işləyir. Boosting: Ağaclar ardıcıl işləyir, hər bir yeni ağac əvvəlkinin səhvini düzəltməyə çalışır.",
            en: "Bagging builds independent models in parallel. Boosting builds sequential models where each model learns from the errors of the previous one."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "Müşteri Kayıp (Churn) Analizi", 
            az: "Müştəri İtkisi (Churn) Analizi", 
            en: "Customer Churn Analysis" 
        },
        desc: { 
            tr: "Bir telekom şirketindeki müşterilerin ayrılma ihtimalini tahmin eden model.", 
            az: "Telekom şirkətində müştərilərin xidmətdən imtina etmə ehtimalını təxmin edən model.", 
            en: "A model that predicts the probability of customers leaving a telecom service provider." 
        },
        tech: ["Python", "Pandas/NumPy", "Scikit-learn", "Matplotlib/Seaborn"],
        features: { 
            tr: ["Keşifçi Veri Analizi (EDA)", "Lojistik Regresyon/Random Forest", "Feature Importance analizi"], 
            az: ["Məlumatın kəşfiyyat xarakterli analizi (EDA)", "Lojistik Reqressiya/Random Forest", "Parametr əhəmiyyətlilik analizi"], 
            en: ["Exploratory Data Analysis (EDA)", "Logistic Regression/Random Forest", "Feature Importance analysis"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "Görüntü Sınıflandırma ve API Entegrasyonu", 
            az: "Təsvirlərin Təsnifatı və API İnteqrasiyası", 
            en: "Image Classification with API Integration" 
        },
        desc: { 
            tr: "Derin öğrenme kullanarak nesne tanıyan ve bunu bir web servisi olarak sunan proje.", 
            az: "Dərin öyrənmə ilə obyektləri tanıyan və bunu web servis kimi təqdim edən layihə.", 
            en: "A project that recognizes objects using deep learning and serves the model via a web API." 
        },
        tech: ["TensorFlow/PyTorch", "CNN", "FastAPI", "Docker"],
        features: { 
            tr: ["Önceden eğitilmiş model (Transfer Learning)", "API üzerinden resim yükleme", "Dockerize edilmiş dağıtım"], 
            az: ["Transfer Learning (ResNet/VGG)", "API vasitəsilə şəkil yükləmə", "Dockerize edilmiş tətbiq"], 
            en: ["Transfer Learning", "Image upload via API", "Dockerized deployment"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "Uçtan Uca MLOps Hattı (Pipeline)", 
            az: "Ucdan Uca MLOps Boru Xətti (Pipeline)", 
            en: "End-to-End MLOps Pipeline" 
        },
        desc: { 
            tr: "Modelin otomatik eğitildiği, test edildiği ve canlıya alındığı tam kapsamlı sistem.", 
            az: "Modelin avtomatik öyrədildiyi, test edildiyi və canlıya alındığı tam sistem.", 
            en: "A fully automated system where models are trained, tested, and deployed continuously." 
        },
        tech: ["MLflow", "Airflow", "Kubernetes", "DVC (Data Version Control)"],
        features: { 
            tr: ["Model versiyonlama", "Veri drifti takibi", "Otomatik yeniden eğitim (Retraining)"], 
            az: ["Model versiyalaması", "Data drift izləmə", "Avtomatik yenidən təlim (Retraining)"], 
            en: ["Model versioning", "Data drift monitoring", "Automated retraining pipelines"] 
        }
    }
]
};

contentData['cross-platform'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Teknoloji Seçimi", items: ["Flutter (Dart Dili)", "React Native (JavaScript/TypeScript)", ".NET MAUI (C#)"], status: "start" },
            { title: "Dil Temelleri", items: ["Dart: OOP, Mixins, Async", "JS/TS: ES6+, Arrow Functions, Promises"], status: "start" },
            { title: "UI & Layout", items: ["Flutter: Widget Ağacı, Material/Cupertino", "RN: Flexbox, JSX, Core Components"], status: "mid" },
            { title: "State Management", items: ["Flutter: Provider, Riverpod, Bloc", "RN: Redux Toolkit, Zustand, Context API"], status: "mid" },
            { title: "Navigasyon", items: ["Flutter: GoRouter, Navigator 2.0", "RN: React Navigation, Expo Router"], status: "mid" },
            { title: "Native Entegrasyon", items: ["Kamera & Galeri Erişimi", "GPS & Haritalar", "Platform Channels / Native Modules"], status: "advanced" },
            { title: "Veri & Depolama", items: ["Firebase (Auth, Firestore)", "Supabase", "SQLite / Realm (Yerel DB)", "REST API & GraphQL"], status: "advanced" },
            { title: "Yayınlama & CI/CD", items: ["App Store & Play Store Kuralları", "Codemagic / Bitrise", "Shorebird (OTA Updates)"], status: "expert" }
        ],
        az: [
            { title: "Texnologiya Seçimi", items: ["Flutter (Dart Dili)", "React Native (JavaScript/TypeScript)", ".NET MAUI"], status: "start" },
            { title: "Dil Təməlləri", items: ["Dart: OOP, Asinxron", "JS/TS: ES6+, Promises"], status: "start" },
            { title: "UI & Layout", items: ["Flutter: Widget Ağacı", "RN: Flexbox, JSX, Komponentlər"], status: "mid" },
            { title: "State İdarəetməsi", items: ["Flutter: Provider, Bloc", "RN: Redux, Zustand, Context API"], status: "mid" },
            { title: "Naviqasiya", items: ["Flutter: GoRouter", "RN: React Navigation, Expo Router"], status: "mid" },
            { title: "Native İnteqrasiya", items: ["Kamera & Qalereya", "GPS & Xəritələr", "Native Modullar"], status: "advanced" },
            { title: "Məlumat & Yaddaş", items: ["Firebase", "Supabase", "SQLite (Yerli DB)", "REST API"], status: "advanced" },
            { title: "Yayımlama & CI/CD", items: ["Mağaza Qaydaları", "Codemagic", "OTA Yeniləmələri"], status: "expert" }
        ],
        en: [
            { title: "Framework Selection", items: ["Flutter (Dart)", "React Native (JS/TS)", ".NET MAUI"], status: "start" },
            { title: "Language Basics", items: ["Dart: OOP, Futures", "JS/TS: ES6+, Async/Await"], status: "start" },
            { title: "UI & Layout", items: ["Flutter: Widget Tree", "RN: Flexbox, JSX, Stylesheet"], status: "mid" },
            { title: "State Management", items: ["Flutter: Riverpod, Bloc", "RN: Redux Toolkit, Zustand"], status: "mid" },
            { title: "Navigation", items: ["Flutter: GoRouter", "RN: React Navigation, Expo Router"], status: "mid" },
            { title: "Native Integration", items: ["Camera & Permissions", "Maps & Location", "Bridge / JSI"], status: "advanced" },
            { title: "Data & Storage", items: ["Firebase Ecosystem", "Supabase", "Local DB (SQLite)", "API Consumption"], status: "advanced" },
            { title: "Deployment & CI/CD", items: ["Store Guidelines", "Fastlane", "Codemagic / EAS Build"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // Flutter
            { type: 'doc', title: 'Flutter Docs', url: 'https://docs.flutter.dev', desc: 'Google\'ın mükemmel dokümantasyonu. Flutter öğrenmenin en iyi yolu.', lang: 'global' },
            { type: 'youtube', title: 'The Flutter Way', url: 'https://youtube.com/@TheFlutterWay', desc: 'Görsel olarak büyüleyici UI tasarımlarını Flutter ile kodlayan kanal.', lang: 'en' },
            { type: 'course', title: 'Veli Bacık (Flutter)', url: 'https://www.youtube.com/@VeliBacik', desc: 'Sektör tecrübesiyle Türkçe Flutter ve mimari dersleri.', lang: 'tr' },

            // React Native
            { type: 'doc', title: 'React Native Docs', url: 'https://reactnative.dev', desc: 'Meta (Facebook) tarafından hazırlanan resmi kaynak.', lang: 'en' },
            { type: 'youtube', title: 'William Candillon', url: 'https://youtube.com/@wcandillon', desc: 'React Native animasyonlarının (Can it be done in React Native?) kralı.', lang: 'en' },
            { type: 'tool', title: 'Expo', url: 'https://expo.dev', desc: 'React Native geliştirmeyi inanılmaz kolaylaştıran araç seti.', lang: 'global' },

            // General
            { type: 'roadmap', title: 'Roadmap.sh (Flutter)', url: 'https://roadmap.sh/flutter', desc: 'Step by step Flutter roadmap.', lang: 'en' },
            { type: 'roadmap', title: 'Roadmap.sh (React Native)', url: 'https://roadmap.sh/react-native', desc: 'Step by step React Native roadmap.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Armut", "Startup İlanları"],
            top_skills: ["Flutter", "React Native", "Firebase", "State Management", "Git"],
            avg_salary: "Junior: 35k-50k TL | Mid: 65k-100k TL | Senior: 130k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Staff.az"],
            top_skills: ["Flutter (Çok Popüler)", "React Native", "API Entegrasyonu"],
            avg_salary: "Junior: 800-1200 AZN | Mid: 1800-2800 AZN | Senior: 4000+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "RemoteOK", "Upwork", "Freelancer"],
            top_skills: ["Flutter/Dart", "React Native/TypeScript", "Native Modules", "CI/CD"],
            avg_salary: "Junior: $3k-$5k | Mid: $7k-$11k | Senior: $14k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Flutter mı yoksa React Native mi?",
                az: "Flutter yoxsa React Native?",
                en: "Flutter or React Native?"
            },
            a: {
                tr: "Web geçmişiniz varsa (JS/React biliyorsanız) React Native seçin. Sıfırdan başlıyorsanız veya performans/tutarlılık önceliğinizse Flutter (Dart) daha iyi bir deneyim sunar.",
                az: "Veb təcrübəniz varsa (JS/React bilirsinizsə) React Native seçin. Sıfırdan başlayırsınızsa və ya performans əsasdırsa, Flutter (Dart) daha yaxşıdır.",
                en: "If you have a Web background (JS/React), go for React Native. If starting from scratch or prioritize performance/consistency, Flutter is often better."
            }
        },
        {
            id: 2,
            q: {
                tr: "Native (Swift/Kotlin) ölüyor mu?",
                az: "Native (Swift/Kotlin) ölür?",
                en: "Is Native (Swift/Kotlin) dying?"
            },
            a: {
                tr: "Hayır. Yüksek performanslı oyunlar, AR/VR veya donanıma çok yakın çalışan uygulamalar için hala Native şarttır. Ancak standart iş uygulamaları (E-ticaret vb.) için Cross-Platform artık standarttır.",
                az: "Xeyr. Yüksək performanslı oyunlar və ya donanımla sıx işləyən tətbiqlər üçün Native hələ də şərtdir. Lakin standart biznes tətbiqləri üçün Cross-Platform artıq standartdır.",
                en: "No. Native is still required for high-performance games, AR/VR, or hardware-heavy apps. But for standard business apps, Cross-Platform is now the standard."
            }
        },
        {
            id: 3,
            q: {
                tr: "iOS çıktısı almak için Mac şart mı?",
                az: "iOS çıxışı almaq üçün Mac şərtdir?",
                en: "Is a Mac required for iOS builds?"
            },
            a: {
                tr: "Evet, kod yazmak için şart değil ama uygulamayı derlemek (build) ve App Store'a atmak için Mac gerekir. (Expo Application Services gibi bulut çözümleriyle Mac olmadan da yapılabilir ama sınırlıdır).",
                az: "Bəli, kod yazmaq üçün şərt deyil, amma tətbiqi yığmaq (build) və App Store-a atmaq üçün Mac lazımdır. (Expo kimi bulud həlləri ilə Mac olmadan da edilə bilər).",
                en: "Yes, you need a Mac to build and deploy to the App Store. (Cloud solutions like EAS allow building without a Mac, but eventually, a Mac is recommended)."
            }
        },
        {
            id: 4,
            q: {
                tr: "Web sitemi mobil uygulamaya çevirebilir miyim?",
                az: "Veb saytımı mobil tətbiqə çevirə bilərəm?",
                en: "Can I turn my website into a mobile app?"
            },
            a: {
                tr: "React Native kullanıyorsanız web kodlarınızın (Business Logic) büyük kısmını paylaşabilirsiniz. Flutter da Web'i destekler ancak sadece bir 'WebView' içine site gömmek profesyonel bir yaklaşım değildir.",
                az: "React Native istifadə edirsinizsə, veb kodlarınızın böyük hissəsini paylaşa bilərsiniz. Flutter da Vebi dəstəkləyir, amma sadəcə saytı 'WebView' içinə qoymaq peşəkar deyil.",
                en: "If using React Native, you can share a lot of logic with the web. Flutter also supports Web. However, just wrapping a site in a 'WebView' is not professional."
            }
        },
        {
            id: 5,
            q: {
                tr: "Hangi bilgisayar gereklidir?",
                az: "Hansı kompüter lazımdır?",
                en: "Which computer is required?"
            },
            a: {
                tr: "Flutter ve React Native, emülatörler yüzünden çok RAM tüketir. Minimum 16GB RAM ve SSD diski olan herhangi bir bilgisayar iş görür. Mac (M1/M2) en iyi performansı verir.",
                az: "Flutter və React Native emulyatorlara görə çox RAM yeyir. Minimum 16GB RAM və SSD diski olan hər hansı kompüter iş görər. Mac (M1/M2) ən yaxşı performansı verir.",
                en: "Flutter and RN consume a lot of RAM due to emulators. Any PC with min 16GB RAM and SSD works. Mac (M1/M2) offers the best performance."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "Cross-platform vs Native: Farkı nedir?",
            az: "Cross-platform və Native arasındakı fərq nədir?",
            en: "Difference between Cross-platform and Native?"
        },
        a: {
            tr: "Native tek bir platform (Swift/Kotlin) için yazılır. Cross-platform (Flutter/RN) tek bir kod tabanıyla hem iOS hem Android'de çalışır, maliyet ve zaman tasarrufu sağlar.",
            az: "Native tək bir platforma (Swift/Kotlin) üçün yazılır. Cross-platform isə tək bir kod bazası ilə həm iOS, həm də Android-də işləyir, vaxta və xərclərə qənaət edir.",
            en: "Native is built for one platform. Cross-platform uses a single codebase for both iOS and Android, saving time and resources."
        }
    },
    {
        id: 2,
        q: {
            tr: "Flutter'da 'Widget' kavramı nedir?",
            az: "Flutter-də 'Widget' anlayışı nədir?",
            en: "What is a Widget in Flutter?"
        },
        a: {
            tr: "Flutter'da her şey bir widget'tır. Ekrandaki butonlardan tutun, hizalamaya ve temaya kadar her yapı taşı bir widget olarak tanımlanır.",
            az: "Flutter-də hər şey widget-dir. Ekrandakı düymələrdən tutmuş, düzləndirmə və mövzuya qədər hər bir struktur elementi widget sayılır.",
            en: "In Flutter, everything is a widget. From UI elements like buttons to layout properties like padding, every building block is a widget."
        }
    },
    {
        id: 3,
        q: {
            tr: "Stateless ve Stateful Widget farkı nedir?",
            az: "Stateless və Stateful Widget fərqi nədir?",
            en: "Stateless vs Stateful Widget?"
        },
        a: {
            tr: "Stateless: Değişmeyen, sabit arayüzler için kullanılır. Stateful: Kullanıcı etkileşimiyle değişen, durumu (state) olan yapılar için kullanılır.",
            az: "Stateless: Dəyişməyən, sabit interfeyslər üçündür. Stateful: İstifadəçi ilə əlaqə zamanı dəyişən, vəziyyəti (state) olan elementlər üçündür.",
            en: "Stateless widgets are immutable and don't change. Stateful widgets can maintain and update their state over time."
        }
    },
    {
        id: 4,
        q: {
            tr: "React Native'de 'Bridge' (Köprü) mantığı nedir?",
            az: "React Native-də 'Bridge' (Körpü) məntiqi nədir?",
            en: "What is the Bridge in React Native?"
        },
        a: {
            tr: "JavaScript kodu ile Native modüller (Java/Swift) arasındaki iletişimi sağlayan yapıdır. Veriler JSON olarak bu köprü üzerinden aktarılır.",
            az: "JavaScript kodu ilə Native modullar arasındakı əlaqəni təmin edən mexanizmdir. Məlumatlar JSON formatında bu körpü vasitəsilə ötürülür.",
            en: "A mechanism that allows JavaScript and Native modules to communicate by sending JSON messages back and forth."
        }
    },
    {
        id: 5,
        q: {
            tr: "Hot Reload ve Hot Restart farkı nedir?",
            az: "Hot Reload və Hot Restart fərqi nədir?",
            en: "Hot Reload vs Hot Restart?"
        },
        a: {
            tr: "Hot Reload: Uygulama durumunu koruyarak sadece kod değişikliklerini yansıtır. Hot Restart: Uygulamayı sıfırdan başlatır ve tüm durumu temizler.",
            az: "Hot Reload: Tətbiqin vəziyyətini (state) qoruyaraq yalnız kod dəyişikliklərini göstərir. Hot Restart: Tətbiqi sıfırdan başladır və bütün state-i təmizləyir.",
            en: "Hot Reload injects code changes while keeping the app state. Hot Restart resets the app state and restarts the app with new code."
        }
    },
    {
        id: 6,
        q: {
            tr: "React Native'de 'Props' ve 'State' farkı nedir?",
            az: "React Native-də 'Props' və 'State' fərqi nədir?",
            en: "Difference between Props and State?"
        },
        a: {
            tr: "Props: Üst bileşenden (parent) gelen değişmez verilerdir. State: Bileşenin kendi içinde yönettiği ve güncellendiğinde arayüzü yenileyen verilerdir.",
            az: "Props: Üst komponentdən gələn dəyişməz məlumatlardır. State: Komponentin daxilində idarə olunan və dəyişdikdə interfeysi yeniləyən məlumatlardır.",
            en: "Props are read-only data passed from parent to child. State is local data managed within the component that can change over time."
        }
    },
    {
        id: 7,
        q: {
            tr: "Flutter'da 'InheritedWidget' ne işe yarar?",
            az: "Flutter-də 'InheritedWidget' nə işə yarayır?",
            en: "What is InheritedWidget in Flutter?"
        },
        a: {
            tr: "Veriyi widget ağacında derinlere, her seviyede manuel taşımadan (prop drilling olmadan) iletmek için kullanılır (Örn: Theme, MediaQuery).",
            az: "Məlumatı widget ağacında aşağı qatlara hər dəfə əllə ötürmədən çatdırmaq üçün istifadə olunur (Məs: Theme, MediaQuery).",
            en: "A base class that allows data to be passed down the widget tree efficiently to any descendant widget."
        }
    },
    {
        id: 8,
        q: {
            tr: "Redux nedir?",
            az: "Redux nədir?",
            en: "What is Redux?"
        },
        a: {
            tr: "Uygulamanın tüm durumunu (state) merkezi bir 'store' içinde yöneten bir kütüphanedir. Genelde büyük ölçekli React Native projelerinde kullanılır.",
            az: "Tətbiqin bütün vəziyyətini mərkəzi bir 'store' daxilində idarə edən kitabxanadır. Adətən böyük React Native layihələrində istifadə olunur.",
            en: "A predictable state container for JavaScript apps that manages global state in a central store."
        }
    },
    {
        id: 9,
        q: {
            tr: "Flutter'da 'pubspec.yaml' dosyası nedir?",
            az: "Flutter-də 'pubspec.yaml' faylı nədir?",
            en: "What is the pubspec.yaml file?"
        },
        a: {
            tr: "Projenin paket bağımlılıklarını, fontlarını, resim varlıklarını (assets) ve versiyon bilgilerini tanımlayan dosyadır.",
            az: "Layihənin paket asılılıqlarını, fontlarını, şəkil və digər resurslarını (assets) və versiya məlumatlarını təyin edən fayldır.",
            en: "The configuration file where you manage dependencies, assets, and versioning for your Flutter project."
        }
    },
    {
        id: 10,
        q: {
            tr: "React Native'de 'Flexbox' nedir?",
            az: "React Native-də 'Flexbox' nədir?",
            en: "What is Flexbox in React Native?"
        },
        a: {
            tr: "Ekran düzenini (layout) oluşturmak için kullanılan bir tasarım sistemidir. Elemanların boyutunu ve hizalamasını kolaylaştırır.",
            az: "Ekran düzənini (layout) yaratmaq üçün istifadə olunan dizayn sistemidir. Elementlərin ölçüsünü və düzülüşünü tənzimləməyi asanlaşdırır.",
            en: "A layout engine that provides a consistent way to align and distribute UI elements within a container across different screen sizes."
        }
    },
    {
        id: 11,
        q: {
            tr: "Flutter'da 'Main Isolate' nedir?",
            az: "Flutter-də 'Main Isolate' nədir?",
            en: "What is the Main Isolate in Flutter?"
        },
        a: {
            tr: "Dart kodunun çalıştığı ana iş parçacığıdır. UI güncellemeleri ve olay döngüsü (event loop) burada gerçekleşir.",
            az: "Dart kodunun işlədiyi əsas thread-dir. UI yenilənmələri və hadisə dövrü (event loop) burada baş verir.",
            en: "The main execution thread for Dart code, where the UI is rendered and events are processed."
        }
    },
    {
        id: 12,
        q: {
            tr: "React Native'de 'Expo' ve 'CLI' farkı nedir?",
            az: "React Native-də 'Expo' və 'CLI' fərqi nədir?",
            en: "Expo vs React Native CLI?"
        },
        a: {
            tr: "Expo: Kurulumu kolay, hızlı geliştirme sağlar ama kısıtlıdır. CLI: Daha karmaşıktır ama tam kontrol ve native modüllere tam erişim sağlar.",
            az: "Expo: Quraşdırılması asandır, sürətli inkişaf imkanı verir amma məhduddur. CLI: Daha mürəkkəbdir, lakin tam nəzarət və native modullara tam giriş verir.",
            en: "Expo is a set of tools that simplifies development but has limitations. CLI offers full control and access to native layers."
        }
    },
    {
        id: 13,
        q: {
            tr: "Flutter'da 'Future' ve 'Stream' farkı?",
            az: "Flutter-də 'Future' və 'Stream' fərqi?",
            en: "Future vs Stream in Flutter?"
        },
        a: {
            tr: "Future: Tek bir asenkron değer döner (örn: API yanıtı). Stream: Zaman içinde birden fazla değer döner (örn: kronometre veya chat).",
            az: "Future: Tək bir asinxron dəyər qaytarır (məs: API cavabı). Stream: Zaman ərzində bir neçə dəyər qaytarır (məs: saniyəölçən).",
            en: "Future represents a single asynchronous value. Stream represents a sequence of asynchronous values over time."
        }
    },
    {
        id: 14,
        q: {
            tr: "React Native'de 'useEffect' hook'u ne için kullanılır?",
            az: "React Native-də 'useEffect' hook-u nə üçün istifadə olunur?",
            en: "What is the purpose of useEffect?"
        },
        a: {
            tr: "Bileşen yaşam döngüsü işlemlerini (mount, update, unmount) yönetmek ve asenkron yan etkileri (API çağrıları) gerçekleştirmek için kullanılır.",
            az: "Komponentin həyat dövrü əməliyyatlarını (yüklənmə, yenilənmə, silinmə) idarə etmək və kənar təsirləri (API sorğuları) reallaşdırmaq üçündür.",
            en: "A hook used to handle side effects like data fetching, subscriptions, or manually changing the DOM in functional components."
        }
    },
    {
        id: 15,
        q: {
            tr: "Flutter'da 'Navigator' nedir?",
            az: "Flutter-də 'Navigator' nədir?",
            en: "What is Navigator in Flutter?"
        },
        a: {
            tr: "Uygulama içinde sayfalar arası geçişi (routing) yöneten yapıdır. Stack (yığın) mantığıyla çalışır (Push/Pop).",
            az: "Tətbiq daxilində səhifələr arası keçidi idarə edən mexanizmdir. Stack (yığın) məntiqi ilə işləyir (Push/Pop).",
            en: "A widget that manages a set of child widgets with a stack discipline, used for navigating between screens."
        }
    },
    {
        id: 16,
        q: {
            tr: "Hermes motoru nedir (React Native)?",
            az: "Hermes mühərriki nədir (React Native)?",
            en: "What is the Hermes engine?"
        },
        a: {
            tr: "Facebook tarafından geliştirilen, React Native uygulamalarının performansını artıran ve açılış hızını optimize eden açık kaynaklı bir JavaScript motorudur.",
            az: "Facebook tərəfindən hazırlanan, React Native tətbiqlərinin performansını artıran və açılış sürətini optimallaşdıran JavaScript mühərrikidir.",
            en: "An open-source JavaScript engine optimized for running React Native apps, improving startup time and reducing memory usage."
        }
    },
    {
        id: 17,
        q: {
            tr: "Dart'ta 'Mixin' nedir?",
            az: "Dart-da 'Mixin' nədir?",
            en: "What is a Mixin in Dart?"
        },
        a: {
            tr: "Sınıflara kalıtım (inheritance) olmadan yeni özellikler eklemeyi sağlayan bir yapıdır. 'with' anahtar kelimesiyle kullanılır.",
            az: "Klaslara miras (inheritance) olmadan yeni xüsusiyyətlər əlavə etməyə imkan verən strukturdur. 'with' açar sözü ilə istifadə olunur.",
            en: "A way of reusing a class's code in multiple class hierarchies without needing to use inheritance."
        }
    },
    {
        id: 18,
        q: {
            tr: "React Native'de 'FlatList' neden önemlidir?",
            az: "React Native-də 'FlatList' niyə vacibdir?",
            en: "Why is FlatList important?"
        },
        a: {
            tr: "Büyük veri listelerini verimli bir şekilde kaydırmak için kullanılır. Sadece ekrandaki elemanları render ederek bellek tasarrufu sağlar.",
            az: "Böyük məlumat siyahılarını effektiv şəkildə sürüşdürmək (scroll) üçün istifadə olunur. Yalnız ekranda görünən elementləri render edərək yaddaşa qənaət edir.",
            en: "A performant interface for rendering basic, flat lists, supporting features like infinite scroll and memory optimization."
        }
    },
    {
        id: 19,
        q: {
            tr: "Flutter'da 'BLoc' deseni nedir?",
            az: "Flutter-də 'BLoc' patterni nədir?",
            en: "What is the BLoc pattern?"
        },
        a: {
            tr: "Business Logic Component; arayüz kodunu iş mantığından ayırmak için Stream yapısını kullanan bir durum yönetimi (state management) yaklaşımıdır.",
            az: "Business Logic Component; interfeys kodunu biznes məntiqindən ayırmaq üçün Stream strukturundan istifadə edən dövlət idarəetmə (state management) yanaşmasıdır.",
            en: "A state management system for Flutter that helps separate business logic from UI, relying on Streams and Sinks."
        }
    },
    {
        id: 20,
        q: {
            tr: "Platform Channels (Flutter) nedir?",
            az: "Platform Channels (Flutter) nədir?",
            en: "What are Platform Channels?"
        },
        a: {
            tr: "Flutter'ın yerel cihaz özelliklerine (kamera, pil durumu vb.) erişmek için Native (Java/Swift) kodla iletişim kurmasını sağlayan yapıdır.",
            az: "Flutter-in cihazın native xüsusiyyətlərinə (kamera, batareya və s.) müraciət etmək üçün Native kodla əlaqə qurmasını təmin edən mexanizmdir.",
            en: "A bridge that allows Flutter code to communicate with host platforms (iOS and Android) to access native APIs."
        }
    }
],
projects: [
    {
        id: 1,
        level: "junior",
        title: { tr: "Global Alışveriş Listesi", az: "Qlobal Alış-veriş Siyahısı", en: "Global Shopping List" },
        desc: { tr: "Cihazlar arası senkronize olan, şık arayüzlü bir market listesi uygulaması.", az: "Cihazlar arası sinxronizasiya olunan, şık interfeysli market siyahısı.", en: "A stylish shopping list app that syncs across devices." },
        tech: ["Flutter/React Native", "Firebase Auth", "Cloud Firestore"],
        features: { tr: ["Gerçek zamanlı senkronizasyon", "Kategori yönetimi", "Sosyal giriş (Google/Apple)"], az: ["Real-time sinxronizasiya", "Kateqoriya idarəetməsi", "Sosial giriş"], en: ["Real-time sync", "Category management", "Social auth"] }
    },
    {
        id: 2,
        level: "mid",
        title: { tr: "Fitness & Aktivite Sosyal Ağı", az: "Fitnes Sosyal Şəbəkəsi", en: "Fitness Social Network" },
        desc: { tr: "Kullanıcıların antrenmanlarını paylaştığı ve birbirini takip edebildiği bir platform.", az: "İstifadəçilərin məşqlərini paylaşdığı və bir-birini izləyə bildiyi platform.", en: "A platform where users share workouts and follow each other." },
        tech: ["State Management (Bloc/Redux)", "REST API", "Image Picker & Cropper"],
        features: { tr: ["Dinamik haber akışı (Feed)", "Profil özelleştirme", "Beğeni ve yorum sistemi"], az: ["Dinamik xəbər lenti", "Profil fərdiləşdirmə", "Bəyənmə və şərh sistemi"], en: ["Dynamic news feed", "Profile customization", "Like & comment system"] }
    },
    {
        id: 3,
        level: "expert",
        title: { tr: "E-Ticaret Süper Uygulaması", az: "E-Ticarət Super Tətbiqi", en: "E-commerce Super App" },
        desc: { tr: "Ödeme entegrasyonu ve karmaşık animasyonlar içeren tam kapsamlı mağaza.", az: "Ödəniş inteqrasiyası və mürəkkəb animasiyalar olan tam mağaza tətbiqi.", en: "Full-scale store with payment integration and complex animations." },
        tech: ["Lottie Animations", "Stripe/IAP Integration", "Deep Linking", "CI/CD (Codemagic/Fastlane)"],
        features: { tr: ["Gelişmiş sepet mantığı", "Ödeme geçidi entegrasyonu", "Push bildirim stratejileri"], az: ["Təkmil səbət məntiqi", "Ödəniş sistemi inteqrasiyası", "Push bildirişləri"], en: ["Advanced cart logic", "Payment gateway integration", "Push notification strategies"] }
    }
]
};

contentData['ios'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Ekosisteme Giriş", items: ["macOS Kullanımı", "Xcode Kurulumu & Arayüzü", "Apple Developer Program Nedir?"], status: "start" },
            { title: "Swift Dili (Temeller)", items: ["Değişkenler & Sabitler (let/var)", "Optionals (?) & Unwrapping", "Struct vs Class", "Loops & Collections"], status: "start" },
            { title: "Modern UI: SwiftUI", items: ["View Yapısı & Modifiers", "State Management (@State, @Binding)", "NavigationStack", "Listeler & Gridler"], status: "mid" },
            { title: "Legacy UI: UIKit (Hala Önemli)", items: ["Storyboards vs Programmatic UI", "Auto Layout & Constraints", "UITableView / UICollectionView", "View Controller Lifecycle"], status: "mid" },
            { title: "Veri ve Ağ (Networking)", items: ["URLSession & API İstekleri", "JSON Decoding (Codable)", "SwiftData (Modern DB)", "Core Data (Klasik DB)"], status: "mid" },
            { title: "Mimari Desenler", items: ["MVVM (Sektör Standardı)", "MVC (Klasik)", "The Composable Architecture (TCA)", "Dependency Injection"], status: "advanced" },
            { title: "İleri Seviye Konular", items: ["Concurrency (Async/Await)", "Grand Central Dispatch (GCD)", "Memory Management (ARC)", "Unit Testing & XCTest"], status: "expert" },
            { title: "Dağıtım ve Mağaza", items: ["App Store Connect", "TestFlight", "Provisioning Profiles & Certificates", "CI/CD (Xcode Cloud)"], status: "expert" }
        ],
        az: [
            { title: "Ekosistemə Giriş", items: ["macOS İstifadəsi", "Xcode Quraşdırılması", "Apple Developer Proqramı Nədir?"], status: "start" },
            { title: "Swift Dili (Təməllər)", items: ["Dəyişənlər & Sabitlər", "Optionals (?) & Ailə", "Struct vs Class", "Dövrələr & Kolleksiyalar"], status: "start" },
            { title: "Müasir UI: SwiftUI", items: ["View Strukturu", "State İdarəetməsi (@State, @Binding)", "Naviqasiya", "Siyahılar"], status: "mid" },
            { title: "Köhnə UI: UIKit (Hələ də Vacib)", items: ["Storyboards vs Kodla UI", "Auto Layout", "UITableView", "Həyat Dövrü (Lifecycle)"], status: "mid" },
            { title: "Məlumat və Şəbəkə", items: ["URLSession & API İstəkləri", "JSON (Codable)", "SwiftData (Yeni)", "Core Data (Klassik)"], status: "mid" },
            { title: "Memarlıq Nümunələri", items: ["MVVM (Standart)", "MVC", "TCA (Mütəxəssis)", "Dependency Injection"], status: "advanced" },
            { title: "İrəli Səviyyə Mövzular", items: ["Concurrency (Async/Await)", "Yaddaş İdarəetməsi (ARC)", "Unit Testlər"], status: "expert" },
            { title: "Yayılma və Mağaza", items: ["App Store Connect", "TestFlight", "Sertifikatlar & Profillər", "CI/CD (Xcode Cloud)"], status: "expert" }
        ],
        en: [
            { title: "Ecosystem Basics", items: ["macOS Basics", "Xcode Setup & Interface", "Apple Developer Program"], status: "start" },
            { title: "Swift Language", items: ["Variables (let/var)", "Optionals (?) & Unwrapping", "Struct vs Class", "Control Flow"], status: "start" },
            { title: "Modern UI: SwiftUI", items: ["Views & Modifiers", "State Management", "NavigationStack", "Lists & Grids"], status: "mid" },
            { title: "Legacy UI: UIKit", items: ["Programmatic UI", "Auto Layout", "Delegates & Protocols", "View Controller Lifecycle"], status: "mid" },
            { title: "Data & Networking", items: ["URLSession & Async/Await", "JSON Parsing (Codable)", "SwiftData (Modern)", "Core Data (Legacy)"], status: "mid" },
            { title: "Architecture", items: ["MVVM (Industry Standard)", "MVC", "TCA (The Composable Architecture)", "Clean Architecture"], status: "advanced" },
            { title: "Advanced Topics", items: ["Structured Concurrency", "Memory Management (ARC)", "Combine Framework", "Unit/UI Testing"], status: "expert" },
            { title: "Deployment", items: ["App Store Connect", "TestFlight", "Certificates & Provisioning", "CI/CD Workflows"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // YouTube & Courses
            { type: 'course', title: '100 Days of SwiftUI', url: 'https://www.hackingwithswift.com/100/swiftui', desc: 'Paul Hudson\'ın efsanevi, ücretsiz ve günlük planlı kursu. iOS\'un kutsal kitabı.', lang: 'en' },
            { type: 'youtube', title: 'Swiftful Thinking', url: 'https://youtube.com/@SwiftfulThinking', desc: 'Nick Sarno. Özellikle SwiftUI ve MVVM mimarisi için dünyadaki en iyi anlatım.', lang: 'en' },
            { type: 'youtube', title: 'Sean Allen', url: 'https://youtube.com/@seanallen', desc: 'Kariyer tavsiyeleri ve Swift üzerine popüler içerikler.', lang: 'en' },
            { type: 'course', title: 'Angela Yu iOS Course', url: 'https://www.udemy.com', desc: 'Udemy\'nin en popüler başlangıç kursu (UIKit ve SwiftUI karışık).', lang: 'en' },

            // Documentation & Tools
            { type: 'doc', title: 'Apple Developer Docs', url: 'https://developer.apple.com/documentation/', desc: 'Apple\'ın resmi dokümantasyonu. Her şeyin kaynağı.', lang: 'en' },
            { type: 'doc', title: 'Human Interface Guidelines', url: 'https://developer.apple.com/design/human-interface-guidelines/', desc: 'Apple tasarım kuralları. Tasarımcı olmasanız bile okumalısınız.', lang: 'global' },
            { type: 'tool', title: 'SF Symbols', url: 'https://developer.apple.com/sf-symbols/', desc: 'Apple\'ın uygulamanızda kullanabileceğiniz binlerce ücretsiz ikonu.', lang: 'global' },
            { type: 'tool', title: 'Xcode', url: 'https://developer.apple.com/xcode/', desc: 'iOS geliştirmek için zorunlu olan IDE.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/ios', desc: 'iOS geliştirici yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "iOS Developer TR (Slack/Discord)"],
            top_skills: ["Swift", "SwiftUI", "UIKit (Legacy projeler)", "Git", "MVVM"],
            avg_salary: "Junior: 40k-55k TL | Mid: 75k-110k TL | Senior: 150k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankacılık Sektörü İlanları"],
            top_skills: ["Swift", "UIKit", "Auto Layout", "REST API", "Figma"],
            avg_salary: "Junior: 1000-1500 AZN | Mid: 2000-3500 AZN | Senior: 5000+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "Hired", "Remote.co", "WeWorkRemotely"],
            top_skills: ["SwiftUI", "Combine", "TCA", "CI/CD", "Unit Testing"],
            avg_salary: "Junior: $5k-$7k | Mid: $9k-$13k | Senior: $15k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Mac bilgisayar şart mı?",
                az: "Mac kompüteri şərtdir?",
                en: "Is a Mac required?"
            },
            a: {
                tr: "Evet. Xcode sadece macOS'ta çalışır. Hackintosh veya sanal makine (VM) ile öğrenilebilir ama profesyonel iş ve App Store'a yükleme yapmak için gerçek bir Mac şarttır.",
                az: "Bəli. Xcode yalnız macOS-da işləyir. Hackintosh və ya virtual maşınla öyrənmək olar, amma peşəkar iş və App Store-a yükləmək üçün real Mac şərtdir.",
                en: "Yes. Xcode only runs on macOS. You can learn on a VM/Hackintosh, but for professional work and App Store deployment, a real Mac is mandatory."
            }
        },
        {
            id: 2,
            q: {
                tr: "SwiftUI mı yoksa UIKit mi öğrenmeliyim?",
                az: "SwiftUI yoxsa UIKit öyrənməliyəm?",
                en: "Should I learn SwiftUI or UIKit?"
            },
            a: {
                tr: "Kesinlikle SwiftUI ile başlayın, gelecek orada. Ancak iş bulmak için UIKit'i 'okuyabilmek' ve temel seviyede bilmek zorundasınız çünkü eski projeler hala UIKit dolu.",
                az: "Mütləq SwiftUI ilə başlayın, gələcək oradadır. Lakin iş tapmaq üçün UIKit-i 'oxuya bilmək' və təməl səviyyədə bilmək məcburiyyətindəsiniz, çünki köhnə layihələr hələ də UIKit doludur.",
                en: "Definitely start with SwiftUI, it's the future. However, you must be able to 'read' and know basic UIKit to find a job, as legacy projects are full of it."
            }
        },
        {
            id: 3,
            q: {
                tr: "Uygulama yayınlamak ücretli mi?",
                az: "Tətbiq yayımlamaq ödənişlidir?",
                en: "Is publishing apps free?"
            },
            a: {
                tr: "Hayır. Apple App Store'a uygulama yüklemek için yıllık 99$ geliştirici ücreti ödemeniz gerekir. (Google Play'de bu tek seferlik 25$ civarıdır).",
                az: "Xeyr. Apple App Store-a tətbiq yükləmək üçün illik 99$ tərtibatçı haqqı ödəməlisiniz. (Google Play-də bu birdəfəlik 25$-dır).",
                en: "No. You need to pay a $99 annual developer fee to publish on the App Store. (Google Play is a one-time $25 fee)."
            }
        },
        {
            id: 4,
            q: {
                tr: "Objective-C öğrenmeli miyim?",
                az: "Objective-C öyrənməliyəm?",
                en: "Should I learn Objective-C?"
            },
            a: {
                tr: "Hayır. 2014'ten beri Swift kullanılıyor. Objective-C sadece çok eski bankacılık uygulamalarında bakım yapmak için gerekebilir, yeni başlayanlar için vakit kaybıdır.",
                az: "Xeyr. 2014-cü ildən bəri Swift istifadə olunur. Objective-C yalnız çox köhnə bank tətbiqlərində baxım etmək üçün lazım ola bilər, yeni başlayanlar üçün vaxt itkisidir.",
                en: "No. Swift has been the standard since 2014. Objective-C is only needed for maintaining very old legacy apps; it's a waste of time for beginners."
            }
        },
        {
            id: 5,
            q: {
                tr: "iPhone cihazım olması gerekir mi?",
                az: "iPhone cihazım olmalıdır?",
                en: "Do I need an iPhone?"
            },
            a: {
                tr: "Xcode içindeki 'Simulator' çoğu işi (UI, mantık) test etmek için yeterlidir. Ancak Kamera, GPS veya Jiroskop gibi sensörleri test etmek için gerçek cihaz gerekir.",
                az: "Xcode daxilindəki 'Simulator' bir çox işi test etmək üçün kifayətdir. Lakin Kamera, GPS və ya Giroskop kimi sensorları yoxlamaq üçün real cihaz lazımdır.",
                en: "The 'Simulator' in Xcode is enough for most tasks. However, a real device is required to test sensors like Camera, GPS, or Gyroscope."
            }
        },
        {
            id: 6,
            q: {
                tr: "Neden Flutter/React Native yerine Native iOS?",
                az: "Niyə Flutter/React Native yerinə Native iOS?",
                en: "Why Native iOS instead of Flutter/RN?"
            },
            a: {
                tr: "En yüksek performans, en yeni Apple özelliklerine anında erişim (örn: Dynamic Island) ve daha stabil, 'Premium' hissettiren uygulamalar için Native tercih edilir.",
                az: "Ən yüksək performans, ən yeni Apple xüsusiyyətlərinə dərhal çıxış (məs: Dynamic Island) və daha stabil, 'Premium' hiss etdirən tətbiqlər üçün Native seçilir.",
                en: "Native is preferred for peak performance, instant access to latest Apple features (e.g., Dynamic Island), and building stable, 'Premium' feeling apps."
            }
        }
    ],

    // 5. Interview
    interview: [
    {
        id: 1,
        q: {
            tr: "Swift'te 'Optional' nedir?",
            az: "Swift-də 'Optional' nədir?",
            en: "What is an Optional in Swift?"
        },
        a: {
            tr: "Bir değişkenin bir değere sahip olabileceğini veya 'nil' (değersiz) olabileceğini belirten türdür. Güvenli kod yazımını sağlar.",
            az: "Bir dəyişənin dəyərinin ola biləcəyini və ya 'nil' (dəyərsiz) ola biləcəyini bildirən növdür. Təhlükəsiz kod yazılışını təmin edir.",
            en: "A type that represents either a wrapped value or the absence of a value (nil). It ensures type safety."
        }
    },
    {
        id: 2,
        q: {
            tr: "Strong, Weak ve Unowned referans farkı nedir?",
            az: "Strong, Weak və Unowned referans fərqi nədir?",
            en: "Difference between Strong, Weak, and Unowned?"
        },
        a: {
            tr: "Strong: Nesneyi bellekte tutar. Weak: Nesne silinince 'nil' olur (Retain cycle önler). Unowned: Nesne silinince nil olmaz, silinmiş nesneye erişim crash'e sebep olur.",
            az: "Strong: Obyekti yaddaşda saxlayır. Weak: Obyekt silindikdə 'nil' olur (Retain cycle-ın qarşısını alır). Unowned: Obyekt silindikdə nil olmur, silinmiş obyektə müraciət tətbiqi çökdürür (crash).",
            en: "Strong: Keeps a firm hold on the instance. Weak: Doesn't keep a hold and becomes nil when the instance is deallocated. Unowned: Doesn't keep a hold but expects the instance to never be nil."
        }
    },
    {
        id: 3,
        q: {
            tr: "ARC (Automatic Reference Counting) nedir?",
            az: "ARC (Automatic Reference Counting) nədir?",
            en: "What is ARC?"
        },
        a: {
            tr: "Swift'in bellek yönetimi sistemidir. Bir nesneye olan referans sayısını takip eder ve referans sayısı sıfıra düştüğünde nesneyi bellekten temizler.",
            az: "Swift-in yaddaş idarəetmə sistemidir. Bir obyektə olan müraciət (referans) sayını izləyir və bu say sıfıra düşdükdə obyekti yaddaşdan silir.",
            en: "Swift's memory management system. It tracks and manages your app's memory usage by counting references to class instances."
        }
    },
    {
        id: 4,
        q: {
            tr: "Struct ve Class arasındaki temel farklar nelerdir?",
            az: "Struct və Class arasındakı əsas fərqlər nələrdir?",
            en: "Main differences between Struct and Class?"
        },
        a: {
            tr: "Struct 'Value Type'dır (kopyalanır), Stack'te tutulur. Class 'Reference Type'dır (paylaşılır), Heap'te tutulur ve kalıtım (inheritance) destekler.",
            az: "Struct 'Value Type'-dır (kopyalanır), Stack-də saxlanılır. Class 'Reference Type'-dır (paylaşılır), Heap-də saxlanılır və miras almağı (inheritance) dəstəkləyir.",
            en: "Structs are Value Types (copied), stored in Stack. Classes are Reference Types (shared), stored in Heap and support inheritance."
        }
    },
    {
        id: 5,
        q: {
            tr: "Protocol nedir?",
            az: "Protocol nədir?",
            en: "What is a Protocol?"
        },
        a: {
            tr: "Belirli bir işlev için gereken metodların ve özelliklerin bir taslağıdır. Java'daki Interface yapısına benzer.",
            az: "Müəyyən bir funksionallıq üçün lazım olan metodların və xüsusiyyətlərin eskizidir (blueprint). Java-dakı Interface strukturuna bənzəyir.",
            en: "A blueprint of methods, properties, and other requirements that suit a particular task or piece of functionality."
        }
    },
    {
        id: 6,
        q: {
            tr: "Closure nedir?",
            az: "Closure nədir?",
            en: "What is a Closure?"
        },
        a: {
            tr: "Kod bloklarını değişken gibi saklayabilen ve parametre olarak geçilebilen fonksiyonel yapılardır.",
            az: "Kod bloklarını dəyişən kimi saxlaya bilən və parametr kimi ötürülə bilən funksional strukturlardır.",
            en: "Self-contained blocks of functionality that can be passed around and used in your code."
        }
    },
    {
        id: 7,
        q: {
            tr: "Escaping ve Non-escaping closure farkı?",
            az: "Escaping və Non-escaping closure fərqi?",
            en: "Escaping vs Non-escaping closures?"
        },
        a: {
            tr: "Escaping: Fonksiyon bittikten sonra da çalışmaya devam edebilen (örn: network isteği). Non-escaping: Fonksiyon kapsamı içinde biten closure.",
            az: "Escaping: Funksiya bitdikdən sonra da işləməyə davam edə bilən (məs: network sorğusu). Non-escaping: Funksiya daxilində tamamlanan closure.",
            en: "Escaping: A closure that outlives the function it was passed to. Non-escaping: Executed within the function's scope."
        }
    },
    {
        id: 8,
        q: {
            tr: "MVC ve MVVM mimari farkı nedir?",
            az: "MVC və MVVM arxitektura fərqi nədir?",
            en: "Difference between MVC and MVVM?"
        },
        a: {
            tr: "MVC'de Controller hem view hem modelle iç içedir. MVVM'de ViewModel, View'dan tamamen bağımsızdır ve veri bağlama (data binding) kullanır.",
            az: "MVC-də Controller həm view, həm də modellə sıx bağlıdır. MVVM-də ViewModel view-dan asılı deyil və data binding istifadə edir.",
            en: "In MVC, Controller is tightly coupled. In MVVM, ViewModel is independent of the View, often using data binding for updates."
        }
    },
    {
        id: 9,
        q: {
            tr: "Delegation pattern nedir?",
            az: "Delegation pattern nədir?",
            en: "What is the Delegation pattern?"
        },
        a: {
            tr: "Bir nesnenin görevini başka bir nesneye devretmesini sağlayan tasarım desenidir. Genelde protokoller ile uygulanır.",
            az: "Bir obyektin tapşırığını başqa bir obyektə həvalə etməsini təmin edən dizayn patternidir. Adətən protokollar vasitəsilə tətbiq olunur.",
            en: "A design pattern that enables a class to hand off (or delegate) some of its responsibilities to an instance of another class."
        }
    },
    {
        id: 10,
        q: {
            tr: "SwiftUI ve UIKit farkı nedir?",
            az: "SwiftUI və UIKit fərqi nədir?",
            en: "SwiftUI vs UIKit?"
        },
        a: {
            tr: "UIKit imperatiftir (adım adım tarif edilir). SwiftUI deklaratiftir (sonuç tarif edilir, sistem nasıl yapacağını bilir).",
            az: "UIKit imperativdir (addım-addım tərif edilir). SwiftUI deklarativdir (nəticə tərif edilir, sistem onu necə edəcəyini bilir).",
            en: "UIKit is an imperative framework. SwiftUI is a modern, declarative framework for building user interfaces across all Apple platforms."
        }
    },
    {
        id: 11,
        q: {
            tr: "GCD (Grand Central Dispatch) nedir?",
            az: "GCD (Grand Central Dispatch) nədir?",
            en: "What is GCD?"
        },
        a: {
            tr: "Çoklu iş parçacığı (multithreading) yönetimi için Apple'ın sunduğu düşük seviyeli API'dir. İşleri kuyruklara (queues) atar.",
            az: "Çoxşaxəli işləmə (multithreading) üçün Apple tərəfindən təqdim edilən API-dir. Tapşırıqları növbələrə (queues) yerləşdirir.",
            en: "Apple's low-level API for managing concurrent operations and multithreading using task queues."
        }
    },
    {
        id: 12,
        q: {
            tr: "Main Thread neden sadece UI için kullanılır?",
            az: "Main Thread niyə yalnız UI üçün istifadə olunur?",
            en: "Why is the Main Thread used only for UI?"
        },
        a: {
            tr: "Arayüz güncellemeleri hızlı ve sıralı olmalıdır. Ağır işlemler main thread'de yapılırsa uygulama donar (freezing).",
            az: "İnterfeys yenilənmələri sürətli və ardıcıl olmalıdır. Ağır əməliyyatlar main thread-də edilsə, tətbiq donar.",
            en: "To keep the UI responsive. Heavy tasks on the main thread cause the interface to freeze and degrade user experience."
        }
    },
    {
        id: 13,
        q: {
            tr: "Frame ve Bounds farkı nedir?",
            az: "Frame və Bounds fərqi nədir?",
            en: "Difference between Frame and Bounds?"
        },
        a: {
            tr: "Frame: Görünümün üst öğesine (superview) göre konumu. Bounds: Görünümün kendi koordinat sistemine göre konumu.",
            az: "Frame: Görünüşün üst elementinə (superview) görə mövqeyi. Bounds: Görünüşün öz koordinat sisteminə görə mövqeyi.",
            en: "Frame: Position and size relative to its superview. Bounds: Position and size relative to its own coordinate system."
        }
    },
    {
        id: 14,
        q: {
            tr: "App Lifecycle (Uygulama Yaşam Döngüsü) aşamaları?",
            az: "App Lifecycle mərhələləri nələrdir?",
            en: "What are the App Lifecycle states?"
        },
        a: {
            tr: "Not Running, Inactive, Active, Background ve Suspended.",
            az: "Not Running (İşləmir), Inactive (Qeyri-aktiv), Active (Aktiv), Background (Arxa fon) və Suspended (Dayandırılmış).",
            en: "The main states are: Not Running, Inactive, Active, Background, and Suspended."
        }
    },
    {
        id: 15,
        q: {
            tr: "Combine framework'ü nedir?",
            az: "Combine framework-ü nədir?",
            en: "What is the Combine framework?"
        },
        a: {
            tr: "Zamana bağlı değerleri işlemek için kullanılan reaktif bir framework'tür (Publisher ve Subscriber mantığı).",
            az: "Zamana bağlı dəyərləri emal etmək üçün istifadə olunan reaktiv framework-dür (Publisher və Subscriber məntiqi).",
            en: "A declarative Swift API for processing values over time, focusing on publishers and subscribers."
        }
    },
    {
        id: 16,
        q: {
            tr: "Final anahtar kelimesi ne işe yarar?",
            az: "Final açar sözü nə işə yarayır?",
            en: "What does the 'final' keyword do?"
        },
        a: {
            tr: "Bir sınıfın miras alınmasını (inheritance) veya bir metodun override edilmesini engeller. Performansı artırır.",
            az: "Bir klasın miras alınmasını və ya bir metodun override edilməsini (dəyişdirilməsini) əngəlləyir. Performansı artırır.",
            en: "Prevents a class from being inherited or a method from being overridden by subclasses. Also provides performance optimizations."
        }
    },
    {
        id: 17,
        q: {
            tr: "Dependency Injection nedir?",
            az: "Dependency Injection nədir?",
            en: "What is Dependency Injection?"
        },
        a: {
            tr: "Bir sınıfın ihtiyaç duyduğu nesnelerin dışarıdan verilmesidir. Test edilebilirliği artırır.",
            az: "Bir klasın ehtiyac duyduğu obyektlərin kənardan ötürülməsidir. Kodun test edilməsini asanlaşdırır.",
            en: "A technique where an object receives its dependencies from the outside rather than creating them itself."
        }
    },
    {
        id: 18,
        q: {
            tr: "Guard ve If Let farkı nedir?",
            az: "Guard və If Let fərqi nədir?",
            en: "Difference between Guard and If Let?"
        },
        a: {
            tr: "If let, değişkeni sadece süslü parantez içinde kullanmanıza izin verir. Guard ise değişkeni kapsamın (scope) geri kalanında kullanmanızı sağlar.",
            az: "If let dəyişəni yalnız öz blokunun daxilində istifadəyə icazə verir. Guard isə dəyişəni blokdan kənarda da (scope daxilində) istifadə etməyə imkan yaradır.",
            en: "If Let creates a scope for the unwrapped value. Guard unwraps the value and keeps it available in the rest of the scope."
        }
    },
    {
        id: 19,
        q: {
            tr: "Generic nedir?",
            az: "Generic nədir?",
            en: "What are Generics?"
        },
        a: {
            tr: "Herhangi bir türle çalışabilen esnek ve tekrar kullanılabilir fonksiyonlar veya tipler yazmanıza olanak tanır.",
            az: "Hər hansı bir tiple işləyə bilən elastik və təkrar istifadə edilə bilən funksiyalar və ya tiplər yazmağa imkan verir.",
            en: "Generic code enables you to write flexible, reusable functions and types that can work with any type."
        }
    },
    {
        id: 20,
        q: {
            tr: "Singleton pattern dezavantajı nedir?",
            az: "Singleton pattern-in mənfi tərəfi nədir?",
            en: "What is the disadvantage of Singleton?"
        },
        a: {
            tr: "Test etmesi zordur (global state) ve nesneler arasındaki bağımlılığı gizleyerek karmaşıklığa yol açabilir.",
            az: "Test edilməsi çətindir (global state) və obyektlər arasındakı asılılığı gizlədərək mürəkkəbliyə səbəb ola bilər.",
            en: "They can make unit testing difficult due to global state and hide dependencies between components."
        }
    }
],

 // 6. Projects
    projects: [
    {
        id: 1,
        level: "junior",
        title: { tr: "Kişisel Finans Takipçisi", az: "Şəxsi Maliyyə İzləyicisi", en: "Personal Finance Tracker" },
        desc: { tr: "Harcamaları kategorize eden ve günlük limitleri takip eden şık bir uygulama.", az: "Xərcləri kateqoriyalara ayıran və gündəlik limitləri izləyən şık bir tətbiq.", en: "A sleek app to categorize expenses and track daily spending limits." },
        tech: ["SwiftUI", "SwiftData/CoreData", "MVVM Architecture"],
        features: { tr: ["Harcama ekleme/silme", "Pasta grafiği görselleştirme", "Yerel bildirimler"], az: ["Xərc əlavə etmə/silmə", "Diaqram vizuallaşdırma", "Yerli bildirişlər"], en: ["Add/delete expenses", "Pie chart visualization", "Local notifications"] }
    },
    {
        id: 2,
        level: "mid",
        title: { tr: "Hava Durumu & Rota Tahmini", az: "Hava Proqnozu və Marşrut", en: "Weather & Route Forecast" },
        desc: { tr: "Konum tabanlı hava durumu verilerini harita üzerinde gösteren uygulama.", az: "Məkan əsaslı hava məlumatlarını xəritə üzərində göstərən tətbiq.", en: "An app showing location-based weather data integrated with map routing." },
        tech: ["SwiftUI/UIKit", "CoreLocation", "MapKit", "Combine/Async-Await"],
        features: { tr: ["Anlık konum takibi", "REST API entegrasyonu", "Karanlık mod desteği"], az: ["Anlıq məkan izləmə", "REST API inteqrasiyası", "Qaranlıq mod dəstəyi"], en: ["Real-time location tracking", "REST API integration", "Dark mode support"] }
    },
    {
        id: 3,
        level: "expert",
        title: { tr: "AI Tabanlı Fitness Asistanı", az: "AI Əsaslı Fitnes Köməkçisi", en: "AI-Powered Fitness Assistant" },
        desc: { tr: "Kamera kullanarak egzersiz formunu analiz eden yüksek performanslı uygulama.", az: "Kamera vasitəsilə məşq hərəkətlərini analiz edən yüksək performanslı tətbiq.", en: "High-performance app analyzing workout form using the device camera." },
        tech: ["CoreML", "Vision Framework", "AVFoundation", "Combine"],
        features: { tr: ["Gerçek zamanlı iskelet takibi", "Tekrar sayacı", "Sağlık kiti (HealthKit) entegrasyonu"], az: ["Real-time skelet izləmə", "Təkrar sayğacı", "HealthKit inteqrasiyası"], en: ["Real-time pose tracking", "Rep counter", "HealthKit integration"] }
    }
]
};

contentData['frontend'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "İnternetin Temelleri", items: ["DNS & Hosting Nedir?", "HTTP/HTTPS & SSL", "Tarayıcılar Nasıl Çalışır?", "Domain Yönetimi"], status: "start" },
            { title: "HTML & CSS", items: ["Semantic HTML5", "SEO Temelleri", "Flexbox & Grid", "Responsive Design", "BEM Metodolojisi"], status: "start" },
            { title: "Git & Versiyon Kontrol", items: ["Git Komutları", "GitHub/GitLab", "Pull Request & Merge", "Semantic Versioning"], status: "mid" },
            { title: "Modern CSS & UI", items: ["Tailwind CSS", "Sass/SCSS", "CSS Modules", "Styled Components", "ShadCN UI / Material UI"], status: "mid" },
            { title: "JavaScript (Derinlemesine)", items: ["ES6+ Syntax", "DOM & Event Loop", "Async/Await & Promises", "Fetch & Axios", "Local/Session Storage"], status: "mid" },
            { title: "Modern Frameworkler", items: ["React.js (Hooks, Custom Hooks)", "Next.js (App Router, SSR, SSG)", "Vue.js 3"], status: "advanced" },
            { title: "State Management", items: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query (React Query)"], status: "advanced" },
            { title: "Test & Güvenlik", items: ["Jest & React Testing Library", "Cypress/Playwright", "OWASP Security Basics", "JWT & Auth"], status: "advanced" },
            { title: "Performans & Deployment", items: ["Lazy Loading", "Code Splitting", "Vercel/Netlify Deploy", "CI/CD Pipeline"], status: "expert" }
        ],
        az: [
            { title: "İnternetin Əsasları", items: ["DNS & Hostinq Nədir?", "HTTP/HTTPS & SSL", "Brauzerlər Necə İşləyir?", "Domen İdarəetməsi"], status: "start" },
            { title: "HTML & CSS", items: ["Semantik HTML5", "SEO Əsasları", "Flexbox & Grid", "Adaptiv Dizayn (Responsive)", "BEM Metodologiyası"], status: "start" },
            { title: "Git & Versiya Nəzarəti", items: ["Git Əmrləri", "GitHub/GitLab", "Pull Request & Merge", "Semantik Versiyalar"], status: "mid" },
            { title: "Müasir CSS & UI", items: ["Tailwind CSS", "Sass/SCSS", "CSS Modules", "Styled Components", "ShadCN UI"], status: "mid" },
            { title: "JavaScript (Dərinləşdirmə)", items: ["ES6+ Sintaksis", "DOM & Event Loop", "Async/Await & Promises", "Fetch & Axios", "Yaddaş (Storage)"], status: "mid" },
            { title: "Müasir Freymvörklər", items: ["React.js", "Next.js (App Router)", "Vue.js 3"], status: "advanced" },
            { title: "State İdarəetməsi", items: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query"], status: "advanced" },
            { title: "Test & Təhlükəsizlik", items: ["Jest & RTL", "Cypress/Playwright", "Veb Təhlükəsizliyi", "JWT & Auth"], status: "advanced" },
            { title: "Performans & Yerləşdirmə", items: ["Lazy Loading", "Kodun Bölünməsi", "Vercel/Netlify", "CI/CD Prosesləri"], status: "expert" }
        ],
        en: [
            { title: "Internet Fundamentals", items: ["How DNS Works", "HTTP/HTTPS & SSL", "Browser Engines", "Domain Management"], status: "start" },
            { title: "HTML & CSS", items: ["Semantic HTML5", "SEO Basics", "Flexbox & Grid", "Responsive Design", "BEM Methodology"], status: "start" },
            { title: "Git & Version Control", items: ["Git Commands", "GitHub/GitLab", "PR & Code Review", "Semantic Versioning"], status: "mid" },
            { title: "Modern CSS & UI", items: ["Tailwind CSS", "Sass/SCSS", "CSS Modules", "Styled Components", "ShadCN UI"], status: "mid" },
            { title: "JavaScript Mastery", items: ["ES6+ Syntax", "DOM & Event Loop", "Async/Await & Promises", "Fetch & Axios", "Web Storage"], status: "mid" },
            { title: "Modern Frameworks", items: ["React.js", "Next.js (App Router)", "Vue.js 3"], status: "advanced" },
            { title: "State Management", items: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query"], status: "advanced" },
            { title: "Testing & Security", items: ["Jest & RTL", "Cypress/Playwright", "Web Security Basics", "JWT & Auth"], status: "advanced" },
            { title: "Performance & Deploy", items: ["Lazy Loading", "Code Splitting", "Vercel/Netlify", "CI/CD Pipelines"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'Prototürk', url: 'https://youtube.com/@prototurk', desc: 'Tayfun Erbilen - HTML/CSS/JS ve PHP üzerine efsane kaynak.', lang: 'tr' },
            { type: 'youtube', title: 'Arin Yazılım', url: 'https://youtube.com/@arinyazilim', desc: 'Modern JS ve React konularında çok detaylı anlatım.', lang: 'tr' },
            { type: 'youtube', title: 'Kevin Powell', url: 'https://youtube.com/@kevinpowell', desc: 'CSS\'in kralı. Tasarımı koda dökme uzmanı.', lang: 'en' },
            { type: 'youtube', title: 'Fireship', url: 'https://youtube.com/@Fireship', desc: 'Teknolojileri 100 saniyede anlatan hızlı ve güncel kanal.', lang: 'en' },

            // Documentation & Education
            { type: 'doc', title: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Web teknolojileri için ana sözlük (İncil).', lang: 'global' },
            { type: 'doc', title: 'React.dev', url: 'https://react.dev', desc: 'React\'in yeni ve interaktif resmi dokümantasyonu.', lang: 'en' },
            { type: 'course', title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org', desc: 'Ücretsiz sertifikalı eğitim kampı.', lang: 'en' },
            { type: 'course', title: 'Patika.dev', url: 'https://www.patika.dev', desc: 'Türkçe, ücretsiz ve bootcamp imkanlı platform.', lang: 'tr' },

            // Tools
            { type: 'tool', title: 'Can I Use?', url: 'https://caniuse.com', desc: 'Hangi CSS/JS özelliğinin hangi tarayıcıda çalıştığını görün.', lang: 'global' },
            { type: 'tool', title: 'UIverse', url: 'https://uiverse.io', desc: 'Hazır, açık kaynaklı CSS buton ve kart tasarımları.', lang: 'global' },
            { type: 'tool', title: 'Realtime Colors', url: 'https://realtimecolors.com', desc: 'Renk paletlerini gerçek bir web sitesi üzerinde test edin.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/frontend', desc: 'Dünya standartlarında görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Youthall", "PeakUp", "Armut (Freelance)"],
            top_skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Git"],
            avg_salary: "Junior: 30k-45k TL | Mid: 55k-95k TL | Senior: 110k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "Busy.az", "LinkedIn", "JobSearch.az"],
            top_skills: ["React", "JavaScript", "Bootstrap", "Figma to Code", "jQuery (Legacy)"],
            avg_salary: "Junior: 700-1200 AZN | Mid: 1600-2800 AZN | Senior: 3500+ AZN"
        },
        GLOBAL: {
            platforms: ["Indeed", "Remote OK", "Dice", "Wellfound", "Toptal"],
            top_skills: ["Next.js", "TypeScript", "AWS/Cloud", "Testing (Cypress/Jest)"],
            avg_salary: "Junior: $2k-$4k | Mid: $5k-$8k | Senior: $10k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Hangi framework'ü seçmeliyim?",
                az: "Hansı freymvörkü seçməliyəm?",
                en: "Which framework should I choose?"
            },
            a: {
                tr: "Piyasa hakimiyeti ve iş imkanları için React. Daha kolay öğrenim için Vue. Büyük kurumsal projeler için Angular.",
                az: "Bazar hakimiyyəti və iş imkanları üçün React. Daha asan öyrənmək üçün Vue. Böyük korporativ layihələr üçün Angular.",
                en: "React for job market dominance. Vue for an easier learning curve. Angular for large-scale enterprise projects."
            }
        },
        {
            id: 2,
            q: {
                tr: "İngilizce bilmek zorunda mıyım?",
                az: "İngilis dilini bilmək vacibdirmi?",
                en: "Is English necessary?"
            },
            a: {
                tr: "Evet. Kod yazarken Türkçe kaynak bulabilirsiniz ama hataları çözmek ve dokümantasyon okumak için teknik İngilizce şarttır.",
                az: "Bəli. Kod yazarkən yerli qaynaqlar tapa bilərsiniz, amma xətaları həll etmək və sənədləri oxumaq üçün texniki ingilis dili şərtdir.",
                en: "Yes. While you can find local resources, technical English is essential for debugging and reading official documentation."
            }
        },
        {
            id: 3,
            q: {
                tr: "Frontend mi Backend mi?",
                az: "Frontend yoxsa Backend?",
                en: "Frontend or Backend?"
            },
            a: {
                tr: "Görsellik, tasarım ve kullanıcı etkileşimi sizi heyecanlandırıyorsa Frontend. Veri tabanları, sunucu mimarisi ve mantık seviyorsanız Backend.",
                az: "Görünüş, dizayn və istifadəçi qarşılıqlı əlaqəsi sizi həyəcanlandırırsa Frontend. Məlumat bazaları, server arxitekturası və məntiq sevirsinizsə Backend.",
                en: "Frontend if you love visuals, design, and user interaction. Backend if you prefer databases, server architecture, and logic."
            }
        },
        {
            id: 4,
            q: {
                tr: "Matematik bilmek şart mı?",
                az: "Riyaziyyat bilmək mütləqdirmi?",
                en: "Is math strictly required?"
            },
            a: {
                tr: "Genel web geliştirme için hayır, temel mantık yeterlidir. Ancak Canvas, WebGL veya oyun geliştirecekseniz matematik gerekir.",
                az: "Ümumi veb inkişafı üçün xeyr, təməl məntiq kifayətdir. Lakin Canvas, WebGL və ya oyun hazırlayacaqsınızsa riyaziyyat lazımdır.",
                en: "Not for general web development, basic logic is enough. However, if you work with Canvas, WebGL, or game dev, math is required."
            }
        },
        {
            id: 5,
            q: {
                tr: "Yapay Zeka (ChatGPT/Copilot) işimi elimden alacak mı?",
                az: "Süni İntellekt (AI) işimi əlimdən alacaqmı?",
                en: "Will AI replace developers?"
            },
            a: {
                tr: "Hayır, AI bir araçtır. Kod yazmayı hızlandırır ama mimari kararları veremez. AI kullanan yazılımcı, kullanmayanın yerini alacaktır.",
                az: "Xeyr, AI bir alətdir. Kod yazmağı sürətləndirir, amma memarlıq qərarlarını verə bilməz. AI istifadə edən proqramçı, etməyəni əvəz edəcək.",
                en: "No, AI is a tool. It speeds up coding but can't make architectural decisions. Developers using AI will replace those who don't."
            }
        },
        {
            id: 6,
            q: {
                tr: "Üniversite diploması gerekli mi?",
                az: "Universitet diplomu vacibdirmi?",
                en: "Is a university degree required?"
            },
            a: {
                tr: "Çoğu özel sektör şirketi için hayır. Önemli olan portfolyonuz ve GitHub hesabınızdır. Ancak bazı kurumsal firmalar hala diploma isteyebilir.",
                az: "Özəl sektorun əksəriyyəti üçün xeyr. Əsas olan portfolionuz və GitHub hesabınızdır. Lakin bəzi korporativ şirkətlər hələ də diplom tələb edə bilər.",
                en: "For most private tech companies, no. Your portfolio and GitHub matter more. However, some corporate firms may still ask for one."
            }
        },
        {
            id: 7,
            q: {
                tr: "Mac mi Windows mu kullanmalıyım?",
                az: "Mac yoxsa Windows istifadə etməliyəm?",
                en: "Should I use Mac or Windows?"
            },
            a: {
                tr: "Frontend için her ikisi de uygundur. Ancak iOS uygulamaları da geliştirmeyi düşünüyorsanız Mac zorunludur. Sektör standardı genelde Mac'tir.",
                az: "Frontend üçün hər ikisi uyğundur. Lakin iOS tətbiqləri də hazırlamağı düşünürsünüzsə Mac mütləqdir. Sektor standartı adətən Mac-dir.",
                en: "Both are fine for Frontend. However, if you plan to develop iOS apps too, Mac is mandatory. Mac is generally the industry standard."
            }
        },
        {
            id: 8,
            q: {
                tr: "TypeScript öğrenmeli miyim?",
                az: "TypeScript öyrənməliyəm?",
                en: "Should I learn TypeScript?"
            },
            a: {
                tr: "Kesinlikle evet! Modern iş ilanlarının %80'i artık düz JavaScript yerine TypeScript bilgisi talep ediyor.",
                az: "Mütləq bəli! Müasir iş elanlarının 80%-i artıq sadə JavaScript əvəzinə TypeScript biliyi tələb edir.",
                en: "Absolutely yes! 80% of modern job postings now require TypeScript instead of plain JavaScript."
            }
        },
    ],

    // 5. INTERVIEW PREP
    interview: [
        {
            id: 1,
            q: {
                tr: "DOM (Document Object Model) ve Virtual DOM farkı nedir?",
                az: "DOM və Virtual DOM arasındakı fərq nədir?",
                en: "Difference between Real DOM and Virtual DOM?"
            },
            a: {
                tr: "Gerçek DOM yavaştır, her değişiklikte tüm ağacı günceller. Virtual DOM (React vb.) bellekteki hafif bir kopyadır; sadece değişen kısımları tespit eder (Diffing) ve sadece orayı günceller (Reconciliation).",
                az: "Həqiqi DOM yavaşdır, hər dəyişiklikdə bütün ağacı yeniləyir. Virtual DOM yaddaşdakı yüngül surətdir; yalnız dəyişən hissələri tapır və yalnız oranı yeniləyir.",
                en: "Real DOM is slow as it updates the whole tree. Virtual DOM is a lightweight memory copy; it finds changes (Diffing) and updates only those parts (Reconciliation)."
            }
        },
        {
            id: 2,
            q: {
                tr: "var, let ve const arasındaki farklar nelerdir?",
                az: "var, let və const arasındakı fərqlər nələrdir?",
                en: "Differences between var, let, and const?"
            },
            a: {
                tr: "var: Function scope'tur, tekrar tanımlanabilir. let: Block scope'tur, değeri değişebilir. const: Block scope'tur, değeri sonradan değiştirilemez (sabit).",
                az: "var: Function scope-dur, təkrar təyin edilə bilər. let: Block scope-dur, dəyəri dəyişə bilər. const: Block scope-dur, dəyəri sonradan dəyişdirilə bilməz.",
                en: "var: Function-scoped, can be redeclared. let: Block-scoped, reassignable. const: Block-scoped, cannot be reassigned (constant)."
            }
        },
        {
            id: 3,
            q: {
                tr: "CSS Box Model nedir?",
                az: "CSS Box Model nədir?",
                en: "What is the CSS Box Model?"
            },
            a: {
                tr: "Her HTML elemanı bir kutudur. İçten dışa 4 katmandan oluşur: Content (İçerik), Padding (İç boşluk), Border (Kenarlık) ve Margin (Dış boşluk).",
                az: "Hər HTML elementi bir qutudur. İçdən çölə 4 qatdan ibarətdir: Content (Məzmun), Padding (İç boşluq), Border (Çərçivə) və Margin (Kənar boşluq).",
                en: "Every HTML element is a box. Consists of 4 layers from inside out: Content, Padding, Border, and Margin."
            }
        },
        {
            id: 4,
            q: {
                tr: "Closure (Kapanım) nedir?",
                az: "Closure nədir?",
                en: "What is a Closure?"
            },
            a: {
                tr: "Bir fonksiyonun, kendi kapsamı (scope) dışındaki değişkenlere, o fonksiyon çalışmayı bitirse bile erişebilme yeteneğidir. Hafızada veri tutmayı sağlar.",
                az: "Bir funksiyanın, öz əhatə dairəsi (scope) xaricindəki dəyişənlərə, o funksiya işini bitirsə belə daxil ola bilmə qabiliyyətidir.",
                en: "A function's ability to access variables from its outer scope even after the outer function has finished executing."
            }
        },
        {
            id: 5,
            q: {
                tr: "SSR (Server-Side Rendering) ve CSR (Client-Side Rendering) farkı?",
                az: "SSR və CSR arasındakı fərq?",
                en: "Difference between SSR and CSR?"
            },
            a: {
                tr: "CSR'da sayfa boş gelir, içeriği tarayıcıdaki JS oluşturur (SEO zayıf). SSR'da (Next.js vb.) sayfa sunucuda hazırlanıp dolu gelir (SEO güçlü, hızlı açılış).",
                az: "CSR-də səhifə boş gəlir, məzmunu brauzerdəki JS yaradır. SSR-də səhifə serverdə hazırlanıb dolu gəlir (SEO üçün yaxşıdır).",
                en: "In CSR, the browser builds content via JS (weak SEO). In SSR, the server sends fully rendered HTML (strong SEO, fast initial load)."
            }
        },
        {
            id: 6,
            q: {
                tr: "CORS hatası nedir?",
                az: "CORS xətası nədir?",
                en: "What is a CORS error?"
            },
            a: {
                tr: "Cross-Origin Resource Sharing. Tarayıcının, güvenlik nedeniyle web sitenizin farklı bir domaindeki API'ye istek atmasını engellemesidir. Sunucu tarafında izin verilmelidir.",
                az: "Brauzerin, təhlükəsizlik səbəbiylə saytınızın fərqli bir domendəki API-yə sorğu göndərməsini əngəlləməsidir. Server tərəfində icazə verilməlidir.",
                en: "Browser security feature blocking requests to a different domain. The server must explicitly allow it via headers."
            }
        },
        {
            id: 7,
            q: {
                tr: "Promise ve Async/Await farkı nedir?",
                az: "Promise və Async/Await fərqi nədir?",
                en: "Difference between Promise and Async/Await?"
            },
            a: {
                tr: "İkisi de asenkron işlemler içindir. Promise `.then()` zinciri kullanır. Async/Await ise Promise'in daha modern halidir, kodun senkron (sıralı) gibi okunmasını sağlar.",
                az: "Hər ikisi asinxron əməliyyatlar üçündür. Async/Await Promise-in daha müasir halıdır, kodun sinxron (sıralı) kimi oxunmasını təmin edir.",
                en: "Both handle async ops. Async/Await is syntactic sugar over Promises, making code look synchronous and easier to read."
            }
        },
        {
            id: 8,
            q: {
                tr: "LocalStorage, SessionStorage ve Cookie farkları?",
                az: "LocalStorage, SessionStorage və Cookie fərqləri?",
                en: "LocalStorage vs SessionStorage vs Cookie?"
            },
            a: {
                tr: "LocalStorage: Kalıcıdır, silinmez. SessionStorage: Sekme kapanınca silinir. Cookie: Boyutu küçüktür, sunucuya her istekte gönderilir ve süresi vardır.",
                az: "LocalStorage: Qalıcıdır. SessionStorage: Tab bağlananda silinir. Cookie: Kiçikdir, serverə hər sorğuda göndərilir və vaxtı bitəndə silinir.",
                en: "LocalStorage: Persistent. SessionStorage: Cleared on tab close. Cookie: Small, sent to server with every request, has expiration."
            }
        },
        {
            id: 9,
            q: {
                tr: "Event Bubbling ve Event Capturing nedir?",
                az: "Event Bubbling və Event Capturing nədir?",
                en: "What is Event Bubbling and Capturing?"
            },
            a: {
                tr: "Bubbling: Olayın tıklandığı elementten yukarı (parent) doğru yayılmasıdır (Default). Capturing: Olayın en üstten (root) hedefe doğru inmesidir.",
                az: "Bubbling: Hadisənin elementdən yuxarı (parent) doğru yayılmasıdır. Capturing: Hadisənin ən üstdən hədəfə doğru enməsidir.",
                en: "Bubbling: Event flows from target up to parents (Default). Capturing: Event flows from root down to target."
            }
        },
        {
            id: 10,
            q: {
                tr: "Semantic HTML neden önemlidir?",
                az: "Semantic HTML niyə vacibdir?",
                en: "Why is Semantic HTML important?"
            },
            a: {
                tr: "Sadece `div` kullanmak yerine anlama uygun etiketler (`header`, `article`, `footer`) kullanmaktır. SEO (Arama motorları) ve Erişilebilirlik (Ekran okuyucular) için kritiktir.",
                az: "Yalnız `div` istifadə etmək əvəzinə mənaya uyğun etiketlər (`header`, `article`) istifadə etməkdir. SEO və Əlçatanlıq üçün vacibdir.",
                en: "Using meaningful tags (`header`, `article`) instead of just `div`. Critical for SEO (Search Engines) and Accessibility (Screen readers)."
            }
        },
        {
            id: 11,
            q: {
                tr: "React'te 'prop drilling' nedir ve nasıl çözülür?",
                az: "React-də 'prop drilling' nədir və necə həll olunur?",
                en: "What is 'prop drilling' in React and how to solve it?"
            },
            a: {
                tr: "Verinin üst bileşenden en alt bileşene kadar gereksiz ara bileşenlerden geçirilmesidir. Context API, Redux veya Zustand kullanılarak çözülür.",
                az: "Məlumatın üst komponentdən ən alt komponentə qədər lazımsız ara komponentlərdən keçirilməsidir. Context API və ya Redux ilə həll olunur.",
                en: "Passing data through many layers of components just to reach a deep child. Solved using Context API, Redux, or Zustand."
            }
        },
        {
            id: 12,
            q: {
                tr: "TypeScript kullanmanın avantajı nedir?",
                az: "TypeScript istifadə etməyin üstünlüyü nədir?",
                en: "What is the advantage of using TypeScript?"
            },
            a: {
                tr: "JavaScript'e statik tip (static typing) özelliği katar. Hataları kod yazarken yakalar (compile-time), otomatik tamamlama sunar ve büyük projeleri yönetmeyi kolaylaştırır.",
                az: "JavaScript-ə statik tip xüsusiyyəti qatır. Xətaları kod yazarkən tutur, avtomatik tamamlama təqdim edir və böyük layihələri idarə etməyi asanlaşdırır.",
                en: "Adds static typing to JS. Catches errors at compile-time, provides better autocompletion, and makes managing large projects easier."
            }
        },
        {
            id: 13,
            q: {
                tr: "Critical Rendering Path nedir?",
                az: "Critical Rendering Path nədir?",
                en: "What is the Critical Rendering Path?"
            },
            a: {
                tr: "Tarayıcının HTML, CSS ve JS'i alıp ekrana piksel olarak çizene kadar geçen adımlardır (DOM -> CSSOM -> Render Tree -> Layout -> Paint).",
                az: "Brauzerin HTML, CSS və JS-i alıb ekrana piksel olaraq çəkənə qədər keçən addımlardır (DOM -> CSSOM -> Render Tree -> Layout -> Paint).",
                en: "The sequence of steps the browser takes to convert HTML, CSS, and JS into actual pixels on the screen."
            }
        },
        {
            id: 14,
            q: {
                tr: "Single Page Application (SPA) nedir?",
                az: "Single Page Application (SPA) nədir?",
                en: "What is a Single Page Application (SPA)?"
            },
            a: {
                tr: "Tek bir HTML dosyası yükleyen ve kullanıcı etkileşime girdikçe sayfayı yenilemeden içeriği dinamik olarak güncelleyen web uygulamasıdır (Örn: React, Vue).",
                az: "Tək bir HTML faylı yükləyən və istifadəçi hərəkət etdikcə səhifəni yeniləmədən məzmunu dinamik olaraq yeniləyən veb tətbiqidir.",
                en: "A web app that loads a single HTML file and dynamically updates content as the user interacts, without reloading the page."
            }
        },
        {
            id: 15,
            q: {
                tr: "Hoisting nedir?",
                az: "Hoisting nədir?",
                en: "What is Hoisting?"
            },
            a: {
                tr: "JavaScript'te değişken ve fonksiyon tanımlarının kod çalışmadan önce kapsamın en tepesine taşınması (veya hafızada yer ayrılması) durumudur.",
                az: "JavaScript-də dəyişən və funksiya təyinlərinin kod işləmədən əvvəl əhatə dairəsinin ən təpəsinə daşınması və ya yaddaşda yer ayrılmasıdır.",
                en: "JS mechanism where variable and function declarations are moved to the top of their scope before code execution."
            }
        },
        {
            id: 16,
            q: {
                tr: "Debounce ve Throttle farkı nedir?",
                az: "Debounce və Throttle fərqi nədir?",
                en: "Difference between Debounce and Throttle?"
            },
            a: {
                tr: "Debounce: İşlem bittikten belli bir süre sonra fonksiyonu çalıştırır (Örn: Arama çubuğu). Throttle: Fonksiyonu belli zaman aralıklarıyla düzenli çalıştırır (Örn: Scroll).",
                az: "Debounce: Əməliyyat bitdikdən müəyyən müddət sonra funksiyanı işlədir. Throttle: Funksiyanı müəyyən zaman intervalları ilə nizamlı işlədir.",
                en: "Debounce: Runs function only after a delay since the last call (e.g., Search). Throttle: Runs function at regular intervals (e.g., Scroll)."
            }
        },
        {
            id: 17,
            q: {
                tr: "Flexbox ve Grid arasındaki temel fark?",
                az: "Flexbox və Grid arasındakı əsas fərq?",
                en: "Main difference between Flexbox and Grid?"
            },
            a: {
                tr: "Flexbox tek boyutludur (sadece satır YA DA sütun). Grid iki boyutludur (hem satır HEM sütun aynı anda). Grid daha karmaşık düzenler içindir.",
                az: "Flexbox tək ölçülüdür (yalnız sətir VƏ YA sütun). Grid iki ölçülüdür (həm sətir HƏM sütun). Grid daha mürəkkəb dizaynlar üçündür.",
                en: "Flexbox is one-dimensional (row OR column). Grid is two-dimensional (row AND column). Grid is for complex layouts."
            }
        },
        {
            id: 18,
            q: {
                tr: "Responsive Design (Duyarlı Tasarım) nasıl yapılır?",
                az: "Responsive Design necə edilir?",
                en: "How to implement Responsive Design?"
            },
            a: {
                tr: "Meta viewport etiketi, CSS Media Queries (`@media`), esnek görseller (max-width: 100%) ve esnek birimler (rem, %, vh/vw) kullanılarak yapılır.",
                az: "Meta viewport etiketi, CSS Media Queries, elastik şəkillər və elastik vahidlər (rem, %) istifadə edilərək edilir.",
                en: "Implemented using Meta viewport tag, CSS Media Queries, fluid images, and flexible units (rem, %, vh/vw)."
            }
        },
        {
            id: 19,
            q: {
                tr: "Web Accessibility (Erişilebilirlik - a11y) nedir?",
                az: "Web Accessibility (a11y) nədir?",
                en: "What is Web Accessibility (a11y)?"
            },
            a: {
                tr: "Web sitelerinin engelli bireyler (görme, işitme vb.) tarafından da rahatça kullanılabilmesi için yapılan düzenlemelerdir (Alt text, ARIA etiketleri, klavye kontrolü).",
                az: "Veb saytların əlilliyi olan şəxslər tərəfindən də rahat istifadə edilə bilməsi üçün edilən tənzimləmələrdir (Alt text, klaviatura nəzarəti).",
                en: "Designing websites so they can be used by people with disabilities (Using Alt text, ARIA labels, keyboard navigation)."
            }
        },
        {
            id: 20,
            q: {
                tr: "HTTP/2 ve HTTP/1.1 farkı nedir (Frontend açısından)?",
                az: "HTTP/2 və HTTP/1.1 fərqi nədir?",
                en: "HTTP/2 vs HTTP/1.1 (Frontend perspective)?"
            },
            a: {
                tr: "HTTP/1.1 her dosya için ayrı bağlantı açar. HTTP/2 tek bir bağlantı üzerinden (Multiplexing) aynı anda birden çok dosya gönderir, bu da siteyi çok hızlandırır.",
                az: "HTTP/1.1 hər fayl üçün ayrı əlaqə açır. HTTP/2 tək bir əlaqə üzərindən eyni anda birdən çox fayl göndərir, bu da saytı çox sürətləndirir.",
                en: "HTTP/1.1 opens a new connection for each file. HTTP/2 sends multiple files over a single connection (Multiplexing), speeding up the site."
            }
        }
    ],

    // 6. PROJECT HUB
    projects: [
        {
            id: 1,
            level: "junior",
            title: { tr: "Hava Durumu Uygulaması", az: "Hava Proqnozu Tətbiqi", en: "Weather Dashboard" },
            desc: { tr: "Ücretsiz bir API kullanarak şehir bazlı canlı hava durumu çeken uygulama.", az: "Pulsuz API istifadə edərək canlı hava proqnozu göstərən tətbiq.", en: "A live weather dashboard using a public API." },
            tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
            features: { tr: ["Anlık derece", "Arka plan değişimi", "5 günlük tahmin"], az: ["Anlıq dərəcə", "Arxa plan dəyişimi", "5 günlük proqnoz"], en: ["Real-time temp", "Dynamic backgrounds", "5-day forecast"] }
        },
        {
            id: 2,
            level: "mid",
            title: { tr: "E-Ticaret Ürün Filtreleme", az: "E-Ticarət Məhsul Filtrləmə", en: "E-commerce Product Filter" },
            desc: { tr: "Karmaşık JSON verilerini kategoriye, fiyata ve puanlamaya göre listeleyen bir arayüz.", az: "Məhsulları kateqoriya və qiymətə görə filtrələyən interfeys.", en: "Interface to filter products by category, price, and rating." },
            tech: ["React/Vue", "Tailwind CSS", "Redux/Context API"],
            features: { tr: ["Debounced arama", "Çoklu kategori seçimi", "Fiyat aralığı (Slider)"], az: ["Debounced axtarış", "Qiymət slideri", "Səbətə əlavə et"], en: ["Debounced search", "Multi-category select", "Price range slider"] }
        },
        {
            id: 3,
            level: "expert",
            title: { tr: "Kripto Takip Portfolyosu", az: "Kripto İzləmə Portfolyosu", en: "Crypto Portfolio Tracker" },
            desc: { tr: "Canlı verilerle (WebSocket) güncellenen, grafik kütüphaneleri içeren dashboard.", az: "WebSocket istifadə edərək canlı kripto qiymətlərini göstərən tablov.", en: "Real-time dashboard with charts using live data (WebSockets)." },
            tech: ["Next.js", "Chart.js/D3.js", "WebSocket", "Framer Motion"],
            features: { tr: ["Canlı fiyat grafikleri", "Kâr/Zarar hesaplayıcı", "Mobil uyumlu tasarım"], az: ["Canlı qiymət qrafikləri", "Mənfəət/Zərər hesablama", "Animasiyalar"], en: ["Live price charts", "P&L calculator", "Smooth animations"] }
        },
    ]
};

contentData['backend'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "İnternet & İşletim Sistemi", items: ["HTTP/HTTPS, DNS Nasıl Çalışır?", "Linux Terminal Komutları", "Process Management", "Thread & Concurrency"], status: "start" },
            { title: "Bir Dil Seçimi", items: ["JavaScript (Node.js)", "Python", "Go (Golang)", "Java", "C# (.NET)"], status: "start" },
            { title: "İlişkisel Veritabanları (SQL)", items: ["PostgreSQL", "MySQL/MariaDB", "SQL Sorguları & Joins", "ACID Prensipleri", "Normalizasyon"], status: "mid" },
            { title: "NoSQL Veritabanları", items: ["MongoDB (Document)", "Redis (Key-Value)", "Cassandra (Wide Column)"], status: "mid" },
            { title: "API Geliştirme", items: ["RESTful API Standartları", "GraphQL", "Authentication (JWT, OAuth2)", "JSON & XML"], status: "mid" },
            { title: "ORM & Veri Yönetimi", items: ["Prisma / TypeORM", "Entity Framework", "SQL Injection Koruması", "Migration Yönetimi"], status: "mid" },
            { title: "DevOps & Deployment", items: ["Docker & Containerization", "CI/CD (GitHub Actions)", "AWS/DigitalOcean Temelleri", "Nginx/Apache"], status: "advanced" },
            { title: "İleri Seviye Konular", items: ["Microservices Mimarisi", "Message Brokers (RabbitMQ/Kafka)", "Caching Stratejileri", "WebSockets"], status: "expert" },
            { title: "Test & Güvenlik", items: ["Unit & Integration Testing", "OWASP Top 10 Backend", "Rate Limiting", "Logging & Monitoring"], status: "expert" }
        ],
        az: [
            { title: "İnternet & Əməliyyat Sistemləri", items: ["HTTP/HTTPS, DNS Necə İşləyir?", "Linux Terminal Əmrləri", "Proses İdarəetməsi", "Thread & Concurrency"], status: "start" },
            { title: "Dil Seçimi", items: ["JavaScript (Node.js)", "Python", "Go (Golang)", "Java", "C# (.NET)"], status: "start" },
            { title: "Əlaqəli Məlumat Bazaları (SQL)", items: ["PostgreSQL", "MySQL/MariaDB", "SQL Sorğuları & Joins", "ACID Prinsipləri", "Normalizasiya"], status: "mid" },
            { title: "NoSQL Məlumat Bazaları", items: ["MongoDB", "Redis (Key-Value)", "Cassandra"], status: "mid" },
            { title: "API İnkişafı", items: ["RESTful API Standartları", "GraphQL", "Authentication (JWT, OAuth2)", "JSON & XML"], status: "mid" },
            { title: "ORM & Məlumat İdarəetməsi", items: ["Prisma / TypeORM", "Entity Framework", "SQL Injection Qorunması", "Miqrasiya İdarəetməsi"], status: "mid" },
            { title: "DevOps & Yerləşdirmə", items: ["Docker & Konteynerlər", "CI/CD (GitHub Actions)", "AWS/DigitalOcean Əsasları", "Nginx/Apache"], status: "advanced" },
            { title: "İrəli Səviyyə Mövzular", items: ["Microservices Arxitekturası", "Message Brokers (RabbitMQ/Kafka)", "Keşləmə (Caching)", "WebSockets"], status: "expert" },
            { title: "Test & Təhlükəsizlik", items: ["Unit & Integration Testing", "OWASP Top 10 Backend", "Rate Limiting", "Logging & Monitoring"], status: "expert" }
        ],
        en: [
            { title: "Internet & OS Basics", items: ["How HTTP/DNS Works", "Linux Terminal Basics", "Process Management", "Concurrency & Threads"], status: "start" },
            { title: "Pick a Language", items: ["JavaScript (Node.js)", "Python", "Go (Golang)", "Java", "C# (.NET)"], status: "start" },
            { title: "Relational Databases (SQL)", items: ["PostgreSQL", "MySQL/MariaDB", "SQL Queries & Joins", "ACID Properties", "Normalization"], status: "mid" },
            { title: "NoSQL Databases", items: ["MongoDB", "Redis", "Cassandra"], status: "mid" },
            { title: "API Development", items: ["RESTful Standards", "GraphQL", "Authentication (JWT, OAuth2)", "JSON & XML"], status: "mid" },
            { title: "ORM & Data Management", items: ["Prisma / TypeORM", "Entity Framework", "Preventing SQL Injection", "Migration Management"], status: "mid" },
            { title: "DevOps & Deployment", items: ["Docker & Containers", "CI/CD Pipelines", "Cloud Basics (AWS/DO)", "Reverse Proxies (Nginx)"], status: "advanced" },
            { title: "Advanced Topics", items: ["Microservices Architecture", "Message Brokers (RabbitMQ/Kafka)", "Caching Strategies", "WebSockets"], status: "expert" },
            { title: "Testing & Security", items: ["Unit & Integration Testing", "OWASP Backend Risks", "Rate Limiting", "Observability"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // YouTube Channels
            { type: 'youtube', title: 'Hussein Nasser', url: 'https://youtube.com/@hnasr', desc: 'Backend mühendisliği üzerine dünyadaki en iyi teknik kanal (Database, Protocol vs).', lang: 'en' },
            { type: 'youtube', title: 'Gençay Yıldız', url: 'https://youtube.com/@GencayYildiz', desc: '.NET Core ve Backend mimarisi üzerine harika Türkçe içerikler.', lang: 'tr' },
            { type: 'youtube', title: 'Traversy Media', url: 'https://youtube.com/@TraversyMedia', desc: 'Node.js, Python ve PHP için proje bazlı harika anlatımlar.', lang: 'en' },
            { type: 'youtube', title: 'Be the Better Dev', url: 'https://youtube.com/@BetheBetterDev', desc: 'Sistem tasarımı ve Cloud mimarisi üzerine odaklı.', lang: 'en' },

            // Documentation & Courses
            { type: 'doc', title: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/', desc: 'Dünyanın en gelişmiş açık kaynak veritabanı dokümantasyonu.', lang: 'global' },
            { type: 'course', title: 'Full Stack Open', url: 'https://fullstackopen.com', desc: 'Helsinki Üniversitesi\'nin ücretsiz, efsanevi Node.js ve React kursu.', lang: 'en' },
            { type: 'doc', title: 'Redis Docs', url: 'https://redis.io/docs/', desc: 'Caching ve hızlı veri yönetimi için başucu kaynağı.', lang: 'global' },

            // Tools
            { type: 'tool', title: 'Postman', url: 'https://www.postman.com', desc: 'API\'lerinizi test etmek ve dökümante etmek için 1 numaralı araç.', lang: 'global' },
            { type: 'tool', title: 'Docker Hub', url: 'https://hub.docker.com', desc: 'Hazır veritabanı ve servis imajlarını bulabileceğiniz depo.', lang: 'global' },
            { type: 'tool', title: 'Supabase', url: 'https://supabase.com', desc: 'Backend kurmadan veritabanı ve Auth işlemlerini halleden Firebase alternatifi.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/backend', desc: 'Backend için adım adım görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Armut (Freelance)", "Remoteok.io"],
            top_skills: [".NET Core (C#)", "Java (Spring Boot)", "Node.js", "PostgreSQL", "Docker"],
            avg_salary: "Junior: 35k-50k TL | Mid: 60k-100k TL | Senior: 120k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "Busy.az", "LinkedIn", "Staff.az"],
            top_skills: ["PHP (Laravel)", "C# (.NET)", "Java", "SQL", "Python (Django)"],
            avg_salary: "Junior: 800-1300 AZN | Mid: 1800-3000 AZN | Senior: 4000+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "Hacker News Jobs", "We Work Remotely", "Arc.dev"],
            top_skills: ["Go (Golang)", "Rust", "Node.js", "AWS/Cloud", "Kubernetes"],
            avg_salary: "Junior: $3k-$5k | Mid: $6k-$10k | Senior: $12k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Hangi Backend dilini seçmeliyim?",
                az: "Hansı Backend dilini seçməliyəm?",
                en: "Which Backend language should I choose?"
            },
            a: {
                tr: "Hızlı prototip ve Web için Node.js. Kurumsal ve büyük projeler için Java veya C#. Veri bilimi ve sadelik için Python. Yüksek performans ve modern sistemler için Go.",
                az: "Sürətli prototip və Veb üçün Node.js. Korporativ və böyük layihələr üçün Java və ya C#. Məlumat elmi və sadəlik üçün Python. Yüksək performans üçün Go.",
                en: "Node.js for rapid prototyping/Web. Java or C# for enterprise. Python for data science/simplicity. Go for high performance and modern systems."
            }
        },
        {
            id: 2,
            q: {
                tr: "Frontend mi Backend mi daha zor?",
                az: "Frontend yoxsa Backend daha çətindir?",
                en: "Is Frontend or Backend harder?"
            },
            a: {
                tr: "Backend mantıksal olarak daha komplekstir (güvenlik, veri tutarlılığı, ölçekleme). Frontend ise görsel detaylar ve tarayıcı uyumluluğu açısından yorucudur. Analitik zekanız güçlüyse Backend daha keyiflidir.",
                az: "Backend məntiqi olaraq daha mürəkkəbdir (təhlükəsizlik, məlumat bütövlüyü). Frontend isə vizual detallar baxımından yorucudur. Analitik zəkanız güclüdürsə Backend daha zövqlüdür.",
                en: "Backend is logically more complex (security, data consistency, scaling). Frontend is demanding regarding visuals/browser compatibility. If you are analytical, Backend might be better."
            }
        },
        {
            id: 3,
            q: {
                tr: "SQL mi NoSQL mi öğrenmeliyim?",
                az: "SQL yoxsa NoSQL öyrənməliyəm?",
                en: "Should I learn SQL or NoSQL?"
            },
            a: {
                tr: "Kesinlikle önce SQL (PostgreSQL veya MySQL). Veri ilişkilerini anlamak backend'in temelidir. NoSQL (MongoDB vb.) daha sonra ihtiyaca göre öğrenilir.",
                az: "Mütləq əvvəlcə SQL (PostgreSQL və ya MySQL). Məlumat əlaqələrini anlamaq backend-in təməlidir. NoSQL (MongoDB və s.) daha sonra ehtiyaca görə öyrənilir.",
                en: "Definitely SQL first (PostgreSQL/MySQL). Understanding data relationships is the foundation. NoSQL can be learned later as needed."
            }
        },
        {
            id: 4,
            q: {
                tr: "Matematik Backend için gerekli mi?",
                az: "Riyaziyyat Backend üçün lazımdır?",
                en: "Is math necessary for Backend?"
            },
            a: {
                tr: "Frontend'e göre biraz daha fazla. Özellikle büyük verilerle çalışırken, optimizasyon yaparken veya yapay zeka entegrasyonlarında algoritma mantığı ve temel matematik gerekir.",
                az: "Frontend-ə nisbətən bir az daha çox. Xüsusilə böyük məlumatlarla işləyərkən və ya optimallaşdırma zamanı alqoritm məntiqi və təməl riyaziyyat lazımdır.",
                en: "Slightly more than Frontend. Especially when working with big data, optimization, or AI integrations, algorithmic logic and basic math are required."
            }
        },
        {
            id: 5,
            q: {
                tr: "Serverless ve Microservices nedir?",
                az: "Serverless və Microservices nədir?",
                en: "What are Serverless and Microservices?"
            },
            a: {
                tr: "Microservices, uygulamayı küçük parçalara bölmektir. Serverless ise sunucu yönetimiyle uğraşmadan sadece kodu buluta yükleyip çalıştırmaktır. İleri seviye konulardır, junior iken boğulmayın.",
                az: "Microservices, tətbiqi kiçik hissələrə bölməkdir. Serverless isə server idarəetməsi ilə məşğul olmadan sadəcə kodu buluda yükləməkdir. İrəli səviyyə mövzulardır.",
                en: "Microservices break the app into small parts. Serverless runs code on the cloud without managing servers. These are advanced topics, don't worry about them as a junior."
            }
        },
        {
            id: 6,
            q: {
                tr: "Kendi sunucumu kurmalı mıyım?",
                az: "Öz serverimi qurmalıyam?",
                en: "Should I set up my own server?"
            },
            a: {
                tr: "Öğrenmek için kesinlikle evet! Linux (Ubuntu) kurup, SSH ile bağlanıp, Nginx ve bir veritabanı ayağa kaldırmak size backend'in nasıl çalıştığını gerçekten öğretir.",
                az: "Öyrənmək üçün mütləq bəli! Linux (Ubuntu) qurub, SSH ilə qoşulub, Nginx və bir məlumat bazası qaldırmaq sizə backend-in necə işlədiyini həqiqətən öyrədər.",
                en: "For learning, absolutely yes! Setting up Linux, connecting via SSH, and running Nginx/DB teaches you how backend really works."
            }
        }
    ],

    // 5. INTERVIEW PREP
    interview: [
        {
            id: 1,
            q: {
                tr: "REST API ve GraphQL arasındaki fark nedir?",
                az: "REST API və GraphQL arasındakı fərq nədir?",
                en: "Difference between REST API and GraphQL?"
            },
            a: {
                tr: "REST'te her veri için farklı bir URL'ye (endpoint) istek atarsınız ve fazla/eksik veri gelebilir. GraphQL'de tek bir endpoint vardır ve sadece istediğiniz alanları (fields) istersiniz, bu da ağ trafiğini azaltır.",
                az: "REST-də hər məlumat üçün fərqli bir URL-ə sorğu göndərirsiniz. GraphQL-də tək bir endpoint vardır və yalnız istədiyiniz sahələri istəyirsiniz, bu da şəbəkə trafikini azaldır.",
                en: "REST uses multiple endpoints for data and may over/under-fetch. GraphQL uses a single endpoint and allows you to fetch exactly what you need, reducing network traffic."
            }
        },
        {
            id: 2,
            q: {
                tr: "ACID Prensipleri nedir? (Veritabanı)",
                az: "ACID Prinsipləri nədir?",
                en: "What are ACID Properties?"
            },
            a: {
                tr: "Atomicity (Ya hep ya hiç), Consistency (Tutarlılık), Isolation (İzolasyon), Durability (Dayanıklılık). Bir veritabanı işleminin (Transaction) güvenli bir şekilde tamamlanmasını sağlayan kurallardır.",
                az: "Atomicity, Consistency, Isolation, Durability. Bir verilənlər bazası əməliyyatının təhlükəsiz şəkildə tamamlanmasını təmin edən qaydalardır.",
                en: "Atomicity, Consistency, Isolation, Durability. Standard properties that guarantee that database transactions are processed reliably."
            }
        },
        {
            id: 3,
            q: {
                tr: "Process ve Thread farkı nedir?",
                az: "Process və Thread fərqi nədir?",
                en: "Difference between Process and Thread?"
            },
            a: {
                tr: "Process (İşlem), çalışan bir programın kendisidir ve kendi belleği vardır. Thread (İş parçacığı) ise process'in içinde çalışan, belleği paylaşan daha hafif alt birimlerdir.",
                az: "Process çalışan proqramdır və öz yaddaşı var. Thread isə process daxilində çalışan və yaddaşı paylaşan daha kiçik vahidlərdir.",
                en: "A Process is an executing program with its own memory. A Thread is a lighter sub-unit within a process that shares the memory."
            }
        },
        {
            id: 4,
            q: {
                tr: "Vertical Scaling ve Horizontal Scaling farkı nedir?",
                az: "Vertical vs Horizontal Scaling fərqi nədir?",
                en: "Vertical vs Horizontal Scaling?"
            },
            a: {
                tr: "Vertical (Dikey): Mevcut sunucunun RAM/CPU'sunu artırmaktır. Horizontal (Yatay): Sisteme yeni sunucular ekleyerek yükü dağıtmaktır. Yatay ölçekleme daha esnektir.",
                az: "Vertical: Mövcud serverin RAM/CPU-sunu artırmaq. Horizontal: Sistemə yeni serverlər əlavə etmək. Yatay miqyaslama daha elastikdir.",
                en: "Vertical: Adding more power (RAM/CPU) to existing server. Horizontal: Adding more servers to the pool. Horizontal is more scalable."
            }
        },
        {
            id: 5,
            q: {
                tr: "N+1 Problemi nedir?",
                az: "N+1 Problemi nədir?",
                en: "What is the N+1 Problem?"
            },
            a: {
                tr: "ORM kullanırken sıkça yapılan bir hatadır. Bir ana veriyi çektikten sonra (1 sorgu), ona bağlı alt verileri çekmek için döngü içinde tekrar tekrar sorgu atmaktır (N sorgu). Performansı öldürür.",
                az: "ORM istifadə edərkən edilən səhvdir. Bir əsas məlumatı çəkdikdən sonra (1 sorğu), ona bağlı alt məlumatları çəkmək üçün dövr içində təkrar sorğu atmaqdır (N sorğu).",
                en: "A common performance issue where code fetches one parent record (1 query) and then executes N additional queries to fetch related children records."
            }
        },
        {
            id: 6,
            q: {
                tr: "TCP ve UDP arasındaki fark nedir?",
                az: "TCP və UDP arasındakı fərq nədir?",
                en: "Difference between TCP and UDP?"
            },
            a: {
                tr: "TCP güvenlidir, veri paketlerinin sırayla ve eksiksiz gittiğini garanti eder (Örn: Web siteleri). UDP hızlıdır ama paket kaybını önemsemez (Örn: Online oyunlar, Canlı yayın).",
                az: "TCP təhlükəsizdir, verilənlərin tam getdiyini zəmanət edir. UDP sürətlidir amma paket itkisini önəmsəmir (Məs: Online oyunlar).",
                en: "TCP is reliable, guarantees delivery and order (Web). UDP is fast but connectionless and doesn't guarantee delivery (Gaming/Streaming)."
            }
        },
        {
            id: 7,
            q: {
                tr: "SOLID prensipleri ne işe yarar?",
                az: "SOLID prinsipləri nə işə yarayır?",
                en: "What is the purpose of SOLID principles?"
            },
            a: {
                tr: "Yazılımın daha anlaşılır, esnek ve bakımı kolay olmasını sağlayan 5 temel prensiptir (Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion).",
                az: "Proqram təminatının daha başa düşülən və elastik olmasını təmin edən 5 əsas prinsipdir.",
                en: "5 design principles intended to make software designs more understandable, flexible, and maintainable."
            }
        },
        {
            id: 8,
            q: {
                tr: "Deadlock (Kilitlenme) nedir?",
                az: "Deadlock nədir?",
                en: "What is a Deadlock?"
            },
            a: {
                tr: "İki veya daha fazla işlemin, birbirlerinin bitmesini bekleyerek sonsuza kadar durması durumudur. Trafik sıkışıklığı gibidir, kimse hareket edemez.",
                az: "İki və ya daha çox prosesin bir-birini gözləyərək sonsuza qədər dayanması vəziyyətidir.",
                en: "A situation where two or more processes are unable to proceed because each is waiting for the other to release a resource."
            }
        },
        {
            id: 9,
            q: {
                tr: "Index nedir ve veritabanında neden kullanılır?",
                az: "Index nədir və nə üçün istifadə olunur?",
                en: "What is an Index and why use it in DB?"
            },
            a: {
                tr: "Index, bir kitaptaki 'içindekiler' sayfası gibidir. Veritabanında arama işlemlerini (SELECT) çok hızlandırır ancak yazma işlemlerini (INSERT/UPDATE) biraz yavaşlatır.",
                az: "Index bir kitabın 'mündəricat' səhifəsi kimidir. Axtarış əməliyyatlarını sürətləndirir amma yazma əməliyyatlarını bir az yavaşladır.",
                en: "Like a book's index. It significantly speeds up data retrieval (SELECT) operations but slightly slows down data modification (INSERT/UPDATE)."
            }
        },
        {
            id: 10,
            q: {
                tr: "Docker Container ve Virtual Machine farkı?",
                az: "Docker Container və Virtual Machine fərqi?",
                en: "Docker Container vs Virtual Machine?"
            },
            a: {
                tr: "VM, kendi işletim sistemine sahip ağır bir sanal bilgisayardır. Container ise işletim sistemi çekirdeğini paylaşan, çok daha hafif ve hızlı başlatılabilen izole bir pakettir.",
                az: "VM öz əməliyyat sisteminə sahib ağır virtual kompüterdir. Container isə əməliyyat sistemi çəyirəyini paylaşan, daha yüngül və sürətli paketdir.",
                en: "VM is a heavy virtual computer with its own OS. Container is lightweight, shares the host OS kernel, and starts much faster."
            }
        },
        {
            id: 11,
            q: {
                tr: "Session ve JWT (JSON Web Token) farkı nedir?",
                az: "Session və JWT arasındakı fərq nədir?",
                en: "Difference between Session and JWT?"
            },
            a: {
                tr: "Session sunucu tarafında (RAM/Veritabanı) saklanır ve stateful'dur. JWT ise istemci (client) tarafında saklanır, şifrelidir ve stateless (durumsuz) yapıdadır, sunucuyu yormaz.",
                az: "Session server tərəfində saxlanılır. JWT isə müştəri (client) tərəfində saxlanılır, şifrəlidir və stateless (vəziyyətsiz) quruluşdadır, serveri yormur.",
                en: "Sessions are stored on the server and are stateful. JWTs are stored on the client side, encrypted, and are stateless, reducing server load."
            }
        },
        {
            id: 12,
            q: {
                tr: "Monolitik ve Mikroservis mimari farkı nedir?",
                az: "Monolitik və Mikroservis arxitektura fərqi nədir?",
                en: "Monolithic vs Microservices architecture?"
            },
            a: {
                tr: "Monolitik, uygulamanın tek bir bütün parça halinde çalıştığı yapıdır. Mikroservisler ise uygulamanın küçük, bağımsız ve birbiriyle iletişim kuran parçalara bölünmesidir.",
                az: "Monolitik, tətbiqin tək bir parça halında çalışdığı strukturdur. Mikroservislər isə tətbiqin kiçik, müstəqil və bir-biri ilə əlaqə quran hissələrə bölünməsidir.",
                en: "Monolithic is a single unified unit. Microservices break the app into small, independent services communicating with each other."
            }
        },
        {
            id: 13,
            q: {
                tr: "SQL ve NoSQL veritabanları ne zaman seçilmelidir?",
                az: "SQL və NoSQL verilənlər bazaları nə vaxt seçilməlidir?",
                en: "When to choose SQL vs NoSQL?"
            },
            a: {
                tr: "Veri yapısı sabitse ve ilişkiler (JOIN) önemliyse SQL (MySQL, PostgreSQL). Veri yapısı değişken, hız ve büyük ölçekleme gerekiyorsa NoSQL (MongoDB, Redis).",
                az: "Məlumat strukturu sabitdirsə SQL (MySQL). Məlumat strukturu dəyişkən, sürət və böyük miqyaslama lazımdırsa NoSQL (MongoDB).",
                en: "Use SQL for structured data and complex relationships (JOINs). Use NoSQL for unstructured data, speed, and horizontal scaling."
            }
        },
        {
            id: 14,
            q: {
                tr: "CAP Teoremi nedir?",
                az: "CAP Teoremi nədir?",
                en: "What is the CAP Theorem?"
            },
            a: {
                tr: "Dağıtık sistemlerde; Consistency (Tutarlılık), Availability (Erişilebilirlik) ve Partition Tolerance (Bölünme Toleransı) özelliklerinden aynı anda sadece ikisinin sağlanabileceğini söyler.",
                az: "Paylanmış sistemlərdə; Consistency, Availability və Partition Tolerance xüsusiyyətlərindən eyni anda yalnız ikisinin təmin edilə biləcəyini söyləyir.",
                en: "States that a distributed system can only provide two of the three guarantees: Consistency, Availability, and Partition Tolerance."
            }
        },
        {
            id: 15,
            q: {
                tr: "Load Balancer (Yük Dengeleyici) ne işe yarar?",
                az: "Load Balancer nə işə yarayır?",
                en: "What does a Load Balancer do?"
            },
            a: {
                tr: "Gelen ağ trafiğini birden fazla sunucuya eşit şekilde dağıtarak tek bir sunucunun aşırı yüklenmesini engeller ve sistemin çökme riskini azaltır (Örn: Nginx).",
                az: "Gələn trafik axınını bir neçə server arasında bərabər paylayaraq tək bir serverin yüklənməsinin qarşısını alır və sistemin çökmə riskini azaldır.",
                en: "Distributes incoming network traffic across multiple servers to prevent overload on a single server and increase reliability."
            }
        },
        {
            id: 16,
            q: {
                tr: "CI/CD (Continuous Integration/Deployment) nedir?",
                az: "CI/CD nədir?",
                en: "What is CI/CD?"
            },
            a: {
                tr: "Yazılım geliştirme sürecinde kodun otomatik olarak test edilmesi (CI) ve canlı ortama (production) otomatik olarak yüklenmesi (CD) sürecidir.",
                az: "Kodun avtomatik olaraq test edilməsi (CI) və canlı mühitə (production) avtomatik yüklənməsi (CD) prosesidir.",
                en: "The practice of automating the integration of code changes (CI) and the deployment to production environments (CD)."
            }
        },
        {
            id: 17,
            q: {
                tr: "HTTP Status Code 401 ve 403 arasındaki fark nedir?",
                az: "HTTP 401 və 403 arasındakı fərq nədir?",
                en: "Difference between HTTP 401 and 403?"
            },
            a: {
                tr: "401 (Unauthorized): Kimliğinizi doğrulamadınız (Giriş yapmalısın). 403 (Forbidden): Giriş yaptınız ama bu kaynağa erişim yetkiniz yok (Admin değilsin).",
                az: "401: Kimliyinizi təsdiqləmədiniz (Giriş etməlisən). 403: Giriş etdiniz amma bu resursa çatmağa icazəniz yoxdur.",
                en: "401 means unauthenticated (please log in). 403 means authenticated but unauthorized (you don't have permission for this resource)."
            }
        },
        {
            id: 18,
            q: {
                tr: "Message Queue (RabbitMQ, Kafka) neden kullanılır?",
                az: "Message Queue (Mesaj Növbəsi) niyə istifadə olunur?",
                en: "Why use a Message Queue?"
            },
            a: {
                tr: "Uzun süren işlemleri (mail atma, dosya işleme) asenkron olarak arka planda yapmak için kullanılır. Ana uygulama kullanıcıyı bekletmez.",
                az: "Uzun sürən əməliyyatları (mail atma, fayl emalı) asinxron olaraq arxa planda etmək üçün istifadə olunur. Əsas tətbiq istifadəçini gözlətmir.",
                en: "Used to handle heavy tasks (emails, file processing) asynchronously in the background. The main app doesn't make the user wait."
            }
        },
        {
            id: 19,
            q: {
                tr: "WebSocket ile HTTP arasındaki temel fark?",
                az: "WebSocket və HTTP arasındakı əsas fərq?",
                en: "Main difference between WebSocket and HTTP?"
            },
            a: {
                tr: "HTTP tek yönlüdür (İstek -> Cevap -> Kapanır). WebSocket ise çift yönlü ve sürekli açık bir kanaldır, gerçek zamanlı veriler (Chat, Oyun) için kullanılır.",
                az: "HTTP tək yönlüdür (Sorğu -> Cavab -> Bağlanır). WebSocket isə iki yönlü və davamlı açıq kanaldır, real vaxtlı məlumatlar (Chat, Oyun) üçün istifadə olunur.",
                en: "HTTP is unidirectional (Request -> Response -> Close). WebSocket is a bidirectional, persistent channel used for real-time data."
            }
        },
        {
            id: 20,
            q: {
                tr: "SQL Injection nedir ve nasıl önlenir?",
                az: "SQL Injection nədir və necə qarşısı alınır?",
                en: "What is SQL Injection and how to prevent it?"
            },
            a: {
                tr: "Saldırganın veritabanı sorgularına müdahale etmesidir. Önlemek için 'Prepared Statements' veya ORM (Entity Framework, Hibernate vb.) kullanılmalıdır.",
                az: "Hücumçunun verilənlər bazası sorğularına müdaxilə etməsidir. Qarşısını almaq üçün 'Prepared Statements' və ya ORM istifadə olunmalıdır.",
                en: "An attack where malicious SQL is inserted into queries. Prevent it by using 'Prepared Statements' or an ORM."
            }
        }
    ],

    // 6. PROJECT HUB
    projects: [
        {
            id: 1,
            level: "junior",
            title: { tr: "URL Kısaltıcı API", az: "URL Qısaldıcı API", en: "URL Shortener API" },
            desc: { tr: "Uzun URL'leri alan ve kısa benzersiz kodlar üreten bir RESTful servis.", az: "Uzun URL-ləri götürüb qısa unikal kodlar yaradan servis.", en: "A RESTful service that takes long URLs and generates short unique codes." },
            tech: ["Node.js/Python", "Express/Flask", "MongoDB/SQL"],
            features: { tr: ["Özel kısa kod desteği", "Tıklama sayacı", "Yönlendirme mantığı"], az: ["Xüsusi kod dəstəyi", "Keçid sayğacı", "Redirect məntiqi"], en: ["Custom alias support", "Click analytics", "Redirect logic"] }
        },
        {
            id: 2,
            level: "mid",
            title: { tr: "Real-time Chat Uygulaması", az: "Real-time Çat Tətbiqi", en: "Real-time Chat App" },
            desc: { tr: "Kullanıcıların odalara ayrılarak anlık mesajlaşabildiği bir platform.", az: "İstifadəçilərin otaqlara bölünərək mesajlaşa bildiyi platform.", en: "A platform where users can message each other in rooms in real-time." },
            tech: ["Socket.io", "Redis (Pub/Sub)", "PostgreSQL"],
            features: { tr: ["Kullanıcı durumu (Online/Offline)", "Mesaj geçmişi", "Dosya paylaşımı"], az: ["Onlayn statusu", "Mesaj tarixçəsi", "Fayl paylaşımı"], en: ["User presence", "Chat history", "File sharing"] }
        },
        {
            id: 3,
            level: "expert",
            title: { tr: "Mikroservis E-Ticaret Bacxkendi", az: "Mikroservis E-Ticarət Backendi", en: "Microservices E-commerce" },
            desc: { tr: "Ödeme, stok ve sipariş servislerinin birbirinden bağımsız çalıştığı mimari.", az: "Ödəniş, stok və sifariş servislərinin müstəqil çalışdığı memarlıq.", en: "Architecture where payment, stock, and order services run independently." },
            tech: ["Go/Java", "RabbitMQ/Kafka", "Docker", "gRPC"],
            features: { tr: ["Event-driven iletişim", "Unit & Integration testleri", "API Gateway entegrasyonu"], az: ["Event-driven əlaqə", "Sifariş izləmə", "Konteynerləşdirmə"], en: ["Event-driven comms", "Distributed transactions", "API Gateway"] }
        }
    ]
};

contentData['fullstack'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Temellerin Birleşimi", items: ["HTML/CSS/JS İleri Seviye", "HTTP & REST API Mantığı", "Git & GitHub Akışı"], status: "start" },
            { title: "Frontend Uzmanlığı", items: ["React.js veya Vue.js", "State Management (Redux/Zustand)", "Tailwind CSS", "Responsive UI"], status: "start" },
            { title: "Backend Temelleri", items: ["Node.js (Express/NestJS)", "veya Python (FastAPI/Django)", "API Route Handlers", "Middleware"], status: "mid" },
            { title: "Veritabanı Entegrasyonu", items: ["PostgreSQL (SQL)", "MongoDB (NoSQL)", "ORM Kullanımı (Prisma/Mongoose)", "Veri Modelleme"], status: "mid" },
            { title: "Full-Stack Frameworkler", items: ["Next.js (App Router)", "Nuxt.js", "SvelteKit", "Server Side Rendering (SSR)"], status: "advanced" },
            { title: "Authentication & Security", items: ["NextAuth.js / Auth0", "JWT & Session Management", "CORS & CSRF Koruması"], status: "advanced" },
            { title: "DevOps & Cloud", items: ["Docker & Compose", "Vercel/Netlify Deployment", "AWS/VPS Temelleri", "CI/CD (GitHub Actions)"], status: "expert" },
            { title: "Mobil (Opsiyonel)", items: ["React Native (Expo)", "Mobil UI Tasarımı", "App Store Süreçleri"], status: "expert" }
        ],
        az: [
            { title: "Təməllərin Birləşməsi", items: ["HTML/CSS/JS İrəli Səviyyə", "HTTP & REST API Məntiqi", "Git & GitHub Axını"], status: "start" },
            { title: "Frontend İxtisaslaşması", items: ["React.js və ya Vue.js", "State İdarəetməsi", "Tailwind CSS", "Adaptiv UI"], status: "start" },
            { title: "Backend Əsasları", items: ["Node.js (Express/NestJS)", "və ya Python", "API Route Handlers", "Middleware"], status: "mid" },
            { title: "Məlumat Bazası İnteqrasiyası", items: ["PostgreSQL (SQL)", "MongoDB (NoSQL)", "ORM İstifadəsi (Prisma)", "Veri Modelləmə"], status: "mid" },
            { title: "Full-Stack Freymvörklər", items: ["Next.js (App Router)", "Nuxt.js", "Server Side Rendering (SSR)"], status: "advanced" },
            { title: "Autentifikasiya & Təhlükəsizlik", items: ["NextAuth.js", "JWT & Sessiya", "CORS & CSRF Qorunması"], status: "advanced" },
            { title: "DevOps & Bulud", items: ["Docker", "Vercel/Netlify", "AWS/VPS Əsasları", "CI/CD Prosesləri"], status: "expert" },
            { title: "Mobil (İstəyə bağlı)", items: ["React Native (Expo)", "Mobil UI Dizaynı", "App Store Prosesləri"], status: "expert" }
        ],
        en: [
            { title: "Foundational Convergence", items: ["Advanced HTML/CSS/JS", "HTTP & REST Logic", "Git & GitHub Workflow"], status: "start" },
            { title: "Frontend Mastery", items: ["React.js or Vue.js", "State Management", "Tailwind CSS", "Responsive UI"], status: "start" },
            { title: "Backend Basics", items: ["Node.js (Express/NestJS)", "or Python", "API Route Handlers", "Middleware"], status: "mid" },
            { title: "Database Integration", items: ["PostgreSQL (SQL)", "MongoDB (NoSQL)", "ORM Usage (Prisma)", "Data Modeling"], status: "mid" },
            { title: "Full-Stack Frameworks", items: ["Next.js (App Router)", "Nuxt.js", "Server Side Rendering (SSR)"], status: "advanced" },
            { title: "Authentication & Security", items: ["NextAuth.js", "JWT & Sessions", "CORS & CSRF Protection"], status: "advanced" },
            { title: "DevOps & Cloud", items: ["Docker", "Vercel/Netlify", "AWS/VPS Basics", "CI/CD Pipelines"], status: "expert" },
            { title: "Mobile (Optional)", items: ["React Native (Expo)", "Mobile UI Design", "App Store Publishing"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // YouTube & Education
            { type: 'course', title: 'The Odin Project', url: 'https://www.theodinproject.com', desc: 'Full Stack öğrenmek için dünyanın en iyi ücretsiz, proje bazlı açık kaynak müfredatı.', lang: 'en' },
            { type: 'course', title: 'Full Stack Open', url: 'https://fullstackopen.com', desc: 'Modern React, Redux, Node.js, MongoDB ve GraphQL üzerine Helsinki Üniversitesi kursu.', lang: 'en' },
            { type: 'youtube', title: 'Web Dev Simplified', url: 'https://youtube.com/@WebDevSimplified', desc: 'Karmaşık Full-stack konseptlerini basitleştiren harika kanal.', lang: 'en' },
            { type: 'youtube', title: 'Codevolution', url: 'https://youtube.com/@Codevolution', desc: 'React, Next.js ve Backend teknolojileri için detaylı Hint ekolü eğitimleri.', lang: 'en' },

            // Documentation & Stack
            { type: 'doc', title: 'Next.js Docs', url: 'https://nextjs.org/docs', desc: 'Modern Full-stack geliştirmenin standardı haline gelen framework dokümantasyonu.', lang: 'en' },
            { type: 'tool', title: 'T3 Stack', url: 'https://create.t3.gg', desc: 'Next.js, TypeScript ve Tailwind ile tip güvenli (type-safe) geliştirme yığını.', lang: 'en' },

            // Tools
            { type: 'tool', title: 'Vercel', url: 'https://vercel.com', desc: 'Full-stack uygulamalarınızı saniyeler içinde yayınlayabileceğiniz platform.', lang: 'global' },
            { type: 'tool', title: 'Neon DB', url: 'https://neon.tech', desc: 'Serverless PostgreSQL veritabanı. Hızlı ve ölçeklenebilir.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/full-stack', desc: 'Full Stack geliştirici olmak için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Armut", "Missions"],
            top_skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
            avg_salary: "Junior: 40k-60k TL | Mid: 70k-120k TL | Senior: 140k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "JobSearch.az", "Upwork (Remote)"],
            top_skills: ["PHP (Laravel) + Vue", "Node.js + React", "MySQL", "Git"],
            avg_salary: "Junior: 900-1500 AZN | Mid: 2000-3500 AZN | Senior: 5000+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "RemoteOK", "WeWorkRemotely", "Wellfound"],
            top_skills: ["T3 Stack", "AWS Lambda", "GraphQL", "Docker", "System Design"],
            avg_salary: "Junior: $4k-$6k | Mid: $8k-$12k | Senior: $15k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Full Stack nedir? Her şeyi bilmek zorunda mıyım?",
                az: "Full Stack nədir? Hər şeyi bilmək məcburiyyətindəyəm?",
                en: "What is Full Stack? Do I have to know everything?"
            },
            a: {
                tr: "Hayır. Full Stack, bir projeyi tek başına A'dan Z'ye (Front ve Back) çıkarabilme yeteneğidir. Her konuda uzman olamazsınız ama her katmanda iş yapabilir olmalısınız (T-shaped skill).",
                az: "Xeyr. Full Stack, bir layihəni təkbaşına A-dan Z-yə (Front və Back) çıxara bilmə bacarığıdır. Hər mövzuda mütəxəssis ola bilməzsiniz, amma hər təbəqədə iş görə bilməlisiniz.",
                en: "No. Full Stack is the ability to build a project from A to Z (Front and Back) alone. You can't be an expert in everything, but you must be functional in every layer."
            }
        },
        {
            id: 2,
            q: {
                tr: "Hangi Stack'i (Yığın) öğrenmeliyim?",
                az: "Hansı Stack-i (Yığını) öyrənməliyəm?",
                en: "Which Stack should I learn?"
            },
            a: {
                tr: "En popüleri MERN Stack'tir (MongoDB, Express, React, Node). Ancak 2024 itibariyle Next.js + PostgreSQL + TypeScript kombinasyonu sektörün en çok aranan yığınıdır.",
                az: "Ən populyarı MERN Stack-dir (MongoDB, Express, React, Node). Lakin 2024 etibarilə Next.js + PostgreSQL + TypeScript kombinasiyası sektorun ən çox axtarılan yığınıdır.",
                en: "The most popular is MERN (Mongo, Express, React, Node). However, as of 2024, the Next.js + PostgreSQL + TypeScript combo is the most sought-after stack."
            }
        },
        {
            id: 3,
            q: {
                tr: "Frontend mi Backend mi önce öğrenilmeli?",
                az: "Birinci Frontend yoxsa Backend öyrənilməlidir?",
                en: "Should I learn Frontend or Backend first?"
            },
            a: {
                tr: "Genellikle Frontend ile başlamak daha kolaydır çünkü yazdığınız kodun sonucunu anında görürsünüz. Motivasyonunuz artar. Sonra o arayüze veri çekmek için Backend'e geçersiniz.",
                az: "Adətən Frontend ilə başlamaq daha asandır, çünki yazdığınız kodun nəticəsini dərhal görürsünüz. Motivasiyanız artar. Sonra o interfeysə məlumat çəkmək üçün Backend-ə keçərsiniz.",
                en: "Generally, starting with Frontend is easier because you see the results instantly. It boosts motivation. Then move to Backend to fetch data for that UI."
            }
        },
        {
            id: 4,
            q: {
                tr: "İki kat maaş mı alacağım?",
                az: "İki qat maaş alacağam?",
                en: "Will I earn double the salary?"
            },
            a: {
                tr: "Hayır :) Full-stack geliştiriciler, Frontend veya Backend uzmanlarından biraz daha fazla kazanabilir ama iki katı değil. Avantajınız, iş bulma şansınızın çok daha yüksek olmasıdır.",
                az: "Xeyr :) Full-stack proqramçılar, Frontend və ya Backend mütəxəssislərindən bir az daha çox qazana bilər, amma iki qat deyil. Üstünlüyünüz, iş tapma şansınızın çox daha yüksək olmasıdır.",
                en: "No :) Full-stack developers might earn slightly more than pure FE/BE experts, but not double. Your advantage is much higher employability."
            }
        },
        {
            id: 5,
            q: {
                tr: "Tasarım (UI/UX) bilmek zorunda mıyım?",
                az: "Dizayn (UI/UX) bilmək məcburiyyətindəyəm?",
                en: "Do I have to know Design (UI/UX)?"
            },
            a: {
                tr: "Tasarımcı kadar değil ama temel tasarım prensiplerini ve Figma kullanmayı bilmelisiniz. Güzel görünen bir uygulama satar. Tailwind CSS gibi araçlar bu işi çok kolaylaştırır.",
                az: "Dizayner qədər yox, amma təməl dizayn prinsiplərini və Figma istifadə etməyi bilməlisiniz. Gözəl görünən tətbiq satır. Tailwind CSS kimi alətlər bu işi çox asanlaşdırır.",
                en: "Not like a designer, but you should know basic design principles and Figma. Good looking apps sell. Tools like Tailwind CSS make this very easy."
            }
        },
        {
            id: 6,
            q: {
                tr: "Deployment (Yayına alma) zor mu?",
                az: "Deployment (Yayımlama) çətindir?",
                en: "Is Deployment hard?"
            },
            a: {
                tr: "Eskiden zordu (FTP, SSH vb.). Şimdi Vercel, Netlify veya Railway gibi platformlarla GitHub'a kodunuzu attığınız an siteniz yayına giriyor. DevOps bilmek artı ama başlangıçta şart değil.",
                az: "Əvvəllər çətin idi. İndi Vercel, Netlify və ya Railway kimi platformalarla GitHub-a kodunuzu atdığınız an saytınız yayımlanır. DevOps bilmək müsbətdir, amma başlanğıcda şərt deyil.",
                en: "It used to be hard. Now with Vercel, Netlify, or Railway, your site goes live the moment you push to GitHub. DevOps is a plus, but not mandatory at start."
            }
        }
    ],

     interview: [
    {
        id: 1,
        q: {
            tr: "RESTful API ve GraphQL arasındaki fark nedir?",
            az: "RESTful API və GraphQL arasındakı fərq nədir?",
            en: "Difference between RESTful API and GraphQL?"
        },
        a: {
            tr: "REST belirli endpoint'ler üzerinden sabit veri döner. GraphQL tek bir endpoint üzerinden sadece talep edilen veriyi (over-fetching'i önleyerek) döner.",
            az: "REST müəyyən endpoint-lər vasitəsilə sabit məlumat qaytarır. GraphQL tək bir endpoint üzərindən yalnız tələb olunan məlumatı (over-fetching-in qarşısını alaraq) qaytarır.",
            en: "REST returns fixed data via multiple endpoints. GraphQL uses a single endpoint to return only the specific data requested, preventing over-fetching."
        }
    },
    {
        id: 2,
        q: {
            tr: "SQL ve NoSQL veritabanları arasındaki temel farklar nelerdir?",
            az: "SQL və NoSQL verilənlər bazaları arasındakı əsas fərqlər nələrdir?",
            en: "Main differences between SQL and NoSQL databases?"
        },
        a: {
            tr: "SQL (ilişkisel) tablolar ve şemalar kullanır, ACID uyumludur. NoSQL (doküman tabanlı vb.) esnek yapıdadır ve büyük ölçekli verilerde yatay genişleme (scaling) sağlar.",
            az: "SQL (əlaqəli) cədvəl və sxemlərdən istifadə edir, ACID uyğundur. NoSQL (sənəd əsaslı və s.) elastik struktura malikdir və böyük həcmli məlumatlarda üfüqi böyüməni təmin edir.",
            en: "SQL (relational) uses tables/schemas and is ACID compliant. NoSQL (document-based, etc.) is flexible and excels at horizontal scaling for large data sets."
        }
    },
    {
        id: 3,
        q: {
            tr: "Authentication ve Authorization farkı nedir?",
            az: "Authentication (Kimlik doğrulama) və Authorization (Səlahiyyət) fərqi nədir?",
            en: "Difference between Authentication and Authorization?"
        },
        a: {
            tr: "Authentication, kullanıcının kim olduğunu doğrular (Giriş yapma). Authorization, kullanıcının hangi kaynaklara erişim izni olduğunu kontrol eder (Yetki).",
            az: "Authentication istifadəçinin kim olduğunu təsdiqləyir (Giriş). Authorization isə istifadəçinin hansı resurslara giriş icazəsinin olduğunu yoxlayır (Səlahiyyət).",
            en: "Authentication verifies who the user is (Login). Authorization determines what resources the user has permission to access (Permissions)."
        }
    },
    {
        id: 4,
        q: {
            tr: "Microservices ve Monolit mimari farkı nedir?",
            az: "Microservices və Monolit memarlıq fərqi nədir?",
            en: "Difference between Microservices and Monolithic architecture?"
        },
        a: {
            tr: "Monolit'te tüm uygulama tek bir birimdir. Microservices'te uygulama küçük, bağımsız ve birbirleriyle haberleşen servis parçalarına bölünmüştür.",
            az: "Monolitdə bütün proqram tək bir blokdur. Microservices-də isə proqram kiçik, müstəqil və bir-biri ilə əlaqə saxlayan servis hissələrinə bölünmüşdür.",
            en: "In Monolithic, the app is a single unit. In Microservices, the app is split into small, independent services that communicate with each other."
        }
    },
    {
        id: 5,
        q: {
            tr: "ORP (Object-Relational Mapping) nedir?",
            az: "ORM (Object-Relational Mapping) nədir?",
            en: "What is ORM (Object-Relational Mapping)?"
        },
        a: {
            tr: "Veritabanı tablolarını kod tarafında sınıflar (class) olarak temsil etmemizi ve SQL yazmadan veritabanı işlemleri yapmamızı sağlayan tekniktir (Örn: Sequelize, Entity Framework).",
            az: "Verilənlər bazası cədvəllərini kod tərəfində siniflər (class) kimi təmsil etməyə və SQL yazmadan bazada əməliyyatlar aparmağa imkan verən texnikadır.",
            en: "A technique that lets you query and manipulate data from a database using an object-oriented paradigm (e.g., Sequelize, Entity Framework) instead of raw SQL."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { tr: "Kişisel Portfolyo & Blog", az: "Şəxsi Portfolyo və Bloq", en: "Personal Portfolio & Blog" },
        desc: { tr: "Admin paneli üzerinden yazı eklenebilen dinamik bir portfolyo sitesi.", az: "Admin paneli vasitəsilə məqalə əlavə edilə bilən dinamik portfolyo saytı.", en: "A dynamic portfolio site with an admin panel to manage blog posts." },
        tech: ["React/Vue", "Node.js", "MongoDB", "Tailwind CSS"],
        features: { 
            tr: ["Markdown desteği", "İletişim formu (EmailJS)", "Responsive tasarım"], 
            az: ["Markdown dəstəyi", "Əlaqə forması", "Responsive dizayn"], 
            en: ["Markdown support", "Contact form integration", "Responsive design"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { tr: "E-Ticaret Platformu (MVP)", az: "E-Ticarət Platforması (MVP)", en: "E-commerce Platform (MVP)" },
        desc: { tr: "Ürün listeleme, sepet yönetimi ve ödeme entegrasyonu içeren kapsamlı uygulama.", az: "Məhsul siyahısı, səbət idarəetməsi və ödəniş inteqrasiyası olan tətbiq.", en: "Full app featuring product listings, cart management, and payment integration." },
        tech: ["Next.js", "Express", "PostgreSQL (Prisma)", "Stripe API"],
        features: { 
            tr: ["JWT Authentication", "Stripe ile ödeme", "Arama ve Filtreleme"], 
            az: ["JWT Auth", "Stripe ödəniş sistemi", "Axtarış və Filtrləmə"], 
            en: ["JWT Authentication", "Stripe payment", "Search & Filtering"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { tr: "SaaS Proje Yönetim Aracı", az: "SaaS Layihə İdarəetmə Aləti", en: "SaaS Project Management Tool" },
        desc: { tr: "Trello veya Jira benzeri, ekiplerin gerçek zamanlı işbirliği yaptığı platform.", az: "Trello və ya Jira bənzəri, komandaların real-vaxtda əməkdaşlıq etdiyi platform.", en: "Trello/Jira-like platform for real-time team collaboration." },
        tech: ["TypeScript", "Next.js", "Socket.io", "Redis", "Docker"],
        features: { 
            tr: ["Sürükle-bırak (Drag & Drop) kanban", "Real-time bildirimler", "Rol bazlı yetkilendirme (RBAC)"], 
            az: ["Sürüklə-burax kanban", "Real-time bildirişlər", "Rol əsaslı icazələr"], 
            en: ["Drag & Drop Kanban boards", "Real-time notifications", "Role-based access control"] 
        }
    }
]

};

contentData['cloud'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Temeller", items: ["Bulut Nedir? (IaaS, PaaS, SaaS)", "Sanallaştırma Mantığı", "Ağ Temelleri (IP, DNS, VPN)", "Linux CLI"], status: "start" },
            { title: "Sağlayıcı Seçimi & Başlangıç", items: ["AWS (Pazar Lideri)", "Microsoft Azure (Kurumsal)", "Google Cloud (Data/AI)", "Free Tier Hesabı Açma"], status: "start" },
            { title: "Temel Servisler (Core Services)", items: ["Compute (EC2 / VM)", "Storage (S3 / Blob)", "Networking (VPC / VNet)", "IAM (Kimlik Yönetimi)"], status: "mid" },
            { title: "Veritabanı Yönetimi", items: ["Relational (RDS / Azure SQL)", "NoSQL (DynamoDB / CosmosDB)", "Caching (ElastiCache / Redis)"], status: "mid" },
            { title: "Kod Olarak Altyapı (IaC)", items: ["Terraform (Standart)", "AWS CloudFormation", "Ansible", "GitOps Mantığı"], status: "advanced" },
            { title: "Modern Mimariler", items: ["Serverless (Lambda / Azure Functions)", "Containers (ECS / AKS / GKE)", "Microservices", "Event-Driven Architecture"], status: "expert" },
            { title: "Maliyet & Güvenlik (FinOps/Sec)", items: ["Cost Explorer & Budgets", "WAF & Shield", "Compliance (GDPR/KVKK)", "Well-Architected Framework"], status: "expert" },
            { title: "PROJE: Cloud Resume Challenge", items: ["1. Sertifika (AWS CP/AZ-900)", "2. HTML/CSS Özgeçmiş", "3. Statik Hosting (S3/Blob) & CDN", "4. Ziyaretçi Sayacı (JS+DB+API)", "5. Backend (Python Lambda)", "6. Otomasyon (Terraform & CI/CD)", "7. Blog Yazısı"], status: "expert" }
        ],
        az: [
            { title: "Təməllər", items: ["Bulud Nədir? (IaaS, PaaS, SaaS)", "Virtualizasiya", "Şəbəkə Əsasları (IP, DNS)", "Linux CLI"], status: "start" },
            { title: "Provayder Seçimi", items: ["AWS (Bazar Lideri)", "Microsoft Azure", "Google Cloud", "Pulsuz Hesab (Free Tier)"], status: "start" },
            { title: "Əsas Servislər", items: ["Hesablama (EC2 / VM)", "Yaddaş (S3 / Blob)", "Şəbəkə (VPC)", "IAM (Kimlik İdarəetməsi)"], status: "mid" },
            { title: "Məlumat Bazası", items: ["Relational (RDS)", "NoSQL (DynamoDB)", "Caching (Redis)"], status: "mid" },
            { title: "İnfrastruktur Kodu (IaC)", items: ["Terraform", "CloudFormation", "Ansible", "GitOps"], status: "advanced" },
            { title: "Müasir Memarlıqlar", items: ["Serverless (Lambda)", "Konteynerlər (Kubernetes)", "Mikroservislər", "Hadisə Əsaslı (Event-Driven)"], status: "expert" },
            { title: "Xərc & Təhlükəsizlik", items: ["Büdcə İdarəetməsi", "WAF & Shield", "Uyğunluq (Compliance)", "Well-Architected Framework"], status: "expert" },
            { title: "LAYİHƏ: Cloud Resume Challenge", items: ["1. Sertifikat (AWS CP/AZ-900)", "2. HTML/CSS CV", "3. Statik Hostinq & CDN", "4. Ziyarətçi Sayğacı (JS+DB+API)", "5. Backend (Python Lambda)", "6. Avtomatlaşdırma (Terraform & CI/CD)", "7. Blog Yazısı"], status: "expert" }
        ],
        en: [
            { title: "Fundamentals", items: ["What is Cloud? (IaaS, PaaS, SaaS)", "Virtualization", "Networking (IP, DNS, CIDR)", "Linux CLI"], status: "start" },
            { title: "Provider & Setup", items: ["AWS (Market Leader)", "Azure (Enterprise)", "GCP (Data/AI)", "Free Tier Setup"], status: "start" },
            { title: "Core Services", items: ["Compute (EC2 / VM)", "Storage (S3 / Blob)", "Networking (VPC / VNet)", "IAM (Identity Mgmt)"], status: "mid" },
            { title: "Database Management", items: ["Relational (RDS / SQL)", "NoSQL (DynamoDB / Cosmos)", "Caching (Redis)"], status: "mid" },
            { title: "IaC (Infrastructure as Code)", items: ["Terraform (Industry Std)", "CloudFormation", "Ansible", "GitOps Principles"], status: "advanced" },
            { title: "Modern Architectures", items: ["Serverless (Lambda)", "Containers (K8s / ECS)", "Microservices", "Event-Driven"], status: "expert" },
            { title: "Cost & Security (FinOps)", items: ["Cost Management", "WAF & DDoS Protection", "Compliance", "Well-Architected Framework"], status: "expert" },
            { title: "PROJECT: Cloud Resume Challenge", items: ["1. Certification (AWS CP/AZ-900)", "2. HTML/CSS Resume", "3. Static Hosting (S3/CDN)", "4. Visitor Counter (JS+DB+API)", "5. Backend (Python Lambda)", "6. Automation (IaC & CI/CD)", "7. Blog Post"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck', desc: 'Bulut ve Ağ temellerini en eğlenceli anlatan kanal. Kahvenizi hazırlayın!', lang: 'en' },
            { type: 'youtube', title: 'Tech with Lucy', url: 'https://youtube.com/@TechWithLucy', desc: 'AWS kariyeri ve sertifikasyon süreçleri için harika rehber.', lang: 'en' },
            { type: 'youtube', title: 'Stephane Maarek', url: 'https://www.udemy.com/user/stephanemaarek/', desc: 'AWS sertifikası alacaksanız Udemy\'deki 1 numaralı eğitmen.', lang: 'en' },

            // Documentation & Platform
            { type: 'doc', title: 'AWS Documentation', url: 'https://docs.aws.amazon.com', desc: 'Sektörün en kapsamlı dokümantasyonu. Her şeyin kaynağı.', lang: 'en' },
            { type: 'doc', title: 'Microsoft Learn', url: 'https://learn.microsoft.com', desc: 'Azure öğrenmek için Microsoft\'un ücretsiz, interaktif eğitim platformu.', lang: 'global' },
            { type: 'tool', title: 'A Cloud Guru', url: 'https://acloudguru.com', desc: 'Bulut öğrenmenin Netflix\'i. Ücretli ama en iyi platform.', lang: 'en' },

            // Tools
            { type: 'tool', title: 'AWS Free Tier', url: 'https://aws.amazon.com/free', desc: '12 ay boyunca birçok servisi ücretsiz kullanabileceğiniz başlangıç paketi.', lang: 'global' },
            { type: 'tool', title: 'Terraform Registry', url: 'https://registry.terraform.io', desc: 'Altyapı kodları için kütüphane.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (DevOps/Cloud)', url: 'https://roadmap.sh/devops', desc: 'Bulut mühendisliği yol haritası.', lang: 'en' },

            // Projects
            { type: 'roadmap', title: 'Cloud Resume Challenge', url: 'https://cloudresumechallenge.dev', desc: 'Bulut yetkinliklerinizi kanıtlamanız için hazırlanan efsanevi proje.', lang: 'global' },
            { type: 'doc', title: 'SSS Lunizz Guide', url: 'https://sss.lunizz.com', desc: 'Cloud Resume Challenge için Türkçe rehber ve kaynaklar.', lang: 'tr' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Remote iş ilanları"],
            top_skills: ["AWS Solutions Architect", "Terraform", "Docker/K8s", "Python", "Linux"],
            avg_salary: "Junior: 40k-60k TL | Mid: 80k-120k TL | Senior: 160k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Telecom & Banking"],
            top_skills: ["Linux Admin", "Azure", "VMware", "Network"],
            avg_salary: "Junior: 1000-1600 AZN | Mid: 2200-3500 AZN | Senior: 5500+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "WeWorkRemotely", "Arc.dev", "AWS Jobs"],
            top_skills: ["AWS Certified", "Kubernetes (CKA)", "Terraform", "FinOps"],
            avg_salary: "Junior: $5k-$8k | Mid: $10k-$15k | Senior: $18k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Hangi bulut sağlayıcısını seçmeliyiz? (AWS vs Azure vs GCP)",
                az: "Hansı bulud provayderini seçməliyəm? (AWS vs Azure vs GCP)",
                en: "Which cloud provider should I choose? (AWS vs Azure vs GCP)"
            },
            a: {
                tr: "Pazar payı lideri (%30+) AWS'dir, kaynak boldur. Kurumsal Windows ortamları için Azure tercih edilir. Veri analitiği ve Yapay Zeka için Google Cloud (GCP) öne çıkar. Başlangıç için AWS önerilir.",
                az: "Bazar lideri AWS-dir, qaynaq çoxdur. Korporativ Windows mühitləri üçün Azure seçilir. Məlumat analitikası və AI üçün Google Cloud (GCP) önə çıxır. Başlanğıc üçün AWS məsləhətdir.",
                en: "AWS is the market leader with abundant resources. Azure is preferred for corporate Windows environments. GCP shines in Data and AI. AWS is recommended for starters."
            }
        },
        {
            id: 2,
            q: {
                tr: "IaaS, PaaS ve SaaS farkı nedir? ",
                az: "IaaS, PaaS və SaaS fərqi nədir?",
                en: "What is the difference between IaaS, PaaS, and SaaS?"
            },
            a: {
                tr: "IaaS (Altyapı): Sunucuyu kiralarsın, yönetimi sendendir (AWS EC2). PaaS (Platform): Sadece kodu yüklersin, sunucuyu sağlayıcı yönetir (Heroku). SaaS (Yazılım): Direkt kullanırsın (Gmail, Dropbox).",
                az: "IaaS: Serveri icarəyə götürürsən, idarəetmə səndədir. PaaS: Sadəcə kodu yükləyirsən, serveri provayder idarə edir. SaaS: Birbaşa istifadə edirsən (Gmail).",
                en: "IaaS: You rent infrastructure, manage OS (EC2). PaaS: You deploy code, provider manages OS (Heroku). SaaS: You just use the software (Gmail)."
            }
        },
        {
            id: 3,
            q: {
                tr: "Bulut öğrenmek pahalı mı? Fatura sürprizi yaşar mıyım?",
                az: "Bulud öyrənmək bahadır? Faktura sürprizi yaşayaram?",
                en: "Is learning Cloud expensive? Will I get bill shock?"
            },
            a: {
                tr: "Dikkat etmezseniz evet! Ancak AWS/Azure 'Free Tier' (Ücretsiz Katman) sunar. Mutlaka 'Budget Alarm' (Bütçe Uyazısı) kurmalısınız. Açık unuttuğunuz sunucu ay sonunda üzebilir.",
                az: "Diqqət etməsəniz bəli! Lakin 'Free Tier' (Pulsuz Mərhələ) mövcuddur. Mütləq 'Büdcə Xəbərdarlığı' (Budget Alarm) qurmalısınız. Açıq qalan server üzə bilər.",
                en: "If not careful, yes! Use the 'Free Tier'. Always set up 'Budget Alarms'. Leaving a server running can lead to bill shock."
            }
        },
        {
            id: 4,
            q: {
                tr: "Kodlama bilmek zorunda mıyım?",
                az: "Kodlaşdırma bilmək məcburiyyətindəyəm?",
                en: "Do I have to know coding?"
            },
            a: {
                tr: "Bir yazılımcı kadar değil ama 'Infrastructure as Code' (Terraform) ve otomasyon için Python/Bash bilmek zorundasınız. Sadece arayüzden (Console) tıklayarak profesyonel olunmaz.",
                az: "Proqramçı qədər yox, amma 'Infrastructure as Code' və avtomatlaşdırma üçün Python/Bash bilməlisiniz. Sadəcə interfeysdən klikləyərək peşəkar olunmaz.",
                en: "Not as much as a dev, but you need Python/Bash for automation and IaC. You can't be a pro just by clicking in the Console."
            }
        },
        {
            id: 5,
            q: {
                tr: "Sertifika almalı mıyım?",
                az: "Sertifikat almalıyam?",
                en: "Should I get certified?"
            },
            a: {
                tr: "Kesinlikle Evet. Cloud dünyasında sertifikalar (özellikle AWS Solutions Architect Associate) işe alımda çok büyük bir filtredir ve maaşı doğrudan etkiler.",
                az: "Mütləq Bəli. Bulud dünyasında sertifikatlar (xüsusilə AWS Solutions Architect) işə qəbulda böyük filtrdir və maaşa birbaşa təsir edir.",
                en: "Absolutely Yes. In Cloud, certifications (especially AWS Solutions Architect Associate) are a huge filter for hiring and directly impact salary."
            }
        },
        {
            id: 6,
            q: {
                tr: "Serverless (Sunucusuz) mimari nedir?",
                az: "Serverless (Serversiz) memarlıq nədir?",
                en: "What is Serverless architecture?"
            },
            a: {
                tr: "Sunucu yönetimiyle hiç uğraşmadığınız, kodunuzun sadece çalıştığı süre kadar (milisaniye bazında) ücret ödediğiniz modeldir (Örn: AWS Lambda). Geleceğin mimarisidir.",
                az: "Server idarəçiliyi ilə məşğul olmadığınız, kodunuzun işlədiyi müddət qədər ödəniş etdiyiniz modeldir (AWS Lambda). Gələcəyin memarlığıdır.",
                en: "A model where you don't manage servers and only pay for the execution time (milliseconds) of your code (e.g., AWS Lambda). It is the future."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "Cloud Computing modelleri (SaaS, PaaS, IaaS) farkı nedir?",
            az: "SaaS, PaaS və IaaS arasındakı fərq nədir?",
            en: "Difference between SaaS, PaaS, and IaaS?"
        },
        a: {
            tr: "IaaS altyapı (VM, Network), PaaS platform (Runtime, DB), SaaS ise hazır yazılım (Gmail, Slack) sunar. Kontrol seviyesi IaaS'tan SaaS'a doğru azalır.",
            az: "IaaS infrastruktur, PaaS platforma, SaaS isə hazır proqram təminatı təqdim edir. Nəzarət səviyyəsi IaaS-dan SaaS-a doğru azalır.",
            en: "IaaS provides infrastructure, PaaS provides a platform for developers, and SaaS provides software as a service. Control decreases from IaaS to SaaS."
        }
    },
    {
        id: 2,
        q: {
            tr: "Public, Private ve Hybrid Cloud farkı?",
            az: "Public, Private və Hybrid Cloud fərqi?",
            en: "Public vs Private vs Hybrid Cloud?"
        },
        a: {
            tr: "Public genel internet üzerindedir (AWS). Private tek bir kurum içindir. Hybrid, ikisinin birleşimidir.",
            az: "Public ümumi internet üzərindədir (AWS). Private tək bir təşkilat üçündür. Hybrid isə hər ikisinin birləşməsidir.",
            en: "Public is shared over the internet. Private is dedicated to one organization. Hybrid is a mix of both."
        }
    },
    {
        id: 3,
        q: {
            tr: "Serverless Computing nedir?",
            az: "Serverless Computing nədir?",
            en: "What is Serverless Computing?"
        },
        a: {
            tr: "Sunucu yönetimi olmadan sadece kodun (AWS Lambda, Azure Functions) çalıştırılmasıdır. Kullandığın kadar ödersin.",
            az: "Server idarəetməsi olmadan yalnız kodun (AWS Lambda) işlədilməsidir. Yalnız istifadə etdiyin qədər ödəyirsən.",
            en: "Running code without managing servers. The cloud provider handles scaling and execution (e.g., AWS Lambda)."
        }
    },
    {
        id: 4,
        q: {
            tr: "Cloud Agnostic nedir?",
            az: "Cloud Agnostic nədir?",
            en: "What is Cloud Agnostic?"
        },
        a: {
            tr: "Uygulamanın tek bir bulut sağlayıcısına bağlı kalmadan her platformda (AWS, Azure, GCP) çalışabilecek şekilde tasarlanmasıdır.",
            az: "Tətbiqin tək bir bulud provayderindən asılı olmayaraq hər platformada işləyə biləcək şəkildə dizayn edilməsidir.",
            en: "A design that allows applications to run on any cloud provider without being locked into one (e.g., using Terraform/K8s)."
        }
    },
    {
        id: 5,
        q: {
            tr: "High Availability (HA) nedir?",
            az: "High Availability (HA) nədir?",
            en: "What is High Availability (HA)?"
        },
        a: {
            tr: "Sistemin donanım veya yazılım arızalarına rağmen minimum kesintiyle çalışmaya devam etme kapasitesidir.",
            az: "Sistemin aparat və ya proqram təminatı xətalarına baxmayaraq minimum fasilə ilə işləməyə davam etmə qabiliyyətidir.",
            en: "The ability of a system to remain operational and accessible with minimal downtime even during failures."
        }
    },
    {
        id: 6,
        q: {
            tr: "Auto Scaling nedir?",
            az: "Auto Scaling nədir?",
            en: "What is Auto Scaling?"
        },
        a: {
            tr: "Trafik arttığında kaynakların (VM sayısı) otomatik artırılması, trafik azaldığında ise maliyet tasarrufu için azaltılmasıdır.",
            az: "Trafik artdıqda resursların (VM sayı) avtomatik artırılması, azaldıqda isə xərclərə qənaət üçün azaldılmasıdır.",
            en: "Automatically adjusting the number of computing resources based on actual demand or traffic."
        }
    },
    {
        id: 7,
        q: {
            tr: "Region ve Availability Zone (AZ) farkı?",
            az: "Region və Availability Zone (AZ) fərqi?",
            en: "Region vs Availability Zone (AZ)?"
        },
        a: {
            tr: "Region coğrafi bir bölgedir (Örn: Frankfurt). AZ ise bir region içindeki birbirinden izole veri merkezleridir.",
            az: "Region coğrafi bir bölgədir. AZ isə bir region daxilindəki bir-birindən izole edilmiş məlumat mərkəzləridir (Data Centers).",
            en: "A Region is a geographic area. An AZ is an isolated data center within that region."
        }
    },
    {
        id: 8,
        q: {
            tr: "Object Storage vs Block Storage?",
            az: "Object Storage və Block Storage fərqi?",
            en: "Object Storage vs Block Storage?"
        },
        a: {
            tr: "Object: Resim, video gibi yapısal olmayan veriler için (AWS S3). Block: İşletim sistemi diskleri için (AWS EBS).",
            az: "Object: Şəkil, video kimi strukturlaşdırılmamış fayllar üçün (AWS S3). Block: Əməliyyat sistemi diskləri üçün (AWS EBS).",
            en: "Object storage is for flat files (S3). Block storage is for high-performance disk volumes (EBS)."
        }
    },
    {
        id: 9,
        q: {
            tr: "Shared Responsibility Model nedir?",
            az: "Shared Responsibility Model nədir?",
            en: "What is the Shared Responsibility Model?"
        },
        a: {
            tr: "Bulut sağlayıcı altyapının güvenliğinden, müşteri ise bulutun içindeki verilerin ve uygulamaların güvenliğinden sorumludur.",
            az: "Bulud provayderi infrastrukturun, müştəri isə bulud daxilindəki məlumatların və tətbiqlərin təhlükəsizliyindən cavabdehdir.",
            en: "The provider is responsible for security 'of' the cloud, while the customer is responsible for security 'in' the cloud."
        }
    },
    {
        id: 10,
        q: {
            tr: "Cloud-Native nedir?",
            az: "Cloud-Native nədir?",
            en: "What is Cloud-Native?"
        },
        a: {
            tr: "Uygulamaların bulut ortamının avantajlarından (mikroservisler, konteynerler) tam yararlanacak şekilde sıfırdan tasarlanmasıdır.",
            az: "Tətbiqlərin bulud mühitinin üstünlüklərindən tam yararlanacaq şəkildə sıfırdan dizayn edilməsidir.",
            en: "Designing and building applications specifically to leverage cloud computing benefits like scalability and containers."
        }
    },
    {
        id: 11,
        q: {
            tr: "Elasticity ve Scalability farkı?",
            az: "Elasticity və Scalability fərqi?",
            en: "Elasticity vs Scalability?"
        },
        a: {
            tr: "Scalability sistemin büyüme kapasitesidir. Elasticity ise talebe göre anlık daralıp genişleyebilme yeteneğidir.",
            az: "Scalability sistemin böyümə qabiliyyətidir. Elasticity isə tələbə görə anlıq daralıb genişlənə bilmək bacarığıdır.",
            en: "Scalability is the ability to handle growth. Elasticity is the ability to adapt to changes in real-time demand."
        }
    },
    {
        id: 12,
        q: {
            tr: "Content Delivery Network (CDN) nedir?",
            az: "CDN nədir?",
            en: "What is a CDN?"
        },
        a: {
            tr: "Verileri kullanıcıya en yakın coğrafi sunucularda önbelleğe alarak web sitelerinin hızını artıran dağıtık sunucu ağıdır.",
            az: "Məlumatları istifadəçiyə ən yaxın serverlərdə keşləyərək veb saytların sürətini artıran paylanmış server şəbəkəsidir.",
            en: "A network of distributed servers that deliver web content closer to users based on their geographic location."
        }
    },
    {
        id: 13,
        q: {
            tr: "Disaster Recovery (DR) nedir?",
            az: "Disaster Recovery (DR) nədir?",
            en: "What is Disaster Recovery?"
        },
        a: {
            tr: "Büyük bir felaket durumunda (deprem, siber saldırı) sistemin farklı bir bölgeden tekrar ayağa kaldırılması planıdır.",
            az: "Böyük bir fəlakət zamanı (zəlzələ, kiber hücum) sistemin fərqli bir regiondan yenidən işə salınması planıdır.",
            en: "A set of policies and tools to enable the recovery of infrastructure and systems after a disaster."
        }
    },
    {
        id: 14,
        q: {
            tr: "VPC (Virtual Private Cloud) nedir?",
            az: "VPC nədir?",
            en: "What is a VPC?"
        },
        a: {
            tr: "Bulut üzerinde size özel, mantıksal olarak izole edilmiş bir ağ alanıdır. Kendi IP aralığınızı ve alt ağlarınızı yönetirsiniz.",
            az: "Bulud üzərində sizə özəl, məntiqlə izole edilmiş şəbəkə sahəsidir. Öz IP aralığınızı və alt şəbəkələrinizi idarə edirsiniz.",
            en: "A private, isolated section of the cloud where you can launch resources in a virtual network you define."
        }
    },
    {
        id: 15,
        q: {
            tr: "Microservices Cloud'da neden popüler?",
            az: "Mikroservislər buludda niyə populyardır?",
            en: "Why are Microservices popular in Cloud?"
        },
        a: {
            tr: "Bağımsız ölçeklenebilirlik ve hızlı dağıtım imkanı tanır. Bulutun esnek kaynak yönetimiyle mükemmel uyum sağlar.",
            az: "Müstəqil miqyaslana bilmə və sürətli deploy imkanı verir. Buludun elastik resurs idarəetməsi ilə mükəmməl uyğunlaşır.",
            en: "They allow independent scaling and fast deployment, perfectly fitting the cloud's elastic resource management."
        }
    },
    {
        id: 16,
        q: {
            tr: "Edge Computing nedir?",
            az: "Edge Computing nədir?",
            en: "What is Edge Computing?"
        },
        a: {
            tr: "Veri işlemenin merkezi bulut yerine verinin üretildiği yere (sensörler, cihazlar) daha yakın yapılmasıdır.",
            az: "Məlumat emalının mərkəzi bulud yerinə məlumatın yarandığı yerə (cihazlar, sensorlar) daha yaxın edilməsidir.",
            en: "Processing data closer to where it is generated (the 'edge') rather than in a centralized cloud data center."
        }
    },
    {
        id: 17,
        q: {
            tr: "Cold Storage nedir?",
            az: "Cold Storage nədir?",
            en: "What is Cold Storage?"
        },
        a: {
            tr: "Nadiren erişilen verilerin (arşivler) çok ucuza saklanmasıdır. Veriyi geri çekmek zaman alabilir.",
            az: "Nadir hallarda müraciət olunan məlumatların (arxivlər) çox ucuz qiymətə saxlanmasıdır. Məlumatı geri çəkmək vaxt ala bilər.",
            en: "Storage for infrequently accessed data (archives) at a lower cost, with longer retrieval times."
        }
    },
    {
        id: 18,
        q: {
            tr: "Multi-Cloud stratejisi nedir?",
            az: "Multi-Cloud strategiyası nədir?",
            en: "What is a Multi-Cloud strategy?"
        },
        a: {
            tr: "Riskleri azaltmak için birden fazla bulut sağlayıcısını (AWS + Azure) aynı anda kullanma yöntemidir.",
            az: "Riskləri azaltmaq üçün eyni anda birdən çox bulud provayderindən (AWS + Azure) istifadə etməkdir.",
            en: "Using multiple cloud computing services from different providers to avoid vendor lock-in and increase reliability."
        }
    },
    {
        id: 19,
        q: {
            tr: "Identity and Access Management (IAM) nedir?",
            az: "IAM nədir?",
            en: "What is IAM?"
        },
        a: {
            tr: "Bulut kaynaklarına kimlerin, hangi yetkilerle erişebileceğini yöneten güvenlik katmanıdır.",
            az: "Bulud resurslarına kimlərin, hansı icazələrlə daxil ola biləcəyini idarə edən təhlükəsizlik qatıdır.",
            en: "A framework for managing digital identities and controlling access to cloud resources."
        }
    },
    {
        id: 20,
        q: {
            tr: "Cloud Migration stratejileri nelerdir?",
            az: "Cloud Migration strategiyaları hansılardır?",
            en: "What are the Cloud Migration strategies?"
        },
        a: {
            tr: "Rehost (Lift and Shift), Replatform, Refactor, Retire ve Retain. Uygulamayı buluta taşıma yöntemlerini tanımlar.",
            az: "Rehost (olduğu kimi köçürmək), Replatform, Refactor və s. Tətbiqi buluda daşımaq üsullarını ifadə edir.",
            en: "Common strategies include Rehost (Lift and Shift), Replatform, Refactor, Retire, and Retain."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "Serverless Web Uygulaması", 
            az: "Serverless Veb Tətbiqi", 
            en: "Serverless Web Application" 
        },
        desc: { 
            tr: "Sunucu yönetimi olmadan, sadece bulut servislerini kullanarak ölçeklenebilir bir uygulama.", 
            az: "Server idarəetməsi olmadan, yalnız bulud servislərindən istifadə edərək miqyaslana bilən tətbiq.", 
            en: "A scalable application built using only cloud services without managing any servers." 
        },
        tech: ["AWS Lambda / Azure Functions", "S3 / Azure Blob", "DynamoDB", "API Gateway"],
        features: { 
            tr: ["Kullandığın kadar öde", "Otomatik ölçeklenme", "Statik hosting"], 
            az: ["İstifadə etdiyin qədər ödə", "Avtomatik miqyaslanma", "Statik hostinq"], 
            en: ["Pay-as-you-go model", "Auto-scaling", "Static website hosting"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "Multi-Tier Fault Tolerant Mimari", 
            az: "Çoxqatlı Fövqəladə Hallara Davamlı Memarlıq", 
            en: "Multi-Tier Fault Tolerant Architecture" 
        },
        desc: { 
            tr: "Yüksek erişilebilirlik için birden fazla bölgede (AZ) çalışan yedekli sistem tasarımı.", 
            az: "Yüksək əlçatanlıq üçün birdən çox zonada (AZ) çalışan yedəkli sistem dizaynı.", 
            en: "A redundant system design running across multiple Availability Zones for high availability." 
        },
        tech: ["VPC", "EC2 Auto Scaling", "ELB (Load Balancer)", "RDS Multi-AZ"],
        features: { 
            tr: ["Yük dengeleme", "Veritabanı replikasyonu", "Güvenli network (Public/Private Subnets)"], 
            az: ["Yük balansı (Load balancing)", "Verilənlər bazası replikasiyası", "Təhlükəsiz şəbəkə"], 
            en: ["Load balancing", "Database replication", "Secure networking"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "Cloud Cost & Security Governance", 
            az: "Bulud Xərcləri və Təhlükəsizlik İdarəetməsi", 
            en: "Cloud Cost & Security Governance" 
        },
        desc: { 
            tr: "Büyük ölçekli projelerde maliyetleri izleyen ve güvenlik açıklarını otomatik kapatan dashboard.", 
            az: "Böyük miqyaslı layihələrdə xərcləri izləyən və təhlükəsizlik boşluqlarını avtomatik bağlayan idarəetmə paneli.", 
            en: "A dashboard and automation suite that monitors costs and auto-remediates security gaps in large-scale environments." 
        },
        tech: ["Python/Boto3", "AWS Cost Explorer API", "CloudWatch", "Terraform Drift Detection"],
        features: { 
            tr: ["Otomatik maliyet raporu", "Güvenlik uyumluluk denetimi", "Atıl kaynak temizliği"], 
            az: ["Avtomatik xərc hesabatı", "Təhlükəsizlik uyğunluğu auditi", "İstifadəsiz resursların təmizlənməsi"], 
            en: ["Automated cost reporting", "Security compliance auditing", "Resource cleanup automation"] 
        }
    }
]
};

contentData['ai-engineering'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Temeller", items: ["Python (İleri Seviye)", "API Kullanımı (REST)", "Vektör Matematiği Temelleri"], status: "start" },
            { title: "LLM (Büyük Dil Modelleri) Temelleri", items: ["Transformer Mimarisi Nedir?", "Tokenization", "Temperature & Top-K", "OpenAI & Anthropic API"], status: "start" },
            { title: "Prompt Engineering", items: ["Zero-shot & Few-shot", "Chain of Thought (CoT)", "Prompt Optimasyonu", "Sistem Mesajları"], status: "mid" },
            { title: "RAG (Retrieval-Augmented Generation)", items: ["Vector Veritabanları (Pinecone/Chroma)", "Embeddings", "LangChain & LlamaIndex", "Context Window Yönetimi"], status: "mid" },
            { title: "AI Agent Geliştirme", items: ["AutoGPT Mantığı", "Tool Calling (Function calling)", "ReAct Framework", "Multi-Agent Sistemler"], status: "advanced" },
            { title: "Model Fine-Tuning", items: ["LoRA / QLoRA", "HuggingFace Transformers", "Veri Seti Hazırlama", "Maliyet Optimizasyonu"], status: "advanced" },
            { title: "Deployment & Ops (LLMOps)", items: ["Ollama (Local LLM)", "Vercel AI SDK", "Model Monitoring", "Security & Jailbreak Koruması"], status: "expert" }
        ],
        az: [
            { title: "Təməllər", items: ["Python (İrəli)", "API İstifadəsi", "Vektor Riyaziyyatı"], status: "start" },
            { title: "LLM Əsasları", items: ["Transformer Arxitekturası", "Tokenləşdirmə", "Temperature Parametri", "LLM API-ləri"], status: "start" },
            { title: "Prompt Mühəndisliyi", items: ["Zero-shot & Few-shot", "Chain of Thought", "Sistem Mesajları"], status: "mid" },
            { title: "RAG (Məlumat Artırılmış Generasiya)", items: ["Vektor Bazaları", "Embeddings", "LangChain", "Kontekst İdarəetməsi"], status: "mid" },
            { title: "AI Agent İnkişafı", items: ["AutoGPT", "Function Calling", "Multi-Agent Sistemlər"], status: "advanced" },
            { title: "Model İncə Sazlama (Fine-Tuning)", items: ["LoRA", "HuggingFace", "Verilənlər Bazası Hazırlığı"], status: "advanced" },
            { title: "Yerləşdirmə (LLMOps)", items: ["Ollama (Yerli LLM)", "Vercel AI SDK", "Model Monitorinqi"], status: "expert" }
        ],
        en: [
            { title: "Fundamentals", items: ["Advanced Python", "REST APIs", "Vector Math Basics"], status: "start" },
            { title: "LLM Basics", items: ["Transformer Architecture", "Tokenization", "Temperature & Parameters", "LLM APIs"], status: "start" },
            { title: "Prompt Engineering", items: ["Zero-shot & Few-shot", "Chain of Thought (CoT)", "System Prompts"], status: "mid" },
            { title: "RAG (Retrieval-Augmented Generation)", items: ["Vector DBs (Pinecone)", "Embeddings", "LangChain & LlamaIndex", "Context Management"], status: "mid" },
            { title: "AI Agent Development", items: ["AutoGPT Logic", "Function Calling", "ReAct Framework", "Multi-Agent Systems"], status: "advanced" },
            { title: "Fine-Tuning", items: ["LoRA / QLoRA", "HuggingFace", "Dataset Prep", "Cost Optimization"], status: "advanced" },
            { title: "LLMOps & Deployment", items: ["Ollama (Local)", "Vercel AI SDK", "Evaluations (Evals)", "Security/Guardrails"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            { type: 'course', title: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/', desc: 'Andrew Ng\'den Prompt Engineering ve LLM üzerine ücretsiz, sertifikalı kısa kurslar.', lang: 'en' },
            { type: 'doc', title: 'LangChain Docs', url: 'https://python.langchain.com/docs/get_started/introduction', desc: 'LLM uygulamaları geliştirmek için standart kütüphane dokümantasyonu.', lang: 'en' },
            { type: 'youtube', title: 'AI Jason', url: 'https://youtube.com/@AIJasonZ', desc: 'Sıfırdan AI Agent ve RAG uygulamaları yapmayı öğreten pratik kanal.', lang: 'en' },
            { type: 'tool', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'Açık kaynak Ai modellerinin (Llama, Mistral) evi.', lang: 'global' },
            { type: 'tool', title: 'Ollama', url: 'https://ollama.com', desc: 'Kendi bilgisayarınızda Llama 3 gibi modelleri çalıştırmanın en kolay yolu.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (AI)', url: 'https://roadmap.sh/ai-engineer', desc: 'AI Mühendisliği yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Teknokent AI Startupları", "Bankalar"],
            top_skills: ["Python", "LangChain", "OpenAI API", "RAG", "Vector DB"],
            avg_salary: "Junior: 50k-70k TL | Mid: 90k-130k TL | Senior: 160k+ TL"
        },
        AZ: {
            platforms: ["LinkedIn", "Kapital Bank (AI Lab)", "Pasha Bank"],
            top_skills: ["Python", "Machine Learning", "NLP", "API Integration"],
            avg_salary: "Junior: 1200-2000 AZN | Mid: 2500-4000 AZN | Senior: 6000+ AZN"
        },
        GLOBAL: {
            platforms: ["Y Combinator Jobs", "Remote AI Jobs", "Wellfound"],
            top_skills: ["LLM Fine-tuning", "CUDA", "PyTorch", "AI Agents"],
            avg_salary: "Junior: $6k-$10k | Mid: $12k-$18k | Senior: $25k+ (Aylık/Remote/US)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "AI Mühendisi ile Veri Bilimci farkı ne?",
                az: "AI Mühəndisi ilə Data Scientist fərqi nədir?",
                en: "Difference between AI Engineer and Data Scientist?"
            },
            a: {
                tr: "Veri Bilimci modeli **eğitir** ve matematiksel analiz yapar. AI Mühendisi ise eğitilmiş modelleri (LLM) kullanarak **uygulama geliştirir** (Örn: Chatbot yapmak).",
                az: "Data Scientist modeli **öyrədir** və analiz edir. AI Mühəndisi isə hazır modellərdən istifadə edərək **tətbiq hazırlayır**.",
                en: "Data Scientists **train** models and do math. AI Engineers **build apps** using pre-trained models (LLMs) like Chatbots."
            }
        },
        {
            id: 2,
            q: {
                tr: "Matematik bilmek zorunda mıyım?",
                az: "Riyaziyyat bilmək məcburiyyətindəyəm?",
                en: "Do I need math?"
            },
            a: {
                tr: "Model eğitmek (Training) için evet. Ancak sadece mevcut modelleri kullanmak (Prompting/API) için hayır, iyi kodlama ve sistem tasarımı yeterlidir.",
                az: "Model öyrətmək üçün bəli. Lakin hazır modelləri istifadə etmək üçün xeyr, yaxşı kodlama kifayətdir.",
                en: "For training models, yes. But for just using models (Prompting/API), no. Good coding skills are enough."
            }
        },
        {
            id: 3,
            q: {
                tr: "RAG (Retrieval-Augmented Generation) nedir?",
                az: "RAG nədir?",
                en: "What is RAG?"
            },
            a: {
                tr: "ChatGPT'nin bilmediği, size özel verileri (PDF, Şirket verisi) ona okutup, o veriler üzerinden cevap vermesini sağlayan tekniktir.",
                az: "ChatGPT-nin bilmədiyi şəxsi məlumatlarınızı (PDF, Wşirkət sənədləri) ona oxudub, o məlumatlar əsasında cavab verməsini təmin edən texnikadır.",
                en: "A technique where you feed your private data (PDFs, Company docs) to an LLM so it can answer questions based on that specific data."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "LLM (Büyük Dil Modelleri) uygulama geliştirme sürecinde 'RAG' (Retrieval-Augmented Generation) nedir?",
            az: "LLM tətbiqləri hazırlayarkən 'RAG' (Retrieval-Augmented Generation) nədir?",
            en: "What is RAG (Retrieval-Augmented Generation)?"
        },
        a: {
            tr: "Modelin eğitim verisinde olmayan güncel veya özel bilgileri, bir dış veri kaynağından (vektör veritabanı) çekerek yanıta dahil etmesi yöntemidir.",
            az: "Modelin təlim məlumatında olmayan aktual və ya özəl məlumatları xarici mənbədən (vektör bazası) taparaq cavaba daxil etməsi üsuludur.",
            en: "A technique to enhance LLM responses by retrieving relevant information from external data sources before generating an answer."
        }
    },
    {
        id: 2,
        q: {
            tr: "Vektör Veritabanı (Vector Database) ne işe yarar?",
            az: "Vektör Veritabanı (Vector Database) nə üçün istifadə olunur?",
            en: "What is the purpose of a Vector Database?"
        },
        a: {
            tr: "Metin, resim gibi verilerin 'embedding' (sayısal vektör) hallerini saklamak ve benzerlik araması (similarity search) yapmak için kullanılır.",
            az: "Mətn və ya şəkil kimi məlumatların 'embedding' (ədədi vektör) formalarını saxlamaq və oxşarlıq axtarışı etmək üçün istifadə olunur.",
            en: "Designed to store and query high-dimensional vector embeddings, enabling fast similarity searches in AI applications."
        }
    },
    {
        id: 3,
        q: {
            tr: "MLOps nedir?",
            az: "MLOps nədir?",
            en: "What is MLOps?"
        },
        a: {
            tr: "Makine öğrenmesi modellerinin geliştirme, dağıtım ve izleme süreçlerini otomatize eden disiplindir (DevOps'un ML versiyonu).",
            az: "Maşın öyrənməsi modellərinin hazırlanması, canlıya alınması (deployment) və izlənilməsi proseslərini avtomatlaşdıran intizamdır.",
            en: "The practice of combining Machine Learning and DevOps to automate the end-to-end lifecycle of ML models."
        }
    },
    {
        id: 4,
        q: {
            tr: "Fine-tuning ve Prompt Engineering farkı nedir?",
            az: "Fine-tuning və Prompt Engineering fərqi nədir?",
            en: "Difference between Fine-tuning and Prompt Engineering?"
        },
        a: {
            tr: "Fine-tuning, modelin ağırlıklarını yeni veriyle günceller. Prompt Engineering ise modelin ağırlıklarını değiştirmeden sadece girdiyi optimize eder.",
            az: "Fine-tuning modelin çəki əmsallarını yeni məlumatla yeniləyir. Prompt Engineering isə modeli dəyişmədən yalnız giriş mətni vasitəsilə nəticəni yaxşılaşdırır.",
            en: "Fine-tuning updates model weights with specific data. Prompt Engineering optimizes instructions to get better results without changing the model."
        }
    },
    {
        id: 5,
        q: {
            tr: "Quantization (Nicemleme) nedir?",
            az: "Quantization nədir?",
            en: "What is Model Quantization?"
        },
        a: {
            tr: "Modelin ağırlıklarını daha düşük bit hassasiyetine (örn: 32-bit'ten 8-bit'e) indirerek model boyutunu küçültme ve hızı artırma işlemidir.",
            az: "Modelin çəki əmsallarını daha aşağı bit səviyyəsinə (məs: 32-bitdən 8-bitə) endirərək ölçüsünü kiçiltmək və sürətini artırmaq prosesidir.",
            en: "Reducing the precision of a model's weights (e.g., from FP32 to INT8) to reduce size and increase inference speed."
        }
    },
    {
        id: 6,
        q: {
            tr: "Inference (Çıkarım) optimizasyonu nasıl yapılır?",
            az: "Inference (Nəticə çıxarma) optimallaşdırması necə edilir?",
            en: "How to optimize AI model inference?"
        },
        a: {
            tr: "Quantization, Pruning (budama), Knowledge Distillation ve ONNX gibi yüksek performanslı çalışma zamanları (runtimes) kullanılarak.",
            az: "Quantization, Pruning (budama), Knowledge Distillation və ONNX kimi yüksək performanslı mühitlərdən istifadə etməklə.",
            en: "Through quantization, pruning, knowledge distillation, and using optimized runtimes like ONNX or TensorRT."
        }
    },
    {
        id: 7,
        q: {
            tr: "Hallucination (Halüsinasyon) nedir ve nasıl önlenir?",
            az: "Hallucination (Halüsinasiya) nədir və necə qarşısı alınır?",
            en: "What is AI Hallucination and how to mitigate it?"
        },
        a: {
            tr: "Modelin yanlış veya uydurma bilgiler üretmesidir. RAG kullanımı, sistem komutlarının sıkılaştırılması ve 'Temperature' ayarının düşürülmesiyle azaltılabilir.",
            az: "Modelin yanlış və ya uydurma məlumatlar verməsidir. RAG istifadəsi, sistem təlimatlarının dəqiqləşdirilməsi və 'Temperature' dəyərinin azaldılması ilə qarşısı alınır.",
            en: "When an AI generates false or illogical information. Can be mitigated using RAG, ground truth data, and lower temperature settings."
        }
    },
    {
        id: 8,
        q: {
            tr: "AI Agent (Ajan) nedir?",
            az: "AI Agent (Agent) nədir?",
            en: "What is an AI Agent?"
        },
        a: {
            tr: "Sadece metin üretmekle kalmayan, araçlar (web araması, kod çalıştırma) kullanarak belirli bir görevi bağımsızca yerine getiren sistemdir.",
            az: "Yalnız mətn yaratmaqla kifayətlənməyən, alətlərdən (internet axtarışı, kod icrası) istifadə edərək müəyyən tapşırığı müstəqil yerinə yetirən sistemdir.",
            en: "An autonomous system that uses an LLM to reason, use tools, and take actions to achieve a specific goal."
        }
    },
    {
        id: 9,
        q: {
            tr: "Vector Embedding nedir?",
            az: "Vector Embedding nədir?",
            en: "What is a Vector Embedding?"
        },
        a: {
            tr: "Kelimelerin veya verilerin, makinelerin anlayabileceği anlamlı sayısal listelere (vektörlere) dönüştürülmüş halidir.",
            az: "Sözlərin və ya məlumatların maşınların anlaya biləcəyi mənalı ədədi siyahılara (vektörlərə) çevrilmiş formasıdır.",
            en: "A numerical representation of data (like text or images) that captures its semantic meaning in a high-dimensional space."
        }
    },
    {
        id: 10,
        q: {
            tr: "Tokenization nedir?",
            az: "Tokenization nədir?",
            en: "What is Tokenization?"
        },
        a: {
            tr: "Ham metnin, model tarafından işlenebilecek daha küçük parçalara (kelime veya karakter grupları) bölünmesi işlemidir.",
            az: "Xam mətnin model tərəfindən emal edilə biləcək daha kiçik hissələrə (tokenlərə) bölünməsi prosesidir.",
            en: "The process of breaking down text into smaller units (tokens) like words or subwords that an AI model can process."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "PDF Soru-Cevap Botu (RAG)", 
            az: "PDF Sual-Cavab Botu (RAG)", 
            en: "PDF Question-Answering Bot (RAG)" 
        },
        desc: { 
            tr: "Yüklenen PDF dosyalarını analiz eden ve içeriğe göre soruları yanıtlayan AI uygulaması.", 
            az: "Yüklənən PDF fayllarını analiz edən və məzmuna uyğun sualları cavablandıran AI tətbiqi.", 
            en: "An AI application that analyzes uploaded PDF files and answers questions based on the content." 
        },
        tech: ["LangChain", "OpenAI/Llama-3", "ChromaDB/Pinecone", "Streamlit"],
        features: { 
            tr: ["Vektör veritabanı entegrasyonu", "Mevcut döküman üzerinden çıkarım", "Basit UI arayüzü"], 
            az: ["Vektör verilənlər bazası inteqrasiyası", "Mövcud sənəd üzərindən nəticə çıxarma", "Sadə UI interfeysi"], 
            en: ["Vector database integration", "Retrieval-Augmented Generation", "Simple UI interface"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "Otonom AI Ajanı (Tools & Function Calling)", 
            az: "Avtonom AI Agenti (Alətlər və Funksiya Çağırışları)", 
            en: "Autonomous AI Agent" 
        },
        desc: { 
            tr: "Belirli görevleri yerine getirmek için dış araçları (Google Search, Python Interpreter) kullanabilen ajan.", 
            az: "Müəyyən tapşırıqları yerinə yetirmək üçün xarici alətlərdən (Google Search, Python Interpreter) istifadə edə bilən agent.", 
            en: "An agent that can use external tools (Google Search, Python Interpreter) to perform complex tasks autonomously." 
        },
        tech: ["LangGraph/CrewAI", "Function Calling", "FastAPI", "PostgreSQL"],
        features: { 
            tr: ["Çok adımlı akıl yürütme", "API entegrasyonları", "Oturum bazlı bellek yönetimi"], 
            az: ["Çoxmərhələli mühakimə (reasoning)", "API inteqrasiyaları", "Sessiya əsaslı yaddaş idarəetməsi"], 
            en: ["Multi-step reasoning", "API tool integrations", "Session-based memory management"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "Ölçeklenebilir LLM İşletim Hattı (vLLM & Monitoring)", 
            az: "Ölçəklənə bilən LLM Emal Xətti (vLLM və Monitorinq)", 
            en: "Scalable LLM Inference Pipeline" 
        },
        desc: { 
            tr: "Açık kaynaklı modelleri yüksek performansla sunan ve kullanım metriklerini izleyen altyapı.", 
            az: "Açıq mənbəli modelləri (Llama/Mistral) yüksək performansla təqdim edən və metrikaları izləyən infrastruktur.", 
            en: "Infrastructure that serves open-source models with high performance and monitors usage metrics." 
        },
        tech: ["vLLM/TGI", "Docker/Kubernetes", "Prometheus/Grafana", "LangSmith"],
        features: { 
            tr: ["Düşük gecikmeli (low-latency) çıkarım", "Model Quantization (GGUF/AWQ)", "Hallucination izleme sistemi"], 
            az: ["Aşağı gecikməli (low-latency) nəticə çıxarma", "Model Quantization", "Hallucinasiya izləmə sistemi"], 
            en: ["Low-latency inference", "Model Quantization", "Hallucination monitoring"] 
        }
    }
]
};

contentData['network'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Giriş ve Terimler", items: ["Ağ (Network) Nedir?", "Domain (Alan Adı)", "Hosting & Sunucu", "Subdomain", "NS (Name Server)"], status: "start" },
            { title: "Ağ Donanımları", items: ["NIC (Ağ Kartı)", "Switch (Anahtar)", "Modem & Router", "Hub & Bridge", "Firewall (Güvenlik Duvarı)"], status: "start" },
            { title: "Ağ Türleri (Topology)", items: ["LAN (Yerel Ağ)", "MAN (Metropol Ağı)", "WAN (Geniş Ağ)", "WLAN (Kablosuz)"], status: "mid" },
            { title: "Protokoller ve Modeller", items: ["OSI Modeli (7 Katman)", "TCP/IP Mimarisi", "DNS Çalışma Mantığı", "Portlar (80, 443, 22)"], status: "mid" },
            { title: "İletim ve Adresleme", items: ["IP Adresleme (v4/v6)", "Network ID & Host ID", "Unicast / Multicast / Broadcast", "Subnetting"], status: "advanced" },
            { title: "Ağ Servisleri", items: ["DHCP (Otomatik IP)", "NAT (Ağ Adres Çevirimi)", "VPN & Tunneling", "Proxy & Reverse Proxy"], status: "advanced" },
            { title: "İleri Seviye", items: ["VLAN (Sanal Ağlar)", "SD-WAN", "Load Balancing", "Network Security (IDS/IPS)"], status: "expert" }
        ],
        az: [
            { title: "Giriş və Terminlər", items: ["Şəbəkə Nədir?", "Domen & Hostinq", "Subdomain", "NS (Name Server)"], status: "start" },
            { title: "Şəbəkə Avadanlıqları", items: ["NIC (Şəbəkə Kartı)", "Switch", "Modem & Router", "Hub & Bridge", "Firewall"], status: "start" },
            { title: "Şəbəkə Növləri", items: ["LAN (Yerli)", "MAN (Şəhər)", "WAN (Qlobal)", "WLAN (Simsiz)"], status: "mid" },
            { title: "Protokollar və Modellər", items: ["OSI Modeli (7 Qat)", "TCP/IP", "DNS Məntiqi", "Portlar"], status: "mid" },
            { title: "Ötürmə və Ünvanlama", items: ["IP Ünvanlama", "Network ID & Host ID", "Unicast / Multicast", "Subnetting"], status: "advanced" },
            { title: "Şəbəkə Servisləri", items: ["DHCP", "NAT", "VPN", "Proxy"], status: "advanced" },
            { title: "İrəli Səviyyə", items: ["VLAN", "SD-WAN", "Yük Balanslaşdırma", "Şəbəkə Təhlükəsizliyi"], status: "expert" }
        ],
        en: [
            { title: "Intro & Terms", items: ["What is Network?", "Domain & Hosting", "Subdomain", "Name Server (NS)"], status: "start" },
            { title: "Network Hardware", items: ["NIC (Network Card)", "Switch", "Modem & Router", "Hub & Bridge", "Firewall"], status: "start" },
            { title: "Network Types", items: ["LAN (Local Area)", "MAN (Metro Area)", "WAN (Wide Area)", "WLAN (Wireless)"], status: "mid" },
            { title: "Protocols & Models", items: ["OSI Model (7 Layers)", "TCP/IP Architecture", "DNS Logic", "Ports"], status: "mid" },
            { title: "Transmission & Addressing", items: ["IP Addressing", "Network ID & Host ID", "Unicast / Multicast", "Subnetting"], status: "advanced" },
            { title: "Network Services", items: ["DHCP", "NAT", "VPN", "Proxy"], status: "advanced" },
            { title: "Advanced Topics", items: ["VLAN", "SD-WAN", "Load Balancing", "Network Security"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // User Resources
            { type: 'doc', title: 'NS (Name Server) Nedir?', url: 'https://isimkayit.com/index.php/knowledgebase/166/NS-Name-Server-Nedir.html', desc: 'Aradaki bağlantıyı kuran sunucular hakkında bilgi.', lang: 'tr' },
            { type: 'doc', title: 'Bridge (Köprü) Nedir?', url: 'http://yusufgokkaya.com/en/active-directory-nedir/', desc: 'Ağ köprüleme mantığı üzerine detaylı yazı.', lang: 'tr' },
            { type: 'doc', title: 'Hub Nedir?', url: 'https://www.geeksforgeeks.org/basics-computer-networking/', desc: 'Ağ temelleri ve donanımlar hakkında İngilizce kaynak.', lang: 'en' },
            { type: 'doc', title: 'OSI Katmanları', url: 'https://bidb.itu.edu.tr/seyir-defteri/blog/2013/09/07/osi-katmanlar%C4%B1', desc: 'İTÜ Bilgi İşlem Daire Başkanlığından OSI modeli anlatımı.', lang: 'tr' },
            { type: 'doc', title: 'Port Numaraları', url: 'https://tr.wikipedia.org/wiki/TCP_ve_UDP_ba%C4%9flant%C4%B1_noktas%C4%B1_numaralar%C4%B1_listesi', desc: 'Hangi uygulama hangi portu kullanır listesi.', lang: 'tr' },
            { type: 'doc', title: 'IP Sınıf Aralıkları', url: 'https://www.ugureskici.com/notlarim-makalelerim/ip-sinif-araliklari', desc: 'IP v4 sınıfları ve aralıkları tablosu.', lang: 'tr' },

            // YouTube Playlists
            { type: 'youtube', title: 'IBM Technology', url: 'https://youtube.com/playlist?list=PLOspHqNVtKAA_5N3pI49wkH4WsTkeZ_iQ', desc: 'IBM tarafından hazırlanan kapsamlı ağ temelleri eğitimi.', lang: 'en' },
            { type: 'youtube', title: 'NetworkChuck CCNA', url: 'https://youtu.be/pDn2u65rQbQ', desc: 'Network öğrenmenin en eğlenceli yolu. Mutlaka izleyin.', lang: 'en' },
            { type: 'youtube', title: 'Fırat Boyan', url: 'https://www.firatboyan.com/ip-ve-subnetting-kavrami.aspx', desc: 'IP ve Subnetting kavramı üzerine Türkçe teknik makale.', lang: 'tr' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "ISP Firmaları (Türk Telekom, Superonline)"],
            top_skills: ["Cisco (CCNA/CCNP)", "Fortinet", "TCP/IP", "Linux Admin", "VoIP"],
            avg_salary: "Junior: 35k-50k TL | Mid: 70k-100k TL | Senior: 130k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bakcell / Azercell"],
            top_skills: ["Network Admin", "Cisco", "MikroTik", "VPN Config"],
            avg_salary: "Junior: 900-1400 AZN | Mid: 2000-3000 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["LinkedIn", "Dice", "Field Engineer"],
            top_skills: ["CCIE", "Juniper", "Arista", "Network Automation (Python)"],
            avg_salary: "Junior: $4k-$6k | Mid: $8k-$12k | Senior: $15k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Switch ve Hub farkı nedir?",
                az: "Switch ilə Hub fərqi nədir?",
                en: "Difference between Switch and Hub?"
            },
            a: {
                tr: "Hub 'aptaldır'; gelen veriyi herkese yollar (Broadcast), trafiği şişirir. Switch 'akıllıdır'; MAC adreslerini öğrenir ve veriyi sadece hedef cihaza yollar (Unicast).",
                az: "Hub 'axmaqdır'; gələn məlumatı hamıya göndərir. Switch 'ağıllıdır'; MAC ünvanlarını öyrənir və məlumatı yalnız hədəf cihaza göndərir.",
                en: "Hub is 'dumb'; it broadcasts data to everyone. Switch is 'smart'; it learns MAC addresses and sends data only to the target device."
            }
        },
        {
            id: 2,
            q: {
                tr: "OSI Modeli nedir, neden bilmeliyim?",
                az: "OSI Modeli nədir, niyə bilməliyəm?",
                en: "What is OSI Model and why learn it?"
            },
            a: {
                tr: "Ağ iletişimini 7 katmana bölen standarttır (Fiziksel -> Uygulama). Bir sorun olduğunda (örn: internet yok), sorunun kabloda mı (L1), IP'de mi (L3) yoksa tarayıcıda mı (L7) olduğunu anlamanızı sağlar.",
                az: "Şəbəkə əlaqəsini 7 qata bölən standartdır. Problem olanda problemin kabellə (L1), IP ilə (L3) yoxsa brauzerlə (L7) əlaqəli olduğunu anlamağa kömək edir.",
                en: "It's a standard dividing network communication into 7 layers. It helps diagnose usage issues: is it the cable (L1), IP (L3), or browser (L7)?"
            }
        },
        {
            id: 3,
            q: {
                tr: "DNS ve DHCP nedir?",
                az: "DNS və DHCP nədir?",
                en: "What are DNS and DHCP?"
            },
            a: {
                tr: "DNS 'Telefon Rehberi'dir; 'google.com' ismini '142.250.xxx' IP adresine çevirir. DHCP ise ağa bağlanan cihazlara otomatik IP adresi dağıtan servistir.",
                az: "DNS 'Telefon Kitabçası'dır; adları IP ünvanlarına çevirir. DHCP isə cihazlara avtomatik IP paylayan servisdir.",
                en: "DNS is the 'Phonebook'; translates names to IPs. DHCP assigns automatic IP addresses to devices joining the network."
            }
        },
        {
            id: 4,
            q: {
                tr: "NAT (Network Address Translation) ne işe yarar?",
                az: "NAT nə işə yarayır?",
                en: "What does NAT do?"
            },
            a: {
                tr: "Evdeki 10 cihazın internete tek bir 'Public IP' üzerinden çıkmasını sağlar. İç ağdaki (Private) IP'leri dış ağdaki (Public) IP'ye dönüştürür. IPv4 tükenmesini geciktirir.",
                az: "Evdəki 10 cihazın internetə tək bir 'Public IP' üzərindən çıxmasını təmin edir. Daxili IP-ləri xarici IP-yə çevirir.",
                en: "Allows multiple local devices to access the internet via a single Public IP. Maps Private IPs to Public IPs."
            }
        },
        {
            id: 5,
            q: {
                tr: "Firewall (Güvenlik Duvarı) nasıl çalışır?",
                az: "Firewall necə işləyir?",
                en: "How does a Firewall work?"
            },
            a: {
                tr: "Gelen ve giden paketleri inceler. İçinde zararlı içerik varsa veya kurallara uymuyorsa (örn: Port 80 kapalıysa) paketi bloklar. Donanımsal veya yazılımsal olabilir.",
                az: "Gələn və gedən paketləri yoxlayır. Zərərli məzmun varsa və ya qaydalara uyğun gəlmirsə bloka atır.",
                en: "Inspects incoming/outgoing packets. Blocks them if they contain threats or violate rules (e.g., closed ports)."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "OSI Modeli katmanları nelerdir?",
            az: "OSI Modelinin təbəqələri hansılardır?",
            en: "What are the layers of the OSI Model?"
        },
        a: {
            tr: "7 katmandan oluşur: Physical, Data Link, Network, Transport, Session, Presentation, Application. Veri iletimini standartlaştırmak için kullanılır.",
            az: "7 təbəqədən ibarətdir: Physical, Data Link, Network, Transport, Session, Presentation, Application. Məlumat ötürülməsini standartlaşdırmaq üçündür.",
            en: "It consists of 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. It standardizes communication functions."
        }
    },
    {
        id: 2,
        q: {
            tr: "Switch ve Router arasındaki fark nedir?",
            az: "Switch və Router arasındakı fərq nədir?",
            en: "Difference between a Switch and a Router?"
        },
        a: {
            tr: "Switch, aynı yerel ağdaki (LAN) cihazları MAC adresleriyle bağlar. Router, farklı ağları IP adresleri üzerinden birbirine bağlar.",
            az: "Switch, eyni yerli şəbəkədəki (LAN) cihazları MAC ünvanları ilə birləşdirir. Router isə fərqli şəbəkələri IP ünvanları vasitəsilə bir-birinə bağlayır.",
            en: "A Switch connects devices within the same LAN using MAC addresses. A Router connects different networks together using IP addresses."
        }
    },
    {
        id: 3,
        q: {
            tr: "VLAN nedir ve neden kullanılır?",
            az: "VLAN nədir və nə üçün istifadə olunur?",
            en: "What is VLAN and why is it used?"
        },
        a: {
            tr: "Fiziksel bir ağı mantıksal olarak alt ağlara bölmektir. Güvenliği artırır, broadcast trafiğini azaltır ve yönetimi kolaylaştırır.",
            az: "Fiziki bir şəbəkəni məntiqli olaraq alt şəbəkələrə bölməkdir. Təhlükəsizliyi artırır, broadcast trafikini azaldır və idarəetməni asanlaşdırır.",
            en: "Virtual Local Area Network. It logically segments a physical network into subnets to improve security, reduce broadcast traffic, and ease management."
        }
    },
    {
        id: 4,
        q: {
            tr: "TCP ve UDP arasındaki temel farklar?",
            az: "TCP və UDP arasındakı əsas fərqlər?",
            en: "Main differences between TCP and UDP?"
        },
        a: {
            tr: "TCP bağlantı tabanlıdır, veri iletimini garanti eder (Web). UDP bağlantısızdır, daha hızlıdır ama veri kaybı olabilir (Streaming/Gaming).",
            az: "TCP bağlantı əsaslıdır, məlumatın çatdırılmasına zəmanət verir. UDP isə bağlantısızdır, daha sürətlidir amma məlumat itkisi ola bilər (Video/Oyun).",
            en: "TCP is connection-oriented and reliable (guarantees delivery). UDP is connectionless and faster but doesn't guarantee delivery."
        }
    },
    {
        id: 5,
        q: {
            tr: "DNS (Domain Name System) nasıl çalışır?",
            az: "DNS (Domain Name System) necə işləyir?",
            en: "How does DNS work?"
        },
        a: {
            tr: "İnsanların okuyabildiği alan adlarını (google.com) makinelerin anlayabildiği IP adreslerine (142.250.x.x) dönüştürür.",
            az: "İnsanların oxuya bildiyi domen adlarını (google.com) maşınların anladığı IP ünvanlarına (142.250.x.x) çevirir.",
            en: "It translates human-readable domain names (like google.com) into machine-readable IP addresses."
        }
    },
    {
        id: 6,
        q: {
            tr: "Subnetting (Alt Ağlara Bölme) nedir?",
            az: "Subnetting nədir?",
            en: "What is Subnetting?"
        },
        a: {
            tr: "Büyük bir IP ağını daha küçük, yönetilebilir parçalara bölme işlemidir. IP adreslerinin israfını önler.",
            az: "Böyük bir IP şəbəkəsini daha kiçik, idarə oluna bilən hissələrə bölmək prosesidir. IP ünvanlarının israfının qarşısını alır.",
            en: "The process of dividing a large IP network into smaller, manageable sub-networks to optimize IP address usage."
        }
    },
    {
        id: 7,
        q: {
            tr: "Default Gateway (Varsayılan Ağ Geçidi) nedir?",
            az: "Default Gateway nədir?",
            en: "What is a Default Gateway?"
        },
        a: {
            tr: "Bir cihazın kendi yerel ağında olmayan bir adrese paket göndermek istediğinde kullandığı çıkış noktasıdır (genellikle router).",
            az: "Bir cihazın öz yerli şəbəkəsində olmayan bir ünvana paket göndərmək istədikdə istifadə etdiyi çıxış nöqtəsidir (adətən router).",
            en: "The access point or IP address that a device uses to send information to a destination outside its own local network."
        }
    },
    {
        id: 8,
        q: {
            tr: "DHCP (Dynamic Host Configuration Protocol) nedir?",
            az: "DHCP nədir?",
            en: "What is DHCP?"
        },
        a: {
            tr: "Ağdaki cihazlara otomatik olarak IP adresi, subnet mask ve gateway gibi bilgileri atayan protokoldür.",
            az: "Şəbəkədəki cihazlara avtomatik olaraq IP ünvanı, subnet mask və gateway kimi məlumatları təyin edən protokoldur.",
            en: "A protocol that automatically assigns IP addresses and other network configuration parameters to devices on a network."
        }
    },
    {
        id: 9,
        q: {
            tr: "NAT (Network Address Translation) neden kullanılır?",
            az: "NAT nə üçün istifadə olunur?",
            en: "Why is NAT used?"
        },
        a: {
            tr: "Özel (Private) IP adreslerini genel (Public) IP adreslerine dönüştürür. IPv4 yetersizliğini gidermek ve güvenliği artırmak için kullanılır.",
            az: "Daxili (Private) IP ünvanlarını xarici (Public) IP ünvanlarına çevirir. IPv4 qıtlığını həll etmək və təhlükəsizlik üçün istifadə olunur.",
            en: "It translates private IP addresses to public ones, allowing multiple devices to share a single public IP and enhancing security."
        }
    },
    {
        id: 10,
        q: {
            tr: "ICMP protokolü ne işe yarar?",
            az: "ICMP protokolu nə işə yarayır?",
            en: "What is the purpose of the ICMP protocol?"
        },
        a: {
            tr: "Ağ cihazları arasındaki hata mesajlarını ve operasyonel bilgileri iletir. 'Ping' ve 'Traceroute' komutları ICMP kullanır.",
            az: "Şəbəkə cihazları arasındakı xəta mesajlarını və əməliyyat məlumatlarını ötürür. 'Ping' və 'Traceroute' əmrləri ICMP-dən istifadə edir.",
            en: "Used by network devices to send error messages and operational information. 'Ping' and 'Traceroute' rely on ICMP."
        }
    },
    {
        id: 11,
        q: {
            tr: "MAC Adresi ve IP Adresi farkı?",
            az: "MAC ünvanı və IP ünvanı fərqi?",
            en: "Difference between MAC address and IP address?"
        },
        a: {
            tr: "MAC adresi donanımsaldır (L2) ve değiştirilemez. IP adresi mantıksaldır (L3) ve cihazın ağdaki konumuna göre değişebilir.",
            az: "MAC ünvanı fiziki qurğuya aiddir (L2) və dəyişmir. IP ünvanı isə məntiqlidir (L3) və cihazın şəbəkədəki yerinə görə dəyişə bilər.",
            en: "MAC address is a permanent hardware ID (Layer 2). IP address is a logical address (Layer 3) assigned based on network location."
        }
    },
    {
        id: 12,
        q: {
            tr: "ARP (Address Resolution Protocol) nedir?",
            az: "ARP nədir?",
            en: "What is ARP?"
        },
        a: {
            tr: "Bilinen bir IP adresine karşılık gelen fiziksel MAC adresini bulmak için kullanılır.",
            az: "Məlum olan bir IP ünvanına uyğun gələn fiziki MAC ünvanını tapmaq üçün istifadə olunur.",
            en: "It maps a known IP address to a physical MAC address on a local area network."
        }
    },
    {
        id: 13,
        q: {
            tr: "VPN (Virtual Private Network) nasıl çalışır?",
            az: "VPN necə işləyir?",
            en: "How does a VPN work?"
        },
        a: {
            tr: "Genel internet üzerinden şifreli, güvenli bir tünel oluşturarak iki nokta arasında özel bir ağ kurar.",
            az: "İnternet üzərindən şifrəli və təhlükəsiz bir tunel yaradaraq iki nöqtə arasında özəl şəbəkə bağlantısı qurur.",
            en: "It creates an encrypted, secure tunnel over the public internet to establish a private network connection between points."
        }
    },
    {
        id: 14,
        q: {
            tr: "Firewall (Güvenlik Duvarı) nedir?",
            az: "Firewall nədir?",
            en: "What is a Firewall?"
        },
        a: {
            tr: "Önceden belirlenmiş güvenlik kurallarına göre gelen ve giden ağ trafiğini izleyen ve filtreleyen sistemdir.",
            az: "Əvvəlcədən təyin edilmiş qaydalara əsasən gələn və gedən şəbəkə trafikini izləyən və süzgəcdən keçirən sistemdir.",
            en: "A security system that monitors and filters incoming and outgoing network traffic based on predetermined security rules."
        }
    },
    {
        id: 15,
        q: {
            tr: "Static ve Dynamic Routing farkı?",
            az: "Statik və Dinamik Routing fərqi?",
            en: "Difference between Static and Dynamic Routing?"
        },
        a: {
            tr: "Statik rotalar el ile girilir. Dinamik rotalar (OSPF, BGP gibi) protokoller aracılığıyla ağdaki değişikliklere göre otomatik güncellenir.",
            az: "Statik marşrutlar əllə daxil edilir. Dinamik marşrutlar (OSPF, BGP) isə protokollar vasitəsilə avtomatik olaraq yenilənir.",
            en: "Static routes are manually configured. Dynamic routes (like OSPF or BGP) use protocols to automatically adapt to network changes."
        }
    },
    {
        id: 16,
        q: {
            tr: "STP (Spanning Tree Protocol) neden önemlidir?",
            az: "STP (Spanning Tree Protocol) niyə vacibdir?",
            en: "Why is STP important?"
        },
        a: {
            tr: "Switch'ler arasındaki yedekli bağlantılarda oluşabilecek 'loop' (döngü) durumlarını engelleyerek ağın çökmesini önler.",
            az: "Switch-lər arasındakı artıq bağlantılarda yarana biləcək 'loop' (döngü) hallarının qarşısını alaraq şəbəkənin çökməsini önləyir.",
            en: "It prevents network loops in redundant switch connections by blocking specific paths, ensuring a loop-free topology."
        }
    },
    {
        id: 17,
        q: {
            tr: "BGP (Border Gateway Protocol) nedir?",
            az: "BGP nədir?",
            en: "What is BGP?"
        },
        a: {
            tr: "İnternetin ana yönlendirme protokolüdür. Farklı Otonom Sistemler (AS) arasında yönlendirme bilgisi alışverişi yapar.",
            az: "İnternetin əsas yönləndirmə protokoludur. Fərqli Avtonom Sistemlər (AS) arasında marşrut məlumatlarını mübadilə edir.",
            en: "The routing protocol of the internet. It exchanges routing information between different Autonomous Systems (AS)."
        }
    },
    {
        id: 18,
        q: {
            tr: "Ping ve Traceroute farkı nedir?",
            az: "Ping və Traceroute fərqi nədir?",
            en: "Difference between Ping and Traceroute?"
        },
        a: {
            tr: "Ping, bir cihazın erişilebilir olup olmadığını ve gecikmeyi ölçer. Traceroute, paketin hedefe giderken geçtiği tüm durakları (hop) gösterir.",
            az: "Ping, cihazın əlçatatan olub-olmadığını yoxlayır. Traceroute isə paketin hədəfə gedərkən keçdiyi bütün nöqtələri (hop) göstərir.",
            en: "Ping checks reachability and latency. Traceroute shows the entire path (hops) a packet takes to reach a destination."
        }
    },
    {
        id: 19,
        q: {
            tr: "MTU (Maximum Transmission Unit) nedir?",
            az: "MTU nədir?",
            en: "What is MTU?"
        },
        a: {
            tr: "Bir ağ bağlantısı üzerinden bir seferde iletilebilecek en büyük veri paketinin boyutudur (genellikle 1500 byte).",
            az: "Şəbəkə bağlantısı vasitəsilə bir dəfəyə ötürülə bilən ən böyük paket ölçüsüdür (adətən 1500 bayt).",
            en: "The size of the largest protocol data unit (PDU) that can be communicated in a single network layer transaction."
        }
    },
    {
        id: 20,
        q: {
            tr: "DoS ve DDoS saldırısı nedir?",
            az: "DoS və DDoS hücumu nədir?",
            en: "What is a DoS and DDoS attack?"
        },
        a: {
            tr: "Bir sistemi aşırı trafikle boğarak erişilemez hale getirmektir. DDoS'ta bu saldırı çok sayıda farklı kaynaktan aynı anda yapılır.",
            az: "Bir sistemi həddindən artıq trafiklə yükləyərək sıradan çıxarmaqdır. DDoS-da bu hücum eyni anda çox sayda fərqli mənbədən edilir.",
            en: "An attempt to make a system unavailable by flooding it with traffic. DDoS uses multiple compromised sources to launch the attack."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "Küçük Ofis (SOHO) Ağ Tasarımı", 
            az: "Kiçik Ofis (SOHO) Şəbəkə Dizaynı", 
            en: "Small Office (SOHO) Network Design" 
        },
        desc: { 
            tr: "Cisco Packet Tracer üzerinde güvenli ve ölçeklenebilir bir ofis altyapısı simülasyonu.", 
            az: "Cisco Packet Tracer üzərində təhlükəsiz və miqyaslana bilən ofis infrastrukturu simulyasiyası.", 
            en: "A secure and scalable office infrastructure simulation using Cisco Packet Tracer." 
        },
        tech: ["Cisco Packet Tracer", "Static Routing", "VLANs", "DHCP/DNS"],
        features: { 
            tr: ["VLAN ile departman ayrımı", "WPA2 şifreli kablosuz ağ", "Temel Firewall kuralları"], 
            az: ["VLAN ilə departament bölgüsü", "WPA2 şifrəli simsiz şəbəkə", "Təməl Firewall qaydaları"], 
            en: ["Department segmentation via VLANs", "WPA2 wireless security", "Basic Firewall ACLs"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "Kurumsal Kampüs Ağı (Enterprise)", 
            az: "Korporativ Kampus Şəbəkəsi", 
            en: "Enterprise Campus Network" 
        },
        desc: { 
            tr: "GNS3 veya EVE-NG kullanarak çok lokasyonlu, yedekli bir kurumsal ağ yapısı.", 
            az: "GNS3 və ya EVE-NG istifadə edərək çox lokasiyalı və yedəkli korporativ şəbəkə quruluşu.", 
            en: "A multi-site, redundant enterprise network structure using GNS3 or EVE-NG." 
        },
        tech: ["OSPF/EIGRP", "EtherChannel", "HSRP/VRRP", "VPN (IPsec)"],
        features: { 
            tr: ["Yedekli Gateway (High Availability)", "Şubeler arası site-to-site VPN", "Dinamik yönlendirme protokolleri"], 
            az: ["Yedəkli Gateway (Yüksək əlçatanlıq)", "Filiallar arası IPsec VPN", "Dinamik yönləndirmə protokolları"], 
            en: ["Gateway redundancy (HA)", "Site-to-site IPsec VPN", "Dynamic routing optimization"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "SDN ve Ağ Otomasyonu", 
            az: "SDN və Şəbəkə Avtomatlaşdırılması", 
            en: "SDN and Network Automation" 
        },
        desc: { 
            tr: "Yüzlerce cihazın konfigürasyonunu kodla yöneten ve izleyen otomasyon sistemi.", 
            az: "Yüzlərlə cihazın konfiqurasiyasını kodla idarə edən və izləyən avtomatlaşdırma sistemi.", 
            en: "An automation system that manages and monitors configurations for hundreds of devices via code." 
        },
        tech: ["Python (Netmiko/Nornir)", "Ansible", "Docker", "SNMP/Zabbix"],
        features: { 
            tr: ["Otomatik yedekleme ve raporlama", "ZTP (Zero Touch Provisioning)", "Anomali tespiti ve uyarı sistemi"], 
            az: ["Avtomatik backup və hesabat", "ZTP (Zero Touch Provisioning)", "Anomaliya tespiti və xəbərdarlıq"], 
            en: ["Automated backups & reporting", "Zero Touch Provisioning (ZTP)", "Anomaly detection & alerting"] 
        }
    }
]
};

contentData['game-programming'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Temeller", items: ["Algoritma Mantığı", "Temel Matematik (Vektörler/Trigonometri)", "C# veya C++ Dili", "Git Versiyon Kontrol"], status: "start" },
            { title: "Oyun Motoru Seçimi", items: ["Unity (Mobil/Indie için ideal)", "Unreal Engine (AAA/Gerçekçi Grafikler)", "Godot (Açık Kaynak)", "Editör Arayüzü"], status: "start" },
            { title: "Oyun Döngüsü & Fizik", items: ["Game Loop (Update/Start)", "Rigidbody & Colliders", "Input Sistemleri", "Hareket Mekanikleri"], status: "mid" },
            { title: "Görsel & Ses", items: ["Sprite (2D) & Mesh (3D)", "Animasyon Sistemleri", "Işıklandırma & Gölgeler", "Ses Efektleri (SFX)"], status: "mid" },
            { title: "Tasarım Desenleri", items: ["Singleton", "Observer", "Object Pooling (Performans için)", "State Machine"], status: "advanced" },
            { title: "İleri Seviye Konular", items: ["Shader Graph / HLSL", "Multiplayer (Photon/Mirror)", "Yapay Zeka (NavMesh/Behavior Trees)", "Mobil Optimizasyon"], status: "expert" },
            { title: "Yayınlama & Gelir", items: ["Google Play / App Store", "Steam Yayıncılığı", "Monetization (Reklam/IAP)", "Analytics"], status: "expert" }
        ],
        az: [
            { title: "Təməllər", items: ["Alqoritm Məntiqi", "Riyaziyyat (Vektorlar)", "C# və ya C++", "Git Versiya Nəzarəti"], status: "start" },
            { title: "Oyun Mühərriki Seçimi", items: ["Unity (Mobil/Indie)", "Unreal Engine (AAA)", "Godot", "Redaktor İnterfeysi"], status: "start" },
            { title: "Oyun Dövrü & Fizika", items: ["Game Loop", "Rigidbody & Toqquşmalar", "Giriş (Input) Sistemləri", "Hərəkət Mexanikası"], status: "mid" },
            { title: "Vizual & Səs", items: ["Sprite (2D) & Mesh (3D)", "Animasiya Sistemləri", "İşıqlandırma", "Səs Effektləri"], status: "mid" },
            { title: "Dizayn Nümunələri", items: ["Singleton", "Observer", "Object Pooling", "State Machine"], status: "advanced" },
            { title: "İrəli Səviyyə Mövzular", items: ["Shaderlər", "Çox Oyunçulu (Multiplayer)", "Süni İntellekt (AI)", "Mobil Optimizasiya"], status: "expert" },
            { title: "Yayımlama & Gəlir", items: ["Google Play / App Store", "Steam", "Monetizasiya (Reklam)", "Analitika"], status: "expert" }
        ],
        en: [
            { title: "Foundations", items: ["Programming Logic", "Math (Vectors/Trig)", "C# or C++ Basics", "Git Version Control"], status: "start" },
            { title: "Engine Selection", items: ["Unity (Mobile/Indie)", "Unreal Engine (AAA)", "Godot (Open Source)", "Editor Basics"], status: "start" },
            { title: "Game Loop & Physics", items: ["Update/Start Methods", "Collision Detection", "Input Systems", "Movement Mechanics"], status: "mid" },
            { title: "Graphics & Audio", items: ["Sprites & Meshes", "Animation Controllers", "Lighting & Shadows", "Audio Management"], status: "mid" },
            { title: "Design Patterns", items: ["Singleton", "Observer", "Object Pooling", "Finite State Machines"], status: "advanced" },
            { title: "Advanced Topics", items: ["Shader Programming", "Networking (Multiplayer)", "Game AI (NavMesh)", "Optimization"], status: "expert" },
            { title: "Publishing & Biz", items: ["App Store/Play Store", "Steam Publishing", "Monetization (Ads/IAP)", "Analytics"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'Brackeys', url: 'https://youtube.com/@Brackeys', desc: 'Unity geliştirmenin efsanesi. Kanal durdu ama arşiv hala altın değerinde.', lang: 'en' },
            { type: 'youtube', title: 'Code Monkey', url: 'https://youtube.com/@CodeMonkeyUnity', desc: 'Temiz kod ve profesyonel Unity mimarisi üzerine harika dersler.', lang: 'en' },
            { type: 'youtube', title: 'Unreal Sensei', url: 'https://youtube.com/@UnrealSensei', desc: 'Unreal Engine 5 ve Blueprints öğrenmek için en iyi kaynaklardan biri.', lang: 'en' },
            { type: 'youtube', title: 'Sercan Altun', url: 'https://youtube.com/@SercanAltun', desc: 'Türkçe Unity ve Hyper-casual oyun geliştirme üzerine pratik içerikler.', lang: 'tr' },

            // Documentation & Tools
            { type: 'doc', title: 'Unity Learn', url: 'https://learn.unity.com', desc: 'Unity\'nin kendi hazırladığı ücretsiz, sertifikalı eğitim platformu.', lang: 'en' },
            { type: 'doc', title: 'Unreal Engine Docs', url: 'https://docs.unrealengine.com', desc: 'Unreal Engine için resmi kullanım kılavuzu.', lang: 'en' },
            { type: 'tool', title: 'Blender', url: 'https://www.blender.org', desc: 'Kendi 3D modellerinizi yapabileceğiniz ücretsiz ve açık kaynak devasa araç.', lang: 'global' },
            { type: 'tool', title: 'itch.io', url: 'https://itch.io', desc: 'Bağımsız (Indie) oyunlarınızı ücretsiz yayınlayıp test edebileceğiniz platform.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (Game Dev)', url: 'https://roadmap.sh/game-developer', desc: 'Oyun geliştirici yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Indie Game Grupları"],
            top_skills: ["Unity (C#)", "Hyper-casual", "Optimizasyon", "Shader Graph", "3D Matematik"],
            avg_salary: "Junior: 35k-50k TL | Mid: 60k-90k TL | Senior: 120k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "GameDev Azerbaijan (Community)"],
            top_skills: ["Unity", "C#", "Mobil Oyun", "2D Art", "Animation"],
            avg_salary: "Junior: 800-1200 AZN | Mid: 1800-3000 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["Hitmarker (Oyun Sektörü)", "RemoteGameJobs", "ArtStation"],
            top_skills: ["Unreal Engine (C++)", "Graphics Programming", "Multiplayer", "Console Porting"],
            avg_salary: "Junior: $4k-$6k | Mid: $7k-$11k | Senior: $14k+ (Aylık/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Unity mi Unreal Engine mi? ",
                az: "Unity yoxsa Unreal Engine?",
                en: "Unity or Unreal Engine?"
            },
            a: {
                tr: "Mobil oyunlar (2D/3D) ve Indie projeler için Unity (C#) endüstri standartıdır. Çok yüksek grafikli PC/Konsol oyunları için Unreal Engine (C++/Blueprints) liderdir.",
                az: "Mobil oyunlar və Indie layihələr üçün Unity (C#) standartdır. Yüksək qrafikalı PC/Konsol oyunları üçün Unreal Engine (C++) liderdir.",
                en: "For Mobile (2D/3D) and Indie projects, Unity (C#) is the standard. For high-fidelity PC/Console games, Unreal Engine (C++/Blueprints) is the leader."
            }
        },
        {
            id: 2,
            q: {
                tr: "Matematik bilmek zorunda mıyım?",
                az: "Riyaziyyat bilmək məcburiyyətindəyəm?",
                en: "Do I have to know Math?"
            },
            a: {
                tr: "Web geliştirmeye göre evet, daha fazla. Vektörler, koordinat sistemleri ve basit trigonometri (açılar, mesafe hesaplama) oyun yapımının kalbidir. Korkmayın, motorlar çoğunu halleder ama mantığı bilmelisiniz.",
                az: "Veb inkişafına nisbətən bəli. Vektorlar, koordinat sistemləri və triqonometriya oyun istehsalının ürəyidir. Qorxmayın, mühərriklər çoxunu həll edir, amma məntiqi bilməlisiniz.",
                en: "Compared to web dev, yes. Vectors, coordinate systems, and basic trigonometry are the heart of game dev. Engines handle the heavy lifting, but you must know the logic."
            }
        },
        {
            id: 3,
            q: {
                tr: "Tek başıma oyun yapabilir miyim?",
                az: "Təkbaşına oyun düzəldə bilərəm?",
                en: "Can I make a game alone?"
            },
            a: {
                tr: "Evet (Indie Developer). Ancak hem kod, hem çizim, hem ses ile uğraşmak zordur. Başlangıçta basit grafikler (Pixel Art) veya hazır varlıklar (Assets) kullanarak başlayabilirsiniz.",
                az: "Bəli (Indie Developer). Lakin həm kod, həm rəsm, həm də səslə məşğul olmaq çətindir. Başlanğıcda sadə qrafiklər və ya hazır varlıqlar (Assets) istifadə edə bilərsiniz.",
                en: "Yes (Indie Developer). But handling code, art, and sound alone is hard. Start with simple graphics (Pixel Art) or use ready-made Assets."
            }
        },
        {
            id: 4,
            q: {
                tr: "Oyunlardan nasıl para kazanılır?",
                az: "Oyunlardan necə pul qazanılır?",
                en: "How do games make money?"
            },
            a: {
                tr: "1. Reklamlar (Hyper-casual). 2. Oyun içi satın alımlar (IAP - Kostüm, elmas vb.). 3. Premium satış (Steam'den 10$'a satmak). Mobil için reklam/IAP en yaygın modeldir.",
                az: "1. Reklamlar. 2. Oyun daxili alışlar (IAP - Kostyum, almaz). 3. Premium satış (Steam-də satmaq). Mobil üçün reklam/IAP ən yayğın modeldir.",
                en: "1. Ads. 2. In-App Purchases (IAP - Skins, gems). 3. Premium sales (Selling on Steam). For mobile, Ads/IAP is the most common model."
            }
        },
        {
            id: 5,
            q: {
                tr: "C++ çok mu zor?",
                az: "C++ çox çətindir?",
                en: "Is C++ too hard?"
            },
            a: {
                tr: "C#, Python veya JavaScript'e göre daha zordur çünkü bellek yönetimini (Memory Management) manuel yapmanız gerekebilir. Ancak Unreal Engine öğrenirken 'Blueprints' (Görsel Kodlama) ile kod yazmadan da başlayabilirsiniz.",
                az: "C# və ya Python-a görə daha çətindir, çünki yaddaş idarəetməsini əllə etməlisiniz. Lakin Unreal Engine-də 'Blueprints' ilə kod yazmadan da başlaya bilərsiniz.",
                en: "It is harder than C# or Python because of manual memory management. However, in Unreal Engine, you can start with 'Blueprints' (Visual Scripting) without writing code."
            }
        },
        {
            id: 6,
            q: {
                tr: "Oyun Tasarımı (Game Design) ile Oyun Programlama aynı mı?",
                az: "Oyun Dizaynı ilə Oyun Proqramlaşdırma eynidir?",
                en: "Is Game Design the same as Game Programming?"
            },
            a: {
                tr: "Hayır. Tasarımcı; oyunun kurallarını, hikayesini ve eğlence faktörünü planlar. Programcı ise bu planı koda döker. Küçük ekiplerde bu işi genelde aynı kişi yapar.",
                az: "Xeyr. Dizayner oyunun qaydalarını, hekayəsini və əyləncə faktorunu planlayır. Proqramçı isə bu planı koda çevirir. Kiçik komandalarda bunu adətən eyni adam edir.",
                en: "No. The Designer plans the rules, story, and fun factor. The Programmer turns that plan into code. In small teams, one person often does both."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "Game Loop (Oyun Döngüsü) nedir?",
            az: "Game Loop nədir?",
            en: "What is a Game Loop?"
        },
        a: {
            tr: "Oyunun sürekli olarak girdileri aldığı, oyun durumunu güncellediği ve ekrana çizim yaptığı sonsuz döngüdür (Input -> Update -> Render).",
            az: "Oyunun davamlı olaraq daxiletmələri qəbul etdiyi, oyun vəziyyətini yenilədiyi və ekrana görüntü verdiyi sonsuz dövrdür.",
            en: "The central hub of every game that processes input, updates game state, and renders the frame in a continuous loop."
        }
    },
    {
        id: 2,
        q: {
            tr: "Delta Time nedir ve neden kullanılır?",
            az: "Delta Time nədir və nə üçün istifadə olunur?",
            en: "What is Delta Time and why use it?"
        },
        a: {
            tr: "İki kare (frame) arasında geçen süredir. Oyunun farklı FPS değerlerinde aynı hızda çalışmasını (kare hızından bağımsız hareket) sağlar.",
            az: "İki kadr (frame) arasında keçən vaxtdır. Oyunun fərqli FPS-lərdə eyni sürətlə işləməsini təmin edir.",
            en: "The time elapsed since the last frame. It ensures that movement and logic are consistent regardless of the frame rate."
        }
    },
    {
        id: 3,
        q: {
            tr: "Component-Based Architecture nedir?",
            az: "Component-Based Arxitektura nədir?",
            en: "What is Component-Based Architecture?"
        },
        a: {
            tr: "Oyun nesnelerini büyük sınıflar yerine küçük, yeniden kullanılabilir parçalar (Mesh, Physics, Audio) birleştirerek oluşturma yaklaşımıdır.",
            az: "Oyun obyektlərini böyük siniflər yerinə kiçik, təkrar istifadə edilə bilən hissələri (komponentləri) birləşdirərək yaratmaq yanaşmasıdır.",
            en: "A design pattern where game objects are composed of modular components rather than complex inheritance hierarchies."
        }
    },
    {
        id: 4,
        q: {
            tr: "Draw Call nedir ve performansı nasıl etkiler?",
            az: "Draw Call nədir və performansa necə təsir edir?",
            en: "What is a Draw Call and how does it affect performance?"
        },
        a: {
            tr: "CPU'nun GPU'ya bir nesneyi çizmesi için gönderdiği komuttur. Çok fazla draw call olması işlemciyi darboğaza sokar, performansı düşürür.",
            az: "CPU-nun GPU-ya bir obyekti çəkməsi üçün göndərdiyi əmrdir. Çox sayda draw call prosessoru yükləyir və performansı aşağı salır.",
            en: "A command sent by the CPU to the GPU to render an object. High draw call counts can lead to CPU bottlenecks."
        }
    },
    {
        id: 5,
        q: {
            tr: "Object Pooling nedir?",
            az: "Object Pooling nədir?",
            en: "What is Object Pooling?"
        },
        a: {
            tr: "Sık kullanılan nesneleri (mermiler, patlamalar) sürekli oluşturup yok etmek yerine, bir havuzda tutup tekrar kullanma tekniğidir.",
            az: "Tez-tez istifadə olunan obyektləri (güllələr və s.) daim yaradıb yox etmək yerinə, bir 'hovuzda' saxlayıb təkrar istifadə etmək texnikasıdır.",
            en: "A performance optimization technique that reuses objects from a pre-allocated pool instead of constantly creating and destroying them."
        }
    },
    {
        id: 6,
        q: {
            tr: "Raycasting nedir?",
            az: "Raycasting nədir?",
            en: "What is Raycasting?"
        },
        a: {
            tr: "Bir noktadan belirli bir yöne hayali bir ışın gönderip, bu ışının hangi nesnelere çarptığını tespit etme işlemidir (Ateş etme, görüş kontrolü).",
            az: "Bir nöqtədən müəyyən istiqamətə xəyali bir şüa göndərib, bu şüanın hansı obyektlərə dəydiyini təyin etməkdir (Atəş açma və s.).",
            en: "Projecting an invisible line from a point in a specific direction to detect collisions with game objects."
        }
    },
    {
        id: 7,
        q: {
            tr: "Shaders (Gölgeleyiciler) nedir?",
            az: "Shader nədir?",
            en: "What are Shaders?"
        },
        a: {
            tr: "GPU üzerinde çalışan, piksellerin rengini veya nesnelerin yüzey görünümünü hesaplayan küçük programlardır.",
            az: "GPU üzərində işləyən, piksellərin rəngini və ya obyektlərin səth görünüşünü hesablayan kiçik proqramlardır.",
            en: "Small programs that run on the GPU to calculate the color of pixels and visual effects of surfaces."
        }
    },
    {
        id: 8,
        q: {
            tr: "Vektörlerin Dot Product (Noktasal Çarpım) kullanımı?",
            az: "Vektorların Dot Product (Nöqtəvi hasil) istifadəsi?",
            en: "Use of Dot Product in Game Dev?"
        },
        a: {
            tr: "İki vektör arasındaki açıyı bulmak için kullanılır. Bir düşmanın oyuncuya bakıp bakmadığını anlamak için idealdir.",
            az: "İki vektor arasındakı bucağı tapmaq üçün istifadə olunur. Məsələn, düşmənin oyunçuya baxıb-baxmadığını müəyyən etmək üçün istifadə edilir.",
            en: "Used to find the angle between two vectors. It’s commonly used to determine if an object is facing another."
        }
    },
    {
        id: 9,
        q: {
            tr: "RigidBody ve Kinematic farkı?",
            az: "RigidBody və Kinematic fərqi?",
            en: "Difference between RigidBody and Kinematic?"
        },
        a: {
            tr: "RigidBody fizik motoruyla (yerçekimi, çarpışma) hareket eder. Kinematic ise kodla doğrudan kontrol edilir, fizik kuvvetlerinden etkilenmez.",
            az: "RigidBody fizika mühərriki ilə (cazibə qüvvəsi və s.) hərəkət edir. Kinematic isə kodla idarə olunur və xarici fiziki qüvvələrdən təsirlənmir.",
            en: "A RigidBody is controlled by the physics engine. A Kinematic body is controlled manually by code and ignores external forces."
        }
    },
    {
        id: 10,
        q: {
            tr: "Frustum Culling nedir?",
            az: "Frustum Culling nədir?",
            en: "What is Frustum Culling?"
        },
        a: {
            tr: "Kameranın görüş alanı dışında kalan nesnelerin render edilmemesi (çizilmemesi) işlemidir, performansı artırır.",
            az: "Kameranın görüş sahəsindən kənarda qalan obyektlərin render edilməməsidir, bu da performansı artırır.",
            en: "The process of not rendering objects that are outside the camera's view frustum to save resources."
        }
    },
    {
        id: 11,
        q: {
            tr: "LOD (Level of Detail) nedir?",
            az: "LOD (Level of Detail) nədir?",
            en: "What is LOD (Level of Detail)?"
        },
        a: {
            tr: "Kameraya uzak olan nesnelerin daha düşük poligonlu versiyonlarının gösterilmesidir.",
            az: "Kameraya uzaq olan obyektlərin daha az poliqonlu (daha sadə) versiyalarının göstərilməsidir.",
            en: "Displaying lower-polygon versions of 3D models when they are far away from the camera."
        }
    },
    {
        id: 12,
        q: {
            tr: "Finitie State Machine (FSM) nedir?",
            az: "Finite State Machine (FSM) nədir?",
            en: "What is a Finite State Machine (FSM)?"
        },
        a: {
            tr: "Bir karakterin (AI) durumları (Idle, Run, Attack) arasındaki geçişleri yöneten bir tasarım kalıbıdır.",
            az: "Bir personajın (AI) vəziyyətləri (Idle, Run, Attack) arasındakı keçidləri idarə edən dizayn modelidir.",
            en: "A design pattern used to manage AI behaviors by switching between different states like Idle, Walking, or Attacking."
        }
    },
    {
        id: 13,
        q: {
            tr: "NavMesh nedir?",
            az: "NavMesh nədir?",
            en: "What is NavMesh?"
        },
        a: {
            tr: "Yapay zekanın (AI) sahnede yürüyebileceği alanları belirleyen, optimize edilmiş bir veri yapısıdır (yol bulma için).",
            az: "Süni intellektin (AI) səhnədə yeriyə biləcəyi sahələri müəyyən edən və yol tapmaq üçün istifadə edilən strukturudur.",
            en: "A simplified mesh data structure used for pathfinding, defining walkable areas for AI agents."
        }
    },
    {
        id: 14,
        q: {
            tr: "Singleton Pattern oyunlarda neden kullanılır?",
            az: "Singleton Pattern oyunlarda niyə istifadə olunur?",
            en: "Why use Singleton Pattern in games?"
        },
        a: {
            tr: "Sadece tek bir örneği olması gereken (GameManager, SoundManager) sınıflara her yerden kolayca erişmek için kullanılır.",
            az: "Yalnız bir nüsxəsi olması lazım olan (GameManager və s.) siniflərə hər yerdən asanlıqla müraciət etmək üçün istifadə olunur.",
            en: "To ensure a class has only one instance and provides a global point of access to it (e.g., ScoreManager)."
        }
    },
    {
        id: 15,
        q: {
            tr: "Vertex ve Fragment Shader farkı?",
            az: "Vertex və Fragment Shader fərqi?",
            en: "Difference between Vertex and Fragment Shader?"
        },
        a: {
            tr: "Vertex shader nesnenin şekli ve pozisyonuyla ilgilenir. Fragment shader ise piksellerin rengi ve ışıklandırmasıyla ilgilenir.",
            az: "Vertex shader obyektin forması və mövqeyi ilə, Fragment shader isə piksellərin rəngi və işıqlandırılması ilə məşğul olur.",
            en: "Vertex shaders handle geometry and positions. Fragment (pixel) shaders handle the color and lighting of each pixel."
        }
    },
    {
        id: 16,
        q: {
            tr: "Garbage Collection oyunlarda neden sorundur?",
            az: "Garbage Collection oyunlarda niyə problemdir?",
            en: "Why is Garbage Collection a problem in games?"
        },
        a: {
            tr: "Bellek temizliği sırasında oyunun anlık olarak takılmasına (stuttering) neden olabilir, bu yüzden bellek yönetimini manuel veya dikkatli yapmalıyız.",
            az: "Yaddaşın təmizlənməsi zamanı oyunun anlıq donmasına (stuttering) səbəb ola bilər, ona görə də yaddaş idarəetməsinə diqqət edilməlidir.",
            en: "GC pauses can cause frame rate drops or 'stuttering', which is why game devs try to minimize memory allocations during gameplay."
        }
    },
    {
        id: 17,
        q: {
            tr: "Occlusion Culling nedir?",
            az: "Occlusion Culling nədir?",
            en: "What is Occlusion Culling?"
        },
        a: {
            tr: "Başka bir nesnenin arkasında kalan ve görünmeyen nesnelerin render edilmemesi işlemidir.",
            az: "Başqa bir obyektin arxasında qalan və görünməyən obyektlərin render edilməməsidir.",
            en: "A rendering feature that disables rendering for objects that are hidden behind other opaque objects."
        }
    },
    {
        id: 18,
        q: {
            tr: "Prefab (veya Blueprint) nedir?",
            az: "Prefab (və ya Blueprint) nədir?",
            en: "What is a Prefab (or Blueprint)?"
        },
        a: {
            tr: "Bir nesnenin ve üzerindeki tüm ayarların kaydedilmiş bir örneğidir, sahnede defalarca tekrar kullanılabilir.",
            az: "Bir obyektin və üzərindəki bütün tənzimləmələrin yadda saxlanılmış nüsxəsidir, səhnədə dəfələrlə istifadə edilə bilər.",
            en: "A reusable template for game objects that stores its components and properties for easy instantiation."
        }
    },
    {
        id: 19,
        q: {
            tr: "Spatial Partitioning (Mekansal Bölümleme) nedir?",
            az: "Spatial Partitioning nədir?",
            en: "What is Spatial Partitioning?"
        },
        a: {
            tr: "Geniş dünyalarda çarpışma testlerini hızlandırmak için alanı Quadtree veya Octree gibi yapılarla parçalara bölmektir.",
            az: "Böyük dünyalarda toqquşma (collision) testlərini sürətləndirmək üçün sahəni Quadtree və ya Octree kimi strukturlarla hissələrə bölməkdir.",
            en: "A technique to organize game objects in space (using Quadtrees or Octrees) to optimize collision detection and rendering."
        }
    },
    {
        id: 20,
        q: {
            tr: "Anti-Aliasing nedir?",
            az: "Anti-Aliasing nədir?",
            en: "What is Anti-Aliasing?"
        },
        a: {
            tr: "Düşük çözünürlüklü görsellerdeki nesne kenarlarında oluşan tırtıklı (pixelated) görünümü yumuşatma tekniğidir.",
            az: "Aşağı keyfiyyətli görüntülərdə obyekt kənarlarındakı kələ-kötürlüyü (tırtıqlılığı) yumşaltmaq üçün istifadə olunan texnikadır.",
            en: "A technique used to smooth out jagged edges on objects in digital images by blending pixel colors."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "2D Fizik Tabanlı Platformer", 
            az: "2D Fizika Əsaslı Platformer", 
            en: "2D Physics-Based Platformer" 
        },
        desc: { 
            tr: "Karakter hareketleri, zıplama mekaniği ve basit düşman yapay zekası içeren bir oyun.", 
            az: "Personaj hərəkətləri, tullanma mexanikası və sadə süni intellektli düşmənləri olan oyun.", 
            en: "A game featuring character movement, jumping mechanics, and simple enemy AI." 
        },
        tech: ["Unity (C#) / Godot", "Physics2D", "Tilemaps"],
        features: { 
            tr: ["Karakter kontrolü", "Toplanabilir eşyalar", "Basit UI ve skor sistemi"], 
            az: ["Personaj idarəetməsi", "Yığıla bilən əşyalar", "Sadə UI və xal sistemi"], 
            en: ["Character controller", "Collectibles", "Basic UI and scoring"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "3D Survival / Crafting Sistemi", 
            az: "3D Survival / Crafting Sistemi", 
            en: "3D Survival / Crafting System" 
        },
        desc: { 
            tr: "Envanter yönetimi, kaynak toplama ve nesne üretme mekaniklerine sahip 3D bir temel.", 
            az: "İnventar idarəetməsi, resurs toplama və əşya istehsalı mexanikalarına sahib 3D baza.", 
            en: "A 3D framework with inventory management, resource gathering, and item crafting mechanics." 
        },
        tech: ["Unreal Engine (C++/BP) / Unity", "Scriptable Objects", "Raycasting"],
        features: { 
            tr: ["Gelişmiş envanter sistemi", "Dayanıklılık (Hunger/Health) mekanikleri", "Dinamik eşya yerleştirme"], 
            az: ["Təkmil inventar sistemi", "Aclıq/Sağlamlıq mexanikaları", "Dinamik əşya yerləşdirmə"], 
            en: ["Advanced inventory system", "Hunger/Health survival stats", "Dynamic object placement"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "Multiplayer Tank Savaşı (ECS & Networking)", 
            az: "Multiplayer Tank Döyüşü (ECS və Şəbəkə)", 
            en: "Multiplayer Tank Combat (ECS & Networking)" 
        },
        desc: { 
            tr: "Yüksek performanslı Data-Oriented mimari ve gecikme telafisi içeren çok oyunculu savaş motoru.", 
            az: "Yüksək performanslı Data-Oriented memarlıq və gecikmə kompensasiyası olan çox oyunçulu döyüş mühərriki.", 
            en: "A high-performance multiplayer engine featuring Data-Oriented architecture and lag compensation." 
        },
        tech: ["Unity DOTS / C++ Custom Engine", "UDP/TCP Networking", "Entity Component System"],
        features: { 
            tr: ["Server-side prediction", "Client-side reconciliation", "Büyük ölçekli optimizasyon"], 
            az: ["Server-side prediction", "Client-side reconciliation", "Böyük miqyaslı optimizasiya"], 
            en: ["Server-side prediction", "Client-side reconciliation", "Large-scale optimization"] 
        }
    }
]
};

contentData['graphics-programming'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Olmazsa Olmazlar", items: ["C++ (İleri Seviye)", "Lineer Cebir (Matrisler/Vektörler)", "Trigonometri", "GPU Mimarisi Mantığı"], status: "start" },
            { title: "Grafik API'sine Giriş", items: ["OpenGL (Öğrenmek için en iyisi)", "Pencere Yönetimi (GLFW/SDL)", "Üçgen Çizdirme (Hello World)", "Buffers (VBO, VAO, EBO)"], status: "start" },
            { title: "Shader Programlama", items: ["GLSL veya HLSL", "Vertex & Fragment Shaders", "Uniforms & Attributes", "Doku (Texture) İşleme"], status: "mid" },
            { title: "Render Pipeline (Boru Hattı)", items: ["Rasterization Mantığı", "Derinlik Testi (Z-Buffer)", "Alpha Blending", "Coordinate Systems"], status: "mid" },
            { title: "Işıklandırma & Gölgeler", items: ["Phong Lighting Model", "PBR (Physically Based Rendering)", "Shadow Mapping", "Normal Maps"], status: "mid" },
            { title: "Modern & Zorlu API'ler", items: ["Vulkan (Performans Kralı)", "DirectX 12", "Metal (Apple)", "Memory Management"], status: "advanced" },
            { title: "İleri Teknikler", items: ["Ray Tracing (Işın İzleme)", "Compute Shaders", "Particle Systems", "Post-Processing Effects"], status: "expert" },
            { title: "Matematiksel Simülasyon", items: ["Fluid Dynamics (Sıvı)", "Physics Engines", "Voxel Engines", "Procedural Generation"], status: "expert" }
        ],
        az: [
            { title: "Olmazsa Olmazlar", items: ["C++ (İrəli Səviyyə)", "Xətti Cəbr (Matrislər)", "Triqonometriya", "GPU Memarlığı"], status: "start" },
            { title: "Qrafik API Giriş", items: ["OpenGL (Öyrənmək üçün)", "Pəncərə İdarəetməsi", "Üçbucaq Çəkmək", "Buferlər (VBO, VAO)"], status: "start" },
            { title: "Shader Proqramlaşdırma", items: ["GLSL və ya HLSL", "Vertex & Fragment Shaders", "Uniforms", "Tekstura Emalı"], status: "mid" },
            { title: "Render Pipeline", items: ["Rasterization Məntiqi", "Dərinlik Testi (Z-Buffer)", "Alpha Blending", "Koordinat Sistemləri"], status: "mid" },
            { title: "İşıqlandırma & Kölgələr", items: ["Phong Modeli", "PBR (Fiziki Əsaslı)", "Shadow Mapping", "Normal Maps"], status: "mid" },
            { title: "Müasir API-lər", items: ["Vulkan (Performans)", "DirectX 12", "Metal (Apple)", "Yaddaş İdarəetməsi"], status: "advanced" },
            { title: "İrəli Texnikalar", items: ["Ray Tracing (Şüa İzləmə)", "Compute Shaders", "Zərrəcik Sistemləri", "Post-Processing"], status: "expert" },
            { title: "Riyazi Simulyasiya", items: ["Maye Dinamikası", "Fizika Mühərrikləri", "Voxel Mühərrikləri", "Prosedural Generasiya"], status: "expert" }
        ],
        en: [
            { title: "Prerequisites", items: ["C++ (Advanced)", "Linear Algebra (Matrices/Vectors)", "Trigonometry", "GPU Architecture"], status: "start" },
            { title: "Intro to Graphics API", items: ["OpenGL (Best for learning)", "Windowing (GLFW/SDL)", "Drawing a Triangle", "Buffers (VBO, VAO)"], status: "start" },
            { title: "Shader Programming", items: ["GLSL or HLSL", "Vertex & Fragment Shaders", "Uniforms & Attributes", "Texture Mapping"], status: "mid" },
            { title: "Rendering Pipeline", items: ["Rasterization Logic", "Depth Testing (Z-Buffer)", "Alpha Blending", "Coordinate Systems"], status: "mid" },
            { title: "Lighting & Shadows", items: ["Phong Lighting", "PBR (Physically Based)", "Shadow Mapping", "Normal Maps"], status: "mid" },
            { title: "Modern Low-Level APIs", items: ["Vulkan (High Performance)", "DirectX 12", "Metal (Apple)", "Manual Memory Mgmt"], status: "advanced" },
            { title: "Advanced Techniques", items: ["Ray Tracing", "Compute Shaders", "Particle Systems", "Post-Processing Effects"], status: "expert" },
            { title: "Math & Simulation", items: ["Fluid Dynamics", "Physics Engine Dev", "Voxel Rendering", "Procedural Generation"], status: "expert" }
        ]
    },

    // 2. RESOURCES
    resources: {
        items: [
            // Classics & Web
            { type: 'doc', title: 'LearnOpenGL.com', url: 'https://learnopengl.com', desc: 'Grafik programlamanın "Kutsal Kitabı". Adım adım her şeyi öğreten efsanevi site.', lang: 'en' },
            { type: 'tool', title: 'Shadertoy', url: 'https://www.shadertoy.com', desc: 'Tarayıcıda shader yazıp test edebileceğiniz, başkalarının kodlarını inceleyebileceğiniz platform.', lang: 'global' },
            { type: 'doc', title: 'Real-Time Rendering (Book)', url: 'https://www.realtimerendering.com', desc: 'Sektörün standart ders kitabı. Teorik bilgi için bir numara.', lang: 'en' },

            // YouTube Playlists
            { type: 'youtube', title: 'The Cherno', url: 'https://youtube.com/@TheCherno', desc: 'Kendi oyun motorunu (Hazel) yazarken OpenGL ve C++ anlatan harika seri.', lang: 'en' },
            { type: 'youtube', title: 'Acerola', url: 'https://youtube.com/@Acerola_t', desc: 'Grafik efektlerinin (Shaders) matematiğini eğlenceli ve derinlemesine anlatan kanal.', lang: 'en' },
            { type: 'youtube', title: 'Sebastian Lague', url: 'https://youtube.com/@SebastianLague', desc: 'Kodlama maceraları, Ray Tracing ve prosedürel üretim üzerine görsel şölen.', lang: 'en' },
            { type: 'youtube', title: 'Cem Yuksel', url: 'https://youtube.com/@cem_yuksel', desc: 'Utah Üniversitesi profesöründen Türkçe/İngilizce grafik dersleri.', lang: 'tr' },

            // Tools
            { type: 'tool', title: 'RenderDoc', url: 'https://renderdoc.org', desc: 'Grafik programcıları için vazgeçilmez "Frame Debugger" aracı.', lang: 'global' },
            { type: 'tool', title: 'Vulkan Tutorial', url: 'https://vulkan-tutorial.com', desc: 'Vulkan öğrenmek isteyen cesur geliştiriciler için başlangıç rehberi.', lang: 'en' },
            { type: 'roadmap', title: 'Roadmap.sh (C++)', url: 'https://roadmap.sh/cpp', desc: 'Bu işin temeli olan C++ için yol haritası.', lang: 'en' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Teknokent (Savunma Sanayi)", "Oyun Stüdyoları"],
            top_skills: ["C++", "OpenGL/Vulkan", "Linear Algebra", "Simulation", "CUDA"],
            avg_salary: "Junior: 50k-75k TL | Mid: 90k-140k TL | Senior: 200k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Remote (Global)"],
            top_skills: ["C++", "3D Math", "Game Engines (Source Code)", "Rendering"],
            avg_salary: "Junior: 1500-2500 AZN | Mid: 3000-5000 AZN | Senior: 8000+ AZN"
        },
        GLOBAL: {
            platforms: ["NVIDIA Careers", "AMD", "Epic Games", "Pixar"],
            top_skills: ["Graphics Pipeline", "HLSL/GLSL", "GPU Architecture", "Driver Dev"],
            avg_salary: "Junior: $8k-$12k | Mid: $14k-$20k | Senior: $25k+ (Aylık/Remote/US)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: {
                tr: "Oyun Geliştirme (Game Dev) ile Grafik Programlama farkı ne?",
                az: "Oyun İnkişafı (Game Dev) ilə Qrafik Proqramlaşdırma fərqi nədir?",
                en: "Difference between Game Dev and Graphics Programming?"
            },
            a: {
                tr: "Game Dev, Unity/Unreal gibi motorları kullanarak oyun yapar. Grafik Programcısı ise o motorların 'Render' kısmını, yani motorun kendisini yazar. Biri arabayı sürer, diğeri motoru tasarlar.",
                az: "Game Dev, Unity/Unreal kimi mühərriklərdən istifadə edərək oyun düzəldir. Qrafik Proqramçı isə o mühərriklərin 'Render' hissəsini, yəni mühərrikin özünü yazır. Biri maşını sürür, digəri motoru yığır.",
                en: "Game Dev uses engines like Unity/Unreal to make games. Graphics Programmer writes the 'Renderer' part of those engines. One drives the car, the other builds the engine."
            }
        },
        {
            id: 2,
            q: {
                tr: "Matematik (Lineer Cebir) gerçekten şart mı?",
                az: "Riyaziyyat (Xətti Cəbr) həqiqətən şərtdir?",
                en: "Is Math (Linear Algebra) really necessary?"
            },
            a: {
                tr: "Kesinlikle. %100. Matris çarpımlarını, Dot/Cross Product'ı ve Vektör uzaylarını anlamadan ekrana bir küp bile çizdiremezsiniz. Bu alanın dili matematiktir.",
                az: "Mütləq. %100. Matris vurmalarını, Dot/Cross Product və Vektor fəzalarını anlamadan ekrana bir kub belə çəkə bilməzsiniz. Bu sahənin dili riyaziyyatdır.",
                en: "Absolutely. 100%. You cannot even draw a cube without understanding Matrix multiplication, Dot/Cross Products, and Vector spaces. Math is the language here."
            }
        },
        {
            id: 3,
            q: {
                tr: "Hangi API ile başlamalıyım? OpenGL mi Vulkan mı?",
                az: "Hansı API ilə başlamalıyam? OpenGL yoxsa Vulkan?",
                en: "Which API to start with? OpenGL or Vulkan?"
            },
            a: {
                tr: "OpenGL ile başlayın. Vulkan çok güçlüdür ama ekrana basit bir üçgen çizdirmek için bile 1000 satır kod yazmanız gerekir. OpenGL mantığı öğretir, Vulkan performansı.",
                az: "OpenGL ilə başlayın. Vulkan çox güclüdür, amma ekrana sadə bir üçbucaq çəkmək üçün belə 1000 sətir kod yazmalısınız. OpenGL məntiqi öyrədir, Vulkan performansı.",
                en: "Start with OpenGL. Vulkan is powerful but requires 1000 lines of code just to draw a triangle. OpenGL teaches the logic, Vulkan teaches performance."
            }
        },
        {
            id: 4,
            q: {
                tr: "Ray Tracing (Işın İzleme) nedir?",
                az: "Ray Tracing (Şüa İzləmə) nədir?",
                en: "What is Ray Tracing?"
            },
            a: {
                tr: "Geleneksel 'Rasterization' (üçgen çizme) yerine, fiziksel ışık ışınlarını ve onların yansımalarını simüle eden, gerçeğe en yakın görüntüyü veren tekniktir.",
                az: "Ənənəvi 'Rasterization' (üçbucaq çəkmə) əvəzinə, fiziki işıq şüalarını və onların yansımalarını simulyasiya edən, reallığa ən yaxın görüntünü verən texnikadır.",
                en: "Unlike traditional 'Rasterization' (drawing triangles), it simulates physical light rays and their bounces to produce the most photorealistic images."
            }
        },
        {
            id: 5,
            q: {
                tr: "Shader nedir? ",
                az: "Shader nədir?",
                en: "What is a Shader?"
            },
            a: {
                tr: "Shader, doğrudan GPU (Ekran Kartı) üzerinde çalışan küçük programcıklardır. Her bir pikselin rengini veya her bir köşenin (vertex) konumunu bunlar belirler.",
                az: "Shader, birbaşa GPU (Video Kart) üzərində işləyən kiçik proqramlardır. Hər bir pikselin rəngini və ya hər bir küncün (vertex) mövqeyini bunlar təyin edir.",
                en: "A Shader is a small program that runs directly on the GPU. They determine the color of every pixel or the position of every vertex."
            }
        }
    ],

    interview: [
    {
        id: 1,
        q: {
            tr: "Graphics Pipeline (Grafik Hattı) aşamaları nelerdir?",
            az: "Graphics Pipeline-ın mərhələləri hansılardır?",
            en: "What are the stages of the Graphics Pipeline?"
        },
        a: {
            tr: "Vertex Processing, Rasterization, Fragment Processing ve Output Merging aşamalarından oluşur. 3D veriyi 2D piksele dönüştürür.",
            az: "Vertex Processing, Rasterization, Fragment Processing və Output Merging mərhələlərindən ibarətdir. 3D məlumatı 2D pikselə çevirir.",
            en: "Stages include Vertex Processing, Rasterization, Fragment/Pixel Processing, and Output Merging. It converts 3D data into 2D pixels."
        }
    },
    {
        id: 2,
        q: {
            tr: "Rasterization nedir?",
            az: "Rasterization nədir?",
            en: "What is Rasterization?"
        },
        a: {
            tr: "Vektör tabanlı geometrik şekilleri (üçgenleri) ekrandaki piksellere dönüştürme işlemidir.",
            az: "Vektor əsaslı həndəsi fiqurları (üçbucaqları) ekrandakı piksellərə çevirmə prosesidir.",
            en: "The process of converting vector-based shapes into a grid of pixels for display on a screen."
        }
    },
    {
        id: 3,
        q: {
            tr: "Ray Tracing ve Rasterization farkı nedir?",
            az: "Ray Tracing və Rasterization fərqi nədir?",
            en: "Difference between Ray Tracing and Rasterization?"
        },
        a: {
            tr: "Rasterization hızlıdır ama ışık efektleri zordur. Ray Tracing, ışık ışınlarını simüle ederek gerçekçi yansımalar sağlar ama maliyetlidir.",
            az: "Rasterization sürətlidir amma işıq effektləri çətindir. Ray Tracing isə işıq şüalarını simulyasiya edərək realistik əks olunmalar yaradır.",
            en: "Rasterization is faster and used in real-time. Ray Tracing simulates the physical behavior of light for high realism but is computationally heavy."
        }
    },
    {
        id: 4,
        q: {
            tr: "Vertex Buffer Object (VBO) nedir?",
            az: "VBO (Vertex Buffer Object) nədir?",
            en: "What is a Vertex Buffer Object (VBO)?"
        },
        a: {
            tr: "Vertex verilerini (koordinat, renk) GPU belleğinde tutan tamponlardır, CPU-GPU arası veri trafiğini minimize eder.",
            az: "Vertex məlumatlarını (koordinat, rəng) GPU yaddaşında saxlayan buferlərdir, CPU-dan GPU-ya məlumat axınını azaldır.",
            en: "A buffer that stores vertex data in GPU memory to minimize data transfer between the CPU and the GPU."
        }
    },
    {
        id: 5,
        q: {
            tr: "Z-Buffer (Depth Buffer) ne işe yarar?",
            az: "Z-Buffer (Dərinlik Buferi) nə işə yarayır?",
            en: "What is a Z-Buffer?"
        },
        a: {
            tr: "Hangi nesnenin hangi nesnenin önünde olduğunu belirlemek için her pikselin derinlik bilgisini saklar.",
            az: "Hansı obyektin öndə, hansının arxada olduğunu müəyyən etmək üçün hər pikselin dərinlik məlumatını saxlayır.",
            en: "A buffer that stores the depth value of each pixel to handle hidden surface removal (occlusion)."
        }
    },
    {
        id: 6,
        q: {
            tr: "Homogeneous Coordinates (Homojen Koordinatlar) neden kullanılır?",
            az: "Homogen Koordinatlar niyə istifadə olunur?",
            en: "Why use Homogeneous Coordinates?"
        },
        a: {
            tr: "3x3 matrislerle yapılamayan 'Translation' (öteleme) işlemini 4x4 matrislerle lineer bir işlem gibi yapabilmek için kullanılır.",
            az: "3x3 matrislərlə mümkün olmayan 'Translation' (yerdəyişmə) əməliyyatını 4x4 matrislərlə xətti şəkildə edə bilmək üçün istifadə olunur.",
            en: "They allow translation, rotation, and scaling to be represented as a single matrix multiplication in 4D space."
        }
    },
    {
        id: 7,
        q: {
            tr: "Double Buffering nedir?",
            az: "Double Buffering nədir?",
            en: "What is Double Buffering?"
        },
        a: {
            tr: "Ekrandaki titremeyi önlemek için bir kare çizilirken (Back Buffer), diğerinin ekranda gösterilmesidir (Front Buffer).",
            az: "Ekrandakı titrəməni önləmək üçün bir kadr çəkilərkən (Back Buffer), digərinin ekranda göstərilməsidir (Front Buffer).",
            en: "A technique using two buffers to prevent screen tearing; one is displayed while the other is being drawn."
        }
    },
    {
        id: 8,
        q: {
            tr: "Alpha Blending nedir?",
            az: "Alpha Blending nədir?",
            en: "What is Alpha Blending?"
        },
        a: {
            tr: "Nesnelerin şeffaflığını hesaplamak için renklerin birbiriyle karıştırılması işlemidir.",
            az: "Obyektlərin şəffaflığını hesablamaq üçün rənglərin bir-biri ilə qarışdırılması prosesidir.",
            en: "The process of combining a translucent foreground color with a background color to produce transparency effects."
        }
    },
    {
        id: 9,
        q: {
            tr: "Mipmapping nedir?",
            az: "Mipmapping nədir?",
            en: "What is Mipmapping?"
        },
        a: {
            tr: "Uzaklıktaki nesneler için dokuların (textures) daha küçük ve düşük çözünürlüklü kopyalarının kullanılmasıdır.",
            az: "Uzaqdakı obyektlər üçün teksturaların daha kiçik və aşağı keyfiyyətli nüsxələrinin istifadə edilməsidir.",
            en: "Pre-calculated, optimized sequences of images used to represent textures at different distances to save memory and improve quality."
        }
    },
    {
        id: 10,
        q: {
            tr: "PBR (Physically Based Rendering) nedir?",
            az: "PBR nədir?",
            en: "What is PBR?"
        },
        a: {
            tr: "Işığın gerçek dünyadaki fiziksel davranışını taklit eden bir gölgeleme ve malzeme modelleme tekniğidir.",
            az: "İşığın real dünyadakı fiziki davranışını təqlid edən bir shader və material modelləmə texnikasıdır.",
            en: "A shading model that follows physical laws of light and material properties to achieve high realism."
        }
    },
    {
        id: 11,
        q: {
            tr: "Normal Mapping nedir?",
            az: "Normal Mapping nədir?",
            en: "What is Normal Mapping?"
        },
        a: {
            tr: "Düşük poligonlu modellere ek detay ve kabarıklık hissi vermek için piksellerin yüzey normallerini değiştiren bir tekniktir.",
            az: "Aşağı poliqonlu modellərə əlavə detal və kələ-kötürlük hissi vermək üçün piksellərin səth normallarını dəyişən texnikadır.",
            en: "A technique used for faking the lighting of bumps and dents—an add-on to low-poly models to add detail."
        }
    },
    {
        id: 12,
        q: {
            tr: "Barycentric Coordinates nedir?",
            az: "Barycentric Koordinatlar nədir?",
            en: "What are Barycentric Coordinates?"
        },
        a: {
            tr: "Üçgen içindeki bir noktanın, köşelere göre konumunu belirtir. Interpolasyon (renk geçişi) için kullanılır.",
            az: "Üçbucaq daxilindəki bir nöqtənin təpə nöqtələrinə görə mövqeyini bildirir. İnterpolyasiya üçün istifadə olunur.",
            en: "A coordinate system used to express the position of a point within a triangle, essential for fragment interpolation."
        }
    },
    {
        id: 13,
        q: {
            tr: "Antialiasing (MSAA) nasıl çalışır?",
            az: "MSAA (Multisample Antialiasing) necə işləyir?",
            en: "How does MSAA work?"
        },
        a: {
            tr: "Piksel kenarlarında birden fazla örnek alarak renkleri yumuşatır ve tırtıklı görünümü azaltır.",
            az: "Piksel kənarlarında birdən çox nümunə (sample) götürərək rəngləri yumşaldır və kələ-kötürlüyü azaldır.",
            en: "It reduces aliasing by taking multiple samples per pixel at the edges of geometry."
        }
    },
    {
        id: 14,
        q: {
            tr: "Compute Shader nedir?",
            az: "Compute Shader nədir?",
            en: "What is a Compute Shader?"
        },
        a: {
            tr: "Grafik çizimi dışında genel amaçlı hesaplamaları (fizik, su simülasyonu) GPU üzerinde yapmak için kullanılır.",
            az: "Qrafik çəkilişi xaricində ümumi hesablamaları (fizika, su simulyasiyası) GPU-da etmək üçün istifadə olunur.",
            en: "A shader stage used for general-purpose computing on the GPU, outside the regular graphics pipeline."
        }
    },
    {
        id: 15,
        q: {
            tr: "Phong Shading vs Gouraud Shading?",
            az: "Phong vs Gouraud Shading?",
            en: "Phong vs Gouraud Shading?"
        },
        a: {
            tr: "Gouraud renkleri köşelerde hesaplar ve yayar. Phong her piksel için normali hesaplar, daha pürüzsüzdür.",
            az: "Gouraud rəngləri təpə nöqtələrində hesablayır. Phong isə hər piksel üçün hesablayır, daha hamar nəticə verir.",
            en: "Gouraud calculates lighting at vertices; Phong calculates lighting per pixel, providing better specular highlights."
        }
    },
    {
        id: 16,
        q: {
            tr: "Tessellation nedir?",
            az: "Tessellation nədir?",
            en: "What is Tessellation?"
        },
        a: {
            tr: "Karmaşık bir yüzeyin daha fazla detay için GPU tarafından dinamik olarak küçük üçgenlere bölünmesidir.",
            az: "Mürəkkəb səthin daha çox detal üçün GPU tərəfindən dinamik olaraq kiçik üçbucaqlara bölünməsidir.",
            en: "A technique used to subdivide geometry into smaller primitives to increase detail dynamically on the GPU."
        }
    },
    {
        id: 17,
        q: {
            tr: "Vulkan vs OpenGL farkı?",
            az: "Vulkan və OpenGL fərqi?",
            en: "Difference between Vulkan and OpenGL?"
        },
        a: {
            tr: "OpenGL yüksek seviyelidir, kullanımı kolaydır. Vulkan düşük seviyelidir, daha fazla kontrol ve daha iyi CPU paralelliği sağlar.",
            az: "OpenGL yüksək səviyyəlidir. Vulkan aşağı səviyyəlidir (low-level), daha çox idarəetmə və CPU paralelliyi təmin edir.",
            en: "OpenGL is a high-level API. Vulkan is low-level, providing explicit control over GPU resources and multi-threading."
        }
    },
    {
        id: 18,
        q: {
            tr: "Screen Space Ambient Occlusion (SSAO) nedir?",
            az: "SSAO nədir?",
            en: "What is SSAO?"
        },
        a: {
            tr: "Kesişen yüzeylerin köşelerinde oluşan yumuşak gölgeleri (derinlik hissini) gerçek zamanlı hesaplayan bir post-processing efektidir.",
            az: "Kəsişən səthlərin künclərində yaranan yumşaq kölgələri real vaxtda hesablayan post-processing effektidir.",
            en: "A post-processing effect used to simulate realistic shadows in creases and corners based on screen-depth data."
        }
    },
    {
        id: 19,
        q: {
            tr: "GPU Memory Management (Texture compression)?",
            az: "GPU Yaddaş idarəetməsi (Tekstura sıxılması)?",
            en: "GPU Memory Management (Texture compression)?"
        },
        a: {
            tr: "Dokuları (textures) GPU'nun doğrudan okuyabileceği formatlarda (BC, ASTC) sıkıştırarak VRAM tasarrufu yapmaktır.",
            az: "Teksturaları GPU-nun birbaşa oxuya biləcəyi formatlarda (BC, ASTC) sıxaraq VRAM-a qənaət etməkdir.",
            en: "Compacting textures into hardware-readable formats to save VRAM and increase bandwidth efficiency."
        }
    },
    {
        id: 20,
        q: {
            tr: "Post-Processing nedir?",
            az: "Post-Processing nədir?",
            en: "What is Post-Processing?"
        },
        a: {
            tr: "Sahne çizildikten sonra tüm ekrana uygulanan efektlerdir (Bloom, Motion Blur, Color Correction).",
            az: "Səhnə çəkildikdən sonra bütün ekrana tətbiq edilən effektlərdir (Bloom, Motion Blur və s.).",
            en: "Effects applied to a 2D image of a scene after it has been rendered (e.g., Bloom, Depth of Field)."
        }
    }
],

projects: [
    {
        id: 1,
        level: "junior",
        title: { 
            tr: "Yazılım Tabanlı Rasterizer (Software Renderer)", 
            az: "Proqram Təminatı Əsaslı Rasterizer", 
            en: "Software Rasterizer" 
        },
        desc: { 
            tr: "Hiçbir grafik API'si (OpenGL/DirectX) kullanmadan, pikselleri tek tek CPU ile ekrana çizen bir motor.", 
            az: "Heç bir qrafik API (OpenGL/DirectX) istifadə etmədən, pikselləri bir-bir CPU ilə ekrana çəkən mühərrik.", 
            en: "A renderer that draws pixels to the screen using only the CPU, without any graphics APIs." 
        },
        tech: ["C++", "SDL2 / SFML (Piksel tamponu için)", "Linear Algebra"],
        features: { 
            tr: ["Tel kafes (Wireframe) render", "Barycentric koordinat hesaplama", "Z-Buffering"], 
            az: ["Wireframe render", "Barycentric koordinat hesablanması", "Z-Buffering"], 
            en: ["Wireframe rendering", "Barycentric interpolation", "Z-buffering"] 
        }
    },
    {
        id: 2,
        level: "mid",
        title: { 
            tr: "İleri Seviye OpenGL/Vulkan Shader Motoru", 
            az: "Təkmil OpenGL/Vulkan Shader Mühərriki", 
            en: "Advanced OpenGL/Vulkan Shader Engine" 
        },
        desc: { 
            tr: "Modern aydınlatma modellerini ve gölgeleri destekleyen bir gerçek zamanlı render motoru.", 
            az: "Müasir işıqlandırma modellərini və kölgələri dəstəkləyən real vaxtlı render mühərriki.", 
            en: "A real-time rendering engine supporting modern lighting models and shadows." 
        },
        tech: ["OpenGL 4.5+ / Vulkan", "GLSL", "C++", "Assimp (Model yükleme)"],
        features: { 
            tr: ["PBR (Physically Based Rendering)", "Shadow Mapping", "Bloom & HDR efektleri"], 
            az: ["PBR (Physically Based Rendering)", "Shadow Mapping", "Bloom və HDR effektləri"], 
            en: ["PBR (Physically Based Rendering)", "Shadow Mapping", "Bloom & HDR post-processing"] 
        }
    },
    {
        id: 3,
        level: "expert",
        title: { 
            tr: "Gerçek Zamanlı Ray Tracer (GPU)", 
            az: "Real Vaxtlı Ray Tracer (GPU)", 
            en: "Real-time GPU Ray Tracer" 
        },
        desc: { 
            tr: "Işığın fiziksel yansımalarını GPU üzerinde simüle eden, yüksek performanslı ışın izleme motoru.", 
            az: "İşığın fiziki əks olunmalarını GPU üzərində simulyasiya edən, yüksək performanslı işın izləmə mühərriki.", 
            en: "A high-performance engine that simulates physical light behavior using GPU ray tracing." 
        },
        tech: ["C++", "DirectX 12 (DXR) / Vulkan Raytracing", "Compute Shaders"],
        features: { 
            tr: ["Yansıma ve kırılma (Reflections/Refractions)", "Denoising algoritmaları", "BVH (Bounding Volume Hierarchy) optimizasyonu"], 
            az: ["Qırılma və əks olunma effektləri", "Denoising alqoritmləri", "BVH optimizasiyası"], 
            en: ["Reflections & Refractions", "Denoising algorithms", "BVH acceleration structures"] 
        }
    }
]
};

contentData['embedded'] = {
    // 1. ROADMAP
    roadmap: {
        tr: [
            { title: "Elektronik Temelleri", items: ["Ohm Kanunu, KVL/KCL", "Pasif Bileşenler (Direnç, Kapasitör)", "Transistörler & MOSFETs", "Osiloskop & Multimetre Kullanımı"], status: "start" },
            { title: "C ve C++ Programlama", items: ["Pointers & Memory Layout", "Bit Manipülasyonu", "Volatile Anahtar Kelimesi", "Struct Alignment & Padding"], status: "start" },
            { title: "Mikrodenetleyici Mimarisi", items: ["Register-Level Programlama", "Interrupts & ISR", "Timers & PWM", "DMA (Direct Memory Access)"], status: "mid" },
            { title: "Haberleşme Protokolleri", items: ["UART", "I2C", "SPI", "CAN Bus (Otomotiv için kritik)"], status: "mid" },
            { title: "Gömülü İşletim Sistemleri", items: ["RTOS (FreeRTOS, Zephyr)", "Task Scheduling", "Mutex & Semaphores", "Embedded Linux (Yocto)"], status: "advanced" },
            { title: "Donanım Soyutlama (HAL)", items: ["HAL & Low Layer Drivers", "BSP (Board Support Package)", "Device Drivers Yazımı"], status: "advanced" },
            { title: "Hata Ayıklama & Araçlar", items: ["JTAG/SWD Debugging", "GDB", "Logic Analyzer", "Static Analysis (MISRA C)"], status: "advanced" },
            { title: "İleri Seviye Konular", items: ["Digital Signal Processing (DSP)", "FPGA & VHDL/Verilog", "Edge AI", "Secure Boot & OTA"], status: "expert" }
        ],
        az: [
            { title: "Elektronika Əsasları", items: ["Om Qanunu", "Passiv Komponentlər", "Tranzistorlar", "Osiloqraf & Multimetr"], status: "start" },
            { title: "C və C++ Proqramlaşdırma", items: ["Pointers & Yaddaş", "Bit Manipulyasiyası", "Volatile açar sözü", "Struct Alignment"], status: "start" },
            { title: "Mikrokontroller Arxitekturası", items: ["Register-Level Proqramlaşdırma", "Interrupts & ISR", "Taymerlər & PWM", "DMA"], status: "mid" },
            { title: "Rabitə Protokolları", items: ["UART", "I2C", "SPI", "CAN Bus"], status: "mid" },
            { title: "Quraşdırılmış Əməliyyat Sistemləri", items: ["RTOS (FreeRTOS)", "Task Scheduling", "Mutex & Semaphores", "Embedded Linux"], status: "advanced" },
            { title: "Drayverlərin Yazılması", items: ["HAL", "Device Drivers", "BSP"], status: "advanced" },
            { title: "Debug & Alətlər", items: ["JTAG/SWD Debugging", "GDB", "Logic Analyzer", "MISRA C"], status: "advanced" },
            { title: "İrəli Səviyyə Mövzular", items: ["DSP", "FPGA & VHDL/Verilog", "Edge AI", "OTA Yeniləmələr"], status: "expert" }
        ],
        en: [
    { title: "Electronics Fundamentals", items: ["Ohm’s Law", "Passive Components", "Transistors", "Oscilloscope & Multimeter"], status: "start" },
    { title: "C and C++ Programming", items: ["Pointers & Memory Management", "Bit Manipulation", "Volatile Keyword", "Struct Alignment"], status: "start" },
    { title: "Microcontroller Architecture", items: ["Register-Level Programming", "Interrupts & ISR", "Timers & PWM", "DMA"], status: "mid" },
    { title: "Communication Protocols", items: ["UART", "I2C", "SPI", "CAN Bus"], status: "mid" },
    { title: "Embedded Operating Systems", items: ["RTOS (FreeRTOS)", "Task Scheduling", "Mutex & Semaphores", "Embedded Linux"], status: "advanced" },
    { title: "Driver Development", items: ["HAL", "Device Drivers", "BSP"], status: "advanced" },
    { title: "Debug & Tools", items: ["JTAG/SWD Debugging", "GDB", "Logic Analyzer", "MISRA C"], status: "advanced" },
    { title: "Advanced Topics", items: ["DSP", "FPGA & VHDL/Verilog", "Edge AI", "OTA Updates"], status: "expert" }
]
    },

    // 2. RESOURCES
    resources: {
        items: [
            { type: 'youtube', title: 'Phil’s Lab', url: 'https://youtube.com/@PhilsLab', desc: 'PCB tasarımı ve STM32 gömülü yazılım için harika bir kaynak.', lang: 'en' },
            { type: 'youtube', title: 'Low Level Learning', url: 'https://youtube.com/@LowLevelLearning', desc: 'C, Assembly ve düşük seviyeli programlama üzerine eğlenceli videolar.', lang: 'en' },
            { type: 'site', title: 'Embedded.com', url: 'https://www.embedded.com', desc: 'Sektörel makaleler ve teknik rehberler.', lang: 'global' },
            { type: 'course', title: 'FastBit Embedded Brain Academy', url: 'https://www.udemy.com/user/kiran-nayak-2/', desc: 'STM32 ve RTOS konularında dünyanın en popüler kursları.', lang: 'en' },
            { type: 'tool', title: 'STM32CubeIDE', url: 'https://www.st.com/en/development-tools/stm32cubeide.html', desc: 'ST mikrodenetleyiciler için ücretsiz geliştirme ortamı.', lang: 'global' },
            { type: 'tool', title: 'KiCad', url: 'https://www.kicad.org', desc: 'Açık kaynak PCB tasarım aracı.', lang: 'global' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "SavunmaSanayi.net", "Kariyer.net"],
            top_skills: ["C/C++", "STM32/ARM", "RTOS", "Altium/KiCad", "Embedded Linux"],
            avg_salary: "Junior: 40k-60k TL | Mid: 70k-120k TL | Senior: 150k+ TL (Savunma sanayinde daha yüksektir)"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn"],
            top_skills: ["C/C++", "Arduino/STM32", "PCB Design", "IoT", "Microcontrollers"],
            avg_salary: "Junior: 900-1500 AZN | Mid: 2000-3500 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["LinkedIn", "Indeed", "Glassdoor"],
            top_skills: ["Bare-Metal C", "RTOS", "Linux Kernel", "FPGA", "Python (for testing)"],
            avg_salary: "Junior: $4k-$6k | Mid: $8k-$12k | Senior: $15k+ (Monthly/Remote vary)"
        }
    },

    // 4. FAQ
    faq: [
    {
        id: 1,
        q: { 
            tr: "Arduino ile başlamalı mıyım?", 
            az: "Arduino ilə başlamalıyam?", 
            en: "Should I start with Arduino?" 
        },
        a: { 
            tr: "Hobi için evet, ama mühendislik kariyeri için doğrudan STM32 veya ESP32 gibi çiplerin register yapılarını öğrenerek başlamak daha profesyoneldir.", 
            az: "Hobi üçün bəli, amma peşəkar karyera üçün birbaşa STM32 və ya ESP32 kimi çiplərlə başlamaq daha yaxşıdır.",
            en: "For a hobby, yes; however, for an engineering career, it is more professional to start by learning the register structures of chips like STM32 or ESP32 directly."
        }
    },
    {
        id: 2,
        q: { 
            tr: "C++ gömülü sistemlerde kullanılır mı?", 
            az: "C++ gömülü sistemlərdə istifadə olunur?", 
            en: "Is C++ used in embedded systems?" 
        },
        a: { 
            tr: "Evet, özellikle modern gömülü sistemlerde (RTOS ve Embedded Linux) nesne yönelimli yapısı nedeniyle C++ çok yaygınlaşmıştır.", 
            az: "Bəli, xüsusilə müasir sistemlərdə (RTOS və Embedded Linux) C++ çox geniş istifadə olunur.",
            en: "Yes, C++ has become very common in modern embedded systems (RTOS and Embedded Linux) due to its object-oriented nature."
        }
    }
],

    // 5. INTERVIEW PREP
    interview: [
    {
        id: 1,
        q: { 
            tr: "'volatile' anahtar kelimesi ne işe yarar?", 
            az: "'volatile' açar sözü nə işə yarayır?",
            en: "What is the purpose of the 'volatile' keyword?" 
        },
        a: { 
            tr: "Derleyiciye bu değişkenin dışarıdan (örn: bir interrupt veya donanım register'ı) her an değişebileceğini ve optimizasyon yapmaması gerektiğini bildirir.", 
            az: "Kompilyatora bildirir ki, bu dəyişən kənardan (məs: interrupt) hər an dəyişə bilər və optimizasiya olunmamalıdır.",
            en: "It informs the compiler that a variable can be changed by external factors (e.g., an interrupt or a hardware register) at any time, and therefore, the compiler should not perform any optimization on it."
        }
    },
    {
        id: 2,
        q: { 
            tr: "Interrupt Service Routine (ISR) yazarken nelere dikkat edilmelidir?", 
            az: "ISR yazarkən nələrə diqqət edilməlidir?",
            en: "What should be considered when writing an Interrupt Service Routine (ISR)?" 
        },
        a: { 
            tr: "ISR mümkün olduğunca kısa olmalı, içinde 'printf' veya 'delay' gibi fonksiyonlar kullanılmamalı ve bloklayıcı işlemlerden kaçınılmalıdır.", 
            az: "ISR mümkün qədər qısa olmalı, daxilində 'printf' və ya 'delay' kimi funksiyalar istifadə olunmamalıdır.",
            en: "An ISR should be as short as possible; it should avoid using functions like 'printf' or 'delay' and must not include any blocking operations."
        }
    }
],

    // 6. PROJECT HUB
    projects: [
        {
            id: 1,
            level: "junior",
            title: { tr: "Akıllı Ev Termostatı", az: "Ağıllı Ev Termostatı", en: "Smart Home Thermostat" },
            desc: { tr: "Sensörden veri okuyup ekrana yazan ve röle kontrol eden sistem.", az: "Sensordan məlumat oxuyub ekrana yazan və röleni idarə edən sistem.", en: "System that reads sensor data, displays it, and controls a relay." },
            tech: ["C", "STM32/ESP32", "DHT11/22", "I2C LCD"],
            features: { tr: ["Sıcaklık takibi", "Eşik değer kontrolü", "LCD arayüz"], az: ["Temperatur izləmə", "Limit nəzarəti", "LCD interfeys"], en: ["Temp monitoring", "Threshold control", "LCD display"] }
        },
        {
            id: 2,
            level: "mid",
            title: { tr: "FreeRTOS Tabanlı Hava İstasyonu", az: "FreeRTOS Əsaslı Hava Stansiyası", en: "FreeRTOS Weather Station" },
            desc: { tr: "Birden fazla görevin (task) aynı anda çalıştığı ve verilerin buluta gönderildiği sistem.", az: "Eyni anda bir neçə tapşırığın (task) çalışdığı və məlumatların buluda göndərildiyi sistem.", en: "Multi-tasking system that sends weather data to the cloud." },
            tech: ["FreeRTOS", "MQTT", "ESP32", "SPI/I2C Sensors"],
            features: { tr: ["Task önceliklendirme", "Wi-Fi ile veri transferi", "Düşük güç modu"], az: ["Task prioritetləri", "Wi-Fi ilə data transferi", "Low power mode"], en: ["Task scheduling", "MQTT data transfer", "Power management"] }
        },
        {
            id: 3,
            level: "expert",
            title: { tr: "Otonom Çizgi İzleyen Drone/Robot (Bare-Metal)", az: "Otonom Robot (Bare-Metal)", en: "Autonomous Robot (Bare-Metal)" },
            desc: { tr: "Kendi RTOS'unuzu veya çok gelişmiş sürücülerinizi yazdığınız yüksek hızlı kontrol sistemi.", az: "Öz RTOS-unuzu və ya təkmil drayverlərinizi yazdığınız yüksək sürətli idarəetmə sistemi.", en: "High-speed control system with custom drivers or RTOS." },
            tech: ["C/C++", "PID Control", "DMA", "Kalman Filter"],
            features: { tr: ["Gerçek zamanlı sinyal işleme", "Hassas motor kontrolü", "Sensör füzyonu"], az: ["Real-time siqnal emalı", "Dəqiq motor idarəetməsi", "Sensor fusion"], en: ["Real-time signal processing", "Precise motor control", "Sensor fusion"] }
        }
    ]
};

contentData['iot'] = {
    // 1. ROADMAP
    roadmap: {
    tr: [
        { title: "Elektronik Temelleri", items: ["Temel Devre Elemanları (Direnç, Kondansatör)", "Devre Analizi (Ohm Kanunu)", "Multimetre & Osiloskop Kullanımı", "PCB Tasarımı (Altium, KiCad)"], status: "start" },
        { title: "Gömülü Programlama Dilleri", items: ["C (Gömülü Sistemlerin Atası)", "C++ (OOP ve Kütüphaneler)", "Python (Raspberry Pi & Prototipleme)", "Rust (Modern & Güvenli Gömülü Sistemler)"], status: "start" },
        { title: "Mikrokontrolcüler & Mimari", items: ["Arduino (Atmega)", "ESP32 & ESP8266 (Wi-Fi/BT)", "STM32 (ARM Cortex-M)", "Raspberry Pi (SBC)", "Memory Management (Stack/Heap)"], status: "mid" },
        { title: "IoT Haberleşme Protokolleri", items: ["MQTT (Hafif ve Popüler)", "HTTP/REST", "WebSockets", "CoAP", "LoRaWAN (Uzun Mesafe/Düşük Güç)"], status: "mid" },
        { title: "Sensörler & Aktüatörler", items: ["I2C, SPI, UART İletişimi", "Analog & Dijital Sensör Okuma", "PWM ile Motor Kontrolü", "Interrupts & Timers"], status: "mid" },
        { title: "IoT Bulut & Veri Yönetimi", items: ["AWS IoT Core", "Google Cloud IoT", "ThingsBoard", "InfluxDB (Time-series Data)"], status: "advanced" },
        { title: "Bağlantı Teknolojileri", items: ["Wi-Fi & Bluetooth (BLE)", "Zigbee & Z-Wave", "Cellular (NB-IoT, 5G)", "NFC/RFID"], status: "advanced" },
        { title: "İleri Seviye Konular", items: ["RTOS (FreeRTOS, Zephyr)", "Edge Computing", "OTA (Over-the-Air) Güncellemeler", "Güç Optimizasyonu (Deep Sleep)"], status: "expert" },
        { title: "IoT Güvenliği", items: ["TLS/SSL Sertifikaları", "Secure Boot", "Encryption (AES, RSA)", "Firmware Güvenliği"], status: "expert" }
    ],
    az: [
        { title: "Elektronika Əsasları", items: ["Dövrə Elementləri (Rezistor, Kondensator)", "Dövrə Analizi (Om Qanunu)", "Multimetr & Osiloskop İstifadəsi", "PCB Dizaynı (Altium, KiCad)"], status: "start" },
        { title: "Daxili Proqramlaşdırma Dilləri", items: ["C (Embedded-in Atası)", "C++ (OOP və Kitabxanalar)", "Python (Raspberry Pi & Prototipləmə)", "Rust (Müasir & Təhlükəsiz Sistemlər)"], status: "start" },
        { title: "Mikrokontrollerlər & Arxitektura", items: ["Arduino (Atmega)", "ESP32 & ESP8266 (Wi-Fi/BT)", "STM32 (ARM Cortex-M)", "Raspberry Pi (SBC)", "Yaddaş İdarəetməsi (Stack/Heap)"], status: "mid" },
        { title: "IoT Rabitə Protokolları", items: ["MQTT (Yüngül və Populyar)", "HTTP/REST", "WebSockets", "CoAP", "LoRaWAN (Uzaq Məsafə/Aşağı Enerji)"], status: "mid" },
        { title: "Sensorlar & Aktuatorlar", items: ["I2C, SPI, UART Rabitəsi", "Analoq & Rəqəmsal Sensor Oxuma", "PWM ilə Motor Kontrolu", "Kəsilmələr (Interrupts) & Taymerlər"], status: "mid" },
        { title: "IoT Bulud & Məlumat İdarəetməsi", items: ["AWS IoT Core", "Google Cloud IoT", "ThingsBoard", "InfluxDB (Zaman Seriyalı Məlumatlar)"], status: "advanced" },
        { title: "Bağlantı Texnologiyaları", items: ["Wi-Fi & Bluetooth (BLE)", "Zigbee & Z-Wave", "Mobil Şəbəkə (NB-IoT, 5G)", "NFC/RFID"], status: "advanced" },
        { title: "İrəli Səviyyə Mövzular", items: ["RTOS (FreeRTOS, Zephyr)", "Edge Computing", "OTA Yeniləmələr", "Enerji Optimizasiyası (Deep Sleep)"], status: "expert" },
        { title: "IoT Təhlükəsizliyi", items: ["TLS/SSL Sertifikatları", "Secure Boot", "Şifrələmə (AES, RSA)", "Firmware Təhlükəsizliyi"], status: "expert" }
    ],
    en: [
        { title: "Electronics Fundamentals", items: ["Basic Circuit Elements (Resistor, Capacitor)", "Circuit Analysis (Ohm's Law)", "Multimeter & Oscilloscope Usage", "PCB Design (Altium, KiCad)"], status: "start" },
        { title: "Embedded Programming Languages", items: ["C (The Father of Embedded)", "C++ (OOP & Libraries)", "Python (Raspberry Pi & Prototyping)", "Rust (Modern & Secure Embedded)"], status: "start" },
        { title: "Microcontrollers & Architecture", items: ["Arduino (Atmega)", "ESP32 & ESP8266 (Wi-Fi/BT)", "STM32 (ARM Cortex-M)", "Raspberry Pi (SBC)", "Memory Management (Stack/Heap)"], status: "mid" },
        { title: "IoT Communication Protocols", items: ["MQTT (Lightweight & Popular)", "HTTP/REST", "WebSockets", "CoAP", "LoRaWAN (Long Range/Low Power)"], status: "mid" },
        { title: "Sensors & Actuators", items: ["I2C, SPI, UART Communication", "Analog & Digital Sensor Reading", "Motor Control with PWM", "Interrupts & Timers"], status: "mid" },
        { title: "IoT Cloud & Data Management", items: ["AWS IoT Core", "Google Cloud IoT", "ThingsBoard", "InfluxDB (Time-series Data)"], status: "advanced" },
        { title: "Connectivity Technologies", items: ["Wi-Fi & Bluetooth (BLE)", "Zigbee & Z-Wave", "Cellular (NB-IoT, 5G)", "NFC/RFID"], status: "advanced" },
        { title: "Advanced Topics", items: ["RTOS (FreeRTOS, Zephyr)", "Edge Computing", "OTA (Over-the-Air) Updates", "Power Optimization (Deep Sleep)"], status: "expert" },
        { title: "IoT Security", items: ["TLS/SSL Certificates", "Secure Boot", "Encryption (AES, RSA)", "Firmware Security"], status: "expert" }
    ]
},
    // 2. RESOURCES
    resources: {
        items: [
            { type: 'youtube', title: 'GreatScott!', url: 'https://youtube.com/@GreatScottLab', desc: 'Elektronik projeleri ve temel kavramlar için en iyi görsel kaynak.', lang: 'en' },
            { type: 'youtube', title: 'Andreas Spiess', url: 'https://youtube.com/@AndreasSpiess', desc: 'IoT ve kablosuz haberleşme (LoRa, ESP32) üzerine "The Guy with the Swiss Accent".', lang: 'en' },
            { type: 'youtube', title: 'Lezzetli Robot Tarifleri', url: 'https://youtube.com/@LezzetliRobotTarifleri', desc: 'Elektronik ve Arduino üzerine Türkiye\'nin en samimi ve kaliteli kanalı.', lang: 'tr' },
            { type: 'doc', title: 'Arduino Docs', url: 'https://docs.arduino.cc', desc: 'Başlangıç için dünya standardı.', lang: 'global' },
            { type: 'doc', title: 'Espressif Documentation', url: 'https://docs.espressif.com', desc: 'ESP32 ve ESP8266 dünyasının detaylı rehberi.', lang: 'global' },
            { type: 'tool', title: 'Wokwi', url: 'https://wokwi.com', desc: 'Donanım satın almadan tarayıcı üzerinde IoT simülasyonu yapın.', lang: 'global' },
            { type: 'tool', title: 'MQTT Explorer', url: 'https://mqtt-explorer.com', desc: 'MQTT trafik akışını görselleştirmek için vazgeçilmez bir araç.', lang: 'global' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "SavunmaSanayi.net", "Kariyer.net"],
            top_skills: ["Embedded C/C++", "STM32", "Altium Designer", "RTOS", "Linux"],
            avg_salary: "Junior: 40k-60k TL | Mid: 70k-120k TL | Senior: 150k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Technest.az"],
            top_skills: ["Microcontrollers", "C/C++", "Circuit Design", "Automation"],
            avg_salary: "Junior: 1000-1500 AZN | Mid: 2000-3500 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["Indeed", "Glassdoor", "RemoteIoT", "AngelList"],
            top_skills: ["Embedded Systems", "Firmware Engineering", "RTOS", "Cloud Architecture", "Python"],
            avg_salary: "Junior: $4k-$7k | Mid: $8k-$12k | Senior: $15k+ (Monthly/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: { tr: "IoT için hangi dili öğrenmeliyim?", az: "IoT üçün hansı dili öyrənməliyəm?", en: "Which language for IoT?" },
            a: { tr: "Donanım seviyesi için kesinlikle C ve C++. Üst seviye mantık, prototipleme ve veri işleme için Python.", az: "Aparat səviyyəsi üçün mütləq C və C++. Prototipləmə və data üçün Python.", en: "C and C++ for hardware level. Python for prototyping and data processing." }
        },
        {
            id: 2,
            q: { tr: "Arduino profesyonel projelerde kullanılır mı?", az: "Arduino professional layihələrdə istifadə olunur?", en: "Is Arduino used in professional projects?" },
            a: { tr: "Arduino bir 'ekosistem' olarak prototipleme için harikadır, ancak endüstriyel ürünlerde genellikle saf STM32, ESP32 veya özel PCB tasarımları tercih edilir.", az: "Arduino prototip üçün əladır, lakin sənaye məhsullarında daha çox STM32 və ya ESP32 istifadə olunur.", en: "Arduino is great for prototyping. For industrial products, pure microcontrollers like STM32 or ESP32 are preferred." }
        }
    ],

    // 5. INTERVIEW PREP
    interview: [
        {
            id: 1,
            q: { tr: "I2C ve SPI arasındaki fark nedir?", az: "I2C və SPI arasındakı fərq nədir?", en: "Difference between I2C and SPI?" },
            a: { tr: "I2C iki kablo kullanır ve daha yavaştır; SPI ise dört kablo kullanır ve çok daha hızlıdır. I2C daha fazla cihazın bağlanmasına izin verir.", az: "I2C 2 naqil istifadə edir və yavaşdır; SPI 4 naqil istifadə edir və sürətlidir.", en: "I2C uses 2 wires (SDA/SCL) and is slower. SPI uses 4 wires and is much faster." }
        },
        {
            id: 2,
            q: { tr: "Watchdog Timer nedir?", az: "Watchdog Timer nədir?", en: "What is a Watchdog Timer?" },
            a: { tr: "Sistemin kilitlenmesi durumunda cihazı otomatik olarak yeniden başlatan bir donanım zamanlayıcısıdır.", az: "Sistem donarsa, cihazı avtomatik yenidən başladan donanım taymeridir.", en: "A hardware timer that automatically resets the system if the software freezes." }
        }
    ],

    // 6. PROJECT HUB
    projects: [
        {
            id: 1,
            level: "junior",
            title: { tr: "Akıllı Ev Termostatı", az: "Ağıllı Ev Termostatı", en: "Smart Home Thermostat" },
            desc: { tr: "Sıcaklık verisini ölçüp buluta gönderen ve web üzerinden kontrol edilen sistem.", az: "Temperaturu ölçüb buluda göndərən və veb üzərindən idarə olunan sistem.", en: "System that measures temperature, sends it to the cloud, and is controlled via web." },
            tech: ["ESP8266/ESP32", "DHT11 Sensor", "Blynk/MQTT"],
            features: { tr: ["Anlık veri takibi", "Mobil bildirim", "Röle kontrolü"], az: ["Real-time izləmə", "Mobil bildiriş", "Rele idarəetməsi"], en: ["Real-time monitoring", "Mobile notifications", "Relay control"] }
        },
        {
            id: 2,
            level: "mid",
            title: { tr: "LoRa Tabanlı Tarım Takip", az: "LoRa əsaslı Kənd Təsərrüfatı", en: "LoRa Based Agri-Tech" },
            desc: { tr: "İnternet olmayan tarlalarda kilometrelerce mesafeden toprak nemi verisi gönderen sistem.", az: "İnternet olmayan tarlalarda kilometrlərlə məsafədən məlumat göndərən sistem.", en: "System sending soil moisture data from miles away in fields without internet." },
            tech: ["Arduino", "LoRa SX1278", "Deep Sleep Mode"],
            features: { tr: ["Düşük güç tüketimi", "Uzun mesafe haberleşme", "Güneş paneli desteği"], az: ["Aşağı enerji sərfiyyatı", "Uzaq məsafəli rabitə", "Günəş paneli"], en: ["Low power consumption", "Long range comms", "Solar power"] }
        }
    ]
};

contentData['blockchain'] = {
    // 1. ROADMAP
    roadmap: {
    tr: [
        { title: "Blockchain Temelleri", items: ["Blockchain Nasıl Çalışır?", "Kriptografi (Hashing, Digital Signatures)", "Consensus Algoritmaları (PoW, PoS)", "Public vs Private Blockchains"], status: "start" },
        { title: "Kripto Cüzdanlar & İşlemler", items: ["Metamask & Wallet Entegrasyonu", "Public/Private Keys", "Gas Fees & Transaction Lifecycle", "Mnemonic Phrases"], status: "start" },
        { title: "Akıllı Kontrat Programlama", items: ["Solidity (EVM)", "Rust (Solana/Near)", "Vyper", "Smart Contract Lifecycle"], status: "mid" },
        { title: "Geliştirme Araçları", items: ["Hardhat / Foundry", "Truffle", "Ganache (Local Blockchain)", "Remix IDE"], status: "mid" },
        { title: "Web3 Kütüphaneleri", items: ["Ethers.js", "Web3.js", "Viem", "WalletConnect SDK"], status: "mid" },
        { title: "Merkeziyetsiz Depolama & İndeksleme", items: ["IPFS", "Arweave", "The Graph (Subgraphs)", "Chainlink (Oracles)"], status: "mid" },
        { title: "DeFi & Token Standartları", items: ["ERC-20, ERC-721 (NFT), ERC-1155", "DEX (Uniswap) Mantığı", "Liquidity Pools", "Staking & Yield Farming"], status: "advanced" },
        { title: "Layer 2 & Ölçeklenebilirlik", items: ["Optimistic Rollups (Arbitrum/Optimism)", "ZK-Rollups (zkSync/Polygon)", "Sidechains", "Bridges"], status: "expert" },
        { title: "Güvenlik & Denetim", items: ["Reentrancy Attacks", "Flash Loan Attacks", "Smart Contract Auditing", "Formal Verification"], status: "expert" }
    ],
    az: [
        { title: "Blockchain Əsasları", items: ["Blockchain Necə İşləyir?", "Kriptoqrafiya (Hashing, Digital Signatures)", "Konsensus Alqoritmləri (PoW, PoS)", "Public vs Private Blockchains"], status: "start" },
        { title: "Kripto Pulqabılar & Əməliyyatlar", items: ["Metamask & Wallet İnteqrasiyası", "Public/Private Keys", "Gas Fees & Transaction Lifecycle", "Mnemonic Phrases"], status: "start" },
        { title: "Smart Kontrakt Proqramlaşdırma", items: ["Solidity (EVM)", "Rust (Solana/Near)", "Vyper", "Smart Contract Lifecycle"], status: "mid" },
        { title: "İnkişaf Alətləri", items: ["Hardhat / Foundry", "Truffle", "Ganache (Local Blockchain)", "Remix IDE"], status: "mid" },
        { title: "Web3 Kitabxanaları", items: ["Ethers.js", "Web3.js", "Viem", "WalletConnect SDK"], status: "mid" },
        { title: "Mərkəzləşdirilməmiş Saxlama & İndeksləmə", items: ["IPFS", "Arweave", "The Graph (Subgraphs)", "Chainlink (Oracles)"], status: "mid" },
        { title: "DeFi & Token Standartları", items: ["ERC-20, ERC-721 (NFT), ERC-1155", "DEX (Uniswap) Məntiqi", "Liquidity Pools", "Staking & Yield Farming"], status: "advanced" },
        { title: "Layer 2 & Ölçeklənmə", items: ["Optimistic Rollups (Arbitrum/Optimism)", "ZK-Rollups (zkSync/Polygon)", "Sidechains", "Bridges"], status: "expert" },
        { title: "Təhlükəsizlik & Audit", items: ["Reentrancy Attacks", "Flash Loan Attacks", "Smart Contract Auditing", "Formal Verification"], status: "expert" }
    ],
    en: [
        { title: "Blockchain Basics", items: ["How Blockchain Works", "Cryptography (Hashing, Digital Signatures)", "Consensus Mechanisms (PoW, PoS)", "Public vs Private Blockchains"], status: "start" },
        { title: "Wallets & Transactions", items: ["Metamask & Wallet Integration", "Public/Private Keys", "Gas Fees & Transaction Lifecycle", "Mnemonic Phrases"], status: "start" },
        { title: "Smart Contract Development", items: ["Solidity (EVM)", "Rust (Solana/Near)", "Vyper", "Smart Contract Lifecycle"], status: "mid" },
        { title: "Development Frameworks", items: ["Hardhat / Foundry", "Truffle", "Ganache (Local Blockchain)", "Remix IDE"], status: "mid" },
        { title: "Web3 Libraries", items: ["Ethers.js", "Web3.js", "Viem", "WalletConnect SDK"], status: "mid" },
        { title: "Decentralized Storage & Indexing", items: ["IPFS", "Arweave", "The Graph (Subgraphs)", "Chainlink (Oracles)"], status: "mid" },
        { title: "DeFi & Token Standards", items: ["ERC-20, ERC-721 (NFT), ERC-1155", "DEX (Uniswap) Mechanics", "Liquidity Pools", "Staking & Yield Farming"], status: "advanced" },
        { title: "Layer 2 & Scaling", items: ["Optimistic Rollups (Arbitrum/Optimism)", "ZK-Rollups (zkSync/Polygon)", "Sidechains", "Bridges"], status: "expert" },
        { title: "Security & Auditing", items: ["Reentrancy Attacks", "Flash Loan Attacks", "Smart Contract Auditing", "Formal Verification"], status: "expert" }
    ]
},

    // 2. RESOURCES
    resources: {
    items: [
        // YouTube Kanalları
        { type: 'youtube', title: 'Patrick Collins', url: 'https://youtube.com/@PatrickAlphaC', desc: 'Blockchain dünyasının ən detallı Solidity və Smart Contract dərsləri.', lang: 'en' },
        { type: 'youtube', title: 'EatTheBlocks', url: 'https://youtube.com/@EatTheBlocks', desc: 'DApp inkişafı və Web3 kitabxanaları üzrə qısa, konkret layihələr.', lang: 'en' },
        { type: 'youtube', title: 'Smart Contract Programmer', url: 'https://youtube.com/@SmartContractProgrammer', desc: 'Solidity və Vyper dilinin incəliklərini təmiz kodla izah edən texniki kanal.', lang: 'en' },
        { type: 'youtube', title: 'Dapp University', url: 'https://youtube.com/@DappUniversity', desc: 'Blockchain proqramçısı olmaq üçün bazar analizləri və real layihə nümunələri.', lang: 'en' },

        // Sənədlər və Kurslar
        { type: 'doc', title: 'Solidity Docs', url: 'https://docs.soliditylang.org/', desc: 'Smart kontrakt yazmaq üçün əsas dilin rəsmi bələdçisi.', lang: 'global' },
        { type: 'course', title: 'Cyfrin Updraft', url: 'https://updraft.cyfrin.io', desc: 'Blockchain təhlükəsizliyi və inkişafı üzrə dünyanın ən keyfiyyətli pulsuz kurs platforması.', lang: 'en' },
        { type: 'course', title: 'Alchemy University', url: 'https://university.alchemy.com', desc: 'Ethereum və JavaScript əsaslı Web3 proqramlaşdırma üzrə peşəkar bootcamp.', lang: 'en' },
        { type: 'course', title: 'LearnWeb3 DAO', url: 'https://learnweb3.io', desc: 'Səviyyə-səviyyə (Freshman-dan Senior-a) Web3 öyrənmə yolu.', lang: 'en' },

        // Alətlər (Tools)
        { type: 'tool', title: 'Hardhat / Foundry', url: 'https://hardhat.org', desc: 'Smart kontraktları test etmək, deploy etmək və debug üçün əvəzolunmaz freymvorklar.', lang: 'global' },
        { type: 'tool', title: 'Remix IDE', url: 'https://remix.ethereum.org', desc: 'Brauzer üzərindən heç bir şey quraşdırmadan Solidity yazmaq üçün mühit.', lang: 'global' },
        { type: 'tool', title: 'OpenZeppelin', url: 'https://openzeppelin.com/contracts/', desc: 'Təhlükəsiz və audit olunmuş standart smart kontrakt kitabxanaları (ERC20, ERC721).', lang: 'global' },
        { type: 'roadmap', title: 'Web3 Roadmap', url: 'https://roadmap.sh/blockchain', desc: 'Blockchain inkişafı üçün vizual və addım-addım yol xəritəsi.', lang: 'en' }
    ]
},

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Web3.career", "RemoteOK"],
            top_skills: ["Solidity", "Ethers.js", "React", "Rust (for Solana)", "Go"],
            avg_salary: "Junior: 60k-90k TL | Mid: 100k-180k TL | Senior: 250k+ TL"
        },
        AZ: {
            platforms: ["LinkedIn", "Remote jobs", "Crypto Startup Hubs"],
            top_skills: ["Solidity", "Node.js", "Web3.js", "Cryptography", "DeFi Logic"],
            avg_salary: "Junior: 1500-2500 AZN | Mid: 3500-6000 AZN | Senior: 8000+ AZN (Adətən Remote/Global)"
        },
        GLOBAL: {
            platforms: ["Web3.career", "Crypto.jobs", "Gitcoin", "Toptal"],
            top_skills: ["Solidity", "Rust", "Security Auditing", "ZK Proofs", "L2 Solutions"],
            avg_salary: "Junior: $6k-$9k | Mid: $10k-$18k | Senior: $25k+ (Monthly/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: { tr: "Web3 öğrenmek için önce ne bilmeliyim?", az: "Web3 öyrənmək üçün əvvəlcə nə bilməliyəm?", en: "Prerequisites for Web3?" },
            a: { tr: "Güçlü bir JavaScript temeli şarttır. Web3 frontend ile konuştuğu için JS ve React bilmek işinizi %70 kolaylaştırır.", az: "Güclü JavaScript biliyi mütləqdir. Web3-ün çox hissəsi JS və React ilə idarə olunur.", en: "A strong JavaScript foundation is key. Knowing JS and React makes learning Web3 70% easier." }
        },
        {
            id: 2,
            q: { tr: "Solidity mi Rust mı?", az: "Solidity yoxsa Rust?", en: "Solidity or Rust?" },
            a: { tr: "Ethereum ekosistemi için Solidity; Solana, Polkadot veya Near için Rust. Başlangıç için Solidity daha çok kaynak ve iş imkanı sunar.", az: "Ethereum üçün Solidity; Solana üçün Rust. Başlanğıc üçün Solidity daha yaxşıdır.", en: "Solidity for Ethereum; Rust for Solana/Near. Solidity has more resources for beginners." }
        }
    ],

    // 5. INTERVIEW PREP
    interview: [
        {
            id: 1,
            q: { tr: "Smart Contract nedir?", az: "Smart Kontrakt nədir?", en: "What is a Smart Contract?" },
            a: { tr: "Blockchain üzerinde çalışan, belirli koşullar sağlandığında otomatik olarak yürütülen, değiştirilemez kod parçalarıdır.", az: "Blokçeyn üzərində işləyən, müəyyən şərtlər yerinə yetirildikdə avtomatik icra olunan, dəyişdirilə bilməyən kodlardır.", en: "Immutable pieces of code that execute automatically on the blockchain when conditions are met." }
        },
        {
            id: 2,
            q: { tr: "Gas Limit ve Gas Price farkı?", az: "Gas Limit və Gas Price fərqi?", en: "Gas Limit vs Gas Price?" },
            a: { tr: "Gas Limit: İşlem için harcamaya hazır olduğunuz max enerji. Gas Price: Birim enerji için ödemek istediğiniz fiyat (Gwei).", az: "Gas Limit: Əməliyyat üçün maksimum enerji limiti. Gas Price: Enerji vahidi üçün ödəmək istədiyiniz qiymət.", en: "Gas Limit is the max units of gas you are willing to use. Gas Price is the cost per unit of gas (Gwei)." }
        }
    ],

    // 6. PROJECT HUB
    projects: [
        {
            id: 1,
            level: "junior",
            title: { tr: "NFT Minting Sitesi", az: "NFT Mint Saytı", en: "NFT Minting DApp" },
            desc: { tr: "Kullanıcıların cüzdan bağlayıp kendi NFT'lerini üretebildiği bir platform.", az: "İstifadəçilərin pulqabı qoşaraq öz NFT-lərini yarada bildiyi platform.", en: "A platform where users connect wallets and mint their own NFTs." },
            tech: ["Solidity", "ERC-721", "React", "Ethers.js"],
            features: { tr: ["Cüzdan bağlantısı", "IPFS metadata", "Mint fonksiyonu"], az: ["Cüzdan qoşulması", "IPFS yaddaş", "Mint funksiyası"], en: ["Wallet connection", "IPFS metadata", "Mint function"] }
        },
        {
            id: 2,
            level: "mid",
            title: { tr: "Kendi DEX'ini Yap", az: "Öz DEX-ini yarat", en: "Build your own DEX" },
            desc: { tr: "Basit bir Uniswap klonu: Token takası ve likidite ekleme.", az: "Sadə Uniswap klonu: Token mübadiləsi və likvidlik əlavə etmək.", en: "Simple Uniswap clone: Token swap and liquidity pooling." },
            tech: ["Solidity", "Automated Market Maker (AMM)", "Hardhat"],
            features: { tr: ["Token Swap", "Liquidity Provider (LP) mantığı", "Price Oracle"], az: ["Token Swap", "Likvidlik təminatı", "Qiymət Oracle"], en: ["Token Swap", "Liquidity Provision", "Price Oracle"] }
        }
    ]
};

contentData['ar-vr'] = {
    // 1. ROADMAP
    roadmap: {
    tr: [
        { title: "Temel Kavramlar & Matematik", items: ["3D Koordinat Sistemleri", "Vektörler & Quaternionlar", "Lineer Cebir", "Render Pipeline Mantığı"], status: "start" },
        { title: "Oyun Motoru Seçimi", items: ["Unity (C# - En Popüler)", "Unreal Engine (C++ - Yüksek Performans)", "Godot", "WebXR (A-Frame, Three.js)"], status: "start" },
        { title: "C# veya C++ Geliştirme", items: ["Scripting Temelleri", "Object-Oriented Programming", "Memory Management", "Event System & Delegates"], status: "mid" },
        { title: "Varlık (Asset) Yönetimi", items: ["3D Modeller (FBX, GLTF)", "PBR Materyaller & Textures", "Animations & Rigging", "Lighting & Post-Processing"], status: "mid" },
        { title: "AR & VR SDK'ları", items: ["Meta Quest SDK (Oculus)", "ARCore (Android) & ARKit (iOS)", "Vuforia", "Unity XR Interaction Toolkit"], status: "mid" },
        { title: "Etkileşim Tasarımı", items: ["Raycasting", "Grabbing & Throwing", "Locomotion (Teleport, Smooth Move)", "UI in World Space"], status: "mid" },
        { title: "Optimizasyon & Performans", items: ["Draw Calls & Batching", "Occlusion Culling", "LOD (Level of Detail)", "Mobile vs PC VR Profiling"], status: "advanced" },
        { title: "İleri Seviye Konular", items: ["Custom Shaders (HLSL/GLSL)", "Spatial Audio", "Hand Tracking & Eye Tracking", "Multiplayer XR (Photon/Mirror)"], status: "expert" },
        { title: "Endüstriyel Uygulamalar", items: ["Digital Twins", "Telepresence", "Mixed Reality (Hololens/Magic Leap)", "Procedural Mesh Generation"], status: "expert" }
    ],
    az: [
        { title: "Təməl Anlayışlar & Riyaziyyat", items: ["3D Koordinat Sistemləri", "Vektorlar & Kvaternionlar", "Xətti Cəbr", "Render Pipeline"], status: "start" },
        { title: "Mühərrik Seçimi", items: ["Unity (C#)", "Unreal Engine (C++)", "WebXR (Three.js)", "Godot"], status: "start" },
        { title: "C# və ya C++ İnkişafı", items: ["Scripting Əsasları", "OOP", "Memory Management", "Events & Delegates"], status: "mid" },
        { title: "Asset İdarəetməsi", items: ["3D Modellər", "PBR Materiallar", "Animasiya & Rigging", "İşıqlandırma"], status: "mid" },
        { title: "AR & VR SDK-lar", items: ["Meta Quest SDK", "ARCore & ARKit", "Vuforia", "XR Interaction Toolkit"], status: "mid" },
        { title: "İnteraksiya Dizaynı", items: ["Raycasting", "Tutma & Atma", "Teleportasiya", "World Space UI"], status: "mid" },
        { title: "Optimizasiya", items: ["Draw Calls", "Occlusion Culling", "LOD (Level of Detail)", "Profiling"], status: "advanced" },
        { title: "İrəli Səviyyə Mövzular", items: ["Custom Shaders", "Spatial Audio (Məkan Səsi)", "Hand Tracking", "Multiplayer XR"], status: "expert" },
        { title: "Sənaye Tətbiqləri", items: ["Digital Twins", "Telepresence", "Mixed Reality (MR)", "Procedural Mesh Generation"], status: "expert" }
    ],
    en: [
        { title: "Fundamentals & Math", items: ["3D Coordinate Systems", "Vectors & Quaternions", "Linear Algebra", "Render Pipeline Concepts"], status: "start" },
        { title: "Engine Selection", items: ["Unity (C#)", "Unreal Engine (C++)", "Godot", "WebXR (Three.js/A-Frame)"], status: "start" },
        { title: "C# or C++ Development", items: ["Scripting Basics", "OOP Principles", "Memory Management", "Events & Delegates"], status: "mid" },
        { title: "Asset Management", items: ["3D Models (FBX/GLB)", "PBR Materials & Textures", "Animation & Rigging", "Lighting & Post-Processing"], status: "mid" },
        { title: "AR & VR SDKs", items: ["Meta Quest SDK", "ARCore (Android) & ARKit (iOS)", "Vuforia", "Unity XR Interaction Toolkit"], status: "mid" },
        { title: "Interaction Design", items: ["Raycasting", "Grabbing & Throwing", "Locomotion (Teleport/Smooth Move)", "World Space UI"], status: "mid" },
        { title: "Optimization & Performance", items: ["Draw Calls & Batching", "Occlusion Culling", "LOD (Level of Detail)", "VR Profiling Tools"], status: "advanced" },
        { title: "Advanced Topics", items: ["Custom Shaders (HLSL/GLSL)", "Spatial Audio", "Hand & Eye Tracking", "Multiplayer XR (Photon/Mirror)"], status: "expert" },
        { title: "Industrial Applications", items: ["Digital Twins", "Telepresence", "Mixed Reality (MR)", "Procedural Mesh Generation"], status: "expert" }
    ]
},

    // 2. RESOURCES
    resources: {
        items: [
            { type: 'youtube', title: 'Valem', url: 'https://youtube.com/@ValemVR', desc: 'VR geliştirme için en popüler başlangıç ve orta seviye eğitimleri.', lang: 'en' },
            { type: 'youtube', title: 'Dilmer Valecillos', url: 'https://youtube.com/@DilmerV', desc: 'AR, MR ve ileri seviye XR teknolojileri üzerine uzmanlaşmış kanal.', lang: 'en' },
            { type: 'youtube', title: 'Brackets', url: 'https://youtube.com/@Brackeys', desc: 'Unity ve C# temelleri için artık efsaneleşmiş bir kaynak.', lang: 'en' },
            { type: 'doc', title: 'Unity Learn', url: 'https://learn.unity.com', desc: 'Unity tarafından sunulan resmi ve ücretsiz öğrenme yolları.', lang: 'global' },
            { type: 'doc', title: 'Meta Quest Dev Docs', url: 'https://developer.oculus.com/documentation/', desc: 'Quest cihazları için en güncel dokümantasyon.', lang: 'global' },
            { type: 'tool', title: 'Blender', url: 'https://www.blender.org', desc: 'Kendi 3D modellerinizi oluşturmak için ücretsiz ve güçlü araç.', lang: 'global' },
            { type: 'tool', title: 'Mixamo', url: 'https://www.mixamo.com', desc: 'Hazır karakter animasyonları için Adobe altyapılı ücretsiz kütüphane.', lang: 'global' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Gaming In Turkey", "Kariyer.net"],
            top_skills: ["Unity", "C#", "ARCore/ARKit", "Shader Graph", "3D Math"],
            avg_salary: "Junior: 40k-55k TL | Mid: 70k-110k TL | Senior: 140k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Technest"],
            top_skills: ["Unity/Unreal Engine", "C#", "3D Modeling Knowledge", "Mobile AR"],
            avg_salary: "Junior: 900-1400 AZN | Mid: 1800-3000 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["XR Jobs Board", "LinkedIn", "Upwork (Freelance)"],
            top_skills: ["C++", "C#", "Computer Vision", "Real-time Rendering", "Simulations"],
            avg_salary: "Junior: $5k-$8k | Mid: $9k-$14k | Senior: $16k+ (Monthly/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: { tr: "Pahalı bir VR gözlüğüm olmadan başlayabilir miyim?", az: "Baha VR eynəyim olmadan başlaya bilərəm?", en: "Can I start without an expensive VR headset?" },
            a: { tr: "Evet. Unity'deki simülatörleri kullanabilir veya sadece AR (mobil telefon) üzerine çalışarak başlayabilirsiniz.", az: "Bəli. Unity simulyatorları və ya mobil AR (telefon) ilə başlaya bilərsiniz.", en: "Yes. You can use simulators in Unity or start with mobile AR using your phone." }
        },
        {
            id: 2,
            q: { tr: "Matematik çok önemli mi?", az: "Riyaziyyat çox vacibdir?", en: "Is math very important?" },
            a: { tr: "Basit projeler için hayır, ancak ileri seviye mekanikler ve optimizasyon için Vektör matematiği ve Trigonometri şarttır.", az: "Sadə layihələr üçün yox, amma irəli səviyyə mexanikalar üçün Vektor riyaziyyatı şərtdir.", en: "Not for simple apps, but essential for advanced mechanics and optimization." }
        }
    ],

    // 5. INTERVIEW PREP
    interview: [
        {
            id: 1,
            q: { tr: "Draw Call nedir ve neden azaltılmalıdır?", az: "Draw Call nədir?", en: "What is a Draw Call?" },
            a: { tr: "CPU'nun GPU'ya bir nesneyi çizmesi için gönderdiği komuttur. Çok fazla draw call performansı düşürür, bu yüzden 'batching' yapılır.", az: "CPU-nun GPU-ya obyekt çəkmək üçün göndərdiyi əmrdir. Çox olması performansı aşağı salır.", en: "A command sent by CPU to GPU to render an object. High counts drop performance; 'batching' is used to optimize." }
        },
        {
            id: 2,
            q: { tr: "ARCore ve ARKit arasındaki temel fark?", az: "ARCore və ARKit fərqi?", en: "Difference between ARCore and ARKit?" },
            a: { tr: "ARCore Google (Android) tarafındandır, ARKit ise Apple (iOS) tarafındandır. Çalışma mantıkları benzerdir (SLAM teknolojisi).", az: "ARCore Google (Android), ARKit isə Apple (iOS) tərəfindən yaradılıb. Məntiqləri bənzərdir.", en: "ARCore is by Google (Android), ARKit is by Apple (iOS). Both use SLAM technology." }
        }
    ],

    // 6. PROJECT HUB
    projects: [
        {
            id: 1,
            level: "junior",
            title: { tr: "AR Mobilya Yerleştirme", az: "AR Mebel Yerləşdirmə", en: "AR Furniture Placement" },
            desc: { tr: "Telefon kamerasıyla gerçek odaya 3D mobilya modelleri koyma uygulaması.", az: "Telefon kamerası ilə otağa 3D mebel modelləri qoymaq tətbiqi.", en: "An app to place 3D furniture models in a real room using the phone camera." },
            tech: ["Unity", "AR Foundation", "C#"],
            features: { tr: ["Yüzey algılama", "Obje döndürme", "Işık tahmini"], az: ["Səth aşkarlama", "Obyekt fırlatma", "İşıq təxmini"], en: ["Plane detection", "Object rotation", "Light estimation"] }
        },
        {
            id: 2,
            level: "mid",
            title: { tr: "VR Atış Poligonu", az: "VR Atış Poliqonu", en: "VR Shooting Range" },
            desc: { tr: "Fizik tabanlı silah etkileşimleri içeren bir VR deneyimi.", az: "Fizika əsaslı silah interaksiyaları olan VR təcrübəsi.", en: "A VR experience with physics-based weapon interactions." },
            tech: ["Meta Quest SDK", "XR Interaction Toolkit", "C#"],
            features: { tr: ["Geri tepme fiziği", "Şarjör değiştirme", "Hedef sistemi"], az: ["Təpmə fizikası", "Daraq dəyişmə", "Hədəf sistemi"], en: ["Recoil physics", "Reloading", "Target system"] }
        },
        {
            id: 3,
            level: "expert",
            title: { tr: "Çok Oyunculu MR Eğitim Simülasyonu", az: "Multiplayer MR Təlim Simulyasiyası", en: "Multiplayer MR Training Simulation" },
            desc: { tr: "Birden fazla kullanıcının aynı fiziksel ortamda sanal nesnelerle çalıştığı sistem.", az: "Bir neçə istifadəçinin eyni mühitdə virtual obyektlərlə işlədiyi sistem.", en: "A system where multiple users work with virtual objects in the same physical space." },
            tech: ["Photon Fusion / Mirror", "Mixed Reality Toolkit (MRTK)", "Spatial Anchors"],
            features: { tr: ["Shared Spatial Anchors", "Real-time senkronizasyon", "Sesli iletişim"], az: ["Məkan sinxronizasiyası", "Real-time data", "Səsli rabitə"], en: ["Shared Spatial Anchors", "Real-time sync", "Voice chat"] }
        }
    ]
};

contentData['qa-automation'] = {
    // 1. ROADMAP
    roadmap: {
    tr: [
        { title: "Test Temelleri", items: ["SDLC & STLC", "Bug Life Cycle", "Test Case Yazımı", "Kara Kutu & Beyaz Kutu Testi"], status: "start" },
        { title: "Programlama Dili", items: ["Java (En Yaygın)", "Python (Hızlı & Popüler)", "JavaScript/TypeScript (Modern Web)", "C#"], status: "start" },
        { title: "Web Otomasyonu", items: ["Selenium WebDriver", "Playwright (Modern & Hızlı)", "Cypress", "Locator Stratejileri (XPath, CSS)"], status: "mid" },
        { title: "API Testi", items: ["REST Assured (Java)", "Postman & Newman", "PyTest (Python)", "JSON & XML Doğrulama"], status: "mid" },
        { title: "Test Framework Mimarisi", items: ["Page Object Model (POM)", "Data Driven Testing", "Behavior Driven Development (Cucumber/Gherkin)", "Keyword Driven"], status: "mid" },
        { title: "Mobil Otomasyon", items: ["Appium (iOS & Android)", "Emulator & Simulator Yönetimi", "Mobile Gestures"], status: "advanced" },
        { title: "CI/CD & DevOps", items: ["Jenkins / GitHub Actions", "Docker (Test Container)", "Reporting (Allure, Extent Reports)", "Selenium Grid / Selenoid"], status: "advanced" },
        { title: "İleri Seviye Konular", items: ["Performance Testing (JMeter, K6)", "Security Testing Temelleri", "Visual Regression Testing", "Database Testing (SQL)"], status: "expert" },
        { title: "Kod Kalitesi & Mimari", items: ["Clean Code for Testers", "Design Patterns in Automation", "Flaky Test Yönetimi", "Custom Framework Geliştirme"], status: "expert" }
    ],
    az: [
        { title: "Test Əsasları", items: ["SDLC & STLC", "Bug Həyat Dövrü", "Test Case Dizaynı", "Test Plan Hazırlanması"], status: "start" },
        { title: "Proqramlaşdırma", items: ["Java", "Python", "JavaScript", "OOP Prinsipləri"], status: "start" },
        { title: "Veb Avtomatlaşdırma", items: ["Selenium WebDriver", "Playwright", "Cypress", "Element Locators"], status: "mid" },
        { title: "API Testi", items: ["REST Assured", "Postman", "Request & Response Doğrulanması", "Swagger"], status: "mid" },
        { title: "Test Arxitekturası", items: ["Page Object Model (POM)", "BDD (Cucumber)", "Data Driven Testing", "TestNG / JUnit"], status: "mid" },
        { title: "Mobil Testlər", items: ["Appium", "Android & iOS Testləri", "Cloud Testing (BrowserStack)"], status: "advanced" },
        { title: "DevOps & Hesabat", items: ["CI/CD İnteqrasiyası", "Docker", "Allure Report", "Jenkins"], status: "advanced" },
        { title: "İrəli Səviyyə Mövzular", items: ["Performans Testi (JMeter)", "Yük Testləri", "SQL & DB Verifikasiyası", "Security Scans"], status: "expert" },
        { title: "Kod Keyfiyyəti", items: ["Automation Design Patterns", "Custom Frameworks", "Parallel Execution", "Flaky Test Management"], status: "expert" }
    ],
    en: [
        { title: "Testing Fundamentals", items: ["SDLC & STLC", "Bug Life Cycle", "Test Case Design", "Black Box & White Box Testing"], status: "start" },
        { title: "Programming Languages", items: ["Java", "Python", "JavaScript/TypeScript", "OOP for Automation"], status: "start" },
        { title: "Web Automation", items: ["Selenium WebDriver", "Playwright", "Cypress", "Locator Strategies (XPath/CSS)"], status: "mid" },
        { title: "API Testing", items: ["REST Assured", "Postman & Newman", "Contract Testing", "JSON/XML Validation"], status: "mid" },
        { title: "Framework Architecture", items: ["Page Object Model (POM)", "BDD (Cucumber/Gherkin)", "Data Driven Testing", "Test Runners (JUnit/Pytest)"], status: "mid" },
        { title: "Mobile Automation", items: ["Appium", "Android & iOS Emulators", "Mobile Gestures & Contexts"], status: "advanced" },
        { title: "CI/CD & DevOps", items: ["Jenkins / GitHub Actions", "Docker for Tests", "Test Reporting (Allure)", "Cloud Grids (BrowserStack/SauceLabs)"], status: "advanced" },
        { title: "Advanced Topics", items: ["Performance Testing (JMeter/K6)", "Security Fundamentals", "Visual Regression", "Database Testing"], status: "expert" },
        { title: "Code Quality & Patterns", items: ["Clean Code for Testers", "Automation Design Patterns", "Flaky Test Management", "Custom Framework Development"], status: "expert" }
    ]
},

    // 2. RESOURCES
    resources: {
        items: [
            { type: 'youtube', title: 'SDET-QA Automation Techie', url: 'https://youtube.com/@sdetpavan', desc: 'Java, Selenium ve API testi üzerine dünyanın en kapsamlı kanallarından biri.', lang: 'en' },
            { type: 'youtube', title: 'Test Automation University', url: 'https://testautomationu.applitools.com', desc: 'Ücretsiz, sertifikalı ve her dilde (Java, JS, Python) harika kurslar.', lang: 'en' },
            { type: 'youtube', title: 'Naveen AutomationLabs', url: 'https://youtube.com/@NaveenAutomationLabs', desc: 'Pratik çözümler ve mülakat hazırlığı için mükemmel kaynak.', lang: 'en' },
            { type: 'doc', title: 'Selenium Documentation', url: 'https://www.selenium.dev/documentation/', desc: 'Sektör standardı olan aracın resmi rehberi.', lang: 'global' },
            { type: 'doc', title: 'Playwright.dev', url: 'https://playwright.dev', desc: 'Yeni nesil otomasyon aracının modern dokümantasyonu.', lang: 'global' },
            { type: 'tool', title: 'Postman', url: 'https://www.postman.com', desc: 'API testleri için vazgeçilmez arayüz.', lang: 'global' },
            { type: 'tool', title: 'JMeter', url: 'https://jmeter.apache.org', desc: 'Performans ve yük testleri için açık kaynaklı standart.', lang: 'global' }
        ]
    },

    // 3. JOBS & SALARY
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Peak Games / Trendyol Jobs"],
            top_skills: ["Selenium", "Java/C#", "Appium", "API Testing", "CI/CD"],
            avg_salary: "Junior: 45k-65k TL | Mid: 75k-115k TL | Senior: 150k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Banks (ABB, Kapital, Pasha)"],
            top_skills: ["QA Principles", "Java/Python", "Selenium", "SQL", "Postman"],
            avg_salary: "Junior: 1000-1600 AZN | Mid: 2000-3500 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["LinkedIn", "Glassdoor", "Remote.co", "Dice"],
            top_skills: ["Playwright", "TypeScript", "SDET Skills", "Performance Engineering", "AWS"],
            avg_salary: "Junior: $4k-$6k | Mid: $7k-$11k | Senior: $13k+ (Monthly/Remote)"
        }
    },

    // 4. FAQ
    faq: [
        {
            id: 1,
            q: { tr: "QA Automation için yazılım bilmek şart mı?", az: "QA Automation üçün proqramlaşdırma vacibdir?", en: "Is coding necessary for QA Automation?" },
            a: { tr: "Evet. Manuel test temeli üzerine en az bir programlama dilinde (Java, Python vb.) yetkin olmanız gerekir.", az: "Bəli. Ən azı bir proqramlaşdırma dilini orta səviyyədə bilmək vacibdir.", en: "Yes. You need to be proficient in at least one programming language on top of manual testing basics." }
        },
        {
            id: 2,
            q: { tr: "SDET nedir?", az: "SDET nədir?", en: "What is SDET?" },
            a: { tr: "Software Development Engineer in Test. Sadece test yapan değil, test araçlarını ve framework'leri kodlayan mühendistir.", az: "Həm test yazan, həm də test alətləri və framework-ləri hazırlayan mühəndis.", en: "Software Development Engineer in Test. An engineer who builds test tools and frameworks, not just running tests." }
        }
    ],

    // 5. INTERVIEW PREP
    interview: [
        {
            id: 1,
            q: { tr: "Implicit Wait vs Explicit Wait?", az: "Implicit vs Explicit Wait fərqi?", en: "Implicit vs Explicit Wait?" },
            a: { tr: "Implicit: Tüm elementler için genel bekleme süresi. Explicit: Belirli bir elementin belirli bir koşulu (görünürlük vb.) sağlaması için bekleme.", az: "Implicit bütün elementləri, Explicit isə konkret bir şərti (məs. düymənin görünməsi) gözləyir.", en: "Implicit is a global wait for all elements. Explicit is a conditional wait for a specific element." }
        },
        {
            id: 2,
            q: { tr: "Regression Testing nedir?", az: "Reqressiya testi nədir?", en: "What is Regression Testing?" },
            a: { tr: "Yeni yapılan değişikliklerin mevcut özelliklerin bozulup bozulmadığını kontrol etmek için yapılan testlerdir.", az: "Yeni dəyişikliklərin köhnə işlək funksiyaları pozub-pozmadığını yoxlamaq üçün edilən test.", en: "Testing to ensure that new code changes haven't adversely affected existing features." }
        }
    ],

    // 6. PROJECT HUB
    projects: [
        {
            id: 1,
            level: "junior",
            title: { tr: "E-Ticaret UI Otomasyonu", az: "E-Ticarət UI Testi", en: "E-commerce UI Automation" },
            desc: { tr: "Bir alışveriş sitesinde ürün arama, sepete ekleme ve ödeme adımlarının otomatik testi.", az: "Məhsul axtarışı, səbətə əlavə və ödəniş addımlarının avtomatlaşdırılması.", en: "Automating product search, add to cart, and checkout flow on a web site." },
            tech: ["Selenium", "Java/JUnit", "Maven"],
            features: { tr: ["Form doldurma", "Assertion (Doğrulama)", "Ekran görüntüsü alma"], az: ["Formların doldurulması", "Yoxlama nöqtələri", "Screenshot"], en: ["Form filling", "Assertions", "Screenshots on failure"] }
        },
        {
            id: 2,
            level: "mid",
            title: { tr: "Hybrid API & UI Framework", az: "Hibrid Test Framework", en: "Hybrid API & UI Framework" },
            desc: { tr: "Hem API üzerinden veri hazırlayan hem de UI üzerinden doğrulama yapan framework.", az: "Həm API, həm də UI səviyyəsində test edən sistem.", en: "A framework that handles data setup via API and verification via UI." },
            tech: ["Playwright", "TypeScript", "Allure Reports", "Postman"],
            features: { tr: ["Page Object Model", "API Chaining", "Parallel Execution"], az: ["POM arxitekturası", "Parallel testlər", "API zəncirləmə"], en: ["Page Object Model", "API Chaining", "Parallel Execution"] }
        },
        {
            id: 3,
            level: "expert",
            title: { tr: "CI/CD Pipeline & Load Test", az: "CI/CD & Yük Testi Sistemi", en: "Full CI/CD & Load Testing" },
            desc: { tr: "GitHub Actions ile her committe koşan ve JMeter ile performans ölçen sistem.", az: "Hər kod dəyişikliyində işləyən və performans ölçən tam avtomatlaşdırılmış boru xətti.", en: "Automated pipeline running on every commit with performance testing integrated." },
            tech: ["Docker", "GitHub Actions", "JMeter", "Selenium Grid"],
            features: { tr: ["Konteynerize testler", "Slack entegrasyonu", "Performance thresholds"], az: ["Dockerize testlər", "Avtomatik hesabat", "Performans limitləri"], en: ["Containerized tests", "Slack alerts", "Performance thresholds"] }
        }
    ]
};
// 3. GLOBAL FAQ DATA
export const globalFaqData = [
    {
        category: { en: 'General Software & Career', tr: 'Genel Yazılım ve Kariyer', az: 'Ümumi Proqramlaşdırma və Karyera' },
        questions: [
            {
                id: 'gs-1',
                q: {
                    tr: 'Sıfırdan yazılıma başlamak istiyorum, nereden başlamalıyım?',
                    az: 'Sıfırdan proqramlaşdırmaya başlamaq istəyirəm, haradan başlamalıyam?',
                    en: 'I want to start coding from scratch, where should I begin?'
                },
                a: {
                    tr: 'Önce algoritma mantığını kavramalısın. "Roadmap.sh" sitesinden kendine bir yol haritası seç. Başlangıç için Python (sözdizimi kolaylığı) veya Web için HTML/CSS/JS önerilir. Ücretsiz kaynak olarak "FreeCodeCamp" ve "BTK Akademi" mükemmeldir.',
                    az: 'Əvvəlcə alqoritm məntiqini anlamalısan. "Roadmap.sh" saytından özünə bir yol xəritəsi seç. Başlanğıc üçün Python (sintaksis asanlığı) və ya Veb üçün HTML/CSS/JS tövsiyə olunur. Pulsuz qaynaq olaraq "FreeCodeCamp" və "BTK Akademi" mükəmməldir.',
                    en: 'First, grasp the logic of algorithms. Choose a roadmap from "Roadmap.sh". Python is recommended for beginners, or HTML/CSS/JS for Web. "FreeCodeCamp" is an excellent free resource.'
                }
            },
            {
                id: 'gs-2',
                q: {
                    tr: 'Hangi bilgisayarı almalıyım? (Donanım Tavsiyesi)',
                    az: 'Hansı kompüteri almalıyam? (Avadanlıq Məsləhəti)',
                    en: 'Which computer should I buy? (Hardware Advice)'
                },
                a: {
                    tr: 'Hafiflik ve pil ömrü önemlidir. En az 16GB RAM ve SSD disk şarttır. Sanal makine (VM) kullanacaksanız işlemci gücü (M1/M2/M3 Mac veya Ryzen 7/Intel i7) kritik önem taşır. Oyun laptopları ağırdır, Ultrabook veya MacBook iş için daha idealdir.',
                    az: 'Yüngüllük və batareya ömrü vacibdir. Ən azı 16GB RAM və SSD disk şərtdir. Virtual maşın (VM) istifadə edəcəksinizsə, prosessor gücü (M1/M2/M3 Mac və ya Ryzen 7/Intel i7) kritik əhəmiyyət daşıyır. Oyun noutbukları ağırdır, Ultrabook və ya MacBook iş üçün daha idealdır.',
                    en: 'Portability and battery life are key. Minimum 16GB RAM and SSD are a must. If using VMs, CPU power (M1/M2/M3 Mac or Ryzen 7/Intel i7) is critical. Gaming laptops are heavy; Ultrabooks or MacBooks are better for work.'
                }
            },
            {
                id: 'gs-3',
                q: {
                    tr: 'Python öğrenmek için en iyi kaynaklar neler?',
                    az: 'Python öyrənmək üçün ən yaxşı qaynaqlar hansılardır?',
                    en: 'What are the best resources to learn Python?'
                },
                a: {
                    tr: 'Türkçe dokümantasyon için "YazBel", videolu eğitim için "BTK Akademi" ve "Yazılım Bilimi" kanalı. İngilizce için Harvard\'ın efsanevi "CS50 Python" kursu ve "Tech With Tim" YouTube kanalı tavsiye edilir.',
                    az: 'Türkcə sənədlər üçün "YazBel", video dərslər üçün "BTK Akademi" və "Yazılım Bilimi" kanalı. İngiliscə üçün Harvardın əfsanəvi "CS50 Python" kursu və "Tech With Tim" YouTube kanalı tövsiyə olunur.',
                    en: 'For Turkish docs "YazBel", for video "BTK Akademi". For English, Harvard\'s legendary "CS50 Python" course and "Tech With Tim" YouTube channel are highly recommended.'
                }
            },
            {
                id: 'gs-4',
                q: {
                    tr: 'Mobil uygulama geliştirmek istiyorum: Flutter mı, React Native mi?',
                    az: 'Mobil tətbiq hazırlamaq istəyirəm: Flutter yoxsa React Native?',
                    en: 'I want to develop mobile apps: Flutter or React Native?'
                },
                a: {
                    tr: 'Eğer Web (JavaScript/React) geçmişin varsa "React Native" ile çok hızlı adapte olursun. Tek kodla yüksek performans ve her iki platforma (iOS/Android) çıktı almak istiyorsan Google\'ın "Flutter" teknolojisi şu an çok revaçta.',
                    az: 'Əgər Veb (JavaScript/React) təcrübən varsa "React Native" ilə çox sürətli uyğunlaşarsan. Tək kodla yüksək performans və hər iki platformaya (iOS/Android) çıxış almaq istəyirsənsə, Google-un "Flutter" texnologiyası hazırda çox populyardır.',
                    en: 'If you have a Web (JS/React) background, you will adapt quickly to "React Native". For single-codebase high performance on both iOS/Android, Google\'s "Flutter" is currently very popular.'
                }
            },
            {
                id: 'gs-5',
                q: {
                    tr: 'Yapay Zeka (AI) işimizi elimizden alacak mı?',
                    az: 'Süni İntellekt (AI) işimizi əlimizdən alacaqmı?',
                    en: 'Will AI take our jobs?'
                },
                a: {
                    tr: 'AI, kod yazmayı "amelelikten" çıkarıp "mimarlığa" dönüştürüyor. AI bir rakipten ziyade "süper zeki bir stajyerdir". Onu kullanan yazılımcı, kullanmayanın yerini alacaktır. Vizyon ve mimari yetenek hala insana özgüdür.',
                    az: 'AI kod yazmağı "hamallıqdan" çıxarıb "memarlığa" çevirir. AI rəqibdən çox "super ağıllı təcrübəçidir". Onu istifadə edən proqramçı, etməyəni əvəz edəcək. Vizyon və memarlıq qabiliyyəti hələ də insana məxsusdur.',
                    en: 'AI transforms coding from "grunt work" to "architecture". AI is a "super-smart intern" rather than a rival. Developers using AI will replace those who don\'t. Vision and architectural skills are still uniquely human.'
                }
            },
            {
                id: 'gs-6',
                q: {
                    tr: 'Cursor, Copilot ve "Vibe Coding" nedir?',
                    az: 'Cursor, Copilot və "Vibe Coding" nədir?',
                    en: 'What are Cursor, Copilot, and "Vibe Coding"?'
                },
                a: {
                    tr: 'Copilot kod öneren asistanınız, Cursor ise kod yazan AI tabanlı editördür. "Vibe Coding", kodu satır satır yazmak yerine, AI\'a ne istediğini tarif ederek hızlıca prototip çıkarma akımıdır.',
                    az: 'Copilot kod təklif edən köməkçiniz, Cursor isə kod yazan AI əsaslı redaktordur. "Vibe Coding", kodu sətir-sətir yazmaq əvəzinə, AI-a nə istədiyini izah edərək sürətli prototip hazırlamaq axınıdır.',
                    en: 'Copilot is your assistant suggesting code, Cursor is an AI-based editor that writes code. "Vibe Coding" is the flow of rapidly prototyping by describing intent to AI instead of writing line by line.'
                }
            },
            {
                id: 'gs-7',
                q: {
                    tr: 'Neden herkes Rust ve Go dillerini konuşuyor?',
                    az: 'Niyə hər kəs Rust və Go dillərindən danışır?',
                    en: 'Why is everyone talking about Rust and Go?'
                },
                a: {
                    tr: 'Rust, bellek güvenliği ve C++ hızı sunduğu için geleceğin sistem dilidir. Go (Golang) ise Google tarafından geliştirilen, basit yapısı ve Cloud/DevOps (Docker/Kubernetes) dünyasının standardı olduğu için popülerdir.',
                    az: 'Rust, yaddaş təhlükəsizliyi və C++ sürəti təklif etdiyi üçün gələcəyin sistem dilidir. Go (Golang) isə Google tərəfindən inkişaf etdirilən, sadə strukturu və Cloud/DevOps standartı olduğu üçün məşhurdur.',
                    en: 'Rust is seen as the future system language offering memory safety with C++ speed. Go (Golang) is popular for its simplicity and being the standard in the Cloud/DevOps (Docker/Kubernetes) world.'
                }
            },
            {
                id: 'gs-8',
                q: {
                    tr: 'Framework ve Library (Kütüphane) farkı nedir?',
                    az: 'Framework və Library (Kitabxana) fərqi nədir?',
                    en: 'What is the difference between Framework and Library?'
                },
                a: {
                    tr: 'Library (örn: React) çanta gibidir, ihtiyacın olunca sen çağırırsın. Framework (örn: Angular) evin iskeleti gibidir, kuralları o koyar ve o seni çağırır. Framework daha kısıtlayıcı ama daha düzenlidir.',
                    az: 'Library (məs: React) çanta kimidir, ehtiyacın olanda sən çağırırsan. Framework (məs: Angular) evin skeleti kimidir, qaydaları o qoyur və o səni çağırır. Framework daha məhdudlaşdırıcı amma daha nizamlıdır.',
                    en: 'A Library (e.g., React) is like a toolbox; you call it when needed. A Framework (e.g., Angular) is like a house skeleton; it sets the rules and calls you. Frameworks are more restrictive but organized.'
                }
            },
            {
                id: 'gs-9',
                q: {
                    tr: 'Freelance (Serbest) yazılımcı olarak nasıl iş bulurum?',
                    az: 'Freelance (Sərbəst) proqramçı kimi necə iş taparam?',
                    en: 'How can I find work as a Freelance developer?'
                },
                a: {
                    tr: 'Upwork, Fiverr ve Bionluk başlangıçtır. Ancak yüksek gelirli işler Networking (çevre) ve güçlü bir GitHub/LinkedIn profili ile gelir. Sadece başvuran değil, aranan kişi olmalısınız.',
                    az: 'Upwork, Fiverr və Bionluk başlanğıcdır. Lakin yüksək gəlirli işlər Networking (çevrə) və güclü bir GitHub/LinkedIn profili ilə gəlir. Sadəcə müraciət edən yox, axtarılan şəxs olmalısınız.',
                    en: 'Upwork, Fiverr, and Bionluk are starting points. However, high-paying jobs come from Networking and a strong GitHub/LinkedIn profile. You should be the sought-after person, not just an applicant.'
                }
            },
            {
                id: 'gs-10',
                q: {
                    tr: 'SDLC (Yazılım Geliştirme Yaşam Döngüsü) nedir?',
                    az: 'SDLC (Proqram Təminatının İnkişaf Dövrü) nədir?',
                    en: 'What is SDLC (Software Development Life Cycle)?'
                },
                a: {
                    tr: 'Yazılımın doğumundan ölümüne kadar geçen süreçtir: Planlama -> Analiz -> Tasarım -> Kodlama -> Test -> Bakım. Bu döngü profesyonel projelerin temelidir.',
                    az: 'Proqramın yaranmasından sonuna qədər olan prosesdir: Planlama -> Analiz -> Dizayn -> Kodlama -> Test -> Baxım. Bu dövr peşəkar layihələrin təməlidir.',
                    en: 'It is the process from the birth to the death of software: Planning -> Analysis -> Design -> Coding -> Testing -> Maintenance. This cycle is the foundation of professional projects.'
                }
            },
        ]
    },
    {
        category: { en: 'Cyber Security', tr: 'Siber Güvenlik', az: 'Kiber Təhlükəsizlik' },
        questions: [
            {
                id: 'cs-1',
                q: {
                    tr: 'Siber Güvenlik için üniversite okumak şart mı?',
                    az: 'Kiber Təhlükəsizlik üçün universitet oxumaq şərtdir?',
                    en: 'Is a university degree required for Cyber Security?'
                },
                a: {
                    tr: 'Diplomasız çalışan çok yetenekli uzmanlar var (Alaylı). Ancak mühendislik formasyonu analitik düşünmeyi öğretir ve özellikle kurumsal firmalarda/yurt dışında diploma hala bir "vize" niteliğindedir. Okumuyorsanız açığı kapatmak için 2 kat çalışmalısınız.',
                    az: 'Diplomsuz işləyən çox istedadlı mütəxəssislər var. Lakin mühəndislik təhsili analitik düşüncəni öyrədir və xüsusilə korporativ şirkətlərdə/xaricdə diplom hələ də "viza" rolunu oynayır. Oxumursunuzsa, boşluğu doldurmaq üçün 2 qat çalışmalısınız.',
                    en: 'There are talented experts without degrees. However, engineering education teaches analytical thinking, and a degree is still a "visa" for corporate firms and working abroad. If not studying, work twice as hard.'
                }
            },
            {
                id: 'cs-2',
                q: {
                    tr: 'Kali Linux için hangi Wifi Adaptörünü almalıyım?',
                    az: 'Kali Linux üçün hansı Wifi Adaptorunu almalıyam?',
                    en: 'Which Wifi Adapter should I buy for Kali Linux?'
                },
                a: {
                    tr: 'Markaya değil, içindeki "Chipset"e bakmalısın. Adaptörün "Monitor Mode" ve "Packet Injection" desteklemesi şarttır. Google\'da "wifi adapters support kali monitoring" diye aratarak güncel chipset listesine (örn: Atheros AR9271) ulaşabilirsin.',
                    az: 'Markaya yox, içindəki "Chipset"ə baxmalısan. Adaptorun "Monitor Mode" və "Packet Injection" dəstəkləməsi şərtdir. Google-da "wifi adapters support kali monitoring" yazaraq aktual chipset siyahısına (məs: Atheros AR9271) baxa bilərsən.',
                    en: 'Focus on the "Chipset", not the brand. The adapter must support "Monitor Mode" and "Packet Injection". Search "wifi adapters support kali monitoring" on Google for the current chipset list.'
                }
            },
            {
                id: 'cs-3',
                q: {
                    tr: 'Web Uygulama Güvenliği (Web Sec) için en iyi kaynaklar?',
                    az: 'Veb Tətbiq Təhlükəsizliyi (Web Sec) üçün ən yaxşı qaynaqlar?',
                    en: 'Best resources for Web Application Security?'
                },
                a: {
                    tr: 'Bu işin incili "PortSwigger Academy"dir (ücretsizdir). Ayrıca "OWASP Top 10" listesini ezbere bilmelisin. Pratik yapmak için "TryHackMe OWASP" odaları ve "HackerOne" raporlarını okumak çok faydalıdır.',
                    az: 'Bu işin əlifbası "PortSwigger Academy"-dir (pulsuzdur). Həmçinin "OWASP Top 10" siyahısını əzbər bilməlisən. Təcrübə üçün "TryHackMe OWASP" otaqları və "HackerOne" hesabatlarını oxumaq çox faydalıdır.',
                    en: 'The bible of this field is "PortSwigger Academy" (free). You must also memorize the "OWASP Top 10". For practice, "TryHackMe OWASP" rooms and reading "HackerOne" reports are very useful.'
                }
            },
            {
                id: 'cs-4',
                q: {
                    tr: 'Network (Ağ) öğrenmeye nereden başlamalıyım?',
                    az: 'Şəbəkə (Network) öyrənməyə haradan başlamalıyam?',
                    en: 'Where should I start learning Networking?'
                },
                a: {
                    tr: 'Hedefin CCNA eğitimi olmalı. YouTube\'da "NetworkChuck" kanalı (çok eğlenceli anlatır) ve Türkçe olarak "Turkcell Geleceği Yazanlar"ın network modülleri başlangıç için harikadır. Network bilmeden hacker olunmaz.',
                    az: 'Hədəfin CCNA təhsili olmalıdır. YouTube-da "NetworkChuck" kanalı (çox əyləncəli izah edir) və Türkcə olaraq "Turkcell Geleceği Yazanlar"ın şəbəkə modulları başlanğıc üçün əladır. Şəbəkə bilmədən haker olunmaz.',
                    en: 'Target CCNA training. "NetworkChuck" on YouTube (very entertaining) and "Turkcell Geleceği Yazanlar" (for Turkish content) are great for basics. You can\'t be a hacker without knowing networking.'
                }
            },
            {
                id: 'cs-5',
                q: {
                    tr: 'Sızma testi (Pentest) pratiklerini yasal olarak nerede yaparım?',
                    az: 'Sızma testi (Pentest) təcrübələrini qanuni olaraq harada edərəm?',
                    en: 'Where can I legally practice Penetration Testing?'
                },
                a: {
                    tr: 'Kendi laboratuvarını kurabilirsin ya da "TryHackMe", "HackTheBox" gibi platformları kullanabilirsin. Gerçek sitelere izinsiz sakın dokunma! Türkçe pratik için "CyberExam" platformuna da göz atabilirsin.',
                    az: 'Öz laboratoriyanı qura bilərsən və ya "TryHackMe", "HackTheBox" kimi platformalardan istifadə edə bilərsən. Həqiqi saytlara icazəsiz qətiyyən toxunma! Türkcə təcrübə üçün "CyberExam" platformasına da baxa bilərsən.',
                    en: 'You can set up your own lab or use platforms like "TryHackMe" and "HackTheBox". Never touch real sites without permission! Check out "CyberExam" for Turkish practice.'
                }
            },
            {
                id: 'cs-6',
                q: {
                    tr: 'Kali Linux mu, Parrot OS mu?',
                    az: 'Kali Linux yoxsa Parrot OS?',
                    en: 'Kali Linux or Parrot OS?'
                },
                a: {
                    tr: 'Tamamen zevk meselesi. Kali endüstri standardıdır ve kaynak boldur. Parrot ise daha hafiftir ve günlük kullanıma daha uygundur. Başlangıç için Kali\'yi sanal makinede (VirtualBox) kurup denemeni öneririz.',
                    az: 'Tamamilə zövq məsələsidir. Kali sənaye standartıdır və qaynaq çoxdur. Parrot isə daha yüngüldür və gündəlik istifadəyə uyğundur. Başlanğıc üçün Kali-ni virtual maşında (VirtualBox) qurub yoxlamağı məsləhət görürük.',
                    en: 'It is entirely a matter of taste. Kali is the industry standard with abundant resources. Parrot is lighter and better for daily use. We recommend installing Kali on a VM (VirtualBox) to start.'
                }
            }
        ]
    }
];

// 4. GLOBAL RESOURCES
export const globalResourcesData = [
    // 🤖 AI & LLM
    {
        category: { en: 'AI & LLM Tools', tr: 'Yapay Zeka (AI) Araçları', az: 'Süni İntellekt (AI) Alətləri' },
        items: [
            { type: 'tool', title: 'Google NotebookLLM', url: 'https://notebooklm.google.com', desc: 'Upload docs, get summaries & podcasts.', lang: 'global' },
            { type: 'tool', title: 'Cursor Editor', url: 'https://cursor.sh', desc: 'VS Code fork with built-in AI superpowers.', lang: 'en' },
            { type: 'tool', title: 'ChatGPT', url: 'https://chat.openai.com', desc: 'The leading AI assistant.', lang: 'global' },
            { type: 'tool', title: 'Claude', url: 'https://claude.ai', desc: 'Anthropic\'s powerful AI model.', lang: 'global' },
            { type: 'tool', title: 'Perplexity', url: 'https://perplexity.ai', desc: 'AI search engine with citations.', lang: 'global' },
            { type: 'tool', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'The GitHub of AI models & datasets.', lang: 'en' },
            { type: 'tool', title: 'Ollama', url: 'https://ollama.com', desc: 'Run LLMs locally on your machine.', lang: 'en' },
            { type: 'tool', title: 'LangChain', url: 'https://langchain.com', desc: 'Framework for building LLM apps.', lang: 'en' }
        ]
    },
    // 💻 Computer Science
    {
        category: { en: 'Computer Science', tr: 'Bilgisayar Bilimi', az: 'Kompüter Elmləri' },
        items: [
            { type: 'course', title: 'Harvard CS50x', url: 'https://cs50.harvard.edu/x', desc: 'Best intro to CS in the world.', lang: 'en' },
            { type: 'youtube', title: 'Computerphile', url: 'https://www.youtube.com/user/Computerphile', desc: 'Great videos for understanding concepts.', lang: 'en' },
            { type: 'youtube', title: 'Crash Course CS', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrcyKGWx779NwjMGEDp4', desc: 'Fast & fun overview of CS history.', lang: 'en' },
            { type: 'course', title: 'OSSU CS', url: 'https://github.com/ossu/computer-science', desc: 'Complete self-taught CS curriculum.', lang: 'en' }
        ]
    },
    // 🔐 Cryptography
    {
        category: { en: 'Cryptography', tr: 'Kriptografi', az: 'Kriptoqrafiya' },
        items: [
            { type: 'course', title: 'Cryptography (Stanford)', url: 'https://www.coursera.org/learn/crypto', desc: 'Deep dive into crypto fundamentals.', lang: 'en' },
            { type: 'book', title: 'Crypto101', url: 'https://www.crypto101.io', desc: 'Introductory course on cryptography.', lang: 'en' },
            { type: 'tool', title: 'CyberChef', url: 'https://gchq.github.io/CyberChef', desc: 'The Cyber Swiss Army Knife.', lang: 'global' }
        ]
    },
    // 🚩 CTF & Practice
    {
        category: { en: 'CTF & Practice', tr: 'CTF & Hacking Pratik', az: 'CTF & Təcrübə' },
        items: [
            { type: 'tool', title: 'PicoCTF', url: 'https://picoctf.org', desc: 'Best for beginners.', lang: 'en' },
            { type: 'tool', title: 'HackTheBox', url: 'https://hackthebox.com', desc: 'Industry standard for pentesting.', lang: 'en' },
            { type: 'tool', title: 'TryHackMe', url: 'https://tryhackme.com', desc: 'Guided rooms for learning security.', lang: 'en' },
            { type: 'tool', title: 'OverTheWire', url: 'https://overthewire.org', desc: 'Learn Linux & CLI via games (Bandit).', lang: 'en' }
        ]
    },
    // 🕵️ OSINT
    {
        category: { en: 'OSINT', tr: 'Açık Kaynak İstihbaratı', az: 'Açıq Mənbə Kəşfiyyatı' },
        items: [
            { type: 'book', title: 'OSINT Techniques', url: 'https://inteltechniques.com/book1.html', desc: 'By Michael Bazzell.', lang: 'en' },
            { type: 'doc', title: 'Bellingcat', url: 'https://www.bellingcat.com', desc: 'Investigative journalism & techniques.', lang: 'en' },
            { type: 'tool', title: 'OSINT Framework', url: 'https://osintframework.com', desc: 'Collection of OSINT tools.', lang: 'en' },
            { type: 'tool', title: 'Sherlock', url: 'https://github.com/sherlock-project/sherlock', desc: 'Hunt down social media accounts.', lang: 'en' }
        ]
    },
    // ⌨️ Programming
    {
        category: { en: 'Programming', tr: 'Yazılım & Geliştirme', az: 'Proqramlaşdırma' },
        items: [
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh', desc: 'Developer roadmaps.', lang: 'en' },
            { type: 'course', title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org', desc: 'Learn to code for free.', lang: 'en' },
            { type: 'book', title: 'Free Prog. Books', url: 'https://github.com/EbookFoundation/free-programming-books', desc: 'Massive collection of free books.', lang: 'global' },
            { type: 'doc', title: 'Learn X in Y Minutes', url: 'https://learnxinyminutes.com', desc: 'Quick reference for languages.', lang: 'en' }
        ]
    },
    // 🐍 Python
    {
        category: { en: 'Python', tr: 'Python Kaynakları', az: 'Python Resursları' },
        items: [
            { type: 'course', title: 'CS50P (Harvard)', url: 'https://cs50.harvard.edu/python', desc: 'Harvard\'s Python dedicated course.', lang: 'en' },
            { type: 'youtube', title: 'Corey Schafer', url: 'https://www.youtube.com/user/schafer5', desc: 'Top tier Python tutorials.', lang: 'en' },
            { type: 'doc', title: 'Real Python', url: 'https://realpython.com', desc: 'High quality articles.', lang: 'en' },
            { type: 'doc', title: 'YazBel', url: 'https://yazbel.com', desc: 'Türkçe Python dokümantasyonu.', lang: 'tr' }
        ]
    },
    // ⚙️ Reverse Engineering
    {
        category: { en: 'Reverse Engineering', tr: 'Tersine Mühendislik', az: 'Tərs Mühəndislik' },
        items: [
            { type: 'book', title: 'RE for Beginners', url: 'https://beginners.re', desc: 'Free classic book.', lang: 'en' },
            { type: 'tool', title: 'Ghidra', url: 'https://ghidra-sre.org', desc: 'Free RE tool by NSA.', lang: 'en' }
        ]
    },
    // 🌐 Web Security
    {
        category: { en: 'Web Security', tr: 'Web Güvenliği', az: 'Veb Təhlükəsizliyi' },
        items: [
            { type: 'course', title: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', desc: 'Best free web security training.', lang: 'en' },
            { type: 'doc', title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', desc: 'Must know security risks.', lang: 'en' },
            { type: 'youtube', title: 'NahamSec', url: 'https://www.youtube.com/@NahamSec', desc: 'Bug Bounty & Web Sec.', lang: 'en' }
        ]
    },
    // 📺 YouTube Channels
    {
        category: { en: 'YouTube Channels', tr: 'YouTube Kanalları', az: 'YouTube Kanalları' },
        items: [
            { type: 'youtube', title: 'Can Değer', url: 'https://www.youtube.com/@CanDeger', desc: 'Siber Güvenlik & Teknoloji.', lang: 'tr' },
            { type: 'youtube', title: 'NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck', desc: 'Hacking & Networking hype.', lang: 'en' },
            { type: 'youtube', title: 'John Hammond', url: 'https://www.youtube.com/@_JohnHammond', desc: 'Malware analysis & CTF.', lang: 'en' },
            { type: 'youtube', title: 'LiveOverflow', url: 'https://www.youtube.com/@LiveOverflow', desc: 'Deep technical hacking.', lang: 'en' },
            { type: 'youtube', title: 'Fireship', url: 'https://www.youtube.com/@Fireship', desc: 'Code in 100 seconds.', lang: 'en' },
            { type: 'youtube', title: 'Prototürk', url: 'https://www.youtube.com/@prototurk', desc: 'Web Geliştirme.', lang: 'tr' }
        ]
    },
    // 🐛 Bug Bounty
    {
        category: { en: 'Bug Bounty', tr: 'Bug Bounty', az: 'Bug Bounty' },
        items: [
            { type: 'doc', title: 'Google Bughunters', url: 'https://bughunters.google.com', desc: 'Google\'s learning materials.', lang: 'en' },
            { type: 'course', title: 'HackerOne CTF', url: 'https://ctf.hacker101.com', desc: 'Practice while learning.', lang: 'en' }
        ]
    },
    // ☁️ Cloud
    {
        category: { en: 'Cloud Computing', tr: 'Bulut Bilişim', az: 'Bulud Hesablamaları' },
        items: [
            { type: 'doc', title: 'Awesome Cloud Sec', url: 'https://github.com/ypris/Awesome-Cloud-Security', desc: 'Everything about cloud security.', lang: 'en' },
            { type: 'course', title: 'AWS Skill Builder', url: 'https://explore.skillbuilder.aws', desc: 'Free AWS training.', lang: 'en' },
            { type: 'course', title: 'Microsoft Learn', url: 'https://learn.microsoft.com', desc: 'Azure fundamentals.', lang: 'en' }
        ]
    },
    // 📝 Cheat Sheets
    {
        category: { en: 'Cheat Sheets', tr: 'Kopya Kağıtları', az: 'Qeydlər (Cheat Sheets)' },
        items: [
            { type: 'tool', title: 'GTFOBins', url: 'https://gtfobins.github.io', desc: 'Linux privesc bypass using binaries.', lang: 'en' },
            { type: 'tool', title: 'LOLBAS', url: 'https://lolbas-project.github.io', desc: 'Windows binaries for pentesting.', lang: 'en' },
            { type: 'tool', title: 'RevShells', url: 'https://www.revshells.com', desc: 'Reverse shell generator.', lang: 'global' },
            { type: 'doc', title: 'PayloadsAllTheThings', url: 'https://github.com/swisskyrepo/PayloadsAllTheThings', desc: 'Attack payloads list.', lang: 'en' }
        ]
    },
    // 🎬 Movies & Series
    {
        category: { en: 'Movies & Series', tr: 'Filmler & Diziler', az: 'Filmlər & Seriallar' },
        items: [
            { type: 'movie', title: 'Mr. Robot', url: '', desc: 'Most realistic hacking series.', lang: 'en' },
            { type: 'movie', title: 'Silicon Valley', url: '', desc: 'Dropout culture & startups.', lang: 'en' },
            { type: 'movie', title: 'Who Am I', url: '', desc: 'Social engineering & Dark Web.', lang: 'de' },
            { type: 'movie', title: 'The Matrix', url: '', desc: 'Simulation theory.', lang: 'en' },
            { type: 'movie', title: 'The Social Network', url: '', desc: 'Founding of Facebook.', lang: 'en' }
        ]
    },
    // 🐙 Useful Repos
    {
        category: { en: 'GitHub Repos', tr: 'Faydalı Repolar', az: 'Faydalı Repolar' },
        items: [
            { type: 'tool', title: 'SecLists', url: 'https://github.com/danielmiessler/SecLists', desc: 'Standard wordlists for testing.', lang: 'en' },
            { type: 'tool', title: 'Public APIs', url: 'https://github.com/public-apis/public-apis', desc: 'Free APIs for projects.', lang: 'en' },
            { type: 'doc', title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', desc: 'Learn to design large systems.', lang: 'en' },
            { type: 'doc', title: 'Build Your Own X', url: 'https://github.com/codecrafters-io/build-your-own-x', desc: 'Recreate famous tools from scratch.', lang: 'en' }
        ]
    },
    // 📚 Important Books
    {
        category: { en: 'Must-Read Books', tr: 'Mutlaka Okunmalı', az: 'Mütləq Oxunmalı' },
        items: [
            { type: 'book', title: 'Clean Code', url: '', desc: 'Robert C. Martin.', lang: 'en' },
            { type: 'book', title: 'The Phoenix Project', url: '', desc: 'Understanding DevOps.', lang: 'en' },
            { type: 'book', title: 'Sandworm', url: '', desc: 'Cyberwarfare.', lang: 'en' }
        ]
    }
];

// 5. GLOSSARY
export const glossary = [
    {
        term: "API (Application Programming Interface)",
        desc: {
            en: "A set of rules that allows different software applications to communicate with each other. It's like a waiter taking your order to the kitchen.",
            tr: "Farklı yazılımların birbirleriyle konuşmasını sağlayan kurallar bütünü. Müşterinin siparişini mutfağa götüren bir garson gibidir.",
            az: "Fərqli proqramların bir-biri ilə əlaqə qurmasını təmin edən qaydalar toplusu. Müştərinin sifarişini mətbəxə aparan bir ofisiant kimidir."
        },
        category: "General"
    },
    {
        term: "Docker",
        desc: {
            en: "A platform that package applications into 'containers', ensuring they run the same way on every computer.",
            tr: "Uygulamaları 'konteynır'lara paketleyerek her bilgisayarda aynı şekilde çalışmasını sağlayan bir platform.",
            az: "Tətbiqləri 'konteynerlərə' paketləyərək hər kompüterdə eyni şəkildə işləməsini təmin edən bir platforma."
        },
        category: "DevOps"
    },
    {
        term: "CI/CD",
        desc: {
            en: "Continuous Integration & Continuous Deployment. Automating the process of testing and shipping code to production.",
            tr: "Sürekli Entegrasyon ve Sürekli Dağıtım. Kodun otomatik olarak test edilmesi ve canlıya alınması sürecidir.",
            az: "Daxil olan kodun avtomatik olaraq test edilməsi və canlı mühitə yerləşdirilməsi prosesi."
        },
        category: "DevOps"
    },
    {
        term: "Middleware",
        desc: {
            en: "Software that acts as a bridge between an operating system or database and applications, especially on a network.",
            tr: "İstek ile cevap arasında çalışan, veriyi işleyen veya güvenliği kontrol eden 'ara katman' yazılımı.",
            az: "Sorğu ilə cavab arasında çalışan, məlumatı emal edən və ya təhlükəsizliyi yoxlayan 'ara qatman' proqramı."
        },
        category: "Backend"
    },
    {
        term: "State Management",
        desc: {
            en: "Managing the data that changes over time in an application (like a shopping cart or user login status).",
            tr: "Uygulamadaki değişen verilerin (sepet içeriği, giriş durumu vb.) merkezi bir yerden yönetilmesi.",
            az: "Tətbiqdəki dəyişən məlumatların (səbət məzmunu, giriş statusu və s.) mərkəzi bir yerdən idarə edilməsi."
        },
        category: "Frontend"
    },
    {
        term: "Algorithm",
        desc: {
            en: "A step-by-step procedure or set of rules to be followed in calculations or other problem-solving operations.",
            tr: "Bir problemi çözmek veya belirli bir sonuca ulaşmak için takip edilen adım adım yol.",
            az: "Bir problemi həll etmək və ya müəyyən bir nəticəyə çatmaq üçün izlənilən addım-addım yol."
        },
        category: "CS Fundamentals"
    },
    {
        term: "SQL Injection",
        desc: {
            en: "A security vulnerability where an attacker can interfere with the queries that an application makes to its database.",
            tr: "Bir saldırganın uygulamanın veritabanı sorgularına müdahale edebildiği bir güvenlik açığı.",
            az: "Hücumçunun tətbiqin verilənlər bazası sorğularına müdaxilə edə bildiyi təhlükəsizlik boşluğu."
        },
        category: "Security"
    },
    {
        term: "Open Source",
        desc: {
            en: "Software with source code that anyone can inspect, modify, and enhance.",
            tr: "Kaynak kodu herkese açık olan, herkesin inceleyebildiği ve geliştirebildiği yazılım türü.",
            az: "Mənbə kodu hər kəsə açıq olan, hər kəsin araşdıra və inkişaf etdirə bildiyi proqram növü."
        },
        category: "General"
    },
    {
        term: "Database Index",
        desc: {
            en: "A data structure that improves the speed of data retrieval operations on a database table.",
            tr: "Veritabanındaki verilere çok daha hızlı erişmek için oluşturulan özel bir dizin/rehber yapısı.",
            az: "Verilənlər bazasındakı məlumatlara daha sürətli daxil olmaq üçün yaradılan xüsusi indeks strukturu."
        },
        category: "Database"
    },
    {
        term: "Responsive Design",
        desc: {
            en: "A web design approach that makes web pages render well on a variety of devices and window or screen sizes.",
            tr: "Web sitelerinin telefon, tablet ve bilgisayar gibi farklı ekran boyutlarına uyumlu olması tasarımı.",
            az: "Veb saytların telefon, tablet və kompüter kimi fərqli ekran ölçülərinə uyğun olması dizaynı."
        },
        category: "Frontend"
    },
    {
        term: "DOM (Document Object Model)",
        desc: {
            en: "A tree-like representation of the HTML structure of a webpage that allows JavaScript to manipulate content.",
            tr: "Bir web sayfasının HTML yapısının ağaç benzeri temsili. JavaScript'in sayfayı değiştirmesine olanak tanır.",
            az: "Bir veb səhifənin HTML strukturunun ağacvari təsviri. JavaScript-ə səhifəni dəyişdirmək imkanı verir."
        },
        category: "Frontend"
    },
    {
        term: "JSON (JavaScript Object Notation)",
        desc: {
            en: "A lightweight format for storing and transporting data, easy for humans to read and write.",
            tr: "Veri depolamak ve taşımak için kullanılan hafif bir format. Okunması ve yazılması kolaydır.",
            az: "Məlumatları saxlamaq və ötürmək üçün istifadə olunan yüngül format. Oxunması və yazılması asandır."
        },
        category: "General"
    },
    {
        term: "Full Stack",
        desc: {
            en: "A developer who can work on both the frontend (client-side) and backend (server-side) of an application.",
            tr: "Bir uygulamanın hem ön yüzünde (istemci) hem de arka yüzünde (sunucu) çalışabilen geliştirici.",
            az: "Bir tətbiqin həm ön tərəfində (müştəri), həm də arxa tərəfində (server) işləyə bilən proqramçı."
        },
        category: "General"
    },
    {
        term: "Version Control (Git)",
        desc: {
            en: "A system that records changes to a file or set of files over time so that you can recall specific versions later.",
            tr: "Dosyalar üzerinde yapılan değişiklikleri kaydeden ve eski sürümlere dönmeyi sağlayan sistem (Örn: Git).",
            az: "Fayllar üzərində edilən dəyişiklikləri qeyd edən və köhnə versiyalara qayıtmağı təmin edən sistem (Məs: Git)."
        },
        category: "DevOps"
    },
    {
        term: "MVP (Minimum Viable Product)",
        desc: {
            en: "A version of a product with just enough features to be usable by early customers.",
            tr: "Bir ürünün, ilk kullanıcılar tarafından kullanılabilecek kadar özelliğe sahip en basit, çalışır hali.",
            az: "Bir məhsulun, ilk istifadəçilər tərəfindən istifadə edilə biləcək qədər xüsusiyyətə sahib ən sadə, işlək halı."
        },
        category: "Product"
    },
    {
        term: "Cache (Caching)",
        desc: {
            en: "Storing copies of data in a temporary storage location so it can be accessed faster.",
            tr: "Verilerin daha hızlı erişilebilmesi için geçici bir depolama alanında (önbellek) saklanması.",
            az: "Məlumatların daha sürətli əldə edilməsi üçün müvəqqəti yaddaşda (keş) saxlanılması."
        },
        category: "Performance"
    },
    {
        term: "Latency",
        desc: {
            en: "The time delay between sending a request and receiving a response.",
            tr: "Bir istek gönderilmesi ile cevabın alınması arasında geçen süre (gecikme süresi).",
            az: "Bir sorğu göndərilməsi ilə cavabın alınması arasında keçən vaxt (gecikmə müddəti)."
        },
        category: "Network"
    },
    {
        term: "Bug",
        desc: {
            en: "An error, flaw, or fault in a computer program that causes it to produce an incorrect result.",
            tr: "Bilgisayar programında hatalı veya beklenmedik sonuçlara yol açan kusur/hata.",
            az: "Kompüter proqramında xətalı və ya gözlənilməz nəticələrə səbəb olan qüsur/xəta."
        },
        category: "General"
    },
    {
        term: "Refactoring",
        desc: {
            en: "The process of restructuring existing computer code without changing its external behavior.",
            tr: "Mevcut kodun dış davranışını değiştirmeden, yapısını ve okunabilirliğini iyileştirme süreci.",
            az: "Mövcud kodun xarici davranışını dəyişdirmədən, strukturunu və oxunaqlığını yaxşılaşdırma prosesi."
        },
        category: "General"
    },
    {
        term: "ORM (Object-Relational Mapping)",
        desc: {
            en: "A technique that lets you query and manipulate data from a database using an object-oriented paradigm.",
            tr: "Veritabanı işlemlerini SQL yazmadan, kod içindeki nesnelerle yapmayı sağlayan teknik.",
            az: "Verilənlər bazası əməliyyatlarını SQL yazmadan, kod daxilindəki obyektlərlə etməyi təmin edən texnika."
        },
        category: "Backend"
    },
    {
        term: "Authentication (AuthN)",
        desc: {
            en: "The process of verifying who a user is (e.g., logging in with a password).",
            tr: "Kullanıcının kim olduğunu doğrulama süreci (Örn: Şifre ile giriş yapma).",
            az: "İstifadəçinin kim olduğunu təsdiqləmə prosesi (Məs: Şifrə ilə giriş etmək)."
        },
        category: "Security"
    },
    {
        term: "Authorization (AuthZ)",
        desc: {
            en: "The process of verifying what a user has access to (e.g., admin vs. user permissions).",
            tr: "Kullanıcının nelere erişim yetkisi olduğunu doğrulama süreci (İzinler).",
            az: "İstifadəçinin nələrə giriş icazəsi olduğunu yoxlama prosesi (İcazələr)."
        },
        category: "Security"
    },
    {
        term: "Load Balancer",
        desc: {
            en: "A device that acts as a reverse proxy and distributes network or application traffic across a number of servers.",
            tr: "Ağ trafiğini birden fazla sunucuya eşit şekilde dağıtarak sistemin çökmesini engelleyen yapı.",
            az: "Şəbəkə trafikini bir neçə server arasında bərabər paylayaraq sistemin çökməsinin qarşısını alan struktur."
        },
        category: "DevOps"
    },
    {
        term: "CDN (Content Delivery Network)",
        desc: {
            en: "A geographically distributed group of servers which work together to provide fast delivery of Internet content.",
            tr: "İçerikleri (resim, video vb.) kullanıcının konumuna en yakın sunucudan sunarak hızı artıran sistem.",
            az: "Məzmunları (şəkil, video və s.) istifadəçinin mövqeyinə ən yaxın serverdən təqdim edərək sürəti artıran sistem."
        },
        category: "Network"
    },
    {
        term: "REST (Representational State Transfer)",
        desc: {
            en: "An architectural style for providing standards between computer systems on the web.",
            tr: "Web üzerindeki bilgisayar sistemleri arasında iletişim standartlarını belirleyen bir mimari stil.",
            az: "Veb üzərindəki kompüter sistemləri arasında əlaqə standartlarını müəyyən edən bir arxitektura stili."
        },
        category: "Backend"
    },
    {
        term: "SaaS (Software as a Service)",
        desc: {
            en: "A software distribution model in which a third-party provider hosts applications (e.g., Google Drive, Slack).",
            tr: "Yazılımın internet üzerinden hizmet olarak sunulduğu model (Örn: Netflix, Spotify).",
            az: "Proqram təminatının internet üzərindən xidmət olaraq təqdim edildiyi model (Məs: Netflix, Spotify)."
        },
        category: "General"
    },
    {
        term: "Framework",
        desc: {
            en: "A platform for developing software applications that provides a foundation on which developers can build programs.",
            tr: "Geliştiricilere hazır bir yapı sunan ve kuralları olan yazılım iskeleti (Örn: React, Angular, Django).",
            az: "Proqramçılara hazır bir struktur təqdim edən və qaydaları olan proqram skeleti (Məs: React, Laravel)."
        },
        category: "General"
    },
    {
        term: "Library",
        desc: {
            en: "A collection of pre-written code that developers can use to optimize tasks.",
            tr: "Belirli görevleri yapmak için yazılmış hazır kod parçacıkları koleksiyonu (Örn: Lodash).",
            az: "Müəyyən tapşırıqları yerinə yetirmək üçün yazılmış hazır kod parçaları toplusu (Məs: React, jQuery)."
        },
        category: "General"
    },
    {
        term: "Recursion",
        desc: {
            en: "A programming technique where a function calls itself to solve a problem.",
            tr: "Bir fonksiyonun bir problemi çözmek için kendi kendini çağırması tekniği.",
            az: "Bir funksiyanın bir problemi həll etmək üçün öz-özünü çağırması texnikası."
        },
        category: "CS Fundamentals"
    },
    {
        term: "Debugging",
        desc: {
            en: "The process of finding and resolving bugs (defects or problems) within computer programs.",
            tr: "Yazılımdaki hataları bulma ve düzeltme süreci.",
            az: "Proqram təminatındakı xətaları tapma və düzəltmə prosesi."
        },
        category: "General"
    },
    {
        term: "IDE (Integrated Development Environment)",
        desc: {
            en: "Software used by developers to build applications, combining tools like editor, debugger, and compiler (e.g., VS Code).",
            tr: "Kod yazmak, test etmek ve derlemek için kullanılan gelişmiş yazılım ortamı (Örn: VS Code, IntelliJ).",
            az: "Kod yazmaq, test etmək və derləmək üçün istifadə olunan inkişaf etmiş proqram mühiti (Məs: VS Code)."
        },
        category: "Tools"
    },
    {
        term: "Agile",
        desc: {
            en: "A project management methodology used in software development that prioritizes flexibility and speed.",
            tr: "Yazılım geliştirmede esnekliği ve hızı önceliklendiren proje yönetim metodolojisi.",
            az: "Proqram inkişafında elastikliyi və sürəti üstün tutan layihə idarəetmə metodologiyası."
        },
        category: "Management"
    },
    {
        term: "Scrum",
        desc: {
            en: "A specific Agile framework for managing complex knowledge work, with an initial emphasis on software development.",
            tr: "Agile prensiplerine dayalı, işi 'Sprint' denilen kısa döngülere bölen bir çalışma çerçevesi.",
            az: "Agile prinsiplərinə əsaslanan, işi 'Sprint' adlanan qısa dövrlərə bölən bir iş çərçivəsi."
        },
        category: "Management"
    },
    {
        term: "Web Server",
        desc: {
            en: "Computer software and underlying hardware that accepts requests via HTTP and serves static content.",
            tr: "İnternet üzerinden gelen isteklere (HTTP) cevap veren ve web sitelerini yayınlayan bilgisayar/yazılım.",
            az: "İnternet üzərindən gələn sorğulara (HTTP) cavab verən və veb saytları yayımlayan kompüter/proqram."
        },
        category: "Network"
    },
    {
        term: "IP Address",
        desc: {
            en: "A unique address that identifies a device on the internet or a local network.",
            tr: "İnternete bağlı her cihazın kimliği olan benzersiz sayısal adres.",
            az: "İnternetə qoşulan hər bir cihazın şəxsiyyəti olan unikal rəqəmsal ünvan."
        },
        category: "Network"
    },
    {
        term: "DNS (Domain Name System)",
        desc: {
            en: "The phonebook of the Internet. It translates domain names (google.com) to IP addresses.",
            tr: "İnternetin telefon rehberi. Alan adlarını (google.com) IP adreslerine çevirir.",
            az: "İnternetin telefon kitabçası. Domen adlarını (google.com) IP ünvanlarına çevirir."
        },
        category: "Network"
    },
    {
        term: "Cookie",
        desc: {
            en: "A small piece of data sent from a website and stored on the user's computer by the user's web browser.",
            tr: "Tarayıcıda saklanan ve web sitesinin sizi hatırlamasını sağlayan küçük veri dosyası.",
            az: "Brauzerdə saxlanılan və veb saytın sizi xatırlamasını təmin edən kiçik məlumat faylı."
        },
        category: "Frontend"
    },
    {
        term: "Session",
        desc: {
            en: "A temporary interactive information interchange between two or more communicating devices.",
            tr: "Kullanıcının bir siteye girdiği andan çıkana kadar geçen süredeki etkileşim oturumu.",
            az: "İstifadəçinin bir sayta girdiyi andan çıxana qədər keçən müddətdəki qarşılıqlı əlaqə sessiyası."
        },
        category: "Backend"
    },
    {
        term: "HTTPS",
        desc: {
            en: "Hypertext Transfer Protocol Secure. An extension of HTTP that is used for secure communication.",
            tr: "HTTP'nin şifrelenmiş ve güvenli versiyonu (Yeşil kilit simgesi).",
            az: "HTTP-nin şifrələnmiş və təhlükəsiz versiyası (Yaşıl qıfıl işarəsi)."
        },
        category: "Security"
    },
    {
        term: "Microservices",
        desc: {
            en: "An architectural style where an application is structured as a collection of small, independent services.",
            tr: "Uygulamanın küçük, bağımsız ve birbirleriyle konuşan parçalara bölündüğü mimari.",
            az: "Tətbiqin kiçik, müstəqil və bir-biri ilə əlaqə quran hissələrə bölündüyü arxitektura."
        },
        category: "Backend"
    },
    {
        term: "Container (Docker)",
        desc: {
            en: "A standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably.",
            tr: "Kodun ve çalışması için gereken her şeyin paketlendiği izole ortam.",
            az: "Kodun və işləməsi üçün lazım olan hər şeyin paketləndiyi izolyasiya edilmiş mühit."
        },
        category: "DevOps"
    },
    {
        term: "Kubernetes",
        desc: {
            en: "An open-source system for automating deployment, scaling, and management of containerized applications.",
            tr: "Konteynırlaştırılmış uygulamaları yönetmek, ölçeklemek ve dağıtmak için kullanılan sistem.",
            az: "Konteynerləşdirilmiş tətbiqləri idarə etmək, miqyaslamaq və paylamaq üçün istifadə olunan sistem."
        },
        category: "DevOps"
    },
    {
        term: "Tech Debt (Technical Debt)",
        desc: {
            en: "The implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer.",
            tr: "Hızlı çözüm uğruna kötü kod yazmanın ileride yaratacağı ekstra iş yükü maliyeti.",
            az: "Sürətli həll naminə pis kod yazmağın gələcəkdə yaradacağı əlavə iş yükü xərci."
        },
        category: "General"
    },
    {
        term: "Variable",
        desc: {
            en: "A container for storing data values.",
            tr: "Veri değerlerini saklamak için kullanılan bir kap/isim.",
            az: "Məlumat dəyərlərini saxlamaq üçün istifadə olunan bir qab/ad."
        },
        category: "CS Fundamentals"
    },
    {
        term: "Array",
        desc: {
            en: "A data structure consisting of a collection of elements, each identified by an array index or key.",
            tr: "Birden fazla veriyi tek bir değişken altında sıralı olarak tutan veri yapısı (Dizi).",
            az: "Birdən çox məlumatı tək bir dəyişən altında sıralı olaraq saxlayan məlumat strukturu (Massiv)."
        },
        category: "CS Fundamentals"
    },
    {
        term: "Query",
        desc: {
            en: "A request for data or information from a database table or combination of tables.",
            tr: "Veritabanından bilgi istemek için yazılan komut/istek.",
            az: "Verilənlər bazasından məlumat istəmək üçün yazılan əmr/sorğu."
        },
        category: "Database"
    },
    {
        term: "Endpoint",
        desc: {
            en: "One end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints.",
            tr: "API'ye istek atılan belirli bir URL adresi (Varış noktası).",
            az: "API-yə sorğu göndərilən müəyyən bir URL ünvanı (Son nöqtə)."
        },
        category: "Backend"
    },
    {
        term: "Production (Prod)",
        desc: {
            en: "The environment where software is actually run and used by end users.",
            tr: "Yazılımın gerçek kullanıcılar tarafından kullanıldığı canlı ortam.",
            az: "Proqramın real istifadəçilər tərəfindən istifadə edildiyi canlı mühit."
        },
        category: "General"
    },
    {
        term: "Staging",
        desc: {
            en: "An environment for testing that exactly resembles the production environment.",
            tr: "Canlı ortama (Production) geçmeden önceki son test ortamı.",
            az: "Canlı mühitə (Production) keçməzdən əvvəlki son test mühiti."
        },
        category: "General"
    },
    {
        term: "Responsive",
        desc: {
            en: "Design that adjusts gracefully to fit on desktop, tablet, and mobile screens.",
            tr: "Ekran boyutuna göre otomatik şekil alan esnek tasarım.",
            az: "Ekran ölçüsünə görə avtomatik şəkil alan elastik dizayn."
        },
        category: "Frontend"
    },
    {
        term: "Accessibility (a11y)",
        desc: {
            en: "The practice of making your websites usable by as many people as possible, including those with disabilities.",
            tr: "Web sitelerinin engelli bireyler tarafından da kullanılabilir olması durumu.",
            az: "Veb saytların əlilliyi olan şəxslər tərəfindən də istifadə edilə bilməsi vəziyyəti."
        },
        category: "Frontend"
    },
    {
        term: "Compiler",
        desc: {
            en: "A computer program that translates computer code written in one programming language into another language (usually machine code).",
            tr: "Yazılan kodu bilgisayarın anlayacağı makine diline çeviren program (Derleyici).",
            az: "Yazılan kodu kompüterin anlayacağı maşın dilinə çevirən proqram (Derləyici)."
        },
        category: "CS Fundamentals"
    },
    {
        term: "Interpreter",
        desc: {
            en: "A program that directly executes instructions written in a programming or scripting language without requiring them strictly to be compiled.",
            tr: "Kodu satır satır okuyup anında çalıştıran program (Örn: Python, JS).",
            az: "Kodu sətir-sətir oxuyub anında işlədən proqram (Məs: Python)."
        },
        category: "CS Fundamentals"
    },
    {
        term: "Encryption",
        desc: {
            en: "The process of converting information or data into a code, especially to prevent unauthorized access.",
            tr: "Veriyi yetkisiz kişilerin okuyamayacağı şekilde şifreleme işlemi.",
            az: "Məlumatı icazəsiz şəxslərin oxuya bilməyəcəyi şəkildə şifrələmə əməliyyatı."
        },
        category: "Security"
    },
    {
        term: "Firewall",
        desc: {
            en: "A network security system that monitors and controls incoming and outgoing network traffic.",
            tr: "Ağ trafiğini denetleyen ve zararlı girişleri engelleyen güvenlik duvarı.",
            az: "Şəbəkə trafikini yoxlayan və zərərli girişləri əngəlləyən təhlükəsizlik divarı."
        },
        category: "Security"
    },
    {
        term: "Unit Testing",
        desc: {
            en: "A software testing method by which individual units of source code are tested to determine whether they are fit for use.",
            tr: "Kodun en küçük birimlerinin (fonksiyonların) tek tek test edilmesi.",
            az: "Kodun ən kiçik vahidlərinin (funksiyaların) tək-tək test edilməsi."
        },
        category: "Testing"
    },
    {
        term: "Integration Testing",
        desc: {
            en: "A level of software testing where individual units are combined and tested as a group.",
            tr: "Farklı kod modüllerinin birbiriyle uyumlu çalışıp çalışmadığının test edilmesi.",
            az: "Fərqli kod modullarının bir-biri ilə uyğun işləyib-işləmədiyinin test edilməsi."
        },
        category: "Testing"
    },
    {
        term: "Open Source",
        desc: {
            en: "Software for which the original source code is made freely available and may be redistributed and modified.",
            tr: "Kaynak kodun herkese açık olduğu ve geliştirilebildiği yazılım türü.",
            az: "Mənbə kodunun hər kəsə açıq olduğu və inkişaf etdirilə bildiyi proqram növü."
        },
        category: "General"
    },
    {
        term: "Proprietary Software",
        desc: {
            en: "Software that is owned by an individual or a company (closed source).",
            tr: "Kaynak kodu kapalı olan ve sahibi olan ticari yazılım (Örn: Windows, Photoshop).",
            az: "Mənbə kodu qapalı olan və sahibi olan ticarət proqramı (Məs: Windows)."
        },
        category: "General"
    },
    {
        term: "Scalability",
        desc: {
            en: "The property of a system to handle a growing amount of work by adding resources to the system.",
            tr: "Bir sistemin artan iş yükü altında performans kaybetmeden genişleyebilme yeteneği.",
            az: "Bir sistemin artan iş yükü altında performans itirmədən genişlənə bilmə qabiliyyəti."
        },
        category: "General"
    }
];

// 6. TOOL OF THE WEEK
export const toolOfTheWeek = {
    id: "postman",
    title: "Postman",
    category: { en: "Development Tools", tr: "Geliştirici Araçları", az: "Tərtibatçı Alətləri" },
    icon: "🚀",
    desc: {
        en: "An API platform for building and using APIs. It simplifies each step of the API lifecycle and streamlines collaboration.",
        tr: "API'ler oluşturmak ve kullanmak için bir API platformu. API yaşam döngüsünün her adımını basitleştirir ve iş birliğini kolaylaştırır.",
        az: "API-lar yaratmaq və istifadə etmək üçün platforma. API həyat dövrünün hər bir addımını sadələşdirir və komanda işini asanlaşdırır."
    },
    whyCool: {
        en: "Automated testing, clear documentation, and easy environment variable management.",
        tr: "Otomatik testler, net dökümantasyon ve kolay ortam değişkenleri yönetimi.",
        az: "Avtomatlaşdırılmış testlər, aydın sənədləşdirmə və asan mühit dəyişənləri (env) idarəetməsi."
    },
    url: "https://www.postman.com"
};
// Curated, checked materials (src/curated-resources.json) go first in each path's list; duplicates by URL are dropped.
// The older items get the manual review's fixes: dead, paid or mislabeled links go, wrong titles are corrected.
const legacy = curatedResources.legacy || { drop: [], fix: {} };
const legacyDrop = new Set(legacy.drop);
for (const [sub, items] of Object.entries(curatedResources.paths)) {
    const entry = contentData[sub];
    if (!entry) continue;
    entry.resources = entry.resources || { items: [] };
    const seen = new Set(items.map((r) => r.url.replace(/\/$/, '')));
    const rest = (entry.resources.items || [])
        .filter((r) => !legacyDrop.has(r.url) && !seen.has(String(r.url || '').replace(/\/$/, '')))
        .map((r) => (legacy.fix[r.url] ? { ...r, ...legacy.fix[r.url] } : r));
    entry.resources.items = [...items, ...rest];
}
