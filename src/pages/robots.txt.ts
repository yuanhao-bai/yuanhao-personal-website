export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://yuanhao-bai.github.io/yuanhao-personal-website/sitemap.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
}
