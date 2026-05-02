import { describe, expect, it } from 'vitest';
import { getPortfolioPhotos } from './portfolio';

describe('getPortfolioPhotos', () => {
	it('returns an array', () => {
		const all = getPortfolioPhotos(null);
		expect(Array.isArray(all)).toBe(true);
	});

	it('filters strictly by category', () => {
		const cununie = getPortfolioPhotos('cununie');
		expect(cununie.every((p) => p.category === 'cununie')).toBe(true);
		const ttd = getPortfolioPhotos('trash-the-dress');
		expect(ttd.every((p) => p.category === 'trash-the-dress')).toBe(true);
	});

	it('uses only known categories', () => {
		const allowed: readonly string[] = ['cununie', 'nunta', 'trash-the-dress'];
		for (const p of getPortfolioPhotos(null)) {
			expect(allowed).toContain(p.category);
			expect(p.id.length).toBeGreaterThan(0);
		}
	});
});
