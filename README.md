# Yuanhao Bai — Research Portfolio

Personal academic website for PhD applications, research collaboration, and communication
with prospective supervisors. Built with Astro and structured content files so that research
records can grow without redesigning pages.

## Local development

```sh
npm install
npm run dev
```

Build and preview the production version:

```sh
npm run build
npm run preview
```

## Updating content

Most recurring updates only require editing files in `src/data/`:

- `profile.json` — affiliation, contact details, and academic links
- `research.json` — research agenda and topic clusters
- `projects.json` — projects, methods, stacks, results, and repository URLs
- `timeline.json` — positions, milestones, awards, and outputs
- `publications.json` — papers, patents, preprints, and status
- `awards.json` — honours and awards

Research notes are Markdown files in `src/content/notes/`. Add a new file with the same
frontmatter fields as the existing examples; Astro generates its page automatically.

## Deployment

The site is fully static and uses `https://yuanhaobai.com` as its canonical origin.
The production host should run `npm run build` and publish `dist/`.

Before public launch, add verified contact and academic-profile URLs in `profile.json`.
