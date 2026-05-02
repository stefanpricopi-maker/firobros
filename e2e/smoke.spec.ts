import { expect, test } from '@playwright/test';

const routes = [
	'/',
	'/despre/',
	'/contact/',
	'/portofoliu/',
	'/portofoliu/cununie/',
	'/video/',
	'/404.html',
];

for (const path of routes) {
	test(`GET ${path} returns 200`, async ({ page }) => {
		const res = await page.goto(path);
		expect(res?.ok()).toBeTruthy();
	});
}

test('contact page has Netlify contact form', async ({ page }) => {
	await page.goto('/contact/');
	await expect(page.locator('form[name="contact"]')).toBeVisible();
	await expect(page.locator('input[name="email"]')).toBeVisible();
	await expect(page.locator('input[type="hidden"][name="form-name"]')).toHaveValue('contact');
});

test('portfolio has category chips', async ({ page }) => {
	await page.goto('/portofoliu/');
	await expect(page.getByRole('link', { name: 'Toate' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Nuntă', exact: true })).toBeVisible();
});
