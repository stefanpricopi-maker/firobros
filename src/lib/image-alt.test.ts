import { describe, expect, it } from 'vitest';
import { basenameFromSrc, humanizeFilename, resolveImageAlt } from './image-alt';

describe('humanizeFilename', () => {
	it('capitalize words from kebab-case', () => {
		expect(humanizeFilename('ana-si-ion.jpg')).toBe('Ana Si Ion');
	});

	it('returns Imagine for empty stem', () => {
		expect(humanizeFilename('.jpg')).toBe('Imagine');
	});
});

describe('basenameFromSrc', () => {
	it('extracts last path segment from relative path', () => {
		expect(basenameFromSrc('/foo/bar/photo_01.webp')).toBe('photo_01.webp');
	});

	it('handles https URL', () => {
		expect(basenameFromSrc('https://cdn.example.com/x/y/file.png')).toBe('file.png');
	});

	it('returns null for empty path', () => {
		expect(basenameFromSrc('')).toBeNull();
	});
});

describe('resolveImageAlt', () => {
	it('uses explicit alt when set', () => {
		expect(
			resolveImageAlt('  Nuntă Cluj  ', {
				src: '/x/y.jpg',
			}),
		).toBe('Nuntă Cluj');
	});

	it('uses filePathHint when alt empty', () => {
		expect(
			resolveImageAlt(undefined, {
				src: '/ignored',
				filePathHint: 'portfolio/nunta/DSC_1234.jpg',
			}),
		).toBe('DSC 1234');
	});

	it('falls back to defaultAlt', () => {
		expect(
			resolveImageAlt(undefined, {
				src: '',
				defaultAlt: 'Custom',
			}),
		).toBe('Custom');
	});
});
