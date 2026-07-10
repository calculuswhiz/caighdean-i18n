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

export const GrammarNotes = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <Page
    title={chapterDb["GrammarNotesTitle"]}
    docLang={props.docLang}>
    <HX level={1} navText="GrammarNotesTitle" title={chapterDb["GrammarNotesTitle"]}>
      <table className="grammar-notes-chapter my-1">
        <thead>
          <tr>
            <th colSpan={2}>{chapterDb["Abbreviation"]}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>ar lean.</b></td>
            <td>ar leanúint</td>
          </tr>
          <tr>
            <td><b>bain.</b></td>
            <td>baininscneach</td>
          </tr>
          <tr>
            <td><b>fir.</b></td>
            <td>firinscneach</td>
          </tr>
          <tr>
            <td><b>gin.</b></td>
            <td>tuiseal ginideach</td>
          </tr>
          <tr>
            <td><b>gin. iol.</b></td>
            <td>tuiseal ginideach iolra</td>
          </tr>
          <tr>
            <td><b>iol.</b></td>
            <td>iolra</td>
          </tr>
          <tr>
            <td><b>sb.</b></td>
            <td>saorbhriathar</td>
          </tr>
          <tr>
            <td><b>tabh.</b></td>
            <td>tuiseal tabharthach</td>
          </tr>
          <tr>
            <td><b>u.</b></td>
            <td>uatha</td>
          </tr>
          <tr>
            <td><b>()</b></td>
            <td>{chapterDb["parens-meaning"]}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="grammar-notes-chapter my-1">
        <thead>
          <tr>
            <th colSpan={2}>{chapterDb["GrammarNotes"]}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{chapterDb["row1-term"]}
            </td>
            <td>{chapterDb["row1-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row2-term"]}
            </td>
            <td>{chapterDb["row2-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row3-term"]}
            </td>
            <td>{chapterDb["row3-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row4-term"]}
            </td>
            <td>{chapterDb["row4-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row5-term"]}
            </td>
            <td>{chapterDb["row5-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row6-term"]}
            </td>
            <td>{chapterDb["row6-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row7-term"]}
            </td>
            <td>{chapterDb["row7-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row8-term"]}
            </td>
            <td>{chapterDb["row8-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row9-term"]}
            </td>
            <td>{chapterDb["row9-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row10-term"]}
            </td>
            <td>{chapterDb["row10-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row11-term"]}
            </td>
            <td>{chapterDb["row11-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row12-term"]}
            </td>
            <td>{chapterDb["row12-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row13-term"]}
            </td>
            <td>{chapterDb["row13-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row14-term"]}
            </td>
            <td>{chapterDb["row14-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row15-term"]}
            </td>
            <td>{chapterDb["row15-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row16-term"]}
            </td>
            <td>{chapterDb["row16-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row17-term"]}
            </td>
            <td>{chapterDb["row17-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row18-term"]}
            </td>
            <td>{chapterDb["row18-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row19-term"]}
            </td>
            <td>{chapterDb["row19-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row20-term"]}
            </td>
            <td>{chapterDb["row20-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row21-term"]}
            </td>
            <td>{chapterDb["row21-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row22-term"]}
            </td>
            <td>{chapterDb["row22-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row23-term"]}
            </td>
            <td>{chapterDb["row23-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row24-term"]}
            </td>
            <td>{chapterDb["row24-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row25-term"]}
            </td>
            <td>{chapterDb["row25-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row26-term"]}
            </td>
            <td>{chapterDb["row26-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row27-term"]}
            </td>
            <td>{chapterDb["row27-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row28-term"]}
            </td>
            <td>{chapterDb["row28-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row29-term"]}
            </td>
            <td>{chapterDb["row29-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row30-term"]}
            </td>
            <td>{chapterDb["row30-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row31-term"]}
            </td>
            <td>{chapterDb["row31-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row32-term"]}
            </td>
            <td>{chapterDb["row32-definition"]}
            </td>
          </tr>
          <tr>
            <td>{chapterDb["row33-term"]}
            </td>
            <td>{chapterDb["row33-definition"]}
            </td>
          </tr>
        </tbody>
      </table>
    </HX>
  </Page>;
};
