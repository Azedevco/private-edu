import cheatsheets from './cheatsheets.json' with { type: 'json' }
// AZEDEV Learn - Core Ecosystem Data & Content
// Ecosystem, Courses, Books, Videos, Challenges, Quizzes, Career Paths, Open Source, and Downloads

export const azedevBrand = {
    name: "AZEDEV",
    product: "AZEDEV Learn",
    tagline: {
        az: "Learn. Build. Contribute.",
        en: "Learn. Build. Contribute.",
        tr: "Learn. Build. Contribute."
    },
    mission: {
        az: "Azərbaycanlı developer-lər üçün açıq, keyfiyyətli və praktik texnologiya platforması. Sıfırdan öyrənmədən real open-source layihələrə və qlobal karyeraya aparan ekosistem.",
        en: "An open, high-quality, and practical technology platform for developers. An ecosystem bridging zero-to-hero learning with real-world open-source contributions and global careers.",
        tr: "Geliştiriciler için açık, kaliteli ve pratik teknoloji platformu. Sıfırdan öğrenmeden gerçek açık kaynak projelere ve küresel kariyere uzanan ekosistem."
    },
    urls: {
        web: "https://learn.azedev.com",
        domain: "learn.azedev.com",
        github: "https://github.com/Azedevco",
        // The community lives on WhatsApp (the main channel); support goes through Kofe.al.
        whatsapp: "https://chat.whatsapp.com/DJojKYnWfgU0pu6kmnaAla",
        kofe: "https://kofe.al/@azedev",
        azedev: "https://azedev.com"
    }
};

// 5-Step Lifecycle Model: Roadmap -> Resource -> Practice -> Project -> Contribution
export const learningLifecycle = [
    {
        step: 1,
        key: "roadmap",
        title: { az: "1. Yol Xəritəsi (Roadmap)", en: "1. Roadmap", tr: "1. Yol Haritası" },
        shortTitle: { az: "Roadmap", en: "Roadmap", tr: "Roadmap" },
        desc: {
            az: "Seçdiyiniz texnologiyanın ardıcıl, addım-addım öyrənmə planını kəşf edin.",
            en: "Explore the step-by-step, structured learning progression for your chosen stack.",
            tr: "Seçtiğiniz teknolojinin adım adım yapılandırılmış öğrenme planını keşfedin."
        },
        badge: "Addım 1",
        icon: "🗺️",
        color: "from-blue-500 to-cyan-500"
    },
    {
        step: 2,
        key: "resource",
        title: { az: "2. Resurslar & Dərslər (Resources)", en: "2. Resources", tr: "2. Kaynaklar" },
        shortTitle: { az: "Resurs", en: "Resources", tr: "Kaynak" },
        desc: {
            az: "Ən keyfiyyətli pulsuz sənədlər, video dərsliklər və kitablarla nəzəriyyəni mənimsəyin.",
            en: "Master theoretical foundations through top curated free docs, video courses, and books.",
            tr: "En kaliteli ücretsiz dokümanlar, videolar ve kitaplarla temelleri kavrayın."
        },
        badge: "Addım 2",
        icon: "📚",
        color: "from-cyan-500 to-teal-500"
    },
    {
        step: 3,
        key: "practice",
        title: { az: "3. Praktika & Quiz (Practice)", en: "3. Practice", tr: "3. Pratik" },
        shortTitle: { az: "Praktika", en: "Practice", tr: "Pratik" },
        desc: {
            az: "İnteraktiv testlər, kodlama tapşırıqları və texniki müsahibə sualları ilə biliyinizi bərkidin.",
            en: "Reinforce your knowledge with interactive quizzes, coding challenges, and interview flashcards.",
            tr: "İnteraktif testler, kodlama görevleri ve teknik mülakat sorularıyla bilginizi pekiştirin."
        },
        badge: "Addım 3",
        icon: "⚡",
        color: "from-amber-500 to-orange-500"
    },
    {
        step: 4,
        key: "project",
        title: { az: "4. Real Layihə (Project)", en: "4. Project", tr: "4. Proje" },
        shortTitle: { az: "Layihə", en: "Projects", tr: "Proje" },
        desc: {
            az: "Junior, Mid və Senior səviyyəli real spesifikasiyalara əsaslanan portfel layihələri qurun.",
            en: "Build production-grade portfolio projects following real industry specifications.",
            tr: "Sektör standartlarına uygun junior, mid ve senior seviye portföy projeleri geliştirin."
        },
        badge: "Addım 4",
        icon: "🛠️",
        color: "from-purple-500 to-indigo-500"
    },
    {
        step: 5,
        key: "contribution",
        title: { az: "5. AZEDEV Töhfə (Contribution)", en: "5. Open Source Contribution", tr: "5. Açık Kaynak Katkısı" },
        shortTitle: { az: "Töhfə", en: "Contribute", tr: "Katkı" },
        desc: {
            az: "AZEDEV-in open-source repolarına kod, sənədləşmə və ya resurs əlavə edərək real təcrübə toplayın.",
            en: "Make your first Pull Request to AZEDEV open-source repositories and build verified experience.",
            tr: "AZEDEV açık kaynak projelerine kod ve doküman katkısı sunarak gerçek deneyim kazanın."
        },
        badge: "Zirvə",
        icon: "🚀",
        color: "from-emerald-500 to-green-500"
    }
];

