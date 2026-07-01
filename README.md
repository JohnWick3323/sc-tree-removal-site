# South Carolina Tree Removal Experts

Astro site for South Carolina Tree Removal Experts, with Cloudflare Pages deployment and Keystatic-powered blog management.

## Project Goals

- Keep SEO-critical service and location URL structures stable.
- Use approved service body copy from `Services Content/`.
- Manage blog posts, authors, categories, tags, and images through Keystatic.
- Keep canonical service pages, service-city pages, location pages, and sitemap clean for indexing.

## Stack

- Astro
- `@astrojs/cloudflare`
- Keystatic
- React islands where needed
- Cloudflare Pages Functions/API routes

## Important Files

- `src/data/services.ts`: canonical service list, grouping, and service hero images.
- `src/data/serviceRedirects.ts`: legacy service slug redirects.
- `src/data/locations.ts`: city/location data.
- `src/content/services/`: rendered service markdown.
- `Services Content/`: approved source copy for service content.
- `keystatic.config.ts`: CMS collections and blog fields.
- `src/pages/sitemap.xml.ts`: sitemap generation.
- `CONTENT_FORMATTING_GUIDE.md`: editing rules for content and images.
- `DEVELOPER_HANDOFF.md`: full project handoff and operational notes.
- `public/llms.txt`: AI/search helper summary.

## Canonical Services

Tree Removal:

- `/services/tree-removal/`
- `/services/crane-assisted-tree-removal/`
- `/services/dead-tree-removal/`
- `/services/hazardous-tree-removal/`
- `/services/tree-cutting-felling/`

Emergency Tree Removal:

- `/services/emergency-tree-removal/`
- `/services/emergency-storm-response/`
- `/services/fallen-tree-removal/`
- `/services/tree-on-house-removal/`
- `/services/tree-on-car-removal/`

Land & Lot Clearing:

- `/services/land-clearing/`
- `/services/brush-clearing/`
- `/services/debris-removal/`
- `/services/forestry-mulching/`

Dynamic pages:

- `/services/[service]/[city]/`
- `/locations/[city]/`

Do not change indexed URL structures without adding redirects.

## Content Rules

Service content must come from `Services Content/` and render through `src/content/services/[slug].md`.

Do not add editorial labels such as `Meta Title`, `Meta Description`, `URL Slug`, `H1`, or `Section 1` into markdown body content. The Astro templates provide page structure, hero sections, breadcrumbs, forms, related links, and CTAs.

For full rules, see `CONTENT_FORMATTING_GUIDE.md`.

## Images

Current image folders:

- Service images: `public/images/services/`
- Blog images: `public/images/blog/`
- Author images: `public/images/authors/`
- Location images: `public/images/locations/`
- Global optimized images: `public/images/optimized/`

Service hero images are assigned in `src/data/services.ts`.

Blog featured images, OG images, and inline images should be uploaded through Keystatic.

## Keystatic

Admin route:

- `/keystatic`

Production storage uses GitHub:

- `JohnWick3323/sc-tree-removal-site`

Required Cloudflare secrets:

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`

Blog controls include:

- `draft`: hides post and direct URL returns 404.
- `noindex`: renders post with `robots=noindex,follow` and excludes from sitemap.
- `category` and `tags`: relationships used by archive pages.
- `featuredImage`: used on listings and post page.
- `ogImage`: optional social share image. Featured image is used if empty.

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

In restricted Windows/Codex environments, use:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; $env:XDG_CONFIG_HOME=(Resolve-Path '.wrangler').Path; npm.cmd run build
```

## Deployment Notes

The site deploys to Cloudflare Pages with `@astrojs/cloudflare`.

`fix-wrangler.mjs` runs after build and patches Cloudflare Pages output.

Keep sensitive variables as Cloudflare secrets. Public/build variables can be configured in `wrangler.toml` when appropriate.

## Pre-Deploy Checklist

- Run `npm run build`.
- Check a main service page, for example `/services/tree-removal/`.
- Check a subservice page, for example `/services/emergency-storm-response/`.
- Check a service-city page, for example `/services/emergency-tree-removal/columbia/`.
- Check a location page, for example `/locations/columbia/`.
- Check a legacy redirect, for example `/services/land-clearing-grading/st.-andrews/`.
- Check `/blog/` and at least one post if posts exist.
- Check `/sitemap.xml`.
