import { ga_IE as ga_IE_Common } from "../../common/ga-IE";

export const ga_IE = {
  get "teidealNaCaibidle"(){
    return "An Aidiacht";
  },get "4-1-title"(){
    return "An Aidiacht Cháilíochta";
  },get "4-title"(){
    return <>{ga_IE_Common["Caibidil"]} 4 | {ga_IE["teidealNaCaibidle"]}</>;
  },get "4-1-1-p"(){
    return "Roinntear na haidiachtaí ina dtrí dhíochlaonadh.";
  },get "4-1-2-p"(){
    return "Ní dhíochlaontar an aidiacht ach amháin nuair a úsáidtear mar aidiacht cháilíochta í.";
  },get "4-1-3-p"(){
    return <>Braitheann foirm aidiachta cáilíochta ar inscne, tuiseal agus uimhir an ainmfhocail atá á cháiliú léi agus ar dhíochlaonadh na haidiachta féin. Féach <a href="./chapter9.html">Caibidil 9</a> le haghaidh rialacha maidir le haidiachtaí a úsáid le huimhreacha.</>;
  },get "4-2-title"(){
    return "Inscne, Tuiseal agus Uimhir na hAidiachta Cáilíochta";
  },get "4-2-1-p"(){
    return <>Réitíonn an aidiacht cháilíochta leis an ainmfhocal ó thaobh inscne, tuisil agus uimhreach. I gcás sraith ainmfhocal, réitíonn an aidiacht leis an ainmfhocal deiridh, e.g., <i>mná agus fir ghnaíúla</i>; <i>peann, páipéar agus bileog ghorm</i>. I gcás sraith aidiachtaí i ndiaidh ainmfhocal amháin, réitíonn gach aidiacht leis an ainmfhocal, e.g., <i>ailt shuimiúla thábhachtacha fhada</i>.</>;
  },get "4-2-1-p-sample1"(){
    return <>Tháinig na mná agus na fir <b>ghnaíúla</b> isteach.</>;
  },get "4-2-1-p-sample2"(){
    return <>Tháinig na fir agus na mná <b>gnaíúla</b> isteach.</>;
  },get "4-2-1-p-sample3"(){
    return <>Bhí sciorta, cóta agus scaif <b>ghorm</b> uirthi.</>;
  },get "4-2-1-p-sample4"(){
    return <>Tá cait <b>mhóra fhiáine</b> i ngairdín na n&#x2011;ainmhithe.</>;
  },get "4-2-2-a-p"(){
    return "San uimhir uatha &mdash;";
  },get "4-2-2-a-i-p"(){
    return <>i gcás ainmfhocal firinscneach, ní shéimhítear an aidiacht atá á cháiliú, e.g., <i>an fear beag</i>; <i>ag an bhfear beag</i>; ach amháin sa tuiseal gairmeach agus sa tuiseal ginideach e.g., <i>a fhir bhig</i>; <i>hata an fhir bhig</i>;</>;
  },get "4-2-2-a-ii-p"(){
    return <>má tá Córas an tSéimhithe (féach <a href="./chapter1.html#sec_1_7">1.7</a>) in úsáid, séimhítear an aidiacht a cháilíonn ainmfhocal firinscneach sa tuiseal tabharthach má ghabhann an t&#x2011;alt leis an ainmfhocal sin, e.g., <i>ag an fhear bheag</i>.</>;
  },get "4-2-2-b-p"(){
    return <>San uimhir uatha, i gcás ainmfhocal baininscneach, séimhítear an aidiacht atá á cháiliú sna tuisil go léir, e.g., <i>an bhean bheag</i>; <i>a bhean bheag</i>; <i>ag an mbean bheag</i>; ach amháin sa tuiseal ginideach, e.g., <i>hata na mná bige</i>.</>;
  },get "4-2-3-p"(){
    return <>Tugtar léiriú i <a href="./chapter9.html">Caibidil 9</a> ar an aidiacht cháilíochta nuair atá uimhir roimh an ainmfhocal atá á cháiliú.</>;
  },get "4-2-4-title"(){
    return "Séimhiú ar Aidiacht Cháilíochta san Uimhir Uatha";
  },get "4-2-4-p"(){
    return <>Fágtar aidiacht lom nó cuirtear séimhiú uirthi bunaithe ar inscne agus tuiseal an ainmfhocail atá á cháiliú léi. Léirítear na cásanna sa tábla thíos. Féach an plé ar dhíochlaonadh na haidiachta (<a href="#sec_4_3">4.3</a>) chun eolas a fháil ar athrú foirme (seachas séimhiú) ar an aidiacht féin.</>;
  },get "lenition"(){
    return "séimhiú";
  },get "no-lenition"(){
    return "gan séimhiú";
  },get "Table4A-caption"(){
    return "Séimhiú ar Aidiacht Cháilíochta san Uimhir Uatha";
  },get "Table4A-col1"(){
    return "An Tuiseal";
  },get "Table4A-col2"(){
    return "Ainmfhocal Firinscneach Uatha";
  },get "Table4A-col3"(){
    return "Ainmfhocal Baininscneach Uatha";
  },get "Table4A-row1"(){
    return "Ainmneach agus Cuspóireach";
  },get "Table4A-row2"(){
    return "Gairmeach";
  },get "Table4A-row3"(){
    return "Tabharthach*";
  },get "Table4A-row4"(){
    return "Ginideach";
  },get "Table4A-footnote"(){
    return <>Ach féach <a href="./chapter1.html#sec_1_7">1.7</a> Córas an tSéimhithe</>;
  },get "4-2-5-title"(){
    return "Séimhiú ar Aidiacht Cháilíochta san Uimhir Iolra";
  },get "4-2-5-p"(){
    return <>San uimhir iolra, séimhítear túschonsan aidiachta má chríochnaíonn an t&#x2011;ainmfhocal iolra ar chonsan caol, mar atá sa tábla thíos (féach freisin <a href="./chapter10.html#sec_10_3_1">10.3.1</a>).</>;
  },get "Table4B-col1-main"(){
    return "Séimhiú";
  },get "Table4B-col2-main"(){
    return "Gan Séimhiú";
  },get "Table4B-col1-sub"(){
    return "Ainmfhocal dar críoch consan caol san iolra";
  },get "Table4B-col2-sub"(){
    return "Ainmfhocal dar críoch consan leathan nó guta san iolra";
  },get "4-3-title"(){
    return "Díochlaonadh na hAidiachta";
  },get "4-3-1-p"(){
    return "Is ionann foirm don aidiacht sa tuiseal ainmneach, sa tuiseal cuspóireach agus sa tuiseal tabharthach uatha, agus is ionann foirm don aidiacht sa tuiseal ainmneach, sa tuiseal cuspóireach agus sa tuiseal tabharthach iolra.";
  },get "4-3-2-p"(){
    return "Sa tuiseal ginideach iolra &mdash;";
  },get "4-3-2-a-p"(){
    return "más tréaniolra atá ag an ainmfhocal, úsáidtear an fhoirm chéanna den aidiacht a úsáidtear sa tuiseal ainmneach iolra:";
  },get "4-3-2-a-sample-row1"(){
    return "Ainmneach iolra";
  },get "4-3-2-a-sample-row2"(){
    return "Ginideach iolra";
  },get "4-3-2-a-sample1"(){
    return <>Is maith liom na filí <b>móra</b>. </>;
  },get "4-3-2-a-sample2"(){
    return <>Is maith liom dánta na bhfilí <b>móra</b>.</>;
  },get "4-3-2-b-p"(){
    return "más lagiolra atá ag an ainmfhocal, úsáidtear an fhoirm chéanna den aidiacht a úsáidtear sa tuiseal ainmneach uatha:";
  },get "4-3-2-b-sample-row1"(){
    return "Ainmneach uatha";
  },get "4-3-2-b-sample-row2"(){
    return "Ginideach iolra";
  },get "4-3-2-b-sample1"(){
    return <>Foilsíonn an t&#x2011;údarás <b>áitiúil</b> tuarascáil gach bliain.</>;
  },get "4-3-2-b-sample2"(){
    return <>Foilsíodh tuarascálacha na n&#x2011;údarás <b>áitiúil</b>.</>;
  },get "4-3-3-a-p"(){
    return "Ní shéimhítear ná ní infhilltear aidiacht sa ghairmeach firinscneach más ainm ceana nó brí mheafarach atá i gceist.";
  },get "4-3-3-a-p-sample1"(){
    return <>Cén chaoi a bhfuil tú, <b>a athair beag</b>?</>;
  },get "4-3-3-a-p-sample2"(){
    return <><b>A dheartháir dílis</b>, bhí a fhios agam go maith gur tú a bhí ann.</>;
  },get "4-3-3-a-p-sample3"(){
    return <><b>A bhéal cumhra</b>, nach muid a bheidh sásta le chéile.</>;
  },get "4-3-3-a-p-sample4"(){
    return <>Conas atá tú, <b>a mhac bán</b>?</>;
  },get "4-3-3-b-p"(){
    return "Séimhítear túslitir na haidiachta, áfach, más ainmfhocal baininscneach atá roimpi.";
  },get "4-3-3-b-p-sample1"(){
    return <>Cad é mar atá tú inniu, a thaisce <b>mhilis</b>?</>;
  },get "4-3-3-b-p-sample2"(){
    return <>A mháthair <b>bheag</b>, ní bheidh deireadh go deo le do chuid oibre.</>;
  },get "4-3-4-p"(){
    return <>Ní infhilltear an aidiacht i ndiaidh ainmneacha baiste ban, e.g., <i>Máire Mhór</i>, <i>teach Mháire Mhór</i>.</>;
  },get "4-3-5-p"(){
    return <>Ní infhilltear an aidiacht ná ní dhéantar athrú tosaigh uirthi ar lorg dobhriathra nó aidiachtaí a úsáidtear mar dhobhriathra amhail <i>cuibheasach</i>, <i>sách</i>, <i>measartha</i>, <i>réasúnta</i>, etc.</>;
  },get "4-3-5-p-sample1"(){
    return <>Is bean <b>measartha saibhir</b> í.</>;
  },get "4-3-5-p-sample2"(){
    return <>Mná <b>measartha saibhir</b> is ea iad.</>;
  },get "4-3-5-p-sample3"(){
    return <>Fir <b>sách ard</b> is ea iad.</>;
  },get "4-3-5-p-sample4"(){
    return <>Páistí <b>réasúnta ciúin</b> is ea iad.</>;
  },get "4-3-5-p-sample5"(){
    return <>Maidin <b>sách fuar</b> a bhí ann.</>;
  },get "4-3-5-p-sample6"(){
    return <>Bliain <b>cuibheasach tirim</b> atá uainn.</>;
  },get "4-3-6-p"(){
    return <>Ní infhilltear an aidiacht ar lorg na míre treise <i>an-</i>.</>;
  },get "4-3-6-p-sample1"(){
    return <>Is daoine <b>an-bhreá</b> iad.</>;
  },get "4-3-6-p-sample2"(){
    return <>Déanfar na gnéithe <b>an-tábhachtach</b> sin a mheas.</>;
  },get "4-3-6-p-sample3"(){
    return <>Ní páistí <b>an-chiúin</b> iad.</>;
  },get "4-3-7-p"(){
    return <>Ní infhilltear an aidiacht ná ní chuirtear séimhiú uirthi más cuid de fhrása aidiachtach ilfhoclach í, e.g., <i>athnuachan saor in aisce</i>; <i>tuarascáil cothrom le dáta</i>.</>;
  },get "4-3-7-p-sample1"(){
    return <>Is bean <b>mór le rá</b> í i réimse na heolaíochta.</>;
  },get "4-3-7-p-sample2"(){
    return <>Ba é údar na tuarascála <b>cothrom le dáta</b> a thug an cur i láthair.</>;
  },get "4-3-8-p"(){
    return "Is faoi gach díochlaonadh ar leithligh a thugtar cur síos ar fhoirm an ghinidigh uatha.";
  },get "4-4-title"(){
    return "An Chéad Díochlaonadh";
  },get "4-4-p"(){
    return <>Cuimsítear sa díochlaonadh seo aidiachtaí a chríochnaíonn ar chonsan, leathan nó caol, seachas aidiachtaí a chríochnaíonn ar <i>-úil</i> agus roinnt aidiachtaí a chríochnaíonn ar <i>-ir</i> (féach <a href="#sec_4_5">4.5</a>).</>;
  },get "4-4-1-title"(){
    return "Foirm an Ghinidigh Uatha";
  },get "4-4-1-a-title"(){
    return "Firinscneach";
  },get "4-4-1-a-i-p"(){
    return <>Más consan leathan is críoch don aidiacht, caolaítear an consan mar a dhéantar le hainmfhocail sa Chéad Díochlaonadh (féach <a href="./chapter2.html#sec_2_2_2">2.2.2</a>).</>;
  },get "4-4-1-a-i-p-sample1"(){
    return <>Cár fhág sé hata an fhir <b>mhóir</b>?</>;
  },get "4-4-1-a-i-p-sample2"(){
    return <>Caithfear coinníollacha an chonartha <b>bhuain</b> a léamh go cúramach.</>;
  },get "4-4-1-a-i-p-sample3"(){
    return <>Léigh sé leabhar an imreora <b>chlúitigh</b> nuair a foilsíodh é.</>;
  },get "4-4-1-a-ii-p"(){
    return <>Ní dhéantar infhilleadh sa ghinideach uatha firinscneach ar aidiachtaí aonsiollacha a chríochnaíonn ar <i>-ch(t)</i> (ach amháin <i>bocht</i>), e.g., <i>beacht</i>, <i>caoch</i>, <i>déach</i>, <i>fliuch</i>, <i>lách</i>, <i>moch</i>, <i>nocht</i>.</>;
  },get "4-4-1-a-ii-p-sample1"(){
    return <>Bhí orthu an fhéile a chur ar siúl ag deireadh an tsamhraidh <b>fhliuch</b>.</>;
  },get "4-4-1-a-ii-p-sample2"(){
    return <>Tá na páistí i rang an mhúinteora <b>bheacht</b> i mbliana.</>;
  },get "4-4-1-a-ii-p-sample3"(){
    return <>Goideadh ba an fheirmeora <b>bhoicht</b>.</>;
  },get "4-4-1-a-iii-p"(){
    return <>Más consan caol nó <i>-íoch</i> is críoch don aidiacht, ní dhéantar infhilleadh uirthi.</>;
  },get "4-4-1-a-iii-p-sample1"(){
    return <>Ba mhaith liom labhairt le tuismitheoirí an bhuachalla <b>chiúin</b>.</>;
  },get "4-4-1-a-iii-p-sample2"(){
    return <>Bhí gach duine i bhfabhar an fheachtais <b>thionsclaíoch</b>.</>;
  },get "4-4-1-a-iv-p"(){
    return <>Ní dhéantar infhilleadh sa ghinideach uatha firinscneach ar aidiachtaí aonsiollacha a chríochnaíonn ar chonsan dúbailte (ach amháin <i>dall</i>, <i>donn</i>, <i>fionn</i>), e.g., <i>cearr</i>, <i>corr</i>, <i>gann</i>, <i>gearr</i>, <i>mall</i>, <i>teann</i>, <i>toll</i>.</>;
  },get "4-4-1-a-iv-p-sample1"(){
    return <>Tá praghas an bhia <b>ghann</b> ag ardú gach lá.</>;
  },get "4-4-1-a-iv-p-sample2"(){
    return <>Chuir costas an turais <b>ghearr</b> iontas orthu.</>;
  },get "4-4-1-a-iv-p-sample3"(){
    return <>Bhí boladh an aráin <b>dhoinn</b> ar fud an tí.</>;
  },get "4-4-1-a-v-p"(){
    return <>Ní dhéantar infhilleadh sa ghinideach uatha firinscneach ar na haidiachtaí aonsiollacha seo a leanas: <i>amh</i>, <i>cúng</i>, <i>deas</i> (sa bhrí <i>cineálta</i>), <i>leamh</i>, <i>mear</i>, <i>seang</i>, <i>searbh</i>, <i>tearc</i>, <i>tiubh</i>, <i>trom</i>, <i>tur</i>.</>;
  },get "4-4-1-a-v-p-sample1"(){
    return <>Chuir sí ola ar dhoras an bhealaigh <b>chúng</b>.</>;
  },get "4-4-1-a-v-p-sample2"(){
    return <>Labhair mé le húinéir an chapaill <b>mhear</b>.</>;
  },get "4-4-1-b-title"(){
    return "Baininscneach";
  },get "4-4-1-b-i-p"(){
    return <>Cuirtear <i>-e</i> leis an gconsan deiridh, agus caolaítear é más leathan dó, e.g., <i>gorm</i>, <i>goirme</i>; <i>maith</i>, <i>maithe</i> mar a dhéantar le hainmfhocail sa Dara Díochlaonadh (féach <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)).</>;
  },get "4-4-1-b-i-p-sample1"(){
    return <>Féach ar áilleacht na spéire <b>goirme</b>.</>;
  },get "4-4-1-b-i-p-sample2"(){
    return <>Cé hé údar na tuarascála <b>maithe</b>?</>;
  },get "4-4-1-b-ii-p"(){
    return <>I gcás aidiachtaí a chríochnaíonn ar <i>-(e)ach</i>, cuirtear <i>-(a)í</i> in ionad <i>-(e)ach</i>, e.g., <i>isteach</i>, <i>aistí</i>; <i>iontach</i>, <i>iontaí</i>; mar a dhéantar le hainmfhocail sa Dara Díochlaonadh (féach <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)).</>;
  },get "4-4-1-b-ii-p-sample1"(){
    return <>Tá guth na caillí <b>aistí</b> le cloisteáil ar an taifead.</>;
  },get "4-4-1-b-ii-p-sample2"(){
    return <>Thaitin téama na haiste <b>iontaí</b> liom.</>;
  },get "4-4-1-b-iii-p"(){
    return <>I gcás aidiachtaí a chríochnaíonn ar <i>-íoch</i>, athraítear <i>-íoch</i> go <i>-íche</i>, e.g., <i>eacnamaíoch</i>, <i>eacnamaíche</i>.</>;
  },get "4-4-1-b-iii-p-sample1"(){
    return <>Cathain a bhraithfimid deireadh na géarchéime <b>eacnamaíche</b>?</>;
  },get "4-4-1-b-iii-p-sample2"(){
    return <>Is maith an rud é fás na hearnála <b>tionsclaíche</b>.</>;
  },get "4-4-1-b-iv-p"(){
    return <>Féach <a href="./chapter2.html">Caibidil 2</a> don chur síos cuimsitheach ar athrú gutaí.</>;
  },get "4-4-2-title"(){
    return "Foirm an Ghairmigh Uatha";
  },get "4-4-2-p"(){
    return <>Is ionann foirm don ghairmeach uatha agus don ainmneach uatha, ach amháin i gcás aidiachtaí a gcaolaítear a gconsan deiridh sa ghinideach uatha firinscneach. I gcás na n&#x2011;aidiachtaí sin, is gnách gurb ionann foirm an ghairmigh uatha fhirinscnigh agus foirm an ghinidigh uatha fhirinscnigh, e.g., <i>a fhir mhóir</i>; <i>cóta an fhir mhóir</i>.</>;
  },get "4-4-3-title"(){
    return "Foirm an Iolra &mdash; Gach Tuiseal";
  },get "4-4-3-p"(){
    return <>Cuirtear <i>-a</i> leis na haidiachtaí a chríochnaíonn ar chonsan leathan agus <i>-e</i> leis na haidiachtaí a chríochnaíonn ar chonsan caol agus coimrítear aidiachtaí áirithe (ach féach lagiolraí sa ghinideach iolra, <a href="#sec_4_3_2_b">4.3.2(b)</a>).</>;
  },get "4-4-3-p-sample1"(){
    return <>Cá bhfuil na peileadóirí <b>clúiteacha</b>?</>;
  },get "4-4-3-p-sample2"(){
    return <>Foilseofar na haistí <b>maithe</b> san iris bhliantúil.</>;
  },get "4-4-3-p-sample3"(){
    return <>Bhí na daoine <b>uaisle</b> i láthair inné.</>;
  },get "4-4-4-title"(){
    return "Coimriú san Uatha agus san Iolra";
  },get "4-4-4-p"(){
    return "Déantar coimriú sa tuiseal ginideach uatha baininscneach agus san uimhir iolra i ngach tuiseal ar na haidiachtaí sa tábla seo a leanas, i measc eile, ach ní choimrítear na foirmeacha idir lúibíní.";
  },get "Table4C-col1"(){
    return "Ainmneach Uatha";
  },get "Table4C-col2"(){
    return "Ginideach Uatha Baininscneach";
  },get "Table4C-col3"(){
    return "Iolra";
  },get "4-5-title"(){
    return "An Dara Díochlaonadh";
  },get "4-5-p"(){
    return <>Cuimsítear sa díochlaonadh seo aidiachtaí a chríochnaíonn ar <i>-úil</i>, mar aon le roinnt aidiachtaí a chríochnaíonn ar <i>-ir</i>, e.g., <i>óir</i>, <i>deacair</i>, <i>socair</i>.</>;
  },get "4-5-1-title"(){
    return "Foirm an Ghinidigh Uatha";
  },get "4-5-1-a-p"(){
    return "Ní théann aon infhilleadh ar aidiachtaí an díochlaonta seo.";
  },get "4-5-1-a-p-sample1"(){
    return <>Cá bhfuil athair an fhir <b>chóir</b>?</>;
  },get "4-5-1-a-p-sample2"(){
    return <>Léigh mé tús an leabhair <b>shuimiúil</b>.</>;
  },get "4-5-1-b-p"(){
    return <>Leathnaítear an consan deiridh agus cuirtear <i>-a</i> leis.</>;
  },get "4-5-1-b-p-sample1"(){
    return <>Cá bhfuil athair na mná <b>cáiliúla</b>?</>;
  },get "4-5-1-b-p-sample2"(){
    return <>Léigh mé tús na haiste <b>deacra</b>.</>;
  },get "4-5-2-title"(){
    return "Foirm an Iolra &mdash; Gach Tuiseal";
  },get "4-5-2-a-p"(){
    return <>Leathnaítear an consan deiridh agus cuirtear <i>-a</i> leis mar a dhéantar sa ghinideach uatha baininscneach (ach féach lagiolraí sa ghinideach iolra, <a href="#sec_4_3_2_b">4.3.2(b)</a>).</>;
  },get "4-5-2-a-p-sample1"(){
    return <>Cá bhfuil na fir <b>cháiliúla</b> agus na mná <b>dathúla</b>?</>;
  },get "4-5-2-a-p-sample2"(){
    return <>Léigh mé na dánta <b>suimiúla</b> inné.</>;
  },get "4-5-2-b-p"(){
    return <>Coimrítear <i>deacair</i>, <i>deacra</i>; <i>socair</i>, <i>socra</i> sa ghinideach uatha agus san uimhir iolra.</>;
  },get "4-6-title"(){
    return "An Tríú Díochlaonadh";
  },get "4-6-1-p"(){
    return <>Cuimsítear sa díochlaonadh seo aidiachtaí a chríochnaíonn ar ghuta, e.g., <i>cliste</i>, <i>cróga</i>.</>;
  },get "4-6-2-p"(){
    return <>Ní dhéantar infhilleadh ach ar dhá aidiacht sa díochlaonadh seo: <i>breá</i> agus <i>te</i>. Athraíonn <i>breá</i> go <i>breátha</i> sa ghinideach uatha baininscneach agus san uimhir iolra agus athraíonn <i>te</i> go <i>teo</i> san uimhir iolra (ach féach lagiolraí sa ghinideach iolra, <a href="#sec_4_3_2_b">4.3.2(b)</a>).</>;
  },get "4-6-2-sample-row1"(){
    return "Ainmneach uatha";
  },get "4-6-2-sample-row2"(){
    return "Ginideach uatha";
  },get "4-6-2-sample-row3"(){
    return "Ainmneach iolra";
  },get "4-6-2-sample1"(){
    return <>Tine <b>bhreá the</b> a bhí ann.</>;
  },get "4-6-2-sample2"(){
    return <>Dath na tine <b>breátha te</b>.</>;
  },get "4-6-2-sample3"(){
    return <>Lasadh na tinte <b>breátha teo</b>.</>;
  },get "4-7-title"(){
    return "Achoimre ar Dhíochlaontaí na nAidiachtaí";
  },get "Table4D-title"(){
    return "Ainmfhocal Firinscneach Uatha";
  },get "Table4D-caption"(){
    return "Achoimre ar Dhíochlaontaí na hAidiachta &mdash; Firinscneach Uatha";
  },get "Table4D-col1"(){
    return "Tuiseal";
  },get "Table4D-col2"(){
    return "An Chéad Díochlaonadh";
  },get "Table4D-col3"(){
    return "An Dara Díochlaonadh";
  },get "Table4D-col4"(){
    return "An Triú Díochlaonadh";
  },get "Table4D-case1"(){
    return "Ainmneach";
  },get "Table4D-case2"(){
    return "Gairmeach";
  },get "Table4D-case3"(){
    return "Tabharthach";
  },get "Table4D-case4"(){
    return "Ginideach";
  },get "Table4D-footnote"(){
    return "Ach féach 1.7 Córas an tSéimhithe";
  },get "Table4E-title"(){
    return "Ainmfhocal Baininscneach Uatha";
  },get "Table4E-caption"(){
    return "Achoimre ar Dhíochlaontaí na hAidiachta &mdash; Baininscneach Uatha";
  },get "Table4F-title"(){
    return "Ainmfhocal Firinscneach Iolra";
  },get "Table4F-caption"(){
    return "Achoimre ar Dhíochlaontaí na hAidiachta &mdash; Firinscneach Iolra";
  },get "Table4G-title"(){
    return "Ainmfhocal Baininscneach Iolra";
  },get "Table4G-caption"(){
    return "Achoimre ar Dhíochlaontaí na hAidiachta &mdash; Baininscneach Iolra";
  },get "4-8-title"(){
    return "Céimeanna Comparáide na hAidiachta";
  },get "4-8-1-a-p"(){
    return <>Is gnách gurb ionann foirm do bhreischéim agus do shárchéim aidiachta agus don ghinideach uatha baininscneach, e.g., <i>ard</i>, <i>airde</i>; <i>breá</i>, <i>breátha</i>; <i>cóir</i>, <i>córa</i>; <i>dathúil</i>, <i>dathúla</i>; <i>deacair</i>, <i>deacra</i>; <i>díreach</i>, <i>dírí</i>.</>;
  },get "4-8-1-a-p-sample1"(){
    return <>Faigh an luach is <b>airde</b> air.</>;
  },get "4-8-1-a-p-sample2"(){
    return <>Is í Ciara an cailín is <b>dathúla</b> sa rang.</>;
  },get "4-8-1-a-p-sample3"(){
    return <>An rud is <b>deacra</b> faoin bhfilíocht, a léamh mar is cóir.</>;
  },get "4-8-1-b-p"(){
    return <>Is ionann freisin foirm do bhreischéim agus do shárchéim aidiachta agus don ghinideach uatha baininscneach i gcás aidiachtaí a chríochnaíonn ar <i>-íoch</i>, e.g., <i>buíoch</i>, <i>buíche</i>; <i>débhríoch</i>, <i>débhríche</i>; <i>imníoch</i>, <i>imníche</i>; <i>impíoch</i>, <i>impíche</i>; <i>taithíoch</i>, <i>taithíche</i>; <i>uathoibríoch</i>, <i>uathoibríche</i>.</>;
  },get "4-8-1-b-p-sample1"(){
    return <>Is iadsan na daoine is <b>imníche</b> sa tír.</>;
  },get "4-8-1-b-p-sample2"(){
    return <>Is eisean is <b>taithíche</b> ar an obair seo.</>;
  },get "4-8-1-b-p-sample3"(){
    return <>Cuirfear an córas is <b>uathoibríche</b> i bhfeidhm.</>;
  },get "4-8-2-p"(){
    return <>Tá foirmeacha neamhrialta ar roinnt aidiachtaí, e.g., <i>beag</i>, <i>lú</i>; <i>dócha</i>, <i>dóichí</i>; <i>fada</i>, <i>faide (sia)</i>; <i>fogas</i>, <i>foisce</i>; <i>furasta</i>, <i>fusa</i>; <i>gearr</i>, <i>giorra</i>; <i>iomaí</i>, <i>lia</i>; <i>maith</i>, <i>fearr</i>; <i>mór</i>, <i>mó</i>; <i>olc</i>, <i>measa</i>; <i>te</i>, <i>teo</i>.</>;
  },get "4-8-2-p-sample1"(){
    return <>Is é Rónán an duine is <b>fearr</b> sa rang.</>;
  },get "4-8-2-p-sample2"(){
    return <>Is í an chuimhne is <b>faide</b> (is <b>sia</b>) siar i mo cheann í.</>;
  },get "4-8-2-p-sample3"(){
    return <>Cé acu ceann is <b>mó</b>?</>;
  },get "4-8-3-title"(){
    return <>Foirmeacha ar lorg <i>dá</i> agus <i>a</i></>;
  },get "4-8-3-a-p"(){
    return <>I ndiaidh <i>dá</i> agus <i>a</i>, is cuma feidhm réamhthagrach nó feidhm iarthagrach a bheith acu, is gnách go n&#x2011;úsáidtear foirm is ionann agus foirm na breischéime den aidiacht nó foirm a dhíorthaíonn ón mbreischéim nó ón mbunchéim agus a chríochnaíonn ar <i>-cht</i>.</>;
  },get "4-8-3-b-p"(){
    return <>Ní úsáidtear ach foirm amháin i gcás na n&#x2011;aidiachtaí seo a leanas: <i>dócha</i>, <i>dóichí</i>; <i>dona</i>, <i>donacht</i>; <i>furasta</i>, <i>fusacht</i>; <i>gearr</i>, <i>giorracht</i>; agus i gcás na leaganacha neamhrialta seo: <i>beag</i>, <i>laghad</i>; <i>fada</i>, <i>fad</i>; <i>iomaí</i>, <i>liacht</i>; <i>maith</i>, <i>feabhas</i>; <i>mór</i>, <i>méad/méid</i>; <i>olc</i>, <i>olcas</i>; <i>tiubh</i>, <i>tiús</i>.</>;
  },get "4-8-3-c-p"(){
    return <>Úsáidtear <i>méid</i> seachas <i>méad</i> i gcásanna áirithe, e.g., <i>dá mhéad airgead a bhí aici</i> ach <i>a mhéid is indéanta le réasún</i>; <i>a mhéid is gá</i>.</>;
  },get "4-8-3-c-p-sample1"(){
    return <>B&rsquo;aoibhinn liom <b>a áille</b> (a bhinne, a chruinne, a líofa, a réidhe, a shoiléire) a labhair sí.</>;
  },get "4-8-3-c-p-sample2"(){
    return <>Ní chreidfeá <b>a achrannaí</b> (a dhonacht, a olcas, a shleamhaine, a uaigní) a bhí an áit.</>;
  },get "4-8-3-c-p-sample3"(){
    return <>Fuair sé ardmholadh <b>trína fheabhas</b> a rinne sé an obair.</>;
  },get "4-8-3-c-p-sample4"(){
    return <><b>Dá chríonna</b> (dá chróga, dá fheabhas, dá ghlice, dá oilte) é, níor éirigh an gnó leis.</>;
  },get "4-8-3-c-p-sample5"(){
    return <><b>Dá dhonacht</b> (dá ghránna, dá leisciúla, dá olcas, dá shuaraí) é, caithfear glacadh leis.</>;
  },get "4-8-3-c-p-sample6"(){
    return <><b>Dá mhéad</b> dúil a bhí aici ann, níor cheannaigh sí sa deireadh é.</>;
  },get "4-9-title"(){
    return "An Aidiacht Shealbhach";
  },get "4-9-p"(){
    return <>De bhrí go bhfeidhmíonn na haidiachtaí sealbhacha, <i>mo</i>, <i>do</i>, <i>a</i> (firinscneach agus baininscneach uatha), <i>ár</i>, <i>bhur</i> agus <i>a</i> (iolra) mar fhorainmneacha sa ghinideach, déantar trácht orthu i <a href="./chapter8.html">gCaibidil 8</a>.</>;
  },get "4-10-title"(){
    return "An Aidiacht Thaispeántach";
  },get "4-10-p"(){
    return <>Is iad <i>seo</i>, <i>sin</i>, <i>siúd</i> agus <i>úd</i> na haidiachtaí taispeántacha. (Cé gur forainmnigh thaispeántacha iad <i>seo</i>, <i>sin</i> agus <i>siúd</i>, is minic a dhéantar tagairt dóibh mar aidiachtaí taispeántacha.)</>;
  },get "4-10-p-sample1"(){
    return <>Tá an fear <b>seo</b> tinn.</>;
  },get "4-10-p-sample2"(){
    return <>Beidh an buachaill <b>seo</b> ag teacht liom.</>;
  },get "4-10-p-sample3"(){
    return <>Is liomsa iad <b>seo</b>.</>;
  },get "4-10-p-sample4"(){
    return <>Níl an doras <b>sin</b> dúnta.</>;
  },get "4-10-p-sample5"(){
    return <>Síle is ainm don chailín <b>sin</b>.</>;
  },get "4-10-p-sample6"(){
    return <>Díoladh a theach <b>siúd</b> inné.</>;
  },get "4-10-p-sample7"(){
    return <>Is aige <b>siúd</b> a bhí an t&#x2011;airgead.</>;
  },get "4-10-p-sample8"(){
    return <>An bhfeiceann tú an pháirc <b>úd</b> thall?</>;
  },get "4-11-title"(){
    return "An Aidiacht Fhaisnéiseach";
  },get "4-11-p"(){
    return <>Is aidiacht fhaisnéiseach aidiacht atá ag cáiliú an ainmní mar fhaisnéis nó mar chuid den fhaisnéis, e.g., <i>Nach deas é?</i>; <i>Tá an aimsir fuar</i>. Ní dhéantar an aidiacht fhaisnéiseach a infhilleadh ná ní chuirtear séimhiú uirthi.</>;
  },get "4-11-p-sample1"(){
    return <>Bhí an traein <b>folamh</b>.</>;
  },get "4-11-p-sample2"(){
    return <>Bíonn na busanna <b>déanach</b>.</>;
  },get "4-11-p-sample3"(){
    return <>An bhfuil an bhean sin <b>saibhir</b>?</>;
  },get "4-11-p-sample4"(){
    return <>Beidh an bhainis sin <b>mór</b>.</>;
  },get "4-12-title"(){
    return "An Aidiacht Bhriathartha";
  },get "4-12-1-p"(){
    return "Feidhmíonn an aidiacht bhriathartha mar ghnáthaidiacht. Úsáidtear an aidiacht bhriathartha &mdash;";
  },get "4-12-1-a-p"(){
    return <>mar aidiacht cháilíochta, e.g., <i>Is bean phósta í</i>;</>;
  },get "4-12-1-b-p"(){
    return <>mar aidiacht fhaisnéiseach ar lorg na copaile, e.g., <i>Ní briste atá sé</i>;</>;
  },get "4-12-1-c-p"(){
    return <>mar aidiacht fhaisnéiseach ar lorg an bhriathair <i>bí</i> ag léiriú staid an chuspóra tar éis an ghnímh, e.g., <i>Is í atá tugtha don obair</i>;</>;
  },get "4-12-1-d-p"(){
    return <>mar aidiacht fhaisnéiseach ar lorg an bhriathair <i>bí</i> ag léiriú staid an ghníomhaí tar éis an ghnímh, e.g., <i>Táimid beirthe go maith leis an socrú sin</i>.</>;
},};
