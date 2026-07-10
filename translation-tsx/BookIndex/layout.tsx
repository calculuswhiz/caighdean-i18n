import { Page, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { En_US_Layout } from "./layouts/en-US";
import { Ga_IE_Layout } from "./layouts/ga-IE";

const chapterDictionaries = { en_US, ga_IE };
function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

export const BookIndex = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  return <Page
    title={chapterDb["teidealNaCaibidle"]}
    docLang={props.docLang}
    chapterClass="book-index">
    <En_US_Layout docLang={props.docLang} />
    <Ga_IE_Layout docLang={props.docLang} />
  </Page>;
};
