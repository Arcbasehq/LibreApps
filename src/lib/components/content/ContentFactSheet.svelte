<script lang="ts">
	export type FactRow = { label: string; value: string };

	interface Props {
		rows: FactRow[];
	}
	let { rows }: Props = $props();
</script>

<div
	class="overflow-hidden rounded-(--radius-md) border-[3px] border-(--app-border) shadow-[var(--app-shadow-sm)]"
>
	{#each rows as row, i (row.label)}
		<div
			class="grid sm:grid-cols-[minmax(0,11rem)_1fr] {i > 0
				? 'border-t-[3px] border-(--app-border)'
				: ''}"
		>
			<div
				class="border-b-[3px] border-(--app-border) bg-(--app-panel) px-5 py-3.5 text-sm font-semibold text-(--app-secondary) sm:border-r-[3px] sm:border-b-0"
			>
				{row.label}
			</div>
			<div class="px-5 py-3.5 text-sm leading-7 text-(--app-muted)">{row.value}</div>
		</div>
	{/each}
</div>
