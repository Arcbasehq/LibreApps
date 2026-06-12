<script lang="ts">
	interface Props {
		data: Record<string, unknown>;
	}
	let { data }: Props = $props();

	const safeJson = JSON.stringify(data).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static schema.org JSON-LD -->
	{@html `<script type="application/ld+json">${safeJson}</script>`}
</svelte:head>
