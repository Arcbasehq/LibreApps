import { sitemapRoutes, absoluteUrl } from '$lib/seo';

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
	.map((route) => {
		const loc = absoluteUrl(route.path);
		const parts = [
			'  <url>',
			`    <loc>${loc}</loc>`,
			route.lastmod ? `    <lastmod>${route.lastmod}</lastmod>` : '',
			route.changefreq ? `    <changefreq>${route.changefreq}</changefreq>` : '',
			route.priority !== undefined ? `    <priority>${route.priority.toFixed(1)}</priority>` : '',
			'  </url>'
		].filter(Boolean);
		return parts.join('\n');
	})
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
