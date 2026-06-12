<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		size?: 'narrow' | 'default' | 'wide';
		class?: string;
		children: Snippet;
	}
	let { size = 'default', class: className = '', children }: Props = $props();

	const widths = {
		narrow: 'max-w-3xl',
		default: 'max-w-[1100px]',
		wide: 'max-w-[1200px]'
	};
</script>

<div class="mx-auto w-full px-6 {widths[size]} {className}">
	{@render children()}
</div>
