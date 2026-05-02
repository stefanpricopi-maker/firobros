import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = ['/', '/despre/', '/contact/', '/portofoliu/', '/video/'] as const;

for (const path of pages) {
	test(`a11y: ${path} has no serious axe violations`, async ({ page }) => {
		await page.goto(path);
		const results = await new AxeBuilder({ page })
			/** Contrast: culorile brand depind de audit vizual; regula e zgomotoasă în CI. */
			.disableRules(['color-contrast'])
			.analyze();
		const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
		expect(
			serious,
			serious.map((v) => `${v.id}: ${v.help}`).join('\n'),
		).toEqual([]);
	});
}