// Curated Free Courses
export const coursesData = [
    {
        id: "cs50x",
        title: "CS50x: Introduction to Computer Science",
        provider: "Harvard University / edX",
        level: "Beginner to Intermediate",
        category: "Computer Science",
        url: "https://cs50.harvard.edu/x/",
        duration: "12 Weeks (Self-paced)",
        lang: "en",
        badge: "Must Watch",
        desc: {
            az: "Kompüter elmləri və proqramlaşdırmanın fundamental prinsipləri: C, Python, SQL, alqoritmlər və veb inkişafı.",
            en: "An entry-level course on computer science and the art of programming: C, Python, SQL, algorithms, and web basics.",
            tr: "Bilgisayar bilimleri ve programlama temelleri: C, Python, SQL, algoritmalar ve web temelleri."
        },
        tags: ["C", "Python", "SQL", "Algorithms", "Harvard"]
    },
    {
        id: "fullstack-open",
        title: "Full Stack Open (2024-2026)",
        provider: "University of Helsinki",
        level: "Intermediate",
        category: "Web Development",
        url: "https://fullstackopen.com/en/",
        duration: "Deep Curriculum",
        lang: "en",
        badge: "Industry Standard",
        desc: {
            az: "Müasir JavaScript, React, Redux, Node.js, Express, MongoDB, GraphQL, TypeScript və CI/CD dərsləri.",
            en: "Deep dive into modern JavaScript-based web development: React, Redux, Node.js, MongoDB, GraphQL, and TypeScript.",
            tr: "Modern JavaScript temelli web geliştirme: React, Redux, Node.js, MongoDB, GraphQL ve TypeScript."
        },
        tags: ["React", "Node.js", "TypeScript", "GraphQL", "CI/CD"]
    },
    {
        id: "fcc-web",
        title: "Responsive Web Design & JS Algorithms",
        provider: "freeCodeCamp",
        level: "Beginner",
        category: "Frontend",
        url: "https://www.freecodecamp.org/learn",
        duration: "300+ Hours",
        lang: "en",
        badge: "Free Certificate",
        desc: {
            az: "HTML5, CSS3, Flexbox, CSS Grid və JavaScript alqoritmlərini brauzer daxilində praktiki kodlayaraq öyrənin.",
            en: "Learn HTML5, CSS3, Flexbox, CSS Grid, and JS Data Structures with interactive browser-based challenges.",
            tr: "HTML5, CSS3, Flexbox, Grid ve JS algoritmalarını tarayıcı üzerinden interaktif olarak öğrenin."
        },
        tags: ["HTML", "CSS", "JavaScript", "Algorithms"]
    },
    {
        id: "fastapi-course",
        title: "FastAPI & Modern Python Microservices",
        provider: "freeCodeCamp / Tech With Tim",
        level: "Intermediate",
        category: "Backend",
        url: "https://www.youtube.com/watch?v=0sOvCWFmrtA",
        duration: "6 Hours",
        lang: "en",
        badge: "Popular",
        desc: {
            az: "Müasir, yüksək performanslı Python REST API-ləri, Pydantic, SQLAlchemy və JWT autentifikasiyası.",
            en: "Build modern, high-speed Python REST APIs with Pydantic validation, SQLAlchemy ORM, and JWT authentication.",
            tr: "Pydantic, SQLAlchemy ve JWT doğrulaması ile modern yüksek hızlı Python REST API geliştirme."
        },
        tags: ["Python", "FastAPI", "REST API", "PostgreSQL"]
    },
    {
        id: "docker-mastery",
        title: "Docker & Kubernetes Praktiki Bələdçi",
        provider: "AZEDEV Community / YouTube",
        level: "All Levels",
        category: "DevOps",
        url: "https://www.youtube.com/results?search_query=docker+tutorial+full+course",
        duration: "4 Hours",
        lang: "az",
        badge: "Community Favorite",
        desc: {
            az: "Konteynerləşdirmə, Dockerfile, Docker Compose, çoxmərhələli buildlər və Kubernetes-in əsasları.",
            en: "Containerization fundamentals, Dockerfile best practices, Docker Compose, and Kubernetes deployments.",
            tr: "Konteynerleştirme temelleri, Dockerfile en iyi pratikleri, Docker Compose ve Kubernetes giriş."
        },
        tags: ["Docker", "Kubernetes", "DevOps", "Containers"]
    },
    {
        id: "cyber-security-intro",
        title: "Practical Ethical Hacking & Security",
        provider: "TCM Security / NetworkChuck",
        level: "Beginner to Intermediate",
        category: "Cyber Security",
        url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
        duration: "15 Hours",
        lang: "en",
        badge: "Essential",
        desc: {
            az: "Şəbəkə kəşfi, Linux əmrləri, zəifliklərin analizi, Web App təhlükəsizliyi və OWASP Top 10.",
            en: "Network scanning, Linux mastery, vulnerability assessments, Web application security, and OWASP Top 10.",
            tr: "Ağ tarama, Linux temelleri, zafiyet analizi, Web güvenliği ve OWASP Top 10."
        },
        tags: ["Cyber Security", "Ethical Hacking", "Linux", "OWASP"]
    }
];

