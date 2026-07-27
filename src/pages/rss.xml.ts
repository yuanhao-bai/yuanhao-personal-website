import { getCollection } from 'astro:content';

const escape = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export async function GET() {
  const notes = (await getCollection('notes', ({ data }) => !data.draft))
    .sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());

  const items = notes.map((note) => `
    <item>
      <title>${escape(note.data.title)}</title>
      <link>https://yuanhaobai.com/notes/${note.id}</link>
      <guid>https://yuanhaobai.com/notes/${note.id}</guid>
      <pubDate>${note.data.published.toUTCString()}</pubDate>
      <description>${escape(note.data.description)}</description>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Yuanhao Bai — Research Notes</title>
    <link>https://yuanhaobai.com/notes</link>
    <description>Research notes on embedded AI, TinyML, and networked physical systems.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
}
