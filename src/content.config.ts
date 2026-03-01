import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const menu = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/menu" }),
  schema: z.object({
    name: z.string(),
    price: z.string(),
    description: z.string().optional(),
    category: z.string(),
    type: z.enum(['hero', 'minimalist']),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { menu };