// Curated Books & Free E-Books
export const booksData = [
    {
        id: "clean-code",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin (Uncle Bob)",
        category: "Software Engineering",
        year: "2008",
        rating: "4.8",
        icon: "📗",
        summary: {
            az: "Yaxşı və pis kod arasındakı fərq, oxunaqlı adlandırma, funksiyaların yazılışı və təmiz arxitektura qaydaları.",
            en: "How to tell good code from bad, write readable functions, structure classes, and master code craftsmanship.",
            tr: "İyi ve kötü kod arasındaki fark, okunabilir fonksiyonlar yazma ve temiz kod standartları."
        },
        url: "https://www.informit.com/store/clean-code-a-handbook-of-agile-software-craftsmanship-9780132350884",
        paid: true,
        keyLessons: [
            "Funksiyalar yalnız bir işi görməli və onu mükəmməl görməlidir.",
            "Dəyişən adları niyə mövcud olduğunu və necə istifadə olunduğunu izah etməlidir.",
            "Kod şərhləri kodun çatışmazlığını ört-basdır etməməlidir."
        ]
    },
    {
        id: "ddia",
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        category: "Backend & System Design",
        year: "2017",
        rating: "4.9",
        icon: "📘",
        summary: {
            az: "Böyük miqyaslı paylanmış sistemlər, məlumat bazaları, replikasiya, parçalanma (partitioning) və transaksiya idarəetməsi.",
            en: "The definitive guide to distributed systems, data storage internals, replication, partitioning, and consistency.",
            tr: "Büyük ölçekli dağıtık sistemler, veri tabanı iç yapıları, replikasyon ve tutarlılık rehberi."
        },
        url: "https://dataintensive.net/",
        paid: true,
        keyLessons: [
            "Məlumat bazalarında oxuma və yazma xərclərinin kompromisləri (Trade-offs).",
            "Birləşdirilmiş konsensus (Paxos, Raft) və eventual consistency modelləri.",
            "Stream processing və batch processing fərqləri."
        ]
    },
    {
        id: "grokking-algorithms",
        title: "Grokking Algorithms (İllüstrativ Alqoritmlər)",
        author: "Aditya Bhargava",
        category: "Computer Science",
        year: "2016",
        rating: "4.8",
        icon: "📙",
        summary: {
            az: "Alqoritmləri və məlumat strukturlarını qrafik və sadə nümunələrlə başa salan ən yaxşı vizual kitab.",
            en: "An illustrated, friendly guide explaining common algorithms, Big O notation, and data structures.",
            tr: "Algoritmaları ve veri yapılarını görsel illüstrasyonlarla anlaşılır kılan başucu kitabı."
        },
        url: "https://www.manning.com/books/grokking-algorithms-second-edition",
        paid: true,
        keyLessons: [
            "Big O notasiyası və asimptotik analiz sadə dildə.",
            "İkili axtarış (Binary Search), Quicksort və Breadth-First Search (BFS).",
            "Dijkstra alqoritmi və dinamik proqramlaşdırma."
        ]
    },
    {
        id: "ydkjs",
        title: "You Don't Know JS Yet (Book Series)",
        author: "Kyle Simpson",
        category: "JavaScript",
        year: "2020",
        rating: "4.9",
        icon: "📒",
        summary: {
            az: "JavaScript-in daxili mexanizmləri: Scope, Closures, Objects, Prototypes və Asinxronluq (Promises, Async/Await).",
            en: "Diving deep into the core mechanisms of JavaScript: scope, closures, 'this', prototypes, and async behavior.",
            tr: "JavaScript dilinin derin iç mekanizmaları: Scope, Closure, Prototype ve Asenkron yapı."
        },
        freeReadUrl: "https://github.com/getify/You-Dont-Know-JS",
        keyLessons: [
            "Lexical Scope və Closures necə işləyir.",
            "'this' açar sözünün 4 fərqli bağlanma qaydası.",
            "Prototip zənciri və klassik irsilikdən fərqləri."
        ]
    },
    {
        id: "pragmatic-programmer",
        title: "The Pragmatic Programmer",
        author: "David Thomas, Andrew Hunt",
        category: "Career & Mindset",
        year: "2019 (20th Anniv.)",
        rating: "4.8",
        icon: "📕",
        summary: {
            az: "Proqramçı düşüncə tərzi, DRY prinsipi, refactoring, çevik yanaşmalar və ömürboyu öyrənmə vərdişləri.",
            en: "Timeless wisdom on software craftsmanship, pragmatism, career development, and code architecture.",
            tr: "Yazılımcı zihniyeti, DRY prensibi, yeniden yapılandırma ve sürekli öğrenme alışkanlıkları."
        },
        url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
        paid: true,
        keyLessons: [
            "DRY: Don't Repeat Yourself - hər məlumatın tək və aydın mənbəyi olmalıdır.",
            "Broken Window Theory: keyfiyyətsiz koda dözümlü yanaşmayın.",
            "Avtomatlaşdırma sizin ən güclü silahınızdır."
        ]
    }
];

