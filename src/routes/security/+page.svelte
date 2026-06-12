<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Illustration from '$lib/components/Illustration.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { SITE_URL, LIBRESEARCH_URL, GITHUB_URL } from '$lib/config';
	import { defaultBreadcrumbs, innerPageSchemas } from '$lib/seo';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	const securityDescription =
		'How Libre apps handle your data: no search query logs, no accounts, AGPL-3.0 open source, and infrastructure that protects without profiling you.';
	const securityCanonical = `${SITE_URL}/security`;
	const securityJsonLd = innerPageSchemas({
		title: 'Security & privacy',
		description: securityDescription,
		canonical: securityCanonical,
		breadcrumbs: defaultBreadcrumbs('Security & privacy', securityCanonical)
	});

	const layers = [
		{
			label: 'Data',
			title: 'We do not store your searches',
			points: [
				'We process the query, return results, and discard the request. No log line, no IP link.',
				'We do not build profiles or keep search history.',
				'Your settings sit in your browser, not on our servers.'
			]
		},
		{
			label: 'Identity',
			title: 'No account required',
			points: [
				'LibreSearch works without email, password, or a cookie that ties visits together.',
				'Libre does not assemble an identity graph because we do not collect the pieces.'
			]
		},
		{
			label: 'Code',
			title: 'Public under AGPL-3.0',
			points: [
				'Anyone can read how requests are handled.',
				'Changes land in the public repo and changelog.'
			]
		},
		{
			label: 'Infrastructure',
			title: 'Protected without profiling you',
			points: [
				'Rate limits and proof-of-work block abuse without tracking who you are.',
				'Every route sends strict security headers.'
			]
		}
	];
</script>

<SeoHead
	title="Security & privacy"
	description={securityDescription}
	canonical={securityCanonical}
	jsonLd={securityJsonLd}
/>

<main>
	<section class="relative overflow-hidden">
		<Container size="wide" class="relative pt-20 pb-16 sm:pt-28">
			<div class="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,380px)] lg:gap-16">
				<div class="text-center lg:text-left">
					<p class="neo-tag mx-auto w-fit lg:mx-0">Security &amp; privacy</p>
					<h1 class="mt-5 text-4xl font-bold tracking-[-0.02em] text-balance sm:text-5xl">
						We store almost nothing, so there is little to steal.
					</h1>
					<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-(--app-muted) lg:mx-0">
						Most security pages describe encryption around a database full of user data. Libre is
						built the other way around — and LibreSearch, our first product, is the proof.
					</p>
				</div>
				<div
					class="neo-card mx-auto w-full max-w-sm overflow-hidden bg-(--app-panel) p-4 shadow-[var(--app-shadow-md)] lg:max-w-none"
				>
					<div class="aspect-square w-full">
						<Illustration
							name="icon1"
							alt="Shield protecting private search — no logs stored"
						/>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<section class="border-t-[3px] border-(--app-border)">
		<Container class="py-16 sm:py-24">
			<div class="neo-card divide-y-[3px] divide-(--app-border) overflow-hidden">
				{#each layers as layer, i (layer.label)}
					<div class="grid gap-6 bg-(--app-card) p-8 sm:grid-cols-[180px_1fr] sm:gap-12 sm:p-10">
						<div>
							<p class="neo-tag !px-2 !py-1 !text-[10px]">
								Layer {i + 1} · {layer.label}
							</p>
						</div>
						<div>
							<h2 class="text-xl font-bold tracking-tight sm:text-2xl">{layer.title}</h2>
							<ul class="mt-4 space-y-2.5">
								{#each layer.points as point (point)}
									<li class="flex items-start gap-3 text-sm leading-6 text-(--app-muted)">
										<Icon name="check" class="mt-1 shrink-0 text-xs leading-none text-(--app-accent)" />
										{point}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</Container>
	</section>

	<section class="border-t-[3px] border-(--app-border)">
		<Container class="py-20 sm:py-24">
			<div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
				<div>
					<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Read the source yourself.</h2>
					<p class="mt-4 leading-8 text-(--app-muted)">
						The LibreSearch repo, privacy policy, and transparency record cover the claims on this
						page. Start with the repo if you want proof in code.
					</p>
					<div class="mt-8 flex flex-wrap gap-3">
						<Button href={GITHUB_URL} external>View source</Button>
						<Button href="/privacy" variant="secondary">Privacy policy</Button>
						<Button href="/transparency" variant="secondary">Transparency</Button>
					</div>
				</div>
				<div>
					<div class="flex items-center gap-3">
						<span
							class="neo-card flex h-9 w-9 items-center justify-center bg-(--app-accent-bright) p-0 shadow-[var(--app-shadow-sm)]"
						>
							<Icon name="shield" class="text-base leading-none" />
						</span>
						<h2 class="text-lg font-semibold">Found a vulnerability?</h2>
					</div>
					<p class="mt-4 text-sm leading-7 text-(--app-muted)">
						Describe the issue below. Include steps to reproduce if you can. Good-faith reports get
						priority — protected by Cloudflare Turnstile like our main contact form.
					</p>
					<div class="mt-6">
						<ContactForm
							{form}
							namedAction="report"
							turnstileAction="security_report"
							subjectPrefix="Security report"
							submitLabel="Send security report"
							messagePlaceholder="Describe the vulnerability, affected URLs or components, and how to reproduce…"
						/>
					</div>
				</div>
			</div>
		</Container>
	</section>

	<CtaBanner
		title="Audit LibreSearch, then run a search."
		primaryLabel="Open LibreSearch"
		secondaryLabel="Report an issue"
		secondaryHref="/contact"
	/>
</main>
