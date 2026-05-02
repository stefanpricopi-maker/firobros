# Roadmap Firobros

## În lucru acum (dezvoltare site)

### Conținut & brand
- [x] Texte **100% RO** (home, despre, portofoliu, contact, JSON-LD `knowsAbout`); termeni consacrați (TTD, Trash the Dress) păstrați unde e util pentru căutare.
- [ ] **Film**: secțiunea de pe **/** a fost scoasă; brandul rămâne „Image & Film”; poți reintroduce mai târziu un bloc video + date dacă vrei.
- [x] **Social / email**: sursă unică `src/data/site-contact.ts` (email + profile opționale); UI în `SocialLinks.astro` — completează href-urile reale înainte de launch.
- [ ] **Momente alese** (`featured-weddings.ts`): completează `featuredDetails` cu titluri / locații reale sau lasă `featured/` gol — secțiunea rămâne ascunsă fără imagini.

### Imagini
- [x] **Portofoliu**: doar imagini locale din `portfolio/{cununie,nunta,trash-the-dress}/`; `gallery-photos.ts` e gol (adaugă URL-uri doar dacă vrei stock în plus).
- [x] **Despre**: portret din `src/assets/images/despre/*` (primul fișier alfabetic); fără fișier → fallback Unsplash + mesaj scurt.
- [x] **Momente alese**: imagini din `src/assets/images/featured/` + titluri opționale în `featuredDetails` (`featured-weddings.ts`); fără fișiere → secțiunea e ascunsă.

### Contact & conversie
- [x] Formular: etichete/placeholder-e în română; câmp opțional **Telefon**; `action="/contact/success/"` pentru Netlify.
- [x] Pagină **Mulțumim**: `/contact/success/` (`contact/success.astro`, `noindex`).
- [ ] **Test Netlify Forms** după primul deploy (verifică în dashboard că mesajul ajunge — pas manual).

### Calitate
- [x] **404** personalizată (`src/pages/404.astro` → `404.html`, `noindex` în layout).
- [x] Accesibilitate de bază: link „Sari la conținut”, `#main-content`, `focus-visible` pe controale interactive, `prefers-reduced-motion` pentru scroll; verificare manuală contrast/alt la conținut nou.

---

## Spre final (înainte de launch)

- [ ] **`site` / domeniu** în `astro.config.mjs` (deja pregătit cu `URL` Netlify + `PUBLIC_SITE_URL` local) — vezi `.env.example`.
- [ ] `git init`, GitHub, Netlify legat de repo.
- [ ] PageSpeed Insights mobil; ajustări fine dacă e nevoie.

---

## Faza 1 (deja făcut)
- [x] Astro + TypeScript + Tailwind
- [x] Layout, portofoliu (masonry, categorii, lightbox), despre, contact, SEO de bază, sitemap
