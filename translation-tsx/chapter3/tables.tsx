import { getCommonTranslator, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const Table3A = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable
    chapter={3}
    tableLetter="A"
    caption={chapterDb["Table3A-caption"]}
    docLang={props.docLang}>
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table-3A-Col1Title"]}
        </th>
        <th>{chapterDb["Table-3A-Col2Title"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chuir sé <b>chun an rialtais</b> é.</td>
        <td>Tá sé ann <b>chun an obair a dhéanamh</b>.</td>
      </tr>
      <tr>
        <td>Ní fhanann sé i bhfad <b>tar éis dinnéir</b>.</td>
        <td>Tá na leanaí <b>tar éis dinnéar a réiteach</b> duit.</td>
      </tr>
      <tr>
        <td>Tharla sé <b>le linn na tréimhse</b> sin.</td>
        <td>Is <b>le linn na hoibrithe a fhostú</b> a tháinig an cheist sin chun cinn.</td>
      </tr>
      <tr>
        <td>Tá an lánúin óg <b>ar tí a bpósta</b>.</td>
        <td>Bhí na fir shlándála <b>ar tí na doirse a dhúnadh</b>.</td>
      </tr>
      <tr>
        <td>Cuideachta áitiúil atá <b>i mbun na hoibre</b>.</td>
        <td>Cuideachta áitiúil atá <b>i mbun an teach a thógáil</b>.</td>
      </tr>
      <tr>
        <td>An bhfuil siad <b>ag geallúint an airgid</b> dúinn?</td>
        <td>Níl aon duine <b>ag bagairt an t&#x2011;airgead a thógáil</b> ar ais.</td>
      </tr>
    </tbody>
  </MarkedTable>;
}

export const Table3B = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={3} caption={chapterDb["Table3B-caption"]} docLang={props.docLang} tableLetter="B">
    <colgroup>
      <col className="w-1/4" />
      <col className="w-3/8" />
      <col className="w-3/8" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table3B-Col1"]}
        </th>
        <th>{chapterDb["Table3B-Col2"]}
        </th>
        <th>{chapterDb["Table3B-Col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowSpan={4}>{chapterDb["Table3B-row1"]}
        </th>
        <td>Thosaigh sé <b>ag imirt peil Mheiriceánach</b> sna Stáit Aontaithe anuraidh.</td>
        <td>Chaith sé tamall <b>ag glacadh grianghraif áille</b> i nGarraithe Náisiúnta na Lus.</td>
      </tr>
      <tr>
        <td>Tá siad <b>ag coinneáil súil ghéar</b> ar na himeachtaí.</td>
        <td>Bímse <b>ag ullmhú lóin shláintiúla</b> dom féin.</td>
      </tr>
      <tr>
        <td>Táim <b>ag réiteach cupán tae</b>.</td>
        <td>Níl siad ach <b>ag éileamh pinsin stáit</b>.</td>
      </tr>
      <tr>
        <td>Bíonn siad <b>ag casadh ceol tíre</b> ar an Aoine.</td>
        <td>An mbíonn sé <b>ag scríobh leabhair staire</b>?</td>
      </tr>
      <tr>
        <th rowSpan={3}>{chapterDb["Table3B-row2"]}
        </th>
        <td>Níl siad <b>ag fáil pingin ar bith</b>.</td>
        <td>Bíonn an chuideachta sin <b>ag tógáil foirgnimh den scoth</b>.</td>
      </tr>
      <tr>
        <td>Tá an Chomhairle Contae <b>ag ullmhú scéim den sórt sin</b>.</td>
        <td>Tá na fostaithe <b>ag iarraidh tuarastail as an ngnáth</b>.</td>
      </tr>
      <tr>
        <td>Ritheadh ionstraim <b>do leasú riail ar leith</b>.</td>
        <td>Ritheadh ordú <b>d&rsquo;fhionraí liúntais den sórt sin</b>.</td>
      </tr>
      <tr>
        <th rowSpan={3}>{chapterDb["Table3B-row3"]}
        </th>
        <td>Tá sé <b>ag cuardach scéal a scríobh sé</b> anuraidh.</td>
        <td>Tá an coiste <b>ag athbhreithniú cláir ar cuireadh tús leo fadó</b>.</td>
      </tr>
      <tr>
        <td>Tá an Rialtas <b>ag leasú Acht a ritheadh san ochtú haois déag</b>.</td>
        <td>Bhí sé <b>ag moladh scannáin a mbeadh spéis agam iontu</b>.</td>
      </tr>
      <tr>
        <td>Ní fiú bheith <b>ag ordú trealamh atá daor</b>.</td>
        <td>Thosaigh siad <b>ag díol milseáin a bhí an-bhlasta</b>.</td>
      </tr>
      <tr>
        <th rowSpan={3}>{chapterDb["Table3B-row4"]}
        </th>
        <td>An bhfuil sí <b>ag réiteach aon straitéis</b> chun déileáil leis?</td>
        <td>An bhfuil siad <b>ag tógáil aon fhoirgnimh</b> faoi láthair?</td>
      </tr>
      <tr>
        <td>Ní léir dom go bhfuil siad <b>ag déanamh aon iarracht</b>.</td>
        <td>Nílim <b>ag ceannach aon dearbháin</b> uait i mbliana.</td>
      </tr>
      <tr>
        <td>Tá na mic léinn <b>ag déanamh an-obair</b> ar an tionscadal sin.</td>
        <td></td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table3C = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={3} caption={chapterDb["Table3C-caption"]} docLang={props.docLang} tableLetter="C">
    <thead>
      <tr>
        <th>{chapterDb["Table3B-Col1"]}
        </th>
        <th>{chapterDb["Table3B-Col2"]}
        </th>
        <th>{chapterDb["Table3B-Col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowSpan={4}>{chapterDb["Table3C-row1"]}
        </th>
        <td>Tá an dlíodóir ag gníomhú <b>thar ceann eagraíocht áitiúil</b>.</td>
        <td>Cheannaigh mé leabhair dóibh <b>in ionad bréagáin úra</b>.</td>
      </tr>
      <tr>
        <td>Shuigh siad <b>cois abhainn chiúin</b>.</td>
        <td>Is éasca léim <b>trasna srutháin bheaga</b>.</td>
      </tr>
      <tr>
        <td>Chuaigh sé <b>i gcomhair cupán tae</b>.</td>
        <td>Chuaigh sí <b>ar thóir buidéil uisce</b>.</td>
      </tr>
      <tr>
        <td>Ní mór an páipéarachas cuí a chomhlánú <b>le haghaidh scéim pinsin ceirde</b>.</td>
        <td>Is suíomh gréasáin <b>le haghaidh mic léinn</b> é.</td>
      </tr>
      <tr>
        <th rowSpan={2}>{chapterDb["Table3C-row2"]}
        </th>
        <td>Ní foláir leanúint ar aghaidh <b>d&rsquo;ainneoin moill den sórt sin</b>.</td>
        <td>Teastaíonn uathu cláir nua-aimseartha a chur <b>in ionad seanchláir gan mhaith</b>.</td>
      </tr>
      <tr>
        <td>Ní fiú a bheith <b>i mbun obair in aisce</b>.</td>
        <td>Cuireadh na bailiúcháin <b>faoi chúram leabharlanna ar leith</b>.</td>
      </tr>
      <tr>
        <th rowSpan={4}>{chapterDb["Table3C-row3"]}
        </th>
        <td>Bhuaigh siad ticéid <b>i gcomhair turas chun na Fraince</b>.</td>
        <td>Fuarthas an admháil <b>i measc iarratais ó dhaltaí</b> scoile.</td>
      </tr>
      <tr>
        <td>Tá sí ag obair ann <b>de bhun conradh leis an Roinn</b>.</td>
        <td>Bunaíodh scéim ar leith <b>le haghaidh amharclanna i lár na cathrach</b>.</td>
      </tr>
      <tr>
        <td>Fuair siad maoiniú <b>le haghaidh scéim i dtaca le cúram</b> leanaí.</td>
        <td>Scríobh sé alt <b>i dtaobh amhráin faoin imirce</b>.</td>
      </tr>
      <tr>
        <td>An ndúirt sé go raibh sé <b>i mbun eagarthóireacht air</b>?</td>
        <td>Is ábhar é seo ar thagair mé dó <b>le linn cainteanna leis</b>.</td>
      </tr>
      <tr>
        <th rowSpan={3}>{chapterDb["Table3C-row4"]}
        </th>
        <td>Fágadh gan mhaoiniú iad <b>de bharr scéim ar tháinig deireadh léi</b>.</td>
        <td>Tá sé <b>ar thóir leabhair a ndearnadh scannáin díobh</b>.</td>
      </tr>
      <tr>
        <td>Bhí sé i mbéal an phobail <b>de thoradh amhrán dar teideal <i>An Dreoilín</i></b>.</td>
        <td>Tá an scéal á fhiosrú arís <b>i bhfianaise páipeir a aimsíodh</b>.</td>
      </tr>
      <tr>
        <td>Nach iontach a bheith ag siúl <b>trasna sráid a tógadh sa 14ú haois</b>!</td>
        <td>Rith siad <b>trasna páirceanna a bhí lán de bhláthanna beaga</b>.</td>
      </tr>
      <tr>
        <th rowSpan={3}>{chapterDb["Table3C-row5"]}
        </th>
        <td>Bíonn an obair sin le déanamh <b>i gcás aon chonradh</b>.</td>
        <td>Socraítear téarmaí ar leith <b>comhair aon tionscail</b>.</td>
      </tr>
      <tr>
        <td>Ní dhearnadh gearán <b>i gcoinne aon mhúinteoir</b> sa scoil seo.</td>
        <td>An bhfuil an fhoráil sin <b>faoi réir aon chomhaontuithe fostaíochta</b>?</td>
      </tr>
      <tr>
        <td>Ní foláir dúinn airgead a thuilleamh <b>fearacht aon eagras</b>.</td>
        <td><b>Dála aon údair</b>, chaith siad go leor ama ag déanamh taighde.</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table3D = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={3} caption={chapterDb["Table3D-caption"]} docLang={props.docLang} tableLetter="D">
    <colgroup>
      <col className="w-1/5" />
      <col className="w-2/5" />
      <col className="w-2/5" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table3B-Col1"]}
        </th>
        <th>{chapterDb["Table3B-Col2"]}
        </th>
        <th>{chapterDb["Table3B-Col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowSpan={2}>{chapterDb["Table3B-row1"]}
        </th>
        <td>Thit <b>go leor báisteach throm</b> an tseachtain seo caite.</td>
        <td>Tá <b>an-chuid foirgnimh cháiliúla</b> i mBaile Átha Cliath.</td>
      </tr>
      <tr>
        <td>An dteastaíonn <b>roinnt arán cruithneachta</b> uait?</td>
        <td>Bhí <b>scata báid iascaigh</b> sa chuan.</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table3E = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);

  return <MarkedTable chapter={3} caption={chapterDb["Table3E-caption"]} docLang={props.docLang} tableLetter="E">
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th>{commonDb["Uatha"]}
        </th>
        <th>{commonDb["Iolra"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>An <b>leabhar múinteora scoile</b> é seo?</td>
        <td>Is <b>calafort bád iascaigh</b> é.</td>
      </tr>
      <tr>
        <td>Cé a thosaigh <b>an togra oideachais Gaeltachta</b> sin?</td>
        <td>Cá huair a tionscnaíodh <b>an scéim ealaíon pobail</b>?</td>
      </tr>
      <tr>
        <td>Bhain mé úsáid as <b>an tSeirbhís Eolais Gnó</b>.</td>
        <td>Tá <b>monarcha scáileán ríomhaire</b> sa pháirc ghnó.</td>
      </tr>
      <tr>
        <td>Is <b>fear tí solais é</b>.</td>
        <td>Ní mór <b>an plean bóithre náisiúnta</b> a athbhreithniú.</td>
      </tr>
      <tr>
        <td>An <b>cathaoirleach boird stáit</b> í?</td>
        <td>Tionóladh cruinniú <b>d'eagarthóirí nuachtán áitiúil</b>.</td>
      </tr>
      <tr>
        <td>Scríobh sé <b>amhrán ceoil tíre</b>.</td>
        <td>An ball de <b>chumann óstán idirnáisiúnta</b> é?</td>
      </tr>
      <tr>
        <td>Cá bhfuil <b>an tIonad Nuálaíochta Gnó</b>?</td>
        <td>Cá bhfuil <b>an t&#x2011;ionad diúscartha crann Nollag</b>?</td>
      </tr>
      <tr>
        <td>Ní mór páirt a ghlacadh <b>i bpróiseas réitigh díospóidí tionscail</b>.</td>
        <td>Cén cineál taithí a bhíonn <b>ag láithreoirí clár cúrsaí reatha</b>?</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table3F = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);

  return <MarkedTable chapter={3} caption={chapterDb["Table3F-caption"]} docLang={props.docLang} tableLetter="F">
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/2" />
    </colgroup>
    <thead>
      <tr>
        <th>{commonDb["Uatha"]}
        </th>
        <th>{commonDb["Iolra"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bhí siad <b>i mbun ceoil ar an tsráid</b>.</td>
        <td>Bhí an madra <b>ar thóir éan sa pháirc</b>.</td>
      </tr>
      <tr>
        <td>Chuaigh siad <b>le haghaidh dinnéir ar an 14 Samhain</b>.</td>
        <td>Dúirt siad go raibh siad chun tithe a thógáil <b>in ionad árasán i mbliana</b>.</td>
      </tr>
      <tr>
        <td>Bhí sí ann <b>ar feadh tamaill le cailíní eile ón gceantar</b>.</td>
        <td>Fuair sé brioscaí <b>in áit bonnóg sa siopa</b>.</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table3G = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);

  return <MarkedTable chapter={3} caption={chapterDb["Table3G-caption"]} docLang={props.docLang} tableLetter="G">
    <colgroup>
      <col className="w-1/2" />
      <col className="w-1/4" />
      <col className="w-1/4" />
    </colgroup>
    <thead>
      <tr>
        <th>{chapterDb["Table3G-col1"]}
        </th>
        <th>{chapterDb["Table3G-col2"]}
        </th>
        <th>{chapterDb["Table3G-col3"]}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["Table3G-row1-condition"]}
        </td>
        <td>{chapterDb["leanannAnGinideach"]}
        </td>
        <td>Bhí bus <b>fhoireann</b> Chorcaí ann.</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row2-condition"]}
        </td>
        <td>{chapterDb["leanannAnGinideach"]}
        </td>
        <td>Tá an t&#x2011;iniúchóir ag fiosrú <b>an chur i gcéill</b> sin faoi láthair.</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row3-condition"]}
        </td>
        <td>{chapterDb["leanannAnGinideach"]}
        </td>
        <td>Bhí na fir shlándála ar tí <b>na doirse</b> a dhúnadh.</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row4-condition"]}
        </td>
        <td>{chapterDb["leanannAnGinideach"]}
        </td>
        <td>
          <ul>
            <li>Gortaíodh í le linn <b>ceann</b> de na cluichí áitiúla.</li>
            <li>Tá laghdú tagtha ar mhéid <b>mo chuid</b> oibre.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row5-condition"]}
        </td>
        <td>{chapterDb["leanannAnGinideach"]}
        </td>
        <td>Cá bhfuil príomhoifig <b>Bóthar</b>?</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row6-condition"]}
        </td>
        <td>{chapterDb["leanannAnGinideach"]}
        </td>
        <td>Tá sé tar éis <b>a rá</b> go ndéanfaidh sé é.</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row7-condition"]}
        </td>
        <td>{chapterDb["Table3G-row7-rule"]}
        </td>
        <td>An bhfuil sé chun <b>iomáint</b> le Corcaigh?</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row8-condition"]}
        </td>
        <td>{chapterDb["leanannAnGinideach"]}
        </td>
        <td>Cén cineál <b>cur chuige</b> a d&rsquo;úsáid siad?</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row9-condition"]}
        </td>
        <td>{chapterDb["Table3G-row9-rule"]}
        </td>
        <td>
          <ul>
            <li>Tá na páistí ag iarraidh <b>léim</b>.</li>
            <li>Tá sé tar éis <b>siúl</b> abhaile.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row10-condition"]}
        </td>
        <td>{chapterDb["Table3G-row10-rule"]}
        </td>
        <td>An bhfuil tú ag iarraidh <b>éirí</b>?</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row11-condition"]}
        </td>
        <td>{chapterDb["Table3G-row11-rule"]}
        </td>
        <td>
          <ul>
            <li>Tá an lánúin sin ar tí <b>pósadh</b>.</li>
            <li>Tá an lá ag dul chun <b>síneadh</b>.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row12-condition"]}
        </td>
        <td>{chapterDb["Table3G-row12-rule"]}
        </td>
        <td>Tá siad ag tabhairt <b>aghaidh</b> ar an bhfoireann eile anois.</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row13-condition"]}
        </td>
        <td>{chapterDb["leanannAnGinideach"]}
        </td>
        <td>Tá sé ag déanamh <b>bolg le gréin</b> sa Fhrainc faoi láthair.</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row14-condition"]}
        </td>
        <td>{chapterDb["leanannAnGinideach"]}
        </td>
        <td>Déantar ócáid <b>deireadh</b> seachtaine a eagrú gach bliain.</td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row15-condition"]}
        </td>
        <td>{chapterDb["Table3G-row15-rule"]}
        </td>
        <td>
          <ul>
            <li>1lb <b>plúr</b></li>
            <li>250g <b>siúcra mín</b></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row16-condition"]}
        </td>
        <td>{chapterDb["Table3G-row16-rule"]}
        </td>
        <td>
          <ul>
            <li>Bímse ag ullmhú <b>lóin shláintiúla</b> dom féin. (<i>{commonDb["nod-iol"]}</i>)</li>
            <li>Táim ag réiteach <b>cupán tae</b>. (<i>{commonDb["nod-u"]}</i>)</li>
            <li>Níl siad ag fáil <b>pingin ar bith</b>. (<i>{commonDb["nod-u"]}</i>)</li>
            <li>Ní fiú bheith ag ordú <b>trealamh atá daor</b>. (<i>{commonDb["nod-u"]}</i>)</li>
            <li>Nílim ag ceannach <b>aon dearbháin</b> i mbliana. (<i>{commonDb["nod-iol"]}</i>)</li>
            <li>Tá na mic léinn ag déanamh <b>an-obair</b> ar an tionscadal sin. (<i>{commonDb["nod-u"]}</i>)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row17-condition"]}
        </td>
        <td>{chapterDb["Table3G-row17-rule"]}
        </td>
        <td>
          <ul>
            <li>Chuaigh sé i gcomhair <b>cupán tae</b>. (<i>{commonDb["nod-u"]}</i>)</li>
            <li>D&rsquo;fhéadfaí a leithéid a rá i gcás <b>cláir ar bith</b>. (<i>{commonDb["nod-iol"]}</i>)</li>
            <li>Fuarthas an admháil i measc <b>iarratais ó dhaltaí scoile</b>. (<i>{commonDb["nod-iol"]}</i>)</li>
            <li>Fágadh gan mhaoiniú iad de bharr <b>scéim ar tháinig deireadh léi</b>. (<i>{commonDb["nod-u"]}</i>)</li>
            <li>Bíonn an obair sin le déanamh i gcás <b>aon chonradh</b>. (<i>{commonDb["nod-u"]}</i>)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["Table3G-row18-condition"]}
        </td>
        <td>{chapterDb["Table3G-row18-rule"]}
        </td>
        <td>Thit go leor <b>báisteach throm</b> an tseachtain seo caite. (<i>{commonDb["nod-u"]}</i>)</td>
      </tr>
    </tbody>
  </MarkedTable>;
};
