import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  "teidealNaCaibidle":
    "The Article",
  get "1-title"() {
    return <>{en_US_Common["Caibidil"]} 1 | {en_US["teidealNaCaibidle"]}</>;
  },
  "1-1-title":
    en_US_Common["Ginearálta"],
  "1-1-1-p":
    <>There is one article in the Irish language &mdash; the definite article. The subject of the article is called the <i>definite noun</i>. The article has two forms: <i>an</i> and <i>na</i>. The article is placed before the noun, e.g., <i>an baile</i> <Tl tlText="the town" />; <i>an mhír</i> <Tl tlText="the item" />; <i>na caoirigh</i> <Tl tlText="the sheep" />; <i>teach na cúirte</i> <Tl tlText="the court house" />; or before whatever word is put before the noun to qualify it, e.g., <i>an uile dhuine</i> <Tl tlText="everyone" />; <i>scéal mhadra na n&#x2011;ocht gcos</i> <Tl tlText="story of the eight-legged dog" />; <i>tús na chéad seachtaine</i> <Tl tlText="beginning of the first week" />. It is possible to use the article in place of possessive adjectives, e.g., <i>Tá an croí ag cur air</i> <Tl tlText="His heart is troubling him" />; <i>Bhí an ghrian ag baint na súl asam</i> <Tl tlText="The sun was taking my eyes from me" />.</>,
  "1-1-2-p":
    <>The article is written with a small letter in the middle of sentences, e.g., <i>Nach raibh tú ag an Oireachtas i mbliana?</i> <Tl tlText="Were you at the Oireachtas this year?" />; <i>Bhí aithne mhaith agam ar an Seabhac</i> <Tl tlText="I knew Seabhac well" />; except in certain contexts such as publication titles e.g., <i>Cé a scríobh An tOileánach?</i> <Tl tlText="Who wrote An tOileánach?" /></>,
  "1-1-3-p":
    <>If a title containing an article (see <a href="#sec_1_1_5">1.1.5</a> <a href="#sec_1_1_5_a">(a)</a>, <a href="#sec_1_1_5_b">(b)</a> and <a href="#sec_1_1_5_c">(c)</a>) is written on its own, for example on a public notice or on a cover sheet, the article is always included and is capitalized, e.g., <i>An Ghníomhaireacht um Thacaíocht Teaghlaigh</i> <Tl tlText="The Agency for Family Support" />; <i>Na Coimisinéirí Ioncaim</i> <Tl tlText="The Revenue Commissioners" />; <i>An Ceoláras Náisiúnta</i> <Tl tlText="The National Conservatory" />.</>,
  "1-1-4-p":
    <>A hyphen is placed between the initial letter <i>t</i> and a vowel, except when the vowel is capitalized, e.g., <i>an t&#x2011;ospidéal</i>, <i>an tAlbanach</i>. A hyphen is not placed between the initial letter <i>t</i> and <i>s</i>, e.g., <i>an tsaoirse</i>; <i>an tSionainn</i>; <i>tús an tsaoil</i>; nor between the initial letter <i>h</i> and a vowel, e.g., <i>na hainmneacha</i>; <i>lár na habairte</i>; <i>stair na hUachtaránachta</i>.</>,
  "1-1-5-p": "The article is used in the following contexts.",
  "1-1-5-a-p":
    <><b>Official Titles</b>, e.g., <i>an tAire Airgeadais</i>, <i>an Príomh-Oifigeach Feidhmiúcháin</i>, <i>an Taoiseach</i>, <i>Ard-Rúnaí na Náisiún Aontaithe</i>.</>,
  "1-1-5-a-sample1":
    <>The <b>Minister for Finance</b> will attend the meeting.</>,
  "1-1-5-a-sample2":
    <>Where is <b>the Chief Executive Officer</b>?</>,
  "1-1-5-a-sample3":
    <><b>The Taoiseach</b> is speaking with the students.</>,
  "1-1-5-a-sample4":
    <>Is that <b>the Secretary General of the United Nations</b>?</>,
  "1-1-5-b-p":
    <><b>Titles of Government Departments and State Companies</b>, e.g., <i>an Roinn Oideachais agus Scileanna</i>, <i>an Oifig um Rialú Tobac</i>, <i>Feidhmeannacht na Seirbhíse Sláinte</i>, <i>an Phríomh-Oifig Staidrimh</i>.</>,
  "1-1-5-b-sample1":
    <>This building is opposite <b>the Department of Education and Skills</b>.</>,
  "1-1-5-b-sample2":
    <>Sean went to <b>the Office of Tobacco Control</b>.</>,
  "1-1-5-b-sample3":
    <><b>The Health Service Executive</b> is very busy.</>,
  "1-1-5-b-sample4":
    <>This is <b>the Central Statistics Office</b>.</>,
  "1-1-5-c-p":
    <><b>Titles of people before a proper noun</b>, e.g., <i>an tAthair Peadar Ua Laoghaire</i>, <i>an Captaen Ó Murchú</i>, <i>an tUachtarán Mhic Róibín</i>, <i>an Teachta de Barra</i> <Tl tlText="the Reprsentative of de Barra" />, <i>an Múinteoir Ailbhe</i>, <i>an Pápa Eoin Pól II</i> <Tl tlText="Pope John Paul II" />, <i>an Rí Anraí VIII</i> <Tl tlText="King Henry VIII" />.</>,
  "1-1-5-c-sample1":
    <><b>Father Peadar Ua Laoghaire</b> wrote the play <i>An Sprid</i>.</>,
  "1-1-5-c-sample2":
    <><b>Captain Ó Murchú</b> spoke to the players.</>,
  "1-1-5-c-sample3":
    <><b>President Mhic Róibín</b> was to be seen in the photograph.</>,
  "1-1-5-c-sample4":
    <><b>Doctor de Barra</b> will be on holiday for the week.</>,
  "1-1-5-c-sample5":
    <><b>Teacher Ailbhe</b> is in charge of sixth class this year.</>,
  "1-1-5-c-sample6":
    <>It is <b>Queen Elsa II</b> in the film.</>,
  "1-1-5-d-p1":
    <><b>Festivals</b>, e.g., <i>an Nollaig</i>, <i>an Cháisc</i>, <i>an Carghas</i>.</>,
  "1-1-5-d-sample1":
    <><b>Christmas</b> is approaching us.</>,
  "1-1-5-d-sample2":
    <><b>Easter</b> will be in March this year.</>,
  "1-1-5-d-sample3":
    <>I gave up drinking for <b>Lent</b>.</>,
  "1-1-5-d-p2":
    <>Note that the article is not used in certain adverbial forms, e.g., <i>faoi Cháisc</i>, <i>um Nollaig</i>, <i>faoi Bhealtaine</i>.</>,
  "1-1-5-e-p1":
    <><b>Days of the week</b>, e.g., <i>an Luan</i>, <i>an Mháirt</i>, <i>an Chéadaoin</i>.</>,
  "1-1-5-e-sample1":
    <><b>Monday</b> is my favorite day.</>,
  "1-1-5-e-sample2":
    <>I go swimming <b>on Tuesdays</b>.</>,
  "1-1-5-e-sample3":
    <>Today <b>is a Wednesday</b>.</>,
  "1-1-5-e-p2":
    <>Note that the adverb <i>Dé</i> is used in place of the article referring to a particular day, e.g., <i>Bhí mé ag caint leis Dé Céadaoin seo caite</i> <Tl tlText="I was talking to him last Wednesday" />.</>,
  "1-1-5-e-p3":
    <>If a preposition is used before certain days, a compound is formed between the article and the preposition, e.g., <i>Ní mór na hiarratais a bheith faighte foin Aoine, an 16 Bealtaine</i> <Tl tlText="The applications must be received by Friday, 16 May" />.</>,
  "1-1-5-f-p1":
    <b>Months and years</b>,
  "1-1-5-f-sample1":
    <>Often <b>January</b> is colder than <b>December</b>.</>,
  "1-1-5-f-sample2":
    <>Easter is in <b>March</b> rather than <b>April</b> this year.</>,
  "1-1-5-f-p2":
    <>The article is used for the months <i>Márta</i> (March), <i>Bealtaine</i> (May), <i>Meitheamh</i> (June), <i>Samhain</i> (November) and <i>Nollaig</i> (December). The article is not used for the other months except for the calqued form <i>san Aibreán</i> (<i>From: in April</i>). <br /> <b>TL Note</b>: (<i>calqued version/form</i> appears to be the intended meaning here for <i>leagan calctha</i>, not found in FGB. See also <a href="#sec_1_3_2">1.3.2</a> for another instance.)</>,
  "1-1-5-g-p1":
    <b>Dates</b>,
  "1-1-5-g-sample1":
    <>I should be done no later than <b>30 September</b> every year.</>,
  "1-1-5-g-sample2":
    <>The party will be on <b>12 April</b>.</>,
  "1-1-5-g-sample3":
    <>The financial reports are for the year ended <b>31 December 2014</b>.</>,
  "1-1-5-g-sample4":
    <>They will marry on <b>26 February</b>.</>,
  "1-1-5-g-sample5":
    <>No applications will be accepted after <b>7 March 2016</b>.</>,
  "1-1-5-g-p2": "The article should be used referring to a date in a sentence.",
  "1-1-5-g-p3":
    <>the date is by itself &mdash; in a letterhead, or as in the date on an invoice or an Act etc. &mdash; the article is omitted, e.g., <i>26 Feabhra 2014</i>.</>,
  "1-1-5-h-p1":
    <b>Names of towns, mountains and rivers</b>,
  "1-1-5-h-i":
    <>Some cities and towns, e.g., <i>an Aithin</i> <Tl tlText="Athens" />, <i>na Cealla Beaga</i> <Tl tlText="Kells" />, <i>na Gleannta</i> <Tl tlText="the Glens" />, <i>an tSnaidhm</i> <Tl tlText="Snaidhm" />, <i>an Spidéal</i> <Tl tlText="Spiddal" />.</>,
  "1-1-5-h-ii":
    <>Certain mountains and cities, e.g., <i>na hAindéis</i> <Tl tlText="the Andes" />, <i>na hAlpa</i> <Tl tlText="the Alps" />, <i>an Bhograch</i> <Tl tlText="the Bograch" />, <i>an Chearc</i> <Tl tlText="the Chearc" />, <i>na Comaraigh</i> <Tl tlText="the Comaraigh" />, <i>an Earagail</i> <Tl tlText="the Erigail" />, <i>na Himiléithe</i> <Tl tlText="the Himalayas" />, <i>an Mhucais</i> <Tl tlText="the Muckish" />.</>,
  "1-1-5-h-iii":
    <>Most rivers e.g., <i>an Bhóinn</i> <Tl tlText="the Boyne" />, <i>an Danóib</i> <Tl tlText="the Danube" />, <i>an Life</i> <Tl tlText="the Liffey" />, <i>an Phó</i> <Tl tlText="the Po" />, <i>an Réin</i> <Tl tlText="the Rhine" />, <i>an Róin</i> <Tl tlText="the Rhone" />, <i>an tSéin</i> <Tl tlText="the Seine" />, <i>an tSionainn</i> <Tl tlText="the Shannon" />, <i>an Tibir</i> <Tl tlText="the Tiber" />.</>,
  "1-1-5-h-sample1":
    <>I walked <b>the Muckish</b> yesterday.</>,
  "1-1-5-h-sample2":
    <>Did <b>Spiddal</b> win the game?</>,
  "1-1-5-h-sample3":
    <><b>The Shannon</b> can be seen from the airplane.</>,
  "1-1-5-i-p1":
    <b>Names of countries and regions</b>,
  "1-1-5-i-A-p1": "The article accompanies the names of countries and regions if the noun is feminine and:",
  "1-1-5-i-A-i":
    <>if it ends with a slender consonant e.g., <i>an Airgintín</i> <Tl tlText="Argentina" />, <i>an Albáin</i> <Tl tlText="Albania" />, <i>an Bhaváir</i> <Tl tlText="Bavaria" />, <i>an Chatalóin</i> <Tl tlText="Catalonia" />, <i>an Eastóin</i> <Tl tlText="Estonia" />, <i>an Eoraip</i> <Tl tlText="Europe" />, <i>an Fhrainc</i> <Tl tlText="France" />, <i>an Ghearmáin</i> <Tl tlText="Germany" />, <i>an Mhacadóin</i> <Tl tlText="Macedonia" />, <i>an Namaib</i> <Tl tlText="Namibia" />, <i>an Phacastáin</i> <Tl tlText="Pakistan" />, <i>an tSeineagáil</i> <Tl tlText="Senegal" />, <i>an Spáinn</i> <Tl tlText="Spain" />, <i>an tSúdáin</i> <Tl tlText="Sudan" />;</>,
  "1-1-5-i-A-ii":
    <>if it ends with <i>-ia</i> e.g., <i>an India</i> <Tl tlText="India" />, <i>an Laitvia</i> <Tl tlText="Latvia" />, <i>an tSiria</i> <Tl tlText="Syria" />;</>,
  "1-1-5-i-A-iii":
    <>if it ends with <i>-e</i>, <i>-é</i> e.g., <i>an Chóiré</i> <Tl tlText="Korea" />, <i>an Chrimé</i> <Tl tlText="Crimea" />, <i>an Ghuine</i> <Tl tlText="Guinea" />, <i>an tSile</i> <Tl tlText="Chile" />.</>,
  "1-1-5-i-A-p2":
    <>Some names of countries and regions end with a slender consonant but are not accompanied by the article, e.g., <i>Bairéin</i> <Tl tlText="Bahrain" />, <i>Beinin</i> <Tl tlText="Benin" />, <i>Cuáit</i> <Tl tlText="Kuwait" />, <i>Éimin</i> <Tl tlText="Egypt" />, <i>Guadalúip</i> <Tl tlText="Guadeloupe" />, <i>Lichtinstéin</i> <Tl tlText="Liechtenstein" />, <i>Mósaimbíc</i> <Tl tlText="Mozambique" />, or end with <i>-í</i> in the singular but are not accompanied by the article e.g. <i>Geansaí</i> <Tl tlText="Jersey" />, <i>Geirsí</i> <Tl tlText="Guernsey" />, <i>Háítí</i> <Tl tlText="Haiti" />, <i>Haváí</i> <Tl tlText="Hawaii" />, <i>Mailí</i> <Tl tlText="Mali" />, <i>Taihítí</i> <Tl tlText="Tahiti" />. The article is not used except for the genitive for <i>Albain</i> <Tl tlText="Scotland" />, <i>Éire</i> <Tl tlText="Ireland" /> (see <a href="./chapter3.html#sec_3_1_4">3.1.4</a>).</>,
  "1-1-5-i-A-sample1":
    <><b>France</b> is a beautiful country.</>,
  "1-1-5-i-A-sample2":
    <><b>Mozambique</b> is mentioned in the book.</>,
  "1-1-5-i-B-p": "The article does not accompany the names of countries and regions if the noun is masculine and:",
  "1-1-5-i-B-i":
    <>if it ends with a broad consonant, e.g., <i>Barbadós</i> <Tl tlText="Barbados" />, <i>Eacuadór</i> <Tl tlText="Ecuador" />, <i>Guam</i> <Tl tlText="Guam" />, <i>Hondúras</i> <Tl tlText="Honduras" />, <i>Natal</i> <Tl tlText="Natal" />, <i>Óman</i> <Tl tlText="Oman" />, <i>Sead</i> <Tl tlText="Seychelles" />, <i>Siam</i> <Tl tlText="Siam" />, <i>Suranam</i> <Tl tlText="Suriname" />;</>,
  "1-1-5-i-B-ii":
    <>if it ends with <i>-eo</i>, <i>-ó</i>, e.g., <i>Boirneo</i> <Tl tlText="Borneo" />, <i>Maracó</i> <Tl tlText="Morocco" />, <i>Meicsiceo</i> <Tl tlText="Mexico" />, <i>Monacó</i> <Tl tlText="Monaco" />, <i>Samó</i> <Tl tlText="Samoa" /> (exception: <i>an Congó</i> <Tl tlText="the Congo" />);</>,
  "1-1-5-i-B-iii":
    <>if it ends with <i>-a</i>, <i>-á</i>, <i>-iú</i>, <i>-ua</i>, e.g., <i>Alasca</i> <Tl tlText="Alaska" />, <i>Ceanada</i> <Tl tlText="Canada" />, <i>Cúba</i> <Tl tlText="Cuba" />, <i>Gána</i> <Tl tlText="Ghana" />, <i>Meiriceá</i> <Tl tlText="America" />, <i>Nicearagua</i> <Tl tlText="Nicaragua" />, <i>Panama</i> <Tl tlText="Panama" />, <i>Papua</i> <Tl tlText="Papua" />, <i>Paragua</i> <Tl tlText="Paraguay" />, <i>Peiriú</i> <Tl tlText="Peru" />, <i>Sasana</i> <Tl tlText="England" />;</>,
  "1-1-5-i-B-iv":
    <>if it ends with <i>-ael</i>, e.g., <i>Iosrael</i> <Tl tlText="Israel" />.</>,
  "1-1-5-i-C-p":
    <>The article accompanies the names of countries and regions that are nouns in the plural, e.g., <i>na hAsóir</i> <Tl tlText="the Azores" />, <i>na Bahámaí</i> <Tl tlText="the Bahamas" />, <i>na Garbhchríocha</i> <Tl tlText="the Highlands" />, <i>na Scigirí</i> <Tl tlText="the Shetland Islands" />.</>,
  "1-1-5-i-C-sample1":
    <><b>The Bahamas</b> are in the Caribbean.</>,
  "1-1-5-i-C-sample2":
    <>The film was recorded in <b>the Highlands</b>.</>,
  "1-1-5-j-p":
    <><b>Prayers and certain battle cries</b>, e.g., <i>an Choróin Mhuire</i>, <i>an Ghlóir</i>, <i>an Dord Fiann</i>.</>,
  "1-1-5-j-sample1":
    <><b>Glory</b> was said in the middle of the Mass.</>,
  "1-1-5-j-sample2":
    <><b>The Dord Fiann</b> is not often heard.</>,
  "1-1-5-j-sample3":
    <>He said <b>the rosary</b> loudly.</>,
  "1-1-5-k-p1":
    <b>Distributive use</b>,
  "1-1-5-k-sample1":
    <>He sells the books for one Euro <b>each</b>.</>,
  "1-1-5-k-sample2":
    <>An anniversary is organized once <b>per year</b>.</>,
  "1-1-5-k-sample3":
    <><b>Every</b> schoolchild had a bag.</>,
  "1-1-5-k-p2":
    <>The article is used to express a rate the meaning <i>each individual</i> or <i>per</i> is intended.</>,
  "1-1-5-l-p1": "The noun has an abstract or conceptual meaning",
  "1-1-5-l-sample1":
    <><b>the drink</b>, is in, <b>sense</b> is out.</>,
  "1-1-5-l-sample2":
    <><b>Anger</b> is not good.</>,
  "1-1-5-l-sample3":
    <><b>Divorce</b> was introduced in Ireland some years ago.</>,
  "1-1-5-l-sample4":
    <>Space <b>exploration</b> is a new thing.</>,
  "1-1-5-l-sample5":
    <>It is not possible to travel through <b>time</b>.</>,
  "1-1-5-l-sample6":
    <><b>The weather</b> will tell.</>,
  "1-1-5-l-sample7":
    <><b>Hunger</b> is the best <b>sauce</b>.</>,
  "1-1-5-l-p2":
    <>Note that the article is not used in certain sayings, e.g., <i>Tá ciall cheannaith aige</i> <Tl tlText="He has bought sense" />; or the noun does not have a general meaning, e.g., <i>Bhí ocras orm</i> <Tl tlText="I was hungry" />; <i>Tá siad i ngrá</i> <Tl tlText="They are in love" />.</>,
  "1-1-5-m-p":
    <><b>Certain Illnesses</b>, e.g., <i>an ailse</i> <Tl tlText="cancer" />, <i>an déideadh</i> <Tl tlText="smallpox" />, <i>an titimeas</i> <Tl tlText="epilepsy" />, <i>an bhruitíneach</i> <Tl tlText="measles" />.</>,
  "1-1-5-m-sample1":
    <><b>Measles</b> was widespread in Ireland until the 1960s.</>,
  "1-1-5-m-sample2":
    <>Is there a cure for <b>epilepsy</b>?</>,
  "1-1-5-n-p1":
    <><b>Languages</b>, e.g., <i>an Ghaeilge</i> <Tl tlText="Irish" />, <i>an Ghearmáinis</i> <Tl tlText="German" />, <i>an Béarla</i> <Tl tlText="English" />.</>,
  "1-1-5-n-sample1":
    <><b>Irish</b> is the language of our ancestors.</>,
  "1-1-5-n-sample2":
    <><b>German</b> is spoken in Austria.</>,
  "1-1-5-n-sample3":
    <>She had good <b>English</b>.</>,
  "1-1-5-n-p2":
    <>Note that the article is omitted the general meaning is not intended, e.g., <i>Tá Fraincis aici</i> <Tl tlText="She speaks French" />; <i>Cuir i nGaeilge é</i> <Tl tlText="Put it in Irish" />; <i>rang Iodáilise</i> <Tl tlText="Italian class" />.</>,
  "h2-gp-2-5-title": "The Cases",
  "h2-gp-2-5-p":
    <>There are five cases in the Irish language: the nominative case, the accusative case, the dative case, the genitive case and the vocative case (see <a href="./chapter2.html#sec_2_1_2">2.1.2</a>). In the following tables, changes applied to the article and the first letter of the noun are shown based on four items &mdash; gender, case, number and the first letter of the noun. Also see <a href="chapter10.html">Chapter 10</a> for additional information about initial mutations.</>,
  "1-2-title": "The Nominative Case and the Singular Accusative Case",
  "1-2-p1": "The noun form is the same for the nominative case and the singular accusative case. See the table below which shows the effect of the article on the noun in those cases.",
  //- Article Table

  "ArticleTable-col1-th": "Initial Letter of the Noun",
  "ArticleTable-col2-th": "Form of the Article",
  "ArticleTable-col3-th": "Effect on the Initial Letter",
  "ArticleTable-col4-th": "Examples",
  "LenitionNote":
    <>*These are the lenitable consonants: <i>b</i>, <i>c</i>, <i>d</i>, <i>f</i>, <i>g</i>, <i>m</i>, <i>p</i>, <i>s</i> and <i>t</i></>,
  "EclipsisNote":
    <>*These are the eclipsable consonants: <i>b</i>, <i>c</i>, <i>d</i>, <i>f</i>, <i>g</i>, <i>p</i> and <i>t</i></>,
  "gachConsan": "every consonant",
  "gachGuta": "every vowel",
  "ganAonAthru": "no change",
  "séimhiú": "lenition",
  "tRoimhe":
    <><i>t</i> in front</>,
  "dNoT":
    <><i>d</i> or <i>t</i></>,
  "consanInséimhitheSeachasDTS":
    <>lenitable consonants*, <br /> (other than <i>d</i>, <i>t</i> or <i>s</i>)</>,
  "sSeachasCFMPTV":
    <><i>s</i> <br /> (other than <i>sc-</i>, <i>sf-</i>, <i>sm-</i>, <i>sp-</i>, <i>st-</i>, <i>sv-</i>)</>,
  //- Consonant/vowel covered by CommonAttributes

  //- Table1A

  "Table1A-caption": "The Nominative Case and the Singular Accusative Case",
  "1-3-title": "The Dative Singular Case",
  "1-3-1-p":
    <>The dative case is given to the case following the preposition <i>a</i> <Tl tlText="various meanings" />, <i>ag</i> <Tl tlText="at" />, <i>ar</i> <Tl tlText="on" />, <i>as</i> <Tl tlText="from" />, <i>chuig</i> <Tl tlText="towards" />, <i>dar</i> <Tl tlText="by (asservation)" />, <i>de</i> <Tl tlText="various meanings" />, <i>do</i> <Tl tlText="various meanings" />, <i>faoi</i> <Tl tlText="under" />, <i>fara</i> <Tl tlText="beyond" />, <i>go</i> <Tl tlText="to (a place)" />, <i>i</i> <Tl tlText="in" />, <i>ionsar</i> <Tl tlText="towards" />, <i>le</i> <Tl tlText="with" />, <i>ó</i> <Tl tlText="from" />, <i>roimh</i> <Tl tlText="before" />, <i>trí</i> <Tl tlText="through" /> and <i>um</i> <Tl tlText="around" />. Nouns that follow the article in the dative singular case are dealt with as laid out in the following tables.</>,
  "1-3-2-p":
    <>The nominative case follows the words <i>ach</i> <Tl tlText="but" />, <i>amhail</i> <Tl tlText="like" />, <i>gan</i> <Tl tlText="without" />, <i>go dtí</i> <Tl tlText="until" />, <i>idir</i> <Tl tlText="between" />, <i>mar</i> <Tl tlText="as" />, <i>murach</i> <Tl tlText="except" />, <i>ná</i> <Tl tlText="nor" /> and <i>seachas</i> <Tl tlText="except" /> and the article, e.g., <i>gan an t&#x2011;uisce</i> <Tl tlText="without the water" />; <i>idir an t&#x2011;am sin agus an t&#x2011;am seo</i> <Tl tlText="between that time and this time" />; <i>mar an t&#x2011;aistriúchán</i> <Tl tlText="like the translation" />. The dative case is used in the calqued form <i>mar an gcéanna</i> <Tl tlText="In the same way" /> (<i>From: like the same</i>).</>,
  "1-3-3-p":
    <>The general rules of the dative are applied to forms of this type: <i>preposition</i> + <i>noun</i> + <i>a</i> + <i>verbal noun</i>, e.g., <i>leis an ngnó a dhéanamh</i> <Tl tlText="with doing the business" />; <i>as an árasán a dhíol</i> <Tl tlText="from selling the apartment" />.</>,
  "1-3-4-p":
    <>For prepositions <i>de</i>, <i>do</i>, <i>faoi</i>, <i>i</i> and <i>ó</i>, the preposition and the singular article are composed as shown below.</>,
  "1-3-5-p": "The prepositions in the table below have specific forms when they precede the singular article.",
  "CoreSystem": "The Core System",
  "1-4-title": "The Dative Singular Case &mdash; The Core System",
  "1-4-1-p":
    <>As for masculine and feminine nouns starting with a consonant (other than <i>d</i>, <i>t</i> and <i>s</i>), lenition is applied to them following <i>den</i>, <i>don</i>, <i>sa/san</i> and eclipsis in every other context, as shown in the table below.</>,
  "1-4-1-topic":
    <>Nouns starting with a Consonant other than <i>d</i>, <i>t</i> and <i>s</i></>,
  get "Table1B-caption"() {
    return <>{en_US["1-4-title"]} &mdash; {en_US["1-4-1-topic"]}</>;
  },
  get "Table1B-header"() {
    return <>{en_US["CoreSystem"]} &mdash; {en_US["1-4-1-topic"]}</>;
  },
  "Table1B-note":
    <><i>BUT where</i> f <i>precedes a vowel:</i></>,
  "1-4-2-p":
    <>No change is done to masculine nouns starting with <i>s</i> in the dative case. A <i>t</i> precedes an <i>s</i> in feminine nouns (other than the noun starts with <i>sc-</i>, <i>sf-</i>, <i>sm-</i>, <i>sp-</i>, <i>st-</i> or <i>sv-</i> which are left bare) as shown in the table below.</>,
  "1-4-2-topic":
    <>Nouns Starting with <i>s</i></>,
  get "Table1C-header"() {
    return <>{en_US["CoreSystem"]} &mdash; {en_US["1-4-2-topic"]}</>;
  },
  get "Table1C-caption"() {
    return <>{en_US["CoreSystem"]} &mdash; {en_US["1-4-2-topic"]}</>;
  },
  "Table1C-col2-subheader":
    <><i>t</i> is put before the <i>s</i>, other than for <i>sc-</i>, <i>sf-</i>, <i>sm-</i>, <i>sp-</i>, <i>st-</i> or <i>sv-</i></>,
  "1-4-3-p": "No change is made to masculine nouns or feminine nouns starting with a vowel.",
  "1-4-3-topic": "Nouns Starting with Vowels",
  get "Table1D-header"() {
    return <>{en_US["CoreSystem"]} &mdash; {en_US["1-4-3-topic"]}</>
  },
  get "Table1D-caption"() {
    return <>{en_US["1-4-title"]} &mdash; {en_US["1-4-3-topic"]}</>
  },
  "1-4-4-p":
    <>No change is made to masculine nouns or feminine nouns starting with <i>d</i> and <i>t</i>.</>,
  "1-4-4-topic":
    <>Nouns Starting with <i>d</i> and <i>t</i></>,
  get "Table1E-header"() {
    return <>{en_US["CoreSystem"]} &mdash; {en_US["1-4-4-topic"]}</>
  },
  get "Table1E-caption"() {
    return <>{en_US["1-4-title"]} &mdash; {en_US["1-4-4-topic"]}</>
  },
  "1-4-4-NB-p1": "In addition to the Core System given in this chapter, the following choices are allowed:",
  "1-4-4-NB-a":
    <>eclipsis of the noun (instead of lenition) following <i>den</i> and <i>don</i>, e.g., <i>den gcrann</i>, <i>don bhfear</i>; or</>,
  "1-4-4-NB-b":
    <>eclipsis of the noun (instead of lenition) following <i>sa</i>, e.g., <i>sa bpáirc</i>, <i>sa gcarr</i>.</>,
  "1-5-title": "The Genitive Singular Case",
  "1-5-1-p1": "It is customary to use the genitive form the noun is governed by the following things &mdash;",
  "1-5-1-a-p": "other nouns:",
  "1-5-1-a-sample1":
    <>Where did you leave <b>the car keys</b>?</>,
  "1-5-1-a-sample2":
    <>The local people are happy with <b>the library staff</b>.</>,
  "1-5-1-b-p": "verbal nouns:",
  "1-5-1-b-sample1":
    <>The youngsters like <b>to be preparing dinner</b>.</>,
  "1-5-1-b-sample2":
    <>It is Síle who is <b>doing the Leaving Certificate</b> this year.</>,
  "1-5-1-c-p":
    <>compound prepositions, e.g., <i>faoi chomhair</i> <Tl tlText="under the guidance of" />, <i>i gcás</i> <Tl tlText="in case of" />, <i>le haghaidh</i> <Tl tlText="for the purpose of" />:</>,
  "1-5-1-c-sample1":
    <>The cat sits <b>in front of the fire</b> every night.</>,
  "1-5-1-c-sample2":
    <>The architects were <b>conducting the examination</b>.</>,
  "1-5-1-d-p":
    <>one of the words <i>cois</i> <Tl tlText="beside" />, <i>dála</i> <Tl tlText="like" />, <i>fearacht</i> <Tl tlText="in the manner of" />, <i>timpeall</i> <Tl tlText="around" />, <i>trasna</i> <Tl tlText="across" />:</>,
  "1-5-1-d-sample1":
    <>I heard that you went on a journey <b>around the world</b>.</>,
  "1-5-1-d-sample2":
    <>We walked <b>beside the river</b>.</>,
  "1-5-1-e-p":
    <>the preposition <i>chun</i>:</>,
  "1-5-1-e-sample1":
    <>The whole group is going <b>to Spain</b> in July.</>,
  "1-5-1-e-sample2":
    <>They made an appeal <b>to the court</b>.</>,
  "1-5-1-p2":
    <>See <a href="./chapter3.html#sec_3_3">3.3</a> for contexts where the nominative form is used instead of the genitive.</>,
  "1-5-2-p": "In the table below, the effect of the article on the noun in the genitive singular case is shown.",
  "Table1F-caption": "The Genitive Singular Case",
  "hRoimhe":
    <><i>h</i> in front</>,
  "1-6-title": "The Plural",
  "1-6-p":
    <>The article&rsquo;s plural form is <i>na</i>. The article&rsquo;s form is the same in both genders and in all cases of the plural.</>,
  "1-6-1-title": "The Nominative Plural Case and the Accusative Plural Case",
  "1-6-1-p1": "In the table below, the effect of the article on the noun in the nominative plural case and in the accusative plural case is shown.",
  //- Table 1G is the same as the Feminine sub-table of 1F.

  "Table1G-caption": "The Nominative Plural Case and the Accusative Plural Case",
  "1-6-2-title": "The Dative Plural Case",
  "1-6-2-p1":
    <>The dative plural case follows the prepositions <i>a</i>, <i>ag</i>, <i>ar</i>, <i>as</i>, <i>chuig</i>, <i>dar</i>, <i>de</i>, <i>do</i>, <i>faoi</i>, <i>fara</i>, <i>go</i>, <i>i</i>, <i>ionsar</i>, <i>le</i>, <i>ó</i>, <i>roimh</i>, <i>trí</i> and <i>um</i>. The preposition <i>i</i> is composed with the article in the plural: <i>i</i> + <i>na</i> = <i>sna</i>. There is a separate form for <i>fara</i> and <i>le</i> before the article in the plural: <i>fara</i>, <i>fairis</i>; <i>le</i>, <i>leis</i>. Shown in the table below is the effect of the article on the noun in the dative plural case.</>,
  "Table1H-caption": "The Dative Plural Case",
  "1-6-3-title": "The Genitive Plural Case",
  "1-6-3-p": "In the table below, the effect of the article on the noun in the genitive plural case is shown.",
  "Table1I-caption": "The Genitive Plural Case",
  "ConsanInuraithe": "Eclipsable consonants*",
  "1-7-title": "The Dative Singular Case &mdash; The Lenition System",
  "1-7-1-p": "In the dative plural case only, there are other choices given for the Lenition System. It is recommended to adhere to one system only &mdash; the Core System or the Lenition System &mdash; and  not to mix the systems.",
  "1-7-2-p":
    <>The rules regarding the dative plural case in the Core System and in the Lenition System are the same (See <a href="#sec_1_6_2">1.6.2</a>).</>,
  "1-7-3-p":
    <>In the Lenition system, nouns starting with the a consonant are lenited (other than <i>d</i>, <i>t</i> and <i>s</i>) as well as the adjectives attached to them. See the table below.</>,
  "Table1J-header":
    <>The Lenition System &mdash;<br />Nouns starting with a consonant other than <i>d</i>, <i>t</i>, and <i>s</i></>,
  get "Table1J-caption"() {
    return <>{en_US["AnTuisealTabharthachUatha"]} &mdash; {en_US["Table1J-header"]}</>;
  },
  "AnTuisealTabharthachUatha": "The Dative Singular Case",
  "1-7-4-p":
    <>As for masculine nouns and feminine nouns starting with <i>s</i>, a <i>t</i> is placed before the <i>s</i> (other than with nouns starting with <i>sc-</i>, <i>sf-</i>, <i>sm-</i>, <i>sp-</i>, <i>st-</i> or <i>sv-</i> which are left bare) as shown in the table below.</>,
  "Table1K-subheading":
    <><i>t</i> is put before the <i>s</i>, other than in case of <i>sc-</i>, <i>sf-</i>, <i>sm-</i>, <i>sp-</i>, <i>st-</i> or <i>sv-</i></>,
  "Table1K-header":
    <>The Lenition System &mdash; Nouns Starting with <i>s</i></>,
  get "Table1K-caption"() {
    return <>{en_US["AnTuisealTabharthachUatha"]} &mdash; {en_US["Table1K-header"]}</>;
  },
  "1-7-5-p": "No change is done to either masculine nouns or feminine nouns starting with vowels. See the table below.",
  "Table1L-header": "The Lenition System &mdash; Nouns Starting with a Vowel",
  get "Table1L-caption"() {
    return <>{en_US["AnTuisealTabharthachUatha"]} &mdash; {en_US["Table1L-header"]}</>;
  },
  "1-7-6-p":
    <>No change is done to either masculine nouns or feminine nouns starting with <i>d</i> and <i>t</i>. See the table below.</>,
  "Table1M-header":
    <>The Lenition System &mdash; Nouns Starting with <i>d</i> and <i>t</i></>,
  get "Table1M-caption"() {
    return <>{en_US["AnTuisealTabharthachUatha"]} &mdash; {en_US["Table1M-header"]}</>;
  },
};