/** Text alternativ din nume de fișier (fără extensie), pentru SEO când lipsește `alt`. */

export function humanizeFilename(basename: string): string {
	const withoutExt = basename.replace(/\.[^.]+$/i, '');
	const words = withoutExt.replace(/[-_]+/g, ' ').trim();
	if (!words) return 'Imagine';
	return words.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function basenameFromSrc(src: string): string | null {
	try {
		if (src.startsWith('http://') || src.startsWith('https://')) {
			const u = new URL(src);
			const seg = u.pathname.split('/').filter(Boolean).pop();
			return seg ?? null;
		}
		const decoded = decodeURIComponent(src.split('?')[0] ?? src);
		const seg = decoded.split('/').filter(Boolean).pop();
		return seg ?? null;
	} catch {
		return null;
	}
}

/** Extrage un nume de fișier din URL-ul intern `/_image?href=...%2Ffile.jpg` (dev). */
function basenameFromImageServiceUrl(src: string): string | null {
	if (!src.includes('_image') || !src.includes('href=')) return null;
	try {
		const u = new URL(src, 'https://example.com');
		const href = u.searchParams.get('href');
		if (!href) return null;
		const path = decodeURIComponent(href.split('?')[0] ?? href);
		return path.split('/').filter(Boolean).pop() ?? null;
	} catch {
		return null;
	}
}

export function resolveImageAlt(
	alt: string | undefined,
	opts: {
		src: import('astro').ImageMetadata | string;
		filePathHint?: string;
		defaultAlt?: string;
	},
): string {
	if (alt?.trim()) return alt.trim();

	if (opts.filePathHint) {
		const base = opts.filePathHint.split('/').pop();
		if (base) return humanizeFilename(base);
	}

	if (typeof opts.src === 'string') {
		const b = basenameFromSrc(opts.src) ?? basenameFromImageServiceUrl(opts.src);
		if (b) return humanizeFilename(b);
	} else {
		const raw = opts.src.src;
		const b = basenameFromSrc(raw) ?? basenameFromImageServiceUrl(raw);
		if (b) return humanizeFilename(b);
	}

	return opts.defaultAlt ?? 'Imagine — Firobros Image & Film';
}
