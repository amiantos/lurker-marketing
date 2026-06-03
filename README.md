# lurker.chat — marketing site

The public landing page + legal documents for the hosted Lurker service, served
at the apex **lurker.chat**. Plain hand-authored static HTML/CSS — **no build
step** — designed to deploy straight to **Cloudflare Pages**.

The app itself lives at `app.lurker.chat` (the control plane / proxy, a separate
private repo); this repo is only the public front door.

## Design

A deadpan technical "operations manual" aesthetic — warm paper stock, hairline
rules, monospace document-control labels, a single restrained purple accent —
nodding to the **SCHWA World Operations Manual** that inspired Lurker's icon and
its UFO-incident cell names (Roswell, Aurora, Kecksburg…). All styling is in
`style.css`; iterate there.

## Pages

| File | Path | What |
| --- | --- | --- |
| `index.html` | `/` | Landing page — hero, screenshot, request-access CTA |
| `about.html` | `/about` | About — what / why / who |
| `faq.html` | `/faq` | Frequently asked questions |
| `networks.html` | `/networks` | For IRC network operators (identd + how to ban a user) |
| `abuse.html` | `/abuse` | Report abuse |
| `terms.html` | `/terms` | Terms of Service |
| `privacy.html` | `/privacy` | Privacy Policy |
| `acceptable-use.html` | `/acceptable-use` | Acceptable Use Policy |

Icons (`/favicon.*`, `/img/lurker-icon-192.png`) and the client screenshot
(`/img/screenshot.png`) are harvested from the OSS `lurker` repo.

Cloudflare Pages serves clean URLs (`/terms` → `terms.html`) automatically.

## Deploy (Cloudflare Pages)

1. Connect this repo as a Pages project.
2. **Build command:** _(none)_ · **Output directory:** `/` (repo root).
3. Add the custom domain `lurker.chat` (apex). The app stays on `app.lurker.chat`.

`_headers` sets baseline security headers.

## ⚠ Before going live — fill these in

The legal docs (Terms, Privacy, Acceptable Use) read as final, but still merit a
once-over by a qualified attorney before lurker.chat accepts real users or
payments (see card F1). Search-and-replace the placeholders:

- `[EFFECTIVE DATE]` — the date each policy takes effect.
- Contact addresses — `support@`, `privacy@`, `abuse@`, `networks@`,
  `access@lurker.chat` (set these mailboxes up, or repoint them).
- The request-access CTA on `index.html` is a `mailto:` for now; wire it to the
  control-plane invite gate when ready (F2 / B9).
