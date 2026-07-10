import { type SupportedLocales } from "../bodyMatter";
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

const LinkContainer = (props: { href: string; className: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full font-bold">
      <a
        href={props.href}
        className={`cursor-pointer hover:brightness-120 hover:pl-2 grow p-1 m-1 ${props.className}`}
      >
        {props.children}
      </a>
    </div>
  );
};

export const Index = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);

  return <html lang={props.docLang}>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{chapterDb["documentTitle"]}
      </title>
      <link rel="stylesheet" href="/src/index.css" />
    </head>
    <body>
      <div id="root"><a id="menu-link" href="../../index.html">&uarr;</a>
        <div className="max-w-[900px] pl-1 pt-1">
          <header className="border-b-1 border-black text-center bg-green-100">
            <h1 className="text-2xl font-bold">{chapterDb["bookTitle"]}
            </h1>
            <h2 className="text-xl mb-1"> {chapterDb["bookSubtitle"]}
            </h2>
            <p> {chapterDb["bookAbout"]}
            </p>
            <p> {chapterDb["bookPublisherInfo"]}
            </p>
          </header><b>{chapterDb["chapterSelection"]}</b><br />
          <div className="flex flex-col flex-wrap border-1 border-dashed border-black mb-1" id="chapter-select">
            <LinkContainer className="bg-purple-800 text-white" href="./preface.html">{chapterDb["prefaceTitle"]}
            </LinkContainer>
            <LinkContainer className="bg-purple-800 text-white" href="./advisoryCommittee.html">{chapterDb["advisoryCommittee"]}
            </LinkContainer>
            <LinkContainer className="bg-purple-800 text-white" href="./prefaceOfFirstEdition.html">{chapterDb["preface1stEd"]}
            </LinkContainer>
            <LinkContainer className="bg-purple-800 text-white" href="./grammarNotes.html">{chapterDb["abbrevAndGrammarTitle"]}
            </LinkContainer>
            <LinkContainer className="bg-blue-950 text-white" href="./chapter1.html">{chapterDb["Chapter1"]}
            </LinkContainer>
            <LinkContainer className="bg-orange-600 text-white" href="./chapter2.html">{chapterDb["Chapter2"]}
            </LinkContainer>
            <LinkContainer className="bg-lime-300 text-black" href="./chapter3.html">{chapterDb["Chapter3"]}
            </LinkContainer>
            <LinkContainer className="bg-yellow-300 text-black" href="./chapter4.html">{chapterDb["Chapter4"]}
            </LinkContainer>
            <LinkContainer className="bg-red-600 text-white" href="./chapter5.html">{chapterDb["Chapter5"]}
            </LinkContainer>
            <LinkContainer className="bg-sky-600 text-white" href="./chapter6.html">{chapterDb["Chapter6"]}
            </LinkContainer>
            <LinkContainer className="bg-pink-600 text-white" href="./chapter7.html">{chapterDb["Chapter7"]}
            </LinkContainer>
            <LinkContainer className="bg-green-700 text-white" href="./chapter8.html">{chapterDb["Chapter8"]}
            </LinkContainer>
            <LinkContainer className="bg-fuchsia-900 text-white" href="./chapter9.html">{chapterDb["Chapter9"]}
            </LinkContainer>
            <LinkContainer className="bg-amber-400 text-black" href="./chapter10.html">{chapterDb["Chapter10"]}
            </LinkContainer>
            <LinkContainer className="bg-blue-950 text-white" href="./chapter11.html">{chapterDb["Chapter11"]}
            </LinkContainer>
            <LinkContainer className="bg-purple-800 text-white" href="./tableOfOptions.html">{chapterDb["tableOfOptions"]}
            </LinkContainer>
            <LinkContainer className="bg-purple-800 text-white" href="./bookIndex.html">{chapterDb["index"]}
            </LinkContainer>
          </div>
          <footer className="fixed bottom-0 w-[100%] p-2 border-y-1 border-black bg-white">{commonDb["footerDisclaimer"]}
          </footer>
        </div>
      </div>
    </body>
  </html>;
};
