<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ContentPage from '$lib/components/ContentPage.svelte';
	import ContentCallout from '$lib/components/ContentCallout.svelte';
	import ContentSection from '$lib/components/content/ContentSection.svelte';
	import ContentActions from '$lib/components/content/ContentActions.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { SITE_URL, SITE_LAUNCHED, GITHUB_URL, formatLongDate } from '$lib/config';
</script>

<ContentPage
	eyebrow="Support"
	title="Support Libre"
	description="Libre has no ad business and no data business. Here is how you can help — honestly, including what we have not set up yet."
	canonical="{SITE_URL}/donate"
	metaDescription="Ways to support Libre: contributions, code, and feedback. No payment portal yet."
	updated={SITE_LAUNCHED}
>
	<ContentCallout
		title="No payment button yet"
		body="As of {formatLongDate(SITE_LAUNCHED)} we do not host a donation checkout on this site. We would rather say that plainly than embed a fake “Donate now” flow that goes nowhere."
	/>

	<ContentSection title="Why support matters">
		<p>
			LibreSearch is free and works without an account. That is intentional — privacy should not be a
			paid tier. It also means infrastructure and development time have to come from somewhere that is
			not “sell the user.” Community support closes that gap.
		</p>
	</ContentSection>

	<ContentSection title="Where money would go">
		<p>When we add formal donations, funds will go toward:</p>
		<ul>
			<li>Hosting and bandwidth for LibreSearch and this site</li>
			<li>Security maintenance and dependency upkeep</li>
			<li>Building the next Libre products under the same privacy rules</li>
		</ul>
		<p>
			We will publish a short note on this page and the <a href="/changelog">changelog</a> before any
			donation processor goes live, including fees and who receives funds.
		</p>
	</ContentSection>

	<ContentSection title="How you can help today">
		<ul>
			<li><strong>Use LibreSearch</strong> and tell people who care about privacy that it exists.</li>
			<li><strong>Contribute on GitHub</strong> — code, docs, issues, and reviews all count.</li>
			<li>
				<strong>Report bugs and rough edges</strong> through <a href="/contact">contact</a> so we can fix
				them.
			</li>
			<li><strong>Self-host</strong> if that fits your community — the AGPL license allows it.</li>
		</ul>
	</ContentSection>

	<ContentSection title="Financial support before checkout exists">
		<p>
			If you want to fund Libre financially right now, email us via the contact form with “donate” in
			the message. We will reply with whatever option we actually have available — not a placeholder
			link.
		</p>
	</ContentSection>

	<ContentActions>
		<Button href="/contact">
			Get in touch
			<Icon name="arrowRight" class="text-sm leading-none" />
		</Button>
		<Button href={GITHUB_URL} external variant="secondary">Contribute on GitHub</Button>
	</ContentActions>
</ContentPage>
