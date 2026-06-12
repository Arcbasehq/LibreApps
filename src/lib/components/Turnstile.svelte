<script lang="ts">
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import { loadTurnstileScript } from '$lib/turnstile';

	interface Props {
		action?: string;
		theme?: 'light' | 'dark' | 'auto';
		onReady?: (ready: boolean) => void;
		onToken?: (token: string) => void;
		onExpire?: () => void;
	}

	let {
		action = 'submit',
		theme = 'light',
		onReady,
		onToken,
		onExpire
	}: Props = $props();

	let container = $state<HTMLDivElement | null>(null);
	let widgetId = $state<string | undefined>();
	let loadError = $state(false);

	const siteKey = $derived(env.PUBLIC_TURNSTILE_SITE_KEY);

	export function reset() {
		if (widgetId !== undefined && window.turnstile) {
			window.turnstile.reset(widgetId);
		}
		onReady?.(false);
	}

	onMount(() => {
		if (!siteKey || !container) {
			onReady?.(!siteKey);
			return;
		}

		let cancelled = false;

		loadTurnstileScript()
			.then(() => {
				if (cancelled || !container || !window.turnstile) return;

				widgetId = window.turnstile.render(container, {
					sitekey: siteKey,
					theme,
					action,
					callback: (token) => {
						onToken?.(token);
						onReady?.(true);
					},
					'expired-callback': () => {
						onExpire?.();
						onReady?.(false);
					},
					'error-callback': () => {
						loadError = true;
						onReady?.(false);
					}
				});
			})
			.catch(() => {
				loadError = true;
				onReady?.(false);
			});

		return () => {
			cancelled = true;
			if (widgetId !== undefined && window.turnstile) {
				window.turnstile.remove(widgetId);
			}
		};
	});
</script>

{#if siteKey}
	<div class="turnstile-wrap">
		<div bind:this={container} class="min-h-[65px]"></div>
		{#if loadError}
			<p class="mt-2 text-sm text-red-800" role="alert">
				Captcha failed to load. If you see error 110200 in the console, add this site’s hostname
				(e.g. <code class="text-xs">libreapps.xyz</code> or <code class="text-xs">localhost</code>)
				in Cloudflare Turnstile → Widget → Hostname Management.
			</p>
		{/if}
	</div>
{/if}
