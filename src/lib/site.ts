import { getCollection, type CollectionEntry } from 'astro:content';

export const site = {
  name: 'Yeongtaek Lim',
  nameKo: '임영택',
  email: 'yeongtaek1337@gmail.com',
  city: 'Seoul',
  statement:
    'Computational social scientist, curator and critic. I study how platforms, data and work reorganise social life — in research, in exhibitions, and in writing.',
  statementKo: '계산사회과학 연구자, 전시기획자, 비평가.',
  updated: 'Oct 2026',
};

export type SectionKey = 'research' | 'curatorial' | 'criticism';

export const sections: {
  key: SectionKey;
  label: string;
  labelKo: string;
  intro: string;
}[] = [
  {
    key: 'research',
    label: 'Research',
    labelKo: '연구',
    intro:
      'Computational social science on online conflict, occupational discourse and the social impacts of generative AI. Text analysis, network analysis, LLM pipelines and interviews, mostly on Korean data.',
  },
  {
    key: 'curatorial',
    label: 'Curatorial',
    labelKo: '기획',
    intro:
      'Four exhibitions since 2022, each selected through an open call. They take the material basis of the digital — servers, dyes, population data, platform metrics — and put it in a room.',
  },
  {
    key: 'criticism',
    label: 'Criticism',
    labelKo: '비평',
    intro:
      'Art criticism and columns written in Korean for Art in Culture, PONG, Critic-al and Karts News, plus invited talks. English abstracts; original texts linked where available.',
  },
];

export const sectionByKey = Object.fromEntries(sections.map((s) => [s.key, s])) as Record<
  SectionKey,
  (typeof sections)[number]
>;

export type Work = CollectionEntry<SectionKey>;
export type WorkWithSection = { section: SectionKey; entry: Work };

const byDateDesc = (a: Work, b: Work) => b.data.date.getTime() - a.data.date.getTime();

export async function getSection(key: SectionKey): Promise<Work[]> {
  const items = await getCollection(key, ({ data }) => !data.draft);
  return items.sort(byDateDesc);
}

export async function getAllWork(): Promise<WorkWithSection[]> {
  const lists = await Promise.all(sections.map(async (s) => (await getSection(s.key)).map((entry) => ({ section: s.key, entry }))));
  return lists.flat().sort((a, b) => byDateDesc(a.entry, b.entry));
}

export async function getCounts(): Promise<Record<SectionKey, number>> {
  const out = {} as Record<SectionKey, number>;
  for (const s of sections) out[s.key] = (await getSection(s.key)).length;
  return out;
}

/** Prefix a site-relative path with the configured base (for GitHub Pages sub-paths). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function year(d: Date): string {
  return String(d.getFullYear());
}