// Curated Videos & Tech Channels
export const videosData = [
    {
        id: "fireship",
        title: "Fireship - 100 Seconds of Code",
        channel: "Fireship",
        category: "Tech Overview",
        url: "https://youtube.com/@fireship",
        lang: "en",
        subscribers: "3M+",
        desc: {
            az: "Texnologiyaları, freymvorkları və trendləri 100 saniyədə aydın və dinamik şəkildə izah edən kanal.",
            en: "High-intensity code tutorials and tech industry news in 100 seconds.",
            tr: "Teknolojileri ve yeni araçları 100 saniyede hızlıca özetleyen mükemmel kanal."
        },
        tags: ["Fast-paced", "Web", "AI", "Cloud"]
    },
    {
        id: "traversy",
        title: "Traversy Media Crash Courses",
        channel: "Brad Traversy",
        category: "Web Development",
        url: "https://youtube.com/@traversymedia",
        lang: "en",
        subscribers: "2M+",
        desc: {
            az: "Frontend və backend üçün sıfırdan başlayanlar üçün ən aydın Crash Course dərslikləri.",
            en: "Comprehensive crash courses for modern web developers covering all major stacks.",
            tr: "Modern web geliştiricileri için sıfırdan ileri seviyeye crash course serileri."
        },
        tags: ["HTML/CSS", "React", "Node.js", "Python"]
    },
    {
        id: "prototurk",
        title: "Prototürk (Tayfun Erbilen)",
        channel: "Prototürk",
        category: "Frontend & Full Stack",
        url: "https://youtube.com/@prototurk",
        lang: "tr",
        subscribers: "250K+",
        desc: {
            az: "HTML, CSS, JavaScript, React və PHP haqqında türkcə ən keyfiyyətli və müasir video dərslər.",
            en: "Premier Turkish web development channel covering modern JavaScript, CSS, and full-stack projects.",
            tr: "HTML, CSS, JS, React ve backend konularında Türkçe en zengin kaynak."
        },
        tags: ["JavaScript", "CSS", "Frontend", "Turkish"]
    },
    {
        id: "yazilim-bilimi",
        title: "Yazılım Bilimi (Mustafa Murat Çoşkun)",
        channel: "Yazılım Bilimi",
        category: "Programming & Python",
        url: "https://youtube.com/@yazilimbilimi",
        lang: "tr",
        subscribers: "400K+",
        desc: {
            az: "Python, C++, Java, alqoritmlər və veb proqramlaşdırma üzrə dərindən hazırlanmış pleylistlər.",
            en: "Comprehensive Turkish programming playlists for Python, C++, Java, and Data Structures.",
            tr: "Python, C++, Java ve algoritma konularında en köklü Türkçe eğitim kanalı."
        },
        tags: ["Python", "Algorithms", "C++", "OOP"]
    },
    {
        id: "networkchuck",
        title: "NetworkChuck",
        channel: "Chuck Keith",
        category: "DevOps & Cyber Security",
        url: "https://youtube.com/@NetworkChuck",
        lang: "en",
        subscribers: "3.5M+",
        desc: {
            az: "Şəbəkələr, Linux, Docker, Kiber Təhlükəsizlik və Bulud texnologiyalarını inanılmaz maraqlı izah edən kanal.",
            en: "Energetic and hands-on tutorials on networking, Linux, hacking, and cloud computing.",
            tr: "Ağ sistemleri, Linux, Docker ve siber güvenlik konularını eğlenceli anlatan kanal."
        },
        tags: ["Networking", "Linux", "Hacking", "Docker"]
    }
];

// Essential Documentation Quick Links
export const documentationLinks = [
    { name: "MDN Web Docs", category: "Web Standards", url: "https://developer.mozilla.org/", icon: "🌐", desc: "HTML, CSS, JS üçün rəsmi istinadgah." },
    { name: "DevDocs.io", category: "All-in-one API Docs", url: "https://devdocs.io/", icon: "📑", desc: "100-dən çox texnologiyanın oflayn sənədləşməsi." },
    { name: "React Documentation", category: "Frontend", url: "https://react.dev/", icon: "⚛️", desc: "Müasir React Hooks və Server Komponentləri." },
    { name: "Node.js API Docs", category: "Backend", url: "https://nodejs.org/docs/latest/api/", icon: "🟢", desc: "Node.js standard kitabxana sənədləri." },
    { name: "Python Official Docs", category: "Language", url: "https://docs.python.org/3/", icon: "🐍", desc: "Python 3 standart sənədləri və dərslikləri." },
    { name: "Tailwind CSS Docs", category: "Styling", url: "https://tailwindcss.com/docs", icon: "🎨", desc: "Utility-first CSS freymvorkunun sənədləri." },
    { name: "Docker Documentation", category: "DevOps", url: "https://docs.docker.com/", icon: "🐳", desc: "Konteynerlər və Docker Compose təlimatı." },
    { name: "PostgreSQL Manual", category: "Databases", url: "https://www.postgresql.org/docs/", icon: "🐘", desc: "Ən güclü açıq qaynaqlı RDBMS sənədi." }
];

