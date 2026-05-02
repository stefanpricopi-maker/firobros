export type FeaturedWedding = {
	title: string;
	location: string;
	href: string;
	imageSrc: string;
	width: number;
	height: number;
	alt: string;
};

export const featuredWeddings: FeaturedWedding[] = [
	{
		title: 'Tuscany',
		location: 'Villa garden reception',
		href: '/gallery',
		imageSrc:
			'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85',
		width: 1600,
		height: 1067,
		alt: 'Couple dancing outdoors at golden hour',
	},
	{
		title: 'Provence',
		location: 'Lavender fields at dusk',
		href: '/gallery',
		imageSrc:
			'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85',
		width: 1600,
		height: 1067,
		alt: 'Wedding couple walking through lavender',
	},
	{
		title: 'Coastal California',
		location: 'Big Sur cliffs',
		href: '/gallery',
		imageSrc:
			'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=85',
		width: 1600,
		height: 1067,
		alt: 'Elegant wedding portrait by the ocean',
	},
];
