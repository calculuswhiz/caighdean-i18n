import { ChapterTemplate, HX, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { Table2A, Table2B, Table2C, Table2D, Table2E, Table2F, Table2G, Table2H, Table2I, Table2J, Table2K, Table2L, Table2M, Table2N } from "./tables";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}
const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter2 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);

  return <ChapterTemplate
    title={chapterDb["2-title"]}
    chapterNumber={2}
    docLang={props.docLang}>
    <HX level={1} navText="2" title={chapterDb["2-title"]}>
      <HX level={2} navText="2.1" title={chapterDb["2-1-title"]}>
        <HX level={3} navText="2.1.1" title={chapterDb["2-1-1-title"]}>
          <p>{chapterDb["2-1-1-p1"]}</p>
        </HX>
        <HX level={3} navText="2.1.2" title={chapterDb["2-1-2-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_1_2_a">
              <p><b>{chapterDb["2-1-2-a-title"]}</b></p>
              <p>{chapterDb["2-1-2-a-p1"]}</p>
            </li>
            <li id="sec_2_1_2_b">
              <p><b>{chapterDb["2-1-2-b-title"]}</b></p>
              <p>{chapterDb["2-1-2-b-p1"]}</p>
            </li>
            <li id="sec_2_1_2_c">
              <p><b>{chapterDb["2-1-2-c-title"]}</b></p>
              <p>{chapterDb["2-1-2-c-p1"]}</p>
            </li>
            <li id="sec_2_1_2_d">
              <p><b>{chapterDb["2-1-2-d-title"]}</b></p>
              <p>{chapterDb["2-1-2-d-p1"]}</p>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="2.1.3" title={chapterDb["2-1-3-title"]}>
          <p>{chapterDb["2-1-3-p1"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_1_3_a">
              <p><b>{chapterDb["2-1-3-a-title"]}</b></p>
              <p>{chapterDb["2-1-3-a-p1"]}</p>
              <Table2A docLang={props.docLang} />
            </li>
            <li id="sec_2_1_3_b">
              <p><b>{chapterDb["2-1-3-b-title"]}</b></p>
              <p>{chapterDb["2-1-3-b-p1"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_2_1_3_b_i">
                  <p>{chapterDb["2-1-3-b-i-p1"]}</p>
                  <Table2B docLang={props.docLang} />
                </li>
                <li id="sec_2_1_3_b_ii">
                  <p>{chapterDb["2-1-3-b-ii-p1"]}</p>
                  <Table2C docLang={props.docLang} />
                  <p>{chapterDb["2-1-3-b-ii-p2"]}</p>
                </li>
                <li id="sec_2_1_3_b_iii">
                  <p>{chapterDb["2-1-3-b-iii-p1"]}</p>
                  <Table2D docLang={props.docLang} />
                </li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="2.1.4" title={chapterDb["2-1-4-title"]}>
          <p>{chapterDb["2-1-4-p1"]}</p>
          <p>{chapterDb["2-1-4-p2"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_1_4_a">{chapterDb["2-1-4-a-p"]}</li>
            <li id="sec_2_1_4_b">{chapterDb["2-1-4-b-p"]}</li>
            <li id="sec_2_1_4_c">{chapterDb["2-1-4-c-p"]}</li>
            <li id="sec_2_1_4_d">{chapterDb["2-1-4-d-p"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.1.5" title={chapterDb["2-1-5-title"]}>
          <p>{chapterDb["2-1-5-p1"]}</p>
          <p>{chapterDb["2-1-5-p2"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_1_5_a">{chapterDb["2-1-5-a"]}</li>
            <li id="sec_2_1_5_b">{chapterDb["2-1-5-b"]}</li>
            <li id="sec_2_1_5_c">{chapterDb["2-1-5-c"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.1.6" title={chapterDb["2-1-6-title"]}>
          <p>{chapterDb["2-1-6-p"]}</p>
        </HX>
        <HX level={3} navText="2.1.7" title={chapterDb["2-1-7-title"]}>
          <p>{chapterDb["2-1-7-p1"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_1_7_a">{chapterDb["2-1-7-a"]}</li>
            <li id="sec_2_1_7_b">{chapterDb["2-1-7-b"]}</li>
            <li id="sec_2_1_7_c">{chapterDb["2-1-7-c"]}</li>
            <li id="sec_2_1_7_d">{chapterDb["2-1-7-d"]}</li>
            <li id="sec_2_1_7_e">{chapterDb["2-1-7-e"]}</li>
            <li id="sec_2_1_7_f">{chapterDb["2-1-7-f"]}</li>
          </ol>
          <p><b>{commonDb["Nóta"]}</b></p>
          <ol className="list-[disc]">
            <li id="sec_2_1_7_notes_1">{chapterDb["2-1-7-notes-1"]}</li>
            <li id="sec_2_1_7_notes_2">{chapterDb["2-1-7-notes-2"]}</li>
            <li id="sec_2_1_7_notes_3">{chapterDb["2-1-7-notes-3"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.1.8" title={chapterDb["2-1-8-title"]}>
          <Table2E docLang={props.docLang} />
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["2-1-8-notes"]}
          </aside>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="2.2" title={chapterDb["2-2-title"]}>
        <HX level={3} navText="2.2.1" title={chapterDb["2-2-1-title"]}>
          <p>{chapterDb["2-2-1-p"]}</p>
        </HX>
        <HX level={3} navText="2.2.2" title={chapterDb["2-2-2-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_2_2_a">{chapterDb["2-2-2-a"]}</li>
            <li id="sec_2_2_2_b">{chapterDb["2-2-2-b"]}</li>
            <li id="sec_2_2_2_c">{chapterDb["2-2-2-c"]}</li>
            <li id="sec_2_2_2_d">{chapterDb["2-2-2-d"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.2.3" title={chapterDb["2-2-3-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_2_3_a">{chapterDb["2-2-3-a"]}</li>
            <li id="sec_2_2_3_b">
              <p>{chapterDb["2-2-3-b-p"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_2_2_3_b_i">{chapterDb["2-2-3-b-i"]}</li>
                <li id="sec_2_2_3_b_ii">{chapterDb["2-2-3-b-ii"]}</li>
                <li id="sec_2_2_3_b_iii">{chapterDb["2-2-3-b-iii"]}</li>
                <li id="sec_2_2_3_b_iv">{chapterDb["2-2-3-b-iv"]}</li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="2.2.4" title={chapterDb["2-2-4-title"]}>
          <p>{chapterDb["2-2-4-p1"]}</p>
          <p>{chapterDb["2-2-4-p2"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_2_4_a">
              <p><b>{chapterDb["2-2-4-a"]}</b></p>
              <Table2F docLang={props.docLang} />
            </li>
            <li id="sec_2_2_4_b">
              <p><b>{chapterDb["2-2-4-b"]}</b></p>
              <Table2G docLang={props.docLang} />
            </li>
            <li id="sec_2_2_4_c">
              <p><b>{chapterDb["2-2-4-c-title"]}</b></p>
              <p>{chapterDb["2-2-4-c-p1"]}</p>
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="2.3" title={chapterDb["2-3-title"]}>
        <HX level={3} navText="2.3.1" title={chapterDb["2-3-1-title"]}>
          <p>{chapterDb["2-3-1-p"]}</p>
        </HX>
        <HX level={3} navText="2.3.2" title={chapterDb["2-3-2-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_3_2_a">{chapterDb["2-3-2-a"]}</li>
            <li id="sec_2_3_2_b">{chapterDb["2-3-2-b"]}</li>
            <li id="sec_2_3_2_c"><span>{chapterDb["2-3-2-c-p1"]}</span>
              <ol className="list-[lower-roman]">
                <li id="sec_2_3_2_c_i">{chapterDb["2-3-2-c-i"]}</li>
                <li id="sec_2_3_2_c_ii">{chapterDb["2-3-2-c-ii"]}</li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="2.3.3" title={chapterDb["2-3-3-title"]}>
          <p>{chapterDb["2-3-3-p1"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_3_3_a">{chapterDb["2-3-3-a"]}</li>
            <li id="sec_2_3_3_b">{chapterDb["2-3-3-b"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.3.4" title={chapterDb["2-3-4-title"]}>
          <p>{chapterDb["2-3-4-p1"]}</p>
          <p>{chapterDb["2-3-4-p2"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_3_4_a">
              <p><b>{chapterDb["2-3-4-a-title"]}</b></p>
              <Table2H docLang={props.docLang} />
            </li>
            <li id="sec_2_3_4_b">
              <p><b>{chapterDb["2-3-4-b-title"]}</b></p>
              <Table2I docLang={props.docLang} />
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="2.4" title={chapterDb["2-4-title"]}>
        <HX level={3} navText="2.4.1" title={chapterDb["2-4-1-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_4_1_a">{chapterDb["2-4-1-a"]}</li>
            <li id="sec_2_4_1_b">{chapterDb["2-4-1-b"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.4.2" title={chapterDb["2-4-2-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_4_2_a">{chapterDb["2-4-2-a"]}</li>
            <li id="sec_2_4_2_b">{chapterDb["2-4-2-b"]}</li>
            <li id="sec_2_4_2_c">{chapterDb["2-4-2-c"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.4.3" title={chapterDb["2-4-3-title"]}>
          <p>{chapterDb["2-4-3-p1"]}</p>
          <p>{chapterDb["2-4-3-p2"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_4_3_a">
              <p><b>{chapterDb["2-4-3-a-title"]}</b></p>
              <Table2J docLang={props.docLang} />
            </li>
            <li id="sec_2_4_3_b">
              <p><b>{chapterDb["2-4-3-b-title"]}</b></p>
              <Table2K docLang={props.docLang} />
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="2.5" title={chapterDb["2-5-title"]}>
        <HX level={3} navText="2.5.1" title={chapterDb["2-5-1-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_5_1_a">{chapterDb["2-5-1-a"]}</li>
            <li id="sec_2_5_1_b">{chapterDb["2-5-1-b"]}</li>
            <li id="sec_2_5_1_c">{chapterDb["2-5-1-c"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.5.2" title={chapterDb["2-5-2-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_5_2_a">{chapterDb["2-5-2-a"]}</li>
            <li id="sec_2_5_2_b">{chapterDb["2-5-2-b"]}</li>
            <li id="sec_2_5_2_c">{chapterDb["2-5-2-c"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.5.3" title={chapterDb["2-5-3-title"]}>
          <p>{chapterDb["2-5-3-p1"]}</p>
          <p>{chapterDb["2-5-3-p2"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_5_3_a">
              <p><b>{chapterDb["2-5-3-a-title"]}</b></p>
              <Table2L docLang={props.docLang} />
            </li>
          </ol>
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["2-5-3-Note"]}
          </aside>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="2.6" title={chapterDb["2-6-title"]}>
        <HX level={3} navText="2.6.1" title={chapterDb["2-6-1-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_6_1_a">{chapterDb["2-6-1-a"]}</li>
            <li id="sec_2_6_1_b">{chapterDb["2-6-1-b"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="2.6.2" title={chapterDb["2-6-2-title"]}>
          <p>{chapterDb["2-6-2-p1"]}</p>
          <p>{chapterDb["2-6-2-p2"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_2_6_2_a">
              <p><b>{chapterDb["2-6-2-a-title"]}</b></p>
              <Table2M docLang={props.docLang} />
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="2.7" title={chapterDb["2-7-title"]}>
        <p>{chapterDb["2-7-p"]}</p>
        <Table2N docLang={props.docLang} />
        <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["2-7-Note"]}
        </aside>
      </HX>
      <hr />
    </HX>
  </ChapterTemplate>;
};
