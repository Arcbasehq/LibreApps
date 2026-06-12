<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		variant?: 'primary' | 'secondary' | 'ghost';
		external?: boolean;
		type?: 'button' | 'submit';
		disabled?: boolean;
		class?: string;
		children: Snippet;
	}
	let {
		href,
		variant = 'primary',
		external = false,
		type = 'button',
		disabled = false,
		class: className = '',
		children
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 rounded-(--radius-md) border-[3px] border-(--app-border) px-6 py-2.5 text-sm font-bold transition-all duration-100 shadow-[var(--app-shadow-sm)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px]';
	const variants = {
		primary: 'bg-(--app-accent) text-(--app-accent-fg) hover:bg-(--app-accent-deep)',
		secondary:
			'bg-(--app-card) text-(--app-button) hover:bg-(--app-panel) hover:text-(--app-button-hover)',
		ghost:
			'border-transparent bg-transparent text-(--app-muted) shadow-none hover:translate-x-0 hover:translate-y-0 hover:bg-(--app-panel) hover:text-(--app-text) hover:shadow-none active:translate-x-0 active:translate-y-0'
	};
	const classes = $derived(`${base} ${variants[variant]} ${className}`);
</script>

{#if href}
	<a
		{href}
		class={classes}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		{@render children()}
	</a>
{:else}
	<button {type} {disabled} class="{classes} disabled:cursor-not-allowed disabled:opacity-50">
		{@render children()}
	</button>
{/if}
