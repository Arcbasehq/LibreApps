<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ContentPage from '$lib/components/ContentPage.svelte';
	import ContentCallout from '$lib/components/ContentCallout.svelte';
	import ContentSection from '$lib/components/content/ContentSection.svelte';
	import ContentActions from '$lib/components/content/ContentActions.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { SITE_URL, SITE_LAUNCHED, LIBRESEARCH_URL } from '$lib/config';

	const browsers = ['Chrome', 'Edge', 'Firefox', 'Brave'];
</script>

<ContentPage
	eyebrow="Products"
	title="Browser extension"
	description="Use LibreSearch from your address bar — same privacy model as the web app, documented on libreapps.xyz."
	canonical="{SITE_URL}/extension"
	metaDescription="LibreSearch browser extension: supported browsers, permissions, and install link."
	updated={SITE_LAUNCHED}
>
	<ContentSection>
		<p>
			The LibreSearch extension lets you search from the browser bar without sending queries through a
			provider that logs and profiles you. It talks to the same LibreSearch backend as
			<a href={LIBRESEARCH_URL} target="_blank" rel="noopener noreferrer">libresearch.ca</a>.
		</p>
	</ContentSection>

	<ContentSection title="Supported browsers">
		<ul class="content-tag-row">
			{#each browsers as browser (browser)}
				<li class="neo-tag">{browser}</li>
			{/each}
		</ul>
		<p class="mt-4">
			Store listings and packaging are maintained on the product site. If a browser is missing, that is
			a coverage gap — not a silent “coming soon” on our side.
		</p>
	</ContentSection>

	<ContentSection title="What it does">
		<ul>
			<li>Sends search queries to LibreSearch when you search from the extension or set it as default.</li>
			<li>Uses the same no-account model as the website.</li>
		</ul>
	</ContentSection>

	<ContentSection title="What it does not do">
		<ul>
			<li>Track full browsing history outside search.</li>
			<li>Require a Libre account.</li>
			<li>Inject ads or sponsored shortcuts into results.</li>
		</ul>
	</ContentSection>

	<ContentCallout
		title="Check permissions before installing"
		body="Read the permission list in your browser’s extension store page. It should match the behavior above. If something looks off, tell us via contact — that is how we catch packaging mistakes."
	/>

	<ContentSection title="Install">
		<p>
			Download links and store badges live on LibreSearch’s extension page (product domain). We link
			there rather than mirroring installers on libreapps.xyz, so you always get the current build.
		</p>
	</ContentSection>

	<ContentActions>
		<Button href="{LIBRESEARCH_URL}/extension" external>
			Extension page on LibreSearch
			<Icon name="arrowRight" class="text-sm leading-none" />
		</Button>
		<Button href={LIBRESEARCH_URL} external variant="secondary">Try LibreSearch</Button>
	</ContentActions>
</ContentPage>
