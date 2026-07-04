import { getCommonTranslator, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const Table2A = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="A"
    caption={chapterDb["Table2A-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/6" />
      <col className="w-1/6" />
      <col className="w-1/6" />
      <col className="w-1/6" />
      <col className="w-1/6" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2A-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={2}>{chapterDb["declension-1"]}
        </th>
        <td>cás</td>
        <td>cáis</td>
        <td>cásanna</td>
        <td>cásanna</td>
      </tr>
      <tr>
        <td>ceol</td>
        <td>ceoil</td>
        <td>ceolta</td>
        <td>ceolta</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={2}>{chapterDb["declension-2"]}
        </th>
        <td>foirm</td>
        <td>foirme</td>
        <td>foirmeacha</td>
        <td>foirmeacha</td>
      </tr>
      <tr>
        <td>sliabh</td>
        <td>sléibhe</td>
        <td>sléibhte</td>
        <td>sléibhte</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={2}>{chapterDb["declension-3"]}
        </th>
        <td>feirmeoir</td>
        <td>feirmeora</td>
        <td>feirmeoirí</td>
        <td>feirmeoirí</td>
      </tr>
      <tr>
        <td>foráil</td>
        <td>forála</td>
        <td>forálacha</td>
        <td>forálacha</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={2}>{chapterDb["declension-4"]}
        </th>
        <td>amhránaí</td>
        <td>amhránaí</td>
        <td>amhránaithe</td>
        <td>amhránaithe</td>
      </tr>
      <tr>
        <td>gloine</td>
        <td>gloine</td>
        <td>gloiní</td>
        <td>gloiní</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={2}>{chapterDb["declension-5"]}
        </th>
        <td>deartháir</td>
        <td>dearthár</td>
        <td>deartháireacha</td>
        <td>deartháireacha</td>
      </tr>
      <tr>
        <td>lasair</td>
        <td>lasrach</td>
        <td>lasracha</td>
        <td>lasracha</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={2}>{chapterDb["Table2A-Irregular"]}
        </th>
        <td>leaba</td>
        <td>leapa</td>
        <td>leapacha</td>
        <td>leapacha</td>
      </tr>
      <tr>
        <td>teach</td>
        <td>tí</td>
        <td>tithe</td>
        <td>tithe</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2B = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="B"
    caption={chapterDb["Table2B-Title"]}
    docLang={props.docLang}>
    <thead>
      <tr>
        <th className="text-center" colSpan={3}>{chapterDb["declension-1"]}
        </th>
      </tr>
      <tr>
        <th className="bg-orange-600 text-white"></th>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-orange-600 text-white">{commonDb["Uatha"]}
        </th>
        <td>fear</td>
        <td>fir</td>
      </tr>
      <tr>
        <th className="bg-orange-600 text-white">{commonDb["Iolra"]}
        </th>
        <td>fir</td>
        <td>fear</td>
      </tr>
    </tbody>
  </MarkedTable>;
}

export const Table2C = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="C"
    caption={chapterDb["Table2C-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/3" />
      <col className="w-1/3" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center" colSpan={3}>{chapterDb["declension-2"]}
        </th>
      </tr>
      <tr>
        <th className="bg-orange-600 text-white"></th>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-orange-600 text-white">{commonDb["Uatha"]}
        </th>
        <td>fuinneog</td>
        <td>fuinneoige</td>
      </tr>
      <tr>
        <th className="bg-orange-600 text-white">{commonDb["Iolra"]}
        </th>
        <td>fuinneoga</td>
        <td>fuinneog</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2D = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="D"
    caption={chapterDb["Table2D-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/6" />
      <col className="w-1/6" />
      <col className="w-1/6" />
      <col className="w-1/6" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2A-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300 text-left" rowSpan={2}>{chapterDb["declension-2"]}
        </th>
        <td>ealaín</td>
        <td>ealaíne</td>
        <td>ealaíona</td>
        <td>ealaíon</td>
      </tr>
      <tr>
        <td>súil</td>
        <td>súile</td>
        <td>súile</td>
        <td>súl</td>
      </tr>
      <tr>
        <th className="bg-stone-300 text-left">{chapterDb["declension-3"]}
        </th>
        <td>mionn</td>
        <td>mionna</td>
        <td>mionnaí</td>
        <td>mionn</td>
      </tr>
      <tr>
        <th className="bg-stone-300 text-left" rowSpan={2}>{chapterDb["declension-4"]}
        </th>
        <td>bó</td>
        <td>bó</td>
        <td>ba</td>
        <td>bó</td>
      </tr>
      <tr>
        <td>grásta</td>
        <td>grásta</td>
        <td>grásta</td>
        <td>grást</td>
      </tr>
      <tr>
        <th className="bg-stone-300 text-left" rowSpan={2}>{chapterDb["declension-5"]}
        </th>
        <td>caora</td>
        <td>caorach</td>
        <td>caoirigh</td>
        <td>caorach</td>
      </tr>
      <tr>
        <td>lacha</td>
        <td>lachan</td>
        <td>lachain</td>
        <td>lachan</td>
      </tr>
      <tr>
        <th className="bg-stone-300 text-left" rowSpan={2}>{chapterDb["Table2A-Irregular"]}
        </th>
        <td>bean</td>
        <td>mná</td>
        <td>mná</td>
        <td>ban</td>
      </tr>
      <tr>
        <td>olann</td>
        <td>olla</td>
        <td>olanna</td>
        <td>olann</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2E = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="E"
    caption={chapterDb["Table2E-Title"]}
    docLang={props.docLang}>
    <tbody>
      <tr>
        <td>
          <table className="chapter-2">
            <colgroup>
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5}>{chapterDb["declension-1"]}
                </th>
              </tr>
              <tr>
                <th>{commonDb["Inscne"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Iolra"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Iolra"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>{commonDb["Firinscneach"]}
                </td>
                <td rowSpan={2}>{chapterDb["Table2E-row1-cell2"]}
                </td>
                <td rowSpan={2}>{chapterDb["Table2E-row1-cell3"]}
                </td>
                <td>{chapterDb["Table2E-row1-cell4"]}
                </td>
                <td>{chapterDb["Table2E-row1-cell5"]}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>{chapterDb["Table2E-row1-cell6"]}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table className="chapter-2">
            <colgroup>
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5}>{chapterDb["declension-2"]}
                </th>
              </tr>
              <tr>
                <th>{commonDb["Inscne"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Iolra"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Iolra"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>{chapterDb["Table2E-row2-cell1"]}
                </td>
                <td rowSpan={2}>{chapterDb["Table2E-row2-cell2"]}
                </td>
                <td rowSpan={2}>{chapterDb["Table2E-row2-cell3"]}
                </td>
                <td>{chapterDb["Table2E-row2-cell4"]}
                </td>
                <td>{chapterDb["Table2E-row2-cell5"]}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>{chapterDb["Table2E-row2-cell6"]}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table className="chapter-2">
            <colgroup>
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5}>{chapterDb["declension-3"]}
                </th>
              </tr>
              <tr>
                <th>{commonDb["Inscne"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Iolra"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Iolra"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{chapterDb["Table2E-row3-cell1"]}
                </td>
                <td>{chapterDb["Table2E-row3-cell2"]}
                </td>
                <td>{chapterDb["Table2E-row3-cell3"]}
                </td>
                <td colSpan={2}>{chapterDb["Table2E-row3-cell4"]}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table className="chapter-2">
            <colgroup>
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5}>{chapterDb["declension-4"]}
                </th>
              </tr>
              <tr>
                <th>{commonDb["Inscne"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Iolra"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Iolra"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{chapterDb["Table2E-row4-cell1"]}
                </td>
                <td colSpan={2}>{chapterDb["Table2E-row4-cell2"]}
                </td>
                <td colSpan={2}>{chapterDb["Table2E-row4-cell3"]}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table className="chapter-2">
            <colgroup>
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
              <col className="w-1/5" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5}>{chapterDb["declension-5"]}
                </th>
              </tr>
              <tr>
                <th>{commonDb["Inscne"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Uatha"]}
                </th>
                <th>{commonDb["Ainmneach"]}
                  {commonDb["Iolra"]}
                </th>
                <th>{commonDb["Ginideach"]}
                  {commonDb["Iolra"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{chapterDb["Table2E-row5-cell1"]}
                </td>
                <td>{chapterDb["Table2E-row5-cell2"]}
                </td>
                <td>{chapterDb["Table2E-row5-cell3"]}
                </td>
                <td colSpan={2}>{chapterDb["Table2E-row5-cell4"]}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2F = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="F"
    caption={chapterDb["Table2F-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-4/8" />
      <col className="w-1/8" />
      <col className="w-1/8" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2F-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-center">{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
        <th className="text-center">{commonDb["GachTuiseal"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={6}>
          <div>{chapterDb["Table2F-rh1-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2F-rh1-p"]}
          </div>
        </th>
        <td>braon</td>
        <td>braoin</td>
        <td>braonta</td>
      </tr>
      <tr>
        <td>fál</td>
        <td>fáil</td>
        <td>fálta</td>
      </tr>
      <tr>
        <td>glór</td>
        <td>glóir</td>
        <td>glórtha</td>
      </tr>
      <tr>
        <td>líon</td>
        <td>lín</td>
        <td>líonta</td>
      </tr>
      <tr>
        <td>pór</td>
        <td>póir</td>
        <td>pórtha</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>tuar</td>
        <td>tuair</td>
        <td>tuartha</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={5}>
          <div>{chapterDb["Table2F-rh2-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2F-rh2-p"]}
          </div>
        </th>
        <td>árthach</td>
        <td>árthaigh</td>
        <td>árthaí</td>
      </tr>
      <tr>
        <td>cladach</td>
        <td>cladaigh</td>
        <td>cladaí (<em>{chapterDb["genPl"]} cladach</em>)</td>
      </tr>
      <tr>
        <td>cúram</td>
        <td>cúraim</td>
        <td>cúraimí</td>
      </tr>
      <tr>
        <td>daichead</td>
        <td>daichid</td>
        <td>daichidí</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>margadh</td>
        <td>margaidh</td>
        <td>margaí</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2F-rh3"]}
        </th>
        <td>aonach</td>
        <td>aonaigh</td>
        <td>aontaí</td>
      </tr>
      <tr>
        <td>dearcadh</td>
        <td>dearcaidh</td>
        <td>dearcthaí</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>toradh</td>
        <td>toraidh</td>
        <td>torthaí</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2F-rh4"]}
        </th>
        <td>cás</td>
        <td>cáis</td>
        <td>cásanna</td>
      </tr>
      <tr>
        <td>praghas</td>
        <td>praghais</td>
        <td>praghsanna</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>saghas</td>
        <td>saghais</td>
        <td>saghsanna</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2F-rh5"]}
        </th>
        <td>bóthar</td>
        <td>bóthair</td>
        <td>bóithre</td>
      </tr>
      <tr>
        <td>doras</td>
        <td>dorais</td>
        <td>doirse</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>uasal</td>
        <td>uasail</td>
        <td>uaisle</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2F-rh6"]}
        </th>
        <td>cineál</td>
        <td>cineáil</td>
        <td>cineálacha</td>
      </tr>
      <tr>
        <td>coinníoll</td>
        <td>coinníll</td>
        <td>coinníollacha</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>tobar</td>
        <td>tobair</td>
        <td>toibreacha</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2F-rh7"]}
        </th>
        <td>claíomh</td>
        <td>claímh</td>
        <td>claimhte</td>
      </tr>
      <tr>
        <td>muileann</td>
        <td>muilinn</td>
        <td>muilte</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>smaoineamh</td>
        <td>smaoinimh</td>
        <td>smaointe</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>{chapterDb["Table2F-rh8"]}
        </th>
        <td>breitheamh</td>
        <td>breithimh</td>
        <td>breithiúna</td>
      </tr>
      <tr>
        <td>briathar</td>
        <td>briathair</td>
        <td>briathra</td>
      </tr>
      <tr>
        <td>gníomh</td>
        <td>gnímh</td>
        <td>gníomhartha</td>
      </tr>
      <tr>
        <td>scaitheamh</td>
        <td>scaithimh</td>
        <td>scaití</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2G = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="G"
    caption={chapterDb["Table2G-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-3/8" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2G-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>{chapterDb["Table2G-rh1"]}
        </th>
        <td>amhrán</td>
        <td>amhráin</td>
        <td>amhráin</td>
        <td>amhrán</td>
      </tr>
      <tr>
        <td>beithíoch</td>
        <td>beithígh</td>
        <td>beithígh</td>
        <td>beithíoch</td>
      </tr>
      <tr>
        <td>foirgneamh</td>
        <td>foirgnimh</td>
        <td>foirgnimh</td>
        <td>foirgneamh</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>iasc</td>
        <td>éisc</td>
        <td>éisc</td>
        <td>iasc</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>{chapterDb["Table2G-rh2"]}
        </th>
        <td>bruach</td>
        <td>bruaigh</td>
        <td>bruacha</td>
        <td>bruach</td>
      </tr>
      <tr>
        <td>ceap</td>
        <td>cip</td>
        <td>ceapa</td>
        <td>ceap</td>
      </tr>
      <tr>
        <td>giall</td>
        <td>géill</td>
        <td>gialla</td>
        <td>giall</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>úll</td>
        <td>úill</td>
        <td>úlla</td>
        <td>úll</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2H = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="H"
    caption={chapterDb["Table2H-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-4/8" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2H-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-center">{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
        <th className="text-center">{commonDb["GachTuiseal"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2H-rh1"]}
        </th>
        <td>dabhach</td>
        <td>daibhche</td>
        <td>dabhcha</td>
      </tr>
      <tr>
        <td>roinn</td>
        <td>roinne</td>
        <td>ranna</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>scian</td>
        <td>scine</td>
        <td>sceana</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2H-rh2"]}
        </th>
        <td>áit</td>
        <td>áite</td>
        <td>áiteanna</td>
      </tr>
      <tr>
        <td>blaosc</td>
        <td>blaoisce</td>
        <td>blaoscanna</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>im</td>
        <td>ime</td>
        <td>imeanna</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>
          <div>{chapterDb["Table2H-rh3-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2H-rh3-p"]}
          </div>
        </th>
        <td>abairt</td>
        <td>abairte</td>
        <td>abairtí</td>
      </tr>
      <tr>
        <td>cáipéis</td>
        <td>cáipéise</td>
        <td>cáipéisí</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>earráid</td>
        <td>earráide</td>
        <td>earráidí</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>
          <div>{chapterDb["Table2H-rh4-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2H-rh4-p"]}
          </div>
        </th>
        <td>bainis</td>
        <td>bainise</td>
        <td>bainiseacha</td>
      </tr>
      <tr>
        <td>iall</td>
        <td>éille</td>
        <td>iallacha</td>
      </tr>
      <tr>
        <td>iníon</td>
        <td>iníne</td>
        <td>iníonacha</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>maidin</td>
        <td>maidine</td>
        <td>maidineacha</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>
          <div>{chapterDb["Table2H-rh5-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2H-rh5-p"]}
          </div>
        </th>
        <td>buíon</td>
        <td>buíne</td>
        <td>buíonta</td>
      </tr>
      <tr>
        <td>grian</td>
        <td>gréine</td>
        <td>grianta</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>steall</td>
        <td>steille</td>
        <td>steallta</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>
          <div>{chapterDb["Table2H-rh6-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2H-rh6-p"]}
          </div>
        </th>
        <td>aill</td>
        <td>aille</td>
        <td>aillte</td>
      </tr>
      <tr>
        <td>bléin</td>
        <td>bléine</td>
        <td>bléinte</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>linn</td>
        <td>linne</td>
        <td>linnte</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>{chapterDb["Table2H-rh7"]}
        </th>
        <td>caingean</td>
        <td>caingne</td>
        <td>caingne</td>
      </tr>
      <tr>
        <td>coinneal</td>
        <td>coinnle</td>
        <td>coinnle</td>
      </tr>
      <tr>
        <td>foireann</td>
        <td>foirne</td>
        <td>foirne</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>maighean</td>
        <td>maighne</td>
        <td>maighne</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>{chapterDb["Table2H-rh8"]}
        </th>
        <td>culaith</td>
        <td>culaithe</td>
        <td>cultacha</td>
      </tr>
      <tr>
        <td>gualainn</td>
        <td>gualainne</td>
        <td>guaillí</td>
      </tr>
      <tr>
        <td>sliabh</td>
        <td>sléibhe</td>
        <td>sléibhte</td>
      </tr>
      <tr>
        <td>uair</td>
        <td>uaire</td>
        <td>uaireanta</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2I = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="I"
    caption={chapterDb["Table2I-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-1/3" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2I-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={6}>{chapterDb["Table2I-rh1"]}
        </th>
        <td>amharclann</td>
        <td>amharclainne</td>
        <td>amharclanna</td>
        <td>amharclann</td>
      </tr>
      <tr>
        <td>beach</td>
        <td>beiche</td>
        <td>beacha</td>
        <td>beach</td>
      </tr>
      <tr>
        <td>dallóg</td>
        <td>dallóige</td>
        <td>dallóga</td>
        <td>dallóg</td>
      </tr>
      <tr>
        <td>gealach</td>
        <td>gealaí</td>
        <td>gealacha</td>
        <td>gealach</td>
      </tr>
      <tr>
        <td>girseach</td>
        <td>girsí</td>
        <td>girseacha</td>
        <td>girseach</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>maighdean</td>
        <td>maighdine</td>
        <td>maighdeana</td>
        <td>maighdean</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>{chapterDb["Table2I-rh2"]}
        </th>
        <td>cill</td>
        <td>cille</td>
        <td>cealla</td>
        <td>ceall</td>
      </tr>
      <tr>
        <td>deoir</td>
        <td>deoire</td>
        <td>deora</td>
        <td>deor</td>
      </tr>
      <tr>
        <td>ealaín</td>
        <td>ealaíne</td>
        <td>ealaíona</td>
        <td>ealaíon</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>rinn</td>
        <td>rinne</td>
        <td>reanna</td>
        <td>reann</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>{chapterDb["Table2I-rh3"]}
        </th>
        <td>ainimh</td>
        <td>ainimhe</td>
        <td>ainimhe</td>
        <td>aineamh</td>
      </tr>
      <tr>
        <td>dúil</td>
        <td>dúile</td>
        <td>dúile</td>
        <td>dúl</td>
      </tr>
      <tr>
        <td>glúin</td>
        <td>glúine</td>
        <td>glúine</td>
        <td>glún</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>súil</td>
        <td>súile</td>
        <td>súile</td>
        <td>sú</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2J = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="J"
    caption={chapterDb["Table2J-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2J-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-center">{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
        <th className="text-center">{commonDb["GachTuiseal"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={8}>
          <div>{chapterDb["Table2J-rh1-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2J-rh1-p"]}
          </div>
        </th>
        <td>athnuachan</td>
        <td>athnuachana</td>
        <td>athnuachaintí</td>
      </tr>
      <tr>
        <td>bagairt</td>
        <td>bagartha</td>
        <td>bagairtí</td>
      </tr>
      <tr>
        <td>báicéir</td>
        <td>báicéara</td>
        <td>báicéirí</td>
      </tr>
      <tr>
        <td>beannacht</td>
        <td>beannachta</td>
        <td>beannachtaí</td>
      </tr>
      <tr>
        <td>dlíodóir</td>
        <td>dlíodóra</td>
        <td>dlíodóirí</td>
      </tr>
      <tr>
        <td>dochtúir</td>
        <td>dochtúra</td>
        <td>dochtúirí</td>
      </tr>
      <tr>
        <td>eisiúint</td>
        <td>eisiúna</td>
        <td>eisiúintí</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>múinteoir</td>
        <td>múinteora</td>
        <td>múinteoirí</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>
          <div>{chapterDb["Table2J-rh2-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2J-rh2-p"]}
          </div>
        </th>
        <td>droim</td>
        <td>droma</td>
        <td>dromanna</td>
      </tr>
      <tr>
        <td>rang</td>
        <td>ranga</td>
        <td>ranganna</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>troid</td>
        <td>troda</td>
        <td>troideanna</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2J-rh3"]}
        </th>
        <td>feadhain</td>
        <td>feadhna</td>
        <td>feadhna</td>
      </tr>
      <tr>
        <td>gamhain</td>
        <td>gamhna</td>
        <td>gamhna</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>slios</td>
        <td>sleasa</td>
        <td>sleasa</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>
          <div>{chapterDb["Table2J-rh4-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2J-rh4-p1"]}
          </div>
          <div className="font-normal">{chapterDb["Table2J-rh4-p2"]}
          </div>
        </th>
        <td>admháil</td>
        <td>admhála</td>
        <td>admhálacha</td>
      </tr>
      <tr>
        <td>barúil</td>
        <td>barúla</td>
        <td>barúlacha</td>
      </tr>
      <tr>
        <td>fíniúin</td>
        <td>fíniúna</td>
        <td>fíniúnacha</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>onóir</td>
        <td>onóra</td>
        <td>onóracha</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>
          <div>{chapterDb["Table2J-rh5-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2J-rh5-p"]}
          </div>
        </th>
        <td>cion (<i>{commonDb["saBhrí"]}</i> coir)</td>
        <td>ciona</td>
        <td>cionta</td>
      </tr>
      <tr>
        <td>feoil</td>
        <td>feola</td>
        <td>feolta</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>gleann</td>
        <td>gleanna</td>
        <td>gleannta</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2J-rh6"]}
        </th>
        <td>cluain</td>
        <td>cluana</td>
        <td>cluainte</td>
      </tr>
      <tr>
        <td>móin</td>
        <td>móna</td>
        <td>móinte</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>táin</td>
        <td>tána</td>
        <td>táinte</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={5}>
          <div><b>{chapterDb["Table2J-rh7-title"]}</b></div>
        </th>
        <td>anacair</td>
        <td>anacra</td>
        <td>anacraí</td>
      </tr>
      <tr>
        <td>buachaill</td>
        <td>buachalla</td>
        <td>buachaillí</td>
      </tr>
      <tr>
        <td>conradh</td>
        <td>conartha</td>
        <td>conarthaí</td>
      </tr>
      <tr>
        <td>maitheas</td>
        <td>maitheasa</td>
        <td>maitheasaí</td>
      </tr>
      <tr>
        <td>roth</td>
        <td>rotha</td>
        <td>rothaí</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2K = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="K"
    caption={chapterDb["Table2K-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-1/4" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2K-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={5}>{chapterDb["Table2K-Col1Text"]}
        </th>
        <td>béas</td>
        <td>béasa</td>
        <td>béasa</td>
        <td>béas</td>
      </tr>
      <tr>
        <td>dreas</td>
        <td>dreasa</td>
        <td>dreasa</td>
        <td>dreas</td>
      </tr>
      <tr>
        <td>mionn</td>
        <td>mionna</td>
        <td>mionnaí</td>
        <td>mionn</td>
      </tr>
      <tr>
        <td>tréad</td>
        <td>tréada</td>
        <td>tréada</td>
        <td>tréad</td>
      </tr>
      <tr>
        <td>treas</td>
        <td>treasa</td>
        <td>treasa</td>
        <td>treas</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2L = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="L"
    caption={chapterDb["Table2L-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-2/3" />
      <col className="w-1/6" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2L-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["GachTuiseal"]}
        </th>
        <th className="text-center">{commonDb["GachTuiseal"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>
          <div>{chapterDb["Table2L-rh1-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2L-rh1-p"]}
          </div>
        </th>
        <td>altra</td>
        <td>altraí</td>
      </tr>
      <tr>
        <td>báidín</td>
        <td>báidíní</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>fáinne</td>
        <td>fáinní</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>
          <div>{chapterDb["Table2L-rh2-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2L-rh2-p"]}
          </div>
        </th>
        <td>baile</td>
        <td>bailte</td>
      </tr>
      <tr>
        <td>sloinne</td>
        <td>sloinnte</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>tine</td>
        <td>tinte</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={4}>
          <div>{chapterDb["Table2L-rh3-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2L-rh3-p"]}
          </div>
        </th>
        <td>ainmhí</td>
        <td>ainmhithe</td>
      </tr>
      <tr>
        <td>draoi</td>
        <td>draoithe</td>
      </tr>
      <tr>
        <td>giúiré</td>
        <td>giúiréithe</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>rí</td>
        <td>ríthe</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={9}>
          <div>{chapterDb["Table2L-rh4-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2L-rh4-p"]}
          </div>
        </th>
        <td>bogha</td>
        <td>boghanna</td>
      </tr>
      <tr>
        <td>ceo</td>
        <td>ceonna</td>
      </tr>
      <tr>
        <td>cnó</td>
        <td>cnónna</td>
      </tr>
      <tr>
        <td>cú</td>
        <td>cúnna</td>
      </tr>
      <tr>
        <td>grua</td>
        <td>gruanna</td>
      </tr>
      <tr>
        <td>íomhá</td>
        <td>íomhánna</td>
      </tr>
      <tr>
        <td>lao</td>
        <td>laonna</td>
      </tr>
      <tr>
        <td>meá</td>
        <td>meánna</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>nia</td>
        <td>nianna</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table2L-rh5"]}
        </th>
        <td>bus</td>
        <td>busanna</td>
      </tr>
      <tr>
        <td>seic</td>
        <td>seiceanna</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>téacs</td>
        <td>téacsanna</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={5}>{chapterDb["Table2L-rh6"]}
        </th>
        <td>comhrá</td>
        <td>comhráite</td>
      </tr>
      <tr>
        <td>cró</td>
        <td>cróite</td>
      </tr>
      <tr>
        <td>crú</td>
        <td>crúite</td>
      </tr>
      <tr>
        <td>rá</td>
        <td>ráite</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>slua</td>
        <td>sluaite</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={13}>{chapterDb["Table2L-rh7"]}
        </th>
        <td>achainí</td>
        <td>achainíocha</td>
      </tr>
      <tr>
        <td>airí</td>
        <td>airíonna</td>
      </tr>
      <tr>
        <td>aithne</td>
        <td>aitheanta</td>
      </tr>
      <tr>
        <td>aturnae</td>
        <td>aturnaetha</td>
      </tr>
      <tr>
        <td>bó</td>
        <td>ba (<i>{chapterDb["genPl"]}</i> bó)</td>
      </tr>
      <tr>
        <td>cine</td>
        <td>ciníocha</td>
      </tr>
      <tr>
        <td>claí</td>
        <td>claíocha</td>
      </tr>
      <tr>
        <td>duine</td>
        <td>daoine</td>
      </tr>
      <tr>
        <td>gabha</td>
        <td>gaibhne</td>
      </tr>
      <tr>
        <td>gnó</td>
        <td>gnóthaí</td>
      </tr>
      <tr>
        <td>oíche</td>
        <td>oícheanta</td>
      </tr>
      <tr>
        <td>slí</td>
        <td>slite</td>
      </tr>
      <tr>
        <td>teanga</td>
        <td>teangacha</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2M = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="M"
    caption={chapterDb["Table2M-Title"]}
    docLang={props.docLang}>
    <thead>
      <tr>
        <th className="text-center text-xl" rowSpan={2}>{chapterDb["Table2M-CornerHeading"]}
        </th>
        <th className="text-center" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-center">{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th className="text-center">{commonDb["Ainmneach"]}
        </th>
        <th className="text-center">{commonDb["Ginideach"]}
        </th>
        <th className="text-center">{commonDb["GachTuiseal"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={8}>
          <div>{chapterDb["Table2M-rh1-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2M-rh1-p1"]}
          </div>
          <div className="font-normal">{chapterDb["Table2M-rh1-p2"]}
          </div>
        </th>
        <td>cathair</td>
        <td>cathrach</td>
        <td>cathracha</td>
      </tr>
      <tr>
        <td>draein</td>
        <td>draenach</td>
        <td>draenacha</td>
      </tr>
      <tr>
        <td>litir</td>
        <td>litreach</td>
        <td>litreach</td>
      </tr>
      <tr>
        <td>rial</td>
        <td>rialach</td>
        <td>rialacha</td>
      </tr>
      <tr>
        <td>traein</td>
        <td>traenach</td>
        <td>traenacha</td>
      </tr>
      <tr>
        <td>treoir</td>
        <td>treorach</td>
        <td>treoracha</td>
      </tr>
      <tr>
        <td>triail</td>
        <td>trialach</td>
        <td>trialacha</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>uimhir</td>
        <td>uimhreach</td>
        <td>uimhreacha</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>
          <div>{chapterDb["Table2M-rh2-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2M-rh2-p"]}
          </div>
        </th>
        <td>abhainn</td>
        <td>abhann</td>
        <td>aibhneacha</td>
      </tr>
      <tr>
        <td>máthair</td>
        <td>máthar</td>
        <td>máithreacha</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>teorainn</td>
        <td>teorann</td>
        <td>teorainneacha</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={6}>
          <div>{chapterDb["Table2M-rh3-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2M-rh3-p"]}
          </div>
        </th>
        <td>ceathrú</td>
        <td>ceathrún</td>
        <td>ceathrúna</td>
      </tr>
      <tr>
        <td>comharsa</td>
        <td>comharsan</td>
        <td>comharsana (<i>{chapterDb["genPl"]}</i> comharsana)</td>
      </tr>
      <tr>
        <td>ionga</td>
        <td>iongan</td>
        <td>ingne</td>
      </tr>
      <tr>
        <td>leite</td>
        <td>leitean</td>
        <td>&mdash;</td>
      </tr>
      <tr>
        <td>monarcha</td>
        <td>monarchan</td>
        <td>monarchana</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>pearsa</td>
        <td>pearsan</td>
        <td>pearsana (<i>{chapterDb["genPl"]}</i> pearsan)</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={8}>
          <div>{chapterDb["Table2M-rh4-title"]}
          </div>
          <div className="font-normal">{chapterDb["Table2M-rh4-p1"]}
          </div>
          <div className="font-normal">{chapterDb["Table2M-rh4-p2"]}
          </div>
        </th>
        <td>fiche (<i>{chapterDb["datSg"]}</i> fichid)</td>
        <td>fichead</td>
        <td>fichidí</td>
      </tr>
      <tr>
        <td>tríocha</td>
        <td>tríochad</td>
        <td>tríochaidí</td>
      </tr>
      <tr>
        <td>ceathracha</td>
        <td>ceathrachad</td>
        <td>ceathrachaidí</td>
      </tr>
      <tr>
        <td>caoga</td>
        <td>caogad</td>
        <td>caogaidí</td>
      </tr>
      <tr>
        <td>seasca</td>
        <td>seascad</td>
        <td>seascaidí</td>
      </tr>
      <tr>
        <td>seachtó</td>
        <td>seachtód</td>
        <td>seachtóidí</td>
      </tr>
      <tr>
        <td>ochtó</td>
        <td>ochtód</td>
        <td>ochtóidí</td>
      </tr>
      <tr className="black-bottom-divider">
        <td>nócha</td>
        <td>nóchad</td>
        <td>nóchaidí</td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={6}>{chapterDb["Table2M-rh5"]}
        </th>
        <td>bráid</td>
        <td>brád</td>
        <td>bráide</td>
      </tr>
      <tr>
        <td>cara</td>
        <td>carad</td>
        <td>cairde</td>
      </tr>
      <tr>
        <td>caora</td>
        <td>caorach</td>
        <td>caoirigh (<i>{chapterDb["genPl"]}</i> caorach)</td>
      </tr>
      <tr>
        <td>Éire (<i>{chapterDb["datSg"]}</i> Éirinn)</td>
        <td>Éireann</td>
        <td>&mdash;</td>
      </tr>
      <tr>
        <td>namhaid</td>
        <td>namhad</td>
        <td>naimhde</td>
      </tr>
      <tr>
        <td>Nollaig</td>
        <td>Nollag</td>
        <td>Nollaigí</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table2N = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={2}
    tableLeter="N"
    caption={chapterDb["Table2N-Title"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-1/3" />
      <col className="w-1/3" />
      <col className="w-1/3" />
    </colgroup>
    <thead>
      <tr>
        <th className="text-xl" colSpan={2}>{commonDb["Uatha"]}
        </th>
        <th className="text-xl">{commonDb["Iolra"]}
        </th>
      </tr>
      <tr>
        <th>{commonDb["Ainmneach"]}
        </th>
        <th>{commonDb["Ginideach"]}
        </th>
        <th>{commonDb["GachTuiseal"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>bean</td>
        <td>mná</td>
        <td>mná (<i>{chapterDb["genPl"]}</i> ban)</td>
      </tr>
      <tr>
        <td>deirfiúr</td>
        <td>deirfiúracha</td>
        <td>deirfiúracha</td>
      </tr>
      <tr>
        <td>deoch</td>
        <td>deochanna</td>
        <td>deochanna</td>
      </tr>
      <tr>
        <td>dia</td>
        <td>déithe</td>
        <td>déithe</td>
      </tr>
      <tr>
        <td>lá</td>
        <td>lae</td>
        <td>laethanta</td>
      </tr>
      <tr>
        <td>leaba</td>
        <td>leapa</td>
        <td>leapacha</td>
      </tr>
      <tr>
        <td>mí</td>
        <td>míosa</td>
        <td>míonna</td>
      </tr>
      <tr>
        <td>olann</td>
        <td>olla</td>
        <td>olanna (<i>{chapterDb["genPl"]}</i> olann)</td>
      </tr>
      <tr>
        <td>talamh ({chapterDb["Table2N-masc"]})
        </td>
        <td>talaimh ({chapterDb["Table2N-masc"]}) <br />
          talún ({chapterDb["Table2N-fem"]})
        </td>
        <td>tailte</td>
      </tr>
      <tr>
        <td>teach</td>
        <td>tí</td>
        <td>tithe</td>
      </tr>
    </tbody>
  </MarkedTable>;
};
