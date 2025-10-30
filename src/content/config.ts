import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		publishedAt: z.date(),
		description: z.string(),
		tech: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		links: z
			.object({
				live: z.string().url().optional(),
				source: z.string().url().optional(),
			})
			.partial()
			.optional(),
	}),
});

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		publishedAt: z.date(),
		summary: z.string(),
		tags: z.array(z.string()).default([]),
	}),
});

const experience = defineCollection({
	schema: z.object({
		title: z.string(),
		role: z.string(),
		company: z.string(),
		startDate: z.date(),
		endDate: z.date().optional(),
		location: z.string().optional(),
		summary: z.string(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { projects, blog, experience };
