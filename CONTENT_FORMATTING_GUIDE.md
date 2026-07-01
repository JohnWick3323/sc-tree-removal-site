# Content Formatting Guide

This guide is the source of truth for editing service content and blog content without breaking the Astro templates, SEO, or Keystatic workflow.

## Content Sources

- Service source copy: `Services Content/`
- Rendered service markdown: `src/content/services/[slug].md`
- Service routing and grouping: `src/data/services.ts`
- Legacy service redirects: `src/data/serviceRedirects.ts`
- Blog posts: `src/content/posts/`
- Blog authors: `src/content/authors/`
- Blog categories: `src/content/categories/`
- Blog tags: `src/content/tags/`
- Service images: `public/images/services/`
- Blog images uploaded from Keystatic: `public/images/blog/`
- Author images uploaded from Keystatic: `public/images/authors/`

Do not invent new service body copy. Service pages must use the approved copy from `Services Content/`.

## Canonical Service Structure

The live service structure must match the header menu.

Tree Removal:

- `tree-removal`
- `crane-assisted-tree-removal`
- `dead-tree-removal`
- `hazardous-tree-removal`
- `tree-cutting-felling`

Emergency Tree Removal:

- `emergency-tree-removal`
- `emergency-storm-response`
- `fallen-tree-removal`
- `tree-on-house-removal`
- `tree-on-car-removal`

Land & Lot Clearing:

- `land-clearing`
- `brush-clearing`
- `debris-removal`
- `forestry-mulching`

Old service slugs should redirect through `src/data/serviceRedirects.ts`. Unknown unrelated service slugs should 404.

## Service Markdown Frontmatter

Every service markdown file in `src/content/services/` must start with YAML frontmatter:

```yaml
---
metaTitle: "Professional Tree Removal Services in South Carolina | SC Tree Experts"
metaDescription: "Safe, fully insured tree removal across SC. Our certified arborists handle hazardous, large, and emergency removals. Get a free estimate."
faqs:
  - question: "How much does tree removal cost?"
    answer: "Tree removal cost depends on tree size, access, condition, and risk. Request an on-site estimate for accurate pricing."
---
```

Required fields:

- `metaTitle`: title tag for search results.
- `metaDescription`: meta description for search results.
- `faqs`: array used by the service page FAQ section and FAQ schema.

Do not put `H1`, `Meta Title`, `Meta Description`, `URL Slug`, `Section 1`, or similar editorial labels in the markdown body. Those labels will show on the frontend if left in the content.

## Service Markdown Body

The page template provides the H1, hero, sidebar, form, related services, locations, and CTA. The markdown body should only contain the main article content.

Rules:

- Do not use `# H1`; the template already renders the H1.
- Start major content sections with `##`.
- Use `###` for subtopics.
- Use normal markdown lists for bullets.
- Avoid raw HTML unless there is a specific technical reason.
- Do not include form HTML, CTA blocks, breadcrumbs, hero text, or page layout notes in markdown.
- Phone numbers in `.prose` content are automatically converted to `tel:` links by the layout if they are not already linked.

Good body example:

```markdown
Tree removal is often necessary to protect a home, driveway, utility line, or nearby structure. Our certified arborist-led crews remove trees using controlled rigging, crane support when needed, and full debris cleanup.

## When Tree Removal Is Necessary

- The tree is dead or declining.
- The trunk is split, hollow, or leaning.
- Large limbs overhang a home, road, or power line.
- Storm damage has made the tree unstable.

## Our Tree Removal Process

We begin with a site assessment, identify hazards, set a safe work zone, remove the tree in controlled sections, and clean the property before final walkthrough.
```

## Service Images

Current service hero images are assigned in `src/data/services.ts` through the `image` property.

Current image locations:

- `public/images/services/residential-tree-removal.webp`
- `public/images/services/emergency-storm-response.webp`
- `public/images/services/land-clearing-grading.webp`
- `public/images/services/commercial-forestry.webp`

If adding new service images later:

1. Save optimized `.webp` files in `public/images/services/`.
2. Use descriptive lowercase filenames, for example `dead-tree-removal.webp`.
3. Keep file sizes reasonable. Aim for roughly 200 KB to 500 KB for hero images where possible.
4. Update the matching service entry in `src/data/services.ts`.
5. Do not change service URLs when changing images.
6. Build and visually check the affected service page and at least one city variant.

Service markdown images are not currently the preferred pattern. Hero images should be managed in `src/data/services.ts` unless the layout is intentionally changed to support inline service content images.

## Blog Content In Keystatic

Blog posts should be managed at `/keystatic`.

Keystatic collections:

- Authors: `src/content/authors/*`
- Categories: `src/content/categories/*`
- Tags: `src/content/tags/*`
- Blog posts: `src/content/posts/*`

Blog post fields:

- `title`: creates the post slug.
- `publishDate`: shown on blog pages.
- `draft`: hides the post everywhere and direct URL returns 404.
- `noindex`: renders the post but adds `robots=noindex,follow` and excludes it from sitemap.
- `author`: relationship to Authors.
- `category`: relationship to Categories.
- `tags`: relationship array to Tags.
- `featuredImage`: main image used on listings and post page.
- `ogImage`: optional social share image. If empty, featured image is used.
- `excerpt`: listing summary.
- `seoTitle`: post title tag.
- `seoDescription`: post meta description.
- `canonicalUrl`: optional canonical override.
- `content`: post body, including inline images.

## Blog Images

Keystatic uploads blog images into `public/images/blog/`.

Use this pattern:

- Featured image: upload through `featuredImage`.
- Social image: upload through `ogImage` only if it should differ from the featured image.
- Inline images: use the image tool inside the Keystatic document editor.

Recommended image guidance:

- Featured images should be landscape, ideally around 1200 x 630 or wider.
- OG images should be 1200 x 630 for social previews.
- Use real service/property/tree-care imagery where possible.
- Add meaningful surrounding text; the current image fields do not provide a separate alt text field, so the template uses the post title for featured image alt text.
- Optimize files before upload if they are very large.

## Taxonomy Pages

Category and tag archive pages exist:

- `/blog/category/[slug]/`
- `/blog/tag/[slug]/`

Only categories and tags attached to non-draft, indexable posts should appear in the sitemap.

## SEO Rules

- Draft posts should not appear anywhere.
- Noindex posts can render but should not appear in sitemap.
- Legacy service URLs should not appear in sitemap.
- Canonical service URLs and valid service-city URLs should remain indexable.
- Do not change indexed URL structures without adding redirects.
- Keep `/services/[service]/[city]/` and `/locations/[city]/` structures intact.

## Checks Before Publishing

Run:

```bash
npm run build
```

Then confirm:

- Service pages render the intended markdown file.
- Main service breadcrumbs are not duplicated.
- Subservice breadcrumbs include parent and child service.
- Blog posts respect draft/noindex settings.
- Featured images and OG images resolve correctly.
- Sitemap excludes redirects, drafts, noindex posts, and 404 routes.
