<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Section from '$lib/components/Section.svelte';
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import FeatureTabs from '$lib/components/FeatureTabs.svelte';
	import AccentShowcase from '$lib/components/AccentShowcase.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import ProductMock from '$lib/components/ProductMock.svelte';
	import Illustration from '$lib/components/Illustration.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { SITE_DESCRIPTION, SITE_URL, LIBREAUTH_GITHUB_URL, LIBREAUTH_URL, LIBRESEARCH_URL, GITHUB_URL } from '$lib/config';
	import { homePageSchemas } from '$lib/seo';

	const facts = [
		{
			value: '0',
			unit: 'query logs',
			body: 'On LibreSearch, searches are processed and discarded. Nothing is written to disk or tied to you.',
			link: '/security',
			linkLabel: 'How Libre handles data',
			illustration: 'icon1' as const,
			illustrationAlt: 'Private search without surveillance'
		},
		{
			value: 'AGPL',
			unit: '3.0 license',
			body: 'Libre ships in the open. Audit the code, run your own instance, or contribute back.',
			link: GITHUB_URL,
			linkLabel: 'View on GitHub',
			external: true,
			illustration: 'icon2' as const,
			illustrationAlt: 'Open source software you can verify'
		},
		{
			value: 'No',
			unit: 'account needed',
			body: 'Libre products work without sign-up. Settings live in your browser, not on our servers.',
			link: `${LIBRESEARCH_URL}/settings`,
			linkLabel: 'LibreSearch settings',
			external: true,
			illustration: 'icon3' as const,
			illustrationAlt: 'Privacy tools without identity profiles'
		}
	];

	const never = [
		{
			term: 'Query logs',
			detail: 'LibreSearch processes, answers, and discards each search. Nothing hits disk.'
		},
		{
			term: 'User profiles',
			detail: 'Libre does not build identity graphs, interest categories, or history.'
		},
		{
			term: 'Ad identifiers',
			detail: 'No ads across Libre products — no pixels, auctions, or targeting scripts.'
		},
		{ term: 'Account data', detail: 'Use what we ship today without signing up.' }
	];

	const comparison = [
		{ row: 'Search queries', them: 'Logged and tied to your identity', us: 'Never stored' },
		{ row: 'Your profile', them: 'Built from years of behavior', us: 'Does not exist' },
		{ row: 'Results page', them: 'Ads ranked above answers', us: 'Results only' },
		{ row: 'The code', them: 'Closed and unverifiable', us: 'Open source, AGPL-3.0' },
		{ row: 'Business model', them: 'Your attention, sold', us: 'No ads, no data sales' }
	];

	const faqs = [
		{
			q: 'What is Libre?',
			a: 'Libre is a privacy-first software company — similar to how Proton builds Mail, VPN, and other tools under one roof. LibreSearch is our private search engine; LibreAuth is our open-source web authenticator. More products are coming.'
		},
		{
			q: 'What is LibreSearch?',
			a: 'Our private search engine. You get web results without query logs, profiles, or ads. It runs at libresearch.ca and is free to use without an account.'
		},
		{
			q: 'What is LibreAuth?',
			a: 'Our web authenticator for TOTP codes — scan QR codes, sync entries across devices, and generate codes in your browser. It runs at auth.libreapps.xyz and is open source under AGPL-3.0.'
		},
		{
			q: 'How is Libre different from private browsing?',
			a: 'Private browsing only hides activity on your device. The search engine on the other end can still log and profile every query. LibreSearch removes that server-side: queries are never stored.'
		},
		{
			q: 'If Libre has no ads, how does it survive?',
			a: 'Libre is community-supported. There is no ad inventory and no user data to sell. You can support the company through donations while we build the next products.'
		},
		{
			q: 'Can I verify any of this?',
			a: 'Yes. LibreSearch is open source under AGPL-3.0, with a public transparency record. Read the repository and compare it to what we publish here.'
		}
	];

	const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Brave'];

	const seoFaqs = faqs.map((faq) => ({ question: faq.q, answer: faq.a }));
	const homeJsonLd = homePageSchemas(seoFaqs);
</script>

<SeoHead
	title="Privacy-first apps"
	description={SITE_DESCRIPTION}
	canonical={SITE_URL}
	jsonLd={homeJsonLd}
/>

