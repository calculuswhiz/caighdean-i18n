import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  get "teidealNaCaibidle"() {
    return "Definite and Indefinite Nouns, Abbreviations and the Form of the Nominative in Place of the Genitive";
  },
  get "3-title"() {
    return <>{en_US_Common["Caibidil"]} 3 | {en_US["teidealNaCaibidle"]}</>;
  },
  get "3-1-title"() {
    return "Definite and Indefinite Nouns";
  },
  get "3-1-1-p"() {
    return <>A noun is either definite or indefinite. A definite noun is a noun that refers to a definite person or thing. A definite person or thing is referred to in one of the ways shown in <a href="#sec_3_1_2">3.1.2</a> below. Any other noun is an indefinite noun.</>;
  },
  get "3-1-2-p"() {
    return "A definite noun is &mdash;";
  },
  get "3-1-2-a"() {
    return <>a proper name (names of particular people or places), e.g., <i>Fionnán</i>, <i>Gráinne</i>, <i>Leamhcán</i>:</>;
  },
  get "3-1-2-a-sample1"() {
    return <>Her name is <b>Caoimhe</b>.</>;
  },
  get "3-1-2-a-sample2"() {
    return <>They live in <b>America</b>.</>;
  },
  get "3-1-2-b"() {
    return <>a noun that is preceded by the article, e.g., <i>an tAcht</i> <Tl tlText="the Act"></Tl>, <i>an obair</i> <Tl tlText="the work"></Tl>, <i>an fhadhb</i> <Tl tlText="the problem"></Tl>:</>;
  },
  get "3-1-2-b-sample1"() {
    return <>Did you see <b>that</b> big <b>airplane</b>?</>;
  },
  get "3-1-2-b-sample2"() {
    return <><b>The moon</b> is full tonight.</>;
  },
  get "3-1-2-b-sample3"() {
    return <>Was <b>the</b> taxi <b>driver</b> at the meeting?</>;
  },
  get "3-1-2-c"() {
    return <>a noun that is preceded by a possessive adjective, e.g., <i>mo mhac</i> <Tl tlText="my son"></Tl>, <i>a hathair</i> <Tl tlText="her father"></Tl>, <i>a ngluaisteán</i> <Tl tlText="their car"></Tl>:</>;
  },
  get "3-1-2-c-sample1"() {
    return <>Have you met <b>my brother</b>?</>;
  },
  get "3-1-2-c-sample2"() {
    return <><b>Her father</b> told her the story.</>;
  },
  get "3-1-2-c-sample3"() {
    return <>She was cleaning <b>her</b> football <b>shoes</b>. (<i>pl.</i>)</>;
  },
  get "3-1-2-c-sample4"() {
    return <>He went for <b>his cup</b> of tea. (<i>sg.</i>)</>;
  },
  get "3-1-2-d"() {
    return <>a noun that is preceded by <i>gach</i> <Tl tlText="every"></Tl>, <i>gach aon</i> <Tl tlText="every single"></Tl> or <i>gach uile</i> <Tl tlText="all"></Tl>:</>;
  },
  get "3-1-2-d-sample1"() {
    return <><b>Every person</b> in the family was present. </>;
  },
  get "3-1-2-d-sample2"() {
    return <>He comes in at the same time <b>every single day</b>.</>;
  },
  get "3-1-2-d-sample3"() {
    return <>The amended act applies to <b>all</b> mechanical <b>vehicles</b>.</>;
  },
  get "3-1-2-e"() {
    return <>a noun that has a number or letter following it, e.g., <i>Cuid III</i> <Tl tlText="Part III"></Tl>, <i>riail a sé</i> <Tl tlText="Rule Six"></Tl>, <i>Bus 16</i> <Tl tlText="Bus 16"></Tl>, <i>mír (b)</i> <Tl tlText="item (b)"></Tl>:</>;
  },
  get "3-1-2-e-sample1"() {
    return <>Try <b>question four</b>.</>;
  },
  get "3-1-2-e-sample2"() {
    return <>Did you check <b>Appendix A</b>?</>;
  },
  get "3-1-2-f"() {
    return <>a noun that has a definite noun following it, e.g., <i>oifig Áine</i> <Tl tlText="Áine&rsquo;s office"></Tl>, <i>óráid an Aire</i> <Tl tlText="the Minister&rsquo;s speech"></Tl>, <i>teach mo mhic</i> <Tl tlText="my son&rsquo;s house"></Tl>, <i>tús gach bliana</i> <Tl tlText="the beginning of each year"></Tl>, <i>sonraí mhír (b)</i> <Tl tlText="details of item (b)"></Tl>:</>;
  },
  get "3-1-2-f-sample1"() {
    return <>The festival is being organized in collaboration with <b>the people of Tallaght</b>.</>;
  },
  get "3-1-2-f-sample2"() {
    return <>Is it the <b>teacher&rsquo;s book</b>? </>;
  },
  get "3-1-2-f-sample3"() {
    return <>Did you speak with <b>the hotel manager</b>?</>;
  },
  get "3-1-2-f-sample4"() {
    return <>He visited <b>his daughter&rsquo;s house</b>.</>;
  },
  get "3-1-2-f-sample5"() {
    return <>He knows <b>the name of every player</b>.</>;
  },
  get "3-1-2-f-sample6"() {
    return <>The <b>Bus 16 Team</b> was highly commended.</>;
  },
  get "3-1-2-g"() {
    return <>a noun in the vocative case, e.g., <i>a bhean</i> <Tl tlText="woman"></Tl>, <i>a dhuine uasail</i> <Tl tlText="noble person"></Tl>:</>;
  },
  get "3-1-2-g-sample1"() {
    return <>What are you doing there, <b>son</b>?</>;
  },
  get "3-1-2-g-sample2"() {
    return <>You would not believe it, <b>dear</b>.</>;
  },
  get "3-1-3-p1"() {
    return <>The article is often a part of the proper name (especially for place names), and the article must be used in these contexts, e.g., <i>an Ísiltír</i> <Tl tlText="the Netherlands"></Tl>, <i>an tSionainn</i> <Tl tlText="the Seine"></Tl>, <i>an Longfort</i> <Tl tlText="Longford"></Tl>, <i>an Streoillín</i> <Tl tlText="the Streelin"></Tl>, <i>an Earagail</i> <Tl tlText="the Erigail"></Tl>, <i>An tOileánach</i> (when it comes to the book) <Tl tlText="The Islander"></Tl>, <i>na Cruacha Dubha</i> <Tl tlText="the Black Stacks"></Tl>.</>;
  },
  get "3-1-3-sample1"() {
    return <>I was on <b>the Erigail</b> yesterday.</>;
  },
  get "3-1-3-sample2"() {
    return <>Who wrote <i><b>Love and Grief</b></i>?</>;
  },
  get "3-1-3-p2"() {
    return <>Note, in contexts where it is usual to use the article with a proper name, the article is not put in if the proper name is functioning as an adjective, e.g., <i>an Nollaig</i> vs <i>cárta Nollag</i>; <i>an Ardteist</i> vs <i>scrúdú Ardteiste</i>; <i>an Cháisc</i> vs <i>ubh Chásca</i>.</>;
  },
  get "3-1-4-p1"() {
    return <>The article is used before genitive <i>Éire</i> <Tl tlText="Ireland"></Tl>, <i>Albain</i> <Tl tlText="Scotland"></Tl>, <i>Gaillimh</i> <Tl tlText="Galway"></Tl>, e.g., <i>oileán na hÉireann</i> <Tl tlText="the island of Ireland"></Tl>, <i>foireann na hAlban</i> <Tl tlText="the team of Scotland"></Tl>, <i>cathair na Gaillimhe</i> <Tl tlText="the city of Galway"></Tl> (see <a href="./chapter1.html#sec_1_1_5_i_A">1.1.5(i)A</a>).</>;
  },
  get "3-1-4-p1-sample1"() {
    return <>She knows a lot about <b>the</b> literature <b>of Ireland</b>.</>;
  },
  get "3-1-4-p1-sample2"() {
    return <>Her speech has <b>the</b> flavor of <b>Galway</b>.</>;
  },
  get "3-1-4-p2"() {
    return <>The article is left out before <i>Éireann</i> <Tl tlText="Ireland"></Tl> in some official forms, however, e.g., <i>Dáil Éireann</i> <Tl tlText="the Irish Parliament"></Tl>, <i>Seanad Éireann</i> <Tl tlText="the Irish Senate"></Tl>, <i>Iarnród Éireann</i> <Tl tlText="Irish Rail"></Tl>, <i>Bus Éireann</i> <Tl tlText="Irish Bus"></Tl>, and in some old forms and poetic forms, e.g., <i>plúr ban Éireann</i> <Tl tlText="white flour of Ireland"></Tl>, <i>bánchnoic Éireann</i> <Tl tlText="white hills of Ireland"></Tl>.</>;
  },
  get "3-1-4-p2-sample1"() {
    return <>It is a program from <b>Raidió Teilifís Éireann</b>.</>;
  },
  get "3-1-4-p2-sample2"() {
    return <>It is the <b>choice of Irish women</b>.</>;
  },
  get "3-1-5-p"() {
    return <>The article can be used with trade names when they have an adjectival function, e.g., <i>an buidéal Coca Cola</i> <Tl tlText="the Coca Cola bottle"></Tl>; <i>sa mhála Supervalu</i> <Tl tlText="in the Supervalu bag"></Tl>; <i>laistigh den doiciméad Word</i> <Tl tlText="inside the Word document"></Tl>; <i>ar an ríomhaire Apple</i> <Tl tlText="on the Apple computer"></Tl>.</>;
  },
  get "3-1-5-p-sample1"() {
    return <>This is <b>the Singer sewing machine</b> that my grandmother bought.</>;
  },
  get "3-1-5-p-sample2"() {
    return <>I saved it in the same <b>Excel spreadsheet</b>.</>;
  },
  get "3-1-6-p1"() {
    return <>The article is not put in front of a noun if it is qualified with a definite noun in the genitive, e.g., <i>tiománaí an tacsaí</i> <Tl tlText="the driver of the taxi"></Tl>, <i>ceadúnas thiománaí an tacsaí</i> <Tl tlText="the license of the driver of the taxi"></Tl>, <i>dáta éaga cheadúnas thiománaí an tacsaí</i> <Tl tlText="the expiration date of the license of the driver of the taxi"></Tl> (when a certain taxi is involved).</>;
  },
  get "3-1-6-p1-sample1"() {
    return <>Was the <b>owner of the shop</b> able to help you?</>;
  },
  get "3-1-6-p1-sample2"() {
    return <>The keys were left in the <b>owner of the shop</b>&rsquo;s accountant&rsquo;s office.</>;
  },
  get "3-1-6-p2"() {
    return <>The article is put in front of the first noun if it is qualified with an indefinite noun, e.g., <i>an tiománaí tacsaí</i> <Tl tlText="the taxi driver"></Tl>, <i>an tiománaí leoraí</i> <Tl tlText="the lorry driver"></Tl> (a certain type of driver); <i>an freastalaí beáir</i> <Tl tlText="the bar server"></Tl>, <i>an freastalaí bialainne</i> <Tl tlText="the restaurant server"></Tl> (a certain type of server); <i>an t&#x2011;oifigeach feidhmiúcháin</i> <Tl tlText="the executive officer"></Tl>, <i>an t&#x2011;oifigeach riaracháin</i> <Tl tlText="the administrative officer"></Tl> (a certain type of officer) (see <a href="#sec_3_1_9">3.1.9</a>).</>;
  },
  get "3-1-6-p2-sample1"() {
    return <>He is <b>the</b> best <b>landowner</b> in the area.</>;
  },
  get "3-1-6-p2-sample2"() {
    return <>She is <b>the</b> fastest <b>soccer player</b> I have ever seen.</>;
  },
  get "3-1-7-p1"() {
    return <>There are some noun phrases that have nouns in them which would be definite according to <a href="#sec_3_1_2">3.1.2</a> but are indefinite because the whole phrase is being used as a single unit of meaning as an indefinite noun. Sometimes, in these contexts, the article is used when the whole phrase functions as a definite noun, e.g., <i>an Leabhar Eoin</i> <Tl tlText="the Book of John"></Tl>; <i>an Choróin Mhuire</i> <Tl tlText="the Crown of Mary"></Tl>; <i>ba mhór an grá Dia é</i> <Tl tlText="it was great the love of God"></Tl>; <i>an fear sin na n&#x2011;uibheacha</i> <Tl tlText="that man of the eggs"></Tl>.</>;
  },
  get "3-1-7-p1-sample1"() {
    return <>They left when <b>the hour</b> was up.</>;
  },
  get "3-1-7-p1-sample2"() {
    return <>Isn&rsquo;t it <b>the pity of Mary</b>!</>;
  },
  get "3-1-7-p2"() {
    return <>Note that the article is also retained when a number or letter comes after a noun that is qualified by a demonstrative pronominal, e.g., <i>an t&#x2011;alt sin 5</i> <Tl tlText="that article 5"></Tl>; <i>an mhír sin (f)</i> <Tl tlText="that item (f)"></Tl>.</>;
  },
  get "3-1-8-p"() {
    return <>As for titles with years accompanying them &mdash; festival titles and annual reports, for example &mdash; the article should only be used when the date and title have sparate units of meaning. These have different meanings: <i>An tOireachtas, 2010</i> and <i>Oireachtas 2010</i> or <i>An Tuarascáil Bhliantúil, 2009</i> and <i>Tuarascáil Bhliantúil 2009</i>.</>;
  },
  get "3-1-8-p-sample1"() {
    return <>Is <b>Annual Report 2015</b> ready?</>;
  },
  get "3-1-8-p-sample2"() {
    return <><b>The Information Commissioner&rsquo;s Annual Report, 2014</b> will be published shortly.</>;
  },
  get "3-1-8-p-sample3"() {
    return <><b>The Education Act, 2015</b> was issued yesterday.</>;
  },
  get "3-1-9-p"() {
    return <>The genitive case is used in the following situations (see other situations in <a href="./chapter1.html#sec_1_5_1">1.5.1</a>) &mdash;</>;
  },
  get "3-1-9-a-p"() {
    return "when the definite noun is qualified by other definite nouns:";
  },
  get "3-1-9-b-p"() {
    return "when an indefinite noun is qualified by another indefinite noun:";
  },
  get "3-1-9-c-p"() {
    return "when the definite noun is qualified by an indefinite noun:";
  },
  get "3-1-10-p"() {
    return "Once an indefinite noun is qualified with a definite noun, it is no longer an indefinite noun but a definite noun. Accordingly, if the meaning is indefinite, a prepositional clause or preposition must be used to indicate the connection between the nouns.";
  },
  get "3-1-10-a-p"() {
    return <><i>de</i> is used if referring to a portion or part, e.g., <i>Ballstát den Aontas Eorpach</i> <Tl tlText="a member state of the European Union"></Tl>; <i>gloine den bheoir gheal</i> <Tl tlText="a glass of the light beer"></Tl>:</>;
  },
  get "3-1-10-a-p-sample1"() {
    return <>Did you get some <b>of the</b> money?</>;
  },
  get "3-1-10-a-p-sample2"() {
    return <>The questions came from people <b>of the</b> community.</>;
  },
  get "3-1-10-b-p"() {
    return <><i>de chuid</i> is used when the item in question is one of a group of many items of the same type, e.g., <i>iománaí de chuid na Gaillimhe</i> <Tl tlText="one of Galway&rsquo;s hurlers"></Tl>; <i>feidhmeanna áirithe de chuid an choiste</i> <Tl tlText="certain functions of the committee"></Tl>:</>;
  },
  get "3-1-10-b-p-sample1"() {
    return <><b>One of the</b> computers in the office was broken.</>;
  },
  get "3-1-10-b-p-sample2"() {
    return <>It is <b>one of the</b> Department&rsquo;s grants.</>;
  },
  get "3-1-10-c-p"() {
    return <>Another preposition is used (<i>le</i>, etc.) in other contexts to express indefiniteness, e.g., <i>deartháir le Bríd</i> <Tl tlText="a brother of Bríd&rsquo;s"></Tl>; <i>úrscéal le Máire</i> <Tl tlText="a novel by Máire"></Tl>:</>;
  },
  get "3-1-10-c-p-sample1"() {
    return <>The toy that he broke was <b>one of Caoimhe&rsquo;s toys</b>.</>;
  },
  get "3-1-10-c-p-sample2"() {
    return <>Have you [all] read <b>a report from the European Parliament</b>?</>;
  },
  get "3-1-11-p"() {
    return <>Often as with <a href="#sec_3_1_10_b">3.1.10(b)</a> above, however, one of the substitute words <i>ceann</i> <Tl tlText="one"></Tl>, <i>cuid</i> <Tl tlText="some"></Tl> or <i>duine</i> <Tl tlText="a person"></Tl> is more appropriate in place of the first noun, e.g., <i>ceann de ríomhairí na hoifige</i> <Tl tlText="one of the office&rsquo;s computers"></Tl>; <i>duine d&rsquo;iománaithe na Gaillimhe</i> <Tl tlText="one of Galway&rsquo;s hurlers"></Tl>. It is also possible to use the noun twice, e.g., <i>dán de dhánta Uí Bhruadair</i> <Tl tlText="a poem from the poems of Uí Bhruadair"></Tl>.</>;
  },
  get "3-1-11-p-sample1"() {
    return <>He broke <b>one</b> of the cups in the kitchen.</>;
  },
  get "3-1-11-p-sample2"() {
    return <><b>Some</b> young people will always go abroad.</>;
  },
  get "3-1-11-p-sample3"() {
    return <>He is <b>a member</b> of the office staff.</>;
  },
  get "3-1-11-p-sample4"() {
    return <>Isn&rsquo;t it <b>a song of</b> Kila&rsquo;s songs?</>;
  },
  get "3-1-11-note"() {
    return <>The same structures are used sometimes for definite nouns, e.g., <i>an ghloine dheireanach den fhíon dearg</i> <Tl tlText="the last glass of red wine"></Tl>; <i>an chuid is fearr den leabhar</i> <Tl tlText="the best part of the book"></Tl>.</>;
  },
  get "3-1-11-p-sample5"() {
    return <><b>All of</b> the company&rsquo;s computers were broken.</>;
  },
  get "3-1-11-p-sample6"() {
    return <>It was <b>the</b> worst <b>of all</b> the movies we saw.</>;
  },
  get "3-2-title"() {
    return "Abbreviations and Acronyms";
  },
  get "3-2-1-title"() {
    return "General";
  },
  get "3-2-1-a-p"() {
    return <>An abbreviation or acronym is never inflected or given an initial mutation. (<i>SAM &mdash; Stáit Aontaithe Mheiriceá</i> <Tl tlText="United States of America"></Tl>; <i>OÉ &mdash; Ollscoil na hÉireann</i> <Tl tlText="National University of Ireland"></Tl>.)</>;
  },
  get "3-2-1-a-p-sample1"() {
    return <>He wrote a book <b>about the USA</b>. <br />
      <Tl tlText="United States of America"></Tl></>;
  },
  get "3-2-1-a-p-sample2"() {
    return <>He has an interview <b>with NUI</b> Galway.<br />
      <Tl tlText="National University of Ireland"></Tl></>;
  },
  get "3-2-1-b-p"() {
    return <><i>in</i> (rather than <i>i</i>) is the form of the preposition <i>i</i> used before an abbreviation or acronym. (<i>RTÉ &mdash; Raidió Teilifís Éireann</i> <Tl tlText="Irish Radio and Television"></Tl>; <i>CSE &mdash; Ciste Sóisialta na hEorpa</i> <Tl tlText="European Social Fund"></Tl>.)</>;
  },
  get "3-2-1-b-p-sample1"() {
    return <>She works <b>at RTÉ</b>.</>;
  },
  get "3-2-1-b-p-sample2"() {
    return <>There are millions of euros <b>in the ESF</b>.<br />
      <Tl tlText="European Social Fund"></Tl></>;
  },
  get "3-2-1-c-p1"() {
    return <>The preposition <i>de</i> and <i>do</i> are not shortened to <i>d&rsquo;</i> before abbreviations and acronyms starting with a vowel. (<i>OLAF &mdash; an Oifig Eorpach Frith-Chalaoise</i> <Tl tlText="European Anti-Fraud Office"></Tl>; <i>ÍMAT &mdash; Íoc mar a Thuillir</i> <Tl tlText="Pay As You Earn"></Tl>.)</>;
  },
  get "3-2-1-c-p1-sample1"() {
    return <>The issue was discussed <b>at OLAF</b> meetings.</>;
  },
  get "3-2-1-c-p1-sample2"() {
    return <><b>PAYE</b> has been recognized as a successful tax system.<br />
      <Tl tlText="Pay As You Earn"></Tl></>;
  },
  get "3-2-1-c-p2"() {
    return "Note that the writer always has the choice of writing the words on which the abbreviation or acronym is based.";
  },
  get "3-2-1-c-p2-sample1"() {
    return <>Is this approach based on the <b>Single European Act</b>?</>;
  },
  get "3-2-1-c-p2-sample2"() {
    return <>The <b>United Nations</b> hopes that the process will have a positive outcome.</>;
  },
  get "3-2-2-title"() {
    return "Individual Things";
  },
  get "3-2-2-p"() {
    return "There are two systems that can be used to deal with abbreviations and with acronyms that are titles of organizations, publications, contracts, agreements, schemes, systems or other similar things of which only one exists &mdash; the system without the article and the system with the article. Except for statutory texts where the system without the article is always used, it is up to the writer to choose which system to use. It is recommended not to mix the two systems.";
  },
  get "3-2-2-A-title"() {
    return "Individual things &mdash; the system without the article";
  },
  get "3-2-2-A-a-p"() {
    return <>In the system without the article, abbreviations and acronyms are treated as nouns are not preceded by the article (but see <a href="#sec_3_2_3_b">3.2.3(b)</a>). (<i>CTT &mdash; an Clár Tacaíochta Teaghlaigh</i>; <i>NA &mdash; na Náisiúin Aontaithe</i>; <i>OÉ &mdash; Ollscoil na hÉireann</i>)</>;
  },
  get "3-2-2-A-a-p-sample1"() {
    return <>The <b>USA</b> is a member of the Security Council.</>;
  },
  get "3-2-2-A-a-p-sample2"() {
    return <><b>NUI</b>&rsquo;s policies are focused on developing education.</>;
  },
  get "3-2-2-A-a-p-sample3"() {
    return <>Ministers of the <b>EU</b> Member States meet in the Council.<br />
      <Tl tlText="European Union"></Tl></>;
  },
  get "3-2-2-A-a-p-sample4"() {
    return <>Work is underway to dissolve the <b>CTT</b>.</>;
  },
  get "3-2-2-A-a-p-sample5"() {
    return <>She is working in collaboration with an <b>UN</b> Investigation Group.<br />
      <Tl tlText="United Nations"></Tl></>;
  },
  get "3-2-2-A-b-p"() {
    return <>An abbreviation or acronym is referred to as a singular masculine noun regardless of the number or gender on which the words are based. (<i>FSS &mdash; Feidhmeannacht na Seirbhíse Sláinte</i>.)</>;
  },
  get "3-2-2-B-title"() {
    return "Individual things &mdash; the system with the article";
  },
  get "3-2-2-B-p"() {
    return "In the system with the article, the article is used before abbreviations or before acronyms as appropriate. The use of the article is subject to the structure of the words the abbreviations or the acronym are based, as follows &mdash;";
  },
  get "3-2-2-B-a-p"() {
    return <>the article is not used before abbreviations or acronyms if they are based on a definite noun that do not have the article, e.g., <i>Stáit Aontaithe Mheiriceá</i> <Tl tlText="United States of America"></Tl>, <i>Raidió Teilifís Éireann</i> <Tl tlText="Irish Radio and Television"></Tl>, or if the article is in the middle of the words on which the abbreviations or the acronyms are based, e.g., <i>Feidhmeannacht na Seirbhíse Sláinte</i> <Tl tlText="The Health Service Executive"></Tl>, <i>Ollscoil na hÉireann</i> <Tl tlText="University of Ireland"></Tl>:</>;
  },
  get "3-2-2-B-a-p-sample1"() {
    return <>The <b>USA</b> is a member of the Security Council.</>;
  },
  get "3-2-2-B-a-p-sample2"() {
    return <><b>NUI</b>&rsquo;s policies are focused on developing education.</>;
  },
  get "3-2-2-B-b-p"() {
    return "the article is placed before abbreviations or acronyms if they are based on words having an article to make it definite. The singular or plural form of the article is used depending on the number of words on which the abbreviations or the acronyms are based:";
  },
  get "3-2-2-B-b-p-sample1"() {
    return <>Ministers of <b>the EU</b> Member States meet in the Council.</>;
  },
  get "3-2-2-B-b-p-sample2"() {
    return <>Who is eligible for funding <b>under the CTT</b>?</>;
  },
  get "3-2-2-B-b-p-sample3"() {
    return <>She is working in collaboration with an Investigation Team of <b>the UN</b>.</>;
  },
  get "3-2-2-B-c-p"() {
    return <>an abbreviation or acronym is referred to as a singular masculine noun regardless of the number or gender of the words on which it is based (<i>an IEA &mdash; an Ionstraim Eorpach Aonair</i> <Tl tlText="the European Single Instrument"></Tl>.)</>;
  },
  get "3-2-3-title"() {
    return "Multiple Things";
  },
  get "3-2-3-a-p"() {
    return <>If an abbreviation or acronym refers to multiple things (things that have more than one item in them), the article can be placed in front of it in order to distinguish it from other things of the same kind. (<i>CIN &mdash; Corparáid Ilnáisiúnta</i> <Tl tlText="Multi-National Corporation"></Tl>; <i>PO &mdash; Príomhoifigeach</i> <Tl tlText="Principal Officer"></Tl>)</>;
  },
  get "3-2-3-a-p-sample1"() {
    return <>She is <b>a</b> participating <b>MNC</b> employee.<br />
      <Tl tlText="multinational corporation"></Tl></>;
  },
  get "3-2-3-a-p-sample2"() {
    return <>- <i>but</i> She is an employee of <b>that participating MNC</b>.</>;
  },
  get "3-2-3-a-p-sample3"() {
    return <>The room is used as <b>a PO</b> office.</>;
  },
  get "3-2-3-a-p-sample4"() {
    return <>- <i>but</i> The room is used as <b>that PO office</b>.</>;
  },
  get "3-2-3-b-p"() {
    return <>The article can be used with a noun that is qualified by an abbreviation or an acronym which has an adjectival function in order to identify something specific from many things. (<i>uimhir PSP &mdash; uimhir Phearsanta Seirbhíse Poiblí</i> <Tl tlText="Personal Public Service Number"></Tl>; <i>CBL &mdash; Cáin Bhreisluacha</i> <Tl tlText="Value Added Tax"></Tl>; <i>DART &mdash; Dublin Area Rapid Transit</i>)</>;
  },
  get "3-2-3-b-p-sample1"() {
    return <>You will be given <b>a PPS number</b>.</>;
  },
  get "3-2-3-b-p-sample2"() {
    return <>- <i>but</i> Where is <b>the PPS number</b> that was given to you?</>;
  },
  get "3-2-3-b-p-sample3"() {
    return <><b>A high VAT rate</b> is in effect.</>;
  },
  get "3-2-3-b-p-sample4"() {
    return <>- <i>but</i> <b>The same VAT rate</b> has been in effect for a long time.</>;
  },
  get "3-2-3-b-p-sample5"() {
    return <>There is <b>a DART station</b> in this area.</>;
  },
  get "3-2-3-b-p-sample6"() {
    return <>- <i>but</i> Is <b>that the DART station</b> in question?</>;
  },
  get "3-2-3-c-p"() {
    return <>A plural form is created from an abbreviation or an acronym when referring to multiple things by adding <i>-anna</i> to it if it ends with a consonant and by adding <i>-nna</i> to it if it ends with a vowel. An abbreviation or acronym in the plural is referred to as a plural masculine noun.</>;
  },
  get "3-2-3-c-p-sample1"() {
    return <>Aren&rsquo;t <b>those the</b> reputable <b>MNCs</b>?</>;
  },
  get "3-2-3-c-p-sample2"() {
    return <><b>Those</b> are all <b>POs</b>.</>;
  },
  get "3-3-title"() {
    return "The Form of the Nominative in Place of the Genitive";
  },
  get "3-3-1-title"() {
    return "The Definite Nouns";
  },
  get "3-3-1-a-p1"() {
    return <>If a definite noun in the genitive comes after another word, it is customary for the other word to be left without inflection and its initial consonant to be lenited when it is subject to a word or form followed by the genitive (see also <a href="./chapter10.html#sec_10_2_6">10.2.6</a>). A noun that has a number or letter at the end is left without inflection and its initial consonant is also lenited &mdash;</>;
  },
  get "3-3-1-a-i-p"() {
    return "a proper name (name of a particular person or place):";
  },
  get "3-3-1-a-ii-p"() {
    return "a noun that is preceded by the article:";
  },
  get "3-3-1-a-iii-p"() {
    return "a noun with a possessive adjective:";
  },
  get "3-3-1-a-iv-p"() {
    return <>a noun that has <i>gach</i> <Tl tlText="each"></Tl>, <i>gach aon</i> <Tl tlText="each one"></Tl>, or <i>gach uile</i> <Tl tlText="all"></Tl> before it:</>;
  },
  get "3-3-1-a-v-p"() {
    return "a noun that has a number or letter following it:";
  },
  get "3-3-1-a-vi-p"() {
    return "a noun that has a definite noun following:";
  },
  get "3-3-1-a-p2"() {
    return <><b>But</b>, if the noun that has a definite noun following it is a verbal noun, the genitive change is done to it if another noun precedes it, e.g., <i>cosaint</i> <Tl tlText="protection"></Tl>, <i>madra cosanta na monarchan</i> <Tl tlText="the dog guarding the factory"></Tl>; <i>fuascailt</i> <Tl tlText="release"></Tl>, <i>bean fuascailte na ceiste</i> <Tl tlText="the woman answering the question"></Tl>; <i>cealgadh</i> <Tl tlText="sting"></Tl>, <i>beach cealgtha an pháiste</i> <Tl tlText="the bee stinging the child"></Tl>; <i>bualadh</i> <Tl tlText="striking"></Tl>, <i>innill buailte an arbhair</i> <Tl tlText="the machines striking the grain"></Tl>; <i>bailiú</i> <Tl tlText="collection"></Tl>, <i>seachtain bailithe na rátaí</i> <Tl tlText="the week of rate collection"></Tl>.</>;
  },
  get "3-3-1-b-p"() {
    return <>When a verbal noun is an integral part of a particular unit, e.g., <i>cur chun cinn</i> <Tl tlText="progress"></Tl>; <i>cur chuige</i> <Tl tlText="approach"></Tl>; <i>teacht i bhfeidhm</i> <Tl tlText="come into operation"></Tl>; which is subject to another noun or to a form followed by the genitive:</>;
  },
  get "3-3-1-b-i-p"() {
    return <>if the article precedes that verbal noun, it is the singular masculine that precedes it in every case and the verbal noun is not inflected, e.g., <i>luas an dul chun cinn</i> <Tl tlText="the speed of progress"></Tl>; <i>ag moladh an teacht i bhfeidhm</i> <Tl tlText="praising the implementation"></Tl>; <i>le linn an tabhairt amach</i> <Tl tlText="during the display"></Tl>; <i>i bhfianaise an tabhairt suas</i> <Tl tlText="in light of the surrender"></Tl>; <i>faoi réir an leagan amach</i> <Tl tlText="according to the arrangement"></Tl>. The article applies to the initial letter of the verbal noun, however, as it would apply on a singular masculine noun in the genitive, e.g., <i>fad an chur síos</i> <Tl tlText="the length of the description"></Tl>; <i>castacht an chur chuige</i> <Tl tlText="the rigidity of the approach"></Tl>; <i>ag cáineadh an éirí in airde</i> <Tl tlText="criticizing the high spirits"></Tl>; <i>ag comóradh an éirí amach</i> <Tl tlText="commemorating the outing"></Tl>; <i>de dheasca an tsracfhéachaint ar gcúl</i> <Tl tlText="due to the backward glance"></Tl>; <i>d&rsquo;ainneoin an chéim ar gcúl</i> <Tl tlText="despite the step back"></Tl> (see <a href="#sec_3_3_3_c">3.3.3(c)</a>):</>;
  },
  get "3-3-1-b-i-p-sample1"() {
    return <>The auditor <b>is currently investigating</b> this allegation.</>;
  },
  get "3-3-1-b-i-p-sample2"() {
    return <>She was <b>giving the presentation</b> when the computer failed.</>;
  },
  get "3-3-1-b-ii-p"() {
    return <>if there is a possessive adjective before a verbal noun, the initial consonant is lenited or eclipsed, as appropriate, but is left without inflection, e.g., <i>i bhfianaise mo chur chuige</i> <Tl tlText="in light of my approach"></Tl>; <i>luas ár ndul chun cinn</i> <Tl tlText="the speed of our progress"></Tl>; <i>ag moladh a gcur chuige</i> <Tl tlText="praising their approach"></Tl> (pl.):</>;
  },
  get "3-3-1-b-ii-p-sample1"() {
    return <>They <b>have been praising his approach</b> since he explained it to them.</>;
  },
  get "3-3-1-b-ii-p-sample2"() {
    return <>She said the information was needed <b>for her presentation</b>.</>;
  },
  get "3-3-2-title"() {
    return "Definite and Indefinite Nouns";
  },
  get "3-3-2-a-p"() {
    return <>When a noun or noun phrase is connected by the preposition <i>a</i> (from <i>do</i>) with a verbal noun, the noun is left in the nominative, followed by a word or form that follows the genitive.</>;
  },
  get "Table-3A-Col1Title"() {
    return "The Genitive";
  },
  get "Table-3A-Col2Title"() {
    return "Form of the Nominative in Place of the Genitive";
  },
  get "Table-3A-caption-part"() {
    return <>Definite or Indefinite Noun or Phrase connected by the preposition <i>a</i> with a Verbal Noun</>;
  },
  get "Table3A-caption"() {
    return <>{en_US["Table-3A-Col2Title"]} &mdash; {en_US["Table-3A-caption-part"]}</>;
  },
  get "3-3-2-b-p1"() {
    return <>The genitive change does not apply to the words <i>ceann</i> and <i>cuid</i> when there is a partitive genitive or partitive dative following.</>;
  },
  get "3-3-2-b-p1-sample1"() {
    return <>She was injured <b>during one of the local games</b>.</>;
  },
  get "3-3-2-b-p1-sample2"() {
    return <>The <b>amount of my work</b> has decreased.</>;
  },
  get "3-3-2-b-p1-sample3"() {
    return <>They were <b>expelling many of them</b>.</>;
  },
  get "3-3-2-b-p1-sample4"() {
    return <>It was passed <b>despite the rest of the article</b>.</>;
  },
  get "3-3-2-b-p2"() {
    return <><b>But</b>, they are inflected when they are normal nouns.</>;
  },
  get "3-3-2-b-p2-sample1"() {
    return <>Despite <b>that Section</b>, the Bill was passed.</>;
  },
  get "3-3-2-b-p2-sample2"() {
    return <>She fell on <b>her head</b>.</>;
  },
  get "3-3-2-c-p1"() {
    return <>When using a single common noun without the article as the name of a company, association or program, no inflection or initial mutation is made to the noun, e.g., <i>buaicphointe Múscailt</i> <Tl tlText="Múscailt&rsquo;s highlight"></Tl>; <i>ceannáras Muintearas</i> <Tl tlText="Muintearas headquarters"></Tl>; <i>ceardlanna Síolta</i> <Tl tlText="Síolta workshops"></Tl>; <i>gníomhairí Bóthar</i> <Tl tlText="Bóthar agents"></Tl>.</>;
  },
  get "3-3-2-c-p1-sample1"() {
    return <>I met the <b>Chief Executive of Trócaire</b> there.</>;
  },
  get "3-3-2-c-p1-sample2"() {
    return <>Where is <b>Bóthar&rsquo;s main office</b>?</>;
  },
  get "3-3-3-title"() {
    return "The Indefinite Noun &mdash; The Verbal Noun";
  },
  get "3-3-3-p"() {
    return <>A verbal noun is a word that has both the function of a noun and a verb. It is possible to use words like <i>eitilt</i> <Tl tlText="flight"></Tl>, <i>foghlaim</i> <Tl tlText="learning"></Tl>, <i>snámh</i> <Tl tlText="swimming"></Tl>, etc. like nouns, e.g., <i>deireadh na heitilte</i> <Tl tlText="end of the flight"></Tl>; <i>foghlaim a fháil</i> <Tl tlText="to get learning"></Tl>; <i>snámh féileacáin</i> <Tl tlText="butterfly swimming"></Tl>, and as a verbal noun, e.g., <i>ag eitilt sa spéir</i> <Tl tlText="flying in the sky"></Tl>; <i>ag foghlaim teanga</i> <Tl tlText="learning a language"></Tl>; <i>ag snámh in aghaidh easa</i> <Tl tlText="swimming against the current"></Tl>. This section describes cases where the nominative form of the verbal noun is used in place of the genitive form.</>;
  },
  get "3-3-3-a-p"() {
    return <>The genitive change is not made to the verbal noun when the prepositional pronoun <i>a</i> precedes it.</>;
  },
  get "3-3-3-a-p-sample1"() {
    return <>He <b>has just said</b> that he will do it.</>;
  },
  get "3-3-3-a-p-sample2"() {
    return <>He <b>is trying to confirm</b> that everything is going to be all right.</>;
  },
  get "3-3-3-b-p1"() {
    return <>If there is a verbal noun in the structure <i>chun</i> + <i>verbal noun</i> used to express an upcoming action, the genitive change is not made to it.</>;
  },
  get "3-3-3-b-p1-sample1"() {
    return <>Is he <b>going to play hurling</b> with Cork?</>;
  },
  get "3-3-3-b-p1-sample2"() {
    return <>The organization is not <b>going to swim</b> against the tide.</>;
  },
  get "3-3-3-b-p1-sample3"() {
    return <>The children are <b>going to go home</b>.</>;
  },
  get "3-3-3-b-p1-sample4"() {
    return <>The wind is <b>going to blow</b> worse.</>;
  },
  get "3-3-3-b-p1-sample5"() {
    return <>They are not <b>going to stand</b> back.</>;
  },
  get "3-3-3-b-p1-sample6"() {
    return <>She is <b>going to get married</b> soon.</>;
  },
  get "3-3-3-b-p1-sample7"() {
    return <>He is <b>going to play</b>.</>;
  },
  get "3-3-3-b-p2"() {
    return <><b>But</b>, if the meaning of <i>chun</i> is <i>le haghaidh</i> <Tl tlText="for"></Tl>, the genitive is used.</>;
  },
  get "3-3-3-c-p"() {
    return <>When the verbal noun is an integral part of a particular unit, e.g., <i>cur chun cinn</i> <Tl tlText="promotion"></Tl>; <i>cur chuige</i> <Tl tlText="approach"></Tl>; subject to another noun or a form followed by a genitive, if it is indefinite, the verbal noun is left uninflected and the initial consonant is not lenited, e.g., <i>fad cur síos</i> <Tl tlText="during a description"></Tl>; <i>i gcás cur i gcéill</i> <Tl tlText="in case of acting sensibly"></Tl>; <i>ag ullmhú cur i láthair</i> <Tl tlText="preparing a presentation"></Tl>; <i>i bhfianaise teacht i bhfeidhm</i> <Tl tlText="in light of coming into effect"></Tl> (see <a href="#sec_3_3_1_b">3.3.1(b)</a>):</>;
  },
  get "3-3-3-c-p-sample1"() {
    return <>What <b>kind of approach</b> did they use?</>;
  },
  get "3-3-3-c-p-sample2"() {
    return <>She was <b>in the middle of a presentation</b> when the projector failed.</>;
  },
  get "3-3-3-c-p-sample3"() {
    return <>The <b>progress plan</b> is in the annual report.</>;
  },
  get "3-3-4-title"() {
    return "The Indefinite Noun &mdash; Indefinite Nouns used as Verbal Nouns";
  },
  get "3-3-4-a-p1"() {
    return <>If an indefinite noun has a normal genitive following one of the declensions (see <a href="./chapter5.html#sec_5_6_1_a">5.6.1(a)</a>) also used as a verbal noun, the genitive change is not made to it when it is used as a verbal noun.</>;
  },
  get "3-3-4-a-p1-sample1"() {
    return <>The demonstrators were <b>refusing to leave</b>.</>;
  },
  get "3-3-4-a-p1-sample2"() {
    return <>The teenagers were not <b>wanting to fight</b> (<i>meaning</i> wanting to make a fight).</>;
  },
  get "3-3-4-a-p1-sample3"() {
    return <>He <b>has just walked</b> home.</>;
  },
  get "3-3-4-a-p2"() {
    return <><b>But</b>, the genitive change is made to the noun when it is used as an indefinite noun.</>;
  },
  get "3-3-4-a-p2-sample1"() {
    return <>He is <b>taking a jump</b>.</>;
  },
  get "3-3-4-a-p2-sample2"() {
    return <>The team is <b>playing hurling</b> every weekend.</>;
  },
  get "3-3-4-a-p2-sample3"() {
    return <>They are out in the open <b>seeking a fight</b> (<i>meaning</i> looking for a fight).</>;
  },
  get "3-3-4-b-p1"() {
    return <>If an indefinite noun that is also used as a verbal noun does not have a normal genitive according to one of the declensions (see <a href="./chapter5.html#sec_5_6_1_a">5.6.1(a)</a>), and if it is the direct object of a verbal noun preceded by <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>), the genitive change is not made to it.</>;
  },
  get "3-3-4-b-p1-sample1"() {
    return <>They are <b>making an amendment</b> (a change, a killing, an adjustment).</>;
  },
  get "3-3-4-b-p1-sample2"() {
    return <>He/It is often <b>given praise</b> (a beating, an order, a raise).</>;
  },
  get "3-3-4-b-p1-sample3"() {
    return <>An Act <b>to make an amendment</b> (inspection, examination) in recommendation from the Minister.</>;
  },
  get "3-3-4-b-p1-sample4"() {
    return <>Are you <b>wanting to sit</b> (get up, marry)?</>;
  },
  get "3-3-4-b-p1-sample5"() {
    return <>She is <b>getting a raise</b> (qualification, increase, beating).</>;
  },
  get "3-3-4-b-p1-sample6"() {
    return <>Who was <b>doing/making the condemnation</b> (teaching, dispersion, fuss)?</>;
  },
  get "3-3-4-b-p2"() {
    return <><b>But</b>, when it is the definite noun, the genitive change is made to it.</>;
  },
  get "3-3-4-b-p2-sample1"() {
    return <>Who is <b>making the change</b>?</>;
  },
  get "3-3-4-b-p2-sample2"() {
    return <>Is the Secretary General <b>drafting the order</b>?</>;
  },
  get "3-3-4-b-p2-sample3"() {
    return <>Their friends were <b>congratulating their marriage</b>.</>;
  },
  get "3-3-4-b-p2-sample4"() {
    return <>She is <b>reading every amendment</b> before the meeting.</>;
  },
  get "3-3-4-c-p1"() {
    return <>If an indefinite noun that is also used as a verbal noun does not have a normal genitive according to one of the declensions (see <a href="./chapter5.html#sec_5_6_1_a">5.6.1(a)</a>), and if it is subject to a compound preposition or follows <i>chun</i>, the genitive change is not made to it.</>;
  },
  get "3-3-4-c-p1-sample1"() {
    return <>The couple is <b>about to marry</b>.</>;
  },
  get "3-3-4-c-p1-sample2"() {
    return <>I am <b>just getting up</b>.</>;
  },
  get "3-3-4-c-p1-sample3"() {
    return <>Isn&rsquo;t it nice to go on a walk <b>after sitting</b>?</>;
  },
  get "3-3-4-c-p1-sample4"() {
    return <>The day is <b>going to get longer</b>.</>;
  },
  get "3-3-4-c-p2"() {
    return <><b>But</b>, when it is the definite noun, the genitive change is made to it.</>;
  },
  get "3-3-4-c-p2-sample1"() {
    return <>They are not for <b>divorce</b>.</>;
  },
  get "3-3-4-c-p2-sample2"() {
    return <>He is about <b>to marry</b>.</>;
  },
  get "3-3-4-c-p2-sample3"() {
    return <>You must study for <b>every exam</b>.</>;
  },
  get "3-3-5-title"() {
    return "The Indefinite Noun &mdash; Verbal Noun Clauses that are not Independent Sentences";
  },
  get "3-3-5-p1"() {
    return <>The genitive change is not made to the indefinite noun in clauses where the indefinite noun is subject to a verbal noun where <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>) precedes it if that verbal noun clause cannot function independently without being followed by a simple preposition or a prepositional clause. The words in bold below cannot function independently on their own.</>;
  },
  get "3-3-5-p1-sample1"() {
    return <><b>They are facing</b> the other team now.</>;
  },
  get "3-3-5-p1-sample2"() {
    return <>They are <b>taking advantage</b> of the system.</>;
  },
  get "3-3-5-p1-sample3"() {
    return <><b>The school is ending</b> the scheme.</>;
  },
  get "3-3-5-p1-sample4"() {
    return <><b>The students are are clearly enjoying</b> the night.</>;
  },
  get "3-3-5-p1-sample5"() {
    return <><b>He is saying good-bye</b> to him.</>;
  },
  get "3-3-5-p1-sample6"() {
    return <><b>Directors to give attention</b> to the interests of employees.</>;
  },
  get "3-3-5-p1-sample7"() {
    return <><b>They are trying out</b> a new menu.</>;
  },
  get "3-3-5-p1-sample8"() {
    return <><b>The organization was</b> advancing <b>projects</b>. (<i>pl.</i>)</>;
  },
  get "3-3-5-p1-sample9"() {
    return <><b>The Department is</b> implementing <b>policies</b>. (<i>pl.</i>)</>;
  },
  get "3-3-5-p2"() {
    return <><b>But</b>, despite this, if the indefinite noun is an integral part of the verbal noun clause, and the verbal noun clause can function independently, the genitive change is made to the indefinite noun. The words in bold below can function independently on their own and the genitive change is made to the indefinite noun accordingly.</>;
  },
  get "3-3-5-p2-sample1"() {
    return <><b>It was raining</b> (in Cork).</>;
  },
  get "3-3-5-p2-sample2"() {
    return <><b>She was doing work</b> (in the office).</>;
  },
  get "3-3-5-p2-sample3"() {
    return <><b>They are collecting money</b> (there).</>;
  },
  get "3-3-5-p2-sample4"() {
    return <><b>He will give help</b> (in times of need).</>;
  },
  get "3-3-5-p2-sample5"() {
    return <><b>She is dying</b> (in the hospital).</>;
  },
  get "3-3-5-p2-sample6"() {
    return <><b>Is she playing football</b> (with the neighbors)?</>;
  },
  get "3-3-5-p2-sample7"() {
    return <><b>They were singing</b> (in the house).</>;
  },
  get "3-3-6-title"() {
    return "The Indefinite Noun &mdash; Specific Terms";
  },
  get "3-3-6-a-p"() {
    return <>If there are certain multi-word phrases that have a specific meaning, e.g., <i>bolg le gréin</i> <Tl tlText="sunbathing"></Tl>; <i>buail isteach</i> <Tl tlText="drop-in"></Tl>; <i>buaileam sciath</i> <Tl tlText="shield strike"></Tl>; <i>cos ar bolg</i> <Tl tlText="foot on belly"></Tl>; <i>cúl le rath</i> <Tl tlText="back to success"></Tl>; <i>uisce faoi thalamh</i> <Tl tlText="groundwater"></Tl>; etc. subject to a word or a form followed by a genitive, the first noun in the multi-word phrase is neither inflected nor lenited.</>;
  },
  get "3-3-6-a-p-sample1"() {
    return <>I will get <b>takeaway</b> food on my way home.</>;
  },
  get "3-3-6-a-p-sample2"() {
    return <>He is sunbathing in France currently. (<i>Lit.</i> <b>belly with sun</b>)</>;
  },
  get "3-3-6-a-p-sample3"() {
    return <>They have a <b>drop-in</b> center in the middle of the city.</>;
  },
  get "3-3-6-b-p"() {
    return <>Where a unit of two indefinite nouns in which the first noun of that unit is <i>tús</i> <Tl tlText="beginning"></Tl>, <i>lár</i> <Tl tlText="middle"></Tl>, or <i>deiradh</i> <Tl tlText="end"></Tl> (in the singular), the first noun is left in the nominative case when it is subject to a word or a form followed by the genitive.</>;
  },
  get "3-3-6-b-p-sample1"() {
    return <>Everything is organized for the <b>beginning</b> of the year meeting.</>;
  },
  get "3-3-6-b-p-sample2"() {
    return <>Enjoy the <b>mid</b>-term break!</>;
  },
  get "3-3-6-b-p-sample3"() {
    return <>A week-<b>end</b> event is organized every year.</>;
  },
  get "3-3-7-title"() {
    return "A Definite Quantity in a List";
  },
  get "3-3-7-p1"() {
    return "If an indefinite noun that is subject to a noun expressing definite quantity is presented in a recipe or in the form of a list, the genitive change is not made to the noun or adjective being qualified.";
  },
  get "3-3-7-p1-sample1"() {
    return <>500g <b>flour</b></>;
  },
  get "3-3-7-p1-sample2"() {
    return <>1lb <b>white flour</b></>;
  },
  get "3-3-7-p1-sample3"() {
    return <>250g <b>castor sugar</b></>;
  },
  get "3-3-7-p1-sample4"() {
    return <>150ml <b>cream</b></>;
  },
  get "3-3-7-p1-sample5"() {
    return <>1/2 tsp. <b>baking powder</b></>;
  },
  get "3-3-7-p1-sample6"() {
    return <>2 tablespoons <b>honey</b></>;
  },
  get "3-3-7-p2"() {
    return "The partitive dative is used in prose.";
  },
  get "3-3-7-p2-sample1"() {
    return <>Mix <b>500g of white flour</b> and <b>250g of castor sugar</b> in a bowl.</>;
  },
  get "3-3-7-p2-sample2"() {
    return <>Add <b>150ml of milk</b> and <b>150ml of cream</b> to the mixture.</>;
  },
  get "3-3-8-title"() {
    return "The Indefinite Noun &mdash; Qualifiers";
  },
  get "3-3-8-a-p"() {
    return <>The genitive change is not made to an indefinite noun that is subject to a verbal noun preceded by <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>), subject to a compound preposition or subject to an indefinite quantity if the indefinite noun is qualified with one of the qualifiers listed in tables <a href="#table3B">3B</a>, <a href="#table3C">3C</a> and <a href="#table3D">3D</a> below.</>;
  },
  get "3-3-8-b-p"() {
    return <>The indefinite noun itself must be qualified with the qualifier to cancel the genitive. If the qualifier functions as something other than an adjective (as an adverb, for example), the genitive change is made to the indefinite noun (see <a href="#sec_3_3_12_b">3.3.12(b)</a>).</>;
  },
  get "3-3-9-title"() {
    return <>A Qualified Indefinite Noun subject to a Verbal Noun preceded by <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>)</>;
  },
  get "3-3-9-p"() {
    return <>When an indefinite noun is subject to a verbal noun preceded by <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>) qualified with the qualifiers listed below, the genitive change is not made to the indefinite noun (or the adjective accompanying it).</>;
  },
  get "Table3B-caption"() {
    return <>Qualifiers &mdash; An Indefinite Noun subject to a Verbal Noun preceded by <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>)</>;
  },
  get "Table3B-Col1"() {
    return "Qualifier";
  },
  get "Table3B-Col2"() {
    return "Singular";
  },
  get "Table3B-Col3"() {
    return "Plural";
  },
  get "Table3B-row1"() {
    return "Attributive adjective, or a noun in the capacity of an adjective";
  },
  get "Table3B-row2"() {
    return <>Prepositional phrase like <i>ar bith</i>, <i>ar leith</i>, <i>den scoth</i>, etc. if it has an adjectival function</>;
  },
  get "Table3B-row3"() {
    return "Relative clause";
  },
  get "Table3B-row4"() {
    return <>The indefinite adjective <i>aon</i> or the emphatic prefix <i>an-</i></>;
  },
  get "3-3-10-title"() {
    return "Qualified Indefinite Noun subject to a Compound Preposition";
  },
  get "3-3-10-p1"() {
    return <>When an indefinite noun that is subject to a compound preposition (or <i>cois</i> <Tl tlText="beside"></Tl>, <i>dála</i> <Tl tlText="like"></Tl>, <i>fearacht</i> <Tl tlText="opposite"></Tl>, <i>timpeall</i> <Tl tlText="around"></Tl>, <i>trasna</i> <Tl tlText="across"></Tl>) qualified with one of the qualifiers shown below, the genitive change is not made to the indefinite noun (or the adjective accompanying it).</>;
  },
  get "Table3C-caption"() {
    return "Qualifiers &mdash; Indefinite Noun subject to a Compound Preposition";
  },
  get "Table3C-row1"() {
    return <>{en_US["Table3B-row1"]}</>;
  },
  get "Table3C-row2"() {
    return <>{en_US["Table3B-row2"]}</>;
  },
  get "Table3C-row3"() {
    return <>Prepositional dependent clause, e.g., <i>ar an mBille</i>, <i>faoin mbord</i>, <i>sa phóstaer</i>, etc., or prepositional pronominal, e.g., <i>air</i>, <i>fúithi</i>, <i>uainn</i>, etc., if it has a adjectival function</>;
  },
  get "Table3C-row4"() {
    return <>{en_US["Table3B-row3"]}</>;
  },
  get "Table3C-row5"() {
    return <>The indefinite adjective <i>aon</i> <Tl tlText="any"></Tl></>;
  },
  get "3-3-10-p2"() {
    return <>Note that a prepositional phrase with a specific meaning is a compound preposition, e.g., <i>i gcás</i> meaning <i>más rud é</i> <Tl tlText="if"></Tl>. <i>Simple preposition + noun</i> is the model for this. <a href="#table3C">Table 3C</a> does not apply if an indefinite noun is present that is subject to a preposition and a noun that is not a compound preposition, e.g., <i>i gcas</i> meaning <i>in imeachtaí dlí</i> <Tl tlText="in a legal proceeding"></Tl>, <i>i mála</i> <Tl tlText="in a bag"></Tl>.</>;
  },
  get "3-3-11-title"() {
    return "A Qualified Indefinite Noun subject to An Indefinite Quantity";
  },
  get "3-3-11-p1"() {
    return <>When an indefinite noun is subject to a word or phrase expressing an indefinite quantity, e.g., <i>barraíocht</i> <Tl tlText="excess"></Tl>, <i>breis</i> <Tl tlText="more"></Tl>, <i>easpa</i> <Tl tlText="lack"></Tl>, <i>go leor</i> <Tl tlText="enough"></Tl>, <i>iomarca</i> <Tl tlText="too much"></Tl>, <i>níos mó</i> <Tl tlText="more"></Tl>, <i>roinnt</i> <Tl tlText="some"></Tl>, qualified with one a qualifier in the table below, the genitive change is not made to the indefinite noun (or the adjective accompanying it).</>;
  },
  get "Table3D-caption"() {
    return "Qualifiers &mdash; Indefinite Noun subject to an Indefinite Quantity";
  },
  get "3-3-11-p2"() {
    return <>Note that an indefinite quantity is observed as a definite quantity when a possessive adjective precedes it, and in this context the genitive change is made to the noun that follows it (and the adjective accompanying it), e.g., <i>a chuid gruaige fada</i> <Tl tlText="his long hair"></Tl>; <i>a dóthain bia the</i> <Tl tlText="her share of hot food"></Tl>; <i>a ndóthain saineolais theicniúil</i> <Tl tlText="their share of technical knowledge"></Tl>; <i>ár gcuid oibre baile</i> <Tl tlText="our share of homework"></Tl>.</>;
  },
  get "3-3-12-title"() {
    return "Form of the Genitive";
  },
  get "3-3-12-a-p"() {
    return <>Apart from the contexts specified in tables <a href="#table3B">3B</a>, <a href="#table3C">3C</a> and <a href="#table3D">3D</a>, the genitive change is made to the indefinite noun in the structure <i>noun</i> + <i>indefinite noun</i> + <i>qualifier</i>.</>;
  },
  get "Table3E-caption"() {
    return "Form of the Genitive &mdash; Noun + Indefinite Noun + Qualifier";
  },
  get "3-3-12-b-p"() {
    return <>The genitive change is made to an indefinite noun is subject to a compound preposition and followed by a prepositional phrase, prepositional phrase or prepositional pronominal unless the indefinite noun is qualified by that prepositional phrase, prepositional dependent clause or prepositional pronominal (for example, if the verb rather than the indefinite noun is qualified) or by any of the other qualifier mentioned in <a href="#table3C">table 3C</a>.</>;
  },
  get "Table3F-caption"() {
    return "Form of the Genitive &mdash; An Indefinite Noun subject to a Compound Preposition";
  },
  get "3-3-13-title"() {
    return "Summary of the Form of the Nominative in place of the Genitive";
  },
  get "3-3-13-p"() {
    return "For reference, a summary of the situations where the form of the nominative is used in place of the genitive is given here.";
  },
  get "Table3G-caption"() {
    return "Summary of the Situations where the Form of the Nominative is used in place of the Genitive";
  },
  get "Table3G-col1"() {
    return "If:";
  },
  get "Table3G-col2"() {
    return "Is subject to:";
  },
  get "Table3G-col3"() {
    return "The form of the nominative is used in place of the genitive:";
  },
  get "Table3G-row1-condition"() {
    return <>A noun that comes before a definite noun in the genitive (<a href="#sec_3_3_1_a">3.3.1(a)</a>)</>;
  },
  get "leanannAnGinideach"() {
    return "Word or form following the genitive";
  },
  get "Table3G-row2-condition"() {
    return <>A certain definite unit of which a verbal noun is an integral part (<a href="#sec_3_3_1_b">3.3.1(b)</a>)</>;
  },
  get "Table3G-row3-condition"() {
    return <>A noun or noun phrase, definite or indefinite, connected by a preposition <i>a</i> (from <i>do</i>) to a verbal noun (<a href="#sec_3_3_2_a">3.3.2(a)</a>)</>;
  },
  get "Table3G-row4-condition"() {
    return <><i>cuid</i> and <i>ceann</i>, and genitive partitive or dative partitive subject to it (<a href="#sec_3_3_2_b">3.3.2(b)</a>)</>;
  },
  get "Table3G-row5-condition"() {
    return <>A single common noun without the article that is used as the name of a company, association or program (<a href="#sec_3_3_2_c">3.3.2(c)</a>)</>;
  },
  get "Table3G-row6-condition"() {
    return <>A verbal noun that is preceded by the proleptic pronominal <i>a</i> (<a href="#sec_3_3_3_a">3.3.3(a)</a>)</>;
  },
  get "Table3G-row7-condition"() {
    return <>A verbal noun (<a href="#sec_3_3_3">3.3.3</a>(b))</>;
  },
  get "Table3G-row7-rule"() {
    return <><i>chun</i>, in the structure <i>chun</i> + <i>verbal noun</i> used to express an upcoming action</>;
  },
  get "Table3G-row8-condition"() {
    return <>A certain indefinite unit has a verbal noun as an integral part (<a href="#sec_3_3_3_c">3.3.3(c)</a>)</>;
  },
  get "Table3G-row9-condition"() {
    return <>An indefinite noun is used as a verbal noun also, and has a normal genitive subject to one of the declensions, that is used as a verbal noun (<a href="#sec_3_3_4_a">3.3.4(a)</a>)</>;
  },
  get "Table3G-row9-rule"() {
    return <>A verbal noun is preceded by <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>) or a compound preposition</>;
  },
  get "Table3G-row10-condition"() {
    return <>An indefinite noun is used as a verbal noun also, and does not have a normal genitive subject to one of the declensions, that is the direct object of a verbal noun (<a href="#sec_3_3_4_b">3.3.4(b)</a>)</>;
  },
  get "Table3G-row10-rule"() {
    return <>Verbal noun preceded by <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>)</>;
  },
  get "Table3G-row11-condition"() {
    return <>An indefinite noun that is used as a verbal noun also, and does not have a normal genitive subject to one of the declensions (<a href="#sec_3_3_4_c">3.3.4(c)</a>)</>;
  },
  get "Table3G-row11-rule"() {
    return <>A compound preposition or <i>chun</i> meaning <i>i dtreo</i> (<i>towards</i>)</>;
  },
  get "Table3G-row12-condition"() {
    return <>An indefinite noun in a verbal noun clause that cannot function independently without a simple preposition or prepositional clause following it (<a href="#sec_3_3_5">3.3.5</a>)</>;
  },
  get "Table3G-row12-rule"() {
    return <>Verbal noun preceded by <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>)</>;
  },
  get "Table3G-row13-condition"() {
    return <>The first indefinite noun in a multi-word phrase that has a specific meaning (<a href="#sec_3_3_6_a">3.3.6(a)</a>) </>;
  },
  get "Table3G-row14-condition"() {
    return <><i>tús</i>, <i>lár</i> or <i>deireadh</i>, if they are the first noun in a unit of two indefinite nouns (<a href="#sec_3_3_6_b">3.3.6(b)</a>)</>;
  },
  get "Table3G-row15-condition"() {
    return <>A noun in a list (<a href="#sec_3_3_7">3.3.7</a>)</>;
  },
  get "Table3G-row15-rule"() {
    return "A word or phrase used to express a definite quantity";
  },
  get "Table3G-row16-condition"() {
    return <>An indefinite noun qualified by a certain qualifier (<a href="#sec_3_3_9">3.3.9</a>)</>;
  },
  get "Table3G-row16-rule"() {
    return <>Verbal noun preceded <i>ag</i> or <i>do</i> (or <i>a</i> from <i>do</i>)</>;
  },
  get "Table3G-row17-condition"() {
    return <>An indefinite noun qualified by a certain qualifier (<a href="#sec_3_3_10">3.3.10</a>)</>;
  },
  get "Table3G-row17-rule"() {
    return "A compound preposition";
  },
  get "Table3G-row18-condition"() {
    return <>An indefinite noun qualified by a certain qualifier (<a href="#sec_3_3_11">3.3.11</a>)</>;
  },
  get "Table3G-row18-rule"() {
    return "Word or phrase used to express an indefinite quantity";
  }
};
