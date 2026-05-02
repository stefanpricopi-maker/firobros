/** Extrage ID-ul de 11 caractere din URL YouTube sau returnează inputul dacă e deja un ID simplu. */
export function normalizeYoutubeId(input: string): string {
	const raw = input.trim();
	if (!raw) return '';
	if (/^[a-zA-Z0-9_-]{11}$/.test(raw)) return raw;
	const mWatch = raw.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
	if (mWatch) return mWatch[1];
	const mShort = raw.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
	if (mShort) return mShort[1];
	const mEmbed = raw.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
	if (mEmbed) return mEmbed[1];
	const mSh = raw.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
	if (mSh) return mSh[1];
	return '';
}
