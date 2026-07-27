import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'yuanhao-personal-website';
const base = `/${repository}`;
const output = fileURLToPath(new URL('../dist/', import.meta.url));

async function rewrite(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewrite(path);
      continue;
    }
    if (extname(entry.name) !== '.html') continue;

    const source = await readFile(path, 'utf8');
    const prefixed = source
      .replaceAll('href="/', `href="${base}/`)
      .replaceAll('src="/', `src="${base}/`);
    await writeFile(path, prefixed);
  }
}

await rewrite(output);
