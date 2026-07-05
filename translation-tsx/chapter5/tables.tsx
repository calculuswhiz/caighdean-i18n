import { getCommonTranslator, InlineTl, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const Table5A = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5A-caption"]} docLang={props.docLang} tableLetter="A">
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/3" />
      <col className="w-1/3" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table5A-col1"]}
        </th>
        <th>{chapterDb["Table5A-col2"]}
        </th>
        <th>{chapterDb["Table5A-col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["PresentTense"]}
        </td>
        <td>molann muid <br /> tá muid</td>
        <td>molaimid <br /> táimid</td>
      </tr>
      <tr>
        <td>{chapterDb["PastTense"]}
        </td>
        <td>cheannaigh muid <br /> ní fhaca muid</td>
        <td>cheannaíomar <br /> ní fhacamar</td>
      </tr>
      <tr>
        <td>{chapterDb["PastHabitualTense"]}
        </td>
        <td>d&rsquo;itheadh muid <br /> chrádh muid</td>
        <td>d&rsquo;ithimis <br /> chráimis</td>
      </tr>
      <tr>
        <td>{chapterDb["FutureTense"]}
        </td>
        <td>láimhseoidh muid <br /> rachaidh muid</td>
        <td>láimhseoimid <br /> rachaimid</td>
      </tr>
      <tr>
        <td>{chapterDb["ConditionalMood"]}
        </td>
        <td>chloisfeadh muid <br /> nífeadh muid</td>
        <td>chloisfimis <br /> nífimis</td>
      </tr>
      <tr>
        <td>{chapterDb["SubjunctiveMood"]}
        </td>
        <td>go gceanglaí muid <br /> go dtaga muid</td>
        <td>go gceanglaímid <br /> go dtagaimid</td>
      </tr>
      <tr>
        <td>{chapterDb["ImperativeMood"]}
        </td>
        <td>déanadh muid <br /> fágadh muid</td>
        <td>déanaimis <br /> fágaimis</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5B = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5B-caption"]} docLang={props.docLang} tableLetter="B">
    <thead>
      <tr className="primary-header-row">
        <th>Mol
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Mol"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>molaim</td>
                <td>mhol mé</td>
                <td>mholainn</td>
                <td>molfaidh mé</td>
              </tr>
              <tr>
                <td>molann tú</td>
                <td>mhol tú</td>
                <td>mholtá</td>
                <td>molfaidh tú</td>
              </tr>
              <tr>
                <td>molann sé/sí</td>
                <td>mhol sé/sí</td>
                <td>mholadh sé/sí</td>
                <td>molfaidh sé/sí</td>
              </tr>
              <tr>
                <td>molaimid</td>
                <td>mholamar</td>
                <td>mholaimis</td>
                <td>molfaimid</td>
              </tr>
              <tr>
                <td>molann sibh</td>
                <td>mhol sibh</td>
                <td>mholadh sibh</td>
                <td>molfaidh sibh</td>
              </tr>
              <tr>
                <td>molann siad</td>
                <td>mhol siad</td>
                <td>mholaidís</td>
                <td>molfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> moltar</td>
                <td><i>{commonDb["nod-sb"]}</i> moladh</td>
                <td><i>{commonDb["nod-sb"]}</i> mholtaí</td>
                <td><i>{commonDb["nod-sb"]}</i> molfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>mholfainn</td>
                <td>go mola mé</td>
                <td>molaim</td>
              </tr>
              <tr>
                <td>mholfá</td>
                <td>go mola tú</td>
                <td>mol</td>
              </tr>
              <tr>
                <td>mholfadh sé/sí</td>
                <td>go mola sé/sí</td>
                <td>moladh sé/sí</td>
              </tr>
              <tr>
                <td>mholfaimis</td>
                <td>go molaimid</td>
                <td>molaimis</td>
              </tr>
              <tr>
                <td>mholfadh sibh</td>
                <td>go mola sibh</td>
                <td>molaigí</td>
              </tr>
              <tr>
                <td>mholfaidís</td>
                <td>go mola siad</td>
                <td>molaidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> mholfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go moltar</td>
                <td><i>{commonDb["nod-sb"]}</i> moltar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>moladh</td>
                <td>molta</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5C = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5C-caption"]} docLang={props.docLang} tableLetter="C">
    <thead>
      <tr className="primary-header-row">
        <th>Bris
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Bris"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>brisim</td>
                <td>bhris mé</td>
                <td>bhrisinn</td>
                <td>brisfidh mé</td>
              </tr>
              <tr>
                <td>briseann tú</td>
                <td>bhris tú</td>
                <td>bhristeá</td>
                <td>brisfidh tú</td>
              </tr>
              <tr>
                <td>briseann sé/sí</td>
                <td>bhris sé/sí</td>
                <td>bhriseadh sé/sí</td>
                <td>brisfidh sé/sí</td>
              </tr>
              <tr>
                <td>brisimid</td>
                <td>bhriseamar</td>
                <td>bhrisimis</td>
                <td>brisfimid</td>
              </tr>
              <tr>
                <td>briseann sibh</td>
                <td>bhris sibh</td>
                <td>bhriseadh sibh</td>
                <td>brisfidh sibh</td>
              </tr>
              <tr>
                <td>briseann siad</td>
                <td>bhris siad</td>
                <td>bhrisidís</td>
                <td>brisfidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> bristear</td>
                <td><i>{commonDb["nod-sb"]}</i> briseadh</td>
                <td><i>{commonDb["nod-sb"]}</i> bhristí</td>
                <td><i>{commonDb["nod-sb"]}</i> brisfear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bhrisfinn</td>
                <td>go mbrise mé</td>
                <td>brisim</td>
              </tr>
              <tr>
                <td>bhrisfeá</td>
                <td>go mbrise tú</td>
                <td>bris</td>
              </tr>
              <tr>
                <td>bhrisfeadh sé/sí</td>
                <td>go mbrise sé/sí</td>
                <td>briseadh sé/sí</td>
              </tr>
              <tr>
                <td>bhrisfimis</td>
                <td>go mbrisimid</td>
                <td>brisimis</td>
              </tr>
              <tr>
                <td>bhrisfeadh sibh</td>
                <td>go mbrise sibh</td>
                <td>brisigí</td>
              </tr>
              <tr>
                <td>bhrisfidís</td>
                <td>go mbrise siad</td>
                <td>brisidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> bhrisfí</td>
                <td><i>{commonDb["nod-sb"]}</i> go mbristear</td>
                <td><i>{commonDb["nod-sb"]}</i> bristear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>briseadh</td>
                <td>briste</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5D = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5D-caption"]} docLang={props.docLang} tableLetter="D">
    <thead>
      <tr className="primary-header-row">
        <th>Sábháil
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Sábháil"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sábhálaim</td>
                <td>shábháil mé</td>
                <td>shábhálainn</td>
                <td>sábhálfaidh mé</td>
              </tr>
              <tr>
                <td>sábhálann tú</td>
                <td>shábháil tú</td>
                <td>shábháilteá</td>
                <td>sábhálfaidh tú</td>
              </tr>
              <tr>
                <td>sábhálann sé/sí</td>
                <td>shábháil sé/sí</td>
                <td>shábháladh sé/sí</td>
                <td>sábhálfaidh sé/sí</td>
              </tr>
              <tr>
                <td>sábhálaimid</td>
                <td>shábhálamar</td>
                <td>shábhálaimis</td>
                <td>sábhálfaimid</td>
              </tr>
              <tr>
                <td>sábhálann sibh</td>
                <td>shábháil sibh</td>
                <td>shábháladh sibh</td>
                <td>sábhálfaidh sibh</td>
              </tr>
              <tr>
                <td>sábhálann siad</td>
                <td>shábháil siad</td>
                <td>shábhálaidís</td>
                <td>sábhálfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> sábháiltear</td>
                <td><i>{commonDb["nod-sb"]}</i> sábháladh</td>
                <td><i>{commonDb["nod-sb"]}</i> shábháiltí</td>
                <td><i>{commonDb["nod-sb"]}</i> sábhálfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>shábhálfainn</td>
                <td>go sábhála mé</td>
                <td>sábhálaim</td>
              </tr>
              <tr>
                <td>shábhálfá</td>
                <td>go sábhála tú</td>
                <td>sábháil</td>
              </tr>
              <tr>
                <td>shábhálfadh sé/sí</td>
                <td>go sábhála sé/sí</td>
                <td>sábháladh sé/sí</td>
              </tr>
              <tr>
                <td>shábhálfaimis</td>
                <td>go sábhálaimid</td>
                <td>sábhálaimis</td>
              </tr>
              <tr>
                <td>shábhálfadh sibh</td>
                <td>go sábhála sibh</td>
                <td>sábhálaigí</td>
              </tr>
              <tr>
                <td>shábhálfaidís</td>
                <td>go sábhála siad</td>
                <td>sábhálaidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> shábhálfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go sábháiltear</td>
                <td><i>{commonDb["nod-sb"]}</i> sábháiltear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sábháil</td>
                <td>sábháilte</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5E = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5E-caption"]} docLang={props.docLang} tableLetter="E">
    <thead>
      <tr className="primary-header-row">
        <th>Tíolaic
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Tíolaic"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tíolacaim</td>
                <td>thíolaic mé</td>
                <td>thíolacainn</td>
                <td>tíolacfaidh mé</td>
              </tr>
              <tr>
                <td>tíolacann tú</td>
                <td>thíolaic tú</td>
                <td>thíolactá</td>
                <td>tíolacfaidh tú</td>
              </tr>
              <tr>
                <td>tíolacann sé/sí</td>
                <td>thíolaic sé/sí</td>
                <td>thíolacadh sé/sí</td>
                <td>tíolacfaidh sé/sí</td>
              </tr>
              <tr>
                <td>tíolacaimid</td>
                <td>thíolacamar</td>
                <td>thíolacaimis</td>
                <td>tíolacfaimid</td>
              </tr>
              <tr>
                <td>tíolacann sibh</td>
                <td>thíolaic sibh</td>
                <td>thíolacadh sibh</td>
                <td>tíolacfaidh sibh</td>
              </tr>
              <tr>
                <td>tíolacann siad</td>
                <td>thíolaic siad</td>
                <td>thíolacaidís</td>
                <td>tíolacfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> tíolactar</td>
                <td><i>{commonDb["nod-sb"]}</i> tíolacadh</td>
                <td><i>{commonDb["nod-sb"]}</i> thíolactaí</td>
                <td><i>{commonDb["nod-sb"]}</i> tíolacfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>thíolacfainn</td>
                <td>go dtíolaca mé</td>
                <td>tíolacaim</td>
              </tr>
              <tr>
                <td>thíolacfá</td>
                <td>go dtíolaca tú</td>
                <td>tíolaic</td>
              </tr>
              <tr>
                <td>thíolacfadh sé/sí</td>
                <td>go dtíolaca sé/sí</td>
                <td>tíolacadh sé/sí</td>
              </tr>
              <tr>
                <td>thíolacfaimis</td>
                <td>go dtíolacaimid</td>
                <td>tíolacaimis</td>
              </tr>
              <tr>
                <td>thíolacfadh sibh</td>
                <td>go dtíolaca sibh</td>
                <td>tíolacaigí</td>
              </tr>
              <tr>
                <td>thíolacfaidís</td>
                <td>go dtíolaca siad</td>
                <td>tíolacaidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> thíolacfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go dtíolactar</td>
                <td><i>{commonDb["nod-sb"]}</i> tíolactar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tíolacadh</td>
                <td>tíolactha</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5F = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5F-caption"]} docLang={props.docLang} tableLetter="F">
    <thead>
      <tr className="primary-header-row">
        <th>Cráigh
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Cráigh"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cráim</td>
                <td>chráigh mé</td>
                <td>chráinn</td>
                <td>cráfaidh mé</td>
              </tr>
              <tr>
                <td>cránn tú</td>
                <td>chráigh tú</td>
                <td>chráiteá</td>
                <td>cráfaidh tú</td>
              </tr>
              <tr>
                <td>cránn sé/sí</td>
                <td>chráigh sé/sí</td>
                <td>chrádh sé/sí</td>
                <td>cráfaidh sé/sí</td>
              </tr>
              <tr>
                <td>cráimid</td>
                <td>chrámar</td>
                <td>chráimis</td>
                <td>cráfaimid</td>
              </tr>
              <tr>
                <td>cránn sibh</td>
                <td>chráigh sibh</td>
                <td>chrádh sibh</td>
                <td>cráfaidh sibh</td>
              </tr>
              <tr>
                <td>cránn siad</td>
                <td>chráigh siad</td>
                <td>chráidís</td>
                <td>cráfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> cráitear</td>
                <td><i>{commonDb["nod-sb"]}</i> crádh</td>
                <td><i>{commonDb["nod-sb"]}</i> chráití</td>
                <td><i>{commonDb["nod-sb"]}</i> cráfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>chráfainn</td>
                <td>go gcrá mé</td>
                <td>cráim</td>
              </tr>
              <tr>
                <td>chráfá</td>
                <td>go gcrá tú</td>
                <td>cráigh</td>
              </tr>
              <tr>
                <td>chráfadh sé/sí</td>
                <td>go gcrá sé/sí</td>
                <td>crádh sé/sí</td>
              </tr>
              <tr>
                <td>chráfaimis</td>
                <td>go gcráimid</td>
                <td>cráimis</td>
              </tr>
              <tr>
                <td>chráfadh sibh</td>
                <td>go gcrá sibh</td>
                <td>cráigí</td>
              </tr>
              <tr>
                <td>chráfaidís</td>
                <td>go gcrá siad</td>
                <td>cráidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> chráfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go gcráitear</td>
                <td><i>{commonDb["nod-sb"]}</i> cráitear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>crá</td>
                <td>cráite</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5G = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5G-caption"]} docLang={props.docLang} tableLetter="G">
    <thead>
      <tr className="primary-header-row">
        <th>Dóigh
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Dóigh"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dóim</td>
                <td>dhóigh mé</td>
                <td>dhóinn</td>
                <td>dófaidh mé</td>
              </tr>
              <tr>
                <td>dónn tú</td>
                <td>dhóigh tú</td>
                <td>dhóiteá</td>
                <td>dófaidh tú</td>
              </tr>
              <tr>
                <td>dónn sé/sí</td>
                <td>dhóigh sé/sí</td>
                <td>dhódh sé/sí</td>
                <td>dófaidh sé/sí</td>
              </tr>
              <tr>
                <td>dóimid</td>
                <td>dhómar</td>
                <td>dhóimis</td>
                <td>dófaimid</td>
              </tr>
              <tr>
                <td>dónn sibh</td>
                <td>dhóigh sibh</td>
                <td>dhódh sibh</td>
                <td>dófaidh sibh</td>
              </tr>
              <tr>
                <td>dónn siad</td>
                <td>dhóigh siad</td>
                <td>dhóidís</td>
                <td>dófaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> dóitear</td>
                <td><i>{commonDb["nod-sb"]}</i> dódh</td>
                <td><i>{commonDb["nod-sb"]}</i> dhóití</td>
                <td><i>{commonDb["nod-sb"]}</i> dófar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dhófainn</td>
                <td>go ndó mé</td>
                <td>dóim</td>
              </tr>
              <tr>
                <td>dhófá</td>
                <td>go ndó tú</td>
                <td>dóigh</td>
              </tr>
              <tr>
                <td>dhófadh sé/sí</td>
                <td>go ndó sé/sí</td>
                <td>dódh sé/sí</td>
              </tr>
              <tr>
                <td>dhófaimis</td>
                <td>go ndóimid</td>
                <td>dóimis</td>
              </tr>
              <tr>
                <td>dhófadh sibh</td>
                <td>go ndó sibh</td>
                <td>dóigí</td>
              </tr>
              <tr>
                <td>dhófaidís</td>
                <td>go ndó siad</td>
                <td>dóidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> dhófaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go ndóitear</td>
                <td><i>{commonDb["nod-sb"]}</i> dóitear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dó</td>
                <td>dóite</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5H = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5H-caption"]} docLang={props.docLang} tableLetter="H">
    <thead>
      <tr className="primary-header-row">
        <th>Léigh
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Léigh"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>léim</td>
                <td>léigh mé</td>
                <td>léinn</td>
                <td>léifidh mé</td>
              </tr>
              <tr>
                <td>léann tú</td>
                <td>léigh tú</td>
                <td>léiteá</td>
                <td>léifidh tú</td>
              </tr>
              <tr>
                <td>léann sé/sí</td>
                <td>léigh sé/sí</td>
                <td>léadh sé/sí</td>
                <td>léifidh sé/sí</td>
              </tr>
              <tr>
                <td>léimid</td>
                <td>léamar</td>
                <td>léimis</td>
                <td>léifimid</td>
              </tr>
              <tr>
                <td>léann sibh</td>
                <td>léigh sibh</td>
                <td>léadh sibh</td>
                <td>léifidh sibh</td>
              </tr>
              <tr>
                <td>léann siad</td>
                <td>léigh siad</td>
                <td>léidís</td>
                <td>léifidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> léitear</td>
                <td><i>{commonDb["nod-sb"]}</i> léadh</td>
                <td><i>{commonDb["nod-sb"]}</i> léití</td>
                <td><i>{commonDb["nod-sb"]}</i> léifear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>léifinn</td>
                <td>go lé mé</td>
                <td>léim</td>
              </tr>
              <tr>
                <td>léifeá</td>
                <td>go lé tú</td>
                <td>léigh</td>
              </tr>
              <tr>
                <td>léifeadh sé/sí</td>
                <td>go lé sé/sí</td>
                <td>léadh sé/sí</td>
              </tr>
              <tr>
                <td>léifimis</td>
                <td>go léimid</td>
                <td>léimis</td>
              </tr>
              <tr>
                <td>léifeadh sibh</td>
                <td>go lé sibh</td>
                <td>léigí</td>
              </tr>
              <tr>
                <td>léifidís</td>
                <td>go lé siad</td>
                <td>léidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> léifí</td>
                <td><i>{commonDb["nod-sb"]}</i> go léitear</td>
                <td><i>{commonDb["nod-sb"]}</i> léitear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>léamh</td>
                <td>léite</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5I = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5I-caption"]} docLang={props.docLang} tableLetter="I">
    <thead>
      <tr className="primary-header-row">
        <th>Nigh
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Nigh"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ním</td>
                <td>nigh mé</td>
                <td>nínn</td>
                <td>nífidh mé</td>
              </tr>
              <tr>
                <td>níonn tú</td>
                <td>nigh tú</td>
                <td>niteá</td>
                <td>nífidh tú</td>
              </tr>
              <tr>
                <td>níonn sé/sí</td>
                <td>nigh sé/sí</td>
                <td>níodh sé/sí</td>
                <td>nífidh sé/sí</td>
              </tr>
              <tr>
                <td>nímid</td>
                <td>níomar</td>
                <td>nímis</td>
                <td>nífimid</td>
              </tr>
              <tr>
                <td>níonn sibh</td>
                <td>nigh sibh</td>
                <td>níodh sibh</td>
                <td>nífidh sibh</td>
              </tr>
              <tr>
                <td>níonn siad</td>
                <td>nigh siad</td>
                <td>nídís</td>
                <td>nífidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> nitear</td>
                <td><i>{commonDb["nod-sb"]}</i> níodh</td>
                <td><i>{commonDb["nod-sb"]}</i> nití</td>
                <td><i>{commonDb["nod-sb"]}</i> nífear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>nífinn</td>
                <td>go ní mé</td>
                <td>ním</td>
              </tr>
              <tr>
                <td>nífeá</td>
                <td>go ní tú</td>
                <td>nigh</td>
              </tr>
              <tr>
                <td>nífeadh sé/sí</td>
                <td>go ní sé/sí</td>
                <td>níodh sé/sí</td>
              </tr>
              <tr>
                <td>nífimis</td>
                <td>go nímid</td>
                <td>nímis</td>
              </tr>
              <tr>
                <td>nífeadh sibh</td>
                <td>go ní sibh</td>
                <td>nígí</td>
              </tr>
              <tr>
                <td>nífidís</td>
                <td>go ní siad</td>
                <td>nídís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> nífí</td>
                <td><i>{commonDb["nod-sb"]}</i> go nitear</td>
                <td><i>{commonDb["nod-sb"]}</i> nitear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ní</td>
                <td>nite</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5J = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5J-caption"]} docLang={props.docLang} tableLetter="J">
    <thead>
      <tr className="primary-header-row">
        <th>Beannaigh
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Beannaigh"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>beannaím</td>
                <td>bheannaigh mé</td>
                <td>bheannaínn</td>
                <td>beannóidh mé</td>
              </tr>
              <tr>
                <td>beannaíonn tú</td>
                <td>bheannaigh tú</td>
                <td>bheannaíteá</td>
                <td>beannóidh tú</td>
              </tr>
              <tr>
                <td>beannaíonn sé/sí</td>
                <td>bheannaigh sé/sí</td>
                <td>bheannaíodh sé/sí</td>
                <td>beannóidh sé/sí</td>
              </tr>
              <tr>
                <td>beannaímid</td>
                <td>bheannaíomar</td>
                <td>bheannaímis</td>
                <td>beannóimid</td>
              </tr>
              <tr>
                <td>beannaíonn sibh</td>
                <td>bheannaigh sibh</td>
                <td>bheannaíodh sibh</td>
                <td>beannóidh sibh</td>
              </tr>
              <tr>
                <td>beannaíonn siad</td>
                <td>bheannaigh siad</td>
                <td>bheannaídís</td>
                <td>beannóidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> beannaítear</td>
                <td><i>{commonDb["nod-sb"]}</i> beannaíodh</td>
                <td><i>{commonDb["nod-sb"]}</i> bheannaítí</td>
                <td><i>{commonDb["nod-sb"]}</i> beannófar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bheannóinn</td>
                <td>go mbeannaí mé</td>
                <td>beannaím</td>
              </tr>
              <tr>
                <td>bheannófá</td>
                <td>go mbeannaí tú</td>
                <td>beannaigh</td>
              </tr>
              <tr>
                <td>bheannódh sé/sí</td>
                <td>go mbeannaí sé/sí</td>
                <td>beannaíodh sé/sí</td>
              </tr>
              <tr>
                <td>bheannóimis</td>
                <td>go mbeannaímid</td>
                <td>beannaímis</td>
              </tr>
              <tr>
                <td>bheannódh sibh</td>
                <td>go mbeannaí sibh</td>
                <td>beannaígí</td>
              </tr>
              <tr>
                <td>bheannóidís</td>
                <td>go mbeannaí siad</td>
                <td>beannaídís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> bheannófaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go mbeannaítear</td>
                <td><i>{commonDb["nod-sb"]}</i> beannaítear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>beannú</td>
                <td>beannaithe</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5K = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5K-caption"]} docLang={props.docLang} tableLetter="K">
    <thead>
      <tr className="primary-header-row">
        <th>Cruinnigh
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Cruinnigh"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cruinním</td>
                <td>chruinnigh mé</td>
                <td>chruinnínn</td>
                <td>cruinneoidh mé</td>
              </tr>
              <tr>
                <td>cruinníonn tú</td>
                <td>chruinnigh tú</td>
                <td>chruinníteá</td>
                <td>cruinneoidh tú</td>
              </tr>
              <tr>
                <td>cruinníonn sé/sí</td>
                <td>chruinnigh sé/sí</td>
                <td>chruinníodh sé/sí</td>
                <td>cruinneoidh sé/sí</td>
              </tr>
              <tr>
                <td>cruinnímid</td>
                <td>chruinníomar</td>
                <td>chruinnímis</td>
                <td>cruinneoimid</td>
              </tr>
              <tr>
                <td>cruinníonn sibh</td>
                <td>chruinnigh sibh</td>
                <td>chruinníodh sibh</td>
                <td>cruinneoidh sibh</td>
              </tr>
              <tr>
                <td>cruinníonn siad</td>
                <td>chruinnigh siad</td>
                <td>chruinnídís</td>
                <td>cruinneoidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> cruinnítear</td>
                <td><i>{commonDb["nod-sb"]}</i> cruinníodh</td>
                <td><i>{commonDb["nod-sb"]}</i> chruinnítí</td>
                <td><i>{commonDb["nod-sb"]}</i> cruinneofar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>chruinneoinn</td>
                <td>go gcruinní mé</td>
                <td>cruinním</td>
              </tr>
              <tr>
                <td>chruinneofá</td>
                <td>go gcruinní tú</td>
                <td>cruinnigh</td>
              </tr>
              <tr>
                <td>chruinneodh sé/sí</td>
                <td>go gcruinní sé/sí</td>
                <td>cruinníodh sé/sí</td>
              </tr>
              <tr>
                <td>chruinneoimis</td>
                <td>go gcruinnímid</td>
                <td>cruinnímis</td>
              </tr>
              <tr>
                <td>chruinneodh sibh</td>
                <td>go gcruinní sibh</td>
                <td>cruinnígí</td>
              </tr>
              <tr>
                <td>chruinneoidís</td>
                <td>go gcruinní siad</td>
                <td>cruinnídís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> chruinneofaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go gcruinnítear</td>
                <td><i>{commonDb["nod-sb"]}</i> cruinnítear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cruinniú</td>
                <td>cruinnithe</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5L = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5L-caption"]} docLang={props.docLang} tableLetter="L">
    <thead>
      <tr className="primary-header-row">
        <th>Ceangail
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Ceangail"]}
          </InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ceanglaím</td>
                <td>cheangail mé</td>
                <td>cheanglaínn</td>
                <td>ceanglóidh mé</td>
              </tr>
              <tr>
                <td>ceanglaíonn tú</td>
                <td>cheangail tú</td>
                <td>cheanglaíteá</td>
                <td>ceanglóidh tú</td>
              </tr>
              <tr>
                <td>ceanglaíonn sé/sí</td>
                <td>cheangail sé/sí</td>
                <td>cheanglaíodh sé/sí</td>
                <td>ceanglóidh sé/sí</td>
              </tr>
              <tr>
                <td>ceanglaímid</td>
                <td>cheanglaíomar</td>
                <td>cheanglaímis</td>
                <td>ceanglóimid</td>
              </tr>
              <tr>
                <td>ceanglaíonn sibh</td>
                <td>cheangail sibh</td>
                <td>cheanglaíodh sibh</td>
                <td>ceanglóidh sibh</td>
              </tr>
              <tr>
                <td>ceanglaíonn siad</td>
                <td>cheangail siad</td>
                <td>cheanglaídís</td>
                <td>ceanglóidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> ceanglaítear</td>
                <td><i>{commonDb["nod-sb"]}</i> ceanglaíodh</td>
                <td><i>{commonDb["nod-sb"]}</i> cheanglaítí</td>
                <td><i>{commonDb["nod-sb"]}</i> ceanglófar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cheanglóinn</td>
                <td>go gceanglaí mé</td>
                <td>ceanglaím</td>
              </tr>
              <tr>
                <td>cheanglófá</td>
                <td>go gceanglaí tú</td>
                <td>ceangail</td>
              </tr>
              <tr>
                <td>cheanglódh sé/sí</td>
                <td>go gceanglaí sé/sí</td>
                <td>ceanglaíodh sé/sí</td>
              </tr>
              <tr>
                <td>cheanglóimis</td>
                <td>go gceanglaímid</td>
                <td>ceanglaímis</td>
              </tr>
              <tr>
                <td>cheanglódh sibh</td>
                <td>go gceanglaí sibh</td>
                <td>ceanglaígí</td>
              </tr>
              <tr>
                <td>cheanglóidís</td>
                <td>go gceanglaí siad</td>
                <td>ceanglaídís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> cheanglófaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go gceanglaítear</td>
                <td><i>{commonDb["nod-sb"]}</i> ceanglaítear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ceangal</td>
                <td>ceangailte</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5M = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5M-caption"]} docLang={props.docLang} tableLetter="M">
    <thead>
      <tr className="primary-header-row">
        <th>Díbir <InlineTl lang={props.docLang}>{chapterDb["briathar-Díbir"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>díbrím</td>
                <td>dhíbir mé</td>
                <td>dhíbrínn</td>
                <td>díbreoidh mé</td>
              </tr>
              <tr>
                <td>díbríonn tú</td>
                <td>dhíbir tú</td>
                <td>dhíbríteá</td>
                <td>díbreoidh tú</td>
              </tr>
              <tr>
                <td>díbríonn sé/sí</td>
                <td>dhíbir sé/sí</td>
                <td>dhíbríodh sé/sí</td>
                <td>díbreoidh sé/sí</td>
              </tr>
              <tr>
                <td>díbrímid</td>
                <td>dhíbríomar</td>
                <td>dhíbrímis</td>
                <td>díbreoimid</td>
              </tr>
              <tr>
                <td>díbríonn sibh</td>
                <td>dhíbir sibh</td>
                <td>dhíbríodh sibh</td>
                <td>díbreoidh sibh</td>
              </tr>
              <tr>
                <td>díbríonn siad</td>
                <td>dhíbir siad</td>
                <td>dhíbrídís</td>
                <td>díbreoidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> díbrítear</td>
                <td><i>{commonDb["nod-sb"]}</i> díbríodh</td>
                <td><i>{commonDb["nod-sb"]}</i> dhíbrítí</td>
                <td><i>{commonDb["nod-sb"]}</i> díbreofar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dhíbreoinn</td>
                <td>go ndíbrí mé</td>
                <td>díbrím</td>
              </tr>
              <tr>
                <td>dhíbreofá</td>
                <td>go ndíbrí tú</td>
                <td>díbir</td>
              </tr>
              <tr>
                <td>dhíbreodh sé/sí</td>
                <td>go ndíbrí sé/sí</td>
                <td>díbríodh sé/sí</td>
              </tr>
              <tr>
                <td>dhíbreoimis</td>
                <td>go ndíbrímid</td>
                <td>díbrímis</td>
              </tr>
              <tr>
                <td>dhíbreodh sibh</td>
                <td>go ndíbrí sibh</td>
                <td>díbrígí</td>
              </tr>
              <tr>
                <td>dhíbreoidís</td>
                <td>go ndíbrí siad</td>
                <td>díbrídís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> dhíbreofaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go ndíbrítear</td>
                <td><i>{commonDb["nod-sb"]}</i> díbrítear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>díbirt</td>
                <td>díbeartha</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5N = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5N-caption"]} docLang={props.docLang} tableLetter="N">
    <thead>
      <tr className="primary-header-row">
        <th>Abair 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Abair"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>deirim</td>
                <td>dúirt mé</td>
                <td>deirinn</td>
                <td>déarfaidh mé</td>
              </tr>
              <tr>
                <td>deir tú</td>
                <td>dúirt tú</td>
                <td>deirteá</td>
                <td>déarfaidh tú</td>
              </tr>
              <tr>
                <td>deir sé/sí</td>
                <td>dúirt sé/sí</td>
                <td>deireadh sé/sí</td>
                <td>déarfaidh sé/sí</td>
              </tr>
              <tr>
                <td>deirimid</td>
                <td>dúramar</td>
                <td>deirimis</td>
                <td>déarfaimid</td>
              </tr>
              <tr>
                <td>deir sibh</td>
                <td>dúirt sibh</td>
                <td>deireadh sibh</td>
                <td>déarfaidh sibh</td>
              </tr>
              <tr>
                <td>deir siad</td>
                <td>dúirt siad</td>
                <td>deiridís</td>
                <td>déarfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> deirtear</td>
                <td><i>{commonDb["nod-sb"]}</i> dúradh</td>
                <td><i>{commonDb["nod-sb"]}</i> deirtí</td>
                <td><i>{commonDb["nod-sb"]}</i> déarfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>déarfainn</td>
                <td>go ndeire mé</td>
                <td>abraim</td>
              </tr>
              <tr>
                <td>déarfá</td>
                <td>go ndeire tú</td>
                <td>abair</td>
              </tr>
              <tr>
                <td>déarfadh sé/sí</td>
                <td>go ndeire sé/sí</td>
                <td>abradh sé/sí</td>
              </tr>
              <tr>
                <td>déarfaimis</td>
                <td>go ndeirimid</td>
                <td>abraimis</td>
              </tr>
              <tr>
                <td>déarfadh sibh</td>
                <td>go ndeire sibh</td>
                <td>abraigí</td>
              </tr>
              <tr>
                <td>déarfaidís</td>
                <td>go ndeire siad</td>
                <td>abraidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> déarfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go ndeirtear</td>
                <td><i>{commonDb["nod-sb"]}</i> abraítear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>rá</td>
                <td>ráite</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5O = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5O-caption"]} docLang={props.docLang} tableLetter="O">
    <thead>
      <tr className="primary-header-row">
        <th>Beir 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Beir"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>beirim</td>
                <td>rug mé</td>
                <td>bheirinn</td>
                <td>béarfaidh mé</td>
              </tr>
              <tr>
                <td>beireann tú</td>
                <td>rug tú</td>
                <td>bheirteá</td>
                <td>béarfaidh tú</td>
              </tr>
              <tr>
                <td>beireann sé/sí</td>
                <td>rug sé/sí</td>
                <td>bheireadh sé/sí</td>
                <td>béarfaidh sé/sí</td>
              </tr>
              <tr>
                <td>beirimid</td>
                <td>rugamar</td>
                <td>bheirimis</td>
                <td>béarfaimid</td>
              </tr>
              <tr>
                <td>beireann sibh</td>
                <td>rug sibh</td>
                <td>bheireadh sibh</td>
                <td>béarfaidh sibh</td>
              </tr>
              <tr>
                <td>beireann siad</td>
                <td>rug siad</td>
                <td>bheiridís</td>
                <td>béarfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> beirtear</td>
                <td><i>{commonDb["nod-sb"]}</i> rugadh</td>
                <td><i>{commonDb["nod-sb"]}</i> bheirtí</td>
                <td><i>{commonDb["nod-sb"]}</i> béarfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bhéarfainn</td>
                <td>go mbeire mé</td>
                <td>beirim</td>
              </tr>
              <tr>
                <td>bhéarfá</td>
                <td>go mbeire tú</td>
                <td>beir</td>
              </tr>
              <tr>
                <td>bhéarfadh sé/sí</td>
                <td>go mbeire sé/sí</td>
                <td>beireadh sé/sí</td>
              </tr>
              <tr>
                <td>bhéarfaimis</td>
                <td>go mbeirimid</td>
                <td>beirimis</td>
              </tr>
              <tr>
                <td>bhéarfadh sibh</td>
                <td>go mbeire sibh</td>
                <td>beirigí</td>
              </tr>
              <tr>
                <td>bhéarfaidís</td>
                <td>go mbeire siad</td>
                <td>beiridís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> bhéarfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go mbeirtear</td>
                <td><i>{commonDb["nod-sb"]}</i> beirtear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>breith</td>
                <td>beirthe</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5P = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5P-caption"]} docLang={props.docLang} tableLetter="P">
    <thead>
      <thead></thead>
      <tr className="primary-header-row">
        <th>Bí 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Bí"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <table>
                    <thead>
                      <tr className="tense-row">
                        <th colSpan={3}>{chapterDb["PresentTense"]}
                        </th>
                        <th rowSpan={2}>{chapterDb["OrdinaryPresentTense"]}
                        </th>
                      </tr>
                      <tr className="tense-row">
                        <th>{chapterDb["PositiveIndependent"]}
                        </th>
                        <th>{chapterDb["NegativeIndependent"]}
                        </th>
                        <th>{chapterDb["Dependent"]}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>táim/tá mé</td>
                        <td>nílim/níl mé</td>
                        <td>go bhfuilim/go bhfuil mé</td>
                        <td>bím</td>
                      </tr>
                      <tr>
                        <td>tá tú</td>
                        <td>níl tú</td>
                        <td>go bhfuil tú</td>
                        <td>bíonn tú</td>
                      </tr>
                      <tr>
                        <td>tá sé/sí</td>
                        <td>níl sé/sí</td>
                        <td>go bhfuil sé/sí</td>
                        <td>bíonn sé/sí</td>
                      </tr>
                      <tr>
                        <td>táimid</td>
                        <td>nílimid</td>
                        <td>go bhfuilimid</td>
                        <td>bímid</td>
                      </tr>
                      <tr>
                        <td>tá sibh</td>
                        <td>níl sibh</td>
                        <td>go bhfuil sibh</td>
                        <td>bíonn sibh</td>
                      </tr>
                      <tr>
                        <td>tá siad</td>
                        <td>níl siad</td>
                        <td>go bhfuil siad</td>
                        <td>bíonn siad</td>
                      </tr>
                      <tr>
                        <td><i>{commonDb["nod-sb"]}</i> táthar</td>
                        <td><i>{commonDb["nod-sb"]}</i> níltear</td>
                        <td><i>{commonDb["nod-sb"]}</i> go bhfuiltear</td>
                        <td><i>{commonDb["nod-sb"]}</i> bítear</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table>
                    <thead>
                      <tr className="tense-row">
                        <th colSpan={2}>{chapterDb["PastTense"]}
                        </th>
                        <th rowSpan={2}>{chapterDb["PastHabitualTense"]}
                        </th>
                        <th rowSpan={2}>{chapterDb["FutureTense"]}
                        </th>
                      </tr>
                      <tr className="tense-row">
                        <th>{chapterDb["Independent"]}
                        </th>
                        <th>{chapterDb["Dependent"]}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>bhí mé</td>
                        <td>ní raibh mé</td>
                        <td>bhínn</td>
                        <td>beidh mé</td>
                      </tr>
                      <tr>
                        <td>bhí tú</td>
                        <td>ní raibh tú</td>
                        <td>bhíteá</td>
                        <td>beidh tú</td>
                      </tr>
                      <tr>
                        <td>bhí sé/sí</td>
                        <td>ní raibh sé/sí</td>
                        <td>bhíodh sé/sí</td>
                        <td>beidh sé/sí</td>
                      </tr>
                      <tr>
                        <td>bhíomar</td>
                        <td>ní rabhamar</td>
                        <td>bhímis</td>
                        <td>beimid</td>
                      </tr>
                      <tr>
                        <td>bhí sibh</td>
                        <td>ní raibh sibh</td>
                        <td>bhíodh sibh</td>
                        <td>beidh sibh</td>
                      </tr>
                      <tr>
                        <td>bhí siad</td>
                        <td>ní raibh siad</td>
                        <td>bhídís</td>
                        <td>beidh siad</td>
                      </tr>
                      <tr>
                        <td><i>{commonDb["nod-sb"]}</i> bhíothas</td>
                        <td><i>{commonDb["nod-sb"]}</i> ní rabhthas</td>
                        <td><i>{commonDb["nod-sb"]}</i> bhítí</td>
                        <td><i>{commonDb["nod-sb"]}</i> beifear</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bheinn</td>
                <td>go raibh mé</td>
                <td>bím</td>
              </tr>
              <tr>
                <td>bheifeá</td>
                <td>go raibh tú</td>
                <td>bí</td>
              </tr>
              <tr>
                <td>bheadh sé/sí</td>
                <td>go raibh sé/sí</td>
                <td>bíodh sé/sí</td>
              </tr>
              <tr>
                <td>bheimis</td>
                <td>go rabhaimid</td>
                <td>bímis</td>
              </tr>
              <tr>
                <td>bheadh sibh</td>
                <td>go raibh sibh</td>
                <td>bígí</td>
              </tr>
              <tr>
                <td>bheidís</td>
                <td>go raibh siad</td>
                <td>bídís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> bheifí</td>
                <td><i>{commonDb["nod-sb"]}</i> go rabhthar</td>
                <td><i>{commonDb["nod-sb"]}</i> bítear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a bheith*</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5Q = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5Q-caption"]} docLang={props.docLang} tableLetter="Q">
    <thead>
      <tr className="primary-header-row">
        <th>Clois/Cluin 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Clois/Cluin"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cloisim/cluinim</td>
                <td>chuala mé</td>
                <td>chloisinn/chluininn</td>
                <td>cloisfidh/cluinfidh mé</td>
              </tr>
              <tr>
                <td>cloiseann/cluineann tú</td>
                <td>chuala tú</td>
                <td>chloisteá/chluinteá</td>
                <td>cloisfidh/cluinfidh tú</td>
              </tr>
              <tr>
                <td>cloiseann/cluineann sé/sí</td>
                <td>chuala sé/sí</td>
                <td>chloiseadh/chluineadh sé/sí</td>
                <td>cloisfidh/cluinfidh sé/sí</td>
              </tr>
              <tr>
                <td>cloisimid/cluinimid</td>
                <td>chualamar</td>
                <td>chloisimis/chluinimis</td>
                <td>cloisfimid/cluinfimid</td>
              </tr>
              <tr>
                <td>cloiseann/cluineann sibh</td>
                <td>chuala sibh</td>
                <td>chloiseadh/chluineadh sibh</td>
                <td>cloisfidh/cluinfidh sibh</td>
              </tr>
              <tr>
                <td>cloiseann/cluineann siad</td>
                <td>chuala siad</td>
                <td>chloisidís/chluinidís</td>
                <td>cloisfidh/cluinfidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> cloistear/cluintear</td>
                <td><i>{commonDb["nod-sb"]}</i> chualathas</td>
                <td><i>{commonDb["nod-sb"]}</i> chloistí/chluintí</td>
                <td><i>{commonDb["nod-sb"]}</i> cloisfear/cluinfear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>chloisfinn/chluinfinn</td>
                <td>go gcloise/go gcluine mé</td>
                <td>cloisim/cluinim</td>
              </tr>
              <tr>
                <td>chloisfeá/chluinfeá</td>
                <td>go gcloise/go gcluine tú</td>
                <td>clois/cluin</td>
              </tr>
              <tr>
                <td>chloisfeadh/chluinfeadh sé/sí</td>
                <td>go gcloise/go gcluine sé/sí</td>
                <td>cloiseadh/cluineadh sé/sí</td>
              </tr>
              <tr>
                <td>chloisfimis/chluinfimis</td>
                <td>go gcloisimid/go gcluinimid</td>
                <td>cloisimis/cluinimis</td>
              </tr>
              <tr>
                <td>chloisfeadh/chluinfeadh sibh</td>
                <td>go gcloise/go gcluine sibh</td>
                <td>cloisigí/cluinigí</td>
              </tr>
              <tr>
                <td>chloisfidís/chluinfidís</td>
                <td>go gcloise/go gcluine siad</td>
                <td>cloisidís/cluinidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> chloisfí/chluinfí</td>
                <td><i>{commonDb["nod-sb"]}</i> go gcloistear/go gcluintear</td>
                <td><i>{commonDb["nod-sb"]}</i> cloistear/cluintear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cloisteáil/cluinstin</td>
                <td>cloiste/cluinte</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5R = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5R-caption"]} docLang={props.docLang} tableLetter="R">
    <thead>
      <thead></thead>
      <tr className="primary-header-row">
        <th>Déan 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Déan"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={5}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="tense-row">
                <th rowSpan={2}>{chapterDb["PresentTense"]}
                </th>
                <th colSpan={2}>{chapterDb["PastTense"]}
                </th>
                <th rowSpan={2}>{chapterDb["PastHabitualTense"]}
                </th>
                <th rowSpan={2}>{chapterDb["FutureTense"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["Independent"]}
                </th>
                <th>{chapterDb["Dependent"]}
                </th>
              </tr>
              <tr>
                <td>déanaim</td>
                <td>rinne/dhein mé</td>
                <td>ní dhearna/níor dhein mé</td>
                <td>dhéanainn</td>
                <td>déanfaidh mé</td>
              </tr>
              <tr>
                <td>déanann tú</td>
                <td>rinne/dhein tú</td>
                <td>ní dhearna/níor dhein tú</td>
                <td>dhéantá</td>
                <td>déanfaidh tú</td>
              </tr>
              <tr>
                <td>déanann sé/sí</td>
                <td>rinne/dhein sé/sí</td>
                <td>ní dhearna/níor dhein sé/sí</td>
                <td>dhéanadh sé/sí</td>
                <td>déanfaidh sé/sí</td>
              </tr>
              <tr>
                <td>déanaimid</td>
                <td>rinneamar/dheineamar</td>
                <td>ní dhearnamar/níor dheineamar</td>
                <td>dhéanaimis</td>
                <td>déanfaimid</td>
              </tr>
              <tr>
                <td>déanann sibh</td>
                <td>rinne/dhein sibh</td>
                <td>ní dhearna/níor dhein sibh</td>
                <td>dhéanadh sibh</td>
                <td>déanfaidh sibh</td>
              </tr>
              <tr>
                <td>déanann siad</td>
                <td>rinne/dhein siad</td>
                <td>ní dhearna/níor dhein siad</td>
                <td>dhéanaidís</td>
                <td>déanfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> déantar</td>
                <td><i>{commonDb["nod-sb"]}</i> rinneadh/deineadh</td>
                <td><i>{commonDb["nod-sb"]}</i> ní dhearnadh/níor deineadh</td>
                <td><i>{commonDb["nod-sb"]}</i> dhéantaí</td>
                <td><i>{commonDb["nod-sb"]}</i> déanfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dhéanfainn</td>
                <td>go ndéana mé</td>
                <td>déanaim</td>
              </tr>
              <tr>
                <td>dhéanfá</td>
                <td>go ndéana tú</td>
                <td>déan</td>
              </tr>
              <tr>
                <td>dhéanfadh sé/sí</td>
                <td>go ndéana sé/sí</td>
                <td>déanadh sé/sí</td>
              </tr>
              <tr>
                <td>dhéanfaimis</td>
                <td>go ndéanaimid</td>
                <td>déanaimis</td>
              </tr>
              <tr>
                <td>dhéanfadh sibh</td>
                <td>go ndéana sibh</td>
                <td>déanaigí</td>
              </tr>
              <tr>
                <td>dhéanfaidís</td>
                <td>go ndéana siad</td>
                <td>déanaidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> dhéanfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go ndéantar</td>
                <td><i>{commonDb["nod-sb"]}</i> déanta</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>déanamh</td>
                <td>déanta</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5S = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5S-caption"]} docLang={props.docLang} tableLetter="S">
    <thead>
      <thead></thead>
      <tr className="primary-header-row">
        <th>Faigh 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Faigh"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={5}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th rowSpan={2}>{chapterDb["PresentTense"]}
                </th>
                <th rowSpan={2}>{chapterDb["PastTense"]}
                </th>
                <th rowSpan={2}>{chapterDb["PastHabitualTense"]}
                </th>
                <th colSpan={2}>{chapterDb["FutureTense"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["Independent"]}
                </th>
                <th>{chapterDb["Dependent"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>faighim</td>
                <td>fuair mé</td>
                <td>d&rsquo;fhaighinn</td>
                <td>gheobhaidh mé</td>
                <td>ní bhfaighidh mé</td>
              </tr>
              <tr>
                <td>faigheann tú</td>
                <td>fuair tú</td>
                <td>d&rsquo;fhaighteá</td>
                <td>gheobhaidh tú</td>
                <td>ní bhfaighidh tú</td>
              </tr>
              <tr>
                <td>faigheann sé/sí</td>
                <td>fuair sé/sí</td>
                <td>d&rsquo;fhaigheadh sé/sí</td>
                <td>gheobhaidh sé/sí</td>
                <td>ní bhfaighidh sé/sí</td>
              </tr>
              <tr>
                <td>faighimid</td>
                <td>fuaireamar</td>
                <td>d&rsquo;fhaighimis</td>
                <td>gheobhaimid</td>
                <td>ní bhfaighimid</td>
              </tr>
              <tr>
                <td>faigheann sibh</td>
                <td>fuair sibh</td>
                <td>d&rsquo;fhaigheadh sibh</td>
                <td>gheobhaidh sibh</td>
                <td>ní bhfaighidh sibh</td>
              </tr>
              <tr>
                <td>faigheann siad</td>
                <td>fuair siad</td>
                <td>d&rsquo;fhaighidís</td>
                <td>gheobhaidh siad</td>
                <td>ní bhfaighidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> faightear</td>
                <td><i>{commonDb["nod-sb"]}</i> fuarthas</td>
                <td><i>{commonDb["nod-sb"]}</i> d&rsquo;fhaightí</td>
                <td><i>{commonDb["nod-sb"]}</i> gheofar</td>
                <td><i>{commonDb["nod-sb"]}</i> ní bhfaighfear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={2}>{chapterDb["ConditionalMood"]}
                </th>
                <th rowSpan={2}>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th rowSpan={2}>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["Independent"]}
                </th>
                <th>{chapterDb["Dependent"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>gheobhainn</td>
                <td>ní bhfaighinn</td>
                <td>go bhfaighe mé</td>
                <td>faighim</td>
              </tr>
              <tr>
                <td>gheofá</td>
                <td>ní bhfaighfeá</td>
                <td>go bhfaighe tú</td>
                <td>faigh</td>
              </tr>
              <tr>
                <td>gheobhadh sé/sí</td>
                <td>ní bhfaigheadh sé/sí</td>
                <td>go bhfaighe sé/sí</td>
                <td>faigheadh sé/sí</td>
              </tr>
              <tr>
                <td>gheobhaimis</td>
                <td>ní bhfaighimis</td>
                <td>go bhfaighimid</td>
                <td>faighimis</td>
              </tr>
              <tr>
                <td>gheobhadh sibh</td>
                <td>ní bhfaigheadh sibh</td>
                <td>go bhfaighe sibh</td>
                <td>faighigí</td>
              </tr>
              <tr>
                <td>gheobhaidís</td>
                <td>ní bhfaighidís</td>
                <td>go bhfaighe siad</td>
                <td>faighidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> gheofaí</td>
                <td><i>{commonDb["nod-sb"]}</i> ní bhfaighfí</td>
                <td><i>{commonDb["nod-sb"]}</i> go bhfaightear</td>
                <td><i>{commonDb["nod-sb"]}</i> faightear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>fáil</td>
                <td>faighte</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5T = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5T-caption"]} docLang={props.docLang} tableLetter="T">
    <thead>
      <thead></thead>
      <tr className="primary-header-row">
        <th>Feic 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Feic"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={5}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="tense-row">
                <th rowSpan={2}>{chapterDb["PresentTense"]}
                </th>
                <th colSpan={2}>{chapterDb["PastTense"]}
                </th>
                <th rowSpan={2}>{chapterDb["PastHabitualTense"]}
                </th>
                <th rowSpan={2}>{chapterDb["FutureTense"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["Independent"]}
                </th>
                <th>{chapterDb["Dependent"]}
                </th>
              </tr>
              <tr>
                <td>feicim</td>
                <td>chonaic mé</td>
                <td>ní fhaca mé</td>
                <td>d&rsquo;fheicinn</td>
                <td>feicfidh mé</td>
              </tr>
              <tr>
                <td>feiceann tú</td>
                <td>chonaic tú</td>
                <td>ní fhaca tú</td>
                <td>d&rsquo;fheicteá</td>
                <td>feicfidh tú</td>
              </tr>
              <tr>
                <td>feiceann sé/sí</td>
                <td>chonaic sé/sí</td>
                <td>ní fhaca sé/sí</td>
                <td>d&rsquo;fheiceadh sé/sí</td>
                <td>feicfidh sé/sí</td>
              </tr>
              <tr>
                <td>feicimid</td>
                <td>chonaiceamar</td>
                <td>ní fhacamar</td>
                <td>d&rsquo;fheicimis</td>
                <td>feicfimid</td>
              </tr>
              <tr>
                <td>feiceann sibh</td>
                <td>chonaic sibh</td>
                <td>ní fhaca sibh</td>
                <td>d&rsquo;fheiceadh sibh</td>
                <td>feicfidh sibh</td>
              </tr>
              <tr>
                <td>feiceann siad</td>
                <td>chonaic siad</td>
                <td>ní fhaca siad</td>
                <td>d&rsquo;fheicidís</td>
                <td>feicfidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> feictear</td>
                <td><i>{commonDb["nod-sb"]}</i> chonacthas</td>
                <td><i>{commonDb["nod-sb"]}</i> ní fhacthas</td>
                <td><i>{commonDb["nod-sb"]}</i> d&rsquo;fheictí</td>
                <td><i>{commonDb["nod-sb"]}</i> feicfear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>d&rsquo;fheicfinn</td>
                <td>go bhfeice mé</td>
                <td>feicim</td>
              </tr>
              <tr>
                <td>d&rsquo;fheicfeá</td>
                <td>go bhfeice tú</td>
                <td>feic</td>
              </tr>
              <tr>
                <td>d&rsquo;fheicfeadh sé/sí</td>
                <td>go bhfeice sé/sí</td>
                <td>feiceadh sé/sí</td>
              </tr>
              <tr>
                <td>d&rsquo;fheicfimis</td>
                <td>go bhfeicimid</td>
                <td>feicimis</td>
              </tr>
              <tr>
                <td>d&rsquo;fheicfeadh sibh</td>
                <td>go bhfeice sibh</td>
                <td>feicigí</td>
              </tr>
              <tr>
                <td>d&rsquo;fheicfidís</td>
                <td>go bhfeice siad</td>
                <td>feicidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> d&rsquo;fheicfí</td>
                <td><i>{commonDb["nod-sb"]}</i> go bhfeictear</td>
                <td><i>{commonDb["nod-sb"]}</i> feictear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>feiceáil</td>
                <td>feicthe</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5U = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5U-caption"]} docLang={props.docLang} tableLetter="U">
    <thead>
      <tr className="primary-header-row">
        <th>Ith 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Ith"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ithim</td>
                <td>d&rsquo;ith mé</td>
                <td>d&rsquo;ithinn</td>
                <td>íosfaidh mé</td>
              </tr>
              <tr>
                <td>itheann tú</td>
                <td>d&rsquo;ith tú</td>
                <td>d&rsquo;iteá</td>
                <td>íosfaidh tú</td>
              </tr>
              <tr>
                <td>itheann sé/sí</td>
                <td>d&rsquo;ith sé/sí</td>
                <td>d&rsquo;itheadh sé/sí</td>
                <td>íosfaidh sé/sí</td>
              </tr>
              <tr>
                <td>ithimid</td>
                <td>d&rsquo;itheamar</td>
                <td>d&rsquo;ithimis</td>
                <td>íosfaimid</td>
              </tr>
              <tr>
                <td>itheann sibh</td>
                <td>d&rsquo;ith sibh</td>
                <td>d&rsquo;itheadh sibh</td>
                <td>íosfaidh sibh</td>
              </tr>
              <tr>
                <td>itheann siad</td>
                <td>d&rsquo;ith siad</td>
                <td>d&rsquo;ithidís</td>
                <td>íosfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> itear</td>
                <td><i>{commonDb["nod-sb"]}</i> itheadh</td>
                <td><i>{commonDb["nod-sb"]}</i> d&rsquo;ití</td>
                <td><i>{commonDb["nod-sb"]}</i> íosfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>d&rsquo;íosfainn</td>
                <td>go n&#x2011;ithe mé</td>
                <td>ithim</td>
              </tr>
              <tr>
                <td>d&rsquo;íosfá</td>
                <td>go n&#x2011;ithe tú</td>
                <td>ith</td>
              </tr>
              <tr>
                <td>d&rsquo;íosfadh sé/sí</td>
                <td>go n&#x2011;ithe sé/sí</td>
                <td>itheadh sé/sí</td>
              </tr>
              <tr>
                <td>d&rsquo;íosfaimis</td>
                <td>go n&#x2011;ithimid</td>
                <td>ithimis</td>
              </tr>
              <tr>
                <td>d&rsquo;íosfadh sibh</td>
                <td>go n&#x2011;ithe sibh</td>
                <td>ithigí</td>
              </tr>
              <tr>
                <td>d&rsquo;íosfaidís</td>
                <td>go n&#x2011;ithe siad</td>
                <td>ithidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> d&rsquo;íosfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go n&#x2011;itear</td>
                <td><i>{commonDb["nod-sb"]}</i> itear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ithe</td>
                <td>ite</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5V = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5V-caption"]} docLang={props.docLang} tableLetter="V">
    <thead>
      <tr className="primary-header-row">
        <th>Tabhair 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Tabhair"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tugaim</td>
                <td>thug mé</td>
                <td>thugainn</td>
                <td>tabharfaidh mé</td>
              </tr>
              <tr>
                <td>tugann tú</td>
                <td>thug tú</td>
                <td>thugtá</td>
                <td>tabharfaidh tú</td>
              </tr>
              <tr>
                <td>tugann sé/sí</td>
                <td>thug sé/sí</td>
                <td>thugadh sé/sí</td>
                <td>tabharfaidh sé/sí</td>
              </tr>
              <tr>
                <td>tugaimid</td>
                <td>thugamar</td>
                <td>thugaimis</td>
                <td>tabharfaimid</td>
              </tr>
              <tr>
                <td>tugann sibh</td>
                <td>thug sibh</td>
                <td>thugadh sibh</td>
                <td>tabharfaidh sibh</td>
              </tr>
              <tr>
                <td>tugann siad</td>
                <td>thug siad</td>
                <td>thugaidís</td>
                <td>tabharfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> tugtar</td>
                <td><i>{commonDb["nod-sb"]}</i> tugadh</td>
                <td><i>{commonDb["nod-sb"]}</i> thugtaí</td>
                <td><i>{commonDb["nod-sb"]}</i> tabharfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>thabharfainn</td>
                <td>go dtuga mé</td>
                <td>tugaim</td>
              </tr>
              <tr>
                <td>thabharfá</td>
                <td>go dtuga tú</td>
                <td>tabhair</td>
              </tr>
              <tr>
                <td>thabharfadh sé/sí</td>
                <td>go dtuga sé/sí</td>
                <td>tugadh sé/sí</td>
              </tr>
              <tr>
                <td>thabharfaimis</td>
                <td>go dtugaimid</td>
                <td>tugaimis</td>
              </tr>
              <tr>
                <td>thabharfadh sibh</td>
                <td>go dtuga sibh</td>
                <td>tugaigí</td>
              </tr>
              <tr>
                <td>thabharfaidís</td>
                <td>go dtuga siad</td>
                <td>tugaidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> thabharfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go dtugtar</td>
                <td><i>{commonDb["nod-sb"]}</i> tugtar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tabhairt</td>
                <td>tugtha</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5W = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5W-caption"]} docLang={props.docLang} tableLetter="W">
    <thead>
      <tr className="primary-header-row">
        <th>Tar 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Tar"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
              <col className="w-[25%]" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={4}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["PresentTense"]}
                </th>
                <th>{chapterDb["PastTense"]}
                </th>
                <th>{chapterDb["PastHabitualTense"]}
                </th>
                <th>{chapterDb["FutureTense"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tagaim</td>
                <td>tháinig mé</td>
                <td>thagainn</td>
                <td>tiocfaidh mé</td>
              </tr>
              <tr>
                <td>tagann tú</td>
                <td>tháinig tú</td>
                <td>thagtá</td>
                <td>tiocfaidh tú</td>
              </tr>
              <tr>
                <td>tagann sé/sí</td>
                <td>tháinig sé/sí</td>
                <td>thagadh sé/sí</td>
                <td>tiocfaidh sé/sí</td>
              </tr>
              <tr>
                <td>tagaimid</td>
                <td>thángamar</td>
                <td>thagaimis</td>
                <td>tiocfaimid</td>
              </tr>
              <tr>
                <td>tagann sibh</td>
                <td>tháinig sibh</td>
                <td>thagadh sibh</td>
                <td>tiocfaidh sibh</td>
              </tr>
              <tr>
                <td>tagann siad</td>
                <td>tháinig siad</td>
                <td>thagaidís</td>
                <td>tiocfaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> tagtar</td>
                <td><i>{commonDb["nod-sb"]}</i> thángthas</td>
                <td><i>{commonDb["nod-sb"]}</i> thagtaí</td>
                <td><i>{commonDb["nod-sb"]}</i> tiocfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>thiocfainn</td>
                <td>go dtaga mé</td>
                <td>tagaim</td>
              </tr>
              <tr>
                <td>thiocfá</td>
                <td>go dtaga tú</td>
                <td>tar</td>
              </tr>
              <tr>
                <td>thiocfadh sé/sí</td>
                <td>go dtaga sé/sí</td>
                <td>tagadh sé/sí</td>
              </tr>
              <tr>
                <td>thiocfaimis</td>
                <td>go dtagaimid</td>
                <td>tagaimis</td>
              </tr>
              <tr>
                <td>thiocfadh sibh</td>
                <td>go dtaga sibh</td>
                <td>tagaigí</td>
              </tr>
              <tr>
                <td>thiocfaidís</td>
                <td>go dtaga siad</td>
                <td>tagaidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> thiocfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go dtagtar</td>
                <td><i>{commonDb["nod-sb"]}</i> tagtar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>teacht</td>
                <td>tagtha</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5X = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5X-caption"]} docLang={props.docLang} tableLetter="X">
    <thead>
      <thead></thead>
      <tr className="primary-header-row">
        <th>Téigh 
          <InlineTl lang={props.docLang}>{chapterDb["briathar-Téigh"]}</InlineTl>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table>
            <thead>
              <tr className="secondary-header-row">
                <th colSpan={5}>{chapterDb["IndicativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="tense-row">
                <th rowSpan={2}>{chapterDb["PresentTense"]}
                </th>
                <th colSpan={2}>{chapterDb["PastTense"]}
                </th>
                <th rowSpan={2}>{chapterDb["PastHabitualTense"]}
                </th>
                <th rowSpan={2}>{chapterDb["FutureTense"]}
                </th>
              </tr>
              <tr className="tense-row">
                <th>{chapterDb["Independent"]}
                </th>
                <th>{chapterDb["Dependent"]}
                </th>
              </tr>
              <tr>
                <td>téim</td>
                <td>chuaigh mé</td>
                <td>ní dheachaigh mé</td>
                <td>théinn</td>
                <td>rachaidh mé</td>
              </tr>
              <tr>
                <td>téann tú</td>
                <td>chuaigh tú</td>
                <td>ní dheachaigh tú</td>
                <td>théiteá</td>
                <td>rachaidh tú</td>
              </tr>
              <tr>
                <td>téann sé/sí</td>
                <td>chuaigh sé/sí</td>
                <td>ní dheachaigh sé/sí</td>
                <td>théadh sé/sí</td>
                <td>rachaidh sé/sí</td>
              </tr>
              <tr>
                <td>téimid</td>
                <td>chuamar</td>
                <td>ní dheachamar</td>
                <td>théimis</td>
                <td>rachaimid</td>
              </tr>
              <tr>
                <td>téann sibh</td>
                <td>chuaigh sibh</td>
                <td>ní dheachaigh sibh</td>
                <td>théadh sibh</td>
                <td>rachaidh sibh</td>
              </tr>
              <tr>
                <td>téann siad</td>
                <td>chuaigh siad</td>
                <td>ní dheachaigh siad</td>
                <td>théidís</td>
                <td>rachaidh siad</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> téitear</td>
                <td><i>{commonDb["nod-sb"]}</i> chuathas</td>
                <td><i>{commonDb["nod-sb"]}</i> ní dheachthas</td>
                <td><i>{commonDb["nod-sb"]}</i> théití</td>
                <td><i>{commonDb["nod-sb"]}</i> rachfar</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["ConditionalMood"]}
                </th>
                <th>{chapterDb["PresentSubjunctiveMood"]}
                </th>
                <th>{chapterDb["ImperativeMood"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>rachainn</td>
                <td>go dté mé</td>
                <td>téim</td>
              </tr>
              <tr>
                <td>rachfá</td>
                <td>go dté tú</td>
                <td>téigh</td>
              </tr>
              <tr>
                <td>rachadh sé/sí</td>
                <td>go dté sé/sí</td>
                <td>téadh sé/sí</td>
              </tr>
              <tr>
                <td>rachaimis</td>
                <td>go dtéimid</td>
                <td>téimis</td>
              </tr>
              <tr>
                <td>rachadh sibh</td>
                <td>go dté sibh</td>
                <td>téigí</td>
              </tr>
              <tr>
                <td>rachaidís</td>
                <td>go dté siad</td>
                <td>téidís</td>
              </tr>
              <tr>
                <td><i>{commonDb["nod-sb"]}</i> rachfaí</td>
                <td><i>{commonDb["nod-sb"]}</i> go dtéitear</td>
                <td><i>{commonDb["nod-sb"]}</i> téitear</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
            <thead>
              <tr className="secondary-header-row">
                <th>{chapterDb["VerbalNoun"]}
                </th>
                <th>{chapterDb["VerbalAdjective"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dul</td>
                <td>dulta</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5Y = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5Y-caption"]} docLang={props.docLang} tableLetter="Y">
    <thead>
      <thead>
        <tr>
          <th>{chapterDb["Trait"]}
          </th>
          <th>{chapterDb["Table5Y-col2"]}
          </th>
        </tr>
      </thead>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table5Y-trait1"]}
        </td>
        <td>blaiseadh, briseadh, ceapadh, glanadh, meascadh, pósadh</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait2"]}
        </td>
        <td>bualadh, fáscadh, loscadh, rúscadh, troscadh</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait3"]}
        </td>
        <td>brath, cumasc, cur, gol, lot, siúl, toirmeasc, tomhas</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait4"]}
        </td>
        <td>amharc, crith, díol, fás, íoc, ól, ríomh, scríobh, teagasc, teip</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait5"]}
        </td>
        <td>fágáil, féadachtáil, gabháil, maireachtáil, tógáil</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait6"]}
        </td>
        <td>adhaint, baint, ceilt, deighilt, meilt, roinnt</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait7"]}
        </td>
        <td>buaireamh, caitheamh, fónamh, léamh, seasamh, téamh</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait8"]}
        </td>
        <td>airleacan, leagan, ligean, teilgean, tionlacan, tréigean</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait9"]}
        </td>
        <td>athnuachan, beochan, buíochan, buachan, cruachan</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait10"]}
        </td>
        <td>éisteacht, fanacht, gluaiseacht</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait11"]}
        </td>
        <td>druidim, léim, titim</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait12"]}
        </td>
        <td>creidiúint, feiliúint, giniúint, leanúint, oiliúint</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait13"]}
        </td>
        <td>bá, brú, cloí, dlí, feo, guí, lí, lua, meá, ní, plé, reo, sleá, sní, sú, suí, trá, treá</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Y-trait14"]}
        </td>
        <td>bleán, faire, fóirithint, iarraidh, screadach, seinm, tuiscint</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5Z = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5Z-caption"]} docLang={props.docLang} tableLetter="Z">
    <thead>
      <thead>
        <tr>
          <th>{chapterDb["Trait"]}
          </th>
          <th>{chapterDb["Table5Y-col2"]}
          </th>
        </tr>
      </thead>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table5Z-trait-1"]}
        </td>
        <td>achoimriú, bailiú, cabhrú, daingniú, eagrú, fuarú, gríosú, oibriú</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-2"]}
        </td>
        <td>cónaí, corraí, eachtraí, fiafraí, ionsaí</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-3"]}
        </td>
        <td>achainí, éirí, impí, taithí</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-4"]}
        </td>
        <td>aithint, bagairt, cosaint, eitilt, fógairt, imirt, oscailt, seachaint</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-5"]}
        </td>
        <td>ceangal, cogar, freastal, iompar, rómhar, soláthar, taisteal</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-6"]}
        </td>
        <td>áireamh, cúiteamh, éileamh, iomramh, machnamh, smaoineamh</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-7"]}
        </td>
        <td>ceannach, cnuasach, eiteach, réiteach, taifeach</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-8"]}
        </td>
        <td>aoireacht, dúiseacht, fortacht, imeacht, tairngreacht</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-9"]}
        </td>
        <td>admháil, athchúrsáil, teagmháil</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-10"]}
        </td>
        <td>marcaíocht, ráthaíocht, tóraíocht</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5Z-trait-11"]}
        </td>
        <td>damhsa, dúchan, eisiúint, insint, tiúchan</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5AA = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5AA-caption"]} docLang={props.docLang} tableLetter="AA">
    <thead>
      <thead>
        <tr>
          <th>{chapterDb["Trait"]}
          </th>
          <th>{chapterDb["Table5AA-Col2"]}
          </th>
          <th>{chapterDb["Table5AA-Col3"]}
          </th>
        </tr>
      </thead>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table5AA-trait1"]}
        </td>
        <td>
          <ul>
            <li>bearradh</li>
            <li>cáineadh</li>
            <li>folcadh</li>
            <li>moladh</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>scian bhearrtha</li>
            <li>rún cáinte</li>
            <li>dabhach folctha</li>
            <li>dán molta</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5AA-trait2"]}
        </td>
        <td>
          <ol>
            <li>cló</li>
            <li>reo</li>
            <li>sú</li>
          </ol>
        </td>
        <td>
          <ol>
            <li>leabhar clóite</li>
            <li>uachtar reoite</li>
            <li>páipéar súite</li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5AA-trait3"]}
        </td>
        <td>
          <ol>
            <li>cónaí</li>
            <li>éalú</li>
            <li>ionsaí</li>
          </ol>
        </td>
        <td>
          <ol>
            <li>áit chónaithe</li>
            <li>bealach éalaithe</li>
            <li>lucht ionsaithe</li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5AA-trait4"]}
        </td>
        <td>
          <ol>
            <li>cuimilt</li>
            <li>cosaint</li>
            <li>labhairt</li>
          </ol>
        </td>
        <td>
          <ol>
            <li>barr cuimilte</li>
            <li>gléas cosanta</li>
            <li>deis labhartha</li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5AA-trait5"]}
        </td>
        <td>
          <ol>
            <li>coimeád</li>
            <li>léamh</li>
            <li>scríobh</li>
          </ol>
        </td>
        <td>
          <ol>
            <li>fear coimeádta</li>
            <li>lucht léite</li>
            <li>an focal scríofa</li>
          </ol>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5AA-trait6"]}
        </td>
        <td>
          <ol>
            <li>bruith</li>
            <li>druidim</li>
          </ol>
        </td>
        <td>
          <ol>
            <li>práta bruite</li>
            <li>dorn druidte</li>
          </ol>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5BB = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5BB-caption"]} docLang={props.docLang} tableLetter="BB">
    <thead>
      <thead>
        <tr>
          <th>{chapterDb["Trait"]}
          </th>
          <th>{chapterDb["Table5AA-Col2"]}
          </th>
          <th>{chapterDb["Table5AA-Col3"]}
          </th>
        </tr>
      </thead>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table5BB-trait1"]}
        </td>
        <td>
          <ul>
            <li>gol</li>
            <li>machnamh</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>fonn goil</li>
            <li>ag déanamh a machnaimh</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5BB-trait2"]}
        </td>
        <td>fóirithint</td>
        <td>foireann fóirithinte</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5BB-trait3"]}
        </td>
        <td>
          <ul>
            <li>admháil</li>
            <li>dúiseacht</li>
            <li>iomáint</li>
            <li>lúbarnaíl</li>
            <li>oiliúint</li>
            <li>díolaim</li>
            <li>éag</li>
            <li>tuiscint</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>páipéar admhála</li>
            <li>clog dúiseachta</li>
            <li>foireann iomána</li>
            <li>le teann lúbarnaíola</li>
            <li>coláiste oiliúna</li>
            <li>fear díolama</li>
            <li>ar chúl éaga</li>
            <li>bua tuisceana</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5CC = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5CC-caption"]} docLang={props.docLang} tableLetter="CC">
    <thead>
      <tr>
        <th>{chapterDb["Trait"]}
        </th>
        <th>{chapterDb["Table5AA-Col2"]}
        </th>
        <th>{chapterDb["Table5AA-Col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table5CC-trait-1"]}
        </td>
        <td>
          <ul>
            <li>ag magadh</li>
            <li>ag seanchas</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>cúis mhagaidh</li>
            <li>fear seanchais</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5CC-trait-2"]}
        </td>
        <td>
          <ul>
            <li>ag báisteach</li>
            <li>ag fearthainn</li>
            <li>fuadar</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>cuma bháistí</li>
            <li>fearthainne</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5CC-trait-3"]}
        </td>
        <td>
          <ul>
            <li>ag bádóireacht</li>
            <li>ag peataireacht</li>
            <li>ag bradaíl</li>
            <li>ag feadaíl</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>cumann bádóireachta</li>
            <li>an iomarca peataireachta</li>
            <li>bó bhradaíola</li>
            <li>port feadaíola</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5DD = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5DD-caption"]} docLang={props.docLang} tableLetter="DD">
    <thead>
      <tr>
        <th>{chapterDb["Trait"]}
        </th>
        <th>{chapterDb["Table5AA-Col2"]}
        </th>
        <th>{chapterDb["Table5AA-Col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table5DD-trait-1"]}
        </td>
        <td>níochán</td>
        <td>meaisín níocháin</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5DD-trait-2"]}
        </td>
        <td>preabarnach</td>
        <td>rás preabarnaí</td>
      </tr>
      <tr>
        <td>{chapterDb["Table5DD-trait-3"]}
        </td>
        <td>léitheoireacht</td>
        <td>ábhar léitheoireachta</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5EE = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5EE-caption"]} docLang={props.docLang} tableLetter="EE">
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/3" />
      <col className="w-1/3" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Trait"]}
        </th>
        <th>{chapterDb["Table5AA-Col2"]}
        </th>
        <th>{chapterDb["Table5EE-col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table5EE-trait-1"]}
        </td>
        <td>
          <ul>
            <li>brath</li>
            <li>ceannach</li>
            <li>comhrac</li>
            <li>gearán</li>
            <li>iompar</li>
            <li>tochas</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>lucht braith</li>
            <li>árthach ceannaigh</li>
            <li>céile comhraic</li>
            <li>cúis ghearáin</li>
            <li>gléas iompair</li>
            <li>cuaille tochais</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5EE-trait-2"]}
        </td>
        <td>
          <ul>
            <li>aithris</li>
            <li>breith</li>
            <li>insint</li>
            <li>léim</li>
            <li>titim</li>
            <li>úsáid</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>cóir aithrise</li>
            <li>lá breithe</li>
            <li>an sórt insinte</li>
            <li>ag caitheamh léime</li>
            <li>fonn titime</li>
            <li>easpa úsáide</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table5EE-trait-3"]}
        </td>
        <td>
          <ul>
            <li>beochan</li>
            <li>crith</li>
            <li>foghlaim</li>
            <li>íoc</li>
            <li>reic</li>
            <li>rith</li>
            <li>seinm</li>
            <li>sníomh</li>
            <li>trácht</li>
            <li>troid</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>deoch bheochana</li>
            <li>galar creatha</li>
            <li>aos foghlama</li>
            <li>fear íoca</li>
            <li>stalla reaca</li>
            <li>ligean reatha</li>
            <li>lucht seanma</li>
            <li>fearsaid sníomha</li>
            <li>brú tráchta</li>
            <li>babhta troda</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table5FF = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={5} caption={chapterDb["Table5FF-caption"]} docLang={props.docLang} tableLetter="FF">
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/3" />
      <col className="w-1/3" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table5FF-col1"]}
        </th>
        <th>{chapterDb["Table5FF-col2"]}
        </th>
        <th>{chapterDb["Table5FF-col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>brath</td>
        <td>fear a bhraite</td>
        <td>lucht braith</td>
      </tr>
      <tr>
        <td>ceannach</td>
        <td>fear ceannaithe na mbeithíoch</td>
        <td>árthach ceannaigh</td>
      </tr>
      <tr>
        <td>déan</td>
        <td>fear déanta brící</td>
        <td>sórt déanaimh</td>
      </tr>
      <tr>
        <td>insint</td>
        <td>fear inste scéil</td>
        <td>an sórt insinte</td>
      </tr>
      <tr>
        <td>íoc</td>
        <td>lá íoctha na rátaí</td>
        <td>fear íoca</td>
      </tr>
      <tr>
        <td>iompar</td>
        <td>tar éis a iompartha</td>
        <td>gléas iompair</td>
      </tr>
      <tr>
        <td>ól</td>
        <td>lucht ólta poitín</td>
        <td>boladh óil</td>
      </tr>
      <tr>
        <td>úsáid</td>
        <td>modh a úsáidte</td>
        <td>easpa úsáide</td>
      </tr>
    </tbody>
  </MarkedTable>;
};
