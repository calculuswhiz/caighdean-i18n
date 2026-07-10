import { getCommonTranslator, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";
import { ga_IE } from "./dbs/ga-IE";

const LineBreakExample = (props: {
  docLang: SupportedLocales,
  exampleKey: string;
}) => {
  const chapterDb: Record<string, string | React.JSX.Element>
    = getChapterTranslator(props.docLang);
  const gaDb: Record<string, string | React.JSX.Element> = ga_IE;

  return <li>
    {
      props.docLang === 'ga_IE'
        ? chapterDb[props.exampleKey]
        : <>{gaDb[props.exampleKey]}<br />({chapterDb[props.exampleKey]})</>
    }
  </li>;
};

export const Table7A = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7A-caption"]} docLang={props.docLang} tableLetter="A">
    <colgroup>
      <col className="w-3/16" />
      <col className="w-3/16" />
      <col className="w-10/16" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7A-header"]}
        </th>
      </tr>
      <tr>
        <th colSpan={3}>{chapterDb["Table7A-subheader"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <th>is</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7A-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7A-example2" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <th>ní</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7A-example3" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7A-example4" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Interrogative"]} {chapterDb["Positive"]}
        </td>
        <th>an</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7A-example5" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7A-example6" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Interrogative"]} {chapterDb["Negative"]}
        </td>
        <th>nach</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7A-example7" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7A-example8" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7B = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7B-caption"]} docLang={props.docLang} tableLetter="B">
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/3" />
      <col className="w-1/3" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7B-header"]}
        </th>
      </tr>
      <tr>
        <th>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th colSpan={2}>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
      <tr>
        <th>ba</th>
        <th>b&rsquo;</th>
        <th>ba (ab)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-ba-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-ba-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-ba-example3" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-b-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-b-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-b-example3" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-ba-ab-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-ba-ab-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-ba-ab-example3" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-ba-ab-example4" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7B-ba-ab-example5" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7C = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7C-caption"]} docLang={props.docLang} tableLetter="C">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={5}>{chapterDb["Table7C-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th colSpan={2}>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th colSpan={2}>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <th>níor</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7C-Níor-example" />
          </ul>
        </td>
        <th>níorbh</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7C-Níorbh-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Interrogative"]} {chapterDb["Positive"]}
        </td>
        <th>ar</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7C-Ar-example" />
          </ul>
        </td>
        <th>arbh</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7C-Arbh-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Interrogative"]} {chapterDb["Negative"]}
        </td>
        <th>nár</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7C-Nár-example" />
          </ul>
        </td>
        <th>nárbh</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7C-Nárbh-example" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7D = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7D-caption"]} docLang={props.docLang} tableLetter="D">
    <colgroup>
      <col className="w-1/7" />
      <col className="w-2/7" />
      <col className="w-2/7" />
      <col className="w-2/7" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={4}>{chapterDb["Table7D-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonant"]}
        </th>
        <th colSpan={2}>{chapterDb["BeforeVowel"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th>gur</th>
        <th>gur</th>
        <th>gurb</th>
      </tr>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-gur-cons-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-gur-cons-example2" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-gur-vow-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-gur-vow-example2" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-gurb-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-gurb-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-gurb-example3" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-gurb-example4" />
          </ul>
        </td>
      </tr>
      <tr>
        <th></th>
        <th colSpan={3}>nach</th>
      </tr>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <td className="align-top" colSpan={3}>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-nach-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-nach-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-nach-example3" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7D-nach-example4" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7E = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7E-caption"]} docLang={props.docLang} tableLetter="E">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7E-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th>gur</th>
        <th>gurbh</th>
      </tr>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7E-gur-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7E-gur-example2" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7E-gurbh-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7E-gurbh-example2" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7F = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7F-caption"]} docLang={props.docLang} tableLetter="F">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7F-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th>go mba</th>
        <th>go mba <span className="font-normal">{commonDb["nó"]}</span> go mb&rsquo;</th>
      </tr>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7F-go-mba-cons-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7F-go-mba-cons-example2" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7F-go-mba-vow-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7F-go-mba-vow-example2" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7G = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7G-caption"]} docLang={props.docLang} tableLetter="G">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7G-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th>nár</th>
        <th>nárbh</th>
      </tr>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7G-nár-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7G-nár-example2" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7G-nárbh-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7G-nárbh-example2" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7H = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7H-caption"]} docLang={props.docLang} tableLetter="H">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7H-header"]}
        </th>
      </tr>
      <tr>
        <th colSpan={3}>{chapterDb["Table7H-subheader"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <th>is</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7H-is-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7H-is-example2" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <th>nach</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7H-nach-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7H-nach-example2" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7I = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7I-caption"]} docLang={props.docLang} tableLetter="I">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={5}>{chapterDb["Table7I-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th colSpan={2}>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th colSpan={2}>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <th>ba</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7I-ba-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7I-ba-example2" />
          </ul>
        </td>
        <th>ab</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7I-ab-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7I-ab-example2" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <th>nár</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7I-nár-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7I-nár-example2" />
          </ul>
        </td>
        <th>nárbh</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7I-nárbh-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7I-nárbh-example2" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7J = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7J-caption"]} docLang={props.docLang} tableLetter="J">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={5}>{chapterDb["Table7J-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th colSpan={2}>{chapterDb["BeforeConsonant"]}
        </th>
        <th colSpan={2}>{chapterDb["BeforeVowel"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <th>ar</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7J-ar-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7J-ar-example2" />
          </ul>
        </td>
        <th>arb</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7J-arb-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7J-arb-example2" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <th>nach</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7J-nach-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7J-nach-example2" />
          </ul>
        </td>
        <th>nach</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7J-nach-example3" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7J-nach-example4" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7K = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7K-caption"]} docLang={props.docLang} tableLetter="K">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={5}>{chapterDb["Table7K-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th colSpan={2}>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th colSpan={2}>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <th>ar</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7K-ar-example" />
          </ul>
        </td>
        <th>arbh</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7K-arbh-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <th>nár</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7K-nár-example" />
          </ul>
        </td>
        <th>nárbh</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7K-nárbh-example" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7L = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7L-caption"]} docLang={props.docLang} tableLetter="L">
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={2}>{chapterDb["Table7L-header"]}
        </th>
      </tr>
      <tr>
        <th>{chapterDb["Table7L-subheader-col1"]}
        </th>
        <th>{chapterDb["Table7L-subheader-col2"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table7L-row1-col1"]}
        </td>
        <td>{chapterDb["Table7L-row1-col2"]}
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table7L-row2-col1"]}
        </td>
        <td>{chapterDb["Table7L-row2-col2"]}
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table7L-row3-col1"]}
        </td>
        <td>{chapterDb["Table7L-row3-col2"]}
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table7L-row4-col1"]}
        </td>
        <td></td>
      </tr>
      <tr>
        <td>{chapterDb["Table7L-row5-col1"]}
        </td>
        <td></td>
      </tr>
      <tr>
        <td>{chapterDb["Table7L-row6-col1"]}
        </td>
        <td></td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7M = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7M-caption"]} docLang={props.docLang} tableLetter="M">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7M-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonant"]}
        </th>
        <th>{chapterDb["BeforeVowel"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>cá</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7M-Cá-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7M-Cárb-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>cé</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7M-Cé-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7M-Cérb-example" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7N = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7N-caption"]} docLang={props.docLang} tableLetter="N">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7N-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>cá</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7N-example1" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7N-example2" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>cé</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7N-example3" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7N-example4" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7O = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7O-caption"]} docLang={props.docLang} tableLetter="O">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7O-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonant"]}
        </th>
        <th>{chapterDb["BeforeVowel"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="whitespace-nowrap">de/do</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-dar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-darb-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>faoi</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-faoinar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-faoinarb-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>i</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-inar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-inarb-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>le</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-lenar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-lenarb-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>ó</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-ónar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7O-ónarb-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>trí
          <td>
            <ul>
              <LineBreakExample docLang={props.docLang} exampleKey="Table7O-trínar-example" />
            </ul>
          </td>
          <td>
            <ul>
              <LineBreakExample docLang={props.docLang} exampleKey="Table7O-trínarb-example" />
            </ul>
          </td>
        </th>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7P = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7P-caption"]} docLang={props.docLang} tableLetter="P">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7P-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="whitespace-nowrap">de/do</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-dar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-darbh-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>faoi</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-faoinar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-faoinarbh-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>i</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-inar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-inarbh-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>le</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-lenar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-lenarbh-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>ó</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-ónar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-ónarbh-example" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>trí</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-trínar-example" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7P-trínarbh-example" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7Q = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7Q-caption"]} docLang={props.docLang} tableLetter="Q">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7Q-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonant"]}
        </th>
        <th>{chapterDb["BeforeVowel"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>sula</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7Q-example1" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7Q-example2" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>ó</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7Q-example3" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7Q-example4" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7R = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7R-caption"]} docLang={props.docLang} tableLetter="R">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={3}>{chapterDb["Table7R-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>sula</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7R-example1" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7R-example2" />
          </ul>
        </td>
      </tr>
      <tr>
        <th>ó</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7R-example3" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7R-example4" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7S = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7S-caption"]} docLang={props.docLang} tableLetter="S">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={5}>{chapterDb["Table7S-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th colSpan={2}>{chapterDb["BeforeConsonant"]}
        </th>
        <th colSpan={2}>{chapterDb["BeforeVowel"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <th>más</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7S-más-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7S-más-example2" />
          </ul>
        </td>
        <th>más</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7S-más-example3" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7S-más-example4" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <th>mura</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7S-mura-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7S-mura-example2" />
          </ul>
        </td>
        <th>murab</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7S-murab-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7S-murab-example2" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7T = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7T-caption"]} docLang={props.docLang} tableLetter="T">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={4}>{chapterDb["Table7T-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["BeforeConsonantQualified"]}
        </th>
        <th colSpan={2}>{chapterDb["BeforeVowelQualified"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th>má ba</th>
        <th>má b&rsquo;</th>
        <th>má ba</th>
      </tr>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7T-positive-example1" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7T-positive-example2" />
          </ul>
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7T-positive-example3" />
          </ul>
        </td>
      </tr>
      <tr>
        <th></th>
        <th>murar</th>
        <th colSpan={2}>murarbh</th>
      </tr>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7T-negative-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7T-negative-example2" />
          </ul>
        </td>
        <td colSpan={2}>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7T-negative-example3" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7T-negative-example4" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7U = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7U-caption"]} docLang={props.docLang} tableLetter="U">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={4}>{chapterDb["Table7U-header"]}
        </th>
      </tr>
      <tr>
        <th colSpan={2}>{chapterDb["BeforeConsonantAndVowel"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Dá + ba &rarr; Dá mba&nbsp;<span className="font-normal">{commonDb["nó"]}</span>&nbsp;Dá mb&rsquo;</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7U-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7U-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7U-example3" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7U-example4" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table7V = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={7} caption={chapterDb["Table7V-caption"]} docLang={props.docLang} tableLetter="V">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={5}>{chapterDb["Table7V-header"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th colSpan={2}>{chapterDb["BeforeConsonant"]}
        </th>
        <th colSpan={2}>{chapterDb["BeforeVowel"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Positive"]}
        </td>
        <th>gura</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-gura-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-gura-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-gura-example3" />
          </ul>
        </td>
        <th>gurab</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-gurab-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-gurab-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-gurab-example3" />
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Negative"]}
        </td>
        <th>nára</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-nára-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-nára-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-nára-example3" />
          </ul>
        </td>
        <th>nárab</th>
        <td>
          <ul>
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-nárab-example1" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-nárab-example2" />
            <LineBreakExample docLang={props.docLang} exampleKey="Table7V-nárab-example3" />
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};
