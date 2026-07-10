import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  get "teidealNaCaibidle"(){
    return "The Pronominal";
  },
  get "8-1-title"(){
    return "General";
  },
  get "8-title"(){
    return <>{en_US_Common["Caibidil"]} 8 | {en_US["teidealNaCaibidle"]}</>;
  },
  get "8-1-1-p"(){
    return "Pronominals include personal pronominals, possessive adjectives (which act as both adjectives and pronominals), prepositional pronominals, interrogative pronominals and demonstrative pronominals.";
  },
  get "8-2-title"(){
    return "The Personal Pronominals";
  },
  get "8-2-1-p"(){
    return "The following are the forms of the personal pronominals.";
  },
  get "8A-caption"(){
    return "The Personal Pronominals";
  },
  get "Table8A-col1"(){
    return "Basic Forms";
  },
  get "Table8A-col2"(){
    return "Emphatic Forms";
  },
  get "TheSingularNumber"(){
    return "Singular";
  },
  get "ThePluralNumber"(){
    return "Plural";
  },
  get "TheFirstPerson"(){
    return "First Person";
  },
  get "TheSecondPerson"(){
    return "Second Person";
  },
  get "TheThirdPersonMasc"(){
    return <>Third Person (<i>masc.</i>)</>;
  },
  get "TheThirdPersonFem"(){
    return <>Third Person (<i>fem.</i>)</>;
  },
  get "8-2-2-p"(){
    return <><i>thú</i> (<i>thusa</i>) is used as the object of a verb, e.g., <i>aithním thú</i>; <i>molaim thú</i>; and when it is a subject following a predicate in a copular sentence, e.g., <i>Mo náire thú</i> <Tl tlText="Shame on you" />; <i>Is oibrí díograiseach thú</i> <Tl tlText="You are a diligent worker" />.</>;
  },
  get "8-2-2-sample1"(){
    return <>He never forgot <b>you</b>.</>;
  },
  get "8-2-2-sample2"(){
    return <>Is that where <b>you</b> were born?</>;
  },
  get "8-2-2-sample3"(){
    return <>She abandoned <b>you</b> for another man.</>;
  },
  get "8-2-2-sample4"(){
    return <>I don&rsquo;t know <b>you</b>.</>;
  },
  get "8-2-2-sample5"(){
    return <><b>You</b> come from the west! (idiom meaning <i>Bravo!</i>)</>;
  },
  get "8-2-2-sample6"(){
    return <><b>You</b> better take a break.</>;
  },
  get "8-2-3-p"(){
    return <><i>tú</i> (<i>tusa</i>) is used elsewhere.</>;
  },
  get "8-2-3-sample1"(){
    return <>Did <b>you</b> see the results board last night?</>;
  },
  get "8-2-3-sample2"(){
    return <>We wouldn&rsquo;t have won without <b>you</b>.</>;
  },
  get "8-2-3-sample3"(){
    return <><b>You</b> are the captain.</>;
  },
  get "8-2-3-sample4"(){
    return <><b>You</b> are stronger than him.</>;
  },
  get "8-2-3-sample5"(){
    return <>Aren&rsquo;t <b>you</b> the fire marshal?</>;
  },
  get "8-2-4-p"(){
    return <>In the third person singular and plural, the forms <i>sé</i> (<i>seisean</i>), <i>sí</i> (<i>sise</i>) and <i>siad</i> (<i>siadsan</i>) are used as subjects (other than the copula).</>;
  },
  get "8-2-4-sample1"(){
    return <><b>He</b> (she, they) came in.</>;
  },
  get "8-2-4-sample2"(){
    return <><b>He</b> (she, they) is/are often late.</>;
  },
  get "8-2-4-sample3"(){
    return <>Did <b>he</b> (she, they) make the dinner?</>;
  },
  get "8-2-5-p"(){
    return <><i>é</i> (<i>eisean</i>), <i>í</i> (<i>ise</i>) and <i>iad</i> (<i>iadsan</i>) are used elsewhere.</>;
  },
  get "8-2-5-sample1"(){
    return <>The wind knocked <b>it</b> down.</>;
  },
  get "8-2-5-sample2"(){
    return <><b>It</b> is better that way.</>;
  },
  get "8-2-5-sample3"(){
    return <>Is <b>it</b> Micheál who lost the money?</>;
  },
  get "8-2-5-sample4"(){
    return <>There is only <b>him</b> in the office today.</>;
  },
  get "8-2-5-sample5"(){
    return <>Tomás and <b>her</b> went on holiday yesterday.</>;
  },
  get "8-2-5-sample6"(){
    return <>He did kiss <b>her</b>.</>;
  },
  get "8-2-5-sample7"(){
    return <>Who is <b>she</b>?</>;
  },
  get "8-2-5-sample8"(){
    return <>I would have won if not for <b>her</b>.</>;
  },
  get "8-2-5-sample9"(){
    return <>Did he go out to buy <b>them</b>?</>;
  },
  get "8-2-5-sample10"(){
    return <>Ultimately, he found <b>them</b>.</>;
  },
  get "8-2-5-sample11"(){
    return <>I remember <b>them</b> talking about it.</>;
  },
  get "8-2-5-sample12"(){
    return <><b>They</b> did it.</>;
  },
  get "8-2-6-p"(){
    return <>The singular masculine pronominal <i>é</i> is used in sentences like the following despite containing a feminine noun: <i>is é mo thuairim</i> <Tl tlText="It is my opinion" />; <i>is é an aidhm</i> <Tl tlText="It is the aim" />; <i>is é an bhrí</i> <Tl tlText="It is the meaning" />; <i>is é mo bharúil</i> <Tl tlText="It is my opinion" />. The pronominal refers to the opinion, the aim, the meaning, etc. rather than the noun itself.</>;
  },
  get "8-2-6-sample1"(){
    return <><b>It</b> is my opinion that it is worth leaving now.</>;
  },
  get "8-2-6-sample2"(){
    return <><b>It</b> is the aim to increase the number of students.</>;
  },
  get "8-2-6-sample3"(){
    return <><b>It</b>, the "Commission," means the European Commission.</>;
  },
  get "8-2-6-sample4"(){
    return <><b>It</b> is my opinion that he should not quit.</>;
  },
  get "8-2-6-sample5"(){
    return <><b>It</b> is the problem that he is too lazy.</>;
  },
  get "8-2-7-p"(){
    return "The pronominals of the third person are not lenited after a preposition where lenition follows.";
  },
  get "8-2-7-sample1"(){
    return <>Did he leave without <b>us</b>?</>;
  },
  get "8-2-7-sample2"(){
    return <>I&rsquo;ve never met people like <b>you</b>.</>;
  },
  get "8-3-title"(){
    return "The Possessive Adjectives";
  },
  get "8-3-1-p"(){
    return <>In the table below, the possessive adjectives and their initial mutations are listed. These are the emphatic forms, and they are followed by nouns. A hyphen is placed between two <i>s</i>&rsquo;s, e.g., <i>mo phas-sa</i>, and between two <i>n</i>&rsquo;s, e.g., <i>ár n&#x2011;arán-na</i>. If there is no lenition, the possessive endings <i>-sa</i> (<i>-se</i>), <i>-san</i> (<i>-sean</i>), <i>-na</i> (<i>-ne</i>) are left in the middle.</>;
  },
  get "8B-caption"(){
    return "The Possessive Adjectives";
  },
  get "TheSingular"(){
    return "Singular";
  },
  get "ThePlural"(){
    return "Plural";
  },
  get "8-3-1-sample1"(){
    return <>Have you seen <b>my bag</b>?</>;
  },
  get "8-3-1-sample2"(){
    return <>What happened to <b>our gift</b>?</>;
  },
  get "8-3-1-sample3"(){
    return <>They lost <b>their game</b>.</>;
  },
  get "8-3-2-p"(){
    return <>The emphatic forms of the third person pronominal (<i>seisean</i>, <i>sise</i>, <i>siadsan</i>) can also be used to express emphasis, e.g., <i>a gheansaí seisean</i> <Tl tlText="his sweater" />; <i>a cóta sise</i> <Tl tlText="her coat" />; <i>a dteach siadsan</i> <Tl tlText="their house" />.</>;
  },
  get "8-3-2-sample1"(){
    return <>There wasn&rsquo;t much to <b><i>his</i> module</b>.</>;
  },
  get "8-3-2-sample2"(){
    return <>Did you see <b><i>her</i> car</b>?</>;
  },
  get "8-3-2-sample3"(){
    return <>There is plenty to do on <b><i>their</i> farm</b>.</>;
  },
  get "8-3-3-p"(){
    return <>When the number <i>dhá</i> <Tl tlText="two" /> appears between a possessive adjective and a noun, it is the noun that undergoes the initial mutation, not the possessive adjective.</>;
  },
  get "8C-caption"(){
    return <>The Possessive Adjective and <i>dhá</i></>;
  },
  get "FollowingDha"(){
    return <>(following <i>dhá</i>)</>;
  },
  get "8-3-3-sample1"(){
    return <>Clap <b>your two palms</b> together.</>;
  },
  get "8-3-3-sample2"(){
    return <>She fell on <b>her two knees</b>. (<i>fem.</i>)</>;
  },
  get "8-3-3-sample3"(){
    return <>Did they sell <b>their two flats</b>? (<i>pl.</i>)</>;
  },
  get "8-3-4-p"(){
    return "To complete the function of possessive pronominal &mdash;";
  },
  get "8-3-4-a-p"(){
    return <>a possessive adjective plus <i>ceann</i> <Tl tlText="one" /> or <i>cuid</i> <Tl tlText="part" /> reinforced with a suffix is used, e.g., <i>mo cheannsa</i> <Tl tlText="mine" />; <i>a gcuidsean</i> <Tl tlText="theirs" />; or</>;
  },
  get "8-3-4-b-p"(){
    return <>a possessive adjective plus <i>cuid</i> reinforced with a suffix is used, e.g., <i>ár gcuidne airgid</i> <Tl tlText="our money" />; <i>bhur gcuidse iarrachtaí</i> <Tl tlText="your efforts" />.</>;
  },
  get "8D-caption"(){
    return <>The Possessive Adjective and <i>ceann</i> or <i>cuid</i></>;
  },
  get "8-3-4-sample1"(){
    return <>That is <b>mine</b>.</>;
  },
  get "8-3-4-sample2"(){
    return <>Which one is <b>hers</b>?</>;
  },
  get "8-3-4-sample3"(){
    return <>Where is <b>yours</b>?</>;
  },
  get "8-3-4-sample4"(){
    return <>They didn&rsquo;t get <b>theirs</b>.</>;
  },
  get "8-3-4-sample5"(){
    return <>Do <b>your work</b>.</>;
  },
  get "8-3-4-sample6"(){
    return <>He spoiled <b>his hair</b>.</>;
  },
  get "8-3-4-sample7"(){
    return <>It&rsquo;s <b>our money</b>.</>;
  },
  get "8-3-4-sample8"(){
    return <>Have you seen <b>mine</b>?</>;
  },
  get "8-3-5-p"(){
    return <>To use a possessive adjective as a possessive verbal noun, the preposition <i>do</i> is placed before the possessive adjective in the first and second person singular and plural, and <i>á</i> is placed before the third person singular and plural, as follows:</>;
  },
  get "8E-caption"(){
    return "The Possessive Adjective as a Possessive Verbal Noun";
  },
  get "8-3-5-sample1"(){
    return <>Don&rsquo;t <b>torture me</b>!</>;
  },
  get "8-3-5-sample2"(){
    return <>Are you <b>doing the work</b>?</>;
  },
  get "8-3-5-sample3"(){
    return <>It was <b>our search</b>.</>;
  },
  get "8-3-6-p"(){
    return "When a possessive adjective is following a preposition, no compound is formed between the preposition and the possessive adjective in such contexts.";
  },
  get "8-3-6-sample1"(){
    return <><b>My</b> mother <b>had</b> a car when she was young.</>;
  },
  get "8-3-6-sample2"(){
    return <>Did you give <b>to your</b> mother a present?</>;
  },
  get "8-3-6-sample3"(){
    return <>What did you give <b>to your</b> father?</>;
  },
  get "8-3-6-sample4"(){
    return <>He had a hat <b>on his</b> head. (<i>masc.</i>)</>;
  },
  get "8-3-6-sample5"(){
    return <>There was a cap <b>on her</b> head. (<i>fem.</i>)</>;
  },
  get "8-3-6-sample6"(){
    return <>The water was brought <b>from our</b> well.</>;
  },
  get "8-3-6-sample7"(){
    return <>Is it a photo <b>of your</b> house?</>;
  },
  get "8-3-6-sample8"(){
    return <>They are sharp <b>off their</b> top.</>;
  },
  get "8-3-7-p"(){
    return <>When a possessive adjective follows the prepositions <i>de</i> and <i>do</i>, compound is made between the preposition and the possessive adjective in the third person singular and plural, and in the first person plural as follows:</>;
  },
  get "8-3-7-sample1"(){
    return <>He removed the hat <b>from his head</b>. (<i>masc.</i>)</>;
  },
  get "8-3-7-sample2"(){
    return <>She removed the hat <b>from her head</b>. (<i>fem.</i>)</>;
  },
  get "8-3-7-sample3"(){
    return <>They removed the hats <b>from their heads</b>. (<i>pl.</i>)</>;
  },
  get "8-3-7-sample4"(){
    return <>He gave it <b>to his father</b>. (<i>masc.</i>)</>;
  },
  get "8-3-7-sample5"(){
    return <>She gave it <b>to her father</b>. (<i>fem.</i>)</>;
  },
  get "8-3-7-sample6"(){
    return <>They gave it <b>to their father</b>. (<i>pl.</i>)</>;
  },
  get "8-3-7-sample7"(){
    return <>We released <b>our grip</b>.</>;
  },
  get "8-3-7-sample8"(){
    return <>We gave them <b>to our aunts</b>.</>;
  },
  get "8-3-8-p"(){
    return <><i>n</i> is placed between the prepositions <i>faoi</i>, <i>i</i>, <i>le</i>, <i>ó</i> and <i>trí</i> and the possessive adjective or the particle <i>a</i> in the following contexts:</>;
  },
  get "8-3-8-a-p"(){
    return "the possessive adjective;";
  },
  get "8-3-8-a-sample1"(){
    return <>He found it <b>in our</b> car.</>;
  },
  get "8-3-8-a-sample2"(){
    return <>He talked <b>about his</b> son.</>;
  },
  get "8-3-8-b-p"(){
    return <>the numerical particle <i>a</i>;</>;
  },
  get "8-3-8-b-sample1"(){
    return <>I&rsquo;ll be there <b>about</b> six o&rsquo;clock.</>;
  },
  get "8-3-8-b-sample2"(){
    return <>The film will be held <b>from</b> four o&rsquo;clock.</>;
  },
  get "8-3-8-c-p"(){
    return <>the abstract particle <i>a</i>;</>;
  },
  get "8-3-8-c-sample1"(){
    return <>He received high praise <b>by</b> how well he did the work.</>;
  },
  get "8-3-8-c-sample2"(){
    return <>I wasn&rsquo;t happy <b>with</b> how long it took.</>;
  },
  get "8-3-8-d-p"(){
    return <>in phrases such as <i>a lán</i> <Tl tlText="a lot" />; <i>a leithéid</i> <Tl tlText="such" />; <i>a thuilleadh</i> <Tl tlText="more" />;</>;
  },
  get "8-3-8-d-sample1"(){
    return <>A full-time position will be allowed <b>in such</b> an instance.</>;
  },
  get "8-3-8-d-sample2"(){
    return <>She got bills <b>from a lot</b> of shoppers.</>;
  },
  get "8-3-8-e-p"(){
    return <>the relative particle <i>a</i>;</>;
  },
  get "8-3-8-e-sample1"(){
    return <>That&rsquo;s the building <b>where</b> the book will be sent.</>;
  },
  get "8-3-8-e-sample2"(){
    return <>Email me <b>about</b> what you have set up.</>;
  },
  get "8-3-8-e-note"(){
    return <><i>n</i> is never placed between <i>go dtí</i> and the possessive adjective or the particle <i>a</i>.</>;
  },
  get "8-3-8-e-sample3"(){
    return <>She went <b>to her</b> house after work.</>;
  },
  get "8-3-8-e-sample4"(){
    return <>We didn&rsquo;t go <b>to our</b> own party.</>;
  },
  get "8-3-8-e-sample5"(){
    return <>The lecture didn&rsquo;t start <b>until</b> five o&rsquo;clock.</>;
  },
  get "8-3-8-e-sample6"(){
    return <>We were there <b>until</b> twelve.</>;
  },
  get "8-3-9-p"(){
    return <><i>n</i> is placed between the preposition <i>ar</i> and the possessive adjective <i>a</i> to form <i>arna</i>. The verbal noun agrees with the gender and number of the noun that precedes it, e.g., <i>leabhar arna eisiúint</i> <Tl tlText="book issued" />; <i>tuarascáil arna seoladh</i> <Tl tlText="report sent" />; <i>doiciméid arna bhfoilsiú</i> <Tl tlText="documents published" />.</>;
  },
  get "8-3-9-sample1"(){
    return <>He shall be deemed to have been <b>elected</b> under this Act. (<i>masc.</i>)</>;
  },
  get "8-3-9-sample2"(){
    return <>"Circuit Court" means the Circuit Court <b>established</b> by law. (<i>fem.</i>)</>;
  },
  get "8-3-9-sample3"(){
    return <>It will be subject to regulations <b>made</b> under subsection 7. (<i>pl.</i>)</>;
  },
  get "8-4-title"(){
    return "The Prepositional Pronominals";
  },
  get "8F-caption"(){
    return "The Prepositional Pronominals";
  },
  get "Table8F-ag"(){
    return "at";
  },
  get "Table8F-ar"(){
    return "on";
  },
  get "Table8F-as"(){
    return "from";
  },
  get "Table8F-chuig"(){
    return "toward";
  },
  get "Table8F-de"(){
    return "of";
  },
  get "Table8F-do"(){
    return "to";
  },
  get "Table8F-faoi"(){
    return "under";
  },
  get "Table8F-fara"(){
    return "besides";
  },
  get "Table8F-i"(){
    return "in";
  },
  get "Table8F-idir"(){
    return "between";
  },
  get "Table8F-ionsar"(){
    return "towards";
  },
  get "Table8F-le"(){
    return "with";
  },
  get "Table8F-ó"(){
    return "from";
  },
  get "Table8F-roimh"(){
    return "before";
  },
  get "Table8F-thar"(){
    return "over";
  },
  get "Table8F-trí"(){
    return "through";
  },
  get "Table8F-um"(){
    return "around";
  },
  get "TheThirdPerson"(){
    return "Third Person";
  },
  get "8-4-p"(){
    return "Note that:";
  },
  get "8-4-a-p"(){
    return <>To express emphasis with the prepositional pronominals, a compound is made between the prepositional pronominals and the endings <i>-sa</i> (<i>-se</i>), <i>-san</i> (<i>-sean</i>), <i>-ne</i>, e.g., <i>agamsa</i>, <i>agatsa</i>, <i>aigesean</i>, <i>aicise</i>, <i>againne</i>, <i>agaibhse</i>, <i>acusan</i>.</>;
  },
  get "8-4-b-p"(){
    return <><i>-nne</i> is formed from <i>-nn</i> + <i>-ne</i>, e.g., <i>againne</i>, <i>orainne</i>, etc., and a hyphen is placed between the two <i>s</i>, e.g., <i>as-san</i>, <i>leis-sean</i>, <i>thairis-sean</i>.</>;
  },
  get "8-5-title"(){
    return "The Interrogative Pronominals";
  },
  get "8-5-1-p"(){
    return <>The interrogative pronominals are <i>cá</i>, <i>cad</i>, <i>cé</i> and <i>céard</i>.</>;
  },
  get "8-5-1-sample1"(){
    return <><b>Where</b> are you going?</>;
  },
  get "8-5-1-sample2"(){
    return <><b>Where</b> did he go this morning?</>;
  },
  get "8-5-1-sample3"(){
    return <><b>Where</b> are you from?</>;
  },
  get "8-5-1-sample4"(){
    return <><b>What</b> about this one?</>;
  },
  get "8-5-1-sample5"(){
    return <><b>Who</b> is coming?</>;
  },
  get "8-5-1-sample6"(){
    return <><b>What</b> questions do you have?</>;
  },
  get "8-5-1-sample7"(){
    return <><b>What</b> happened last night?</>;
  },
  get "8-5-1-sample8"(){
    return <><b>What</b> did they do after the work?</>;
  },
  get "8-5-2-p"(){
    return <><i>h</i> is placed before a word at the beginning of a sentence when <i>cá</i> is used (see <a href="./chapter10.html#sec_10_11_4">10.11.4</a>).</>;
  },
  get "8-5-2-sample1"(){
    return <><b>Where</b> did they go?</>;
  },
  get "8-5-2-sample2"(){
    return <><b>What time</b> will you be returning?</>;
  },
  get "8-5-2-sample3"(){
    return <><b>What a surprise</b>.</>;
  },
  get "8-5-2-sample4"(){
    return <><b>What age</b> is he?</>;
  },
  get "8-5-3-p"(){
    return <><i>h</i> is placed before the pronominals <i>é</i> (<i>eisean</i>), <i>í</i> (<i>ise</i>) and <i>iad</i> (<i>iadsan</i>) when used with <i>cé</i> (see <a href="./chapter10.html#sec_10_13_1">10.13.1</a>)).</>;
  },
  get "8-5-3-sample1"(){
    return <><b>Who</b> is that man?</>;
  },
  get "8-5-3-sample2"(){
    return <><b>Who</b> is she?</>;
  },
  get "8-5-3-sample3"(){
    return <><b>Who</b> are the experts?</>;
  },
  get "8-5-3-sample4"(){
    return <><b>Who are they</b>?</>;
  },
  get "8-5-4-p"(){
    return <>The interrogative pronominals are not lenited (see <a href="./chapter10.html#sec_10_5_2">10.5.2</a>), but compounds are made between <i>cá</i>, <i>cé</i> and the copula to make the forms <i>cár</i>, <i>cárb</i>, <i>cárbh</i>, <i>cér</i>, <i>cérb</i> and <i>cérbh</i> (see <a href="./chapter7.html#sec_7_3_1">7.3.1</a>). A compound is made between <i>cé</i> and the singular article to form <i>cén</i>.</>;
  },
  get "8-5-4-sample1"(){
    return <><b>Where</b> did you put it?</>;
  },
  get "8-5-4-sample2"(){
    return <><b>Where</b> are you from?</>;
  },
  get "8-5-4-sample3"(){
    return <><b>How</b> tall is it?</>;
  },
  get "8-5-4-sample4"(){
    return <><b>Which</b> of them is it?</>;
  },
  get "8-5-4-sample5"(){
    return <><b>What</b> is that?</>;
  },
  get "8-5-4-sample6"(){
    return <><b>Who</b> are the visitors?</>;
  },
  get "8-5-4-sample7"(){
    return <><b>How</b> far from here are you?</>;
  },
  get "8-5-4-sample8"(){
    return <><b>What</b> harm is it?</>;
  },
  get "8-5-5-p"(){
    return <>The masculine singular form of the prepositional pronominal or possessive adjective <i>a</i> is used in interrogative sentences, regardless of the number or gender of the thing or things being referred to, e.g., <i>Cé leis a raibh tú ag caint?</i> <Tl tlText="Who were you talking to?" /> (referring to a man or a woman or a group with <i>leis</i>); <i>Cé ina aghaidh a raibh siad ag imirt?</i> <Tl tlText="Who were they playing against?" /> (referring to a man or a woman or a group with the possessive adjective <i>a</i>).</>;
  },
  get "8-5-5-sample1"(){
    return <>What <b>did</b> you put there?</>;
  },
  get "8-5-5-sample2"(){
    return <>Who <b>has</b> the tickets?</>;
  },
  get "8-5-5-sample3"(){
    return <>What <b>are</b> you talking about?</>;
  },
  get "8-6-title"(){
    return "The Demonstrative Pronominals";
  },
  get "8-6-1-p"(){
    return <>These are demonstrative pronominals <i>seo</i>, <i>sin</i> and <i>siúd</i>. The demonstrative pronominals are used in four ways:</>;
  },
  get "8-6-1-a-p"(){
    return <>in combination with a preceding pronominal, e.g., <i>Is bronntanas é sin</i> <Tl tlText="That is a gift" />; <i>Tabhair cabhair dóibh seo</i> <Tl tlText="Give them this help" />; <i>Cá bhfuil a cóipleabhar siúd</i>? <Tl tlText="Where is that copybook?" />; <i>dá rachaidís siúd</i> <Tl tlText="If they went there" />;</>;
  },
  get "8-6-1-b-p"(){
    return <>in combination before a personal pronominal, e.g., <i>Sin é an bronntanas</i> <Tl tlText="That is the gift" />; <i>Seo é an cóipleabhar</i> <Tl tlText="This is the copybook" />; <i>Siúd iad na múinteoirí</i> <Tl tlText="Those are the teachers" />; <i>Siúd í an traein chugainn</i> <Tl tlText="That is the train coming towards us" />;</>;
  },
  get "8-6-1-c-p"(){
    return <>in combination with a personal pronominal, e.g., <i>Tá sin álainn</i> <Tl tlText="That is beautiful" />; <i>Ith seo</i> <Tl tlText="Eat this" />; <i>An bhfuil siúd amhlaidh?</i> <Tl tlText="Is that so?" />; <i>D&rsquo;imigh siúd leis an mbus</i> <Tl tlText="They left with the bus" />; <i>Sin madra</i> <Tl tlText="That is a dog" />; <i>Seo an mála</i> <Tl tlText="This is the bag" />; <i>Siúd an fhírinne</i> <Tl tlText="That is the truth" />; <i>Cad seo?</i> <Tl tlText="What is this?" />; <i>Cé sin?</i> <Tl tlText="Who is that?" />; <i>Sin sin</i> <Tl tlText="That is that" />; <i>mar seo</i> <Tl tlText="Like this" />; <i>go dtí sin</i> <Tl tlText="Until then" />; <i>gan siúd a ól</i> <Tl tlText="Without drinking that" />;</>;
  },
  get "8-6-1-d-p"(){
    return <>with an adverbial function, e.g., <i>chomh híseal seo</i> (<i>sin</i>, <i>siúd</i>) <Tl tlText="this low" />; <i>chomh mór seo</i> (<i>sin</i>, <i>siúd</i>) <Tl tlText="this big" />.</>;
  },
  get "8-6-2-p"(){
    return <>The forms <i>eo</i>, <i>in</i> and <i>iúd</i> are often used instead of <i>seo</i>, <i>sin</i> and <i>siúd</i> in the copula. Note that the forms <i>eo</i>, <i>in</i> and <i>iúd</i> are not used after <i>is</i>. (<b>TL Note</b>: <i>eo</i>, <i>in</i>, and <i>iúd</i> are secondary forms in dialectical Irish according to <a href="https://en.wikisource.org/wiki/Graim%C3%A9ar_na_Gaedhilge/Part_II_Chapter_IV" target="_blank">Graiméar na Gaedhilge, Part II Chapter IV</a>. These entries are not found in FGB.)</>;
  },
  get "8-6-2-sample1"(){
    return <><b>This</b> was the place.</>;
  },
  get "8-6-2-sample2"(){
    return <><b>This</b> is not the book.</>;
  },
  get "8-6-2-sample3"(){
    return <>Isn&rsquo;t <b>this</b> my coat?</>;
  },
  get "8-6-2-sample4"(){
    return <><b>That</b> was him.</>;
  },
  get "8-6-2-sample5"(){
    return <><b>That</b> is not how it would be.</>;
  },
  get "8-6-2-sample6"(){
    return <>She said that <b>that</b> was the man.</>;
  },
  get "8-6-2-sample7"(){
    return <><b>They</b> were leaving on a gallop.</>;
  },
  get "8-6-2-sample8"(){
    return <>It was probably <b>you</b>.</>;
  },
  get "8-6-2-sample9"(){
    return <>Are <b>those</b> the neighbours?</>;
  },
  get "8-6-3-p"(){
    return <>The demonstrative pronominal <i>éard</i> used in the copula is a compound of <i>é</i> and <i>rud</i>.</>;
  },
  get "8-6-3-sample1"(){
    return <>Lending money is <b>what</b> concerns us.</>;
  },
  get "8-6-3-sample2"(){
    return <>It was <b>what</b> I was saying that it will be finished soon.</>;
  },
  get "8-6-3-sample3"(){
    return <>People would think that <b>what</b> you are pretending is that it was done on purpose.</>;
  },
  get "8-6-3-sample4"(){
    return <>Is it <b>what</b> is intended to build a new building there?</>;
},
};
