import { MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const Table10A = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={10} caption={chapterDb["Table10A-caption"]} docLang={props.docLang} tableLetter="A">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={2}>{chapterDb["Table10A-header"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{chapterDb["Table10A-noun-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-1"]}</td>
        <td>an bhean; hata an fhir; don chlár; sa pháirc</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-2"]}</td>
        <td>a bhuachaill; a dhaoine uaisle</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-3"]}</td>
        <td>mo pheann; do chat; a ghuthán; gach uile dhuine; aon bhord</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-4"]}</td>
        <td>aon chailín amháin; an chéad bhróg; dhá mhadra; trí bhád</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-5"]}</td>
        <td>faoi bhord; um Cháisc; ar bhád; idir fhir agus mhná</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-6"]}</td>
        <td>in aice Bhaile Átha Cliath; timpeall mhí na Nollag</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-7"]}</td>
        <td>cloch shneachta; tuarascáil pharlaiminte</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-8"]}</td>
        <td>éin chlóis; ceadúnais ghnó</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-9"]}</td>
        <td>Cuan Bhaile Átha Cliath; doras Theach an Phiarsaigh</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-10"]}</td>
        <td>Úna Nic Shuibhne; Isibéal Nig Fhloinn</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-11"]}</td>
        <td>dea-cháil; deargbhuile; rósghairdín</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-noun-rule-12"]}</td>
        <td>Ba mheicneoir é; Nár cheoltóir maith é?; Ba dhóigh leis gur ghadaí é.</td>
      </tr>
      <tr>
        <th>{chapterDb["Table10A-adjective-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-adjective-rule-1"]}</td>
        <td>
          feoil bhlasta; leis an mbean cháiliúil; a ghirseach chiúin;
          úinéir an chapaill ghlais; a éin bhig; lipéid shothuigthe;
          ar na scamaill mhóra dhubha; dhá ghadhar fhíochmhara;
          dhá chat thanaí; trí fhuinneog mhóra
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-adjective-rule-2"]}</td>
        <td>laistigh de cheithre mhí; sa chúigiú háit; a dtríú hiarracht (<i>{chapterDb["ThirdPersonMasc"]}</i>); bróga an cheathrú girseach</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-adjective-rule-3"]}</td>
        <td>dhá bhróg; Bhí dháréag i láthair.</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-adjective-rule-4"]}</td>
        <td>a dó dhéag; cúig bhó dhéag; trí cinn fhichead</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-adjective-rule-5"]}</td>
        <td>beagmhaith; fíordheas; ollmhór</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-adjective-rule-6"]}</td>
        <td>ba dheas; nár dhona; níor cheart</td>
      </tr>
      <tr>
        <th>{chapterDb["Table10A-verb-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-verb-rule-1"]}</td>
        <td>
          mhol mé; mholainn; mholfainn; an bhean a thiomáineann é;
          má dhéanann tú; Is ann a cheannaíonn sé leabhair.
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-verb-rule-2"]}</td>
        <td>ar chuir tú; nár phós sé; níor cheannaigh mé; sular tháinig sé</td>
      </tr>
      <tr>
        <th>{chapterDb["Table10A-pronominal-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10A-pronominal-rule-1"]}</td>
        <td>ó shin i leith</td>
      </tr>
    </tbody>
  </MarkedTable>;
}

export const Table10B = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={10} caption={chapterDb["Table10B-caption"]} docLang={props.docLang} tableLetter="B">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={2}>{chapterDb["Table10B-header"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{chapterDb["Table10B-noun-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10B-noun-rule-1"]}</td>
        <td>ar an gcapall; leis an mbean; ón mbosca; tríd an bpáirc; seolta na mbád beag</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10B-noun-rule-2"]}</td>
        <td>ár n&#x2011;athair; bhur bpáistí; a gcótaí; ár dhá gcapall; bhur dhá dteach</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10B-noun-rule-3"]}</td>
        <td>seacht ndícheall; ocht gcinn</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10B-noun-rule-4"]}</td>
        <td>i mbád; ar gcúl; go bhfios dom</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10B-noun-rule-5"]}</td>
        <td>cá bhfios dó?</td>
      </tr>
      <tr>
        <th>{chapterDb["Table10B-adjective-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10B-adjective-rule-1"]}</td>
        <td>i gceithre leabhar; ar an gcúigiú duine; a dtríú hiarracht (<i>{chapterDb["ThirdPersonPl"]}</i>); scéal mhadra na n&#x2011;ocht gcos</td>
      </tr>
      <tr>
        <th>{chapterDb["Table10B-verb-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10B-verb-rule-1"]}</td>
        <td>an bhean a dtagann a páistí ar scoil; an bainne nach n&#x2011;óltar; tá a dteastódh uait acu; an leabhar dá dtagraítear</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10B-verb-rule-2"]}</td>
        <td>an mbeidh; dá mbeadh; mura ndéanfaidh; Nach n&#x2011;ólann sé bainne?; ní bhfuair; ní bhfaighidh sé; ní bhfaighfeá</td>
      </tr>
    </tbody>
  </MarkedTable>;
}

export const Table10C = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={10} caption={chapterDb["Table10C-caption"]} docLang={props.docLang} tableLetter="C">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={2}>{chapterDb["Table10C-header"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{chapterDb["Table10C-Noun-Adjective-Header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10C-rule-1"]}</td>
        <td>an t&#x2011;eitleán; an t&#x2011;aon duine; an t&#x2011;ochtú clár sa tsraith</td>
      </tr>
    </tbody>
  </MarkedTable>;
}

export const Table10D = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={10} caption={chapterDb["Table10D-caption"]} docLang={props.docLang} tableLetter="D">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={2}>{chapterDb["Table10D-header"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{chapterDb["Table10D-noun-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10D-rule-1"]}</td>
        <td>an tsúil; ar an tsráid; leis an tsreang; deireadh an tséasúir; eochair an tsiopadóra</td>
      </tr>
    </tbody>
  </MarkedTable>;
}

export const Table10E = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={10} caption={chapterDb["Table10E-caption"]} docLang={props.docLang} tableLetter="E">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={2}>{chapterDb["Table10E-header"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{chapterDb["Table10E-noun-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-rule-1"]}</td>
        <td>ainm na háite; na heitleáin; faoi na hábhair</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-rule-2"]}</td>
        <td>an dara háit; an ceathrú halt</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-rule-3"]}</td>
        <td>trí huaire</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-rule-4"]}</td>
        <td>le hintinn mhaith; go hAlasca</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-rule-5"]}</td>
        <td>Cá hiontas?</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-rule-6"]}</td>
        <td>Seán Ó hAodha</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-rule-7"]}</td>
        <td>Dé hAoine</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-rule-8"]}</td>
        <td>a hathair; a húll</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-rule-9"]}</td>
        <td>ní háibhéil é; ní hionadh é; ní hacmhainn di; ní healaín dó; ní huair chairde í; ní heolas go haontíos</td>
      </tr>
      <tr>
        <th>{chapterDb["Table10E-adjective-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-adjective-rule-1"]}</td>
        <td>chomh hard le teach; go hálainn; le haon duine</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-adjective-rule-2"]}</td>
        <td>ní haon ionadh é; ní hiondúil go dtarlaíonn sé; ní hamhlaidh nár insíodh di</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-adjective-rule-3"]}</td>
        <td>a hocht; na hocht gcáipéis</td>
      </tr>
      <tr>
        <th>{chapterDb["Table10E-pronominal-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-pronominal-rule-1"]}</td>
        <td>cé hí; ní hé</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-pronominal-rule-2"]}</td>
        <td>ní héard; ní hin</td>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-pronominal-rule-3"]}</td>
        <td>le hiad</td>
      </tr>
      <tr>
        <th>{chapterDb["Table10E-verb-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10E-verb-rule-1"]}</td>
        <td>ná habair; ná himigh</td>
      </tr>
    </tbody>
  </MarkedTable>;
}

export const Table10F = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={10} caption={chapterDb["Table10F-caption"]} docLang={props.docLang} tableLetter="F">
    <thead>
      <tr>
        <th className="text-xl py-2" colSpan={2}>{chapterDb["Table10F-header"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{chapterDb["Table10F-verb-header"]}</th>
        <th>{chapterDb["Examples"]}</th>
      </tr>
      <tr>
        <td>{chapterDb["Table10F-verb-rule-1"]}</td>
        <td>d&rsquo;fhreagair sé; má d&rsquo;fheiceadh sé; d&rsquo;imigh sí; d&rsquo;aithneofaí í</td>
      </tr>
    </tbody>
  </MarkedTable>;
}
