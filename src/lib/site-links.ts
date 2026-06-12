import { GITHUB_URL, LIBRESEARCH_URL } from '$lib/config';

export type SiteLink = {
	href: string;
	label: string;
	external?: boolean;
	description?: string;
};

export const productLinks: SiteLink[] = [
	{
		href: LIBRESEARCH_URL,
		label: 'LibreSearch',
		description: 'Our private search engine',
		external: true
	},
	{
		href: '/extension',
		label: 'Browser extension',
		description: 'Set LibreSearch as your default'
	},
	{ href: '/#libresearch', label: 'Product overview', description: 'LibreSearch feature tour' }
];

export const companyLinks: SiteLink[] = [
	{ href: '/about', label: 'About', description: 'The company and our mission' },
	{ href: '/contact', label: 'Contact', description: 'Questions, press, security reports' },
	{ href: '/press', label: 'Press', description: 'Media kit and brand assets' },
	{ href: '/blog', label: 'Blog', description: 'Updates from the Libre team' }
];

export const trustLinks: SiteLink[] = [
	{ href: '/security', label: 'Security', description: 'How Libre handles your data' },
	{ href: '/privacy', label: 'Privacy policy', description: 'What we collect and what we skip' },
	{ href: '/terms', label: 'Terms of service', description: 'Rules for using this site' },
	{ href: '/transparency', label: 'Transparency', description: 'Requests received and data retained' },
	{ href: '/trust', label: 'Trust center', description: 'Policies, reports, and resources' }
];

export const footerProductLinks: SiteLink[] = [
	{ href: LIBRESEARCH_URL, label: 'LibreSearch', external: true },
	{ href: '/extension', label: 'Browser extension' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/changelog', label: 'Changelog' }
];

export const footerCompanyLinks: SiteLink[] = [
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
	{ href: '/press', label: 'Press' },
	{ href: '/donate', label: 'Donate' }
];

export const footerTrustLinks: SiteLink[] = [
	{ href: '/security', label: 'Security' },
	{ href: '/privacy', label: 'Privacy policy' },
	{ href: '/terms', label: 'Terms of service' },
	{ href: '/transparency', label: 'Transparency' },
	{ href: '/trust', label: 'Trust center' }
];

export const footerColumns = [
	{ title: 'Products', links: footerProductLinks },
	{ title: 'Company', links: footerCompanyLinks },
	{ title: 'Trust', links: footerTrustLinks }
] as const;

export { GITHUB_URL };
