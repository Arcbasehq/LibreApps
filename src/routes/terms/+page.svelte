<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ContentPage from '$lib/components/ContentPage.svelte';
	import ContentCallout from '$lib/components/ContentCallout.svelte';
	import ContentSection from '$lib/components/content/ContentSection.svelte';
	import ContentActions from '$lib/components/content/ContentActions.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { SITE_URL, SITE_DOMAIN, SITE_LAUNCHED, GITHUB_URL } from '$lib/config';
</script>

<ContentPage
	eyebrow="Legal"
	title="Terms of service"
	description="The rules for using libreapps.xyz — written in plain language, not buried in legalese."
	canonical="{SITE_URL}/terms"
	metaDescription="Terms of service for libreapps.xyz, the Libre apps hub."
	updated={SITE_LAUNCHED}
>
	<ContentCallout
		title="Scope"
		body="These terms apply to {SITE_DOMAIN} (this website). LibreSearch and other Libre apps at their own domains may have separate terms where noted on those products."
	/>

	<ContentSection title="Using this site">
		<p>
			libreapps.xyz is a marketing and information site for Libre software. You may browse, link to,
			and share our pages. Do not use the site to attack our infrastructure, scrape it in ways that
			impair service for others, or misrepresent Libre or our products.
		</p>
	</ContentSection>

	<ContentSection title="Software and open source">
		<p>
			LibreSearch and related code we publish are offered under their respective open source
			licenses (LibreSearch is AGPL-3.0). Source is available on
			<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>. Your use of the
			software itself is governed by those licenses, not this page.
		</p>
	</ContentSection>

	<ContentSection title="No warranties">
		<p>
			We work to keep this site accurate and available, but we provide it “as is.” We do not guarantee
			uninterrupted access, error-free copy, or that every statement on a marketing page reflects the
			latest release of a product. For technical behavior, prefer the source code and product
			documentation.
		</p>
	</ContentSection>

	<ContentSection title="Limitation of liability">
		<p>
			To the extent permitted by law, Libre and its contributors are not liable for indirect or
			consequential damages arising from your use of this website. Our total liability for claims
			related to this site is limited to the amount you paid us to use it — which, for a free
			information site, is zero.
		</p>
	</ContentSection>

	<ContentSection title="Contact and security reports">
		<p>
			Messages sent through our <a href="/contact">contact form</a> or
			<a href="/security">security report form</a> must be truthful and submitted in good faith.
			Abusive, fraudulent, or automated submissions may be ignored or blocked. See our
			<a href="/privacy">privacy policy</a> for how we handle form data.
		</p>
	</ContentSection>

	<ContentSection title="Links">
		<p>
			We link to LibreSearch, GitHub, social accounts, and third-party services. We are not
			responsible for their content or practices once you leave libreapps.xyz.
		</p>
	</ContentSection>

	<ContentSection title="Changes">
		<p>
			We may update these terms. Material changes will be noted on this page and in the
			<a href="/changelog">changelog</a>. Continued use of the site after an update means you accept
			the revised terms.
		</p>
	</ContentSection>

	<ContentSection title="Questions">
		<p>
			Questions about these terms go through the <a href="/contact">contact form</a>. Put “terms” in
			your message so we route it correctly.
		</p>
	</ContentSection>

	<ContentActions>
		<Button href="/privacy" variant="secondary">Privacy policy</Button>
		<Button href="/contact">
			Contact
			<Icon name="arrowRight" class="text-sm leading-none" />
		</Button>
	</ContentActions>
</ContentPage>
