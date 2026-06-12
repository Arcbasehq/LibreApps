<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		date: string;
		title: string;
		children: Snippet;
	}
	let { date, title, children }: Props = $props();
</script>

<div class="neo-card px-6 py-12 text-center sm:px-10 sm:py-16">
	<p class="neo-tag mx-auto w-fit !text-[10px]">{date}</p>
	<h2 class="mt-5 text-2xl tracking-tight text-(--app-secondary) sm:text-3xl">{title}</h2>
	<div class="content-section__body mx-auto mt-5 max-w-lg text-sm">
		{@render children()}
	</div>
</div>
