import { AutoColGroup, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { ga_IE } from "./dbs/ga-IE";
import { range } from "../util";
import { getChapterTranslator } from "./layout";

export const AdverbExampleTable = (props: {
  prefix: string;
  count: number;
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang) as Record<string, string | React.JSX.Element>;
  const originalDb = ga_IE as Record<string, string | React.JSX.Element>;

  return <table className="samplebox">
    <AutoColGroup ratios={[2, 1, 5]} />
    <tbody>
      {
        range(1, props.count).map((row) =>
          <tr> {
            props.docLang === 'ga_IE'
              ? <>
                <td>
                  {chapterDb[`${props.prefix}${row}-left`]}
                </td>
                <td>&rarr;</td>
                <td>
                  {chapterDb[`${props.prefix}${row}-right`]}
                </td>
              </>
              : <>
                <td>
                  {originalDb[`${props.prefix}${row}-left`]}<br />
                  (<i>{chapterDb[`${props.prefix}${row}-left`]}</i>)
                </td>
                <td>&rarr;</td>
                <td>
                  {originalDb[`${props.prefix}${row}-right`]}<br />
                  (<i>{chapterDb[`${props.prefix}${row}-right`]}</i>)
                </td>
              </>
          }</tr>
        )
      }
    </tbody>
  </table>;
};

const SampleCell = (props: {
  prefix: string;
  contentKey: string;
  suffix?: string;
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang) as Record<string, string | React.JSX.Element>;
  const originalDb = ga_IE as Record<string, string | React.JSX.Element>;

  const key = `${props.prefix}-${props.contentKey}-sample${props.suffix ?? ""}`;
  return <td className="align-top">
    <p><b>{props.contentKey}</b></p>
    {
      props.docLang === 'ga_IE'
        ? <p>{chapterDb[key]}</p>
        : <p>
          {originalDb[key]}<br />
          (<i>{chapterDb[key]}</i>)
        </p>
    }
  </td>;
};

const CenterCell = (props: {
  prefix: string;
  contentKey: string;
  suffix?: string;
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang) as Record<string, string | React.JSX.Element>;
  const originalDb = ga_IE as Record<string, string | React.JSX.Element>;

  const key = `${props.prefix}-${props.contentKey}-sample${props.suffix ?? ""}`;
  return <td className="align-top">
    <p>
      <b>{props.contentKey}</b>
      {
        props.docLang !== 'ga_IE'
        && <> &mdash; {chapterDb[`${props.prefix}-${props.contentKey}`]}</>
      }
    </p>
    {
      props.docLang === 'ga_IE'
        ? <p>{chapterDb[key]}</p>
        : <p>
          {originalDb[key]} (<i>{chapterDb[key]}</i>)
        </p>
    }
  </td>;
};

export const Table6A = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={6} caption={chapterDb["Table6A-caption"]} docLang={props.docLang} tableLetter="A">
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/3" />
      <col className="w-1/3" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["6-3-tables-col1"]}</th>
        <th>{chapterDb["6-3-tables-col2"]}</th>
        <th>{chapterDb["6-3-tables-col3"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <SampleCell prefix="Table6A-row1" contentKey="suas" docLang={props.docLang} />
        <CenterCell prefix="Table6A-row1" contentKey="thuas" docLang={props.docLang} />
        <SampleCell prefix="Table6A-row1" contentKey="anuas" docLang={props.docLang} />
      </tr>
      <tr>
        <SampleCell prefix="Table6A-row2" contentKey="síos" docLang={props.docLang} />
        <CenterCell prefix="Table6A-row2" contentKey="thíos" docLang={props.docLang} />
        <SampleCell prefix="Table6A-row2" contentKey="aníos" docLang={props.docLang} />
      </tr>
      <tr>
        <SampleCell prefix="Table6A-row3" contentKey="amach" suffix="-1" docLang={props.docLang} />
        <CenterCell prefix="Table6A-row3" contentKey="amuigh" docLang={props.docLang} />
        <SampleCell prefix="Table6A-row3" contentKey="amach" suffix="-2" docLang={props.docLang} />
      </tr>
      <tr>
        <SampleCell prefix="Table6A-row4" contentKey="isteach" suffix="-1" docLang={props.docLang} />
        <CenterCell prefix="Table6A-row4" contentKey="istigh" docLang={props.docLang} />
        <SampleCell prefix="Table6A-row4" contentKey="isteach" suffix="-2" docLang={props.docLang} />
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table6B = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={6} caption={chapterDb["Table6B-caption"]} docLang={props.docLang} tableLetter="B">
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/3" />
      <col className="w-1/3" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["6-3-tables-col1"]}</th>
        <th>{chapterDb["6-3-tables-col2"]}</th>
        <th>{chapterDb["6-3-tables-col3"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <SampleCell prefix="Table6B-row1" contentKey="ó thuaidh" docLang={props.docLang} />
        <CenterCell prefix="Table6B-row1" contentKey="ó thuaidh/thuaidh" docLang={props.docLang} />
        <SampleCell prefix="Table6B-row1" contentKey="aduaidh" docLang={props.docLang} />
      </tr>
      <tr>
        <SampleCell prefix="Table6B-row2" contentKey="ó dheas" docLang={props.docLang} />
        <CenterCell prefix="Table6B-row2" contentKey="ó dheas/theas" docLang={props.docLang} />
        <SampleCell prefix="Table6B-row2" contentKey="aneas" docLang={props.docLang} />
      </tr>
      <tr>
        <SampleCell prefix="Table6B-row3" contentKey="soir" docLang={props.docLang} />
        <CenterCell prefix="Table6B-row3" contentKey="thoir" docLang={props.docLang} />
        <SampleCell prefix="Table6B-row3" contentKey="anoir" docLang={props.docLang} />
      </tr>
      <tr>
        <SampleCell prefix="Table6B-row4" contentKey="siar" docLang={props.docLang} />
        <CenterCell prefix="Table6B-row4" contentKey="thiar" docLang={props.docLang} />
        <SampleCell prefix="Table6B-row4" contentKey="aniar" docLang={props.docLang} />
      </tr>
      <tr>
        <SampleCell prefix="Table6B-row5" contentKey="anonn/sall" docLang={props.docLang} />
        <CenterCell prefix="Table6B-row5" contentKey="thall" docLang={props.docLang} />
        <SampleCell prefix="Table6B-row5" contentKey="anall" docLang={props.docLang} />
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table6C = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={6} caption={chapterDb["Table6C-caption"]} docLang={props.docLang} tableLetter="C">
    <colgroup>
      <col className="w-1/10" />
      <col className="w-3/10" />
      <col className="w-3/10" />
      <col className="w-3/10" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table6C-col1"]}</th>
        <th>{chapterDb["Table6C-col2"]}</th>
        <th>{chapterDb["Table6C-col3"]}</th>
        <th>{chapterDb["Table6C-col4"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>I</b></td>
        <td>siar</td>
        <td>an t&#x2011;iarthar</td>
        <td>aniar</td>
      </tr>
      <tr>
        <td><b>ILD</b></td>
        <td>siar lámh ó dheas</td>
        <td>thiar lámh theas</td>
        <td>aniar lámh aneas</td>
      </tr>
      <tr>
        <td><b>IID</b></td>
        <td>siar siar ó dheas</td>
        <td>thiar thiar theas</td>
        <td>aniar aniar aneas</td>
      </tr>
      <tr>
        <td><b>IDLI</b></td>
        <td>siar ó dheas lámh siar</td>
        <td>thiar theas lámh thiar</td>
        <td>aniar aneas lámh aniar</td>
      </tr>
      <tr>
        <td><b>ID</b></td>
        <td>siar ó dheas</td>
        <td>thiar theas</td>
        <td>aniar aneas</td>
      </tr>
      <tr>
        <td><b>IDLD</b></td>
        <td>siar ó dheas lámh ó dheas</td>
        <td>thiar theas lámh theas</td>
        <td>aniar aneas lámh aneas</td>
      </tr>
      <tr>
        <td><b>DID</b></td>
        <td>ó dheas siar ó dheas</td>
        <td>theas thiar theas</td>
        <td>aneas aniar aneas</td>
      </tr>
      <tr>
        <td><b>DLI</b></td>
        <td>ó dheas lámh siar</td>
        <td>theas lámh thiar</td>
        <td>aneas lámh aniar</td>
      </tr>
      <tr>
        <td><b>D</b></td>
        <td>ó dheas</td>
        <td>an deisceart</td>
        <td>aneas</td>
      </tr>
    </tbody>
  </MarkedTable>;
};
