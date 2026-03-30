// Scaffolds new chapter for pug

import * as fs from 'fs/promises';
import * as path from 'path';

// run with: npx tsx ./scripts/scaffoldChapter.ts "chapterName"

/** Creates structure and blank files for a new chapter */
async function scaffoldChapter(chapterName: string) {
  const chapterFolder = chapterName;
  const chapterPath = path.join('./translation-pug', chapterFolder);
  await fs.mkdir(chapterPath, { recursive: true });

  const layoutPath = path.join(chapterPath, 'layout.pug');
  await fs.writeFile(layoutPath, `include ../bodyMatter.pug
include ./dbs/index.pug
include tables.pug`, 'utf-8');
  const tablesPath = path.join(chapterPath, 'tables.pug');
  await fs.writeFile(tablesPath, '', 'utf-8');

  await fs.mkdir(path.join(chapterPath, 'dbs'), { recursive: true });
  const dbsPath = path.join(chapterPath, 'dbs');
  const enDbPath = path.join(dbsPath, 'en.pug');
  await fs.writeFile(enDbPath, `include ../../tlMatter.pug
if docLang === 'EN'
  mixin tl(tlText)
    +inlineTl('EN', tlText)
    
  mixin tlDb(key)
    case key
      default
        - throw new Error(\`No content for \${key} (en.pug)\`)`, 'utf-8');

  const gaDbPath = path.join(dbsPath, 'ga.pug');
  await fs.writeFile(gaDbPath, `include ../../tlMatter.pug

mixin gaDb(key)
  case key
    default
      - throw new Error(\`No content for \${key} (ga.pug)\`)`, 'utf-8');
  const indexDbPath = path.join(dbsPath, 'index.pug');
  await fs.writeFile(indexDbPath, `include ../../common/index.pug
include en.pug
include ga.pug`, 'utf-8');
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
