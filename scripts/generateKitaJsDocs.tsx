import * as fs from 'fs/promises';
import * as path from 'path';
import { Chapter1 } from '../translation-tsx/chapter1/layout';
import { Chapter2 } from '../translation-tsx/chapter2/layout';
import { Chapter3 } from '../translation-tsx/chapter3/layout';
import { Chapter4 } from '../translation-tsx/chapter4/layout';
import { Chapter5 } from '../translation-tsx/chapter5/layout';

// Add more as needed
const locales = ["en_US", "ga_IE"] as const;
const devMode = process.argv.includes("--dev");

async function generateKitaJsDocs() {
  const timeStart = performance.now();
  for (const locale of locales) {
    const targets = {
      chapter1: <Chapter1 docLang={locale} />,
      chapter2: <Chapter2 docLang={locale} />,
      chapter3: <Chapter3 docLang={locale} />,
      chapter4: <Chapter4 docLang={locale} />,
      chapter5: <Chapter5 docLang={locale} />
    };
    for (const [key, target] of Object.entries(targets)) {
      await fs.writeFile(
        `./entrypoints/${locale}/${key}.html`,
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
