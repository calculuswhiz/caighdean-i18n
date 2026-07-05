// Scaffolds new chapter for kitajs

import * as fs from 'fs/promises';
import * as path from 'path';

// run with: bun ./scripts/scaffoldKitaJsChapter.ts "chapterName"

/** Creates structure and blank files for a new chapter */
async function scaffoldChapter(chapterName: string) {
  const chapterFolder = chapterName;
  const chapterPath = path.join('./translation-tsx', chapterFolder);
  await fs.mkdir(chapterPath, { recursive: true });

  const layoutPath = path.join(chapterPath, 'layout.tsx');
  await fs.writeFile(layoutPath, 
    `import { ChapterTemplate, HX, SampleBox, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const ${chapterName[0].toUpperCase() + chapterName.slice(1)} = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);
  
  return <ChapterTemplate
    title={chapterDb[]}
    chapterNumber={}
    docLang={props.docLang}>

  </ChapterTemplate>;
};
`, 'utf-8');
  const tablesPath = path.join(chapterPath, 'tables.tsx');
  await fs.writeFile(tablesPath, 
    `import { getCommonTranslator, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const TableTemplate = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return ;
};
`, 'utf-8');

  await fs.mkdir(path.join(chapterPath, 'dbs'), { recursive: true });
  const dbsPath = path.join(chapterPath, 'dbs');
  const enDbPath = path.join(dbsPath, 'en-US.tsx');
  await fs.writeFile(enDbPath, `import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <<InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  
};
`, 'utf-8');

  const gaDbPath = path.join(dbsPath, 'ga-IE.tsx');
  await fs.writeFile(gaDbPath, `import { ga_IE as ga_IE_Common } from "../../common/ga-IE";

export const ga_IE = {
  
};
`, 'utf-8');
}

const chapterName = process.argv[2];
if (!chapterName) {
  console.error("Please provide a chapter name as an argument.");
  process.exit(1);
}

scaffoldChapter(chapterName).catch(err => {
  console.error("Error scaffolding chapter:", err);
  process.exit(1);
});
