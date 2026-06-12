/** Changelog entries for libreapps.xyz — add only what actually shipped */
export type ChangelogEntry = {
	date: string;
	title: string;
	body: string;
};

export const siteChangelog: ChangelogEntry[] = [
	{
		date: '2026-06-11',
		title: 'Company website published',
		body: 'First public version of libreapps.xyz: about, security, privacy, transparency, contact, and LibreSearch product overview.'
	}
];
