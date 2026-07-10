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

export const Preface = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <Page
    title={chapterDb["prefaceTitle"]}
    docLang={props.docLang}>
    <HX level={1} navText="title" title={chapterDb["prefaceTitle"]}>
      <HX level={2} hideNavText navText="sec1" title={chapterDb["sec1-title"]}>
        <p>{chapterDb["sec1-p1"]}
        </p>
        <p>{chapterDb["sec1-p2"]}
        </p>
      </HX>
      <hr />
      <HX level={2} hideNavText navText="sec2" title={chapterDb["sec2-title"]}>
        <p>{chapterDb["sec2-p1"]}
        </p>
        <p>{chapterDb["sec2-p2"]}
        </p>
      </HX>
      <hr />
      <HX level={2} hideNavText navText="sec3" title={chapterDb["sec3-title"]}>
        <p>{chapterDb["sec3-p1"]}
        </p>
        <p>{chapterDb["sec3-p2"]}
        </p>
      </HX>
      <hr />
      <HX level={2} hideNavText navText="sec4" title={chapterDb["sec4-title"]}>
        <p>{chapterDb["sec4-p"]}
        </p>
      </HX>
      <hr />
      <HX level={2} hideNavText navText="sec5" title={chapterDb["sec5-title"]}>
        <p>{chapterDb["sec5-p"]}
        </p>
      </HX>
      <hr />
      <HX level={2} hideNavText navText="sec6" title={chapterDb["sec6-title"]}>
        <p>{chapterDb["sec6-p"]}
        </p>
      </HX>
      <hr />
      <HX level={2} hideNavText navText="sec7" title={chapterDb["sec7-title"]}>
        <p>{chapterDb["sec7-p1"]}
        </p>
        <p>{chapterDb["sec7-p2"]}
        </p>
        <p>{chapterDb["sec7-p3"]}
        </p>
        <p>{chapterDb["sec7-p4"]}
        </p>
      </HX>
      <hr />
      <div className="py-10">
        <p>{chapterDb["signature-title1"]}
        </p>
        <p>{chapterDb["signature-title2"]}
        </p>
        <p>{chapterDb["signature-date"]}.
        </p>
      </div>
    </HX>
  </Page>;
};
