import { defineCollection, z } from 'astro:content';

const tournaments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    urlSlug: z.string(),
    dates: z.string().optional(),
    format: z.string().optional(),
    entryFee: z.string().optional(),
    summary: z.string(),
    defendingChampion: z.string().optional(),
    champions: z
      .array(
        z.object({
          year: z.string(),
          name: z.string(),
          partner: z.string().optional(),
          notes: z.string().optional(),
        })
      )
      .optional(),
    order: z.number().default(0),
  }),
});

const history = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { tournaments, history };
