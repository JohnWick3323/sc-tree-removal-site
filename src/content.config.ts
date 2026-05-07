import { defineCollection, z, reference } from 'astro:content';
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

const blogsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/blogs" }),

  schema: z.object({
    title: z.string(),
    author: reference('authors'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
    description: z.string().optional(),
  })
});

export const collections = {
  'authors': authorsCollection,
  'blogs': blogsCollection,
};
