import {
	SITE_URL,
	SITE_NAME,
	SITE_DESCRIPTION,
	SITE_DOMAIN,
	SITE_LAUNCHED,
	LIBRESEARCH_URL,
	LIBREAUTH_URL,
	GITHUB_URL,
	MASTODON_URL,
	X_URL
} from '$lib/config';

export const OG_IMAGE = `${SITE_URL}/og.png`;
export const OG_IMAGE_ALT = 'Libre — privacy-first apps including LibreSearch and LibreAuth';
export const TITLE_SUFFIX = 'Libre';
export const TWITTER_HANDLE = '@libresearchca';

export type SitemapEntry = {
	path: string;
	changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
	priority?: number;
	lastmod?: string;
};

/** Public indexable routes */
export const sitemapRoutes: SitemapEntry[] = [
	{ path: '', changefreq: 'weekly', priority: 1, lastmod: SITE_LAUNCHED },
	{ path: '/about', changefreq: 'monthly', priority: 0.9, lastmod: SITE_LAUNCHED },
	{ path: '/products', changefreq: 'monthly', priority: 0.95, lastmod: SITE_LAUNCHED },
	{ path: '/security', changefreq: 'monthly', priority: 0.9, lastmod: SITE_LAUNCHED },
	{ path: '/privacy', changefreq: 'monthly', priority: 0.8, lastmod: SITE_LAUNCHED },
	{ path: '/terms', changefreq: 'monthly', priority: 0.8, lastmod: SITE_LAUNCHED },
	{ path: '/transparency', changefreq: 'monthly', priority: 0.8, lastmod: SITE_LAUNCHED },
	{ path: '/trust', changefreq: 'monthly', priority: 0.8, lastmod: SITE_LAUNCHED },
	{ path: '/extension', changefreq: 'monthly', priority: 0.85, lastmod: SITE_LAUNCHED },
	{ path: '/contact', changefreq: 'yearly', priority: 0.7, lastmod: SITE_LAUNCHED },
	{ path: '/press', changefreq: 'monthly', priority: 0.65, lastmod: SITE_LAUNCHED },
	{ path: '/donate', changefreq: 'monthly', priority: 0.65, lastmod: SITE_LAUNCHED },
	{ path: '/changelog', changefreq: 'weekly', priority: 0.55, lastmod: SITE_LAUNCHED }
];

export function pageTitle(title: string): string {
	return `${title} · ${TITLE_SUFFIX}`;
}

export function absoluteUrl(path: string): string {
	if (!path || path === '/') return SITE_URL;
	return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export type FaqItem = { question: string; answer: string };
export type BreadcrumbItem = { name: string; url: string };

export function organizationSchema() {
	return {
		'@type': 'Organization',
		'@id': `${SITE_URL}/#organization`,
		name: SITE_NAME,
		url: SITE_URL,
		description: SITE_DESCRIPTION,
		logo: `${SITE_URL}/og.png`,
		sameAs: [GITHUB_URL, MASTODON_URL, X_URL]
	};
}

export function websiteSchema() {
	return {
		'@type': 'WebSite',
		'@id': `${SITE_URL}/#website`,
		name: `${SITE_NAME} apps`,
		alternateName: SITE_DOMAIN,
		url: SITE_URL,
		description: SITE_DESCRIPTION,
		publisher: { '@id': `${SITE_URL}/#organization` },
		inLanguage: 'en'
	};
}

export function libreSearchApplicationSchema() {
	return {
		'@type': 'SoftwareApplication',
		'@id': `${LIBRESEARCH_URL}/#software`,
		name: 'LibreSearch',
		applicationCategory: 'SearchApplication',
		operatingSystem: 'Web, Chrome, Firefox, Edge, Brave',
		url: LIBRESEARCH_URL,
		description:
			'Private search engine with no query logs, user profiles, or ads. Open source under AGPL-3.0.',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		},
		author: { '@id': `${SITE_URL}/#organization` }
	};
}

export function libreAuthApplicationSchema() {
	return {
		'@type': 'SoftwareApplication',
		'@id': `${LIBREAUTH_URL}/#software`,
		name: 'LibreAuth',
		applicationCategory: 'SecurityApplication',
		operatingSystem: 'Web',
		url: LIBREAUTH_URL,
		description:
			'Open-source web authenticator for TOTP codes. Syncs across devices with optional account; codes generate in your browser.',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		},
		author: { '@id': `${SITE_URL}/#organization` }
	};
}

export function faqPageSchema(faqs: FaqItem[]) {
	return {
		'@type': 'FAQPage',
		'@id': `${SITE_URL}/#faq`,
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	};
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}

export function webPageSchema(options: {
	name: string;
	description: string;
	url: string;
	lastmod?: string;
}) {
	return {
		'@type': 'WebPage',
		'@id': `${options.url}#webpage`,
		name: options.name,
		description: options.description,
		url: options.url,
		isPartOf: { '@id': `${SITE_URL}/#website` },
		about: { '@id': `${SITE_URL}/#organization` },
		inLanguage: 'en',
		...(options.lastmod ? { dateModified: options.lastmod } : {})
	};
}

export function jsonLdGraph(...nodes: Record<string, unknown>[]) {
	return {
		'@context': 'https://schema.org',
		'@graph': nodes
	};
}

export function homePageSchemas(faqs: FaqItem[]) {
	return jsonLdGraph(
		organizationSchema(),
		websiteSchema(),
		libreSearchApplicationSchema(),
		libreAuthApplicationSchema(),
		faqPageSchema(faqs)
	);
}

export function innerPageSchemas(options: {
	title: string;
	description: string;
	canonical: string;
	breadcrumbs: BreadcrumbItem[];
	lastmod?: string;
}) {
	const crumbs = breadcrumbSchema(options.breadcrumbs);
	const page = webPageSchema({
		name: pageTitle(options.title),
		description: options.description,
		url: options.canonical,
		lastmod: options.lastmod
	});
	return jsonLdGraph(organizationSchema(), websiteSchema(), page, crumbs);
}

export function defaultBreadcrumbs(pageName: string, canonical: string): BreadcrumbItem[] {
	return [
		{ name: 'Home', url: SITE_URL },
		{ name: pageName, url: canonical }
	];
}
