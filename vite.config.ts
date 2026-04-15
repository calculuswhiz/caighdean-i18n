import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import * as fs from 'fs/promises';
import * as path from 'path';

const htmlFiles = await fs.readdir('./entrypoints', { withFileTypes: true, recursive: true })
  .then(files => files.filter(f => f.isFile() && f.name.endsWith('.html')));

const entryPoints: Record<string, string> = {};
for (const file of htmlFiles) {
  const name = file.name.replace('.html', '');
  const lang = file.parentPath.split(path.sep).at(-1);
  entryPoints[`${lang}_${name}`] = resolve(__dirname, `${file.parentPath}/${file.name}`);
}

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [tailwindcss()],
  assetsInclude: ['**/*.adoc'],
  build: {
    // GH stupidly doesn't let you change this, so I guess we just go with this...
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),

        ...entryPoints
      }
    }
  }
})
