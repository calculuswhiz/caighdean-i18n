import * as fs from 'fs/promises';
import * as path from 'path';
import { Chapter1 } from '../translation-tsx/chapter1/layout';

// Add more as needed
const locales = ["en_US", "ga_IE"] as const;
const devMode = process.argv.includes("--dev");

async function generateKitaJsDocs() {
  const timeStart = performance.now();
  for (const locale of locales) {
    const targets = [
      <Chapter1 docLang={locale} />
    ];
    for (const target of targets) {
      await fs.writeFile(
        `./entrypoints/${locale}/chapter1.html`,
        target.toString(),
        "utf-8"
      );
    }
  }
  const timeEnd = performance.now();
  console.log(`Generated KitaJS docs in ${(timeEnd - timeStart).toFixed(2)} ms`);
}

generateKitaJsDocs().catch(err => {
  console.error(err);
  process.exit(1);
});
