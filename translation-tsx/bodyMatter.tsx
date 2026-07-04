import { range } from "./util";
import { en_US } from "./common/en-US";
import { ga_IE } from "./common/ga-IE";

const commonDictionaries = { en_US, ga_IE };

export type SupportedLocales = keyof typeof commonDictionaries;

export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const AutoColGroup = (props: {
  ratios: number[];
}) => {
  const total = props.ratios.reduce((a, b) => a + b, 0);
  return <colgroup>
    {props.ratios.map((ratio) =>
      <col style={{ width: `${ratio / total * 100}%` }} />)
    }
  </colgroup>;
};

export const Page = (props: {
  title: React.ReactNode;
  chapterClass?: string;
  children: React.ReactNode;
  docLang: string;
}) => {
  const renderCommon = (key: keyof typeof commonDictionaries['ga_IE']) => {
    return getCommonTranslator(props.docLang as SupportedLocales)[key]
      ?? key;
  };

  return <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title}</title>
      <link rel="stylesheet" href="/src/index.css" />
    </head>
    <body className={props.chapterClass}>
      <header>
        <div id="home-menu-container">
          <a id="menu-link" href="./index.html">
            {renderCommon('menu')}
          </a>
        </div>
      </header>
      <div id="toc-container" className="border p-4 mb-6 bg-gray-100">
        <div className="toc-title text-xl font-bold mb-4 select-none">
          {renderCommon('tableOfContents')}
          <span id="toc-toggle" className="text-sm ml-4 cursor-pointer text-blue-700">
            [+/-]
          </span>
          <ul className="hidden"></ul>
        </div>
      </div>
      {props.children}
      <footer className="fixed bottom-0 w-[100%] p-2 border-y-1 border-black bg-white">
        {renderCommon('footerDisclaimer')}
      </footer>
      <script type="module" src="/src/chapterScripts.ts"></script>
    </body>
  </html>;
};

/** Sampleboxes for example sentences. If the document is not in Irish, the Irish version of the sentence is also included in the box for reference.
  - samplePrefix is the prefix for the keys to retrieve (e.g. "8-1-1-sample")
  - sampleCount is the number of sentences to include
  - startAt is the number to start at (default 1)
    This is useful if you have samples interrupted by other content */
export const SampleBox = (props: {
  samplePrefix: string,
  sampleCount: number;
  startAt?: number;
  docLang: string;
  tlDb: Record<string, string | React.JSX.Element>;
  gaDb: Record<string, string | React.JSX.Element>;
}) => {
  const startAt = props.startAt ?? 1;
  return <table className="samplebox my-1">
    <tbody>
      {
        range(startAt, startAt + props.sampleCount - 1)
          .map((row) => (
            <tr key={row}>
              {props.docLang === 'ga_IE' ? (
                <td className="bg-stone-100 border-1 border-[rgba(0,0,0,0.1)] p-1">
                  {props.gaDb[`${props.samplePrefix}${row}`]}
                </td>
              ) : (
                <>
                  <td className="bg-stone-100 border-1 border-[rgba(0,0,0,0.1)] p-1">
                    {props.gaDb[`${props.samplePrefix}${row}`]}
                  </td>
                  <td className="bg-stone-100 border-1 border-[rgba(0,0,0,0.1)] p-1">
                    {props.tlDb[`${props.samplePrefix}${row}`]}
                  </td>
                </>
              )}
            </tr>
          ))
      }
    </tbody>
  </table>
};

export const ChapterTemplate = (props: {
  title: React.ReactNode;
  chapterNumber: number;
  docLang: SupportedLocales;
  children: React.ReactNode;
}) => {
  return <Page title={props.title}
    docLang={props.docLang}>
    {props.children}
  </Page>;
};

/** Normal chapter content table (e.g. Table 1A)
 * Puts in a caption too.
 */
export const MarkedTable = (props: {
  chapter: number;
  tableLetter: string;
  caption: React.ReactNode;
  children: React.ReactNode;
  docLang: SupportedLocales;
}) => {
  const renderCommon = (key: keyof typeof commonDictionaries['ga_IE']) => {
    return getCommonTranslator(props.docLang)[key]
      ?? key;
  };

  return <table
    className={`chapter-${props.chapter}`}
    id={`table${props.chapter}${props.tableLetter}`}
  >
    <caption>
      <b className="pr-2">
        {renderCommon('Tábla')}
        &nbsp;{props.chapter}{props.tableLetter}
      </b>
      {props.caption}
    </caption>
    {props.children}
  </table>;
};

/** Generates heading element. Comes with id, anchor link
  - The id is formatted as as sec_ + navText with dots replaced by underscores
  If normal navText is provided (1.2.3, etc.), 
    - the navText is displayed before the title text
  In the case where the navText contains .gp$x-$y
    - do not display navText before title text */
export const HX = (props: {
  level: 1 | 2 | 3 | 4 | 5;
  navText: string;
  title?: string | React.JSX.Element;
  children: React.ReactNode;
}) => {
  const isSectionGrouping = props.navText.includes('.gp');
  const id = props.navText != ""
    ? `sec_${props.navText.replace(/\./g, '_')}`
    : undefined;
  const tagName = `h${props.level}` as const;

  return <>
    {/* @ts-ignore */}
    <tag of={tagName} id={id}>
      {/* Anchor links */}
      <a href={`#${id}`}
        className="mx-2 text-blue-400 hover:text-blue-600 cursor-pointer select-none"
      >#</a>
      <span className="heading-title">
        {props.level > 1
          && !isSectionGrouping
          && <span className="section-number">{props.navText}</span>}
        {(props.navText ?? "") !== ""
          && !isSectionGrouping
          && (props.title ?? "") !== ""
          && <span className="section-title">&nbsp;</span>}
        {(props.title ?? "") !== ""
          && <span className="title-text">{props.title}</span>}
      </span>
      {/* @ts-ignore */}
    </tag>
    {
      props.level === 1
        ? <main>
          {props.children}
        </main>
        : <section className="pl-1 border-l-3 border-gray-200">
          {props.children}
        </section>
    }
  </>;
};

export const InlineTl = (props: {
  lang: string;
  tlText: string;
  children?: React.ReactNode;
}) => {
  // Since we're specifying locales, e.g. "en-US"
  const lang = props.lang.split("-")[0].toUpperCase();
  if (props.tlText != null) {
    return <span>
      (<b>{lang}</b>: <i>{props.tlText}</i>)
    </span>;
  } else {
    return <span>
      (<b>{lang}</b>: <i>{props.children}</i>)
    </span>;
  }
};
