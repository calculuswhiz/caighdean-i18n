import { ChapterTemplate, HX, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { Table9A, Table9B, Table9C, Table9D, Table9E, Table9F, Table9G, Table9H, Table9I, Table9J, Table9K, Table9L, Table9M, Table9N, Table9O, Table9P, Table9Q, Table9R, Table9S, Table9T, Table9U, Table9V, Table9W, Table9X, Table9Y, Table9Z, Table9AA, Table9BB, Table9CC, Table9DD, Table9EE, Table9FF } from "./tables";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter9 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);
  
  return <ChapterTemplate
    title={chapterDb["9-title"]}
    chapterNumber={9}
    docLang={props.docLang}>
      <HX level={1} navText="9" title={chapterDb["9-title"]}>
    <HX level={2} navText="9.1" title={chapterDb["9-1-title"]}>
      <HX level={3} navText="9.1.1">
        <p>{chapterDb["9-1-1-p"]}
        </p>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_1_1_a">
            <p><b>{chapterDb["9-1-1-a-title"]}</b></p>
            <p>{chapterDb["9-1-1-a-p"]}
            </p>
          </li>
          <li id="sec_9_1_1_b">
            <p><b>{chapterDb["9-1-1-b-title"]}</b></p>
            <p>{chapterDb["9-1-1-b-p"]}
            </p>
          </li>
          <li id="sec_9_1_1_c">
            <p><b>{chapterDb["9-1-1-c-title"]}</b></p>
            <p>{chapterDb["9-1-1-c-p"]}
            </p>
          </li>
          <li id="sec_9_1_1_d">
            <p><b>{chapterDb["9-1-1-d-title"]}</b></p>
            <p>{chapterDb["9-1-1-d-p"]}
            </p>
          </li>
          <li id="sec_9_1_1_e">
            <p><b>{chapterDb["9-1-1-e-title"]}</b></p>
            <p>{chapterDb["9-1-1-e-p"]}
            </p>
          </li>
          <li id="sec_9_1_1_f">
            <p><b>{chapterDb["9-1-1-f-title"]}</b></p>
            <p>{chapterDb["9-1-1-f-p"]}
            </p>
          </li>
        </ol>
      </HX>
      <HX level={3} navText="9.1.2">
        <p>{chapterDb["9-1-2-p"]}
        </p>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="9.2" title={chapterDb["9-2-title"]}>
      <p>{chapterDb["9-2-p"]}
      </p>
      <HX level={3} navText="9.2.1" title={chapterDb["9-2-1-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_2_1_a">
            <p>{chapterDb["9-2-1-a-p"]}
            </p>
          </li>
          <li id="sec_9_2_1_b">
            <p>{chapterDb["9-2-1-b-p"]}
            </p>
          </li>
        </ol>
        <p>{chapterDb["9-2-1-p1"]}
        </p>
        <Table9A docLang={props.docLang}/>
        <p>{chapterDb["9-2-1-p2"]}
        </p>
        <p>{chapterDb["9-2-1-p3"]}
        </p>
        <Table9B docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.2.2" title={chapterDb["9-2-2-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_2_2_a">{chapterDb["9-2-2-a-p"]}
          </li>
          <li id="sec_9_2_2_b">{chapterDb["9-2-2-b-p"]}
          </li>
        </ol>
        <Table9C docLang={props.docLang}/>
        <Table9D docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.2.3" title={chapterDb["9-2-3-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_2_3_a">{chapterDb["9-2-3-a-p"]}
          </li>
          <li id="sec_9_2_3_b">{chapterDb["9-2-3-b-p"]}
          </li>
        </ol>
        <p>{chapterDb["9-2-3-p1"]}
        </p>
        <p>{chapterDb["9-2-3-p2"]}
        </p>
        <Table9E docLang={props.docLang}/>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="9.3" title={chapterDb["9-3-title"]}>
      <HX level={3} navText="9.3.1" title={chapterDb["9-3-1-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_3_1_a">{chapterDb["9-3-1-a-p"]}
          </li>
          <li id="sec_9_3_1_b">{chapterDb["9-3-1-b-p"]}
          </li>
          <li id="sec_9_3_1_c">{chapterDb["9-3-1-c-p"]}
          </li>
          <li id="sec_9_3_1_d">{chapterDb["9-3-1-d-p"]}
          </li>
          <li id="sec_9_3_1_e">{chapterDb["9-3-1-e-p"]}
          </li>
          <li id="sec_9_3_1_f">
            <p>{chapterDb["9-3-1-f-p"]}
            </p>
            <p>{chapterDb["9-3-1-p"]}
            </p>
          </li>
          <li id="sec_9_3_1_g">{chapterDb["9-3-1-g-p"]}
          </li>
          <li id="sec_9_3_1_h">{chapterDb["9-3-1-h-p"]}
          </li>
          <li id="sec_9_3_1_i">{chapterDb["9-3-1-i-p"]}
          </li>
        </ol>
        <Table9F docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.3.2" title={chapterDb["9-3-2-title"]}>
        <p>{chapterDb["9-3-2-p"]}
        </p>
        <Table9G docLang={props.docLang}/>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_3_2_a">{chapterDb["9-3-2-a-p"]}
          </li>
          <li id="sec_9_3_2_b">{chapterDb["9-3-2-b-p"]}
          </li>
          <li id="sec_9_3_2_c">{chapterDb["9-3-2-c-p"]}
          </li>
          <li id="sec_9_3_2_d">{chapterDb["9-3-2-d-p"]}
          </li>
          <li id="sec_9_3_2_e">{chapterDb["9-3-2-e-p"]}
          </li>
          <li id="sec_9_3_2_f">{chapterDb["9-3-2-f-p"]}
          </li>
        </ol>
        <Table9H docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.3.3" title={chapterDb["9-3-3-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_3_3_a">{chapterDb["9-3-3-a-p"]}
          </li>
          <li id="sec_9_3_3_b">{chapterDb["9-3-3-b-p"]}
          </li>
          <li id="sec_9_3_3_c">{chapterDb["9-3-3-c-p"]}
          </li>
        </ol>
        <Table9I docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.3.4" title={chapterDb["9-3-4-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_3_4_a">{chapterDb["9-3-4-a-p"]}
          </li>
          <li id="sec_9_3_4_b">{chapterDb["9-3-4-b-p"]}
          </li>
        </ol>
        <Table9J docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.3.5" title={chapterDb["9-3-5-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_3_5_a"><b>{chapterDb["9-3-5-a-p"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_3_5_a_i">{chapterDb["9-3-5-a-i-p"]}
              </li>
              <li id="sec_9_3_5_a_ii">{chapterDb["9-3-5-a-ii-p"]}
              </li>
              <li id="sec_9_3_5_a_iii">{chapterDb["9-3-5-a-iii-p"]}
              </li>
            </ol>
          </li>
          <li id="sec_9_3_5_b"><b>{chapterDb["9-3-5-b-p"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_3_5_b_i">{chapterDb["9-3-5-b-i-p"]}
              </li>
              <li id="sec_9_3_5_b_ii">{chapterDb["9-3-5-b-ii-p"]}
              </li>
            </ol>
          </li>
          <li id="sec_9_3_5_c">{chapterDb["9-3-5-c-p"]}
          </li>
        </ol>
        <Table9K docLang={props.docLang}/>
        <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["9-3-5-note"]}
        </aside>
      </HX>
      <HX level={3} navText="9.3.6" title={chapterDb["9-3-6-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_3_6_a">{chapterDb["9-3-6-a-p"]}
          </li>
          <li id="sec_9_3_6_b">{chapterDb["9-3-6-b-p"]}
          </li>
        </ol>
      </HX>
      <HX level={3} navText="9.3.7" title={chapterDb["9-3-7-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_3_7_a">
            <p><b>aon</b></p>
            <p>{chapterDb["9-3-7-a-p"]}
            </p>
            <ol className="list-[lower-roman]">
              <li id="sec_9_3_7_a_i">{chapterDb["9-3-7-a-i-p"]}
              </li>
              <li id="sec_9_3_7_a_ii">{chapterDb["9-3-7-a-ii-p"]}
              </li>
              <li id="sec_9_3_7_a_iii">{chapterDb["9-3-7-a-iii-p"]}
              </li>
            </ol>
          </li>
          <li id="sec_9_3_7_b">{chapterDb["9-3-7-b-p"]}
          </li>
          <li id="sec_9_3_7_c">{chapterDb["9-3-7-c-p"]}
          </li>
          <li id="sec_9_3_7_d">{chapterDb["9-3-7-d-p"]}
          </li>
        </ol>
        <Table9L docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.3.8" title={chapterDb["9-3-8-title"]}>
        <p>{chapterDb["9-3-8-p"]}
        </p>
      </HX>
      <HX level={3} navText="9.3.9" title={chapterDb["9-3-9-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_3_9_a">{chapterDb["9-3-9-a-p"]}
          </li>
          <li id="sec_9_3_9_b">{chapterDb["9-3-9-b-p"]}
          </li>
          <li id="sec_9_3_9_c">{chapterDb["9-3-9-c-p"]}
          </li>
          <li id="sec_9_3_9_d">{chapterDb["9-3-9-d-p"]}
          </li>
          <li id="sec_9_3_9_e">{chapterDb["9-3-9-e-p"]}
          </li>
        </ol>
        <Table9M docLang={props.docLang}/>
        <aside>
          <p><b>{commonDb["Nóta"]}:</b></p>
          <ul className="list-disc">
            <li>{chapterDb["9-3-9-note-p1"]}
            </li>
            <li>{chapterDb["9-3-9-note-p2"]}
            </li>
          </ul>
        </aside>
      </HX>
      <HX level={3} navText="9.3.10" title={chapterDb["9-3-10-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_3_10_a">{chapterDb["9-3-10-a-p"]}
          </li>
          <li id="sec_9_3_10_b">
            <p><b>{chapterDb["TheEstablishedSystem"]}</b></p>
            <ol className="list-[lower-roman]">
              <li id="sec_9_3_10_b_i">{chapterDb["9-3-10-b-i-p"]}
              </li>
              <li id="sec_9_3_10_b_ii">{chapterDb["9-3-10-b-ii-p"]}
              </li>
            </ol>
          </li>
          <li id="sec_9_3_10_c">
            <p><b>{chapterDb["TheSimplifiedSystem"]}</b></p>
            <ol className="list-[lower-roman]">
              <li id="sec_9_3_10_c_i">{chapterDb["9-3-10-c-i-p"]}
              </li>
              <li id="sec_9_3_10_c_ii">{chapterDb["9-3-10-c-ii-p"]}
              </li>
            </ol>
          </li>
          <li id="sec_9_3_10_d">{chapterDb["9-3-10-d-p"]}
          </li>
          <li id="sec_9_3_10_e">{chapterDb["9-3-10-e-p"]}
          </li>
        </ol>
        <Table9N docLang={props.docLang}/>
        <aside>
          <p><b>{commonDb["Nóta"]}:</b></p>
          <ul className="list-disc">
            <li>{chapterDb["9-3-10-note-p1"]}
            </li>
            <li>{chapterDb["9-3-10-note-p2"]}
            </li>
          </ul>
        </aside>
      </HX>
      <HX level={3} navText="9.3.11" title={chapterDb["9-3-11-title"]}>
        <p>{chapterDb["9-3-11-p1"]}
        </p>
        <p>{chapterDb["9-3-11-p2"]}
        </p>
        <Table9O docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.3.12" title={chapterDb["9-3-12-title"]}>
        <p>{chapterDb["9-3-12-p"]}
        </p>
        <Table9P docLang={props.docLang}/>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="9.4" title={chapterDb["9-4-title"]}>
      <p>{chapterDb["9-4-p"]}
      </p>
      <HX level={3} navText="9.4.1" title={chapterDb["9-4-1-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_4_1_a">{chapterDb["9-4-1-a-p"]}
          </li>
          <li id="sec_9_4_1_b">{chapterDb["9-4-1-b-p"]}
          </li>
        </ol>
        <Table9Q docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.4.2" title={chapterDb["9-4-2-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_4_2_a"><b>{chapterDb["9-4-2-a-title"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_4_2_a_i">{chapterDb["9-4-2-a-i-p"]}
              </li>
              <li id="sec_9_4_2_a_ii">{chapterDb["9-4-2-a-ii-p"]}
              </li>
            </ol>
          </li>
          <li id="sec_9_4_2_b"><b>{chapterDb["9-4-2-b-title"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_4_2_b_i">{chapterDb["9-4-2-b-i-p"]}
              </li>
              <li id="sec_9_4_2_b_ii">{chapterDb["9-4-2-b-ii-p"]}
              </li>
              <li id="sec_9_4_2_b_iii">{chapterDb["9-4-2-b-iii-p"]}
              </li>
            </ol>
            <Table9R docLang={props.docLang}/>
          </li>
          <li id="sec_9_4_2_c"><b>{chapterDb["9-4-2-c-title"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_4_2_c_i">{chapterDb["9-4-2-c-i-p"]}
              </li>
              <li id="sec_9_4_2_c_ii">{chapterDb["9-4-2-c-ii-p"]}
              </li>
              <li id="sec_9_4_2_c_iii">{chapterDb["9-4-2-c-iii-p"]}
              </li>
              <li id="sec_9_4_2_c_iv">{chapterDb["9-4-2-c-iv-p"]}
              </li>
            </ol>
          </li>
          <li id="sec_9_4_2_d"><b>{chapterDb["9-4-2-d-title"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_4_2_d_i">{chapterDb["9-4-2-d-i-p"]}
              </li>
              <li id="sec_9_4_2_d_ii">{chapterDb["9-4-2-d-ii-p"]}
              </li>
            </ol>
          </li>
          <p>* {chapterDb["OtherCasesFootnote"]}
          </p>
        </ol>
      </HX>
      <HX level={3} navText="9.4.3" title={chapterDb["9-4-3-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_4_3_a"><b>{chapterDb["9-4-3-a-title"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_4_3_a_i">{chapterDb["9-4-3-a-i-p"]}
              </li>
              <li id="sec_9_4_3_a_ii">{chapterDb["9-4-3-a-ii-p"]}
              </li>
              <li id="sec_9_4_3_a_iii">{chapterDb["9-4-3-a-iii-p"]}
              </li>
              <li id="sec_9_4_3_a_iv">{chapterDb["9-4-3-a-iv-p"]}
              </li>
              <li id="sec_9_4_3_a_v">{chapterDb["9-4-3-a-v-p"]}
              </li>
            </ol>
            <p>* {chapterDb["OtherCasesFootnote"]}
            </p>
            <Table9S docLang={props.docLang}/>
            <p>* {chapterDb["Table9S-footnote"]}
            </p>
          </li>
          <li id="sec_9_4_3_b"><b>{chapterDb["9-4-3-b-title"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_4_3_b_i">{chapterDb["9-4-3-b-i-p"]}
              </li>
              <li id="sec_9_4_3_b_ii">{chapterDb["9-4-3-b-ii-p"]}
              </li>
              <li id="sec_9_4_3_b_iii">{chapterDb["9-4-3-b-iii-p"]}
              </li>
              <li id="sec_9_4_3_b_iv">{chapterDb["9-4-3-b-iv-p"]}
              </li>
            </ol>
            <Table9T docLang={props.docLang}/>
            <p>* {chapterDb["Table9T-footnote"]}
            </p>
          </li>
          <li id="sec_9_4_3_c"><b>{chapterDb["9-4-3-c-title"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_4_3_c_i">{chapterDb["9-4-3-c-i-p"]}
              </li>
              <li id="sec_9_4_3_c_ii">{chapterDb["9-4-3-c-ii-p"]}
              </li>
              <li id="sec_9_4_3_c_iii">{chapterDb["9-4-3-c-iii-p"]}
              </li>
              <li id="sec_9_4_3_c_iv">{chapterDb["9-4-3-c-iv-p"]}
              </li>
            </ol>
            <Table9U docLang={props.docLang}/>
            <p>* {chapterDb["Table9U-footnote"]}
            </p>
          </li>
        </ol>
      </HX>
      <HX level={3} navText="9.4.4" title={chapterDb["9-4-4-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_4_4_a">{chapterDb["9-4-4-a-p"]}
          </li>
          <li id="sec_9_4_4_b">{chapterDb["9-4-4-b-p"]}
          </li>
        </ol>
      </HX>
      <HX level={3} navText="9.4.5" title={chapterDb["9-4-5-title"]}>
        <p>{chapterDb["9-4-5-p"]}
        </p>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="9.5" title={chapterDb["9-5-title"]}>
      <p>{chapterDb["9-5-p"]}
      </p>
      <HX level={3} navText="9.5.1" title={chapterDb["9-5-1-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_5_1_a">{chapterDb["9-5-1-a-p"]}
          </li>
          <li id="sec_9_5_1_b">
            <p>{chapterDb["9-5-1-b-p"]}
            </p>
            <ol className="list-[lower-roman]">
              <li id="sec_9_5_1_b_i">{chapterDb["9-5-1-b-i-p"]}
              </li>
              <li id="sec_9_5_1_b_ii">{chapterDb["9-5-1-b-ii-p"]}
              </li>
              <li id="sec_9_5_1_b_iii">{chapterDb["9-5-1-b-iii-p"]}
              </li>
            </ol>
          </li>
          <li id="sec_9_5_1_c">{chapterDb["9-5-1-c-p"]}
          </li>
          <li id="sec_9_5_1_d">{chapterDb["9-5-1-d-p"]}
          </li>
        </ol>
      </HX>
      <HX level={3} navText="9.5.2" title={chapterDb["9-5-2-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_5_2_a">{chapterDb["9-5-2-a-p"]}
          </li>
          <li id="sec_9_5_2_b">{chapterDb["9-5-2-b-p"]}
          </li>
          <li id="sec_9_5_2_c">{chapterDb["9-5-2-c-p"]}
          </li>
          <li id="sec_9_5_2_d">{chapterDb["9-5-2-d-p"]}
          </li>
          <li id="sec_9_5_2_e">{chapterDb["9-5-2-e-p"]}
          </li>
        </ol>
        <Table9V docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.5.3" title={chapterDb["9-5-3-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_5_3_a">{chapterDb["9-5-3-a-p"]}
          </li>
          <li id="sec_9_5_3_b">{chapterDb["9-5-3-b-p"]}
          </li>
        </ol>
        <Table9W docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.5.4" title={chapterDb["9-5-4-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_5_4_a">{chapterDb["9-5-4-a-p"]}
          </li>
          <li id="sec_9_5_4_b">{chapterDb["9-5-4-b-p"]}
          </li>
          <li id="sec_9_5_4_c">{chapterDb["9-5-4-c-p"]}
          </li>
          <li id="sec_9_5_4_d">{chapterDb["9-5-4-d-p"]}
          </li>
        </ol>
        <Table9X docLang={props.docLang}/>
      </HX>
      <HX level={3} navText="9.5.5" title={chapterDb["9-5-5-title"]}>
        <p>{chapterDb["9-5-5-p"]}
        </p>
      </HX>
      <HX level={3} navText="9.5.6" title={chapterDb["9-5-6-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_5_6_a">{chapterDb["9-5-6-a-p"]}
          </li>
          <li id="sec_9_5_6_b">{chapterDb["9-5-6-b-p"]}
          </li>
        </ol>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="9.6" title={chapterDb["9-6-title"]}>
      <HX level={3} navText="9.6.1" title={chapterDb["9-6-1-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_6_1_a">{chapterDb["9-6-1-a-p"]}
          </li>
          <li id="sec_9_6_1_b">
            <p>{chapterDb["9-6-1-b-p1"]}
            </p>
            <p>{chapterDb["9-6-1-b-p2"]}
            </p>
          </li>
          <li id="sec_9_6_1_c">{chapterDb["9-6-1-c-p"]}
          </li>
          <li id="sec_9_6_1_d">{chapterDb["9-6-1-d-p"]}
          </li>
          <li id="sec_9_6_1_e">
            <p>{chapterDb["9-6-1-e-p"]}
            </p>
            <ol className="list-[lower-roman]">
              <li className="border-purple-500 border-1 bg-yellow-50" id="sec_9_6_1_e_i">{chapterDb["9-6-1-e-i-p"]}
              </li>
              <li id="sec_9_6_1_e_ii">{chapterDb["9-6-1-e-ii-p"]}
              </li>
              <li id="sec_9_6_1_e_iii">{chapterDb["9-6-1-e-iii-p"]}
              </li>
              <li id="sec_9_6_1_e_iv">{chapterDb["9-6-1-e-iv-p"]}
              </li>
              <li id="sec_9_6_1_e_v">{chapterDb["9-6-1-e-v-p"]}
              </li>
            </ol>
          </li>
        </ol>
      </HX>
      <HX level={3} navText="9.6.2" title={chapterDb["9-6-2-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_6_2_a"><b>{chapterDb["9-6-2-a-title"]}</b>
            <p>{chapterDb["9-6-2-a-p"]}
            </p>
            <Table9Y docLang={props.docLang}/>
          </li>
          <li id="sec_9_6_2_b"><b>{chapterDb["9-6-2-b-title"]}</b>
            <p>{chapterDb["9-6-2-b-p-1"]}
            </p>
            <Table9Z docLang={props.docLang}/>
            <p>{chapterDb["9-6-2-b-p-2"]}
            </p>
          </li>
        </ol>
      </HX>
      <HX level={3} navText="9.6.3" title={chapterDb["9-6-3-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_6_3_a"><b>{chapterDb["9-6-3-a-title"]}</b>
            <ol className="list-[lower-roman]">
              <li id="sec_9_6_3_a_i">{chapterDb["9-6-3-a-i"]}
                <Table9AA docLang={props.docLang}/>
              </li>
              <li id="sec_9_6_3_a_ii">{chapterDb["9-6-3-a-ii"]}
                <Table9BB docLang={props.docLang}/>
              </li>
            </ol>
          </li>
          <li id="sec_9_6_3_b"><b>{chapterDb["9-6-3-b-title"]}</b>
            <p>{chapterDb["9-6-3-b-p"]}
            </p>
            <Table9CC docLang={props.docLang}/>
          </li>
        </ol>
        <HX level={3} navText="9.6.4" title={chapterDb["9-6-4-title"]}>
          <p>{chapterDb["9-6-4-p"]}
          </p>
          <Table9DD docLang={props.docLang}/>
        </HX>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="9.7" title={chapterDb["9-7-title"]}>
      <ol className="list-[lower-alpha]">
        <li id="sec_9_7_a">
          <p>{chapterDb["9-7-a-p"]}
          </p>
        </li>
        <li id="sec_9_7_b">
          <p>{chapterDb["9-7-b-p"]}
          </p>
        </li>
      </ol>
    </HX>
    <hr/>
    <HX level={2} navText="9.8" title={chapterDb["9-8-title"]}>
      <Table9EE docLang={props.docLang}/>
      <Table9FF docLang={props.docLang}/>
      <aside>
        <p><b>{commonDb["Nóta"]}:</b></p>
        <ol className="list-[lower-alpha]">
          <li id="sec_9_8_a">{chapterDb["Table9FF-note-a-p"]}
          </li>
          <li id="sec_9_8_b">{chapterDb["Table9FF-note-b-p"]}
          </li>
        </ol>
      </aside>
    </HX>
    <hr/>
  </HX>
  </ChapterTemplate>;
};
