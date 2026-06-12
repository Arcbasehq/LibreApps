<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		children: Snippet;
	}
	let { title, children }: Props = $props();
</script>

<section class="neo-card content-section overflow-hidden p-6 sm:p-8">
	{#if title}
		<h2 class="text-xl tracking-tight text-(--app-secondary) sm:text-2xl">{title}</h2>
	{/if}
	<div class="content-section__body {title ? 'mt-4' : ''}">
		{@render children()}
	</div>
</section>
