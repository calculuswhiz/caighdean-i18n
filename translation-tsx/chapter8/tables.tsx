import { InlineTl, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const Table8A = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={8} caption={chapterDb["8A-caption"]} docLang={props.docLang} tableLetter="A">
    <thead>
      <tr>
        <th></th>
        <th colSpan={2}>{chapterDb["Table8A-col1"]}
        </th>
        <th colSpan={2}>{chapterDb["Table8A-col2"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["TheSingularNumber"]}</th>
        <th>{chapterDb["ThePluralNumber"]}</th>
        <th>{chapterDb["TheSingularNumber"]}</th>
        <th>{chapterDb["ThePluralNumber"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["TheFirstPerson"]}
        </td>
        <td>mé</td>
        <td>sinn, muid</td>
        <td>mise</td>
        <td>sinne, muidne</td>
      </tr>
      <tr>
        <td>{chapterDb["TheSecondPerson"]}
        </td>
        <td>tú, thú</td>
        <td>sibh</td>
        <td>tusa, thusa</td>
        <td>sibhse</td>
      </tr>
      <tr>
        <td>{chapterDb["TheThirdPersonMasc"]}
        </td>
        <td>sé, é</td>
        <td className="align-middle" rowSpan={2}>siad, iad</td>
        <td>seisean, eisean</td>
        <td className="align-middle" rowSpan={2}>siadsan, iadsan</td>
      </tr>
      <tr>
        <td>{chapterDb["TheThirdPersonFem"]}
        </td>
        <td>sí, í</td>
        <td>sise, ise</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table8B = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={8} caption={chapterDb["8B-caption"]} docLang={props.docLang} tableLetter="B">
    <thead>
      <tr>
        <th></th>
        <th>{chapterDb["TheSingular"]}</th>
        <th>{chapterDb["ThePlural"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["TheFirstPerson"]}
        </td>
        <td>
          <ul>
            <li>mo chapallsa</li>
            <li>mo phas-sa</li>
            <li>mo bhailese</li>
            <li>m&rsquo;athairse</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>ár mbádna</li>
            <li>ár n&#x2011;arán-na</li>
            <li>ár bpáircne</li>
            <li>ár n&#x2011;earraíne</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["TheSecondPerson"]}
        </td>
        <td>
          <ul>
            <li>do chapallsa</li>
            <li>do phas-sa</li>
            <li>do bhailese</li>
            <li>d&rsquo;athairse</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>bhur mbádsa</li>
            <li>bhur n&#x2011;aránsa</li>
            <li>bhur bpáircse</li>
            <li>bhur n&#x2011;earraíse</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["TheThirdPersonMasc"]}
        </td>
        <td>
          <ul>
            <li>a chapallsan</li>
            <li>a phas-san</li>
            <li>a bhailesean</li>
            <li>a athairsean</li>
          </ul>
        </td>
        <td className="align-middle" rowSpan={2}>
          <ul>
            <li>a mbádnasan</li>
            <li>a n&#x2011;aránsan</li>
            <li>a bpáircnsan</li>
            <li>a n&#x2011;earráinsan</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["TheThirdPersonFem"]}
        </td>
        <td>
          <ul>
            <li>a capallsa</li>
            <li>a pas-sa</li>
            <li>a bailese</li>
            <li>a hathairse</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};
export const Table8C = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={8} caption={chapterDb["8C-caption"]} docLang={props.docLang} tableLetter="C">
    <thead>
      <tr>
        <th></th>
        <th>{chapterDb["TheSingular"]}<br />{chapterDb["FollowingDha"]}</th>
        <th>{chapterDb["ThePlural"]}<br />{chapterDb["FollowingDha"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["TheFirstPerson"]}
        </td>
        <td>
          <ul>
            <li>mo dhá charr</li>
            <li>mo dhá úll</li>
            <li>mo dhá fheirm</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>ár dhá gcarr</li>
            <li>ár dhá n&#x2011;úll</li>
            <li>ár dhá bhfeirm</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["TheSecondPerson"]}
        </td>
        <td>
          <ul>
            <li>do dhá charr</li>
            <li>do dhá úll</li>
            <li>do dhá fheirm</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>bhur dhá gcarr</li>
            <li>bhur dhá n&#x2011;úll</li>
            <li>bhur dhá bhfeirm</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["TheThirdPersonMasc"]}
        </td>
        <td>
          <ul>
            <li>a dhá charr</li>
            <li>a dhá úll</li>
            <li>a dhá fheirm</li>
          </ul>
        </td>
        <td className="align-middle" rowSpan={2}>
          <ul>
            <li>a dhá gcarr</li>
            <li>a dhá n&#x2011;úll</li>
            <li>a dhá bhfeirm</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>{chapterDb["TheThirdPersonFem"]}
        </td>
        <td>
          <ul>
            <li>a dhá carr</li>
            <li>a dhá húll</li>
            <li>a dhá feirm</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};
export const Table8D = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={8} caption={chapterDb["8D-caption"]} docLang={props.docLang} tableLetter="D">
    <thead>
      <tr>
        <th></th>
        <th>{chapterDb["TheSingular"]}</th>
        <th>{chapterDb["ThePlural"]}</th>
        <th>{chapterDb["TheSingular"]}</th>
        <th>{chapterDb["ThePlural"]}</th>
      </tr>
      <tbody>
        <tr>
          <td>{chapterDb["TheFirstPerson"]}
          </td>
          <td>mo cheannsa</td>
          <td>ár gceann-na</td>
          <td>mo chuidse</td>
          <td>ár gcuidne</td>
        </tr>
        <tr>
          <td>{chapterDb["TheSecondPerson"]}
          </td>
          <td>do cheannsa</td>
          <td>bhur gceannsa</td>
          <td>do chuidse</td>
          <td>bhur gcuidse</td>
        </tr>
        <tr>
          <td>{chapterDb["TheThirdPersonMasc"]}
          </td>
          <td>a cheannsan</td>
          <td className="align-middle" rowSpan={2}>a gceannsan</td>
          <td>a chuidsean</td>
          <td className="align-middle" rowSpan={2}>a gcuidsean</td>
        </tr>
        <tr>
          <td>{chapterDb["TheThirdPersonFem"]}
          </td>
          <td>a cheannsa</td>
          <td>a cuidse</td>
        </tr>
      </tbody>
    </thead>
  </MarkedTable>;
};
export const Table8E = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={8} caption={chapterDb["8E-caption"]} docLang={props.docLang} tableLetter="E">
    <thead>
      <tr>
        <th></th>
        <th>{chapterDb["TheSingular"]}</th>
        <th>{chapterDb["ThePlural"]}</th>
        <th>{chapterDb["TheSingular"]}</th>
        <th>{chapterDb["ThePlural"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{chapterDb["TheFirstPerson"]}
        </td>
        <td>do m&rsquo;ainmniú</td>
        <td>dár n&#x2011;ainmniú</td>
        <td>do mo thástáil</td>
        <td>dár dtástáil</td>
      </tr>
      <tr>
        <td>{chapterDb["TheSecondPerson"]}
        </td>
        <td>do d&rsquo;ainmniú</td>
        <td>do bhur n&#x2011;ainmniú</td>
        <td>do do thástáil</td>
        <td>do bhur dtástáil</td>
      </tr>
      <tr>
        <td>{chapterDb["TheThirdPersonMasc"]}
        </td>
        <td>á ainmniú</td>
        <td className="align-middle" rowSpan={2}>á n&#x2011;ainmniú</td>
        <td>á thástáil</td>
        <td className="align-middle" rowSpan={2}>á dtástáil</td>
      </tr>
      <tr>
        <td>{chapterDb["TheThirdPersonFem"]}
        </td>
        <td>á hainmniú</td>
        <td>á tástáil</td>
      </tr>
    </tbody>
  </MarkedTable>;
};

export const Table8F = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <MarkedTable chapter={8} caption={chapterDb["8F-caption"]} docLang={props.docLang} tableLetter="F">
    <thead>
      <tr>
        <th></th>
        <th colSpan={4}>{chapterDb["TheSingular"]}
        </th>
        <th colSpan={3}>{chapterDb["ThePlural"]}
        </th>
      </tr>
      <tr>
        <th></th>
        <th>{chapterDb["TheFirstPerson"]}</th>
        <th>{chapterDb["TheSecondPerson"]}</th>
        <th>{chapterDb["TheThirdPersonMasc"]}</th>
        <th>{chapterDb["TheThirdPersonFem"]}</th>
        <th>{chapterDb["TheFirstPerson"]}</th>
        <th>{chapterDb["TheSecondPerson"]}</th>
        <th>{chapterDb["TheThirdPerson"]}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="font-bold">
          ag{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-ag"]}</InlineTl>
          }
          <td>agam</td>
          <td>agat</td>
          <td>aige</td>
          <td>aici</td>
          <td>againn</td>
          <td>agaibh</td>
          <td>acu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          ar{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-ar"]}</InlineTl>
          }
          <td>orm</td>
          <td>ort</td>
          <td>air</td>
          <td>uirthi</td>
          <td>orainn</td>
          <td>oraibh</td>
          <td>orthu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          as{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-as"]}</InlineTl>
          }
          <td>asam</td>
          <td>asat</td>
          <td>as</td>
          <td>aisti</td>
          <td>asainn</td>
          <td>asaibh</td>
          <td>astu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          chuig{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-chuig"]}</InlineTl>
          }
          <td>chugam</td>
          <td>chugat</td>
          <td>chuige</td>
          <td>chuici</td>
          <td>chugainn</td>
          <td>chugaibh</td>
          <td>chucu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          de{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-de"]}</InlineTl>
          }
          <td>díom</td>
          <td>díot</td>
          <td>de</td>
          <td>di</td>
          <td>dínn</td>
          <td>díbh</td>
          <td>díobh</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          do{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-do"]}</InlineTl>
          }
          <td>dom</td>
          <td>duit</td>
          <td>dó</td>
          <td>di</td>
          <td>dúinn</td>
          <td>daoibh</td>
          <td>dóibh</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          faoi{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-faoi"]}</InlineTl>
          }
          <td>fúm</td>
          <td>fút</td>
          <td>faoi</td>
          <td>fúithi</td>
          <td>fúinn</td>
          <td>fúibh</td>
          <td>fúthu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          fara{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-fara"]}</InlineTl>
          }
          <td>faram</td>
          <td>farat</td>
          <td>fairis</td>
          <td>farae</td>
          <td>farainn</td>
          <td>faraibh</td>
          <td>faru</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          i{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-i"]}</InlineTl>
          }
          <td>ionam</td>
          <td>ionat</td>
          <td>ann</td>
          <td>inti</td>
          <td>ionainn</td>
          <td>ionaibh</td>
          <td>iontu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          idir{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-idir"]}</InlineTl>
          }
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>eadrainn</td>
          <td>eadraibh</td>
          <td>eatarthu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          ionsar{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-ionsar"]}</InlineTl>
          }
          <td>ionsorm</td>
          <td>ionsort</td>
          <td>ionsair</td>
          <td>ionsuirthi</td>
          <td>ionsorainn</td>
          <td>ionsoraibh</td>
          <td>ionsorthu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          le{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-le"]}</InlineTl>
          }
          <td>liom</td>
          <td>leat</td>
          <td>leis</td>
          <td>léi</td>
          <td>linn</td>
          <td>libh</td>
          <td>leo</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          ó{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-ó"]}</InlineTl>
          }
          <td>uaim</td>
          <td>uait</td>
          <td>uaidh</td>
          <td>uaithi</td>
          <td>uainn</td>
          <td>uaibh</td>
          <td>uathu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          roimh{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-roimh"]}</InlineTl>
          }
          <td>romham</td>
          <td>romhat</td>
          <td>roimhe</td>
          <td>roimpi</td>
          <td>romhainn</td>
          <td>romhaibh</td>
          <td>rompu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          thar{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-thar"]}</InlineTl>
          }
          <td>tharam</td>
          <td>tharat</td>
          <td>thairis</td>
          <td>thairsti</td>
          <td>tharainn</td>
          <td>tharaibh</td>
          <td>tharstu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          trí{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-trí"]}</InlineTl>
          }
          <td>tríom</td>
          <td>tríot</td>
          <td>tríd</td>
          <td>tríthi</td>
          <td>trínn</td>
          <td>tríbh</td>
          <td>tríothu</td>
        </td>
      </tr>
      <tr>
        <td className="font-bold">
          um{" "}
          {
            props.docLang !== "ga_IE"
            && <InlineTl lang={props.docLang}>{chapterDb["Table8F-um"]}</InlineTl>
          }
          <td>umam</td>
          <td>umat</td>
          <td>uime</td>
          <td>uimpi</td>
          <td>umainn</td>
          <td>umaibh</td>
          <td>umpu</td>
        </td>
      </tr>
    </tbody>
  </MarkedTable>;
};