<script lang="ts">
	import ContentPage from '$lib/components/ContentPage.svelte';
	import ContentSection from '$lib/components/content/ContentSection.svelte';
	import ContentEmptyState from '$lib/components/content/ContentEmptyState.svelte';
	import { formatLongDate, SITE_URL, SITE_LAUNCHED, MASTODON_URL, X_URL } from '$lib/config';
</script>

<ContentPage
	eyebrow="Blog"
	title="Blog"
	description="Long-form updates from Libre — product news, privacy notes, and how we build. No posts yet; this page will fill in as we publish."
	canonical="{SITE_URL}/blog"
	metaDescription="Libre blog — company and product updates. No posts published yet."
	updated={SITE_LAUNCHED}
	noindex
>
	<ContentEmptyState date={formatLongDate(SITE_LAUNCHED)} title="Nothing published yet">
		<p>
			We are not going to invent archive posts to make this page look busy. When Libre has something
			worth saying — a launch, a policy change, a technical post — it will show up here on libreapps.xyz, not buried on a product subdomain you did not ask for.
		</p>
		<p class="mt-4">
			Until then, follow us on
			<a href={MASTODON_URL} target="_blank" rel="me noopener noreferrer">Mastodon</a>
			or
			<a href={X_URL} target="_blank" rel="noopener noreferrer">X</a>
			for shorter updates, or watch the <a href="/changelog">changelog</a> for site and product notes.
		</p>
	</ContentEmptyState>
</ContentPage>
