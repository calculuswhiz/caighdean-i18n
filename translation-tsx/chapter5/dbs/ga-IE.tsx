import { ga_IE as ga_IE_Common } from "../../common/ga-IE";

export const ga_IE = {
  get "PresentTense"() {
    return "An Aimsir Láithreach";
  },
  get "OrdinaryPresentTense"() {
    return "An Aimsir Ghnáthláithreach";
  },
  get "PastTense"() {
    return "An Aimsir Chaite";
  },
  get "PastHabitualTense"() {
    return "An Aimsir Ghnáthchaite";
  },
  get "FutureTense"() {
    return "An Aimsir Fháistineach";
  },
  get "ConditionalMood"() {
    return "An Modh Coinníollach";
  },
  get "SubjunctiveMood"() {
    return "An Modh Foshuiteach";
  },
  get "PresentSubjunctiveMood"() {
    return "An Modh Foshuiteach Láithreach";
  },
  get "ImperativeMood"() {
    return "An Modh Ordaitheach";
  },
  get "IndicativeMood"() {
    return "An Modh Táscach";
  },
  get "VerbalNoun"() {
    return "An tAinm Briathartha";
  },
  get "VerbalAdjective"() {
    return "An Aidiacht Bhriathartha";
  },
  get "teidealNaCaibidle"() {
    return "An Briathar";
  },
  get "5-1-title"() {
    return "Na Briathra Rialta";
  },
  get "5-title"() {
    return <>{ga_IE_Common["Caibidil"]} 5 | {ga_IE["teidealNaCaibidle"]}</>;
  },
  get "5-1-1-p"() {
    return "Tá dhá réimniú ar na briathra rialta.";
  },
  get "5-1-2-p"() {
    return "Baineann leis an gCéad Réimniú:";
  },
  get "5-1-2-a-p"() {
    return <>briathra ó fhréamhacha aonsiollacha, e.g., <i>bog</i>, <i>bris</i>, <i>caith</i>, <i>mol</i>, lena n&#x2011;áirítear briathra a chríochnaíonn ar <i>-igh</i>, e.g., <i>breoigh</i>, <i>clóigh</i>, <i>cráigh</i>, <i>iaigh</i>, <i>luaigh</i>, <i>reoigh</i>, <i>sáigh</i>;</>;
  },
  get "5-1-2-b-p"() {
    return <>briathra ó fhréamhacha ilsiollacha a chríochnaíonn ar <i>-áil</i>, e.g., <i>sábháil</i>, <i>tarrtháil</i>, agus roinnt briathra ilsiollacha ar leith, e.g., <i>adhlaic</i>, <i>ceiliúir</i>, <i>gearán</i>, <i>seachaid</i>, <i>taispeáin</i>, <i>tíolaic</i>.</>;
  },
  get "5-1-3-p"() {
    return "Baineann leis an Dara Réimniú:";
  },
  get "5-1-3-a-p"() {
    return <>briathra ó fhréamhacha ilsiollacha a chríochnaíonn ar <i>-(a)igh</i>, e.g., <i>ceannaigh</i>, <i>imigh</i></>;
  },
  get "5-1-3-b-p"() {
    return <>briathra ó fhréamhacha ilsiollacha a chríochnaíonn ar <i>-(a)il</i>, <i>-(a)in</i>, <i>-(a)ir</i>, <i>-(a)is</i> agus a choimrítear sa réimniú, e.g., <i>agair</i>, <i>codail</i>, <i>cogain</i>, <i>iompair</i>, <i>tochail</i>;</>;
  },
  get "5-1-3-c-p"() {
    return <>líon beag briathra ar leith ar nós <i>foghlaim</i>, <i>fulaing</i>, <i>tarraing</i>, <i>tuirling</i>.</>;
  },
  get "5-1-4-p"() {
    return "Is ionann réimniú de ghnáth do bhriathar comhshuite agus don bhriathar ónar cumadh é:";
  },
  get "5-1-4-a-p"() {
    return <>tá <i>aisíoc</i>, <i>athdhear</i> agus <i>comhlíon</i> sa chéad réimniú ar aon dul le <i>íoc</i>, <i>dear</i> agus <i>líon</i>; agus</>;
  },
  get "5-1-4-b-p"() {
    return <>tá <i>athchomhairligh</i>, <i>comhdhlúthaigh</i> agus <i>comhshínigh</i> sa dara réimniú ar aon dul le <i>comhairligh</i>, <i>dlúthaigh</i> agus <i>sínigh</i>.</>;
  },
  get "5-1-5-title"() {
    return "An Modh Foshuiteach";
  },
  get "5-1-5-a-p"() {
    return <>Má tá feidhm ghuítheach ag abairt is sa mhodh foshuiteach a bhíonn sí i gcónaí, e.g., <i>Go raibh maith agat</i>; <i>Go dté tú slán</i>. Bíonn rogha idir an modh foshuiteach láithreach agus an aimsir fháistineach nuair is aimsir phríomha atá ag briathar an phríomhchlásail sna cásanna seo a leanas:</>;
  },
  get "5-1-5-a-i-p"() {
    return <>i ndiaidh na gcónasc ama <i>ach a</i>, <i>go</i>, <i>nó go</i>, <i>sula</i>, e.g., <i>Gheobhaimid an scéal ceart ach a dtaga</i> (<i>a dtiocfaidh</i>) <i>Pól</i>; <i>Ná beannaigh don diabhal go mbeannaí</i> (<i>go mbeannóidh</i>) <i>sé duit</i>; <i>Beidh tú ann nó go bhfása</i> (<i>nó go bhfásfaidh</i>) <i>coincleach ort</i>; <i>Beidh siad ann sula mbuailtear</i> (<i>sula mbuailfear</i>) <i>clog an aingil</i>;</>;
  },
  get "5-1-5-a-ii-p"() {
    return <>i ndiaidh na gcónasc aidhme <i>go</i>, <i>nó go</i>, e.g., <i>Féach é go bhfeice</i> (<i>go bhfeicfidh</i>) <i>tú</i>; <i>Suigh nó go raibh</i> (<i>nó go mbeidh</i>) <i>do scíth déanta agat</i>;</>;
  },
  get "5-1-5-a-iii-p"() {
    return <>i gcéadbheart oscailte i ndiaidh <i>mura</i>, e.g., <i>Mura gcuire</i> (<i>mura gcuirfidh</i>) <i>tú</i>, <i>ní bhainfidh tú</i>.</>;
  },
  get "5-1-5-b-i-p"() {
    return <>Is ionann foirmeacha an mhodha fhoshuitigh chaite agus foirmeacha na haimsire gnáthchaite spleáiche (ach amháin i gcás an bhriathair <i>bí</i>) (féach an Fhoirm Spleách, <a href="#sec_5_1_8">5.1.8</a>). Is féidir freisin foirm an mhodha choinníollaigh a úsáid thar ceann an fhoshuitigh chaite más san aimsir chaite, san aimsir ghnáthchaite nó sa mhodh coinníollach atá an príomhchlásal, e.g., <i>Tháinig</i> (<i>thagadh</i>, <i>thiocfadh</i>) <i>sí isteach sula bhfeictí</i> (<i>bhfeicfí</i>) <i>í</i>. I gcás an bhriathair <i>bí</i> is ionann foirmeacha don mhodh foshuiteach caite agus don mhodh coinníollach.</>;
  },
  get "5-1-5-b-ii-p"() {
    return <>Sna táblaí sa chaibidil seo, léirítear an modh foshuiteach láithreach leis an mír <i>go</i>. Bíodh go leanann urú an mhír sin agus roinnt eile, ní hamhlaidh i gcás gach míre a ghabhann leis an modh foshuiteach. Séimhiú a leanann <i>nár</i>, e.g., <i>Nár fhana sé i bhfad</i>.</>;
  },
  get "5-1-6-title"() {
    return "An Mhír Dhiúltach";
  },
  get "5-1-6-p"() {
    return <>Is í <i>ní</i> (<i>níor</i>) an mhír dhiúltach agus léirítear í sna táblaí ina dtugtar an fhoirm dhiúltach.</>;
  },
  get "5-1-7-title"() {
    return "An Fhoirm Neamhspleách";
  },
  get "5-1-7-p"() {
    return <>Is í an fhoirm neamhspleách an fhoirm den bhriathar a úsáidtear i bpríomhchlásal ráiteasach dearfach, e.g., <i>bhí mé</i>; <i>ceannóidh sé</i>; <i>mholfadh sí</i>. Mura bhfuil a mhalairt ráite, is í an fhoirm neamhspleách a thugtar sa réimniú sa chuid eile den chaibidil seo, ach amháin sa Mhodh Foshuiteach Láithreach.</>;
  },
  get "5-1-8-title"() {
    return "An Fhoirm Spleách";
  },
  get "5-1-8-p"() {
    return <>Is í an fhoirm spleách a leanann na cónaisc, na forainmneacha coibhneasta agus na míreanna briathartha seo: <i>a/ar</i> (= an mhír choibhneasta), <i>a/ar</i> (= <i>an méid a/ar</i>), <i>an/ar</i>, <i>cá/cár</i>, <i>dá/dár</i>, (<i>de</i> nó <i>do</i> + <i>a</i> (<i>ar</i>)) agus <i>dá</i> (coinníollach), <i>go/gur</i>, <i>mura/murar</i>, <i>nach/nár</i>, <i>ní/níor</i>, <i>sula/sular</i> (féach <a href="./chapter10.html#sec_10_4_2">10.4.2</a> agus <a href="./chapter10.html#sec_10_8_2">10.8.2</a>).</>;
  },
  get "5-1-8-note"() {
    return <>San aimsir chaite amháin a úsáidtear na leaganacha a chríochnaíonn ar <i>-r</i> thuas (ach féach <a href="./chapter5.html#sec_5_4_5">5.4.5</a>).</>;
  },
  get "5-1-9-title"() {
    return <>Aimsir an Bhriathair i gcás <i>má</i> agus <i>nuair</i></>;
  },
  get "5-1-9-p"() {
    return <>Is í an aimsir ghnáthláithreach a leanann <i>má</i> chun coinníoll sa todhchaí a chur in iúl, e.g., <i>Déanfaidh mé um thráthnóna é má bhíonn deis agam</i>. Is í an aimsir fháistineach a leanann <i>nuair</i> má táthar ag trácht ar rud atá le tarlú amach anseo, e.g., <i>Glan é nuair a thiocfaidh tú isteach amárach</i>.</>;
  },
  get "5-1-10-title"() {
    return <><i>Muid</i></>;
  },
  get "5-1-10-p"() {
    return <>Is féidir <i>muid</i> a úsáid leis an bhfoirm scartha den bhriathar sa chéad phearsa iolra de rogha ar na foirmeacha táite den bhriathar (a thugtar sna táblaí) i ngach uile mhodh agus aimsir. Tá comhstádas ag an bhfoirm scartha <i>muid</i> agus ag na foirmeacha táite den bhriathar sa chéad phearsa iolra.</>;
  },
  get "Table5A-caption"() {
    return <>An Fhoirm Scartha <i>muid</i></>;
  },
  get "Table5A-col1"() {
    return "An Aimsir/Modh";
  },
  get "Table5A-col2"() {
    return <>An Fhoirm Scartha + <i>muid</i></>;
  },
  get "Table5A-col3"() {
    return "An Fhoirm Tháite den Bhriathar";
  },
  get "5-2-title"() {
    return "An Chéad Réimniú";
  },
  get "5-2-1-title"() {
    return <>Briathra ó fhréamhacha aonsiollacha a chríochnaíonn ar chonsan seachas <i>-gh</i></>;
  },
  get "Table5B-caption"() {
    return <>An Chéad Réimniú &#8212; Réimniú an Bhriathair <i>mol</i></>;
  },
  get "Table5C-caption"() {
    return <>An Chéad Réimniú &#8212; Réimniú an Bhriathair <i>bris</i></>;
  },
  get "Table5C-Note"() {
    return <>Séimhítear an briathar neamhspleách rialta sa mhodh táscach, aimsir chaite (seachas an saorbhriathar) agus aimsir ghnáthchaite, agus sa mhodh coinníollach. Tá tuilleadh eolais in <a href="./chapter10.html#sec_10_4">10.4</a> faoi na cásanna eile ina séimhítear an briathar spleách agus neamhspleách agus pléitear na cásanna ina n&#x2011;uraítear an briathar in <a href="./chapter10.html#sec_10_8">10.8</a>.</>;
  },
  get "5-2-1-a-p"() {
    return <>Is ar an gcuma chéanna le <i>mol</i> a réimnítear briathra rialta ó fhréamhacha aonsiollacha a chríochnaíonn ar chonsan leathan, agus is ar an gcuma chéanna le <i>bris</i> a réimnítear briathra rialta ó fhréamhacha aonsiollacha a chríochnaíonn ar chonsan caol.</>;
  },
  get "5-2-1-b-p"() {
    return <>Má ghabhann fréamh a chríochnaíonn ar <i>-t</i> nó <i>-th</i> (e.g., <i>at</i>, <i>loit</i>, <i>caith</i>, <i>leath</i>) foirceann dar tús <i>-t</i> (e.g., <i>-tar/-tear</i>, <i>-taí/-tí</i>, <i>-tá/-teá</i>, <i>-ta/-te</i>), déantar <i>-t-</i> den <i>-t(h)t-</i>:</>;
  },
  get "5-2-1-b-Table-col1"() {
    return <>Críochnaíonn ar <i>-t(h)</i> leathan</>;
  },
  get "5-2-1-b-Table-col2"() {
    return <>Críochnaíonn ar <i>-t(h)</i> caol</>;
  },
  get "5-2-1-c-p"() {
    return <>Má ghabhann fréamh a chríochnaíonn ar <i>-bh</i> nó <i>-mh</i> (e.g., <i>gabh</i>, <i>ríomh</i>) foirceann dar tús <i>-th-</i> (e.g., <i>-tha</i> san aidiacht bhriathartha), déantar <i>-f-</i> den <i>-bhth-</i> nó den <i>-mhth-</i>:</>;
  },
  get "EndsWith"() {
    return "Críochnaíonn ar";
  },
  get "5-2-1-d-p"() {
    return <>Coinnítear <i>-bh</i>, <i>-mh</i> agus <i>-th</i> roimh <i>-f-</i>, e.g., <i>scríobhfaí</i>, <i>ríomhfá</i>, <i>chaithfeá</i>:</>;
  },
  get "5-2-2-title"() {
    return "Briathra ó Fhréamhacha Ilsiollacha";
  },
  get "Table5D-caption"() {
    return <>An Chéad Réimniú &mdash; Réimniú an Bhriathair <i>sábháil</i></>;
  },
  get "Table5D-note"() {
    return <>Maidir le briathra a chríochnaíonn ar <i>-áil</i>, tabhair faoi deara go mbíonn na leaganacha le <i>-t-</i> caol, e.g., <i>athchúrsáiltear</i>, <i>d&rsquo;athchúrsáiltí</i>, <i>athchúrsáilte</i>; <i>sábháiltear</i>, <i>shábháiltí</i>, <i>sábháilte</i>, ach go mbíonn na leaganacha le <i>-f-</i> leathan, e.g., <i>athchúrsálfar</i>, <i>d&rsquo;athchúrsálfaí</i>; <i>sábhálfar</i>, <i>shábhálfaí</i>.</>;
  },
  get "Table5E-caption"() {
    return <>An Chéad Réimniú &mdash; Réimniú an Bhriathair <i>tíolaic</i></>;
  },
  get "5-2-2-tables-col1"() {
    return "An Fhréamh";
  },
  get "5-2-2-tables-col2"() {
    return "An Chéad Phearsa Uatha <br /> An Aimsir Láithreach";
  },
  get "5-2-2-tables-col3"() {
    return "An tAinm Briathartha";
  },
  get "5-2-2-tables-col4"() {
    return "An Aidiacht Bhriathartha";
  },
  get "5-2-2-a-p"() {
    return <>Briathra a réimnítear ar nós <i>sábháil</i>:</>;
  },
  get "5-2-2-b-p"() {
    return <>Briathra a réimnítear ar nós <i>tíolaic</i>:</>;
  },
  get "5-2-2-c-p"() {
    return <>Briathra a choinnítear caol tríd síos (gan an t&#x2011;ainm briathartha a áireamh) ina réimniú:</>;
  },
  get "5-2-2-d-p"() {
    return "Briathra a choinnítear leathan tríd síos ina réimniú:";
  },
  get "5-2-2-note"() {
    return <>Coimrítear na briathra ó na fréamhacha <i>adhain</i>, <i>adhair</i> agus <i>sleabhac</i> ina réimniú amhail is dá mba <i>adhn-</i>, <i>adhr-</i>, <i>sleabhc-</i>, ba fhréamh dóibh, e.g., <i>adhnann sé</i>, <i>adhrfaidh sí</i>, <i>sleabhctha</i>, ach amháin san aimsir chaite scartha, e.g., <i>d&rsquo;adhain sé</i>, <i>d&rsquo;adhair sí</i>, <i>shleabhac siad</i>, agus in aidiachtaí briathartha <i>adhain</i>, <i>adhair</i>, e.g., <i>adhainte</i>, <i>adhartha</i>.</>;
  },
  get "5-2-3-title"() {
    return <>Briathra ó fhréamhacha aonsiollacha a chríochnaíonn ar <i>-gh</i></>;
  },
  get "Table5F-caption"() {
    return <>An Chéad Réimniú &mdash; Réimniú an Bhriathair <i>cráigh</i></>;
  },
  get "Table5F-note"() {
    return <>Maidir le briathra a réimnítear ar nós <i>cráigh</i> agus <i>dóigh</i>, tabhair faoi deara go mbíonn na leaganacha le <i>-t-</i> caol, e.g., <i>chráiteá</i>, <i>cráitear</i>; <i>dhóiteá</i>, <i>dóitear</i>, ach go mbíonn na leaganacha le <i>-f-</i> leathan, e.g., <i>cráfaidh tú</i>, <i>chráfaí</i>; <i>dófaidh tú</i>, <i>dhófaí</i>.</>;
  },
  get "Table5G-caption"() {
    return <>An Chéad Réimniú &mdash; Réimniú an Bhriathair <i>dóigh</i></>;
  },
  get "5-2-3-A-a-p"() {
    return <>Briathra a réimnítear ar nós <i>cráigh</i>, <i>dóigh</i>:</>;
  },
  get "5-2-3-A-b-p"() {
    return "Briathra a bhfuil ainm briathartha ar leith acu:";
  },
  get "5-2-3-B-p"() {
    return <>I gcás briathra a bhfuil guta gearr sa fhréamh iontu, fágtar an guta gan fadú roimh <i>-t</i>, e.g., <i>nitear</i>, <i>niteá</i>, <i>nite</i>, ach <i>ním</i>, <i>níodh</i>, <i>nífí</i>, etc. Is guta fada, áfach, a bhíonn ag <i>léigh</i> etc. síos tríd, e.g., <i>léitear</i>, <i>léiteá</i>, <i>léite</i>.</>;
  },
  get "Table5H-caption"() {
    return <>An Chéad Réimniú &mdash; Réimniú an Bhriathair <i>léigh</i></>;
  },
  get "Table5I-caption"() {
    return <>An Chéad Réimniú &mdash; Réimniú an Bhriathair <i>nigh</i></>;
  },
  get "5-2-3-B-a-p"() {
    return <>Briathra a réimnítear ar nós <i>léigh</i>:</>;
  },
  get "5-2-3-B-b-p"() {
    return <>Briathra a réimnítear ar nós <i>nigh</i>:</>;
  },
  get "5-2-3-B-c-p"() {
    return "Briathra a bhfuil ainm briathartha ar leith acu:";
  },
  get "5-3-title"() {
    return "An Dara Réimniú";
  },
  get "5-3-1-title"() {
    return <>Briathra ó fhréamhacha ilsiollacha a chríochnaíonn ar <i>-(a)igh</i></>;
  },
  get "Table5J-caption"() {
    return <>An Dara Réimniú &mdash; Réimniú an Bhriathair <i>beannaigh</i></>;
  },
  get "Table5K-caption"() {
    return <>An Dara Réimniú &mdash; Réimniú an Bhriathair <i>cruinnigh</i></>;
  },
  get "5-3-1-note"() {
    return <>Tabhair faoi deara gur ar an gcuma chéanna le <i>beannaigh</i> a réimnítear briathra ó fhréamhacha ilsiollacha a chríochnaíonn ar <i>-aigh</i>, agus gur ar an gcuma chéanna le <i>cruinnigh</i> a réimnítear briathra ó fhréamhacha ilsiollacha a chríochnaíonn ar <i>-igh</i>; ach tá eisceachtaí san ainm briathartha (féach <a href="#sec_5_5_2">5.5.2</a>) agus correisceacht san aidiacht bhriathartha, e.g., <i>dathaigh</i>, <i>daite</i>; <i>dlúthaigh</i>, <i>dlúite</i>; <i>táthaigh</i>, <i>táite</i>.</>;
  },
  get "5-3-2-title"() {
    return <>Briathra ó fhréamhacha ilsiollacha a chríochnaíonnar <i>-(a)il</i>, <i>-(a)in</i>, <i>-(a)ir</i>, <i>-(a)is</i> agus a choimrítear sa réimniú</>;
  },
  get "Table5L-caption"() {
    return <>An Dara Réimniú &mdash; Réimniú an Bhriathair <i>ceangail</i></>;
  },
  get "Table5M-caption"() {
    return <>An Dara Réimniú &mdash; Réimniú an Bhriathair <i>díbir</i></>;
  },
  get "5-3-2-a-p"() {
    return <>Briathra a réimnítear ar nós <i>ceangail</i>:</>;
  },
  get "5-3-2-b-p"() {
    return <>Briathra a réimnítear ar nós <i>díbir</i>:</>;
  },
  get "5-3-3-title"() {
    return "Briathra Eile sa Dara Réimniú";
  },
  get "5-3-3-a-p"() {
    return <>Ní choimrítear briathra ó fhréamhacha a chríochnaíonn ar <i>-aim</i>, <i>-(a)ing</i>:</>;
  },
  get "5-3-3-b-p"() {
    return "Briathra eile nach gcoimrítear:";
  },
  get "5-4-title"() {
    return "Na Briathra Neamhrialta";
  },
  get "5-4-1-p"() {
    return <>Aon bhriathar déag neamhrialta atá ann. Is iad seo a leanas na briathra neamhrialta: <i>abair</i>, <i>beir</i>, <i>bí</i>, <i>clois/cluin</i>, <i>déan</i>, <i>faigh</i>, <i>feic</i>, <i>ith</i>, <i>tabhair</i>, <i>tar</i>, <i>téigh</i>.</>;
  },
  get "5-4-2-p"() {
    return "Ní choinníonn na briathra neamhrialta an fhréamh chéanna tríd síos ina réimniú agus tá leaganacha ar leith ar chuid acu san fhoirm spleách.";
  },
  get "5-4-3-p"() {
    return <>Is ionann fréamh an bhriathair san aimsir ghnáthláithreach agus san aimsir ghnáthchaite sna briathra neamhrialta go léir, e.g., <i>cloisimid</i>, <i>chloisimis</i>; <i>deirim</i>, <i>deirinn</i>; <i>tugann sí</i>, <i>thugadh sí</i>. Seachas i gcás an bhriathair <i>bí</i>, bíonn an fhréamh chéanna leis an modh foshuiteach láithreach freisin, e.g., <i>go gcloise</i>; <i>go ndeire</i>; <i>go dtuga</i>.</>;
  },
  get "5-4-4-p"() {
    return <>Is ionann fréamh an bhriathair san aimsir fháistineach agus sa mhodh coinníollach sna briathra neamhrialta go léir, e.g., <i>déarfaidh mé</i>, <i>déarfainn</i>; <i>déanfaidh tú</i>, <i>dhéanfá</i>; <i>tabharfaidh siad</i>, <i>thabharfaidís</i>.</>;
  },
  get "5-4-5-title"() {
    return "An Fhoirm Spleách";
  },
  get "5-4-5-p"() {
    return <>Is í an fhoirm spleách a leanann na cónaisc, na forainmneacha coibhneasta agus na míreanna briathartha seo: <i>a/ar</i> (= an mhír choibhneasta), <i>a/ar</i> (= <i>an méid a/ar</i>), <i>an/ar</i>, <i>cá/cár</i>, <i>dá/dár</i> (<i>de</i> nó <i>do+a</i> (<i>ar</i>)) agus <i>dá</i> (coinníollach), <i>go/gur</i>, <i>mura/murar</i>, <i>nach/nár</i>, <i>ní/níor</i>, <i>sula/sular</i> (féach <a href="./chapter10.html#sec_10_4_2">10.4.2</a> agus <a href="./chapter10.html#sec_10_8_2">10.8.2</a>). Is le <i>ní</i> nó <i>go</i> a léirítear an fhoirm spleách sna táblaí.</>;
  },
  get "5-4-5-a-p"() {
    return <>Úsáidtear na míreanna sin leis na briathra neamhrialta ar an modh céanna ar a n&#x2011;úsáidtear iad leis na briathra rialta.</>;
  },
  get "5-4-5-SampleBox-1"() {
    return <><b>An dtabharfadh</b> sí síob chun na scoile duit?</>;
  },
  get "5-4-5-SampleBox-2"() {
    return <>Dúirt siad <b>go dtagann</b> sí ar cuairt gach Satharn.</>;
  },
  get "5-4-5-SampleBox-3"() {
    return <><b>Níor rug</b> siad ar na gadaithe go fóill.</>;
  },
  get "5-4-5-SampleBox-4"() {
    return <><b>Nár chuala</b> tú faoin gcruinniú?</>;
  },
  get "5-4-5-SampleBox-5"() {
    return <><b>Ar ith</b> sé a dhóthain?</>;
  },
  get "5-4-5-a-p2"() {
    return <>Ach ní úsáidtear na leaganacha a chríochnaíonn ar <i>-r</i> de na míreanna sin san aimsir chaite, modh táscach, leis na briathra <i>abair</i>, <i>bí</i>, <i>déan</i> (i gcás foirmeacha dar tús <i>dearn-</i>), <i>faigh</i>, <i>feic</i>, <i>téigh</i>.</>;
  },
  get "5-4-5-SampleBox2-1"() {
    return <><b>Nach ndeachaigh</b> sibh abhaile fós?</>;
  },
  get "5-4-5-SampleBox2-2"() {
    return <><b>Cá bhfacamar</b> cheana é?</>;
  },
  get "5-4-5-SampleBox2-3"() {
    return <><b>An ndúirt</b> sé dada leatsa faoi?</>;
  },
  get "5-4-5-SampleBox2-4"() {
    return <>Deir sí <b>go raibh</b> siad ann.</>;
  },
  get "5-4-5-SampleBox2-5"() {
    return <><b>Ní bhfuair</b> sé an t&#x2011;airgead fós.</>;
  },
  get "5-4-5-b-p"() {
    return <>Ní shéimhítear an briathar <i>abair</i> in aon chás, e.g., <i>ní deirim</i> (<i>deirimis</i>, <i>dúirt sé</i>, <i>déarfainn</i>), <i>má deir tú</i> (<i>deiridís</i>), <i>na rudaí a déarfaidh</i> (<i>a déarfadh</i>) <i>sé</i>.</>;
  },
  get "5-4-5-c-p"() {
    return <>Táthaítear an mhír choibhneasta <i>a</i> leis an mbriathar <i>bí</i> san aimsir láithreach &mdash; <i>atáim</i>, <i>atá</i>, <i>atáimid</i>, <i>atáthar</i>. Cuirtear <i>ná</i>, in ionad <i>nár</i>, roimh fhoirmeacha an mhodha fhoshuitigh de <i>bí</i>, e.g., <i>Ná raibh maith agat</i>.</>;
  },
  get "Table5N-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>abair</i></>;
  },
  get "Table5N-Note"() {
    return <>Mar a luadh in <a href="#sec_5_4_5_b">5.4.5(b)</a>, ní shéimhítear an briathar <i>abair</i> in aon chás.</>;
  },
  get "Table5O-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>beir</i></>;
  },
  get "Table5P-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>bí</i></>;
  },
  get "PositiveIndependent"() {
    return "Neamhspleách Dearfach";
  },
  get "NegativeIndependent"() {
    return "Neamhspleách Diúltach";
  },
  get "Dependent"() {
    return "Spleách";
  },
  get "Independent"() {
    return "Neamhspleách";
  },
  get "Table5P-footnote"() {
    return <><i>a bheith</i> a bhíonn ann seachas i ndiaidh <i>chun</i> nó réamhfhocail shimplí áirithe, e.g., <i>chun bheith</i>, <i>as bheith</i>, <i>gan bheith</i>, <i>le bheith</i>.</>;
  },
  get "Table5Q-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>clois/cluin</i></>;
  },
  get "Table5R-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>déan</i></>;
  },
  get "Table5R-Note"() {
    return <>Tabhair faoi deara gur briathar rialta é <i>déan</i> ach amháin san aimsir chaite agus go ndéantar an aimsir chaite a réimniú ar dhá bhealach éagsúla, mar a léirítear sa tábla thuas. Sa chéad cheann díobh sin, tá foirmeacha éagsúla spleácha agus neamhspleácha ar an mbriathar.</>;
  },
  get "Table5S-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>faigh</i></>;
  },
  get "Table5T-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>feic</i></>;
  },
  get "Table5T-Note"() {
    return <>Is briathar rialta é <i>feic</i> ach amháin san aimsir chaite.</>;
  },
  get "Table5U-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>ith</i></>;
  },
  get "Table5U-Note"() {
    return <>Is briathar rialta é <i>ith</i> ach amháin san aimsir fháistineach agus sa mhodh coinníollach.</>;
  },
  get "Table5V-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>tabhair</i></>;
  },
  get "Table5W-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>tar</i></>;
  },
  get "Table5X-caption"() {
    return <>Na Briathra Neamhrialta &mdash; Réimniú an Bhriathair <i>téigh</i></>;
  },
  get "5-5-title"() {
    return "An tAinm Briathartha";
  },
  get "5-5-1-title"() {
    return "Ainmneacha Briathartha sa Chéad Réimniú";
  },
  get "5-5-1-p"() {
    return "Sa tábla thíos, taispeántar na cineálacha éagsúla ainmneacha briathartha atá sa chéad réimniú.";
  },
  get "Table5Y-caption"() {
    return "Ainmneacha Briathartha &mdash; An Chéad Réimniú";
  },
  get "Trait"() {
    return "Tréith";
  },
  get "Table5Y-col2"() {
    return "Samplaí";
  },
  get "Table5Y-trait1"() {
    return <>An deireadh <i>-(e)adh</i></>;
  },
  get "Table5Y-trait2"() {
    return <>Leathnú ar an bhfréamh agus an deireadh <i>-adh</i></>;
  },
  get "Table5Y-trait3"() {
    return "Leathnú ar an bhfréamh";
  },
  get "Table5Y-trait4"() {
    return "Ionann is an fhréamh";
  },
  get "Table5Y-trait5"() {
    return <>An deireadh <i>-áil</i></>;
  },
  get "Table5Y-trait6"() {
    return <><i>-t</i> a chur leis an bhfréamh</>;
  },
  get "Table5Y-trait7"() {
    return <>An deireadh <i>-(e)amh</i></>;
  },
  get "Table5Y-trait8"() {
    return <>An deireadh <i>-(e)an</i></>;
  },
  get "Table5Y-trait9"() {
    return <>An deireadh <i>-chan</i></>;
  },
  get "Table5Y-trait10"() {
    return <>An deireadh <i>-(e)acht</i></>;
  },
  get "Table5Y-trait11"() {
    return <>An deireadh <i>-im</i></>;
  },
  get "Table5Y-trait12"() {
    return <>An deireadh <i>úint</i></>;
  },
  get "Table5Y-trait13"() {
    return <>Guta fada nó défhoghar (fréamh a chríochnaíonn ar <i>-igh</i>, <i>-ígh</i>)</>;
  },
  get "Table5Y-trait14"() {
    return "Ainmneacha briathartha eile";
  },
  get "5-5-2-title"() {
    return "Ainmneacha Briathartha sa Dara Réimniú";
  },
  get "5-5-2-p"() {
    return "Sa tábla thíos, taispeántar na cineálacha éagsúla ainmneacha briathartha atá sa dara réimniú.";
  },
  get "Table5Z-caption"() {
    return "Ainmneacha Briathartha &mdash; An Dara Réimniú";
  },
  get "Table5Z-trait-1"() {
    return <>An deireadh <i>-(i)ú</i></>;
  },
  get "Table5Z-trait-2"() {
    return <>An deireadh <i>aí</i></>;
  },
  get "Table5Z-trait-3"() {
    return <>An deireadh <i>-í</i></>;
  },
  get "Table5Z-trait-4"() {
    return <><i>-t</i> a chur leis an bhfréamh</>;
  },
  get "Table5Z-trait-5"() {
    return "Leathnú ar an bhfréamh";
  },
  get "Table5Z-trait-6"() {
    return <>An deireadh <i>-(e)amh</i></>;
  },
  get "Table5Z-trait-7"() {
    return <>An deireadh <i>-(e)ach</i></>;
  },
  get "Table5Z-trait-8"() {
    return <>An deireadh <i>-(e)acht</i></>;
  },
  get "Table5Z-trait-9"() {
    return <>An deireadh <i>-áil</i></>;
  },
  get "Table5Z-trait-10"() {
    return <>An deireadh <i>-aíocht</i></>;
  },
  get "Table5Z-trait-11"() {
    return "Ainmneacha briathartha eile";
  },
  get "5-6-title"() {
    return "Díochlaonadh an Ainm Bhriathartha";
  },
  get "5-6-1-title"() {
    return "An Ginideach";
  },
  get "5-6-1-a-p"() {
    return "Is ionann foirm de ghnáth do ghinideach an ainm bhriathartha agus don aidiacht bhriathartha sna cásanna a léirítear sa tábla thíos:";
  },
  get "Table5AA-caption"() {
    return "Díochlaonadh an Ainm Bhriathartha &mdash; Ginideach an Ainm Bhriathartha ar Aon Fhoirm leis an Aidiacht Bhriathartha";
  },
  get "Table5AA-Col2"() {
    return "Ainm Briathartha";
  },
  get "Table5AA-Col3"() {
    return "Foirm an Ghinidigh";
  },
  get "Table5AA-trait1"() {
    return <>Ainmneacha briathartha a chríochnaíonn ar <i>-(e)adh</i></>;
  },
  get "Table5AA-trait2"() {
    return "Ainmneacha briathartha aonsiollacha a chríochnaíonn ar ghuta fada nó ar dhéfhoghar";
  },
  get "Table5AA-trait3"() {
    return "Ainmneacha briathartha ilsiollacha a chríochnaíonn ar ghuta fada";
  },
  get "Table5AA-trait4"() {
    return <>Ainmneacha briathartha a chríochnaíonn ar <i>-ilt</i>, <i>-in(g)t</i>, (ach amháin <i>-áint</i>, <i>-úint</i>), <i>-irt</i></>;
  },
  get "Table5AA-trait5"() {
    return "Roinnt ainmneacha briathartha firinscneacha a chríochnaíonn ar chonsan leathan";
  },
  get "Table5AA-trait6"() {
    return "Corrainm briathartha eile";
  },
  get "Table5AA-Note"() {
    return <>Níl gnáthghinideach de réir ceann de na díochlaontaí (féach <a href="./chapter3.html#sec_3_3_4">3.3.4</a>) ag ainmneacha briathartha a chríochnaíonn ar <i>-(e)adh</i> nó a chríochnaíonn ar ghuta fada, e.g., <i>bearradh</i>, <i>cló</i>, <i>cónaí</i>.</>;
  },
  get "5-6-1-b-p"() {
    return "Is é ginideach an ainmfhocail, de réir an díochlaonta lena mbaineann, a bhíonn &mdash;";
  },
  get "5-6-1-b-i-p"() {
    return "ar ainmneacha briathartha áirithe:";
  },
  get "Table5BB-caption"() {
    return "Díochlaonadh an Ainm Bhriathartha &mdash; Ainmneacha Briathartha Áirithe";
  },
  get "Table5BB-trait1"() {
    return <>Amhail ainmfhocal den Chéad Díochlaonadh (féach <a href="./chapter2.html#sec_2_2_2">2.2.2</a>)</>;
  },
  get "Table5BB-trait2"() {
    return <>Amhail ainmfhocal den Dara Díochlaonadh (féach <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)</>;
  },
  get "Table5BB-trait3"() {
    return <>Amhail ainmfhocal den Tríú Díochlaonadh, i gcás ainmneacha briathartha a chríochnaíonn ar <i>-áil</i>, <i>-aíl</i>, <i>-áint</i>, <i>-úint</i>, <i>-cht</i> agus corrainm briathartha eile (féach <a href="./chapter2.html#sec_2_4_2">2.4.2</a>)</>;
  },
  get "5-6-1-b-ii-p"() {
    return "ar ghnáth-ainmfhocail a úsáidtear chun feidhmeanna de chuid ainm briathartha a dhéanamh ach nach dtéann réimniú briathair thairis sin orthu:";
  },
  get "Table5CC-caption"() {
    return "Díochlaonadh an Ainm Bhriathartha &mdash; Gnáth-Ainmfhocail a úsáidtear chun Feidhmeanna de chuid Ainm Briathartha a dhéanamh";
  },
  get "Table5CC-trait-1"() {
    return <>Amhail ainmfhocal den Chéad Díochlaonadh (féach <a href="./chapter2.html#sec_2_2_2">2.2.2</a>)</>;
  },
  get "Table5CC-trait-2"() {
    return <>Amhail ainmfhocal den Dara Díochlaonadh (féach <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)</>;
  },
  get "Table5CC-trait-3"() {
    return <>Amhail ainmfhocal den Tríú Díochlaonadh, i gcásanna ina gcuirtear foirceann leis an mbun-ainmfhocal, e.g., <i>bádóir</i>, <i>bádóireacht</i>; <i>peata</i>, <i>peataireacht</i> agus i gcás corrainm briathartha eile (féach <a href="./chapter2.html#sec_2_4_2">2.4.2</a>)</>;
  },
  get "Table5CC-Note"() {
    return <>Ainmneacha briathartha de na cineálacha sin atá luaite in <a href="#sec_5_6_1_b_ii">5.6.1(b)(ii)</a> roimhe seo, ní bhíonn foirm don aidiacht bhriathartha orthu. Tá foirm na haidiachta briathartha in easnamh freisin ar ghnáthainmneacha briathartha áirithe, e.g., <i>achainí</i>, <i>uair na hachainí</i>; <i>fónamh</i>, <i>fear fónaimh</i>; <i>gol</i>, <i>racht goil</i>; <i>guí</i>, <i>faoi bhrí na guí</i>; <i>maireachtáil</i>, <i>slí mhaireachtála</i>.</>;
  },
  get "5-6-1-b-iii-p"() {
    return <>ar na hathleaganacha atá ar mhórán ainmneacha briathartha chun leanúnachas, minicíocht, teibíocht, torann, treise, fochiall nó beart aonair a chur in iúl, e.g., <i>aistriú</i> go <i>aistriúchán</i>; <i>liú</i> go <i>liúireach</i>:</>;
  },
  get "Table5DD-caption"() {
    return "Díochlaonadh an Ainm Bhriathartha &mdash; Athleaganacha ar Ainmneacha Briathartha";
  },
  get "Table5DD-col1"() {
    return "Athleagan ar Ainm Briathartha";
  },
  get "Table5DD-trait-1"() {
    return <>Amhail ainmfhocal den Chéad Díochlaonadh (féach <a href="./chapter2.html#sec_2_2_2">2.2.2</a>)</>;
  },
  get "Table5DD-trait-2"() {
    return <>Amhail ainmfhocal den Dara Díochlaonadh (féach <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)</>;
  },
  get "Table5DD-trait-3"() {
    return <>Amhail ainmfhocal den Tríú Díochlaonadh (féach <a href="./chapter2.html#sec_2_4_2">2.4.2</a>)</>;
  },
  get "5-6-1-c-p"() {
    return <>Tá roinnt ainmneacha briathartha ann a bhfuil dhá fhoirm orthu sa ghinideach &mdash; foirm na haidiachta briathartha agus foirm de réir ceann de dhíochlaontaí na n&#x2011;ainmfhocal:</>;
  },
  get "Table5EE-caption"() {
    return "Díochlaonadh Ainmneacha Briathartha a bhfuil Dhá Fhoirm orthu sa Ghinideach &mdash; Foirm de réir Ceann de na Díochlaontaí";
  },
  get "Table5EE-col3"() {
    return "Foirm an Ghinidigh de réir Ceann de na Díochlaontaí";
  },
  get "Table5EE-trait-1"() {
    return <>Amhail ainmfhocal den Chéad Díochlaonadh (formhór na n&#x2011;ainmneacha briathartha firinscneacha a chríochnaíonn ar chonsan leathan) (féach <a href="./chapter2.html#sec_2_2_2">2.2.2</a>)</>;
  },
  get "Table5EE-trait-2"() {
    return <>Amhail ainmfhocal den Dara Díochlaonadh (beagán ainmneacha briathartha baininscneacha) (féach <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)</>;
  },
  get "Table5EE-trait-3"() {
    return <>Amhail ainmfhocal den Tríú Díochlaonadh (ainmneacha briathartha baininscneacha a chríochnaíonn ar <i>-chan</i> agus <i>crith</i>, <i>foghlaim</i>, <i>íoc</i>, <i>reic</i>, <i>rith</i>, <i>seinm</i>, <i>slad</i>, <i>snámh</i>, <i>sníomh</i>, <i>tairiscint</i>, <i>tál</i>, <i>trácht</i>, <i>triall</i>, <i>troid</i>, <i>tuiscint</i>) (féach <a href="./chapter2.html#sec_2_4_2">2.4.2</a>)</>;
  },
  get "5-6-1-c-i-p"() {
    return "Is í foirm na haidiachta briathartha a úsáidtear nuair atá cuspóir ag gabháil leis an ainm briathartha.";
  },
  get "5-6-1-c-ii-p"() {
    return "Is í an fhoirm eile a úsáidtear nuair is feidhm ainmfhocail nó feidhm aidiachta a bhíonn ag an ainm briathartha.";
  },
  get "Table5FF-caption"() {
    return "Díochlaonadh Ainmneacha Briathartha a bhfuil Dhá Fhoirm orthu sa Ghinideach &mdash; Foirm na hAidiachta Briathartha agus Foirm de réir Ceann de na Díochlaontaí";
  },
  get "Table5FF-col1"() {
    return "Ainm Briathartha";
  },
  get "Table5FF-col2"() {
    return "Ginideach &mdash; Foirm na hAidiachta Briathartha";
  },
  get "Table5FF-col3"() {
    return "Ginideach &mdash; Foirm de réir Ceann de na Díochlaonta";
  },
  get "5-6-2-title"() {
    return "An tIolra";
  },
  get "5-6-2-p"() {
    return "Tá roinnt ainmneacha briathartha ann a úsáidtear mar ghnáth-ainmfhocail freisin. Bíonn foirm iolra orthu sin de réir an díochlaonta lena mbaineann siad.";
  },
  get "5-6-2-a-p"() {
    return <>I gcás ainmneacha briathartha a chríochnaíonn ar <i>-(e)adh</i>, is gnách <i>-taí</i> (<i>-tí</i>) a chur in ionad an <i>-(e)adh</i> más <i>-ch</i>, <i>-d</i>, <i>-l</i>, <i>-ll</i>, <i>-n</i>, <i>-rr</i>, <i>-s</i> nó <i>-t</i> is críoch don fhréamh, agus <i>-thaí</i> (<i>-thí</i>), más consan eile is críoch di, e.g., <i>baisteadh</i>, <i>baistí</i>; <i>casadh</i>, <i>castaí</i>; <i>cinneadh</i>, <i>cinntí</i>; <i>moladh</i>, <i>moltaí</i>; <i>pósadh</i>, <i>póstaí</i>; <i>tarscaoileadh</i>, <i>tarscaoiltí</i>; <i>bloscadh</i>, <i>bloscthaí</i>; <i>colscaradh</i>, <i>colscarthaí</i>; <i>crapadh</i>, <i>crapthaí</i>; <i>loscadh</i>, <i>loscthaí</i>; <i>madhmadh</i>, <i>madhmthaí</i>; <i>scríobadh</i>, <i>scríobthaí</i>; <i>speireadh</i>, <i>speirthí</i>; <i>tíolacadh</i>, <i>tíolacthaí</i>, nó corruair <i>-teacha</i>, <i>-thacha</i>, e.g., <i>filleadh</i>, <i>fillteacha</i>; <i>gearradh</i>, <i>gearrthacha</i>.</>;
  },
  get "5-6-2-b-p"() {
    return <>I gcás ainmneacha briathartha ilsiollacha a chríochnaíonn ar <i>-(i)ú</i>, cuirtear <i>-(u)ithe</i> in ionad an <i>-(i)ú</i>, e.g., <i>athrú</i>, <i>athruithe</i>; <i>ceartú</i>, <i>ceartuithe</i>; <i>cruinniú</i>, <i>cruinnithe</i>; <i>fiosrú</i>, <i>fiosruithe</i>; <i>míniú</i>, <i>mínithe</i>; <i>ordú</i>, <i>orduithe</i>; <i>scrúdú</i>, <i>scrúduithe</i>; <i>toiliú</i>, <i>toilithe</i>.</>;
  },
  get "5-6-2-c-p"() {
    return <>I gcás ainmneacha briathartha a chríochnaíonn ar <i>-áil</i>, leathnaítear an <i>l</i> agus cuirtear <i>-acha</i> leis, e.g., <i>admháil</i>, <i>admhálacha</i>; <i>ofráil</i>, <i>ofrálacha</i>.</>;
  },
  get "5-6-2-d-p"() {
    return <>I gcás ainmneacha briathartha a chríochnaíonn ar <i>cht</i>, cuirtear <i>-aí</i> leo, e.g., <i>gluaiseacht</i>, <i>gluaiseachtaí</i>, agus cuirtear <i>-í</i> le hainmneacha briathartha a chríochnaíonn ar <i>-lt</i>, <i>-nt</i>, <i>-rt</i>, e.g., <i>bagairt</i>, <i>bagairtí</i>; <i>creidiúint</i>, <i>creidiúintí</i>; <i>oscailt</i>, <i>oscailtí</i>; <i>tairiscint</i>, <i>tairiscintí</i>.</>;
  },
  get "5-6-2-e-p"() {
    return <>I gcás ainmneacha briathartha aonsiollacha a chríochnaíonn ar ghuta, cuirtear <i>-nna</i> nó, corruair, <i>-ite</i> leo, e.g., <i>breo</i>, <i>breonna</i>; <i>brú</i>, <i>brúnna</i>; <i>cló</i>, <i>clónna</i>; <i>dó</i>, <i>dónna</i>; <i>liú</i>, <i>liúnna</i>; <i>meá</i>, <i>meánna</i>; <i>sú</i>, <i>súnna</i>; <i>crú</i>, <i>crúite</i>; <i>rá</i>, <i>ráite</i>; <i>sá</i>, <i>sáite</i>.</>;
  },
  get "5-7-title"() {
    return "An Aidiacht Bhriathartha";
  },
  get "5-7-1-title"() {
    return "Réimíreanna leis an Aidiacht Bhriathartha";
  },
  get "5-7-1-p"() {
    return <>Úsáidtear na réimíreanna <i>do-</i>, <i>in-</i>, <i>so-</i> le foirm na haidiachta briathartha chun rangabhálacha a dhéanamh, e.g., <i>dochoiscthe</i>, <i>dofheicthe</i>, <i>doghluaiste</i>, <i>dothuigthe</i>, <i>indéanta</i>, <i>inscrúdaithe</i>, <i>sofheicthe</i>, <i>sofhoghlamtha</i>, <i>sophacáilte</i>. (Féach <a href="./chapter4.html#sec_4_12">4.12</a> le haghaidh tuilleadh eolais ar an aidiacht bhriathartha.)</>;
  },

  // These are just here to match keys. They will not be used in the Irish text
  // If you see ---, it's an error.
  get "briathar-Mol"() {
    return "---";
  },
  get "briathar-Bris"() {
    return "---";
  },
  get "briathar-Sábháil"() {
    return "---";
  },
  get "briathar-Tíolaic"() {
    return "---";
  },
  get "briathar-bácáil"() {
    return "---";
  },
  get "briathar-cóipeáil"() {
    return "---";
  },
  get "briathar-nótáil"() {
    return "---";
  },
  get "briathar-péinteáil"() {
    return "---";
  },
  get "briathar-adhair"() {
    return "---";
  },
  get "briathar-adhlaic"() {
    return "---";
  },
  get "briathar-ceiliúir"() {
    return "---";
  },
  get "briathar-seachaid"() {
    return "---";
  },
  get "briathar-tionóil"() {
    return "---";
  },
  get "briathar-toirmisc"() {
    return "---";
  },
  get "briathar-tiomáin"() {
    return "---";
  },
  get "briathar-coimeád"() {
    return "---";
  },
  get "briathar-gearán"() {
    return "---";
  },
  get "briathar-Cráigh"() {
    return "---";
  },
  get "briathar-Dóigh"() {
    return "---";
  },
  get "briathar-báigh"() {
    return "---";
  },
  get "briathar-cneáigh"() {
    return "---";
  },
  get "briathar-meáigh"() {
    return "---";
  },
  get "briathar-leáigh"() {
    return "---";
  },
  get "briathar-clóigh"() {
    return "---";
  },
  get "briathar-breoigh"() {
    return "---";
  },
  get "briathar-dreoigh"() {
    return "---";
  },
  get "briathar-feoigh"() {
    return "---";
  },
  get "briathar-reoigh"() {
    return "---";
  },
  get "briathar-brúigh"() {
    return "---";
  },
  get "briathar-crúigh"() {
    return "---";
  },
  get "briathar-liúigh"() {
    return "---";
  },
  get "briathar-súigh"() {
    return "---";
  },
  get "briathar-luaigh"() {
    return "---";
  },
  get "briathar-beoigh"() {
    return "---";
  },
  get "briathar-buaigh"() {
    return "---";
  },
  get "briathar-cruaigh"() {
    return "---";
  },
  get "briathar-fuaigh"() {
    return "---";
  },
  get "briathar-glaoigh"() {
    return "---";
  },
  get "briathar-iaigh"() {
    return "---";
  },
  get "briathar-Léigh"() {
    return "---";
  },
  get "briathar-Nigh"() {
    return "---";
  },
  get "briathar-éigh"() {
    return "---";
  },
  get "briathar-téigh"() {
    return "---";
  },
  get "briathar-pléigh"() {
    return "---";
  },
  get "briathar-spréigh"() {
    return "---";
  },
  get "briathar-caígh"() {
    return "---";
  },
  get "briathar-cloígh"() {
    return "--- to";
  },
  get "briathar-cnaígh"() {
    return "---";
  },
  get "briathar-dligh"() {
    return "--- entitled to";
  },
  get "briathar-figh"() {
    return "---";
  },
  get "briathar-guigh"() {
    return "---";
  },
  get "briathar-ligh"() {
    return "---";
  },
  get "briathar-luigh"() {
    return "--- (down)";
  },
  get "briathar-snigh"() {
    return "---";
  },
  get "briathar-snoigh"() {
    return "---";
  },
  get "briathar-suigh"() {
    return "---";
  },
  get "briathar-bligh"() {
    return "---";
  },
  get "briathar-buígh"() {
    return "---";
  },
  get "briathar-righ"() {
    return "---";
  },
  get "briathar-Beannaigh"() {
    return "---";
  },
  get "briathar-Cruinnigh"() {
    return "---";
  },
  get "briathar-Ceangail"() {
    return "---";
  },
  get "briathar-Díbir"() {
    return "---";
  },
  get "briathar-codail"() {
    return "---";
  },
  get "briathar-fógair"() {
    return "---";
  },
  get "briathar-labhair"() {
    return "---";
  },
  get "briathar-oscail"() {
    return "---";
  },
  get "briathar-tionscain"() {
    return "---";
  },
  get "briathar-aithin"() {
    return "---";
  },
  get "briathar-eitil"() {
    return "---";
  },
  get "briathar-imir"() {
    return "---";
  },
  get "briathar-inis"() {
    return "---";
  },
  get "briathar-foghlaim"() {
    return "---";
  },
  get "briathar-fulaing"() {
    return "---";
  },
  get "briathar-tarraing"() {
    return "---";
  },
  get "briathar-tuirling"() {
    return "---";
  },
  get "briathar-aithris"() {
    return "---";
  },
  get "briathar-freastail"() {
    return "---";
  },
  get "briathar-taistil"() {
    return "---";
  },
  get "briathar-Abair"() {
    return "---";
  },
  get "briathar-Beir"() {
    return "---";
  },
  get "briathar-Bí"() {
    return "---";
  },
  get "briathar-Clois/Cluin"() {
    return "---";
  },
  get "briathar-Déan"() {
    return "---/make";
  },
  get "briathar-Faigh"() {
    return "---";
  },
  get "briathar-Feic"() {
    return "---";
  },
  get "briathar-Ith"() {
    return "---";
  },
  get "briathar-Tabhair"() {
    return "---";
  },
  get "briathar-Tar"() {
    return "---";
  },
  get "briathar-Téigh"() {
    return "---";
  },
};
