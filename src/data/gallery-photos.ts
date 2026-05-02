export type GalleryCategory = 'cununie' | 'nunta' | 'trash-the-dress';

export type GalleryPhoto = {
	id: string;
	src: string;
	width: number;
	height: number;
	alt: string;
	category: GalleryCategory;
};

/**
 * Imagini remote suplimentare (ex. stock) — implicit **gol**: portofoliul folosește doar fișiere din
 * `src/assets/images/portfolio/{cununie,nunta,trash-the-dress}/`.
 * Adaugă aici doar dacă vrei să amesteci URL-uri externe cu localele.
 */
export const galleryPhotos: GalleryPhoto[] = [];
