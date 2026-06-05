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


export const collections = {
  'authors': authorsCollection,
};
