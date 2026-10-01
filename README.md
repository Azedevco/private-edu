# AZEDEV Learn 🚀
> **Learn. Build. Contribute.**
> Azərbaycanlı developer-lər üçün açıq və praktik texnologiya platforması.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Organization](https://img.shields.io/badge/GitHub-Azedevco-181717.svg?logo=github)](https://github.com/Azedevco)
[![Ecosystem](https://img.shields.io/badge/AZEDEV-Ecosystem-06b6d4.svg)](https://learn.azedev.com)

---

## 🌟 Haqqında

**AZEDEV Learn** — yalnız bir "roadmap saytı" deyil, öyrənmədən real open-source töhfəsinə aparan bütöv bir inkişaf sistemidir:

$$\text{Roadmap} \longrightarrow \text{Resource} \longrightarrow \text{Practice} \longrightarrow \text{Project} \longrightarrow \text{AZEDEV Contribution}$$

1. **Roadmap**: Seçdiyiniz texnologiyanın addım-addım iyerarxik öyrənmə planı.
2. **Resource**: Ən keyfiyyətli pulsuz sənədləşmələr, video dərsliklər və kitablar.
3. **Practice**: İnteraktiv testlər (Quiz), alqoritmik kodlama tapşırıqları və texniki müsahibə sualları.
4. **Project**: Junior, Mid və Senior səviyyəli real spesifikasiyalara əsaslanan portfel layihələri.
5. **Contribution**: AZEDEV-in açıq mənbəli repozitoriyalarına kod və resurs əlavə edərək real təcrübə qazanmaq.

---

## 🧭 Platformanın Strukturu

* **Learn**
  * 🗺️ **Roadmaps**: Web Development (Frontend, Backend, Full Stack), Mobile, Data & AI, Kiber Təhlükəsizlik, DevOps, Game Dev, IoT, QA Testing.
  * 🎓 **Courses**: Harvard CS50, FullStack Open, freeCodeCamp və s.
  * 📚 **Resources**: Seçilmiş developer alətləri və dərsliklər.
  * 📖 **Books**: *Clean Code*, *Designing Data-Intensive Applications*, *Grokking Algorithms* və s.
  * 🎥 **Videos**: Azərbaycan, Türk və İngilis dillərində ən yaxşı YouTube kanalları.
  * 📑 **Documentation**: MDN, React, Node.js, Python, Docker sənədləşmələri.
* **Practice**
  * 💼 **Interview Questions**: Texniki müsahibə kartları (Flashcards) və cavablar.
  * ⚡ **Coding Challenges**: İnteraktiv alqoritmlər və həll izahları.
  * 🛠️ **Projects**: Texnoloji stək və xüsusiyyətləri ilə real layihə ideyaları.
  * ❓ **Quizzes**: Taymerli və ballı interaktiv texniki testlər.
* **Explore**
  * 🧭 **Career Paths**: Maaş göstəriciləri və bacarıq pillələri (Junior → Mid → Senior).
  * 🌐 **Open Source Projects**: AZEDEV repoları və Good First Issues.
  * 👥 **Community & IT Club**: Universitet IT klubları (BDU, ASOIU, ADA, BANM, Xəzər) və hakatonlar.
* **Downloads & Community Hub** 📥
  * Git, Docker, Linux, SQL, Modern JavaScript və Sistem Dizaynı üzrə hazır konspektləri (Cheat Sheet) 1 kliklə yükləmə.
  * İcma tərəfindən yeni resurs və ya şablon yükləmə/təqdim etmə imkanı.
* **Admin Dashboard** ⚙️
  * Resursların idarə edilməsi, icma təqdimatlarının moderasiyası (təsdiqləmə/silmə) və JSON verilənlər bazası nüsxəsinin çıxarılması (Backup).

---

## 🛠 Texnoloji Stək

* **HTML5, Modern JavaScript (ES6+ / ES2024)**
* **Tailwind CSS v4** (AZEDEV Dark-first Minimal Design System)
* **Vite 7** (Lightning fast build tool)
* **PWA & LocalStorage Persistence** (Oflayn dəstək və müştəri tərəfli yaddaş)

---

## 🧭 Dizayn sistemi: AZEDEV EDU

Baza AZEDEV dizayn sistemidir (azedev.com ilə eyni tokenlər, Inter + Geist Mono, `az-` komponentləri: `src/styles/`). Məhsul mobile-first qurulub: hər ekran bir sualı cavablandırır, "növbəti nə etməliyəm?", və bir əsas düyməsi var.

* **Naviqasiya:** Ana · Öyrən · Praktika · Layihələr · Profil. Mobildə alt naviqasiya, desktopda sol sidebar; axtarış hər yerdən açılır (`/`, `⌘K`) və mövzu, resurs, yol, layihə və sualları qruplarla tapır.
* **Öyrənmə dövrü:** Yol → Mövzu → Resurs → Praktika → Layihə → İrəliləyiş. İrəliləyiş hesab olmadan bu cihazda saxlanılır (`src/progress.js`).
* **Komponentlər** (`src/ui.js`): `Page`, `PageTitle`, `Tabs`, `Section`, `ResourceCard`, `PathCard`, `ProgressBar`, `Stats`; yol mərhələləri üçün stepper (`.ln-stops`), fokuslu ekranlarda yapışqan əsas düymə (`.ln-actionbar`).
* **Qaydalar:** bir ekranda bir əsas düymə, bir sütun (mobil), 44–48px toxunma sahəsi, kod yalnız öz blokunda sürüşür, yalnız token rəngləri (sahə rəngi yalnız kiçik ikon kvadratında), emoji yoxdur, uydurma rəqəm yoxdur.

--- | --- |
| 01 Roadmap | Yol xəritələri, sahə səhifəsi |
| 02 Resurs | Kurslar, kitablar, videolar, sənədlər, konspektlər |
| 03 Praktika | Tapşırıqlar, testlər, müsahibə sualları |
| 04 Layihə | Layihə fikirləri |
| 05 Töhfə | Open source, şərəf lövhəsi |

Kəşf et və AZEDEV səhifələri yoldan kənardadır (kvadrat marker).

* **Stansiya başlığı** (`StationHeader`): xəritə kağızı, yol relsi (`RouteRail`), stansiya markeri, mövzunun nöqtəli piktoqramı (`dotIcon`) və datadan hesablanan koordinatlar (`Coords`).
* **Dayanacaqlar** (`.ln-stops`): ardıcıllıq olan hər şey nöqtəli yol üzərində halqalarla düzülür.
* **Biletlər** (`Ticket`, `.ln-ticket`): resurs, layihə və repolar kəsik xətti olan biletlərdir; faktlar kənardakı hissədədir.
* **Sahə kimliyi**: hər texnoloji sahənin öz tint rəngi (`CATEGORY_TINT`) və nöqtəli piktoqramı var.
* **İmza rəsmi**: ana səhifədə hissəciklərdən yığılan yol (`src/art/`), AZEDEV dişlisində bitir.

Qaydalar: yalnız token rəngləri (Tailwind-in standart palitrası söndürülüb), emoji yoxdur, bir səhifədə ən çox bir ağ düymə, cümlə registri, uydurma rəqəm yoxdur.

---

## 💻 Lokal Quraşdırma

1. Repozitoriyanı klonlayın:
   ```bash
   git clone https://github.com/Azedevco/private-edu.git
   cd private-edu
   ```

2. Asılılıqları quraşdırın:
   ```bash
   npm install
   ```

3. İnkişaf serverini işə salın:
   ```bash
   npm run dev
   ```
   Brauzerdə `http://localhost:5173` ünvanını açın.

4. İstehsalat (Production) üçün build hazırlayın:
   ```bash
   npm run build
   ```

---

## 🔐 Google ilə giriş (istəyə bağlı, tövsiyə olunur)

İrəliləyiş standart olaraq yalnız brauzerdə (localStorage) saxlanılır. Google ilə giriş aktiv olanda istifadəçi daxil olur və irəliləyişi **öz Google Drive-ının gizli tətbiq qovluğunda** (`appDataFolder`) saxlanılır: AZEDEV serveri yoxdur, tətbiq yalnız öz yaratdığı faylı görür (`drive.appdata` icazəsi).

1. [Google Cloud Console](https://console.cloud.google.com/) → yeni layihə → **APIs & Services → Library** → **Google Drive API**-ni aktiv edin.
2. **OAuth consent screen**: tətbiq adı "AZEDEV Learn", icazələr: `openid`, `email`, `profile`, `…/auth/drive.appdata`.
3. **Credentials → Create credentials → OAuth client ID → Web application**. *Authorized JavaScript origins*: `https://learn.azedev.com` və lokal üçün `http://localhost:5173`.
4. Client ID repodakı `.env` faylındadır (OAuth Client ID ictimaidir, səhifəyə onsuz da düşür; heç bir gizli açar istifadə olunmur):

```bash
VITE_GOOGLE_CLIENT_ID=317813732617-gacf3dmvl8mn505t2sj4l5hvkobjdj9t.apps.googleusercontent.com
```

Başqa client ilə işləmək üçün `.env.local` faylında və ya Vercel-in Environment Variables bölməsində bu dəyişəni yenidən təyin edin. Dəyişən boş olsa, "Google ilə daxil ol" düyməsi heç yerdə görünmür və sayt cihazda işləyir.

**Vacib:** giriş yalnız Google Cloud-da *Authorized JavaScript origins* siyahısına əlavə olunmuş ünvanlarda işləyir: `https://learn.azedev.com`, lokal inkişaf üçün `http://localhost:5173` (lazım olsa Vercel preview ünvanları da).

---

## 📚 Materiallar necə seçilir və sıralanır

Hər yolun materialları təsadüfi siyahı deyil, **dərs-dərs plandır**: hər dərsdə 1–3 addım, öyrənmə sırası ilə (əvvəl izlə, sonra oxu, sonra məşq et), hər addımda "bu dərs üçün nəyi götür" cümləsi və varsa türkcə/rusca alternativ.

| Fayl | Nədir |
| --- | --- |
| `src/curated-resources.json` | Yoxlanmış material hovuzu: hər yol üçün kitab, rəsmi təlimat, video və kurslar; `library` (Kitablar, Videolar, Texniki təlimatlar səhifələri); `legacy` (köhnə siyahıdan çıxarılan ölü, pullu və ya başlığı səhifəyə uyğun gəlməyən linklər, düzəldilən başlıqlar). |
| `src/curriculum.json` | Dərs-dərs plan: `paths.<yol>.lessons[i]` = addımlar (`url`, `do`: watch/read/practice/build/reference, `note`, `alt`), sonra `tools` və `more`. Planda olmayan material saytda göstərilmir. |
| `src/curriculum.js` | Planı `data.js`-dəki materiallara bağlayır (`lessonPlan`, `pathPlan`). |

**Yoxlama həm avtomatik, həm əl ilədir:**

1. **Axtarış:** opencode orkestratoru (librarian axtarış xətləri ilə) türkcə, ingiliscə, azərbaycanca və rusca pulsuz, qanuni mənbələr tapır.
2. **Avtomatik:** hər URL üçün HTTP statusu, YouTube üçün oEmbed, təkrarların axtarışı, köhnə linklərdə səhifə başlığının materialın adı ilə müqayisəsi. Planda hər dərsin əhatə olunması, 1–3 addım, qeydlərin azərbaycanca olması və yeni linklərin açılması yoxlanılır.
3. **Əl ilə:** pullu və ya lisenziyası şübhəli kitablar, köhnəlmiş və zəif mənbələr, mövzudan kənar kanallar çıxarılır. Səviyyələr və növlər düzəldilir. Plan yol-yol oxunur.

Yeni material təklif etmək üçün saytdakı "Material göndər" formundan və ya WhatsApp icmasından istifadə edin.

## ✅ Layihələrin yoxlanması

Layihə başladıqdan və GitHub reposu bağlandıqdan sonra:

- **Avtomatik yoxlama** (`src/repo-check.js`, GitHub-ın açıq API-si, token olmadan) aşağıdakıları yoxlayır:
  - repo tapılır və açıqdır;
  - README var;
  - kod var;
  - dillər layihənin texnologiyalarına uyğundur;
  - son dəyişiklik tarixi.

  Nəticə həmin repo linkinə bağlıdır; link dəyişəndə yenidən yoxlamaq lazımdır.
- **Mentor yoxlaması:**
  1. Öyrənən "Mentor yoxlaması istə" basır: müraciət bazaya (`/api/requests`) yazılır, layihə WhatsApp icmasında paylaşılır.
  2. Mentor admin panelinin **Müraciətlər** bölməsində "Qəbul et" və ya "Düzəliş istə" basır və qısa qeyd yazır.
  3. Öyrənən layihənin altında qərarı, qeydi və mentorun adını görür.

  Sayt yalnız mentorun həqiqətən yazdığını göstərir. Sertifikat üçün mentorun **qəbul** etməsi şərtdir.

---

## 📝 Testlər

- **Hər dərsin sonunda:** 3 suallıq dərs testi.
- **Hər yolun sonunda:** 10 suallıq final testi.
- **Harada saxlanır:** `src/lesson-quizzes.json`. Düzgün cavab həmişə `options[0]`-dır; sayt variantları hər cəhddə qarışdırır (`src/quizzes.js`), cəhd bitənə qədər sıra dəyişmir.
- **Ümumi testlər:** `src/azedev-data.js` → `quizzesData`.
- **Yoxlama:** struktur skriptlə yoxlanır (hər dərsdə 3, finalda 10 sual, 4 fərqli variant, boş sahə yoxdur). Düzgün cavabın uzunluğu ilə seçilməməsi də yoxlanır: düzgün variant digərlərindən 1.3 dəfədən uzun olmamalıdır.

## 🎓 Yoxlanmış sertifikat

Serverimiz yoxdur, ona görə sertifikatı insan verir, sayt isə hər kəsə yoxlatdırır.

1. **Üç şərt ödənməlidir** (yolun "Dərslər" bölməsinin sonunda və final testinin nəticəsində göstərilir):
   - final testi ≥ 8/10;
   - layihənin reposu avtomatik yoxlamadan keçib;
   - mentor rəyi istənib.
2. **Müraciət:** öyrənən "Sertifikat üçün müraciət et" düyməsini basır, hazır mətn WhatsApp icmasına göndərilir.
3. **Verilmə:** mentor layihəni oxuyandan sonra AZEDEV `src/certificates.json` faylına qeyd əlavə edir (pull request):

   ```json
   { "id": "AZL-2026-0001", "name": "Ad Soyad", "path": "frontend", "issued": "2026-10-12",
     "projectTitle": "Hava Proqnozu Tətbiqi", "project": "https://github.com/…", "mentor": "Ad Soyad (AZEDEV mentoru)", "finalScore": "9/10" }
   ```
4. **Yoxlama:** `https://learn.azedev.com/verify/AZL-2026-0001` ünvanını hər kəs açıb yoxlaya bilər. Siyahıda olmayan ID "tapılmadı" göstərir.

## ➕ Material əlavə etmək

Saytın footer-ində **"Material əlavə et"** səhifəsi var. Orada bunlar göstərilir:
- keyfiyyət qaydaları;
- video, kitab, kurs və texniki təlimat üçün ayrıca JSON şablonları;
- sahələrin izahı və yol ID-ləri.

Təklif GitHub pull request (`src/curated-resources.json`), WhatsApp icması və ya saytdakı forma ilə göndərilir. Hər təklif skriptlə (HTTP, YouTube oEmbed, təkrar yoxlaması) və əl ilə yoxlanır.

## 🗄 Verilənlər bazası (MongoDB Atlas, pulsuz 512 MB)

Sayt statikdir. Brauzer bazaya qoşulmur, bazaya yalnız Vercel funksiyaları (`/api`) qoşulur. Baza yalnız bir brauzerdə qalmamalı olan şeylər üçündür:

| Endpoint | Nə üçün |
| --- | --- |
| `POST /api/submissions` | "Material göndər" formu: təklif AZEDEV-in moderasiya növbəsinə düşür. Əvvəl yalnız göndərənin brauzerində qalırdı |
| `GET /api/submissions` | Təsdiqlənmiş icma materialları (hamıya açıq, CDN-də 5 dəqiqə keşlənir) |
| `GET/PATCH/DELETE /api/submissions?…` | Admin moderasiyası (`Authorization: Bearer ADMIN_TOKEN`) |
| `POST /api/requests` | Mentor yoxlaması və sertifikat müraciətləri: mentorlar üçün bir siyahı |
| `GET/PATCH /api/requests` | Admin: müraciətləri bağlamaq |
| `POST /api/reports` | Materialın yanındakı "Problem bildir": link işləmir, köhnədir, mövzu uyğun deyil və s. Eyni link və səbəb bir qeyddə toplanır (sayğacla) |
| `GET/PATCH /api/reports?…` | Admin → Şikayətlər: Yeni → Yoxlanılır → Həll olundu / Rədd edildi. Bağlanmış qeydlər 90 gündən sonra silinir |
| `GET /api/health` | Baza əlçatandırmı, 512 MB-ın nə qədəri istifadə olunur |

**512 MB-a sığmaq və təhlükəsizlik üçün:**
- hər sahənin uzunluğu məhduddur (mətn ≤ 20 KB, sorğu ≤ 64 KB);
- rədd edilən təkliflər 30 gündən sonra TTL indeksi ilə avtomatik silinir;
- rate-limit qeydləri 1 saata silinir;
- IP ünvanı saxlanmır, yalnız saltlı hash-i istifadə olunur;
- bir IP saatda 5 təklif və 6 müraciət göndərə bilər;
- botlar üçün gizli honeypot sahəsi var;
- eyni link iki dəfə qəbul olunmur;
- ictimai siyahıda yalnız ictimai sahələr qaytarılır.

**Quraşdırma (Vercel → Settings → Environment Variables):**
- `MONGODB_URI`: Atlas → Connect → Drivers-dən alınan `mongodb+srv://…` sətri;
- `MONGODB_DB`: `azedev_learn`;
- `ADMIN_TOKEN`: ən azı 24 simvolluq təsadüfi sətir, admin paneli onu soruşur;
- `IP_SALT`: təsadüfi sətir.

Atlas → Network Access bölməsində Vercel funksiyalarının qoşula bilməsi üçün `0.0.0.0/0` icazəsi lazımdır. Parol güclü olmalıdır.

**Lokal:** `npm run dev` yalnız frontu işlədir. API sınaqdan keçmirsə, form təklifi cihazda saxlayır və bunu açıq deyir. API ilə birlikdə sınamaq üçün `npx vercel dev` işlədin. `.env.local` git-ə düşmür.

## 🧪 Test

Production-a çıxmazdan əvvəl bütün funksiyalar real brauzerdə yoxlanır:
- production build (`dist`);
- həqiqi `/api` funksiyaları, Atlas-dakı ayrıca `azedev_learn_test` bazası ilə.

Yoxlanan sahələr (57 yoxlama):
- landing və bələdçi, 21 səhifə;
- naviqasiya və axtarış;
- dərs planı və irəliləyiş;
- dərs, final və mövzu testləri, variantların qarışdırılması;
- layihə yoxlaması, mentor rəyi;
- admin girişi və moderasiya, icma materialları;
- konspekt oxuyucusu və yükləmə, sertifikat yoxlaması, profil, Google girişi.

API ayrıca 20 testlə yoxlanır: validasiya, dublikat, honeypot, rate limit, admin icazəsi, ictimai sahələr, 512 MB hesabatı.

## 🚀 Production

- **Build:** `npm run build` → `dist/`. Proqram kodu və məzmun (yollar, planlar, testlər) ayrı chunk-lardadır (`vite.config.js`). Məzmun yenilənəndə istifadəçinin keşindəki proqram kodu yenidən yüklənmir.
- **Vercel:** `vercel.json` bunları təyin edir:
  - təhlükəsizlik başlıqları;
  - Google girişi üçün `Cross-Origin-Opener-Policy: same-origin-allow-popups`;
  - `/assets` üçün uzunmüddətli keş;
  - `/verify/*` üçün SPA yönləndirməsi.
- **Env:** `VITE_GOOGLE_CLIENT_ID` dəyişənini Vercel-də təyin edin. Google Cloud-da *Authorized JavaScript origins* siyahısına `https://learn.azedev.com` əlavə olunmalıdır. Tətbiq hələ "Testing" rejimindədirsə, "Publish app" edin.
- **Admin paneli:** `/admin` ünvanında açılır (menyularda və axtarışda yoxdur). Vercel-də təyin olunmuş `ADMIN_TOKEN` ilə daxil olunur.
- **Service worker:** `public/sw.js` → `CACHE_NAME`. Böyük dizayn dəyişikliyindən sonra versiyanı artırın.

---

## 🤝 Töhfə Vermək (Contributing)

Bu layihə açıq mənbəlidir və developer icmamızın birgə əməyi ilə böyüyür! Ətraflı məlumat üçün **[CONTRIBUTING.md](CONTRIBUTING.md)** faylını oxuyun.

---

## 📄 Lisenziya

Bu layihə [MIT Lisenziyası](LICENSE) altında yayımlanır.

© 2026 **AZEDEV Ekosistemi** • [learn.azedev.com](https://learn.azedev.com)
