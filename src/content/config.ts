import { defineCollection, z } from 'astro:content';

const articoli = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        category: z.string().default('Generale'),
        author: z.string().default('Rocco Andrea Ligorio'),
        bsLevel: z.number().optional().default(0), // For the Bullshit Detector
        draft: z.boolean().optional().default(false),
        image: z.string().optional(),
    }),
});

export const collections = {
    'articoli': articoli,
};
