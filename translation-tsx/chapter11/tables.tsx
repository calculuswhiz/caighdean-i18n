import { AutoColGroup, getCommonTranslator, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { range } from "../util";
import { getChapterTranslator } from "./layout";
import { ga_IE } from "./dbs/ga-IE"

export const ArrowSampleBox = (props: {
  samplePrefix: string;
  sampleCount: number;
  startAt?: number;
  docLang: SupportedLocales;
}) => {
  const startAt = props.startAt ?? 1;
  const gaDb = ga_IE as Record<string, string | React.JSX.Element>;
  const chapterDb = getChapterTranslator(props.docLang) as Record<string, string | React.JSX.Element>;
  return <table className="samplebox my-1">
    <tbody>
      {
        range(startAt, startAt + props.sampleCount - 1)
          .map(row => <>
            <tr key={`${row}a`}>
              {
                props.docLang === "ga_IE"
                  ? <td className="bg-stone-100 border-1 border-[rgba(0,0,0,0.1)] p-1">
                    {chapterDb[`${props.samplePrefix}${row}a`]}
                  </td>
                  : <>
                    <td className="bg-stone-100 border-1 border-[rgba(0,0,0,0.1)] p-1">
                      {gaDb[`${props.samplePrefix}${row}a`]}
                    </td>
                    <td className="bg-stone-100 border-1 border-[rgba(0,0,0,0.1)] p-1">
                      {chapterDb[`${props.samplePrefix}${row}a`]}
                    </td>
                  </>
              }
            </tr>
            <tr>
              {
                props.docLang === "ga_IE"
                  ? <td className="bg-stone-100 border-1 border-[rgba(0,0,0,0.1)] p-1">
                    &rarr;&nbsp;
                    {chapterDb[`${props.samplePrefix}${row}b`]}
                  </td>
                  : <>
                    <td className="bg-stone-100 border-1 border-[rgba(0,0,0,0.1)] p-1">
                      &rarr;&nbsp;
                      {gaDb[`${props.samplePrefix}${row}b`]}
                    </td>
                    <td className="bg-stone-100 border-1 border-[rgba(0,0,0,0.1)] p-1">
                      &rarr;&nbsp;
                      {chapterDb[`${props.samplePrefix}${row}b`]}
                    </td>
                  </>
              }
            </tr>
          </>
          )
      }
    </tbody>
  </table>;
};

export const Table11A = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={11} caption={chapterDb["Table11A-caption"]} docLang={props.docLang} tableLetter="A">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={2}>{chapterDb["Table11A-header"]}
        </th>
      </tr>
      <tr>
        <th>{chapterDb["Table11A-col1"]}</th>
        <th>{chapterDb["Table11A-col2"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11A-row1-col1"]}<br /></>}
          {chapterDb["Table11A-row1-col1"]}
        </td>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11A-row1-col2"]}<br /></>}
          {chapterDb["Table11A-row1-col2"]}
        </td>
      </tr>
      <tr>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11A-row2-col1"]}<br /></>}
          {chapterDb["Table11A-row2-col1"]}
        </td>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11A-row2-col2"]}<br /></>}
          {chapterDb["Table11A-row2-col2"]}
        </td>
      </tr>
      <tr>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11A-row3-col1"]}<br /></>}
          {chapterDb["Table11A-row3-col1"]}
        </td>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11A-row3-col2"]}<br /></>}
          {chapterDb["Table11A-row3-col2"]}
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table11B = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={11} caption={chapterDb["Table11B-caption"]} docLang={props.docLang} tableLetter="B">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={2}>{chapterDb["Table11B-header"]}
        </th>
      </tr>
      <tr>
        <th>{chapterDb["Table11B-col1"]}</th>
        <th>{chapterDb["Table11B-col2"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11B-row1-col1"]}<br /></>}
          {chapterDb["Table11B-row1-col1"]}
        </td>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11B-row1-col2"]}<br /></>}
          {chapterDb["Table11B-row1-col2"]}
        </td>
      </tr>
      <tr>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11B-row2-col1"]}<br /></>}
          {chapterDb["Table11B-row2-col1"]}
        </td>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11B-row2-col2"]}<br /></>}
          {chapterDb["Table11B-row2-col2"]}
        </td>
      </tr>
      <tr>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11B-row3-col1"]}<br /></>}
          {chapterDb["Table11B-row3-col1"]}
        </td>
        <td>
          {props.docLang !== "ga_IE" && <>{ga_IE["Table11B-row3-col2"]}<br /></>}
          {chapterDb["Table11B-row3-col2"]}
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table11C = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={11} caption={chapterDb["Table11C-caption"]} docLang={props.docLang} tableLetter="C">
    <AutoColGroup ratios={[1, 1, 1]} />
    <thead>
      <tr>
        <th>{chapterDb["Table11C-header1"]}</th>
        <th>{chapterDb["Table11C-header2"]}</th>
        <th>{chapterDb["Table11C-header3"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>de </td>
        <td>dá </td>
        <td>dár</td>
      </tr>
      <tr>
        <td>do </td>
        <td>dá </td>
        <td>dár</td>
      </tr>
      <tr>
        <td>faoi </td>
        <td>faoina </td>
        <td>faoinar</td>
      </tr>
      <tr>
        <td>i </td>
        <td>ina </td>
        <td>inar</td>
      </tr>
      <tr>
        <td>le </td>
        <td>lena </td>
        <td>lenar</td>
      </tr>
      <tr>
        <td>ó </td>
        <td>óna </td>
        <td>ónar</td>
      </tr>
      <tr>
        <td>trí </td>
        <td>trína </td>
        <td>trínar</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table11D = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={11} caption={chapterDb["Table11D-caption"]} docLang={props.docLang} tableLetter="D">
    <thead>
      <tr>
        <th></th>
        <th colSpan={2}>{chapterDb["Table11D-header-1"]}
        </th>
        <th colSpan={2}>{chapterDb["Table11D-header-2"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["Table11D-subheader-1"]}</th>
        <th>{chapterDb["Table11D-subheader-2"]}</th>
        <th>{chapterDb["Table11D-subheader-3"]}</th>
        <th>{chapterDb["Table11D-subheader-4"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table11D-row1-col1"]}
        </td>
        <td>is</td>
        <td></td>
        <td>ba</td>
        <td>ab</td>
      </tr>
      <tr>
        <td>{chapterDb["Table11D-row2-col1"]}
        </td>
        <td>ar</td>
        <td>arb</td>
        <td>ar</td>
        <td>arbh</td>
      </tr>
      <tr>
        <td>{chapterDb["Table11D-row3-col1"]}
        </td>
        <td>nach</td>
        <td></td>
        <td>nár</td>
        <td>nárbh</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table11E = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={11} caption={chapterDb["Table11E-caption"]} docLang={props.docLang} tableLetter="E">
    <AutoColGroup ratios={[1, 1, 1, 1]} />
    <thead>
      <tr>
        <th>{chapterDb["Table11E-header1"]}</th>
        <th>{chapterDb["Table11E-header2"]}</th>
        <th>{chapterDb["Table11E-header3"]}</th>
        <th>{chapterDb["Table11E-header4"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>de/do</td>
        <td>dar</td>
        <td>darb</td>
        <td>darbh</td>
      </tr>
      <tr>
        <td>faoi</td>
        <td>faoinar</td>
        <td>faoinarb</td>
        <td>faoinarbh</td>
      </tr>
      <tr>
        <td>i</td>
        <td>inar</td>
        <td>inarb</td>
        <td>inarbh</td>
      </tr>
      <tr>
        <td>le</td>
        <td>lenar</td>
        <td>lenarb</td>
        <td>lenarbh</td>
      </tr>
      <tr>
        <td>ó</td>
        <td>ónar</td>
        <td>ónarb</td>
        <td>ónarbh</td>
      </tr>
      <tr>
        <td>trí</td>
        <td>trínar</td>
        <td>trínarb</td>
        <td>trínarbh</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table11F = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={11} caption={chapterDb["Table11F-caption"]} docLang={props.docLang} tableLetter="F">
    <AutoColGroup ratios={[1, 3]} />
    <thead>
      <tr>
        <th>{chapterDb["Table11F-header1"]}</th>
        <th>{chapterDb["Table11F-header2"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>cad</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-cad-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-cad-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11F-cad-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-cad-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>cathain</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-cathain-example"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-cathain-example"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>cá fhad, cén fhad*</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-fhad-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-fhad-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11F-fhad-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-fhad-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>cá mhéad, cé mhéad, cén méid</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-mhéad-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-mhéad-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11F-mhéad-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-mhéad-example2"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11F-mhéad-example3"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-mhéad-example3"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>cé</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-cé-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-cé-example1"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>cé acu, cibé acu</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-acu-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-acu-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11F-acu-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-acu-example2"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11F-acu-example3"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-acu-example3"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>céard</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-céard-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-céard-example1"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>cá huair, cén uair</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-uair-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-uair-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11F-uair-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-uair-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>chomh + {chapterDb["Table11F-dobhriathar-ama"]} + is</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-chomh-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-chomh-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11F-chomh-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-chomh-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>conas</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-conas-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-conas-example1"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>cad é mar, mar (<i>{chapterDb["Table11F-cónasc"]}</i>)</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-mar-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-mar-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11F-mar-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-mar-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>nuair</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11F-nuair-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11F-nuair-example1"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table11G = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={11} caption={chapterDb["Table11G-caption"]} docLang={props.docLang} tableLetter="G">
    <AutoColGroup ratios={[1, 3]} />
    <thead>
      <tr>
        <th>{chapterDb["Table11G-header1"]}</th>
        <th>{chapterDb["Table11G-header2"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>an áit, cá háit, cén áit</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11G-áit-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-áit-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11G-áit-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-áit-example2"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11G-áit-example3"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-áit-example3"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>an chaoi, cén chaoi</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11G-chaoi-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-chaoi-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11G-chaoi-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-chaoi-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>an dóigh, cén dóigh</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11G-dóigh-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-dóigh-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11G-dóigh-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-dóigh-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>an fáth, cén fáth</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11G-fáth-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-fáth-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11G-fáth-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-fáth-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>cad chuige</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11G-chuige-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-chuige-example1"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>cad ina thaobh</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11G-ina-thaobh-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-ina-thaobh-example1"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>an tslí, cén tslí</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11G-tslí-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-tslí-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11G-tslí-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11G-tslí-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>a, ar (<i>{commonDb["saBhrí"]}</i>
          an méid a, an méid ar);
          gach a, gach ar (<i>{commonDb["saBhrí"]}</i>
          gach rud a, gach rud ar)
        </th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11H-misc-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11H-misc-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11H-misc-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11H-misc-example2"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11H-misc-example3"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11H-misc-example3"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11H-misc-example4"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11H-misc-example4"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>mar (<i>{commonDb["saBhrí"]}</i> áit)</th>
        <td>
          <ul>
            <li>
              {ga_IE["Table11H-mar-example1"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11H-mar-example1"]})
              </>}
            </li>
            <li>
              {ga_IE["Table11H-mar-example2"]}
              {props.docLang !== "ga_IE" && <>
                <br />
                ({chapterDb["Table11H-mar-example2"]})
              </>}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};
