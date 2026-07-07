import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  get "teidealNaCaibidle"() {
    return "The Adverb";
  },
  get "6-1-title"() {
    return "Main Types of Adverbs";
  },
  get "6-title"() {
    return <>{en_US_Common["Caibidil"]} 6 | {en_US["teidealNaCaibidle"]}</>;
  },
  get "6-1-1-p1"() {
    return "The adverb is used to qualify a verb, verbal noun, adjective, preposition, conjunction or another adverb.";
  },
  get "6-1-1-p2"() {
    return "The following are the main types of adverbs according to function &mdash;";
  },
  get "6-1-1-a-p"() {
    return <><b>adverb of manner</b>, e.g., <i>amhlaidh</i> <Tl tlText="thus" />, <i>ar chor ar bith</i> <Tl tlText="at all" />, <i>go breá</i> <Tl tlText="well" />, <i>go dona</i> <Tl tlText="badly" />, <i>go hard</i> <Tl tlText="loudly" />, <i>freisin</i> <Tl tlText="also" />, <i>os íseal</i> (<b>EN</b>: <i>lowly</i> i.e. <i>whispering</i>):</>;
  },
  get "6-1-1-a-SampleBox-eg1"() {
    return <>She walked <b>slowly</b>.</>;
  },
  get "6-1-1-a-SampleBox-eg2"() {
    return <>She is saying it <b>lowly</b>.</>;
  },
  get "6-1-1-b-p"() {
    return <><b>adverbs of time and frequency</b>, e.g., <i>amárach</i> <Tl tlText="tomorrow" />, <i>anois</i> <Tl tlText="now" />, <i>arís</i> <Tl tlText="again" />, <i>arú inné</i> <Tl tlText="the day before yesterday" />, <i>choíche</i> <Tl tlText="ever" />, <i>Dé Sathairn</i> <Tl tlText="on Saturday" />, <i>go hannamh</i> <Tl tlText="rarely" />, <i>go minic</i> <Tl tlText="often" />, <i>go míosúil</i> <Tl tlText="monthly" />, <i>inné</i> <Tl tlText="yesterday" />, <i>riamh</i> <Tl tlText="never" />:</>;
  },
  get "6-1-1-b-SampleBox-eg1"() {
    return <>She will be here <b>tomorrow</b>.</>;
  },
  get "6-1-1-b-SampleBox-eg2"() {
    return <>I <b>rarely</b> see them now.</>;
  },
  get "6-1-1-c-p"() {
    return <><b>adverbs of place and direction</b>, e.g., <i>abhaile</i> <Tl tlText="home" />, <i>abhus</i> <Tl tlText="here" />, <i>amach</i> <Tl tlText="out" />, <i>amú</i> <Tl tlText="in vain" />, <i>amuigh</i> <Tl tlText="outside" />, <i>ann</i> <Tl tlText="there" />, <i>anseo</i> <Tl tlText="here" />, <i>ansin</i> <Tl tlText="then" />, <i>isteach</i> <Tl tlText="inside" />, <i>ó thuaidh</i> <Tl tlText="northwards" />, <i>siar</i> <Tl tlText="westwards" />, <i>soir</i> <Tl tlText="eastwards" />:</>;
  },
  get "6-1-1-c-SampleBox-eg1"() {
    return <>I didn&rsquo;t see her <b>there</b>.</>;
  },
  get "6-1-1-c-SampleBox-eg2"() {
    return <>He went <b>out</b>.</>;
  },
  get "6-1-1-d-p"() {
    return <><b>interrogative adverb</b> (although these clauses are interrogative particles (see <a href="./chapter8.html#sec_8_5">8.5</a>), they are often referred to as interrogative adverbs), e.g., <i>cá</i> <Tl tlText="where" /> (<i>cá bhfuil</i>, <i>cá háit</i>), <i>cad</i> <Tl tlText="what" /> (<i>cad a…</i>, <i>cad as</i>, <i>cad chuige</i>, <i>cad é</i>, <i>cad é mar</i>), <i>cathain</i> <Tl tlText="when" /> (<i>cathain a…</i>), <i>céard</i> <Tl tlText="what" /> (<i>céard a…</i>, <i>céard é</i>), <i>cén</i> <Tl tlText="which" /> (<i>cén chaoi</i>, <i>cén uair</i>), <i>conas</i> <Tl tlText="how" /> (<i>conas a…</i>):</>;
  },
  get "6-1-1-d-SampleBox-eg1"() {
    return <><b>Where</b> shall we go?</>;
  },
  get "6-1-1-d-SampleBox-eg2"() {
    return <><b>How</b> are you?</>;
  },
  get "6-1-1-e-p"() {
    return <><b>adverb of quantity</b>, e.g., <i>ar fad</i> <Tl tlText="for the length of" />, <i>beagnach</i> <Tl tlText="almost" />, <i>sách</i> <Tl tlText="quite" />:</>;
  },
  get "6-1-1-e-SampleBox-eg1"() {
    return <>It&rsquo;s not <b>quite</b> hot yet.</>;
  },
  get "6-1-1-e-SampleBox-eg2"() {
    return <>You were <b>almost</b> on time.</>;
  },
  get "6-1-1-f-p1"() {
    return <><b>adverb of comparative degree</b>, e.g., <i>níos</i>, <i>ní ba</i> (<b>EN</b>: <i>more</i> or <i>-er</i>):</>;
  },
  get "6-1-1-f-SampleBox-eg1"() {
    return <>Seán is tall<b></b>er<b></b> than Mary.</>;
  },
  get "6-1-1-f-SampleBox-eg2"() {
    return <>They were whit<b></b>er<b></b> than snow.</>;
  },
  get "6-1-1-f-p2"() {
    return <>Note that <i>níos</i> can be used in all tenses but <i>ní b&rsquo;</i>/<i>ní ba</i> is only used in the past tense, the past habitual tense and the conditional mood. <i>ní b&rsquo;</i> is used before an adjective beginning with a vowel or <i>fh-</i> + <i>vowel</i>, e.g., <i>Ba ghá dóibh dréimire níos fearr</i>/<i>ní b&rsquo;fhearr a fháil anuraidh</i> <Tl tlText="it would have been better for them to get a ladder last year" />; <i>Dá mbeinn bliain níos óige</i>/<i>ní b&rsquo;óige</i>, <i>d&rsquo;imreoinn an cluiche</i> <Tl tlText="If I were a year younger, I would play the game" />; and <i>ní ba</i> is used before a consonant, e.g., <i>Bhí na braillíní níos gile</i>/<i>ní ba ghile ná an sneachta</i> <Tl tlText="The sheets were whiter than the snow" />.</>;
  },
  get "6-1-1-g-p"() {
    return <><b>emphatic adverb</b>, e.g., <i>féin</i>:</>;
  },
  get "6-1-1-g-SampleBox-eg1"() {
    return <>If he was tired him<b></b>self<b></b>, he went to the Oireachtas.</>;
  },
  get "6-1-1-g-SampleBox-eg2"() {
    return <>It is an important event; the President him<b></b>self<b></b> will be there.</>;
  },
  get "6-1-1-h-p"() {
    return <><b>noun used as an adverb in measurement</b>, e.g., <i>ar leithead</i>; <i>ar fad</i>:</>;
  },
  get "6-1-1-h-SampleBox-eg1"() {
    return <>The room was located six meters <b>in length</b>.</>;
  },
  get "6-1-1-h-SampleBox-eg2"() {
    return <>The road is three meters <b>in width</b>.</>;
  },
  get "6-1-1-i-p"() {
    return <><b>adjective used as an adverb</b>, e.g., <i>gann</i>, <i>gearr</i>:</>;
  },
  get "6-1-1-i-SampleBox-eg1"() {
    return <>They were <b>short</b> a person.</>;
  },
  get "6-1-1-i-SampleBox-eg2"() {
    return <>We were <b>short</b> of milk.</>;
  },
  get "6-1-1-j-p"() {
    return <>
      <b>adverb used as an adjective</b>, e.g., <i>amach</i>, <i>aniar</i>, <i>anuas</i>, <i>isteach</i>:
      <br />
      (<b>TL Note</b>: Similar constructions do not exist in English. These imply direction or origin. E.g. a literal translation of <i>fear amach</i> would be <i>outwardly man</i>, but that is not idiomatic English. Translations here will just give the meaning without attempting to parallel.)
    </>;
  },
  get "6-1-1-j-SampleBox-eg1"() {
    return "Do you see the man who went out?";
  },
  get "6-1-1-j-SampleBox-eg2"() {
    return "Here comes the woman who came in.";
  },
  get "6-1-1-j-SampleBox-eg3"() {
    return "The woman from the west is on TV.";
  },
  get "6-1-1-j-SampleBox-eg4"() {
    return "There is a seepage from above in the bedroom.";
  },
  get "6-1-1-j-SampleBox-eg5"() {
    return "Tomás is the man that married into the household.";
  },
  get "6-1-1-j-SampleBox-eg6"() {
    return "The wind from the east tonight tonight and the rain is from the west.";
  },
  get "6-1-1-k-p"() {
    return <><b>a noun or a verb based on an adverb</b>, e.g., <i>ganfhiosaíocht</i>, <i>istoícheadóireacht</i>:</>;
  },
  get "6-1-1-k-SampleBox-eg1"() {
    return <>The detective is <b>acting surreptitiously</b> to everyone. (<b>ganfhiosach</b> means "secret")</>;
  },
  get "6-1-1-k-SampleBox-eg2"() {
    return <>There is too much <b>night-activity</b> going on in this place. (<b>istoíche</b> - "at night" + <b>-adóireachta</b> - "activities")</>;
  },
  get "6-2-title"() {
    return "Adverbs of Manner and Adverbs of Time and Frequency";
  },
  get "6-2-p"() {
    return <>For the adverbs of manner and the adverbs of time and frequency based on an adjective, in the following contexts <i>go</i> is not added &mdash;</>;
  },
  get "6-2-a-p"() {
    return "in the comparative degree:";
  },
  get "6-2-a-SampleBox-eg1-left"() {
    return "carefully";
  },
  get "6-2-a-SampleBox-eg1-right"() {
    return <>Drive <b>more carefully</b> later.</>;
  },
  get "6-2-a-SampleBox-eg2-left"() {
    return "loudly";
  },
  get "6-2-a-SampleBox-eg2-right"() {
    return <>Speak <b>louder</b> from now on.</>;
  },
  get "6-2-b-p"() {
    return "if the adverb is being qualified by another adverb:";
  },
  get "6-2-b-SampleBox-eg1-left"() {
    return "often";
  },
  get "6-2-b-SampleBox-eg1-right"() {
    return <>The system was not examined <b>often enough</b>.</>;
  },
  get "6-2-b-SampleBox-eg2-left"() {
    return "quickly";
  },
  get "6-2-b-SampleBox-eg2-right"() {
    return <>He drove <b>well and quickly</b>.</>;
  },
  get "6-2-c-p"() {
    return "if an adjectival adverb comes before the adverb:";
  },
  get "6-2-c-SampleBox-eg1-left"() {
    return "smoothly";
  },
  get "6-2-c-SampleBox-eg1-right"() {
    return <>Do it <b>nicely and smoothly</b> now.</>;
  },
  get "6-2-c-SampleBox-eg2-left"() {
    return "generously";
  },
  get "6-2-c-SampleBox-eg2-right"() {
    return <>The food was distributed <b>generously</b>.</>;
  },
  get "6-2-d-p"() {
    return <>after the adverbs <i>cuibheasach</i> and <i>sách</i>, if they are qualifying a word immediately following them:</>;
  },
  get "6-2-d-SampleBox-eg1-left"() {
    return "severely";
  },
  get "6-2-d-SampleBox-eg1-right"() {
    return <>He worked <b>moderately hard</b>.</>;
  },
  get "6-2-d-SampleBox-eg2-left"() {
    return "well";
  },
  get "6-2-d-SampleBox-eg2-right"() {
    return <>She played <b>quite well</b>.</>;
  },
  get "6-3-title"() {
    return "Adverbs of Place and Direction";
  },
  get "6-3-tables-col1"() {
    return "Movement towards the location";
  },
  get "6-3-tables-col2"() {
    return "The location";
  },
  get "6-3-tables-col3"() {
    return "Movement from the location";
  },
  get "Table6A-caption"() {
    return "Adverbs of Place";
  },
  get "Table6A-row1-suas-sample"() {
    return <><i>EN</i>: He&rsquo;s going <b>up</b> the stairs.</>;
  },
  get "Table6A-row1-thuas"() {
    return "Above";
  },
  get "Table6A-row1-thuas-sample"() {
    return <><i>EN</i>: He&rsquo;s <b>up</b> the stairs.</>;
  },
  get "Table6A-row1-anuas-sample"() {
    return <><i>EN</i>: He&rsquo;s coming <b>from up</b> the stairs.</>;
  },
  get "Table6A-row2-síos-sample"() {
    return <><i>EN</i>: She&rsquo;s going <b>down</b> the stairs.</>;
  },
  get "Table6A-row2-thíos"() {
    return "Below";
  },
  get "Table6A-row2-thíos-sample"() {
    return <><i>EN</i>: She&rsquo;s <b>down</b> the stairs.</>;
  },
  get "Table6A-row2-aníos-sample"() {
    return <><i>EN</i>: She&rsquo;s coming <b>up</b> the stairs.</>;
  },
  get "Table6A-row3-amach-sample-1"() {
    return <><i>EN</i>: Are you going <b>out</b> for the night?</>;
  },
  get "Table6A-row3-amuigh"() {
    return "Outside";
  },
  get "Table6A-row3-amuigh-sample"() {
    return <><i>EN</i>: I&rsquo;m <b>outside</b>.</>;
  },
  get "Table6A-row3-amach-sample-2"() {
    return <><i>EN</i>: She&rsquo;s coming <b>out</b> as far as you.</>;
  },
  get "Table6A-row4-isteach-sample-1"() {
    return <><i>EN</i>: Are you going <b>in</b> the house?</>;
  },
  get "Table6A-row4-istigh"() {
    return "Inside";
  },
  get "Table6A-row4-istigh-sample"() {
    return <><i>EN</i>: The accident happened <b>inside</b> the house.</>;
  },
  get "Table6A-row4-isteach-sample-2"() {
    return <><i>EN</i>: Come <b>in</b> to me!</>;
  },
  get "Table6B-caption"() {
    return "Adverbs of Direction";
  },
  get "Table6B-row1-ó thuaidh-sample"() {
    return <><i>EN</i>: We will go <b>north</b> tomorrow.</>;
  },
  get "Table6B-row1-ó thuaidh/thuaidh"() {
    return "North";
  },
  get "Table6B-row1-ó thuaidh/thuaidh-sample"() {
    return <><i>EN</i>: That shop is on the <b>north</b> side of the county.</>;
  },
  get "Table6B-row1-aduaidh-sample"() {
    return <><i>EN</i>: They came <b>from the north</b> yesterday.</>;
  },
  get "Table6B-row2-ó dheas-sample"() {
    return <><i>EN</i>: He went <b>south</b> this morning.</>;
  },
  get "Table6B-row2-ó dheas/theas"() {
    return "South";
  },
  get "Table6B-row2-ó dheas/theas-sample"() {
    return <><i>EN</i>: They have a house on the <b>south</b> coast.</>;
  },
  get "Table6B-row2-aneas-sample"() {
    return <><i>EN</i>: She is coming <b>south</b> at present.</>;
  },
  get "Table6B-row3-soir-sample"() {
    return <><i>EN</i>: Did you go <b>east</b> to them?</>;
  },
  get "Table6B-row3-thoir"() {
    return "East";
  },
  get "Table6B-row3-thoir-sample"() {
    return <><i>EN</i>: They went, but there was no one <b>east</b>.</>;
  },
  get "Table6B-row3-anoir-sample"() {
    return <><i>EN</i>: I had to come <b>east</b> again.</>;
  },
  get "Table6B-row4-siar-sample"() {
    return <><i>EN</i>: Are you going <b>west</b> tonight?</>;
  },
  get "Table6B-row4-thiar"() {
    return "West";
  },
  get "Table6B-row4-thiar-sample"() {
    return <><i>EN</i>: Were you <b>west</b> last night?</>;
  },
  get "Table6B-row4-aniar-sample"() {
    return <><i>EN</i>: Will they be coming <b>west</b> on a visit?</>;
  },
  get "Table6B-row5-anonn/sall-sample"() {
    return <><i>EN</i>: Did Áine go <b>over</b> to England yesterday?</>;
  },
  get "Table6B-row5-thall"() {
    return "Over (e.g. there)";
  },
  get "Table6B-row5-thall-sample"() {
    return <><i>EN</i>: She went, she is <b>over</b> for a week.</>;
  },
  get "Table6B-row5-anall-sample"() {
    return <><i>EN</i>: When will she be coming <b>over</b> again?</>;
  },
  get "6-4-title"() {
    return "Points on the Compass";
  },
  get "6-4-p1"() {
    return "In order to distinguish between the directions, the main compass point is presented in the diagram below with the initial letter of the word:";
  },
  get "6-4-p2"() {
    return "Below are the abbreviations for the sub-points associated with the quadrant of the compass above.";
  },
  get "Table6C-caption"() {
    return "Points on the Compass";
  },
  get "Table6C-col1"() {
    return "Abbreviation";
  },
  get "Table6C-col2"() {
    return "Movement towards the location";
  },
  get "Table6C-col3"() {
    return "The simple location";
  },
  get "Table6C-col4"() {
    return "Movement from the location";
  },
  get "CompassT"() {
    return "the north";
  },
  get "CompassD"() {
    return "the south";
  },
  get "CompassO"() {
    return "the east";
  },
  get "CompassI"() {
    return "the west";
  },
};
