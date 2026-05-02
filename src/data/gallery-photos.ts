export type GalleryPhoto = {
	id: string;
	src: string;
	width: number;
	height: number;
	alt: string;
};

/** Placeholder set — swap `src` for files imported from `src/assets/images/gallery/` when ready. */
export const galleryPhotos: GalleryPhoto[] = [
	{
		id: '1',
		src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
		width: 1200,
		height: 1800,
		alt: 'Wedding ceremony in a bright venue',
	},
	{
		id: '2',
		src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85',
		width: 1200,
		height: 800,
		alt: 'Floral wedding arch and aisle',
	},
	{
		id: '3',
		src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
		width: 1200,
		height: 1500,
		alt: 'Couple dancing at reception',
	},
	{
		id: '4',
		src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85',
		width: 1200,
		height: 900,
		alt: 'Bridal bouquet detail',
	},
	{
		id: '5',
		src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=85',
		width: 1200,
		height: 1600,
		alt: 'Black and white portrait of newlyweds',
	},
	{
		id: '6',
		src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85',
		width: 1200,
		height: 800,
		alt: 'Portrait of couple by the sea',
	},
	{
		id: '7',
		src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1200&q=85',
		width: 1200,
		height: 1350,
		alt: 'Bride in natural window light',
	},
	{
		id: '8',
		src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85',
		width: 1200,
		height: 1800,
		alt: 'Bride holding bouquet in soft daylight',
	},
	{
		id: '9',
		src: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1200&q=85',
		width: 1200,
		height: 1000,
		alt: 'Evening sparkler send-off',
	},
];
