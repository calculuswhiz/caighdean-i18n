import { en_US as en_US_Common } from "../../common/en-US";
import { InlineTl } from "../../bodyMatter";

const Tl = (props: { tlText: string }) =>
  <InlineTl lang="en_US" tlText={props.tlText} />;

export const en_US = {
  get "teidealNaCaibidle"(){
    return "The Relative Clause";
  },
  get "11-1-title"(){
    return "General";
  },
  get "11-title"(){
    return <>{en_US_Common["Caibidil"]} 11 | {en_US["teidealNaCaibidle"]}</>;
  },
  get "11-1-1-p"(){
    return <>A conjunction called the <i>relative particle</i> (affirmative: <i>a</i>, <i>ar</i>; negative: <i>nach</i>, <i>nár</i>) is used to link a main clause and a relative subordinate clause together.</>;
  },
  get "11-1-2-p"(){
    return <>The relative particle is placed before the verb in the subordinate clause. If the copula is in the subordinate clause, the relative particle is not used to link the main clause and the subordinate clause together, but the copula itself has a special form (see <a href="#sec_11_8">11.8</a>).</>;
  },
  get "11-1-3-p"(){
    return <>A distinction is made between a <i>direct relative clause</i> and an <i>indirect relative clause</i> (see <a href="#sec_11_2">11.2</a> and <a href="#sec_11_3">11.3</a>).</>;
  },
  get "11-1-4-p"(){
    return <>The word or phrase in the main clause that comes directly before the relative particle is called the <i>antecedent</i>.</>;
  },
  get "11-1-4-sample-1"(){
    return <>Where is <b>the dog</b> that she got?</>;
  },
  get "11-1-4-sample-2"(){
    return <>A party was organized <b>for those</b> who finished today.</>;
  },
  get "11-1-5-p"(){
    return <>Pronominals (including possessive adjectives) that refer back to the antecedent in indirect relative clauses are called <i>subsequents</i>.</>;
  },
  get "11-1-5-sample-1"(){
    return <>Give that to the boy who has a cold (<b>on him</b>).</>;
  },
  get "11-1-5-sample-2"(){
    return <>Isn&rsquo;t she the woman who used to have a pub (<b>at her</b>)?</>;
  },
  get "11-2-title"(){
    return "The Direct Relative Clause";
  },
  get "11-2-1-p"(){
    return "A direct relative clause is involved in the following contexts. There are no subsequents in a direct relative clause &mdash;";
  },
  get "11-2-1-a-p"(){
    return "if the antecedent is the subject of the verb in the relative clause:";
  },
  get "11-2-1-a-sample-1a"(){
    return "That woman kissed Gearóid.";
  },
  get "11-2-1-a-sample-1b"(){
    return <>She is the woman <b>who kissed</b> Gearóid.</>;
  },
  get "11-2-1-a-sample-2a"(){
    return "A brand-new car hit the lorry.";
  },
  get "11-2-1-a-sample-2b"(){
    return <>The brand-new car is the car <b>that hit</b> the lorry.</>;
  },
  get "11-2-1-a-sample-3a"(){
    return "That man will settle the game.";
  },
  get "11-2-1-a-sample-3b"(){
    return <>He is the man <b>who will settle</b> the game.</>;
  },
  get "11-2-1-a-sample-4a"(){
    return "That woman is on television.";
  },
  get "11-2-1-a-sample-4b"(){
    return <>She is the woman <b>who is</b> on television.</>;
  },
  get "11-2-1-b-p"(){
    return "if the antecedent is the direct object of the verb in the relative clause:";
  },
  get "11-2-1-b-sample-1a"(){
    return "Gearóid kissed that woman.";
  },
  get "11-2-1-b-sample-1b"(){
    return <>She is the woman <b>whom</b> Gearóid kissed.</>;
  },
  get "11-2-1-b-sample-2a"(){
    return "The lorry hit a brand-new car.";
  },
  get "11-2-1-b-sample-2b"(){
    return <>The brand-new car is the car <b>that the lorry hit</b>.</>;
  },
  get "11-2-1-b-sample-3a"(){
    return "The man composed that poem.";
  },
  get "11-2-1-b-sample-3b"(){
    return <>That is the poem <b>that the man composed</b>.</>;
  },
  get "11-2-1-b-sample-4a"(){
    return "The family will buy that house.";
  },
  get "11-2-1-b-sample-4b"(){
    return <>That is the house <b>that the family will buy</b>.</>;
  },
  get "11-2-1-b-note-p"(){
    return <>As is clear from <a href="#sec_11_2_1_a">(a)</a> and <a href="#sec_11_2_1_b">(b)</a> above, the sentences: <i>Sin í an bhean a phóg Gearóid</i>; <i>Ba charr úrnua an carr a bhuail an leoraí</i> are ambiguous. In each context, the antecedent could be either the subject or the direct object of the verb in the relative clause. It is preferable to use an indirect relative clause in such contexts if ambiguity needs to be avoided (see <a href="#sec_11_3_1_a">11.3.1(a)</a> below). The sentence <i>sin é an dán a chum an fear</i> is not ambiguous because the antecedent (<i>an dán</i>) could not be the subject of the verb.</>;
  },
  get "11-2-1-c-p"(){
    return <>if the antecedent is the object of a verbal noun (direct object or <i>a</i> (possessive adjective)) in the relative clause:</>;
  },
  get "11-2-1-c-sample-1a"(){
    return "That is the book. He is reading it.";
  },
  get "11-2-1-c-sample-1b"(){
    return <>That is the book <b>that</b> he is reading.</>;
  },
  get "11-2-1-c-sample-2a"(){
    return "She bought the dress. I was wanting it.";
  },
  get "11-2-1-c-sample-2b"(){
    return <>She bought the dress <b>that</b> I was wanting.</>;
  },
  get "11-2-1-c-note-p"(){
    return <>A direct relative clause of the type used in the second example above can also be used for the first example, e.g., <i>Sin (é) an leabhar a bhí sé a léamh</i>. Similarly: <i>Sin an cineál cairr atá á thiomáint aige</i>; <i>Sin an cineál cairr atá sé a thiomáint</i>.</>;
  },
  get "11-2-1-d-p"(){
    return <>if the temporal adverb <i>uair</i> or the conjunction <i>nuair</i> is the antecedent:</>;
  },
  get "11-2-1-d-sample-1"(){
    return <>I will tell you the story when I have the opportunity. (<i>Lit. when the opportunity <b>will be</b> at me.</i>)</>;
  },
  get "11-2-1-d-sample-2"(){
    return <>Do you remember the time <b>when we went</b> to Spain?</>;
  },
  get "11-2-1-e-p"(){
    return <>if a temporal adverb such as <i>an tráth</i> <Tl tlText="the time" />, <i>an mhaidin</i> <Tl tlText="the morning" />, <i>an dáta</i> <Tl tlText="the date" />, <i>an oíche</i> <Tl tlText="the night" />, <i>an t&#x2011;am</i> <Tl tlText="the time" />, etc. is the antecedent:</>;
  },
  get "11-2-1-e-sample-1"(){
    return <>Do you know the time <b>when</b> it <b>will be published</b>?</>;
  },
  get "11-2-1-e-sample-2"(){
    return <>Do you remember the day <b>when</b> the tree <b>fell</b>?</>;
  },
  get "11-2-1-e-note-p"(){
    return <>An indirect relative clause can be used instead of the direct relative clause for those temporal adverbs, e.g., <i>An bhfuil a fhios agat cén tráth a bhfoilseofar é?</i>; <i>An cuimhin leat an lá ar thit an crann?</i> (see <a href="#sec_11_3_1_g">11.3.1(g)</a>).</>;
  },
  get "11-2-1-f-p"(){
    return <>if the antecedent is a simple preposition, a compound preposition, a prepositional pronominal or a prepositional phrase brought to the front along with the copula before it for emphasis (see <a href="#sec_11_8_4">11.8.4</a>):</>;
  },
  get "11-2-1-f-sample-1a"(){
    return "The work will be done gradually.";
  },
  get "11-2-1-f-sample-1b"(){
    return <>It is gradually <b>that</b> the work <b>will be done</b>.</>;
  },
  get "11-2-1-f-sample-2a"(){
    return "I saved the money in the credit union.";
  },
  get "11-2-1-f-sample-2b"(){
    return <>It is in the credit union <b>that</b> I <b>saved</b> the money.</>;
  },
  get "11-2-1-f-sample-3a"(){
    return "He is speaking on behalf of the politician.";
  },
  get "11-2-1-f-sample-3b"(){
    return <>It is on behalf of the politician <b>that</b> he <b>is</b> speaking.</>;
  },
  get "11-2-1-f-sample-4a"(){
    return "I got the gift from him.";
  },
  get "11-2-1-f-sample-4b"(){
    return <>It is from him <b>that</b> I <b>got</b> the gift.</>;
  },
  get "11-3-title"(){
    return "The Indirect Relative Clause";
  },
  get "11-3-1-p"(){
    return "An indirect relative clause is involved in the following contexts. Subsequents in the indirect relative clause refer to the antecedent in the main clause. An indirect relative clause is used &mdash;";
  },
  get "11-3-1-a-p"(){
    return <>to avoid ambiguity when the antecedent is the direct object of the verb in the relative clause (see <a href="#sec_11_2_1_b">11.2.1(b)</a> above):</>;
  },
  get "11-3-1-a-sample-1a"(){
    return "Gearóid kissed that woman.";
  },
  get "11-3-1-a-sample-1b"(){
    return <>It is that woman <b>whom</b> Gearóid <b>kissed</b>.</>;
  },
  get "11-3-1-a-sample-2a"(){
    return "The hurley ball will hit that man.";
  },
  get "11-3-1-a-sample-2b"(){
    return <>It is that man <b>whom</b> the hurley ball <b>will hit</b>.</>;
  },
  get "11-3-1-a-sample-3a"(){
    return "The girl lost her new coat.";
  },
  get "11-3-1-a-sample-3b"(){
    return <>It is a new coat <b>that</b> the girl <b>lost</b>.</>;
  },
  get "11-3-1-b-p"(){
    return "if the antecedent is the object of a verbal noun in the relative clause:";
  },
  get "11-3-1-b-sample-1a"(){
    return "She bought the dress. I was trying to get it.";
  },
  get "11-3-1-b-sample-1b"(){
    return <>She bought the dress <b>that</b> I <b>was</b> trying to get.</>;
  },
  get "11-3-1-b-sample-2a"(){
    return "They sold the chair. I was recommending keeping it.";
  },
  get "11-3-1-b-sample-2b"(){
    return <>They sold the chair <b>that</b> I <b>was</b> recommending keeping.</>;
  },
  get "11-3-1-b-note"(){
    return <>A direct relative clause of the following type can also be used for <a href="#sec_11_3_1_b">(b)</a> above, e.g., <i>Cheannaigh sí an gúna a bhí mé ag iarraidh a fháil</i>; <i>Dhíol siad an chathaoir a bhí mé ag moladh a choimeád</i> (see <a href="#sec_11_3_1_c">11.2.1(c)</a>).</>;
  },
  get "11-3-1-c-p1"(){
    return "when the antecedent is the indirect object of the verb in the relative clause:";
  },
  get "11-3-1-c-sample-1a"(){
    return "The interview was put on that woman.";
  },
  get "11-3-1-c-sample-1b"(){
    return <>It is that woman <b>on whom</b> the interview <b>was put</b>.</>;
  },
  get "11-3-1-c-sample-2a"(){
    return "I buy clothes from that man.";
  },
  get "11-3-1-c-sample-2b"(){
    return <>It is that man <b>from whom</b> I <b>buy</b> clothes.</>;
  },
  get "11-3-1-c-sample-3a"(){
    return "Reference is made to the book in the program.";
  },
  get "11-3-1-c-sample-3b"(){
    return <>It is that book <b>to which</b> reference <b>is made</b> in the program.</>;
  },
  get "11-3-1-c-sample-4a"(){
    return "A statement was made on behalf of that company.";
  },
  get "11-3-1-c-sample-4b"(){
    return <>It is that company <b>on behalf of which</b> a statement <b>was made</b>.</>;
  },
  get "11-3-1-c-sample-5a"(){
    return "An application for planning permission was submitted in respect of the building.";
  },
  get "11-3-1-c-sample-5b"(){
    return <>It is that building <b>in respect of which</b> an application for planning permission <b>was submitted</b>.</>;
  },
  get "11-3-1-c-p2"(){
    return "Note that:";
  },
  get "11-3-1-c-i-p"(){
    return <>When a simple preposition (<i>as</i>, <i>de</i>, <i>do</i>, etc.) links the verb to the indirect object, the preposition can be brought to the front before the relative particle. A compound is then formed between the prepositions <i>de</i>, <i>do</i>, <i>faoi</i>, <i>i</i>, <i>le</i>, <i>ó</i> and <i>trí</i> and the relative particles <i>a</i> and <i>ar</i>, respectively (see <a href="#sec_11_6_1_c">11.6.1(c)</a>).</>;
  },
  get "11-3-1-c-i-sample-1a"(){
    return "The interview was put on that woman.";
  },
  get "11-3-1-c-i-sample-1b"(){
    return <>It is that woman <b>on whom</b> the interview <b>was put</b>.</>;
  },
  get "11-3-1-c-i-sample-2a"(){
    return "I buy clothes from that man.";
  },
  get "11-3-1-c-i-sample-2b"(){
    return <>It is that man <b>from whom</b> I <b>buy</b> clothes.</>;
  },
  get "11-3-1-c-i-sample-3a"(){
    return "Reference is made to the book in the program.";
  },
  get "11-3-1-c-i-sample-3b"(){
    return <>It is that book <b>to which</b> reference <b>is made</b> in the program.</>;
  },
  get "11-3-1-c-ii-p"(){
    return <>When a compound preposition (<i>ar son</i>, <i>i leith</i>, etc.) links the verb to the indirect object, the compound preposition can be brought to the front. (Unlike <a href="#sec_11_3_1_c_i">(i)</a> above, when a compound preposition is brought to the front, the following verbal clause is a direct relative clause.)</>;
  },
  get "11-3-1-c-ii-sample-1a"(){
    return "A statement was made on behalf of that company.";
  },
  get "11-3-1-c-ii-sample-1b"(){
    return <>It is that company <b>on behalf of which</b> the statement was made.</>;
  },
  get "11-3-1-c-ii-sample-2a"(){
    return "An application for planning permission was submitted in respect of the building.";
  },
  get "11-3-1-c-ii-sample-2b"(){
    return <>It is that building <b>in respect of which</b> an application for planning permission was submitted.</>;
  },
  get "11-3-1-d-p"(){
    return "when there is a genitive link between the antecedent and a noun or object (direct or indirect) of the verb in the relative clause. In that context, the subsequent is a possessive adjective:";
  },
  get "11-3-1-d-sample-1a"(){
    return "The daughter of that woman was on television last night.";
  },
  get "11-3-1-d-sample-1b"(){
    return <>It is that woman <b>whose</b> daughter was on television last night.</>;
  },
  get "11-3-1-d-sample-2a"(){
    return "The thief stole the young woman&rsquo;s car.";
  },
  get "11-3-1-d-sample-2b"(){
    return <>She is the young woman <b>whose</b> car was stolen by the thief.</>;
  },
  get "11-3-1-d-sample-3a"(){
    return "An interview was put on that man&rsquo;s son.";
  },
  get "11-3-1-d-sample-3b"(){
    return <>It is that man <b>on whom</b> an interview was put.</>;
  },
  get "11-3-1-e-p"(){
    return "if the antecedent is referred to in a verbal clause that is subordinate to the verb in the relative clause:";
  },
  get "11-3-1-e-sample-1a"(){
    return "I thought that that person would never tell the truth.";
  },
  get "11-3-1-e-sample-1b"(){
    return <>He was that person <b>whom</b> I <b>thought</b> would never tell the truth.</>;
  },
  get "11-3-1-e-sample-2a"(){
    return "I think I saw that woman&rsquo;s daughter on television last night.";
  },
  get "11-3-1-e-sample-2b"(){
    return <>It is that woman <b>whom</b> I <b>think</b> I saw her daughter on television last night.</>;
  },
  get "11-3-1-e-sample-3a"(){
    return "The officer believes that an application for planning permission was submitted in respect of that building.";
  },
  get "11-3-1-e-sample-3b"(){
    return <>It is that building <b>which</b> the officer <b>believes</b> an application for planning permission was submitted in respect of.</>;
  },
  get "11-3-1-e-sample-4a"(){
    return "We want to build a fence between that field and the road.";
  },
  get "11-3-1-e-sample-4b"(){
    return <>It is that field <b>which</b> we <b>want</b> to build a fence between it and the road.</>;
  },
  get "11-3-1-e-note-p"(){
    return <>See also the explanation of parenthetical clauses in <a href="#sec_11_4">11.4</a>, e.g., <i>Ba dhuine í a cheap mé a chonaic mé cheana</i> <Tl tlText="She was the person whom I thought I had seen before" />.</>;
  },
  get "11-3-1-f-p"(){
    return <>for interrogative pronominals such as <i>cé</i>, <i>cad</i> (<i>é</i>), etc. when a simple preposition, a compound preposition or a prepositional pronominal is brought to the front of the sentence so that it comes directly before the interrogative pronominal:</>;
  },
  get "11-3-1-f-sample-1a"(){
    return "Who is it + you will be playing against him.";
  },
  get "11-3-1-f-sample-1b"(){
    return <>Who <b>is he who</b> you <b>will be</b> playing against?</>;
  },
  get "11-3-1-f-sample-2a"(){
    return "What + you did that on his side.";
  },
  get "11-3-1-f-sample-2b"(){
    return <>For what <b>did</b> you <b>do</b> that?</>;
  },
  get "11-3-1-f-sample-3a"(){
    return "Who is it + you were talking to him.";
  },
  get "11-3-1-f-sample-3b"(){
    return <>Who <b>was it to whom</b> you <b>were</b> talking?</>;
  },
  get "11-3-1-g-p"(){
    return <>when a temporal adverb such as <i>an tráth</i>, <i>an t&#x2011;am</i>, etc. is the antecedent, an indirect relative clause can be used instead of a direct relative clause (a direct relative clause is always used after <i>nuair</i> and <i>uair</i>, see <a href="#sec_11_2_1_d">11.2.1(d)</a>):</>;
  },
  get "11-3-1-g-sample-1"(){
    return <>Do you know the time <b>when</b> it <b>will be published</b>?</>;
  },
  get "11-3-1-g-sample-2"(){
    return <>Do you remember the day <b>when</b> the tree <b>fell</b>?</>;
  },
  get "11-3-1-g-note-p"(){
    return <>A direct relative clause can also be used instead of an indirect relative clause for temporal adverbs, e.g., <i>An bhfuil a fhios agat cén tráth a fhoilseofar é?</i>; <i>An cuimhin leat an lá a thit an crann?</i> (see <a href="#sec_11_2_1_e">11.2.1(e)</a>).</>;
  },
  get "11-3-1-h-p"(){
    return <>if one of the words <i>áit</i> <Tl tlText="place" />, <i>bealach</i> <Tl tlText="way" />, <i>caoi</i> <Tl tlText="manner" />, <i>cúis</i> <Tl tlText="reason" />, <i>dóigh</i> <Tl tlText="manner" />, <i>fáth</i> <Tl tlText="reason" />, <i>réasún</i> <Tl tlText="reason" />, <i>slí</i> <Tl tlText="way" /> or <i>treo</i> <Tl tlText="direction" /> (or a word with the same meaning) is the antecedent and it is functioning as an adverb qualifying the verb in the relative clause:</>;
  },
  get "11-3-1-h-sample-1"(){
    return <>That is the way <b>in which</b> it <b>was done</b>.</>;
  },
  get "11-3-1-h-sample-2"(){
    return <>How <b>are</b> you?</>;
  },
  get "11-3-1-h-sample-3"(){
    return <>What is the way <b>in which</b> it <b>was broken</b>?</>;
  },
  get "11-3-1-h-sample-4"(){
    return <>That is the reason why I <b>came</b>.</>;
  },
  get "11-3-1-h-sample-5"(){
    return <>Why <b>did</b> they <b>leave</b>?</>;
  },
  get "11-3-1-h-sample-6"(){
    return <>Which places <b>did</b> you <b>go to</b>?</>;
  },
  get "11-3-1-h-note-p"(){
    return <>A direct clause must be used in sentences where such a word is the direct object of the verb, as in the following: <i>Seo an áit is deise</i> <Tl tlText="This is the nicest place" />; <i>Cad é an áit a cheannaigh sé?</i> <Tl tlText="What is the place that he bought?" />; <i>Ar chuala tú an fáth a thug sí?</i> <Tl tlText="Did you hear the reason why she gave it?" />; <i>An maith leat an chaoi atáim a chur ar an seomra?</i> <Tl tlText="Do you like the way I arranged the room?" /></>;
  },
  get "11-3-1-i-p1"(){
    return <>when <i>mar</i> is functioning as an adverb with the meaning of <i>áit</i> <Tl tlText="place" />:</>;
  },
  get "11-3-1-i-sample-1"(){
    return <>That is the new digital library, <b>where</b> research facilities are provided for students.</>;
  },
  get "11-3-1-i-sample-2"(){
    return <>You will find her in the office, <b>where</b> she is every night.</>;
  },
  get "11-3-1-i-sample-3"(){
    return <>Appeals will be allowed, except <b>where</b> the contrary is provided.</>;
  },
  get "11-3-1-i-p2"(){
    return <>But if <i>mar</i> is used as a conjunction, it is followed by a direct relative clause, e.g., <i>Sin mar atá cúrsaí</i> <Tl tlText="That&rsquo;s how things are" />.</>;
  },
  get "11-4-title"(){
    return "The Parenthetical Clause";
  },
  get "11-4-1-p"(){
    return <>A <i>parenthetical clause</i> is a clause that provides information about the clause that follows it without interrupting the structure of the sentence. If the parenthetical clause is removed from the sentence, it remains intact in terms of sense and grammar.</>;
  },
  get "11-4-2-p"(){
    return <>Verbs used to express opinion or speech, e.g., <i>abair</i> <Tl tlText="say" />, <i>ceap</i> <Tl tlText="think" />, <i>maígh</i> <Tl tlText="claim" />, <i>síl</i> <Tl tlText="think" />, etc., are most commonly found in parenthetical clauses.</>;
  },
  get "11-4-2-note-p"(){
    return <>See also <a href="#sec_11_3_1_e">11.3.1(e)</a> for an explanation of contexts where the antecedent is referred to in a verbal clause that is subordinate to the verb in the relative clause, e.g., <i>Ba dhuine é ar cheap mé nach n&#x2011;inseodh sé an fhírinne choíche</i> <Tl tlText="He was a person whom I thought would never tell the truth" />.</>;
  },
  get "11-4-3-p"(){
    return "The parenthetical clause is a direct clause, but the clause it refers to can be either direct or indirect depending on the structure of the sentence.";
  },
  get "Table11A-caption"(){
    return "The Parenthetical Clause";
  },
  get "Table11A-header"(){
    return "The Parenthetical Clause";
  },
  get "Table11A-col1"(){
    return "The second clause in a direct relative clause";
  },
  get "Table11A-col2"(){
    return "The second clause in an indirect relative clause";
  },
  get "Table11A-row1-col1"(){
    return <><Tl tlText="She was the person <b>whom I thought</b> I had seen before." /></>;
  },
  get "Table11A-row1-col2"(){
    return <><Tl tlText="Why do you think <b>they went</b> there?" /></>;
  },
  get "Table11A-row2-col1"(){
    return <><Tl tlText="What <b>do you think</b> will happen to her?" /></>;
  },
  get "Table11A-row2-col2"(){
    return <><Tl tlText="How <b>do you think</b> such a thing happened?" /></>;
  },
  get "Table11A-row3-col1"(){
    return <><Tl tlText="He wore clothes <b>that I didn&rsquo;t think</b> he would ever wear." /></>;
  },
  get "Table11A-row3-col2"(){
    return <><Tl tlText="How <b>do you think</b> that work will be done?" /></>;
  },
  get "11-4-3-note-p"(){
    return <>A direct or indirect clause can be used in some contexts, e.g., <i>Fuair mé é in áit ar mheas mé a gheobhainn é</i> <Tl tlText="I got it in a place where I thought I would get it" /> rather than <i>Fuair mé é in áit a mheas mé a bhfaighinn é</i>.</>;
  },
  get "11-5-title"(){
    return "The Comparative Degree Clause";
  },
  get "11-5-1-p"(){
    return <>A clause following the copula and an adjective in the comparative degree is a <i>comparative degree clause</i>. If the comparative degree clause is removed from the sentence, it remains intact in terms of sense and grammar.</>;
  },
  get "11-5-2-p"(){
    return "The comparative degree clause is a direct clause, but the clause it refers to can be either direct or indirect depending on the structure of the sentence.";
  },
  get "Table11B-caption"(){
    return "The Comparative Degree Clause";
  },
  get "Table11B-header"(){
    return "The Comparative Degree Clause";
  },
  get "Table11B-col1"(){
    return "The second clause in a direct relative clause";
  },
  get "Table11B-col2"(){
    return "The second clause in an indirect relative clause";
  },
  get "Table11B-row1-col1"(){
    return <><Tl tlText="Those are the questions that are asked <b>most often</b>." /></>;
  },
  get "Table11B-row1-col2"(){
    return <><Tl tlText="She is the <b>most famous</b> person I have met." /></>;
  },
  get "Table11B-row2-col1"(){
    return <><Tl tlText="It was the thing that she wanted <b>most</b>." /></>;
  },
  get "Table11B-row2-col2"(){
    return <><Tl tlText="Where is it <b>easiest</b> to organize the concert?" /></>;
  },
  get "Table11B-row3-col1"(){
    return <><Tl tlText="That is the song I liked <b>best</b>." /></>;
  },
  get "Table11B-row3-col2"(){
    return <><Tl tlText="That is the way it will be done <b>fastest</b>." /></>;
  },
  get "11-5-2-note-p"(){
    return <>A parenthetical clause and a comparative degree clause can be in the same sentence, e.g., <i>Ba é an banna ceoil ba cháiliúla a shíleann sé a bhainistigh an gnólacht sin riamh</i> <Tl tlText="It was the most famous band that he thought ever managed that company" />.</>;
  },
  get "11-6-title"(){
    return "The Relative Particle &mdash; Forms";
  },
  get "11-6-1-title"(){
    return "The Affirmative Relative Particle";
  },
  get "11-6-1-a-title"(){
    return "The Direct Relative Clause";
  },
  get "11-6-1-a-i-p"(){
    return <>If it is a direct relative clause, <i>a</i> is the form of the relative particle used before regular and irregular verbs in all tenses (except in the present tense of the verb <i>bí</i> &mdash; see <a href="#sec_11_6_1_a_ii">(ii)</a> below). The verb is lenited after the direct relative particle <i>a</i> except when it is an autonomous verb in the past tense (but see <a href="#sec_11_7_1_b">11.7.1(b)</a>).</>;
  },
  get "11-6-1-a-i-sample-1"(){
    return <>That is the radio station <b>that</b> broadcasts programs for children.</>;
  },
  get "11-6-1-a-i-sample-2"(){
    return <>When <b>will</b> the program be broadcast?</>;
  },
  get "11-6-1-a-i-sample-3"(){
    return <>They managed to establish a radio station <b>that</b> would broadcast pop music.</>;
  },
  get "11-6-1-a-i-sample-4"(){
    return <>Isn&rsquo;t that the series <b>that</b> is broadcast every morning?</>;
  },
  get "11-6-1-a-i-sample-5"(){
    return <>That is the program <b>that</b> they broadcast yesterday.</>;
  },
  get "11-6-1-a-i-sample-6"(){
    return <>Is that the woman <b>who</b> goes to all the matches?</>;
  },
  get "11-6-1-a-i-sample-7"(){
    return <>That is the bus <b>that</b> will go to the football stadium.</>;
  },
  get "11-6-1-a-i-sample-8"(){
    return <>That is the woman <b>who</b> would go to the match if she could.</>;
  },
  get "11-6-1-a-i-sample-9"(){
    return <>Is that not the man <b>who</b> would go to all the matches?</>;
  },
  get "11-6-1-a-i-sample-10"(){
    return <>That is the woman <b>who</b> went to the football stadium.</>;
  },
  get "11-6-1-a-ii-p"(){
    return <>A compound is made between the relative particle <i>a</i> and the independent present tense form of the verb <i>bí</i> to create the forms <i>atá</i>, <i>atáim</i>, <i>atáimid</i>.</>;
  },
  get "11-6-1-a-ii-sample-1"(){
    return <>Those are the books <b>that</b> I am asking for.</>;
  },
  get "11-6-1-a-ii-sample-2"(){
    return <>These are the clothes <b>that</b> I am buying.</>;
  },
  get "11-6-1-a-ii-sample-3"(){
    return <>That is the thing <b>that</b> we are going to sell.</>;
  },
  get "11-6-1-b-title"(){
    return "The Indirect Relative Clause";
  },
  get "11-6-1-b-i-p"(){
    return <>If it is an indirect relative clause, <i>a</i> is used before regular and irregular verbs in all tenses except in the past tense (but see <a href="#sec_11_6_1_b_iii">(iii)</a> below). The verb is eclipsed after the indirect relative particle <i>a</i>.</>;
  },
  get "11-6-1-b-i-sample-1"(){
    return <>That is the program <b>that</b> the radio station broadcasts.</>;
  },
  get "11-6-1-b-i-sample-2"(){
    return <>Where is it <b>that</b> the program be broadcast?</>;
  },
  get "11-6-1-b-i-sample-3"(){
    return <>Why is it <b>that</b> the radio station would broadcast pop music?</>;
  },
  get "11-6-1-b-i-sample-4"(){
    return <>It is a series <b>that</b> broadcasts a program of its own every morning.</>;
  },
  get "11-6-1-b-i-sample-5"(){
    return <>Is that the woman <b>who</b> her daughter goes to all the matches?</>;
  },
  get "11-6-1-b-i-sample-6"(){
    return <>That is the man <b>who</b> his son will go to the football stadium.</>;
  },
  get "11-6-1-b-i-sample-7"(){
    return <>That is the woman <b>who</b> her daughter would go to the match if she could.</>;
  },
  get "11-6-1-b-i-sample-8"(){
    return <>Is that not the man <b>who</b> his children would go to all the matches?</>;
  },
  get "11-6-1-b-i-sample-9"(){
    return <>That is the thing <b>that</b> we are going to sell.</>;
  },
  get "11-6-1-b-ii-p"(){
    return <>In the past tense, <i>ar</i> is the form of the relative particle used before regular verbs and before the irregular verbs <i>beir</i>, <i>clois/cluin</i>, <i>ith</i>, <i>tabhair</i> and <i>tar</i>.</>;
  },
  get "11-6-1-b-ii-sample-1"(){
    return <>That is the program <b>that</b> the radio station broadcast.</>;
  },
  get "11-6-1-b-ii-sample-2"(){
    return <>I bought a new book <b>that</b> the reviewer recommended.</>;
  },
  get "11-6-1-b-ii-sample-3"(){
    return <>I met a man <b>whose</b> son composed Irish songs.</>;
  },
  get "11-6-1-b-ii-sample-4"(){
    return <>That is the woman <b>from whom</b> I bought the clothes.</>;
  },
  get "11-6-1-b-ii-sample-5"(){
    return <>What happened to the person <b>whom</b> you caught?</>;
  },
  get "11-6-1-b-ii-sample-6"(){
    return <>The movie <b>that</b> I heard about is showing in the cinema.</>;
  },
  get "11-6-1-b-ii-sample-7"(){
    return <>Where is the woman <b>who</b> was awarded a degree?</>;
  },
  get "11-6-1-b-ii-sample-8"(){
    return <>Was the woman surprised <b>when</b> her son came home from Australia?</>;
  },
  get "11-6-1-b-iii-p"(){
    return <>In the past tense, <i>a</i> is the form of the relative particle used before the irregular verbs <i>abair</i>, <i>bí</i>, <i>déan</i>, <i>faigh</i>, <i>feic</i> and <i>téigh</i>.</>;
  },
  get "11-6-1-b-iii-sample-1"(){
    return <>I think that is the man <b>who</b> we were told to follow.</>;
  },
  get "11-6-1-b-iii-sample-2"(){
    return <>I know the woman <b>whose</b> daughter was on television.</>;
  },
  get "11-6-1-b-iii-sample-3"(){
    return <>Was that the book <b>that</b> was referred to?</>;
  },
  get "11-6-1-b-iii-sample-4"(){
    return <>That is the teacher <b>from whom</b> I received a letter.</>;
  },
  get "11-6-1-b-iii-sample-5"(){
    return <>Is that not the woman <b>whom</b> the man saw?</>;
  },
  get "11-6-1-b-iii-sample-6"(){
    return <>I returned to the place <b>where</b> I went long ago.</>;
  },
  get "11-6-1-c-title"(){
    return "Compound Forms";
  },
  get "11-6-1-c-p"(){
    return <>A compound is made between the prepositions <i>de</i>, <i>do</i>, <i>faoi</i>, <i>i</i>, <i>le</i>, <i>ó</i> and <i>trí</i> and the relative particles <i>a</i> and <i>ar</i>, respectively, as outlined below (see also <a href="#sec_11_3_1_c_i">11.3.1(c)(i)</a>). Note that a compound cannot be made between the preposition and the negative relative particles.</>;
  },
  get "Table11C-caption"(){
    return <>Compound Forms &mdash; Prepositions with the Relative Particles <i>a</i> and <i>ar</i></>;
  },
  get "Table11C-header1"(){
    return "Preposition";
  },
  get "Table11C-header2"(){
    return <>+ relative particle <i>a</i></>;
  },
  get "Table11C-header3"(){
    return <>+ relative particle <i>ar</i></>;
  },
  get "11-6-2-title"(){
    return "The Negative Relative Particle";
  },
  get "11-6-2-a-title"(){
    return "The Direct and Indirect Relative Clause";
  },
  get "11-6-2-a-i-p"(){
    return <>In direct and indirect negative clauses, <i>nach</i> is the form of the relative particle corresponding to <i>a</i> before regular and irregular verbs, except in the past tense (see <a href="#sec_11_6_2_a_iii">(iii)</a> below).</>;
  },
  get "11-6-2-a-i-sample-1"(){
    return <>He is a person <b>who</b> does <b>not</b> take advice.</>;
  },
  get "11-6-2-a-i-sample-2"(){
    return <>That is the station <b>that</b> did <b>not</b> broadcast the program.</>;
  },
  get "11-6-2-a-i-sample-3"(){
    return <>That is the program <b>that</b> the radio station would <b>not</b> broadcast.</>;
  },
  get "11-6-2-a-i-sample-4"(){
    return <>She is the woman <b>who</b> her daughter will <b>not</b> take good advice.</>;
  },
  get "11-6-2-a-i-sample-5"(){
    return <>That is the man <b>who</b> would <b>not</b> buy any goods from him.</>;
  },
  get "11-6-2-a-i-sample-6"(){
    return <>Is that the case <b>that</b> the man would <b>not</b> accept?</>;
  },
  get "11-6-2-a-i-sample-7"(){
    return <>That is the woman <b>whose</b> son does <b>not</b> come home every year.</>;
  },
  get "11-6-2-a-ii-p"(){
    return <>In the past tense, <i>nár</i> corresponds to both <i>a</i> and <i>ar</i> for regular verbs and the irregular verbs <i>beir</i>, <i>clois/cluin</i>, <i>ith</i>, <i>tabhair</i> and <i>tar</i>.</>;
  },
  get "11-6-2-a-ii-sample-1"(){
    return <>He was a person <b>who</b> did <b>not</b> take advice.</>;
  },
  get "11-6-2-a-ii-sample-2"(){
    return <>That is the station <b>that</b> did <b>not</b> broadcast the program.</>;
  },
  get "11-6-2-a-ii-sample-3"(){
    return <>That is the program <b>that</b> the radio station did <b>not</b> broadcast.</>;
  },
  get "11-6-2-a-ii-sample-4"(){
    return <>That is the woman <b>whose</b> daughter did <b>not</b> take good advice.</>;
  },
  get "11-6-2-a-ii-sample-5"(){
    return <>That is the man <b>who</b> I did <b>not</b> buy any goods from.</>;
  },
  get "11-6-2-a-ii-sample-6"(){
    return <>What happened to the person <b>who</b> you did <b>not</b> catch?</>;
  },
  get "11-6-2-a-ii-sample-7"(){
    return <>There is a movie <b>that</b> I did <b>not</b> hear mentioned as playing in the cinema tonight.</>;
  },
  get "11-6-2-a-ii-sample-8"(){
    return <>Did you throw away the food <b>that</b> the dog did <b>not</b> eat?</>;
  },
  get "11-6-2-a-ii-sample-9"(){
    return <>That is the woman <b>to whom</b> I did <b>not</b> give a book.</>;
  },
  get "11-6-2-a-ii-sample-10"(){
    return <>Is there anyone <b>who</b> has still not come home from the concert?</>;
  },
  get "11-6-2-a-iii-p"(){
    return <>In the past tense, <i>nach</i> corresponds to <i>a</i> for the irregular verbs <i>abair</i>, <i>bí</i>, <i>déan</i>, <i>faigh</i>, <i>feic</i> and <i>téigh</i>.</>;
  },
  get "11-6-2-a-iii-sample-1"(){
    return <>It is a thing <b>that</b> I never said.</>;
  },
  get "11-6-2-a-iii-sample-2"(){
    return <>Is that the woman <b>whose</b> daughter was not present?</>;
  },
  get "11-6-2-a-iii-sample-3"(){
    return <>What will be done about the work <b>that</b> was not done?</>;
  },
  get "11-6-2-a-iii-sample-4"(){
    return <>That is the teacher <b>from whom</b> I did not receive a letter.</>;
  },
  get "11-6-2-a-iii-sample-5"(){
    return <>That is the woman <b>whom</b> the doctor did not see.</>;
  },
  get "11-6-2-a-iii-sample-6"(){
    return <>What did you do that time <b>when</b> you did not go on holiday?</>;
  },
  get "11-7-title"(){
    return "The Verb in Relative Clauses";
  },
  get "11-7-1-title"(){
    return "The Verb &mdash; The Direct Affirmative Relative Clause";
  },
  get "11-7-1-a-p"(){
    return <>The independent form of the verb is used after the direct relative particle <i>a</i> in direct affirmative relative clauses.</>;
  },
  get "11-7-1-a-sample-1"(){
    return <>Did you see the new coat <b>that</b> I <b>got</b>?</>;
  },
  get "11-7-1-a-sample-2"(){
    return <>Is that the man <b>who went</b> to all the games?</>;
  },
  get "11-7-1-b-p"(){
    return <>The verb (except <i>abair</i>) is lenited in the present and future tenses (but see <a href="#sec_11_6_1_a_ii">11.6.1(a)(ii)</a>).</>;
  },
  get "11-7-1-b-sample-1"(){
    return <>That is the hurley ball <b>that</b> she <b>hits</b> every morning.</>;
  },
  get "11-7-1-b-sample-2"(){
    return <>That is the hurley ball <b>that will be hit</b> during the game.</>;
  },
  get "11-7-1-p"(){
    return <>Note that the autonomous verb is lenited where the other forms of the verb are lenited, e.g., <i>na héadaí a cheannaítear</i> (<i>a cheannófar</i>, <i>a cheannaítí</i>) (<b>EN</b>: <i>the clothes that are bought</i> (<i>will be bought</i>, <i>have been bought</i>)) except in the past tense, e.g., <i>na héadaí a ceannaíodh</i> <Tl tlText="the clothes that were bought" />. The independent autonomous verb is only lenited in the past tense for <i>chonacthas</i>, <i>chualathas</i>, <i>chuathas</i> and <i>thángthas</i>.</>;
  },
  get "11-7-2-title"(){
    return "The Verb &mdash; The Indirect Affirmative Relative Clause";
  },
  get "11-7-2-p"(){
    return <>The dependent form of the verb is used after the relative particles <i>ar</i> and <i>a</i> in indirect affirmative relative clauses.</>;
  },
  get "11-7-2-a-p"(){
    return <>The dependent form of the verb is lenited after the relative particle <i>ar</i> (except for the autonomous verb in the past tense, e.g., <i>ar goideadh</i>; <i>ar buaileadh</i>).</>;
  },
  get "11-7-2-a-sample-1"(){
    return <>That is the hurley ball <b>that</b> the woman <b>hit</b>.</>;
  },
  get "11-7-2-a-sample-2"(){
    return <>That is the woman from <b>whom</b> the thief <b>stole</b> the car.</>;
  },
  get "11-7-2-b-p"(){
    return <>The dependent form of the verb is eclipsed after the relative particle <i>a</i>.</>;
  },
  get "11-7-2-b-sample-1"(){
    return <>That is the computer <b>that</b> the woman <b>uses</b> for work.</>;
  },
  get "11-7-2-b-sample-2"(){
    return <>That is the woman from <b>whom</b> the boy <b>will buy</b> a car.</>;
  },
  get "11-7-2-b-sample-3"(){
    return <>Is that the girl <b>whose</b> dog <b>went</b> missing?</>;
  },
  get "11-7-2-b-sample-4"(){
    return <>Where did the man <b>whose</b> son I <b>saw</b> going into the building go?</>;
  },
  get "11-7-3-title"(){
    return "The Verb &mdash; The Direct and Indirect Negative Relative Clause";
  },
  get "11-7-3-p"(){
    return <>The dependent form of the verb is used after the relative particles <i>nach</i> and <i>nár</i> in direct and indirect negative relative clauses.</>;
  },
  get "11-7-3-a-p"(){
    return <>The dependent form of the verb is eclipsed after <i>nach</i>.</>;
  },
  get "11-7-3-a-sample-1"(){
    return <>That is the hurley ball <b>that</b> the woman <b>does not hit</b>.</>;
  },
  get "11-7-3-a-sample-2"(){
    return <>That is the windscreen <b>that</b> the boy <b>will not break</b>.</>;
  },
  get "11-7-3-a-sample-3"(){
    return <>That is the hurley ball <b>that</b> the woman <b>does not hit</b>.</>;
  },
  get "11-7-3-a-sample-4"(){
    return <>That is the woman from <b>whom</b> the boy <b>will not buy</b> a car.</>;
  },
  get "11-7-3-b-p"(){
    return <>The dependent form of the verb is lenited after <i>nár</i> except for the autonomous verb in the past tense, e.g., <i>nár ceannaíodh</i>; <i>nár blaiseadh</i>.</>;
  },
  get "11-7-3-b-sample-1"(){
    return <>That is the hurley ball <b>that</b> the woman <b>did not hit</b>.</>;
  },
  get "11-7-3-b-sample-2"(){
    return <>That is the windscreen <b>that</b> the boy <b>did not break</b>.</>;
  },
  get "11-7-3-b-sample-3"(){
    return <>That is the hurley ball <b>that</b> the woman <b>did not hit</b>.</>;
  },
  get "11-7-3-b-sample-4"(){
    return <>That is the woman from <b>whom</b> the boy <b>did not buy</b> a car.</>;
  },
  get "11-7-4-title"(){
    return "The Verb &mdash; The Relative Form";
  },
  get "11-7-4-a-p"(){
    return <>There is a special independent relative form of the verb in the present, habitual present and future tenses. This form can be used in the relative clause as an alternative to the separate forms of the verb, e.g., <i>Sin é an chéad leabhar eile a bheas á léamh agam</i> <Tl tlText="That is the next book that I will be reading" />; <i>Céard a dhéanfas tú anois?</i> <Tl tlText="What will you do now?" /></>;
  },
  get "11-7-4-b-p"(){
    return <>The special independent relative form of the verb <i>lean</i> <Tl tlText="follow" /> is always used in phrases such as <i>na focail seo a leanas</i> <Tl tlText="the following words" />.</>;
  },
  get "11-8-title"(){
    return "The Copula and the Relative Clause";
  },
  get "11-8-1-p"(){
    return <>Below are the forms of the copula used in relative clauses (see also <a href="./chapter7.html#sec_7_2_3">7.2.3</a> and <a href="./chapter7.html#sec_7_2_4">7.2.4</a> for further information).</>;
  },
  get "Table11D-caption"(){
    return "Forms of the Copula in a Relative Clause";
  },
  get "Table11D-header-1"(){
    return "Present and Future Tense";
  },
  get "Table11D-header-2"(){
    return "Past Tense, Habitual Past Tense and Conditional Mood";
  },
  get "Table11D-subheader-1"(){
    return "before a consonant";
  },
  get "Table11D-subheader-2"(){
    return "before a vowel";
  },
  get "Table11D-subheader-3"(){
    return <>before a consonant or before <i>fh-</i> + <i>consonant</i></>;
  },
  get "Table11D-subheader-4"(){
    return <>before a vowel or before <i>fh-</i> + <i>vowel</i></>;
  },
  get "Table11D-row1-col1"(){
    return "Direct Affirmative";
  },
  get "Table11D-row2-col1"(){
    return "Indirect Affirmative";
  },
  get "Table11D-row3-col1"(){
    return "Direct and Indirect Negative";
  },
  get "11-8-2-p"(){
    return <>The forms ending in <i>-b</i> or <i>-bh</i> are used before a word beginning with a vowel or <i>fh-</i> before a vowel.</>;
  },
  get "11-8-2-sample-1"(){
    return <>She was the woman <b>who</b> was intelligent.</>;
  },
  get "11-8-2-sample-2"(){
    return <>That is the boy <b>who</b> knows the answer.</>;
  },
  get "11-8-2-sample-3"(){
    return <>That is the girl <b>who</b> loves science.</>;
  },
  get "11-8-2-sample-4"(){
    return <>He did not listen to the statement <b>that</b> it was true.</>;
  },
  get "11-8-3-p"(){
    return "The lenited forms of the copula are followed in the past tense and the conditional mood.";
  },
  get "11-8-3-sample-1"(){
    return <>She was the manager <b>who</b> they had.</>;
  },
  get "11-8-3-sample-2"(){
    return <>It was the thing <b>that</b> was easiest to do.</>;
  },
  get "11-8-3-sample-3"(){
    return <>That is the woman <b>who</b> values help greatly.</>;
  },
  get "11-8-3-sample-4"(){
    return <>Nothing happened <b>that</b> was worth mentioning.</>;
  },
  get "11-8-3-sample-5"(){
    return <>I did nothing <b>that</b> was suitable for me.</>;
  },
  get "11-8-4-p"(){
    return "Where the copula is used to emphasize a simple preposition, a compound preposition, a prepositional pronominal or a verbal phrase placed at the beginning, the second clause is a direct relative clause.";
  },
  get "11-8-4-sample-1"(){
    return <>It was yesterday <b>that</b> they came home.</>;
  },
  get "11-8-4-sample-2"(){
    return <>It was from the credit union <b>that</b> I got the money.</>;
  },
  get "11-8-4-sample-3"(){
    return <>It was with him <b>that</b> I was talking.</>;
  },
  get "11-8-4-sample-4"(){
    return <>Was it on the train <b>that</b> you went to Sligo?</>;
  },
  get "11-8-4-sample-5"(){
    return <>It is to France <b>that</b> he goes on holiday.</>;
  },
  get "11-8-4-sample-6"(){
    return <>It is gradually <b>that</b> progress is made.</>;
  },
  get "11-8-5-p"(){
    return <>A compound is made between the forms of the copula <i>ar</i>, <i>arb</i> and <i>arbh</i> and the prepositions <i>de</i>, <i>do</i>, <i>faoi</i>, <i>i</i>, <i>le</i>, <i>ó</i> and <i>trí</i> as outlined below (see also <a href="./chapter7.html#sec_7_3_2">7.3.2</a>).</>;
  },
  get "Table11E-caption"(){
    return <>Compound Forms &mdash; Prepositions with the Particles <i>ar</i>, <i>arb</i> and <i>arbh</i></>;
  },
  get "Table11E-header1"(){
    return "Preposition";
  },
  get "Table11E-header2"(){
    return <>+ the copula <i>ar</i></>;
  },
  get "Table11E-header3"(){
    return <>+ the copula <i>arb</i></>;
  },
  get "Table11E-header4"(){
    return <>+ the copula <i>arbh</i></>;
  },
  get "11-9-title"(){
    return "The Relative Clause &mdash; Additional Examples";
  },
  get "Table11F-caption"(){
    return "Words and Phrases Followed by a Direct Relative Clause";
  },
  get "Table11F-header1"(){
    return "Direct Relative";
  },
  get "Table11F-header2"(){
    return "Example";
  },
  get "Table11F-dobhriathar-ama"(){
    return "temporal adverb";
  },
  get "Table11F-cónasc"(){
    return "conjunction";
  },
  get "Table11F-cad-example1"(){
    return <><b>EN</b>: What happened?</>;
  },
  get "Table11F-cad-example2"(){
    return <><b>EN</b>: What does that mean?</>;
  },
  get "Table11F-cathain-example"(){
    return <><b>EN</b>: When did you get the new car?</>;
  },
  get "Table11F-fhad-example1"(){
    return <><b>EN</b>: How long were you there?</>;
  },
  get "Table11F-fhad-example2"(){
    return <><b>EN</b>: How long did the concert last?</>;
  },
  get "Table11F-mhéad-example1"(){
    return <><b>EN</b>: How many books do you have?</>;
  },
  get "Table11F-mhéad-example2"(){
    return <><b>EN</b>: How much did you receive as payment?</>;
  },
  get "Table11F-mhéad-example3"(){
    return <><b>EN</b>: How much does it cost?</>;
  },
  get "Table11F-cé-example1"(){
    return <><b>EN</b>: Who was with you?</>;
  },
  get "Table11F-acu-example1"(){
    return <><b>EN</b>: Which one is meant, me or you?</>;
  },
  get "Table11F-acu-example2"(){
    return <><b>EN</b>: I don&rsquo;t care which one did it or didn&rsquo;t do it.</>;
  },
  get "Table11F-acu-example3"(){
    return <><b>EN</b>: The arrangement will work whether he is willing or not.</>;
  },
  get "Table11F-céard-example1"(){
    return <><b>EN</b>: What are you doing?</>;
  },
  get "Table11F-uair-example1"(){
    return <><b>EN</b>: When did she arrive?</>;
  },
  get "Table11F-uair-example2"(){
    return <><b>EN</b>: When will the movie end?</>;
  },
  get "Table11F-chomh-example1"(){
    return <><b>EN</b>: The details will be kept as long as they are necessary.</>;
  },
  get "Table11F-chomh-example2"(){
    return <><b>EN</b>: How often do you have parties at home?</>;
  },
  get "Table11F-conas-example1"(){
    return <><b>EN</b>: How do you do it?</>;
  },
  get "Table11F-mar-example1"(){
    return <><b>EN</b>: How did you get to know him?</>;
  },
  get "Table11F-mar-example2"(){
    return <><b>EN</b>: Do it properly.</>;
  },
  get "Table11F-nuair-example1"(){
    return <><b>EN</b>: I will call you when I have the opportunity.</>;
  },
  get "Table-11F-footnote"(){
    return <><i>an fhad</i> is an established form. <i>Fad</i> is always a masculine noun.</>;
  },
  get "Table11G-caption"(){
    return "Words and Phrases Followed by an Indirect Relative Clause";
  },
  get "Table11G-header1"(){
    return "Indirect Relative";
  },
  get "Table11G-header2"(){
    return "Example";
  },
  get "Table11G-áit-example1"(){
    return <><b>EN</b>: That is the place where he was.</>;
  },
  get "Table11G-áit-example2"(){
    return <><b>EN</b>: Where are those classes held?</>;
  },
  get "Table11G-áit-example3"(){
    return <><b>EN</b>: Where did you go there?</>;
  },
  get "Table11G-chaoi-example1"(){
    return <><b>EN</b>: That is the way I heard about it.</>;
  },
  get "Table11G-chaoi-example2"(){
    return <><b>EN</b>: How did such a thing happen?</>;
  },
  get "Table11G-dóigh-example1"(){
    return <><b>EN</b>: That is the way it is now.</>;
  },
  get "Table11G-dóigh-example2"(){
    return <><b>EN</b>: How is the work done?</>;
  },
  get "Table11G-fáth-example1"(){
    return <><b>EN</b>: That is the reason I was happy.</>;
  },
  get "Table11G-fáth-example2"(){
    return <><b>EN</b>: Why do you waste your time like that?</>;
  },
  get "Table11G-chuige-example1"(){
    return <><b>EN</b>: Why did you do that?</>;
  },
  get "Table11G-ina-thaobh-example1"(){
    return <><b>EN</b>: In what respect did you lie?</>;
  },
  get "Table11G-tslí-example1"(){
    return <><b>EN</b>: I don&rsquo;t like the way it is being implemented.</>;
  },
  get "Table11G-tslí-example2"(){
    return <><b>EN</b>: How are members of the Senate elected?</>;
  },
  get "Table11H-misc-example1"(){
    return <><b>EN</b>: He drinks what he earns.</>;
  },
  get "Table11H-misc-example2"(){
    return <><b>EN</b>: He drank what he earned.</>;
  },
  get "Table11H-misc-example3"(){
    return <><b>EN</b>: She gets everything she needs.</>;
  },
  get "Table11H-misc-example4"(){
    return <><b>EN</b>: She got everything she wanted.</>;
  },
  get "Table11H-mar-example1"(){
    return <><b>EN</b>: I went to the clothing store where beautiful wool sweaters are sold.</>;
  },
  get "Table11H-mar-example2"(){
    return <><b>EN</b>: That is my aunt&rsquo;s house where I often visit.</>;
},
};
