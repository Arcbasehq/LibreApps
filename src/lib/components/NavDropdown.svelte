<script lang="ts">
	import Icon from './Icon.svelte';

	export interface NavLink {
		href: string;
		label: string;
		description?: string;
		external?: boolean;
	}

	interface Props {
		label: string;
		items: NavLink[];
		open: boolean;
		onToggle: () => void;
		onClose: () => void;
	}
	let { label, items, open, onToggle, onClose }: Props = $props();
</script>

<div class="relative" data-nav-menu>
	<button
		type="button"
		class="flex items-center gap-1 rounded-(--radius-md) border-[3px] border-transparent px-3.5 py-1.5 text-sm font-semibold transition-all {open
			? 'border-(--app-border) bg-(--app-panel) text-(--app-text) shadow-[var(--app-shadow-sm)]'
			: 'text-(--app-muted) hover:border-(--app-border) hover:bg-(--app-panel) hover:text-(--app-text)'}"
		aria-expanded={open}
		aria-haspopup="true"
		onclick={onToggle}
	>
		{label}
		<Icon
			name="chevronDown"
			class="text-xs leading-none transition-transform duration-200 {open ? 'rotate-180' : ''}"
		/>
	</button>

	{#if open}
		<div
			class="neo-card animate-fade-in absolute top-[calc(100%+0.5rem)] left-1/2 z-50 w-64 -translate-x-1/2 overflow-hidden py-1.5"
			role="menu"
		>
			{#each items as item (item.href + item.label)}
				<a
					href={item.href}
					target={item.external ? '_blank' : undefined}
					rel={item.external ? 'noopener noreferrer' : undefined}
					role="menuitem"
					class="block border-b-[3px] border-(--app-border) px-4 py-2.5 transition last:border-b-0 hover:bg-(--app-panel)"
					onclick={onClose}
				>
					<span class="flex items-center gap-1.5 text-sm font-medium text-(--app-text)">
						{item.label}
						{#if item.external}
							<Icon name="externalLink" class="text-[10px] leading-none text-(--app-muted)" />
						{/if}
					</span>
					{#if item.description}
						<span class="mt-0.5 block text-xs leading-5 text-(--app-muted)">{item.description}</span
						>
					{/if}
				</a>
			{/each}
		</div>
	{/if}
</div>
