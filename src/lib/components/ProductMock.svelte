<script lang="ts">
	import Icon from './Icon.svelte';

	interface Props {
		variant?: 'search' | 'eco' | 'settings';
		class?: string;
	}
	let { variant = 'search', class: className = '' }: Props = $props();

	const queries = {
		search: 'how to disappear from data brokers',
		eco: 'renewable energy news',
		settings: ''
	};
</script>

<div
	class="product-mock relative overflow-hidden rounded-(--radius-md) border-[3px] border-(--app-border) bg-(--mock-card) shadow-[var(--app-shadow-lg)] {className}"
	aria-hidden="true"
>
	<div class="flex items-center gap-2 border-b border-(--mock-border) bg-(--mock-surface) px-4 py-3">
		<span class="h-2.5 w-2.5 rounded-full bg-white/20"></span>
		<span class="h-2.5 w-2.5 rounded-full bg-white/20"></span>
		<span class="h-2.5 w-2.5 rounded-full bg-white/20"></span>
		<span
			class="ml-3 flex-1 rounded-full bg-(--mock-bg) px-3 py-1 font-(family-name:--font-mono) text-[11px] text-(--mock-muted)"
			>libresearch.ca</span
		>
	</div>

	{#if variant === 'search'}
		<div class="px-8 py-10 text-(--mock-text)">
			<p class="text-center text-xl font-bold tracking-tight">
				Libre<span class="text-(--app-accent)">Search</span>
			</p>
			<div
				class="mt-5 flex items-center gap-3 rounded-full border border-(--mock-border) bg-(--mock-surface) px-4 py-2.5"
			>
				<Icon name="search" class="text-sm leading-none shrink-0 text-(--mock-muted)" />
				<span class="truncate text-sm text-(--mock-secondary)">{queries.search}</span>
				<span class="caret h-4 w-px shrink-0 bg-(--app-accent)"></span>
			</div>
			<div class="mt-7 space-y-4">
				{#each [{ w: 78, hl: true }, { w: 64, hl: false }, { w: 71, hl: false }] as row, i (i)}
					<div class="space-y-1.5">
						<div class="h-2 w-20 rounded-full bg-white/10"></div>
						<div
							class="h-2.5 rounded-full {row.hl ? 'bg-(--app-accent)/40' : 'bg-white/15'}"
							style="width: {row.w}%"
						></div>
						<div class="h-2 rounded-full bg-white/8" style="width: {row.w - 14}%"></div>
					</div>
				{/each}
			</div>
		</div>
	{:else if variant === 'eco'}
		<div class="px-8 py-10 text-(--mock-text)">
			<div class="flex items-center justify-between">
				<p class="text-sm font-semibold">Eco mode</p>
				<span
					class="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300"
					>Active</span
				>
			</div>
			<div class="mt-6 grid grid-cols-2 gap-3">
				{#each [{ label: 'Trees planted', val: '12' }, { label: 'CO₂ offset', val: '0.4 kg' }, { label: 'Dark mode', val: 'On' }, { label: 'Backgrounds', val: 'Off' }] as stat (stat.label)}
					<div class="rounded-(--radius-lg) border border-(--mock-border) bg-(--mock-surface) p-3">
						<p class="text-[10px] text-(--mock-muted)">{stat.label}</p>
						<p class="mt-1 text-lg font-semibold tabular-nums">{stat.val}</p>
					</div>
				{/each}
			</div>
			<div class="mt-5 h-2 overflow-hidden rounded-full bg-(--mock-surface)">
				<div class="h-full w-3/5 rounded-full bg-emerald-500/60"></div>
			</div>
			<p class="mt-2 text-[11px] text-(--mock-muted)">Optional eco tools per search</p>
		</div>
	{:else}
		<div class="px-8 py-10 text-(--mock-text)">
			<p class="text-sm font-semibold">Privacy settings</p>
			<div class="mt-5 space-y-3">
				{#each [{ label: 'Safe search', on: true }, { label: 'Open links in new tab', on: false }, { label: 'Reduce motion', on: true }, { label: 'Burn session on close', on: true }] as row (row.label)}
					<div
						class="flex items-center justify-between rounded-(--radius-md) border border-(--mock-border) bg-(--mock-surface) px-3 py-2.5"
					>
						<span class="text-xs text-(--mock-secondary)">{row.label}</span>
						<span
							class="relative h-5 w-9 rounded-full {row.on
								? 'bg-(--app-accent)/50'
								: 'bg-white/15'}"
						>
							<span
								class="absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all {row.on
									? 'left-4'
									: 'left-0.5'}"
							></span>
						</span>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<div
		class="flex items-center justify-between border-t border-(--mock-border) bg-(--mock-surface) px-4 py-2 font-(family-name:--font-mono) text-[10px] text-(--mock-muted)"
	>
		<span class="flex items-center gap-1.5">
			<span class="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
			queries logged: 0
		</span>
		<span>AGPL-3.0 · open source</span>
	</div>
</div>
