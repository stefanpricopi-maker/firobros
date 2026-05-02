import type { ImageMetadata } from 'astro';

export type FeaturedWedding = {
	title: string;
	location: string;
	href: string;
	imageSrc: ImageMetadata;
	width: number;
	height: number;
	alt: string;
};

const featuredImages = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/images/featured/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}',
	{ eager: true },
);

/**
 * Câte un rând pentru fiecare imagine din `featured/`, **în aceeași ordine** ca sortarea alfabetică a fișierelor.
 * Dacă lipsește un rând, titlul se ia din numele fișierului.
 */
export const featuredDetails: { title: string; location: string; href?: string }[] = [
	// Exemplu după ce adaugi poze în `src/assets/images/featured/`:
	// { title: 'Ana & Dan', location: 'Cluj-Napoca', href: '/portofoliu' },
	// { title: 'Maria & Paul', location: 'București' },
];

function titleFromPath(path: string): string {
	const base = path.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') ?? 'Proiect';
	return base.charAt(0).toUpperCase() + base.slice(1);
}

export function getFeaturedWeddings(): FeaturedWedding[] {
	const paths = Object.keys(featuredImages).sort();
	const out: FeaturedWedding[] = [];
	for (let i = 0; i < paths.length; i++) {
		const path = paths[i];
		const mod = featuredImages[path];
		if (!mod?.default) continue;
		const img = mod.default;
		const d = featuredDetails[i];
		const title = d?.title ?? titleFromPath(path);
		const location = d?.location ?? '';
		const href = d?.href ?? '/portofoliu';
		out.push({
			title,
			location,
			href,
			imageSrc: img,
			width: img.width,
			height: img.height,
			alt: title,
		});
	}
	return out;
}
