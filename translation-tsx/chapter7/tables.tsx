import { getCommonTranslator, MarkedTable, type SupportedLocales } from "../bodyMatter";
import { getChapterTranslator } from "./layout";

export const TableTemplate = (props: {
  docLang: SupportedLocales;
}) => {
  const commonDb = getCommonTranslator(props.docLang);
  const chapterDb = getChapterTranslator(props.docLang);

  return ;
};
