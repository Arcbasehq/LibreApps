<script lang="ts">
	import Wordmark from './Wordmark.svelte';
	import Icon from './Icon.svelte';
	import { footerColumns, GITHUB_URL } from '$lib/site-links';
	import { MASTODON_URL, X_URL } from '$lib/config';

	const linkClass = 'rounded-(--radius-sm) text-white/70 transition hover:text-white';
	const headingClass =
		'font-(family-name:--font-mono) text-[11px] font-medium tracking-[0.18em] text-white/50 uppercase';
</script>

<footer class="border-t-[3px] border-(--app-border) bg-[#1E1E1E] text-white">
	<div class="mx-auto w-full max-w-[1200px] px-6 pt-16 pb-10">
		<div class="flex flex-col gap-12 lg:flex-row lg:justify-between">
			<div class="max-w-xs">
				<a href="/" class="inline-block rounded-(--radius-sm)"
					><Wordmark inverse class="text-2xl" /></a
				>
				<p class="mt-4 text-sm leading-6 text-white/75">
					Privacy-first Libre apps. LibreSearch is our first — no tracking, profiles, or ads.
				</p>
				<div class="mt-6 flex items-center gap-4 text-white/60">
					<a
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="rounded-(--radius-sm) transition hover:text-white"
					>
						<Icon name="github" class="text-lg leading-none" />
					</a>
					<a
						href={MASTODON_URL}
						target="_blank"
						rel="me noopener noreferrer"
						aria-label="Mastodon"
						class="rounded-(--radius-sm) transition hover:text-white"
					>
						<Icon name="mastodon" class="text-lg leading-none" />
					</a>
					<a
						href={X_URL}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="X"
						class="rounded-(--radius-sm) transition hover:text-white"
					>
						<Icon name="xTwitter" class="text-lg leading-none" />
					</a>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
				{#each footerColumns as col (col.title)}
					<div>
						<p class={headingClass}>{col.title}</p>
						<ul class="mt-4 space-y-2.5 text-sm">
							{#each col.links as link (link.label)}
								<li>
									<a
										href={link.href}
										target={link.external ? '_blank' : undefined}
										rel={link.external ? 'noopener noreferrer' : undefined}
										class={linkClass}>{link.label}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-7 sm:flex-row sm:items-center"
		>
			<p class="text-xs text-white/60">
				&copy; {new Date().getFullYear()} Libre. Privacy-first software.
			</p>
			<div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
				<a href="/privacy" class="rounded-(--radius-sm) transition hover:text-white">Privacy</a>
				<a href="/terms" class="rounded-(--radius-sm) transition hover:text-white">Terms</a>
				<span class="hidden text-white/30 sm:inline" aria-hidden="true">·</span>
				<span class="font-(family-name:--font-mono) text-[11px] text-white/50">Open source · AGPL-3.0</span>
			</div>
		</div>
	</div>
</footer>
