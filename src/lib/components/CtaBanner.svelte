<script lang="ts">
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import Container from './Container.svelte';
	import { LIBRESEARCH_URL } from '$lib/config';

	interface Props {
		title?: string;
		primaryLabel?: string;
		primaryHref?: string;
		secondaryLabel?: string;
		secondaryHref?: string;
	}
	let {
		title = 'Try LibreSearch — our first product.',
		primaryLabel = 'Open LibreSearch',
		primaryHref = LIBRESEARCH_URL,
		secondaryLabel = 'Contact us',
		secondaryHref = '/contact'
	}: Props = $props();
</script>

<section class="px-6 py-16 sm:py-20">
	<Container>
		<div
			class="neo-panel flex flex-col items-start justify-between gap-8 bg-(--app-accent-bright) px-8 py-10 sm:flex-row sm:items-center sm:px-12 sm:py-12"
		>
			<h2 class="max-w-lg text-2xl font-bold tracking-tight text-balance sm:text-3xl">
				{title}
			</h2>
			<div class="flex shrink-0 flex-wrap gap-3">
				<Button href={primaryHref} external class="!bg-(--app-card)">
					{primaryLabel}
					<Icon name="arrowRight" class="text-sm leading-none" />
				</Button>
				<Button href={secondaryHref} variant="secondary">
					{secondaryLabel}
				</Button>
			</div>
		</div>
	</Container>
</section>
