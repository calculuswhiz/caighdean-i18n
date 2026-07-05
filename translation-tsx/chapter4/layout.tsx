import { ChapterTemplate, HX, SampleBox, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { Table4A, Table4B, Table4C, Table4D, Table4E, Table4F, Table4G } from "./tables";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter4 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);

  return <ChapterTemplate
    title={chapterDb["4-title"]}
    chapterNumber={4}
    docLang={props.docLang}>
    <HX level={1} navText="4" title={chapterDb["4-title"]}>
      <HX level={2} navText="4.1" title={chapterDb["4-1-title"]}>
        <HX level={3} navText="4.1.1">
          <p>{chapterDb["4-1-1-p"]}</p>
        </HX>
        <HX level={3} navText="4.1.2">
          <p>{chapterDb["4-1-2-p"]}</p>
        </HX>
        <HX level={3} navText="4.1.3">
          <p>{chapterDb["4-1-3-p"]}</p>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="4.2" title={chapterDb["4-2-title"]}>
        <HX level={3} navText="4.2.1">
          <p>{chapterDb["4-2-1-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="4-2-1-p-sample" />
        </HX>
        <HX level={3} navText="4.2.2">
          <ol className="list-[lower-alpha]">
            <li id="sec_4_2_2_a">
              <p>{chapterDb["4-2-2-a-p"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_4_2_2_a_i">
                  <p>{chapterDb["4-2-2-a-i-p"]}</p>
                </li>
                <li id="sec_4_2_2_a_ii">
                  <p>{chapterDb["4-2-2-a-ii-p"]}</p>
                </li>
              </ol>
            </li>
            <li id="sec_4_2_2_b">
              <p>{chapterDb["4-2-2-b-p"]}</p>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="4.2.3">
          <p>{chapterDb["4-2-3-p"]}</p>
        </HX>
        <HX level={3} navText="4.2.4" title={chapterDb["4-2-4-title"]}>
          <p>{chapterDb["4-2-4-p"]}</p>
          <Table4A docLang={props.docLang}></Table4A>
          <p>*{chapterDb["Table4A-footnote"]}</p>
        </HX>
        <HX level={3} navText="4.2.5" title={chapterDb["4-2-5-title"]}>
          <p>{chapterDb["4-2-5-p"]}</p>
          <Table4B docLang={props.docLang}></Table4B>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="4.3" title={chapterDb["4-3-title"]}>
        <HX level={3} navText="4.3.1">
          <p>{chapterDb["4-3-1-p"]}</p>
        </HX>
        <HX level={3} navText="4.3.2">
          <p>{chapterDb["4-3-2-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_4_3_2_a">
              <p>{chapterDb["4-3-2-a-p"]}</p>
              <table className="samplebox">
                <colgroup>
                  <col className="w-1/3" />
                  <col className="w-1/3" />
                  <col className="w-1/3" />
                </colgroup>
                <tbody>
                  <tr>
                    <td><i>{chapterDb["4-3-2-a-sample-row1"]}</i></td>
                    <td>{ga_IE["4-3-2-a-sample1"]}</td>
                    {
                      props.docLang !== "ga_IE" && <td>{chapterDb["4-3-2-a-sample1"]}</td>
                    }
                  </tr>
                  <tr>
                    <td><i>{chapterDb["4-3-2-a-sample-row2"]}</i></td>
                    <td>{ga_IE["4-3-2-a-sample2"]}</td>
                    {
                      props.docLang !== "ga_IE" && <td>{chapterDb["4-3-2-a-sample2"]}</td>
                    }
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_4_3_2_b">
              <p>{chapterDb["4-3-2-b-p"]}</p>
              <table className="samplebox">
                <colgroup>
                  <col className="w-1/3" />
                  <col className="w-1/3" />
                </colgroup>
                <tbody>
                  <tr>
                    <td><i>{chapterDb["4-3-2-b-sample-row1"]}</i></td>
                    <td>{ga_IE["4-3-2-b-sample1"]}</td>
                    {props.docLang !== "ga_IE" && <td>{chapterDb["4-3-2-b-sample1"]}</td>}
                  </tr>
                  <tr>
                    <td><i>{chapterDb["4-3-2-b-sample-row2"]}</i></td>
                    <td>{ga_IE["4-3-2-b-sample2"]}</td>
                    {props.docLang !== "ga_IE" && <td>{chapterDb["4-3-2-b-sample2"]}</td>}
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="4.3.3">
          <ol className="list-[lower-alpha]">
            <li id="sec_4_3_3_a">
              <p>{chapterDb["4-3-3-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="4-3-3-a-p-sample" />
            </li>
            <li id="sec_4_3_3_b">
              <p>{chapterDb["4-3-3-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-3-3-b-p-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="4.3.4">
          <p>{chapterDb["4-3-4-p"]}</p>
        </HX>
        <HX level={3} navText="4.3.5">
          <p>{chapterDb["4-3-5-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="4-3-5-p-sample" />
        </HX>
        <HX level={3} navText="4.3.6">
          <p>{chapterDb["4-3-6-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="4-3-6-p-sample" />
        </HX>
        <HX level={3} navText="4.3.7">
          <p>{chapterDb["4-3-7-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-3-7-p-sample" />
        </HX>
        <HX level={3} navText="4.3.8">
          <p>{chapterDb["4-3-8-p"]}</p>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="4.4" title={chapterDb["4-4-title"]}>
        <p>{chapterDb["4-4-p"]}</p>
        <HX level={3} navText="4.4.1" title={chapterDb["4-4-1-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_4_4_1_a">
              <p><b>{chapterDb["4-4-1-a-title"]}</b></p>
              <ol className="list-[lower-roman]">
                <li id="sec_4_4_1_a_i">
                  <p>{chapterDb["4-4-1-a-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="4-4-1-a-i-p-sample" />
                </li>
                <li id="sec_4_4_1_a_ii">
                  <p>{chapterDb["4-4-1-a-ii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="4-4-1-a-ii-p-sample" />
                </li>
                <li id="sec_4_4_1_a_iii">
                  <p>{chapterDb["4-4-1-a-iii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-4-1-a-iii-p-sample" />
                </li>
                <li id="sec_4_4_1_a_iv">
                  <p>{chapterDb["4-4-1-a-iv-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="4-4-1-a-iv-p-sample" />
                </li>
                <li id="sec_4_4_1_a_v">
                  <p>{chapterDb["4-4-1-a-v-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-4-1-a-v-p-sample" />
                </li>
              </ol>
            </li>
            <li id="sec_4_4_1_b">
              <p><b>{chapterDb["4-4-1-b-title"]}</b></p>
              <ol className="list-[lower-roman]">
                <li id="sec_4_4_1_b_i">
                  <p>{chapterDb["4-4-1-b-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-4-1-b-i-p-sample" />
                </li>
                <li id="sec_4_4_1_b_ii">
                  <p>{chapterDb["4-4-1-b-ii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-4-1-b-ii-p-sample" />
                </li>
                <li id="sec_4_4_1_b_iii">
                  <p>{chapterDb["4-4-1-b-iii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-4-1-b-iii-p-sample" />
                </li>
                <li id="sec_4_4_1_b_iv">
                  <p>{chapterDb["4-4-1-b-iv-p"]}</p>
                </li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="4.4.2" title={chapterDb["4-4-2-title"]}>
          <p>{chapterDb["4-4-2-p"]}</p>
        </HX>
        <HX level={3} navText="4.4.3" title={chapterDb["4-4-3-title"]}>
          <p>{chapterDb["4-4-3-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="4-4-3-p-sample" />
        </HX>
        <HX level={3} navText="4.4.4" title={chapterDb["4-4-4-title"]}>
          <p>{chapterDb["4-4-4-p"]}</p>
          <Table4C docLang={props.docLang}></Table4C>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="4.5" title={chapterDb["4-5-title"]}>
        <p>{chapterDb["4-5-p"]}</p>
        <HX level={3} navText="4.5.1" title={chapterDb["4-5-1-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_4_5_1_a">
              <p><b>{commonDb["Firinscneach"]}</b></p>
              <p>{chapterDb["4-5-1-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-5-1-a-p-sample" />
            </li>
            <li id="sec_4_5_1_b">
              <p><b>{commonDb["Baininscneach"]}</b></p>
              <p>{chapterDb["4-5-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-5-1-b-p-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="4.5.2" title={chapterDb["4-5-2-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_4_5_2_a">
              <p>{chapterDb["4-5-2-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="4-5-2-a-p-sample" />
            </li>
            <li id="sec_4_5_2_b">
              <p>{chapterDb["4-5-2-b-p"]}</p>
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="4.6" title={chapterDb["4-6-title"]}>
        <HX level={3} navText="4.6.1">
          <p>{chapterDb["4-6-1-p"]}</p>
        </HX>
        <HX level={3} navText="4.6.2">
          <p>{chapterDb["4-6-2-p"]}</p>
          <table className="samplebox">
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <tbody>
              <tr>
                <td><i>{chapterDb["4-6-2-sample-row1"]}</i></td>
                <td>{ga_IE["4-6-2-sample1"]}</td>
                {
                  props.docLang !== "ga_IE" && <td>{chapterDb["4-6-2-sample1"]}</td>
                }
              </tr>
              <tr>
                <td><i>{chapterDb["4-6-2-sample-row2"]}</i></td>
                <td>{ga_IE["4-6-2-sample2"]}</td>
                {
                  props.docLang !== "ga_IE" && <td>{chapterDb["4-6-2-sample2"]}</td>
                }
              </tr>
              <tr>
                <td><i>{chapterDb["4-6-2-sample-row3"]}</i></td>
                <td>{ga_IE["4-6-2-sample3"]}</td>
                {
                  props.docLang !== "ga_IE" && <td>{chapterDb["4-6-2-sample3"]}</td>
                }
              </tr>
            </tbody>
          </table>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="4.7" title={chapterDb["4-7-title"]}>
        <Table4D docLang={props.docLang}></Table4D>
        <p>*{chapterDb["Table4D-footnote"]}</p>
        <Table4E docLang={props.docLang}></Table4E>
        <Table4F docLang={props.docLang}></Table4F>
        <Table4G docLang={props.docLang}></Table4G>
      </HX>
      <hr />
      <HX level={2} navText="4.8" title={chapterDb["4-8-title"]}>
        <HX level={3} navText="4.8.1">
          <ol className="list-[lower-alpha]">
            <li id="sec_4_8_1_a">
              <p>{chapterDb["4-8-1-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="4-8-1-a-p-sample" />
            </li>
            <li id="sec_4_8_1_b">
              <p>{chapterDb["4-8-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="4-8-1-b-p-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="4.8.2">
          <p>{chapterDb["4-8-2-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="4-8-2-p-sample" />
        </HX>
        <HX level={3} navText="4.8.3" title={chapterDb["4-8-3-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_4_8_3_a">
              <p>{chapterDb["4-8-3-a-p"]}</p>
            </li>
            <li id="sec_4_8_3_b">
              <p>{chapterDb["4-8-3-b-p"]}</p>
            </li>
            <li id="sec_4_8_3_c">
              <p>{chapterDb["4-8-3-c-p"]}</p>
            </li>
          </ol>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="4-8-3-c-p-sample" />
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="4.9" title={chapterDb["4-9-title"]}>
        <p>{chapterDb["4-9-p"]}</p>
      </HX>
      <hr />
      <HX level={2} navText="4.10" title={chapterDb["4-10-title"]}>
        <p>{chapterDb["4-10-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={8} samplePrefix="4-10-p-sample" />
      </HX>
      <hr />
      <HX level={2} navText="4.11" title={chapterDb["4-11-title"]}>
        <p>{chapterDb["4-11-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="4-11-p-sample" />
      </HX>
      <hr />
      <HX level={2} navText="4.12" title={chapterDb["4-12-title"]}>
        <HX level={3} navText="4.12.1">
          <p>{chapterDb["4-12-1-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_4_12_1_a">
              <p>{chapterDb["4-12-1-a-p"]}</p>
            </li>
            <li id="sec_4_12_1_b">
              <p>{chapterDb["4-12-1-b-p"]}</p>
            </li>
            <li id="sec_4_12_1_c">
              <p>{chapterDb["4-12-1-c-p"]}</p>
            </li>
            <li id="sec_4_12_1_d">
              <p>{chapterDb["4-12-1-d-p"]}</p>
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
    </HX>
  </ChapterTemplate>;
};
