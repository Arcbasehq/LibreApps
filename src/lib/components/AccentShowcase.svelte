<script lang="ts">
	import ProductMock from './ProductMock.svelte';
	import Button from './Button.svelte';
	import Container from './Container.svelte';
	import Icon from './Icon.svelte';
	import { GITHUB_URL, LIBRESEARCH_URL } from '$lib/config';

	type Mode = 'privacy' | 'transparency' | 'eco';

	interface ModeConfig {
		id: Mode;
		label: string;
		headline: string;
		sub: string;
		mock: 'search' | 'eco' | 'settings';
		features: { icon: string; title: string; body: string }[];
	}

	const modes: ModeConfig[] = [
		{
			id: 'privacy',
			label: 'Privacy',
			headline: 'We do not keep your searches.',
			sub: 'On LibreSearch, we answer the query and move on. No logs, no profile, no identifier on our side.',
			mock: 'search',
			features: [
				{
					icon: 'eyeOff',
					title: 'No query retention',
					body: 'We answer the search and discard the request. Nothing hits disk.'
				},
				{
					icon: 'lock',
					title: 'No accounts',
					body: 'You use Libre products without signing up. Settings stay in your browser.'
				},
				{
					icon: 'shield',
					title: 'No ad stack',
					body: 'No ads means no pixels, auctions, or targeting scripts.'
				}
			]
		},
		{
			id: 'transparency',
			label: 'Transparency',
			headline: 'Read the code and the transparency record.',
			sub: 'The repo is AGPL-3.0. The transparency page lists what runs in production and what we retain.',
			mock: 'settings',
			features: [
				{
					icon: 'code',
					title: 'Open source',
					body: 'Clone it, audit it, or send a pull request.'
				},
				{
					icon: 'server',
					title: 'Documented infrastructure',
					body: 'We publish what services handle traffic and what data they see.'
				},
				{
					icon: 'globe',
					title: 'Transparency record',
					body: 'Plain list of legal requests and retained data.'
				}
			]
		},
		{
			id: 'eco',
			label: 'Eco',
			headline: 'Optional eco tools if you want them.',
			sub: 'Eco mode trims visuals and shows estimated search impact. Privacy rules stay the same.',
			mock: 'eco',
			features: [
				{
					icon: 'globe',
					title: 'Eco mode',
					body: 'Lighter UI and less motion per session.'
				},
				{
					icon: 'zap',
					title: 'Impact tracking',
					body: 'See estimated footprint from your searches over time.'
				},
				{
					icon: 'users',
					title: 'Community funded',
					body: 'Donations and contributors keep Libre running. Your data is not for sale.'
				}
			]
		}
	];

	let active = $state<Mode>('privacy');
	const current = $derived(modes.find((m) => m.id === active) ?? modes[0]);
</script>

<section class="px-6 py-20 sm:py-28">
	<Container size="wide">
		<div class="neo-panel overflow-hidden bg-(--app-accent) px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
					How Libre builds every product.
				</h2>
				<p class="mt-4 text-base leading-7 text-(--app-secondary) sm:text-lg">
					Privacy, transparency, and optional eco tools on LibreSearch today. The same rules apply to
					whatever we ship next.
				</p>

				<div
					class="mx-auto mt-8 inline-flex border-[3px] border-(--app-border) bg-(--app-card) p-1 shadow-[var(--app-shadow-sm)]"
					role="tablist"
					aria-label="Libre product principles"
				>
					{#each modes as mode (mode.id)}
						<button
							type="button"
							role="tab"
							aria-selected={active === mode.id}
							class="rounded-(--radius-sm) border-[3px] px-5 py-2 text-sm font-bold transition-all duration-100 {active ===
							mode.id
								? 'border-(--app-border) bg-(--app-accent-bright) text-(--app-text) shadow-[var(--app-shadow-sm)]'
								: 'border-transparent text-(--app-muted) hover:bg-(--app-panel) hover:text-(--app-text)'}"
							onclick={() => (active = mode.id)}
						>
							{mode.label}
						</button>
					{/each}
				</div>
			</div>

			{#key active}
				<div class="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
					<div class="animate-fade-in text-center lg:text-left">
						<h3 class="text-xl font-bold tracking-tight sm:text-2xl">
							{current.headline}
						</h3>
						<p class="mt-3 text-[15px] leading-7 text-(--app-secondary)">{current.sub}</p>
						<div class="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
							<Button href={LIBRESEARCH_URL} external class="!bg-(--app-card)">
								Try LibreSearch
							</Button>
							<Button href={GITHUB_URL} external variant="secondary" class="!bg-(--app-panel)">
								Read the source
							</Button>
						</div>
					</div>

					<div class="animate-slide-up relative mx-auto w-full max-w-md lg:max-w-none">
						<ProductMock variant={current.mock} />
					</div>
				</div>

				<div class="mt-12 grid gap-6 border-t-[3px] border-(--app-border) pt-10 sm:grid-cols-3">
					{#each current.features as f (f.title)}
						<div class="text-center sm:text-left">
							<div
								class="neo-card mx-auto flex h-10 w-10 items-center justify-center bg-(--app-card) sm:mx-0"
							>
								<Icon name={f.icon} class="text-lg leading-none" />
							</div>
							<h4 class="mt-3 font-bold">{f.title}</h4>
							<p class="mt-1.5 text-sm leading-6 text-(--app-secondary)">{f.body}</p>
						</div>
					{/each}
				</div>
			{/key}
		</div>
	</Container>
</section>
