import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  get "PresentTense"(){
    return "Present Tense";
  },
  get "OrdinaryPresentTense"(){
    return "Present Habitual Tense";
  },
  get "PastTense"(){
    return "Past Tense";
  },
  get "PastHabitualTense"(){
    return "Past Habitual Tense";
  },
  get "FutureTense"(){
    return "Future Tense";
  },
  get "ConditionalMood"(){
    return "Conditional Mood";
  },
  get "SubjunctiveMood"(){
    return "Subjunctive Mood";
  },
  get "PresentSubjunctiveMood"(){
    return "Present Subjunctive Mood";
  },
  get "ImperativeMood"(){
    return "Imperative Mood";
  },
  get "IndicativeMood"(){
    return "Indicative Mood";
  },
  get "VerbalNoun"(){
    return "Verbal Noun";
  },
  get "VerbalAdjective"(){
    return "Verbal Adjective";
  },
  get "teidealNaCaibidle"(){
    return "The Verb";

  },
  get "5-1-title"(){
    return "The Regular Verbs";
  },
  get "5-title"(){
    return <>{en_US_Common["Caibidil"]} 5 | {en_US["teidealNaCaibidle"]}</>;
  },
  get "5-1-1-p"(){
    return "There are two conjugations for regular verbs.";
  },
  get "5-1-2-p"(){
    return "The First Conjugation applies to:";
  },
  get "5-1-2-a-p"(){
    return <>verbs of monosyllabic roots, e.g., <i>bog</i>, <i>bris</i>, <i>caith</i>, <i>mol</i>, including verbs ending in <i>igh</i>, e.g., <i>breoigh</i>, <i>clóigh</i>, <i>cráigh</i>, <i>iaigh</i>, <i>luaigh</i>, <i>reoigh</i>, <i>sáigh</i>;</>;
  },
  get "5-1-2-b-p"(){
    return <>verbs of polysyllabic roots ending in <i>áil</i>, e.g., <i>sábháil</i>, <i>tarrtháil</i>, and some particular polysyllabic verbs, e.g., <i>adhlaic</i>, <i>ceiliúir</i>, <i>gearán</i>, <i>seachaid</i>, <i>taispeáin</i>, <i>tíolaic</i>.</>;
  },
  get "5-1-3-p"(){
    return "The Second Conjugation applies to:";
  },
  get "5-1-3-a-p"(){
    return <>verbs with polysyllabic roots ending in <i>-(a)igh</i>, e.g., <i>ceannaigh</i>, <i>imigh</i></>;
  },
  get "5-1-3-b-p"(){
    return <>verbs with polysyllabic roots ending in <i>-(a)il</i>, <i>-(a)in</i>, <i>-(a)ir</i>, <i>-(a)is</i> and syncopated in the conjugation, e.g., <i>agair</i>, <i>codail</i>, <i>cogain</i>, <i>iompair</i>, <i>tochail</i>;</>;
  },
  get "5-1-3-c-p"(){
    return <>a small number of particular verbs such as <i>foghlaim</i>, <i>fulaing</i>, <i>tarraing</i>, <i>tuirling</i>.</>;
  },
  get "5-1-4-p"(){
    return "The conjugation of a compound verb is usually the same as that of the verb from which it is formed:";
  },
  get "5-1-4-a-p"(){
    return <><i>aisíoc</i>, <i>athdhear</i> and <i>comhlíon</i> in the first conjugation are similar to <i>íoc</i>, <i>dear</i> and <i>líon</i>; and</>;
  },
  get "5-1-4-b-p"(){
    return <><i>athchomhairligh</i>, <i>comhdhlúthaigh</i> and <i>comhshínigh</i> in the second conjugation are similar to <i>comhairligh</i>, <i>dlúthaigh</i> and <i>sínigh</i>.</>;
  },
  get "5-1-5-title"(){
    return "The Subjunctive Mood";
  },
  get "5-1-5-a-p"(){
    return <>If a sentence has a optative function, it is always in the subjunctive mood, e.g., <i>Go raibh maith agat</i> <Tl tlText="Thank you (lit. may goodness be at you)" />; <i>Go dté tú slán</i> <Tl tlText="May you go safely" />. There is a choice between the present subjunctive mood and the future tense when the verb of the main clause is in the primary tense in the following contexts:</>;
  },
  get "5-1-5-a-i-p"(){
    return <>after the temporal conjuctions <i>ach a</i> <Tl tlText="as soon as" />, <i>go</i> <Tl tlText="until" />, <i>nó go</i> <Tl tlText="until" />, <i>sula</i> <Tl tlText="before" />, e.g., <i>Gheobhaimid an scéal ceart ach a dtaga</i> (<i>a dtiocfaidh</i>) <i>Pól</i> <Tl tlText="We will get the right story as soon as Paul comes" />; <i>Ná beannaigh don diabhal go mbeannaí</i> (<i>go mbeannóidh</i>) <i>sé duit</i> (<b>EN</b>: <i>Do not greet the devil until he greets you</i> (see <a href="https://www.teanglann.ie/en/fgb/diabhal" target="blank">FGB entry</a>)); <i>Beidh tú ann nó go bhfása</i> (<i>nó go bhfásfaidh</i>) <i>coincleach ort</i> <Tl tlText="You will be there until mold will grow on you" />; <i>Beidh siad ann sula mbuailtear</i> (<i>sula mbuailfear</i>) <i>clog an aingil</i> <Tl tlText="They will be there before the angel&rsquo;s bell is struck" />.</>;
  },
  get "5-1-5-a-ii-p"(){
    return <>after the conjunction of purpose <Tl tlText="so that" /> <i>go</i>, <i>nó go</i>, e.g., <i>Féach é go bhfeice</i> (<i>go bhfeicfidh</i>) <i>tú</i> <Tl tlText="Look at it so that you may see it" />; <i>Suigh nó go raibh</i> (<i>nó go mbeidh</i>) <i>do scíth déanta agat</i> <Tl tlText="Sit so that you may have rested" />;</>;
  },
  get "5-1-5-a-iii-p"(){
    return <>in the first open clause after <i>mura</i> <Tl tlText="if not" />, e.g., <i>Mura gcuire</i> (<i>mura gcuirfidh</i>) <i>tú</i>, <i>ní bhainfidh tú</i> <Tl tlText="If you do not put, you will not gain" />.</>;
  },
  get "5-1-5-b-i-p"(){
    return <>The forms of the past subjunctive mood are the same as the forms of the dependent past habitual tense (except for the verb <i>bí</i>) (see the Dependent Form, <a href="#sec_5_1_8">5.1.8</a>). The conditional mood&rsquo;s form can also be used instead of the past subjunctive if the main clause is in the past tense, the past habitual tense or the conditional mood, e.g., <i>Tháinig</i> (<i>thagadh</i>, <i>thiocfadh</i>) <i>sí aír preo fíctí</i> (<i>bhfécfí</i>) <i>í</i> <Tl tlText="She came in before she would have seen it" />. For the verb <i>bí</i>, the forms of the past subjunctive mood are the same as the conditional mood.</>;
  },
  get "5-1-5-b-ii-p"(){
    return <>In the tables in this chapter, the present subjunctive mood is indicated by the particle <i>go</i>. Although eclipsis follows that particle and some others, this is not true for every particle accompanying the subjunctive mood. Lenition follows <i>nár</i>, e.g., <i>Nár fhana sé i bhfad</i> <Tl tlText="He did not stay long" />.</>;
  },
  get "5-1-6-title"(){
    return "The Negative Particle";
  },
  get "5-1-6-p"(){
    return <><i>ní</i> (<i>níor</i>) is the negative particle and is shown in the tables where the negative form is given.</>;
  },
  get "5-1-7-title"(){
    return "The Independent Form";
  },
  get "5-1-7-p"(){
    return <>The independent form is the form of the verb used in an affirmative explicative principal clause, e.g., <i>bhí mé</i> <Tl tlText="I was" />; <i>ceannóidh sé</i> <Tl tlText="He will buy" />; <i>mholfadh sí</i> <Tl tlText="She would praise" />. Unless otherwise stated, it is the independent form that is given in the conjugations in the rest of this chapter, except in the Present Subjunctive Mood.</>;
  },
  get "5-1-8-title"(){
    return "The Dependent Form";
  },
  get "5-1-8-p"(){
    return <>The dependent form follows these conjunctions, relative pronominals and verbs: <i>a/ar</i> (= the relative particle), <i>a/ar</i> (= <i>an méid a/ar</i> <Tl tlText="the size/extent" />), <i>an/ar</i>, <i>cá/cár</i>, <i>dá/dár</i>, (<i>de</i> or <i>do</i> + <i>a</i> (<i>ar</i>)) and <i>dá</i> (conditional), <i>go/gur</i>, <i>mura/murar</i>, <i>nach/nár</i>, <i>ní/níor</i>, <i>sula/sular</i> (see <a href="./chapter10.html#sec_10_4_2">10.4.2</a> and <a href="./chapter10.html#sec_10_8_2">10.8.2</a>).</>;
  },
  get "5-1-8-note"(){
    return <>The forms ending in <i>-r</i> above are used only in the past tense (but see <a href="./chapter5.html#sec_5_4_5">5.4.5</a>).</>;
  },
  get "5-1-9-title"(){
    return <>Verb Tense for <i>má</i> and <i>nuair</i></>;
  },
  get "5-1-9-p"(){
    return <>The present habitual tense is followed by <i>má</i> to express a future condition, e.g., <i>Déanfaidh mé um thráthnóna é má bhíonn deis agam</i> <Tl tlText="I will do it in the evening if I have the opportunity" />. The future tense is what follows <i>nuair</i> if it is something that will be happening in the future, e.g., <i>Glan é nuair a thiocfaidh tú isteach amárach</i> <Tl tlText="Clean it when you come in tomorrow" />.</>;
  },
  get "5-1-10-title"(){
    return <><i>Muid</i></>;
  },
  get "5-1-10-p"(){
    return <><i>muid</i> <Tl tlText="we" /> can be used with the analytic form of the verb in the first person plural in preference to the conjugated forms of the verb (given in the tables) in all moods and tenses. The analytic form <i>muid</i> and the conjugated forms of the verb in the first person plural have the same status.</>;
  },
  get "Table5A-caption"(){
    return <>The Analytic Form <i>muid</i></>;
  },
  get "Table5A-col1"(){
    return "Tense/Mood";
  },
  get "Table5A-col2"(){
    return <>Analytic Form + <i>muid</i></>;
  },
  get "Table5A-col3"(){
    return "Conjugated Form of the Verb";
  },
  get "briathar-Mol"(){
    return "Praise";
  },
  get "briathar-Bris"(){
    return "Break";
  },
  get "5-2-title"(){
    return "The First Conjugation";
  },
  get "5-2-1-title"(){
    return <>Verbs from monosyllabic roots ending in a consonant other than <i>-gh</i></>;
  },
  get "Table5B-caption"(){
    return <>The First Conjugation &#8212; Conjugation of the Verb <i>mol</i></>;
  },
  get "Table5C-caption"(){
    return <>The First Conjugation &#8212; Conjugation of the Verb <i>bris</i></>;
  },
  get "Table5C-Note"(){
    return <>The independent verb is lenited in the indicative mood for past tense (other than the autonomous verb) and for past habitual tense, and in the conditional mood. There is more information in <a href="./chapter10.html#sec_10_4">10.4</a> about the other contexts in which the dependent and independent verb is lenited and the contexts in which the verb is eclipsed are discussed in <a href="./chapter10.html#sec_10_8">10.8</a>.</>;
  },
  get "briathar-Sábháil"(){
    return "Save";
  },
  get "briathar-Tíolaic"(){
    return "Show";
  },
  get "5-2-1-a-p"(){
    return <>Regular verbs from monosyllabic roots ending in a broad consonant are formed in the same way as <i>mol</i>, and regular verbs are formed from monosyllabic roots ending in a slender consonant in the same way as <i>bris</i>.</>;
  },
  get "5-2-1-b-p"(){
    return <>If a root ending in <i>-t</i> or <i>-th</i> (e.g., <i>at</i>, <i>loit</i>, <i>caith</i>, <i>leath</i>) joins an affix beginning with <i>-t</i> (e.g., <i>-tar/-tear</i>, <i>-taí/-tí</i>, <i>-tá/-tá</i>, <i>-ta/-te</i>), the <i>-t(h)t-</i> becomes <i>-t-</i>:</>;
  },
  get "5-2-1-b-Table-col1"(){
    return <>Ends in broad <i>-t(h)</i></>;
  },
  get "5-2-1-b-Table-col2"(){
    return <>Ends in slender <i>-t(h)</i></>;
  },
  get "5-2-1-c-p"(){
    return <>If a root ending in <i>-bh</i> or <i>-mh</i> (e.g., <i>gabh</i>, <i>ríomh</i>) joins an affix beginning with <i>-th-</i> (e.g., <i>-tha</i> in the verbal adjective), the <i>-bhth-</i> or <i>-mhth-</i> becomes <i>-f-</i>:</>;
  },
  get "EndsWith"(){
    return "Ends with";
  },
  get "5-2-1-d-p"(){
    return <><i>-bh</i>, <i>-mh</i> and <i>-th</i> are retained before <i>-f-</i>, e.g., <i>scríobhfaí</i>, <i>ríomhfá</i>, <i>chaithfeá</i>:</>;
  },
  get "5-2-2-title"(){
    return "Verbs from Polysyllabic Roots";
  },
  get "Table5D-caption"(){
    return <>The First Conjugation &mdash; Conjugation of the Verb <i>sábháil</i></>;
  },
  get "Table5D-note"(){
    return <>As for verbs ending in <i>-áil</i>, note that these forms with <i>-t-</i> are slender, e.g., <i>athchúrsáiltear</i>, <i>d&rsquo;athchúrsáiltí</i>, <i>athchúrsáilte</i>; <i>sábháiltear</i>, <i>shábháiltí</i>, <i>sábháilte</i>, but the forms with <i>-f-</i> are broad, e.g., <i>athchúrsálfar</i>, <i>d&rsquo;athchúrsálfaí</i>; <i>sábhálfar</i>, <i>shábhálfaí</i>.</>;
  },
  get "Table5E-caption"(){
    return <>The First Conjugation &mdash; Conjugation of the Verb <i>tíolaic</i></>;
  },
  get "5-2-2-tables-col1"(){
    return "Root";
  },
  get "5-2-2-tables-col2"(){
    return "First Person Singular <br /> Present Tense";
  },
  get "5-2-2-tables-col3"(){
    return "Verbal Noun";
  },
  get "5-2-2-tables-col4"(){
    return "Verbal Adjective";
  },
  get "briathar-bácáil"(){
    return "bake";
  },
  get "briathar-cóipeáil"(){
    return "copy";
  },
  get "briathar-nótáil"(){
    return "note";
  },
  get "briathar-péinteáil"(){
    return "paint";
  },
  get "briathar-adhair"(){
    return "worship";
  },
  get "briathar-adhlaic"(){
    return "bury";
  },
  get "briathar-ceiliúir"(){
    return "celebrate";
  },
  get "briathar-seachaid"(){
    return "deliver";
  },
  get "briathar-tionóil"(){
    return "assemble";
  },
  get "briathar-toirmisc"(){
    return "forbid";
  },
  get "briathar-tiomáin"(){
    return "drive";
  },
  get "briathar-coimeád"(){
    return "keep";
  },
  get "briathar-gearán"(){
    return "complain";
  },
  get "5-2-2-a-p"(){
    return <>Verbs conjugated like <i>sábháil</i>:</>;
  },
  get "5-2-2-b-p"(){
    return <>Verbs conjugated like <i>tíolaic</i>:</>;
  },
  get "5-2-2-c-p"(){
    return "Verbs that are kept slender throughout (excluding the verbal noun) in their conjugation:";
  },
  get "5-2-2-d-p"(){
    return "Verbs that are kept broad throughout in their conjugation:";
  },
  get "5-2-2-note"(){
    return <>The verbs from the roots <i>adhain</i>, <i>adhair</i> and <i>sleabhac</i> are syncopated as if <i>adhn-</i>, <i>adhr-</i>, <i>sleabhc-</i>, were their root, e.g., <i>adhnann sé</i>, <i>adhrfaidh sí</i>, <i>sleabhctha</i>, except in the analytic past tense, e.g., <i>d&rsquo;adhain sé</i>, <i>d&rsquo;adhair sí</i>, <i>shleabhac siad</i>, and in verbal adjectives <i>adhain</i>, <i>adhair</i>, e.g., <i>adhainte</i>, <i>adhartha</i>.</>;
  },
  get "5-2-3-title"(){
    return <>Verbs from monosyllabic roots ending in <i>-gh</i></>;
  },
  get "briathar-Cráigh"(){
    return "Torment";
  },
  get "briathar-Dóigh"(){
    return "Burn";
  },
  get "Table5F-caption"(){
    return <>The First Conjugation &mdash; Conjugation of the Verb <i>cráigh</i></>;
  },
  get "Table5F-note"(){
    return <>For verbs that are conjugated like <i>cráigh</i> and <i>dóigh</i>, note that the forms with <i>-t-</i> are slender, e.g., <i>chráiteá</i>, <i>cráitear</i>; <i>dhóiteá</i>, <i>dóitear</i>, but the forms with <i>-f-</i> are broad, e.g., <i>cráfaidh tú</i>, <i>chráfaí</i>; <i>dófaidh tú</i>, <i>dhófaí</i>.</>;
  },
  get "Table5G-caption"(){
    return <>The First Conjugation &mdash; Conjugation of the Verb <i>dóigh</i></>;
  },
  get "briathar-báigh"(){
    return "drown";
  },
  get "briathar-cneáigh"(){
    return "wound";
  },
  get "briathar-meáigh"(){
    return "weigh";
  },
  get "briathar-leáigh"(){
    return "melt";
  },
  get "briathar-clóigh"(){
    return "print";
  },
  get "briathar-breoigh"(){
    return "heat";
  },
  get "briathar-dreoigh"(){
    return "decay";
  },
  get "briathar-feoigh"(){
    return "wither";
  },
  get "briathar-reoigh"(){
    return "freeze";
  },
  get "briathar-brúigh"(){
    return "press";
  },
  get "briathar-crúigh"(){
    return "milk";
  },
  get "briathar-liúigh"(){
    return "yell";
  },
  get "briathar-súigh"(){
    return "absorb";
  },
  get "briathar-luaigh"(){
    return "mention";
  },
  get "briathar-beoigh"(){
    return "live";
  },
  get "briathar-buaigh"(){
    return "win";
  },
  get "briathar-cruaigh"(){
    return "harden";
  },
  get "briathar-fuaigh"(){
    return "blow";
  },
  get "briathar-glaoigh"(){
    return "call";
  },
  get "briathar-iaigh"(){
    return "shut";
  },
  get "5-2-3-A-a-p"(){
    return <>Verbs conjugated like <i>cráigh</i>, <i>dóigh</i>:</>;
  },
  get "5-2-3-A-b-p"(){
    return "Verbs with a specific verbal noun:";
  },
  get "5-2-3-B-p"(){
    return <>When verbs have a short vowel in the root, the vowel is left unlengthened before <i>-t</i>, e.g., <i>nitear</i>, <i>niteá</i>, <i>nite</i>, but <i>ním</i>, <i>níodh</i>, <i>nífí</i>, etc. However, <i>léigh</i> etc. have long vowels throughout, e.g., <i>léitear</i>, <i>léiteá</i>, <i>léite</i>.</>;
  },
  get "briathar-Léigh"(){
    return "read";
  },
  get "Table5H-caption"(){
    return <>The First Conjugation &mdash; Conjugation of the Verb <i>léigh</i></>;
  },
  get "briathar-Nigh"(){
    return "wash";
  },
  get "Table5I-caption"(){
    return <>The First Conjugation &mdash; Conjugation of the Verb <i>nigh</i></>;
  },
  get "briathar-éigh"(){
    return "scream";
  },
  //- Careful, there is an upper case one later that means "go"
  get "briathar-téigh"(){
    return "heat";
  },
  get "briathar-pléigh"(){
    return "discuss";
  },
  get "briathar-spréigh"(){
    return "spread";
  },
  get "briathar-caígh"(){
    return "fall";
  },
  get "briathar-cloígh"(){
    return "stick to";
  },
  get "briathar-cnaígh"(){
    return "gnaw";
  },
  get "briathar-dligh"(){
    return "be entitled to";
  },
  get "briathar-figh"(){
    return "weave";
  },
  get "briathar-guigh"(){
    return "pray";
  },
  get "briathar-ligh"(){
    return "lick";
  },
  get "briathar-luigh"(){
    return "lie (down)";
  },
  get "briathar-snigh"(){
    return "pour";
  },
  get "briathar-snoigh"(){
    return "cut";
  },
  get "briathar-suigh"(){
    return "sit";
  },
  get "briathar-bligh"(){
    return "milk";
  },
  get "briathar-buígh"(){
    return "tan";
  },
  get "briathar-righ"(){
    return "stretch";
  },
  get "5-2-3-B-a-p"(){
    return <>Verbs conjugated like <i>léigh</i>:</>;
  },
  get "5-2-3-B-b-p"(){
    return <>Verbs conjugated like <i>nigh</i>:</>;
  },
  get "5-2-3-B-c-p"(){
    return "Verbs with a specific verbal noun:";
  },
  get "5-3-title"(){
    return "The Second Conjugation";
  },
  get "5-3-1-title"(){
    return <>Verbs from polysyllabic roots ending in <i>-(a)igh</i></>;
  },
  get "briathar-Beannaigh"(){
    return "Bless";
  },
  get "Table5J-caption"(){
    return <>The Second Conjugation &mdash; Conjugation of the Verb <i>beannaigh</i></>;
  },
  get "briathar-Cruinnigh"(){
    return "Gather";
  },
  get "Table5K-caption"(){
    return <>The Second Conjugation &mdash; Conjugation of the Verb <i>cruinnigh</i></>;
  },
  get "5-3-1-note"(){
    return <>Note that verbs from polysyllabic roots ending in <i>-aigh</i> are conjugated in the same way as <i>beannaigh</i>, and that verbs from polysyllabic roots ending in <i>-igh</i> are formed in the same way as <i>cruinnigh</i>; but there are exceptions in the verbal noun (see <a href="#sec_5_5_2">5.5.2</a>) and the verbal adjective, e.g., <i>dathaigh</i>, <i>daite</i> (<b>EN</b>: <i>color</i>, <i>colored</i>); <i>dlúthaigh</i>, <i>dlúite</i> (<b>EN</b>: <i>compress</i>, <i>compressed</i>); <i>táthaigh</i>, <i>táite</i> (<b>EN</b>: <i>weld</i>, <i>welded</i>).</>;
  },
  get "5-3-2-title"(){
    return <>Verbs from polysyllabic roots ending in <i>-(a)il</i>, <i>-(a)in</i>, <i>-(a)ir</i>, <i>-(a)is</i> and syncopated in the conjugation</>;
  },
  get "briathar-Ceangail"(){
    return "Tie";
  },
  get "briathar-Díbir"(){
    return "Banish";
  },
  get "Table5L-caption"(){
    return <>The Second Conjugation &mdash; Conjugation of the Verb <i>ceangail</i></>;
  },
  get "Table5M-caption"(){
    return <>The Second Conjugation &mdash; Conjugation of the Verb <i>díbir</i></>;
  },
  get "briathar-codail"(){
    return "sleep";
  },
  get "briathar-fógair"(){
    return "announce";
  },
  get "briathar-labhair"(){
    return "speak";
  },
  get "briathar-oscail"(){
    return "open";
  },
  get "briathar-tionscain"(){
    return "originate";
  },
  get "briathar-aithin"(){
    return "recognize";
  },
  get "briathar-eitil"(){
    return "fly";
  },
  get "briathar-imir"(){
    return "play";
  },
  get "briathar-inis"(){
    return "tell";
  },
  get "briathar-foghlaim"(){
    return "learn";
  },
  get "briathar-fulaing"(){
    return "endure";
  },
  get "briathar-tarraing"(){
    return "pull";
  },
  get "briathar-tuirling"(){
    return "descend";
  },
  get "briathar-aithris"(){
    return "narrate";
  },
  get "briathar-freastail"(){
    return "attend";
  },
  get "briathar-taistil"(){
    return "travel";
  },
  get "5-3-2-a-p"(){
    return <>Verbs conjugated like <i>ceangail</i>:</>;
  },
  get "5-3-2-b-p"(){
    return <>Verbs conjugated like <i>díbir</i>:</>;
  },
  get "5-3-3-title"(){
    return "Other Verbs in the Second Conjugation";
  },
  get "5-3-3-a-p"(){
    return <>Verbs from roots ending in <i>-aim</i>, <i>-(a)ing</i> are not conjugated:</>;
  },
  get "5-3-3-b-p"(){
    return "Other non-syncopated verbs:";
  },
  get "5-4-title"(){
    return "The Irregular Verbs";
  },
  get "5-4-1-p"(){
    return <>There are eleven irregular verbs. The following are the irregular verbs: <i>abair</i> <Tl tlText="say" />, <i>beir</i> <Tl tlText="bear" />, <i>bí</i> <Tl tlText="be" />, <i>clois/cluin</i> <Tl tlText="hear" />, <i>déan</i> <Tl tlText="do/make" />, <i>faigh</i> <Tl tlText="get" />, <i>feic</i> <Tl tlText="see" />, <i>ith</i> <Tl tlText="eat" />, <i>tabhair</i> <Tl tlText="give" />, <i>tar</i> <Tl tlText="come" />, <i>téigh</i> <Tl tlText="go" />.</>;
  },
  get "5-4-2-p"(){
    return "The irregular verbs do not keep the same root throughout their formation and some of them have separate forms in the dependent form.";
  },
  get "5-4-3-p"(){
    return <>The root of the verb in the present habitual and past habitual tenses is the same in all irregular verbs, e.g., <i>cloisimid</i>, <i>chloisimis</i> (<b>EN</b>: <i>we hear</i>, <i>we used to hear</i>); <i>deirim</i>, <i>deirinn</i> (<b>EN</b>: <i>I say</i>, <i>I used to say</i>); <i>tugann sí</i>, <i>thugadh sí</i> (<b>EN</b>: <i>she gives</i>, <i>she used to give</i>). Except for the verb <i>bí</i> <Tl tlText="be" />, the present subjunctive also has the same root, e.g., <i>go gcloise</i> <Tl tlText="that we hear" />; <i>go ndeire</i> <Tl tlText="that I say" />; <i>go dtuga</i> <Tl tlText="that she gives" />.</>;
  },
  get "5-4-4-p"(){
    return <>The root of the verb in the future tense and the conditional mood is the same in all irregular verbs, e.g., <i>déarfaidh mé</i> <Tl tlText="I will say" />, <i>déarfainn</i> <Tl tlText="I would say" />; <i>déanfaidh tú</i> <Tl tlText="you will do/make" />, <i>dhéanfá</i> <Tl tlText="you would do/make" />; <i>tabharfaidh siad</i> <Tl tlText="they will give" />, <i>thabharfaidís</i> <Tl tlText="they would give" />.</>;
  },
  get "5-4-5-title"(){
    return "The Dependent Form";
  },
  get "5-4-5-p"(){
    return <>The dependent form follows these conjunctions, relative pronominals and verbs: <i>a/ar</i> (= the relative clause), <i>a/ar</i> (= <i>an méid a/ar</i>, <b>EN</b>: <i>the size/extent</i>), <i>an/ar</i>, <i>cá/cár</i>, <i>dá/dár</i> (<i>de</i> or <i>do+a</i> (<i>ar</i>)) and <i>dá</i> (conditional), <i>go/gur</i>, <i>mura/murar</i>, <i>nach/nár</i>, <i>ní/níor</i>, <i>sula/sular</i> (see <a href="./chapter10.html#sec_10_4_2">10.4.2</a> and <a href="./chapter10.html#sec_10_8_2">10.8.2</a>). The dependent form in the tables is represented by <i>ní</i> or <i>go</i>.</>;
  },
  get "5-4-5-a-p"(){
    return "These particles are used with the irregular verbs in the same way as they are used with the regular verbs.";
  },
  get "5-4-5-SampleBox-1"(){
    return <><b>Would</b> she <b>bring</b> you to school?</>;
  },
  get "5-4-5-SampleBox-2"(){
    return <>They said <b>that</b> she <b>comes</b> to visit every Saturday.</>;
  },
  get "5-4-5-SampleBox-3"(){
    return <>They <b>have not caught</b> the thieves yet.</>;
  },
  get "5-4-5-SampleBox-4"(){
    return <><b>Didn&rsquo;t</b> you <b>hear</b> about the meeting?</>;
  },
  get "5-4-5-SampleBox-5"(){
    return <><b>Has</b> he <b>eaten</b> enough?</>;
  },
  get "5-4-5-a-p2"(){
    return <>But the forms ending in <i>-r</i> of those particles are not used in the past tense, indicative mood, with the verbs <i>abair</i>, <i>bí</i>, <i>déan</i> (for forms starting with <i>dearn-</i>), <i>faigh</i>, <i>feic</i>, <i>téigh</i>.</>;
  },
  get "5-4-5-SampleBox2-1"(){
    return <><b>Didn&rsquo;t</b> you <b>go</b> home yet?</>;
  },
  get "5-4-5-SampleBox2-2"(){
    return <><b>Where have we seen</b> it before?</>;
  },
  get "5-4-5-SampleBox2-3"(){
    return <><b>Did</b> he <b>say</b> anything to you about it?</>;
  },
  get "5-4-5-SampleBox2-4"(){
    return <>She says <b>that</b> they <b>were</b> there.</>;
  },
  get "5-4-5-SampleBox2-5"(){
    return <>He <b>did not get</b> the money yet.</>;
  },
  get "5-4-5-b-p"(){
    return <>The verb <i>abair</i> is never lenited, e.g., <i>ní deirim</i> (<i>deirimis</i>, <i>dúirt sé</i>, <i>déarfainn</i>), <i>má deir tú</i> (<i>deiridís</i>), <i>na rudaí a déarfaidh</i> (<i>a déarfadh</i>) <i>sé</i>.</>;
  },
  get "5-4-5-c-p"(){
    return <>The relative particle <i>a</i> is combined with the verb <i>bí</i> in the present tense &mdash; <i>atáim</i>, <i>atá</i>, <i>atáimid</i>, <i>atáthar</i>. <i>ná</i>, instead of <i>nár</i>, is put before forms of the subjunctive mood of <i>bí</i>, e.g., <i>Ná raibh maith agat</i> <Tl tlText="Don&rsquo;t be grateful" />.</>;
  },
  get "Table5N-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>abair</i></>;
  },
  get "briathar-Abair"(){
    return "say";
  },
  get "briathar-Beir"(){
    return "bear";
  },
  get "briathar-Bí"(){
    return "be";
  },
  get "briathar-Clois/Cluin"(){
    return "hear";
  },
  get "briathar-Déan"(){
    return "do/make";
  },
  get "briathar-Faigh"(){
    return "get";
  },
  get "briathar-Feic"(){
    return "see";
  },
  get "briathar-Ith"(){
    return "eat";
  },
  get "briathar-Tabhair"(){
    return "give";
  },
  get "briathar-Tar"(){
    return "come";
  },
  get "briathar-Téigh"(){
    return "go";
  },
  get "Table5N-Note"(){
    return <>As mentioned in <a href="#sec_5_4_5_b">5.4.5(b)</a>, the verb <i>abair</i> is never lenited.</>;
  },
  get "Table5O-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>beir</i></>;
  },
  get "Table5P-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>bí</i></>;
  },
  get "PositiveIndependent"(){
    return "Affirmative Independent";
  },
  get "NegativeIndependent"(){
    return "Negative Independent";
  },
  get "Dependent"(){
    return "Dependent";
  },
  get "Independent"(){
    return "Independent";
  },
  get "Table5P-footnote"(){
    return <><i>a bheith</i> occurs except after <i>chun</i> or certain simple prepositions, e.g., <i>chun bheith</i>, <i>as bheith</i>, <i>gan bheith</i>, <i>le bheith</i>.</>;
  },
  get "Table5Q-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>clois/cluin</i></>;
  },
  get "Table5R-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>déan</i></>;
  },
  get "Table5R-Note"(){
    return <>Note that <i>déan</i> is a regular verb except in the past tense and that the past tense is conjugated in two different ways, as shown in the table above. In the first of these, there are different dependent and independent forms of the verb.</>;
  },
  get "Table5S-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>faigh</i></>;
  },
  get "Table5T-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>feic</i></>;
  },
  get "Table5T-Note"(){
    return <><i>feic</i> is a regular verb except in the past tense.</>;
  },
  get "Table5U-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>ith</i></>;
  },
  get "Table5U-Note"(){
    return <><i>ith</i> is a regular verb except in the future tense and the conditional mood.</>;
  },
  get "Table5V-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>tabhair</i></>;
  },
  get "Table5W-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>tar</i></>;
  },
  get "Table5X-caption"(){
    return <>The Irregular Verbs &mdash; Conjugation of the Verb <i>téigh</i></>;
  },
  get "5-5-title"(){
    return "The Verbal Noun";
  },
  get "5-5-1-title"(){
    return "Verbal Nouns in the First Conjugation";
  },
  get "5-5-1-p"(){
    return "In the table below, the different types of verbal nouns in the first conjugation are shown.";
  },
  get "Table5Y-caption"(){
    return "Verbal Nouns &mdash; The First Conjugation";
  },
  get "Trait"(){
    return "Trait";
  },
  get "Table5Y-col2"(){
    return "Examples";
  },
  get "Table5Y-trait1"(){
    return <>The ending <i>-(e)adh</i></>;
  },
  get "Table5Y-trait2"(){
    return <>Broadening of the root and the ending <i>-adh</i></>;
  },
  get "Table5Y-trait3"(){
    return "Broadening of the root";
  },
  get "Table5Y-trait4"(){
    return "Same as the root";
  },
  get "Table5Y-trait5"(){
    return <>The ending <i>-áil</i></>;
  },
  get "Table5Y-trait6"(){
    return <><i>-t</i> added to the root</>;
  },
  get "Table5Y-trait7"(){
    return <>The ending <i>-(e)amh</i></>;
  },
  get "Table5Y-trait8"(){
    return <>The ending <i>-(e)an</i></>;
  },
  get "Table5Y-trait9"(){
    return <>The ending <i>-chan</i></>;
  },
  get "Table5Y-trait10"(){
    return <>The ending <i>-(e)acht</i></>;
  },
  get "Table5Y-trait11"(){
    return <>The ending <i>-im</i></>;
  },
  get "Table5Y-trait12"(){
    return <>The ending <i>úint</i></>;
  },
  get "Table5Y-trait13"(){
    return <>Long or diphthong vowel (root ending in <i>-igh</i>, <i>-ígh</i>)</>;
  },
  get "Table5Y-trait14"(){
    return "Other verbal nouns";
  },
  get "5-5-2-title"(){
    return "Verbal Nouns in the Second Conjugation";
  },
  get "5-5-2-p"(){
    return "In the table below, the different types of verbal nouns in the second conjugation are shown.";
  },
  get "Table5Z-caption"(){
    return "Verbal Nouns &mdash; The Second Conjugation";
  },
  get "Table5Z-trait-1"(){
    return <>The ending <i>-(i)ú</i></>;
  },
  get "Table5Z-trait-2"(){
    return <>The ending <i>aí</i></>;
  },
  get "Table5Z-trait-3"(){
    return <>The ending <i>-í</i></>;
  },
  get "Table5Z-trait-4"(){
    return <><i>-t</i> added to the root</>;
  },
  get "Table5Z-trait-5"(){
    return "Broadening of the root";
  },
  get "Table5Z-trait-6"(){
    return <>The ending <i>-(e)amh</i></>;
  },
  get "Table5Z-trait-7"(){
    return <>The ending <i>-(e)ach</i></>;
  },
  get "Table5Z-trait-8"(){
    return <>The ending <i>-(e)acht</i></>;
  },
  get "Table5Z-trait-9"(){
    return <>The ending <i>-áil</i></>;
  },
  get "Table5Z-trait-10"(){
    return <>The ending <i>-aíocht</i></>;
  },
  get "Table5Z-trait-11"(){
    return "Other verbal nouns";
  },
  get "5-6-title"(){
    return "Declension of the Verbal Noun";
  },
  get "5-6-1-title"(){
    return "The Genitive";
  },
  get "5-6-1-a-p"(){
    return "The genitive form of the verbal noun is usually the same as the verbal adjective in the contexts shown in the table below:";
  },
  get "Table5AA-caption"(){
    return "Declension of the Verb Noun &mdash; Genitive of the Verbal Noun in Any Form with the Verbal Adjective";
  },
  get "Table5AA-Col2"(){
    return "Verbal Noun";
  },
  get "Table5AA-Col3"(){
    return "Form of the Genitive";
  },
  get "Table5AA-trait1"(){
    return <>Verbal nouns ending in <i>-(e)adh</i></>;
  },
  get "Table5AA-trait2"(){
    return "Monosyllabic verbal nouns ending in a long vowel or a diphthong";
  },
  get "Table5AA-trait3"(){
    return "Polysyllabic verb nouns ending in a long vowel";
  },
  get "Table5AA-trait4"(){
    return <>Verbal nouns ending in <i>-ilt</i>, <i>-in(g)t</i>, (except <i>-áint</i>, <i>-úint</i>), <i>-irt</i></>;
  },
  get "Table5AA-trait5"(){
    return "Some masculine verbal nouns that end in a broad consonant";
  },
  get "Table5AA-trait6"(){
    return "A few other verbal nouns";
  },
  get "Table5AA-Note"(){
    return <>Verbal nouns ending in <i>-(e)adh</i> or ending in a long vowel do not have a normal genitive according to one of the declensions (see <a href="./chapter3.html#sec_3_3_4">3.3.4</a>), e.g., <i>bearradh</i>, <i>cló</i>, <i>cónaí</i>.</>;
  },
  get "5-6-1-b-p"(){
    return "The genitive of the noun, according to the related declension, may belong to &mdash;";
  },
  get "5-6-1-b-i-p"(){
    return "certain verbal nouns:";
  },
  get "Table5BB-caption"(){
    return "Declension of the Verbal Noun &mdash; Certain Verb Nouns";
  },
  get "Table5BB-trait1"(){
    return <>As a noun in the First Declension (see <a href="./chapter2.html#sec_2_2_2">2.2.2</a>)</>;
  },
  get "Table5BB-trait2"(){
    return <>As a noun in the Second Declension (see <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)</>;
  },
  get "Table5BB-trait3"(){
    return <>As a noun in the Third Declension, for verbal nouns ending in <i>-áil</i>, <i>-áíl</i>, <i>-áint</i>, <i>-únt</i>, <i>-cht</i> and other verbal nouns (see <a href="./chapter2.html#sec_2_4_2">2.4.2</a>)</>;
  },
  get "5-6-1-b-ii-p"(){
    return "common nouns which are used to perform the functions of a verbal noun but which do not undergo verbal conjugation beyond that:";
  },
  get "Table5CC-caption"(){
    return "Declension of the Verbal Noun &mdash; Common Nouns used to Perform Verbal Noun Functions";
  },
  get "Table5CC-trait-1"(){
    return <>As a noun in the First Declension (see <a href="./chapter2.html#sec_2_2_2">2.2.2</a>)</>;
  },
  get "Table5CC-trait-2"(){
    return <>As a noun in the Second Declension (see <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)</>;
  },
  get "Table5CC-trait-3"(){
    return <>As a noun in the Third Declension, where a suffix is added to the base noun, e.g., <i>bádóir</i>, <i>bádóireacht</i>; <i>peata</i>, <i>peataireacht</i> and for other verbal nouns (see <a href="./chapter2.html#sec_2_4_2">2.4.2</a>)</>;
  },
  get "Table5CC-Note"(){
    return <>Verbal nouns of the types mentioned in <a href="#sec_5_6_1_b_ii">5.6.1(b)(ii)</a> above do not have a form for the verbal adjective. Some regular nouns also lack the verbal adjective form, e.g., <i>achainí</i>, <i>uair na hachainí</i> (<b>EN</b>: <i>request</i>, <i>psychological moment</i>); <i>fónamh</i>, <i>fear fónaimh</i> (<b>EN</b>: <i>service</i>, <i>man of service</i>); <i>gol</i>, <i>racht goil</i> (<b>EN</b>: <i>cry</i>, <i>fit of crying</i>); <i>guí</i>, <i>faoi bhrí na guí</i> (<b>EN</b>: <i>prayer</i>, <i>under the influence of prayer</i>); <i>maireachtáil</i>, <i>slí mhaireachtála</i> (<b>EN</b>: <i>living</i>, <i>way of living</i>).</>;
  },
  get "5-6-1-b-iii-p"(){
    return <>the alternate versions of many verbal nouns to express continuity, frequency, abstractness, noise, emphasis, a second meaning or single action, e.g., <i>aistriú</i> <Tl tlText="translation" /> to <i>aistriúchán</i> <Tl tlText="translation" />; <i>liú</i> <Tl tlText="yell" /> to <i>liúireach</i> <Tl tlText="yell" />:</>;
  },
  get "Table5DD-caption"(){
    return "Declension of the Verbal Noun &mdash; Alternate Versions of Verbal Nouns";
  },
  get "Table5DD-col1"(){
    return "Alternate Version of the Verbal Noun";
  },
  get "Table5DD-trait-1"(){
    return <>As a noun in the First Declension (see <a href="./chapter2.html#sec_2_2_2">2.2.2</a>)</>;
  },
  get "Table5DD-trait-2"(){
    return <>As a noun in the Second Declension (see <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)</>;
  },
  get "Table5DD-trait-3"(){
    return <>As a noun in the Third Declension (see <a href="./chapter2.html#sec_2_4_2">2.4.2</a>)</>;
  },
  get "5-6-1-c-p"(){
    return "There are some verbal nouns that have two forms in the genitive &mdash; the form of the verbal adjective and the form according to one of the noun declensions:";
  },
  get "Table5EE-caption"(){
    return "Declension of Verbal Nouns with Two Forms in the Genitive &mdash; Form according to One of the Declensions";
  },
  get "Table5EE-col3"(){
    return "Form of the Genitive according to One of the Declensions";
  },
  get "Table5EE-trait-1"(){
    return <>As a noun in the First Declension (most masculine verbal nouns ending in a broad consonant) (see <a href="./chapter2.html#sec_2_2_2">2.2.2</a>)</>;
  },
  get "Table5EE-trait-2"(){
    return <>As a noun in the Second Declension (a few feminine verbal nouns) (see <a href="./chapter2.html#sec_2_3_2">2.3.2</a>)</>;
  },
  get "Table5EE-trait-3"(){
    return <>As a noun in the Third Declension (feminine nouns ending in <i>-chan</i> and <i>crith</i>, <i>foghlaim</i>, <i>íoc</i>, <i>reic</i>, <i>rith</i>, <i>seinm</i>, <i>slad</i>, <i>snámh</i>, <i>sníomh</i>, <i>tairiscint</i>, <i>tál</i>, <i>trácht</i>, <i>triall</i>, <i>troid</i>, <i>tuiscint</i>) (see <a href="./chapter2.html#sec_2_4_2">2.4.2</a>)</>;
  },
  get "5-6-1-c-i-p"(){
    return "The form of the verbal adjective is used when the verbal noun is accompanied by an object.";
  },
  get "5-6-1-c-ii-p"(){
    return "The other form is used when the verbal noun functions as a noun or an adjective.";
  },
  get "Table5FF-caption"(){
    return "Declension of Verbal Nouns with Two Forms in the Genitive &mdash; Form of the Verbal Adjective and Form according to One of the Declensions";
  },
  get "Table5FF-col1"(){
    return "Verbal Noun";
  },
  get "Table5FF-col2"(){
    return "Genitive &mdash; Form of the Verbal Adjective";
  },
  get "Table5FF-col3"(){
    return "Genitive &mdash; Form according to One of the Declensions";
  },
  get "5-6-2-title"(){
    return "The Plural";
  },
  get "5-6-2-p"(){
    return "There are some verbal nouns that are also used as common nouns. These have a plural form according to the declension to which they belong.";
  },
  get "5-6-2-a-p"(){
    return <>For verbal nouns ending in <i>-(e)adh</i>, <i>-taí</i> (<i>-tí</i>) is usually replaced by <i>-(e)adh</i> if the root ends in <i>-ch</i>, <i>-d</i>, <i>-l</i>, <i>-ll</i>, <i>-n</i>, <i>-rr</i>, <i>-s</i> or <i>-t</i>, and <i>-thaí</i> (<i>-thí</i>), if it ends with another consonant, e.g., <i>baisteadh</i>, <i>baistí</i>; <i>casadh</i>, <i>castaí</i>; <i>cinneadh</i>, <i>cinntí</i>; <i>moladh</i>, <i>moltaí</i>; <i>pósadh</i>, <i>póstaí</i>; <i>tarscaoileadh</i>, <i>tarscaoiltí</i>; <i>bloscadh</i>, <i>bloscthaí</i>; <i>colscaradh</i>, <i>colscarthaí</i>; <i>crapadh</i>, <i>crapthaí</i>; <i>loscadh</i>, <i>loscthaí</i>; <i>madhmadh</i>, <i>madhmthaí</i>; <i>scríobadh</i>, <i>scríobthaí</i>; <i>speireadh</i>, <i>speirthí</i>; <i>tíolacadh</i>, <i>tíolacthaí</i>, or occasionally <i>-teacha</i>, <i>-thacha</i>, e.g., <i>filleadh</i>, <i>fillteacha</i>; <i>gearradh</i>, <i>gearrthacha</i>.</>;
  },
  get "5-6-2-b-p"(){
    return <>For polysyllabic verbal nouns ending in <i>-(i)ú</i>, <i>-(u)ithe</i> is replaced by <i>-(i)ú</i>, e.g., <i>athrú</i>, <i>athruithe</i>; <i>ceartú</i>, <i>ceartuithe</i>; <i>cruinniú</i>, <i>cruinnithe</i>; <i>fiosrú</i>, <i>fiosruithe</i>; <i>míniú</i>, <i>mínithe</i>; <i>ordú</i>, <i>orduithe</i>; <i>scrúdú</i>, <i>scrúduithe</i>; <i>toiliú</i>, <i>toilithe</i>.</>;
  },
  get "5-6-2-c-p"(){
    return <>For nouns ending in <i>-áil</i>, the <i>l</i> is broadened and <i>-acha</i> is added, e.g., <i>admháil</i>, <i>admhálacha</i>; <i>ofráil</i>, <i>ofrálacha</i>.</>;
  },
  get "5-6-2-d-p"(){
    return <>For verbal nouns ending in <i>cht</i>, <i>-áí</i> is added, e.g., <i>gluaiseacht</i>, <i>gluaiseachtaí</i>, and add <i>-í</i> to verbal nouns ending in <i>-lt</i>, <i>-nt</i>, <i>-rt</i>, e.g., <i>bagairt</i>, <i>bagairtí</i>; <i>creidiúint</i>, <i>creidiúintí</i>; <i>oscailt</i>, <i>oscailtí</i>; <i>tairiscint</i>, <i>tairiscintí</i>.</>;
  },
  get "5-6-2-e-p"(){
    return <>For monosyllabic verbal nouns ending in a vowel, <i>-nna</i> or, occasionally, <i>-ite</i> are added, e.g., <i>breo</i>, <i>breonna</i>; <i>brú</i>, <i>brúnna</i>; <i>cló</i>, <i>clónna</i>; <i>dó</i>, <i>dónna</i>; <i>liú</i>, <i>liúnna</i>; <i>meá</i>, <i>meánna</i>; <i>sú</i>, <i>súnna</i>; <i>crú</i>, <i>crúite</i>; <i>rá</i>, <i>ráite</i>; <i>sá</i>, <i>sáite</i>.</>;
  },
  get "5-7-title"(){
    return "The Verbal Adjective";
  },
  get "5-7-1-title"(){
    return "Prefixes with the Verbal Adjective";
  },
  get "5-7-1-p"(){
    return <>The prefixes <i>do-</i>, <i>in-</i>, <i>so-</i> are used with the form of the verbal adjective to make classifications, e.g., <i>dochoiscthe</i>, <i>dofheicthe</i>, <i>doghluaiste</i>, <i>dothuigthe</i>, <i>indéanta</i>, <i>inscrúdaithe</i>, <i>sofheicthe</i>, <i>sofhoghlamtha</i>, <i>sophacáilte</i>. (See <a href="./chapter4.html#sec_4_12">4.12</a> for more information on the verbal adjective.)</>;
},
};
