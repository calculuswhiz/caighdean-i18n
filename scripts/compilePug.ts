import * as pug from 'pug';

const file = process.argv[2];
const docLang = process.argv[3];
// console.log(`Compiling ${file} for language ${docLang}...`);

const result = pug.renderFile(file, { docLang, pretty: true });

console.log(result);
