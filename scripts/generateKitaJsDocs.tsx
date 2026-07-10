import * as fs from 'fs/promises';
import { Preface } from '../translation-tsx/Preface/layout';
import { AdvisoryCommittee } from '../translation-tsx/AdvisoryCommittee/layout';
import { PrefaceOfFirstEdition } from '../translation-tsx/PrefaceOfFirstEdition/layout';
import { GrammarNotes } from '../translation-tsx/GrammarNotes/layout';
import { Chapter1 } from '../translation-tsx/chapter1/layout';
import { Chapter2 } from '../translation-tsx/chapter2/layout';
import { Chapter3 } from '../translation-tsx/chapter3/layout';
import { Chapter4 } from '../translation-tsx/chapter4/layout';
import { Chapter5 } from '../translation-tsx/chapter5/layout';
import { Chapter6 } from '../translation-tsx/chapter6/layout';
import { Chapter7 } from '../translation-tsx/chapter7/layout';
import { Chapter8 } from '../translation-tsx/chapter8/layout';
import { Chapter9 } from '../translation-tsx/chapter9/layout';
import { Chapter10 } from '../translation-tsx/chapter10/layout';
import { Chapter11 } from '../translation-tsx/chapter11/layout';
import { TableOfOptions } from '../translation-tsx/TableOfOptions/layout';
import { BookIndex } from '../translation-tsx/BookIndex/layout';
import { Index } from '../translation-tsx/Index/layout';

// Add more as needed
const locales = ["en_US", "ga_IE"] as const;
const devMode = process.argv.includes("--dev");

async function generateKitaJsDocs() {
  const timeStart = performance.now();
  for (const locale of locales) {
    const targets = {
      index: <Index docLang={locale} />,

      preface: <Preface docLang={locale} />,
      advisoryCommittee: <AdvisoryCommittee docLang={locale} />,
      prefaceOfFirstEdition: <PrefaceOfFirstEdition docLang={locale} />,
      grammarNotes: <GrammarNotes docLang={locale} />,
      chapter1: <Chapter1 docLang={locale} />,
      chapter2: <Chapter2 docLang={locale} />,
      chapter3: <Chapter3 docLang={locale} />,
      chapter4: <Chapter4 docLang={locale} />,
      chapter5: <Chapter5 docLang={locale} />,
      chapter6: <Chapter6 docLang={locale} devMode={devMode} />,
      chapter7: <Chapter7 docLang={locale} />,
      chapter8: <Chapter8 docLang={locale} />,
      chapter9: <Chapter9 docLang={locale} />,
      chapter10: <Chapter10 docLang={locale} />,
      chapter11: <Chapter11 docLang={locale} />,
      tableOfOptions: <TableOfOptions docLang={locale} />,
      bookIndex: <BookIndex docLang={locale} />,
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
