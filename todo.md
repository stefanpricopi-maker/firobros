Faza 1: Setup Inițial
[ ] Deschide un folder gol în Cursor.

[ ] Rulează în terminal: npm create astro@latest . (alege "Empty Project" și "Yes" la TypeScript).

[ ] Instalează Tailwind: npx astro add tailwind.

[ ] Inițializează Git: git init și fă primul commit.

Faza 2: Structura de Bază (Cursor Composer)
[ ] Layout: Creează un Layout.astro care să includă Google Fonts, Navbar-ul și Footer-ul.

[ ] Assets: Creează folderul src/assets/images/portfolio/ și pune acolo 5-10 poze de test.

[ ] Configurare Imagini: Cere-i lui Cursor să configureze un script care citește automat toate imaginile dintr-un folder (folosind import.meta.glob).

Faza 3: Dezvoltare Pagini
[ ] Homepage: Implementează un Hero section cu o imagine full-bleed care nu încetinește LCP (Largest Contentful Paint).

[ ] Galerie Masonry: Implementează un layout de tip "masonry" (folosind CSS columns sau Grid) care să păstreze aspectul original al pozelor (portret/landscape).

[ ] Lightbox: Adaugă o librărie ușoară de tip PhotoSwipe sau fslightbox (fără bătăi de cap cu JS greu).

Faza 4: Optimizare și SEO
[ ] Metadata: Adaugă tag-uri dinamice de SEO (Title, Description, OpenGraph Image pentru Facebook/Instagram).

[ ] Sitemap: Instalează @astrojs/sitemap pentru Google.

[ ] Netlify Forms: Configurează formularul de contact cu atributul data-netlify="true" pentru a primi mesajele direct în dashboard-ul Netlify.

Faza 5: Deployment
[ ] Creează repository pe GitHub și dă-i push.

[ ] Conectează contul de Netlify la GitHub.

[ ] Verifică scorul în Google PageSpeed Insights (țintim 95-100 pe mobil).