import { AutoColGroup, getCommonTranslator, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const Table9A = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9A-caption"]} docLang={props.docLang} tableLetter="A">
    <colgroup>
      <col className="w-2/10" />
      <col className="w-8/10" />
    </colgroup>
    <thead>
      <tr>
        <th colSpan={2}>{chapterDb["TheBareNumbers"]} 0&ndash;19</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>0&ndash;10</th>
        <td>náid/neamhní, a haon, a dó, a trí, a ceathair, a cúig, a sé, a seacht, a hocht, a naoi, a deich</td>
      </tr>
      <tr>
        <th>11&ndash;19</th>
        <td>a haon déag, a dó dhéag, a trí déag, a ceathair déag, a cúig déag, a sé déag, a seacht déag, a hocht déag, a naoi déag</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9B = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9B-caption"]} docLang={props.docLang} tableLetter="B">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["TheBareNumbers"]} 20&ndash;99</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>20&ndash;29</th>
        <td>fiche, fiche a haon, fiche a dó, fiche a trí, fiche a ceathair, fiche a cúig, fiche a sé, fiche a seacht, fiche a hocht, fiche a naoi</td>
        <th>60&ndash;69</th>
        <td>seasca, seasca a haon, seasca a dó, seasca a trí, seasca a ceathair, seasca a cúig, seasca a sé &hellip;</td>
      </tr>
      <tr>
        <th>30&ndash;39</th>
        <td>tríocha, &hellip; tríocha a ceathair, tríocha a cúig, tríocha a sé &hellip;</td>
        <th>70&ndash;79</th>
        <td>seachtó, &hellip; seachtó a seacht, seachtó a hocht, seachtó a naoi</td>
      </tr>
      <tr>
        <th>40&ndash;49</th>
        <td>daichead/ceathracha, daichead a seacht/ceachreacha a seacht, daichead a hocht/ceathracha a hocht, daichead a naoi/ceathracha a naoi</td>
        <th>80&ndash;89</th>
        <td>ochtó, ochtó a haon, ochtó a dó, ochtó a trí &hellip;</td>
      </tr>
      <tr>
        <th>50&ndash;59</th>
        <td>caoga, caoga a haon, caoga a dó, caoga a trí &hellip;</td>
        <th>90&ndash;99</th>
        <td>nócha, nócha a ceathair, nócha a cúig, nócha a sé &hellip;</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9C = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9C-caption"]} docLang={props.docLang} tableLetter="C">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["TheBareNumbers"]} {chapterDb["TheTens"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>100</th>
        <td>céad</td>
        <th>200</th>
        <td>dhá chéad</td>
      </tr>
      <tr>
        <th>1,000</th>
        <td>míle</td>
        <th>4000</th>
        <td>ceithre míle</td>
      </tr>
      <tr>
        <th>1,000,000</th>
        <td>milliún</td>
        <th>5,000,000</th>
        <td>cúig milliún</td>
      </tr>
      <tr>
        <th>1,000,000,000</th>
        <td>billiún</td>
        <th>17,000,000,000</th>
        <td>seacht mbilliún déag</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9D = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9D-caption"]} docLang={props.docLang} tableLetter="D">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["TheBareNumbers"]} 100&ndash;9,999</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>103</th>
        <td>céad trí</td>
        <th>1,001</th>
        <td>míle a haon</td>
      </tr>
      <tr>
        <th>115</th>
        <td>céad a cúig déag</td>
        <th>1,126</th>
        <td>míle, céad is fiche a sé</td>
      </tr>
      <tr>
        <th>120</th>
        <td>céad fiche</td>
        <th>1,230</th>
        <td>míle, dhá chéad tríocha</td>
      </tr>
      <tr>
        <th>181</th>
        <td>céad ochtó a haon</td>
        <th>2,915</th>
        <td>dhá mhíle, naoi gcéad a cúig déag</td>
      </tr>
      <tr>
        <th>273</th>
        <td>dhá chéad seachtó a trí</td>
        <th>3,824</th>
        <td>trí mhíle, ocht gcéad fiche a ceathair</td>
      </tr>
      <tr>
        <th>355</th>
        <td>trí chéad caoga a cúig</td>
        <th>4,733</th>
        <td>ceithre mhíle, seacht gcéad tríocha a trí</td>
      </tr>
      <tr>
        <th>446</th>
        <td>ceithre chéad daichead a sé</td>
        <th>5,642</th>
        <td>cúig mhíle, sé chéad daichead a dó</td>
      </tr>
      <tr>
        <th>519</th>
        <td>cúig chéad a naoi déag</td>
        <th>6,551</th>
        <td>sé mhíle, cúig chéad caoga a haon</td>
      </tr>
      <tr>
        <th>657</th>
        <td>sé chéad caoga a seacht</td>
        <th>7,460</th>
        <td>seacht míle, ceithre chéad seasca</td>
      </tr>
      <tr>
        <th>734</th>
        <td>seacht gcéad tríocha a ceathair</td>
        <th>8,379</th>
        <td>ocht míle, trí chéad seachtó a naoi</td>
      </tr>
      <tr>
        <th>818</th>
        <td>ocht gcéad a hocht déag</td>
        <th>9,288</th>
        <td>naoi míle, dhá chéad ochtó a hocht</td>
      </tr>
      <tr>
        <th>999</th>
        <td>naoi gcéad nócha a naoi</td>
        <th>9,999</th>
        <td>naoi míle, naoi gcéad nócha a naoi</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9E = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9E-caption"]} docLang={props.docLang} tableLetter="E">
    <thead>
      <tr>
        <th colSpan={3}>{chapterDb["TheBareNumbers"]} 10,000+</th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["Table9E-col2"]}</th>
        <th>{chapterDb["Table9E-col3"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>13,452</th>
        <td>trí mhíle dhéag, ceithre chéad caoga a dó</td>
        <td>trí déag míle, ceithre chéad caoga a dó</td>
      </tr>
      <tr>
        <th>18,901</th>
        <td>ocht míle dhéag, naoi gcéad a haon</td>
        <td>ocht déag míle, naoi gcéad a haon</td>
      </tr>
      <tr>
        <th>38,482</th>
        <td>ocht míle is tríocha, ceithre chéad ochtó a dó</td>
        <td>tríocha a hocht míle, ceithre chéad ochtó a dó</td>
      </tr>
      <tr>
        <th>65,155</th>
        <td>cúig mhíle is seasca, céad caoga a cúig</td>
        <td>seasca a cúig míle, céad caoga a cúig</td>
      </tr>
      <tr>
        <th>74,048</th>
        <td>ceithre mhíle is seachtó, daichead a hocht</td>
        <td>seachtó a ceathair míle, daichead a hocht</td>
      </tr>
      <tr>
        <th>92,827</th>
        <td>dhá mhíle is nócha, ocht gcéad fiche a seacht</td>
        <td>nócha a dó míle, ocht gcéad fiche a seacht</td>
      </tr>
      <tr>
        <th>116,104</th>
        <td>céad is sé mhíle dhéag, céad a ceathair</td>
        <td>céad a sé déag míle, céad a ceathair</td>
      </tr>
      <tr>
        <th>520,712</th>
        <td>cúig chéad is fiche míle, seacht gcéad a dó dhéag</td>
        <td>cúig chéad fiche míle, seacht gcéad a dó dhéag</td>
      </tr>
      <tr>
        <th>974,345</th>
        <td>naoi gcéad seachtó is ceithre mhíle, trí chéad daichead a cúig</td>
        <td>naoi gcéad seachtó a ceathair míle, trí chéad daichead a cúig</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9F = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9F-caption"]} docLang={props.docLang} tableLetter="F">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["TheCardinalNumbers"]} 1&ndash;19</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>bád/bád amháin/aon bhád amháin<br />ábhar/ábhar amháin/aon ábhar amháin</td>
        <th>11</th>
        <td>aon bhád déag<br />aon ábhar déag</td>
      </tr>
      <tr>
        <th>2</th>
        <td>dhá bhád<br />dhá ábhar</td>
        <th>12</th>
        <td>dhá bhád déag<br />dhá oíche déag</td>
      </tr>
      <tr>
        <th>3</th>
        <td>trí bhád<br />trí ábhar</td>
        <th>13</th>
        <td>trí bhád déag<br />trí ábhar déag</td>
      </tr>
      <tr>
        <th>4</th>
        <td>ceithre bhád<br />ceithre ábhar</td>
        <th>14</th>
        <td>ceithre bhád déag<br />ceithre ábhar déag</td>
      </tr>
      <tr>
        <th>5</th>
        <td>cúig bhád<br />cúig ábhar</td>
        <th>15</th>
        <td>cúig bhád déag<br />cúig oíche déag</td>
      </tr>
      <tr>
        <th>6</th>
        <td>sé bhairille<br />sé oíche</td>
        <th>16</th>
        <td>sé bhairille dhéag<br />sé ábhar déag</td>
      </tr>
      <tr>
        <th>7</th>
        <td>seacht mbairille<br />seacht n&#x2011;oíche</td>
        <th>17</th>
        <td>seacht mbairille dhéag<br />seacht n&#x2011;oíche déag</td>
      </tr>
      <tr>
        <th>8</th>
        <td>ocht mbairille<br />ocht n&#x2011;oíche</td>
        <th>18</th>
        <td>ocht mbád déag<br />ocht n&#x2011;oíche déag</td>
      </tr>
      <tr>
        <th>9</th>
        <td>naoi mbairille<br />naoi n&#x2011;oíche</td>
        <th>19</th>
        <td>naoi mbairille dhéag<br />naoi n&#x2011;oíche dhéag</td>
      </tr>
      <tr>
        <th>10</th>
        <td colSpan={3}>deich mbairille<br />deich n&#x2011;oíche</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9G = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9G-caption"]} docLang={props.docLang} tableLetter="G">
    <AutoColGroup ratios={[2, 1, 1, 1]} />
    <thead>
      <tr>
        <th></th>
        <th>2</th>
        <th>3&ndash;6</th>
        <th>7&ndash;10</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>bliain</th>
        <td>bhliain</td>
        <td>bliana</td>
        <td>mbliana</td>
      </tr>
      <tr>
        <th>seachtain</th>
        <td>sheachtain</td>
        <td>seachtaine</td>
        <td>seachtaine</td>
      </tr>
      <tr>
        <th>ceann<br />{chapterDb["Table9G-exception"]}</th>
        <td>ceann</td>
        <td>cinn</td>
        <td>gcinn</td>
      </tr>
      <tr>
        <th>cloigeann<br />{chapterDb["Table9G-exception"]}</th>
        <td>chloigeann</td>
        <td>cloigne</td>
        <td>gcloigne</td>
      </tr>
      <tr>
        <th>fiche</th>
        <td>fhichead</td>
        <td>fichid</td>
        <td>bhfichid</td>
      </tr>
      <tr>
        <th>pingin</th>
        <td>phingin</td>
        <td>pingine</td>
        <td>bpingine</td>
      </tr>
      <tr>
        <th>trian</th>
        <td>thrian</td>
        <td>treana</td>
        <td>dtreana</td>
      </tr>
      <tr>
        <th>troigh</th>
        <td>throigh</td>
        <td>troithe</td>
        <td>dtroithe</td>
      </tr>
      <tr>
        <th>uair<br />(<i>{commonDb["saBhrí"]}</i> {chapterDb["Table9G-babhta"]})</th>
        <td>uair</td>
        <td>huaire</td>
        <td>n&#x2011;uaire</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9H = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9H-caption"]} docLang={props.docLang} tableLetter="H">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["Table9H-header"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>aon bhliain amháin</td>
        <th>11</th>
        <td>aon uair déag</td>
      </tr>
      <tr>
        <th>2</th>
        <td>dhá cheann</td>
        <th>12</th>
        <td>dhá phingin déag</td>
      </tr>
      <tr>
        <th>3</th>
        <td>trí cinn</td>
        <th>13</th>
        <td>trí bliana déag</td>
      </tr>
      <tr>
        <th>4</th>
        <td>ceithre cloigne</td>
        <th>14</th>
        <td>ceithre cinn déag</td>
      </tr>
      <tr>
        <th>5</th>
        <td>cúig fichid</td>
        <th>15</th>
        <td>cúig seachtaine déag</td>
      </tr>
      <tr>
        <th>6</th>
        <td>sé huaire</td>
        <th>16</th>
        <td>sé cloigne déag</td>
      </tr>
      <tr>
        <th>7</th>
        <td>seacht bpingine</td>
        <th>17</th>
        <td>seacht bhfichid déag</td>
      </tr>
      <tr>
        <th>8</th>
        <td>ocht seachtaine</td>
        <th>18</th>
        <td>ocht dtroithe déag</td>
      </tr>
      <tr>
        <th>9</th>
        <td>naoi mbliana</td>
        <th>19</th>
        <td>naoi bpingine déag</td>
      </tr>
      <tr>
        <th>10</th>
        <td colSpan={3}>deich dtroithe</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9I = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9I-caption"]} docLang={props.docLang} tableLetter="I">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["Table9I-header"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>aon leabhar mór amháin<br />aon fhuinneog mhór amháin</td>
        <th>11</th>
        <td>aon leabhar déag mhóra<br />aon fhuinneog déag mhóra</td>
      </tr>
      <tr>
        <th>2</th>
        <td>dhá leabhar mhóra</td>
        <th>12</th>
        <td>dhá oíche dhéag fhuara</td>
      </tr>
      <tr>
        <th>3</th>
        <td>trí fhuinneog mhóra</td>
        <th>13</th>
        <td>trí leabhar déag mhóra</td>
      </tr>
      <tr>
        <th>4</th>
        <td>ceithre oíche fhuara</td>
        <th>14</th>
        <td>ceithre fhuinneog déag mhóra</td>
      </tr>
      <tr>
        <th>5</th>
        <td>cúig fhuinneog mhóra</td>
        <th>15</th>
        <td>cúig leabhar déag mhóra</td>
      </tr>
      <tr>
        <th>6</th>
        <td>sé leabhar mhóra</td>
        <th>16</th>
        <td>sé fhuinneog déag mhóra</td>
      </tr>
      <tr>
        <th>7</th>
        <td>seacht bhfuinneog mhóra</td>
        <th>17</th>
        <td>seacht leabhar déag mhóra</td>
      </tr>
      <tr>
        <th>8</th>
        <td>ocht leabhar mhóra</td>
        <th>18</th>
        <td>ocht bhfuinneog déag mhóra</td>
      </tr>
      <tr>
        <th>9</th>
        <td>naoi bhfuinneog mhóra</td>
        <th>19</th>
        <td>naoi n&#x2011;oíche dhéag fhuara</td>
      </tr>
      <tr>
        <th>10</th>
        <td colSpan={3}>deich leabhar mhóra</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9J = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9J-caption"]} docLang={props.docLang} tableLetter="J">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["Table9J-header"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1
          <td>aon bhliain mhaith amháin</td>
        </th>
        <th>11
          <td>aon uair déag chiúine</td>
        </th>
        <tr>
          <th>2</th>
          <td>dhá cheann bhána</td>
          <th>12</th>
          <td>dhá chloigeann déag mhaola</td>
        </tr>
        <tr>
          <th>3</th>
          <td>trí cinn dhubha</td>
          <th>13</th>
          <td>trí bliana déag maithe</td>
        </tr>
        <tr>
          <th>4</th>
          <td>ceithre cloigne maola</td>
          <th>14</th>
          <td>ceithre cinn déag bhána</td>
        </tr>
        <tr>
          <th>5</th>
          <td>cúig cinn mhóra</td>
          <th>15</th>
          <td>cúig pingine déag salacha</td>
        </tr>
        <tr>
          <th>6</th>
          <td>sé troithe dearga</td>
          <th>16</th>
          <td>sé cloigne déag maola</td>
        </tr>
        <tr>
          <th>7</th>
          <td>seacht bpingine beaga</td>
          <th>17</th>
          <td>seacht gcinn déag mhóra</td>
        </tr>
        <tr>
          <th>8</th>
          <td>ocht seachtaine fada</td>
          <th>18</th>
          <td>ocht dtroithe déag cearnacha</td>
        </tr>
        <tr>
          <th>9</th>
          <td>naoi mbliana fada</td>
          <th>19</th>
          <td>naoi bpingine déag beaga</td>
        </tr>
        <tr>
          <th>10</th>
          <td colSpan={3}>deich dtroithe cearnacha</td>
        </tr>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9K = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9K-caption"]} docLang={props.docLang} tableLetter="K">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["Table9K-header"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>an t&#x2011;aon chapall amháin<br />an t&#x2011;aon fhuinneog amháin</td>
        <th>11</th>
        <td>an t&#x2011;aon chapall déag +<br />an t&#x2011;aon fhuinneog déag</td>
      </tr>
      <tr>
        <th>2</th>
        <td>an dá chapall</td>
        <th>12</th>
        <td>an dá chapall déag</td>
      </tr>
      <tr>
        <th>3</th>
        <td>na trí chapall</td>
        <th>13</th>
        <td>na trí chapall déag</td>
      </tr>
      <tr>
        <th>4</th>
        <td>na ceithre chapall</td>
        <th>14</th>
        <td>na ceithre chapall déag</td>
      </tr>
      <tr>
        <th>5</th>
        <td>na cúig chapall</td>
        <th>15</th>
        <td>na cúig chapall déag</td>
      </tr>
      <tr>
        <th>6</th>
        <td>na sé fhuinneog</td>
        <th>16</th>
        <td>na sé fhuinneog déag</td>
      </tr>
      <tr>
        <th>7</th>
        <td>na seacht bhfuinneog</td>
        <th>17</th>
        <td>na seacht bhfuinneog déag</td>
      </tr>
      <tr>
        <th>8</th>
        <td>na hocht bhfuinneog</td>
        <th>18</th>
        <td>na hocht bhfuinneog déag</td>
      </tr>
      <tr>
        <th>9</th>
        <td>na naoi bhfuinneog</td>
        <th>19</th>
        <td>na naoi bhfuinneog déag</td>
      </tr>
      <tr>
        <th>10</th>
        <td colSpan={3}>na deich bhfuinneog</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9L = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9L-caption"]} docLang={props.docLang} tableLetter="L">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["Table9L-header"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>ualach an aon chapaill mhóir amháin<br />tréimhse na haon bhliana fada amháin</td>
        <th>11</th>
        <td>stábla an aon chapall déag mhóra<br />ag oscailt an aon fhuinneog déag throma</td>
      </tr>
      <tr>
        <th>2</th>
        <td>luach an dá theach bheaga</td>
        <th>12</th>
        <td>tréimhse an dá bhliain déag fhada</td>
      </tr>
      <tr>
        <th>3</th>
        <td>meáchan na dtrí bhó éagsúla</td>
        <th>13</th>
        <td>innill na dtrí ghluaisteán déag chumhachtacha</td>
      </tr>
      <tr>
        <th>4</th>
        <td>gaois na gceithre cloigne móra</td>
        <th>14</th>
        <td>leathanaigh na gceithre leabhar déag ghearra</td>
      </tr>
      <tr>
        <th>5</th>
        <td>ag dúnadh na gcúig fhuinneog ghlasa</td>
        <th>15</th>
        <td>fad na gcúig oíche dhéag ghaofara</td>
      </tr>
      <tr>
        <th>6</th>
        <td>fad na sé bliana fada</td>
        <th>16</th>
        <td>gaois na sé cloigne déag maola</td>
      </tr>
      <tr>
        <th>7</th>
        <td>ualach na seacht gcapall mhóra</td>
        <th>17</th>
        <td>géaga na seacht gcrann déag dhuilleacha</td>
      </tr>
      <tr>
        <th>8</th>
        <td>seolta na n&#x2011;ocht mbád bheaga</td>
        <th>18</th>
        <td>achar na n&#x2011;ocht bpáirc déag mhóra</td>
      </tr>
      <tr>
        <th>9</th>
        <td>leithead na naoi gcinn dheasa</td>
        <th>19</th>
        <td>deireadh na naoi seachtaine déag fada</td>
      </tr>
      <tr>
        <th>10</th>
        <td>achar na ndeich ngairdín chlocharacha</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9M = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9M-caption"]} docLang={props.docLang} tableLetter="M">
    <AutoColGroup ratios={[1, 4, 4, 4]} />
    <thead>
      <tr>
        <th></th>
        <th>{chapterDb["TheNominativeCase"]}</th>
        <th>{chapterDb["TheGenitiveCase"]}<br />{chapterDb["WithoutArticle"]}</th>
        <th>{chapterDb["TheGenitiveCase"]}<br />{chapterDb["WithArticle"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>20</th>
        <td>fiche leabhar mór</td>
        <td>meáchan fiche leabhar mór</td>
        <td>meáchan an fiche leabhar mór</td>
      </tr>
      <tr>
        <th>30</th>
        <td>tríocha méadar glas</td>
        <td>achar tríocha méadar glas</td>
        <td>achar an tríocha méadar glas</td>
      </tr>
      <tr>
        <th>40</th>
        <td>daichead bád beag</td>
        <td>lastas daichead bád beag</td>
        <td>lastas an daichead bád beag</td>
      </tr>
      <tr>
        <th>50</th>
        <td>caoga císte milis</td>
        <td>costas caoga císte milis</td>
        <td>costas an chaoga císte milis</td>
      </tr>
      <tr>
        <th>60</th>
        <td>seasca bó bhán</td>
        <td>bainne seasca bó bhán</td>
        <td>bainne an seasca bó bhán</td>
      </tr>
      <tr>
        <th>70</th>
        <td>seachtó bliain fhada</td>
        <td>tréimhse seachtó bliain fhada</td>
        <td>tréimhse an seachtó bliain fhada</td>
      </tr>
      <tr>
        <th>80</th>
        <td>ochtó cloigeann maol</td>
        <td>gaois ochtó cloigeann maol</td>
        <td>gaois an ochtó cloigeann maol</td>
      </tr>
      <tr>
        <th>90</th>
        <td>nócha pingin bheag</td>
        <td>luach nócha pingin bheag</td>
        <td>luach an nócha pingin bheag</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9N = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9N-caption"]} docLang={props.docLang} tableLetter="N">
    <AutoColGroup ratios={[1, 4, 4]} />
    <thead>
      <tr>
        <th></th>
        <th>{chapterDb["TheEstablishedSystem"]}</th>
        <th>{chapterDb["TheSimplifiedSystem"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>21</th>
        <td>
          <ul>
            <li>aon chapall mór amháin is fiche</li>
            <li>capall mór is fiche</li>
          </ul>
        </td>
        <td>fiche a haon capall mór</td>
      </tr>
      <tr>
        <th>33</th>
        <td>trí oíche dhorcha is tríocha</td>
        <td>tríocha a trí oíche dhorcha</td>
      </tr>
      <tr>
        <th>42</th>
        <td>dhá chapall mhóra is daichead</td>
        <td>daichead a dó capall mór</td>
      </tr>
      <tr>
        <th>55</th>
        <td>cúig fhuinneog dhúnta is caoga</td>
        <td>caoga a cúig fuinneog dhúnta</td>
      </tr>
      <tr>
        <th>67</th>
        <td>seacht leabhar shuimiúla is seasca</td>
        <td>seasca a seacht leabhar suimiúil</td>
      </tr>
      <tr>
        <th>74</th>
        <td>ceithre pingine beaga is seachtó</td>
        <td>seachtó a ceathair pingin bheag</td>
      </tr>
      <tr>
        <th>86</th>
        <td>sé bhó mhóra is ochtó</td>
        <td>ochtó a sé bó mhór</td>
      </tr>
      <tr>
        <th>99</th>
        <td>naoi mbád chostasacha is nócha</td>
        <td>nócha a naoi bád costasach</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9O = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9O-caption"]} docLang={props.docLang} tableLetter="O">
    <AutoColGroup ratios={[1, 4, 4]} />
    <thead>
      <tr>
        <th></th>
        <th>{chapterDb["TheEstablishedSystem"]}</th>
        <th>{chapterDb["TheSimplifiedSystem"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>191</th>
        <td>céad nócha is aon mhéadar amháin</td>
        <td>céad nócha a haon méadar</td>
      </tr>
      <tr>
        <th>282</th>
        <td>dhá chéad ochtó is dhá chat fhiáine</td>
        <td>dhá chéad ochtó a dó cat fiáin</td>
      </tr>
      <tr>
        <th>364</th>
        <td>trí chéad seasca is ceithre chapall mhóra</td>
        <td>trí chéad seasca a ceathair capall mór</td>
      </tr>
      <tr>
        <th>1,446</th>
        <td>míle, ceithre chéad daichead is sé bhó chrosta</td>
        <td>míle, ceithre chéad daichead a sé bó chrosta</td>
      </tr>
      <tr>
        <th>18,437</th>
        <td>ocht míle dhéag, ceithre chéad tríocha is seacht gcás chasta</td>
        <td>ocht déag míle, ceithre chéad tríocha a seacht cás casta</td>
      </tr>
      <tr>
        <th>25,528</th>
        <td>cúig mhíle is fiche, cúig chéad fiche is ocht leabhar shuimiúla</td>
        <td>fiche a cúig míle, cúig chéad fiche a hocht leabhar suimiúil</td>
      </tr>
      <tr>
        <th>100,513</th>
        <td>céad míle, cúig chéad is trí mhilseán déag dhearga</td>
        <td>céad míle, cúig chéad a trí déag milseán dearg</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9P = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9P-caption"]} docLang={props.docLang} tableLetter="P">
    <AutoColGroup ratios={[1, 4, 4]} />
    <thead>
      <tr>
        <th></th>
        <th>{chapterDb["TheEstablishedSystem"]}</th>
        <th>{chapterDb["TheSimplifiedSystem"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>21</th>
        <td>21 bhád costasach</td>
        <td>21 bád costasach</td>
      </tr>
      <tr>
        <th>22</th>
        <td>22 bhád mhóra</td>
        <td>22 bád mór</td>
      </tr>
      <tr>
        <th>37</th>
        <td>37 n&#x2011;ábhar shuimiúla</td>
        <td>37 ábhar suimiúil</td>
      </tr>
      <tr>
        <th>44</th>
        <td>44 fhuinneog dhúnta</td>
        <td>44 fuinneog dhúnta</td>
      </tr>
      <tr>
        <th>53</th>
        <td>53 bhó mhóra</td>
        <td>53 bó mhór</td>
      </tr>
      <tr>
        <th>68</th>
        <td>68 n&#x2011;oíche ghaofara</td>
        <td>68 oíche ghaofar</td>
      </tr>
      <tr>
        <th>76</th>
        <td>76 dhuine ghnóthacha</td>
        <td>76 duine gnóthach</td>
      </tr>
      <tr>
        <th>89</th>
        <td>89 dtroithe cearnacha</td>
        <td>89 troigh chearnach</td>
      </tr>
      <tr>
        <th>95</th>
        <td>95 mhéadar chearnacha</td>
        <td>95 méadar cearnach</td>
      </tr>
      <tr>
        <th>191</th>
        <td>191 bhád costasach</td>
        <td>191 bád costasach</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9Q = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9Q-caption"]} docLang={props.docLang} tableLetter="Q">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["Table9Q-header"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>duine/aon duine amháin</td>
        <th>7</th>
        <td>seachtar</td>
      </tr>
      <tr>
        <th>2</th>
        <td>beirt</td>
        <th>8</th>
        <td>ochtar</td>
      </tr>
      <tr>
        <th>3</th>
        <td>triúr</td>
        <th>9</th>
        <td>naonúr</td>
      </tr>
      <tr>
        <th>4</th>
        <td>ceathrar</td>
        <th>10</th>
        <td>deichniúr</td>
      </tr>
      <tr>
        <th>5</th>
        <td>cúigear</td>
        <th>11</th>
        <td>aon duine dhéag</td>
      </tr>
      <tr>
        <th>6</th>
        <td>seisear</td>
        <th>12</th>
        <td>dháréag</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9R = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9R-caption"]} docLang={props.docLang} tableLetter="R">
    <AutoColGroup ratios={[2, 4, 4]} />
    <thead>
      <tr>
        <th>{chapterDb["TheNumber"]}</th>
        <th>{chapterDb["TheNominativeCase"]}</th>
        <th>{chapterDb["TheGenitiveCase"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>an t&#x2011;aon duine amháin</td>
        <td>ainm an aon duine amháin</td>
      </tr>
      <tr>
        <th>2</th>
        <td>an bheirt</td>
        <td>tuairimí na beirte</td>
      </tr>
      <tr>
        <th>3</th>
        <td>an triúr</td>
        <td>éadaí an triúir</td>
      </tr>
      <tr>
        <th>4</th>
        <td>an ceathrar</td>
        <td>táillí an cheathrair</td>
      </tr>
      <tr>
        <th>5</th>
        <td>an cúigear</td>
        <td>bád an chúigir</td>
      </tr>
      <tr>
        <th>6</th>
        <td>an seisear</td>
        <td>teach an tseisir</td>
      </tr>
      <tr>
        <th>7</th>
        <td>an seachtar</td>
        <td>scoil an tseachtair</td>
      </tr>
      <tr>
        <th>8</th>
        <td>an t&#x2011;ochtar</td>
        <td>meitheal an ochtair</td>
      </tr>
      <tr>
        <th>9</th>
        <td>an naonúr</td>
        <td>foireann an naonúir</td>
      </tr>
      <tr>
        <th>10</th>
        <td>an deichniúr</td>
        <td>tithe an deichniúir</td>
      </tr>
      <tr>
        <th>11</th>
        <td>an t&#x2011;aon duine dhéag</td>
        <td>foireann an aon duine dhéag</td>
      </tr>
      <tr>
        <th>12</th>
        <td>an dáréag</td>
        <td>airgead an dáréag</td>
      </tr>
    </tbody>
  </MarkedTable>
    ;
};

export const Table9S = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9S-caption"]} docLang={props.docLang} tableLetter="S">
    <AutoColGroup ratios={[2, 4, 4]} />
    <thead>
      <tr>
        <th>{chapterDb["TheNumber"]}</th>
        <th>{chapterDb["TheNominativeCase"]}</th>
        <th>{chapterDb["TheGenitiveCase"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>fear amháin/aon fhear amháin<br />bean amháin/aon bhean amháin</td>
        <td>hata aon fhir amháin +<br />hata aon mhná amháin</td>
      </tr>
      <tr>
        <th>2</th>
        <td>beirt bhan</td>
        <td>páistí bheirt bhan</td>
      </tr>
      <tr>
        <th>3</th>
        <td>triúr bádóirí</td>
        <td>báid triúr bádóirí</td>
      </tr>
      <tr>
        <th>4</th>
        <td>ceathrar scoláirí</td>
        <td>torthaí ceathrar scoláirí</td>
      </tr>
      <tr>
        <th>5</th>
        <td>cúigear fear</td>
        <td>gaolta cúigear fear</td>
      </tr>
      <tr>
        <th>6</th>
        <td>seisear ban</td>
        <td>páistí seisear ban</td>
      </tr>
      <tr>
        <th>7</th>
        <td>seachtar bádóirí</td>
        <td>long seachtar bádóirí</td>
      </tr>
      <tr>
        <th>8</th>
        <td>ochtar báicéirí</td>
        <td>cístí ochtar báicéirí</td>
      </tr>
      <tr>
        <th>9</th>
        <td>naonúr fear</td>
        <td>talamh naonúr fear</td>
      </tr>
      <tr>
        <th>10</th>
        <td>deichniúr girseach</td>
        <td>airgead deichniúr girseach</td>
      </tr>
      <tr>
        <th>11*</th>
        <td>aon imreoir déag</td>
        <td>cultacha aon imreoir déag</td>
      </tr>
      <tr>
        <th>12</th>
        <td>dháréag bádóirí</td>
        <td>soitheach dháréag bádóirí</td>
      </tr>
    </tbody>
  </MarkedTable>
    ;
};

export const Table9T = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9T-caption"]} docLang={props.docLang} tableLetter="T">
    <AutoColGroup ratios={[2, 4, 4]} />
    <thead>
      <tr>
        <th>{chapterDb["TheNumber"]}</th>
        <th>{chapterDb["TheNominativeCase"]}</th>
        <th>{chapterDb["TheGenitiveCase"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>an t&#x2011;aon fhear amháin<br />an t&#x2011;aon bhean amháin</td>
        <td>hata an aon fhir amháin<br />hata na haon mhná amháin</td>
      </tr>
      <tr>
        <th>2</th>
        <td>an bheirt bhan</td>
        <td>páistí na beirte ban</td>
      </tr>
      <tr>
        <th>3</th>
        <td>an triúr bádóirí</td>
        <td>báid an triúr bádóirí</td>
      </tr>
      <tr>
        <th>4</th>
        <td>an ceathrar scoláirí</td>
        <td>torthaí an cheathrar scoláirí</td>
      </tr>
      <tr>
        <th>5</th>
        <td>an cúigear fear</td>
        <td>gaolta an chúigear fear</td>
      </tr>
      <tr>
        <th>6</th>
        <td>an seisear ban</td>
        <td>páistí an tseisear ban</td>
      </tr>
      <tr>
        <th>7</th>
        <td>an seachtar bádóirí</td>
        <td>long an tseachtar bádóirí</td>
      </tr>
      <tr>
        <th>8</th>
        <td>an t&#x2011;ochtar báicéirí</td>
        <td>cístí an ochtar báicéirí</td>
      </tr>
      <tr>
        <th>9</th>
        <td>an naonúr fear</td>
        <td>talamh an naonúr fear</td>
      </tr>
      <tr>
        <th>10</th>
        <td>an deichniúr girseach</td>
        <td>airgead an deichniúr girseach</td>
      </tr>
      <tr>
        <th>11*</th>
        <td>an t&#x2011;aon imreoir déag</td>
        <td>cluiche an aon imreoir déag</td>
      </tr>
      <tr>
        <th>12</th>
        <td>an dáréag bádóirí</td>
        <td>soitheach an dáréag bádóirí</td>
      </tr>
    </tbody>
  </MarkedTable>
    ;
};

export const Table9U = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9U-caption"]} docLang={props.docLang} tableLetter="U">
    <AutoColGroup ratios={[2, 4, 4]} />
    <thead>
      <tr>
        <th>{chapterDb["TheNumber"]}</th>
        <th>{chapterDb["TheNominativeCase"]}</th>
        <th>{chapterDb["TheGenitiveCase"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>
          <ul>
            <li>fear ciallmhar amháin</li>
            <li>bean shaibhir amháin</li>
            <li>an t&#x2011;aon fhear cineálta amháin</li>
            <li>an t&#x2011;aon bhean dheas amháin</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>cóta aon fhir chiallmhair amháin</li>
            <li>geansaí aon mhná saibhre amháin</li>
            <li>cóta an aon fhir chineálta amháin</li>
            <li>geansaí na haon mhná deise amháin</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>2</th>
        <td>
          <ul>
            <li>beirt bhan mhisniúla</li>
            <li>beirt fhear chróga</li>
            <li>beirt scoláirí chumasacha</li>
            <li>an bheirt bhan mhisniúla</li>
            <li>an bheirt fhear chróga</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>an bheirt scoláirí chumasacha</li>
            <li>oifig bheirt bhan mhisniúla</li>
            <li>páistí bheirt fhear chróga</li>
            <li>cóipleabhair bheirt scoláirí chumasacha</li>
            <li>oifig na beirte ban mhisniúla</li>
            <li>páistí na beirte fear chróga</li>
            <li>cóipleabhair na beirte scoláirí chumasacha</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>3</th>
        <td>
          <ul>
            <li>triúr fear mór</li>
            <li>triúr girseach galánta</li>
            <li>an triúr bádóirí tuirseacha</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>hataí triúr fear mór</li>
            <li>gúnaí triúr girseach galánta</li>
            <li>báid an triúr bádóirí tuirseacha</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>4</th>
        <td>ceathrar (an ceathrar) scoláirí maithe</td>
        <td>scrúduithe ceathrar (an cheathrar) scoláirí maithe</td>
      </tr>
      <tr>
        <th>5</th>
        <td>cúigear (an cúigear) fear inniúil</td>
        <td>gaolta cúigear (an chúigear) fear inniúil</td>
      </tr>
      <tr>
        <th>6</th>
        <td>seisear (an seisear) ban cumasach</td>
        <td>páistí seisear (an tseisear) ban cumasach</td>
      </tr>
      <tr>
        <th>7</th>
        <td>seachtar (an seachtar) bádóirí óga</td>
        <td>long seachtar (an tseachtar) bádóirí óga</td>
      </tr>
      <tr>
        <th>8</th>
        <td>ochtar (an t&#x2011;ochtar) báicéirí díograiseacha</td>
        <td>cístí ochtar (an ochtar) báicéirí díograiseacha</td>
      </tr>
      <tr>
        <th>9</th>
        <td>naonúr (an naonúr) fear ocrach</td>
        <td>talamh naonúr (an naonúr) fear ocrach</td>
      </tr>
      <tr>
        <th>10</th>
        <td>deichniúr (an deichniúr) girseach bríomhar</td>
        <td>airgead deichniúr (an deichniúr) girseach bríomhar</td>
      </tr>
      <tr>
        <th>11*</th>
        <td>aon (an t&#x2011;aon) imreoir déag thapa</td>
        <td>cultacha aon (an aon) imreoir déag thapa</td>
      </tr>
      <tr>
        <th>12</th>
        <td>dháréag (an dáréag) scoláirí borba</td>
        <td>leabhair dháréag (an dáréag) scoláirí borba</td>
      </tr>
    </tbody>
  </MarkedTable>
    ;
};

export const Table9V = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9V-caption"]} docLang={props.docLang} tableLetter="V">
    <AutoColGroup ratios={[1, 2, 1, 2, 1, 2, 1, 2]} />
    <thead>
      <tr>
        <th colSpan={8}>{chapterDb["TheOrdinalNumbers"]} 1&ndash;100</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1ú</th>
        <td>an chéad fhear</td>
        <th>11ú</th>
        <td>an t&#x2011;aonú bean déag</td>
        <th>20ú</th>
        <td>an fichiú capall</td>
        <th>30ú</th>
        <td>an tríochadú bean</td>
      </tr>
      <tr>
        <th>2ú</th>
        <td>an dara/dóú bean</td>
        <th>12ú</th>
        <td>an dara/dóú bosca déag</td>
        <th>21ú</th>
        <td>an t&#x2011;aonú capall is fiche</td>
        <th>39ú</th>
        <td>an naoú hoíche is tríocha</td>
      </tr>
      <tr>
        <th>3ú</th>
        <td>an tríú leabhar</td>
        <th>13ú</th>
        <td>an tríú méadar déag</td>
        <th>22ú</th>
        <td>an dara/dóú bean is fiche</td>
        <th>40ú</th>
        <td>an daicheadú/ceathrachadú cuairteoir</td>
      </tr>
      <tr>
        <th>4ú</th>
        <td>an ceathrú méadar</td>
        <th>14ú</th>
        <td>an ceathrú bád déag</td>
        <th>23ú</th>
        <td>an tríú leabhar is fiche</td>
        <th>48ú</th>
        <td>an t&#x2011;ochtú bó is daichead</td>
      </tr>
      <tr>
        <th>5ú</th>
        <td>an cúigiú bád</td>
        <th>15ú</th>
        <td>an cúigiú hábhar déag</td>
        <th>24ú</th>
        <td>an ceathrú méadar is fiche</td>
        <th>57ú</th>
        <td>an seachtú fuinneog is caoga</td>
      </tr>
      <tr>
        <th>6ú</th>
        <td>an séú hábhar</td>
        <th>16ú</th>
        <td>an séú bó déag</td>
        <th>25ú</th>
        <td>an cúigiú bád is fiche</td>
        <th>66ú</th>
        <td>an séú hábhar is seasca</td>
      </tr>
      <tr>
        <th>7ú</th>
        <td>an seachtú fuinneog</td>
        <th>17ú</th>
        <td>an seachtú fuinneog déag</td>
        <th>26ú</th>
        <td>an séú hábhar is fiche</td>
        <th>75ú</th>
        <td>an cúigiú bád is seachtó</td>
      </tr>
      <tr>
        <th>8ú</th>
        <td>an t&#x2011;ochtú bó</td>
        <th>18ú</th>
        <td>an t&#x2011;ochtú hoíche déag</td>
        <th>27ú</th>
        <td>an seachtú fuinneog is fiche</td>
        <th>84ú</th>
        <td>an ceathrú méadar is ochtó</td>
      </tr>
      <tr>
        <th>9ú</th>
        <td>an naoú hoíche</td>
        <th>19ú</th>
        <td>an naoú capall déag</td>
        <th>28ú</th>
        <td>an t&#x2011;ochtú bó is fiche</td>
        <th>93ú</th>
        <td>an tríú leabhar is nócha</td>
      </tr>
      <tr>
        <th>10ú</th>
        <td>an deichiú capall</td>
        <th></th>
        <td></td>
        <th>29ú</th>
        <td>an naoú hoíche is fiche</td>
        <th>100ú</th>
        <td>an céadú custaiméir</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9W = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9W-caption"]} docLang={props.docLang} tableLetter="W">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["TheOrdinalNumbers"]} 1&ndash;100</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>104ú</th>
        <td>an céad is ceathrú feirmeoir</td>
        <th>1007ú</th>
        <td>an míle is seachtú bliain</td>
      </tr>
      <tr>
        <th>116ú</th>
        <td>an céad is séú babhta déag</td>
        <th>7219ú</th>
        <td>an seacht míle, dhá chéad is naoú méadar déag</td>
      </tr>
      <tr>
        <th>131ú</th>
        <td>an céad tríocha is aonú capall</td>
        <th>10,000ú</th>
        <td>an deich míliú lá</td>
      </tr>
      <tr>
        <th>132ú</th>
        <td>an céad tríocha is dóú hasal</td>
        <th>223,413ú</th>
        <td>an dá chéad fiche is trí mhíle, ceithre chéad is tríú cloigeann déag</td>
      </tr>
      <tr>
        <th>211ú</th>
        <td>an dá chéad is aonú bád déag</td>
        <th>613,564ú</th>
        <td>an sé chéad is trí mhíle dhéag, cúig chéad seasca is ceathrú bó</td>
      </tr>
      <tr>
        <th>1,000ú</th>
        <td>an míliú heitilt</td>
        <th>1,000,000ú</th>
        <td>an milliúnú huair</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9X = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9X-caption"]} docLang={props.docLang} tableLetter="X">
    <AutoColGroup ratios={[1, 4, 1, 4]} />
    <thead>
      <tr>
        <th colSpan={4}>{chapterDb["Table9X-header"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1ú</th>
        <td>marcach an chéad chapaill<br />tús na chéad chaibidle</td>
        <th>39ú</th>
        <td>deireadh an naoú hoíche is tríocha</td>
      </tr>
      <tr>
        <th>14ú</th>
        <td>seol an cheathrú bád déag</td>
        <th>100ú</th>
        <td>gearán an chéadú custaiméir</td>
      </tr>
      <tr>
        <th>20ú</th>
        <td>torthaí an fichiú dalta</td>
        <th>104ú</th>
        <td>beithígh an chéad is ceathrú feirmeoir</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9Y = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9Y-caption"]} docLang={props.docLang} tableLetter="Y">
    <thead>
      <tr>
        <th>{chapterDb["TheFraction"]}</th>
        <th>{chapterDb["TheDenominator"]}</th>
        <th>{chapterDb["TheFormWithCuid"]}</th>
        <th>{chapterDb["TheFraction"]}</th>
        <th>{chapterDb["TheDenominator"]}</th>
        <th>{chapterDb["TheFormWithCuid"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1/2</th>
        <td>leath</td>
        <td>an leathchuid</td>
        <th>1/11</th>
        <td>aondéagú</td>
        <td>an t&#x2011;aondéagú cuid</td>
      </tr>
      <tr>
        <th>1/3</th>
        <td>trian</td>
        <td>an tríú cuid</td>
        <th>1/12</th>
        <td>dódhéagú</td>
        <td>an dódhéagú cuid</td>
      </tr>
      <tr>
        <th>1/4</th>
        <td>ceathrú</td>
        <td>an ceathrú cuid</td>
        <th>1/13</th>
        <td>trídéagú</td>
        <td>an trídéagú cuid</td>
      </tr>
      <tr>
        <th>1/5</th>
        <td>cúigiú</td>
        <td>an cúigiú cuid</td>
        <th>1/14</th>
        <td>ceathairdéagú</td>
        <td>an ceathairdéagú cuid</td>
      </tr>
      <tr>
        <th>1/6</th>
        <td>séú</td>
        <td>an séú cuid</td>
        <th>1/15</th>
        <td>cúigdéagú</td>
        <td>an cúigdéagú cuid</td>
      </tr>
      <tr>
        <th>1/7</th>
        <td>seachtú</td>
        <td>an seachtú cuid</td>
        <th>1/16</th>
        <td>sédéagú</td>
        <td>an sédéagú cuid</td>
      </tr>
      <tr>
        <th>1/8</th>
        <td>ochtú</td>
        <td>an t&#x2011;ochtú cuid</td>
        <th>1/17</th>
        <td>seachtdéagú</td>
        <td>an seachtdéagú cuid</td>
      </tr>
      <tr>
        <th>1/9</th>
        <td>naoú</td>
        <td>an naoú cuid</td>
        <th>1/18</th>
        <td>ochtdéagú</td>
        <td>an t&#x2011;ochtdéagú cuid</td>
      </tr>
      <tr>
        <th>1/10</th>
        <td>deichiú</td>
        <td>an deichiú cuid</td>
        <th>1/19</th>
        <td>naoidéagú</td>
        <td>an naoidéagú cuid</td>
      </tr>
    </tbody>
  </MarkedTable>
    ;
};

export const Table9Z = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9Z-caption"]} docLang={props.docLang} tableLetter="Z">
    <thead>
      <th>{chapterDb["TheFraction"]}</th>
      <th>{chapterDb["TheFormWithCuid"]}</th>
      <th>{chapterDb["TheFraction"]}</th>
      <th>{chapterDb["TheFormWithCuid"]}</th>
    </thead>
    <tbody>
      <tr>
        <th>1/21</th>
        <td>an fiche aonú cuid</td>
        <th>1/87</th>
        <td>an t&#x2011;ochtó seachtú cuid</td>
      </tr>
      <tr>
        <th>1/32</th>
        <td>an tríocha dóú cuid</td>
        <th>1/98</th>
        <td>an nócha ochtú cuid</td>
      </tr>
      <tr>
        <th>1/43</th>
        <td>an daichead tríú cuid</td>
        <th>1/99</th>
        <td>an nócha naoú cuid</td>
      </tr>
      <tr>
        <th>1/54</th>
        <td>an caoga ceathrú cuid</td>
        <th>1/156</th>
        <td>an céad caoga séú cuid</td>
      </tr>
      <tr>
        <th>1/65</th>
        <td>an seasca cúigiú cuid</td>
        <th>1/2,987</th>
        <td>an dá mhíle naoi gcéad ochtó seachtú cuid</td>
      </tr>
      <tr>
        <th>1/76</th>
        <td>an seachtó séú cuid</td>
        <th>1/3,234,567</th>
        <td>an trí mhilliún, dhá chéad tríocha is ceithre mhíle, cúig chéad seasca seachtú cuid</td>
      </tr>
    </tbody>
  </MarkedTable>
    ;
};

export const Table9AA = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9AA-caption"]} docLang={props.docLang} tableLetter="AA">
    <thead>
      <th>{chapterDb["TheFraction"]}</th>
      <th></th>
      <th>{chapterDb["TheFraction"]}</th>
      <th></th>
      <th>{chapterDb["TheFraction"]}</th>
      <th></th>
    </thead>
    <tbody>
      <tr>
        <th>3/2</th>
        <td>trí leath</td>
        <th>2/11</th>
        <td>dhá aondéagú</td>
        <th>4/30</th>
        <td>ceithre thríochadú</td>
      </tr>
      <tr>
        <th>2/3</th>
        <td>dhá thrian</td>
        <th>3/12</th>
        <td>trí dhódhéagú</td>
        <th>5/40</th>
        <td>cúig dhaicheadú</td>
      </tr>
      <tr>
        <th>5/4</th>
        <td>cúig cheathrú</td>
        <th>4/13</th>
        <td>ceithre thrídéagú</td>
        <th>6/50</th>
        <td>sé chaogadú</td>
      </tr>
      <tr>
        <th>4/7</th>
        <td>ceithre sheachtú</td>
        <th>7/16</th>
        <td>seacht sédéagú</td>
        <th>9/80</th>
        <td>naoi n&#x2011;ochtódú</td>
      </tr>
      <tr>
        <th>8/9</th>
        <td>ocht naoú</td>
        <th>9/18</th>
        <td>naoi n&#x2011;ochtdéagú</td>
        <th>9/100</th>
        <td>naoi gcéadú</td>
      </tr>
      <tr>
        <th>9/10</th>
        <td>naoi ndeichiú</td>
        <th>6/19</th>
        <td>sé naoidéagú</td>
        <th>3/1,000</th>
        <td>trí mhíliú</td>
      </tr>
      <tr>
        <th>10/3</th>
        <td>deich dtreana</td>
        <th>3/20</th>
        <td>trí fichiú</td>
        <th>5/1,000,000</th>
        <td>cúig mhilliúnú</td>
      </tr>
    </tbody>
  </MarkedTable>
    ;
};

export const Table9BB = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9BB-caption"]} docLang={props.docLang} tableLetter="BB">
    <thead>
      <th>{chapterDb["TheFraction"]}</th>
      <th><i>ceann</i>/<i>cinn</i> + <i>de</i></th>
      <th>{chapterDb["TheFraction"]}</th>
      <th><i>ceann</i>/<i>cinn</i> + <i>de</i></th>
    </thead>
    <tbody>
      <tr>
        <th>2/21</th>
        <td>dhá cheann de fiche aonuithe</td>
        <th>10/156</th>
        <td>deich gcinn de chéad caoga séithe</td>
      </tr>
      <tr>
        <th>3/32</th>
        <td>trí cinn de thríocha dóithe</td>
        <th>5/209</th>
        <td>cúig cinn de dhá chéad naoithe</td>
      </tr>
      <tr>
        <th>4/43</th>
        <td>ceithre cinn de dhaichead tríthe</td>
        <th>2/2,987</th>
        <td>dhá cheann de dhá mhíle, naoi gcéad ochtó seachtuithe</td>
      </tr>
      <tr>
        <th>5/54</th>
        <td>cúig cinn de chaoga ceathruithe</td>
        <th>3/3,234,567</th>
        <td>trí cinn de thrí mhilliún, dhá chéad tríocha is ceithre mhíle, cúig chéad seasca seachtuithe</td>
      </tr>
    </tbody>
  </MarkedTable>
    ;
};

export const Table9CC = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9CC-caption"]} docLang={props.docLang} tableLetter="CC">
    <thead>
      <th>{chapterDb["TheFraction"]}</th>
      <th>{chapterDb["TheBareNumberModifiedBy"]} <i>de</i></th>
      <th>{chapterDb["TheFraction"]}</th>
      <th>{chapterDb["TheBareNumberModifiedBy"]} <i>de</i></th>
    </thead>
    <tbody>
      <tr>
        <th>11/2 </th>
        <td>a haon déag de leatha</td>
        <th>19/12 </th>
        <td>a naoi déag de dhódhéaguithe</td>
      </tr>
      <tr>
        <th>12/3 </th>
        <td>a dó dhéag de thrianta</td>
        <th>20/19 </th>
        <td>fiche de naoidéaguithe</td>
      </tr>
      <tr>
        <th>15/6 </th>
        <td>a cúig déag de shéithe</td>
        <th>45/17 </th>
        <td>daichead a cúig de sheachtdéaguithe</td>
      </tr>
      <tr>
        <th>17/8 </th>
        <td>a seacht déag d&rsquo;ochtuithe</td>
        <th>87/13 </th>
        <td>ochtó a seacht de thrídéaguithe</td>
      </tr>
      <tr>
        <th>18/9 </th>
        <td>a hocht déag de naoithe</td>
        <th>123/12 </th>
        <td>céad fiche a trí de dhódhéaguithe</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9DD = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9DD-caption"]} docLang={props.docLang} tableLetter="DD">
    <thead>
      <th>{chapterDb["TheFraction"]}</th>
      <th>{chapterDb["TheBareNumberModifiedBy"]} <i>de</i></th>
      <th>{chapterDb["TheBareNumberModifiedBy"]} <i>ar</i></th>
      <th>{chapterDb["TheBareNumberModifiedBy"]} <i>os cionn</i></th>
    </thead>
    <tbody>
      <tr>
        <th>23/29 </th>
        <td>fiche a trí de fiche naoithe </td>
        <td>fiche a trí ar fiche a naoi </td>
        <td>fiche a trí os cionn fiche a naoi</td>
      </tr>
      <tr>
        <th>13/30 </th>
        <td>a trí déag de thríochaduithe </td>
        <td>a trí déag ar thríocha </td>
        <td>a trí déag os cionn tríocha</td>
      </tr>
      <tr>
        <th>32/81 </th>
        <td>tríocha a dó d&rsquo;ochtó aonuithe </td>
        <td>tríocha a dó ar ochtó a haon </td>
        <td>tríocha a dó os cionn ochtó a haon</td>
      </tr>
      <tr>
        <th>81/84 </th>
        <td>ochtó a haon d&rsquo;ochtó ceathruithe </td>
        <td>ochtó a haon ar ochtó a ceathair </td>
        <td>ochtó a haon os cionn ochtó a ceathair</td>
      </tr>
    </tbody>
  </MarkedTable>
    ;
};

export const Table9EE = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9EE-caption"]} docLang={props.docLang} tableLetter="EE">
    <thead>
      <th>0&ndash;19</th>
      <th>{chapterDb["TheNominativeCase"]}</th>
      <th>{chapterDb["TheGenitiveCase"]}</th>
      <th>{chapterDb["Tabel9EE-col4"]}</th>
    </thead>
    <tbody>
      <tr>
        <th>{chapterDb["Table9EE-Row1"]}</th>
        <td>
          <ul>
            <li>aon bhileog ghlan amháin</li>
            <li>dhá chupán ghlasa</li>
            <li>an dá chrann éagsúla</li>
            <li>na seacht gcinn dhearga</li>
            <li>na cúig bhád déag bheaga</li>
            <li>sé oíche Shathairn déag</li>
            <li>sé theach tábhairne dhéag</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>tús na haon bhileoige glaine amháin</li>
            <li>dath an dá chrann éagsúla</li>
            <li>costas na seacht gcinn dhearga</li>
            <li>bádóirí na gcúig bhád déag bheaga</li>
            <li>fuacht na n&#x2011;ocht gcloigne maola</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>1 bhileog ghlan</li>
            <li>2 chupán ghlasa</li>
            <li>3 cinn dhearga</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>{chapterDb["Table9EE-Row2"]}</th>
        <td>
          <ul>
            <li>beirt bhan mhisniúla</li>
            <li>beirt fhear chróga</li>
            <li>an bheirt scoláirí chumasacha</li>
            <li>an ceathrar feirmeoirí gnóthacha</li>
            <li>an t&#x2011;ochtar aisteoirí maithe</li>
            <li>trí fheirmeoir déag Éireannacha</li>
            <li>na seacht n&#x2011;oibrí dhéag ghnóthacha</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>ainmneacha na beirte ban mhisniúla</li>
            <li>muintir an cheathrair</li>
            <li>muintir an cheathrar feirmeoirí gnóthacha</li>
            <li>róil an ochtair</li>
            <li>róil an ochtar aisteoirí maithe</li>
            <li>cumas na dtrí fheirmeoir déag Éireannacha</li>
            <li>tuarastail na seacht n&#x2011;oibrí dhéag ghnóthacha</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>1 oibrí cáilithe</li>
            <li>3 fheisire shinsearacha</li>
            <li>8 n&#x2011;údar fhoilsithe</li>
            <li>13 fheirmeoir Éireannacha</li>
            <li>17 n&#x2011;oibrí ghnóthacha</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>{chapterDb["Table9EE-Row3"]}</th>
        <td>
          <ul>
            <li>an chéad fhear cróga</li>
            <li>na chéad cheithre charr mhóra</li>
            <li>an tríú cupán tae</li>
            <li>an cúigiú hionstraim reachtúil</li>
            <li>an seachtú hábhar déag nua</li>
            <li>an t&#x2011;ochtú capall déag mór</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>ráiteas an chéad fhir chróga</li>
            <li>buiséad na chéad dánlainne nua-aoisí</li>
            <li>blas an tríú cupán tae</li>
            <li>forálacha an chúigiú hionstraim reachtúil</li>
            <li>costas an seachtú hábhar déag nua</li>
            <li>ualach an ochtú capall déag mór</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>an 1ú fear cróga</li>
            <li>an 1ú dánlann nua-aoiseach</li>
            <li>an 3ú cupán tae</li>
            <li>an 5ú hionstraim reachtúil</li>
            <li>an 17ú hábhar nua</li>
            <li>an 18ú capall mór</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table9FF = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={9} caption={chapterDb["Table9FF-caption"]} docLang={props.docLang} tableLetter="FF">
    <thead>
      <th>20+</th>
      <th>{chapterDb["TheEstablishedSystem"]}</th>
      <th>{chapterDb["TheSimplifiedSystem"]}</th>
    </thead>
    <tbody>
      <tr>
        <th rowSpan={2}>{chapterDb["Table9FF-row1"]}</th>
        <td>
          <ul>
            <li>aon chapall mór amháin is fiche</li>
            <li>trí bhean arda is ceathracha</li>
            <li>cúig fhuinneog bhriste is caoga</li>
            <li>seacht leabhar shuimiúla is seachtó</li>
            <li>naoi nduine ghnóthacha is nócha</li>
            <li>trí chéad seasca is ceithre bhuidéal fholmha</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>fiche a haon capall mór</li>
            <li>ceathracha a trí bean ard</li>
            <li>caoga a cúig fuinneog bhriste</li>
            <li>seachtó a seacht leabhar suimiúil</li>
            <li>nócha a naoi duine gnóthach</li>
            <li>trí chéad seasca a ceathair buidéal folamh</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <ul>
            <li>21 chapall mór</li>
            <li>43 bhean arda</li>
            <li>55 fhuinneog bhriste</li>
            <li>77 leabhar shuimiúla</li>
            <li>99 nduine ghnóthacha</li>
            <li>364 bhuidéal fholmha</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>21 capall mór</li>
            <li>43 bean ard</li>
            <li>55 fuinneog bhriste</li>
            <li>77 leabhar suimiúil</li>
            <li>99 duine gnóthach</li>
            <li>364 buidéal folamh</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th rowSpan={2}>{chapterDb["Table9FF-row2"]}</th>
        <td>
          <ul>
            <li>an ceathrú doras dúnta is fiche</li>
            <li>an daicheadú leabhar nua</li>
            <li>an séú hábhar suimiúil is seasca</li>
          </ul>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <ul>
            <li>an 24ú doras dúnta</li>
            <li>an 40ú leabhar nua</li>
            <li>an 66ú hábhar suimiúil</li>
          </ul>
        </td>
        <td></td>
      </tr>
    </tbody>
  </MarkedTable>;
};
