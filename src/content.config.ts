import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    role: z.string().default('ISA Certified Arborist'),
    avatar: z.string().optional(),
    bio: z.string().optional(),
  })
});

const categoriesCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/categories" }),
  schema: z.object({
    name: z.string(),
  })
});

const tagsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/tags" }),
  schema: z.object({
    name: z.string(),
  })
});

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.string().or(z.date()).transform((val) => new Date(val)),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    noindex: z.boolean().default(false),
    featuredImage: z.string().optional(),
    ogImage: z.string().optional(),
    excerpt: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    canonicalUrl: z.string().optional(),
  })
});

export const collections = {
  'authors': authorsCollection,
  'categories': categoriesCollection,
  'tags': tagsCollection,
  'posts': postsCollection,
};
