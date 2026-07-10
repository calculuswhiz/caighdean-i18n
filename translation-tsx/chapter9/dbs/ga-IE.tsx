import { ga_IE as ga_IE_Common } from "../../common/ga-IE";

export const ga_IE = {
  get "teidealNaCaibidle"(){
    return "An Uimhir";
  },
  get "9-1-title"(){
    return "Ginearálta";
  },
  get "9-title"(){
    return <>{ga_IE_Common["Caibidil"]} 9 | {ga_IE["teidealNaCaibidle"]}</>;
  },
  get "9-1-1-p"(){
    return "Is iad na príomhleaganacha den uimhir sa Ghaeilge an Mhaoluimhir, an Bhunuimhir, an Uimhir Phearsanta, an Orduimhir, an Codán agus an Uimhir Dheachúlach.";
  },
  get "9-1-1-a-title"(){
    return "An Mhaoluimhir";
  },
  get "9-1-1-a-p"(){
    return <>Tugtar maoluimhir ar uimhir nach dtagann ainmfhocal go díreach ar a lorg. Úsáidtear an mhaoluimhir i gcomhaireamh lom, e.g., <i>a haon</i>; <i>a cúig</i>; <i>a deich</i> (féach <a href="#sec_9_2">9.2</a>).</>;
  },
  get "9-1-1-b-title"(){
    return "An Bhunuimhir";
  },
  get "9-1-1-b-p"(){
    return <>Tugtar bunuimhir ar uimhir a chuirtear roimh ainmfhocal chun líon rudaí a chur in iúl, e.g., <i>trí leabhar</i>; <i>seacht gcupán</i>; <i>naoi mbád</i> (féach <a href="#sec_9_3">9.3</a>).</>;
  },
  get "9-1-1-c-title"(){
    return "An Uimhir Phearsanta";
  },
  get "9-1-1-c-p"(){
    return <>Tugtar uimhir phearsanta ar uimhir a úsáidtear chun daoine a chomhaireamh, e.g., <i>beirt bhan</i>; <i>ceathrar daltaí</i>; <i>ochtar feirmeoirí</i> (féach <a href="#sec_9_4">9.4</a>).</>;
  },
  get "9-1-1-d-title"(){
    return "An Orduimhir";
  },
  get "9-1-1-d-p"(){
    return <>Tugtar orduimhir ar uimhir lena gcuirtear ionad ruda i sraith rudaí in iúl, e.g., <i>an chéad teach</i>; <i>an dara bean</i>; <i>an fichiú haois</i> (féach <a href="#sec_9_5">9.5</a>).</>;
  },
  get "9-1-1-e-title"(){
    return "An Codán";
  },
  get "9-1-1-e-p"(){
    return <>Cainníocht uimhriúil nach slánuimhir (uimhir iomlán) is ea an codán, e.g., <i>ceathrú (1/4)</i>; <i>ceithre chúigiú (4/5)</i>; <i>cúig shéú (5/6)</i> (féach <a href="#sec_9_6">9.6</a>).</>;
  },
  get "9-1-1-f-title"(){
    return "An Uimhir Dheachúlach";
  },
  get "9-1-1-f-p"(){
    return <>Bealach eile chun cainníocht uimhriúil nach slánuimhir a chur in iúl, agus úsáid á baint as an bpointe deachúlach, is ea an uimhir dheachúlach, e.g., <i>3.1</i>; <i>7.5</i>; <i>18.49</i>; <i>34.023</i> (féach <a href="#sec_9_7">9.7</a>).</>;
  },
  get "9-1-2-p"(){
    return "Tugtar rogha idir dhá chóras chun déileáil le bunuimhreacha agus le huimhreacha pearsanta sa scríbhneoireacht: an Córas Seanbhunaithe agus an Córas Simplithe. Úsáidtear an Córas Seanbhunaithe le huimhreacha ó 1&ndash;19 i gcónaí. Is féidir an Córas Seanbhunaithe nó an Córas Simplithe a úsáid le huimhreacha ó 20 ar aghaidh.";
  },
  get "9-2-title"(){
    return "An Mhaoluimhir";
  },
  get "Table9A-caption"(){
    return <>{ga_IE["TheBareNumbers"]} 0&ndash;19</>;
  },
  get "Table9B-caption"(){
    return <>{ga_IE["TheBareNumbers"]} 20&ndash;99</>;
  },
  get "Table9C-caption"(){
    return <>{ga_IE["TheBareNumbers"]} {ga_IE["TheTens"]}</>;
  },
  get "Table9D-caption"(){
    return <>{ga_IE["TheBareNumbers"]} 100&ndash;9,999</>;
  },
  get "Table9E-caption"(){
    return <>{ga_IE["TheBareNumbers"]} 10,000+</>;
  },
  get "9-2-p"(){
    return <>Tugtar maoluimhir ar uimhir a úsáidtear i gcomhaireamh lom nuair nach gcuirtear líon nó ord rudaí nó daoine in iúl, e.g., <i>a haon</i>; <i>a trí déag</i>; <i>a tríocha trí</i>; <i>céad nócha a cúig</i>; <i>míle, ceithre chéad seachtó a naoi</i>.</>;
  },
  get "9-2-1-title"(){
    return "Na Maoluimhreacha 0&ndash;99";
  },
  get "9-2-1-a-p"(){
    return <>Cuirtear an mhír <i>a</i> roimh uimhreacha ó 1&ndash;19, e.g., <i>a haon</i>; <i>a dó</i>; <i>a trí</i>; <i>bus a ceathair</i>; <i>a hocht déag</i>; agus i gcás 20&ndash;99 (seachas na deicheanna), cuirtear í roimh an uimhir dheiridh, e.g., <i>fiche a haon</i>; <i>daichead a sé</i>; <i>seachtó a hocht</i>.</>;
  },
  get "9-2-1-b-p"(){
    return <>Tá comhstádas ag na focail <i>ceathracha</i> agus <i>daichead</i>.</>;
  },
  get "9-2-1-p1"(){
    return "Seo mar a scríobhtar na maoluimhreacha ó 0&ndash;19.";
  },
  get "TheBareNumbers"(){
    return "Na Maoluimhreacha";
  },
  get "9-2-1-p2"(){
    return <>Tabhair faoi deara go n&#x2011;úsáidtear an mhaoluimhir i gcúrsaí ama, e.g., <i>a haon a chlog</i>; <i>a seacht a chlog</i>; <i>a fiche tar éis a cúig</i>. Seo mar a scríobhtar an t&#x2011;am i bhfoirm figiúirí: <i>5.30 p.m.</i>; <i>4.26 p.m.</i>; <i>13:00</i>; <i>16:47</i>.</>;
  },
  get "9-2-1-p3"(){
    return "Seo mar a scríobhtar na maoluimhreacha ó 20&ndash;99. Tugtar an córas iomlán idir 20 agus 29 sa tábla agus tugtar samplaí i gcás na ndeicheanna eile.";
  },
  get "9-2-2-title"(){
    return "Na Maoluimhreacha 100+";
  },
  get "9-2-2-a-p"(){
    return <>Is ainmfhocail iad na huimhreacha <i>céad</i>, <i>míle</i>, <i>milliún</i>, <i>billiún</i>, etc. Dá bhrí sin, is é córas na mbunuimhreacha a úsáidtear má tá na huimhreacha 2&ndash;19 roimh shraith náideanna a fhreagraíonn do <i>céad</i>, <i>míle</i>, <i>milliún</i>, <i>billiún</i>, etc., e.g., <i>ceithre chéad</i>; <i>dhá chéad míle</i>; <i>naoi milliún déag</i>; <i>dhá bhilliún</i>; <i>ocht mbilliún</i> (féach <a href="#sec_9_3">9.3</a> An Bhunuimhir).</>;
  },
  get "9-2-2-b-p"(){
    return <>Ní dhéantar athrú tosaigh ar an ainmfhocal i ndiaidh na ndeicheanna, e.g., <i>fiche míle</i>; <i>tríocha milliún</i>; etc.</>;
  },
  get "TheTens"(){
    return "Na Deicheanna";
  },
  get "9-2-3-title"(){
    return "Na Maoluimhreacha 10,000+";
  },
  get "9-2-3-a-p"(){
    return "Tá dhá chóras ann chun na maoluimhreacha os cionn 10,000 a chur in iúl &mdash; córas na mbunuimhreacha agus córas na maoluimhreacha.";
  },
  get "9-2-3-b-p"(){
    return <>I gcóras na mbunuimhreacha leanann ord na bhfocal rialacha na mbunuimhreacha, e.g., <i>24,000 &mdash; ceithre mhíle is fiche</i> (féach <a href="#table9N">tábla 9N</a>). Faoi chóras na maoluimhreacha, úsáidtear an mhaoluimhir móide an t&#x2011;ainmfhocal lom (<i>céad</i>, <i>míle</i>, etc.) gan chlaochlú, e.g., <i>24,000 &mdash; fiche a ceathair míle</i>.</>;
  },
  get "9-2-3-p1"(){
    return <>Tabhair faoi deara go n&#x2011;úsáidtear <i>is</i> i gcóras na mbunuimhreacha os cionn 10,000 ach nach n&#x2011;úsáidtear é sna maoluimhreacha eile.</>;
  },
  get "9-2-3-p2"(){
    return "Seo mar a scríobhtar na maoluimhreacha os cionn 10,000.";
  },
  get "Table9E-col2"(){
    return "Córas na mBunuimhreacha";
  },
  get "Table9E-col3"(){
    return "Córas na Maoluimhreacha";
  },
  get "9-3-title"(){
    return "An Bhunuimhir";
  },
  get "Table9F-caption"(){
    return <>{ga_IE["TheCardinalNumbers"]} 1&ndash;19</>;
  },
  get "9-3-1-title"(){
    return "Na Bunuimhreacha 1&ndash;19";
  },
  get "9-3-1-a-p"(){
    return <>Tugtar <i>bunuimhir</i> ar an uimhir a chuirtear le hainmfhocal chun líon rudaí a chur in iúl.</>;
  },
  get "9-3-1-b-p"(){
    return <>Tagann an t&#x2011;ainmfhocal ar lorg <i>aon</i>, <i>dhá</i>, <i>trí</i>, <i>ceithre</i>, <i>cúig</i>, <i>sé</i>, <i>seacht</i>, <i>ocht</i>, <i>naoi</i>, <i>deich</i>.</>;
  },
  get "9-3-1-c-p"(){
    return <>Tabhair faoi deara go n&#x2011;úsáidtear na bunuimhreacha <i>dhá</i> agus <i>ceithre</i> seachas na foirmeacha maoluimhreach <i>dó</i> agus <i>ceathair</i>.</>;
  },
  get "9-3-1-d-p"(){
    return <>Ní mór an focal <i>amháin</i> a lua tar éis na bunuimhreach <i>aon</i> agus an ainmfhocail. Ní gá, áfach, <i>aon</i> a lua i gcónaí, e.g., <i>aon chapall amháin</i>; <i>capall amháin</i>.</>;
  },
  get "9-3-1-e-p"(){
    return <>Ní chuirtear séimhiú ar <i>d</i>, <i>t</i> nó <i>s</i> tar éis <i>aon</i>, e.g., <i>aon doras amháin</i>; <i>aon teach amháin</i>.</>;
  },
  get "9-3-1-f-p"(){
    return <>I ndiaidh an ainmfhocail a thagann an focal <i>déag</i>, e.g., <i>ceithre leabhar déag</i>. Séimhítear an focal <i>déag</i> má chríochnaíonn an focal díreach roimhe ar ghuta (ach féach <a href="#sec_9_3_2_e">9.3.2(e)</a>), seachas i ndiaidh <i>euro</i>.</>;
  },
  get "9-3-1-p"(){
    return <>Tabhair faoi deara, más aonad brí ar leith an t&#x2011;ainmfhocal agus an cáilitheoir, e.g., <i>madra rua</i>; <i>cat crainn</i>; <i>teach tábhairne</i>; <i>láthair champála</i> (seachas gnáth-ainmfhocal agus cáilitheoir, e.g., <i>leabhar dearg</i>) is i ndiaidh an ainmfhocail agus an cháilitheora a chuirtear <i>déag</i>, e.g., <i>ceithre mhadra rua dhéag</i>; <i>cúig theach tábhairne dhéag</i>; <i>sé chat crainn déag</i>; <i>seacht n&#x2011;iora ghlasa dhéag</i>. Cuirtear aon cháilitheoir eile i ndiaidh <i>déag</i>, e.g., <i>sé chat crainn déag mhóra</i>; <i>seacht n&#x2011;iora ghlasa dhéag fhiáine</i>.</>;
  },
  get "9-3-1-g-p"(){
    return <>Ní shéimhítear <i>dhá</i> i ndiaidh an ailt, <i>aon</i> ná <i>céad</i>, e.g., <i>an dá leabhar</i>; <i>an chéad dá leabhar</i>; <i>aon dá leabhar</i>.</>;
  },
  get "9-3-1-h-p"(){
    return <>Cuireann na bunuimhreacha <i>aon</i>, <i>dhá</i> (ach féach <a href="./chapter8.html#sec_8_3_3">8.3.3</a>), <i>trí</i>, <i>ceithre</i>, <i>cúig</i> agus <i>sé</i> séimhiú ar an ainmfhocal uatha a thagann ina ndiaidh, e.g., <i>trí bhád</i>; ach ní shéimhítear an focal <i>cent</i>, e.g., <i>trí cent</i>.</>;
  },
  get "9-3-1-i-p"(){
    return <>Cuireann na bunuimhreacha <i>seacht</i>, <i>ocht</i>, <i>naoi</i> agus <i>deich</i> urú ar an ainmfhocal uatha agus iolra a thagann ina ndiaidh, e.g., <i>seacht gcnámh</i>; <i>deich gcinn</i>; ach ní uraítear an focal <i>euro</i>, e.g., <i>ocht euro</i>; <i>naoi euro</i>, ná <i>cent</i>, e.g., <i>ocht cent</i>; <i>deich cent</i>.</>;
  },
  get "TheCardinalNumbers"(){
    return "Na Bunuimhreacha";
  },
  get "9-3-2-title"(){
    return "Ainmfhocail a bhfuil Leagan Iolra ar leith acu i nDiaidh na mBunuimhreacha";
  },
  get "9-3-2-p"(){
    return <>Tá roinnt ainmfhocal ann arb í foirm an ainmnigh iolra díobh, nó leagan iolra ar leith díobh, a úsáidtear i ndiaidh na mbunuimhreacha 3&ndash;10 agus i ndiaidh uimhreacha a chríochnaíonn ar 3&ndash;9. Léirítear na hainmfhocail sin sa tábla thíos. Cé nach leagan iolra <i>é fichid</i>, áirítear an leagan sin san aicme seo.</>;
  },
  get "Table9G-caption"(){
    return "Na Bunuimhreacha &mdash; Foirmeacha na nAinmfhocal a bhfuil Leagan Iolra ar leith acu";
  },
  get "Table9G-exception"(){
    return <>(<i>seachas sa bhrí</i> ball beatha)</>;
  },
  get "Table9G-babhta"(){
    return "babhta";
  },
  get "9-3-2-a-p"(){
    return <>Foirm an ainmnigh uatha de na hainmfhocail a úsáidtear leis na bunuimhreacha 1&ndash;2 agus i ndiaidh uimhreacha a chríochnaíonn ar 1&ndash;2, e.g., <i>aon phingin amháin</i>; <i>dhá bhliain</i>; <i>aon uair déag</i>; <i>dhá cheann is tríocha</i>.</>;
  },
  get "9-3-2-b-p"(){
    return <>Ní chuirtear séimhiú ar an leagan iolra i ndiaidh 3&ndash;6 ná i ndiaidh uimhreacha a chríochnaíonn ar 3&ndash;6, e.g., <i>trí seachtaine</i>; <i>ceithre cinn déag</i>.</>;
  },
  get "9-3-2-c-p"(){
    return <>I ndiaidh 3&ndash;6 agus i ndiaidh uimhreacha a chríochnaíonn ar 3&ndash;6 cuirtear <i>h</i> roimh an leagan iolra <i>uaire</i>, e.g., <i>cúig huaire</i>.</>;
  },
  get "9-3-2-d-p"(){
    return <>Cuireann na huimhreacha 7&ndash;10 agus uimhreacha a chríochnaíonn ar 7&ndash;9 urú ar an leagan iolra, e.g., <i>seacht mbliana</i>; <i>ocht bpingine déag</i>.</>;
  },
  get "9-3-2-e-p"(){
    return <>Ní chuirtear séimhiú ar <i>déag</i> i ndiaidh an leagain iolra, fiú amháin sa chás go gcríochnaíonn sé ar ghuta, e.g., <i>trí bliana déag</i>; <i>ocht n&#x2011;uaire déag</i>.</>;
  },
  get "9-3-2-f-p"(){
    return <>Is í foirm an ainmnigh uatha a úsáidtear i ndiaidh na ndeicheanna (seachas <i>deich</i>), e.g., <i>fiche bliain</i>; <i>tríocha pingin</i>; <i>ochtó troigh</i>.</>;
  },
  get "Table9H-caption"(){
    return "Na Bunuimhreacha &mdash; Samplaí d&rsquo;Fhoirmeacha na nAinmfhocal a bhfuil Leagan Iolra ar leith acu";
  },
  get "Table9H-header"(){
    return "Na Bunuimhreacha &mdash; Leaganacha Iolra ar leith";
  },
  get "9-3-3-title"(){
    return "An Aidiacht leis na Bunuimhreacha 1&ndash;19";
  },
  get "9-3-3-a-p"(){
    return "Ar lorg na bunuimhreach 1, is san uimhir uatha a bhíonn an aidiacht a ghabhann leis an ainmfhocal agus í ar aon inscne leis an ainmfhocal.";
  },
  get "9-3-3-b-p"(){
    return <>Ar lorg na n&#x2011;uimhreacha eile (2&ndash;19), bíonn an aidiacht san uimhir iolra agus séimhítear í.</>;
  },
  get "9-3-3-c-p"(){
    return <>Cuirtear an focal <i>déag</i> roimh aidiacht nó aidiachtaí atá ag gabháil leis an ainmfhocal (ach féach <a href="#sec_9_3_1_f">9.3.1(f</a>)).</>;
  },
  get "Table9I-caption"(){
    return "Na Bunuimhreacha 1&ndash;19 &mdash; Foirm na hAidiachta";
  },
  get "Table9I-header"(){
    return "An Aidiacht leis na Bunuimhreacha";
  },
  get "9-3-4-title"(){
    return "Foirm na hAidiachta leis na hAinmfhocail a bhfuil Leagan Iolra ar leith acu";
  },
  get "9-3-4-a-p"(){
    return "Ar lorg na bunuimhreach 1, is san uimhir uatha a bhíonn an aidiacht a ghabhann leis an ainmfhocal, agus í ar aon inscne leis an ainmfhocal.";
  },
  get "9-3-4-b-p"(){
    return <>Cuirtear an aidiacht san uimhir iolra i ndiaidh an leagain iolra ach ní chuirtear séimhiú ar an aidiacht sa chás go gcríochnaíonn an leagan iolra sin ar ghuta. Séimhítear an aidiacht i ndiaidh <i>cinn</i> agus <i>fichid</i>.</>;
  },
  get "Table9J-caption"(){
    return "Na Bunuimhreacha 1&ndash;19 &mdash; Foirm na hAidiachta leis na hAinmfhocail a bhfuil Leagan Iolra ar leith acu";
  },
  get "Table9J-header"(){
    return "An Aidiacht leis na hAinmfhocail a bhfuil Leagan Iolra ar leith acu";
  },
  get "9-3-5-title"(){
    return "An tAlt leis na Bunuimhreacha 1&ndash;19";
  },
  get "9-3-5-a-p"(){
    return "Foirm uatha an ailt";
  },
  get "9-3-5-a-i-p"(){
    return "Cuirtear foirm uatha an ailt roimh an mbunuimhir 1, roimh uimhreacha a chríochnaíonn ar 1, agus roimh iolraithe ar 10 ó 20 ar aghaidh.";
  },
  get "9-3-5-a-ii-p"(){
    return <>Cuirtear <i>t&#x2011;</i> roimh an mbunuimhir <i>aon</i> ar lorg an ailt, e.g., <i>an t&#x2011;aon leabhar amháin</i>; <i>an t&#x2011;aon bhileog amháin</i>. Baintear an <i>t&#x2011;</i> i ndiaidh réamhfhocal, e.g., <i>san aon leabhar amháin</i>; <i>tríd an aon fhuinneog amháin</i>.</>;
  },
  get "9-3-5-a-iii-p"(){
    return <>Foirm uatha an ailt a chuirtear roimh an mbunuimhir <i>dhá</i> freisin ach déantar <i>dá</i> den bhunuimhir, e.g., <i>an dá chapall</i>.</>;
  },
  get "9-3-5-b-p"(){
    return "Foirm iolra an ailt";
  },
  get "9-3-5-b-i-p"(){
    return "Is í foirm iolra an ailt a chuirtear roimh na bunuimhreacha 3&ndash;9 agus 13&ndash;19.";
  },
  get "9-3-5-b-ii-p"(){
    return <>Cuirtear <i>h</i> roimh bhunuimhir dar tús guta i ndiaidh fhoirm iolra an ailt, e.g., <i>na hocht gcapall</i>.</>;
  },
  get "9-3-5-c-p"(){
    return <>Ní dhéanann an t&#x2011;alt aon difear d&rsquo;aidiacht ar lorg bunuimhreacha agus ainmfhocal, e.g., <i>an dá chapall mhóra</i>.</>;
  },
  get "Table9K-caption"(){
    return "Na Bunuimhreacha 1&ndash;19 &mdash; An tAlt";
  },
  get "Table9K-header"(){
    return "An tAlt leis na Bunuimhreacha";
  },
  get "9-3-5-note"(){
    return <>Tabhair faoi deara, i gcás na n&#x2011;ainmfhocal a n&#x2011;úsáidtear leagan iolra ar leith díobh i ndiaidh na mbunuimhreacha, go leantar an patrún céanna, e.g., <i>an t&#x2011;aon bhliain amháin</i>; <i>an dá cheann mhóra</i>; <i>na hocht dtroithe déag</i>; etc.</>;
  },
  get "9-3-6-title"(){
    return "Na Bunuimhreacha 1&ndash;19 &mdash; An Tuiseal Ginideach gan an tAlt";
  },
  get "9-3-6-a-p"(){
    return <>Téann athrú foirme ar ainmfhocal agus ar aidiacht sa ghinideach i ndiaidh <i>aon</i>, e.g., <i>ualach aon chapaill mhóir amháin</i>; <i>fráma aon fhuinneoige báine amháin</i>; ach amháin nuair atá <i>déag</i> ag gabháil leis, e.g., <i>ualach aon chapall déag mhóra</i>; <i>fráma aon fhuinneog déag bhána</i>.</>;
  },
  get "9-3-6-b-p"(){
    return <>I gcás 2&ndash;19, ní théann aon athrú foirme sa ghinideach ar an ainmfhocal ná ar an mbunuimhir, e.g., <i>fad dhá mhéadar</i>; <i>costas trí fhuinneog</i>; <i>úinéir seacht ngabhar</i>; <i>tréimhse naoi n&#x2011;oíche</i>; <i>tiománaithe trí thacsaí dhéag</i>; ach cuirtear an aidiacht san uimhir iolra agus séimhítear í, e.g., <i>costas trí fhuinneog dheasa</i>; <i>úinéir seacht ngabhar chrosta</i>; <i>tiománaithe trí thacsaí dhéag chostasacha</i>; ach amháin más leagan iolra ar leith é a chríochnaíonn ar ghuta nó ar chonsan leathan, e.g., <i>trí bliana crua</i>.</>;
  },
  get "9-3-7-title"(){
    return "Na Bunuimhreacha 1&ndash;19 &mdash; An Tuiseal Ginideach leis an Alt";
  },
  get "9-3-7-a-p"(){
    return <>Téann athrú foirme ar ainmfhocal agus ar aidiacht sa ghinideach i ndiaidh aon nuair atá an t&#x2011;alt ann faoi réir na bpointí seo a leanas.</>;
  },
  get "9-3-7-a-i-p"(){
    return <>De réir inscne an ainmfhocail, úsáidtear <i>an</i> nó <i>na</i> sa tuiseal ginideach roimh an mbunuimhir <i>aon</i> nuair nach bhfuil <i>déag</i> ag gabháil leis, e.g., <i>ualach an aon chapaill amháin</i>; <i>costas na haon fhuinneoige amháin</i>; ach <i>ábhar an aon chuntas déag amháin</i>; <i>ag ceartú an aon aiste dhéag shuimiúla</i>.</>;
  },
  get "9-3-7-a-ii-p"(){
    return <>Más ainmfhocal baininscneach atá i gceist, ní foláir <i>h</i> a chur roimh an mbunuimhir <i>aon</i>, e.g., <i>i gcaitheamh na haon oíche amháin sin</i>.</>;
  },
  get "9-3-7-a-iii-p"(){
    return <>Más ainmfhocal firinscneach atá i gceist, baintear an <i>t&#x2011;</i> roimh an mbunuimhir <i>aon</i>, e.g., <i>ar feadh an aon lae amháin sin</i>.</>;
  },
  get "9-3-7-b-p"(){
    return <>Déantar <i>dá</i> de <i>dhá</i> i ndiaidh an ailt uatha (<i>an</i>, <i>don</i>, <i>sa</i>, etc.).</>;
  },
  get "9-3-7-c-p"(){
    return <>I gcás na mbunuimhreacha <i>trí</i> go <i>deich</i>, uraítear na bunuimhreacha inuraithe (<i>trí</i>, <i>ceithre</i>, <i>cúig</i>, <i>ocht</i>, <i>deich</i>) sa tuiseal ginideach i ndiaidh an ailt (<i>na</i>).</>;
  },
  get "9-3-7-d-p"(){
    return <>Tá na rialacha céanna le cur i bhfeidhm ar na hainmfhocail a bhfuil leagan iolra ar leith acu agus ar na haidiachtaí a ghabhann leo (féach <a href="#sec_9_3_4">9.3.4</a>) agus a chuirtear i bhfeidhm sa tuiseal ainmneach, e.g., <i>tréimhse na sé bliana fada</i>; <i>deireadh na naoi seachtaine déag fada</i>; <i>Cogadh na Naoi mBliana</i>; <i>costas na dtrí troithe cearnacha eile</i>; <i>úinéir an dá cheann bhána</i>; <i>praghas na dtrí cinn mhóra</i>.</>;
  },
  get "Table9L-caption"(){
    return "Na Bunuimhreacha 1&ndash;19 &mdash; An Tuiseal Ginideach leis an Alt";
  },
  get "Table9L-header"(){
    return "Tuiseal Ginideach na mBunuimhreacha leis an Alt";
  },
  get "9-3-8-title"(){
    return "Na Bunuimhreacha a scríobh ina bhFigiúirí 1&ndash;19";
  },
  get "9-3-8-p"(){
    return <>Is ionann na rialacha a bhaineann leis na bunuimhreacha 1&ndash;19 a scríobh ina bhfigiúirí agus iad a scríobh ina bhfocail, e.g., <i>1 chapall mór</i>; <i>3 bhád bheaga</i>; <i>7 n&#x2011;oíche dhorcha</i>; <i>13 seachtaine fuara</i>; <i>17 ngluaisteán shaora</i>; <i>19 mbliana fada</i>.</>;
  },
  get "9-3-9-title"(){
    return "Na Bunuimhreacha 20+ &mdash; Na Deicheanna";
  },
  get "9-3-9-a-p"(){
    return "Is í foirm an ainmnigh uatha den ainmfhocal a chuirtear i ndiaidh na ndeicheanna. Ní dhéantar aon athrú tosaigh ar an ainmfhocal.";
  },
  get "9-3-9-b-p"(){
    return "Má tá aidiacht leis, réitíonn an aidiacht le hinscne an ainmfhocail.";
  },
  get "9-3-9-c-p"(){
    return <>Cuirtear foirm uatha an ailt roimh na deicheanna, e.g., <i>an fiche teach nua</i>; <i>an seasca duine cáiliúil</i>.</>;
  },
  get "9-3-9-d-p"(){
    return <>Sa tuiseal ginideach, mura bhfuil an t&#x2011;alt ann, ní théann aon athrú foirme ar an ainmfhocal ná ar an mbunuimhir.</>;
  },
  get "9-3-9-e-p"(){
    return <>Má tá an t&#x2011;alt ann sa tuiseal ginideach, imríonn an t&#x2011;alt ar thúslitir na huimhreach mar a d&rsquo;imreodh ar ainmfhocal firinscneach ach ní dhéantar aon athrú tosaigh ar <i>f</i> ná <i>s</i>.</>;
  },
  get "Table9M-caption"(){
    return "Na Bunuimhreacha &mdash; Tuiseal Ainmneach agus Tuiseal Ginideach na nDeicheanna";
  },
  get "TheNominativeCase"(){
    return "An Tuiseal Ainmneach";
  },
  get "TheGenitiveCase"(){
    return "An Tuiseal Ginideach";
  },
  get "WithoutArticle"(){
    return "gan an tAlt";
  },
  get "WithArticle"(){
    return "leis an Alt";
  },
  get "9-3-9-note-p1"(){
    return <>Nuair a úsáidtear leagan iolra na ndeicheanna is sa ghinideach iolra a bhíonn an t&#x2011;ainmfhocal ina dhiaidh, e.g., <i>na céadta daoine</i>; <i>na mílte dathanna</i>.</>;
  },
  get "9-3-9-note-p2"(){
    return <>Leanann an ginideach iolra na hainmfhocail uatha <i>dosaen</i> agus <i>scór</i> freisin, e.g., <i>dosaen amhrán</i>; <i>scór daoine</i>.</>;
  },
  get "9-3-10-title"(){
    return "Na Bunuimhreacha eile 20+";
  },
  get "9-3-10-a-p"(){
    return <>Tá dhá chóras ann maidir leis na bunuimhreacha os cionn 20 (seachas na deicheanna roimhe seo, féach <a href="#sec_9_3_9">9.3.9</a>): an Córas Seanbhunaithe agus an Córas Simplithe. Baineann an dá chóras seo leis na bunuimhreacha agus iad scríofa ina bhfocail agus ina bhfigiúirí. Tá an dá chóras seo ar comhstádas agus inghlactha.</>;
  },
  get "TheEstablishedSystem"(){
    return "An Córas Seanbhunaithe";
  },
  get "TheSimplifiedSystem"(){
    return "An Córas Simplithe";
  },
  get "9-3-10-b-i-p"(){
    return <>Bíonn an t&#x2011;ainmfhocal sa leagan uatha nó sa leagan iolra ar leith atá aige agus déantar an t&#x2011;athrú tosaigh cuí ar an ainmfhocal.</>;
  },
  get "9-3-10-b-ii-p"(){
    return <>Tar éis uimhreacha a chríochnaíonn ar 1, réitíonn an aidiacht le hinscne an ainmfhocail. I gcás uimhreacha a chríochnaíonn ar 2&ndash;9, bíonn an aidiacht san uimhir iolra agus séimhítear í (ach féach <a href="#sec_9_3_4">9.3.4</a>).</>;
  },
  get "9-3-10-c-i-p"(){
    return <>Bíonn an t&#x2011;ainmfhocal san uimhir uatha i gcónaí, fiú más ainmfhocal é a bhfuil leagan iolra ar leith aige, agus ní dhéantar aon athrú tosaigh air. Bíonn an aidiacht san uimhir uatha i gcónaí agus séimhítear í de réir inscne an ainmfhocail.</>;
  },
  get "9-3-10-c-ii-p"(){
    return <>I gcás uimhreacha a chríochnaíonn ar 2 nó 4, úsáidtear na foirmeacha maoluimhreach <i>dó</i> agus <i>ceathair</i> in ionad <i>dhá</i> agus <i>ceithre</i>.</>;
  },
  get "9-3-10-d-p"(){
    return <>Más iolraí ar 10 atá i gceist, níl ann ach leagan amháin, e.g., <i>céad is fiche bád</i>.</>;
  },
  get "9-3-10-e-p"(){
    return <>Maidir leis an alt, leantar an patrún a úsáidtear leis na bunuimhreacha 1&ndash;19 leis na bunuimhreacha os cionn 20, e.g., <i>an t&#x2011;aon leabhar is fiche</i>; <i>an dá bhord is tríocha</i>; <i>na cúig pheann is seasca</i> (féach <a href="#sec_9_3_5">9.3.5</a>).</>;
  },
  get "Table9N-caption"(){
    return "Na Bunuimhreacha 21&ndash;99 &mdash; An Córas Seanbhunaithe agus an Córas Simplithe";
  },
  get "9-3-10-note-p1"(){
    return <>Nuair atá aidiacht ag gabháil le bunuimhir, is féidir úsáid a bhaint as leagan iolra an ainmfhocail <i>ceann</i> (<i>cinn</i>) i dteannta an réamhfhocail <i>de</i>, e.g., <i>seacht gcinn déag d&rsquo;oícheanta ciúine</i>; <i>trí cinn is tríocha de bháid mhóra</i>.</>;
  },
  get "9-3-10-note-p2"(){
    return <>Rogha eile atá ann ná an mhaoluimhir móide an réamhfhocal <i>de</i> móide leagan iolra an ainmfhocail agus na haidiachta a ghabhann leis, e.g., <i>a haon déag de bhlianta fada</i>; <i>tríocha a trí de bháid mhóra</i>.</>;
  },
  get "9-3-11-title"(){
    return "Na Bunuimhreacha 100+";
  },
  get "9-3-11-p1"(){
    return <>Sa Chóras Seanbhunaithe, is é malairt na comhréire a úsáidtear faoi bhun 100 a úsáidtear le huimhreacha os cionn 100, e.g., <i>céad fiche is aon chapall amháin</i>; <i>dhá mhíle, trí chéad is ceithre chapall</i>; etc.</>;
  },
  get "9-3-11-p2"(){
    return <>Is ionann na rialacha eile agus na rialacha maidir leis na bunuimhreacha a luaitear in <a href="#sec_9_3_10">9.3.10</a>.</>;
  },
  get "Table9O-caption"(){
    return "Na Bunuimhreacha 100+ &mdash; An Córas Seanbhunaithe agus an Córas Simplithe";
  },
  get "9-3-12-title"(){
    return "Na Bunuimhreacha a scríobh ina bhFigiúirí 20+";
  },
  get "9-3-12-p"(){
    return <>Cuirtear rialacha an Chórais Sheanbhunaithe agus an Chórais Shimplithe, faoi seach, (féach <a href="#sec_9_3_10">9.3.10</a>) i bhfeidhm nuair a scríobhtar na bunuimhreacha os cionn 20 ina bhfigiúirí.</>;
  },
  get "Table9P-caption"(){
    return "Na Bunuimhreacha 20+ ina bhFigiúirí &mdash; An Córas Seanbhunaithe agus an Córas Simplithe";
  },
  get "9-4-title"(){
    return "An Uimhir Phearsanta";
  },
  get "9-4-p"(){
    return "Tugtar uimhir phearsanta ar uimhir a chuireann líon daoine in iúl.";
  },
  get "9-4-1-title"(){
    return "Úsáid na nUimhreacha Pearsanta";
  },
  get "9-4-1-a-p"(){
    return "Úsáidtear na huimhreacha pearsanta (2&ndash;10 agus 12) chun daoine a chomhaireamh.";
  },
  get "9-4-1-b-p"(){
    return <>Is é gnáthchóras na mbunuimhreacha a úsáidtear chun <i>aon duine dhéag</i> nó líon daoine is mó ná <i>dháréag</i> a chomhaireamh, e.g., <i>aon duine dhéag</i>; <i>trí dhuine dhéag</i>; <i>ceithre dhuine is daichead</i>.</>;
  },
  get "Table9Q-caption"(){
    return "Na hUimhreacha Pearsanta";
  },
  get "Table9Q-header"(){
    return "Na hUimhreacha Pearsanta";
  },
  get "9-4-2-title"(){
    return "Úsáid Lom na nUimhreacha Pearsanta";
  },
  get "9-4-2-a-title"(){
    return "An uimhir phearsanta lom";
  },
  get "9-4-2-a-i-p"(){
    return <>Is féidir uimhir phearsanta a úsáid lom (gan ainmfhocal ar a lorg) chun líon daoine a chomhaireamh, e.g., <i>An bhfaca tú an bheirt?</i>; <i>Gabhadh seachtar</i>.</>;
  },
  get "9-4-2-a-ii-p"(){
    return <>Is mar ghnáth-ainmfhocal a chaitear leis an uimhir phearsanta lom sa ghinideach, e.g., <i>cor beirte</i>; <i>col ceathrair</i>; <i>col seisir</i>.</>;
  },
  get "9-4-2-b-title"(){
    return <>an t&#x2011;alt roimh an uimhir phearsanta lom</>;
  },
  get "9-4-2-b-i-p"(){
    return <>Ainmfhocail fhirinscneacha is ea na huimhreacha pearsanta go léir seachas <i>beirt</i>, e.g., <i>an bheirt</i>; <i>an ceathrar</i>; <i>an t&#x2011;ochtar</i>.</>;
  },
  get "9-4-2-b-ii-p"(){
    return <>Ní shéimhítear <i>dháréag</i> i ndiaidh an ailt, <i>aon</i> ná <i>céad</i>, e.g., <i>bhí an dáréag ann</i>; <i>gach aon dáréag acu</i>; <i>an chéad dáréag a cháiligh</i>.</>;
  },
  get "9-4-2-b-iii-p"(){
    return <>Is mar ghnáth-ainmfhocal a chaitear leis an uimhir phearsanta lom sa ghinideach nuair atá an t&#x2011;alt roimhe, e.g., <i>cótaí an tseisir</i>; <i>ticéid an ochtair</i>; <i>gluaisteán na beirte</i>.</>;
  },
  get "Table9R-caption"(){
    return "Na hUimhreacha Pearsanta Loma &mdash; An Tuiseal Ainmneach agus an Tuiseal Ginideach leis an Alt";
  },
  get "TheNumber"(){
    return "An Uimhir";
  },
  get "9-4-2-c-title"(){
    return <>An aidiacht leis an uimhir phearsanta lom &mdash; <i>Beirt</i></>;
  },
  get "9-4-2-c-i-p"(){
    return <>Má cháilíonn aidiacht an focal <i>beirt</i> agus é san ainmneach*, is san ainmneach iolra a bhíonn an aidiacht agus í séimhithe, e.g., <i>an bheirt cháiliúla</i>; <i>beirt mhisniúla</i>; <i>don bheirt óga</i>.</>;
  },
  get "9-4-2-c-ii-p"(){
    return <>Má tá an focal <i>beirt</i>, agus é ar lorg an ailt agus é sa ghinideach, á cháiliú le haidiacht a thagann ina dhiaidh, is sa ghinideach baininscneach uatha a bhíonn an aidiacht, e.g., <i>tuairimí na beirte díograisí</i>; <i>nótaí na beirte misniúla</i>; <i>iarrachtaí na beirte cróga</i>.</>;
  },
  get "9-4-2-c-iii-p"(){
    return <>Má tá an focal <i>beirt</i>, agus é sa ghinideach ach gan an t&#x2011;alt a bheith roimhe, á cháiliú le haidiacht a thagann ina dhiaidh, agus é ar lorg agus faoi réir ag ainmfhocal eile, bíonn an aidiacht san iolra ar lorg <i>beirt</i> agus í séimhithe (agus ní théann athrú an ghinidigh ar an bhfocal <i>beirt</i> ach cuirtear séimhiú air), e.g., <i>moltaí bheirt mhisniúla</i>; <i>tuairimí bheirt cháiliúla</i>; <i>obair bheirt acadúla</i>.</>;
  },
  get "9-4-2-c-iv-p"(){
    return <>Má tá an focal <i>beirt</i>, agus é sa ghinideach ach gan an t&#x2011;alt a bheith roimhe, á cháiliú le haidiacht a thagann ina dhiaidh, agus é faoi réir ag réamhfhocal comhshuite nó ainm briathartha, bíonn an aidiacht san iolra ar lorg <i>beirt</i> agus í séimhithe (agus ní dhéantar aon athrú ar an bhfocal <i>beirt</i> ach an oiread), e.g., <i>le haghaidh beirt inniúla</i>; <i>ag moladh beirt mhaithe</i>.</>;
  },
  get "9-4-2-d-title"(){
    return <>An aidiacht leis an uimhir phearsanta lom &mdash; <i>Triúr</i> go <i>dháréag</i></>;
  },
  get "9-4-2-d-i-p"(){
    return <>Má tá na huimhreacha pearsanta <i>triúr</i> go <i>dháréag</i> (ach féach <a href="#sec_9_4_1_b">9.4.1(b)</a>), agus iad san ainmneach*, á gcáiliú le haidiacht a thagann ina ndiaidh, is san ainmneach uatha a bhíonn an aidiacht gan aon séimhiú uirthi, e.g., <i>triúr mór</i>; <i>ceathrar ard</i>; <i>an cúigear saibhir</i>; <i>don dáréag clúiteach</i>.</>;
  },
  get "9-4-2-d-ii-p"(){
    return <>Má tá na huimhreacha pearsanta <i>triúr</i> go <i>dháréag</i> (ach féach <a href="#sec_9_4_1_b">9.4.1(b)</a>), agus iad sa ghinideach, á gcáiliú le haidiacht a thagann ina dhiaidh, cuirtear na gnáthrialacha maidir le haidiacht atá ar lorg ainmfhocal sa ghinideach i bhfeidhm ar na haidiachtaí a ghabhann leo, e.g., <i>éadaí an cheathrair bhig</i>; <i>meitheal ochtair dhíograisigh</i>; <i>airgead an dáréag chlúitigh</i> (féach <a href="./chapter4.html">Caibidil 4</a>).</>;
  },
  get "OtherCasesFootnote"(){
    return "Nó sa ghairmeach, sa chuspóireach nó sa tabharthach.";
  },
  get "9-4-3-title"(){
    return "Ainmfhocail leis na hUimhreacha Pearsanta";
  },
  get "9-4-3-a-title"(){
    return "Foirm na huimhreach pearsanta agus foirm an ainmfhocail ar a lorg";
  },
  get "9-4-3-a-i-p"(){
    return <>Má tá an focal <i>beirt</i>, agus é san ainmneach*, á cháiliú le hainmfhocal a thagann ina dhiaidh, is sa ghinideach iolra a bhíonn an t&#x2011;ainmfhocal agus é séimhithe (seachas ainmfhocal a thosaíonn ar <i>d</i>, <i>t</i> nó <i>s</i>), e.g., <i>beirt chaptaen</i>; <i>beirt chumadóirí</i>; <i>beirt drumadóirí</i>; <i>ag beirt bhan</i>.</>;
  },
  get "9-4-3-a-ii-p"(){
    return <>Má tá an focal <i>beirt</i>, agus é sa ghinideach gan an t&#x2011;alt, á cháiliú le hainmfhocal a thagann ina dhiaidh, agus é ar lorg agus faoi réir ag ainmfhocal eile, ní théann athrú an ghinidigh ar an bhfocal <i>beirt</i> ach cuirtear séimhiú air agus bíonn an t&#x2011;ainmfhocal sa ghinideach iolra agus cuirtear séimhiú air (seachas ainmfhocal a thosaíonn ar <i>d</i>, <i>t</i> nó <i>s</i>), e.g., <i>moltaí bheirt chumadóirí</i>; <i>tuairimí bheirt chaptaen</i>; <i>obair bheirt saineolaithe</i>.</>;
  },
  get "9-4-3-a-iii-p"(){
    return <>Má tá an focal <i>beirt</i>, agus é sa ghinideach ach gan an t&#x2011;alt a bheith roimhe, á cháiliú le hainmfhocal a thagann ina dhiaidh, agus é ar lorg agus faoi réir ag réamhfhocal comhshuite nó ainm briathartha, ní dhéantar aon athrú ar an bhfocal <i>beirt</i> agus bíonn an t&#x2011;ainmfhocal sa ghinideach iolra agus cuirtear séimhiú air (seachas ainmfhocal a thosaíonn ar <i>d</i>, <i>t</i> nó <i>s</i>), e.g., <i>le haghaidh beirt mholtóirí</i>; <i>ag moladh beirt saighdiúirí</i>.</>;
  },
  get "9-4-3-a-iv-p"(){
    return <>Is é ginideach iolra an ainmfhocail a leanann na huimhreacha pearsanta ó <i>triúr</i> go <i>dháréag</i> (ach féach <a href="#sec_9_4_1_b">9.4.1(b)</a>) nuair atá daoine á gcomhaireamh, e.g., <i>triúr bádóirí</i>; <i>ceathrar múinteoirí</i>.</>;
  },
  get "9-4-3-a-v-p"(){
    return <>Ní théann athrú an ghinidigh ar uimhreacha pearsanta ó <i>triúr</i> go <i>dháréag</i> (ach féach <a href="#sec_9_4_1_b">9.4.1(b)</a>) má tá ainmfhocal ar a lorg, e.g., <i>athair ceathrar mac</i>; <i>máthair cúigear iníonacha</i>; <i>geansaithe dháréag peileadóirí</i>.</>;
  },
  get "Table9S-caption"(){
    return "Na hUimhreacha Pearsanta &mdash; Foirm an Ainmfhocail ar lorg Uimhir Phearsanta";
  },
  get "Table9S-footnote"(){
    return <>Tabhair faoi deara go gcaitear le 11 mar a chaitear leis i gcóras na mbunuimhreacha, agus nach gcuirtear an t&#x2011;ainmfhocal sa ghinideach (féach <a href="#sec_9_3_6_a">9.3.6(a)</a>).</>;
  },
  get "9-4-3-b-title"(){
    return <>an t&#x2011;alt roimh uimhir phearsanta a bhfuil ainmfhocal ar a lorg</>;
  },
  get "9-4-3-b-i-p"(){
    return <>Is é foirm uatha an ailt a úsáidtear roimh na huimhreacha pearsanta. Is firinscneach dóibh go léir ach amháin <i>beirt</i>.</>;
  },
  get "9-4-3-b-ii-p"(){
    return <>Ní shéimhítear <i>dháréag</i> i ndiaidh an ailt, <i>aon</i> ná <i>céad</i>, e.g., <i>an Dáréag Aspal</i>; <i>gach aon dáréag scoláirí</i>; <i>an chéad dáréag múinteoirí a cháiligh</i>.</>;
  },
  get "9-4-3-b-iii-p"(){
    return <>Má tá an focal <i>beirt</i>, agus é sa ghinideach ar lorg an ailt, á cháiliú le hainmfhocal a thagann ina dhiaidh, is sa ghinideach iolra a bhíonn an t&#x2011;ainmfhocal agus ní shéimhítear é (ach téann athrú an ghinidigh ar an bhfocal <i>beirt</i>), e.g., <i>tuairimí na beirte múinteoirí</i>; <i>nótaí na beirte saineolaithe</i>; <i>tuairiscí na beirte comhfhreagraithe</i>; <i>tithe na beirte deartháireacha</i>.</>;
  },
  get "9-4-3-b-iv-p"(){
    return <>Ní théann athrú foirme sa ghinideach ar na huimhreacha pearsanta ó <i>triúr</i> go <i>dháréag</i> ná ar an ainmfhocal ar a lorg, ach imríonn an t&#x2011;alt ar thúslitir na n&#x2011;uimhreacha pearsanta mar a d&rsquo;imreodh ar ghinideach aon ainmfhocail uatha eile, e.g., <i>cótaí an cheathrar daltaí</i>; <i>oifig an tseachtar tréidlianna</i>; <i>Scoil an tSeachtar Laoch</i>.</>;
  },
  get "Table9T-caption"(){
    return "Na hUimhreacha Pearsanta &mdash; An tAlt roimh Uimhir Phearsanta a bhfuil Ainmfhocal ar a lorg";
  },
  get "Table9T-footnote"(){
    return <>Tabhair faoi deara go gcaitear le 11 mar a chaitear leis i gcóras na mbunuimhreacha, agus nach gcuirtear an t&#x2011;ainmfhocal sa ghinideach (féach <a href="#sec_9_3_7_a_i">9.3.7(a)(i)</a>).</>;
  },
  get "9-4-3-c-title"(){
    return "An aidiacht le hainmfhocal atá ar lorg uimhir phearsanta";
  },
  get "9-4-3-c-i-p"(){
    return <>Ar lorg na huimhreach pearsanta <i>beirt</i>, is san ainmneach iolra a bhíonn an aidiacht agus séimhítear í, e.g., <i>beirt bhan cháiliúla</i>; <i>beirt ghirseach chruthaitheacha</i>; <i>beirt amhránaithe cháiliúla</i>; <i>beirt mhúinteoirí shealadacha</i>.</>;
  },
  get "9-4-3-c-ii-p"(){
    return <>Má tá an focal <i>beirt</i>, agus é sa ghinideach ach gan an t&#x2011;alt a bheith roimhe, á cháiliú le <i>hainmfhocal</i> + <i>aidiacht</i> a thagann ina dhiaidh, agus é ar lorg agus faoi réir ag ainmfhocal eile, bíonn an aidiacht atá á cháiliú san iolra agus í séimhithe, e.g., <i>moltaí bheirt léachtóirí acadúla</i>; <i>tuairimí bheirt iriseoirí sheanbhunaithe</i>; <i>saothar bheirt ghramadóirí chliste</i>.</>;
  },
  get "9-4-3-c-iii-p"(){
    return <>Má tá an focal <i>beirt</i>, agus é sa ghinideach ach gan an t&#x2011;alt a bheith roimhe, á cháiliú le <i>hainmfhocal</i> + <i>aidiacht</i> a thagann ina dhiaidh, agus é ar lorg agus faoi réir ag réamhfhocal comhshuite nó ainm briathartha, bíonn an aidiacht atá á cháiliú san iolra agus í séimhithe, e.g., <i>le haghaidh beirt mholtóirí dheasa</i>; <i>ag moladh beirt chumadóirí shamhlaíocha</i>.</>;
  },
  get "9-4-3-c-iv-p"(){
    return <>Ar lorg na n&#x2011;uimhreacha pearsanta <i>triúr</i> go <i>dháréag</i> (ach féach <a href="#sec_9_4_1_b">9.4.1(b)</a>), is sa ghinideach iolra a bhíonn an aidiacht a ghabhann leis an ainmfhocal, e.g., <i>triúr scoláirí díograiseacha</i>; <i>ceathrar girseach éirimiúil</i>; <i>bád an triúr bádóirí tuirseacha</i>; <i>airgead an deichniúr ban bríomhar</i>. Léirítear samplaí leis an alt agus gan an t&#x2011;alt sa tábla ina dhiaidh seo.</>;
  },
  get "Table9U-caption"(){
    return "Na hUimhreacha Pearsanta &mdash; An Aidiacht le hAinmfhocal atá ar lorg Uimhir Phearsanta";
  },
  get "Table9U-footnote"(){
    return <>Tabhair faoi deara go gcaitear le 11 mar a chaitear leis i gcóras na mbunuimhreacha, agus nach gcuirtear an t&#x2011;ainmfhocal sa ghinideach (féach <a href="#sec_9_3_6_a">9.3.6(a)</a> agus <a href="#sec_9_3_7_a_i">9.3.7(a)(i)</a>).</>;
  },
  get "9-4-4-title"(){
    return "Na hUimhreacha Pearsanta a Scríobh ina bhFigiúirí";
  },
  get "9-4-4-a-p"(){
    return <>Moltar na huimhreacha pearsanta ó 1&ndash;12 a scríobh ina bhfocail seachas ina bhfigiúirí. Má dhéantar iad a scríobh ina bhfigiúirí, is mar bhunuimhreacha a chaitear leo, e.g., <i>2 bhean bheaga</i>, <i>4 bhádóir cháiliúla</i>, <i>7 bhfeirmeoir shaibhre</i> (féach <a href="#sec_9_3_8">9.3.8</a>).</>;
  },
  get "9-4-4-b-p"(){
    return <>Úsáidtear córas na mbunuimhreacha chun líon daoine os cionn <i>dháréag</i> a chomhaireamh. Féach <a href="#sec_9_3_1">9.3.1</a> le haghaidh cur síos ar chóras na mbunuimhreacha ó 1&ndash;19, e.g., <i>trí bhean déag</i>; <i>ceithre ghirseach déag ghalánta</i>; <i>17 mbádóir</i>; <i>19 bhfear ocracha</i>; agus féach <a href="#sec_9_3_10">9.3.10</a> le haghaidh cur síos ar chóras na mbunuimhreacha os cionn 20, e.g., <i>trí bhean arda is caoga</i>; <i>49 ngirseach ghalánta</i>.</>;
  },
  get "9-4-5-title"(){
    return "Na hUimhreacha Pearsanta &mdash; An Córas Simplithe";
  },
  get "9-4-5-p"(){
    return <>Is féidir córas simplithe a úsáid leis na bunuimhreacha agus leis na huimhreacha pearsanta os cionn fiche. Féach <a href="#sec_9_3_10_c">9.3.10(c)</a> le haghaidh cur síos ar an gCóras Simplithe sin, e.g., <i>fiche a cúig fear mór</i>; <i>tríocha a sé bean shaibhir</i>; <i>46 bádóir cumasach</i>; <i>56 girseach chróga</i>.</>;
  },
  get "9-5-title"(){
    return "An Orduimhir";
  },
  get "9-5-p"(){
    return "Is le horduimhir a chuirtear ionad ruda nó duine i sraith in iúl.";
  },
  get "9-5-1-title"(){
    return "An Orduimhir 1";
  },
  get "9-5-1-a-p"(){
    return <>Is féidir an orduimhir <i>céad</i> (<i>an chéad</i>) a úsáid le hainmfhocal uatha nó iolra. Úsáidtear an t&#x2011;alt uatha nuair atá ainmfhocal uatha ar a lorg, e.g., <i>an chéad chaibidil</i>, agus an t&#x2011;alt iolra nuair atá ainmfhocal iolra ar a lorg, e.g., <i>na chéad chaibidlí</i>.</>;
  },
  get "9-5-1-b-p"(){
    return <>Bíonn séimhiú ar an orduimhir <i>céad</i> i ndiaidh an ailt, e.g., <i>an chéad leabhar</i>; <i>na chéad rialacha</i>, ach ní bhíonn séimhiú uirthi:</>;
  },
  get "9-5-1-b-i-p"(){
    return <>sna cásanna a luaitear i <a href="./chapter1.html">gCaibidil 1</a> ina mbíonn urú i ndiaidh an ailt sa tuiseal tabharthach, e.g., <i>ar an gcéad duine</i>; <i>leis an gcéad cheadúnas</i>;</>;
  },
  get "9-5-1-b-ii-p"(){
    return <>nuair a úsáidtear <i>céad</i> mar réimír in ainmfhocal firinscneach nó in ainmfhocal san iolra, e.g., <i>céadainm</i>, <i>an céadainm</i>; <i>Céad-Aire</i>, <i>an Céad-Aire</i>; <i>céadonóracha</i>, <i>na céadonóracha</i>; (ach <i>céadghairm</i>, <i>an chéadghairm</i>; <i>céadsearc</i>, <i>an chéadsearc</i>; de réir ghnáthrialacha an ainmfhocail bhaininscnigh); nó mar réimír i mbriathar, e.g., <i>céadbhlaisim</i>, <i>céadbhlaisfidh sé</i> (ach <i>ón uair a chéadbhlais mé é</i>, de réir ghnáthrialacha na mbriathra san aimsir chaite, modh táscach);</>;
  },
  get "9-5-1-b-iii-p"(){
    return <>ar lorg na n&#x2011;aidiachtaí sealbhacha a (baininscneach, tríú pearsa uatha), e.g., <i>a céad cheolchoirm agus ár</i>, <i>bhur</i>, <i>a</i> (tríú pearsa iolra), e.g., <i>ár gcéad teach</i>; <i>bhur gcéad charr</i>; <i>a gcéad mhac</i>.</>;
  },
  get "9-5-1-c-p"(){
    return <>Cuireann an orduimhir <i>céad</i> séimhiú ar an ainmfhocal nó ar an aidiacht ar a lorg i ngach tuiseal, e.g., <i>an chéad fhear</i>; <i>an chéad bhean</i>; <i>na chéad cheithre ghloine</i>; <i>na chéad bhlianta; clann an chéad fhir</i>; <i>mac na chéad mhná</i>; <i>lucht na chéad bhliana</i>; mura <i>d</i>, <i>t</i> nó <i>s</i> a thúslitir, e.g., <i>na chéad daoine</i>, <i>an chéad saighdiúir</i>; <i>an chéad turas</i>; <i>ceadúnas an chéad tógálaí</i>. (Féach <a href="#sec_9_5_4">9.5.4</a> chun tuilleadh eolais a fháil ar orduimhreacha sa tuiseal ginideach.)</>;
  },
  get "9-5-1-d-p"(){
    return <>Úsáidtear an orduimhir <i>céad</i> i gcás 1, ach i gcás na n&#x2011;orduimhreacha eile a chríochnaíonn ar 1, úsáidtear an focal <i>aonú</i>. Sa tuiseal ainmneach, cuirtear <i>t&#x2011;</i> roimh <i>aonú</i> i ndiaidh an ailt, e.g., <i>an t&#x2011;aonú lá is tríocha</i>.</>;
  },
  get "9-5-2-title"(){
    return "Na hOrduimhreacha 1&ndash;100 &mdash; Eolas Ginearálta";
  },
  get "Table9V-caption"(){
    return <>{ga_IE["TheOrdinalNumbers"]} 1&ndash;100</>;
  },
  get "Table9W-caption"(){
    return <>{ga_IE["TheOrdinalNumbers"]} 100+</>;
  },
  get "9-5-2-a-p"(){
    return <>Is é foirm uatha an ailt a bhíonn roimh na horduimhreacha (seachas an orduimhir 1, féach <a href="#sec_9_5_1">9.5.1</a>), e.g., <i>an dara bean</i>; <i>an dóú teach</i>; <i>an tríú tuarascáil</i>; <i>an ceathrú bean is fiche</i>; <i>an cúigiú comhartha is seasca</i>.</>;
  },
  get "9-5-2-b-p"(){
    return <>I ndiaidh na horduimhreach <i>dara</i> agus na n&#x2011;orduimhreacha go léir dar críoch <i>-ú</i>, cuirtear <i>h</i> roimh ainmfhocal dar tús guta, e.g., <i>an dara hoíche</i>; <i>an tríú hurlár</i>; <i>an séú hóstán déag</i>; <i>an t&#x2011;ochtú hurlár is tríocha</i>.</>;
  },
  get "9-5-2-c-p"(){
    return <>Bíonn an t&#x2011;alt roimh an gcéad uimhir san orduimhir de ghnáth, mura mbíonn aidiacht shealbhach nó <i>gach</i> roimpi, e.g., <i>an tríú lá ach gach dara bliain</i>; <i>a tríú bliain</i>.</>;
  },
  get "9-5-2-d-p"(){
    return <>Úsáidtear córas a leanann comhréir na mbunuimhreacha (An Córas Seanbhunaithe) chun ionad ruda i sraith faoi bhun 100 a chur in iúl, e.g., <i>an dara hábhar is tríocha</i>; <i>an ceathrú cathaoir is caoga</i>; <i>an seachtú hoíche is seachtó</i>; <i>an t&#x2011;ochtú madra is nócha</i>.</>;
  },
  get "9-5-2-e-p"(){
    return <>Ní chuirtear séimhiú ar an bhfocal <i>déag</i> san orduimhir, e.g., <i>an tríú duine déag</i>; <i>an t&#x2011;ochtú bosca déag</i>; <i>an naoú leabhar déag</i>.</>;
  },
  get "TheOrdinalNumbers"(){
    return "Na hOrduimhreacha";
  },
  get "9-5-3-title"(){
    return "Na hOrduimhreacha 100+";
  },
  get "9-5-3-a-p"(){
    return <>Úsáidtear córas atá bunaithe ar chóras na maoluimhreacha chun ionad ruda i sraith os cionn 100 a chur in iúl, e.g., <i>céad a ceathair &mdash; an céad is ceathrú feirmeoir</i>; <i>cúig chéad seasca a ceathair &mdash; an cúig chéad seasca is ceathrú heitleán</i>; <i>seacht míle, ceithre chéad a naoi déag &mdash; an seacht míle, ceithre chéad is naoú hóstán déag</i>.</>;
  },
  get "9-5-3-b-p"(){
    return <>Cuirtear séimhiú ar an bhfocal <i>déag</i> i ndiaidh na huimhreach <i>míle</i>, e.g., <i>an trí mhíle dhéag is ceathrú hoileán</i>.</>;
  },
  get "9-5-4-title"(){
    return "Na hOrduimhreacha sa Tuiseal Ginideach";
  },
  get "9-5-4-a-p"(){
    return <>I gcás na horduimhreach <i>céad</i>, díochlaontar an t&#x2011;ainmfhocal ina dhiaidh agus géilleann an t&#x2011;alt d&rsquo;uimhir agus d&rsquo;inscne an ainmfhocail, e.g., <i>an chéad fhear</i>, <i>clann an chéad fhir</i>; <i>an chéad bhean</i>, <i>clann na chéad mhná</i>; <i>na chéad cheithre bliana</i>, <i>tús na chéad cheithre bliana</i>; <i>na chéad chúig charr</i>, <i>plátaí clárúcháin na chéad chúig charr</i>; <i>na chéad taiscéalaithe</i>, <i>eachtraí na chéad taiscéalaithe</i>.</>;
  },
  get "9-5-4-b-p"(){
    return <>I gcás na n&#x2011;orduimhreacha eile go léir, ní dhéantar díochlaonadh riamh ar an ainmfhocal, e.g., <i>mac an dara bean</i>; <i>mac an dara fear</i>; <i>eagraíocht tríú tír</i>; <i>oideachas tríú leibhéal</i>; <i>clúdach an cheathrú tuarascáil</i>; <i>deireadh an fichiú haois</i>; <i>tús an aonú haois is fiche</i>.</>;
  },
  get "9-5-4-c-p"(){
    return <>Cailltear an <i>t&#x2011;</i> roimh <i>aonú</i>, <i>ochtú</i>, <i>ochtódú</i>, etc., e.g., <i>an t&#x2011;aonú bliain déag</i>, <i>tús an aonú bliain déag</i>; <i>an t&#x2011;ochtú haois déag</i>, <i>tús an ochtú haois déag</i>; <i>an t&#x2011;ochtódú cruinniú</i>, <i>miontuairiscí an ochtódú cruinniú</i>.</>;
  },
  get "9-5-4-d-p"(){
    return <>Imríonn an t&#x2011;alt ar thúslitir na horduimhreach mar a d&rsquo;imreodh ar ainmfhocal firinscneach, e.g., <i>bróga an chúigiú girseach</i>; <i>seoladh an cheathrú teach is daichead</i>; ach ní dhéantar athrú tosaigh ar <i>f</i> ná <i>s</i>, e.g., <i>lucht an seachtú hoifig</i>; <i>bonn an fichiú himreoir</i>; <i>deireadh an seascadú comhdháil</i>.</>;
  },
  get "Table9X-caption"(){
    return "Na hOrduimhreacha sa Tuiseal Ginideach";
  },
  get "Table9X-header"(){
    return "Na hOrduimhreacha sa Tuiseal Ginideach";
  },
  get "9-5-5-title"(){
    return "Aidiachtaí leis na hOrduimhreacha";
  },
  get "9-5-5-p"(){
    return <>Díochlaontar an aidiacht de réir an ainmfhocail, e.g., <i>an chéad bhean mhór</i>; <i>an chéad fhear mór</i>; <i>seol an chéad bháid ghoirm</i>; <i>deireadh na chéad tuarascála cuimsithí</i>; <i>na chéad scoláirí maithe</i>; <i>eachtraí na chéad taiscéalaithe cáiliúla</i>; <i>an tríú fear mór is tríocha</i>; <i>cóta an daicheadú bean mhór</i>.</>;
  },
  get "9-5-6-title"(){
    return "Na hOrduimhreacha a Scríobh ina bhFigiúirí";
  },
  get "9-5-6-a-p"(){
    return <>Scríobhtar orduimhreacha ina bhfigiúirí trí <i>ú</i> a chur i ndiaidh an fhigiúir, e.g., <i>an 1ú</i>, <i>an 2ú</i>, <i>an 19ú</i>, <i>an 123ú</i>.</>;
  },
  get "9-5-6-b-p"(){
    return <>Is ionann na rialacha a bhaineann le horduimhreacha a scríobh ina bhfigiúirí agus na rialacha a bhaineann le horduimhreacha a scríobh ina bhfocail (féach <a href="#sec_9_5_1">9.5.1</a> go <a href="#sec_9_5_5">9.5.5</a> roimhe seo). Tabhair faoi deara go gcuirtear <i>h</i> roimh ghuta agus nach gcuirtear séimhiú i ndiaidh 1ú toisc gur <i>aonú</i> atá i gceist (seachas <i>céad</i>).</>;
  },
  get "9-6-title"(){
    return "An Codán";
  },
  get "9-6-p"(){
    return <>Cainníocht uimhriúil nach slánuimhir is ea an codán, e.g., <i>1/4 &mdash; ceathrú</i>; <i>2/3 &mdash; dhá thrian</i>; <i>5/6 &mdash; cúig shéú</i>.</>;
  },
  get "9-6-1-title"(){
    return "Comhdhéanamh an Chodáin";
  },
  get "9-6-1-a-p"(){
    return <>Bíonn dhá chuid sa ghnáthchodán: <i>an t&#x2011;uimhreoir</i> agus <i>an t&#x2011;ainmneoir</i>. Cuirtear an t&#x2011;uimhreoir os cionn na líne agus an t&#x2011;ainmneoir faoi bhun na líne, e.g., i gcás 6/7, is é 6 an t&#x2011;uimhreoir agus is é 7 an t&#x2011;ainmneoir.</>;
  },
  get "9-6-1-b-p1"(){
    return <>Baintear leas as na horduimhreacha chun an t&#x2011;ainmneoir a chur in iúl seachas i gcás na bhfocal <i>leath</i> agus <i>trian</i>.</>;
  },
  get "9-6-1-b-p2"(){
    return <>Tabhair faoi deara go n&#x2011;úsáidtear an fhoirm speisialta iolra <i>treana</i> den ainmfhocal <i>trian</i> ar lorg na n&#x2011;uimhreacha 3&ndash;10. Fágtar an t&#x2011;ainmfhocal sin lom i ndiaidh <i>trí</i>, <i>ceithre</i>, <i>cúig</i>, <i>sé</i>, e.g., <i>3/3 &mdash; trí treana</i>; <i>4/3 &mdash; ceithre treana</i>; agus uraítear é i ndiaidh <i>seacht</i>, <i>ocht</i>, <i>naoi</i>, <i>deich</i>, e.g., <i>9/3 &mdash; naoi dtreana</i>; <i>10/3 &mdash; deich dtreana</i>.</>;
  },
  get "9-6-1-c-p"(){
    return <>I gcás gur uimhir idir 11&ndash;19 an t&#x2011;ainmneoir, úsáidtear leagan a dhíorthaítear ón orduimhir, e.g., <i>4/13 &mdash; ceithre thrídéagú</i>; <i>6/15 &mdash; sé chúigdéagú</i>.</>;
  },
  get "9-6-1-d-p"(){
    return <>I gcás gur uimhir os cionn 20 an t&#x2011;ainmneoir, is ionann ord na bhfocal agus ord na bhfocal sna maoluimhreacha ach go gcuirtear orduimhir in ionad na maoluimhreach ag an deireadh, e.g., <i>1/30 &mdash; tríochadú</i>; <i>4/97 &mdash; ceithre nócha seachtú</i>.</>;
  },
  get "9-6-1-e-p"(){
    return <>Scríobhtar codáin ar roinnt bealaí éagsúla, mar a léirítear thíos. Is í rogha <a href="#sec_9_6_1_e_i">(i)</a> an struchtúr is minice a úsáidtear.</>;
  },
  get "9-6-1-e-i-p"(){
    return <>Is féidir leas a bhaint as dhá mhaoluimhir agus an réamhfhocal <i>ar</i> nó an réamhfhocal comhshuite <i>os cionn</i> eatarthu chun aon chodán a chur in iúl, e.g., <i>1/11 &mdash; a haon ar a haon déag</i>; <i>a haon os cionn a haon déag</i>; <i>7/8 &mdash; a seacht ar a hocht</i>; <i>a seacht os cionn a hocht</i>; <i>4/15 &mdash; a ceathair ar a cúig déag</i>; <i>a ceathair os cionn a cúig déag</i>; <i>33/57 &mdash; tríocha a trí ar chaoga a seacht</i>; <i>tríocha a trí os cionn caoga a seacht</i>; <i>136/82 &mdash; céad tríocha a sé ar ochtó dó</i>; <i>céad tríocha a sé os cionn ochtó dó</i>. Ní shéimhítear <i>fiche</i> i gcodáin, e.g., <i>3/24 &mdash; a trí ar fiche a ceathair</i>.</>;
  },
  get "9-6-1-e-ii-p"(){
    return <>Más 1 an t&#x2011;uimhreoir, is féidir an focal <i>cuid</i> a úsáid leis na horduimhreacha chun codáin a chur in iúl, e.g., <i>1/2 &mdash; leath</i>; <i>an leathchuid</i>; <i>1/3 &mdash; trian</i>; <i>an tríú cuid</i>; <i>1/11 &mdash; aondéagú</i>; <i>an t&#x2011;aondéagú cuid</i>. Is gnách an leagan le <i>cuid</i> a úsáid nuair is uimhir os cionn 20 an t&#x2011;ainmneoir, e.g., <i>1/27 &mdash; an fiche seachtú cuid</i>; <i>1/156 &mdash; an céad caoga séú cuid</i>. I gcás na ndeicheanna, áfach, is túisce a déarfaí <i>tríochadú</i>, etc. <i>ná an tríochadú cuid</i>.</>;
  },
  get "9-6-1-e-iii-p"(){
    return <>Má tá an t&#x2011;uimhreoir idir 2 agus 10, úsáidtear na bunuimhreacha agus foirm na horduimhreach (féach <a href="#sec_9_6_1_b">(b)</a>, <a href="#sec_9_6_1_c">(c)</a> agus <a href="#sec_9_6_1_d">(d)</a> roimhe seo) chun an codán a chur in iúl. Is gnáth-ainmfhocail iad na codáin agus leantar gnáthrialacha na mbunuimhreacha agus iad á gcomhaireamh, e.g., <i>7/8 &mdash; seacht n&#x2011;ochtú</i>; <i>4/15 &mdash; ceithre chúigdéagú</i>; ach ní shéimhítear <i>fichiú</i>, e.g., <i>3/20 &mdash; trí fichiú</i>.</>;
  },
  get "9-6-1-e-iv-p"(){
    return <>De rogha ar <a href="#sec_9_6_1_e_iii">(iii)</a> thuas, má tá an t&#x2011;uimhreoir idir 2 agus 10 is féidir an t&#x2011;ainmfhocal <i>ceann</i>/<i>cinn</i> a úsáid i dteannta an réamhfhocail de agus an leagain iolra den ainmneoir, e.g., <i>7/8 &mdash; seacht gcinn d&rsquo;ochtuithe</i>; <i>4/15 &mdash; ceithre cinn de chúigdéaguithe</i>;</>;
  },
  get "9-6-1-e-v-p"(){
    return <>Más mó ná 10 an t&#x2011;uimhreoir, is féidir maoluimhreacha a úsáid mar seo a leanas: <i>an t&#x2011;uimhreoir</i> (á lua mar mhaoluimhir) + <i>de</i> + <i>iolra an ainmneora</i>, e.g., <i>33/57 &mdash; tríocha a trí de chaoga seachtuithe</i>; <i>136/82 &mdash; céad tríocha a sé d&rsquo;ochtó dóithe</i>. Is fearr an leagan sin a úsáid nuair is mó ná 10 an t&#x2011;uimhreoir agus nuair is mó ná 20 an t&#x2011;ainmneoir.</>;
  },
  get "9-6-2-title"(){
    return "An tAinmneoir";
  },
  get "9-6-2-a-title"(){
    return "An tAinmneoir 2&ndash;19";
  },
  get "9-6-2-a-p"(){
    return <>Taispeántar sa tábla seo a leanas dhá rogha chun codáin a scríobh ar codáin iad ina bhfuil ainmneoir ó 2&ndash;19 agus an t&#x2011;uimhreoir 1.</>;
  },
  get "Table9Y-caption"(){
    return "Na Codáin &mdash; An tAinmneoir 2&ndash;19";
  },
  get "TheFraction"(){
    return "An Codán";
  },
  get "TheDenominator"(){
    return "An tAinmneoir";
  },
  get "TheFormWithCuid"(){
    return <>An Leagan le <i>cuid</i></>;
  },
  get "9-6-2-b-title"(){
    return "An tAinmneoir 20+";
  },
  get "9-6-2-b-p-1"(){
    return <>Tugtar samplaí sa tábla seo a leanas den tslí a ndéileáiltear le hainmneoirí os cionn 20 (seachas na deicheanna) nuair is 1 an t&#x2011;uimhreoir. Is gnách an leagan le <i>cuid</i> a úsáid i gcás codáin den sórt sin. Is ionann comhréir an leagain sin agus an chomhréir a úsáidtear sna maoluimhreacha ach go gcuirtear orduimhir in ionad na maoluimhreach ag an deireadh agus go bhfágtar an mhír uimhriúil <i>a</i> ar lár.</>;
  },
  get "Table9Z-caption"(){
    return "Na Codáin &mdash; An tAinmneoir 20+";
  },
  get "9-6-2-b-p-2"(){
    return <>Tabhair faoi deara gurb í an orduimhir a úsáidtear i gcás na ndeicheanna, e.g., <i>fichiú</i>, <i>céadú</i>, <i>míliú</i>, etc. agus nach gnách an leagan le <i>cuid</i> a úsáid leo, e.g., <i>1/30 &mdash; tríochadú</i>; <i>1/50 &mdash; caogadú</i>.</>;
  },
  get "9-6-3-title"(){
    return "An tUimhreoir";
  },
  get "9-6-3-a-title"(){
    return "An tUimhreoir 2&ndash;10";
  },
  get "9-6-3-a-i"(){
    return <>Leantar córas na mbunuimhreacha nuair is mó ná 1 an t&#x2011;uimhreoir toisc gur gnáth-ainmfhocail iad na hainmneoirí (eisceacht: ní shéimhítear <i>fichiú</i>, e.g., <i>trí fichiú</i>). Tugtar samplaí sa tábla seo a leanas de chodáin nuair is uimhir idir 2 agus 10 an t&#x2011;uimhreoir.</>;
  },
  get "Table9AA-caption"(){
    return "Na Codáin &mdash; An tUimhreoir 2&ndash;10";
  },
  get "9-6-3-a-ii"(){
    return <>De rogha air sin, is féidir an t&#x2011;ainmfhocal <i>ceann</i>/<i>cinn</i> a úsáid i dteannta an réamhfhocail de agus an leagain iolra den ainmneoir.</>;
  },
  get "Table9BB-caption"(){
    return <>Na Codáin &mdash; An tUimhreoir 2&ndash;10 &mdash; An Leagan le <i>ceann</i>/<i>cinn</i> agus an Réamhfhocal <i>de</i></>;
  },
  get "9-6-3-b-title"(){
    return "Na Codáin nuair is mó ná 10 an tUimhreoir";
  },
  get "9-6-3-b-p"(){
    return <>Nuair is mó ná 10 an t&#x2011;uimhreoir úsáidtear na maoluimhreacha mar seo a leanas: <i>an t&#x2011;uimhreoir</i> (á lua mar mhaoluimhir) + <i>de</i> + <i>iolra an ainmneora</i>.</>;
  },
  get "Table9CC-caption"(){
    return <>Nuair is mó ná 10 an t&#x2011;uimhreoir úsáidtear na maoluimhreacha mar seo a leanas: <i>an t&#x2011;uimhreoir</i> (á lua mar mhaoluimhir) + <i>de</i> + <i>iolra an ainmneora</i>.</>;
  },
  get "TheBareNumberModifiedBy"(){
    return "An Mhaoluimhir Móide";
  },
  get "9-6-4-title"(){
    return "Uimhreoirí agus Ainmneoirí Móra";
  },
  get "9-6-4-p"(){
    return <>Nuair is mó ná 10 an t&#x2011;uimhreoir agus nuair is mó ná 20 an t&#x2011;ainmneoir, is fearr an leagan leis an maoluimhir móide an réamhfhocal <i>de</i> agus iolra an ainmneora a úsáid. Is féidir freisin leas a bhaint as dhá mhaoluimhir agus an réamhfhocal <i>ar</i> nó an réamhfhocal comhshuite <i>os cionn</i> eatarthu chun codán a chur in iúl, e.g., <i>61/66 &mdash; seasca a haon ar sheasca a sé</i>; <i>seasca a haon os cionn seasca a sé</i>; <i>74/83 &mdash; seachtó a ceathair ar ochtó a trí</i>; <i>seachtó a ceathair os cionn ochtó a trí</i>; <i>437/500,043 &mdash; ceithre chéad tríocha a seacht ar chúig chéad míle daichead a trí</i>; <i>ceithre chéad tríocha a seacht os cionn cúig chéad míle daichead a trí</i>.</>;
  },
  get "Table9DD-caption"(){
    return "Na Codáin &mdash; Uimhreoirí agus Ainmneoirí Móra";
  },
  get "9-7-title"(){
    return "An Uimhir Dheachúlach";
  },
  get "9-7-a-p"(){
    return <>Is é córas na maoluimhreacha a úsáidtear i gcás uimhreacha deachúlacha, e.g., <i>1.7 &mdash; a haon ponc a seacht</i>; <i>22.4 &mdash; fiche a dó ponc a ceathair</i>; <i>84.22 &mdash; ochtó a ceathair ponc a dó a dó</i>.</>;
  },
  get "9-7-b-p"(){
    return <>Ní dhéantar infhilleadh ná athrú tosaigh ar ainmfhocal atá ar lorg uimhir dheachúlach, bíodh sí i bhfoirm focal nó figiúirí, e.g., <i>a haon ponc a dó gram</i>; <i>1.5 cileagram</i>; <i>7.4 méadar ciúbach</i>.</>;
  },
  get "9-8-title"(){
    return "Achoimre ar na hUimhreacha";
  },
  get "Table9EE-caption"(){
    return "Achoimre ar na hUimhreacha 1&ndash;19";
  },
  get "Tabel9EE-col4"(){
    return "Figiúr";
  },
  get "Table9EE-Row1"(){
    return "An Bhunuimhir ";
  },
  get "Table9EE-Row2"(){
    return "An Uimhir Phearsanta";
  },
  get "Table9EE-Row3"(){
    return "An Orduimhir";
  },
  get "Table9FF-caption"(){
    return "Achoimre ar na hUimhreacha 20+";
  },
  get "Table9FF-row1"(){
    return "An Bhunuimhir agus an Uimhir Phearsanta";
  },
  get "Table9FF-row2"(){
    return "An Orduimhir";
  },
  get "Table9FF-note-p"(){
    return "Tabhair faoi deara";
  },
  get "Table9FF-note-a-p"(){
    return "gurb é an Córas Seanbhunaithe amháin a úsáidtear le huimhreacha faoi bhun 20;";
  },
  get "Table9FF-note-b-p"(){
    return <>go moltar, i gcás an phróis, uimhreacha pearsanta suas go <i>dháréag</i> a scríobh ina bhfocail seachas ina bhfigiúirí.</>;
},
};
