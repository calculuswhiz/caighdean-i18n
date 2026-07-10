import { getCommonTranslator, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const Table4A = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={4} caption={chapterDb["Table4A-caption"]} docLang={props.docLang} tableLetter="A">
    <colgroup>
      <col className="w-1/5" />
      <col className="w-2/5" />
      <col className="w-2/5" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table4A-col1"]}
        </th>
        <th>{chapterDb["Table4A-col2"]}
        </th>
        <th>{chapterDb["Table4A-col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{chapterDb["Table4A-row1"]}
        </th>
        <td>
          <p><i>{chapterDb["no-lenition"]}</i></p>
          <p>an fear <b>beag</b></p>
        </td>
        <td>
          <p><i>{commonDb["séimhiú"]}</i></p>
          <p>an bhean <b>bheag</b></p>
        </td>
      </tr>
      <tr>
        <th>{chapterDb["Table4A-row2"]}
        </th>
        <td>
          <p><i>{commonDb["séimhiú"]}</i></p>
          <p>a fhir <b>bhig</b></p>
        </td>
        <td>
          <p><i>{commonDb["séimhiú"]}</i></p>
          <p>a bhean <b>bheag</b></p>
        </td>
      </tr>
      <tr>
        <th>{chapterDb["Table4A-row3"]}
        </th>
        <td>
          <p><i>{chapterDb["no-lenition"]}</i></p>
          <p>ar an bhfear <b>beag</b></p>
        </td>
        <td>
          <p><i>{commonDb["séimhiú"]}</i></p>
          <p>ar an mbean <b>bheag</b></p>
        </td>
      </tr>
      <tr>
        <th>{chapterDb["Table4A-row4"]}
        </th>
        <td>
          <p><i>{commonDb["séimhiú"]}</i></p>
          <p>clann an fhir <b>bhig</b></p>
        </td>
        <td>
          <p><i>{chapterDb["no-lenition"]}</i></p>
          <p>clann na mná <b>bige</b></p>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table4B = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={4} caption={chapterDb["4-2-5-title"]} docLang={props.docLang} tableLetter="B">
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table4B-col1-main"]}
        </th>
        <th>{chapterDb["Table4B-col2-main"]}
        </th>
      </tr>
      <tr>
        <th>{chapterDb["Table4B-col1-sub"]}
        </th>
        <th>{chapterDb["Table4B-col2-sub"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>na báid <b>fhada</b></td>
        <td>na cailíní <b>cliste</b></td>
      </tr>
      <tr>
        <td>na costais <b>shonracha</b></td>
        <td>na doirse <b>móra</b></td>
      </tr>
      <tr>
        <td>na foirgnimh <b>bhreátha</b></td>
        <td>na páirceanna <b>móra</b></td>
      </tr>
      <tr>
        <td>na fir <b>bheaga</b></td>
        <td>na táilliúirí <b>costasacha</b></td>
      </tr>
      <tr>
        <td>na goirt <b>mhóra</b></td>
        <td>clanna na mban <b>cáiliúil</b></td>
      </tr>
      <tr>
        <td>na héisc <b>gheala</b></td>
        <td>clanna na bhfear <b>beag</b></td>
      </tr>
      <tr>
        <td>na húdair <b>cháiliúla</b></td>
        <td>éifeacht na bhforálacha <b>forlíontacha</b></td>
      </tr>
      <tr>
        <td>na nóiméid <b>dheireanacha</b></td>
        <td>méid na bhfuinneog <b>cearnach</b></td>
      </tr>
      <tr>
        <td>na pinn <b>ghorma</b></td>
        <td>obair na ngaibhne <b>dubha</b></td>
      </tr>
      <tr>
        <td>na sparáin <b>theanna</b></td>
        <td>seirbhísí na leabharlann <b>poiblí</b></td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table4C = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={4} caption={chapterDb["4-4-4-title"]} docLang={props.docLang} tableLetter="C">
    <colgroup>
      <col className="w-2/5" />
      <col className="w-2/5" />
      <col className="w-1/5" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table4C-col1"]}
        </th>
        <th>{chapterDb["Table4C-col2"]}
        </th>
        <th>{chapterDb["Table4C-col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>álainn </td>
        <td>áille </td>
        <td>áille</td>
      </tr>
      <tr>
        <td>aoibhinn </td>
        <td>aoibhne </td>
        <td>aoibhne</td>
      </tr>
      <tr>
        <td>bodhar </td>
        <td>(bodhaire) </td>
        <td>bodhra</td>
      </tr>
      <tr>
        <td>daibhir </td>
        <td>daibhre </td>
        <td>daibhre</td>
      </tr>
      <tr>
        <td>daingean </td>
        <td>daingne </td>
        <td>daingne</td>
      </tr>
      <tr>
        <td>deimhin </td>
        <td>deimhne </td>
        <td>deimhne</td>
      </tr>
      <tr>
        <td>dílis </td>
        <td>dílse </td>
        <td>dílse</td>
      </tr>
      <tr>
        <td>doilbhir </td>
        <td>doilbhre </td>
        <td>doilbhre</td>
      </tr>
      <tr>
        <td>domhain </td>
        <td>doimhne </td>
        <td>doimhne</td>
      </tr>
      <tr>
        <td>folamh </td>
        <td>foilmhe </td>
        <td>folmha</td>
      </tr>
      <tr>
        <td>íseal </td>
        <td>ísle </td>
        <td>ísle</td>
      </tr>
      <tr>
        <td>láidir </td>
        <td>láidre </td>
        <td>láidre</td>
      </tr>
      <tr>
        <td>milis </td>
        <td>milse </td>
        <td>milse</td>
      </tr>
      <tr>
        <td>ramhar </td>
        <td>raimhre </td>
        <td>ramhra</td>
      </tr>
      <tr>
        <td>righin </td>
        <td>righne </td>
        <td>righne</td>
      </tr>
      <tr>
        <td>saibhir </td>
        <td>saibhre </td>
        <td>saibhre</td>
      </tr>
      <tr>
        <td>sleamhain </td>
        <td>(sleamhaine) </td>
        <td>sleamhna</td>
      </tr>
      <tr>
        <td>soilbhir </td>
        <td>soilbhre </td>
        <td>soilbhre</td>
      </tr>
      <tr>
        <td>uasal </td>
        <td>uaisle </td>
        <td>uaisle</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table4D = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={4} caption={chapterDb["Table4D-caption"]} docLang={props.docLang} tableLetter="D">
    <thead>
      <tr>
        <th className="text-xl" colSpan={4}>{chapterDb["Table4D-title"]}
        </th>
      </tr>
      <tr>
        <th>{chapterDb["Table4D-col1"]}
        </th>
        <th>{chapterDb["Table4D-col2"]}
        </th>
        <th>{chapterDb["Table4D-col3"]}
        </th>
        <th>{chapterDb["Table4D-col4"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case1"]}
        </th>
        <td>an fear <b>beag</b></td>
        <td>an fear <b>misniúil</b></td>
        <td>an cóta <b>buí</b></td>
      </tr>
      <tr>
        <td>an peileadóir <b>clúiteach</b></td>
        <td>an duine <b>cóir</b></td>
        <td>an garda <b>cróga</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>an buachaill <b>ciúin</b></td>
        <td>an t&#x2011;óstóir <b>flaithiúil</b></td>
        <td>an duine <b>cuí</b></td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case2"]}
        </th>
        <td>a fhir <b>bhig</b></td>
        <td>a fhir <b>mhisniúil</b></td>
        <td>a gharda <b>chróga</b></td>
      </tr>
      <tr>
        <td>a pheileadóir <b>chlúiteach</b></td>
        <td>a dhuine <b>chóir</b></td>
        <td>a dhuine <b>chuí</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>a bhuachaill <b>chiúin</b></td>
        <td>a t&#x2011;óstóir <b>fhlaithiúil</b></td>
        <td>a fhear <b>chliste</b></td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case3"]}*
        </th>
        <td>ag an bhfear <b>beag</b></td>
        <td>don fhear <b>misniúil</b></td>
        <td>ar an gcóta <b>buí</b></td>
      </tr>
      <tr>
        <td>don pheileadóir <b>clúiteach</b></td>
        <td>chuig an duine <b>cóir</b></td>
        <td>ag an ngarda <b>cróga</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>leis an mbuachaill <b>ciúin</b></td>
        <td>ón óstóir <b>flaithiúil</b></td>
        <td>leis an duine <b>cuí</b></td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case4"]}
        </th>
        <td>caipín an fhir <b>bhig</b></td>
        <td>eachtra an fhir <b>mhisniúil</b></td>
        <td>úinéir an chóta <b>bhuí</b></td>
      </tr>
      <tr>
        <td>ainm an pheileadóra <b>chlúitigh</b></td>
        <td>clann an duine <b>chóir</b></td>
        <td>thar ceann an duine <b>chuí</b></td>
      </tr>
      <tr>
        <td>rang an bhuachalla <b>chiúin</b></td>
        <td>comhairle an óstóra <b>fhlaithiúil</b></td>
        <td>guth an gharda <b>chróga</b></td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table4E = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={4} caption={chapterDb["Table4E-caption"]} docLang={props.docLang} tableLetter="E">
    <thead>
      <tr>
        <th className="text-xl" colSpan={4}>{chapterDb["Table4E-title"]}
        </th>
      </tr>
      <tr>
        <th>{chapterDb["Table4D-col1"]}
        </th>
        <th>{chapterDb["Table4D-col2"]}
        </th>
        <th>{chapterDb["Table4D-col3"]}
        </th>
        <th>{chapterDb["Table4D-col4"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowSpan={3}>{chapterDb["Table4D-case1"]}
        </th>
        <td>an bhean <b>bheag</b></td>
        <td>an bhean <b>ghairmiúil</b></td>
        <td>an éide <b>ghalánta</b></td>
      </tr>
      <tr>
        <td>an bhó <b>álainn</b></td>
        <td>an tuairisc <b>mhíosúil</b></td>
        <td>an aiste <b>ghonta</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>an mháthair <b>imníoch</b></td>
        <td>an aiste <b>dheacair</b></td>
        <td>an mhí <b>fhada</b></td>
      </tr>
      <tr>
        <th rowSpan={3}>{chapterDb["Table4D-case2"]}
        </th>
        <td>a bhean <b>bheag</b></td>
        <td>a bhean <b>ghairmiúil</b></td>
        <td>a bhean <b>chróga</b></td>
      </tr>
      <tr>
        <td>a aintín <b>álainn</b></td>
        <td>a aintín <b>fhlaithiúil</b></td>
        <td>a aintín <b>ghalánta</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>a mháthair <b>imníoch</b></td>
        <td>a mháthair <b>chóir</b></td>
        <td>a mháthair <b>chróga</b></td>
      </tr>
      <tr>
        <th rowSpan={3}>{chapterDb["Table4D-case3"]}
        </th>
        <td>don bhean <b>bheag</b></td>
        <td>don bhean <b>ghairmiúil</b></td>
        <td>ar an éide <b>ghalánta</b></td>
      </tr>
      <tr>
        <td>ag an aintín <b>álainn</b></td>
        <td>sa tuairisc <b>mhíosúil</b></td>
        <td>san aiste <b>ghonta</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>leis an máthair <b>imníoch</b></td>
        <td>san aiste <b>dheacair</b></td>
        <td>den mhí <b>fhada</b></td>
      </tr>
      <tr>
        <th rowSpan={3}>{chapterDb["Table4D-case4"]}
        </th>
        <td>teach na mná <b>bige</b></td>
        <td>maoin na mná <b>gairmiúla</b></td>
        <td>luach na héide <b>galánta</b></td>
      </tr>
      <tr>
        <td>peata na máthar <b>imníche</b></td>
        <td>fad na tuairisce <b>mhíosúla</b></td>
        <td>údar na haiste <b>gonta</b></td>
      </tr>
      <tr>
        <td>ceol na haintín <b>áille</b></td>
        <td>teideal na haiste <b>deacra</b></td>
        <td>deireadh na míosa <b>fada</b></td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table4F = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={4} caption={chapterDb["Table4F-caption"]} docLang={props.docLang} tableLetter="F">
    <thead>
      <tr>
        <th className="text-xl" colSpan={4}>{chapterDb["Table4F-title"]}
        </th>
      </tr>
      <tr>
        <th>{chapterDb["Table4D-col1"]}
        </th>
        <th>{chapterDb["Table4D-col2"]}
        </th>
        <th>{chapterDb["Table4D-col3"]}
        </th>
        <th>{chapterDb["Table4D-col4"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case1"]}
        </th>
        <td>na fir <b>bheaga</b></td>
        <td>na leabhair <b>shuimiúla</b></td>
        <td>na cótaí <b>buí</b></td>
      </tr>
      <tr>
        <td>na peileadóirí <b>clúiteacha</b></td>
        <td>na daoine <b>córa</b></td>
        <td>na daoine <b>cuí</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>na buachaillí <b>ciúine</b></td>
        <td>na páistí <b>flaithiúla</b></td>
        <td>na gardaí <b>cróga</b></td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case2"]}
        </th>
        <td>a fheara <b>beaga</b></td>
        <td>a fheara <b>misniúla</b></td>
        <td>a dhaoine <b>cuí</b></td>
      </tr>
      <tr>
        <td>a pheileadóirí <b>clúiteacha</b></td>
        <td>a dhaoine <b>córa</b></td>
        <td>a fheara <b>cliste</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>a bhuachaillí <b>ciúine</b></td>
        <td>a pháistí <b>flaithiúla</b></td>
        <td>a ghardaí <b>cróga</b></td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case3"]}
        </th>
        <td>ar na fir <b>bheaga</b></td>
        <td>do na fir <b>mhisniúla</b></td>
        <td>ar na cótaí <b>buí</b></td>
      </tr>
      <tr>
        <td>na peileadóirí <b>clúiteacha</b></td>
        <td>leis na daoine <b>córa</b></td>
        <td>leis na daoine <b>cuí</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>leis na buachaillí <b>ciúine</b></td>
        <td>ó na páistí <b>flaithiúla</b></td>
        <td>do na gardaí <b>cróga</b></td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case4"]}
        </th>
        <td>caipíní na bhfear <b>beag</b></td>
        <td>bás na bhfear <b>misniúil</b></td>
        <td>úinéirí na gcótaí <b>buí</b></td>
      </tr>
      <tr>
        <td>bróga na bpeileadóirí <b>clúiteacha</b></td>
        <td>clann na ndaoine <b>córa</b></td>
        <td>ar son na ndaoine <b>cuí</b></td>
      </tr>
      <tr>
        <td>rang na mbuachaillí <b>ciúine</b></td>
        <td>airgead na bpáistí <b>flaithiúla</b></td>
        <td>hataí na ngardaí <b>cróga</b></td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table4G = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={4} caption={chapterDb["Table4G-caption"]} docLang={props.docLang} tableLetter="G">
    <thead>
      <tr>
        <th className="text-xl" colSpan={4}>{chapterDb["Table4G-title"]}
        </th>
      </tr>
      <tr>
        <th>{chapterDb["Table4D-col1"]}
        </th>
        <th>{chapterDb["Table4D-col2"]}
        </th>
        <th>{chapterDb["Table4D-col3"]}
        </th>
        <th>{chapterDb["Table4D-col4"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case1"]}
        </th>
        <td>na mná <b>beaga</b></td>
        <td>na mná <b>gairmiúla</b></td>
        <td>na héidí <b>galánta</b></td>
      </tr>
      <tr>
        <td>na haintíní <b>áille</b></td>
        <td>na haintíní <b>córa</b></td>
        <td>na haistí <b>gonta</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>na máithreacha <b>imníocha</b></td>
        <td>na hiníonacha <b>flaithiúla</b></td>
        <td>na míonna <b>fada</b></td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case2"]}
        </th>
        <td>a mhná <b>beaga</b></td>
        <td>a mhná <b>gairmiúla</b></td>
        <td>a mhná <b>galánta</b></td>
      </tr>
      <tr>
        <td>a aintíní <b>áille</b></td>
        <td>a aintíní <b>córa</b></td>
        <td>a iníonacha <b>cróga</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>a mháithreacha <b>imníocha</b></td>
        <td>a iníonacha <b>flaithiúla</b></td>
        <td>a aintíní <b>cliste</b></td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case3"]}
        </th>
        <td>do na mná <b>beaga</b></td>
        <td>do na mná <b>gairmiúla</b></td>
        <td>leis na héidí <b>galánta</b></td>
      </tr>
      <tr>
        <td>ag na haintíní <b>áille</b></td>
        <td>leis na haintíní <b>córa</b></td>
        <td>sna haistí <b>gonta</b></td>
      </tr>
      <tr className="black-bottom-divider">
        <td>leis na máithreacha <b>imníocha</b></td>
        <td>ó na hiníonacha <b>flaithiúla</b></td>
        <td>de na míonna <b>fada</b></td>
      </tr>
      <tr>
        <th className="bg-stone-300" rowSpan={3}>{chapterDb["Table4D-case4"]}
        </th>
        <td>teach na mban <b>beag</b></td>
        <td>pá na mban <b>gairmiúil</b></td>
        <td>luach na n&#x2011;éidí <b>galánta</b></td>
      </tr>
      <tr>
        <td>ceol na n&#x2011;aintíní <b>áille</b></td>
        <td>clann na n&#x2011;aintíní <b>córa</b></td>
        <td>údair na n&#x2011;aistí <b>gonta</b></td>
      </tr>
      <tr>
        <td>deifir na máithreacha <b>imníocha</b></td>
        <td>airgead na n&#x2011;iníonacha <b>flaithiúla</b></td>
        <td>tús na míonna <b>fada</b></td>
      </tr>
    </tbody>
  </MarkedTable>;
};
