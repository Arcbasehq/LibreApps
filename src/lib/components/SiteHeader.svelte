<script lang="ts">
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import NavDropdown from './NavDropdown.svelte';
	import logoText from '../assets/logo-text.png';
	import { productLinks, companyLinks, trustLinks } from '$lib/site-links';

	let mobileOpen = $state(false);
	let scrolled = $state(false);
	let openMenu = $state<string | null>(null);

	function toggleMenu(id: string) {
		openMenu = openMenu === id ? null : id;
	}

	function closeMenus() {
		openMenu = null;
	}

	function handleWindowClick(e: MouseEvent) {
		if (!openMenu) return;
		const target = e.target as Element;
		if (!target.closest('[data-nav-menu]')) closeMenus();
	}

	function closeMobile() {
		mobileOpen = false;
		closeMenus();
	}
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 12)} onclick={handleWindowClick} />

<header
	class="sticky top-0 z-40 border-b-[3px] border-(--app-border) bg-(--app-background) transition-shadow duration-200 {scrolled ||
	mobileOpen
		? 'shadow-[var(--app-shadow-sm)]'
		: ''}"
>
	<div class="mx-auto w-full max-w-[1200px] px-6">
		<div class="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
			<a href="/" aria-label="Libre home" class="justify-self-start rounded-(--radius-sm)">
				<img src={logoText} alt="Libre" class="h-10 auto" width="120" height="32" />
			</a>

			<nav class="hidden items-center gap-0.5 lg:flex" aria-label="Main">
				<NavDropdown
					label="Products"
					items={productLinks}
					open={openMenu === 'products'}
					onToggle={() => toggleMenu('products')}
					onClose={closeMenus}
				/>
				<NavDropdown
					label="Trust"
					items={trustLinks}
					open={openMenu === 'trust'}
					onToggle={() => toggleMenu('trust')}
					onClose={closeMenus}
				/>
				<NavDropdown
					label="Company"
					items={companyLinks}
					open={openMenu === 'company'}
					onToggle={() => toggleMenu('company')}
					onClose={closeMenus}
				/>
			</nav>

			<div class="hidden justify-self-end lg:block">
				<Button href="/products" class="!px-5 !py-2">Products</Button>
			</div>

			<button
				type="button"
				class="-mr-2 justify-self-end rounded-(--radius-md) p-2 text-(--app-muted) transition hover:text-(--app-text) lg:hidden"
				aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileOpen}
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<Icon name={mobileOpen ? 'xmark' : 'bars'} class="text-lg leading-none" />
			</button>
		</div>

		{#if mobileOpen}
			<nav
				class="animate-fade-in flex flex-col gap-4 border-t-[3px] border-(--app-border) py-4 lg:hidden"
				aria-label="Main"
			>
				{#each [{ title: 'Products', links: productLinks }, { title: 'Trust', links: trustLinks }, { title: 'Company', links: companyLinks }] as group (group.title)}
					<div>
						<p
							class="px-3 font-(family-name:--font-mono) text-[11px] tracking-wider text-(--app-muted) uppercase"
						>
							{group.title}
						</p>
						<ul class="mt-1">
							{#each group.links as link (link.href + link.label)}
								<li>
									<a
										href={link.href}
										target={link.external ? '_blank' : undefined}
										rel={link.external ? 'noopener noreferrer' : undefined}
										class="block rounded-(--radius-md) border-[3px] border-transparent px-3 py-2.5 text-sm font-medium text-(--app-secondary) transition hover:border-(--app-border) hover:bg-(--app-panel) hover:text-(--app-text)"
										onclick={closeMobile}
									>
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
				<a
					href="/products"
					class="neo-card mx-3 bg-(--app-accent) px-4 py-2.5 text-center text-sm font-bold text-(--app-accent-fg) shadow-[var(--app-shadow-sm)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
					onclick={closeMobile}
				>
					Products
				</a>
			</nav>
		{/if}
	</div>
</header>
