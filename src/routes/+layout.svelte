<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { SITE_NAME } from '$lib/config';
	import { OG_IMAGE } from '$lib/seo';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href={OG_IMAGE} />
	<meta name="theme-color" content="#facc15" />
	<meta name="application-name" content="{SITE_NAME} apps" />
	<link
		rel="preload"
		href="/fonts/Mariposa%20Sans%20Std%20Medium.otf"
		as="font"
		type="font/otf"
		crossorigin="anonymous"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex min-h-dvh flex-col bg-(--app-background) text-(--app-text)">
	<a
		href="#main-content"
		class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-(--radius-md) focus:border-[3px] focus:border-(--app-border) focus:bg-(--app-accent-bright) focus:px-4 focus:py-2 focus:font-semibold focus:shadow-[var(--app-shadow-md)]"
	>
		Skip to main content
	</a>
	<SiteHeader />
	<div id="main-content" class="flex-1">
		{@render children()}
	</div>
	<SiteFooter />
</div>
