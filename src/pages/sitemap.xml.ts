import projects from '../data/projects.json';
import { getCollection } from 'astro:content';

export async function GET() {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const staticRoutes = ['', 'research', 'projects', 'publications', 'timeline', 'notes', 'cv'];
  const urls = [
    ...staticRoutes.map((route) => `https://yuanhaobai.com/${route}`),
    ...projects.map((project) => `https://yuanhaobai.com/projects/${project.slug}`),
    ...notes.map((note) => `https://yuanhaobai.com/notes/${note.id}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
