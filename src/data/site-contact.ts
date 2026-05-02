/**
 * Contact public: un singur loc de editat înainte de launch.
 * - `email`: folosit la linkul „E-mail” de pe /contact.
 * - `profiles`: doar intrări cu `href` ne-gol apar în listă (poți șterge rânduri sau lăsa goale).
 */
export type SocialProfile = {
	label: string;
	href: string;
};

export const siteContact = {
	email: 'contact@firobros.ro',

	profiles: [
		{ label: 'Instagram', href: '' },
		{ label: 'Facebook', href: '' },
		{ label: 'YouTube', href: '' },
		{ label: 'Vimeo', href: '' },
		{ label: 'Pinterest', href: '' },
	] satisfies SocialProfile[],
};
