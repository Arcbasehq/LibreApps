import {
	GITHUB_URL,
	LIBREAUTH_GITHUB_URL,
	LIBREAUTH_URL,
	LIBRESEARCH_URL
} from '$lib/config';

export type ProductMockVariant = 'search' | 'auth' | 'settings';

export type LibreProduct = {
	id: string;
	name: string;
	tagline: string;
	description: string;
	url: string;
	github?: string;
	mock: ProductMockVariant;
	highlights: string[];
	external?: boolean;
};

export const libreProducts: LibreProduct[] = [
	{
		id: 'libresearch',
		name: 'LibreSearch',
		tagline: 'Private search',
		description:
			'Web search without query logs, user profiles, or ads. Results only — open source and free without an account.',
		url: LIBRESEARCH_URL,
		github: GITHUB_URL,
		mock: 'search',
		highlights: ['No query logs', 'No ads in results', 'Works without an account'],
		external: true
	},
	{
		id: 'libreauth',
		name: 'LibreAuth',
		tagline: 'Web authenticator',
		description:
			'TOTP codes in the browser. Scan QR codes, sync your vault across devices, and generate codes client-side.',
		url: LIBREAUTH_URL,
		github: LIBREAUTH_GITHUB_URL,
		mock: 'auth',
		highlights: ['QR scan & manual entry', 'Optional account sync', 'AGPL-3.0 open source'],
		external: true
	}
];

export type LibreProductExtra = {
	id: string;
	name: string;
	tagline: string;
	description: string;
	href: string;
	highlights: string[];
};

export const libreProductExtras: LibreProductExtra[] = [
		{
		id: 'extension',
		name: 'Browser extension',
		tagline: 'LibreSearch add-on',
		description:
			'Set LibreSearch as your default search engine from Chrome, Firefox, Edge, or Brave.',
		href: '/extension',
		highlights: ['Same privacy model as the web app', 'Documented on this site']
	}
];
