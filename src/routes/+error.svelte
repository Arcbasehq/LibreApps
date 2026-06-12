<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { SITE_URL } from '$lib/config';

	const status = $derived(page.status);
	const is404 = $derived(status === 404);
	const title = $derived(is404 ? 'Page not found' : 'Something went wrong');
	const description = $derived(
		is404
			? 'That page does not exist on libreapps.xyz.'
			: 'An unexpected error occurred. Try again or head back home.'
	);
</script>

<SeoHead
	{title}
	{description}
	canonical="{SITE_URL}{page.url.pathname}"
	noindex
/>

<main>
	<Container class="py-24 sm:py-32">
		<p class="neo-tag w-fit">{status}</p>
		<h1 class="mt-5 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">{title}</h1>
		<p class="mt-6 max-w-lg text-lg leading-8 text-(--app-muted)">
			{description}
		</p>
		<div class="mt-10 flex flex-wrap gap-3">
			<Button href="/">Back to home</Button>
			<Button href="/contact" variant="secondary">Contact us</Button>
		</div>
	</Container>
</main>