// Interactive Coding Challenges
export const codingChallengesData = [
    {
        id: "two-sum",
        title: "Two Sum (İki Ədədin Cəmi)",
        difficulty: "Easy",
        category: "Algorithms",
        desc: {
            az: "Verilmiş tam ədədlər massivində cəmi 'target' ədədinə bərabər olan iki elementin indekslərini tapın.",
            en: "Given an array of integers and a target integer, return the indices of the two numbers that add up to target.",
            tr: "Verilen tamsayı dizisinde toplamları hedef sayıya eşit olan iki elemanın indekslerini bulun."
        },
        starterCode: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
// Test: twoSum([2, 7, 11, 15], 9) -> [0, 1]`,
        hint: {
            az: "Hash Map (Obyekt və ya Map) istifadə edərək O(n) vaxt mürəkkəbliyində həll edin.",
            en: "Use a Hash Map to store seen values and their indices to solve in O(n) time.",
            tr: "O(n) zaman karmaşıklığı için Hash Map kullanın."
        },
        solutionExplanation: {
            az: "Hər addımda `target - num` fərqini xəritədə axtarırıq. Əgər varsa cütlük tapılmışdır. Əks halda hazırkı ədədi və indeksini xəritəyə yazırıq.",
            en: "For each element, calculate target - element. If present in map, return both indices.",
            tr: "Her elemanda target - num değerini haritada arıyoruz."
        }
    },
    {
        id: "palindrome-check",
        title: "Valid Palindrome (Polindrom Yoxlanışı)",
        difficulty: "Easy",
        category: "Strings",
        desc: {
            az: "Verilmiş mətndəki simvolların hər iki tərəfdən eyni oxunub-oxunmadığını yoxlayın (yalnız hərfləri və rəqəmləri nəzərə alın).",
            en: "Check if a string reads the same forwards and backwards after converting to lowercase and stripping non-alphanumeric chars.",
            tr: "Bir metnin küçük harfe çevrilip özel karakterler temizlendikten sonra baştan ve sondan aynı okunup okunmadığını kontrol edin."
        },
        starterCode: `function isPalindrome(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = clean.length - 1;
    while (left < right) {
        if (clean[left] !== clean[right]) return false;
        left++;
        right--;
    }
    return true;
}
// Test: isPalindrome("A man, a plan, a canal: Panama") -> true`,
        hint: {
            az: "İki göstərici (Two pointers: left və right) yanaşmasından istifadə edin.",
            en: "Use the Two-Pointer approach moving inward from edges.",
            tr: "İki işaretçi (Two pointers) yaklaşımı kullanın."
        },
        solutionExplanation: {
            az: "Mətni təmizlədikdən sonra soldan və sağdan mərkəzə doğru hərfləri müqayisə edirik. Fərq olarsa false qaytarırıq.",
            en: "Clean the string with regex, then compare characters moving from both ends to the center.",
            tr: "Metni regex ile temizleyip iki uçtan ortaya doğru kontrol ediyoruz."
        }
    },
    {
        id: "debounce-implementation",
        title: "Debounce Funksiyası Yazmaq",
        difficulty: "Medium",
        category: "JavaScript / Frontend",
        desc: {
            az: "Tez-tez çağırılan funksiyanı (məsələn: search input və ya scroll) yalnız istifadəçi yazmağı bitirdikdən N millisaniyə sonra işlədən `debounce` funksiyası qurun.",
            en: "Implement a custom debounce function that delays invoking func until after wait milliseconds have elapsed since the last time it was invoked.",
            tr: "Arama kutusu veya kaydırma gibi sık tetiklenen fonksiyonları geciktiren özel debounce fonksiyonunu kodlayın."
        },
        starterCode: `function debounce(func, delay = 300) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}`,
        hint: {
            az: "JavaScript `closure` və `setTimeout` / `clearTimeout` mexanizmindən istifadə edin.",
            en: "Leverage closures to retain the timer reference between calls.",
            tr: "Timer referansını korumak için closure ve clearTimeout kullanın."
        },
        solutionExplanation: {
            az: "Hər yeni çağırışda əvvəlki taymer ləğv edilir və yenisi başladılır. Beləliklə funksiya yalnız istifadəçi durduqda icra olunur.",
            en: "Each call cancels the active timer and sets a new one, ensuring execution happens only after inactivity.",
            tr: "Her yeni çağrıda önceki timer iptal edilir ve süre sıfırlanır."
        }
    },
    {
        id: "lru-cache-concept",
        title: "LRU (Least Recently Used) Keş Məntiqi",
        difficulty: "Hard",
        category: "Data Structures",
        desc: {
            az: "Məhdud tutuma malik keş strukturu qurun: elementlər dolduqda ən uzun müddət istifadə edilməyən element silinməlidir.",
            en: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with O(1) get and put.",
            tr: "Kapasitesi dolduğunda en az kullanılan elemanı atan O(1) erişimli LRU Cache yapısı tasarlayın."
        },
        starterCode: `class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (!this.map.has(key)) return -1;
        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val); // Yenidən sona əlavə et (most recent)
        return val;
    }
    put(key, value) {
        if (this.map.has(key)) this.map.delete(key);
        this.map.set(key, value);
        if (this.map.size > this.capacity) {
            // Ən köhnə ilk elementi silirik
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
    }
}`,
        hint: {
            az: "JavaScript `Map` obyekti elementlərin əlavə olunma ardıcıllığını saxlayır. `map.keys().next().value` ən köhnə açarı verir.",
            en: "JS Map preserves insertion order. Deleting and re-setting a key marks it as most recently used.",
            tr: "JS Map sıralı anahtar yapısını korur. Eski anahtar Map.keys().next().value ile bulunur."
        },
        solutionExplanation: {
            az: "JS Map-in təbii ardıcıllıq xüsusiyyətindən istifadə edərək O(1) get və put əməliyyatları əldə edilir.",
            en: "Using Map insertion ordering, get and put both run in O(1) time without manual doubly linked lists.",
            tr: "Map yapısı ile O(1) karmaşıklığında LRU davranışı elde edilir."
        }
    }
];

