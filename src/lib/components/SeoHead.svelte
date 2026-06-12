<script lang="ts">
	import JsonLd from './JsonLd.svelte';
	import { SITE_NAME, SITE_URL } from '$lib/config';
	import { OG_IMAGE, OG_IMAGE_ALT, TWITTER_HANDLE, pageTitle } from '$lib/seo';

	interface Props {
		title: string;
		description: string;
		canonical: string;
		ogType?: 'website' | 'article';
		noindex?: boolean;
		jsonLd?: Record<string, unknown>;
	}

	let {
		title,
		description,
		canonical,
		ogType = 'website',
		noindex = false,
		jsonLd
	}: Props = $props();

	const fullTitle = pageTitle(title);
	const robots = noindex ? 'noindex, nofollow' : 'index, follow';
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={robots} />
	<link rel="canonical" href={canonical} />

	<meta property="og:site_name" content="{SITE_NAME} apps" />
	<meta property="og:locale" content="en_CA" />
	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content={OG_IMAGE_ALT} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={TWITTER_HANDLE} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={OG_IMAGE} />
	<meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

	<link rel="alternate" hreflang="en" href={canonical} />
	<link rel="alternate" hreflang="x-default" href={canonical} />
</svelte:head>

{#if jsonLd}
	<JsonLd data={jsonLd} />
{/if}
