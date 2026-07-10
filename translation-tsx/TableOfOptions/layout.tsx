import { Page, HX, type SupportedLocales } from "../bodyMatter";
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

export const TableOfOptions = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <Page
    title={chapterDb["TableOfOptionsTitle"]}
    docLang={props.docLang}>
    <HX level={1} navText="title" title={chapterDb["TableOfOptionsTitle"]}>
      <p>{chapterDb["p1"]}
      </p>
      <table className="options-table my-1">
        <caption>{chapterDb["TableCaption"]}
        </caption>
        <thead>
          <tr>
            <th>{chapterDb["Col1"]}
            </th>
            <th>{chapterDb["Col2"]}
            </th>
            <th>{chapterDb["Col3"]}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>{chapterDb["ch1-link"]}
            </td>
            <td>{chapterDb["Choice1A"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef1A"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["Choice1B"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef1B"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["ch3-link"]}
            </td>
            <td>{chapterDb["Choice3"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef3"]}
            </td>
          </tr>
          <tr>
            <td rowSpan={4}>{chapterDb["ch5-link"]}
            </td>
            <td>{chapterDb["Choice5A"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef5A"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["Choice5B"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef5B"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["Choice5C"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef5C"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["Choice5D"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef5D"]}
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>{chapterDb["ch7-link"]}
            </td>
            <td>{chapterDb["Choice7A"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef7A"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["Choice7B"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef7B"]}
            </td>
          </tr>
          <tr>
            <td rowSpan={3}>{chapterDb["ch9-link"]}
            </td>
            <td>{chapterDb["Choice9A"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef9A"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["Choice9B"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef9B"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["Choice9C"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef9C"]}
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>{chapterDb["ch11-link"]}
            </td>
            <td>{chapterDb["Choice11A"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef11A"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["Choice11B"]}
            </td>
            <td className="bg-stone-300">{chapterDb["CrossRef11B"]}
            </td>
          </tr>
        </tbody>
      </table>
    </HX>
  </Page>;
};
