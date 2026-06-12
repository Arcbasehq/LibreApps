export const SITE_URL = 'https://www.libreapps.xyz';
export const SITE_DOMAIN = 'www.libreapps.xyz';
export const SITE_NAME = 'Libre';
export const SITE_DESCRIPTION =
	'Libre apps — privacy-first software. LibreSearch is private search with no tracking. LibreAuth is an open-source web authenticator. More Libre apps on the way.';
export const LIBRESEARCH_URL = 'https://libresearch.ca';
export const LIBREAUTH_URL = 'https://auth.libreapps.xyz';
export const GITHUB_URL = 'https://github.com/Arcbasehq/LibreSearch';
export const LIBREAUTH_GITHUB_URL = 'https://github.com/Arcbasehq/LibreAuth';
export const MASTODON_URL = 'https://mastodon.social/@libresearch';
export const X_URL = 'https://x.com/libresearchca';

/** ISO date — when libreapps.xyz first went live */
export const SITE_LAUNCHED = '2026-06-11';

export function formatLongDate(isoDate: string): string {
	return new Date(`${isoDate}T12:00:00`).toLocaleDateString('en-CA', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
