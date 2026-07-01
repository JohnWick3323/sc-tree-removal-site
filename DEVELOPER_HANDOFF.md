# Developer Handoff

## Project Overview

This is an Astro site for South Carolina Tree Removal Experts. It uses Cloudflare Pages for deployment and Keystatic for blog/content management.

Primary goals:

- Keep the service URL structure stable for SEO.
- Keep service content faithful to the approved source files in `Services Content/`.
- Allow blog publishing through Keystatic with draft, noindex, category, tag, featured image, and OG image controls.
- Keep forms unchanged unless explicitly requested.

## Stack

- Astro
- `@astrojs/cloudflare`
- Keystatic
- React islands for selected components
- Cloudflare Pages Functions/API routes

Important files:

- `astro.config.mjs`
- `wrangler.toml`
- `keystatic.config.ts`
- `src/data/services.ts`
- `src/data/serviceRedirects.ts`
- `src/data/locations.ts`
- `src/pages/services/[service].astro`
- `src/pages/services/[service]/[...city].astro`
- `src/pages/locations/[...city].astro`
- `src/pages/sitemap.xml.ts`
- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`

## Current Service Structure

The service menu is the source of truth. The services are grouped into exactly three clusters.

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

Dynamic city pages remain enabled:

- `/services/[service]/[city]/`
- `/locations/[city]/`

Do not change these URL structures without a redirect plan.

## Service Content Source Of Truth

Approved source copy lives in `Services Content/`.

Rendered markdown lives in `src/content/services/`.

Mapping:

- `tree-removal` -> `Services Content/Tree Removal/Tree Removal.md`
- `crane-assisted-tree-removal` -> `Services Content/Tree Removal/Crane-Assisted Tree Removal.md`
- `dead-tree-removal` -> `Services Content/Tree Removal/Dead Tree Removal.md`
- `hazardous-tree-removal` -> `Services Content/Tree Removal/Hazardous Tree Removal.md`
- `tree-cutting-felling` -> `Services Content/Tree Removal/Tree Cutting & Felling.md`
- `emergency-tree-removal` -> `Services Content/Emergency Tree Removal/Emergency Tree Removal.md`
- `emergency-storm-response` -> `Services Content/Emergency Tree Removal/Emergency Storm Response.md`
- `fallen-tree-removal` -> `Services Content/Emergency Tree Removal/Fallen Tree Removal.md`
- `tree-on-house-removal` -> `Services Content/Emergency Tree Removal/Tree on House Removal.md`
- `tree-on-car-removal` -> `Services Content/Emergency Tree Removal/Tree on Car Removal.md`
- `land-clearing` -> `Services Content/Land Clearing/Land & Lot Clearing.md`
- `brush-clearing` -> `Services Content/Land Clearing/Brush Clearing.md`
- `debris-removal` -> `Services Content/Land Clearing/Debris Removal.md`
- `forestry-mulching` -> `Services Content/Land Clearing/Forestry Mulching.md`

Do not summarize, simplify, or remove approved service copy unless the owner explicitly asks for editing.

## Legacy Redirects

Legacy service redirects are handled in `src/data/serviceRedirects.ts`.

Current redirects:

- `/services/residential-tree-removal/` -> `/services/tree-removal/`
- `/services/land-clearing-grading/` -> `/services/land-clearing/`
- `/services/underbrush-clearing/` -> `/services/brush-clearing/`
- `/services/commercial-forestry/` -> `/services/forestry-mulching/`
- `/services/stump-grinding/` -> `/services/land-clearing/`
- `/services/land-lot-clearing/` -> `/services/land-clearing/`
- `/services/commercial-tree-services/` -> `/services/forestry-mulching/`

City variants preserve city slug:

- `/services/land-clearing-grading/st.-andrews/` -> `/services/land-clearing/st.-andrews/`

Unknown unrelated service slugs should return 404.

## Blog And Keystatic

Production Keystatic uses GitHub storage:

- Repo: `JohnWick3323/sc-tree-removal-site`
- Admin route: `/keystatic`

Required Cloudflare secrets:

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`

Public/build variable:

- `PUBLIC_GOOGLE_MAPS_KEY`

Blog supports:

- `draft`
- `noindex`
- author relationship
- category relationship
- tag relationships
- featured image
- optional OG image
- canonical URL

Behavior:

- `draft: true` hides the post and direct URL returns 404.
- `noindex: true` renders the post with `robots=noindex,follow` and excludes it from sitemap.
- If `ogImage` is empty, the blog post uses `featuredImage` for social previews.
- Categories and tags have archive pages at `/blog/category/[slug]/` and `/blog/tag/[slug]/`.

## Images

Current image locations:

- Global and hero images: `public/images/`
- Optimized global images: `public/images/optimized/`
- Service images: `public/images/services/`
- Location images: `public/images/locations/`
- Region images: `public/images/regions/`
- Blog images uploaded by Keystatic: `public/images/blog/`
- Author avatars uploaded by Keystatic: `public/images/authors/`

Service page hero images are controlled from `src/data/services.ts`.

If adding or replacing service images:

1. Add optimized `.webp` files under `public/images/services/`.
2. Use stable descriptive filenames.
3. Update the service's `image` value in `src/data/services.ts`.
4. Do not change service slugs or URLs.
5. Run a production build.
6. Visually check the service page and one service-city page.

If adding blog images:

1. Use Keystatic `featuredImage` for the main/listing image.
2. Use Keystatic `ogImage` only when the social image should be different.
3. Use the document editor image tool for inline images.
4. Keep OG images close to 1200 x 630.
5. Compress very large images before upload.

Current code uses post title as featured image alt text. If a future editor needs custom alt text, add explicit alt fields to `keystatic.config.ts` and update blog templates.

## Layout Notes

- Forms should stay unchanged unless explicitly requested.
- Main service pages show one breadcrumb trail without duplicated pillar names.
- Subservice pages show parent service and child service in breadcrumbs.
- Desktop Services nav label links to `/services/` and still exposes the mega menu on hover.
- Plain phone numbers inside `.prose` content are automatically converted to `tel:+1...` links by `src/layouts/BaseLayout.astro`.

## Sitemap Rules

`src/pages/sitemap.xml.ts` should include:

- Static pages
- Canonical service pages
- Canonical service-city pages
- Location pages
- Non-draft blog posts
- Blog category/tag archives that have eligible posts

Exclude:

- Redirect-only legacy service slugs
- Draft posts
- Noindex posts
- Unknown 404 routes

## Cloudflare Notes

The site is deployed on Cloudflare Pages using `@astrojs/cloudflare`.

`wrangler.toml` is used for Cloudflare configuration. Because wrangler configuration can control variables, plaintext dashboard variables may be restricted. Secrets should be added through the Cloudflare Dashboard.

Important build behavior:

- The Astro build outputs to `dist/`.
- `fix-wrangler.mjs` runs after build and patches deployment output for Cloudflare Pages.

## Local Commands

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

In restricted Windows environments, Astro telemetry may try to write outside the workspace. This command has worked in Codex:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; $env:XDG_CONFIG_HOME=(Resolve-Path '.wrangler').Path; npm.cmd run build
```

## Pre-Handoff Checklist

- Run `npm run build`.
- Check `/services/tree-removal/`.
- Check `/services/emergency-tree-removal/`.
- Check `/services/land-clearing/`.
- Check one city page such as `/services/emergency-tree-removal/columbia/`.
- Check one location page such as `/locations/columbia/`.
- Check a legacy redirect such as `/services/land-clearing-grading/st.-andrews/`.
- Check `/blog/` and one post if posts exist.
- Check `/sitemap.xml`.
