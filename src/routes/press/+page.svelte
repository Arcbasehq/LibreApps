<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ContentPage from '$lib/components/ContentPage.svelte';
	import ContentSection from '$lib/components/content/ContentSection.svelte';
	import ContentFactSheet from '$lib/components/content/ContentFactSheet.svelte';
	import ContentActions from '$lib/components/content/ContentActions.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import {
		SITE_URL,
		SITE_DOMAIN,
		SITE_LAUNCHED,
		LIBRESEARCH_URL,
		GITHUB_URL,
		SITE_NAME,
		formatLongDate
	} from '$lib/config';

	const facts = [
		{ label: 'Company', value: 'Libre' },
		{ label: 'Product', value: 'LibreSearch — private web search' },
		{ label: 'Libre apps hub', value: SITE_DOMAIN },
		{ label: 'LibreSearch', value: LIBRESEARCH_URL },
		{ label: 'Model', value: 'No ads, no sale of user data, community-supported' },
		{ label: 'License', value: 'AGPL-3.0 (GitHub)' },
		{ label: 'Site launch', value: formatLongDate(SITE_LAUNCHED) }
	];
</script>

<ContentPage
	eyebrow="Press"
	title="Press &amp; media"
	description="Accurate names, positioning, and a direct line for journalists — no boilerplate portal and no fabricated milestones."
	canonical="{SITE_URL}/press"
	metaDescription="Libre press information: company facts, naming, and media contact."
	updated={SITE_LAUNCHED}
>
	<ContentSection title="Boilerplate">
		<p>
			<strong>{SITE_NAME}</strong> is a privacy-first software company. Its first product is
			<strong>LibreSearch</strong> (<a href={LIBRESEARCH_URL} target="_blank" rel="noopener noreferrer"
				>libresearch.ca</a
			>), a search engine that does not log queries, build user profiles, or run ads. Libre ships open
			source software under AGPL-3.0. {SITE_DOMAIN} launched on {formatLongDate(SITE_LAUNCHED)}.
		</p>
	</ContentSection>

	<ContentSection title="Naming (please get this right)">
		<ul>
			<li><strong>Libre</strong> — the company.</li>
			<li><strong>LibreSearch</strong> — the search product (one word, capital L and S).</li>
			<li>
				Do not call LibreSearch “Libre” in headlines unless you mean the company. Example: “Libre
				ships LibreSearch” is correct; “Libre launches new UI” is ambiguous.
			</li>
		</ul>
	</ContentSection>

	<ContentSection title="Fact sheet">
		<ContentFactSheet rows={facts} />
	</ContentSection>

	<ContentSection title="What we will not claim for you">
		<p>
			We are an early company. We do not publish user counts, revenue figures, or funding announcements
			unless we have chosen to share them publicly. Please quote this page and our
			<a href="/about">about</a> / <a href="/security">security</a> docs rather than inventing scale we
			have not stated.
		</p>
	</ContentSection>

	<ContentSection title="Brand assets">
		<p>
			Logo files and a full media kit are not hosted yet. For now, use the wordmark as it appears on
			this site. Need something specific? Ask via the contact form with “press” in the message.
		</p>
	</ContentSection>

	<ContentSection title="Media contact">
		<p>
			Use the <a href="/contact">contact form</a> with “press” in the subject or body. We read
			everything; we do not route journalists through a tracked CRM.
		</p>
	</ContentSection>

	<ContentActions>
		<Button href="/contact">
			Contact press
			<Icon name="arrowRight" class="text-sm leading-none" />
		</Button>
		<Button href="/about" variant="secondary">About Libre</Button>
	</ContentActions>
</ContentPage>
