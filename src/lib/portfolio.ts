import type { ImageMetadata } from 'astro';
import { galleryPhotos as remoteGalleryPhotos } from '../data/gallery-photos';
import type { GalleryCategory, GalleryPhoto } from '../data/gallery-photos';

export type { GalleryCategory };

export type PortfolioEntry = {
	id: string;
	src: string | ImageMetadata;
	width: number;
	height: number;
	alt: string;
	category: GalleryCategory;
	/** URL deschisă în lightbox (rezoluție mare). */
	lightboxUrl: string;
	/** Dimensiuni pentru PhotoSwipe (raport corect la zoom). */
	pswpWidth: number;
	pswpHeight: number;
};

const portfolioImages = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/images/portfolio/**/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}',
	{ eager: true },
);

function pathToCategory(path: string): GalleryCategory | null {
	const normalized = path.replace(/\\/g, '/');
	const m = normalized.match(/portfolio\/(cununie|nunta|trash-the-dress)\//);
	if (!m) return null;
	return m[1] as GalleryCategory;
}

function altFromPath(path: string): string {
	const base = path.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') ?? 'Portofoliu';
	return base.charAt(0).toUpperCase() + base.slice(1);
}

function lightboxUrlFromRemote(url: string): string {
	try {
		const u = new URL(url);
		u.searchParams.set('w', '2400');
		u.searchParams.set('q', '90');
		return u.href;
	} catch {
		return url;
	}
}

function remoteToEntry(photo: GalleryPhoto): PortfolioEntry {
	const pswpW = 2400;
	const pswpH = Math.round((photo.height / photo.width) * pswpW);
	return {
		id: photo.id,
		src: photo.src,
		width: photo.width,
		height: photo.height,
		alt: photo.alt,
		category: photo.category,
		lightboxUrl: lightboxUrlFromRemote(photo.src),
		pswpWidth: pswpW,
		pswpHeight: pswpH,
	};
}

export function loadLocalPortfolioImages(): PortfolioEntry[] {
	const out: PortfolioEntry[] = [];
	for (const [path, mod] of Object.entries(portfolioImages)) {
		const category = pathToCategory(path);
		if (!category || !mod?.default) continue;
		const img = mod.default;
		out.push({
			id: `local-${path}`,
			src: img,
			width: img.width,
			height: img.height,
			alt: altFromPath(path),
			category,
			lightboxUrl: img.src,
			pswpWidth: img.width,
			pswpHeight: img.height,
		});
	}
	return out.sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Îmbină pozele din `src/assets/images/portfolio/{cununie,nunta,trash-the-dress}/`
 * cu opționalele URL-uri din `gallery-photos.ts` (implicit gol). Localele apar primele.
 */
export function getPortfolioPhotos(category: GalleryCategory | null): PortfolioEntry[] {
	const local = loadLocalPortfolioImages();
	const remote = remoteGalleryPhotos.map(remoteToEntry);
	const merged = [...local, ...remote];
	const filtered =
		category === null ? merged : merged.filter((p) => p.category === category);
	return filtered;
}
