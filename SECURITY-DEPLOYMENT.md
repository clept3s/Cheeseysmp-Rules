# Deployment and privacy checklist

This is a static site. The checklist is guidance only; this repository cannot configure or prove settings in the live hosting, DNS, or account dashboards.

## Hosting configuration

- Enable HTTPS, automatic certificate renewal, and a permanent HTTP-to-HTTPS redirect to `https://rules.cheeseysmp.net/`. Verify the canonical host and all aliases.
- After confirming HTTPS works, consider hostname-only HSTS with a short initial `max-age`. Do not use `includeSubDomains` until every subdomain has been checked for HTTPS. Do not preload casually.
- Configure the example response headers in `/_headers` only if using Netlify (or translate them to the actual provider format). Confirm response headers on deployed HTML and assets. CSP is same-origin and assumes no external embeds; investigate browser console violations before relaxing it. Avoid `unsafe-inline` and `unsafe-eval`.
- Require 2FA for hosting, DNS, and source-control accounts. Use least-privilege deployment tokens, limit production deploy rights, and review DNS for unused records.
- Keep reviewed source in version control and maintain private backups. Publish only required static assets; exclude `.env`, credentials, private keys, backups, source maps, and admin files. No application secrets are required by this site.
- Configure cache policy at the host: revalidate HTML promptly after rules updates and use long-lived caching only for versioned assets. If supported, deploy a 404 page that actually returns HTTP 404.

## Manual verification after deployment

- Check HTTP redirect behavior and final HTTPS URL.
- Check certificate chain/hostname/expiry and security response headers using the host dashboard, a browser security panel, or command-line HTTP/TLS tools.
- Test CSP in browser developer tools, including any future third-party resources.
- Test responsive layouts, keyboard-only use, screen reader headings/landmarks, zoom, reduced-motion preference, contrast, all anchors, and browser console.
- Check search locally, broken links, Discord link previews, and 404 status.
- Scan public files and repository history for secrets. If a credential was exposed, revoke/rotate it; removing the file does not invalidate a leaked key.

## Privacy/legal details to confirm

- Source currently has no analytics, form, appeal integration, third-party embed, or nonessential browser storage. Search executes locally and does not transmit its query. External Google Fonts were removed.
- The hosting provider may process request IPs/access logs. Provider identity, purposes, recipients, and retention are not established in this project. Confirm those facts before writing a detailed privacy notice.
- Confirm an owner-approved privacy contact, appeal URL/instructions, and official Discord invite before adding destinations. Do not publish a made-up address, KvK number, or private contact details.
- Confirm whether operator identification is legally required for this site and identify the correct operator. The discreet legal-information page must be completed with verified details before deployment if disclosures are required; do not publish unverified personal or business data.
- Review current Mojang/Microsoft usage guidance when updating the non-affiliation disclaimer.