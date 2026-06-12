<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ContentPage from '$lib/components/ContentPage.svelte';
	import ContentCallout from '$lib/components/ContentCallout.svelte';
	import ContentSection from '$lib/components/content/ContentSection.svelte';
	import ContentActions from '$lib/components/content/ContentActions.svelte';
	import { SITE_URL, SITE_LAUNCHED, GITHUB_URL } from '$lib/config';
</script>

<ContentPage
	eyebrow="Transparency"
	title="Transparency"
	description="How Libre is built to minimize retained data — and how we will report legal requests when there is something worth publishing."
	canonical="{SITE_URL}/transparency"
	metaDescription="Libre transparency: data retention model, legal request reporting, and how to verify our claims in source code."
	updated={SITE_LAUNCHED}
>
	<ContentCallout
		title="Read this first"
		body="This is not a fake annual report. The site went live on 11 June 2026. We have not published historical request statistics because we have not yet run a reporting cycle. What follows is our model, our commitments, and what will appear here as facts accumulate."
	/>

	<ContentSection title="Why transparency looks different here">
		<p>
			Most transparency reports are long tables of data handovers because the underlying product stored
			user data in the first place. LibreSearch is architected the other way: if we do not log searches
			or maintain accounts, there is often nothing responsive to a subpoena beyond “we do not have that
			record.”
		</p>
		<p>
			That is a design choice, not a loophole. This page focuses on what we retain, what we would do
			if served legal process, and how you can verify the implementation.
		</p>
	</ContentSection>

	<ContentSection title="What we retain (and what we do not)">
		<h3>LibreSearch</h3>
		<ul>
			<li>Search queries: not stored as a user-attributed history.</li>
			<li>Accounts: none required; no profile database.</li>
			<li>Settings: client-side in your browser unless a feature explicitly says otherwise.</li>
		</ul>
		<h3>libreapps.xyz</h3>
		<ul>
			<li>Contact form submissions: kept only as long as needed to respond.</li>
			<li>Standard server/hosting logs: may exist for security; not used for advertising profiles.</li>
		</ul>
		<p>See <a href="/privacy">Privacy policy</a> for website specifics.</p>
	</ContentSection>

	<ContentSection title="Legal and government requests">
		<p>If we receive valid legal process, we will:</p>
		<ul>
			<li>Review it with counsel when appropriate.</li>
			<li>Produce only data we actually hold.</li>
			<li>Push back on overbroad requests where the law allows.</li>
			<li>
				Update this page when a disclosure affects users in a material way, when we are legally
				permitted to do so.
			</li>
		</ul>
	</ContentSection>

	<ContentSection title="Published statistics">
		<p>
			We will publish summary counts here after we have completed at least one reporting period — not
			before. Until then, the table below stays empty on purpose.
		</p>
		<div
			class="mt-4 overflow-hidden rounded-(--radius-md) border-[3px] border-(--app-border) shadow-[var(--app-shadow-sm)]"
		>
			<table class="content-table">
				<thead>
					<tr>
						<th>Period</th>
						<th>Requests received</th>
						<th>Data disclosed</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-t-[3px] border-(--app-border)">
						<td colspan="3">
							No reporting period completed yet. First entry will appear after we have real numbers to
							share.
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</ContentSection>

	<ContentSection title="Verify in code">
		<p>
			Policies are only as good as the code behind them. LibreSearch is AGPL-3.0. Clone the repo, read
			the request path, and file an issue if something does not match this page.
		</p>
	</ContentSection>

	<ContentActions>
		<Button href={GITHUB_URL} external>View source</Button>
		<Button href="/security" variant="secondary">Security overview</Button>
		<Button href="/contact" variant="secondary">Contact</Button>
	</ContentActions>
</ContentPage>
