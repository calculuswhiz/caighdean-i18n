import { ChapterTemplate, HX, SampleBox, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { Table10A, Table10B, Table10C, Table10D, Table10E, Table10F } from "./tables";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter10 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);
  
  return <ChapterTemplate
    title={chapterDb["10-title"]}
    chapterNumber={10}
    docLang={props.docLang}>
      <HX level={1} navText="10" title={chapterDb["10-title"]}>
    <HX level={2} navText="10.1" title={chapterDb["10-1-title"]}>
      <p>{chapterDb["10-1-p"]}</p>
    </HX>
    <hr/>
    <HX level={2} navText="10.gp2-5" title={chapterDb["h2-gp-2-5-title"]}>
      <p>{chapterDb["h2-gp-2-5-p"]}</p>
      <HX level={3} navText="10.2" title={chapterDb["10-2-title"]}>
        <p>{chapterDb["10-2-p"]}</p>
        <HX level={4} navText="10.2.1" title={chapterDb["10-2-1-title"]}>
          <p>{chapterDb["10-2-1-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_2_1_a">
              <p>{chapterDb["10-2-1-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-1-a-sample-"/>
            </li>
            <li id="sec_10_2_1_b">
              <p>{chapterDb["10-2-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-1-b-sample-"/>
            </li>
            <li id="sec_10_2_1_c">
              <p>{chapterDb["10-2-1-c-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-1-c-sample-"/>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.2.2" title={chapterDb["10-2-2-title"]}>
          <p>{chapterDb["10-2-2-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-2-sample-"/>
        </HX>
        <HX level={4} navText="10.2.3" title={chapterDb["10-2-3-title"]}>
          <p>{chapterDb["10-2-3-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_2_3_a">
              <p>{chapterDb["10-2-3-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-3-a-sample-"/>
            </li>
            <li id="sec_10_2_3_b">
              <p>{chapterDb["10-2-3-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-3-b-sample-"/>
            </li>
            <li id="sec_10_2_3_c">
              <p>{chapterDb["10-2-3-c-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-3-c-sample-"/>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.2.4" title={chapterDb["10-2-4-title"]}>
          <p>{chapterDb["10-2-4-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_2_4_a">
              <p>{chapterDb["10-2-4-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-4-a-sample-"/>
            </li>
            <li id="sec_10_2_4_b">
              <p>{chapterDb["10-2-4-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-4-b-sample-"/>
            </li>
            <li id="sec_10_2_4_c">
              <p>{chapterDb["10-2-4-c-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-4-c-sample-"/>
            </li>
          </ol>
          <aside><b>{commonDb["Nóta"]}</b>
            <ol className="list-[lower-roman]">
              <li>{chapterDb["10-2-4-note-a-i-p"]}
              </li>
              <li>{chapterDb["10-2-4-note-a-ii-p"]}
              </li>
            </ol>
          </aside>
        </HX>
        <HX level={4} navText="10.2.5" title={chapterDb["10-2-5-title"]}>
          <p>{chapterDb["10-2-5-p1"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_2_5_a">
              <p>{chapterDb["10-2-5-a-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-5-a-sample-"/>
              <div className="paragraph">
                <p>{chapterDb["10-2-5-a-p2"]}</p>
              </div>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-5-a-sample-" startAt={3}/>
              <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["10-2-5-note-p"]}
              </aside>
            </li>
            <li id="sec_10_2_5_b">
              <p>{chapterDb["10-2-5-b-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-5-b-sample-"/>
              <p>{chapterDb["10-2-5-b-p2"]}</p>
            </li>
            <li id="sec_10_2_5_c">
              <p>{chapterDb["10-2-5-c-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-5-c-sample-"/>
              <p>{chapterDb["10-2-5-c-p2"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-2-5-c-sample-" startAt={3}/>
              <p>{chapterDb["10-2-5-c-p3"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-5-c-sample-" startAt={6}/>
            </li>
            <li id="sec_10_2_5_d">
              <p>{chapterDb["10-2-5-d-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-5-d-sample-"/>
              <p>{chapterDb["10-2-5-d-p2"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-5-d-sample-" startAt={3}/>
            </li>
            <li id="sec_10_2_5_e">
              <p>{chapterDb["10-2-5-e-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-5-e-sample-"/>
              <p>{chapterDb["10-2-5-e-p2"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-5-e-sample-" startAt={3}/>
              <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["10-2-5-e-note-p"]}
              </aside>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.2.6" title={chapterDb["10-2-6-title"]}>
          <p>{chapterDb["10-2-6-p1"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-2-6-sample-"/>
          <p>{chapterDb["10-2-6-p2"]}</p>
          <p>{chapterDb["10-2-6-p3"]}</p>
        </HX>
        <HX level={4} navText="10.2.7" title={chapterDb["10-2-7-title"]}>
          <p>{chapterDb["10-2-7-p1"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="10-2-7-sample-"/>
          <p>{chapterDb["10-2-7-p2"]}</p>
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["10-2-7-note-p"]}
          </aside>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_2_7_a">
              <p>{chapterDb["10-2-7-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-a-sample-"/>
            </li>
            <li id="sec_10_2_7_b">
              <p>{chapterDb["10-2-7-b-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-b-sample-"/>
              <p>{chapterDb["10-2-7-b-p2"]}</p>
            </li>
            <li id="sec_10_2_7_c">
              <p>{chapterDb["10-2-7-c-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-c-sample-"/>
              <p>{chapterDb["10-2-7-c-p2"]}</p>
            </li>
            <li id="sec_10_2_7_d">
              <p>{chapterDb["10-2-7-d-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-d-sample-"/>
            </li>
            <li id="sec_10_2_7_e">
              <p>{chapterDb["10-2-7-e-p1"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_10_2_7_e_i">
                  <p>{chapterDb["10-2-7-e-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-e-i-sample-"/>
                </li>
                <li id="sec_10_2_7_e_ii">
                  <p>{chapterDb["10-2-7-e-ii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-e-ii-sample-"/>
                </li>
                <li id="sec_10_2_7_e_iii">
                  <p>{chapterDb["10-2-7-e-iii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-e-iii-sample-"/>
                </li>
                <li id="sec_10_2_7_e_iv">
                  <p>{chapterDb["10-2-7-e-iv-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-e-iv-sample-"/>
                </li>
              </ol>
              <p>{chapterDb["10-2-7-e-p2"]}</p>
            </li>
            <li id="sec_10_2_7_f">
              <p>{chapterDb["10-2-7-f-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-f-sample-"/>
            </li>
            <li id="sec_10_2_7_g">
              <p>{chapterDb["10-2-7-g-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-g-sample-"/>
            </li>
            <li id="sec_10_2_7_h">
              <p>{chapterDb["10-2-7-h-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-h-sample-"/>
              <p>{chapterDb["10-2-7-h-p2"]}</p>
            </li>
            <li id="sec_10_2_7_i">
              <p>{chapterDb["10-2-7-i-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-i-sample-"/>
            </li>
            <li id="sec_10_2_7_j">
              <p>{chapterDb["10-2-7-j-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-j-sample-"/>
            </li>
            <li id="sec_10_2_7_k">
              <p>{chapterDb["10-2-7-k-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-k-sample-"/>
            </li>
            <li id="sec_10_2_7_l">
              <p>{chapterDb["10-2-7-l-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-l-sample-"/>
            </li>
            <li id="sec_10_2_7_m">
              <p>{chapterDb["10-2-7-m-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-7-m-sample-"/>
              <aside>{chapterDb["10-2-7-m-p2"]}
              </aside>
            </li>
          </ol>
          <p>{chapterDb["10-2-7-p3"]}</p>
        </HX>
        <HX level={4} navText="10.2.8" title={chapterDb["10-2-8-title"]}>
          <p>{chapterDb["10-2-8-p1"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-2-8-sample-"/>
          <p>{chapterDb["10-2-8-p2"]}</p>
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["10-2-8-note-p"]}
          </aside>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_2_8_a">
              <p>{chapterDb["10-2-8-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-8-a-sample-"/>
            </li>
            <li id="sec_10_2_8_b">
              <p>{chapterDb["10-2-8-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-8-b-sample-"/>
            </li>
            <li id="sec_10_2_8_c">
              <p>{chapterDb["10-2-8-c-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-8-c-sample-"/>
            </li>
            <li id="sec_10_2_8_d">
              <p>{chapterDb["10-2-8-d-p"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_10_2_8_d_i">
                  <p>{chapterDb["10-2-8-d-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-8-d-i-sample-"/>
                </li>
                <li id="sec_10_2_8_d_ii">
                  <p>{chapterDb["10-2-8-d-ii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-8-d-ii-sample-"/>
                </li>
                <li id="sec_10_2_8_d_iii">
                  <p>{chapterDb["10-2-8-d-iii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-8-d-iii-sample-"/>
                </li>
                <li id="sec_10_2_8_d_iv">
                  <p>{chapterDb["10-2-8-d-iv-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-8-d-iv-sample-"/>
                </li>
              </ol>
            </li>
            <li id="sec_10_2_8_e">
              <p>{chapterDb["10-2-8-e-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-8-e-sample-"/>
            </li>
            <li id="sec_10_2_8_f">
              <p>{chapterDb["10-2-8-f-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-8-f-sample-"/>
              <aside>{chapterDb["10-2-8-f-p2"]}
              </aside>
            </li>
          </ol>
          <p>{chapterDb["10-2-8-p3"]}</p>
        </HX>
        <HX level={4} navText="10.2.9" title={chapterDb["10-2-9-title"]}>
          <p>{chapterDb["10-2-9-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-9-sample-"/>
        </HX>
        <HX level={4} navText="10.2.10" title={chapterDb["10-2-10-title"]}>
          <p>{chapterDb["10-2-10-p1"]}</p>
          <p>{chapterDb["10-2-10-p2"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-10-sample-"/>
          <p>{chapterDb["10-2-10-p3"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_2_10_a">
              <p>{chapterDb["10-2-10-a-p"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_10_2_10_a_i">
                  <p>{chapterDb["10-2-10-a-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={1} samplePrefix="10-2-10-a-i-sample-"/>
                </li>
                <li id="sec_10_2_10_a_ii">
                  <p>{chapterDb["10-2-10-a-ii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={1} samplePrefix="10-2-10-a-ii-sample-"/>
                </li>
                <li id="sec_10_2_10_a_iii">
                  <p>{chapterDb["10-2-10-a-iii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={1} samplePrefix="10-2-10-a-iii-sample-"/>
                </li>
              </ol>
            </li>
            <li id="sec_10_2_10_b">
              <p>{chapterDb["10-2-10-b-p"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_10_2_10_b_i">
                  <p>{chapterDb["10-2-10-b-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={1} samplePrefix="10-2-10-b-i-sample-"/>
                </li>
                <li id="sec_10_2_10_b_ii">
                  <p>{chapterDb["10-2-10-b-ii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={1} samplePrefix="10-2-10-b-ii-sample-"/>
                </li>
              </ol>
            </li>
            <li id="sec_10_2_10_c">
              <p>{chapterDb["10-2-10-c-p"]}</p>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.2.11" title={chapterDb["10-2-11-title"]}>
          <p>{chapterDb["10-2-11-p1"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-11-sample-"/>
          <p>{chapterDb["10-2-11-p2"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-11-sample-" startAt={3}/>
        </HX>
        <HX level={4} navText="10.2.12" title={chapterDb["10-2-12-title"]}>
          <p>{chapterDb["10-2-12-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-2-12-sample-"/>
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["10-2-12-note-p"]}
          </aside>
        </HX>
        <HX level={4} navText="10.2.13" title={chapterDb["10-2-13-title"]}>
          <p>{chapterDb["10-2-13-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-2-13-sample-"/>
        </HX>
      </HX>
      <hr/>
      <HX level={3} navText="10.3" title={chapterDb["10-3-title"]}>
        <p>{chapterDb["10-3-p"]}</p>
        <HX level={4} navText="10.3.1" title={chapterDb["10-3-1-title"]}>
          <p>{chapterDb["10-3-1-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_3_1_a">
              <p>{chapterDb["10-3-1-a-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-3-1-a-sample-"/>
              <p>{chapterDb["10-3-1-a-p2"]}</p>
            </li>
            <li id="sec_10_3_1_b">
              <p>{chapterDb["10-3-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-3-1-b-sample-"/>
            </li>
            <li id="sec_10_3_1_c">
              <p>{chapterDb["10-3-1-c-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-3-1-c-sample-"/>
              <p>{chapterDb["10-3-1-c-p2"]}</p>
            </li>
            <li id="sec_10_3_1_d">
              <p>{chapterDb["10-3-1-d-p"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_10_3_1_d_i">
                  <p>{chapterDb["10-3-1-d-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-3-1-d-i-sample-"/>
                </li>
                <li id="sec_10_3_1_d_ii">
                  <p>{chapterDb["10-3-1-d-ii-p1"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-3-1-d-ii-sample-"/>
                  <p>{chapterDb["10-3-1-d-ii-p2"]}</p>
                </li>
                <li id="sec_10_3_1_d_iii">
                  <p>{chapterDb["10-3-1-d-iii-p"]}</p>
                </li>
              </ol>
            </li>
            <li id="sec_10_3_1_e">
              <p>{chapterDb["10-3-1-e-p"]}</p>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.3.2" title={chapterDb["10-3-2-title"]}>
          <p>{chapterDb["10-3-2-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_3_2_a">
              <p>{chapterDb["10-3-2-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-3-2-a-sample-"/>
            </li>
            <li id="sec_10_3_2_b">
              <p>{chapterDb["10-3-2-b-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-3-2-b-sample-"/>
              <p>{chapterDb["10-3-2-b-p2"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_10_3_2_b_i">
                  <p>{chapterDb["10-3-2-b-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-3-2-b-i-sample-"/>
                </li>
                <li id="sec_10_3_2_b_ii">
                  <p>{chapterDb["10-3-2-b-ii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-3-2-b-ii-sample-"/>
                </li>
                <li id="sec_10_3_2_b_iii">
                  <p>{chapterDb["10-3-2-b-iii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-3-2-b-iii-sample-"/>
                </li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.3.3" title={chapterDb["10-3-3-title"]}>
          <p>{chapterDb["10-3-3-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="10-3-3-sample-"/>
        </HX>
        <HX level={4} navText="10.3.4" title={chapterDb["10-3-4-title"]}>
          <p>{chapterDb["10-3-4-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-3-4-sample-"/>
        </HX>
        <HX level={4} navText="10.3.5" title={chapterDb["10-3-5-title"]}>
          <p>{chapterDb["10-3-5-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-3-5-sample-"/>
        </HX>
        <HX level={4} navText="10.3.6" title={chapterDb["10-3-6-title"]}>
          <p>{chapterDb["10-3-6-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-3-6-sample-"/>
        </HX>
      </HX>
      <hr/>
      <HX level={3} navText="10.4" title={chapterDb["10-4-title"]}>
        <HX level={4} navText="10.4.1" title={chapterDb["10-4-1-title"]}>
          <p>{chapterDb["10-4-1-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_4_1_a">
              <p>{chapterDb["10-4-1-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-4-1-a-sample-"/>
            </li>
            <li id="sec_10_4_1_b">
              <p>{chapterDb["10-4-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="10-4-1-b-sample-"/>
            </li>
            <li id="sec_10_4_1_c">
              <p>{chapterDb["10-4-1-c-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-4-1-c-sample-"/>
              <p>{chapterDb["10-4-1-c-p2"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_10_4_1_c_i">
                  <p>{chapterDb["10-4-1-c-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-4-1-c-i-sample-"/>
                </li>
                <li id="sec_10_4_1_c_ii">
                  <p>{chapterDb["10-4-1-c-ii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-4-1-c-ii-sample-"/>
                </li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.4.2" title={chapterDb["10-4-2-title"]}>
          <p>{chapterDb["10-4-2-p1"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={9} samplePrefix="10-4-2-sample-"/>
          <p>{chapterDb["10-4-2-p2"]}</p>
          <ol className="list-[lower-alpha]">
            <li>{chapterDb["10-4-2-a-p"]}
            </li>
            <li>{chapterDb["10-4-2-b-p"]}
            </li>
          </ol>
        </HX>
      </HX>
      <hr/>
      <HX level={3} navText="10.5" title={chapterDb["10-5-title"]}>
        <HX level={4} navText="10.5.1" title={chapterDb["10-5-1-title"]}>
          <p>{chapterDb["10-5-1-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-5-1-sample-"/>
        </HX>
        <HX level={4} navText="10.5.2" title={chapterDb["10-5-2-title"]}>
          <p>{chapterDb["10-5-2-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-5-2-sample-"/>
        </HX>
      </HX>
      <hr/>
    </HX>
    <hr/>
    <HX level={2} navText="10.gp6-8" title={chapterDb["h2-gp-6-8-title"]}>
      <p>{chapterDb["h2-gp-6-8-p"]}</p>
      <HX level={3} navText="10.6" title={chapterDb["10-6-title"]}>
        <p>{chapterDb["10-6-p"]}</p>
        <HX level={4} navText="10.6.1" title={chapterDb["10-6-1-title"]}>
          <p>{chapterDb["10-6-1-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_6_1_a">
              <p>{chapterDb["10-6-1-a-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-6-1-a-sample-"/>
              <p>{chapterDb["10-6-1-a-p2"]}</p>
            </li>
            <li id="sec_10_6_1_b">
              <p>{chapterDb["10-6-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-6-1-b-sample-"/>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.6.2" title={chapterDb["10-6-2-title"]}>
          <p>{chapterDb["10-6-2-p1"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-6-2-sample-"/>
          <p>{chapterDb["10-6-2-p2"]}</p>
        </HX>
        <HX level={4} navText="10.6.3" title={chapterDb["10-6-3-title"]}>
          <p>{chapterDb["10-6-3-p1"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-6-3-sample-"/>
          <p>{chapterDb["10-6-3-p2"]}</p>
          <aside><b>{commonDb["Nóta"]}</b>
            <ol className="list-[lower-alpha]">
              <li id="sec_10_6_3_a">{chapterDb["10-6-3-a-p"]}
              </li>
              <li id="sec_10_6_3_b">{chapterDb["10-6-3-b-p"]}
              </li>
            </ol>
          </aside>
        </HX>
        <HX level={4} navText="10.6.4" title={chapterDb["10-6-4-title"]}>
          <p>{chapterDb["10-6-4-p1"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_6_4_a">
              <p>{chapterDb["10-6-4-a-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-6-4-a-sample-"/>
              <p>{chapterDb["10-6-4-a-p2"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_10_6_4_a_i">
                  <p>{chapterDb["10-6-4-a-i-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-6-4-a-i-sample-"/>
                </li>
                <li id="sec_10_6_4_a_ii">
                  <p>{chapterDb["10-6-4-a-ii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-6-4-a-ii-sample-"/>
                </li>
                <li id="sec_10_6_4_a_iii">
                  <p>{chapterDb["10-6-4-a-iii-p"]}</p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-6-4-a-iii-sample-"/>
                </li>
                <li id="sec_10_6_4_a_iv">
                  <p>{chapterDb["10-6-4-a-iv-p"]}</p>
                </li>
              </ol>
            </li>
            <li id="sec_10_6_4_b">
              <p>{chapterDb["10-6-4-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-6-4-b-sample-"/>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.6.5" title={chapterDb["10-6-5-title"]}>
          <p>{chapterDb["10-6-5-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={1} samplePrefix="10-6-5-sample-"/>
        </HX>
      </HX>
      <hr/>
      <HX level={3} navText="10.7" title={chapterDb["10-7-title"]}>
        <p>{chapterDb["10-7-p1"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-7-sample-"/>
        <p>{chapterDb["10-7-p2"]}</p>
        <ol className="list-[lower-alpha]">
          <li id="sec_10_7_a">
            <p>{chapterDb["10-7-a-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-7-a-sample-"/>
          </li>
          <li id="sec_10_7_b">
            <p>{chapterDb["10-7-b-p"]}</p>
          </li>
        </ol>
      </HX>
      <hr/>
      <HX level={3} navText="10.8" title={chapterDb["10-8-title"]}>
        <p>{chapterDb["10-8-p"]}</p>
        <HX level={4} navText="10.8.1" title={chapterDb["10-8-1-title"]}>
          <p>{chapterDb["10-8-1-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_8_1_a">
              <p>{chapterDb["10-8-1-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-8-1-a-sample-"/>
            </li>
            <li id="sec_10_8_1_b">
              <p>{chapterDb["10-8-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-8-1-b-sample-"/>
            </li>
            <li id="sec_10_8_1_c">
              <p>{chapterDb["10-8-1-c-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-8-1-c-sample-"/>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.8.2" title={chapterDb["10-8-2-title"]}>
          <p>{chapterDb["10-8-2-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_8_2_a">
              <p>{chapterDb["10-8-2-a-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={7} samplePrefix="10-8-2-a-sample-"/>
              <p>{chapterDb["10-8-2-a-p2"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-8-2-a-sample-" startAt={8}/>
            </li>
            <li id="sec_10_8_2_b">
              <p>{chapterDb["10-8-2-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-8-2-b-sample-"/>
            </li>
          </ol>
        </HX>
      </HX>
      <hr/>
    </HX>
    <hr/>
    <HX level={2} navText="10.gp9-10" title={chapterDb["h2-gp-9-10-title"]}>
      <p>{chapterDb["h2-gp-9-10-p"]}</p>
      <HX level={3} navText="10.9" title={chapterDb["10-9-title"]}>
        <HX level={4} navText="10.9.1">
          <p>{chapterDb["10-9-1-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_9_1_a">
              <p>{chapterDb["10-9-1-a-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-9-1-a-sample-"/>
              <p>{chapterDb["10-9-1-a-p2"]}</p>
            </li>
            <li id="sec_10_9_1_b">
              <p>{chapterDb["10-9-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-9-1-b-sample-"/>
            </li>
          </ol>
        </HX>
      </HX>
      <hr/>
      <HX level={3} navText="10.10" title={chapterDb["10-10-title"]}>
        <HX level={4} navText="10.10.1">
          <p>{chapterDb["10-10-1-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-10-1-sample-"/>
        </HX>
        <HX level={4} navText="10.10.2">
          <p>{chapterDb["10-10-2-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_10_2_a">
              <p>{chapterDb["10-10-2-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-10-2-a-sample-"/>
            </li>
            <li id="sec_10_10_2_b">
              <p>{chapterDb["10-10-2-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-10-2-b-sample-"/>
            </li>
          </ol>
        </HX>
      </HX>
      <hr/>
    </HX>
    <hr/>
    <HX level={2} navText="10.gp11-14" title={chapterDb["h2-gp-11-14-title"]}>
      <p>{chapterDb["h2-gp-11-14-p"]}</p>
      <HX level={3} navText="10.11" title={chapterDb["10-11-title"]}>
        <HX level={4} navText="10.11.1" title={chapterDb["10-11-1-title"]}>
          <p>{chapterDb["10-11-1-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_11_1_a">
              <p>{chapterDb["10-11-1-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-1-a-sample-"/>
            </li>
            <li id="sec_10_11_1_b">
              <p>{chapterDb["10-11-1-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-1-b-sample-"/>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.11.2" title={chapterDb["10-11-2-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_11_2_a">
              <p>{chapterDb["10-11-2-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-2-a-sample-"/>
            </li>
            <li id="sec_10_11_2_b">
              <p>{chapterDb["10-11-2-b-p1"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-2-b-sample-"/>
              <p>{chapterDb["10-11-2-b-p2"]}</p>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.11.3" title={chapterDb["10-11-3-title"]}>
          <p>{chapterDb["10-11-3-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-3-sample-"/>
        </HX>
        <HX level={4} navText="10.11.4" title={chapterDb["10-11-4-title"]}>
          <p>{chapterDb["10-11-4-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-4-sample-"/>
        </HX>
        <HX level={4} navText="10.11.5" title={chapterDb["10-11-5-title"]}>
          <p>{chapterDb["10-11-5-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-5-sample-"/>
        </HX>
        <HX level={4} navText="10.11.6" title={chapterDb["10-11-6-title"]}>
          <p>{chapterDb["10-11-6-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-6-sample-"/>
        </HX>
        <HX level={4} navText="10.11.7" title={chapterDb["10-11-7-title"]}>
          <p>{chapterDb["10-11-7-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-7-sample-"/>
        </HX>
        <HX level={4} navText="10.11.8" title={chapterDb["10-11-8-title"]}>
          <p>{chapterDb["10-11-8-p1"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_11_8_a">
              <p>{chapterDb["10-11-8-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-8-a-sample-"/>
            </li>
            <li id="sec_10_11_8_b">
              <p>{chapterDb["10-11-8-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-8-b-sample-"/>
            </li>
            <li id="sec_10_11_8_c">
              <p>{chapterDb["10-11-8-c-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-11-8-c-sample-"/>
            </li>
          </ol>
          <p>{chapterDb["10-11-8-p2"]}</p>
        </HX>
      </HX>
      <hr/>
      <HX level={3} navText="10.12" title={chapterDb["10-12-title"]}>
        <HX level={4} navText="10.12.1" title={chapterDb["10-12-1-title"]}>
          <p>{chapterDb["10-12-1-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-12-1-sample-"/>
        </HX>
        <HX level={4} navText="10.12.2" title={chapterDb["10-12-2-title"]}>
          <p>{chapterDb["10-12-2-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_10_12_2_a">
              <p>{chapterDb["10-12-2-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-12-2-a-sample-"/>
            </li>
            <li id="sec_10_12_2_b">
              <p>{chapterDb["10-12-2-b-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-12-2-b-sample-"/>
            </li>
          </ol>
        </HX>
        <HX level={4} navText="10.12.3" title={chapterDb["10-12-3-title"]}>
          <p>{chapterDb["10-12-3-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-12-3-sample-"/>
        </HX>
      </HX>
      <hr/>
      <HX level={3} navText="10.13" title={chapterDb["10-13-title"]}>
        <HX level={4} navText="10.13.1" title={chapterDb["10-13-1-title"]}>
          <p>{chapterDb["10-13-1-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-13-1-sample-"/>
        </HX>
        <HX level={4} navText="10.13.2" title={chapterDb["10-13-2-title"]}>
          <p>{chapterDb["10-13-2-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-13-2-sample-"/>
        </HX>
        <HX level={4} navText="10.13.3" title={chapterDb["10-13-3-title"]}>
          <p>{chapterDb["10-13-3-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="10-13-3-sample-"/>
        </HX>
      </HX>
      <hr/>
      <HX level={3} navText="10.14" title={chapterDb["10-14-title"]}>
        <HX level={4} navText="10.14.1" title={chapterDb["10-14-1-title"]}>
          <p>{chapterDb["10-14-1-p"]}</p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-14-1-sample-"/>
        </HX>
      </HX>
      <hr/>
    </HX>
    <hr/>
    <HX level={2} navText="10.gp15" title={chapterDb["h2-gp-15-title"]}>
      <HX level={3} navText="10.15" title={chapterDb["10-15-title"]}>
        <p>{chapterDb["10-15-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="10-15-sample-"/>
      </HX>
      <hr/>
    </HX>
    <hr/>
    <HX level={2} navText="10.16" title={chapterDb["10-16-title"]}>
      <p>{chapterDb["10-16-p1"]}</p>
      <Table10A docLang={props.docLang}/>
      <p>{chapterDb["10-16-p2"]}</p>
      <Table10B docLang={props.docLang}/>
      <p>{chapterDb["10-16-p3"]}</p>
      <Table10C docLang={props.docLang}/>
      <p>{chapterDb["10-16-p4"]}</p>
      <Table10D docLang={props.docLang}/>
      <p>{chapterDb["10-16-p5"]}</p>
      <Table10E docLang={props.docLang}/>
      <p>{chapterDb["10-16-p6"]}</p>
      <Table10F docLang={props.docLang}/>
    </HX>
    <hr/>
  </HX>
  </ChapterTemplate>;
};