// Interactive Quizzes with Instant Scoring
export const quizzesData = [
    {
        id: "quiz-js-fundamentals",
        title: "JavaScript Core & Modern ES6+",
        category: "Frontend & JS",
        difficulty: "Medium",
        timeLimitSeconds: 180,
        questions: [
            {
                q: "JavaScript-də `typeof null` nəticəsi nədir?",
                options: ["'null'", "'object'", "'undefined'", "'boolean'"],
                correctIndex: 1,
                explanation: "JavaScript-in ilk versiyalarından qalmış tarixi bir xətadır (bug). Obyekt tipləri binary 000 ilə başladığı üçün null obyekti 'object' qaytarır."
            },
            {
                q: "`const a = [1, 2]; const b = a; b.push(3);` əməliyyatından sonra `a.length` neçə olar?",
                options: ["2", "3", "undefined", "TypeError"],
                correctIndex: 1,
                explanation: "Massivlər referans tiplidir. `b = a` yeni massiv yaratmır, eyni yaddaş ünvanını referans verir. Buna görə `b`-yə əlavə olunan hər şey `a`-da da əks olunur."
            },
            {
                q: "Event Loop arxitekturasında hansı növbə (queue) daha yüksək prioritetə malikdir?",
                options: ["Macrotask Queue (setTimeout)", "Microtask Queue (Promise.then)", "I/O Callbacks", "SetImmediate"],
                correctIndex: 1,
                explanation: "Microtask-lar (Promises, queueMicrotask) cari skript bitdikdən dərhal sonra və növbəti macrotask (setTimeout)-dan əvvəl icra edilir."
            },
            {
                q: "Arrow funksiyalarının adi `function`-lardan əsas fərqi nədir?",
                options: [
                    "Daha sürətli işləyir",
                    "Özünə məxsus `this` və `arguments` bağlaması yoxdur (leksik 'this' miras alır)",
                    "Asinxron işləyə bilmir",
                    "Parametr qəbul etmir"
                ],
                correctIndex: 1,
                explanation: "Arrow funksiyaları öz kontekstual `this`-ini yaratmır, yaradıldığı əhatə dairəsindəki (lexical scope) `this`-i saxlayır."
            },
            {
                q: "`console.log(1 + '2' + 3)` kodunun çıxışı nə olacaq?",
                options: ["6", "'123'", "'33'", "NaN"],
                correctIndex: 1,
                explanation: "Əvvəlcə `1 + '2'` əməliyyatı string birləşməsinə çevrilib `'12'` olur, sonra `'12' + 3` yenə string olaraq `'123'` nəticəsini verir."
            }
        ]
    },
    {
        id: "quiz-backend-architecture",
        title: "Backend, REST & Database Principles",
        category: "Backend & Systems",
        difficulty: "Medium",
        timeLimitSeconds: 180,
        questions: [
            {
                q: "REST API-də resursun tam yenilənməsi üçün hansı HTTP metodu istifadə edilməlidir?",
                options: ["POST", "PUT", "PATCH", "UPDATE"],
                correctIndex: 1,
                explanation: "`PUT` tam resursu əvəzləyir (idempotentdir). `PATCH` isə yalnız qismən dəyişikliklər üçün nəzərdə tutulub."
            },
            {
                q: "Məlumat bazalarında 'İndekslər' (B-Tree) nə üçün istifadə olunur?",
                options: [
                    "Yazma sürətini (INSERT) artırmaq üçün",
                    "Axtarış (SELECT) sorğularını sürətləndirmək üçün",
                    "Məlumatın şifrələnməsini təmin etmək üçün",
                    "Yaddaş həcmini azaltmaq üçün"
                ],
                correctIndex: 1,
                explanation: "İndekslər SELECT sorğularını O(log N) sürətinə çatdırır. Lakin hər yazma əməliyyatında indeks də yeniləndiyi üçün INSERT/UPDATE azacıq yavaşlaya bilər."
            },
            {
                q: "SQL Injection hücumlarının qarşısını almağın ən etibarlı yolu nədir?",
                options: [
                    "Inputları regex ilə təmizləmək",
                    "Parametrləşdirilmiş sorğular (Prepared Statements) istifadə etmək",
                    "Verilənlər bazasını gizlətmək",
                    "Bütün simvolları Base64 etmək"
                ],
                correctIndex: 1,
                explanation: "Prepared Statements istifadəçi daxiletməsini kod kimi deyil, birbaşa məlumat parametri kimi ötürür və inyeksiyanı qeyri-mümkün edir."
            },
            {
                q: "HTTP 401 və 403 status kodlarının fərqi nədir?",
                options: [
                    "401 server xətasıdır, 403 müştəri xətasıdır",
                    "401 Unauthorized (şəxsiyyət təsdiqlənməyib), 403 Forbidden (icazəniz çatmır)",
                    "İkisi də tam eynidir",
                    "401 şəbəkə kəsilməsidir, 403 tapılmadı"
                ],
                correctIndex: 1,
                explanation: "401 istifadəçinin sistemə daxil olmadığını (Unauthenticated), 403 isə daxil olsa belə həmin resursa baxmağa hüququ olmadığını (Forbidden) bildirir."
            },
            {
                q: "JWT (JSON Web Token) payload hissəsi necə qorunur?",
                options: [
                    "Tam şifrələnir (heç kim oxuya bilməz)",
                    "Base64 ilə kodlanır (hər kəs oxuya bilər, amma rəqəmsal imza ilə dəyişdirilməsi aşkar edilir)",
                    "Oflayn saxlanılır",
                    "Yalnız serverdə mövcuddur"
                ],
                correctIndex: 1,
                explanation: "JWT standart olaraq şifrələnmir (Base64Url kodlanır). Təhlükəsizlik 'Signature' hissəsindəki sirr açar ilə təmin edilir."
            }
        ]
    },
    {
        id: "quiz-devops-git",
        title: "Git, Linux & DevOps Essentials",
        category: "DevOps & Tools",
        difficulty: "Easy to Medium",
        timeLimitSeconds: 180,
        questions: [
            {
                q: "`git merge` və `git rebase` əsas fərqi nədir?",
                options: [
                    "Rebase bütün faylları silir",
                    "Merge yeni birləşdirmə commit-i yaradır, Rebase isə tarixçəni xətti edərək commit-ləri hədəf budağın üzərinə təkrar tətbiq edir",
                    "Merge yalnız lokal budaqlarda işləyir",
                    "Heç bir fərqi yoxdur"
                ],
                correctIndex: 1,
                explanation: "Rebase xətti və təmiz commit tarixçəsi yaradır. Merge isə iki budağın qovuşduğu commit-i saxlayır."
            },
            {
                q: "Docker konteyneri ilə Virtual Maşın (VM) arasındakı ən fundamental fərq nədir?",
                options: [
                    "Konteynerlər host ƏS nüvəsini (kernel) paylaşır, VM-lər isə ayrıca qonaq ƏS (Guest OS) işlədir",
                    "VM daha az RAM işlədir",
                    "Docker yalnız Linux-da mövcuddur",
                    "Konteynerlər fayl saxlaya bilmir"
                ],
                correctIndex: 0,
                explanation: "Docker konteynerləri host maşının nüvəsini bölüşərək çox yüngül, saniyələr içində başlayan izolyasiya mühitləri təmin edir."
            },
            {
                q: "Linux terminalında cari qovluqdakı gizli fayllar daxil bütün faylları icazələri ilə görmək üçün hansı əmr yazılır?",
                options: ["dir -x", "ls -la", "show --all", "cat .all"],
                correctIndex: 1,
                explanation: "`ls -la` (long format, all files) gizli (. ilə başlayan) faylları, ölçülərini və fayl icazələrini ətraflı göstərir."
            },
            {
                q: "CI/CD boru xəttində (Pipeline) 'CI' nəyi ifadə edir?",
                options: ["Cloud Infrastructure", "Continuous Integration", "Code Inspection", "Central Interface"],
                correctIndex: 1,
                explanation: "Continuous Integration (Davamlı İnteqrasiya) hər kod push edildikdə testlərin və build prosesinin avtomatlaşdırılmış şəkildə işlədilməsidir."
            }
        ]
    }
];

