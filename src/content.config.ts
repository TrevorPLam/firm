import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    locale: z.string().default('en'),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    locale: z.string().default('en'),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    service: z.string(),
    outcome: z.string(),
    resultMetric: z.string(),
    pubDate: z.date(),
    heroImage: z.string().optional(),
    locale: z.string().default('en'),
  }),
});

export const collections = { blog, services, caseStudies };
