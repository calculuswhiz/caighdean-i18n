import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en-US" tlText={props.tlText} />;

export const en_US = {
  get "teidealNaCaibidle"() {
    return "The Noun";
  },
  get "2-title"() {
    return <>{en_US_Common["Caibidil"]} 2 | {en_US["teidealNaCaibidle"]}</>
  },
  get "2-1-title"() {
    return <>{en_US_Common["Ginearálta"]}</>
  },
  get "declension-1"() {
    return "The First Declension";
  },
  get "declension-2"() {
    return "The Second Declension";
  },
  get "declension-3"() {
    return "The Third Declension";
  },
  get "declension-4"() {
    return "The Fourth Declension";
  },
  get "declension-5"() {
    return "The Fifth Declension";
  },
  get "genPl"() {
    return "gen. pl.";
  },
  get "meaning"() {
    return "meaning";
  },
  get "datSg"() {
    return <><i>dat. sg.</i></>
  },
  get "2-1-1-title"() {
    return "The Declensions";
  },
  get "2-1-1-p1"() {
    return <>The nouns can be divided into five declensions, according to genitive case form, as is seen in <a href="#table2E">table 2E</a>.</>
  },
  get "2-1-2-title"() {
    return "The Cases";
  },
  get "2-1-2-a-title"() {
    return "The Nominative and the Accusative";
  },
  get "2-1-2-a-p1"() {
    return <>Both of these cases have the same form now, in the singular and in the plural, and they are both counted under the title <i>Nominative</i> in the declensions of nouns.</>
  },
  get "2-1-2-b-title"() {
    return "The Dative";
  },
  get "2-1-2-b-p1"() {
    return <>The form of the dative is also the same as the nominative, singular and plural (but see <a href="#sec_2_3_3">2.3.3</a>), and that case is also counted under the title <i>Nominative</i>.</>
  },
  get "2-1-2-c-title"() {
    return "The Genitive";
  },
  get "2-1-2-c-p1"() {
    return "The form of the genitive in the different declensions is given in the tables in this chapter and in the description of the particular declensions.";
  },
  get "2-1-2-d-title"() {
    return "The Vocative";
  },
  get "2-1-2-d-p1"() {
    return <>In the vocative case, the vocative particle <i>a</i> is put before the noun and the initial consonant of the following noun is lenited. The form of the vocative is the same as the nominative except in the first declension and does not need to be specified separately outside of that declension (see <a href="#sec_2_2_3">2.2.3</a> and <a href="#sec_2_2_4_c">2.2.4(c)</a>).</>
  },
  get "2-1-3-title"() {
    return "The Plural";
  },
  get "2-1-3-p1"() {
    return "The plurals of nouns can be divided into two main classes: strong plurals and weak plurals. The two classes are described as follows:";
  },
  get "2-1-3-a-title"() {
    return "Strong Plurals";
  },
  get "2-1-3-a-p1"() {
    return "The plural of a noun is a strong plural if the noun&rsquo;s plural form is the same in all the cases.";
  },
  get "Table2A-Title"() {
    return "Examples of Strong Plurals";
  },
  get "Table2A-CornerHeading"() {
    return "The Declensions";
  },
  get "Table2A-Irregular"() {
    return "Irregular Nouns";
  },
  get "2-1-3-b-title"() {
    return "Weak Plurals";
  },
  get "2-1-3-b-p1"() {
    return "The plural of a noun is a weak plural if the noun&rsquo;s plural form is not the same in the genitive plural as the noun&rsquo;s plural form in the other cases. This class includes:";
  },
  get "2-1-3-b-i-p1"() {
    return <>Nouns that end on a broad consonant and the ending consonant becomes slender in the nominative plural and the genitive singular, e.g., <i>fear</i>, <i>tá na fir ag teacht</i>, <i>hata an fhir</i>; <i>eitleán</i>, <i>feictear na heitleáin sa spéir</i>, <i>athraíodh roth an eitleáin</i>. Those nouns are only in the First Declension. An example is in the table below:</>
  },
  get "Table2B-Title"() {
    return "The First Declension &mdash; Weak Plural";
  },
  get "2-1-3-b-ii-p1"() {
    return <>Nouns that take an <i>a</i> in the nominative plural with neither syncope nor an exchange of vowel or vowels nor broadening in the nominative singular &mdash; lose the ending vowel <i>-a</i> in the genitive plural. Those plurals are mostly in the Second Declension, e.g., <i>géag crainn</i>, <i>do ghéaga a shíneadh</i>, <i>laige na ngéag</i>. This is shown in the table below:</>
  },
  get "Table2C-Title"() {
    return "The Second Declension &mdash; Weak Plural";
  },
  get "2-1-3-b-ii-p2"() {
    return <>Note that several nouns follow the same pattern as in the First Declension, e.g., <i>úll</i>, <i>itheadh na húlla</i>, <i>blas na n&#x2011;úll</i>; in the Third Declension, e.g., <i>tréad caorach</i>, <i>tréada is comhaltas</i>, <i>seoladh na dtréad</i>; and in the Fourth Declension, e.g., <i>gach aon neach</i>, <i>na neacha daonna</i>, <i>teacht na neach neamhshaolta</i>.</>
  },
  get "2-1-3-b-iii-p1"() {
    return <>A few nouns in the Second Declension, e.g., <i>súil</i>, <i>leath na súile uirthi</i>, <i>radharc na súl</i>; a few in the Third Declension, e.g., <i>mionn</i>, <i>na mionnaí marbha</i>, <i>dar bhrí na mionn</i>; a few in the Fourth Declension, e.g., <i>bó</i>, <i>tá na ba sa gharraí</i>, <i>cró na mbó</i>; a few in the Fifth Declension, e.g., <i>caora</i>, <i>tá na caoirigh ann</i>, <i>líon na gcaorach</i>; and an occasional irregular noun, e.g., <i>bean</i>, <i>tá na mná ag teacht</i>, <i>hataí na mban</i>; have a separate form in the genitive plural. Examples are shown in the table below:</>
  },
  get "Table2D-Title"() {
    return "Other Weak Plurals &mdash; Examples";
  },
  get "2-1-4-title"() {
    return "Palatalization";
  },
  get "2-1-4-p1"() {
    return <>When a broad consonant is made slender, this is palatalization. An <i>-i-</i> is placed before the end consonant to indicate a palatalization, e.g., <i>cnoc</i>, <i>cnoic</i>. The palatalization is done in the same way if the end-consonant has an <i>ae</i> in front, e.g., <i>aer</i>, <i>aeir</i>.</>
  },
  get "2-1-4-p2"() {
    return "It is customary to change certain vowels when the following consonant is narrowed:";
  },
  get "2-1-4-a-p"() {
    return <><i>-ea-</i> and <i>-io-</i>  to <i>-i-</i>, e.g., <i>ceann</i>, <i>cinn</i>; <i>fionn</i>, <i>finn</i> (but in certain monosyllabic nouns <i>ea-</i> to <i>ei-</i>, e.g., <i>each</i>, <i>eich</i>);</>
  },
  get "2-1-4-b-p"() {
    return <><i>-éa-</i> and <i>-ia-</i> to <i>éi-</i>, e.g., <i>béal</i>, <i>béil</i>; <i>iasc</i>, <i>éisc</i>;</>
  },
  get "2-1-4-c-p"() {
    return <><i>-ío-</i> to <i>-í-</i>, e.g., <i>síol</i>, <i>síl</i>;</>
  },
  get "2-1-4-d-p"() {
    return <>in the polysyllabic nouns, <i>-ach</i> to <i>-aigh</i>, <i>-each</i> to <i>-igh</i>, <i>-íoch</i> to <i>-ígh</i>, e.g., <i>bithiúnach</i>, <i>bithiúnaigh</i>; <i>cléireach</i>, <i>cléirigh</i>; <i>gaiscíoch</i>, <i>gaiscígh</i>. That change applies to these monosyllabic nouns which were once written as disyllabic nouns, e.g., <i>dúch</i>, <i>dúigh</i>; <i>fiach</i>, <i>fiaigh</i>; and occasionally with other monosyllabic nouns, e.g., <i>fraoch</i>, <i>fraoigh</i>.</>
  },
  get "2-1-5-title"() {
    return "Broadening";
  },
  get "2-1-5-p1"() {
    return <>When a slender consonant is made broad, this is broadening. The <i>-i-</i> directly in front of the consonant is dropped to broaden the noun, e.g., <i>athair, athar; droim, droma.</i></>
  },
  get "2-1-5-p2"() {
    return "It is customary to change certain vowels as follows when they are broadened:";
  },
  get "2-1-5-a"() {
    return <><i>-ei-</i> and <i>-i-</i> to <i>-ea-</i>, e.g., <i>greim</i>, <i>greama</i>; <i>mil</i>, <i>meala</i>;</>
  },
  get "2-1-5-b"() {
    return <><i>-éi-</i> to <i>-éa-</i>, e.g., <i>úinéir</i>, <i>úinéara</i>;</>
  },
  get "2-1-5-c"() {
    return <><i>-oi-</i> and <i>-ui-</i> to <i>-o-</i>, e.g., <i>fuil</i>, <i>fola</i>; <i>toil</i>, <i>tola</i>.</>
  },
  get "2-1-6-title"() {
    return "Syncopation";
  },
  get "2-1-6-p"() {
    return <>When a short, unaccented vowel or vowels are dropped from the word when it is inflected, this is syncopation, e.g., <i>cathair</i>, <i>cathrach</i>; <i>obair</i>, <i>oibre</i>.</>
  },
  get "2-1-7-title"() {
    return "The Compound Word";
  },
  get "2-1-7-p1"() {
    return <>A compound word is made by connecting two words or more together, e.g, <i>bunscoil</i>; <i>príomhoifigeach</i>; <i>ríomheolaíocht</i>. The second word in a compound word is lenited, e.g., <i>deargbhuile</i>; <i>rósghairdín</i>, except when <i>d</i>, <i>n</i>, <i>t</i>, <i>l</i> or <i>s</i> come with it, e.g., <i>antráth</i>; <i>catsúil</i>. The hyphen is used in a compound:</>
  },
  get "2-1-7-a"() {
    return <>between two vowels, e.g., <i>fo-aicme</i>; <i>mí-ádh</i>; <i>mí-iompar</i>; <i>ró-olc</i>;</>
  },
  get "2-1-7-b"() {
    return <>between common consonants, e.g., <i>droch-chaint</i>; <i>gearr-rás</i>; <i>gnáth-thuarastal</i>;</>
  },
  get "2-1-7-c"() {
    return <>between two prefixes, e.g., <i>comh-cheolfhoireann</i>; <i>mór-cheoldráma</i>; <i>sin-seanathair</i>;</>
  },
  get "2-1-7-d"() {
    return <>in contexts when the compound would be unrecognizable without the hyphen, for example, between the prefixes <i>do-</i>, <i>fo-</i>, <i>so-</i> and words starting with <i>bha-</i>, <i>bhla-</i>, <i>bhra-</i>, <i>dha-</i>, <i>gha-</i>, <i>ghla-</i>, <i>ghra-</i>, <i>mha-</i>, e.g., <i>do-ghlanta</i>; <i>fo-bhaile</i>; <i>so-mharaithe</i>;</>
  },
  get "2-1-7-e"() {
    return <>in specific titles and their initial letters, e.g., <i>an Ard-Chúirt</i>; <i>an tArd-Aighne</i>; <i>an Príomh-Aire</i>; <i>an Príomh-Bhreitheamh</i>;</>
  },
  get "2-1-7-f"() {
    return <>after <i>an-</i> (emphatic prefix) and after <i>dea-</i>, e.g., <i>an-aimsir</i>; <i>dea-bhéas</i>. Note that the second word is not lenited in a compound word after <i>an-</i> when <i>d, t</i> or <i>s</i> follows it, e.g., <i>an-duine is ea é</i>; <i>an-drochaimsir</i> (see <a href="chapter10-en.html#sec_10_2_12">10.2.12</a>).</>
  },
  get "2-1-7-notes-1"() {
    return <>Two hyphens are placed in a compound word when it is necessary for the sake of clarity, e.g., <i>an-dea-aimsir</i>; <i>an-droch-chaint</i>; <i>iar-nua-aimseartha</i>; <i>an Leas-Phríomh-Aire</i>.</>
  },
  get "2-1-7-notes-2"() {
    return <>The placement of a hyphen is not needed in an administrative term with more than one prefix if the meaning of the term is clear without it, e.g., <i>comhfhochoiste</i>; <i>roghfhochoiste</i>.</>
  },
  get "2-1-7-notes-3"() {
    return <>Note if <i>iar</i> is coming before a title starting with a capital letter, the placement of a hyphen is not necessary between <i>iar</i> and the title, e.g., <i>an t&#x2011;iarArd-Reachtaire Cuntas agus Ciste</i>.</>
  },
  get "Table2E-Title"() {
    return <>{en_US["2-1-8-title"]}</>
  },
  get "Table2E-row1-cell2"() {
    return <>Ends with a broad consonant, e.g., <i>bád</i>, <i>cás</i>, <i>ceol</i>, <i>marcach</i>.</>
  },
  get "Table2E-row1-cell3"() {
    return <>Palatalization of the last consonant, e.g., <i>báid</i>, <i>cáis</i>, <i>ceoil</i>, <i>marcaigh</i>.</>
  },
  get "Table2E-row1-cell4"() {
    return <>The form is usually the same as in the genitive singular, e.g., <i>báid</i>, <i>marcaigh</i>.</>
  },
  get "Table2E-row1-cell5"() {
    return <>The form is usually the same as in the nominative singular, e.g., <i>bád</i>, <i>marcach</i>.</>
  },
  get "Table2E-row1-cell6"() {
    return <>The form in the plural is completely the same. e.g., <i>cásanna</i>, <i>ceolta</i></>
  },
  get "Table2E-row2-cell1"() {
    return <>Feminine, but not <i>im</i>, <i>sliabh</i>.</>
  },
  get "Table2E-row2-cell2"() {
    return <>Ends with a consonant (broad or slender), e.g., <i>aisling</i>, <i>áit</i>, <i>baintreach</i>, <i>bróg</i>, <i>coill</i>, <i>foirm</i>, <i>muinín</i>, <i>pian</i>, <i>scornach</i>, <i>tír</i>.</>
  },
  get "Table2E-row2-cell3"() {
    return <>Ends with <i>-e</i>, e.g., <i>aislinge</i>, <i>áite</i>, <i>bróige</i>, <i>coille</i>, <i>foirme</i>, <i>muiníne</i>, <i>péine</i>, <i>tíre</i>; or with <i>-(a)í</i>, e.g., <i>baintrí</i>, <i>scornaí</i>.</>
  },
  get "Table2E-row2-cell4"() {
    return <>Ends with <i>-a</i>, e.g., <i>baintreacha</i>, <i>bróga</i>, <i>scornacha.</i></>
  },
  get "Table2E-row2-cell5"() {
    return <>The <i>-a</i> is omitted, e.g., <i>baintreach</i>, <i>bróg</i>, <i>scornach</i>.</>
  },
  get "Table2E-row2-cell6"() {
    return <>Ends with <i>-a</i>, <i>-e</i>, <i>-(e)acha</i>, <i>-(e)anna</i>, <i>-í</i>, <i>-t(h)a</i>, <i>-te</i> and is completely the same as the plural form, e.g., <i>aislingí, áiteanna, coillte, foirmeacha, pianta, tíortha</i>.</>
  },
  get "Table2E-row3-cell1"() {
    return "Masculine and Feminine";
  },
  get "Table2E-row3-cell2"() {
    return <>Ends with a consonant (broad or slender), e.g., <i>bádóir</i>, <i>éacht</i>, <i>foráil</i>, <i>gleann</i>, <i>lus</i>, <i>táin</i>.</>
  },
  get "Table2E-row3-cell3"() {
    return <>Ends with <i>-a</i>, e.g., <i>bádóra</i>, <i>éachta</i>, <i>forála</i>, <i>gleanna</i>, <i>lusa</i>, <i>tána</i>.</>
  },
  get "Table2E-row3-cell4"() {
    return <>Ends with <i>-a</i>, <i>-acha</i>, <i>-(a)í</i>, <i>-(e)anna</i>, <i>-ta</i>, <i>-te</i> and the form is completely the same as in the plural, e.g., <i>bádóirí</i>, <i>éachtaí</i>, <i>forálacha</i>, <i>gleannta</i>, <i>lusanna</i>, <i>táinte</i>.</>
  },
  get "Table2E-row4-cell1"() {
    return "Masculine and Feminine";
  },
  get "Table2E-row4-cell2"() {
    return <>Ends with a vowel or with <i>-ín</i> (other than <i>muinín</i> and <i>muirín</i> (meaning <i>clann</i>) which are in the second declension), e.g., <i>acra</i>, <i>cailín</i>, <i>oibrí</i>, <i>trá</i>. Does not change the genitive.</>
  },
  get "Table2E-row4-cell3"() {
    return <>Ends with <i>-(a)í, -(e)anna, -(i)te, -(i)the, -nna, -nna</i> and the form is completely the same as in the plural, e.g., <i>acraí</i>, <i>cailíní</i>, <i>oibrithe</i>, <i>tránna</i>.</>
  },
  get "Table2E-row5-cell1"() {
    return "Feminine, except a few are Masculine";
  },
  get "Table2E-row5-cell2"() {
    return <>Ends with <i>-il, -in, -ir</i> or with a vowel, e.g., <i>athair</i>, <i>cabhail</i>, <i>cáin</i>, <i>fiche</i>.</>
  },
  get "Table2E-row5-cell3"() {
    return <>Ends with a broad consonant, e.g., <i>athar</i>, <i>cabhlach</i>, <i>cánach</i>, <i>fichead</i>.</>
  },
  get "Table2E-row5-cell4"() {
    return <>Ends with <i>-(e)acha</i>, <i>-idí</i>, <i>-na</i>, <i>-ne</i> and the form is completely the same as in the plural, e.g., <i>aithreacha</i>, <i>cabhlacha</i>, <i>cánacha</i>, <i>fichidí</i>.</>
  },
  get "2-1-8-title"() {
    return "A Brief Overview of the Declensions";
  },
  get "2-1-8-notes"() {
    return <>As mentioned in <a href="#sec_2_1_2">2.1.2</a>, the form is the same in the Nominative Case, the Accusative Case and the Dative Case and all of them are included under the title Nominative.</>
  },
  get "2-2-title"() {
    return "The First Declension";
  },
  get "2-2-1-title"() {
    return "The Singular";
  },
  get "2-2-1-p"() {
    return "This declension includes most of the masculine nouns ending in a broad consonant in the nominative singular. The nouns in the first declension are all masculine.";
  },
  get "2-2-2-title"() {
    return "The Genitive Singular";
  },
  get "2-2-2-a"() {
    return <>In the genitive singular, the last consonant is palatalized, e.g., <i>bord</i>, <i>boird</i>; <i>nuachtán</i>, <i>nuachtáin</i>.</>
  },
  get "2-2-2-b"() {
    return <>The changes under <a href="#sec_2_1_4">2.1.4</a> apply with the palatalization, but <i>-ia-</i> is not changed to <i>-éi-</i> in these nouns: <i>Brian</i>, <i>Briain</i>; <i>cliant</i>, <i>cliaint</i>; <i>fiar</i>, <i>fiair</i>; <i>giar</i>, <i>giair</i>; <i>rian</i>, <i>riain</i>; <i>srian</i>, <i>sriain</i>; and <i>trian</i>, <i>triain</i>.</>
  },
  get "2-2-2-c"() {
    return <><i>mac</i> is changed to <i>mic</i> in the genitive singular and in the genitive plural.</>
  },
  get "2-2-2-d"() {
    return <>In the genitive singular, <i>-ea-</i> is changed to <i>-i-</i>, e.g., <i>breac</i>, <i>bric</i>; <i>cuireadh</i>, <i>cuiridh</i>; <i>leiceann</i>, <i>leicinn</i>; other than with certain monosyllabic nouns, e.g., <i>each</i>, <i>eich</i>.</>
  },
  get "2-2-3-title"() {
    return "The Vocative Singular";
  },
  get "2-2-3-a"() {
    return <>The form is usually the same in the vocative singular as in the genitive singular, e.g., <i>a Chorcaígh</i>, <i>a mhic</i>, <i>a Sheáin</i>.</>
  },
  get "2-2-3-b-p"() {
    return "However, it is not customary to inflect in the vocative singular:";
  },
  get "2-2-3-b-i"() {
    return <>on collective names, e.g., <i>a chomhthionól</i>; <i>a phobal</i>;</>
  },
  get "2-2-3-b-ii"() {
    return <>on nouns used with a metaphorical meaning or as proper names, e.g., <i>a cheann cipín</i>; <i>a chumann</i>; <i>a ghrá geal</i>; <i>a rós geal</i>; <i>a rún</i>; <i>a stór</i>;</>
  },
  get "2-2-3-b-iii"() {
    return <>on nouns that have a definite genitive subject, e.g., <i>a Chléireach na Dála</i>; <i>a fhear an tí</i>; <i>a scáthán an chirt</i>; <i>a shólás na ndobrónach</i>;</>
  },
  get "2-2-3-b-iv"() {
    return <>on multi-word official titles, e.g., <i>a Cheann Comhairle</i>; <i>a Oifigeach Ealaíon</i>; <i>a Cheann Scoile</i>.</>
  },
  get "2-2-4-title"() {
    return "The Plural";
  },
  get "2-2-4-p1"() {
    return <>There are both weak plurals and strong plurals in this declension. The nouns that palatalize the final consonant are weak plurals, e.g., <i>amhrán</i>; <i>amhráin</i>; or have <i>-a</i> with them without other changes, e.g., <i>nod</i>; <i>noda</i>; <i>úll</i>; <i>úlla</i>; in the genitive plural. All the other nouns are strong plurals.</>
  },
  get "2-2-4-p2"() {
    return <>Note that the First Declension pattern appears in the genitive singular column in the following tables, namely, that the final consonant is palatalized and <i>-(e)ach</i> is changed to <i>-(a)igh</i>.</>
  },
  get "2-2-4-a"() {
    return "Strong Plurals";
  },
  get "Table2F-Title"() {
    return "Strong Plurals in the First Declension &mdash; Examples";
  },
  get "Table2F-CornerHeading"() {
    return "Strong Plural Classes";
  },
  get "Table2F-rh1-title"() {
    return <>Nouns ending in <i>-ta</i>, <i>-tha</i> in the singular</>
  },
  get "Table2F-rh1-p"() {
    return <>Most of the monosyllabic nouns in which there is a long vowel (or diphthong) and end with <i>-l</i>, <i>-n</i> (but not <i>-ll</i>, <i>-nn</i>) in the nominative singular. <i>-tha</i> is put in the plural with occasional nouns ending with <i>-r</i> (but not <i>-rr</i>) in the nominative singular.</>
  },
  get "Table2F-rh2-title"() {
    return <>Nouns ending with <i>-aí</i>, <i>-i</i> in the plural</>
  },
  get "Table2F-rh2-p"() {
    return <>Certain monosyllabic nouns ending with <i>-ch</i>, and some in <i>-dh</i>, in the nominative singular, as with some other nouns.</>
  },
  get "Table2F-rh3"() {
    return <>Nouns ending with <i>-taí</i>, <i>-thaí</i> in the plural</>
  },
  get "Table2F-rh4"() {
    return <>Nouns ending with <i>-anna</i> in the plural</>
  },
  get "Table2F-rh5"() {
    return <>Nouns ending with <i>-e</i> in the plural and syncopated</>
  },
  get "Table2F-rh6"() {
    return <>Nouns ending with <i>-(e)acha</i> in the plural</>
  },
  get "Table2F-rh7"() {
    return <>Nouns ending with <i>-te</i> in the plural</>
  },
  get "Table2F-rh8"() {
    return "Miscellaneous nouns";
  },
  get "2-2-4-b"() {
    return "Weak Plurals";
  },
  get "Table2G-Title"() {
    return "Weak Plurals in the First Declension &mdash; Examples";
  },
  get "Table2G-CornerHeading"() {
    return "Weak Plural Classes";
  },
  get "Table2G-rh1"() {
    return "Nouns that get narrowed in the nominative plural";
  },
  get "Table2G-rh2"() {
    return <>Nouns ending in <i>-a</i> in the nominative plural</>
  },
  get "2-2-4-c-title"() {
    return "The Vocative Plural";
  },
  get "2-2-4-c-p1"() {
    return <>The vocative plural form is the same as the nominative plural except in the weak plurals. Normally, <i>-a</i> is added to the form inf the nominative singular of those nouns to form the vocative plural, e.g., <i>Corcaíoch</i>, <i>a Chorcaíocha</i>; <i>fear</i>, <i>a fheara</i>; <i>Gael</i>, <i>a Ghaela</i>.</>
  },
  get "2-3-title"() {
    return "The Second Declension";
  },
  get "2-3-1-title"() {
    return "The Singular";
  },
  get "2-3-1-p"() {
    return <>Nouns in this declension end with a consonant, broad or slender, in the nominative singular. They are all feminine other than <i>im</i> and <i>sliabh</i>.</>
  },
  get "2-3-2-title"() {
    return "The Genitive Singular";
  },
  get "2-3-2-a"() {
    return <>An <i>-e</i> is put with the nominative singular and if it ends with a broad consonant, it is palatalized, e.g., <i>bróg</i>, <i>bróige</i>; <i>coill</i>, <i>coille</i>; <i>earr</i>, <i>eirre</i>; except with polysyllabic nouns ending with <i>-(e)ach</i>.</>
  },
  get "2-3-2-b"() {
    return <>When polysyllabic nouns end with <i>-(e)ach</i>, <i>-(a)í</i> is made from <i>-(e)ach</i>, e.g., <i>scornach</i>, <i>scornaí</i>; <i>cailleach</i>, <i>caillí</i>.</>
  },
  get "2-3-2-c-p1"() {
    return <>The palatalization changes mentioned in <a href="#sec_2_1_4">2.1.4</a> apply to the nouns as follows:</>
  },
  get "2-3-2-c-i"() {
    return <><i>-ea-</i> to <i>-ei-</i>, e.g., <i>beach</i>, <i>beiche</i> (<i>-ea-</i> is changed to <i>-i-</i> in a monosyllabic noun, e.g., <i>beann</i>, <i>binne</i>; <i>cearc</i>, <i>circe</i>; and in the unaccented syllable of the polysyllabic noun, e.g., <i>bruinneall</i>, <i>bruinnille</i>; <i>ficheall</i>, <i>fichille</i>); and</>
  },
  get "2-3-2-c-ii"() {
    return <><i>-ia-</i> to <i>-i-</i> in the word <i>scian</i>, <i>scine</i>.</>
  },
  get "2-3-3-title"() {
    return "The Dative Singular";
  },
  get "2-3-3-p1"() {
    return "There are two forms of the dative singular when nouns end with a broad consonant:";
  },
  get "2-3-3-a"() {
    return "one form is the same as the nominative singular;";
  },
  get "2-3-3-b"() {
    return <>a distinct old form used only in well-established expressions, e.g., <i>cur i gcéill</i>; <i>cur dá chois</i>; <i>airgead ar láimh</i>; <i>bolg le gréin</i>; <i>imithe le gealaigh</i>; <i>cur de láimh</i>; <i>faoi bhois an chait</i>; <i>bíonn a chroí ar a bhois i gcónaí aige</i>; <i>ar éill</i>; etc.</>
  },
  get "2-3-4-title"() {
    return "The Plural";
  },
  get "2-3-4-p1"() {
    return "There are both weak plurals and strong plurals in this declension.";
  },
  get "2-3-4-p2"() {
    return <>Note that the pattern of the Second Declension is seen in the genitive singular column in the following tables. That is, the genitive singular ends with <i>-e</i> and the final consonant is palatalized if it is a broad consonant, and for polysyllabic nouns ending in <i>-each</i>, <i>-each</i> is changed to <i>-(a)í</i>.</>
  },
  get "2-3-4-a-title"() {
    return "Strong Plurals";
  },
  get "Table2H-Title"() {
    return "Strong Plurals in the Second Declension &mdash; Examples";
  },
  get "Table2H-CornerHeading"() {
    return "Strong Plural Classes";
  },
  get "Table2H-rh1"() {
    return <>Nouns ending in <i>-a</i> in the plural and syncopated, whose vowels are broadened or exchanged</>
  },
  get "Table2H-rh2"() {
    return <>Nouns ending in <i>-(e)anna</i> in the plural</>
  },
  get "Table2H-rh3-title"() {
    return <>Nouns ending in <i>-í</i> in the plural</>
  },
  get "Table2H-rh3-p"() {
    return "Polysyllabic nouns ending in a slender consonant in the nominative singular.";
  },
  get "Table2H-rh4-title"() {
    return <>Nouns ending in <i>-(e)acha</i> in the plural</>
  },
  get "Table2H-rh4-p"() {
    return <>Monosyllabic nouns, and polysyllabic nouns ending in a slender consonant in the nominative singular (other than <i>iníon</i> which ends on a broad consonant).</>
  },
  get "Table2H-rh5-title"() {
    return <>Nouns ending in <i>-ta</i> in the plural</>
  },
  get "Table2H-rh5-p"() {
    return <>Some monosyllabic nouns ending in a broad <i>-l</i> or <i>-n</i> in the nominative singular.</>
  },
  get "Table2H-rh6-title"() {
    return <>Nouns ending in <i>-te</i> in the plural</>
  },
  get "Table2H-rh6-p"() {
    return <>The occasional noun ending in a slender <i>-l</i> or <i>-n</i> in the nominative singular.</>
  },
  get "Table2H-rh7"() {
    return <>Nouns ending in <i>-e</i> in the plural and that are syncopated</>
  },
  get "Table2H-rh8"() {
    return "Miscellaneous nouns";
  },
  get "2-3-4-b-title"() {
    return "Weak Plurals";
  },
  get "Table2I-Title"() {
    return "Weak Plurals in the Second Declension &mdash; Examples";
  },
  get "Table2I-CornerHeading"() {
    return "Weak Plural Classes";
  },
  get "Table2I-rh1"() {
    return <>Monosyllabic and polysyllabic nouns ending in a broad consonant in the nominative singular and have a <i>-a</i> added in the nominative plural and no other changes</>
  },
  get "Table2I-rh2"() {
    return <>Nouns that are broadened and end in <i>-a</i> in the nominative plural</>
  },
  get "Table2I-rh3"() {
    return <>The occasional noun ending in a slender consonant in the nominative singular and ending in <i>-e</i> in the nominative plural</>
  },
  get "2-4-title"() {
    return "The Third Declension";
  },
  get "2-4-1-title"() {
    return "The Singular";
  },
  get "2-4-1-a"() {
    return <>This declension has the polysyllabic nouns ending in <i>-áil</i>, <i>-aíl</i>, <i>-cht</i>, <i>-éir</i>, <i>-eoir</i>, <i>-irt</i>, <i>-óir</i>, <i>-úil</i>, <i>-úint</i>, <i>-úir</i> (other than country names that are in the second declension, e.g., <i>an Ailgéir</i>, <i>an Bhrasaíl</i>, <i>an Iodáil</i>).</>
  },
  get "2-4-1-b"() {
    return <>This declension also has some nouns ending in a consonant, broad or slender, in the nominative singular. For these nouns, the genitive singular ends with <i>-a</i> and the final consonant is broadened if necessary, e.g., <i>buachaill</i>, <i>buachalla</i>; <i>gleann</i>, <i>gleanna</i> (see <a href="#sec_2_1_5">2.1.5</a>).</>
  },
  get "2-4-2-title"() {
    return "The Genitive Singular";
  },
  get "2-4-2-a"() {
    return <>As with in <a href="#sec_2_4_1_b">(b)</a> above, the genitive singular ends with <i>-a</i>.</>
  },
  get "2-4-2-b"() {
    return <>It is customary to change <i>-io-</i> to <i>-ea-</i> in the genitive singular for monosyllabic nouns, e.g., <i>crios</i>, <i>creasa</i>; <i>lios</i>, <i>leasa</i>; but not <i>cion</i> (meaning <i>coir</i>, <Tl tlText="crime"></Tl>), <i>ciona</i>.</>
  },
  get "2-4-2-c"() {
    return <>The <i>-t</i> is dropped in the genitive singular from nouns ending in <i>-int</i>, e.g., <i>oiliúint</i>, <i>oiliúna</i> (with these exceptions <i>cogaint</i>, <i>coganta</i>; <i>cosaint</i>, <i>cosanta</i>; <i>seachaint</i>, <i>seachanta</i>). The <i>-th-</i> is turned to <i>-t</i> when nouns end in <i>-irt</i>, e.g., <i>imirt</i>, <i>imeartha</i>.</>
  },
  get "2-4-3-title"() {
    return "The Plural";
  },
  get "2-4-3-p1"() {
    return "There are both weak plurals and strong plurals in this declension.";
  },
  get "2-4-3-p2"() {
    return <>Note that the pattern of the Third Declension is seen in the genitive singular column in the following table. That is, the genitive singular ends with <i>-a</i> and the last consonant is broadened if it is a slender consonant.</>
  },
  get "2-4-3-a-title"() {
    return "Strong Plurals";
  },
  get "Table2J-Title"() {
    return "Strong Plurals in the Third Declension &mdash; Examples";
  },
  get "Table2J-CornerHeading"() {
    return "Strong Plural Classes";
  },
  get "Table2J-rh1-title"() {
    return <>Nouns ending in <i>-(a)í</i> in the plural</>
  },
  get "Table2J-rh1-p"() {
    return <>Polysyllabic nouns (masculine other than a few, e.g., <i>altóir, seanmóir</i>) ending in <i>-éir</i>, <i>-eoir</i>, <i>-óir</i>, <i>-úir</i>, and polysyllabic nouns (feminine other than few, e.g., <i>bunreacht</i>, <i>comhlacht</i>, <i>complacht</i>, <i>gnólacht</i>) ending in <i>-cht</i>, <i>-irt</i>, <i>-úint</i> in the nominative singular.</>
  },
  get "Table2J-rh2-title"() {
    return <>Nouns ending in <i>-(e)anna</i> in the plural</>
  },
  get "Table2J-rh2-p"() {
    return <>Polysyllabic masculine nouns (other than some that are feminine, e.g., <i>cuid</i>, <i>dleacht</i>, <i>troid</i>, <i>uaim</i>).</>
  },
  get "Table2J-rh3"() {
    return <>Nouns ending in <i>-a</i> in the plural and syncopated, broadened or exchanged vowels</>
  },
  get "Table2J-rh4-title"() {
    return <>Nouns ending in <i>-acha</i> in the plural</>
  },
  get "Table2J-rh4-p1"() {
    return <>Polysyllabic feminine nouns ending in a slender <i>-l</i>, <i>-n</i> or <i>-r</i> (exceptions: <i>anam</i>, <i>anama</i>, <i>anamacha</i>; <i>úim</i>, <i>úma</i>, <i>úmacha</i>) in the nominative singular.</>
  },
  get "Table2J-rh4-p2"() {
    return <>Note that this is also how the genitive singular of a noun ending in <i>-aíl</i> is formed, e.g., <i>feadaíl</i>, <i>feadaíola</i>; <i>sceamhaíl</i>, <i>sceamhaíola</i>.</>
  },
  get "Table2J-rh5-title"() {
    return <>Nouns ending in <i>-ta</i> in the plural</>
  },
  get "Table2J-rh5-p"() {
    return <>Monosyllabic nouns ending in <i>-l</i> or <i>-n</i> that is broad (masculine) or slender (feminine) in the nominative singular.</>
  },
  get "Table2J-rh6"() {
    return <>Nouns ending in <i>-te</i> in the plural</>
  },
  get "Table2J-rh7-title"() {
    return "Miscellaneous Nouns";
  },
  get "2-4-3-b-title"() {
    return "Weak Plurals";
  },
  get "Table2K-Title"() {
    return "Weak Plurals in the Third Declension &mdash; Examples";
  },
  get "Table2K-CornerHeading"() {
    return "Weak Plural Classes";
  },
  get "Table2K-Col1Text"() {
    return "Miscellaneous nouns";
  },
  get "2-5-title"() {
    return "The Fourth Declension";
  },
  get "2-5-1-title"() {
    return "The Singular";
  },
  get "2-5-1-a"() {
    return <>This declension has the masculine nouns ending in <i>-ín</i>, diminutives ending in <i>-ín</i>, the majority of the nouns ending in a vowel, and a small number of other nouns.</>
  },
  get "2-5-1-b"() {
    return <>Occupational nouns ending in <i>-(a)í</i> or <i>-aire</i> are also masculine, e.g., <i>ceannaí</i>, <i>cócaire</i>.</>
  },
  get "2-5-1-c"() {
    return <>Abstract nouns ending in <i>-e</i> and formed from an adjective are feminine, e.g., <i>airde</i>, <i>gile</i>, <i>saoirse</i>.</>
  },
  get "2-5-2-title"() {
    return "The Genitive Singular";
  },
  get "2-5-2-a"() {
    return "Nouns of this declension do not undergo any change in the genitive singular.";
  },
  get "2-5-2-b"() {
    return <>The diminutive <i>-ín</i> normally is feminine if the original word is a common feminine word. There are exceptions, e.g., <i>paidir</i> (fem.), <i>paidrín</i> (masc.); <i>toit</i> (fem.), <i>toitín</i> (masc.). However, all diminutives are declined as masculine nouns in the genitive and vocative singular, e.g., <i>an bheainín bheag</i>, <i>teach an bheainín bhig</i>, <i>a bheainín bhig</i>.</>
  },
  get "2-5-2-c"() {
    return <>There are some nouns in this Declension that do not have any plural, e.g., <i>cruach</i> (meaning <i>miotal</i> (<i>EN: metal</i>)), <i>dóthain</i>, <i>gorta</i>, <i>lucht</i> (meaning <i>daoine</i> (<i>EN: people</i>)), <i>oiread</i>, <i>tobac</i>.</>
  },
  get "2-5-3-title"() {
    return "The Plural";
  },
  get "2-5-3-p1"() {
    return "The vast majority of the nouns in this declension have strong plurals.";
  },
  get "2-5-3-p2"() {
    return "Note that the Fourth Declension&rsquo;s pattern is shown in the singular column in the table below. That is, the form of the genitive singular is the same as the form of the nominative plural.";
  },
  get "2-5-3-a-title"() {
    return "Strong Plurals";
  },
  get "Table2L-Title"() {
    return "Strong Plurals in the Fourth Declension &mdash; Examples";
  },
  get "Table2L-CornerHeading"() {
    return "Strong Plural Classes";
  },
  get "Table2L-rh1-title"() {
    return <>Nouns ending in <i>-(a)í</i> in the plural</>
  },
  get "Table2L-rh1-p"() {
    return <>Nouns ending in <i>-a</i>, <i>-e</i>, <i>-ín</i> in the singular.</>
  },
  get "Table2L-rh2-title"() {
    return <>Nouns ending in <i>-te</i> in the plural</>
  },
  get "Table2L-rh2-p"() {
    return <>Occasional nouns ending in <i>-le</i>, <i>-ne</i> in the singular.</>
  },
  get "Table2L-rh3-title"() {
    return <>Nouns ending in <i>-(i)the</i> in the plural</>
  },
  get "Table2L-rh3-p"() {
    return <>Nouns ending in <i>-(a)í</i>, <i>-aoi</i>, <i>-é</i> in the singular (<i>-í-</i> is not shortened in the monosyllabic nouns, other than <i>ní</i>, <i>nithe</i>).</>
  },
  get "Table2L-rh4-title"() {
    return <>Nouns ending in <i>-nna</i> in the plural</>
  },
  get "Table2L-rh4-p"() {
    return <>Nouns ending in <i>-á</i>, <i>-ao</i>, <i>-eá</i>, <i>-eo</i>, <i>-ia</i>, <i>-ó</i>, <i>-ogha</i>, <i>-ú</i>, <i>-ua</i> in the singular.</>
  },
  get "Table2L-rh5"() {
    return <>Some nouns ending in a consonant in the singular and have <i>-(e)anna</i> added in the plural and no other changes</>
  },
  get "Table2L-rh6"() {
    return <>Occasional nouns ending in <i>-ite</i> in the plural</>
  },
  get "Table2L-rh7"() {
    return "Miscellaneous nouns";
  },
  get "2-5-3-Note"() {
    return <>Note that in the following nouns, which do not necessarily have a plural form, also belong to this declension: <i>cruach</i> (meaning <i>miotal</i> (<i>EN: metal</i>)), <i>dóthain</i>, <i>gorta</i>, <i>iomad</i>, <i>lucht</i> (meaning <i>daoine</i> (<i>EN: people</i>)), <i>oiread</i>, <i>tobac</i>; along with some personal names, e.g., <i>Cáit</i>, <i>Liam</i>, <i>Pilib</i>, <i>Siobhán</i>, <i>Uileag</i>.</>
  },
  get "2-6-title"() {
    return "The Fifth Declension";
  },
  get "2-6-1-title"() {
    return "The Singular";
  },
  get "2-6-1-a"() {
    return "The majority of the nouns in this declension are feminine.";
  },
  get "2-6-1-b"() {
    return <>This declension also has some nouns ending in slender consonants or a vowel in the nominative singular and on a broad consonant (<i>-ch</i>, <i>-d</i>, <i>-(n)n</i>, <i>-r</i>) in the genitive singular.</>
  },
  get "2-6-2-title"() {
    return "The Plural";
  },
  get "2-6-2-p1"() {
    return "The vast majority of nouns in this declension have strong plurals.";
  },
  get "2-6-2-p2"() {
    return <>Note that the pattern of the Fifth Declension is shown in the genitive singular column of the following table. That is, the genitive singular ends with broad consonants <i>-ch</i>, <i>-d</i>, <i>-(n)n</i>, <i>-r</i> (other than rare exceptions, e.g., <i>Nollaig</i>, <i>Nollag</i>).</>
  },
  get "2-6-2-a-title"() {
    return "Strong Plurals";
  },
  get "Table2M-Title"() {
    return "Strong Plurals in the Fifth Declension &mdash; Examples";
  },
  get "Table2M-CornerHeading"() {
    return "Strong Plural Classes";
  },
  get "Table2M-rh1-title"() {
    return <>Nouns ending in <i>-(e)acha</i> in the plural</>
  },
  get "Table2M-rh1-p1"() {
    return <>Feminine nouns ending in <i>-il</i>, <i>-in</i>, <i>-ir</i> in the nominative singular (exceptions: <i>siúr, siúrach</i>). In the genitive singular, the final consonant of a monosyllabic noun is broadened, and other nouns do not undergo syncopation, and an <i>-ach</i> is added (exceptions: <i>cathaoir</i>, <i>cathaoireach</i>).</>
  },
  get "Table2M-rh1-p2"() {
    return <>Polysyllabic nouns are syncopated if they have a short vowel in the final syllable and <i>-(e)ach</i> is added.</>
  },
  get "Table2M-rh2-title"() {
    return <>The occasional nouns that ends in <i>-inn</i>, <i>-ir</i> in the nominative singular, broadened in the genitive singular and ending in <i>-(e)acha</i> in the plural.</>
  },
  get "Table2M-rh2-p"() {
    return <>(Exceptions: <i>bráthair</i>, <i>bráthar</i>, <i>bráithre</i>.)</>
  },
  get "Table2M-rh3-title"() {
    return <>Nouns ending in <i>-na</i>, <i>-ne</i> in the plural</>
  },
  get "Table2M-rh3-p"() {
    return <>Feminine nouns ending in a vowel in the nominative singular and in <i>-n</i> in the genitive singular (exceptions: <i>díle</i>, <i>díleann</i>, <i>dílí</i>; <i>lacha</i>, <i>lachan</i>, <i>lachain</i> (gen. sg. <i>lachan</i>)).</>
  },
  get "Table2M-rh4-title"() {
    return <>Nouns ending in <i>-idí</i> in the plural</>
  },
  get "Table2M-rh4-p1"() {
    return <>The occasional masculine noun ending in <i>-d</i> in the genitive singular.</>
  },
  get "Table2M-rh4-p2"() {
    return <>Note that <i>daichead</i> (<i>daichid</i>, <i>daichidí</i>) belongs to the first declension.</>
  },
  get "Table2M-rh5"() {
    return "Miscellaneous nouns";
  },
  get "2-7-title"() {
    return "Irregular Nouns";
  },
  get "2-7-p"() {
    return "The inflections of the following nouns do not correspond to any of the declensions:";
  },
  get "Table2N-Title"() {
    return "Irregular Nouns &mdash; Examples";
  },
  get "Table2N-masc"() {
    return "masc.";
  },
  get "Table2N-fem"() {
    return "fem.";
  },
  get "2-7-Note"() {
    return <>Note that a distinct old form of the word <i>lá</i> is used in the old phrase <i>ar athló</i>, e.g., <i>Tá an Dáil ar athló</i>.</>
},
};
