<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	let { children }: Props = $props();
</script>

<div class="neo-card flex flex-wrap gap-3 p-5 sm:p-6">
	{@render children()}
</div>
