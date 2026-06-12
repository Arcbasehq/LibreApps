# Libre

**Libre** builds privacy-first software — tools that work without tracking, profiles,
or ads. This repository is the source for **[libreapps.xyz](https://libreapps.xyz)**,
the public hub for Libre apps, policies, and company information.

Our first product is **[LibreSearch](https://libresearch.ca)** — a private search
engine with no query logs, no accounts, and no ad monetization. LibreSearch and related
product code live in the
[LibreSearch repository](https://github.com/Arcbasehq/LibreSearch) (AGPL-3.0). More
Libre apps are planned under the same principles: collect nothing unnecessary, ship
in the open, stay accessible without a login.

|                       |                                                                              |
| --------------------- | ---------------------------------------------------------------------------- |
| **Hub site**          | [libreapps.xyz](https://libreapps.xyz)                                       |
| **Search product**    | [libresearch.ca](https://libresearch.ca)                                     |
| **Adblocker product** | [libresearch.ca](https://libreguard.org)                                     |
| **Product source**    | [github.com/Arcbasehq/LibreSearch](https://github.com/Arcbasehq/LibreSearch) |

## What Libre stands for

- **Collect nothing** — design products that do not need personal data to work
- **Build in the open** — public source and honest policy pages
- **Stay accessible** — free to use, no account required for core features

## This repository

Marketing and policy site built with **SvelteKit 2**, **Svelte 5**, and **Tailwind CSS 4**,
deployed on Vercel. It includes contact forms (Cloudflare Turnstile + Web3Forms), SEO
(sitemap, JSON-LD), and content pages (privacy, terms, security, transparency, press, etc.).

### Local development

```bash
npm install
cp .env.example .env.local   # then fill in keys
npm run dev
```

Open **http://localhost:5173** (not `127.0.0.1`) so Cloudflare Turnstile accepts the hostname.

### Environment variables

| Variable                      | Scope  | Purpose                                              |
| ----------------------------- | ------ | ---------------------------------------------------- |
| `PUBLIC_TURNSTILE_SITE_KEY`   | Public | Turnstile widget on contact/security forms           |
| `TURNSTILE_SECRET_KEY`        | Server | Server-side Turnstile verification                   |
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | Public | Delivers contact form messages (Web3Forms free tier) |

Copy `.env.example` → `.env.local` for development. Set the same three variables in
**Vercel → Project → Settings → Environment Variables** for production.

**Cloudflare Turnstile** — allow hostnames `libreapps.xyz` and `localhost` in the widget dashboard.

### Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Dev server               |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run check`   | Typecheck                |
| `npm run lint`    | Prettier + ESLint        |

### Deploy checklist

1. Set Vercel env vars (see above)
2. Confirm Turnstile hostnames include `libreapps.xyz`
3. Point `libreapps.xyz` DNS to Vercel
4. Smoke-test `/contact` (Turnstile + message delivery)
5. Verify `/sitemap.xml` and `/robots.txt`

### Contact form flow

1. **Server** validates fields and verifies Turnstile
2. **Browser** sends the message to Web3Forms (required on free tier)

Security reports on `/security` use the same flow with subject prefix `Security report`.

## Community

- [Code of Conduct](CODE_OF_CONDUCT.md) — expected behavior in Libre community spaces
- [Security policy](SECURITY.md) — how to report vulnerabilities responsibly

Questions or press: [libreapps.xyz/contact](https://libreapps.xyz/contact)

## License

**This repository** (libreapps.xyz site source) is licensed under the
**[GNU General Public License v3.0](LICENSE)** (GPL-3.0-or-later).

**LibreSearch** and other product repositories may use different licenses (LibreSearch
is **AGPL-3.0**). Check each repo’s `LICENSE` file.

Site _content_ (copy, branding) is © Libre unless otherwise noted in the repository.
