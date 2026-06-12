# Security Policy

## Supported versions

| Site / branch | Supported |
|---------------|-----------|
| Production at [libreapps.xyz](https://libreapps.xyz) | Yes |
| `main` (latest deploy) | Yes |
| Older deployments | No |

This repository is the **libreapps.xyz marketing site** (SvelteKit). Vulnerabilities in
**LibreSearch** itself should be reported against the
[LibreSearch repository](https://github.com/Arcbasehq/LibreSearch) unless they affect
this hub site directly.

## Reporting a vulnerability

**Please do not open public GitHub issues for security problems.**

Report issues through either:

1. **[Security report form](https://libreapps.xyz/security)** on libreapps.xyz (preferred)
2. **[Contact form](https://libreapps.xyz/contact)** with “security” in the message

Good-faith reports include:

- What you found and where (URL, parameter, component)
- Steps to reproduce
- Impact you believe it has (data exposure, auth bypass, XSS, etc.)
- Your contact details so we can follow up

We aim to acknowledge reports within a reasonable time and will keep you updated on
fix progress when we can share details.

## What we protect on this site

- Contact and security forms (Turnstile + server validation)
- Security headers on all routes (see `src/hooks.server.ts`)
- No third-party analytics or ad trackers on libreapps.xyz

## Safe harbor

We support responsible disclosure. We will not pursue legal action against researchers
who report vulnerabilities in good faith, avoid privacy violations and service
disruption, and give us reasonable time to fix issues before public disclosure.

## Product security

For LibreSearch (search engine, extension, backend):

- Read [libreapps.xyz/security](https://libreapps.xyz/security)
- Review source at [github.com/Arcbasehq/LibreSearch](https://github.com/Arcbasehq/LibreSearch)
