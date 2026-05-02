/**
 * Secțiunea „Film” de pe homepage.
 * Pune un ID YouTube sau Vimeo; lasă ambele goale pentru a afișa doar text + CTA (fără player).
 */
export const filmSection = {
	title: 'Film',
	lead: 'Mișcare, ritm și sunet — același ochi ca la fotografie, dar pentru povestea care curge în timp.',
	body: 'Teasere discrete, recapitulări emoționale sau documentare extinse: discutăm înainte ce formă are sens pentru voi și pentru ziua respectivă.',
	/** Ex.: din `https://www.youtube.com/watch?v=XXXXXXXXXXX` pune doar `XXXXXXXXXXX`. */
	youtubeVideoId: '',
	/** Ex.: din `https://vimeo.com/123456789` pune `123456789`. */
	vimeoVideoId: '',
	/** Titlu accesibil pentru iframe (citește screen readerele). */
	embedTitle: 'Film Firobros — teaser eveniment',
};
