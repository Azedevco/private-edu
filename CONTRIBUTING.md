# AZEDEV Learn — Töhfə Vermək Bələdçisi (Contributing Guide)

**AZEDEV Learn** platformasına maraq göstərdiyiniz üçün təşəkkür edirik! 🎉  
Bu layihə Azərbaycan texnoloji icması tərəfindən açıq və könüllü şəkildə inkişaf etdirilir.

---

## 🚀 Necə Töhfə Verə Bilərəm?

Biz standart **"Fork & Pull Request"** modelindən istifadə edirik:

### 1. Repozitoriyanı Fork Edin
GitHub-da sağ yuxarıdakı **"Fork"** düyməsini sıxaraq layihəni öz profilinizə kopyalayın.

### 2. Kompüterinizə Klonlayın
```bash
git clone https://github.com/<GITHUB_USERINIZ>/private-edu.git
cd private-edu
npm install
```

### 3. Təmiz Budaq (Branch) Yaradın
Hər bir yenilik üçün ayrıca budaq açın:
```bash
git checkout -b feat/add-new-resource
# və ya
git checkout -b fix/translation-update
```

### 4. Dəyişikliklərinizi Edin
Məsələn:
* Yeni bir yol xəritəsi addımı və ya mövzu əlavə etmək üçün: `src/data.js` və ya `src/azedev-data.js`
* Yeni bir şparqalka (cheat sheet) əlavə etmək üçün: `downloadableCheatSheets` massivinə yeni bənd daxil edin.
* UI və ya dizayn təkmilləşdirməsi: `src/style.css` və ya `src/main.js`

### 5. Dəyişiklikləri Yoxlayın və Build Edin
```bash
npm run build
```
Build prosesinin xətasız başa çatdığına əmin olun.

### 6. Commit və Push
```bash
git add .
git commit -m "feat(roadmap): add Go microservices track"
git push origin feat/add-new-resource
```

### 7. Pull Request (PR) Açın
GitHub-da forkladığınız repoya keçin və **"Compare & pull request"** düyməsini sıxın. Dəyişikliyinizi təsvir edin. AZEDEV komandası ən qısa zamanda baxış keçirəcək!

---

## ⚠️ Qaydalar & Tövsiyələr

1. **Stil və Format:** AZEDEV minimal dark-first dizayn sisteminə və təmiz kod standartlarına sadiq qalın.
2. **Reklam Xarakterli Olmayan Resurslar:** Yalnız həqiqətən tələbələrə və developer-lərə faydalı olan pulsuz və keyfiyyətli materiallar qəbul edilir.
3. **Multilingual Dəstək:** Mümkün olduqda Azərbaycan dilində izahlara üstünlük verin.

Təşəkkür edirik! 💙  
**AZEDEV Komandası** • [https://github.com/Azedevco](https://github.com/Azedevco)
