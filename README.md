# Soumen Mukherjee — Portfolio

**Live**

- [https://soumen.trails.click](https://soumen.trails.click) — custom domain ([`CNAME`](./CNAME))
- [https://me-soumen.github.io](https://me-soumen.github.io) — GitHub Pages

Static site on **GitHub Pages**; Poppins + self-hosted Unicons, green theme, light/dark mode, Swiper carousels.

## License and usage

This work is **All Rights Reserved**. The design, code, copy, and assets in this repository are proprietary and may not be copied, reused, modified, or redistributed without prior written permission.

### Third-party rights notice

This repository may include ideas, patterns, or components inspired by publicly shared resources. Any third-party trademarks, assets, or code rights remain with their respective owners. If you are a rights holder and have a concern, please open an issue or contact the repository owner for prompt review.

## Edit content

Primary source: [`assets/data/site-content.js`](./assets/data/site-content.js) (`window.SITE_CONTENT`). [`assets/js/content-loader.js`](./assets/js/content-loader.js) injects it into the DOM. After deploy, the root `<html>` should show `data-site-content="applied"`. `index.html` holds static fallbacks if scripts fail.

**Cache:** Asset URLs in `index.html` use `?v=…` — bump the version (e.g. `?v=2` → `?v=3`) when you ship CSS/JS/data changes so phones and edge caches pick up new files.

## Local preview

```bash
python3 -m http.server 8080
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080/).

## Layout (high level)

```text
├── CNAME                    # soumen.trails.click
├── index.html
└── assets/
    ├── data/site-content.js
    ├── js/main.js, content-loader.js, swiper-bundle.min.js
    ├── css/styles.css, responsive.css, …
    ├── fonts/               # Poppins + Unicons
    ├── images/
    └── files/               # resume PDF
```

**Resume:** keep `assets/files/…` in sync with `files.resumePath` / `files.resumeDownloadName` in `site-content.js`.

## Stack

Vanilla **HTML, CSS, and JavaScript** — no build step, no framework. Poppins and a subset of Unicons are self-hosted under `assets/fonts/`. The Swiper build in `assets/js` powers carousels. `site-content.js` is the single place for copy, links, and theme overrides; `content-loader.js` applies it at load time.
