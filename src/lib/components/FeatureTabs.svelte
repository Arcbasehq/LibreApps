<script lang="ts">
	import Icon from './Icon.svelte';
	import ProductMock from './ProductMock.svelte';
	import Button from './Button.svelte';
	import { LIBRESEARCH_URL } from '$lib/config';

	type TabId = 'search' | 'eco' | 'privacy' | 'extension';

	interface Tab {
		id: TabId;
		label: string;
		icon: string;
		title: string;
		points: string[];
		cta: string;
		href: string;
		mock: 'search' | 'eco' | 'settings';
	}

	const tabs: Tab[] = [
		{
			id: 'search',
			label: 'Private search',
			icon: 'search',
			title: 'You search. We answer. We delete the query.',
			points: [
				'We process your search and discard it. No log file, no IP tie-in.',
				'Results appear without ads above them.',
				'We run our own index, not a reskin of ad-funded search.'
			],
			cta: 'Open LibreSearch',
			href: LIBRESEARCH_URL,
			mock: 'search'
		},
		{
			id: 'eco',
			label: 'Eco tools',
			icon: 'globe',
			title: 'Turn on eco mode when you want a lighter session.',
			points: [
				'Eco mode cuts visual weight and motion.',
				'You can see estimated impact from your searches.',
				'Settings stay in your browser. Libre does not store them.'
			],
			cta: 'Open eco settings',
			href: `${LIBRESEARCH_URL}/settings`,
			mock: 'eco'
		},
		{
			id: 'privacy',
			label: 'Privacy controls',
			icon: 'shield',
			title: 'Your controls live on your device.',
			points: [
				'Safe search, themes, and burn session run client-side.',
				'You do not need an account.',
				'Burn clears the session in one click.'
			],
			cta: 'Open settings',
			href: `${LIBRESEARCH_URL}/settings`,
			mock: 'settings'
		},
		{
			id: 'extension',
			label: 'Extension',
			icon: 'code',
			title: 'Set LibreSearch as your default search engine.',
			points: [
				'The extension swaps your browser default to LibreSearch.',
				'Chrome, Firefox, Edge, and Brave are supported.',
				'The extension does not give Libre extra data beyond normal search use.'
			],
			cta: 'Install extension',
			href: `${LIBRESEARCH_URL}/extension`,
			mock: 'search'
		}
	];

	let active = $state<TabId>('search');
	const current = $derived(tabs.find((t) => t.id === active) ?? tabs[0]);
</script>

<div class="mt-14">
	<div
		class="neo-card flex gap-1 overflow-x-auto bg-(--app-panel) p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
		role="tablist"
		aria-label="LibreSearch features"
	>
		{#each tabs as tab (tab.id)}
			<button
				type="button"
				role="tab"
				aria-selected={active === tab.id}
				class="flex shrink-0 items-center gap-2 rounded-(--radius-sm) border-[3px] px-4 py-2.5 text-sm font-bold transition-all duration-100 {active ===
				tab.id
					? 'border-(--app-border) bg-(--app-accent) text-(--app-accent-fg) shadow-[var(--app-shadow-sm)]'
					: 'border-transparent text-(--app-muted) hover:border-(--app-border) hover:bg-(--app-card) hover:text-(--app-text)'}"
				onclick={() => (active = tab.id)}
			>
				<Icon name={tab.icon} class="text-sm leading-none" />
				{tab.label}
			</button>
		{/each}
	</div>

	{#key active}
		<div
			class="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
			role="tabpanel"
			aria-live="polite"
		>
			<div class="animate-fade-in">
				<h3 class="text-2xl font-bold tracking-tight text-balance sm:text-3xl">{current.title}</h3>
				<ul class="mt-6 space-y-3.5">
					{#each current.points as point (point)}
						<li class="flex items-start gap-3 text-[15px] leading-7 text-(--app-secondary)">
							<span
								class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border-[2px] border-(--app-border) bg-(--app-accent-bright) text-(--app-text)"
							>
								<Icon name="check" class="text-xs leading-none" />
							</span>
							{point}
						</li>
					{/each}
				</ul>
				<div class="mt-8">
					<Button href={current.href} external>
						{current.cta}
						<Icon name="arrowRight" class="text-sm leading-none" />
					</Button>
				</div>
			</div>

			<div class="relative lg:pl-4">
				<div class="animate-slide-up relative">
					<ProductMock variant={current.mock} />
				</div>
			</div>
		</div>
	{/key}
</div>
