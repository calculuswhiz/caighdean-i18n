import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  get "teidealNaCaibidle"() {
    return "The Number";
  },
  get "9-1-title"() {
    return "General";
  },
  get "9-title"() {
    return <>{en_US_Common["Caibidil"]} 9 | {en_US["teidealNaCaibidle"]}</>;
  },
  get "9-1-1-p"() {
    return "The main versions of the number in Irish are the Bare Number, the Cardinal Number, the Personal Number, the Ordinal Number, the Fraction and the Decimal Number.";
  },
  get "9-1-1-a-title"() {
    return "The Bare Number";
  },
  get "9-1-1-a-p"() {
    return <>A number that is not directly followed by a noun is called a bare number. The bare number is used in counting, e.g., <i>a haon</i> <Tl tlText="one" />; <i>a cúig</i> <Tl tlText="five" />; <i>a deich</i> <Tl tlText="ten" /> (see <a href="#sec_9_2">9.2</a>).</>;
  },
  get "9-1-1-b-title"() {
    return "The Cardinal Number";
  },
  get "9-1-1-b-p"() {
    return <>A number that is placed before a noun to express a number of things is called a cardinal number, e.g., <i>trí leabhar</i> <Tl tlText="three books" />; <i>seacht gcupán</i> <Tl tlText="seven cups" />; <i>naoi mbád</i> <Tl tlText="nine boats" /> (see <a href="#sec_9_3">9.3</a>).</>;
  },
  get "9-1-1-c-title"() {
    return "The Personal Number";
  },
  get "9-1-1-c-p"() {
    return <>A number that is used to count people is called a personal number, e.g., <i>beirt bhan</i> <Tl tlText="two women" />; <i>ceathrar daltaí</i> <Tl tlText="four students" />; <i>ochtar feirmeoirí</i> <Tl tlText="eight farmers" /> (see <a href="#sec_9_4">9.4</a>).</>;
  },
  get "9-1-1-d-title"() {
    return "The Ordinal Number";
  },
  get "9-1-1-d-p"() {
    return <>A number indicating the position of an object in a series of objects is called an ordinal number, e.g., <i>an chéad teach</i> <Tl tlText="the first house" />; <i>an dara bean</i> <Tl tlText="the second woman" />; <i>an fichiú haois</i> <Tl tlText="the twentieth century" /> (see <a href="#sec_9_5">9.5</a>).</>;
  },
  get "9-1-1-e-title"() {
    return "The Fraction";
  },
  get "9-1-1-e-p"() {
    return <>A fraction is a numerical quantity that is not an integer (whole number), e.g., <i>ceathrú (1/4)</i>; <i>ceithre chúigiú (4/5)</i>; <i>cúig shéú (5/6)</i> (see <a href="#sec_9_6">9.6</a>).</>;
  },
  get "9-1-1-f-title"() {
    return "The Decimal Number";
  },
  get "9-1-1-f-p"() {
    return <>The decimal number is another way of expressing a non-integer numerical quantity, using the decimal point, e.g., <i>3.1</i>; <i>7.5</i>; <i>18.49</i>; <i>34.023</i> (see <a href="#sec_9_7">9.7</a>).</>;
  },
  get "9-1-2-p"() {
    return "A choice is given between two systems for dealing with cardinal numbers and personal numbers in writing: the Established System and the Simplified System. The Established System is always used with numbers from 1&ndash;19. Either the Established System or the Simplified System may be used with numbers from 20 onwards.";
  },
  get "9-2-title"() {
    return "The Bare Number";
  },
  get "Table9A-caption"() {
    return <>{en_US["TheBareNumbers"]} 0&ndash;19</>;
  },
  get "Table9B-caption"() {
    return <>{en_US["TheBareNumbers"]} 20&ndash;99</>;
  },
  get "Table9C-caption"() {
    return <>{en_US["TheBareNumbers"]} {en_US["TheTens"]}</>;
  },
  get "Table9D-caption"() {
    return <>{en_US["TheBareNumbers"]} 100&ndash;9,999</>;
  },
  get "Table9E-caption"() {
    return <>{en_US["TheBareNumbers"]} 10,000+</>;
  },
  get "9-2-p"() {
    return <>A bare number is a number used in counting when the number or order of things or people is not indicated, e.g., <i>a haon</i> <Tl tlText="one" />; <i>a trí déag</i> <Tl tlText="thirteen" />; <i>a tríocha trí</i> <Tl tlText="thirty-three" />; <i>céad nócha a cúig</i> <Tl tlText="one hundred ninety-five" />; <i>míle, ceithre chéad seachtó a naoi</i> <Tl tlText="one thousand four hundred seventy-nine" />.</>;
  },
  get "9-2-1-title"() {
    return "The Bare Numbers 0&ndash;99";
  },
  get "9-2-1-a-p"() {
    return <>The particle <i>a</i> is placed before numbers from 1&ndash;19, e.g., <i>a haon</i> <Tl tlText="one" />; <i>a dó</i> <Tl tlText="two" />; <i>a trí</i> <Tl tlText="three" />; <i>bus a ceathair</i> <Tl tlText="bus four" />; <i>a hocht déag</i> <Tl tlText="eighteen" />; and for 20&ndash;99 (other than the tens), it is placed before the last number, e.g., <i>fiche a haon</i> <Tl tlText="twenty-one" />; <i>daichead a sé</i> <Tl tlText="forty-six" />; <i>seachtó a hocht</i> <Tl tlText="seventy-eight" />.</>;
  },
  get "9-2-1-b-p"() {
    return <>The words <i>ceathracha</i> and <i>daichead</i> have a similar status. (<b>TL Note</b>: Both of these mean "forty.")</>;
  },
  get "9-2-1-p1"() {
    return "This is how the bare numbers from 0&ndash;19 are written.";
  },
  get "TheBareNumbers"() {
    return "The Bare Numbers";
  },
  get "9-2-1-p2"() {
    return <>Note that the bare number is used for times of day, e.g., <i>a haon a chlog</i> <Tl tlText="one o&rsquo;clock" />; <i>a seacht a chlog</i> <Tl tlText="seven o&rsquo;clock" />; <i>a fiche tar éis a cúig</i> <Tl tlText="twenty past five" />. This is how time is written in the form of figures: <i>5.30 p.m.</i>; <i>4.26 p.m.</i>; <i>13:00</i>; <i>16:47</i>.</>;
  },
  get "9-2-1-p3"() {
    return "This is how the bare numbers from 20&ndash;99 are written. The entire system between 20 and 29 is given in the table and examples are given for the other tens.";
  },
  get "9-2-2-title"() {
    return "The Bare Numbers 100+";
  },
  get "9-2-2-a-p"() {
    return <>The numbers <i>céad</i> <Tl tlText="hundred" />, <i>míle</i> <Tl tlText="thousand" />, <i>milliún</i> <Tl tlText="million" />, <i>billiún</i> <Tl tlText="billion" />, etc. are nouns. Therefore, the cardinal number system is used if the numbers 2&ndash;19 are followed by a series of zeros corresponding to <i>céad</i>, <i>míle</i>, <i>milliún</i>, <i>billiún</i>, etc., e.g., <i>ceithre chéad</i> <Tl tlText="four hundred" />; <i>dhá chéad míle</i> <Tl tlText="two hundred thousand" />; <i>naoi milliún déag</i> <Tl tlText="nineteen million" />; <i>dhá bhilliún</i> <Tl tlText="two billion" />; <i>ocht mbilliún</i> <Tl tlText="eight billion" /> (see <a href="#sec_9_3">9.3</a> The Cardinal Number).</>;
  },
  get "9-2-2-b-p"() {
    return <>No initial mutation is made to the noun after the tens, e.g., <i>fiche míle</i> <Tl tlText="twenty thousand" />; <i>tríocha milliún</i> <Tl tlText="thirty million" />; etc.</>;
  },
  get "TheTens"() {
    return "The Tens";
  },
  get "9-2-3-title"() {
    return "The Bare Numbers 10,000+";
  },
  get "9-2-3-a-p"() {
    return "There are two systems for expressing odd numbers beyond 10,000 &mdash; the cardinal number system and the bare number system.";
  },
  get "9-2-3-b-p"() {
    return <>In the cardinal number system the word order follows the cardinal number rules, e.g., <i>24,000 &mdash; ceithre mhíle is fiche</i> (see <a href="#table9N">table 9N</a>). Under the bare number system, the bare number plus the bare noun is used (<i>céad</i>, <i>míle</i>, etc.) without transformation, e.g., <i>24,000 &mdash; fiche a ceathair míle</i>.</>;
  },
  get "9-2-3-p1"() {
    return <>Note that <i>is</i> is used in the cardinal number system above 10,000 but not in the other bare numbers.</>;
  },
  get "9-2-3-p2"() {
    return "This is how the bare numbers over 10,000 are written.";
  },
  get "Table9E-col2"() {
    return "The Cardinal Number System";
  },
  get "Table9E-col3"() {
    return "The Bare Number System";
  },
  get "9-3-title"() {
    return "The Cardinal Number";
  },
  get "Table9F-caption"() {
    return <>{en_US["TheCardinalNumbers"]} 1&ndash;19</>;
  },
  get "9-3-1-title"() {
    return "The Cardinal Numbers 1&ndash;19";
  },
  get "9-3-1-a-p"() {
    return <>The number added to a noun to express the number of things is called a <i>cardinal number</i>.</>;
  },
  get "9-3-1-b-p"() {
    return <>The noun comes after <i>aon</i>, <i>dhá</i>, <i>trí</i>, <i>ceithre</i>, <i>cúig</i>, <i>sé</i>, <i>seacht</i>, <i>ocht</i>, <i>naoi</i>, <i>deich</i>. (<b>EN</b>: 1&ndash;10 respectively).</>;
  },
  get "9-3-1-c-p"() {
    return <>Note that the cardinal numbers <i>dhá</i> and <i>ceithre</i> are used rather than the bare forms <i>dó</i> and <i>ceathair</i> (<b>EN</b>: <i>two</i> and <i>four</i> respectively).</>;
  },
  get "9-3-1-d-p"() {
    return <>The word <i>amháin</i> must be mentioned after the original <i>aon</i> and the noun. It is not, however, always necessary to mention <i>aon</i>, e.g., <i>aon chapall amháin</i> <Tl tlText="one horse only" />; <i>capall amháin</i> <Tl tlText="one horse" />.</>;
  },
  get "9-3-1-e-p"() {
    return <><i>d</i>, <i>t</i> or <i>s</i> is not lenited after <i>aon</i>, e.g., <i>aon doras amháin</i> <Tl tlText="one door only" />; <i>aon teach amháin</i> <Tl tlText="one house only" />.</>;
  },
  get "9-3-1-f-p"() {
    return <>After the noun comes the word <i>déag</i>, e.g., <i>ceithre leabhar déag</i> <Tl tlText="fourteen books" />. The word <i>déag</i> is lenited if the word directly before it ends in a vowel (but see <a href="#sec_9_3_2_e">9.3.2(e)</a>), except after <i>euro</i>.</>;
  },
  get "9-3-1-p"() {
    return <>Note that if the noun and the qualifier are a separate unit of meaning, e.g., <i>madra rua</i> <Tl tlText="fox" />; <i>cat crainn</i> <Tl tlText="pine marten" />; <i>teach tábhairne</i> <Tl tlText="pub" />; <i>láthair champála</i> <Tl tlText="campsite" /> (rather than an ordinary noun and qualifier, e.g., <i>leabhar dearg</i>) <i>déag</i> is placed after the noun and the qualifier, e.g., <i>ceithre mhadra rua dhéag</i> <Tl tlText="fourteen foxes" />; <i>cúig theach tábhairne dhéag</i> <Tl tlText="fifteen pubs" />; <i>sé chat crainn déag</i> <Tl tlText="sixteen pine martens" />; <i>seacht n&#x2011;iora ghlasa dhéag</i> <Tl tlText="seventeen gray squirrels" />. Any other qualifier is added after <i>déag</i>, e.g., <i>sé chat crainn déag mhóra</i> <Tl tlText="sixteen large pine martens" />; <i>seacht n&#x2011;iora ghlasa dhéag fhiáine</i> <Tl tlText="seventeen gray squirrels" />.</>;
  },
  get "9-3-1-g-p"() {
    return <><i>two</i> is not lenited after the article, <i>aon</i> or <i>céad</i>, e.g., <i>an dá leabhar</i> <Tl tlText="the two books" />; <i>an chéad dá leabhar</i> <Tl tlText="the first two books" />; <i>aon dá leabhar</i> <Tl tlText="one of the two books" />.</>;
  },
  get "9-3-1-h-p"() {
    return <>The cardinal numbers <i>aon</i>, <i>dhá</i> (but see <a href="./chapter8.html#sec_8_3_3">8.3.3</a>), <i>trí</i>, <i>ceithre</i>, <i>cúig</i> and <i>sé</i> lenite the following singular noun, e.g., <i>trí bhád</i> <Tl tlText="three boats" />; but the word <i>cent</i> is not lenited, e.g., <i>trí cent</i> <Tl tlText="three cents" />.</>;
  },
  get "9-3-1-i-p"() {
    return <>The cardinal numbers <i>seacht</i> <Tl tlText="seven" />, <i>ocht</i> <Tl tlText="eight" />, <i>naoi</i> <Tl tlText="nine" /> and <i>deich</i> <Tl tlText="ten" /> eclipse the following singular and plural nouns, e.g., <i>seacht gcnámh</i> <Tl tlText="seven bones" />; <i>deich gcinn</i> <Tl tlText="ten heads" />; but the word <i>euro</i> is not eclipsed, e.g., <i>ocht euro</i> <Tl tlText="eight euros" />; <i>naoi euro</i> <Tl tlText="nine euros" />, and neither is <i>cent</i>, e.g., <i>ocht cent</i> <Tl tlText="eight cents" />; <i>deich cent</i> <Tl tlText="ten cents" />.</>;
  },
  get "TheCardinalNumbers"() {
    return "The Cardinal Numbers";
  },
  get "9-3-2-title"() {
    return "Nouns with a Special Plural Form After the Cardinal Numbers";
  },
  get "9-3-2-p"() {
    return <>There are a number of nouns whose nominative plural form, or a distinct plural form, is used after the cardinal numbers 3&ndash;10 and after numbers ending in 3&ndash;9. Those nouns are shown in the table below. Although <i>é fichid</i> is not a plural version, that version is included in this class.</>;
  },
  get "Table9G-caption"() {
    return "The Cardinal Numbers &mdash; Noun Forms with a Distinct Plural Version";
  },
  get "Table9G-exception"() {
    return <>(<i>except when it means</i> ball beatha <Tl tlText="vital organ" />)</>;
  },
  get "Table9G-babhta"() {
    return <>babhta <Tl tlText="occasion" /></>;
  },
  get "9-3-2-a-p"() {
    return <>The nominative singular form of nouns used with the cardinal numbers 1&ndash;2 and after numbers ending in 1&ndash;2, e.g., <i>aon phingin amháin</i> <Tl tlText="one penny" />; <i>dhá bhliain</i> <Tl tlText="two years" />; <i>aon uair déag</i> <Tl tlText="eleven times" />; <i>dhá cheann is tríocha</i> <Tl tlText="thirty-two" />.</>;
  },
  get "9-3-2-b-p"() {
    return <>The plural form is not lenited after 3&ndash;6 or after numbers ending in 3&ndash;6, e.g., <i>trí seachtaine</i> <Tl tlText="three weeks" />; <i>ceithre cinn déag</i> <Tl tlText="fourteen heads" />.</>;
  },
  get "9-3-2-c-p"() {
    return <>After 3&ndash;6 and after numbers ending in 3&ndash;6 <i>h</i> is placed before the plural form <i>uaire</i>, e.g., <i>cúig huaire</i> <Tl tlText="five times" />.</>;
  },
  get "9-3-2-d-p"() {
    return <>The numbers 7&ndash;10 and numbers ending in 7&ndash;9 eclipse the plural form, e.g., <i>seacht mbliana</i> <Tl tlText="seven years" />; <i>ocht bpingine déag</i> <Tl tlText="eighteen pennies" />.</>;
  },
  get "9-3-2-e-p"() {
    return <><i>déag</i> is not lenited after the plural form, even if it ends in a vowel, e.g., <i>trí bliana déag</i> <Tl tlText="thirteen years" />; <i>ocht n&#x2011;uaire déag</i> <Tl tlText="eighteen times" />.</>;
  },
  get "9-3-2-f-p"() {
    return <>The nominative singular form is used after the tens (other than <i>deich</i>), e.g., <i>fiche bliain</i> <Tl tlText="twenty years" />; <i>tríocha pingin</i> <Tl tlText="thirty pennies" />; <i>ochtó troigh</i> <Tl tlText="eighty feet" />.</>;
  },
  get "Table9H-caption"() {
    return "The Cardinal Numbers &mdash; Examples of Noun Forms with Distinct Plural Forms";
  },
  get "Table9H-header"() {
    return "The Cardinal Numbers &mdash; Distinct Plural Forms";
  },
  get "9-3-3-title"() {
    return "The Adjective with the Cardinal Numbers 1&ndash;19";
  },
  get "9-3-3-a-p"() {
    return "Following for the cardinal number 1, the adjective accompanying the noun is in the singular and is of the same gender as the noun.";
  },
  get "9-3-3-b-p"() {
    return "Following the other numbers (2&ndash;19), the adjective is in the plural and is omitted.";
  },
  get "9-3-3-c-p"() {
    return <>The word <i>déag</i> is placed before an adjective or adjectives accompanying the noun (but see <a href="#sec_9_3_1_f">9.3.1(f)</a>).</>;
  },
  get "Table9I-caption"() {
    return "The Cardinal Numbers 1&ndash;19 &mdash; Form of the Adjective";
  },
  get "Table9I-header"() {
    return "The Adjective with the Cardinal Numbers";
  },
  get "9-3-4-title"() {
    return "Form of the Adjective with the Nouns that have a particular Plural Version";
  },
  get "9-3-4-a-p"() {
    return "Following the cardinal number 1, the adjective accompanying the noun is in the singular, and is of the same gender as the noun.";
  },
  get "9-3-4-b-p"() {
    return <>The adjective in the plural is placed after the plural form but the adjective is not lenited if that plural form ends in a vowel. The adjective is lenited after <i>cinn</i> and <i>fichid</i>.</>;
  },
  get "Table9J-caption"() {
    return "The Cardinal Numbers 1&ndash;19 &mdash; Adjective Form with Nouns that have a particular Plural Version";
  },
  get "Table9J-header"() {
    return "The Adjective with the Nouns that have a particular Plural Version";
  },
  get "9-3-5-title"() {
    return "The Article with the Cardinal Numbers 1&ndash;19";
  },
  get "9-3-5-a-p"() {
    return "Singular form of the article";
  },
  get "9-3-5-a-i-p"() {
    return "The singular form of the article is placed before the cardinal number 1, before numbers ending in 1, and before plurals of 10 from 20 onwards.";
  },
  get "9-3-5-a-ii-p"() {
    return <><i>t&#x2011;</i> is placed before the cardinal number <i>aon</i> after the article, e.g., <i>an t&#x2011;aon leabhar amháin</i> <Tl tlText="the one book" />; <i>an t&#x2011;aon bhileog amháin</i> <Tl tlText="the one sheet" />. The <i>t&#x2011;</i> is removed after a preposition, e.g., <i>san aon leabhar amháin</i> <Tl tlText="in the one book" />; <i>tríd an aon fhuinneog amháin</i> <Tl tlText="through the one window" />.</>;
  },
  get "9-3-5-a-iii-p"() {
    return <>The singular form of the article placed before the cardinal number <i>dhá</i> also but the cardinal number becomes <i>dá</i>, e.g., <i>an dá chapall</i> <Tl tlText="the two horses" />.</>;
  },
  get "9-3-5-b-p"() {
    return "Plural form of the article";
  },
  get "9-3-5-b-i-p"() {
    return "It is the plural form of the article that is placed before the cardinal numbers 3&ndash;9 and 13&ndash;19.";
  },
  get "9-3-5-b-ii-p"() {
    return <><i>h</i> is placed before a cardinal number beginning with a vowel after the plural form of the article, e.g., <i>na hocht gcapall</i> <Tl tlText="the eight horses" />.</>;
  },
  get "9-3-5-c-p"() {
    return <>The article does not affect adjectives following cardinal numbers and nouns, e.g., <i>an dá chapall mhóra</i> <Tl tlText="the two big horses" />.</>;
  },
  get "Table9K-caption"() {
    return "The Cardinal Numbers 1&ndash;19 &mdash; The Article";
  },
  get "Table9K-header"() {
    return "The Article with the Cardinal Numbers";
  },
  get "9-3-5-note"() {
    return <>Note that for nouns that use a particular plural form after the cardinal numbers, the same pattern is followed, e.g., <i>an t&#x2011;aon bhliain amháin</i> <Tl tlText="the one year" />; <i>an dá cheann mhóra</i> <Tl tlText="the two big heads" />; <i>na hocht dtroithe déag</i> <Tl tlText="the eighteen feet" />; etc.</>;
  },
  get "9-3-6-title"() {
    return "The Cardinal Numbers 1&ndash;19 &mdash; The Genitive Case without the Article";
  },
  get "9-3-6-a-p"() {
    return <>Nouns and adjectives change form in the genitive after <i>aon</i>, e.g., <i>ualach aon chapaill mhóir amháin</i> <Tl tlText="one big horse&rsquo;s load" />; <i>fráma aon fhuinneoige báine amháin</i> <Tl tlText="one white window frame" />; except when <i>déag</i> follows, e.g., <i>ualach aon chapall déag mhóra</i> <Tl tlText="eighteen big horses&rsquo; load" />; <i>fráma aon fhuinneog déag bhána</i> <Tl tlText="eighteen white window frames" />.</>;
  },
  get "9-3-6-b-p"() {
    return <>For 2&ndash;19, the form of the noun or the cardinal number in the genitive does not change, e.g., <i>fad dhá mhéadar</i> <Tl tlText="two meters long" />; <i>costas trí fhuinneog</i> <Tl tlText="cost of three windows" />; <i>úinéir seacht ngabhar</i> <Tl tlText="owner of seven goats" />; <i>tréimhse naoi n&#x2011;oíche</i> <Tl tlText="period of nine nights" />; <i>tiománaithe trí thacsaí dhéag</i> <Tl tlText="drivers of thirteen taxis" />; but the adjective is put in the plural, and it is lenited, e.g., <i>costas trí fhuinneog dheasa</i> <Tl tlText="cost of three nice windows" />; <i>úinéir seacht ngabhar chrosta</i> <Tl tlText="owner of seven cross goats" />; <i>tiománaithe trí thacsaí dhéag chostasacha</i> <Tl tlText="drivers of thirteen costly taxis" />; unless it is a distinct plural form ending in a vowel or a broad consonant, e.g., <i>trí bliana crua</i> <Tl tlText="three hard years" />.</>;
  },
  get "9-3-7-title"() {
    return "The Cardinal Numbers 1&ndash;19 &mdash; The Genitive Case with the Article";
  },
  get "9-3-7-a-p"() {
    return "A change of form on a noun and an adjective in the genitive after any place where the article is there is subject to the following points.";
  },
  get "9-3-7-a-i-p"() {
    return <>Subject to the gender of the noun, use <i>an</i> or <i>na</i> in the genitive case before the ordinal number <i>aon</i> when <i>déag</i> does not follow it, e.g., <i>ualach an aon chapaill amháin</i> <Tl tlText="the load of the one horse" />; <i>costas na haon fhuinneoige amháin</i> <Tl tlText="the cost of the one window" />; but <i>ábhar an aon chuntas déag amháin</i> <Tl tlText="the content of the one account of ten" />; <i>ag ceartú an aon aiste dhéag shuimiúla</i> <Tl tlText="correcting the one essay of ten significant" />.</>;
  },
  get "9-3-7-a-ii-p"() {
    return <>If the noun is feminine, an <i>h</i> must be placed before the cardinal number <i>aon</i>, e.g., <i>i gcaitheamh na haon oíche amháin sin</i> <Tl tlText="in the course of that one night" />.</>;
  },
  get "9-3-7-a-iii-p"() {
    return <>If the noun is masculine, the <i>t&#x2011;</i> is removed before the cardinal number <i>aon</i>, e.g., <i>ar feadh an aon lae amháin sin</i> <Tl tlText="over the course of that one day" />.</>;
  },
  get "9-3-7-b-p"() {
    return <>Change <i>dhá</i> to <i>dá</i> after the singular article (<i>an</i>, <i>don</i>, <i>sa</i>, etc.).</>;
  },
  get "9-3-7-c-p"() {
    return <>For the cardinal numbers <i>trí</i> to <i>deich</i>, the cardinal numbers (<i>trí</i>, <i>ceithre</i>, <i>cúig</i>, <i>ocht</i>, <i>deich</i>) are eclipsed in the genitive case after the article (<i>na</i>).</>;
  },
  get "9-3-7-d-p"() {
    return <>The same rules apply to nouns with a particular plural form and the adjectives accompanying them (see <a href="#sec_9_3_4">9.3.4</a>) as applied in the nominative case, e.g., <i>tréimhse na sé bliana fada</i> <Tl tlText="the period of six long years" />; <i>deireadh na naoi seachtaine déag fada</i> <Tl tlText="the end of the nineteen long weeks" />; <i>Cogadh na Naoi mBliana</i> <Tl tlText="the Nine Years&rsquo; War" />; <i>costas na dtrí troithe cearnacha eile</i> <Tl tlText="the cost of the three other square feet" />; <i>úinéir an dá cheann bhána</i> <Tl tlText="the owner of the two white ones" />; <i>praghas na dtrí cinn mhóra</i> <Tl tlText="the price of the three big ones" />.</>;
  },
  get "Table9L-caption"() {
    return "The Cardinal Numbers 1&ndash;19 &mdash; The Genitive Case with the Article";
  },
  get "Table9L-header"() {
    return "Genitive Case with the Article";
  },
  get "9-3-8-title"() {
    return "The Cardinal Numbers written in Figures 1&ndash;19";
  },
  get "9-3-8-p"() {
    return <>The rules for writing the cardinal numbers 1&ndash;19 in figures are the same as those for writing them in words, e.g., <i>1 chapall mór</i> <Tl tlText="1 big horse" />; <i>3 bhád bheaga</i> <Tl tlText="3 small boats" />; <i>7 n&#x2011;oíche dhorcha</i> <Tl tlText="7 dark nights" />; <i>13 seachtaine fuara</i> <Tl tlText="13 cold weeks" />; <i>17 ngluaisteán shaora</i> <Tl tlText="17 free cars" />; <i>19 mbliana fada</i> <Tl tlText="19 long years" />.</>;
  },
  get "9-3-9-title"() {
    return "The Cardinal Numbers 20+ &mdash; The Tens";
  },
  get "9-3-9-a-p"() {
    return "The nominative singular form of the noun is placed after the tens. No initial mutation is made to the noun.";
  },
  get "9-3-9-b-p"() {
    return "If there is an adjective, it agrees with the gender of the noun.";
  },
  get "9-3-9-c-p"() {
    return <>The singular form of the article is placed before the tens, e.g., <i>an fiche teach nua</i> <Tl tlText="the twenty new houses" />; <i>an seasca duine cáiliúil</i> <Tl tlText="the sixty famous people" />.</>;
  },
  get "9-3-9-d-p"() {
    return "In the genitive case, if the article is not present, no change of form is made to the noun or to the cardinal number.";
  },
  get "9-3-9-e-p"() {
    return <>If the article is present in the genitive case, the article affects the initial mutation of the number as it would on a masculine noun, but no initial mutation is made on <i>f</i> or <i>s</i>.</>;
  },
  get "Table9M-caption"() {
    return "The Cardinal Numbers &mdash; Nominative and Genitive Case of the Tens";
  },
  get "TheNominativeCase"() {
    return "Nominative Case";
  },
  get "TheGenitiveCase"() {
    return "Genitive Case";
  },
  get "WithoutArticle"() {
    return "without the Article";
  },
  get "WithArticle"() {
    return "with the Article";
  },
  get "9-3-9-note-p1"() {
    return <>When the plural form of the tens is used in the genitive plural, the noun following it is also in the plural, e.g., <i>na céadta daoine</i> <Tl tlText="the hundreds of people" />; <i>na mílte dathanna</i> <Tl tlText="the thousands of colors" />.</>;
  },
  get "9-3-9-note-p2"() {
    return <>The genitive plural of the singular nouns also follows <i>dosaen</i> (dozen) and <i>scór</i> (score), e.g., <i>dosaen amhrán</i> <Tl tlText="a dozen songs" />; <i>scór daoine</i> <Tl tlText="a score of people" />.</>;
  },
  get "9-3-10-title"() {
    return "The other Cardinal Numbers 20+";
  },
  get "9-3-10-a-p"() {
    return <>There are two systems for the cardinal numbers above 20 (other than the tens mentioned earlier, see <a href="#sec_9_3_9">9.3.9</a>): the Established System and the Simplified System. Both systems apply to the cardinal numbers whether written in words or in figures. Both systems are equivalent and acceptable.</>;
  },
  get "TheEstablishedSystem"() {
    return "The Established System";
  },
  get "TheSimplifiedSystem"() {
    return "The Simplified System";
  },
  get "9-3-10-b-i-p"() {
    return "The noun is in the singular form or in its particular plural form and the appropriate initial mutation is made to the noun.";
  },
  get "9-3-10-b-ii-p"() {
    return <>After numbers ending in 1, the adjective agrees with the gender of the noun. For numbers ending in 2&ndash;9, the adjective is in the plural and is lenited (but see <a href="#sec_9_3_4">9.3.4</a>).</>;
  },
  get "9-3-10-c-i-p"() {
    return "The noun is always in the singular, even if it is a noun that has a particular plural form, and no initial mutation is made to it. The adjective is always in the singular and is lenited according to the gender of the noun.";
  },
  get "9-3-10-c-ii-p"() {
    return <>For numbers ending in 2 or 4, the bare numbers <i>dó</i> and <i>ceathair</i> are used instead of <i>dhá</i> and <i>ceithre</i>.</>;
  },
  get "9-3-10-d-p"() {
    return <>If multiples of 10 are involved, there is only one form, e.g., <i>céad is fiche bád</i> <Tl tlText="one hundred and twenty boats" />.</>;
  },
  get "9-3-10-e-p"() {
    return <>Regarding the article, the pattern used with the numbers 1&ndash;19 is followed with the numbers above 20, e.g., <i>an t&#x2011;aon leabhar is fiche</i> <Tl tlText="the twenty-one books" />; <i>an dá bhord is tríocha</i> <Tl tlText="the thirty-two tables" />; <i>na cúig pheann is seasca</i> <Tl tlText="the sixty-five pens" /> (see <a href="#sec_9_3_5">9.3.5</a>).</>;
  },
  get "Table9N-caption"() {
    return "The Cardinal Numbers 21&ndash;99 &mdash; The Established System and the Simplified System";
  },
  get "9-3-10-note-p1"() {
    return <>When an adjective accompanies a cardinal number, the plural form of the noun <i>ceann</i> (<i>cinn</i>) can be used along with the preposition <i>de</i>, e.g., <i>seacht gcinn déag d&rsquo;oícheanta ciúine</i> <Tl tlText="seventeen quiet nights" />; <i>trí cinn is tríocha de bháid mhóra</i> <Tl tlText="thirty-three big boats" />.</>;
  },
  get "9-3-10-note-p2"() {
    return <>Another option is the bare number plus the preposition <i>de</i> plus the plural form of the noun and the accompanying adjective, e.g., <i>a haon déag de bhlianta fada</i> <Tl tlText="the eleven long years" />; <i>tríocha a trí de bháid mhóra</i> <Tl tlText="the thirty-three big boats" />.</>;
  },
  get "9-3-11-title"() {
    return "The Cardinal Numbers 100+";
  },
  get "9-3-11-p1"() {
    return <>In the Established System, the reverse order is used below 100 for numbers above 100, e.g., <i>céad fiche is aon chapall amháin</i> <Tl tlText="one hundred and twenty-one horses" />; <i>dhá mhíle, trí chéad is ceithre chapall</i> <Tl tlText="two thousand, three hundred and four horses" />; etc.</>;
  },
  get "9-3-11-p2"() {
    return <>The other rules are the same as the rules for the cardinal numbers mentioned in <a href="#sec_9_3_10">9.3.10</a>.</>;
  },
  get "Table9O-caption"() {
    return "The Cardinal Numbers 100+ &mdash; The Established System and the Simplified System";
  },
  get "9-3-12-title"() {
    return "The Cardinal Numbers written in Figures 20+";
  },
  get "9-3-12-p"() {
    return <>The rules of the Established System and the Simplified System, respectively, (see <a href="#sec_9_3_10">9.3.10</a>) are applied when numbers above 20 are written in figures.</>;
  },
  get "Table9P-caption"() {
    return "The Cardinal Numbers 20+ in Figures &mdash; The Established System and the Simplified System";
  },
  get "9-4-title"() {
    return "The Personal Number";
  },
  get "9-4-p"() {
    return "The personal number is a number that indicates the number of people.";
  },
  get "9-4-1-title"() {
    return "The Use of Personal Numbers";
  },
  get "9-4-1-a-p"() {
    return "The personal numbers (2&ndash;10 and 12) are used to count people.";
  },
  get "9-4-1-b-p"() {
    return <>The usual system of numbers is used to count <i>aon duine dhéag</i> or a number of people greater than <i>dháréag</i> <Tl tlText="twelve" />, e.g., <i>aon duine dhéag</i> <Tl tlText="eleven people" />; <i>trí dhuine dhéag</i> <Tl tlText="thirteen people" />; <i>ceithre dhuine is daichead</i> <Tl tlText="forty-four people" />.</>;
  },
  get "Table9Q-caption"() {
    return "The Personal Numbers";
  },
  get "Table9Q-header"() {
    return "The Personal Numbers";
  },
  get "9-4-2-title"() {
    return "The Bare Use of Personal Numbers";
  },
  get "9-4-2-a-title"() {
    return "The bare personal number";
  },
  get "9-4-2-a-i-p"() {
    return <>The personal number can be used bare (without a noun following) to count the number of people, e.g., <i>An bhfaca tú an bheirt?</i> <Tl tlText="Did you see the two of them?" />; <i>Gabhadh seachtar</i> <Tl tlText="Seven were captured" />.</>;
  },
  get "9-4-2-a-ii-p"() {
    return <>The bare personal number in the genitive is treated as a common noun, e.g., <i>cor beirte</i> <Tl tlText="a pair of" />; <i>col ceathrair</i> <Tl tlText="a group of four" />; <i>col seisir</i> <Tl tlText="a group of six" />.</>;
  },
  get "9-4-2-b-title"() {
    return "The article before the bare personal number";
  },
  get "9-4-2-b-i-p"() {
    return <>All personal numbers except <i>beirt</i> are masculine nouns, e.g., <i>an bheirt</i> <Tl tlText="the two" />; <i>an ceathrar</i> <Tl tlText="the four" />; <i>an t&#x2011;ochtar</i> <Tl tlText="the eight" />.</>;
  },
  get "9-4-2-b-ii-p"() {
    return <><i>Dháréag</i> is not lenited after the article, <i>aon</i> or <i>céad</i>, e.g., <i>bhí an dáréag ann</i> <Tl tlText="there were twelve" />; <i>gach aon dáréag acu</i> <Tl tlText="each of them had twelve" />; <i>an chéad dáréag a cháiligh</i> <Tl tlText="the first twelve qualified" />.</>;
  },
  get "9-4-2-b-iii-p"() {
    return <>The bare personal number in the genitive is treated as a common noun when preceded by the article, e.g., <i>cótaí an tseisir</i> <Tl tlText="the coats of the six" />; <i>ticéid an ochtair</i> <Tl tlText="the tickets of the eight" />; <i>gluaisteán na beirte</i> <Tl tlText="the car of the two" />.</>;
  },
  get "Table9R-caption"() {
    return "The Bare Personal Numbers &mdash; The Nominative and Genitive Cases with the Article";
  },
  get "TheNumber"() {
    return "Number";
  },
  get "9-4-2-c-title"() {
    return <>The adjective with the bare personal number &mdash; <i>Beirt</i> <Tl tlText="two (people)" /></>;
  },
  get "9-4-2-c-i-p"() {
    return <>If an adjective qualifies the word <i>beirt</i> and it is in the nominative*, the adjective is in the nominative plural and lenited, e.g., <i>an bheirt cháiliúla</i> <Tl tlText="the two famous" />; <i>beirt mhisniúla</i> <Tl tlText="two brave" />; <i>don bheirt óga</i> <Tl tlText="to the two young" />.</>;
  },
  get "9-4-2-c-ii-p"() {
    return <>If the word <i>beirt</i>, when following the article and in the genitive, is qualified by an adjective that follows it, the adjective is in the feminine singular genitive, e.g., <i>tuairimí na beirte díograisí</i> <Tl tlText="the opinions of the two enthusiastic" />; <i>nótaí na beirte misniúla</i> <Tl tlText="the notes of the two brave" />; <i>iarrachtaí na beirte cróga</i> <Tl tlText="the efforts of the two courageous" />.</>;
  },
  get "9-4-2-c-iii-p"() {
    return <>If the word <i>beirt</i>, when in the genitive but without the article preceding it, is qualified by an adjective that follows it, and it is following and subject to another noun, the adjective is in the plural following <i>beirt</i> and lenited (and the genitive change does not apply to the word <i>beirt</i> but it is lenited), e.g., <i>moltaí bheirt mhisniúla</i> <Tl tlText="the praises of two brave" />; <i>tuairimí bheirt cháiliúla</i> <Tl tlText="the opinions of two famous" />; <i>obair bheirt acadúla</i> <Tl tlText="the work of two academic" />.</>;
  },
  get "9-4-2-c-iv-p"() {
    return <>If the word <i>beirt</i>, when in the genitive but without the article preceding it, is qualified by an adjective that follows it, and it is subject to a compound preposition or a verbal noun, the adjective is in the plural following <i>beirt</i> and lenited (and no change is made to the word <i>beirt</i> either), e.g., <i>le haghaidh beirt inniúla</i> <Tl tlText="for two capable" />; <i>ag moladh beirt mhaithe</i> <Tl tlText="praising two good" />.</>;
  },
  get "9-4-2-d-title"() {
    return <>The adjective with the bare personal number &mdash; <i>Triúr</i> to <i>dháréag</i></>;
  },
  get "9-4-2-d-i-p"() {
    return <>If the personal numbers <i>triúr</i> to <i>dháréag</i> (but see <a href="#sec_9_4_1_b">9.4.1(b)</a>), and they are in the nominative*, are being qualified by an adjective that follows them, the adjective is in the nominative singular without any lenition, e.g., <i>triúr mór</i> <Tl tlText="three big" />; <i>ceathrar ard</i> <Tl tlText="four tall" />; <i>an cúigear saibhir</i> <Tl tlText="the five rich" />; <i>don dáréag clúiteach</i> <Tl tlText="to the twelve famous" />.</>;
  },
  get "9-4-2-d-ii-p"() {
    return <>If the personal numbers <i>triúr</i> to <i>dháréag</i> (but see <a href="#sec_9_4_1_b">9.4.1(b)</a>), and they are in the genitive, are being qualified by an adjective that follows them, the usual rules regarding adjectives in the genitive case that apply to nouns are applied to the adjectives accompanying them, e.g., <i>éadaí an cheathrair bhig</i> <Tl tlText="the clothes of the four small" />; <i>meitheal ochtair dhíograisigh</i> <Tl tlText="the effort of the eight diligent" />; <i>airgead an dáréag chlúitigh</i> <Tl tlText="the money of the twelve famous" /> (see <a href="./chapter4.html">Chapter 4</a>).</>;
  },
  get "OtherCasesFootnote"() {
    return "Or in the vocative, dative or accusative.";
  },
  get "9-4-3-title"() {
    return "Nouns with Personal Numbers";
  },
  get "9-4-3-a-title"() {
    return "The form of the personal number and the form of the noun following it";
  },
  get "9-4-3-a-i-p"() {
    return <>If the word <i>beirt</i>, when in the nominative*, is being qualified by a noun that follows it, the noun is in the genitive plural and lenited (except for a noun beginning with <i>d</i>, <i>t</i> or <i>s</i>), e.g., <i>beirt chaptaen</i> <Tl tlText="two captains" />; <i>beirt chumadóirí</i> <Tl tlText="two composers" />; <i>beirt drumadóirí</i> <Tl tlText="two drummers" />; <i>ag beirt bhan</i> <Tl tlText="with two women" />.</>;
  },
  get "9-4-3-a-ii-p"() {
    return <>If the word <i>beirt</i>, when in the genitive without the article, is being qualified by a noun that follows it, and it is following and subject to another noun, the genitive change does not apply to the word <i>beirt</i> but it is lenited and the noun is in the genitive plural and lenited (except for a noun beginning with <i>d</i>, <i>t</i> or <i>s</i>), e.g., <i>moltaí bheirt chumadóirí</i> <Tl tlText="the praises of two composers" />; <i>tuairimí bheirt chaptaen</i> <Tl tlText="the opinions of two captains" />; <i>obair bheirt saineolaithe</i> <Tl tlText="the work of two experts" />.</>;
  },
  get "9-4-3-a-iii-p"() {
    return <>If the word <i>beirt</i>, when in the genitive but without the article preceding it, is being qualified by a noun that follows it, and it is following and subject to a compound preposition or a verbal noun, no change is made to the word <i>beirt</i> and the noun is in the genitive plural and lenited (except for a noun beginning with <i>d</i>, <i>t</i> or <i>s</i>), e.g., <i>le haghaidh beirt mholtóirí</i> <Tl tlText="for two evaluators" />; <i>ag moladh beirt saighdiúirí</i> <Tl tlText="praising two soldiers" />.</>;
  },
  get "9-4-3-a-iv-p"() {
    return <>The genitive plural of the noun follows the personal numbers from <i>triúr</i> to <i>dháréag</i> (but see <a href="#sec_9_4_1_b">9.4.1(b)</a>) when counting people, e.g., <i>triúr bádóirí</i> <Tl tlText="three boatmen" />; <i>ceathrar múinteoirí</i> <Tl tlText="four teachers" />.</>;
  },
  get "9-4-3-a-v-p"() {
    return <>The genitive change does not apply to the personal numbers from <i>triúr</i> to <i>dháréag</i> (but see <a href="#sec_9_4_1_b">9.4.1(b)</a>) if there is a noun following, e.g., <i>athair ceathrar mac</i> <Tl tlText="father of four sons" />; <i>máthair cúigear iníonacha</i> <Tl tlText="mother of five daughters" />; <i>geansaithe dháréag peileadóirí</i> <Tl tlText="sweaters of twelve footballers" />.</>;
  },
  get "Table9S-caption"() {
    return "The Personal Numbers &mdash; The Form of the Noun following the Personal Number";
  },
  get "Table9S-footnote"() {
    return <>Note that 11 is treated as it is in the cardinal number system, and that the noun is not put in the genitive (see <a href="#sec_9_3_6_a">9.3.6(a)</a>).</>;
  },
  get "9-4-3-b-title"() {
    return "The article before a personal number with a following noun";
  },
  get "9-4-3-b-i-p"() {
    return <>The singular form of the article is used before the personal numbers. They are all masculine except for <i>beirt</i>.</>;
  },
  get "9-4-3-b-ii-p"() {
    return <><i>Dháréag</i> is not lenited after the article, <i>aon</i> or <i>céad</i>, e.g., <i>an Dáréag Aspal</i> <Tl tlText="the twelve apostles" />; <i>gach aon dáréag scoláirí</i> <Tl tlText="each of the twelve students" />; <i>an chéad dáréag múinteoirí a cháiligh</i> <Tl tlText="the first twelve teachers who qualified" />.</>;
  },
  get "9-4-3-b-iii-p"() {
    return <>If the word <i>beirt</i>, when in the genitive following the article, is being qualified by a noun that follows it, the noun is in the genitive plural and is not lenited (but the genitive change does apply to the word <i>beirt</i>), e.g., <i>tuairimí na beirte múinteoirí</i> <Tl tlText="opinions of the two teachers" />; <i>nótaí na beirte saineolaithe</i> <Tl tlText="notes of the two experts" />; <i>tuairiscí na beirte comhfhreagraithe</i> <Tl tlText="reports of the two correspondents" />; <i>tithe na beirte deartháireacha</i> <Tl tlText="houses of the two brothers" />.</>;
  },
  get "9-4-3-b-iv-p"() {
    return <>The genitive form change does not apply to the personal numbers from <i>triúr</i> to <i>dháréag</i> nor to the noun following, but the article affects the initial mutations of the personal numbers as it would affect the genitive of any other singular noun, e.g., <i>cótaí an cheathrar daltaí</i> <Tl tlText="coats of the four students" />; <i>oifig an tseachtar tréidlianna</i> <Tl tlText="office of the seven treasurers" />; <i>Scoil an tSeachtar Laoch</i> <Tl tlText="School of the Seven Heroes" />.</>;
  },
  get "Table9T-caption"() {
    return "The Personal Numbers &mdash; The Article before a Personal Number with a following Noun";
  },
  get "Table9T-footnote"() {
    return <>Note that 11 is treated as it is in the cardinal number system, and that the noun is not put in the genitive (see <a href="#sec_9_3_7_a_i">9.3.7(a)(i)</a>).</>;
  },
  get "9-4-3-c-title"() {
    return "The adjective with a noun following a personal number";
  },
  get "9-4-3-c-i-p"() {
    return <>Following the personal number <i>beirt</i>, the adjective is in the nominative plural and lenited, e.g., <i>beirt bhan cháiliúla</i> <Tl tlText="two famous women" />; <i>beirt ghirseach chruthaitheacha</i> <Tl tlText="two creative girls" />; <i>beirt amhránaithe cháiliúla</i> <Tl tlText="two famous singers" />; <i>beirt mhúinteoirí shealadacha</i> <Tl tlText="two temporary teachers" />.</>;
  },
  get "9-4-3-c-ii-p"() {
    return <>If the word <i>beirt</i>, when in the genitive but without the article preceding it, is being qualified by a <i>noun</i> + <i>adjective</i> that follows it, and it is following and subject to another noun, the adjective being qualified is in the plural and lenited, e.g., <i>moltaí bheirt léachtóirí acadúla</i> <Tl tlText="recommendations of two academic lecturers" />; <i>tuairimí bheirt iriseoirí sheanbhunaithe</i> <Tl tlText="opinions of two established journalists" />; <i>saothar bheirt ghramadóirí chliste</i> <Tl tlText="work of two clever grammarians" />.</>;
  },
  get "9-4-3-c-iii-p"() {
    return <>If the word <i>beirt</i>, when in the genitive but without the article preceding it, is being qualified by a <i>noun</i> + <i>adjective</i> that follows it, and it is following and subject to a compound preposition or a verbal noun, the adjective being qualified is in the plural and lenited, e.g., <i>le haghaidh beirt mholtóirí dheasa</i> <Tl tlText="for two nice reviewers" />; <i>ag moladh beirt chumadóirí shamhlaíocha</i> <Tl tlText="praising two imaginative composers" />.</>;
  },
  get "9-4-3-c-iv-p"() {
    return <>Following the personal numbers <i>triúr</i> to <i>dháréag</i> (but see <a href="#sec_9_4_1_b">9.4.1(b)</a>), the adjective accompanying the noun is in the genitive plural, e.g., <i>triúr scoláirí díograiseacha</i> <Tl tlText="three diligent students" />; <i>ceathrar girseach éirimiúil</i> <Tl tlText="four clever girls" />; <i>bád an triúr bádóirí tuirseacha</i> <Tl tlText="the boat of the three tired boatmen" />; <i>airgead an deichniúr ban bríomhar</i> <Tl tlText="the money of the ten lively women" />. Examples with and without the article are shown in the table below.</>;
  },
  get "Table9U-caption"() {
    return "The Personal Numbers &mdash; The Adjective with a Noun following a Personal Number";
  },
  get "Table9U-footnote"() {
    return <>Note that 11 is treated as it is in the cardinal number system, and that the noun is not put in the genitive (see <a href="#sec_9_3_6_a">9.3.6(a)</a> and <a href="#sec_9_3_7_a_i">9.3.7(a)(i)</a>).</>;
  },
  get "9-4-4-title"() {
    return "The Personal Numbers written in Figures";
  },
  get "9-4-4-a-p"() {
    return <>It is recommended to write the personal numbers from 1&ndash;12 in words rather than figures. If they are written in figures, they are treated as cardinal numbers, e.g., <i>2 bhean bheaga</i> <Tl tlText="2 small women" />, <i>4 bhádóir cháiliúla</i> <Tl tlText="4 famous boatmen" />, <i>7 bhfeirmeoir shaibhre</i> <Tl tlText="7 wealthy farmers" /> (see <a href="#sec_9_3_8">9.3.8</a>).</>;
  },
  get "9-4-4-b-p"() {
    return <>The cardinal number system is used to count numbers of people above <i>dháréag</i>. See <a href="#sec_9_3_1">9.3.1</a> for a description of the cardinal number system from 1&ndash;19, e.g., <i>trí bhean déag</i> <Tl tlText="thirteen women" />; <i>ceithre ghirseach déag ghalánta</i> <Tl tlText="fourteen elegant girls" />; <i>17 mbádóir</i> <Tl tlText="17 boatmen" />; <i>19 bhfear ocracha</i> <Tl tlText="19 old men" />; and see <a href="#sec_9_3_10">9.3.10</a> for a description of the cardinal number system over 20, e.g., <i>trí bhean arda is caoga</i> <Tl tlText="fifty-three tall women" />; <i>49 ngirseach ghalánta</i> <Tl tlText="49 elegant girls" />.</>;
  },
  get "9-4-5-title"() {
    return "The Personal Numbers &mdash; The Simplified System";
  },
  get "9-4-5-p"() {
    return <>A simplified system can be used with the cardinal numbers and the personal numbers above twenty. See <a href="#sec_9_3_10_c">9.3.10(c)</a> for a description of that Simplified System, e.g., <i>fiche a cúig fear mór</i> <Tl tlText="twenty-five big men" />; <i>tríocha a sé bean shaibhir</i> <Tl tlText="thirty-six wealthy women" />; <i>46 bádóir cumasach</i> <Tl tlText="46 talented boatmen" />; <i>56 girseach chróga</i> <Tl tlText="56 brave girls" />.</>;
  },
  get "9-5-title"() {
    return "The Ordinal Number";
  },
  get "9-5-p"() {
    return "The ordinal number indicates the position of a thing or person in a series.";
  },
  get "9-5-1-title"() {
    return "The Ordinal Number 1";
  },
  get "9-5-1-a-p"() {
    return <>The ordinal number <i>céad</i> (<i>an chéad</i>) (<b>EN</b>: <i>first</i>, (<i>the first</i>)) can be used with a singular or plural noun. The singular article is used when a singular noun is following, e.g., <i>an chéad chaibidil</i> <Tl tlText="the first chapter" />, and the plural article when a plural noun is following, e.g., <i>na chéad chaibidlí</i> <Tl tlText="the first chapters" />.</>;
  },
  get "9-5-1-b-p"() {
    return <>The ordinal number <i>céad</i> is lenited after the article, e.g., <i>an chéad leabhar</i> <Tl tlText="the first book" />; <i>na chéad rialacha</i> <Tl tlText="the first rules" />, but it is not lenited:</>;
  },
  get "9-5-1-b-i-p"() {
    return <>in the contexts mentioned in <a href="./chapter1.html">Chapter 1</a> where there is eclipsis after the article in the dative case, e.g., <i>ar an gcéad duine</i> <Tl tlText="on the first person" />; <i>leis an gcéad cheadúnas</i> <Tl tlText="with the first license" />;</>;
  },
  get "9-5-1-b-ii-p"() {
    return <>
      when <i>céad</i> is used as a prefix in a masculine noun or in a plural noun, e.g., <i> céadainm</i>, <i>an céadainm</i> (<b>EN</b>: <i>first name, the first name</i>); <i> Céad-Aire</i>, <i>an Céad-Aire</i> (<b>EN</b>: <i>First Minister, the First Minister</i>); <i> céadonóracha</i>, <i>na céadonóracha</i> (<b>EN</b>: <i>first honors, the first honors</i>); (but <i>céadghairm</i>, <i>an chéadghairm</i> (<b>EN</b>: <i>first call, the first call</i>); <i>céadsearc</i>, <i>an chéadsearc</i> (<b>EN</b>: <i>first love, the first love</i>); according to the usual rules of the feminine noun); or as a prefix in a verb, e.g., <i>céadbhlaisim</i> <Tl tlText="I taste first" />, <i>céadbhlaisfidh sé</i> <Tl tlText="he will taste first" /> (but <i>ón uair a chéadbhlais mé é</i> <Tl tlText="from the time I first tasted it" />, according to the usual rules of verbs in the past tense, indicative mood);
    </>;
  },
  get "9-5-1-b-iii-p"() {
    return <>following the possessive adjectives (feminine, third person singular), e.g., <i>a céad cheolchoirm</i> <Tl tlText="her first concert" /> and <i>ár</i>, <i>bhur</i>, <i>a</i> (third person plural), e.g., <i>ár gcéad teach</i> <Tl tlText="our first house" />; <i>bhur gcéad charr</i> <Tl tlText="your first car" />; <i>a gcéad mhac</i> <Tl tlText="their first son" />.</>;
  },
  get "9-5-1-c-p"() {
    return <>The ordinal number <i>céad</i> causes lenition of the noun or adjective it governs in all cases, e.g., <i>an chéad fhear</i> <Tl tlText="the first man" />; <i>an chéad bhean</i> <Tl tlText="the first woman" />; <i>na chéad cheithre ghloine</i> <Tl tlText="the first four glasses" />; <i>na chéad bhlianta</i> <Tl tlText="the first years" />; <i>clann an chéad fhir</i> <Tl tlText="the children of the first man" />; <i>mac na chéad mhná</i> <Tl tlText="the son of the first woman" />; <i>lucht na chéad bhliana</i> <Tl tlText="the people of the first year" />; unless the initial letter is <i>d</i>, <i>t</i> or <i>s</i>, e.g., <i>na chéad daoine</i> <Tl tlText="the first people" />, <i>an chéad saighdiúir</i> <Tl tlText="the first soldier" />; <i>an chéad turas</i> <Tl tlText="the first journey" />; <i>ceadúnas an chéad tógálaí</i> <Tl tlText="the license of the first builder" />. (See <a href="#sec_9_5_4">9.5.4</a> for more information on ordinal numbers in the genitive case.)</>;
  },
  get "9-5-1-d-p"() {
    return <>The ordinal number <i>céad</i> is used in the for 1, but for other ordinals ending in 1, the word <i>aonú</i> is used. In the nominative case, <i>t&#x2011;</i> is prefixed to <i>aonú</i> after the article, e.g., <i>an t&#x2011;aonú lá is tríocha</i> <Tl tlText="the thirty-first day" />.</>;
  },
  get "9-5-2-title"() {
    return "The Ordinal Numbers 1&ndash;100 &mdash; General Information";
  },
  get "Table9V-caption"() {
    return <>{en_US["TheOrdinalNumbers"]} 1&ndash;100</>;
  },
  get "Table9W-caption"() {
    return <>{en_US["TheOrdinalNumbers"]} 100+</>;
  },
  get "9-5-2-a-p"() {
    return <>The singular form of the article precedes the ordinal numbers (except for the ordinal number 1, see <a href="#sec_9_5_1">9.5.1</a>), e.g., <i>an dara bean</i> <Tl tlText="the second woman" />; <i>an dóú teach</i> <Tl tlText="the second house" />; <i>an tríú tuarascáil</i> <Tl tlText="the third report" />; <i>an ceathrú bean is fiche</i> <Tl tlText="the twenty-fourth woman" />; <i>an cúigiú comhartha is seasca</i> <Tl tlText="the sixty-fifth sign" />.</>;
  },
  get "9-5-2-b-p"() {
    return <>After the ordinal number <i>dara</i> and all ordinal numbers ending in <i>-ú</i>, <i>h</i> is prefixed to a noun beginning with a vowel, e.g., <i>an dara hoíche</i> <Tl tlText="the second night" />; <i>an tríú hurlár</i> <Tl tlText="the third floor" />; <i>an séú hóstán déag</i> <Tl tlText="the sixteenth hotel" />; <i>an t&#x2011;ochtú hurlár is tríocha</i> <Tl tlText="the thirty-eighth floor" />.</>;
  },
  get "9-5-2-c-p"() {
    return <>The article usually precedes the first number in the ordinal number, unless a possessive adjective or <i>gach</i> precedes it, e.g., <i>an tríú lá ach gach dara bliain</i> <Tl tlText="the third day but every second year" />; <i>a tríú bliain</i> <Tl tlText="his third year" />.</>;
  },
  get "9-5-2-d-p"() {
    return <>A system that follows the rules of the cardinal numbers (The Established System) is used to indicate the position of a thing in a series below 100, e.g., <i>an dara hábhar is tríocha</i> <Tl tlText="the thirty-second item" />; <i>an ceathrú cathaoir is caoga</i> <Tl tlText="the fifty-fourth chair" />; <i>an seachtú hoíche is seachtó</i> <Tl tlText="the seventy-seventh night" />; <i>an t&#x2011;ochtú madra is nócha</i> <Tl tlText="the ninety-eighth dog" />.</>;
  },
  get "9-5-2-e-p"() {
    return <>No lenition is added to the word <i>déag</i> in the ordinal number, e.g., <i>an tríú duine déag</i> <Tl tlText="the thirteenth person" />; <i>an t&#x2011;ochtú bosca déag</i> <Tl tlText="the eighteenth box" />; <i>an naoú leabhar déag</i> <Tl tlText="the nineteenth book" />.</>;
  },
  get "TheOrdinalNumbers"() {
    return "The Ordinal Numbers";
  },
  get "9-5-3-title"() {
    return "The Ordinal Numbers 100+";
  },
  get "9-5-3-a-p"() {
    return <>A system based on the multiplicative number system is used to indicate the position of a thing in a series above 100, e.g., <i>céad a ceathair &mdash; an céad is ceathrú feirmeoir</i> <Tl tlText="the one hundred and fourth farmer" />; <i>cúig chéad seasca a ceathair &mdash; an cúig chéad seasca is ceathrú heitleán</i> <Tl tlText="the five hundred and sixty-fourth airplane" />; <i>seacht míle, ceithre chéad a naoi déag &mdash; an seacht míle, ceithre chéad is naoú hóstán déag</i> <Tl tlText="the seven thousand, four hundred and nineteenth hotel" />.</>;
  },
  get "9-5-3-b-p"() {
    return <>Lenition is added to the word <i>déag</i> after the number <i>míle</i>, e.g., <i>an trí mhíle dhéag is ceathrú hoileán</i> <Tl tlText="the three thousand and fourteenth island" />.</>;
  },
  get "9-5-4-title"() {
    return "The Ordinal Numbers in the Genitive Case";
  },
  get "9-5-4-a-p"() {
    return <>
      For the ordinal number <i>céad</i>, the noun following it is declined and the article agrees with the number and gender of the noun, e.g., <i>an chéad fhear</i>, <i>clann an chéad fhir</i> (<b>EN</b>: <i>the first man</i>, <i>the family of the first man</i>); <i>an chéad bhean</i>, <i>clann na chéad mhná</i> (<b>EN</b>: <i>the first woman</i>, <i>the family of the first woman</i>); <i>na chéad cheithre bliana</i>, <i>tús na chéad cheithre bliana</i> (<b>EN</b>: <i>the first four years</i>, <i>the beginning of the first four years</i>); <i>na chéad chúig charr</i>, <i>plátaí clárúcháin na chéad chúig charr</i> (<b>EN</b>: <i>the first five cars</i>, <i>the registration plates of the first five cars</i>); <i>na chéad taiscéalaithe</i>, <i>eachtraí na chéad taiscéalaithe</i> (<b>EN</b>: <i>the first explorers</i>, <i>the adventures of the first explorers</i>).
    </>;
  },
  get "9-5-4-b-p"() {
    return <>For all other ordinal numbers, the noun is never declined, e.g., <i>mac an dara bean</i> <Tl tlText="the son of the second woman" />; <i>mac an dara fear</i> <Tl tlText="the son of the second man" />; <i>eagraíocht tríú tír</i> <Tl tlText="the organization of the third country" />; <i>oideachas tríú leibhéal</i> <Tl tlText="the third level of education" />; <i>clúdach an cheathrú tuarascáil</i> <Tl tlText="the cover of the fourth report" />; <i>deireadh an fichiú haois</i> <Tl tlText="the end of the twentieth century" />; <i>tús an aonú haois is fiche</i> <Tl tlText="the beginning of the twenty-first century" />.</>;
  },
  get "9-5-4-c-p"() {
    return <>
      The <i>t&#x2011;</i> is dropped before <i>aonú</i>, <i>ochtú</i>, <i>ochtódú</i>, etc., e.g., <i>an t&#x2011;aonú bliain déag</i>, <i>tús an aonú bliain déag</i> (<b>EN</b>: <i>the eleventh year</i>, <i>the beginning of the eleventh year</i>); <i>an t&#x2011;ochtú haois déag</i>, <i>tús an ochtú haois déag</i> (<b>EN</b>: <i>the eighteenth century</i>, <i>the beginning of the eighteenth century</i>); <i>an t&#x2011;ochtódú cruinniú</i>, <i>miontuairiscí an ochtódú cruinniú</i> (<b>EN</b>: <i>the eighteenth meeting</i>, <i>the minutes of the eighteenth meeting</i>).
    </>;
  },
  get "9-5-4-d-p"() {
    return <>The article affects the initial mutations of the ordinal numbers as it would affect a masculine noun, e.g., <i>bróga an chúigiú girseach</i> <Tl tlText="the shoes of the fifth girl" />; <i>seoladh an cheathrú teach is daichead</i> <Tl tlText="the launch of the forty-fourth house" />; but no initial mutation is made to <i>f</i> or <i>s</i>, e.g., <i>lucht an seachtú hoifig</i> <Tl tlText="the people of the seventh office" />; <i>bonn an fichiú himreoir</i> <Tl tlText="the base of the twentieth player" />; <i>deireadh an seascadú comhdháil</i> <Tl tlText="the end of the sixteenth conference" />.</>;
  },
  get "Table9X-caption"() {
    return "The Ordinal Numbers in the Genitive Case";
  },
  get "Table9X-header"() {
    return "The Ordinal Numbers in the Genitive Case";
  },
  get "9-5-5-title"() {
    return "Adjectives with Ordinal Numbers";
  },
  get "9-5-5-p"() {
    return <>The adjective is declined according to the noun, e.g., <i>an chéad bhean mhór</i> <Tl tlText="the first big woman" />; <i>an chéad fhear mór</i> <Tl tlText="the first big man" />; <i>seol an chéad bháid ghoirm</i> <Tl tlText="the launch of the first blue boat" />; <i>deireadh na chéad tuarascála cuimsithí</i> <Tl tlText="the end of the first comprehensive report" />; <i>na chéad scoláirí maithe</i> <Tl tlText="the first good students" />; <i>eachtraí na chéad taiscéalaithe cáiliúla</i> <Tl tlText="the adventures of the first famous explorers" />; <i>an tríú fear mór is tríocha</i> <Tl tlText="the thirty-third big man" />; <i>cóta an daicheadú bean mhór</i> <Tl tlText="the coat of the forty-first big woman" />.</>;
  },
  get "9-5-6-title"() {
    return "The Ordinal Numbers written in Figures";
  },
  get "9-5-6-a-p"() {
    return <>Ordinal numbers are written in figures by adding <i>ú</i> <Tl tlText="st, nd, rd, th" /> after the figure, e.g., <i>an 1ú</i>, <i>an 2ú</i>, <i>an 19ú</i>, <i>an 123ú</i>.</>;
  },
  get "9-5-6-b-p"() {
    return <>The rules for writing ordinal numbers in figures are the same as the rules for writing ordinal numbers in words (see <a href="#sec_9_5_1">9.5.1</a> to <a href="#sec_9_5_5">9.5.5</a> above). Note that <i>h</i> is prefixed before a vowel and no lenition is added after 1ú since it is <i>aonú</i> (not <i>céad</i>).</>;
  },
  get "9-6-title"() {
    return "The Fraction";
  },
  get "9-6-p"() {
    return <>A numerical quantity that is not a whole number is a fraction, e.g., <i>1/4 &mdash; ceathrú</i>; <i>2/3 &mdash; dhá thrian</i>; <i>5/6 &mdash; cúig shéú</i>.</>;
  },
  get "9-6-1-title"() {
    return "Composition of the Fraction";
  },
  get "9-6-1-a-p"() {
    return <>A standard fraction has two parts: <i>the numerator</i> and <i>the denominator</i>. The numerator is placed above the line and the denominator below the line, e.g., for 6/7, 6 is the numerator and 7 is the denominator.</>;
  },
  get "9-6-1-b-p1"() {
    return <>The ordinal numbers are used to indicate the denominator except for the words <i>leath</i> and <i>trian</i>.</>;
  },
  get "9-6-1-b-p2"() {
    return <>Note that a special plural form <i>treana</i> of the noun <i>trian</i> is used with the numbers 3&ndash;10. The noun is left unmodified after <i>trí</i>, <i>ceithre</i>, <i>cúig</i>, <i>sé</i>, e.g., <i>3/3 &mdash; trí treana</i>; <i>4/3 &mdash; ceithre treana</i>; and it is eclipsed after <i>seacht</i>, <i>ocht</i>, <i>naoi</i>, <i>deich</i>, e.g., <i>9/3 &mdash; naoi dtreana</i>; <i>10/3 &mdash; deich dtreana</i>.</>;
  },
  get "9-6-1-c-p"() {
    return <>When the denominator is a number between 11&ndash;19, a form derived from the ordinal number is used, e.g., <i>4/13 &mdash; ceithre thrídéagú</i>; <i>6/15 &mdash; sé chúigdéagú</i>.</>;
  },
  get "9-6-1-d-p"() {
    return <>When the denominator is a number over 20, the order of the words is the same as that of the bare numbers but an ordinal number is used instead of a bare number at the end, e.g., <i>1/30 &mdash; tríochadú</i>; <i>4/97 &mdash; ceithre nócha seachtú</i>.</>;
  },
  get "9-6-1-e-p"() {
    return <>Fractions are written in several different ways, as illustrated below. Option <a href="#sec_9_6_1_e_i">(i)</a> is the structure most commonly used.</>;
  },
  get "9-6-1-e-i-p"() {
    return <>It is possible to use two bare numbers with the preposition <i>ar</i> or the compound preposition <i>os cionn</i> between them to express any fraction, e.g., <i>1/11 &mdash; a haon ar a haon déag</i>; <i>a haon os cionn a haon déag</i>; <i>7/8 &mdash; a seacht ar a hocht</i>; <i>a seacht os cionn a hocht</i>; <i>4/15 &mdash; a ceathair ar a cúig déag</i>; <i>a ceathair os cionn a cúig déag</i>; <i>33/57 &mdash; tríocha a trí ar chaoga a seacht</i>; <i>tríocha a trí os cionn caoga a seacht</i>; <i>136/82 &mdash; céad tríocha a sé ar ochtó dó</i>; <i>céad tríocha a sé os cionn ochtó dó</i>. <i>Fiche</i> is not lenited in fractions, e.g., <i>3/24 &mdash; a trí ar fiche a ceathair</i>.</>;
  },
  get "9-6-1-e-ii-p"() {
    return <>When the numerator is 1, the word <i>cuid</i> can be used with the ordinal numbers to express fractions, e.g., <i>1/2 &mdash; leath</i>; <i>an leathchuid</i>; <i>1/3 &mdash; trian</i>; <i>an tríú cuid</i>; <i>1/11 &mdash; aondéagú</i>; <i>an t&#x2011;aondéagú cuid</i>. The form with <i>cuid</i> is usually used when the denominator is a number over 20, e.g., <i>1/27 &mdash; an fiche seachtú cuid</i>; <i>1/156 &mdash; an céad caoga séú cuid</i>. For the tens, however, one would rather say <i>tríochadú</i>, etc. <i>ná an tríochadú cuid</i>.</>;
  },
  get "9-6-1-e-iii-p"() {
    return <>When the numerator is between 2 and 10, the cardinal numbers and the ordinal form (see <a href="#sec_9_6_1_b">(b)</a>, <a href="#sec_9_6_1_c">(c)</a> and <a href="#sec_9_6_1_d">(d)</a> above) are used to express the fraction. Fractions are common nouns and the usual rules of the cardinal numbers are followed when counting them, e.g., <i>7/8 &mdash; seacht n&#x2011;ochtú</i>; <i>4/15 &mdash; ceithre chúigdéagú</i>; but <i>fichiú</i> is not lenited, e.g., <i>3/20 &mdash; trí fichiú</i>.</>;
  },
  get "9-6-1-e-iv-p"() {
    return <>As an alternative to <a href="#sec_9_6_1_e_iii">(iii)</a> above, when the numerator is between 2 and 10 the noun <i>ceann</i>/<i>cinn</i> can be used with the preposition de and the plural form of the denominator, e.g., <i>7/8 &mdash; seacht gcinn d&rsquo;ochtuithe</i>; <i>4/15 &mdash; ceithre cinn de chúigdéaguithe</i>;</>;
  },
  get "9-6-1-e-v-p"() {
    return <>When the numerator is more than 10, bare numbers can be used as follows: <i>the numerator</i> (stated as a bare number) + <i>de</i> + <i>the plural of the denominator</i>, e.g., <i>33/57 &mdash; tríocha a trí de chaoga seachtuithe</i>; <i>136/82 &mdash; céad tríocha a sé d&rsquo;ochtó dóithe</i>. This form is preferred when the numerator is more than 10 and when the denominator is more than 20.</>;
  },
  get "9-6-2-title"() {
    return "The Denominator";
  },
  get "9-6-2-a-title"() {
    return "The Denominator 2&ndash;19";
  },
  get "9-6-2-a-p"() {
    return "The following table shows two options for writing fractions with denominators from 2&ndash;19 and numerator 1.";
  },
  get "Table9Y-caption"() {
    return "The Fractions &mdash; The Denominator 2&ndash;19";
  },
  get "TheFraction"() {
    return "Fraction";
  },
  get "TheDenominator"() {
    return "Denominator";
  },
  get "TheFormWithCuid"() {
    return <>Form with <i>cuid</i></>;
  },
  get "9-6-2-b-title"() {
    return "Denominator 20+";
  },
  get "9-6-2-b-p-1"() {
    return <>The following table gives examples of how to deal with denominators above 20 (except the tens) when the numerator is 1. The form with <i>cuid</i> is usually used for such fractions. The order of that form is the same as that used in the cardinal numbers but an ordinal number is used instead of a bare number at the end and the numeral <i>a</i> is left in the middle.</>;
  },
  get "Table9Z-caption"() {
    return "The Fractions &mdash; The Denominator 20+";
  },
  get "9-6-2-b-p-2"() {
    return <>Note that an ordinal number is used for the tens, e.g., <i>fichiú</i>, <i>céadú</i>, <i>míliú</i>, etc., and that the form with <i>cuid</i> is not usually used with them, e.g., <i>1/30 &mdash; tríochadú</i>; <i>1/50 &mdash; caogadú</i>.</>;
  },
  get "9-6-3-title"() {
    return "The Numerator";
  },
  get "9-6-3-a-title"() {
    return "The Numerator 2&ndash;10";
  },
  get "9-6-3-a-i"() {
    return <>The cardinal number system is followed when the numerator is more than 1 since the denominators are common nouns (exception: <i>fichiú</i> is not lenited, e.g., <i>trí fichiú</i>). The following table gives examples of fractions when the numerator is a number between 2 and 10.</>;
  },
  get "Table9AA-caption"() {
    return "The Fractions &mdash; The Numerator 2&ndash;10";
  },
  get "9-6-3-a-ii"() {
    return <>Alternatively, the noun <i>ceann</i>/<i>cinn</i> can be used with the preposition de and the plural form of the denominator.</>;
  },
  get "Table9BB-caption"() {
    return <>The Fractions &mdash; The Numerator 2&ndash;10 &mdash; The Form with <i>ceann</i>/<i>cinn</i> and the Preposition <i>de</i></>;
  },
  get "9-6-3-b-title"() {
    return "The Fractions when the Numerator is more than 10";
  },
  get "9-6-3-b-p"() {
    return <>When the numerator is more than 10, bare numbers are used as follows: <i>the numerator</i> (stated as a bare number) + <i>de</i> + <i>the plural of the denominator</i>.</>;
  },
  get "Table9CC-caption"() {
    return <>When the numerator is more than 10, bare numbers are used as follows: <i>the numerator</i> (stated as a bare number) + <i>de</i> + <i>the plural of the denominator</i>.</>;
  },
  get "TheBareNumberModifiedBy"() {
    return "Bare Number Modified by";
  },
  get "9-6-4-title"() {
    return "Large Numerators and Denominators";
  },
  get "9-6-4-p"() {
    return <>When the numerator is more than 10 and when the denominator is more than 20, the form with the bare number plus the preposition <i>de</i> and the plural of the denominator is preferred. It is also possible to use two bare numbers with the preposition <i>ar</i> or the compound preposition <i>os cionn</i> between them to express a fraction, e.g., <i>61/66 &mdash; seasca a haon ar sheasca a sé</i>; <i>seasca a haon os cionn seasca a sé</i>; <i>74/83 &mdash; seachtó a ceathair ar ochtó a trí</i>; <i>seachtó a ceathair os cionn ochtó a trí</i>; <i>437/500,043 &mdash; ceithre chéad tríocha a seacht ar chúig chéad míle daichead a trí</i>; <i>ceithre chéad tríocha a seacht os cionn cúig chéad míle daichead a trí</i>.</>;
  },
  get "Table9DD-caption"() {
    return "The Fractions &mdash; Large Numerators and Denominators";
  },
  get "9-7-title"() {
    return "The Decimal Number";
  },
  get "9-7-a-p"() {
    return <>The bare number system is used for decimal numbers, e.g., <i>1.7 &mdash; a haon ponc a seacht</i>; <i>22.4 &mdash; fiche a dó ponc a ceathair</i>; <i>84.22 &mdash; ochtó a ceathair ponc a dó a dó</i>.</>;
  },
  get "9-7-b-p"() {
    return <>No inflection or initial mutation is made to a noun following a decimal number, whether it is in word or figure form, e.g., <i>a haon ponc a dó gram</i>; <i>1.5 cileagram</i>; <i>7.4 méadar ciúbach</i>.</>;
  },
  get "9-8-title"() {
    return "Summary of the Numbers";
  },
  get "Table9EE-caption"() {
    return "Summary of the Numbers 1&ndash;19";
  },
  get "Tabel9EE-col4"() {
    return "Figure";
  },
  get "Table9EE-Row1"() {
    return "The Cardinal Number";
  },
  get "Table9EE-Row2"() {
    return "The Personal Number";
  },
  get "Table9EE-Row3"() {
    return "The Ordinal Number";
  },
  get "Table9FF-caption"() {
    return "Summary of the Numbers 20+";
  },
  get "Table9FF-row1"() {
    return "The Cardinal Number and the Personal Number";
  },
  get "Table9FF-row2"() {
    return "The Ordinal Number";
  },
  get "Table9FF-note-p"() {
    return "Note";
  },
  get "Table9FF-note-a-p"() {
    return "that only the Established System is used with numbers under 20;";
  },
  get "Table9FF-note-b-p"() {
    return <>it is recommended, for prose, to write personal numbers up to <i>dháréag</i> in words rather than figures.</>;
  }
};
