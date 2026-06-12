<script lang="ts">
	import type { Snippet } from 'svelte';
	import Container from './Container.svelte';

	interface Props {
		id?: string;
		eyebrow?: string;
		title?: string;
		lead?: string;
		size?: 'narrow' | 'default' | 'wide';
		bordered?: boolean;
		class?: string;
		children: Snippet;
	}
	let {
		id,
		eyebrow,
		title,
		lead,
		size = 'default',
		bordered = true,
		class: className = '',
		children
	}: Props = $props();
</script>

<section
	{id}
	class="{bordered ? 'border-t-[3px] border-(--app-border)' : ''} py-20 sm:py-28 {className}"
>
	<Container {size}>
		{#if eyebrow || title}
			<header class="max-w-2xl">
				{#if eyebrow}
					<p class="neo-tag text-(--app-text)">{eyebrow}</p>
				{/if}
				{#if title}
					<h2 class="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
				{/if}
				{#if lead}
					<p class="mt-4 text-lg leading-8 text-(--app-muted)">{lead}</p>
				{/if}
			</header>
		{/if}
		{@render children()}
	</Container>
</section>
