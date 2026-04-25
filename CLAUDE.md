# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Soumen Mukherjee — a single-page static site with no build step, no framework, no package manager. Vanilla HTML, CSS, and JavaScript only.

**Live URLs:**
- `https://soumen.trails.click` — primary (custom domain; Cloudflare DNS-only CNAME → GitHub Pages)
- `https://me-soumen.github.io` — GitHub Pages origin

**Deploy:** push to `main` → GitHub Pages auto-deploys. No CI/CD pipeline, no GitHub Actions. Cloudflare is DNS-only (grey cloud), so no Cloudflare cache purge is needed after deploys.

## Local preview

```bash
python3 -m http.server 8080
# open http://127.0.0.1:8080
```

No build, lint, or test command exists — what you see is what deploys.

## Architecture: content-data split

### Layer 1 — Data (`assets/data/site-content.js`) — source of truth
Single source of truth for all visible content. Exports `window.SITE_CONTENT` with keys:
`theme`, `meta`, `header`, `nav`, `files`, `hero`, `about`, `techStack`, `techStackGroups`,
`journey` (with `work[]` and `education[]` arrays), `projects`, `weekendProjects`,
`hiring`, `highlights`, `contact`, `footer`.

**All content edits go here.** This is the only file that needs changing for copy, links, stats, jobs, projects, skills, etc.

### Layer 2 — DOM injection (`assets/js/content-loader.js`)
Runs at page load before `main.js`. Reads `window.SITE_CONTENT`, builds HTML strings, and rewrites every dynamic section of the DOM. Sets `data-site-content="applied"` on `<html>` on success, `"error"` on throw, `"missing"` if `site-content.js` didn't load.

### Static fallbacks in `index.html`
`index.html` contains hardcoded content that mirrors `site-content.js` for users with JS blocked or disabled. `site-content.js` is always authoritative — `index.html` is only an approximate fallback. Sync them periodically when making structural changes; they don't need to be identical at all times.

## Cache busting — required on every deploy

All assets in `index.html` share a single global version number. The canonical version lives in this comment at the top of `<head>`:

```html
<!-- ASSET VERSION: 1 — bump this number and all ?v= below together on every deploy -->
```

**On every deploy that touches any asset:** find-replace the current `?v=N` with `?v=N+1` across the entire `index.html` in one operation (all 10 occurrences move together). This is the single place to manage versions.

Current version: **1**

Cloudflare and mobile browsers cache aggressively — skipping the bump means visitors see stale assets.

## CSS architecture

All theme tokens are CSS custom properties in `:root` inside `styles.css`. `content-loader.js` overrides the color tokens at runtime via `document.documentElement.style.setProperty()` using values from `site-content.js → theme`. The static fallback values in `:root` match the `theme` block exactly.

Dark mode: toggled by adding `dark-theme` class to `<body>`. Preference persisted in `localStorage` (`selected-theme` / `selected-icon`). Overrides live in `body.dark-theme` block in `styles.css`.

CSS class prefix: all custom classes use `sm-` (Soumen Mukherjee) to avoid collision with Swiper's `swiper-*` classes.

`responsive.css` holds all media queries. Key breakpoints: `≥968px` (desktop font scale), `≤767px` (mobile nav slides up from bottom, iOS safe-area insets via `env(safe-area-inset-bottom)`).

## JavaScript files

| File | Role |
|---|---|
| `content-loader.js` | DOM injection from `SITE_CONTENT`; must run before `main.js` |
| `main.js` | Mobile nav toggle, skills accordion, qualification tabs, project modals, Swiper init, scroll-driven nav highlight, header shadow, back-to-top, dark-mode toggle |
| `swiper-bundle.min.js` | Vendored Swiper — do not edit |

All three are loaded with `defer` in `index.html` in the order: `site-content.js` → `content-loader.js` → `swiper-bundle.min.js` → `main.js`.

Two Swiper instances in `main.js`:
- `.sm-portfolio-container` → `#portfolio` weekend projects (`loop: true`, prev/next nav buttons)
- `.sm-achievements-slider` → `#achievements` highlights (`loop: false` — intentional so pagination dot count matches slide count)

## Page sections and their SITE_CONTENT keys

| Section | `#id` | `SITE_CONTENT` key |
|---|---|---|
| Home / Hero | `#intro` | `hero` |
| About | `#profile` | `about` |
| Skills accordion | `#tech-stack` | `techStack` + `techStackGroups[]` |
| Qualification tabs | `#journey` | `journey` → `work[]` / `education[]` |
| Projects (cards + modals) | `#work` | `projects` → `items[]` |
| Weekend projects (Swiper) | `#portfolio` | `weekendProjects` → `projects[]` |
| Hiring CTA | *(no id)* | `hiring` |
| Highlights (Swiper) | `#achievements` | `highlights` (alias: `achievements`) |
| Contact | `#contact` | `contact` |

## Resume PDF

Lives at `assets/files/Resume_Soumen_Mukherjee.pdf`. When replacing, also update `files.resumePath` and `files.resumeDownloadName` in `site-content.js` if the filename changes. `content-loader.js` populates both the About and Contact download buttons from those keys.

## Fonts

Poppins (400/500/600) and Unicons Line icon font are self-hosted under `assets/fonts/`. Intentionally not CDN-loaded — CDN font URLs broke under some IDE preview proxies. Do not replace with a CDN `@import`.

## Planned future work

- **Contact form** — EmailJS integration (no backend server; form will submit via EmailJS API directly from the browser). Will be added once the core layout is stable.

## Trails Labs ecosystem context

`trails.click` is Soumen's personal domain hosting multiple self-hosted projects. This portfolio is one sub-project (`soumen.trails.click`). Related subdomains (separate repos/services, not part of this repo):
- `money.trails.click` — personal finance tracker
- `vault.trails.click` — self-hosted Vaultwarden (password manager for family)
- `soil.trails.click` — hobby project to document soil samples (location, date, etc.)
- `play.trails.click` — personal play time tracker
- `cloud.trails.click` — self-hosted cloud on Synology NAS

## What NOT to touch

- `assets/js/swiper-bundle.min.js` — vendored, do not edit
- `assets/css/swiper-bundle.min.css` — vendored, do not edit
- `assets/fonts/unicons-line/*.woff` — vendored icon font shards
- `CNAME` — required by GitHub Pages for the custom domain; deleting it breaks `soumen.trails.click`
