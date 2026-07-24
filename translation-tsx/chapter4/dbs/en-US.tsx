import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  get "teidealNaCaibidle"() {
    return "The Adjective";
  },
  get "4-title"() {
    return <>{en_US_Common["Caibidil"]} 4 | {en_US["teidealNaCaibidle"]}</>;
  },
  get "4-1-title"() {
    return "The Attributive Adjective";
  },
  get "4-1-1-p"() {
    return "The adjectives are divided into three declensions.";
  },
  get "4-1-2-p"() {
    return "The adjective is only declined when it is used as an attributive adjective.";
  },
  get "4-1-3-p"() {
    return <>The form of the attributive adjective depends on gender, case and number of the noun that it is qualifying and on the declension of the adjective itself. See <a href="./chapter9.html">Chapter 9</a> for rules on using adjectives with numbers.</>;
  },
  get "4-2-title"() {
    return "Gender, Case and Number of the Attributive Adjective";
  },
  get "4-2-1-p"() {
    return <>The qualifying adjective agrees with the noun in gender, case and number. When there is a series of nouns, the adjective agrees with the final noun, e.g., <i>mná agus fir ghnaíúla</i>; <i>peann, páipéar agus bileog ghorm</i> <Tl tlText="blue pen, paper and sheet"></Tl>. When a series of adjectives follows a single noun, every adjective agrees with the noun, e.g., <i>ailt shuimiúla thábhachtacha fhada</i> <Tl tlText="interesting, important, long articles"></Tl>.</>;
  },
  get "4-2-1-p-sample1"() {
    return <>The <b>lovely</b> women and men came in.</>;
  },
  get "4-2-1-p-sample2"() {
    return <>The <b>lovely</b> men and women came in.</>;
  },
  get "4-2-1-p-sample3"() {
    return <>She had a <b>blue</b> skirt, coat and scarf on.</>;
  },
  get "4-2-1-p-sample4"() {
    return <>There are <b>big, wild</b> cats in the zoo.</>;
  },
  get "4-2-2-a-p"() {
    return "In the singular &mdash;";
  },
  get "4-2-2-a-i-p"() {
    return <>when there is a masculine noun, the adjective that qualifies it is not lenited, e.g., <i>an fear beag</i> <Tl tlText="the small man"></Tl>; <i>ag an bhfear beag</i> <Tl tlText="at the small man"></Tl>; except in the vocative case and in the genitive case e.g., <i>a fhir bhig</i> <Tl tlText="O small man"></Tl>; <i>hata an fhir bhig</i> <Tl tlText="the hat of the small man"></Tl>.</>;
  },
  get "4-2-2-a-ii-p"() {
    return <>if the Lenition System (see <a href="./chapter1.html#sec_1_7">1.7</a>) is in use, the adjective that qualifies the masculine noun is lenited in the dative case if the article goes with that noun, e.g., <i>ag an fhear bheag</i> <Tl tlText="at the small man"></Tl>.</>;
  },
  get "4-2-2-b-p"() {
    return <>In the singular, when there is a feminine noun, the adjective that qualifies it is lenited in all the cases, e.g., <i>an bhean bheag</i> <Tl tlText="the small woman"></Tl>; <i>a bhean bheag</i> <Tl tlText="O small woman"></Tl>; <i>ag an mbean bheag</i> <Tl tlText="at the small woman"></Tl>; except in the genitive case, e.g., <i>hata na mná bige</i> <Tl tlText="the hat of the small woman"></Tl>.</>;
  },
  get "4-2-3-p"() {
    return <><a href="./chapter9.html">Chapter 9</a> provides an illustration of the attributive adjective when a number precedes the noun being qualified.</>;
  },
  get "4-2-4-title"() {
    return "Lenition of an Attributive Adjective in the Singular";
  },
  get "4-2-4-p"() {
    return <>An adjective is either left bare or inflected based on the gender and case of the noun it is qualifying. The contexts are shown in the table below. See the discussion of adjective declension (<a href="#sec_4_3">4.3</a>) for information on form change (other than lenition) of the adjective itself.</>;
  },
  get "lenition"() {
    return "lenition";
  },
  get "no-lenition"() {
    return "no lenition";
  },
  get "Table4A-caption"() {
    return "Lenition of an Attributive Adjective in the Singular";
  },
  get "Table4A-col1"() {
    return "The Case";
  },
  get "Table4A-col2"() {
    return "Singular Masculine Noun";
  },
  get "Table4A-col3"() {
    return "Singular Feminine Noun";
  },
  get "Table4A-row1"() {
    return "Nominative and Accusative";
  },
  get "Table4A-row2"() {
    return "Vocative";
  },
  get "Table4A-row3"() {
    return "Dative*";
  },
  get "Table4A-row4"() {
    return "Genitive";
  },
  get "Table4A-footnote"() {
    return <>But see <a href="./chapter1.html#sec_1_7">1.7</a> The Lenition System</>;
  },
  get "4-2-5-title"() {
    return "Lenition of Attributive Adjective in the Plural";
  },
  get "4-2-5-p"() {
    return <>In the plural, the initial consonant of the adjective is lenited if the plural noun starts with a slender consonant, as in the table below (see also <a href="./chapter10.html#sec_10_3_1">10.3.1</a>).</>;
  },
  get "Table4B-col1-main"() {
    return "Lenition";
  },
  get "Table4B-col2-main"() {
    return "Without Lenition";
  },
  get "Table4B-col1-sub"() {
    return "Noun that starts with a slender consonant in the plural";
  },
  get "Table4B-col2-sub"() {
    return "Noun that starts with a broad consonant or vowel in the plural";
  },
  get "4-3-title"() {
    return "Declensions of the Adjectives";
  },
  get "4-3-1-p"() {
    return "The form of the adjective is the same in the nominative, accusative and dative singular cases, and the form of the adjective is the same in the nominative, accusative and dative plural cases.";
  },
  get "4-3-2-p"() {
    return "In the genitive plural case &mdash;";
  },
  get "4-3-2-a-p"() {
    return "if the noun is a strong plural, the same form of the adjective is used as is used in the nominative plural case:";
  },
  get "4-3-2-a-sample-row1"() {
    return "Nominative plural";
  },
  get "4-3-2-a-sample-row2"() {
    return "Genitive plural";
  },
  get "4-3-2-a-sample1"() {
    return <>I like the <b>great</b> poets.</>;
  },
  get "4-3-2-a-sample2"() {
    return <>I like the <b>great</b> poems of the poets.</>;
  },
  get "4-3-2-b-p"() {
    return "if the noun is a weak plural, the same form of adjective is used as is used in the nominative singular case:";
  },
  get "4-3-2-b-sample-row1"() {
    return "Nominative singular";
  },
  get "4-3-2-b-sample-row2"() {
    return "Genitive plural";
  },
  get "4-3-2-b-sample1"() {
    return <>The <b>local</b> authority publishes a report every year.</>;
  },
  get "4-3-2-b-sample2"() {
    return <>The reports of the <b>local</b> authorities were published.</>;
  },
  get "4-3-3-a-p"() {
    return "An adjective in the masculine vocative is not lenited or inflected if it is a nickname or metaphorical in meaning.";
  },
  get "4-3-3-a-p-sample1"() {
    return <>How are you, <b>little father</b>?</>;
  },
  get "4-3-3-a-p-sample2"() {
    return <><b>Faithful brother</b>, I knew very well it was you.</>;
  },
  get "4-3-3-a-p-sample3"() {
    return <><b>Fragrant mouth</b>, we won&rsquo;t be happy together.</>;
  },
  get "4-3-3-a-p-sample4"() {
    return <>How are you, <b>white son</b>?</>;
  },
  get "4-3-3-b-p"() {
    return "The initial letter of an adjective is lenited, however, if a feminine noun precedes it.";
  },
  get "4-3-3-b-p-sample1"() {
    return <>How are you today, my <b>sweet</b> treasure?</>;
  },
  get "4-3-3-b-p-sample2"() {
    return <><b>Little</b> mother, your work will never end.</>;
  },
  get "4-3-4-p"() {
    return <>The adjective following a female baptismal name is not inflected, e.g., <i>Máire Mhór</i> <Tl tlText="Big Mary"></Tl>, <i>teach Mháire Mhór</i> <Tl tlText="Big Mary&rsquo;s house"></Tl>.</>;
  },
  get "4-3-5-p"() {
    return <>The adjective is neither inflected nor does it undergo an initial mutation after adverbs or adjectives used as adverbs such as <i>cuibheasach</i> <Tl tlText="fairly"></Tl>, <i>sách</i> <Tl tlText="quite"></Tl>, <i>measartha</i> <Tl tlText="moderately"></Tl>, <i>réasúnta</i> <Tl tlText="relatively"></Tl>, etc.</>;
  },
  get "4-3-5-p-sample1"() {
    return <>She is a <b>moderately wealthy</b> woman.</>;
  },
  get "4-3-5-p-sample2"() {
    return <>They are <b>moderately wealthy</b> women.</>;
  },
  get "4-3-5-p-sample3"() {
    return <>They are <b>quite tall</b> men.</>;
  },
  get "4-3-5-p-sample4"() {
    return <>They are <b>relatively quiet</b> children.</>;
  },
  get "4-3-5-p-sample5"() {
    return <>It was a <b>rather cold</b> morning.</>;
  },
  get "4-3-5-p-sample6"() {
    return <>We want a <b>fairly dry</b> year.</>;
  },
  get "4-3-6-p"() {
    return <>The adjective is not inflected after the emphatic particle <i>an-</i>.</>;
  },
  get "4-3-6-p-sample1"() {
    return <>They are <b>very nice</b> people.</>;
  },
  get "4-3-6-p-sample2"() {
    return <>Those <b>very important</b> aspects will be considered.</>;
  },
  get "4-3-6-p-sample3"() {
    return <>They are not <b>very quiet</b> children.</>;
  },
  get "4-3-7-p"() {
    return <>The adjective is neither inflected nor lenited if it is part of a multi-word adjectival phrase, e.g., <i>athnuachan saor in aisce</i> <Tl tlText="free renewal"></Tl>; <i>tuarascáil cothrom le dáta</i> <Tl tlText="up-to-date report"></Tl>.</>;
  },
  get "4-3-7-p-sample1"() {
    return <>She is a <b>prominent</b> woman in the field of science.</>;
  },
  get "4-3-7-p-sample2"() {
    return <>The author of the <b>up-to-date</b> report gave the presentation.</>;
  },
  get "4-3-8-p"() {
    return "The form of the singular genitive is described under each separate declension.";
  },
  get "4-4-title"() {
    return "The First Declension";
  },
  get "4-4-p"() {
    return <>Included in this declension are adjectives ending with a consonant, broad or slender, aside from adjectives ending with <i>-úil</i> and certain adjectives ending with <i>-ir</i> (see <a href="#sec_4_5">4.5</a>).</>;
  },
  get "4-4-1-title"() {
    return "Form of the Genitive Singular";
  },
  get "4-4-1-a-title"() {
    return "Masculine";
  },
  get "4-4-1-a-i-p"() {
    return <>If the adjective ends with a broad consonant, the consonant is palatalized as it would be done with a noun in the First Declension (see <a href="./chapter2.html#sec_2_2_2">2.2.2</a>).</>;
  },
  get "4-4-1-a-i-p-sample1"() {
    return <>Where did he leave the <b>big</b> man&rsquo;s hat?</>;
  },
  get "4-4-1-a-i-p-sample2"() {
    return <>The terms of the <b>permanent</b> contract must be read carefully.</>;
  },
  get "4-4-1-a-i-p-sample3"() {
    return <>He read the <b>renowned</b> player&rsquo;s book when it was published.</>;
  },
  get "4-4-1-a-ii-p"() {
    return <>Inflection is not done in the genitive singular masculine on monosyllabic adjectives ending in <i>-ch(t)</i> (except <i>bocht</i>), e.g., <i>beacht</i> <Tl tlText="exact"></Tl>, <i>caoch</i> <Tl tlText="blind"></Tl>, <i>déach</i> <Tl tlText="dual"></Tl>, <i>fliuch</i> <Tl tlText="wet"></Tl>, <i>lách</i> <Tl tlText="pleasant"></Tl>, <i>moch</i> <Tl tlText="early"></Tl>, <i>nocht</i> <Tl tlText="naked"></Tl>.</>;
  },
  get "4-4-1-a-ii-p-sample1"() {
    return <>They had to hold the festival at the end of the <b>wet</b> summer.</>;
  },
  get "4-4-1-a-ii-p-sample2"() {
    return <>The children are in the teacher&rsquo;s class <b>exactly</b> this year.</>;
  },
  get "4-4-1-a-ii-p-sample3"() {
    return <>The <b>poor</b> farmer&rsquo;s cows were stolen.</>;
  },
  get "4-4-1-a-iii-p"() {
    return <>If a slender consonant or <i>-íoch</i> is the ending of the adjective, it is not inflected.</>;
  },
  get "4-4-1-a-iii-p-sample1"() {
    return <>I would like to speak to the parents of the <b>quiet</b> boy.</>;
  },
  get "4-4-1-a-iii-p-sample2"() {
    return <>Everyone was in favor of the <b>industrial</b> campaign.</>;
  },
  get "4-4-1-a-iv-p"() {
    return <>Inflection is not done in the genitive singular masculine on monosyllabic adjectives ending in double consonants (except <i>dall</i> <Tl tlText="blind"></Tl>, <i>donn</i> <Tl tlText="brown"></Tl>, <i>fionn</i> <Tl tlText="fair"></Tl>), e.g., <i>cearr</i> <Tl tlText="wrong"></Tl>, <i>corr</i> <Tl tlText="odd"></Tl>, <i>gann</i> <Tl tlText="scarce"></Tl>, <i>gearr</i> <Tl tlText="short"></Tl>, <i>mall</i> <Tl tlText="slow"></Tl>, <i>teann</i> <Tl tlText="tight"></Tl>, <i>toll</i> <Tl tlText="hollow"></Tl>.</>;
  },
  get "4-4-1-a-iv-p-sample1"() {
    return <>The price of <b>scarce</b> food is rising every day.</>;
  },
  get "4-4-1-a-iv-p-sample2"() {
    return <>The cost of the <b>short</b> trip surprised them.</>;
  },
  get "4-4-1-a-iv-p-sample3"() {
    return <>The smell of <b>brown</b> bread was all over the house.</>;
  },
  get "4-4-1-a-v-p"() {
    return <>Inflection is not done in the genitive singular masculine in these following monosyllabic adjectives: <i>amh</i> <Tl tlText="raw"></Tl>, <i>cúng</i> <Tl tlText="narrow"></Tl>, <i>deas</i> (meaning <i>cineálta</i> <Tl tlText="kind/nice"></Tl>), <i>leamh</i> <Tl tlText="weak"></Tl>, <i>mear</i> <Tl tlText="quick"></Tl>, <i>seang</i> <Tl tlText="slim"></Tl>, <i>searbh</i> <Tl tlText="bitter/sour"></Tl>, <i>tearc</i> <Tl tlText="rare"></Tl>, <i>tiubh</i> <Tl tlText="thick"></Tl>, <i>trom</i> <Tl tlText="heavy"></Tl>, <i>tur</i> <Tl tlText="dry"></Tl>.</>;
  },
  get "4-4-1-a-v-p-sample1"() {
    return <>She put oil on the door of the <b>narrow</b> way.</>;
  },
  get "4-4-1-a-v-p-sample2"() {
    return <>I spoke to the owner of the <b>fast</b> horse.</>;
  },
  get "4-4-1-b-title"() {
    return "Feminine";
  },
  get "4-4-1-b-i-p"() {
    return <><i>-e</i> is put with the final consonant, and it is palatalized if broad, e.g., <i>gorm</i>, <i>goirme</i>; <i>maith</i>, <i>maithe</i> as would be done with nouns in the Second Declension (see <a href="./chapter2.html#sec_2_3_2">2.3.2</a>).</>;
  },
  get "4-4-1-b-i-p-sample1"() {
    return <>Look at the beauty of the <b>blue</b> sky.</>;
  },
  get "4-4-1-b-i-p-sample2"() {
    return <>Who is the author of the <b>good</b> report?</>;
  },
  get "4-4-1-b-ii-p"() {
    return <>When adjectives end with <i>-(e)ach</i>, <i>-(a)í</i> replaces <i>-(e)ach</i>, e.g., <i>isteach</i>, <i>aistí</i>; <i>iontach</i>, <i>iontaí</i>; as would be done with nouns in the Second Declension (see <a href="./chapter2.html#sec_2_3_2">2.3.2</a>).</>;
  },
  get "4-4-1-b-ii-p-sample1"() {
    return <>The voice of the <b>peculiar</b> old woman can be heard on the record.</>;
  },
  get "4-4-1-b-ii-p-sample2"() {
    return <>I liked the theme of the <b>wonderful</b> composition.</>;
  },
  get "4-4-1-b-iii-p"() {
    return <>When adjectives end with <i>-íoch</i>, <i>-íoch</i> is changed to <i>-íche</i>, e.g., <i>eacnamaíoch</i>, <i>eacnamaíche</i>.</>;
  },
  get "4-4-1-b-iii-p-sample1"() {
    return <>When will we feel the end of the <b>economic</b> crisis?</>;
  },
  get "4-4-1-b-iii-p-sample2"() {
    return <>The growth of the <b>industrial</b> sector is a good thing.</>;
  },
  get "4-4-1-b-iv-p"() {
    return <>See <a href="./chapter2.html">Chapter 2</a> for a comprehensive description of vowel changes.</>;
  },
  get "4-4-2-title"() {
    return "Form of the Vocative Singular";
  },
  get "4-4-2-p"() {
    return <>The form of the vocative singular is the same as the nominative singular, except when adjectives whose final consonant is palatalized in the masculine genitive singular. With such adjectives, the form of the masculine vocative singular is usually the same as the form of the masculine genitive singular, e.g., <i>a fhir mhóir</i>; <i>cóta an fhir mhóir</i>.</>;
  },
  get "4-4-3-title"() {
    return "Form of the Plural &mdash; Every Case";
  },
  get "4-4-3-p"() {
    return <><i>-a</i> is added to adjectives ending in a broad consonant and <i>-e</i> to adjectives ending in a slender consonant and some adjectives are syncopated (but see weak plurals in the genitive plural, <a href="#sec_4_3_2_b">4.3.2(b)</a>).</>;
  },
  get "4-4-3-p-sample1"() {
    return <>Where are the <b>famous</b> footballers?</>;
  },
  get "4-4-3-p-sample2"() {
    return <>The <b>good</b> essays will be published in the annual magazine.</>;
  },
  get "4-4-3-p-sample3"() {
    return <>The <b>noble</b> persons were present yesterday.</>;
  },
  get "4-4-4-title"() {
    return "Syncopation in the Singular and in the Plural";
  },
  get "4-4-4-p"() {
    return "The adjectives in the following table, among others, are syncopated in the feminine genitive singular case and in the plural in each case, but the forms in brackets are not syncopated.";
  },
  get "Table4C-col1"() {
    return "Nominative Singular";
  },
  get "Table4C-col2"() {
    return "Genitive Feminine Singular";
  },
  get "Table4C-col3"() {
    return "Plural";
  },
  get "4-5-title"() {
    return "The Second Declension";
  },
  get "4-5-p"() {
    return <>This declension includes adjectives that end in <i>-úil</i>, as well as some adjectives that end in <i>-ir</i>, e.g., <i>óir</i>, <i>díacair</i>, <i>socair</i>.</>;
  },
  get "4-5-1-title"() {
    return "Form of the Genitive Singular";
  },
  get "4-5-1-a-p"() {
    return "Adjectives of this declension do not undergo any inflection.";
  },
  get "4-5-1-a-p-sample1"() {
    return <>Where is the father of the <b>just</b> man?</>;
  },
  get "4-5-1-a-p-sample2"() {
    return <>I read the start of the <b>interesting</b> book.</>;
  },
  get "4-5-1-b-p"() {
    return <>The final consonant is broadened and <i>-a</i> is added.</>;
  },
  get "4-5-1-b-p-sample1"() {
    return <>Where is the father of the <b>famous</b> woman?</>;
  },
  get "4-5-1-b-p-sample2"() {
    return <>I read the start of the <b>difficult</b> essay.</>;
  },
  get "4-5-2-title"() {
    return "Form of the Plural &mdash; Every Case";
  },
  get "4-5-2-a-p"() {
    return <>The final consonant is broadened and <i>-a</i> is added as in the feminine genitive singular (but see genitive plurals, <a href="#sec_4_3_2_b">4.3.2(b)</a>).</>;
  },
  get "4-5-2-a-p-sample1"() {
    return <>Where are the <b>famous</b> men and the <b>beautiful</b> women?</>;
  },
  get "4-5-2-a-p-sample2"() {
    return <>I read the <b>interesting</b> poems yesterday.</>;
  },
  get "4-5-2-b-p"() {
    return <><i>deacair</i> <Tl tlText="difficult"></Tl>, <i>deacra</i> <Tl tlText="difficult"></Tl>; <i>socair</i> <Tl tlText="calm"></Tl>, <i>socra</i> <Tl tlText="calm"></Tl> are syncopated in the genitive singular and in the plural.</>;
  },
  get "4-6-title"() {
    return "The Third Declension";
  },
  get "4-6-1-p"() {
    return <>This declension includes adjectives that end in a vowel, e.g., <i>cliste</i>, <i>cróga</i>.</>;
  },
  get "4-6-2-p"() {
    return <>Only two adjectives are inflected in this declension: <i>breá</i> and <i>te</i>. <i>breá</i> changes to <i>breátha</i> in the feminine genitive singular and plural and <i>te</i> changes to <i>teo</i> in the plural (but see weak plurals in the genitive plural, <a href="#sec_4_3_2_b">4.3.2(b)</a>).</>;
  },
  get "4-6-2-sample-row1"() {
    return "Nominative singular";
  },
  get "4-6-2-sample-row2"() {
    return "Genitive singular";
  },
  get "4-6-2-sample-row3"() {
    return "Nominative plural";
  },
  get "4-6-2-sample1"() {
    return <>It was a <b>lovely, hot</b> fire.</>;
  },
  get "4-6-2-sample2"() {
    return <>The color of the <b>lovely, hot</b> fire.</>;
  },
  get "4-6-2-sample3"() {
    return <>The <b>lovely, hot</b> fires were lit.</>;
  },
  get "4-7-title"() {
    return "Summary of the Adjectives&rsquo; Declensions";
  },
  get "Table4D-title"() {
    return "Masculine Singular Noun";
  },
  get "Table4D-caption"() {
    return "Summary of the Adjectives&rsquo; Declensions &mdash; Masculine Singular";
  },
  get "Table4D-col1"() {
    return "Case";
  },
  get "Table4D-col2"() {
    return "The First Declension";
  },
  get "Table4D-col3"() {
    return "The Second Declension";
  },
  get "Table4D-col4"() {
    return "The Third Declension";
  },
  get "Table4D-case1"() {
    return "Nominative";
  },
  get "Table4D-case2"() {
    return "Vocative";
  },
  get "Table4D-case3"() {
    return "Dative";
  },
  get "Table4D-case4"() {
    return "Genitive";
  },
  get "Table4D-footnote"() {
    return "But see 1.7 The Lenition System";
  },
  get "Table4E-title"() {
    return "Feminine Singular Noun";
  },
  get "Table4E-caption"() {
    return "Summary of the Adjectives&rsquo; Declensions &mdash; Feminine Singular";
  },
  get "Table4F-title"() {
    return "Masculine Plural Noun";
  },
  get "Table4F-caption"() {
    return "Summary of the Adjectives&rsquo; Declensions &mdash; Masculine Plural";
  },
  get "Table4G-title"() {
    return "Feminine Plural Noun";
  },
  get "Table4G-caption"() {
    return "Summary of the Adjectives&rsquo; Declensions &mdash; Feminine Plural";
  },
  get "4-8-title"() {
    return "Degrees of Comparison of the Adjectives";
  },
  get "4-8-1-a-p"() {
    return <>The form of the comparative degree and superlative forms of adjectives is usually the same as the feminine genitive singular, e.g., <i>ard</i>, <i>airde</i>; <i>breá</i>, <i>breátha</i>; <i>cóir</i>, <i>córa</i>; <i>dathúil</i>, <i>dathúla</i>; <i>diacair</i>, <i>diacra</i>; <i>diríct</i>, <i>diríct</i>.</>;
  },
  get "4-8-1-a-p-sample1"() {
    return <>Get the <b></b>high<b></b>est value on it.</>;
  },
  get "4-8-1-a-p-sample2"() {
    return <>Ciara is the most <b>beautiful</b> girl in the class.</>;
  },
  get "4-8-1-a-p-sample3"() {
    return <>The <b></b>hard<b></b>est thing about poetry is reading it properly.</>;
  },
  get "4-8-1-b-p"() {
    return <>The form for the comparative degree and superlative forms of adjectives is also the same as for the feminine genitive singular for adjectives ending in <i>-íoch</i>, e.g., <i>buíoch</i>, <i>buíche</i>; <i>débhríoch</i>, <i>débhríche</i>; <i>imníoch</i>, <i>imníche</i>; <i>impíoch</i>, <i>impíche</i>; <i>taithíoch</i>, <i>taithíche</i>; <i>uathoibríoch</i>, <i>uathoibríche</i>.</>;
  },
  get "4-8-1-b-p-sample1"() {
    return <>They are the most <b>concerned</b> people in the country.</>;
  },
  get "4-8-1-b-p-sample2"() {
    return <>He is the most <b>experienced</b> at this work.</>;
  },
  get "4-8-1-b-p-sample3"() {
    return <>The most <b>automated</b> system will be put in place.</>;
  },
  get "4-8-2-p"() {
    return <>
      Some adjectives have irregular forms, e.g.,
      <i>beag</i>, <i>lú</i> (<b>EN</b>: <i>small</i>, <i>smaller</i>)
      <i>dócha</i>, <i>dóichí</i> (<b>EN</b>: <i>likely</i>, <i>more likely</i>)
      <i>fada</i>, <i>faide (sia)</i> (<b>EN</b>: <i>long</i>, <i>longer</i>)
      <i>fogas</i>, <i>foisce</i> (<b>EN</b>: <i>near</i>, <i>nearer</i>)
      <i>furasta</i>, <i>fusa</i> (<b>EN</b>: <i>easy</i>, <i>easier</i>)
      <i>gearr</i>, <i>giorra</i> (<b>EN</b>: <i>short</i>, <i>shorter</i>)
      <i>iomaí</i>, <i>lia</i> (<b>EN</b>: <i>many</i>, <i>more</i>)
      <i>maith</i>, <i>fearr</i> (<b>EN</b>: <i>good</i>, <i>better</i>)
      <i>mór</i>, <i>mó</i> (<b>EN</b>: <i>big</i>, <i>bigger</i>)
      <i>olc</i>, <i>measa</i> (<b>EN</b>: <i>bad</i>, <i>worse</i>)
      <i>te</i>, <i>teo</i> (<b>EN</b>: <i>hot</i>, <i>hotter</i>).
    </>;
  },
  get "4-8-2-p-sample1"() {
    return <>Rónán is the <b>best</b> person in the class.</>;
  },
  get "4-8-2-p-sample2"() {
    return <>It is the <b>long</b>est memory (<b>earli</b>est) in my head.</>;
  },
  get "4-8-2-p-sample3"() {
    return <>Which one is <b>big</b>gest?</>;
  },
  get "4-8-3-title"() {
    return <>Forms following <i>dá</i> and <i>a</i></>;
  },
  get "4-8-3-a-p"() {
    return <>After <i>dá</i> <Tl tlText="however"></Tl> and <i>a</i> <Tl tlText="how"></Tl>, regardless of whether they have a proleptic or anaphoric function, a form that is the same as the comparative form of the adjective or a form that derives from the comparative or the base form and ends in <i>-cht</i> is usually used.</>;
  },
  get "4-8-3-b-p"() {
    return <>Only one form is used for the following adjectives: <i>dócha</i>, <i>dóichí</i> <Tl tlText="likely"></Tl>; <i>dona</i>, <i>donacht</i> <Tl tlText="bad"></Tl>; <i>furasta</i>, <i>fusacht</i> <Tl tlText="easy"></Tl>; <i>gearr</i>, <i>giorracht</i> <Tl tlText="short"></Tl>; and for these irregular forms: <i>beag</i>, <i>laghad</i> <Tl tlText="small"></Tl>; <i>fada</i>, <i>fad</i> <Tl tlText="long"></Tl>; <i>iomaí</i>, <i>liacht</i> <Tl tlText="many"></Tl>; <i>maith</i>, <i>feabhas</i> <Tl tlText="good"></Tl>; <i>mór</i>, <i>méad/méid</i> <Tl tlText="big"></Tl>; <i>olc</i>, <i>olcas</i> <Tl tlText="bad"></Tl>; <i>tiubh</i>, <i>tiús</i> <Tl tlText="thick"></Tl>.</>;
  },
  get "4-8-3-c-p"() {
    return <><i>méid</i> is used instead of <i>méad</i> in certain contexts, e.g., <i>dá mhéad airgead a bhí aici</i> but <i>a mhéid is indéanta le réasún</i>; <i>a mhéid is gá</i>.</>;
  },
  get "4-8-3-c-p-sample1"() {
    return <>I loved how <b>beautifully</b> (how sweetly, how accurately, how fluently, how smoothly, how clearly) she spoke.</>;
  },
  get "4-8-3-c-p-sample2"() {
    return <>You wouldn&rsquo;t believe how <b>difficult</b> (how wretched, how bad, how slippery, how lonely) the place was.</>;
  },
  get "4-8-3-c-p-sample3"() {
    return <>He received high praise <b>because of how well</b> he did the job.</>;
  },
  get "4-8-3-c-p-sample4"() {
    return <><b>However wise</b> (how brave, how good, how clever, how skilled) he was, the business didn&rsquo;t work out for him.</>;
  },
  get "4-8-3-c-p-sample5"() {
    return <><b>However bad</b> (how ugly, how lazy, how bad, how annoying) he was, you have to accept it.</>;
  },
  get "4-8-3-c-p-sample6"() {
    return <><b>However much</b> she wanted him, she didn&rsquo;t buy him in the end.</>;
  },
  get "4-9-title"() {
    return "The Possessive Adjective";
  },
  get "4-9-p"() {
    return <>Because the possessive adjectives, <i>mo</i> <Tl tlText="my"></Tl>, <i>do</i> <Tl tlText="your"></Tl>, <i>a</i> (masculine and feminine singular) <Tl tlText="his/her"></Tl>, <i>ár</i> <Tl tlText="our"></Tl>, <i>bhur</i> <Tl tlText="your"></Tl>, and <i>a</i> (plural) <Tl tlText="their"></Tl> function as pronominals in the genitive, they are discussed in <a href="./chapter8.html">Chapter 8</a>.</>;
  },
  get "4-10-title"() {
    return "The Demonstrative Adjective";
  },
  get "4-10-p"() {
    return <>The demonstrative adjectives are <i>seo</i> <Tl tlText="this"></Tl>, <i>sin</i> <Tl tlText="that"></Tl>, <i>siúd</i> <Tl tlText="that over there"></Tl> and <i>úd</i> <Tl tlText="that over there"></Tl>. (Although <i>seo</i>, <i>sin</i> and <i>siúd</i> are demonstrative pronominals, they are often referred to as demonstrative adjectives.)</>;
  },
  get "4-10-p-sample1"() {
    return <><b>This</b> man is sick.</>;
  },
  get "4-10-p-sample2"() {
    return <><b>This</b> boy will be coming with me.</>;
  },
  get "4-10-p-sample3"() {
    return <><b>These</b> are with me.</>;
  },
  get "4-10-p-sample4"() {
    return <><b>That</b> door is not closed.</>;
  },
  get "4-10-p-sample5"() {
    return <><b>That</b> girl&rsquo;s name is Síle.</>;
  },
  get "4-10-p-sample6"() {
    return <><b>That</b> house was sold yesterday.</>;
  },
  get "4-10-p-sample7"() {
    return <>He was <b>the one</b> that had the money.</>;
  },
  get "4-10-p-sample8"() {
    return <>Do you see <b>that</b> field over there?</>;
  },
  get "4-11-title"() {
    return "The Predicative Adjective";
  },
  get "4-11-p"() {
    return <>An predicative adjective is an adjective that qualifies the noun as predicate or as part of a predicate, e.g., <i>Nach deas é?</i> <Tl tlText="Isn&rsquo;t it nice?"></Tl> ; <i>Tá an aimsir fuar</i> <Tl tlText="The weather is cold"></Tl>. The predicative adjective is not inflected or lenited.</>;
  },
  get "4-11-p-sample1"() {
    return <>The train was <b>empty</b>.</>;
  },
  get "4-11-p-sample2"() {
    return <>The buses are usually <b>late</b>.</>;
  },
  get "4-11-p-sample3"() {
    return <>Is that woman <b>rich</b>?</>;
  },
  get "4-11-p-sample4"() {
    return <>That wedding will be <b>big</b>.</>;
  },
  get "4-12-title"() {
    return "The Verbal Adjective";
  },
  get "4-12-1-p"() {
    return "The verbal adjective functions as a regular adjective. The verbal adjective is used &mdash;";
  },
  get "4-12-1-a-p"() {
    return <>as a qualifying adjective, e.g., <i>Is bean phósta í</i> <Tl tlText="She is a married woman"></Tl>;</>;
  },
  get "4-12-1-b-p"() {
    return <>as a predicative adjective following the copula, e.g., <i>Ní briste atá sé</i> <Tl tlText="It is not broken"></Tl>;</>;
  },
  get "4-12-1-c-p"() {
    return <>as a predicative adjective following the verb <i>bí</i> indicating the state of the object after the action, e.g., <i>Is í atá tugtha don obair</i> <Tl tlText="It is what has been given to the work"></Tl>;</>;
  },
  get "4-12-1-d-p"() {
    return <>as a predicative adjective following the verb <i>bí</i> indicating the state of the agent after the action, e.g., <i>Táimid beirthe go maith leis an socrú sin</i> <Tl tlText="We have succeeded well with that arrangement"></Tl>.</>;
  },
};
