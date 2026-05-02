// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';

// Domeniu public: canonical (BaseLayout), Open Graph, @astrojs/sitemap.
// - Netlify: la build setează automat `URL` = domeniul principal (ex. https://site.netlify.app sau domeniu custom).
// - Local (`npm run build`): pune în `.env` → PUBLIC_SITE_URL=https://...
// - Înlocuiește fallback-ul dacă faci build fără variabile (ex. CI fără Netlify).
const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const site =
	process.env.URL ||
	env.PUBLIC_SITE_URL ||
	'https://YOUR-SITE.netlify.app';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		sitemap({
			serialize(item) {
				const u = item.url;
				if (u.includes('/portofoliu/nunta') || u.includes('/portofoliu/trash-the-dress')) {
					return { ...item, priority: 0.9, changefreq: ChangeFreqEnum.WEEKLY };
				}
				if (u.includes('/portofoliu/') && !u.match(/portofoliu\/(cununie|nunta|trash-the-dress)/)) {
					return { ...item, priority: 0.85, changefreq: ChangeFreqEnum.WEEKLY };
				}
				return item;
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
			config: {
				// Evită respingeri Sharp pe fișiere foarte mari (uneori cauză 500 la /_image).
				limitInputPixels: false,
			},
		},
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
		],
	},
});
