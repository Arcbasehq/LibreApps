<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ContentPage from '$lib/components/ContentPage.svelte';
	import ContentCallout from '$lib/components/ContentCallout.svelte';
	import ContentSection from '$lib/components/content/ContentSection.svelte';
	import ContentActions from '$lib/components/content/ContentActions.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { SITE_URL, SITE_DOMAIN, SITE_LAUNCHED, LIBRESEARCH_URL, GITHUB_URL } from '$lib/config';
</script>

<ContentPage
	eyebrow="Privacy"
	title="Privacy policy"
	description="What Libre collects on libreapps.xyz and how our apps are designed — written plainly, without hiding behind vague promises."
	canonical="{SITE_URL}/privacy"
	metaDescription="Libre privacy policy for libreapps.xyz and an overview of how LibreSearch handles data."
	updated={SITE_LAUNCHED}
>
	<ContentCallout
		title="Scope"
		body="This policy covers {SITE_DOMAIN} (the Libre apps hub). LibreSearch at libresearch.ca has its own privacy documentation on the product; the principles below apply to both, but technical details for search live with the product repo."
	/>

	<ContentSection title="Who we are">
		<p>
			Libre builds privacy-first software. Our first product is LibreSearch, a search engine that does
			not log queries, build profiles, or show ads. This website explains the company, our policies,
			and how to reach us.
		</p>
	</ContentSection>

	<ContentSection title="What this website collects">
		<p>We keep this site as light as we can.</p>
		<ul>
			<li>
				<strong>Server logs:</strong> Like most websites, our host may record basic request metadata
				(such as IP address, user agent, and requested path) for security and reliability. We do not
				use those logs to profile visitors or sell data. We review retention with our host and keep
				periods as short as operationally reasonable.
			</li>
			<li>
				<strong>Analytics:</strong> We do not run Google Analytics, Meta pixels, or similar third-party
				tracking on this site. If that changes, we will update this page before turning anything on.
			</li>
			<li>
				<strong>Cookies:</strong> This marketing site does not set advertising or cross-site tracking
				cookies. Session cookies may appear only if a feature explicitly needs them (for example, form
				abuse protection). We will document any new cookie here.
			</li>
		</ul>
	</ContentSection>

	<ContentSection title="Contact form">
		<p>
			When you submit the <a href="/contact">contact form</a> or the security report form on
			<a href="/security">Security</a>, we receive the name, email, and message you provide so we can
			reply. Those forms use <a
				href="https://www.cloudflare.com/products/turnstile/"
				target="_blank"
				rel="noopener noreferrer">Cloudflare Turnstile</a
			> to block automated abuse; Turnstile may process browser signals under Cloudflare’s privacy
			policy. We use your message only to handle your request. We do not add you to marketing lists
			unless you ask us to, and we do not sell or rent contact details.
		</p>
	</ContentSection>

	<ContentSection title="LibreSearch (our search product)">
		<p>LibreSearch is designed so there is no search history to hand over. In plain terms:</p>
		<ul>
			<li>Queries are processed to return results and are not written to a query log.</li>
			<li>We do not require an account and do not maintain user profiles.</li>
			<li>Preferences you set in LibreSearch are stored locally in your browser, not on our servers.</li>
			<li>Results pages are not monetized with targeted ads.</li>
		</ul>
		<p>
			Those claims are backed by open source code. Read the
			<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">LibreSearch repository</a> and
			compare it to what we publish on <a href="/security">Security</a> and
			<a href="/transparency">Transparency</a>.
		</p>
	</ContentSection>

	<ContentSection title="Links to other sites">
		<p>
			We link to LibreSearch, GitHub, and social accounts. Those services have their own privacy
			practices. When you leave this site, their policies apply.
		</p>
	</ContentSection>

	<ContentSection title="Children">
		<p>
			Our products are general-purpose tools. We do not knowingly collect personal information from
			children through this website. If you believe a child has contacted us in error, reach out via
			<a href="/contact">contact</a> and we will delete the message.
		</p>
	</ContentSection>

	<ContentSection title="Changes to this policy">
		<p>
			We will post material changes on this page and note them on the <a href="/changelog">changelog</a
			>. The “last updated” date at the top reflects the most recent revision.
		</p>
	</ContentSection>

	<ContentSection title="Questions">
		<p>
			Privacy questions go through the same <a href="/contact">contact form</a>. Put “privacy” in your
			message so we route it correctly. For site usage rules, see our
			<a href="/terms">terms of service</a>.
		</p>
	</ContentSection>

	<ContentActions>
		<Button href="/security" variant="secondary">Security overview</Button>
		<Button href={LIBRESEARCH_URL} external>
			Open LibreSearch
			<Icon name="arrowRight" class="text-sm leading-none" />
		</Button>
	</ContentActions>
</ContentPage>
