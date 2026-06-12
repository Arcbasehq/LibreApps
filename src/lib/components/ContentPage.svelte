<script lang="ts">
	import Container from './Container.svelte';
	import SeoHead from './SeoHead.svelte';
	import { formatLongDate } from '$lib/config';
	import { defaultBreadcrumbs, innerPageSchemas } from '$lib/seo';
	import type { Snippet } from 'svelte';

	interface Props {
		eyebrow: string;
		title: string;
		description?: string;
		canonical: string;
		metaDescription: string;
		updated?: string;
		noindex?: boolean;
		children: Snippet;
	}

	let {
		eyebrow,
		title,
		description,
		canonical,
		metaDescription,
		updated,
		noindex = false,
		children
	}: Props = $props();

	const jsonLd = innerPageSchemas({
		title,
		description: metaDescription,
		canonical,
		breadcrumbs: defaultBreadcrumbs(title, canonical),
		lastmod: updated
	});
</script>

<SeoHead {title} description={metaDescription} {canonical} {jsonLd} {noindex} />

<main>
	<section class="border-b-[3px] border-(--app-border) bg-(--app-accent-bright)">
		<Container size="narrow" class="relative py-16 sm:py-20">
			<p class="neo-tag w-fit">{eyebrow}</p>
			<h1 class="mt-5 max-w-2xl text-4xl tracking-[-0.02em] text-balance sm:text-5xl">{title}</h1>
			{#if description}
				<p class="mt-5 max-w-2xl text-base leading-7 text-(--app-secondary) sm:text-lg">{description}</p>
			{/if}
			{#if updated}
				<p
					class="mt-5 inline-block rounded-(--radius-sm) border-2 border-(--app-border) bg-(--app-card) px-3 py-1 font-(family-name:--font-mono) text-[10px] tracking-wider text-(--app-muted) uppercase shadow-[var(--app-shadow-sm)]"
				>
					Last updated · {formatLongDate(updated)}
				</p>
			{/if}
		</Container>
	</section>

	<section class="bg-(--app-background)">
		<Container size="narrow" class="py-12 sm:py-16">
			<div class="content-stack">
				{@render children()}
			</div>
		</Container>
	</section>
</main>
