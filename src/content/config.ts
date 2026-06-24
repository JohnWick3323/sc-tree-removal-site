import { defineCollection, z } from 'astro:content';

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string().default('ISA Certified Arborist'),
    avatar: z.string().optional(),
    bio: z.string().optional(),
  }),
});

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
  }),
});

const tags = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.string().or(z.date()).transform((val) => new Date(val)),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featuredImage: z.string().optional(),
    excerpt: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    canonicalUrl: z.string().optional(),
  }),
});

export const collections = {
  authors,
  categories,
  tags,
  posts,
};
