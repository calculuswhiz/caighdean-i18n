import * as pug from 'pug';
import * as fs from 'fs/promises';
import * as path from 'path';

/* TODO dev flag
   TODO watch/all flags
   TODO Add ids to lists (may do this in pug files)
*/

const translationRoot = "./translation-pug";

/** Scan chapters and languages, compile Pug files, and write to entrypoints. */
async function generatePugDocs() {
  const chapterFolders = (await fs.readdir(translationRoot, { withFileTypes: true }))
    .filter(ent => ent.isDirectory() && ent.name !== "common");
  for (const chapterFolder of chapterFolders) {
    // EN, GA, etc
    const availableLangs = (await fs.readdir(
      path.join(translationRoot, chapterFolder.name, "dbs")
    )).filter(file => file !== "index.pug").map(
      file => path.parse(file).name
        .toUpperCase()
        .replace(/\.pug$/, "")
    );

    for (const lang of availableLangs) {
      const layoutPath = path.join(translationRoot, chapterFolder.name, "layout.pug");
      const result = pug.renderFile(layoutPath, {
        docLang: lang,
        pretty: true
      });
      await fs.writeFile(
        `./entrypoints/${lang}/${chapterFolder.name.toLocaleLowerCase()}-pug.html`,
        result,
        "utf-8"
      );
    }
  }
}

generatePugDocs().catch(err => {
  console.error("Error generating Pug docs:", err);
  process.exit(1);
});