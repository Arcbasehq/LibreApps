<script lang="ts">
	import { formatLongDate } from '$lib/config';
	import type { ChangelogEntry } from '$lib/content/changelog';

	interface Props {
		entries: ChangelogEntry[];
	}
	let { entries }: Props = $props();
</script>

<div class="content-stack">
	{#each entries as entry (entry.date + entry.title)}
		<article class="neo-card p-6 sm:p-8">
			<p class="neo-tag !px-2 !py-1 !text-[10px]">{formatLongDate(entry.date)}</p>
			<h2 class="mt-4 text-xl tracking-tight text-(--app-secondary) sm:text-2xl">{entry.title}</h2>
			<p class="mt-3 text-sm leading-7 text-(--app-muted)">{entry.body}</p>
		</article>
	{/each}
</div>
