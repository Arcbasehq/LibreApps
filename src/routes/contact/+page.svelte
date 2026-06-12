<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { SITE_URL } from '$lib/config';
	import { defaultBreadcrumbs, innerPageSchemas } from '$lib/seo';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	const contactDescription =
		'Contact Libre for questions, press inquiries, feedback, or security reports. Protected by Cloudflare Turnstile — no tracking pixels in replies.';
	const contactCanonical = `${SITE_URL}/contact`;
	const contactJsonLd = innerPageSchemas({
		title: 'Contact',
		description: contactDescription,
		canonical: contactCanonical,
		breadcrumbs: defaultBreadcrumbs('Contact', contactCanonical)
	});
</script>

<SeoHead
	title="Contact"
	description={contactDescription}
	canonical={contactCanonical}
	jsonLd={contactJsonLd}
/>

<main>
	<Container size="wide" class="py-20 sm:py-28">
		<div class="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
			<div>
				<p class="neo-tag w-fit">Contact</p>
				<h1 class="mt-5 text-4xl font-bold tracking-[-0.02em] text-balance sm:text-5xl">
					Send us a message.
				</h1>
				<p class="mt-6 text-lg leading-8 text-(--app-muted)">
					Questions, press, feedback, or security reports all go to the same inbox. We read
					everything. No newsletter signup, no lead scoring, no tracking pixels in replies.
				</p>

				<dl class="mt-10 space-y-5 text-sm">
					<div class="flex items-start gap-3">
						<Icon name="shield" class="mt-0.5 shrink-0 text-sm leading-none text-(--app-accent)" />
						<div>
							<dt class="font-semibold text-(--app-secondary)">Security reports</dt>
							<dd class="mt-0.5 text-(--app-muted)">
								Put “security” in the subject line and we will prioritize it.
							</dd>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<Icon name="eyeOff" class="mt-0.5 shrink-0 text-sm leading-none text-(--app-accent)" />
						<div>
							<dt class="font-semibold text-(--app-secondary)">What happens to this form</dt>
							<dd class="mt-0.5 text-(--app-muted)">
								Cloudflare Turnstile blocks bots. Your message is delivered via Web3Forms. We keep it
								only as long as the conversation lasts.
							</dd>
						</div>
					</div>
				</dl>
			</div>

			<div>
				<ContactForm {form} turnstileAction="contact" />
			</div>
		</div>
	</Container>
</main>
