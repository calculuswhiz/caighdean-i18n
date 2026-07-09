import { ChapterTemplate, HX, SampleBox, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { AdverbExampleTable, Table6A, Table6B, Table6C } from "./tables";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter6 = (props: {
  docLang: SupportedLocales;
  devMode?: boolean;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const rootRef = props.devMode ? "/" : "/caighdean-i18n/";

  return <ChapterTemplate
    title={chapterDb["6-title"]}
    chapterNumber={6}
    docLang={props.docLang}>
    <HX level={1} navText="6" title={chapterDb["6-title"]}>
      <HX level={2} navText="6.1" title={chapterDb["6-1-title"]}>
        <HX level={3} navText="6.1.1">
          <p>{chapterDb["6-1-1-p1"]}</p>
          <p>{chapterDb["6-1-1-p2"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_6_1_1_a">
              <p>{chapterDb["6-1-1-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-a-SampleBox-eg" />
            </li>
            <li id="sec_6_1_1_b">
              <p>{chapterDb["6-1-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-b-SampleBox-eg" />
            </li>
            <li id="sec_6_1_1_c">
              <p>{chapterDb["6-1-1-c-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-c-SampleBox-eg" />
            </li>
            <li id="sec_6_1_1_d">
              <p>{chapterDb["6-1-1-d-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-d-SampleBox-eg" />
            </li>
            <li id="sec_6_1_1_e">
              <p>{chapterDb["6-1-1-e-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-e-SampleBox-eg" />
            </li>
            <li id="sec_6_1_1_f">
              <p>{chapterDb["6-1-1-f-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-f-SampleBox-eg" />
              <div className="paragraph">
                <p>{chapterDb["6-1-1-f-p2"]}</p>
              </div>
            </li>
            <li id="sec_6_1_1_g">
              <p>{chapterDb["6-1-1-g-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-g-SampleBox-eg" />
            </li>
            <li id="sec_6_1_1_h">
              <p>{chapterDb["6-1-1-h-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-h-SampleBox-eg" />
            </li>
            <li id="sec_6_1_1_i">
              <p>{chapterDb["6-1-1-i-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-i-SampleBox-eg" />
            </li>
            <li id="sec_6_1_1_j">
              <p>{chapterDb["6-1-1-j-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="6-1-1-j-SampleBox-eg" />
            </li>
            <li id="sec_6_1_1_k">
              <p>{chapterDb["6-1-1-k-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="6-1-1-k-SampleBox-eg" />
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="6.2" title={chapterDb["6-2-title"]}>
        <p>{chapterDb["6-2-p"]}</p>
        <ol className="list-[lower-alpha]">
          <li id="sec_6_2_a">
            <p>{chapterDb["6-2-a-p"]}</p>
            <AdverbExampleTable prefix="6-2-a-SampleBox-eg" count={2} docLang={props.docLang} />
          </li>
          <li id="sec_6_2_b">
            <p>{chapterDb["6-2-b-p"]}</p>
            <AdverbExampleTable prefix="6-2-b-SampleBox-eg" count={2} docLang={props.docLang} />
          </li>
          <li id="sec_6_2_c">
            <p>{chapterDb["6-2-c-p"]}</p>
            <AdverbExampleTable prefix="6-2-c-SampleBox-eg" count={2} docLang={props.docLang} />
          </li>
          <li id="sec_6_2_d">
            <p>{chapterDb["6-2-d-p"]}</p>
            <AdverbExampleTable prefix="6-2-d-SampleBox-eg" count={2} docLang={props.docLang} />
          </li>
        </ol>
      </HX>
      <hr />
      <HX level={2} navText="6.3" title={chapterDb["6-3-title"]}>
        <Table6A docLang={props.docLang} />
        <Table6B docLang={props.docLang} />
      </HX>
      <hr />
      <HX level={2} navText="6.4" title={chapterDb["6-4-title"]}>
        <p>{chapterDb["6-4-p1"]}</p>
        <div className="flex flex-row mx-[15%]">
          <img className="w-1/2" src={`${rootRef}/Compass-full.svg`} alt="Static" />
          <p className="flex-grow"></p>
          <img className="w-1/3 flex justify-center items-center" src={`${rootRef}/Compass-quarter.svg`} alt="Static" />
        </div>
        <table className="w-full">
          <colgroup>
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
          </colgroup>
          <tbody>
            <tr>
              <td className="bg-white">
                <b>
                  T (an tuaisceart
                  {
                    props.docLang !== "ga_IE"
                    && <> &mdash; {chapterDb["CompassT"]}</>
                  }
                  )
                </b>
              </td>
              <td className="bg-white">
                <b>
                  D (an deisceart
                  {
                    props.docLang !== "ga_IE"
                    && <> &mdash; {chapterDb["CompassD"]}</>
                  }
                  )
                </b>
              </td>
              <td className="bg-white">
                <b>
                  O (an t&#x2011;oirthear
                  {
                    props.docLang !== "ga_IE"
                    && <> &mdash; {chapterDb["CompassO"]}</>
                  }
                  )
                </b>
              </td>
              <td className="bg-white">
                <b>
                  I (an t&#x2011;iarthar
                  {
                    props.docLang !== "ga_IE"
                    && <> &mdash; {chapterDb["CompassI"]}</>
                  }
                  )
                </b>
              </td>
            </tr>
          </tbody>
        </table>
        <p>{chapterDb["6-4-p2"]}</p>
        <Table6C docLang={props.docLang} />
      </HX>
      <hr />
    </HX>
  </ChapterTemplate>;
};
