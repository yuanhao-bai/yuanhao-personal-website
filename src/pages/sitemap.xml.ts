import projectData from '../data/projects.json';
import { getCollection } from 'astro:content';

export async function GET() {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const site = 'https://yuanhao-bai.github.io/yuanhao-personal-website';
  const staticRoutes = ['', 'research', 'projects', 'publications', 'timeline', 'notes', 'cv'];
  const urls = [
    ...staticRoutes.map((route) => `${site}/${route}`),
    ...projectData.items.map((project) => `${site}/projects/${project.slug}`),
    ...notes.map((note) => `${site}/notes/${note.id}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
