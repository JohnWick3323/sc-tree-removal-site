# Developer Hand-Off Context
**Project:** South Carolina Tree Removal Experts (Astro + Keystatic)
**Last Updated:** June 2026

Welcome to the project! This document serves as a contextual guide for future developers and AI agents taking over the codebase. 

## 1. Project Architecture & Stack
- **Framework:** Astro 6.x
- **Styling:** Tailwind CSS 4
- **CMS / Blog Management:** Keystatic (configured for GitHub storage mode)
- **Deployment Strategy:** 100% Static Site Generation (`output: 'static'`) deployed on Cloudflare Pages.
- **Routing Structure:**
  - Standard Pages: `src/pages/index.astro`, `src/pages/contact.astro`, etc.
  - Service Pages: `src/pages/services/[service].astro`
  - Location + Service Pages: `src/pages/services/[service]/[...city].astro` (Generates thousands of location-specific service pages).
  - Blog Pages: `src/pages/blog/index.astro` and `src/pages/blog/[slug].astro`.

## 2. Recent Major Updates (June 2026)

### Service Markdown Clean-up
We recently conducted a massive audit of all 14 service files located in `src/content/services/*.md`. 
- **Removed Structural Noise:** All raw HTML tags, old structural notes (like `--- END OF SECTION ---`), and non-standard markdown artifacts were scrubbed.
- **FAQ Migration:** FAQs were previously written in messy HTML tables inside the markdown body. These were completely migrated into a clean YAML array field (`faqs`) inside the frontmatter of each file. The Astro components automatically map over this YAML to render structured FAQ accordions and inject JSON-LD Schema.

### SEO Data Hierarchy
We fixed a critical SEO overriding issue. Previously, `src/pages/services/[service].astro` was hardcoded to use generic meta descriptions from `src/data/services.ts`. 
- **Current Logic:** The `[service].astro` and `[...city].astro` templates now properly prioritize `markdown.frontmatter.metaTitle` and `markdown.frontmatter.metaDescription` over the generic data if they exist.

### Keystatic Blog Integration
We integrated Keystatic to allow non-technical staff and SEO personnel to manage the blog.
- **Configuration:** `keystatic.config.ts` is configured in **GitHub Mode** (`kind: 'github'`) for production. This allows the `/keystatic` admin panel to work on the static site by communicating directly with the GitHub repo.
- **Local Dev:** It runs in `local` mode when using `npm run dev` to save markdown files directly to the filesystem (`src/content/posts`).

## 3. Key Data Flow
- **`src/data/services.ts`:** The source of truth for the list of services, their pillars, slugs, and fallback SEO data.
- **`src/content/services/*.md`:** Contains the actual page content (Main Body, Service Process) and specific SEO overrides (Frontmatter).
- **`src/data/locations.ts`:** Used to dynamically generate location-based programmatic SEO pages.

## 4. Next Steps / Pending
- Connect Keystatic to the GitHub App (requires creating a GitHub App on the client's repo and setting the environment variables for Keystatic OAuth).
- The site is fully verified. `npm run build` runs successfully and generates ~2800 static pages in ~4 minutes.
