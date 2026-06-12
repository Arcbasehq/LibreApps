<script lang="ts">
	interface Props {
		name: 'icon1' | 'icon2' | 'icon3';
		alt: string;
		class?: string;
	}
	let { name, alt, class: className = '' }: Props = $props();
</script>

<img
	src="/{name}.svg"
	{alt}
	class="pointer-events-none h-full w-full select-none object-contain {className}"
	loading="lazy"
	decoding="async"
/>
