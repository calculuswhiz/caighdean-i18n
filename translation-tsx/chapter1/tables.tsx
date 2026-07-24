import { getCommonTranslator, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const Table1A = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={1}
    tableLetter="A"
    caption={chapterDb["Table1A-caption"]}
    docLang={props.docLang}>
    <tbody>
      {/* Top half */}
      <tr>
        <td>
          <table className="chapter-1 w-full">
            <colgroup>
              <col className="w-1/8" />
              <col className="w-2/8" />
              <col className="w-1/8" />
              <col className="w-2/8" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5}>
                  {commonDb.Firinscneach}
                </th>
              </tr>
              <tr>
                <th colSpan={2}>
                  {chapterDb["ArticleTable-col1-th"]}
                </th>
                <th>
                  {chapterDb["ArticleTable-col2-th"]}
                </th>
                <th>
                  {chapterDb["ArticleTable-col3-th"]}
                </th>
                <th>
                  {chapterDb["ArticleTable-col4-th"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-stone-300">
                  {commonDb.Consan}
                </th>
                <td>
                  {chapterDb['gachConsan']}
                </td>
                <td>an</td>
                <td>
                  {chapterDb['ganAonAthru']}
                </td>
                <td>
                  <ul>
                    <li>an cnoc</li>
                    <li>an diabhal</li>
                    <li>an fear</li>
                    <li>an saol</li>
                    <li>an Seapánach</li>
                    <li>an teach</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th className="bg-stone-300">
                  {commonDb.Guta}
                </th>
                <td>
                  {chapterDb['gachGuta']}
                </td>
                <td>an</td>
                <td>
                  {chapterDb['tRoimhe']}
                </td>
                <td>
                  <ul>
                    <li>an t&#x2011;íochtar</li>
                    <li>an t&#x2011;uisce</li>
                    <li>an t&#x2011;alt</li>
                    <li>an tAcht</li>
                    <li>an tUltach</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      {/* Bottom half */}
      <tr>
        <td>
          <table className="chapter-1 w-full">
            <colgroup>
              <col className="w-1/8" />
              <col className="w-2/8" />
              <col className="w-1/8" />
              <col className="w-2/8" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5}>
                  {commonDb.Baininscneach}
                </th>
              </tr>
              <tr>
                <th colSpan={2}>
                  {chapterDb["ArticleTable-col1-th"]}
                </th>
                <th>
                  {chapterDb["ArticleTable-col2-th"]}
                </th>
                <th>
                  {chapterDb["ArticleTable-col3-th"]}
                </th>
                <th>
                  {chapterDb["ArticleTable-col4-th"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowSpan={3} className="bg-stone-300">
                  {commonDb.Consan}
                </th>
                <td>
                  {chapterDb['consanInséimhitheSeachasDTS']}
                </td>
                <td>an</td>
                <td>
                  {commonDb.séimhiú}
                </td>
                <td>
                  <ul>
                    <li>an fhuinneog</li>
                    <li>an chaibidil</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  {chapterDb['dNoT']}
                </td>
                <td>an</td>
                <td>
                  {chapterDb['ganAonAthru']}
                </td>
                <td>
                  <ul>
                    <li>an deoch</li>
                    <li>an teanga</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  {chapterDb['sSeachasCFMPTV']}
                </td>
                <td>an</td>
                <td>
                  {chapterDb['tRoimhe']}
                </td>
                <td>
                  <ul>
                    <li>an tsráid</li>
                    <li>an tSeapáin</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th className="bg-stone-300">
                  {commonDb.Guta}
                </th>
                <td>
                  {chapterDb['gachGuta']}
                </td>
                <td>an</td>
                <td>
                  {chapterDb['ganAonAthru']}
                </td>
                <td>
                  <ul>
                    <li>an áit</li>
                    <li>an Astráil</li>
                    <li>an Iodáil</li>
                    <li>an obair</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1B = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="B" caption={chapterDb['Table1B-caption']} docLang={props.docLang}>
    <thead>
      <tr>
        <th colSpan={2} className="px-4 py-2">
          {chapterDb['Table1B-header']}
        </th>
      </tr>
      <tr>
        <th className="py-2">{commonDb.Firinscneach}</th>
        <th className="py-2">{commonDb.Baininscneach}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ag an bhfear maith</td>
        <td>ag an gcuideachta bheag</td>
      </tr>
      <tr>
        <td>ar an mbosca dearg</td>
        <td>ar an mbean shaibhir</td>
      </tr>
      <tr>
        <td>as an ngleann mór</td>
        <td>as an bpáirc chéanna</td>
      </tr>
      <tr>
        <td>chuig an gCoimisinéir coinsiasach</td>
        <td>chuig an mbean ghairmiúil</td>
      </tr>
      <tr>
        <td>den chrann caol</td>
        <td>den bhean fhlaithiúil</td>
      </tr>
      <tr>
        <td>don fhear trom</td>
        <td>don chuideachta ghnóthach</td>
      </tr>
      <tr>
        <td>fairis an ngarda béasach</td>
        <td>fairis an mbean chairdiúil</td>
      </tr>
      <tr>
        <td>faoin bhfógra práinneach</td>
        <td>faoin ngrian bhreá</td>
      </tr>
      <tr>
        <td>
          sa bhosca buí <br />
          sa fhraoch bán <br />
          <br />
          {chapterDb['Table1B-note']} <br />
          san fhéar fliuch
        </td>
        <td>
          sa chomhairle shóisialta <br />
          sa fhrithréabhlóid fhíochmhar <br />
          <br />
          {chapterDb['Table1B-note']} <br />
          san fharraige ghlan
        </td>
      </tr>
      <tr>
        <td>leis an bhfasach cruinn</td>
        <td>leis an mbáisteach throm</td>
      </tr>
      <tr>
        <td>ón gcaisleán fuar</td>
        <td>ón gcathair mhór</td>
      </tr>
      <tr>
        <td>roimh an gcruinniú tábhachtach</td>
        <td>roimh an mbainis bheag</td>
      </tr>
      <tr>
        <td>thar an gcnoc bán</td>
        <td>thar an bhfarraige chiúin</td>
      </tr>
      <tr>
        <td>tríd an ngairdín breá</td>
        <td>tríd an bhfuinneog ghorm</td>
      </tr>
      <tr>
        <td>um an mBille fada</td>
        <td>um an ngníomhaireacht reachtúil</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1C = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="C" caption={chapterDb['Table1C-caption']} docLang={props.docLang}>
    <thead>
      <tr>
        <th colSpan={2} className="px-4 py-2">
          {chapterDb['Table1C-header']}
        </th>
      </tr>
      <tr>
        <th className="py-2">{commonDb.Firinscneach}</th>
        <th className="py-2">{commonDb.Baininscneach}</th>
      </tr>
      <tr>
        <th className="text-center bg-stone-300">
          <b>{commonDb.GanAthrú}</b>
        </th>
        <th className="text-center bg-stone-300">
          <b>{chapterDb['Table1C-col2-subheader']}</b>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ag an Seapánach cliste</td>
        <td>ag an tseanmháthair bhocht</td>
      </tr>
      <tr>
        <td>ar an suíochán fliuch</td>
        <td>ar an tsráid ghlan</td>
      </tr>
      <tr>
        <td>as an sailéad blasta</td>
        <td>as an tsaoire bhliantúil</td>
      </tr>
      <tr>
        <td>chuig an Seanadóir nuacheaptha</td>
        <td>chuig an tsatailít mhór</td>
      </tr>
      <tr>
        <td>den saighdiúir sásúil</td>
        <td>den tslándáil shóisialach</td>
      </tr>
      <tr>
        <td>don Seanad nua</td>
        <td>don tsaoirse cheart</td>
      </tr>
      <tr>
        <td>fairis an saineolaí lách</td>
        <td>fairis an tseanbhean shaibhir</td>
      </tr>
      <tr>
        <td>faoin sonrasc déanach</td>
        <td>faoin tslí dhíreach</td>
      </tr>
      <tr>
        <td>sa soitheach gorm</td>
        <td>sa tseacláid mhilis</td>
      </tr>
      <tr>
        <td>leis an salann bán</td>
        <td>leis an tslat fhada</td>
      </tr>
      <tr>
        <td>ón suirbhé pearsanta</td>
        <td>ón scoil bheag</td>
      </tr>
      <tr>
        <td>roimh an samhradh fada</td>
        <td>roimh an tseachtain mhór</td>
      </tr>
      <tr>
        <td>thar an seol mór</td>
        <td>thar an tSionainn fhada</td>
      </tr>
      <tr>
        <td>tríd an sorcas mór</td>
        <td>tríd an tseift chliste</td>
      </tr>
      <tr>
        <td>um an sainchomhairleoir cruinn</td>
        <td>um an tseirbhís mhaith</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1D = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="D" caption={chapterDb['Table1D-caption']} docLang={props.docLang}>
    <thead>
      <tr>
        <th colSpan={2} className="px-4 py-2">
          {chapterDb['Table1D-header']}
        </th>
      </tr>
      <tr>
        <th className="py-2">{commonDb.Firinscneach}</th>
        <th className="py-2">{commonDb.Baininscneach}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ag an Albanach ciallmhar</td>
        <td>ag an aeráid ghaofar</td>
      </tr>
      <tr>
        <td>ar an eitleán dubh</td>
        <td>ar an olann bhán</td>
      </tr>
      <tr>
        <td>as an uisce glan</td>
        <td>as an iris cháiliúil</td>
      </tr>
      <tr>
        <td>chuig an Aire ilteangach</td>
        <td>chuig an Ostair shléibhtiúil</td>
      </tr>
      <tr>
        <td>den alt fada</td>
        <td>den uimhir chruinn</td>
      </tr>
      <tr>
        <td>don údarás céanna</td>
        <td>don obair chrua</td>
      </tr>
      <tr>
        <td>fairis an oifigeach múinte</td>
        <td>fairis an ógbhean chliste</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1E = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="E" caption={chapterDb['Table1E-caption']} docLang={props.docLang}>
    <thead>
      <tr>
        <th colSpan={2} className="px-4 py-2">
          {chapterDb['Table1E-header']}
        </th>
      </tr>
      <tr>
        <th className="py-2">{commonDb.Firinscneach}</th>
        <th className="py-2">{commonDb.Baininscneach}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>faoin dréimire bhriste</td>
        <td>faoin deacracht bhreise</td>
      </tr>
      <tr>
        <td>sa theas mór</td>
        <td>sa deoch fhuar</td>
      </tr>
      <tr>
        <td>leis an duine ciúin</td>
        <td>leis an taithí mhaith</td>
      </tr>
      <tr>
        <td>ón deartháir cineálta</td>
        <td>ón teanga líofa</td>
      </tr>
      <tr>
        <td>roimh an tarbh fiáin</td>
        <td>roimh an deighilt mhór</td>
      </tr>
      <tr>
        <td>thar an teach gorm</td>
        <td>thar an diallait nua</td>
      </tr>
      <tr>
        <td>tríd an talamh crua</td>
        <td>tríd an drochaimsir ghránna</td>
      </tr>
      <tr>
        <td>um an dlí coiriúil</td>
        <td>um an tagairt chuí</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1F = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="F" caption={chapterDb['Table1F-caption']} docLang={props.docLang}>
    <tbody>
      {/* First half */}
      <tr>
        <td>
          <table className="chapter-1 w-full">
            <colgroup>
              <col className="w-1/8" />
              <col className="w-2/8" />
              <col className="w-1/8" />
              <col className="w-2/8" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5} className="px-4 py-2">
                  {commonDb['Firinscneach']}
                </th>
              </tr>
              <tr>
                <th colSpan={2}>{chapterDb['ArticleTable-col1-th']}</th>
                <th>{chapterDb['ArticleTable-col2-th']}</th>
                <th>{chapterDb['ArticleTable-col3-th']}</th>
                <th>{chapterDb['ArticleTable-col4-th']}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowSpan={3} className="bg-stone-300">
                  {commonDb['Consan']}
                </th>
                <td>{chapterDb['consanInséimhitheSeachasDTS']}</td>
                <td>an</td>
                <td>{commonDb['séimhiú']}</td>
                <td>
                  <ul>
                    <li>barr an chnoic</li>
                    <li>hata an fhir</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>{chapterDb['dNoT']}</td>
                <td>an</td>
                <td>{chapterDb['ganAonAthru']}</td>
                <td>
                  <ul>
                    <li>chun an diabhail</li>
                    <li>doras an tí</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>{chapterDb['sSeachasCFMPTV']}</td>
                <td>an</td>
                <td>{chapterDb['tRoimhe']}</td>
                <td>
                  <ul>
                    <li>tús an tsaoil</li>
                    <li>pas an tSeapánaigh</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th className="bg-stone-300">
                  {commonDb['Guta']}
                </th>
                <td>{chapterDb['gachGuta']}</td>
                <td>an</td>
                <td>{chapterDb['ganAonAthru']}</td>
                <td>
                  <ul>
                    <li>de réir an ailt</li>
                    <li>faoi réir an Achta</li>
                    <li>pas an Albanaigh</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      {/* Second half */}
      <tr>
        <td>
          <table className="chapter-1 w-full">
            <colgroup>
              <col className="w-1/8" />
              <col className="w-2/8" />
              <col className="w-1/8" />
              <col className="w-2/8" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={5} className="px-4 py-2">
                  {commonDb['Baininscneach']}
                </th>
              </tr>
              <tr>
                <th colSpan={2}>{chapterDb['ArticleTable-col1-th']}</th>
                <th>{chapterDb['ArticleTable-col2-th']}</th>
                <th>{chapterDb['ArticleTable-col3-th']}</th>
                <th>{chapterDb['ArticleTable-col4-th']}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-stone-300">
                  {commonDb['Consan']}
                </th>
                <td>{chapterDb['gachConsan']}</td>
                <td>na</td>
                <td>{chapterDb['ganAonAthru']}</td>
                <td>
                  <ul>
                    <li>leac na fuinneoige</li>
                    <li>deireadh na caibidle</li>
                    <li>bun na sráide</li>
                    <li>muintir na Téalainne</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th className="bg-stone-300">
                  {commonDb['Guta']}
                </th>
                <td>{chapterDb['gachGuta']}</td>
                <td>na</td>
                <td>{chapterDb['hRoimhe']}</td>
                <td>
                  <ul>
                    <li>timpeall na háite</li>
                    <li>foireann na hÍsiltíre</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1G = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="G" caption={chapterDb['Table1G-caption']} docLang={props.docLang}>
    <colgroup>
      <col className="w-2/12" />
      <col className="w-2/12" />
      <col className="w-2/12" />
    </colgroup>
    <thead>
      <tr>
        <th colSpan={4} className="px-4 py-2">
          {commonDb['FirAgusBain']}
        </th>
      </tr>
      <tr>
        <th>{chapterDb['ArticleTable-col1-th']}</th>
        <th>{chapterDb['ArticleTable-col2-th']}</th>
        <th>{chapterDb['ArticleTable-col3-th']}</th>
        <th>{chapterDb['ArticleTable-col4-th']}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300">
          {commonDb['Consan']}
        </th>
        <td>na</td>
        <td>{chapterDb['ganAonAthru']}</td>
        <td>
          <ul>
            <li>na capaill ghlasa</li>
            <li>na cnoic arda</li>
            <li>na fuinneoga móra</li>
            <li>na Seapánaigh</li>
            <li>na sráideanna</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th className="bg-stone-300">
          {commonDb['Guta']}
        </th>
        <td>na</td>
        <td>{chapterDb['hRoimhe']}</td>
        <td>
          <ul>
            <li>na hAchtanna tábhachtacha</li>
            <li>na háiteanna</li>
            <li>na hAlbanaigh bhródúla</li>
            <li>na hÉireannaigh</li>
            <li>na híomhánna</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1H = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="H" caption={chapterDb['Table1H-caption']} docLang={props.docLang}>
    <colgroup>
      <col className="w-2/8" />
      <col className="w-1/8" />
      <col className="w-1/8" />
      <col className="w-4/8" />
    </colgroup>
    <thead>
      <tr>
        <th colSpan={4} className="px-4 py-2">
          {commonDb['FirAgusBain']}
        </th>
      </tr>
      <tr>
        <th>{chapterDb['ArticleTable-col1-th']}</th>
        <th>{chapterDb['ArticleTable-col2-th']}</th>
        <th>{chapterDb['ArticleTable-col3-th']}</th>
        <th>{chapterDb['ArticleTable-col4-th']}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300">
          {commonDb['Consan']}
        </th>
        <td>na</td>
        <td>{chapterDb['ganAonAthru']}</td>
        <td>
          <ul>
            <li>ag na fir mhóra</li>
            <li>ar na mná cliste</li>
            <li>as na seirbhísí poiblí</li>
            <li>chuig na mic léinn ghlóracha</li>
            <li>de na crainn</li>
            <li>do na Teachtaí</li>
            <li>faoi na daoine</li>
            <li>fairis na gardaí</li>
            <li>leis na fasaigh</li>
            <li>ó na múinteoirí</li>
            <li>roimh na cait</li>
            <li>sna boscaí</li>
            <li>thar na farraigí</li>
            <li>trí na gairdíní</li>
            <li>um na coillte</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th className="bg-stone-300">
          {commonDb['Guta']}
        </th>
        <td>na</td>
        <td>{chapterDb['hRoimhe']}</td>
        <td>
          <ul>
            <li>ag na hiníonacha fásta</li>
            <li>ar na hoileáin ghaofara</li>
            <li>as na hirisí acadúla</li>
            <li>chuig na hoifigigh dheasa</li>
            <li>de na huimhreacha</li>
            <li>do na hoibreacha</li>
            <li>faoi na heachtraí</li>
            <li>fairis na hógmhná</li>
            <li>leis na heochracha</li>
            <li>ó na hÉireannaigh</li>
            <li>roimh na héin</li>
            <li>sna heitleáin</li>
            <li>thar na háiteanna</li>
            <li>trí na haistriúcháin</li>
            <li>um na hAchtanna</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1I = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="I" caption={chapterDb['Table1I-caption']} docLang={props.docLang}>
    <colgroup>
      <col className="w-2/6" />
      <col className="w-1/6" />
      <col className="w-1/6" />
      <col className="w-2/6" />
    </colgroup>
    <thead>
      <tr>
        <th colSpan={4} className="px-4 py-2">
          {commonDb['FirAgusBain']}
        </th>
      </tr>
      <tr>
        <th>{chapterDb['ArticleTable-col1-th']}</th>
        <th>{chapterDb['ArticleTable-col2-th']}</th>
        <th>{chapterDb['ArticleTable-col3-th']}</th>
        <th>{chapterDb['ArticleTable-col4-th']}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300">
          {chapterDb['ConsanInuraithe']}
        </th>
        <td>na</td>
        <td>{commonDb['urú']}</td>
        <td>
          <ul>
            <li>trasna na gcnoc íseal</li>
            <li>leaca na bhfuinneog</li>
            <li>i measc na ndaoine</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th className="bg-stone-300">
          {commonDb['Guta']}
        </th>
        <td>na</td>
        <td>{commonDb['urú']}</td>
        <td>
          <ul>
            <li>líon na n&#x2011;áiteanna breátha</li>
            <li>costas na n&#x2011;oibreacha</li>
            <li>líon na nAlbanach</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1J = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="J" caption={chapterDb['Table1J-caption']} docLang={props.docLang}>
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th colSpan={2} className="px-4 py-2">
          {chapterDb['Table1J-header']}
        </th>
      </tr>
      <tr>
        <th className="py-2">{commonDb['Firinscneach']}</th>
        <th className="py-2">{commonDb['Baininscneach']}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ag an fhear mhaith</td>
        <td>ag an chuideachta bheag</td>
      </tr>
      <tr>
        <td>ar an bhosca dhearg</td>
        <td>ar an bhean shaibhir</td>
      </tr>
      <tr>
        <td>as an ghleann mhór</td>
        <td>as an pháirc chéanna</td>
      </tr>
      <tr>
        <td>chuig an Choimisinéir choinsiasach</td>
        <td>chuig an bhean ghairmiúil</td>
      </tr>
      <tr>
        <td>den chrann chaol</td>
        <td>den bhean fhlaithiúil</td>
      </tr>
      <tr>
        <td>don fhear throm</td>
        <td>don chuideachta ghnóthach</td>
      </tr>
      <tr>
        <td>fairis an gharda bhéasach</td>
        <td>fairis an bhean chairdiúil</td>
      </tr>
      <tr>
        <td>faoin fhógra phráinneach</td>
        <td>faoin ghrian bhreá</td>
      </tr>
      <tr>
        <td>
          sa bhosca bhuí <br />
          sa fhraoch bhán <br />
          <br />
          {chapterDb['Table1B-note']} <br />
          san fhéar fhliuch
        </td>
        <td>
          sa chomhairle shóisialta <br />
          sa fhrithréabhlóid fhíochmhar <br />
          <br />
          {chapterDb['Table1B-note']} <br />
          san fharraige ghlan
        </td>
      </tr>
      <tr>
        <td>leis an fhasach chruinn</td>
        <td>leis an bháisteach throm</td>
      </tr>
      <tr>
        <td>ón chaisleán fhuar</td>
        <td>ón chathair mhór</td>
      </tr>
      <tr>
        <td>roimh an chruinniú thábhachtach</td>
        <td>roimh an bhainis bheag</td>
      </tr>
      <tr>
        <td>thar an chnoc bhán</td>
        <td>thar an fharraige chiúin</td>
      </tr>
      <tr>
        <td>tríd an ghairdín bhreá</td>
        <td>tríd an fhuinneog ghorm</td>
      </tr>
      <tr>
        <td>um an Bhille fhada</td>
        <td>um an ghníomhaireacht reachtúil</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1K = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="K" caption={chapterDb['Table1K-caption']} docLang={props.docLang}>
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th colSpan={2} className="px-4 py-2">
          {chapterDb['Table1K-header']}
        </th>
      </tr>
      <tr>
        <th className="py-2">{commonDb['Firinscneach']}</th>
        <th className="py-2">{commonDb['Baininscneach']}</th>
      </tr>
      <tr>
        <th colSpan={2} className="text-center bg-stone-300">
          <b>{chapterDb['Table1K-subheading']}</b>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ag an tSeapánach chliste</td>
        <td>ag an tseanmháthair bhocht</td>
      </tr>
      <tr>
        <td>ar an tsuíochán fhliuch</td>
        <td>ar an tsráid ghlan</td>
      </tr>
      <tr>
        <td>as an tsailéad bhlasta</td>
        <td>as an tsaoire bhliantúil</td>
      </tr>
      <tr>
        <td>chuig an tSeanadóir nuacheaptha</td>
        <td>chuig an tsatailít mhór</td>
      </tr>
      <tr>
        <td>den tsaighdiúir shásúil</td>
        <td>den tslándáil shóisialach</td>
      </tr>
      <tr>
        <td>don tSeanadóir nua</td>
        <td>don tsaoirse cheart</td>
      </tr>
      <tr>
        <td>fairis an tsaineolaí lách</td>
        <td>fairis an tseanbhean shaibhir</td>
      </tr>
      <tr>
        <td>faoin tsonrasc déanach</td>
        <td>faoin tslí dhíreach</td>
      </tr>
      <tr>
        <td>sa tsoitheach ghorm</td>
        <td>sa tseacláid mhilis</td>
      </tr>
      <tr>
        <td>leis an tsalann bhán</td>
        <td>leis an tslat fhada</td>
      </tr>
      <tr>
        <td>ón tsuirbhé phearsanta</td>
        <td>ón scoil bheag</td>
      </tr>
      <tr>
        <td>roimh an tsamhradh fhada</td>
        <td>roimh an tseachtain mhór</td>
      </tr>
      <tr>
        <tr>
          <td>thar an tseol mhór</td>
          <td>thar an tSionainn fhada</td>
        </tr>
      </tr>
      <tr>
        <td>tríd an tsorcas mhór</td>
        <td>tríd an tseift chliste</td>
      </tr>
      <tr>
        <td>um an tsainchomhairleoir chruinn</td>
        <td>um an tseirbhís mhaith</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1L = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="L" caption={chapterDb['Table1L-caption']} docLang={props.docLang}>
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th colSpan={2} className="px-4 py-2">
          {chapterDb['Table1L-header']}
        </th>
      </tr>
      <tr>
        <th className="py-2">{commonDb['Firinscneach']}</th>
        <th className="py-2">{commonDb['Baininscneach']}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ag an Albanach chiallmhar</td>
        <td>ag an aeráid ghaofar</td>
      </tr>
      <tr>
        <td>ar an eitleán dhubh</td>
        <td>ar an olann bhán</td>
      </tr>
      <tr>
        <td>as an uisce ghlan</td>
        <td>as an iris cháiliúil</td>
      </tr>
      <tr>
        <td>chuig an Aire ilteangach</td>
        <td>chuig an Ostair shléibhtiúil</td>
      </tr>
      <tr>
        <td>den alt fhada</td>
        <td>den uimhir chruinn</td>
      </tr>
      <tr>
        <td>don údarás chéanna</td>
        <td>don obair chrua</td>
      </tr>
      <tr>
        <td>fairis an oifigeach mhúinte</td>
        <td>fairis an ógbhean chliste</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table1M = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={1} tableLetter="M" caption={chapterDb['Table1M-caption']} docLang={props.docLang}>
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th colSpan={2} className="px-4 py-2">
          {chapterDb['Table1M-header']}
        </th>
      </tr>
      <tr>
        <th className="py-2">{commonDb['Firinscneach']}</th>
        <th className="py-2">{commonDb['Baininscneach']}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>faoin dréimire bhriste</td>
        <td>faoin deacracht bhreise</td>
      </tr>
      <tr>
        <td>sa theas mhór</td>
        <td>sa deoch fhuar</td>
      </tr>
      <tr>
        <td>leis an duine chiúin</td>
        <td>leis an taithí mhaith</td>
      </tr>
      <tr>
        <td>ón deartháir chineálta</td>
        <td>ón teanga líofa</td>
      </tr>
      <tr>
        <td>roimh an tarbh fhiáin</td>
        <td>roimh an deighilt mhór</td>
      </tr>
      <tr>
        <td>thar an teach ghorm</td>
        <td>thar an diallait nua</td>
      </tr>
      <tr>
        <td>tríd an talamh chrua</td>
        <td>tríd an drochaimsir ghránna</td>
      </tr>
      <tr>
        <td>um an dlí choiriúil</td>
        <td>um an tagairt chuí</td>
      </tr>
    </tbody>
  </MarkedTable>;
};
