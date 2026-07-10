import { ChapterTemplate, HX, SampleBox, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { ArrowSampleBox, Table11A, Table11B, Table11C, Table11D, Table11E, Table11F, Table11G } from "./tables";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter11 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);
  
  return <ChapterTemplate
    title={chapterDb["11-title"]}
    chapterNumber={11}
    docLang={props.docLang}>
      <HX level={1} navText="11" title={chapterDb["11-title"]}>
    <HX level={2} navText="11.1" title={chapterDb["11-1-title"]}>
      <HX level={3} navText="11.1.1">
        <p>{chapterDb["11-1-1-p"]}</p>
      </HX>
      <HX level={3} navText="11.1.2">
        <p>{chapterDb["11-1-2-p"]}</p>
      </HX>
      <HX level={3} navText="11.1.3">
        <p>{chapterDb["11-1-3-p"]}</p>
      </HX>
      <HX level={3} navText="11.1.4">
        <p>{chapterDb["11-1-4-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="11-1-4-sample-"/>
      </HX>
      <HX level={3} navText="11.1.5">
        <p>{chapterDb["11-1-5-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="11-1-5-sample-"/>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="11.2" title={chapterDb["11-2-title"]}>
      <HX level={3} navText="11.2.1">
        <p>{chapterDb["11-2-1-p"]}</p>
        <ol className="list-[lower-alpha]">
          <li id="sec_11_2_1_a">
            <p>{chapterDb["11-2-1-a-p"]}</p>
            <ArrowSampleBox samplePrefix="11-2-1-a-sample-" sampleCount={4} docLang={props.docLang}/>
          </li>
          <li id="sec_11_2_1_b">
            <p>{chapterDb["11-2-1-b-p"]}</p>
            <ArrowSampleBox samplePrefix="11-2-1-b-sample-" sampleCount={4} docLang={props.docLang}/>
          </li>
          <aside><b>{commonDb["Nóta"]}</b> &nbsp;{chapterDb["11-2-1-b-note-p"]}
          </aside>
          <li id="sec_11_2_1_c">
            <p>{chapterDb["11-2-1-c-p"]}</p>
            <ArrowSampleBox samplePrefix="11-2-1-c-sample-" sampleCount={2} docLang={props.docLang}/>
            <aside><b>{commonDb["Nóta"]}</b> &nbsp;{chapterDb["11-2-1-c-note-p"]}
            </aside>
          </li>
          <li id="sec_11_2_1_d">
            <p>{chapterDb["11-2-1-d-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="11-2-1-d-sample-"/>
          </li>
          <li id="sec_11_2_1_e">
            <p>{chapterDb["11-2-1-e-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="11-2-1-e-sample-"/>
            <aside><b>{commonDb["Nóta"]}</b> &nbsp;{chapterDb["11-2-1-e-note-p"]}
            </aside>
          </li>
          <li id="sec_11_2_1_f">
            <p>{chapterDb["11-2-1-f-p"]}</p>
            <ArrowSampleBox samplePrefix="11-2-1-f-sample-" sampleCount={4} docLang={props.docLang}/>
          </li>
        </ol>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="11.3" title={chapterDb["11-3-title"]}>
      <HX level={3} navText="11.3.1">
        <p>{chapterDb["11-3-1-p"]}</p>
        <ol className="list-[lower-alpha]">
          <li id="sec_11_3_1_a">
            <p>{chapterDb["11-3-1-a-p"]}</p>
            <ArrowSampleBox samplePrefix="11-3-1-a-sample-" sampleCount={3} docLang={props.docLang}/>
          </li>
          <li id="sec_11_3_1_b">
            <p>{chapterDb["11-3-1-b-p"]}</p>
            <ArrowSampleBox samplePrefix="11-3-1-b-sample-" sampleCount={2} docLang={props.docLang}/>
            <aside><b>{commonDb["Nóta"]}</b> &nbsp;{chapterDb["11-3-1-b-note"]}
            </aside>
          </li>
          <li id="sec_11_3_1_c">
            <p>{chapterDb["11-3-1-c-p1"]}</p>
            <ArrowSampleBox samplePrefix="11-3-1-c-sample-" sampleCount={5} docLang={props.docLang}/>
            <p>{chapterDb["11-3-1-c-p2"]}</p>
            <ol className="list-[lower-roman]">
              <li id="sec_11_3_1_c_i">
                <p>{chapterDb["11-3-1-c-i-p"]}</p>
                <ArrowSampleBox samplePrefix="11-3-1-c-i-sample-" sampleCount={3} docLang={props.docLang}/>
              </li>
              <li id="sec_11_3_1_c_ii">
                <p>{chapterDb["11-3-1-c-ii-p"]}</p>
                <ArrowSampleBox samplePrefix="11-3-1-c-ii-sample-" sampleCount={2} docLang={props.docLang}/>
              </li>
            </ol>
          </li>
          <li id="sec_11_3_1_d">
            <p>{chapterDb["11-3-1-d-p"]}</p>
            <ArrowSampleBox samplePrefix="11-3-1-d-sample-" sampleCount={3} docLang={props.docLang}/>
          </li>
          <li id="sec_11_3_1_e">
            <p>{chapterDb["11-3-1-e-p"]}</p>
            <ArrowSampleBox samplePrefix="11-3-1-e-sample-" sampleCount={4} docLang={props.docLang}/>
            <aside><b>{commonDb["Nóta"]}</b> &nbsp;{chapterDb["11-3-1-e-note-p"]}
            </aside>
          </li>
          <li id="sec_11_3_1_f">
            <p>{chapterDb["11-3-1-f-p"]}</p>
            <ArrowSampleBox samplePrefix="11-3-1-f-sample-" sampleCount={3} docLang={props.docLang}/>
          </li>
          <li id="sec_11_3_1_g">
            <p>{chapterDb["11-3-1-g-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="11-3-1-g-sample-"/>
            <aside><b>{commonDb["Nóta"]}</b> &nbsp;{chapterDb["11-3-1-g-note-p"]}
            </aside>
          </li>
          <li id="sec_11_3_1_h">
            <p>{chapterDb["11-3-1-h-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="11-3-1-h-sample-"/>
            <aside><b>{commonDb["Nóta"]}</b> &nbsp;{chapterDb["11-3-1-h-note-p"]}
            </aside>
          </li>
          <li id="sec_11_3_1_i">
            <p>{chapterDb["11-3-1-i-p1"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="11-3-1-i-sample-"/>
            <p>{chapterDb["11-3-1-i-p2"]}</p>
          </li>
        </ol>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="11.4" title={chapterDb["11-4-title"]}>
      <HX level={3} navText="11.4.1">
        <p>{chapterDb["11-4-1-p"]}</p>
      </HX>
      <HX level={3} navText="11.4.2">
        <p>{chapterDb["11-4-2-p"]}</p>
        <aside><b>{commonDb["Nóta"]}</b> {chapterDb["11-4-2-note-p"]}
        </aside>
      </HX>
      <HX level={3} navText="11.4.3">
        <p>{chapterDb["11-4-3-p"]}</p>
        <Table11A docLang={props.docLang}/>
        <aside><b>{commonDb["Nóta"]}</b> {chapterDb["11-4-3-note-p"]}
        </aside>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="11.5" title={chapterDb["11-5-title"]}>
      <HX level={3} navText="11.5.1">
        <p>{chapterDb["11-5-1-p"]}</p>
      </HX>
      <HX level={3} navText="11.5.2">
        <p>{chapterDb["11-5-2-p"]}</p>
        <Table11B docLang={props.docLang}/>
        <aside><b>{commonDb["Nóta"]}</b> {chapterDb["11-5-2-note-p"]}
        </aside>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="11.6" title={chapterDb["11-6-title"]}>
      <HX level={3} navText="11.6.1" title={chapterDb["11-6-1-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_11_6_1_a">
            <p><b>{chapterDb["11-6-1-a-title"]}</b></p>
            <ol className="list-[lower-roman]">
              <li id="sec_11_6_1_a_i">
                <p>{chapterDb["11-6-1-a-i-p"]}</p>
                <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={10} samplePrefix="11-6-1-a-i-sample-"/>
              </li>
              <li id="sec_11_6_1_a_ii">
                <p>{chapterDb["11-6-1-a-ii-p"]}</p>
                <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="11-6-1-a-ii-sample-"/>
              </li>
            </ol>
          </li>
          <li id="sec_11_6_1_b">
            <p><b>{chapterDb["11-6-1-b-title"]}</b></p>
            <ol className="list-[lower-roman]">
              <li id="sec_11_6_1_b_i">
                <p>{chapterDb["11-6-1-b-i-p"]}</p>
                <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={9} samplePrefix="11-6-1-b-i-sample-"/>
              </li>
              <li id="sec_11_6_1_b_ii">
                <p>{chapterDb["11-6-1-b-ii-p"]}</p>
                <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={8} samplePrefix="11-6-1-b-ii-sample-"/>
              </li>
              <li id="sec_11_6_1_b_iii">
                <p>{chapterDb["11-6-1-b-iii-p"]}</p>
                <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="11-6-1-b-iii-sample-"/>
              </li>
            </ol>
          </li>
          <li id="sec_11_6_1_c">
            <p><b>{chapterDb["11-6-1-c-title"]}</b></p>
            <p>{chapterDb["11-6-1-c-p"]}</p>
            <Table11C docLang={props.docLang}/>
          </li>
        </ol>
      </HX>
      <HX level={3} navText="11.6.2" title={chapterDb["11-6-2-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_11_6_2_a">
            <p><b>{chapterDb["11-6-2-a-title"]}</b></p>
            <ol className="list-[lower-roman]">
              <li id="sec_11_6_2_a_i">
                <p>{chapterDb["11-6-2-a-i-p"]}</p>
                <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={7} samplePrefix="11-6-2-a-i-sample-"/>
              </li>
              <li id="sec_11_6_2_a_ii">
                <p>{chapterDb["11-6-2-a-ii-p"]}</p>
                <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={10} samplePrefix="11-6-2-a-ii-sample-"/>
              </li>
              <li id="sec_11_6_2_a_iii">
                <p>{chapterDb["11-6-2-a-iii-p"]}</p>
                <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="11-6-2-a-iii-sample-"/>
              </li>
            </ol>
          </li>
        </ol>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="11.7" title={chapterDb["11-7-title"]}>
      <HX level={3} navText="11.7.1" title={chapterDb["11-7-1-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_11_7_1_a">
            <p>{chapterDb["11-7-1-a-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="11-7-1-a-sample-"/>
          </li>
          <li id="sec_11_7_1_b">
            <p>{chapterDb["11-7-1-b-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="11-7-1-b-sample-"/>
          </li>
        </ol>
        <p>{chapterDb["11-7-1-p"]}</p>
      </HX>
      <HX level={3} navText="11.7.2" title={chapterDb["11-7-2-title"]}>
        <p>{chapterDb["11-7-2-p"]}</p>
        <ol className="list-[lower-alpha]">
          <li id="sec_11_7_2_a">
            <p>{chapterDb["11-7-2-a-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="11-7-2-a-sample-"/>
          </li>
          <li id="sec_11_7_2_b">
            <p>{chapterDb["11-7-2-b-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="11-7-2-b-sample-"/>
          </li>
        </ol>
      </HX>
      <HX level={3} navText="11.7.3" title={chapterDb["11-7-3-title"]}>
        <p>{chapterDb["11-7-3-p"]}</p>
        <ol className="list-[lower-alpha]">
          <li id="sec_11_7_3_a">
            <p>{chapterDb["11-7-3-a-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="11-7-3-a-sample-"/>
          </li>
          <li id="sec_11_7_3_b">
            <p>{chapterDb["11-7-3-b-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="11-7-3-b-sample-"/>
          </li>
        </ol>
      </HX>
      <HX level={3} navText="11.7.4" title={chapterDb["11-7-4-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_11_7_4_a">
            <p>{chapterDb["11-7-4-a-p"]}</p>
          </li>
          <li id="sec_11_7_4_b">
            <p>{chapterDb["11-7-4-b-p"]}</p>
          </li>
        </ol>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="11.8" title={chapterDb["11-8-title"]}>
      <HX level={3} navText="11.8.1">
        <p>{chapterDb["11-8-1-p"]}</p>
        <Table11D docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="11.8.2">
        <p>{chapterDb["11-8-2-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="11-8-2-sample-"/>
      </HX>
      <HX level={3} navText="11.8.3">
        <p>{chapterDb["11-8-3-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={5} samplePrefix="11-8-3-sample-"/>
      </HX>
      <HX level={3} navText="11.8.4">
        <p>{chapterDb["11-8-4-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="11-8-4-sample-"/>
      </HX>
      <HX level={3} navText="11.8.5">
        <p>{chapterDb["11-8-5-p"]}</p>
        <Table11E docLang={props.docLang}/>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="11.9" title={chapterDb["11-9-title"]}>
      <Table11F docLang={props.docLang}/>
      <p>* {chapterDb["Table-11F-footnote"]}</p>
      <Table11G docLang={props.docLang}/>
    </HX>
    <hr/>
  </HX>
  </ChapterTemplate>;
};