// Career Progression Paths with Milestones & Market Insights
export const careerPathsData = [
    {
        id: "frontend-engineer",
        title: "Frontend Developer & UI Architect",
        icon: "💻",
        overview: {
            az: "İstifadəçi interfeysləri, veb performans, interaktiv təcrübələr və müasir SPA/SSR tətbiqlərinin qurulması.",
            en: "Creating responsive, fast, and accessible user experiences using modern JavaScript/TypeScript and frameworks.",
            tr: "Modern JavaScript ekosistemi ile yüksek performanslı kullanıcı arayüzleri ve web uygulamaları geliştirme."
        },
        marketInsight: {
            demand: "Çox Yüksək (Very High)",
            remotePotential: "100%",
            avgSalaryAz: "1,200 - 4,500+ AZN",
            avgSalaryGlobal: "$65,000 - $140,000+ / il"
        },
        stages: [
            {
                level: "Junior Frontend",
                duration: "0 - 1.5 İl",
                skills: ["HTML5 / Semantic Web", "Modern CSS & Tailwind", "JavaScript (ES6+, DOM, Fetch API)", "Git & GitHub əsasları", "React və ya Vue təməlləri"],
                goal: "Dizaynı (Figma) dəqiq koda çevirmək və sadə API-lərlə işləyən dinamik veb səhifələr qurmaq."
            },
            {
                level: "Mid-level Frontend",
                duration: "1.5 - 4 İl",
                skills: ["TypeScript dərindən", "Next.js / SSR & SSG", "State Management (Zustand, Redux Toolkit)", "API Caching & React Query", "Performance & Web Vitals", "Unit & E2E Testing (Vitest, Playwright)"],
                goal: "Böyük həcmli məlumatlarla işləyən, test olunmuş və optimallaşdırılmış veb tətbiqləri müstəqil çatdırmaq."
            },
            {
                level: "Senior / Frontend Architect",
                duration: "4+ İl",
                skills: ["Micro-frontends / Monorepos (Turborepo)", "Dizayn Sistemlərinin arxitekturası", "CI/CD & Edge Deployment", "Web Security (XSS, CSRF, CSP)", "Komanda mentorluğu və texniki qərarlar"],
                goal: "Şirkətin frontend texnoloji strategiyasını müəyyən etmək, arxitekturanı miqyaslandırmaq və mühəndislik standartlarını yüksəltmək."
            }
        ]
    },
    {
        id: "backend-engineer",
        title: "Backend & Systems Engineer",
        icon: "⚙️",
        overview: {
            az: "API-lər, verilənlər bazası modelləşdirilməsi, mikroxidmətlər, keşləmə və sistem təhlükəsizliyi.",
            en: "Designing scalable backend architectures, APIs, distributed services, databases, and authentication systems.",
            tr: "Ölçeklenebilir arka yüz sistemleri, mikroservisler, veri tabanı optimizasyonu ve API mimarileri kurma."
        },
        marketInsight: {
            demand: "Yüksək və Sabit",
            remotePotential: "95%",
            avgSalaryAz: "1,500 - 5,000+ AZN",
            avgSalaryGlobal: "$75,000 - $160,000+ / il"
        },
        stages: [
            {
                level: "Junior Backend",
                duration: "0 - 1.5 İl",
                skills: ["Python (FastAPI/Django) və ya Node.js və ya Go", "RDBMS (PostgreSQL/MySQL əsasları)", "REST API standartları", "CRUD əməliyyatları və ORM", "Linux təməlləri"],
                goal: "Təmiz REST API-lər yazmaq, verilənlər bazasında cədvəllər yaratmaq və autentifikasiya sistemlərini qurmaq."
            },
            {
                level: "Mid-level Backend",
                duration: "1.5 - 4 İl",
                skills: ["PostgreSQL indeksləmə & Query planlama", "Redis Caching & Rate Limiting", "Docker & Konteynerləşdirmə", "Message Queues (RabbitMQ, Kafka təməli)", "Giriş icazələri (RBAC, JWT, OAuth2)"],
                goal: "Yüksək yüklü sistemlərdə sürətli məlumat emalı, keşləmə və mikroxidmət əlaqələrini təmin etmək."
            },
            {
                level: "Senior / Systems Architect",
                duration: "4+ İl",
                skills: ["Distributed Systems & Event-Driven Architecture", "Sharding & Read/Write Replicas", "Kubernetes & Cloud Infrastructure", "Domain-Driven Design (DDD)", "Sistem monitorinqi (Prometheus, Grafana)"],
                goal: "99.99% dayanıqlı, milyonlarla sorğunu qəbul edə bilən paylanmış infrastrukturları layihələndirmək."
            }
        ]
    },
    {
        id: "devops-engineer",
        title: "Cloud & DevOps Specialist",
        icon: "☁️",
        overview: {
            az: "Avtomatlaşdırılmış CI/CD boru xətləri, Bulud infrastrukturu (AWS/GCP), Konteynerlər və Sistem Monitorinqi.",
            en: "Automating deployments, managing cloud infrastructure with code, CI/CD pipelines, and site reliability.",
            tr: "CI/CD süreçleri, bulut altyapısı, otomasyon, konteyner yönetimi ve sistem güvenilirliği."
        },
        marketInsight: {
            demand: "Kritik Əhəmiyyətli",
            remotePotential: "95%",
            avgSalaryAz: "1,800 - 6,000+ AZN",
            avgSalaryGlobal: "$85,000 - $170,000+ / il"
        },
        stages: [
            {
                level: "Junior DevOps / Sysadmin",
                duration: "0 - 1.5 İl",
                skills: ["Dərin Linux (Bash scripting)", "Networking (DNS, TCP/IP, VPN)", "Git & GitHub Actions təməlləri", "Docker & Dockerfile best practices"],
                goal: "Serverləri konfiqurasiya etmək, sadə CI/CD axınları qurmaq və tətbiqləri konteynerləşdirmək."
            },
            {
                level: "Mid-level Cloud/DevOps",
                duration: "1.5 - 4 İl",
                skills: ["Kubernetes (K8s podlar, services, ingress)", "Infrastructure as Code (Terraform)", "AWS və ya GCP xidmətləri", "CI/CD Pipeline təhlükəsizliyi", "Log analizi (ELK, Loki)"],
                goal: "Kodu avtomatik test edən və birbaşa bulud klastrinə qüsursuz çatdıran tam avtomatlaşdırılmış sistem qurmaq."
            },
            {
                level: "Senior DevOps / SRE (Site Reliability)",
                duration: "4+ İl",
                skills: ["Multi-cloud & Hybrid Cloud", "Zero-downtime deployment strategiyaları", "Chaos Engineering & Disaster Recovery", "FinOps (Bulud xərclərinin azaldılması)", "Təhlükəsizlik və Uyğunluq (SOC2, ISO)"],
                goal: "Şirkətin bütün rəqəmsal infrastrukturunun kəsintisiz, təhlükəsiz və xərc baxımından optimal işini təmin etmək."
            }
        ]
    }
];