<main>
	<!-- ============ Hero — split: copy left, preview right ============ -->
	<section class="relative overflow-hidden pt-7 pb-10 sm:pt-11 sm:pb-14">
		<Container size="wide" class="relative">
			<div class="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
				<div class="max-w-xl text-left">
					<h1
						class="mt-5 text-[1.75rem] leading-[1.06] tracking-tight text-balance sm:text-4xl lg:text-[3.25rem]"
					>
						Software that does not watch you.
					</h1>
					<p class="mt-5 text-base leading-7 text-(--app-muted) sm:text-lg">
						Libre builds privacy tools for everyday use. LibreSearch is private search with no query
						logs. LibreAuth is an open-source authenticator. Same rules across every product.
					</p>
					<div class="mt-7 flex flex-wrap items-center gap-3">
						<Button href="/products" class="!px-6 !py-2.5">Browse products</Button>
						<Button href="/about" variant="secondary" class="!px-6 !py-2.5">About Libre</Button>
					</div>
				</div>

				<div class="relative w-full lg:max-w-none">
					<p
						class="mb-3 font-(family-name:--font-mono) text-xs tracking-wider text-(--app-muted) uppercase lg:text-right"
					>
						First product · LibreSearch
					</p>
					<div class="animate-slide-up relative">
						<ProductMock variant="search" />
					</div>
				</div>
			</div>
		</Container>
	</section>

	<!-- ============ Tabbed product showcase ============ -->
	<Section
		id="libresearch"
		eyebrow="Products"
		title="LibreSearch — search without a log file."
		lead="Our first product. Results, client-side settings, and optional eco tools — with no queries written to disk."
		size="wide"
		bordered={false}
		class="pt-8 pb-20 sm:pb-28"
	>
		<FeatureTabs />
	</Section>

	<!-- ============ LibreAuth ============ -->
	<Section
		id="libreauth"
		eyebrow="Products"
		title="LibreAuth — TOTP without the bloat."
		lead="Open-source web authenticator. Scan QR codes, sync your vault, and generate codes in the browser — no ads, no tracking."
		size="wide"
		bordered={false}
		class="border-t-[3px] border-(--app-border) pt-8 pb-20 sm:pb-28"
	>
		<div class="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div>
				<h3 class="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
					Your codes, your vault, your browser.
				</h3>
				<ul class="mt-6 space-y-3.5">
					{#each ['Add accounts by scanning QR codes or pasting secrets.', 'Optional sync across devices with a LibreAuth account.', 'Codes generate client-side — we never see live TOTP output.', 'AGPL-3.0 open source. Run it yourself if you want.'] as point (point)}
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
				<div class="mt-8 flex flex-wrap gap-3">
					<Button href={LIBREAUTH_URL} external>
						Open LibreAuth
						<Icon name="arrowRight" class="text-sm leading-none" />
					</Button>
					<Button href={LIBREAUTH_GITHUB_URL} external variant="secondary">
						View source
					</Button>
				</div>
			</div>
			<div class="relative lg:pl-4">
				<div class="animate-slide-up relative">
					<ProductMock variant="auth" />
				</div>
			</div>
		</div>
	</Section>

	<!-- ============ Verifiable facts — Tailscale stats strip pattern ============ -->
	<section class="border-y-[3px] border-(--app-border) bg-(--app-panel)">
		<Container size="wide" class="py-16 sm:py-20">
			<p class="text-center text-sm font-bold text-(--app-secondary)">
				What Libre ships today — under the same rules every future product will follow.
			</p>
			<div class="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
				{#each facts as fact (fact.unit)}
					<article class="neo-card flex h-full flex-col p-7">
						<div
							class="mb-6 overflow-hidden rounded-(--radius-md) border-[3px] border-(--app-border) bg-(--app-accent-bright) p-3 shadow-[var(--app-shadow-sm)]"
						>
							<div class="aspect-[5/4] w-full">
								<Illustration name={fact.illustration} alt={fact.illustrationAlt} />
							</div>
						</div>
						<p class="text-4xl font-bold tracking-tight text-(--app-accent) sm:text-5xl">
							{fact.value}
						</p>
						<p
							class="mt-1 font-(family-name:--font-mono) text-xs tracking-wider text-(--app-muted) uppercase"
						>
							{fact.unit}
						</p>
						<p class="mt-4 text-sm leading-6 text-(--app-muted)">{fact.body}</p>
						<a
							href={fact.link}
							target={fact.external ? '_blank' : undefined}
							rel={fact.external ? 'noopener noreferrer' : undefined}
							class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-(--app-accent) transition hover:underline"
						>
							{fact.linkLabel}
							<Icon name="arrowRight" class="text-xs leading-none" />
						</a>
					</article>
				{/each}
			</div>
		</Container>
	</section>

	<!-- ============ Large accent showcase with toggle ============ -->
	<AccentShowcase />

	<!-- ============ What we never collect ============ -->
	<Section
		eyebrow="Company policy"
		title="What Libre keeps about you."
		lead="One standard across every product. LibreSearch is live now; this list stays short as we grow."
	>
		<dl class="neo-card mt-12 divide-y-[3px] divide-(--app-border)">
			{#each never as item (item.term)}
				<div class="grid gap-2 px-6 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
					<dt class="flex items-baseline gap-3 font-semibold">
						<span
							class="font-(family-name:--font-mono) text-sm text-(--app-accent)"
							aria-hidden="true">✕</span
						>
						{item.term}
					</dt>
					<dd class="text-(--app-muted)">{item.detail}</dd>
				</div>
			{/each}
		</dl>
	</Section>

	<!-- ============ Comparison table ============ -->
	<Section
		eyebrow="LibreSearch"
		title="How our search engine compares."
		lead="LibreSearch is one product from Libre. Here is how it stacks up against ad-funded search."
		size="wide"
	>
		<div class="neo-card mt-10 overflow-hidden">
			<table class="w-full text-sm">
				<caption class="sr-only">How LibreSearch compares to surveillance-funded search</caption>
				<thead>
					<tr
						class="border-b-[3px] border-(--app-border) bg-(--app-panel) font-(family-name:--font-mono) text-[11px] tracking-wider text-(--app-muted) uppercase"
					>
						<th class="px-6 py-4 text-left font-medium"></th>
						<th class="px-6 py-4 text-left font-medium">Ad-funded search</th>
						<th class="px-6 py-4 text-left font-medium text-(--app-accent)">LibreSearch</th>
					</tr>
				</thead>
				<tbody class="divide-y-[3px] divide-(--app-border)">
					{#each comparison as c (c.row)}
						<tr class="transition hover:bg-(--app-panel)">
							<th class="px-6 py-4 text-left font-medium text-(--app-secondary)">{c.row}</th>
							<td class="px-6 py-4 text-(--app-muted)">{c.them}</td>
							<td class="px-6 py-4 font-medium text-(--app-text)">{c.us}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Section>

	<!-- ============ Works everywhere ============ -->
	<section class="border-t-[3px] border-(--app-border) px-6 py-16 sm:py-20">
		<Container class="text-center">
			<p class="neo-tag mx-auto w-fit">Works everywhere</p>
			<h2 class="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
				LibreSearch in your browser
			</h2>
			<p class="mx-auto mt-3 max-w-lg text-(--app-muted)">
				Open libresearch.ca or install the extension. Same privacy rules either way.
			</p>
			<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
				{#each browsers as browser (browser)}
					<span
						class="neo-card bg-(--app-card) px-5 py-2 text-sm font-bold text-(--app-secondary) shadow-[var(--app-shadow-sm)]"
						>{browser}</span
					>
				{/each}
			</div>
			<div class="mt-8">
				<Button href="{LIBRESEARCH_URL}/extension" external variant="secondary">
					Get the browser extension
					<Icon name="arrowRight" class="text-sm leading-none" />
				</Button>
			</div>
		</Container>
	</section>

	<!-- ============ FAQ ============ -->
	<Section eyebrow="FAQ" title="Common questions" size="narrow">
		<div class="neo-card mt-10 divide-y-[3px] divide-(--app-border)">
			{#each faqs as faq (faq.q)}
				<details class="group px-6 py-5">
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-4 rounded-(--radius-sm) text-[15px] font-medium text-(--app-secondary) transition hover:text-(--app-text) [&::-webkit-details-marker]:hidden"
					>
						{faq.q}
						<span
							class="shrink-0 text-(--app-muted) transition-transform duration-200 group-open:rotate-45"
							aria-hidden="true"
						>
							<Icon name="plus" class="text-sm leading-none" />
						</span>
					</summary>
					<p class="mt-3 max-w-prose text-sm leading-7 text-(--app-muted)">{faq.a}</p>
				</details>
			{/each}
		</div>
	</Section>

	<CtaBanner />
</main>
