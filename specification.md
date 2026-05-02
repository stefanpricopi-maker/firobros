📄 Project Specifications: Wedding Photography Portfolio

## 1. Tehnologii Core
- **Framework:** Astro 6.x (SSG).
- **Styling:** Tailwind CSS 4 (utility-first).
- **Componente:** Astro (JS minim; lightbox PhotoSwipe pe portofoliu).
- **Imagini:** `astro:assets` (WebP/AVIF, rezoluții multiple); poze locale din `src/assets/images/portfolio/`.
- **Deployment:** Netlify (via GitHub).

## 2. Arhitectură Informațională (implementat)
- **Acasă (`/`):** Hero full-bleed, secțiune **Best of**, CTA-uri către portofoliu și contact.
- **Portofoliu (`/portofoliu`):** Masonry + filtre **Cununie / Nuntă / Trash the dress** (`?categorie=…`); lightbox la click.
- **Despre (`/despre`):** Text, portret, pașii de lucru.
- **Contact (`/contact`):** Netlify Forms (`data-netlify`).

Redirect: `/gallery` → `/portofoliu/` (Netlify).

## 3. Design & UX
- Stil fine-art, minimalist, spații albe.
- **Tipografie:** Playfair Display (titluri), Inter (text).
- **Mobile first:** masonry și lightbox tactil-friendly.

*Vezi `todo.md` pentru pașii rămași (git, imagini reale, domeniu, PageSpeed).*