// AZEDEV Open Source Projects & Repositories
// AZEDEV's open-source projects have not started yet; the page announces them instead of listing placeholders.
export const azedevOpenSourceProjects = [];

// AZEDEV IT Club & Community Information
export const azedevCommunityInfo = {
    title: "AZEDEV IT Club & Ekosistem",
    subtitle: {
        az: "Tələbələrdən peşəkarlara: Açıq bilik, mentorluq və birgə kodlama.",
        en: "From students to senior engineers: Open knowledge, mentorship, and building together.",
        tr: "Öğrencilerden profesyonellere: Açık bilgi, mentorluk ve birlikte üretme."
    },
    // University chapters are planned; none are listed until one actually exists.
    chapters: [],
    initiatives: [
        {
            title: "Open Source Sprintləri",
            desc: "Tələbələrin ilk real GitHub töhfələrini (PR) vermələri üçün bələdçili seminar və hakatonlar.",
            icon: "⚡"
        },
        {
            title: "Pulsuz Mentorluq və Kod Təhlili (Code Review)",
            desc: "Təcrübəli yerli və xaricdə çalışan proqramçılar tərəfindən portfel layihələrinin təhlili.",
            icon: "🤝"
        },
        {
            title: "Canlı Müsahibə Simulyasiyaları (Mock Interviews)",
            desc: "Frontend, Backend və Alqoritmlər üzrə canlı texniki müsahibə təcrübəsi.",
            icon: "🎯"
        }
    ]
};

// Ready-to-download Developer Cheat Sheets & Guides
// Konspektlər: readable Markdown cheat sheets (src/cheatsheets.json), written in Azerbaijani and checked for accuracy.
export const downloadableCheatSheets = cheatsheets;

// People who contributed to AZEDEV Learn. Names only: roles are not listed unless the person has one at AZEDEV.
export const learnContributors = [
    { name: 'Ramazan Nuhbalayev', role: 'AZEDEV, CPO' },
    { name: 'Səbuhi Sarıyev', role: '' },
    { name: 'Tunar Camalov', role: '' }
];
