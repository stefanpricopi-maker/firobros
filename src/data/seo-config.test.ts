import { describe, expect, it } from 'vitest';
import { getLocalBusinessJsonLd, seoSiteName } from './seo-config';

describe('getLocalBusinessJsonLd', () => {
	it('emits Schema.org LocalBusiness shape', () => {
		const json = getLocalBusinessJsonLd({ siteOrigin: 'https://firobros.example' }) as Record<
			string,
			unknown
		>;

		expect(json['@context']).toBe('https://schema.org');
		expect(json['@type']).toEqual(['LocalBusiness', 'ProfessionalService']);
		expect(json.name).toBe(seoSiteName);
		expect(Array.isArray(json.knowsAbout)).toBe(true);
		expect((json.knowsAbout as string[]).length).toBeGreaterThan(0);
		expect(json['@id']).toBe('https://firobros.example/#business');
	});

	it('strips trailing slash from site origin', () => {
		const json = getLocalBusinessJsonLd({ siteOrigin: 'https://example.com/' }) as Record<
			string,
			unknown
		>;
		expect(json['@id']).toBe('https://example.com/#business');
	});
});
