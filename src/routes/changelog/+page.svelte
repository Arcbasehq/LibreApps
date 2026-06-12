<script lang="ts">
	import ContentPage from '$lib/components/ContentPage.svelte';
	import ContentSection from '$lib/components/content/ContentSection.svelte';
	import ContentTimeline from '$lib/components/content/ContentTimeline.svelte';
	import { SITE_URL, SITE_LAUNCHED, GITHUB_URL } from '$lib/config';
	import { siteChangelog } from '$lib/content/changelog';
</script>

<ContentPage
	eyebrow="Changelog"
	title="Changelog"
	description="Dated notes for libreapps.xyz. Product release history for LibreSearch lives in the open source repo — we do not duplicate it here with guessed dates."
	canonical="{SITE_URL}/changelog"
	metaDescription="Changelog for libreapps.xyz — dated, factual updates only."
	updated={SITE_LAUNCHED}
>
	<ContentSection>
		<p>
			Only events we can actually date appear below. For LibreSearch code changes, see
			<a href="{GITHUB_URL}/commits" target="_blank" rel="noopener noreferrer">GitHub commits</a>
			and releases there.
		</p>
	</ContentSection>

	<ContentTimeline entries={siteChangelog} />
</ContentPage>
