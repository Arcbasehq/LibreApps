<script lang="ts">
	interface Props {
		class?: string;
		inverse?: boolean;
	}
	let { class: className = '', inverse = false }: Props = $props();
</script>

<span class="inline-flex items-baseline gap-0.5 font-bold tracking-tight {className}">
	<span class={inverse ? 'text-white' : 'text-(--app-text)'}>Libre</span><span
		class={inverse ? 'text-(--app-accent-bright)' : 'text-(--app-accent)'}>.</span
	>
</span>
