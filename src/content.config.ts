import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One schema for all three practices so the home index can merge them.
const workSchema = ({ image }: { image: () => z.ZodTypeAny }) =>
  z.object({
    title: z.string(),
    titleKo: z.string().optional(),
    type: z.string(),            // Exhibition, Thesis, Report, Presentation, Pipeline, Article, Talk, Column…
    role: z.string(),            // Curator, Researcher, Critic, Research Assistant…
    date: z.coerce.date(),       // used for sorting
    dateLabel: z.string(),       // what is displayed, e.g. "Sep 2026" or "22 Sep – 29 Oct 2023"
    venue: z.string().optional(),      // museum, gallery, institution, publisher
    location: z.string().optional(),   // city
    collaborators: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    cover: image().optional(),
    coverCaption: z.string().optional(),
    summary: z.string(),         // one or two sentences for lists
    featured: z.boolean().default(false),
    pinned: z.boolean().default(false),   // pinned entries sort first within their section and the index
    draft: z.boolean().default(false),
  });

const mk = (name: string) =>
  defineCollection({
    loader: glob({ pattern: '*.md', base: `./src/content/${name}` }),
    schema: workSchema,
  });

export const collections = {
  research: mk('research'),
  curatorial: mk('curatorial'),
  criticism: mk('criticism'),
};
