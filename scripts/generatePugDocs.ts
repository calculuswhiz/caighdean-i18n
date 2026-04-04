import * as pug from 'pug';
import * as fs from 'fs/promises';
import * as path from 'path';

// TODO Build mode script

const translationRoot = "./translation-pug";
const devMode = process.argv.includes("--dev");

function render(layoutPath: string, lang: string) {
  const options = {
    docLang: lang,
    pretty: true,
    rootRef: devMode ? "/" : "/caighdean-i18n/"
  };
  return pug.renderFile(layoutPath, options);
}

/** Scan chapters and languages, compile Pug files, and write to entrypoints. */
async function generatePugDocs() {
  if (process.argv.includes("--watch")) {
    console.log("Watching for changes...");
    const watcher = fs.watch(translationRoot, { recursive: true });
    for await (const event of watcher) {
      if (
        event.filename == null
        || !event.filename.endsWith(".pug")
        // Ignore db files
        || path.dirname(event.filename).endsWith("dbs")) {
        continue;
      }

      console.log(`File changed: ${event.filename}`);

      // Regenerate the document for the changed chapter
      const chapterFolder = path.dirname(event.filename);
      // EN, GA, etc
      const availableLangs = (await fs.readdir(
        path.join(translationRoot, chapterFolder, "dbs")
      )).filter(file => file !== "index.pug").map(
        file => path.parse(file).name
          .toUpperCase()
          .replace(/\.pug$/, "")
      );

      for (const lang of availableLangs) {
        const layoutPath = path.join(translationRoot, chapterFolder, "layout.pug");
        // console.log(layoutPath);
        try {
          const result = render(layoutPath, lang);
          await fs.writeFile(
            `./entrypoints/${lang}/${chapterFolder.toLocaleLowerCase()}-pug.html`,
            result,
            "utf-8"
          );
        } catch (err) {
          console.error((err as Error).message);
          continue;
        }
      }
    }
  } else {
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
        // console.log(layoutPath);
        const result = render(layoutPath, lang);
        await fs.writeFile(
          `./entrypoints/${lang}/${chapterFolder.name.toLocaleLowerCase()}-pug.html`,
          result,
          "utf-8"
        );
      }
    }
  }

}

generatePugDocs().catch(err => {
  console.error("Error generating Pug docs:", err);
  process.exit(1);
});