<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Turnstile from '$lib/components/Turnstile.svelte';
	import { submitToWeb3Forms } from '$lib/web3forms';
	import { env } from '$env/dynamic/public';

	export type ContactFormState = {
		success?: boolean;
		error?: string;
		values?: { name: string; email: string; message: string };
	};

	interface Props {
		form: ContactFormState | null | undefined;
		turnstileAction?: string;
		/** SvelteKit named action, e.g. "report" → ?/report */
		namedAction?: string;
		submitLabel?: string;
		messagePlaceholder?: string;
		/** Prepended to Web3Forms subject, e.g. "Security report" */
		subjectPrefix?: string;
	}

	let {
		form,
		turnstileAction = 'contact',
		namedAction,
		submitLabel = 'Send message',
		messagePlaceholder = "What's on your mind?",
		subjectPrefix
	}: Props = $props();

	const MAX_NAME = 100;
	const MAX_EMAIL = 200;
	const MAX_MESSAGE = 4000;

	let submitting = $state(false);
	let sent = $state(false);
	let clientError = $state<string | null>(null);
	let turnstileReady = $state(!env.PUBLIC_TURNSTILE_SITE_KEY);
	let turnstile = $state<{ reset(): void } | null>(null);

	const inputClasses =
		'w-full rounded-(--radius-md) border-[3px] border-(--app-border) bg-(--app-card) px-4 py-2.5 text-(--app-text) shadow-[var(--app-shadow-sm)] placeholder:text-(--app-muted) focus:border-(--app-accent) focus:ring-0';

	const captchaRequired = $derived(Boolean(env.PUBLIC_TURNSTILE_SITE_KEY));
	const canSubmit = $derived(!submitting && (!captchaRequired || turnstileReady));
</script>

{#if sent || form?.success}
	<div class="neo-card animate-slide-up p-8">
		<div class="flex items-center gap-3">
			<span
				class="flex h-9 w-9 items-center justify-center border-[3px] border-(--app-border) bg-(--app-accent-bright) text-(--app-text)"
			>
				<Icon name="check" class="text-sm leading-none" />
			</span>
			<p class="text-lg font-semibold">Message sent</p>
		</div>
		<p class="mt-3 text-sm leading-7 text-(--app-muted)">
			We got your message and will reply when we can.
		</p>
	</div>
{:else}
	<form
		method="POST"
		action={namedAction ? `?/${namedAction}` : undefined}
		class="neo-card p-8 sm:p-10"
		use:enhance={() => {
			submitting = true;
			clientError = null;
			return async ({ result, update, formElement }) => {
				submitting = false;

				if (result.type === 'failure' || result.type === 'error') {
					turnstile?.reset();
					await update();
					return;
				}

				if (result.type === 'success') {
					const data = new FormData(formElement);
					const name = String(data.get('name') ?? '').trim();
					const email = String(data.get('email') ?? '').trim();
					const message = String(data.get('message') ?? '').trim();

					const delivered = await submitToWeb3Forms({
						name,
						email,
						message,
						...(subjectPrefix ? { subject: `${subjectPrefix} · ${name}` } : {})
					});
					if (!delivered.ok) {
						clientError = delivered.message;
						turnstile?.reset();
						return;
					}

					sent = true;
					return;
				}

				await update();
			};
		}}
	>
		{#if form?.error || clientError}
			<p
				class="mb-5 rounded-(--radius-md) border-[3px] border-red-600 bg-red-100 px-4 py-3 text-sm font-medium text-red-900"
				role="alert"
			>
				{form?.error ?? clientError}
			</p>
		{/if}

		<div class="space-y-5">
			<div>
				<label for="name" class="mb-1.5 block text-sm font-medium text-(--app-secondary)">Name</label>
				<input
					id="name"
					name="name"
					type="text"
					required
					maxlength={MAX_NAME}
					value={form?.values?.name ?? ''}
					class={inputClasses}
					placeholder="Your name"
				/>
			</div>

			<div>
				<label for="email" class="mb-1.5 block text-sm font-medium text-(--app-secondary)">Email</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					maxlength={MAX_EMAIL}
					value={form?.values?.email ?? ''}
					class={inputClasses}
					placeholder="you@example.com"
				/>
			</div>

			<div>
				<label for="message" class="mb-1.5 block text-sm font-medium text-(--app-secondary)"
					>Message</label
				>
				<textarea
					id="message"
					name="message"
					required
					rows="6"
					maxlength={MAX_MESSAGE}
					class={inputClasses}
					placeholder={messagePlaceholder}
					>{form?.values?.message ?? ''}</textarea
				>
			</div>

			<input
				type="checkbox"
				name="botcheck"
				class="hidden"
				style="display: none;"
				tabindex="-1"
				autocomplete="off"
				aria-hidden="true"
			/>

			<Turnstile
				bind:this={turnstile}
				action={turnstileAction}
				onReady={(ready) => (turnstileReady = ready)}
				onExpire={() => (turnstileReady = false)}
			/>

			<Button type="submit" disabled={!canSubmit} class="w-full sm:w-auto">
				{submitting ? 'Sending…' : submitLabel}
				<Icon name="arrowRight" class="text-sm leading-none" />
			</Button>
		</div>
	</form>
{/if}
