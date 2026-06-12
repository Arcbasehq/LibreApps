<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Illustration from '$lib/components/Illustration.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { SITE_URL, LIBRESEARCH_URL, GITHUB_URL } from '$lib/config';
	import { defaultBreadcrumbs, innerPageSchemas } from '$lib/seo';

	const aboutDescription =
		'Libre builds privacy-first apps without tracking. Learn why we exist, how we work in the open, and where the Libre app ecosystem is headed.';
	const aboutCanonical = `${SITE_URL}/about`;
	const aboutJsonLd = innerPageSchemas({
		title: 'About',
		description: aboutDescription,
		canonical: aboutCanonical,
		breadcrumbs: defaultBreadcrumbs('About', aboutCanonical)
	});

	const beliefs = [
		{
			title: 'Collect nothing',
			body: 'We design products that work without your personal data. If a feature needs a profile, we change the feature.',
			illustration: 'icon1' as const,
			illustrationAlt: 'Private search without surveillance'
		},
		{
			title: 'Build in the open',
			body: 'Libre ships under AGPL-3.0. You can read how our products handle requests and verify our claims in code.',
			illustration: 'icon2' as const,
			illustrationAlt: 'Open source software you can verify'
		},
		{
			title: 'Stay accessible',
			body: 'Our products are free and work without an account. Privacy should not cost money or require a login.',
			illustration: 'icon3' as const,
			illustrationAlt: 'Privacy tools without identity profiles'
		}
	];
</script>

<SeoHead
	title="About"
	description={aboutDescription}
	canonical={aboutCanonical}
	jsonLd={aboutJsonLd}
/>

<main>
	<section class="relative overflow-hidden">
		<Container size="narrow" class="relative pt-20 pb-16 sm:pt-28">
			<p class="neo-tag w-fit">About Libre</p>
			<h1 class="mt-5 text-4xl font-bold tracking-[-0.02em] text-balance sm:text-5xl">
				We build software that does not watch you.
			</h1>
			<p class="mt-6 text-lg leading-8 text-(--app-secondary)">
				Big tech logs what you do, builds profiles, and sells your attention. Libre is the company
				building an alternative: privacy-first software you can actually use — starting with search,
				with more products to come.
			</p>
		</Container>
	</section>

	<section class="border-t-[3px] border-(--app-border)">
		<Container size="narrow" class="py-16 sm:py-20">
			<div class="space-y-14">
				<div class="grid gap-4 sm:grid-cols-[160px_1fr] sm:gap-10">
					<p
						class="font-(family-name:--font-mono) text-xs tracking-[0.18em] text-(--app-muted) uppercase"
					>
						Where we started
					</p>
					<div class="text-[15px] leading-8 text-(--app-muted)">
						<p>
							Like Proton started with email, we started with search. Our first product,
							<a
								href={LIBRESEARCH_URL}
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-(--radius-sm) font-medium text-(--app-accent) hover:underline"
								>LibreSearch</a
							>, returns web results without logging queries, building profiles, or running ads. It is
							open source and works without an account.
						</p>
					</div>
				</div>

				<div class="grid gap-4 sm:grid-cols-[160px_1fr] sm:gap-10">
					<p
						class="font-(family-name:--font-mono) text-xs tracking-[0.18em] text-(--app-muted) uppercase"
					>
						How we work
					</p>
					<div class="text-[15px] leading-8 text-(--app-muted)">
						<p>
							We ship in public. Repos, infrastructure notes, and privacy models are documented so
							you can see what Libre stores — almost nothing. When we say we do not track you, you
							can grep the codebase and check.
						</p>
					</div>
				</div>

				<div class="grid gap-4 sm:grid-cols-[160px_1fr] sm:gap-10">
					<p
						class="font-(family-name:--font-mono) text-xs tracking-[0.18em] text-(--app-muted) uppercase"
					>
						Where we are going
					</p>
					<div class="text-[15px] leading-8 text-(--app-muted)">
						<p>
							Search is where most people touch the web, so that is where Libre began. Every product
							we ship next will follow the same rules: collect nothing, ship open code, stay free to
							use.
						</p>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section class="border-t-[3px] border-(--app-border)">
		<Container class="py-20 sm:py-24">
			<p class="neo-tag w-fit">What we believe</p>
			<div class="neo-card mt-10 divide-y-[3px] divide-(--app-border)">
				{#each beliefs as belief (belief.title)}
					<div
						class="grid items-start gap-6 px-6 py-10 sm:grid-cols-[minmax(0,180px)_1fr] lg:gap-10"
					>
						<div
							class="mx-auto w-full max-w-[180px] overflow-hidden rounded-(--radius-md) border-[3px] border-(--app-border) bg-(--app-accent-bright) p-3 shadow-[var(--app-shadow-sm)] sm:mx-0"
						>
							<div class="aspect-square w-full">
								<Illustration name={belief.illustration} alt={belief.illustrationAlt} />
							</div>
						</div>
						<div class="space-y-3">
							<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">{belief.title}</h2>
							<p class="max-w-prose leading-8 text-(--app-muted)">{belief.body}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-6 flex flex-wrap gap-3">
				<Button href={LIBRESEARCH_URL} external>
					Try LibreSearch
					<Icon name="arrowRight" class="text-sm leading-none" />
				</Button>
				<Button href={GITHUB_URL} external variant="secondary">Read the source</Button>
				<Button href="/contact" variant="secondary">Contact us</Button>
			</div>
		</Container>
	</section>

	<CtaBanner title="Try LibreSearch — our first product." primaryLabel="Open LibreSearch" />
</main>
