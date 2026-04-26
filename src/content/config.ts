import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum([
      'Engineering Leadership',
      'Production Systems',
      'AI & Developer Experience',
      'Career & Growth',
    ]),
  }),
});

export const collections = { blog };