# Developer Handoff & Project Context

## Project Overview
This is an Astro-based static site with Keystatic integration for the blog and content management. The site is optimized for SEO and deployed on Cloudflare Pages.

## Work Completed
- **SEO Audit & Fixes**: Implemented optimized Meta Titles and Descriptions across all service and location pages.
- **Keystatic Blog Integration**: Configured `keystatic.config.ts` to manage blog posts via GitHub mode for production and local mode for development.
- **Formatting Standardization**: Updated content files (MD/MDX) to strictly follow the defined formatting rules, eliminating redundancy and ensuring a clean UI.
- **Mega Menu Cleanup**: Removed redundant service names from `Header.astro` to provide a cleaner navigation experience.
- **Build Infrastructure**: Migrated deployment adapter from Vercel to Cloudflare. Fixed `.wrangler` cache conflicts and removed `pages_build_output_dir` from `wrangler.toml` to resolve Cloudflare Pages deployment errors.
- **Unused Code Removal**: Cleaned up unused imports and dead code using automated tools.

## Formatting Guide for Content Files
When creating or updating location or service pages, adhere to the following frontmatter and markdown structure:

### 1. Frontmatter (SEO and Metadata)
Every markdown file must contain a complete frontmatter block with exact key names:

```yaml
---
name: 'Location or Service Name'
title: 'Optimized Meta Title | South Carolina Tree Removal'
description: 'Optimized Meta Description (150-160 characters).'
county: 'County Name' # (Only for location pages)
---
```
*Note: Do NOT include `faq` or `sections` in the frontmatter. All content must be written in the markdown body using the structure below.*

### 2. Markdown Body Structure
The body must strictly follow this H2 (`##`) heading structure. Do not use H1 (`#`) as the layout automatically generates it.

#### A. Main Content Section
Start immediately with the content, using `##` for section headers if needed.
```markdown
## Expert Tree Services in [Location]
Content goes here...
```

#### B. FAQs Section
The FAQ section must be clearly demarcated with the `## FAQs` heading. Each question must be an H3 (`###`), followed immediately by the answer paragraph.

```markdown
## FAQs

### What is the average cost of tree removal?
The average cost ranges from $385 to $2,000 depending on the tree size and location.

### Do I need a permit?
Permit requirements vary by county. Always check local regulations before proceeding.
```

## Deployment Notes (Cloudflare Pages)
- **Adapter**: Uses `@astrojs/cloudflare`.
- **Output Mode**: Configured as `output: 'static'` in `astro.config.mjs`. Astro prerenders all pages by default but leaves API routes (like Keystatic) to run via SSR.
- **Cloudflare Dashboard**: The "Build output directory" in the Cloudflare Pages dashboard should be set to `dist` (if using v13 of the adapter) or `dist/client`. If you encounter a `config.json` error, ensure `pages_build_output_dir` is omitted from `wrangler.toml` to prevent binding conflicts.
- **Environment Variables**: `PUBLIC_GOOGLE_MAPS_KEY` is in `wrangler.toml`. Sensitive keys (like `RESEND_API_KEY`) must be added as secrets via the Cloudflare Dashboard.

## Running Locally
```bash
# Start development server (with Keystatic local mode)
npm run dev

# Build the project
npm run build
```
