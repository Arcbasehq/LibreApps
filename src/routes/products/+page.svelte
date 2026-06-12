<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ProductMock from '$lib/components/ProductMock.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { SITE_LAUNCHED, SITE_URL } from '$lib/config';
	import { libreProductExtras, libreProducts } from '$lib/products';
	import { defaultBreadcrumbs, innerPageSchemas } from '$lib/seo';

	const description =
		'LibreSearch for private search, LibreAuth for TOTP codes, and more privacy-first apps under the same rules — no tracking, open source, AGPL-3.0.';
	const canonical = `${SITE_URL}/products`;
	const jsonLd = innerPageSchemas({
		title: 'Products',
		description,
		canonical,
		breadcrumbs: defaultBreadcrumbs('Products', canonical),
		lastmod: SITE_LAUNCHED
	});
</script>

<SeoHead title="Products" {description} {canonical} {jsonLd} />

<main>
	<section class="border-b-[3px] border-(--app-border) bg-(--app-accent-bright)">
		<Container size="narrow" class="relative py-16 sm:py-20">
			<p class="neo-tag w-fit">Products</p>
			<h1 class="mt-5 max-w-2xl text-4xl tracking-[-0.02em] text-balance sm:text-5xl">
				Privacy-first apps from Libre.
			</h1>
			<p class="mt-5 max-w-2xl text-base leading-7 text-(--app-secondary) sm:text-lg">
				Each product follows the same rules: collect nothing unnecessary, ship open code, and skip
				ads. Pick an app below — no account required for LibreSearch; LibreAuth sync is optional.
			</p>
		</Container>
	</section>

	<section class="bg-(--app-background)">
		<Container size="wide" class="py-12 sm:py-16">
			<div class="space-y-16">
				{#each libreProducts as product (product.id)}
					<article class="neo-card overflow-hidden">
						<div class="grid gap-0 lg:grid-cols-[1fr_minmax(0,420px)]">
							<div class="flex flex-col justify-center p-8 sm:p-10">
								<p class="neo-tag w-fit">{product.tagline}</p>
								<h2 class="mt-4 text-3xl font-bold tracking-tight">{product.name}</h2>
								<p class="mt-4 max-w-prose text-[15px] leading-7 text-(--app-muted)">
									{product.description}
								</p>
								<ul class="mt-6 space-y-2">
									{#each product.highlights as highlight (highlight)}
										<li
											class="flex items-center gap-2 text-sm font-semibold text-(--app-secondary)"
										>
											<span
												class="flex h-5 w-5 shrink-0 items-center justify-center border-[2px] border-(--app-border) bg-(--app-accent-bright)"
											>
												<Icon name="check" class="text-xs leading-none" />
											</span>
											{highlight}
										</li>
									{/each}
								</ul>
								<div class="mt-8 flex flex-wrap gap-3">
									<Button href={product.url} external={product.external}>
										Open {product.name}
										<Icon name="arrowRight" class="text-sm leading-none" />
									</Button>
									{#if product.github}
										<Button href={product.github} external variant="secondary">
											Source code
										</Button>
									{/if}
								</div>
							</div>
							<div
								class="border-t-[3px] border-(--app-border) bg-(--app-panel) p-6 lg:border-t-0 lg:border-l-[3px] lg:p-8"
							>
								<ProductMock variant={product.mock} />
							</div>
						</div>
					</article>
				{/each}

				<div>
					<h2 class="text-xl font-bold tracking-tight">Also from Libre</h2>
					<div class="mt-6 grid gap-4 sm:grid-cols-2">
						{#each libreProductExtras as extra (extra.id)}
							<a
								href={extra.href}
								class="neo-card block p-6 transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
							>
								<p class="neo-tag w-fit">{extra.tagline}</p>
								<h3 class="mt-3 text-lg font-bold">{extra.name}</h3>
								<p class="mt-2 text-sm leading-6 text-(--app-muted)">{extra.description}</p>
								<span
									class="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-(--app-accent)"
								>
									Learn more
									<Icon name="arrowRight" class="text-sm leading-none" />
								</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</Container>
	</section>
</main>
