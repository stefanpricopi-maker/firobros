/**
 * Videoclipuri YouTube pe pagina /video/
 *
 * În `youtubeId` poți pune **doar ID-ul** sau **URL complet** (watch, youtu.be, embed, Shorts) —
 * site-ul îl normalizează în `video.astro`.
 */
export type YoutubeVideoEntry = {
	/** ID YouTube (11 caractere tipice) */
	youtubeId: string;
	/** Titlu scurt afișat sub player (opțional) */
	title?: string;
	/** O propoziție opțională sub titlu */
	caption?: string;
};

export const youtubeVideos: YoutubeVideoEntry[] = [
	{
		youtubeId: 'Dt7JavTzrNM',
		title: 'Marius & Cristina - Highlights',
		caption: 'Firobros Image & Film',
	},
];