// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yuanhao-bai.github.io/yuanhao-personal-website',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
