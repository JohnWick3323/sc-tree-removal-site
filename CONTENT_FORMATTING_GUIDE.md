# Content Formatting Guide

This guide outlines exactly how to format the Markdown files for the **Services** pages to ensure they render perfectly and maintain our SEO standards.

All service content is stored in `src/content/services/[slug].md`.

## 1. The Frontmatter (YAML)
Every service Markdown file MUST start with YAML frontmatter bounded by `---`. 

### Required Fields:
- `metaTitle`: The exact title tag used for Google SERPs (should be ~50-60 characters).
- `metaDescription`: The exact description tag used for Google SERPs (should be ~150-160 characters).
- `faqs`: An array of frequently asked questions. **Never use HTML tables for FAQs in the markdown body.** Use this YAML array instead. Our Astro components will automatically turn these into interactive accordions and inject FAQ Schema for Google.

### Example Frontmatter:
```yaml
---
metaTitle: "Professional Tree Removal Services in South Carolina | SC Tree Experts"
metaDescription: "Safe, fully-insured tree removal across SC. Our ISA-certified arborists specialize in hazardous, large, and emergency tree removals. Get a free estimate today."
faqs:
  - question: "How much does tree removal cost?"
    answer: "The cost varies depending on the tree's height, location, and condition. On average, standard removal ranges from $500 to $2,000. Contact us for a precise, free on-site estimate."
  - question: "Are you fully insured?"
    answer: "Yes, we carry comprehensive liability and workers' compensation insurance to protect your property and our crew completely."
---
```

## 2. The Markdown Body
Below the frontmatter is the main content. This content is injected into the primary text sections of the Astro template.

### Formatting Rules:
- **No HTML Tags:** Write strictly in Markdown. Do not use `<br>`, `<div>`, or `<table>`.
- **No Structural Markers:** Do not include notes like `--- END OF MAIN CONTENT ---` or `<!-- Section 1 -->`. The Astro templates split the layout dynamically; your markdown should just flow naturally.
- **Headings:** 
  - Do NOT use `# Heading 1`. The H1 is already provided by the Astro template.
  - Start with `## Heading 2` for major sections (e.g., `## Our Tree Removal Process`).
  - Use `### Heading 3` for sub-points.
- **Lists:** Use standard bullet points (`- `) for benefits and features.

### Example Markdown Body:

```markdown
Tree removal is often a necessary step to protect your home, ensure safety, and improve the overall health of your landscape. Our certified arborists use state-of-the-art equipment to safely dismantle trees of any size, even in tight spaces.

## Why Choose Us for Tree Removal?
- **Safety First:** We adhere to strict ISA safety protocols.
- **Clean Property Guarantee:** We leave your yard looking better than we found it.
- **Advanced Equipment:** From cranes to bucket trucks, we have the right tool for the job.

## The Removal Process
First, we assess the structural integrity of the tree and its proximity to your home. Next, our rigging experts strategically dismantle the canopy...
```

## 3. Blog Content (Keystatic)
Unlike Service pages, **Blog Posts** should be managed through the Keystatic Admin Panel by visiting `your-site.com/keystatic`. The CMS handles all the formatting automatically and saves the files perfectly structured to `src/content/posts/`.

If you do need to write a blog post manually, follow the same strict markdown rules and use the following frontmatter:
```yaml
---
title: Welcome to Our New Tree Care Blog
publishDate: '2026-06-24'
author: SC Tree Experts
category: News
tags:
  - Updates
excerpt: We are excited to launch our new tree care blog!
seoTitle: Welcome to Our New Tree Care Blog | SC Tree Removal Experts
seoDescription: We are excited to launch our new tree care blog! Expect expert advice from South Carolina's trusted arborists.
---
```
