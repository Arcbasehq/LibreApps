export const SITE_URL = 'https://libreapps.xyz';
export const SITE_DOMAIN = 'libreapps.xyz';
export const SITE_NAME = 'Libre';
export const SITE_DESCRIPTION =
	'Libre apps — privacy-first software. LibreSearch is our private search engine with no tracking, profiles, or ads. More Libre apps on the way.';
export const LIBRESEARCH_URL = 'https://libresearch.ca';
export const GITHUB_URL = 'https://github.com/Arcbasehq/LibreSearch';
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
