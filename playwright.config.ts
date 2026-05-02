import { defineConfig, devices } from '@playwright/test';

/** Browsere sub `node_modules/` (evită cache global incomplet). La fel la `npm run test:e2e:install`. */
process.env.PLAYWRIGHT_BROWSERS_PATH = '0';

/** Evită conflictul cu `astro dev` (implicit tot 4321). */
const port = 4174;
const host = '127.0.0.1';
const baseURL = `http://${host}:${port}`;

export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: process.env.CI ? 'github' : 'list',
	use: {
		baseURL,
		trace: 'on-first-retry',
	},
	projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
	webServer: {
		command: 'npm run preview:e2e',
		url: `${baseURL}/`,
		timeout: 180_000,
		reuseExistingServer: !process.env.CI,
	},
});
