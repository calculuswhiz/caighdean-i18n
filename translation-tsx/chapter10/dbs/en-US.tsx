import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  get "teidealNaCaibidle"() {
    return "The Initial Mutations";
  },
  get "10-title"() {
    return <>{en_US_Common["Caibidil"]} 10 | {en_US["teidealNaCaibidle"]}</>;
  },
  get "10-1-title"() {
    return "General";
  },
  get "10-1-p"() {
    return <>An initial mutation is a change made to the beginning of a word due to gender, case, tense or other grammatical circumstances. The initial mutations include lenition, eclipsis, <i>t</i> before a vowel, <i>t</i> before <i>s</i>, <i>h</i> before a vowel and <i>d&rsquo;</i> before a vowel or before <i>fh&#x2011;</i>. The use of initial mutations is explained here, including the lenition of an indefinite noun after a feminine noun and the lenition of an indefinite noun after a plural noun ending in a slender consonant.</>;
  },
  get "h2-gp-2-5-title"() {
    return "Lenition";
  },
  get "h2-gp-2-5-p"() {
    return <>These are the lenitable consonants: <i>b</i>, <i>c</i>, <i>d</i>, <i>f</i>, <i>g</i>, <i>m</i>, <i>p</i>, <i>s</i> (except for <i>sc-</i>, <i>sf-</i>, <i>sm-</i>, <i>sp-</i>, <i>st-</i> and <i>sv-</i>) and <i>t</i>.</>;
  },
  get "10-2-title"() {
    return "Lenition of the Noun";
  },
  get "10-2-p"() {
    return "Lenition is applied to the noun in the following contexts.";
  },
  get "10-2-1-title"() {
    return "After the Article";
  },
  get "10-2-1-p"() {
    return <>Lenition is applied to the noun after the article (unless the initial consonant is <i>d</i>, <i>t</i> or <i>s</i>) &mdash;</>;
  },
  get "10-2-1-a-p"() {
    return <>in the nominative singular feminine, e.g., <i>an chathair</i> <Tl tlText="the city" />; <i>an ghloine</i> <Tl tlText="the glass" />; <i>an fhuascailt</i> <Tl tlText="the release" />:</>;
  },
  get "10-2-1-a-sample-1"() {
    return <><b>The woman</b> is singing.</>;
  },
  get "10-2-1-a-sample-2"() {
    return <>Did he close <b>the window</b>?</>;
  },
  get "10-2-1-b-p"() {
    return <>in the genitive singular masculine, e.g., <i>mac an fhir</i> <Tl tlText="the man&rsquo;s son" />; <i>geata an choláiste</i> <Tl tlText="the college gate" />:</>;
  },
  get "10-2-1-b-sample-1"() {
    return <>What happened to <b>the child&rsquo;s</b> gift after the party?</>;
  },
  get "10-2-1-b-sample-2"() {
    return <>I needed to leave before the end <b>of the game</b>.</>;
  },
  get "10-2-1-c-p"() {
    return <>in the dative singular, masculine and feminine, in some situations where a preposition takes the article according to the Core System, e.g., <i>den chapall</i> <Tl tlText="of/off the horse" /> (see <a href="./chapter1.html#sec_1_4">1.4</a>), or according to the Lenition System, e.g., <i>ar an chapall</i> <Tl tlText="on the horse" /> (see <a href="./chapter1.html#sec_1_7">1.7</a>):</>;
  },
  get "10-2-1-c-sample-1"() {
    return <>She would attract the bird <b>off the tree</b>.</>;
  },
  get "10-2-1-c-sample-2"() {
    return <>Additional funding was given <b>to the company</b>.</>;
  },
  get "10-2-2-title"() {
    return "After the Vocative Particle";
  },
  get "10-2-2-p"() {
    return <>Lenition is applied after the vocative particle in the singular and plural, masculine and feminine, e.g., <i>a dhuine chóir</i> <Tl tlText="O good man" />; <i>a Ghaela!</i> <Tl tlText="O Gael!" />; <i>a chairde na páirte</i> <Tl tlText="O friends of the party" />:</>;
  },
  get "10-2-2-sample-1"() {
    return <><b>O noble people</b>, you are welcome here tonight.</>;
  },
  get "10-2-2-sample-2"() {
    return <>Well done, <b>O men</b>!</>;
  },
  get "10-2-3-title"() {
    return "After Certain Adjectives";
  },
  get "10-2-3-p"() {
    return "Lenition is applied to the noun after the following adjectives &mdash;";
  },
  get "10-2-3-a-p"() {
    return <>the possessive adjectives <i>mo</i>, <i>do</i>, <i>a</i> (masculine singular), e.g., <i>mo mhac</i> <Tl tlText="my son" />; <i>do theach</i> <Tl tlText="your house" />; <i>a pheann</i> <Tl tlText="his pen" />:</>;
  },
  get "10-2-3-a-sample-1"() {
    return <>It is <b>my bag</b>.</>;
  },
  get "10-2-3-a-sample-2"() {
    return <>Where did he leave <b>his car</b>?</>;
  },
  get "10-2-3-b-p"() {
    return <>the distributive adjective <i>uile</i> <Tl tlText="every" />, e.g., <i>an uile fhocal</i> <Tl tlText="every word" />; <i>gach uile sheachtain</i> <Tl tlText="every week" />:</>;
  },
  get "10-2-3-b-sample-1"() {
    return <><b>Every kind</b> of person attends it.</>;
  },
  get "10-2-3-b-sample-2"() {
    return <>She has seen <b>every episode</b> in the series.</>;
  },
  get "10-2-3-c-p"() {
    return <>the indefinite adjective <i>aon</i> <Tl tlText="any" />, e.g., <i>aon mhála</i> <Tl tlText="one bag" />, <i>aon chóta</i> <Tl tlText="one coat" /> (except when the noun begins with <i>d</i>, <i>t</i> or <i>s</i>, e.g., <i>aon duine</i> <Tl tlText="one person" />, <i>aon teaghlach</i> <Tl tlText="one family" />):</>;
  },
  get "10-2-3-c-sample-1"() {
    return <>There was not <b>any food</b> in the house.</>;
  },
  get "10-2-3-c-sample-2"() {
    return <>Did you get <b>any parcels</b> in the mail?</>;
  },
  get "10-2-4-title"() {
    return "After Certain Numbers";
  },
  get "10-2-4-p"() {
    return "Lenition is applied to the noun after the following numbers &mdash;";
  },
  get "10-2-4-a-p"() {
    return <>the cardinal number <i>aon</i> <Tl tlText="one" /> and the ordinal number <i>céad</i> <Tl tlText="first" />, unless the initial consonant is <i>d</i>, <i>t</i> or <i>s</i>, e.g., <i>aon chailín amháin</i> <Tl tlText="(only) one girl" />; <i>an chéad bhróg</i> <Tl tlText="the first shoe" />; <i>aon samhradh amháin</i> <Tl tlText="one summer" />; <i>an chéad teach</i> <Tl tlText="the first house" />:</>;
  },
  get "10-2-4-a-sample-1"() {
    return <>There is only <b>one way</b> to do it.</>;
  },
  get "10-2-4-a-sample-2"() {
    return <>That was the <b>first picture</b> he ever sold.</>;
  },
  get "10-2-4-b-p"() {
    return <><i>dhá</i> <Tl tlText="two" />, e.g., <i>dhá chrann</i> <Tl tlText="two trees" />; <i>an dá chóta</i> <Tl tlText="the two coats" />; except when the possessive adjective <i>a</i> (third person singular feminine and third person plural), <i>ár</i> <Tl tlText="our" /> or <i>bhur</i> <Tl tlText="your" /> precedes it, e.g., <i>dhá chapall ach a dhá géag</i> <Tl tlText="two horses but her two legs" /> (third person singular feminine); <i>ár dhá gcapall</i> <Tl tlText="our two horses" />; <i>bhur dhá dteach</i> <Tl tlText="your two houses" />; <i>a dhá mbó</i> <Tl tlText="their two cows" /> (third person plural) (see <a href="./chapter8.html#sec_8_3_3">8.3.3</a>):</>;
  },
  get "10-2-4-b-sample-1"() {
    return <>She was the woman who had <b>two dogs</b>.</>;
  },
  get "10-2-4-b-sample-2"() {
    return <>The <b>two projects</b> are finished now.</>;
  },
  get "10-2-4-c-p"() {
    return <><i>trí</i> <Tl tlText="three" />, <i>ceithre</i> <Tl tlText="four" />, <i>cúig</i> <Tl tlText="five" />, <i>sé</i> <Tl tlText="six" />, e.g., <i>trí bhád</i> <Tl tlText="three boats" />; <i>ceithre bhó</i> <Tl tlText="four cows" /> (except for nouns that have a special plural form after the cardinal numbers &mdash; see <a href="./chapter9.html#sec_9_3_2">9.3.2</a>, and for the word <i>cent</i>, e.g., <i>dhá cent</i> <Tl tlText="two cents" />; <i>cúig cent</i> <Tl tlText="five cents" />):</>;
  },
  get "10-2-4-c-sample-1"() {
    return <>I only sent <b>five Christmas cards</b> this year.</>;
  },
  get "10-2-4-c-sample-2"() {
    return <>She read <b>six chapters</b> before the class.</>;
  },
  get "10-2-4-note-p"() {
    return "Note:";
  },
  get "10-2-4-note-a-i-p"() {
    return <>that the initial mutation that applies is that of the final number in a series to be placed before the word it qualifies, e.g., <i>sé nó seacht mbád</i> <Tl tlText="six or seven boats" />;</>;
  },
  get "10-2-4-note-a-ii-p"() {
    return <>that if the Simplified System above twenty (<i>fiche</i>) is used (see <a href="./chapter9.html#sec_9_3_10">9.3.10</a> &mdash; <a href="./chapter9.html#sec_9_3_12">9.3.12</a>), lenition is not applied to the noun, e.g., <i>fiche a trí capall</i> <Tl tlText="twenty-three horses" />; <i>56 fuinneog</i> <Tl tlText="fifty-six windows" />.</>;
  },
  get "10-2-5-title"() {
    return "After Certain Simple Prepositions";
  },
  get "10-2-5-p1"() {
    return "Lenition is applied to the noun after the following simple prepositions &mdash;";
  },
  get "10-2-5-a-p1"() {
    return <><i>de</i>, <i>do</i> (and <i>a</i> from <i>do</i>, e.g., <i>obair a dhéanamh</i> <Tl tlText="to do work" />), <i>faoi</i>, <i>ionsar</i>, <i>mar</i>, <i>ó</i>, <i>roimh</i>, <i>trí</i>, <i>um</i>, e.g., <i>de Shiobhán</i> <Tl tlText="of Siobhán" />; <i>do bhuachaillí</i> <Tl tlText="to boys" />; <i>faoi bhord</i> <Tl tlText="under a table" />; <i>ionsar Sheán, mar dhuine</i> <Tl tlText="against Seán, as a person" />; <i>ó bhéal</i> <Tl tlText="from a mouth" />:</>;
  },
  get "10-2-5-a-sample-1"() {
    return <>She will finish the work <b>before morning</b>.</>;
  },
  get "10-2-5-a-sample-2"() {
    return <>It happened <b>by accident</b>.</>;
  },
  get "10-2-5-a-p2"() {
    return <>The prepositions <i>do</i> and <i>de</i> are shortened to <i>d&rsquo;</i> before nouns beginning with a vowel or <i>f</i> + <i>vowel</i>, e.g., <i>d&rsquo;athair Sheáin</i> <Tl tlText="to Seán&rsquo;s father" />, <i>d&rsquo;fhoghlaimeoirí Gaeilge</i> <Tl tlText="to Irish learners" />; but this is not done for <i>f</i> + <i>consonant</i>, e.g., <i>do Fhrancaigh</i> <Tl tlText="to the French" />:</>;
  },
  get "10-2-5-a-sample-3"() {
    return <>It is <b>Úna&rsquo;s daughter</b> to whom I gave the book.</>;
  },
  get "10-2-5-a-sample-4"() {
    return <>She did not give me <b>an answer</b> except to start crying.</>;
  },
  get "10-2-5-note-p"() {
    return <><i>b</i>, <i>m</i> and <i>p</i> are not lenited after <i>um</i>, e.g., <i>ordú um praghsanna a chobhsú</i> <Tl tlText="an order to stabilize prices" />; <i>an tÚdarás um Bóithre Náisiúnta</i> <Tl tlText="the National Roads Authority" />.</>;
  },
  get "10-2-5-b-p1"() {
    return <><i>ar</i>, e.g., <i>ar bhád</i> <Tl tlText="on a boat" />, <i>ar chlé</i> <Tl tlText="on the left" />, <i>ar dheis</i> <Tl tlText="on the right" />, <i>ar dhaoine</i> <Tl tlText="on people" /> (see also <a href="./chapter10.html#sec_10_6_4_b">10.6.4(b)</a>):</>;
  },
  get "10-2-5-b-sample-1"() {
    return <>She does not know how to put a button <b>on a coat</b>.</>;
  },
  get "10-2-5-b-sample-2"() {
    return <>He left his shoes <b>on a rock</b> near the sea.</>;
  },
  get "10-2-5-b-p2"() {
    return <>Note that the noun is not lenited for adverbial phrases or verbal nouns indicating state or position, e.g., <i>ar ball</i> <Tl tlText="a while ago" />; <i>ar bord (loinge)</i> <Tl tlText="on board (ship)" />; <i>ar comhaois</i> <Tl tlText="of same age" />; <i>ar comhchéim</i> <Tl tlText="in step" />; <i>ar comhscór</i> <Tl tlText="in a tie" />; <i>ar comhstádas</i> <Tl tlText="in equal status" />; <i>ar deireadh</i> <Tl tlText="at the end" />; <i>ar fad</i> <Tl tlText="at length" />; <i>ar fiar</i> <Tl tlText="inclined" />; <i>ar meisce</i> <Tl tlText="in drunkenness" />; <i>ar muir agus ar tír</i> <Tl tlText="by land and sea" />; <i>ar srian</i> <Tl tlText="in reins" />; <i>ar tiús</i> <Tl tlText="in thickness" />; <i>ar bogadh</i> <Tl tlText="in loose" />; <i>ar crochadh</i> <Tl tlText="hanging" />; <i>ar fáil</i> <Tl tlText="available" />; <i>ar siúl</i> (meaning <i>happening</i>); but <i>ar fheabhas</i> <Tl tlText="excellent" />; <i>ar shiúl</i> (meaning <i>gone</i>). However, lenition is applied to the noun if it is qualified, e.g., <i>ar chonradh sealadach</i> <Tl tlText="on a temporary contract" />; <i>ar shaoire mháithreachais</i> <Tl tlText="on maternity leave" />; <i>ar bharr an tí</i> <Tl tlText="on top of the house" />; except for <i>ar bord loinge</i> <Tl tlText="on board a ship" />; <i>ar ball beag</i> <Tl tlText="a little while ago" />.</>;
  },
  get "10-2-5-c-p1"() {
    return <><i>gan</i>, on an unqualified noun unless the initial consonant is <i>d</i>, <i>t</i>, <i>s</i> or <i>f</i>, e.g., <i>gan chuid</i> <Tl tlText="without a part" />; <i>gan chiall</i> <Tl tlText="without sense" />; <i>gan mhaith</i> <Tl tlText="without good" />; <i>gan mheabhair</i> <Tl tlText="without mind" />; <i>gan bhréag</i> <Tl tlText="without a lie" />; but <i>gan dearmad</i> <Tl tlText="without forgetting" />; <i>gan sagart</i> <Tl tlText="without a priest" />; <i>gan tine</i> <Tl tlText="without fire" />; <i>gan feoirling</i> <Tl tlText="without a farthing" /> (exception: <i>gan fhios</i> <Tl tlText="without knowledge" />);</>;
  },
  get "10-2-5-c-sample-1"() {
    return <>The soldiers left the gate open <b>without protection</b>.</>;
  },
  get "10-2-5-c-sample-2"() {
    return <>The other members will arrive <b>without delay</b>.</>;
  },
  get "10-2-5-c-p2"() {
    return <>Lenition is not applied to a qualified noun, e.g., <i>gan pingin rua</i> <Tl tlText="without a red penny" />; <i>gan carn aoiligh</i> <Tl tlText="without a heap of lime" />; <i>gan bolgán solais</i> <Tl tlText="without a light bulb" />; <i>gan ciall linbh</i> <Tl tlText="without a child&rsquo;s sense" />; <i>gan brí ar bith</i> <Tl tlText="without any meaning" />; <i>gan misneach a chailleadh</i> <Tl tlText="without losing courage" />:</>;
  },
  get "10-2-5-c-sample-3"() {
    return <>They were left <b>without a safe harbor</b>.</>;
  },
  get "10-2-5-c-sample-4"() {
    return <>They said the process would not be changed <b>without good reason</b>.</>;
  },
  get "10-2-5-c-sample-5"() {
    return <>They left <b>without earning a penny</b>.</>;
  },
  get "10-2-5-c-p3"() {
    return <>Note that lenition is not applied to an unqualified noun if it is a definite proper name, e.g., <i>d&rsquo;fhág siad gan Cáit</i> <Tl tlText="they left without Cáit" />; or if it is a verbal noun in a noun phrase, e.g., <i>b&rsquo;fhearr duit gan pósadh</i> <Tl tlText="you would prefer without marrying" />; <i>moladh dó gan corraí</i> <Tl tlText="he was praised without anger" />:</>;
  },
  get "10-2-5-c-sample-6"() {
    return <>She finished the work <b>without Micheál</b>.</>;
  },
  get "10-2-5-c-sample-7"() {
    return <>She decided <b>without surrendering</b>.</>;
  },
  get "10-2-5-d-p1"() {
    return <><i>idir</i>, when it means <i>both</i>, e.g., <i>idir bheag agus mhór</i> <Tl tlText="both small and large" />; <i>idir chailíní agus bhuachaillí</i> <Tl tlText="both girls and boys" />. The noun following <i>idir</i> is not lenited if it begins with <i>d</i>, <i>t</i> or <i>s</i>, e.g., <i>idir shúgradh is dáiríre</i> <Tl tlText="both play and serious" />; <i>idir mhná rialta agus sagairt</i> <Tl tlText="both nuns and priests" />:</>;
  },
  get "10-2-5-d-sample-1"() {
    return <>There are <b>both words</b> and <b>pictures</b> in the book.</>;
  },
  get "10-2-5-d-sample-2"() {
    return <>There will be <b>both young people</b> and <b>seniors</b> present.</>;
  },
  get "10-2-5-d-p2"() {
    return <>Note that lenition is not applied to a noun after <i>idir</i> when it means <i>between</i>, e.g., <i>idir Corcaigh agus Gaillimh</i> <Tl tlText="between Cork and Galway" />; <i>idir breith agus baisteadh</i> <Tl tlText="between birth and baptism" />; <i>idir tithe</i> <Tl tlText="between houses" />; <i>idir béilí</i> <Tl tlText="between meals" />:</>;
  },
  get "10-2-5-d-sample-3"() {
    return <>The child was awake <b>between midnight</b> and <b>dawn</b>.</>;
  },
  get "10-2-5-d-sample-4"() {
    return <>A fight started <b>between two</b> men outside the shop.</>;
  },
  get "10-2-5-e-p1"() {
    return <><i>thar</i>, e.g., <i>léim sé thar gheata ard</i> <Tl tlText="he jumped over a high gate" />; <i>ní raibh thar chúigear acu ann</i> <Tl tlText="there were no more than five of them there" />:</>;
  },
  get "10-2-5-e-sample-1"() {
    return <>It is not worth <b>more than a penny</b>.</>;
  },
  get "10-2-5-e-sample-2"() {
    return <>The book is not <b>beyond praise</b>.</>;
  },
  get "10-2-5-e-p2"() {
    return <>Note that lenition is not applied to a noun after <i>thar</i> in certain phrases containing an indefinite noun, e.g., <i>thar barr</i> <Tl tlText="over the top" />; <i>thar bráid</i> <Tl tlText="over the limit" />; <i>thar cionn</i> <Tl tlText="over the head" />; <i>thar fóir</i> <Tl tlText="over the edge" />; <i>thar sáile</i> <Tl tlText="over the sea" />; <i>thar toinn</i> <Tl tlText="over the waves" />; nor in the compound preposition <i>thar ceann</i> <Tl tlText="for the sake of" />:</>;
  },
  get "10-2-5-e-sample-3"() {
    return <>They drove her out <b>beyond the country</b>.</>;
  },
  get "10-2-5-e-sample-4"() {
    return <>He spent a period <b>overseas</b> before he started working here.</>;
  },
  get "10-2-5-e-note-p"() {
    return <>If a series of nouns is subject to a simple preposition, the initial mutation is applied only to the noun immediately following it, e.g., <i>Rinne siad taighde ar chonarthaí, comhaontuithe, córais agus scéimeanna</i> <Tl tlText="They conducted research on contracts, agreements, systems, and schemes" />; except when <i>idir</i> is used to mean <i>both</i>, e.g., <i>idir bheag agus mhór</i> <Tl tlText="both small and large" />.</>;
  },
  get "10-2-6-title"() {
    return "After Certain Compound Prepositions";
  },
  get "10-2-6-p1"() {
    return <>A definite noun (see <a href="./chapter3.html#sec_3_1_2">3.1.2</a>) that is subject to a compound preposition or by <i>cois</i>, <i>dála</i>, <i>fearacht</i>, <i>timpeall</i>, <i>trasna</i> is lenited, e.g., <i>ar aghaidh dhoras an tséipéil</i> <Tl tlText="at the front door of the chapel" />; <i>cois Bhóthar na hUaimhe</i> <Tl tlText="by the Road of the Cave" />; <i>de bhun mhír (b)</i> <Tl tlText="under item (b)" />; <i>fearacht Sheáin</i> <Tl tlText="John&rsquo;s ferry" />; <i>le haghaidh chlár a ceathair</i> <Tl tlText="for a four-part plan" />.</>;
  },
  get "10-2-6-sample-1"() {
    return <>She has houses <b>all over Dublin</b> and <b>Cork city</b>.</>;
  },
  get "10-2-6-sample-2"() {
    return <>He said it <b>in the presence of the woman</b> of the house.</>;
  },
  get "10-2-6-sample-3"() {
    return <>It happened <b>around the month</b> of December.</>;
  },
  get "10-2-6-p2"() {
    return <>Note that a definite noun is not lenited after <i>chun</i>, e.g., <i>chun foirgneamh a seacht</i> <Tl tlText="toward seven buildings" />; <i>chun gairdín a gcomharsan</i> <Tl tlText="toward a neighbor&rsquo;s garden" />; <i>chun Meiriceá</i> <Tl tlText="toward America" />; <i>chun Gearóid</i> <Tl tlText="to Gearóid" />; <i>chun Parlaimint na hEorpa</i> <Tl tlText="to the European Parliament" />.</>;
  },
  get "10-2-6-p3"() {
    return <>Indefinite nouns are not lenited except in established phrases, e.g., <i>tar éis bháis</i> (meaning <i>after passing away</i>).</>;
  },
  get "10-2-7-title"() {
    return "After a Feminine Noun";
  },
  get "10-2-7-p1"() {
    return <>If a (non-definite) noun in the genitive is subject to a singular feminine noun (not in the genitive), it is usually lenited, e.g., <i>cloch shneachta</i> <Tl tlText="snowflake" />; <i>deoir bhainne</i> <Tl tlText="tear of milk" />; <i>gloine bheorach</i> <Tl tlText="glass of beer" />; <i>léine chadáis</i> <Tl tlText="cotton shirt" />; <i>tuarascáil pharlaiminte</i> <Tl tlText="parliamentary report" />; <i>bliain bhisigh</i> <Tl tlText="leap year" />; <i>bliain chánach</i> <Tl tlText="fiscal year" />; <i>bliain mheasúnachta</i> <Tl tlText="assessment year" />; <i>mí ghealaí</i> <Tl tlText="lunar month" />:</>;
  },
  get "10-2-7-sample-1"() {
    return <>They went to the <b>football field</b>.</>;
  },
  get "10-2-7-sample-2"() {
    return <>Do you play a <b>musical instrument</b>?</>;
  },
  get "10-2-7-sample-3"() {
    return <>Did you finish <b>your homework</b>?<br />(Lit. <b>your work of home</b>)</>;
  },
  get "10-2-7-sample-4"() {
    return <>Stay and drink a <b>glass of cider</b> with us!</>;
  },
  get "10-2-7-p2"() {
    return <>Note that all the contexts in <a href="#sec_10_2_7_a">(a)</a> to <a href="#sec_10_2_7_m">(m)</a> list the instances when an indefinite noun subject to a singular feminine noun (not in the genitive) is not lenited. In all other contexts, lenition is applied to an indefinite noun subject to a singular feminine noun (not in the genitive).</>;
  },
  get "10-2-7-note-p"() {
    return <>An example could be included in one or more of the following contexts, e.g., <a href="#sec_10_2_7_b">(b)</a> and <a href="#sec_10_2_7_e">(e)</a> apply to the example <i>léim fia</i> <Tl tlText="deer leap" />.</>;
  },
  get "10-2-7-a-p"() {
    return <>The second noun is not lenited if the first noun ends in <i>d</i>, <i>n</i>, <i>t</i>, <i>l</i> or <i>s</i> and the second noun begins with <i>d</i>, <i>t</i> or <i>s</i>, e.g., <i>áit dúchais</i> <Tl tlText="place of origin" />; <i>bean tí</i> <Tl tlText="housewife" />; <i>cúis dóchais</i> <Tl tlText="cause of hope" />; <i>maidin samhraidh</i> <Tl tlText="summer morning" />; <i>saighead draíochta</i> <Tl tlText="magic arrow" />; <i>scoil samhraidh</i> <Tl tlText="summer school" />:</>;
  },
  get "10-2-7-a-sample-1"() {
    return <>She is working in the <b>research laboratory</b>.</>;
  },
  get "10-2-7-a-sample-2"() {
    return <>The defender was charged in the <b>District Court</b>.</>;
  },
  get "10-2-7-b-p1"() {
    return <>The second noun is not lenited if that noun begins with <i>f</i>, e.g., <i>buile feirge</i> <Tl tlText="fit of anger" />; <i>cúirt filíochta</i> <Tl tlText="poetry court" />; <i>deoch fuisce</i> <Tl tlText="whiskey drink" />; <i>deoir fola</i> <Tl tlText="tear of blood" />; <i>pailin féir</i> <Tl tlText="grass pollen" />; <i>sochaí faisnéise</i> <Tl tlText="information society" />:</>;
  },
  get "10-2-7-b-sample-1"() {
    return <>The club organized a <b>poetry night</b> as part of the festival.</>;
  },
  get "10-2-7-b-sample-2"() {
    return <>He doesn&rsquo;t have much experience with <b>information technology</b>.</>;
  },
  get "10-2-7-b-p2"() {
    return <>Note that <i>beirt</i> and <i>dís</i> are exceptions, and lenition is applied to a noun beginning with <i>f</i> after them, e.g., <i>beirt fheirmeoirí</i> <Tl tlText="two farmers" />; <i>dís fhear</i> <Tl tlText="two men" />.</>;
  },
  get "10-2-7-c-p1"() {
    return <>The second noun is not lenited if it is in the genitive plural, e.g., <i>rásaíocht gluaisrothar</i> <Tl tlText="motorcycle(s) racing" />; <i>saithe beach</i> <Tl tlText="beach huts" />; <i>scoil cailíní</i> <Tl tlText="girls&rsquo; school" />; <i>scuaine gasúr</i> <Tl tlText="boys&rsquo; queue" />; <i>sraith giorrúchán</i> <Tl tlText="series of abbreviations" />; <i>táin bó</i> <Tl tlText="cattle driving" />; <i>traein paisinéirí</i> <Tl tlText="passenger(s&rsquo;) train" />:</>;
  },
  get "10-2-7-c-sample-1"() {
    return <>They wanted to establish a <b>boys&rsquo; school</b> in that building.</>;
  },
  get "10-2-7-c-sample-2"() {
    return <>There was a three-mile <b>queue of cars</b> in the traffic jam.</>;
  },
  get "10-2-7-c-p2"() {
    return <>Note that <i>beirt</i> and <i>dís</i> are exceptions, and lenition is applied to a noun in the genitive plural after them, e.g., <i>beirt bhan</i> <Tl tlText="two women" />; <i>dís bhreithiúna</i> <Tl tlText="two judges" />; and that the phrase <i>clann mhac</i> <Tl tlText="family of sons" /> is also an exception.</>;
  },
  get "10-2-7-d-p"() {
    return <>The second noun is not lenited if the first noun has an indefinite quantitative meaning, e.g., <i>breis bainne</i> <Tl tlText="excess of milk" />; <i>díobháil céille</i> <Tl tlText="lack of sense" />; <i>easpa tobac</i> <Tl tlText="lack of tobacco" />; <i>iomarca cainte</i> <Tl tlText="excess of talk" />; <i>roinnt cáise</i> <Tl tlText="some cheese" />:</>;
  },
  get "10-2-7-d-sample-1"() {
    return <>Did he get <b>an excess of food</b>?</>;
  },
  get "10-2-7-d-sample-2"() {
    return <>There is <b>some powder</b> left.</>;
  },
  get "10-2-7-e-p1"() {
    return <>The second noun is not lenited if it is <a href="#sec_10_2_7_e_i">(i)</a> a person, <a href="#sec_10_2_7_e_ii">(ii)</a> an animal, <a href="#sec_10_2_7_e_iii">(iii)</a> a living thing, or <a href="#sec_10_2_7_e_iv">(iv)</a> a part of a person, animal or living thing &mdash;</>;
  },
  get "10-2-7-e-i-p"() {
    return <><i>aghaidh mná</i> <Tl tlText="woman&rsquo;s face" />; <i>casóg buachalla</i> <Tl tlText="boy&rsquo;s coat" />; <i>culaith garda</i> <Tl tlText="guard&rsquo;s uniform" />; <i>lámh cailín</i> <Tl tlText="girl&rsquo;s hand" />; <i>scian búistéara</i> <Tl tlText="butcher&rsquo;s knife" />; <i>súil páiste</i> <Tl tlText="child&rsquo;s eye" />:</>;
  },
  get "10-2-7-e-i-sample-1"() {
    return <>He bought a new <b>men&rsquo;s coat</b> in the shop.</>;
  },
  get "10-2-7-e-i-sample-2"() {
    return <>They needed to buy a <b>child&rsquo;s bed</b> for their grandson.</>;
  },
  get "10-2-7-e-ii-p"() {
    return <><i>adharc bó</i> <Tl tlText="cow&rsquo;s horn" />; <i>cáis gabhair</i> <Tl tlText="goat&rsquo;s cheese" />; <i>coiscéim coiligh</i> <Tl tlText="rooster&rsquo;s step" />; <i>cos capaill</i> <Tl tlText="horse&rsquo;s foot" />; <i>cráin muice</i> <Tl tlText="sow" />; <i>eitinn bólachta</i> <Tl tlText="bovine tuberculosis" />; <i>léim capaill</i> <Tl tlText="horse&rsquo;s jump" />; <i>géimneach bó</i> <Tl tlText="cow&rsquo;s bellow" />; <i>stail capaill</i> <Tl tlText="stallion horse" />; <i>ubh circe</i> <Tl tlText="hen&rsquo;s egg" />:</>;
  },
  get "10-2-7-e-ii-sample-1"() {
    return <>
      I saw a <b>salmon hen</b> (<b>female salmon</b>) in the water next to the fish weir. <br /> (Note: this contradicts FGB entry under <i>cearc</i>, which defines <i>cearc bhradáin</i> as <i>female salmon</i>.)
    </>;
  },
  get "10-2-7-e-ii-sample-2"() {
    return <>I have never eaten <b>horse meat</b>.</>;
  },
  get "10-2-7-e-iii-p"() {
    return <><i>cill planda</i> <Tl tlText="plant cell" />; <i>coirt crainn</i> <Tl tlText="tree bark" />; <i>péist cabáiste</i> <Tl tlText="cabbage worm" />:</>;
  },
  get "10-2-7-e-iii-sample-1"() {
    return <>She asked the children to draw a <b>holly leaf</b>.</>;
  },
  get "10-2-7-e-iii-sample-2"() {
    return <>It is necessary to remove <b>dock roots</b> to get rid of the dock.</>;
  },
  get "10-2-7-e-iv-p"() {
    return <><i>foinse béil</i> <Tl tlText="oral source" />; <i>íde béil</i> <Tl tlText="verbal abuse" />; <i>ionga méire</i> <Tl tlText="finger nail" />; <i>péist goile</i> <Tl tlText="stomach worm" />:</>;
  },
  get "10-2-7-e-iv-sample-1"() {
    return <>They put a <b>ear tag</b> on every animal.</>;
  },
  get "10-2-7-e-iv-sample-2"() {
    return <>Is your <b>big toe</b> sore?</>;
  },
  get "10-2-7-e-p2"() {
    return <>Note that <i>beirt</i> and <i>dís</i> are exceptions, and lenition is applied to a noun meaning person after them, e.g., <i>beirt bhan</i> <Tl tlText="two women" />; <i>dís bhreithiúna</i> <Tl tlText="two judges" />; and that lenition is applied to <i>céile</i> after a feminine noun, e.g., <i>bean chéile</i> <Tl tlText="wife" />; <i>deirfiúr chéile</i> <Tl tlText="sister-in-law" />.</>;
  },
  get "10-2-7-f-p"() {
    return <>The second noun is not lenited if the first noun is part of the second noun, e.g., <i>beann píce</i> <Tl tlText="point of a pike" />; <i>cos cathaoireach</i> <Tl tlText="chair leg" />; <i>cluas cupáin</i> <Tl tlText="cup handle" />; <i>iall bróige</i> <Tl tlText="shoe lace" />:</>;
  },
  get "10-2-7-f-sample-1"() {
    return <>It is easy to break a <b>bucket handle</b>.</>;
  },
  get "10-2-7-f-sample-2"() {
    return <>He did not understand how to use the <b>boat rudder</b>.</>;
  },
  get "10-2-7-g-p"() {
    return <>The second noun is not lenited if it is a noun derived from an adjective that describes the first noun, e.g., <i>áilleacht ceantair</i> <Tl tlText="beauty of the area" />; <i>airde balla</i> <Tl tlText="height of the wall" />; <i>breáthacht cathrach</i> <Tl tlText="urban elegance" />; <i>dílseacht pictiúir</i> <Tl tlText="picture fidelity" />; <i>finne maidine</i> <Tl tlText="morning fairness" />; <i>sábháilteacht bóthair</i> <Tl tlText="road safety" />:</>;
  },
  get "10-2-7-g-sample-1"() {
    return <>It is necessary for scientists to test <b>mixture strength</b> before it is sold.</>;
  },
  get "10-2-7-g-sample-2"() {
    return <>Schemes were established to ensure <b>food safety</b>.</>;
  },
  get "10-2-7-h-p1"() {
    return <>An indefinite noun after a verbal noun with the preposition <i>ag</i> before it is not lenited, e.g., <i>ag sábháil comhaid</i> <Tl tlText="saving a file" />; <i>ag tiomáint bus</i> <Tl tlText="driving a bus" />; <i>ag tógáil balla</i> <Tl tlText="building a wall" />:</>;
  },
  get "10-2-7-h-sample-1"() {
    return <>He started <b>knitting a sweater</b> last night.</>;
  },
  get "10-2-7-h-sample-2"() {
    return <>Caoimhe loves <b>playing music</b>.</>;
  },
  get "10-2-7-h-p2"() {
    return <>Note that there are a small number of established exceptions, e.g., <i>ag fáil bháis</i> <Tl tlText="dying" />; <i>ag gabháil fhoinn</i> <Tl tlText="committing a crime" />.</>;
  },
  get "10-2-7-i-p"() {
    return <>An indefinite noun after a verbal noun or noun expressing an action is not lenited when the second noun is the object, e.g., <i>athchúrsáil gloine</i> <Tl tlText="glass recycling" />; <i>forbairt pobail</i> <Tl tlText="community development" />; <i>láimhseáil ceimiceáin</i> <Tl tlText="chemical handling" />; <i>eisiúint preasráitis</i> <Tl tlText="press release issuance" />:</>;
  },
  get "10-2-7-i-sample-1"() {
    return <>Attention will be paid to <b>teacher training</b> in the new scheme.</>;
  },
  get "10-2-7-i-sample-2"() {
    return <>There are certain rules involved in <b>paper recycling</b>.</>;
  },
  get "10-2-7-j-p"() {
    return <>The second noun is not lenited after the words <i>aicme</i>, <i>comhairle</i>, <i>corparáid</i>, <i>cuideachta</i>, <i>earnáil</i>, <i>feidhmeannacht</i>, <i>foireann</i>, <i>gníomhaireacht</i>, <i>institiúid</i>, <i>oifig</i>, <i>rannóg</i>, <i>roinn</i>, <i>scéim</i>, <i>seirbhís</i>, e.g., <i>aicme ceannais</i> <Tl tlText="leadership class" />; <i>comhairle contae</i> <Tl tlText="county council" />; <i>corparáid baincéireachta</i> <Tl tlText="banking corporation" />; <i>earnáil gnó</i> <Tl tlText="business sector" />; <i>foireann bainistíochta</i> <Tl tlText="management team" />; <i>institiúid breisoideachais</i> <Tl tlText="further education institution" />; <i>oifig preasa</i> <Tl tlText="press office" />; <i>rannóg pearsanra</i> <Tl tlText="personnel department" />; <i>roinn cosanta</i> <Tl tlText="defense division" />:</>;
  },
  get "10-2-7-j-sample-1"() {
    return <>It is necessary for them to adjust the <b>marking scheme</b>.</>;
  },
  get "10-2-7-j-sample-2"() {
    return <>The company provides a <b>consultancy service</b>.</>;
  },
  get "10-2-7-k-p"() {
    return <>The nouns <i>dlí</i> and <i>sí</i> are not lenited after a feminine noun, e.g., <i>feidhm dlí</i> <Tl tlText="legal function" />; <i>bó sí</i> <Tl tlText="fairy cow" />:</>;
  },
  get "10-2-7-k-sample-1"() {
    return <>The government will provide a copy of the <b>legal instrument</b>.</>;
  },
  get "10-2-7-k-sample-2"() {
    return <>It is said that seeing the <b>phantom ship</b> is a sign of bad luck.</>;
  },
  get "10-2-7-l-p"() {
    return <>The second noun is not lenited if it is one of the precise units of measurement <i>bliain</i>, <i>coicís</i>, <i>mí</i> or <i>seachtain</i>, e.g., <i>saoire míosa</i> <Tl tlText="month&rsquo;s holiday" />; <i>tréimhse bliana</i> <Tl tlText="year&rsquo;s period" />; <i>moill bliana</i> <Tl tlText="year&rsquo;s delay" />:</>;
  },
  get "10-2-7-l-sample-1"() {
    return <>The <b>week-long festival</b> was launched with an event in the Mayor&rsquo;s house.</>;
  },
  get "10-2-7-l-sample-2"() {
    return <>She needed a <b>fortnight&rsquo;s rest</b> after the work.</>;
  },
  get "10-2-7-m-p1"() {
    return <>The second noun is not lenited if the second noun, which is in the genitive, is qualified by another noun or an adjective, e.g., <i>oíche gaoithe móire</i> <Tl tlText="stormy night" />; <i>bileog páipéir dúigh</i> <Tl tlText="sheet of ink paper" />; <i>gloine beorach fuaraithe</i> <Tl tlText="chilled beer glass" />:</>;
  },
  get "10-2-7-m-sample-1"() {
    return <>There was no <b>fresh milk</b> left in the house.</>;
  },
  get "10-2-7-m-sample-2"() {
    return <>The <b>translation project work</b> was completed yesterday.</>;
  },
  get "10-2-7-m-p2"() {
    return <>Exception: when <i>beirt</i> or <i>dís</i> is the first noun, e.g., <i>beirt bhan mhisniúla</i> <Tl tlText="two brave women" /> or when <i>beirt</i> is the second noun, e.g., <i>páistí bheirt bhan</i> <Tl tlText="children of two women" />.</>;
  },
  get "10-2-7-p3"() {
    return <>Note that, subject to the exceptions in <a href="#sec_10_2_7_a">(a)</a> to <a href="#sec_10_2_7_m">(m)</a> above, lenition is applied to every noun subject to a feminine noun, e.g., <i>tuarascáil pharlaiminte agus chomhphobail</i> <Tl tlText="parliamentary and community report" />. However, if there is a series of nouns in a list before another noun, the initial mutation associated with the last noun in the series is applied to the noun or nouns subject to it, e.g., <i>leabhar nó iris cheoil</i> <Tl tlText="music book or magazine" />; <i>iris nó leabhar ceoil</i> <Tl tlText="music magazine or book" />.</>;
  },
  get "10-2-8-title"() {
    return "After a Noun in the Plural Ending in a Slender Consonant";
  },
  get "10-2-8-p1"() {
    return <>If a (non-definite) noun in the genitive is subject to a noun in the plural ending in a slender consonant, it is usually lenited, e.g., <i>éin chlóis</i> <Tl tlText="enclosed birds" />; <i>dualgais bhreise</i> <Tl tlText="additional duties" />; <i>ceadúnais ghnó</i> <Tl tlText="business licenses" />.</>;
  },
  get "10-2-8-sample-1"() {
    return <>She had a meeting with <b>housing officials</b> from America.</>;
  },
  get "10-2-8-sample-2"() {
    return <>He says he has read all the <b>grammar books</b>.</>;
  },
  get "10-2-8-sample-3"() {
    return <><b>Traffic wardens</b> issue <b>parking tickets</b>.</>;
  },
  get "10-2-8-p2"() {
    return <>Note that all the contexts in <a href="#sec_10_2_8_a">(a)</a> to <a href="#sec_10_2_8_f">(f)</a> below list the instances when an indefinite noun subject to a noun in the plural ending in a slender consonant is not lenited. In all other contexts, lenition is applied to an indefinite noun subject to a noun in the plural ending in a slender consonant.</>;
  },
  get "10-2-8-note-p"() {
    return <>An example could be included in one or more of the following contexts, e.g., <a href="#sec_10_2_8_a">(a)</a>, <a href="#sec_10_2_8_c">(c)</a> and <a href="#sec_10_2_8_d">(d)</a> apply to the example <i>dualgais dochtúirí</i> <Tl tlText="duties of doctors" />.</>;
  },
  get "10-2-8-a-p"() {
    return <>The second noun is not lenited if the first noun ends in <i>d</i>, <i>n</i>, <i>t</i>, <i>l</i> or <i>s</i> and the second noun begins with <i>d</i>, <i>t</i> or <i>s</i>, e.g., <i>báid seoil</i> <Tl tlText="sailing boats" />; <i>capaill seilge</i> <Tl tlText="hunting horses" />; <i>turais taighde</i> <Tl tlText="research trips" />:</>;
  },
  get "10-2-8-a-sample-1"() {
    return <>The storyteller asked the children to say the <b>magic words</b> along with her.</>;
  },
  get "10-2-8-a-sample-2"() {
    return <><b>Fountain pens</b> were used when he was at school.</>;
  },
  get "10-2-8-b-p"() {
    return <>The second noun is not lenited if it begins with <i>f</i>, e.g., <i>beithígh feirme</i> <Tl tlText="farm animals" />; <i>botháin freastail</i> <Tl tlText="service huts" />; <i>buidéil fuisce</i> <Tl tlText="whiskey bottles" />:</>;
  },
  get "10-2-8-b-sample-1"() {
    return <>TG4 is developing new <b>documentary programs</b>.</>;
  },
  get "10-2-8-b-sample-2"() {
    return <>Ten <b>building societies</b> took part in the survey.</>;
  },
  get "10-2-8-c-p"() {
    return <>The second noun is not lenited if it is in the genitive plural, e.g., <i>imill bóithre</i> <Tl tlText="road edges" />; <i>cnuasaigh dánta</i> <Tl tlText="collections of poems" />:</>;
  },
  get "10-2-8-c-sample-1"() {
    return <>The children like those <b>picture books</b>.</>;
  },
  get "10-2-8-c-sample-2"() {
    return <>The council is currently looking for <b>service officers</b>.</>;
  },
  get "10-2-8-d-p"() {
    return <>The second noun is not lenited if it is <a href="#sec_10_2_8_d_i">(i)</a> a person, <a href="#sec_10_2_8_d_ii">(ii)</a> an animal, <a href="#sec_10_2_8_d_iii">(iii)</a> a living thing, or <a href="#sec_10_2_8_d_iv">(iv)</a> a part of a person, animal or living thing, the second noun &mdash;</>;
  },
  get "10-2-8-d-i-p"() {
    return <><i>duáin cailín</i> <Tl tlText="girl&rsquo;s kidneys" />; <i>buidéil páiste</i> <Tl tlText="child&rsquo;s bottles" />:</>;
  },
  get "10-2-8-d-i-sample-1"() {
    return <>There is a description of the <b>carer&rsquo;s allowances</b> on the website.</>;
  },
  get "10-2-8-d-i-sample-2"() {
    return <><b>Teacher passwords</b> should never be shared with students.</>;
  },
  get "10-2-8-d-ii-p"() {
    return <><i>bréagáin madra</i> <Tl tlText="dog toys" />; <i>sciatháin circe</i> <Tl tlText="chicken wings" />:</>;
  },
  get "10-2-8-d-ii-sample-1"() {
    return <><b>Centipede antennae</b> could be as long as their body.</>;
  },
  get "10-2-8-d-ii-sample-2"() {
    return <>The <b>limpet shells</b> were distributed after the meal.</>;
  },
  get "10-2-8-d-iii-p"() {
    return <><i>crainn beithe</i> <Tl tlText="birch trees" />; <i>peitil blátha</i> <Tl tlText="flower petals" />:</>;
  },
  get "10-2-8-d-iii-sample-1"() {
    return <>The panda eats <b>bamboo shoots</b>.</>;
  },
  get "10-2-8-d-iii-sample-2"() {
    return <>Scientists were advised to collect <b>mushroom spores</b>.</>;
  },
  get "10-2-8-d-iv-p"() {
    return <><i>ailt méire</i> <Tl tlText="finger joints" />; <i>matáin coise</i> <Tl tlText="leg muscles" />:</>;
  },
  get "10-2-8-d-iv-sample-1"() {
    return <><b>Sides of bacon</b> are sold in the butcher&rsquo;s shop.</>;
  },
  get "10-2-8-d-iv-sample-2"() {
    return <>He had rings in his <b>ear lobes</b>.</>;
  },
  get "10-2-8-e-p"() {
    return <>The second noun is not lenited if the first noun is part of the second noun, e.g., <i>cláir báid</i> <Tl tlText="boat boards" />; <i>méarchláir pianó</i> <Tl tlText="piano keyboards" />:</>;
  },
  get "10-2-8-e-sample-1"() {
    return <>It is on the <b>house beams</b> that the entire weight of the roof rests.</>;
  },
  get "10-2-8-e-sample-2"() {
    return <>The new <b>phone screens</b> are much larger than they used to be.</>;
  },
  get "10-2-8-f-p1"() {
    return <>The second noun is not lenited if the second noun, which is in the genitive, is qualified by another noun or an adjective, e.g., <i>cláir dioplóma iarchéime</i> <Tl tlText="postgraduate diploma boards" />; <i>cláir deice báid</i> <Tl tlText="boat deck boards" />:</>;
  },
  get "10-2-8-f-sample-1"() {
    return <>It is necessary to update the company&rsquo;s <b>data protection policies</b>.</>;
  },
  get "10-2-8-f-sample-2"() {
    return <>The <b>information technology officers</b> will resolve the problem.</>;
  },
  get "10-2-8-f-p2"() {
    return <>Exception: when <i>beirt</i> is the second noun, e.g., <i>gluaisteáin bheirt pheileadóirí</i> <Tl tlText="two football players&rsquo; cars" />.</>;
  },
  get "10-2-8-p3"() {
    return <>Note that, subject to the exceptions in <a href="#sec_10_2_8_a">(a)</a> to <a href="#sec_10_2_8_f">(f)</a> above, lenition is applied to every noun subject to a noun in the plural ending in a slender consonant, e.g., <i>comórtais idir-ollscoile chadhcála agus bhoghdóireachta</i> <Tl tlText="inter-university competitions in kayaking and archery" />; <i>páipéir bhainc agus pharlaiminte</i> <Tl tlText="bank and parliamentary papers" />; <i>limistéir pleanála teanga Ghaeltachta</i> <Tl tlText="Gaeltacht language planning areas" />. However, if there is a series of nouns in a list before another noun, the initial mutation associated with the last noun in the series is applied to the noun or nouns subject to it, e.g., <i>treoracha nó leabhair ghramadaí</i> <Tl tlText="grammar guides or books" />; <i>leabhair nó treoracha gramadaí</i> <Tl tlText="grammar books or guides" />.</>;
  },
  get "10-2-9-title"() {
    return "After a Noun in the Genitive";
  },
  get "10-2-9-p"() {
    return <>An indefinite noun subject to a noun in the genitive is not lenited, e.g., <i>bord údaráis creidiúnúcháin</i> <Tl tlText="accreditation authority board" />; <i>síniú an choinbhinsiúin cóipchirt</i> <Tl tlText="signing of the copyright convention" />; <i>suíomh an chruinnithe mullaigh</i> <Tl tlText="location of the summit meeting" />; <i>bord coláiste gairmoideachais</i> <Tl tlText="vocational college board" />; <i>trasna na sráide cathrach</i> <Tl tlText="across the city street" />:</>;
  },
  get "10-2-9-sample-1"() {
    return <>The meeting was in the <b>parish priest&rsquo;s</b> house.</>;
  },
  get "10-2-9-sample-2"() {
    return <>He was waiting at the <b>pub&rsquo;s</b> door.</>;
  },
  get "10-2-10-title"() {
    return "After a Definite Noun Following Another Noun";
  },
  get "10-2-10-p1"() {
    return <>Lenition is applied to a definite noun in the genitive following another noun, e.g., <i>Cuan Bhaile Átha Cliath</i> <Tl tlText="Dublin Bay" />; <i>foireann Dhoire</i> <Tl tlText="Derry team" />; <i>muintir Sheáin</i> <Tl tlText="Seán&rsquo;s people" />; <i>oibrithe Bhéal Feirste</i> <Tl tlText="Belfast workers" />; <i>mac fhear an tábhairne</i> <Tl tlText="the pub owner&rsquo;s son" />; <i>obair bhean an tí</i> <Tl tlText="the housewife&rsquo;s work" />.</>;
  },
  get "10-2-10-p2"() {
    return <>Note that lenition is applied to a definite noun even when <i>d</i>, <i>t</i> or <i>s</i> follows <i>d</i>, <i>n</i>, <i>t</i>, <i>l</i> or <i>s</i>, e.g., <i>foireann Dhoire</i> <Tl tlText="Derry team" />; <i>riail Shasana</i> <Tl tlText="English rule" />; <i>doras Theach an Phiarsaigh</i> <Tl tlText="Pearse&rsquo;s House door" />; <i>luas thraein an iarthair</i> <Tl tlText="the west train&rsquo;s speed" />:</>;
  },
  get "10-2-10-sample-1"() {
    return <>They said they attended <b>St. Colman&rsquo;s</b> College.</>;
  },
  get "10-2-10-sample-2"() {
    return <>There is a hole in the <b>butcher&rsquo;s</b> shop.</>;
  },
  get "10-2-10-p3"() {
    return "But lenition is not applied &mdash;";
  },
  get "10-2-10-a-p"() {
    return "to the following nouns:";
  },
  get "10-2-10-a-i-p"() {
    return <><i>Dé</i> (<i>Dia</i> in the genitive), e.g., <i>lámh Dé</i> <Tl tlText="the hand of God" />; <i>trócaire Dé</i> <Tl tlText="the mercy of God" />:</>;
  },
  get "10-2-10-a-i-sample-1"() {
    return <>The book about Mary, Mother <b>of God</b>, is written by him.</>;
  },
  get "10-2-10-a-ii-p"() {
    return <><i>San</i> or the name it denotes, e.g., <i>Ord San Proinsias</i> <Tl tlText="Order of St. Francis" />; <i>Lá San Svaítín</i> <Tl tlText="St. Valentine&rsquo;s Day" />; <i>Lá San Seáin</i> <Tl tlText="St. John&rsquo;s Day" />:</>;
  },
  get "10-2-10-a-ii-sample-1"() {
    return <>The parish of <b>St. Catherine</b> is in Dublin.</>;
  },
  get "10-2-10-a-iii-p"() {
    return <><i>Dé</i> in the days of the week, e.g., <i>oíche Dé Máirt</i> <Tl tlText="Tuesday night" />; <i>tráthnóna Dé Céadaoin</i> <Tl tlText="Wednesday afternoon" />:</>;
  },
  get "10-2-10-a-iii-sample-1"() {
    return <>They will reach France on <b>Saturday</b> morning.</>;
  },
  get "10-2-10-b-p"() {
    return "to a definite noun that comes after the following nouns:";
  },
  get "10-2-10-b-i-p"() {
    return <><i>Féile</i> in the genitive, e.g., <i>Lá Fhéile Pádraig</i> <Tl tlText="St. Patrick&rsquo;s Day" />; <i>Samhradh beag na Féile Michíl</i> <Tl tlText="Michaelmas" />:</>;
  },
  get "10-2-10-b-i-sample-1"() {
    return <>She was born on <b>St. Brigid&rsquo;s Day</b>.</>;
  },
  get "10-2-10-b-ii-p"() {
    return <><i>Naomh</i>, e.g., <i>cuimhneachán Naomh Peadar</i> <Tl tlText="St. Peter&rsquo;s Memorial" />; <i>Naomh Pól</i> <Tl tlText="St. Paul" />:</>;
  },
  get "10-2-10-b-ii-sample-1"() {
    return <>They were playing against <b>St. Finbar&rsquo;s School</b>.</>;
  },
  get "10-2-10-c-p"() {
    return <>to a verbal noun whose object is a definite noun, e.g., <i>madra cosanta na monarcha</i> <Tl tlText="the dog guarding the factory" />; <i>bean fuascailte na ceiste</i> <Tl tlText="the woman answering the question" />; <i>beach cealgtha an pháiste</i> <Tl tlText="the bee stinging the child" />; <i>innill buailte an arbhair</i> <Tl tlText="the machines striking the grain" />; <i>seachtain bailithe na rátaí</i> <Tl tlText="the week of rate collection" /> (see <a href="./chapter3.html#sec_3_3_1_a">3.3.1(a)</a>).</>;
  },
  get "10-2-11-title"() {
    return "In Surnames";
  },
  get "10-2-11-p1"() {
    return <>Lenition is applied to the noun after <i>Mhic</i>, <i>Mhig</i>, <i>Ní</i>, <i>Nic</i>, <i>Uí</i> in surnames, e.g., <i>Bean Mháirtín Uí Bhroin</i>; <i>Isibéal Nig Fhloinn</i>; <i>Siobhán Ní Chonchúir</i>; <i>Úna Nic Shuibhne</i>; and after <i>Mac</i> (<i>Mag</i>) in certain surnames, e.g., <i>Mac Pháidín</i>; <i>Mag Fhinn</i>:</>;
  },
  get "10-2-11-sample-1"() {
    return <>Have you ever met Gobnait <b>Ní Dhúill</b>?</>;
  },
  get "10-2-11-sample-2"() {
    return <>She was reading a story by Pádraic <b>Uí Chonaire</b>.</>;
  },
  get "10-2-11-p2"() {
    return <>Note that <i>c</i> and <i>g</i> are not lenited after <i>Mhic</i> or <i>Nic</i>, e.g., <i>teach Sheáin Mhic Cárthaigh</i>:</>;
  },
  get "10-2-11-sample-3"() {
    return <>Have you seen <b>Pól Mhic Cearáin</b>&rsquo;s car?</>;
  },
  get "10-2-11-sample-4"() {
    return <><b>Sorcha Nic Gearailt</b> was not present.</>;
  },
  get "10-2-12-title"() {
    return "In the Compound Word";
  },
  get "10-2-12-p"() {
    return <>The second word in a compound word is lenited, e.g., <i>dea-cháil</i> <Tl tlText="good reputation" />, <i>deargbhuile</i> <Tl tlText="stark madness" />, <i>rósghairdín</i> <Tl tlText="rose garden" />, <i>sárdhuine</i> <Tl tlText="extraordinary person" />, except when <i>d</i>, <i>n</i>, <i>t</i>, <i>l</i> or <i>s</i> come together, e.g., <i>antráth</i> <Tl tlText="inopportune time" />, <i>catsúil</i> <Tl tlText="sidelong glance" />, <i>clostrácht</i> <Tl tlText="hearsay" />, <i>galltrumpa</i> <Tl tlText="clarion" />, <i>ilsiolla</i> <Tl tlText="multi-syllable" />, <i>leasdeartháir</i> <Tl tlText="stepbrother" />, <i>seansaighdiúir</i> <Tl tlText="veteran soldier" />.</>;
  },
  get "10-2-12-sample-1"() {
    return <>The <b>waste paper</b> was set aside for recycling.</>;
  },
  get "10-2-12-sample-2"() {
    return <>The <b>back door</b> is the one the house always uses.</>;
  },
  get "10-2-12-sample-3"() {
    return <>The <b>car park</b> is right next to the <b>primary school</b>.</>;
  },
  get "10-2-12-note-p"() {
    return <>The second word in a compound word is not lenited after <i>an-</i> (the emphatic prefix) when <i>d</i>, <i>t</i> or <i>s</i> follow it, e.g., <i>An-duine is ea é</i> <Tl tlText="He is a great person" />; <i>Bhí an-dea-aimsir ann an samhradh sin</i> <Tl tlText="There was very good weather that summer" />; <i>An-drochrud a bhí sa bhean sin</i> <Tl tlText="There was a very bad thing in that woman" /> (see <a href="./chapter2.html#sec_2_1_7">2.1.7</a>).</>;
  },
  get "10-2-13-title"() {
    return "After the Copula";
  },
  get "10-2-13-p"() {
    return <>Lenition is applied to the noun following the copula in the indicative mood, past tense and past habitual tense, and in the conditional mood, e.g., <i>Ba dhuine mór é</i> <Tl tlText="He was a great person" />; <i>Ar shagart é?</i> <Tl tlText="Was he a priest?" />; <i>Níor dhochtúir é</i> <Tl tlText="He was not a doctor" />; <i>Nár cheoltóir maith é?</i> <Tl tlText="Was he not a good musician?" />; <i>Is dóigh leis gur ghadaí a bhí ann</i> <Tl tlText="He thinks he was a thief" />; <i>Dúirt sí gurbh fhiú labhairt léi</i> <Tl tlText="She said it was worth talking to her" />; <i>Deir sé nár dhochar é</i> <Tl tlText="He says it was not harmful" />; <i>cér chás é (ach)</i> <Tl tlText="What matter (but)" />; <i>dá mba chailín í</i> <Tl tlText="If she were a girl" />; <i>fear dar shloinne Ó Murchú</i> <Tl tlText="A man named Ó Murchú" />; <i>má ba bhithiúnach é</i> <Tl tlText="If he were a scoundrel" />; <i>murar bhréag é</i> <Tl tlText="If it were not a lie" /> (see <a href="./chapter7.html">Chapter 7</a>):</>;
  },
  get "10-2-13-sample-1"() {
    return <>She <b>was a mechanic</b> when she was young.</>;
  },
  get "10-2-13-sample-2"() {
    return <>I <b>would like</b> to go there sometime.</>;
  },
  get "10-3-title"() {
    return "Lenition of the Adjective";
  },
  get "10-3-p"() {
    return "Lenition is applied to the adjective in the following contexts.";
  },
  get "10-3-1-title"() {
    return "After Nouns";
  },
  get "10-3-1-p"() {
    return "The initial consonant of a qualifying adjective is lenited &mdash;";
  },
  get "10-3-1-a-p1"() {
    return <>after a noun in the nominative, dative or vocative singular feminine, e.g., <i>bean mhór</i> <Tl tlText="a big woman" />; <i>don bhean mhór</i> <Tl tlText="to the big woman" />; <i>a bhean mhór</i> <Tl tlText="o big woman" />:</>;
  },
  get "10-3-1-a-sample-1"() {
    return <>He always buys <b>tasty</b> meat.</>;
  },
  get "10-3-1-a-sample-2"() {
    return <>Stay behind the <b>yellow</b> line.</>;
  },
  get "10-3-1-a-p2"() {
    return <>Note that lenition is not applied to multi-word adjectival phrases, e.g., <i>athnuachan saor in aisce</i> <Tl tlText="free renewal" />; <i>bean mór le rá</i> <Tl tlText="a well-known woman" />; <i>tuarascáil cothrom le dáta</i> <Tl tlText="an up-to-date report" /> (see <a href="./chapter4.html#sec_4_3_8">4.3.8</a>).</>;
  },
  get "10-3-1-b-p"() {
    return <>after a noun in the genitive or vocative singular masculine, e.g., <i>mac fir mhóir</i> <Tl tlText="son of a big man" />; <i>a fhir mhóir</i> <Tl tlText="o big man" />:</>;
  },
  get "10-3-1-b-sample-1"() {
    return <>Have you met the owner of the <b>grey</b> horse?</>;
  },
  get "10-3-1-b-sample-2"() {
    return <>The poem A Éin <b>Bhig</b> is by Pearse.</>;
  },
  get "10-3-1-c-p1"() {
    return <>after a noun in the nominative or dative plural, if the noun ends in a slender consonant, e.g., <i>fir mhóra</i> <Tl tlText="big men" />; <i>do na fir mhóra</i> <Tl tlText="to the big men" /> (exception: <i>caora</i> <Tl tlText="sheep" /> in the nominative plural, e.g., <i>caoirigh beaga/bána/móra</i>, etc. <Tl tlText="small/white/big sheep" />):</>;
  },
  get "10-3-1-c-sample-1"() {
    return <>Labels for <b>perishable</b> goods must be affixed.</>;
  },
  get "10-3-1-c-sample-2"() {
    return <>There were <b>large black</b> clouds in the sky.</>;
  },
  get "10-3-1-c-p2"() {
    return <>Note that the grammatical link is broken by brackets, e.g., <i>gnóthais (beag nó mór)</i> <Tl tlText="businesses (small or large)" />.</>;
  },
  get "10-3-1-d-p"() {
    return "for numbers:";
  },
  get "10-3-1-d-i-p"() {
    return <>after a noun preceded by <i>dá</i> or <i>dhá</i>, e.g., <i>dhá bhó bhána</i> <Tl tlText="two white cows" />; <i>luach an dá bhó bhána</i> <Tl tlText="the value of the two white cows" />; <i>an dá leabhar déag mhóra</i> <Tl tlText="the twelve big books" />; <i>dhá fhuinneog mhóra is tríocha</i> <Tl tlText="thirty-two big windows" />; <i>dhá cheann mhóra is ceathracha</i> <Tl tlText="forty-two big items" />:</>;
  },
  get "10-3-1-d-i-sample-1"() {
    return <>He got two <b>fierce</b> hounds.</>;
  },
  get "10-3-1-d-i-sample-2"() {
    return <>The doors of the two <b>small</b> houses must be locked.</>;
  },
  get "10-3-1-d-ii-p1"() {
    return <>after a noun in the singular preceded by a number from <i>three</i> to <i>ten</i>, e.g., <i>trí (ceithre, cúig, sé) bhád mhóra</i> <Tl tlText="three (four, five, six) big boats" />; <i>seacht (ocht, naoi, deich) gcapall mhóra</i> <Tl tlText="seven (eight, nine, ten) big horses" />; <i>trí (ceithre, cúig, sé) fhuinneog déag mhóra</i> <Tl tlText="three (four, five, six) big windows" />; <i>seacht (ocht, naoi, deich) mbád déag mhóra</i> <Tl tlText="seven (eight, nine, ten) big boats" />; <i>ocht gcéad nócha is naoi mbád bheaga</i> <Tl tlText="eight hundred and ninety-nine small boats" />; <i>lucht na dtrí (gceithre, etc.) bhád mhóra</i> <Tl tlText="the people of the three (four, etc.) big boats" />; <i>ainmneacha na seacht (n-ocht, etc.) gcapall mhóra</i> <Tl tlText="the names of the seven (eight, etc.) big horses" />:</>;
  },
  get "10-3-1-d-ii-sample-1"() {
    return <>She bought three <b>long</b> books for her holidays.</>;
  },
  get "10-3-1-d-ii-sample-2"() {
    return <>Ten <b>famous</b> films were shown during the festival.</>;
  },
  get "10-3-1-d-ii-p2"() {
    return <>Note that, when the Simplified System above twenty is used (see <a href="./chapter9.html#sec_9_3_10">9.3.10</a> &ndash; <a href="./chapter9.html#sec_9_3_12">9.3.12</a>), lenition is applied only to an adjective following a feminine noun, e.g., <i>fiche a trí capall mór</i> <Tl tlText="twenty-three big horses" />; <i>45 fuinneog mhór</i> <Tl tlText="45 big windows" />.</>;
  },
  get "10-3-1-d-iii-p"() {
    return <>after the plural form <i>cinn</i> when preceded by a number from <i>trí</i> to <i>deich</i>, e.g., <i>trí cinn dhubha</i> <Tl tlText="three black ones" />; <i>cúig cinn mhóra is seasca</i> <Tl tlText="sixty-five big ones" />:</>;
  },
  get "10-3-1-d-iii-sample-1"() {
    return <>She found three <b>empty</b> ones in the search.</>;
  },
  get "10-3-1-e-p"() {
    return <>in the masculine dative singular, if the Lenition System is being used (see <a href="./chapter1.html#sec_1_7">1.7</a>).</>;
  },
  get "10-3-2-title"() {
    return "Before a Noun";
  },
  get "10-3-2-p"() {
    return "When an adjective precedes a noun &mdash;";
  },
  get "10-3-2-a-p"() {
    return <>the adjective is lenited after a simple preposition, after a simple preposition and the definite article, and after a possessive adjective in the same way as the noun is lenited, e.g., <i>ar thrí euro</i> <Tl tlText="for three euros" />; <i>don cheathrú bean</i> <Tl tlText="to the fourth woman" />; <i>mo shéú hubh</i> <Tl tlText="my sixth egg" /> (see <a href="./chapter9.html#sec_9_5_1">9.5.1</a>):</>;
  },
  get "10-3-2-a-sample-1"() {
    return <>It will be done within <b>four</b> months.</>;
  },
  get "10-3-2-a-sample-2"() {
    return <>They gave it to the <b>fifth</b> visitor.</>;
  },
  get "10-3-2-a-sample-3"() {
    return <>It was <b>his third</b> attempt.</>;
  },
  get "10-3-2-b-p1"() {
    return <>the numeral in the genitive case is lenited in the same way as a masculine noun, e.g., <i>doras an cheathrú seomra</i> <Tl tlText="the door of the fourth room" />, but <i>f</i> is not lenited, e.g., <i>i dtrátha an fichiú lá</i> <Tl tlText="at the time of the twentieth day" /> (see <a href="./chapter9.html#sec_9_5_4_d">9.5.4(d)</a>)</>;
  },
  get "10-3-2-b-sample-1"() {
    return <>The shoes of the <b>fifth</b> girl got lost.</>;
  },
  get "10-3-2-b-sample-2"() {
    return <>The food of the <b>twentieth</b> man was still to be distributed.</>;
  },
  get "10-3-2-b-p2"() {
    return "Note that lenition is not applied to &mdash;";
  },
  get "10-3-2-b-i-p"() {
    return <>the ordinal number in the nominative case, except <i>céad</i> (see <a href="./chapter9.html#sec_9_5_1_b">9.5.1(b)</a>), e.g., <i>an tríú duine</i> <Tl tlText="the third person" />; <i>an cúigiú bean</i> <Tl tlText="the fifth woman" />; <i>ach an chéad áit</i> <Tl tlText="but the first place" />; <i>na chéad chéimeanna</i> <Tl tlText="the first steps" />:</>;
  },
  get "10-3-2-b-i-sample-1"() {
    return <>You are the <b>fourth</b> person to ask me that question.</>;
  },
  get "10-3-2-b-i-sample-2"() {
    return <>She achieved <b>the sixth</b> place in the race.</>;
  },
  get "10-3-2-b-ii-p"() {
    return <><i>cibé</i>, <i>gach</i> or <i>pé</i>:</>;
  },
  get "10-3-2-b-ii-sample-1"() {
    return <>It must be completed within <b>any</b> period allowed by the Minister.</>;
  },
  get "10-3-2-b-ii-sample-2"() {
    return <><b>All</b> institutions should respect their own safety rules.</>;
  },
  get "10-3-2-b-ii-sample-3"() {
    return <>He could not describe <b>any</b> thing that was bothering him.</>;
  },
  get "10-3-2-b-iii-p"() {
    return <>the possessive adjectives <i>mo</i> and <i>do</i>, e.g., <i>ar mo mhála</i> <Tl tlText="on my bag" />; <i>faoi do chara</i> <Tl tlText="about your friend" />:</>;
  },
  get "10-3-2-b-iii-sample-1"() {
    return <>He would go through <b>your</b> heart.</>;
  },
  get "10-3-2-b-iii-sample-2"() {
    return <>I saw it on <b>your</b> website.</>;
  },
  get "10-3-3-title"() {
    return <>To <i>dhá</i> and <i>dháréag</i></>;
  },
  get "10-3-3-p"() {
    return <>The adjectives <i>dhá</i> and <i>dháréag</i> are lenited, e.g., <i>mo dhá bhróg</i> <Tl tlText="my two shoes" />; <i>bhí dháréag i láthair</i> <Tl tlText="twelve were present" />; except after the definite article (<i>an</i>, <i>don</i>, <i>sa</i>, etc.), <i>aon</i> and <i>chéad</i>, e.g., <i>an dá áit</i> <Tl tlText="the two places" />; <i>gach aon dá uair an chloig</i> <Tl tlText="every two hours" />; <i>an chéad dá bhliain</i> <Tl tlText="the first two years" />; <i>an Dáréag Aspal</i> <Tl tlText="the Twelve Apostles" />; <i>gach aon dáréag acu</i> <Tl tlText="every twelve of them" />; <i>an chéad dáréag a cháiligh</i> <Tl tlText="the first twelve to qualify" />; <i>Cogadh an Dá Aodh</i> <Tl tlText="The War of the Two Aodhs" />.</>;
  },
  get "10-3-3-sample-1"() {
    return <>They spent <b>two</b> hours there.</>;
  },
  get "10-3-3-sample-2"() {
    return <>They chose <b>twelve</b> to participate in the competition.</>;
  },
  get "10-3-3-sample-3"() {
    return <>The <b>two</b> gifts were open.</>;
  },
  get "10-3-3-sample-4"() {
    return <>What instructions were given to the <b>twelve</b> on the jury?</>;
  },
  get "10-3-4-title"() {
    return <>To <i>déag</i> and <i>fichead</i></>;
  },
  get "10-3-4-p"() {
    return <>Lenition is applied to <i>déag</i> after <i>dó</i> and after a singular noun ending in a vowel, e.g., <i>trí bhó dhéag</i> <Tl tlText="thirteen cows" />; <i>cúig lá dhéag</i> <Tl tlText="fifteen days" />; except in the ordinal numbers (see <a href="./chapter9.html#sec_9_5_2_e">9.5.2(e)</a>). <i>Fichead</i> is lenited after a noun in the slender plural, e.g., <i>trí cinn fhichead</i> <Tl tlText="sixty" />.</>;
  },
  get "10-3-4-sample-1"() {
    return <>He got bus number twelve (two <b>ten</b>).</>;
  },
  get "10-3-4-sample-2"() {
    return <>The course lasted seven<b></b>teen<b></b> months.</>;
  },
  get "10-3-4-sample-3"() {
    return <>There are <b>twenty</b> seven short stories in the collection.</>;
  },
  get "10-3-5-title"() {
    return "In the Compound Word";
  },
  get "10-3-5-p"() {
    return <>The second word in a compound word is lenited, e.g., <i>beagmhaith</i> <Tl tlText="useless" />, <i>fíordheas</i> <Tl tlText="truly nice" />, except when <i>d</i>, <i>t</i> or <i>s</i> follow <i>d</i>, <i>n</i>, <i>t</i>, <i>l</i> or <i>s</i>, e.g., <i>antrom</i> <Tl tlText="oppression" />, <i>bándearg</i> <Tl tlText="pink" />, <i>caolsrónach</i> <Tl tlText="narrow-nosed" />, <i>casdubh</i> <Tl tlText="black-footed" />, <i>fadsaolach</i> <Tl tlText="long-lived" />, <i>ildánach</i> <Tl tlText="multi-talented" />, <i>ilteangach</i> <Tl tlText="multilingual" />.</>;
  },
  get "10-3-5-sample-1"() {
    return <>They studied <b>semiconductor</b> material as part of the physics class.</>;
  },
  get "10-3-5-sample-2"() {
    return <>He received a <b>great-big</b> payment for that work.</>;
  },
  get "10-3-5-sample-3"() {
    return <>It was clear that she was <b>very happy</b> with her first day at work.</>;
  },
  get "10-3-6-title"() {
    return "After the Copula";
  },
  get "10-3-6-p"() {
    return <>Lenition is applied to the adjective following the copula in the indicative mood, past tense and past habitual tense, and in the conditional mood, e.g., <i>Ba dheas uait é</i> <Tl tlText="It was nice of you" />; <i>Ar mhaith leat é?</i> <Tl tlText="Would you like it?" />; <i>Níor bheag an gaisce é</i> <Tl tlText="It was no small feat" />; <i>Nár dhona an lá é?</i> <Tl tlText="Wasn&rsquo;t it a bad day?" />; <i>B&rsquo;fhéidir nár chneasta uaim é</i> <Tl tlText="Perhaps it wasn&rsquo;t kind of me" />; <i>Dá mba mhaith leat teacht, bheadh fáilte romhat</i> <Tl tlText="If you would like to come, you would be welcome" />; <i>má ba shaibhir an fear é</i> <Tl tlText="if the man were rich" /> (see <a href="./chapter7.html">Chapter 7</a>).</>;
  },
  get "10-3-6-sample-1"() {
    return <>He said <b>that</b> it was a <b>great</b> benefit to him.</>;
  },
  get "10-3-6-sample-2"() {
    return <><b>If</b> it <b>were not true</b>, <b>it is not right</b> to say such a thing.</>;
  },
  get "10-4-title"() {
    return "Lenition on the Verb";
  },
  get "10-4-1-title"() {
    return "Lenition on the Independent Verb";
  },
  get "10-4-1-p"() {
    return "The independent verb is lenited &mdash;";
  },
  get "10-4-1-a-p"() {
    return <>in the indicative mood, past tense and past habitual tense, and in the conditional mood, e.g., <i>mhol mé</i> (<i>mhol tú</i>, etc.) <Tl tlText="I praised" />, <i>mholainn</i> (<i>mholtá</i>, etc.) <Tl tlText="I used to praise" />, <i>mholfainn</i>, (<i>mholfá</i>, etc.) <Tl tlText="I would praise" />, <i>mholtaí</i> <Tl tlText="used to be praised" />, <i>mholfaí</i> <Tl tlText="would be praised" />:</>;
  },
  get "10-4-1-a-sample-1"() {
    return <>She <b>saved</b> a lot of money.</>;
  },
  get "10-4-1-a-sample-2"() {
    return <>They <b>would go</b> there every day.</>;
  },
  get "10-4-1-a-sample-3"() {
    return <>He <b>would help</b> you if you asked him.</>;
  },
  get "10-4-1-b-p"() {
    return <>after <i>a</i>, direct relative, and after the conjunctions <i>má</i> and <i>ó</i>:</>;
  },
  get "10-4-1-b-sample-1"() {
    return <>That is the woman <b>who will clean</b> the place.</>;
  },
  get "10-4-1-b-sample-2"() {
    return <>Did you see the car <b>that she drives</b>?</>;
  },
  get "10-4-1-b-sample-3"() {
    return <><b>If</b> he <b>is</b> there, bring it with you.</>;
  },
  get "10-4-1-b-sample-4"() {
    return <><b>Since</b> you put it in my head, I haven&rsquo;t thought about anything else.</>;
  },
  get "10-4-1-c-p1"() {
    return <>in the affirmative clause functioning as a noun with the copula in forms such as <i>Is ann a chonaic mé é</i> <Tl tlText="It is there that I saw him" />; <i>Is leis a bheidh mé</i> <Tl tlText="It is his that I will be" />:</>;
  },
  get "10-4-1-c-sample-1"() {
    return <>It is in that shop <b>that he buys</b> his clothes.</>;
  },
  get "10-4-1-c-sample-2"() {
    return <>It is online <b>that it will be broadcast</b>.</>;
  },
  get "10-4-1-c-p2"() {
    return <><b>But</b>, note &mdash;</>;
  },
  get "10-4-1-c-i-p"() {
    return <>Outside certain irregular verbs &mdash; <i>bhíothas</i> (<b>EN</b>: aut. <i>to be</i>), <i>chonacthas</i> <Tl tlText="was seen" />, <i>chualathas</i> <Tl tlText="was heard" />, <i>chuathas</i> <Tl tlText="was gone" />, <i>thángthas</i> <Tl tlText="was come" /> &mdash; the autonomous verb in the past tense is not lenited, e.g., <i>Buaileadh go dona iad</i> <Tl tlText="They were badly beaten" />; <i>an geall a briseadh</i> <Tl tlText="the pledge to be broken" />:</>;
  },
  get "10-4-1-c-i-sample-1"() {
    return <>He was not at home <b>since he was found</b> guilty.</>;
  },
  get "10-4-1-c-i-sample-2"() {
    return <>He was <b>whose loss</b> it was.</>;
  },
  get "10-4-1-c-ii-p"() {
    return <>The verb <i>abair</i> is not lenited in any context:</>;
  },
  get "10-4-1-c-ii-sample-1"() {
    return <>They <b>said</b> they would be there.</>;
  },
  get "10-4-1-c-ii-sample-2"() {
    return <>What <b>will you say</b> to her?</>;
  },
  get "10-4-1-c-ii-sample-3"() {
    return <>If she <b>says</b> she is not interested, don&rsquo;t worry about it.</>;
  },
  get "10-4-2-title"() {
    return "Lenition of the Dependent Verb";
  },
  get "10-4-2-p1"() {
    return <>The dependent verb is lenited after the conjunctions and verbal particles <i>ar</i>, <i>cár</i>, <i>dár</i>, <i>gur</i>, <i>murar</i>, <i>nár</i>, <i>ní</i>, <i>níor</i>, <i>sular</i>:</>;
  },
  get "10-4-2-sample-1"() {
    return <><b>Did</b> he <b>put</b> it in hiding?</>;
  },
  get "10-4-2-sample-2"() {
    return <><b>Where</b> did he <b>hurt</b> himself?</>;
  },
  get "10-4-2-sample-3"() {
    return <>Everyone <b>that</b> you <b>introduced</b> to me.</>;
  },
  get "10-4-2-sample-4"() {
    return <>I think <b>that</b> he <b>understood</b> me.</>;
  },
  get "10-4-2-sample-5"() {
    return <><b>If</b> he <b>had not killed</b> him, he would have been short of him.</>;
  },
  get "10-4-2-sample-6"() {
    return <><b>Did</b> he <b>never marry</b>?</>;
  },
  get "10-4-2-sample-7"() {
    return <><b>Did not</b> he <b>see</b> me?</>;
  },
  get "10-4-2-sample-8"() {
    return <><b>Could not</b> I <b>do</b> it.</>;
  },
  get "10-4-2-sample-9"() {
    return <>I was here <b>before</b> Seán <b>came</b>.</>;
  },
  get "10-4-2-p2"() {
    return <><b>But</b>, note:</>;
  },
  get "10-4-2-a-p"() {
    return <>that the verb <i>faigh</i> is eclipsed in the dependent form in the past tense, future tense and conditional mood after the verbal particle <i>ní</i>, e.g., <i>Ní bhfuair tú ansin iad</i> <Tl tlText="You did not get them there" />; <i>Ní bhfaighinn aon chabhair uathu</i> <Tl tlText="I will not get any help from them" /> (see <a href="#sec_10_8_2_b">10.8.2(b)</a>).</>;
  },
  get "10-4-2-b-p"() {
    return <>that the verb <i>abair</i> is not lenited in any context, e.g., <i>Ní déarfadh aon duine gur theip ort</i> <Tl tlText="No one would say that you failed" />.</>;
  },
  get "10-5-title"() {
    return "Lenition on the Pronominal";
  },
  get "10-5-1-title"() {
    return <>After the Preposition <i>ó</i></>;
  },
  get "10-5-1-p"() {
    return <>The demonstrative pronominal <i>sin</i> is lenited after the preposition <i>ó</i> in the phrase <i>ó shin</i> (<i>i leith</i>).</>;
  },
  get "10-5-1-sample-1"() {
    return <>The weather changed <b>since then</b>.</>;
  },
  get "10-5-1-sample-2"() {
    return <>It happened quite a while <b>since then</b>.</>;
  },
  get "10-5-2-title"() {
    return "After a Preposition";
  },
  get "10-5-2-p"() {
    return <>The interrogative pronominals <i>cá</i>, <i>cad</i>, <i>cé</i>, etc., are not lenited:</>;
  },
  get "10-5-2-sample-1"() {
    return <>He gave a report on <b>who</b> was present.</>;
  },
  get "10-5-2-sample-2"() {
    return <>He did not mention <b>what</b> was to be done.</>;
  },
  get "h2-gp-6-8-title"() {
    return "Eclipsis";
  },
  get "h2-gp-6-8-p"() {
    return <>The eclipsed consonants are: <i>b</i>, <i>c</i>, <i>d</i>, <i>f</i>, <i>g</i>, <i>p</i> and <i>t</i>. A vowel is prefixed with <i>n-</i> where an eclipsis would be applied to a consonant, except in the dative case after the article or the article composed with a preposition, e.g., <i>ar an uisce</i> <Tl tlText="on the water" />, <i>faoin ábhar</i> <Tl tlText="under the matter" />; and with <i>i</i> (see <a href="#sec_10_6_4">10.6.4</a>). A hyphen is placed between the eclipsing <i>n</i> and a vowel, e.g., <i>líon na n&#x2011;ospidéal</i> <Tl tlText="the number of hospitals" />; except when the vowel is a proper noun, e.g., <i>meon na nAlbanach</i> <Tl tlText="the mind of the Scots" />.</>;
  },
  get "10-6-title"() {
    return "Eclipsis on the Noun";
  },
  get "10-6-p"() {
    return "Eclipsis is applied to the noun in the following contexts.";
  },
  get "10-6-1-title"() {
    return "After the Article";
  },
  get "10-6-1-p"() {
    return "Eclipsis is applied to the noun after the article &mdash;";
  },
  get "10-6-1-a-p1"() {
    return <>in the dative singular, masculine and feminine, in certain contexts when a preposition accompanies the article, e.g., <i>ar an gcapall</i> <Tl tlText="on the horse" />; <i>faoin bhfoirgneamh</i> <Tl tlText="under the building" /> (see <a href="./chapter1.html#sec_1_4">1.4</a>):</>;
  },
  get "10-6-1-a-sample-1"() {
    return <>He received a thank-you message <b>from the bride</b>.</>;
  },
  get "10-6-1-a-sample-2"() {
    return <>They welcomed <b>the visitor</b>.</>;
  },
  get "10-6-1-a-p2"() {
    return <>Note that there is always eclipsis in the phrases <i>mar an gcéanna</i> <Tl tlText="the same way" /> and <i>um an dtaca</i> <Tl tlText="in support of" />.</>;
  },
  get "10-6-1-b-p"() {
    return <>in the genitive plural, masculine and feminine, e.g., <i>seolta na mbád beag</i> <Tl tlText="the sails of the small boats" />; <i>scoil na gcailíní óga</i> <Tl tlText="the school of the young girls" />:</>;
  },
  get "10-6-1-b-sample-1"() {
    return <>The <b>music of the birds</b> was to be heard throughout the forest.</>;
  },
  get "10-6-1-b-sample-2"() {
    return <>They are <b>decorating the houses</b> before the arrival of summer.</>;
  },
  get "10-6-2-title"() {
    return "After the Possessive Adjectives in the Plural";
  },
  get "10-6-2-p1"() {
    return <>Eclipsis is applied to the noun after the possessive adjectives in the plural, e.g., <i>ár n&#x2011;athair</i> <Tl tlText="our father" />; <i>bhur bpáistí</i> <Tl tlText="your children" />; <i>a ngluaisteáin</i> <Tl tlText="their cars" />:</>;
  },
  get "10-6-2-sample-1"() {
    return <>I met <b>your friends</b> at the wedding.</>;
  },
  get "10-6-2-sample-2"() {
    return <>It is said that <b>their cakes</b> are the best there are.</>;
  },
  get "10-6-2-p2"() {
    return <>Note that eclipsis is used after <i>dhá</i> if there is a possessive adjective in the plural before it, e.g., <i>ár dhá gcapall</i> <Tl tlText="our two horses" />; <i>ár dhá gcúigiú cuid</i> <Tl tlText="our two fifths" />; <i>bhur dhá dteach</i> <Tl tlText="your two houses" />; <i>a dhá mbó</i> <Tl tlText="their two cows" /> (see <a href="./chapter8.html#sec_8_3_3">8.3.3</a>).</>;
  },
  get "10-6-3-title"() {
    return "After Certain Numbers";
  },
  get "10-6-3-p1"() {
    return <>Eclipsis is applied to the noun after the cardinal numbers <i>seacht</i> to <i>deich</i>, e.g., <i>seacht ndícheall</i> <Tl tlText="seven efforts" />; <i>ocht gcinn</i> <Tl tlText="eight heads" />; <i>naoi mbliana</i> <Tl tlText="nine years" />; <i>deich n&#x2011;eachtra</i> <Tl tlText="ten events" /> (see <a href="./chapter9.html#sec_9_3_1_i">9.3.1(i)</a>):</>;
  },
  get "10-6-3-sample-1"() {
    return <>A new <b>seven-part</b> documentary series will begin next Monday.</>;
  },
  get "10-6-3-sample-2"() {
    return <>He saw <b>nine birds</b> in the sky.</>;
  },
  get "10-6-3-p2"() {
    return <>No initial mutation is made to the nouns <i>euro</i> and <i>cent</i>, e.g., <i>seacht euro</i> <Tl tlText="seven euros" />; <i>naoi euro</i> <Tl tlText="nine euros" />; <i>deich cent</i> <Tl tlText="ten cents" />.</>;
  },
  get "10-6-3-p3"() {
    return "Note:";
  },
  get "10-6-3-a-p"() {
    return <>that the initial mutation that accompanies the final number in a series is applied to the word or words that follow it, e.g., <i>sé nó seacht mbád</i> <Tl tlText="six or seven boats" />;</>;
  },
  get "10-6-3-b-p"() {
    return <>if the Simplified System is used above twenty (see <a href="./chapter9.html#sec_9_3_10">9.3.10</a> &ndash; <a href="./chapter9.html#sec_9_3_12">9.3.12</a>), no eclipsis is applied to the noun, e.g., <i>fiche a seacht capall</i> <Tl tlText="twenty-seven horses" />; <i>49 fuinneog</i> <Tl tlText="49 windows" />.</>;
  },
  get "10-6-4-title"() {
    return "After Certain Simple Prepositions";
  },
  get "10-6-4-p1"() {
    return "Eclipsis is applied to the noun after the following simple prepositions &mdash;";
  },
  get "10-6-4-a-p1"() {
    return <><i>i</i>, e.g., <i>i mbaile</i> <Tl tlText="in a town" />; <i>i bpáirc</i> <Tl tlText="in a park" />; <i>i mBaile an Fheirtéaraigh</i> <Tl tlText="in Ballyferriter" />:</>;
  },
  get "10-6-4-a-sample-1"() {
    return <>He was <b>in a spiritual crisis</b>.</>;
  },
  get "10-6-4-a-sample-2"() {
    return <>It is <b>in Béal Átha an Ghaorthaidh</b> that Munster College was founded.</>;
  },
  get "10-6-4-a-p2"() {
    return <><i>in</i> is written before words beginning with a vowel, e.g., <i>in eaglais</i> <Tl tlText="in a church" />; <i>in Albain</i> <Tl tlText="in Scotland" />; <i>in Áth Dara</i> <Tl tlText="in Athy" />; <i>in Éirinn</i> <Tl tlText="in Ireland" />; <i>in aon chás</i> <Tl tlText="in any case" />; and in the following contexts:</>;
  },
  get "10-6-4-a-i-p"() {
    return <>before <i>bhur</i>, <i>dhá</i> and <i>go leor</i>, e.g., <i>an áit a bhfuil sibh in bhur gcónaí</i> <Tl tlText="the place of your residence" />; <i>in dhá áit</i> <Tl tlText="in two places" />; <i>in go leor cásanna</i> <Tl tlText="in many cases" />:</>;
  },
  get "10-6-4-a-i-sample-1"() {
    return <>I put it <b>in your</b> kitchen.</>;
  },
  get "10-6-4-a-i-sample-2"() {
    return <>The music group is on the shortlist <b>in two</b> competitions.</>;
  },
  get "10-6-4-a-ii-p"() {
    return <>before book titles, magazines or films, etc., and before abbreviations of titles of organizations, agreements, schemes, etc., e.g., <i>in</i> An tOileánach; <i>alt in</i> Comhar; <i>in AE</i>; <i>in CAE</i>; <i>in FSS</i> (but see <a href="./chapter3.html#sec_3_2_2_B">3.2.2B</a>):</>;
  },
  get "10-6-4-a-ii-sample-1"() {
    return <>I read an interesting article <b>in <i>Feasta</i></b> last month.</>;
  },
  get "10-6-4-a-ii-sample-2"() {
    return <>How many states are there <b>in the USA</b>?</>;
  },
  get "10-6-4-a-iii-p"() {
    return <>These are foreign place names that have not been Gaelicized, e.g., <i>in Birmingham</i>; <i>in Barcelona</i>; <i>in Köln</i> (but <i>i Londain</i>, <i>i mBostún</i>):</>;
  },
  get "10-6-4-a-iii-sample-1"() {
    return <>She spent a week working <b>in Mumbai</b>.</>;
  },
  get "10-6-4-a-iii-sample-2"() {
    return <>The plane landed <b>in San Francisco</b> at six o&rsquo;clock in the morning.</>;
  },
  get "10-6-4-a-iv-p"() {
    return <>before years when they are written in figures, e.g., <i>in 1998</i>; <i>in 2017</i>.</>;
  },
  get "10-6-4-b-p"() {
    return <><i>ar</i> in idiomatic expressions, e.g., <i>ar gcúl</i> <Tl tlText="backwards" />; <i>ar ndóigh</i> <Tl tlText="of course" />; and after the preposition <i>go</i> (when it does not mean <i>go dtí</i> <Tl tlText="to" />), e.g., <i>go bhfios dom</i> <Tl tlText="how would I know" />; <i>go gcuimhin liom</i> <Tl tlText="as far as I remember" />:</>;
  },
  get "10-6-4-b-sample-1"() {
    return <>We do not have a hand <b>behind our back</b>. (meaning <i>have a disadvantage</i>)</>;
  },
  get "10-6-4-b-sample-2"() {
    return <>It was a fight <b>to the finish</b>, without any doubt.</>;
  },
  get "10-6-5-title"() {
    return <>After <i>cá</i></>;
  },
  get "10-6-5-p"() {
    return <>Eclipsis is applied to the noun in the established phrase <i>cá bhfios</i>.</>;
  },
  get "10-6-5-sample-1"() {
    return <><b>How would I know</b>?</>;
  },
  get "10-7-title"() {
    return "Eclipsis on the Adjective";
  },
  get "10-7-p1"() {
    return <>Eclipsis is applied to an adjective that precedes a noun in the same way as the noun is eclipsed (see <a href="#sec_10_6">10.6</a>). That is to say, the adjective is eclipsed after the article in the dative singular in certain contexts, e.g., <i>ar an gceathrú hurlár</i> <Tl tlText="on the fourth floor" />; in the genitive plural, e.g., <i>i rith na gcúig oíche</i> <Tl tlText="during the five nights" />; after the possessive adjectives in the plural, e.g., <i>ár gcéad mhac</i> <Tl tlText="our first son" />; and after the preposition <i>i</i>, e.g., <i>i ngach leabhar</i> <Tl tlText="in every book" />.</>;
  },
  get "10-7-sample-1"() {
    return <>Where is <b>your third</b> essay for the project?</>;
  },
  get "10-7-sample-2"() {
    return <>She told a story about a dog <b>of eight</b> legs.</>;
  },
  get "10-7-sample-3"() {
    return <>A meeting was proposed to be held <b>in every</b> county.</>;
  },
  get "10-7-p2"() {
    return "Note that no eclipsis is applied to:";
  },
  get "10-7-a-p"() {
    return <><i>cibé</i>, <i>pé</i>, nor the possessive adjective <i>do</i>, e.g., <i>i cibé foirm</i> <Tl tlText="in whatever form" />; <i>i pé páipéar</i> <Tl tlText="in whichever paper" />; <i>i do mhála</i> <Tl tlText="in your bag" />:</>;
  },
  get "10-7-a-sample-1"() {
    return <>The Council will publish the program <b>in whatever</b> format it deems appropriate.</>;
  },
  get "10-7-a-sample-2"() {
    return <>It will be kept <b>in whichever</b> office you want.</>;
  },
  get "10-7-a-sample-3"() {
    return <>You are mistaken <b>in your</b> opinion.</>;
  },
  get "10-7-b-p"() {
    return <>adjective following a noun, e.g., <i>cumann na bhfear óg</i> <Tl tlText="the association of young men" />; <i>seolta na mbád dubh</i> <Tl tlText="the sails of the black boats" />.</>;
  },
  get "10-8-title"() {
    return "Eclipsis on the Verb";
  },
  get "10-8-p"() {
    return "Eclipsis is applied to the verb in the following contexts.";
  },
  get "10-8-1-title"() {
    return "In the Relative Clause";
  },
  get "10-8-1-p"() {
    return "Eclipsis is applied to the verb in the relative clause after &mdash;";
  },
  get "10-8-1-a-p"() {
    return <><i>a</i>, indirect relative, and <i>nach</i>, e.g., <i>an bainne nach n&#x2011;óltar</i> <Tl tlText="the milk that is not drunk" />; <i>an bhean a dtagann a páistí ar scoil</i> <Tl tlText="the woman whose children come to school" />; <i>an duine a gcáintear é</i> <Tl tlText="the person who is fined" />; <i>an duine nach gcáintear é</i> <Tl tlText="the person who is not fined" />; <i>an fear nach gcuirtear cúram air</i> <Tl tlText="the man who is not cared for" />:</>;
  },
  get "10-8-1-a-sample-1"() {
    return <>She is the woman <b>whose children do not come</b> to school.</>;
  },
  get "10-8-1-a-sample-2"() {
    return <>That is the man <b>who is given</b> care in the residential center.</>;
  },
  get "10-8-1-b-p"() {
    return <>a preposition composed with <i>a</i>, indirect relative (see <a href="./chapter11.html#sec_11_6_1_c">11.6.1(c)</a>), e.g., <i>an tAcht dá</i> (from <i>do+a</i>) <i>dtagraítear</i> <Tl tlText="the Act to which reference is made" />; <i>an Bille lena</i> (from <i>le+a</i>) <i>ndéantar leasú</i> <Tl tlText="the Bill to which amendment is made" />:</>;
  },
  get "10-8-1-b-sample-1"() {
    return <>That is the company <b>from which</b> I got my textbooks.</>;
  },
  get "10-8-1-b-sample-2"() {
    return <>That is the name <b>under which</b> he sells goods online.</>;
  },
  get "10-8-1-c-p"() {
    return <><i>a</i> (meaning <i>an méid a</i> <Tl tlText="the amount that" />) and <i>dá</i> (from <i>de+a</i>, <i>do+a</i>), e.g., <i>d&rsquo;ólfadh sé a bhfeicfeadh sé</i> <Tl tlText="he would drink whatever he saw" />; <i>gach aon duine dá dtagann ann</i> <Tl tlText="every person who comes there" />; <i>gach áit dá ndéantar tagairt</i> <Tl tlText="every place that is referred to" />:</>;
  },
  get "10-8-1-c-sample-1"() {
    return <>They have <b>whatever you would need</b> in a band.</>;
  },
  get "10-8-1-c-sample-2"() {
    return <>Everyone <b>who is invited</b> will be there.</>;
  },
  get "10-8-2-title"() {
    return "After Conjunctions and Certain Particles";
  },
  get "10-8-2-p"() {
    return "Eclipsis is applied to the verb after conjunctions and verbal particles &mdash;";
  },
  get "10-8-2-a-p1"() {
    return <><i>an</i>, <i>cá</i>, <i>dá</i> (conditional), <i>go</i>, <i>mura</i>, <i>nach</i>, <i>sula</i>:</>;
  },
  get "10-8-2-a-sample-1"() {
    return <>Do you <b>have</b> a cup of tea?</>;
  },
  get "10-8-2-a-sample-2"() {
    return <><b>Where does</b> this road go?</>;
  },
  get "10-8-2-a-sample-3"() {
    return <><b>If he had</b> the money, he would spend it.</>;
  },
  get "10-8-2-a-sample-4"() {
    return <>Tell him <b>that he can</b> leave.</>;
  },
  get "10-8-2-a-sample-5"() {
    return <><b>If you do not tell</b> the story, I will ask someone else!</>;
  },
  get "10-8-2-a-sample-6"() {
    return <><b>Does he not drink</b> milk?</>;
  },
  get "10-8-2-a-sample-7"() {
    return <>It must be finished <b>before he comes</b>.</>;
  },
  get "10-8-2-a-p2"() {
    return <><b>But</b> the <i>n-</i> is not placed before a vowel after the particle <i>an</i>, e.g., <i>An ólann tú tae?</i> <Tl tlText="Do you drink tea?" />; <i>An itheann tú feoil?</i> <Tl tlText="Do you eat meat?" />; <i>An athróidh tú é?</i> <Tl tlText="Will you change it?" />:</>;
  },
  get "10-8-2-a-sample-8"() {
    return <><b>Does he listen</b> to music while studying?</>;
  },
  get "10-8-2-a-sample-9"() {
    return <><b>Will you open</b> the office tomorrow morning?</>;
  },
  get "10-8-2-b-p"() {
    return <><i>ní</i>, in the dependent form of the verb <i>faigh</i> in the past tense, future tense and conditional mood, e.g., <i>ní bhfuair mé</i> (<i>tú</i>, etc.) <Tl tlText="I did not get" />; <i>ní bhfaighidh mé</i> (<i>tú</i>, etc.) <Tl tlText="I will not get" />; <i>ní bhfaighinn</i> (<i>bhfaighfeá</i>, etc.) <Tl tlText="I would not get" />:</>;
  },
  get "10-8-2-b-sample-1"() {
    return <>I <b>did not get</b> any coffee this morning.</>;
  },
  get "10-8-2-b-sample-2"() {
    return <>If you do not ask for it, you <b>will not get</b> it.</>;
  },
  get "10-8-2-b-sample-3"() {
    return <>You <b>would not get</b> it in that supermarket.</>;
  },
  get "h2-gp-9-10-title"() {
    return <><i>t</i> before a Vowel or before <i>s</i></>;
  },
  get "h2-gp-9-10-p"() {
    return <>A hyphen is placed between the initial letter <i>t</i> and a vowel, e.g., <i>an t&#x2011;ospidéal</i> <Tl tlText="the hospital" />; except when the vowel is a proper noun initial, e.g., <i>an tAlbanach</i> <Tl tlText="the Scot" />. A hyphen is never placed between the initial letter <i>t</i> and <i>s</i>, e.g., <i>an tsatailít</i> <Tl tlText="the satellite" />; <i>an tSeapáin</i> <Tl tlText="Japan" />.</>;
  },
  get "10-9-title"() {
    return <><i>t</i> before a Vowel after the Article</>;
  },
  get "10-9-1-p"() {
    return <><i>t-</i> is placed before a vowel after the article &mdash;</>;
  },
  get "10-9-1-a-p1"() {
    return <>in the nominative singular, before a masculine noun if it begins with a vowel, e.g., <i>an t&#x2011;asal</i> <Tl tlText="the donkey" />; <i>an t&#x2011;eitleán</i> <Tl tlText="the airplane" />:</>;
  },
  get "10-9-1-a-sample-1"() {
    return <>Where did you get <b>the money</b>?</>;
  },
  get "10-9-1-a-sample-2"() {
    return <>They were afraid that <b>the ecosystem</b> would be destroyed.</>;
  },
  get "10-9-1-a-p2"() {
    return <>Note that <i>t-</i> is not placed before <i>euro</i>, <i>iomad</i>, or <i>oiread</i>, e.g., <i>an euro</i> <Tl tlText="the euro" />; <i>an iomad</i> <Tl tlText="the many" />; <i>an oiread</i> <Tl tlText="the amount" />.</>;
  },
  get "10-9-1-b-p"() {
    return <>in the nominative singular, before <i>aon</i>, <i>aonú</i>, <i>ochtó</i>, <i>ochtódú</i>, <i>ochtú</i>, e.g., <i>an t&#x2011;aon bhean déag</i> <Tl tlText="the eleven women" />; <i>an t&#x2011;aonú háit déag</i> <Tl tlText="the eleventh place" />; <i>an t&#x2011;ochtó bliain</i> <Tl tlText="the eightieth year" />; <i>an t&#x2011;ochtódú huair</i> <Tl tlText="the eightieth time" />:</>;
  },
  get "10-9-1-b-sample-1"() {
    return <>You are <b>the only</b> person I spoke to about the matter.</>;
  },
  get "10-9-1-b-sample-2"() {
    return <>It was <b>the eighth</b> game she had this year.</>;
  },
  get "10-10-title"() {
    return <><i>t</i> before <i>s</i> after the Article</>;
  },
  get "10-10-1-p"() {
    return <><i>t</i> is placed before <i>s</i> after the article if a vowel or <i>l</i>, <i>n</i> or <i>r</i> is the initial letter in certain contexts after the article according to <a href="./chapter1.html">Chapter 1</a>, e.g., <i>an tslat</i> <Tl tlText="the stick" />; <i>an tsnaidhm</i> <Tl tlText="the knot" />; <i>an tsreang</i> <Tl tlText="the string" />; <i>ar an tsráid</i> <Tl tlText="on the street" />; <i>faoin tsinsearacht</i> <Tl tlText="under the ancestry" />; <i>deireadh an tséasúir</i> <Tl tlText="the end of the season" />; <i>eochair an tsiopadóra</i> <Tl tlText="the shopkeeper&rsquo;s key" />; <i>cótaí an tseachtair</i> <Tl tlText="the coats of the seven" />.</>;
  },
  get "10-10-1-sample-1"() {
    return <>Don&rsquo;t <b>take the nose from me</b>! (Meaning: Don&rsquo;t bite my nose off!)</>;
  },
  get "10-10-1-sample-2"() {
    return <>Did you see the tail <b>of the squirrel</b>?</>;
  },
  get "10-10-2-p"() {
    return <><i>t</i> is not placed before <i>s</i> &mdash;</>;
  },
  get "10-10-2-a-p"() {
    return <>in numbers, e.g., <i>deireadh an seachtú lá</i> <Tl tlText="the end of the seventh day" />; <i>agallamh an seascadú duine</i> <Tl tlText="the interview of the seventh person" />, except in personal numbers in the genitive, e.g., <i>ainmneacha an tseisir</i> <Tl tlText="the names of the six" />; <i>torthaí an tseisear scoláirí</i> <Tl tlText="the results of the six students" />:</>;
  },
  get "10-10-2-a-sample-1"() {
    return <>What did you get along with <b>the sixty</b> euros?</>;
  },
  get "10-10-2-a-sample-2"() {
    return <>He spoke about the crisis of <b></b>the six<b></b>teenth century.</>;
  },
  get "10-10-2-b-p"() {
    return <>after <i>aon</i> and the ordinal <i>céad</i>, e.g., <i>aon salann</i> <Tl tlText="any salt" />; <i>aon seanmóir</i> <Tl tlText="any sermon" />; <i>an chéad sagart</i> <Tl tlText="the first priest" />:</>;
  },
  get "10-10-2-b-sample-1"() {
    return <>Is there <b>any fat</b> in that food?</>;
  },
  get "10-10-2-b-sample-2"() {
    return <>This is the <b>first holiday</b> we will have together.</>;
  },
  get "h2-gp-11-14-title"() {
    return <><i>h</i> before a Vowel</>;
  },
  get "h2-gp-11-14-p"() {
    return <>A hyphen is not placed between the initial letter <i>h</i> and a vowel, e.g., <i>le háthas</i> <Tl tlText="with joy" />; <i>go hÉirinn</i> <Tl tlText="to Ireland" />; <i>na húlla</i> <Tl tlText="the apples" />. <i>h</i> is placed before a vowel in the following contexts.</>;
  },
  get "10-11-title"() {
    return <><i>h</i> Before a Vowel &mdash; The Noun</>;
  },
  get "10-11-1-title"() {
    return <>After the Article <i>na</i></>;
  },
  get "10-11-1-p"() {
    return <><i>h</i> is placed before a noun beginning with a vowel after the article <i>na</i> &mdash;</>;
  },
  get "10-11-1-a-p"() {
    return <>in the genitive singular feminine, e.g., <i>ainm na háite</i> <Tl tlText="the name of the place" />; <i>lár na heitilte</i> <Tl tlText="the center of the flight" />:</>;
  },
  get "10-11-1-a-sample-1"() {
    return <>A new book about the history of <b>the Presidency</b> was published.</>;
  },
  get "10-11-1-a-sample-2"() {
    return <>There was widespread acceptance of that opinion about the end of <b>this age</b> last past.</>;
  },
  get "10-11-1-b-p"() {
    return <>in the nominative plural and the dative plural, e.g., <i>na hainmneacha</i> <Tl tlText="the names" />; <i>sna hionaid sin</i> <Tl tlText="in those places" />:</>;
  },
  get "10-11-1-b-sample-1"() {
    return <>He knows all <b>the numbers</b>.</>;
  },
  get "10-11-1-b-sample-2"() {
    return <>Double-click on <b>the images</b> to enlarge them.</>;
  },
  get "10-11-2-title"() {
    return "After Certain Numbers";
  },
  get "10-11-2-a-p"() {
    return <><i>h</i> is placed before a noun beginning with a vowel after the ordinal numbers, e.g., <i>an dara</i> (<i>tríú</i>, etc.) <i>heochair</i> <Tl tlText="the second_ (<i>third</i>, etc.) <i>key</i>; except _céad" />, e.g., <i>sa chéad áit</i> <Tl tlText="in the first place" />; <i>an chéad obráid</i> <Tl tlText="the first work" />.</>;
  },
  get "10-11-2-a-sample-1"() {
    return <>Please read <b>the fourth article</b> before class tomorrow.</>;
  },
  get "10-11-2-a-sample-2"() {
    return <><b>The eighth edition</b> of the magazine is now available.</>;
  },
  get "10-11-2-b-p1"() {
    return <>
      <i>h</i> is placed before hour after <i>trí</i>, <i>ceithre</i>, <i>cúig</i>, <i>sé</i>, e.g., <i>trí</i> (<i>ceithre</i>, <i>cúig</i>, <i>sé</i>) <i>huaire</i> (<b>EN</b>: <i>three</i> (<i>four</i>, <i>five</i>, <i>six</i>) <i>hours</i>) (see <a href="./chapter9.html#sec_9_3_2_c">9.3.2(c)</a>).
    </>;
  },
  get "10-11-2-b-sample-1"() {
    return <>She failed <b>three times</b> in a row.</>;
  },
  get "10-11-2-b-sample-2"() {
    return <>He has done it <b>six times</b> now.</>;
  },
  get "10-11-2-b-p2"() {
    return <>Note that the specific plural form of the noun <i>uair</i> is not used when referring to a unit of 60 minutes, e.g., <i>Thóg sé trí uair an chloig orm an obair a chríochnú</i> <Tl tlText="It took him three hours to finish the work" />.</>;
  },
  get "10-11-3-title"() {
    return <>After the Prepositions <i>le</i> and <i>go</i></>;
  },
  get "10-11-3-p"() {
    return <><i>h</i> is placed before a noun beginning with a vowel after the prepositions <i>le</i> and <i>go</i> (meaning <i>go dtí</i> <Tl tlText="to" />), e.g., <i>ó mhaidin go hoíche</i> <Tl tlText="from morning to night" />; <i>le hintinn mhaith</i> <Tl tlText="with good intention" />; <i>le hÁine</i> <Tl tlText="with Áine" />; <i>go hAlasca</i> <Tl tlText="to Alaska" />.</>;
  },
  get "10-11-3-sample-1"() {
    return <>It was on the boat that she went <b>to Aran</b>.</>;
  },
  get "10-11-3-sample-2"() {
    return <>They went on strike in part <b>with other workers</b>.</>;
  },
  get "10-11-4-title"() {
    return "After the Interrogative Pronominal";
  },
  get "10-11-4-p"() {
    return <><i>h</i> is placed before a noun beginning with a vowel after the interrogative pronominal <i>cá</i>, e.g., <i>cá hiontas?</i> <Tl tlText="what surprise?" />; <i>cá háit?</i> <Tl tlText="what place?" />.</>;
  },
  get "10-11-4-sample-1"() {
    return <><b>What age</b> is she now?</>;
  },
  get "10-11-4-sample-2"() {
    return <><b>What time</b> will the play be starting?</>;
  },
  get "10-11-5-title"() {
    return "In Surnames";
  },
  get "10-11-5-p"() {
    return <><i>h</i> is placed before a noun beginning with a vowel after <i>Ó</i> in surnames, e.g., <i>Seán Ó hÓgáin</i>; <i>do Chathal Ó hAodha</i>.</>;
  },
  get "10-11-5-sample-1"() {
    return <>Máirtín <b>Ó hÉalaí</b> is his name.</>;
  },
  get "10-11-5-sample-2"() {
    return <>Séamas <b>Ó hUiginn</b> said he was satisfied with the process.</>;
  },
  get "10-11-6-title"() {
    return <>After <i>Dé</i></>;
  },
  get "10-11-6-p"() {
    return <><i>h</i> is placed before a vowel after <i>Dé</i> in <i>Dé hAoine</i>.</>;
  },
  get "10-11-6-sample-1"() {
    return <>She promised she would be there <b>on Friday</b>.</>;
  },
  get "10-11-6-sample-2"() {
    return <>It was <b>on Friday night</b> that it happened.</>;
  },
  get "10-11-7-title"() {
    return <>After the Possessive Adjective <i>a</i></>;
  },
  get "10-11-7-p"() {
    return <><i>h</i> is placed before a noun beginning with a vowel after the possessive adjective <i>a</i>, third person singular feminine, e.g., <i>a hathair</i>.</>;
  },
  get "10-11-7-sample-1"() {
    return <>Did she introduce you to <b>her father</b> yet?</>;
  },
  get "10-11-7-sample-2"() {
    return <>She wrote a beautiful book <b>about her journey</b> around Europe.</>;
  },
  get "10-11-8-title"() {
    return <>After <i>ní</i></>;
  },
  get "10-11-8-p1"() {
    return <><i>h</i> is placed before a vowel after <i>ní</i> (the negative form, present tense of the copula (see <a href="./chapter7.html#sec_7_2_5">7.2.5</a>)):</>;
  },
  get "10-11-8-a-p"() {
    return <>on the nouns <i>áibhéil</i> <Tl tlText="exaggeration" />, <i>ionadh</i> <Tl tlText="wonder" />, <i>iontas</i> <Tl tlText="surprise" /> and <i>ualach</i> <Tl tlText="burden" />:</>;
  },
  get "10-11-8-a-sample-1"() {
    return <>That is <b>no surprise</b> at all.</>;
  },
  get "10-11-8-a-sample-2"() {
    return <>Learning is <b>not a burden</b> for a person.</>;
  },
  get "10-11-8-b-p"() {
    return <>on the noun in the copular prepositional phrases <i>acmhainn do</i> <Tl tlText="ability to" />; <i>áil le</i> <Tl tlText="desire to" />; <i>aitheanta do</i> <Tl tlText="known to" />; <i>aithnid do</i> <Tl tlText="recognized by" />; <i>éadáil le</i> <Tl tlText="profit with" />; <i>ealaín do</i> <Tl tlText="art of" />; <i>éigean do</i> <Tl tlText="necessity for" />; and <i>eol do</i> <Tl tlText="knowledge of" />:</>;
  },
  get "10-11-8-b-sample-1"() {
    return <>You <b>do not know</b> me.</>;
  },
  get "10-11-8-b-sample-2"() {
    return <>Breaking the law is <b>not an art</b> for law makers. (Meaning <i>it is not fit to do so</i>)</>;
  },
  get "10-11-8-c-p"() {
    return "on the noun in the odd proverb:";
  },
  get "10-11-8-c-sample-1"() {
    return <>
      <b>No knowledge</b> until cohabitation. (Meaning <i>You must live with a person to know a person</i>.
      <br />Credit to <i><a href="https://daltai.com/ni-heolas-go-haontios/" target="_blank">Daltaí na Gaeilge</a></i> for this translation.)
    </>;
  },
  get "10-11-8-c-sample-2"() {
    return "(Same as above. This one appears in FGB.)";
  },
  get "10-11-8-p2"() {
    return <>Note that <i>h</i> is not placed before a noun after <i>ní</i> outside of the above-mentioned contexts, e.g., <i>Ní amadán é</i> <Tl tlText="He is not a fool" />; <i>Ní Eoin is ainm dom</i> <Tl tlText="My name is not Eoin" />; <i>Ní eolas oideachas</i> <Tl tlText="Knowledge is not education" />.</>;
  },
  get "10-12-title"() {
    return <><i>h</i> before a Vowel &mdash; The Adjective and the Adverb</>;
  },
  get "10-12-1-title"() {
    return <>After <i>chomh</i>, <i>go</i>, <i>le</i></>;
  },
  get "10-12-1-p"() {
    return <><i>h</i> is placed before an adjective or adverb beginning with a vowel after <i>chomh</i>, <i>go</i> and <i>le</i>, e.g., <i>chomh hard le haon chapall</i> <Tl tlText="as tall as any horse" />; <i>Tá sé go hálainn</i> <Tl tlText="It is beautiful" />.</>;
  },
  get "10-12-1-sample-1"() {
    return <>The redwood tree was <b>as tall</b> as a thirty-story building.</>;
  },
  get "10-12-1-sample-2"() {
    return <>He is only here <b>rarely</b>.</>;
  },
  get "10-12-1-sample-3"() {
    return <>Not <b>any</b> applications will be accepted after 5 p.m. on Friday.</>;
  },
  get "10-12-2-title"() {
    return <>After <i>ní</i></>;
  },
  get "10-12-2-p"() {
    return <><i>h</i> is placed before a vowel after <i>ní</i> (the negative form, present tense of the copula (see <a href="./chapter7.html">Chapter 7</a>)):</>;
  },
  get "10-12-2-a-p"() {
    return <>on the adjectives <i>amháin</i>, <i>aon</i>, <i>ionann</i> and <i>iondúil</i>, and on the adverbs <i>amhlaidh</i> and <i>annamh</i>:</>;
  },
  get "10-12-2-a-sample-1"() {
    return <><b>Not only</b> are those sweaters cheap but they are also the best.</>;
  },
  get "10-12-2-a-sample-2"() {
    return <>The two things are <b>not the same</b> at all.</>;
  },
  get "10-12-2-a-sample-3"() {
    return <>It is <b>not so</b> that she was not told.</>;
  },
  get "10-12-2-b-p"() {
    return <>on the adjective in the copular prepositional phrases <i>eagal do</i>/<i>le</i> <Tl tlText="afraid of" /> and <i>oircheas do</i><Tl tlText="right for" />:</>;
  },
  get "10-12-2-b-sample-1"() {
    return <>You are <b>not afraid</b> of the dog.</>;
  },
  get "10-12-2-b-sample-2"() {
    return <>It is not <b>right for you</b> to speak to him.</>;
  },
  get "10-12-3-title"() {
    return <>After <i>a</i> and <i>na</i></>;
  },
  get "10-12-3-p"() {
    return <><i>h</i> is placed before a vowel after <i>a</i> and <i>na</i> in numbers, e.g., <i>ceacht a haon</i> <Tl tlText="lesson one" />; <i>na hocht gcinn</i> <Tl tlText="the eight" />.</>;
  },
  get "10-12-3-sample-1"() {
    return <>She got bus <b>number eleven</b>.</>;
  },
  get "10-12-3-sample-2"() {
    return <>Where did you buy <b>those eight</b> red apples?</>;
  },
  get "10-13-title"() {
    return <><i>h</i> before a Vowel &mdash; The Pronominal</>;
  },
  get "10-13-1-title"() {
    return <>After <i>cé</i> and <i>ní</i></>;
  },
  get "10-13-1-p"() {
    return <><i>h</i> is placed before a vowel after <i>cé</i> and <i>ní</i> on the personal pronominals <i>é</i>, <i>í</i>, <i>ea</i> and <i>iad</i>, e.g., <i>ní hé</i> <Tl tlText="he is not" />; <i>ní hí</i> <Tl tlText="she is not" />; <i>ní hea</i> <Tl tlText="it is not" />; <i>ní hiad</i> <Tl tlText="they are not" />; <i>cé hé?</i> <Tl tlText="who is he?" />; <i>cé hí?</i> <Tl tlText="who is she?" />; <i>cé hiad?</i> <Tl tlText="who are they?" />.</>;
  },
  get "10-13-1-sample-1"() {
    return <><b>It is not</b> a rainy day for the children.</>;
  },
  get "10-13-1-sample-2"() {
    return <><b>Who are they</b> themselves?</>;
  },
  get "10-13-2-title"() {
    return <>After <i>ní</i></>;
  },
  get "10-13-2-p"() {
    return <><i>h</i> is placed before a vowel after <i>ní</i> on the demonstrative pronominals <i>éard</i>, <i>eo</i>, <i>in</i> and <i>iúd</i>, e.g., <i>ní héard</i> <Tl tlText="it is not that" />; <i>ní heo</i> <Tl tlText="this is not" />; <i>ní hin</i> <Tl tlText="that is not" />; <i>ní hiúd</i> <Tl tlText="those are not" />.</>;
  },
  get "10-13-2-sample-1"() {
    return <><b>This</b> is not the thing to be done.</>;
  },
  get "10-13-2-sample-2"() {
    return <><b>That</b> is not it.</>;
  },
  get "10-13-3-title"() {
    return <>After <i>le</i></>;
  },
  get "10-13-3-p"() {
    return <><i>h</i> is placed before a vowel after <i>le</i> on the personal pronominals <i>é</i>, <i>í</i> and <i>iad</i>, e.g., <i>le hé</i> <Tl tlText="with him" />; <i>le hí</i> <Tl tlText="with her" />; <i>le hiad</i> <Tl tlText="with them" />.</>;
  },
  get "10-13-3-sample-1"() {
    return <>He went there <b>with her</b> to marry.</>;
  },
  get "10-13-3-sample-2"() {
    return <>He made a rule <b>with them</b> to control.</>;
  },
  get "10-14-title"() {
    return <><i>h</i> before a Vowel &mdash; The Verb</>;
  },
  get "10-14-1-title"() {
    return <>After <i>ná</i></>;
  },
  get "10-14-1-p"() {
    return <><i>h</i> is placed before a vowel after <i>ná</i> in the imperative mood, e.g., <i>ná himigh</i> <Tl tlText="do not go" />.</>;
  },
  get "10-14-1-sample-1"() {
    return <><b>Do not say</b> anything to him about the party.</>;
  },
  get "10-14-1-sample-2"() {
    return <><b>Do not open</b> the door unless you know who is there.</>;
  },
  get "10-14-1-sample-3"() {
    return <><b>Do not drink</b> in the Library.</>;
  },
  get "h2-gp-15-title"() {
    return <><i>d&rsquo;</i> Before a Vowel or Before <i>fh</i></>;
  },
  get "10-15-title"() {
    return <><i>d&rsquo;</i> before a Vowel or before <i>fh</i> &mdash; The Verb</>;
  },
  get "10-15-p"() {
    return <><i>d&rsquo;</i> is placed before a vowel or <i>fh&#x2011;</i> in place of lenition on a consonant in the past tense and the habitual past tense, the indicative mood, and the conditional mood, e.g., <i>d&rsquo;fhágamar</i> <Tl tlText="we left" />; <i>d&rsquo;fhanadh sibh</i> <Tl tlText="you would stay" />; <i>d&rsquo;fhreagróinn</i> <Tl tlText="I would answer" />; <i>d&rsquo;imeoinn</i> <Tl tlText="I would go in" />; <i>d&rsquo;ithinn</i> <Tl tlText="I used to eat" />; <i>d&rsquo;ól sé</i> <Tl tlText="he drank" />; <i>an té a d&rsquo;imigh</i> <Tl tlText="the one who left" />; <i>d&rsquo;aithneofaí í</i> <Tl tlText="she would be recognized" />; <i>má d&rsquo;fhág sé</i> <Tl tlText="if he left" />; <i>má d&rsquo;fheiceadh sé</i> <Tl tlText="if he saw" />; <i>má d&rsquo;imríomar</i> <Tl tlText="if we played" />.</>;
  },
  get "10-15-sample-1"() {
    return <>Is that the question that he <b>answered</b>?</>;
  },
  get "10-15-sample-2"() {
    return <>They would go home immediately when they <b>left</b> the place.</>;
  },
  get "10-15-sample-3"() {
    return <>I was not sure about the amount that he <b>would eat</b>.</>;
  },
  get "10-16-title"() {
    return "Summary of the Initial Mutations";
  },
  get "10-16-p1"() {
    return "As a reference aid, a summary is given here of the contexts in which lenition is applied to nouns, adjectives, verbs and pronominals. A full explanation of the rule is available at the cross-references in the left-hand column.";
  },
  get "Table10A-caption"() {
    return "Summary of Lenition";
  },
  get "Table10A-header"() {
    return "Lenition";
  },
  get "Table10A-noun-header"() {
    return "Lenition is applied to the noun in the following contexts:";
  },
  get "Examples"() {
    return "Examples";
  },
  get "Table10A-noun-rule-1"() {
    return <>After the articles <i>an</i> in the nominative singular feminine, the genitive singular masculine, and, in some contexts, the dative singular, masculine and feminine (<a href="#sec_10_2_1">10.2.1</a>)</>;
  },
  get "Table10A-noun-rule-2"() {
    return <>After the possessive particle, singular or plural, masculine or feminine (<a href="#sec_10_2_2">10.2.2</a>)</>;
  },
  get "Table10A-noun-rule-3"() {
    return <>After the possessive adjectives <i>mo</i>, <i>do</i> and <i>a</i> (masc. singular); after the distributive adjective <i>uile</i>; and after the indefinite adjective <i>aon</i> (<a href="#sec_10_2_3">10.2.3</a>)</>;
  },
  get "Table10A-noun-rule-4"() {
    return <>After the numbers <i>aon</i>, <i>céad</i>; <i>dhá</i>; and <i>trí</i>, <i>ceithre</i>, <i>cúig</i>, <i>sé</i> (<a href="#sec_10_2_4">10.2.4</a>)</>;
  },
  get "Table10A-noun-rule-5"() {
    return <>After the prepositions <i>de</i>, <i>do</i>, <i>faoi</i>, <i>ionsar</i>, <i>mar</i>, <i>ó</i>, <i>roimh</i>, <i>trí</i>; <i>um</i> unless the noun begins with <i>b</i>, <i>m</i>, <i>p</i>; and <i>ar</i>, <i>gan</i>, <i>idir</i>, <i>thar</i> in certain contexts (<a href="#sec_10_2_5">10.2.5</a>)</>;
  },
  get "Table10A-noun-rule-6"() {
    return <>After a compound preposition if the noun is a definite noun (<a href="#sec_10_2_6">10.2.6</a>)</>;
  },
  get "Table10A-noun-rule-7"() {
    return <>After a feminine noun except in the contexts mentioned in <a href="#sec_10_2_7_a">10.2.7(a)</a>&ndash;<a href="#sec_10_2_7_m">(m)</a> (<a href="#sec_10_2_7">10.2.7</a>)</>;
  },
  get "Table10A-noun-rule-8"() {
    return <>After a noun in the plural ending in a slender consonant in all contexts not mentioned in <a href="#sec_10_2_8_a">10.2.8(a)</a>&ndash;<a href="#sec_10_2_8_f">(f)</a> (<a href="#sec_10_2_8">10.2.8</a>)</>;
  },
  get "Table10A-noun-rule-9"() {
    return <>After a noun that is in the singular or plural, masculine or feminine, if it is a definite noun in the genitive (<a href="#sec_10_2_10">10.2.10</a>)</>;
  },
  get "Table10A-noun-rule-10"() {
    return <>In surnames after <i>Mhic</i>, <i>Mhig</i>, <i>Ní</i>, <i>Nic</i>, <i>Nig</i>, <i>Uí</i>, and after <i>Mac</i> (<i>Mag</i>) in certain contexts (<a href="#sec_10_2_11">10.2.11</a>)</>;
  },
  get "Table10A-noun-rule-11"() {
    return <>If it is the second word in a compound (<a href="#sec_10_2_12">10.2.12</a>)</>;
  },
  get "Table10A-noun-rule-12"() {
    return <>After the copula in the indicative mood, past tense and habitual past tense, and in the conditional mood (<a href="#sec_10_2_13">10.2.13</a>)</>;
  },
  get "Table10A-adjective-header"() {
    return "Lenition is applied to the adjective in the following contexts:";
  },
  get "Table10A-adjective-rule-1"() {
    return <>After a noun that is in the nominative, dative or vocative singular feminine; in the genitive or vocative singular masculine; in the nominative or dative plural if the noun ends in a slender consonant (or in the dative singular masculine if the Lenition System is in use) or after a noun in the singular if <i>dhá</i> or a number from <i>trí</i> to <i>deich</i> precedes it (<a href="#sec_10_3_1">10.3.1</a>)</>;
  },
  get "Table10A-adjective-rule-2"() {
    return <>In the same way as a noun is lenited after a simple preposition, after a simple preposition and the articles, after a possessive adjective, and in the masculine genitive case (<a href="#sec_10_3_2">10.3.2</a>)</>;
  },
  get "ThirdPersonMasc"() {
    return "third person masc.";
  },
  get "Table10A-adjective-rule-3"() {
    return <>On the adjectives <i>dhá</i> and <i>dháréag</i> (<a href="#sec_10_3_3">10.3.3</a>)</>;
  },
  get "Table10A-adjective-rule-4"() {
    return <>On <i>déag</i> after <i>dó</i> and a singular noun ending in a vowel; and on <i>fichead</i> after a plural noun ending in a slender consonant (<a href="#sec_10_3_4">10.3.4</a>)</>;
  },
  get "Table10A-adjective-rule-5"() {
    return <>If it is the second word in a compound (<a href="#sec_10_3_5">10.3.5</a>)</>;
  },
  get "Table10A-adjective-rule-6"() {
    return <>After the copula in the indicative mood, past tense and habitual past tense, and in the conditional mood (<a href="#sec_10_3_6">10.3.6</a>)</>;
  },
  get "Table10A-verb-header"() {
    return "Lenition is applied to the verb in the following contexts:";
  },
  get "Table10A-verb-rule-1"() {
    return <>On the independent verb in the indicative mood, past tense and habitual past tense, and in the conditional mood; after <i>a</i>, direct relative; after the conjunctions <i>má</i> and <i>ó</i>; and in the affirmative clause that is a noun of the copula (<a href="#sec_10_4_1">10.4.1</a>)</>;
  },
  get "Table10A-verb-rule-2"() {
    return <>On the dependent verb after the conjunctions and verbal particles: <i>ar</i>, <i>cár</i>, <i>dár</i>, <i>gur</i>, <i>murar</i>, <i>nár</i>, <i>ní</i>, <i>níor</i>, <i>sular</i> (<a href="#sec_10_4_2">10.4.2</a>)</>;
  },
  get "Table10A-pronominal-header"() {
    return "Lenition is applied to the demonstrative pronominal in the following contexts";
  },
  get "Table10A-pronominal-rule-1"() {
    return <>On <i>sin</i> after <i>ó</i> in the phrase <i>ó shin</i> (<a href="#sec_10_5_1">10.5.1</a>)</>;
  },
  get "10-16-p2"() {
    return "As a reference aid, a summary is given here of the contexts in which eclipsis is applied to nouns, adjectives, and verbs.";
  },
  get "ThirdPersonPl"() {
    return "third person pl.";
  },
  get "Table10B-caption"() {
    return "Summary of Eclipsis";
  },
  get "Table10B-header"() {
    return "Eclipsis";
  },
  get "Table10B-noun-header"() {
    return "Eclipsis is applied to the noun in the following contexts:";
  },
  get "Table10B-noun-rule-1"() {
    return <>After the articles <i>an</i> in the dative singular, masculine and feminine, in some contexts; in the phrases <i>mar an gcéanna</i> and <i>um an dtaca</i> and in the masculine and feminine genitive plural (<a href="#sec_10_6_1">10.6.1</a>)</>;
  },
  get "Table10B-noun-rule-2"() {
    return <>After <i>ár</i>, <i>bhur</i>, <i>a</i> (third person plural) and after <i>dhá</i> if it follows <i>ár</i>, <i>bhur</i>, <i>a</i> (third person plural) (<a href="#sec_10_6_2">10.6.2</a>)</>;
  },
  get "Table10B-noun-rule-3"() {
    return <>After <i>seacht</i>, <i>ocht</i>, <i>naoi</i>, <i>deich</i> (<a href="#sec_10_6_3">10.6.3</a>)</>;
  },
  get "Table10B-noun-rule-4"() {
    return <>After <i>i</i>; after <i>ar</i> in some phrases; and after <i>go</i> in certain situations (<a href="#sec_10_6_4">10.6.4</a>)</>;
  },
  get "Table10B-noun-rule-5"() {
    return <>After <i>cá</i> in the established phrase <i>cá bhfios</i> (<a href="#sec_10_6_5">10.6.5</a>)</>;
  },
  get "Table10B-adjective-header"() {
    return "Eclipsis is applied to the adjective in the following contexts:";
  },
  get "Table10B-adjective-rule-1"() {
    return <>In the same way as a noun is eclipsed after a simple preposition, after a simple preposition and the articles, after a possessive adjective and in the genitive plural (<a href="#sec_10_7">10.7</a>)</>;
  },
  get "Table10B-verb-header"() {
    return "Eclipsis is applied to the verb in the following contexts:";
  },
  get "Table10B-verb-rule-1"() {
    return <>In the relative clause after <i>a</i>, indirect relative, and <i>nach</i>, after a preposition that is composed with <i>a</i>, indirect relative, and after <i>a</i> (meaning <i>the amount that</i>) and <i>dá</i> (from <i>de+a</i>, <i>do+a</i>) (<a href="#sec_10_8_1">10.8.1</a>)</>;
  },
  get "Table10B-verb-rule-2"() {
    return <>On the dependent verb after the conjunctions and verbal particles: <i>an</i>, <i>cá</i>, <i>dá</i> (conditional), <i>go</i>, <i>mura</i>, <i>nach</i>, <i>sula</i>, and after <i>ní</i> for the dependent form of the verb <i>faigh</i> in the past tense, future tense and conditional mood (<a href="#sec_10_8_2">10.8.2</a>)</>;
  },
  get "10-16-p3"() {
    return <>As a reference aid, a summary is given here of the contexts in which <i>t</i> is placed before a vowel at the beginning of a noun and an adjective.</>;
  },
  get "Table10C-caption"() {
    return <>Summary of <i>t</i> before a Vowel</>;
  },
  get "Table10C-header"() {
    return <><i>t</i> Before a Vowel</>;
  },
  get "Table10C-Noun-Adjective-Header"() {
    return <><i>t</i> is placed before a vowel at the beginning of nouns and at the beginning of adjectives in the following contexts:</>;
  },
  get "Table10C-rule-1"() {
    return <>After the afticle <i>an</i> before a masculine noun in the nominative singular and before <i>aon</i>, <i>aonú</i>, <i>ochtú</i>, <i>ochtódú</i>, <i>ochtú</i> (<a href="#sec_10_9_1">10.9.1</a>)</>;
  },
  get "10-16-p4"() {
    return <>As a reference aid, a summary is given here of the contexts in which <i>t</i> is placed before <i>s</i> at the beginning of a noun.</>;
  },
  get "Table10D-caption"() {
    return <>Summary of <i>t</i> before <i>s</i></>;
  },
  get "Table10D-header"() {
    return <><i>t</i> Before <i>s</i></>;
  },
  get "Table10D-noun-header"() {
    return <><i>t</i> is placed before <i>s</i> at the beginning of a noun in the following contexts:</>;
  },
  get "Table10D-rule-1"() {
    return <>After the article <i>an</i> when a feminine singular noun (and masculine singular noun in the Lenition System) is in the nominative or dative and starts with <i>s</i> + <i>vowel</i> or <i>sl-</i>, <i>sn-</i>, <i>sr-</i>; and when a masculine singular noun in the genitive starts with <i>s</i> + <i>vowel</i> or <i>sl-</i>, <i>sn-</i>, <i>sr-</i> (<a href="#sec_10_10_1">10.10.1</a>)</>;
  },
  get "10-16-p5"() {
    return <>As a reference aid, a summary is given here of the contexts in which <i>h</i> is put before a vowel at the start of a noun, adjective, adverb, pronominal or verb.</>;
  },
  get "Table10E-caption"() {
    return <>Summary of <i>h</i> before a Vowel</>;
  },
  get "Table10E-header"() {
    return <><i>h</i> Before a Vowel</>;
  },
  get "Table10E-noun-header"() {
    return <><i>h</i> is placed before a vowel at the start of a noun in the following contexts:</>;
  },
  get "Table10E-rule-1"() {
    return <>After the article <i>na</i> in the genitive feminine singular and in the nominative plural and in the dative plural (<a href="#sec_10_11_1">10.11.1</a>) </>;
  },
  get "Table10E-rule-2"() {
    return <>After the ordinal numbers (except <i>céad</i>) (<a href="#sec_10_11_2_a">10.11.2(a)</a>) </>;
  },
  get "Table10E-rule-3"() {
    return <>After the cardinal numbers <i>trí</i>, <i>ceithre</i>, <i>cúig</i>, <i>sé</i> for <i>uaire</i> (<a href="#sec_10_11_2_b">10.11.2(b)</a>) </>;
  },
  get "Table10E-rule-4"() {
    return <>After <i>le</i> and <i>go</i> (when <i>go</i> means <i>go dtí</i>) (<a href="#sec_10_11_3">10.11.3</a>)</>;
  },
  get "Table10E-rule-5"() {
    return <>After the interrogative pronominal <i>cá</i> (<a href="#sec_10_11_4">10.11.4</a>) </>;
  },
  get "Table10E-rule-6"() {
    return <>After <i>Ó</i> in surnames (<a href="#sec_10_11_5">10.11.5</a>)</>;
  },
  get "Table10E-rule-7"() {
    return <>After <i>Dé</i> in <i>Dé hAoine</i> (<a href="#sec_10_11_6">10.11.6</a>) </>;
  },
  get "Table10E-rule-8"() {
    return <>After the Possessive Adjective <i>a</i>, third person femininte singular (<a href="#sec_10_11_7">10.11.7</a>)</>;
  },
  get "Table10E-rule-9"() {
    return <>After <i>ní</i> (negative, present tense form of the copula) on the nouns <i>áibhéil</i>, <i>áil</i>, <i>éigean</i>, <i>eol</i>, <i>ionadh</i>, <i>iontas</i>, <i>ualach</i>, int the copular prepositional phrases <i>acmhainn do</i>, <i>aitheanta do</i>, <i>aithnid do</i>, <i>éadáil le</i>, <i>ealaín do</i>, <i>éigean do</i>, <i>eol do</i>, <i>áil le</i> and in the odd proverb (<a href="#sec_10_11_8">10.11.8</a>)</>;
  },
  get "Table10E-adjective-header"() {
    return <><i>h</i> is placed before a vowel at the start of an adverb in the following contexts: </>;
  },
  get "Table10E-adjective-rule-1"() {
    return <>After <i>chomh</i>, <i>go</i>, <i>le</i> (<a href="#sec_10_12_1">10.12.1</a>) </>;
  },
  get "Table10E-adjective-rule-2"() {
    return <>After <i>ní</i> (negative, present tense form of the copula) on the adjectives <i>amháin</i>, <i>aon</i>, <i>ionann</i> and <i>iondúil</i>, in the copular prepositional phrases <i>eagal do</i>/<i>le</i>, <i>oircheas do</i>, and on the adverbs <i>amhlaidh</i> and <i>annamh</i> (<a href="#sec_10_12_2">10.12.2</a>)</>;
  },
  get "Table10E-adjective-rule-3"() {
    return <>After <i>a</i>, <i>na</i> in the numbers (<a href="#sec_10_12_3">10.12.3</a>) </>;
  },
  get "Table10E-pronominal-header"() {
    return <><i>h</i> is placed before a vowel at the start of a pronominal in the following contexts: </>;
  },
  get "Table10E-pronominal-rule-1"() {
    return <>After <i>cé</i>, <i>ní</i> on the personal pronominals <i>é</i>, <i>ea</i>, <i>í</i>, <i>iad</i> (<a href="#sec_10_13_1">10.13.1</a>)</>;
  },
  get "Table10E-pronominal-rule-2"() {
    return <>After <i>ní</i> on the demonstrative pronominals <i>éard</i>, <i>eo</i>, <i>in</i>, <i>iúd</i> (<a href="#sec_10_13_2">10.13.2</a>)</>;
  },
  get "Table10E-pronominal-rule-3"() {
    return <>After <i>le</i> on the personal pronominals <i>é</i>, <i>í</i>, <i>iad</i> (<a href="#sec_10_13_3">10.13.3</a>) </>;
  },
  get "Table10E-verb-header"() {
    return <><i>h</i> is placed before a vowel at the start of a verb in the following contexts: </>;
  },
  get "Table10E-verb-rule-1"() {
    return <>After <i>ná</i> in the imperative mood (<a href="#sec_10_14_1">10.14.1</a>)</>;
  },
  get "10-16-p6"() {
    return <>As a reference aid, a summary is given here of the contexts in which <i>d&rsquo;</i> is placed before a vowel or <i>fh&#x2011;</i> at the start of a verb.</>;
  },
  get "Table10F-caption"() {
    return <>Summary of <i>d&rsquo;</i> before a Vowel or <i>fh</i></>;
  },
  get "Table10F-header"() {
    return <><i>d&rsquo;</i> before a Vowel or <i>fh</i></>;
  },
  get "Table10F-verb-header"() {
    return <><i>d&rsquo;</i> is placed before a vowel or <i>fh&#x2011;</i> at the start of a verb in the following contexts:</>;
  },
  get "Table10F-verb-rule-1"() {
    return <>In the past tense, in the past habitual tense and in the conditional mood in the place where there would be a lenition of a consonant (<a href="#sec_10_15">10.15</a>)</>;
  },
};
