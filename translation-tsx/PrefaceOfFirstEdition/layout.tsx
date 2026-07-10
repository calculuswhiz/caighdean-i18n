import { HX, Page, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const PrefaceOfFirstEdition = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  
  return <Page
    title={chapterDb["PrefaceOfFirstEditionTitle"]}
    docLang={props.docLang}>
      <HX level={1} navText="title" title={chapterDb["PrefaceOfFirstEditionTitle"]}>
    <p>{chapterDb["sec1-p1"]}</p>
    <p>{chapterDb["sec1-p2"]}</p>
    <p>{chapterDb["sec1-p3"]}</p>
    <p>{chapterDb["sec1-p4"]}</p>
    <p>{chapterDb["sec1-p5"]}</p>
    <p>{chapterDb["sec1-p6"]}</p>
    <p>{chapterDb["sec1-p7"]}</p>
    <p>{chapterDb["sec1-p8"]}</p>
    <ol className="list-[arabic]">
      <li>{chapterDb["sec1-li-1-p"]}</li>
      <li>{chapterDb["sec1-li-2-p"]}</li>
      <li>{chapterDb["sec1-li-3-p"]}</li>
      <li>{chapterDb["sec1-li-4-p"]}</li>
    </ol>
    <p>{chapterDb["sec1-p9"]}</p>
    <HX level={2} navText="sec2" title={chapterDb["sec2-title"]}>
      <p>{chapterDb["sec2-p1"]}</p>
      <p>{chapterDb["sec2-p2"]}</p>
      <p>{chapterDb["sec2-p3"]}</p>
      <p>{chapterDb["sec2-p4"]}</p>
      <p>{chapterDb["sec2-p5"]}</p>
      <p>{chapterDb["sec2-p6"]}</p>
    </HX>
    <hr/>
    <HX level={2} navText="sec3" title={chapterDb["sec3-title"]}>
      <p>{chapterDb["sec3-p1"]}</p>
    </HX>
    <hr/>
    <HX level={2} navText="sec4" title={chapterDb["sec4-title"]}>
      <p>{chapterDb["sec4-p1"]}</p>
      <p>{chapterDb["sec4-p2"]}</p>
    </HX>
    <hr/>
    <HX level={2} navText="sec5" title={chapterDb["sec5-title"]}>
      <p>{chapterDb["sec5-p1"]}</p>
      <p>{chapterDb["sec5-p2"]}</p>
      <p>{chapterDb["sec5-p3"]}</p>
      <p>{chapterDb["sec5-p4"]}</p>
      <p>{chapterDb["sec5-p5"]}</p>
    </HX>
    <hr/>
    <HX level={2} navText="sec6" title={chapterDb["sec6-title"]}>
      <p>{chapterDb["sec6-p1"]}</p>
      <p>{chapterDb["sec6-p2"]}</p>
      <p>{chapterDb["sec6-p3"]}</p>
      <p>{chapterDb["sec6-p4"]}</p>
      <p>{chapterDb["sec6-p5"]}</p>
      <p>{chapterDb["sec6-p6"]}</p>
    </HX>
    <hr/>
    <div className="py-10">
      <p>{chapterDb["closing-line1"]}</p>
      <p>{chapterDb["closing-line2"]}</p>
      <p>{chapterDb["closing-line3"]}</p>
      <p>{chapterDb["closing-line4"]}</p>
    </div>
  </HX>
  </Page>;
};
