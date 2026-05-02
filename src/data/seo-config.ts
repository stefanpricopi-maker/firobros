/**
 * SEO & brand — Firobros Image & Film (nunți neoprotestante, Cluj-Napoca, TTD).
 * Sitemap: `@astrojs/sitemap` în `astro.config.mjs`.
 * Robots: `public/robots.txt` → copiat în `dist/` (editează linia Sitemap la fel ca `site` din config).
 */

import type { GalleryCategory } from './gallery-photos';

/** Denumire afișată în OG, JSON-LD și footer */
export const seoSiteName = 'Firobros Image & Film';

export const seoIdentity = {
	/** Titluri scurte (ex. sfârșit de pagină portofoliu) */
	shortBrand: 'Firobros',
	displayName: seoSiteName,
	personName: '',
};

export const seoPrimaryKeywords = [
	'fotograf nunta neoprotestanta Cluj',
	'video nunta crestina',
	'Firobros Image & Film',
	'Trash the Dress Cluj',
	'servicii foto video nunta baptista penticostala',
] as const;

export const seoBusiness = {
	description:
		'Firobros Image & Film — fotografie și cinematografie de nuntă pentru comunitatea creștină neoprotestantă din Cluj-Napoca și România (penticostali, baptiști, adventiști etc.). Specializare: ceremonii religioase, petrecere și sesiuni Trash the Dress (TTD). Disponibili și pentru deplasări.',

	priceRange: '$$',

	telephone: '0749427454',

	email: 'stefan.pricopi.sb@gmail.com',

	address: {
		streetAddress: '',
		addressLocality: 'Cluj-Napoca',
		addressRegion: 'Cluj',
		postalCode: '',
		addressCountry: 'RO',
	},

	areaServedNames: ['Cluj-Napoca', 'Cluj', 'România', 'Deplasări naționale'],

	sameAs: [] as string[],

	geo: { latitude: 46.7712, longitude: 23.6236 },
};

export const seoDefaultOgImage =
	'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&w=1200&q=85';

const short = seoIdentity.shortBrand;

/** Titluri conform brief: Home fix; portofoliu = „[Eveniment] - Nuntă Creștină - Firobros” */
export const seoPages = {
	home: {
		title: 'Firobros | Fotograf și Video Nuntă Neoprotestantă Cluj',
		description: `${seoSiteName} — foto și video nunți neoprotestante în Cluj-Napoca și la cerere în țară. Traduceri autentice ale ceremoniei, petrecerii și sesiunilor Trash the Dress.`,
		ogImage: seoDefaultOgImage,
	},

	portofoliu: {
		title: `Portofoliu - Nuntă Creștină - ${short}`,
		description:
			'Galerie foto și video: cununie, nuntă bisericească neoprotestantă și Trash the Dress Cluj. Firobros Image & Film.',
		ogImage: seoDefaultOgImage,
	},

	portofoliuCununie: {
		title: `Cununie - Nuntă Creștină - ${short}`,
		description:
			'Momente din cununie și ceremonie — fotograf și video pentru nunți creștine neoprotestante, Cluj.',
		ogImage: seoDefaultOgImage,
	},

	portofoliuNunta: {
		title: `Nuntă - Nuntă Creștină - ${short}`,
		description:
			'Fotografii și film de nuntă neoprotestantă: Cluj-Napoca și deplasări. Pregătire, biserică, petrecere.',
		ogImage: seoDefaultOgImage,
	},

	portofoliuTrash: {
		title: `Trash the Dress - Nuntă Creștină - ${short}`,
		description:
			'Sesiuni Trash the Dress (TTD) după ziua nunții — locații la alegere, Cluj și împrejurimi. Firobros Image & Film.',
		ogImage: seoDefaultOgImage,
	},

	despre: {
		title: `Despre - Nuntă Neoprotestantă Cluj - ${short}`,
		description: `Cum lucrăm cu cupluri din biserici neoprotestante: planificare, respect pentru ritualuri, livrare galerie și film. ${seoSiteName}.`,
	},

	contact: {
		title: `Contact - Foto Video Nuntă Cluj - ${short}`,
		description: `Scrie-ne data, biserica / locația și nevoile de foto și video. ${seoSiteName} — răspundem în curând.`,
		ogImage:
			'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&w=1200&q=85',
	},

	multumim: {
		title: `Mulțumim — ${short}`,
		description: 'Mesajul tău a fost trimis. Îți răspundem în curând.',
	},

	notFound: {
		title: `Pagină negăsită — ${short}`,
		description: 'Această pagină nu există sau a fost mutată.',
	},
};

export function seoForPortfolio(filter: GalleryCategory | null): {
	title: string;
	description: string;
	ogImage: string;
} {
	if (filter === null) {
		return {
			title: seoPages.portofoliu.title,
			description: seoPages.portofoliu.description,
			ogImage: seoPages.portofoliu.ogImage,
		};
	}
	const map = {
		cununie: seoPages.portofoliuCununie,
		nunta: seoPages.portofoliuNunta,
		'trash-the-dress': seoPages.portofoliuTrash,
	} as const;
	const block = map[filter];
	return {
		title: block.title,
		description: block.description,
		ogImage: block.ogImage,
	};
}

export type LocalBusinessSchemaInput = {
	siteOrigin: string;
	logoUrl?: string;
};

export function getLocalBusinessJsonLd({ siteOrigin, logoUrl }: LocalBusinessSchemaInput): object {
	const url = siteOrigin.replace(/\/$/, '');
	const { address, areaServedNames, sameAs, geo } = seoBusiness;

	const postalAddress: Record<string, string> = {
		'@type': 'PostalAddress',
		addressLocality: address.addressLocality,
		addressRegion: address.addressRegion,
		addressCountry: address.addressCountry,
	};
	if (address.streetAddress) postalAddress.streetAddress = address.streetAddress;
	if (address.postalCode) postalAddress.postalCode = address.postalCode;

	const schema: Record<string, unknown> = {
		'@context': 'https://schema.org',
		'@type': ['LocalBusiness', 'ProfessionalService'],
		'@id': `${url}/#business`,
		name: seoSiteName,
		description: seoBusiness.description,
		url,
		priceRange: seoBusiness.priceRange,
		image: logoUrl ?? `${url}/favicon.svg`,
		knowsAbout: [
			'tradiții de nuntă neoprotestante',
			'sesiuni Trash the Dress (TTD)',
			'fotografie nunți neoprotestante',
			'video nunți creștine',
			'Trash the Dress Cluj',
		],
		areaServed: areaServedNames.map((n) => ({
			'@type': 'AdministrativeArea',
			name: n,
		})),
		address: postalAddress,
	};

	if (seoBusiness.telephone) schema.telephone = seoBusiness.telephone;
	if (seoBusiness.email) schema.email = seoBusiness.email;
	const social = sameAs.filter(Boolean);
	if (social.length) schema.sameAs = social;
	if (geo) {
		schema.geo = {
			'@type': 'GeoCoordinates',
			latitude: geo.latitude,
			longitude: geo.longitude,
		};
	}

	return schema;
}
