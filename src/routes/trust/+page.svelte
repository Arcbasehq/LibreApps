<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ContentPage from '$lib/components/ContentPage.svelte';
	import ContentCallout from '$lib/components/ContentCallout.svelte';
	import ContentSection from '$lib/components/content/ContentSection.svelte';
	import ContentResourceList from '$lib/components/content/ContentResourceList.svelte';
	import ContentActions from '$lib/components/content/ContentActions.svelte';
	import { SITE_URL, SITE_DOMAIN, SITE_LAUNCHED, GITHUB_URL } from '$lib/config';

	const resources = [
		{
			href: '/security',
			label: 'Security',
			detail: 'How data is handled across Libre products — architecture, not marketing.'
		},
		{
			href: '/privacy',
			label: 'Privacy policy',
			detail: 'What this website collects and how LibreSearch is designed regarding personal data.'
		},
		{
			href: '/terms',
			label: 'Terms of service',
			detail: 'Rules for using libreapps.xyz.'
		},
		{
			href: '/transparency',
			label: 'Transparency',
			detail: 'Our retention model and how we will report legal requests — no fake statistics.'
		},
		{
			href: GITHUB_URL,
			label: 'Source code',
			detail: 'LibreSearch on GitHub (AGPL-3.0). Verify claims by reading the implementation.',
			external: true
		},
		{
			href: '/contact',
			label: 'Contact',
			detail: 'Questions, press, and security reports — one form, no tracking funnel.'
		}
	];
</script>

<ContentPage
	eyebrow="Trust"
	title="Trust center"
	description="Everything we publish so you can evaluate Libre without a sales call — policies, security, code, and an honest note about what is still early."
	canonical="{SITE_URL}/trust"
	metaDescription="Libre trust center: security, privacy, transparency, source code, and contact."
	updated={SITE_LAUNCHED}
>
	<ContentCallout
		title="Early company, real documents"
		body="Libre apps hub at {SITE_DOMAIN} launched 11 June 2026. These pages will grow as products and processes do. We would rather under-state than invent history."
	/>

	<ContentSection>
		<p>
			Trust is not a badge on a footer. It is whether the product matches the documentation. Libre
			publishes how we handle data, ships LibreSearch in the open, and keeps this site free of ad
			trackers. Start anywhere below — or clone the repo if you prefer primary sources.
		</p>
	</ContentSection>

	<ContentResourceList items={resources} />

	<ContentSection title="Security reports">
		<p>
			Found a vulnerability? Use <a href="/contact">contact</a> and include “security” in your message.
			We treat good-faith reports seriously. See also the security section on
			<a href="/security">Security</a>.
		</p>
	</ContentSection>

	<ContentActions>
		<Button href="/security">Security overview</Button>
		<Button href="/about" variant="secondary">About Libre</Button>
	</ContentActions>
</ContentPage>
