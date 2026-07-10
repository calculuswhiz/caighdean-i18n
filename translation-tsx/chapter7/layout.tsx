import { ChapterTemplate, HX, SampleBox, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { Table7A, Table7B, Table7C, Table7D, Table7E, Table7F, Table7G, Table7H, Table7I, Table7J, Table7K, Table7L, Table7M, Table7N, Table7O, Table7P, Table7Q, Table7R, Table7S, Table7T, Table7U, Table7V } from "./tables";
const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter7 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <ChapterTemplate
    title={chapterDb["7-title"]}
    chapterNumber={7}
    docLang={props.docLang}>
    <HX level={1} navText="7" title={chapterDb["7-title"]}>
      <HX level={2} navText="7.1" title={chapterDb["7-1-title"]}>
        <p>{chapterDb["7-1-p1"]}
        </p>
        <p>{chapterDb["7-1-p2"]}
        </p>
        <HX level={3} navText="7.1.1" title={chapterDb["7-1-1-title"]}>
          <p>{chapterDb["7-1-1-p"]}
          </p>
          <ol className="list-[lower-alpha]">
            <li id="sec_7_1_1_a">
              <p>{chapterDb["7-1-1-a-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="7-1-1-a-sample" />
            </li>
            <li id="sec_7_1_1_b">
              <p>{chapterDb["7-1-1-b-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="7-1-1-b-sample" />
            </li>
            <li id="sec_7_1_1_c">
              <p>{chapterDb["7-1-1-c-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="7-1-1-c-sample" />
            </li>
            <li id="sec_7_1_1_d">
              <p>{chapterDb["7-1-1-d-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="7-1-1-d-sample" />
            </li>
            <li id="sec_7_1_1_e">
              <p>{chapterDb["7-1-1-e-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="7-1-1-e-sample" />
            </li>
            <li id="sec_7_1_1_f">
              <p>{chapterDb["7-1-1-f-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={5} samplePrefix="7-1-1-f-sample" />
            </li>
            <li id="sec_7_1_1_g">
              <p>{chapterDb["7-1-1-g-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={5} samplePrefix="7-1-1-g-sample" />
            </li>
            <li id="sec_7_1_1_h">
              <p>{chapterDb["7-1-1-h-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={9} samplePrefix="7-1-1-h-sample" />
            </li>
            <li id="sec_7_1_1_i">
              <p>{chapterDb["7-1-1-i-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={5} samplePrefix="7-1-1-i-sample" />
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="7.2" title={chapterDb["7-2-title"]}>
        <ol className="list-[lower-alpha]">
          <li id="sec_7_2_a">{chapterDb["7-2-a-p"]}
          </li>
          <li id="sec_7_2_b">{chapterDb["7-2-b-p1"]}
            <ol className="list-[lower-roman]">
              <li id="sec_7_2_b_i">{chapterDb["7-2-b-i-p"]}
              </li>
              <li id="sec_7_2_b_ii">{chapterDb["7-2-b-ii-p"]}
              </li>
              <li id="sec_7_2_b_iii">{chapterDb["7-2-b-iii-p"]}
              </li>
              <li id="sec_7_2_b_iv">{chapterDb["7-2-b-iv-p"]}
              </li>
            </ol>{chapterDb["7-2-b-p2"]}
          </li>
        </ol>
        <HX level={3} navText="7.2.1" title={chapterDb["7-2-1-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_7_2_1_A">
              <p><b>{chapterDb["7-2-1-A-title"]}</b></p>
              <p>{chapterDb["7-2-1-A-p"]}
              </p>
              <Table7A docLang={props.docLang} />
            </li>
            <li id="sec_7_2_1_B">
              <p><b>{chapterDb["7-2-1-B-title"]}</b></p>
              <p>{chapterDb["7-2-1-B-p1"]}
              </p>
              <ol className="list-[lower-alpha]">
                <li id="sec_7_2_1_B_a">{chapterDb["7-2-1-B-a-p"]}
                </li>
                <li id="sec_7_2_1_B_b">{chapterDb["7-2-1-B-b-p"]}
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_1_B_b_i">{chapterDb["7-2-1-B-b-i-p"]}
                    </li>
                    <li id="sec_7_2_1_B_b_ii">{chapterDb["7-2-1-B-b-ii-p"]}
                    </li>
                    <li id="sec_7_2_1_B_b_iii">{chapterDb["7-2-1-B-b-iii-p"]}
                    </li>
                    <li id="sec_7_2_1_B_b_iv">{chapterDb["7-2-1-B-b-iv-p"]}
                    </li>
                  </ol>
                </li>
                <li id="sec_7_2_1_B_c">{chapterDb["7-2-1-B-c-p"]}
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_1_B_c_i">{chapterDb["7-2-1-B-c-i-p"]}
                    </li>
                    <li id="sec_7_2_1_B_c_ii">{chapterDb["7-2-1-B-c-ii-p"]}
                    </li>
                    <li id="sec_7_2_1_B_c_iii">{chapterDb["7-2-1-B-c-iii-p"]}
                    </li>
                    <li id="sec_7_2_1_B_c_iv">{chapterDb["7-2-1-B-c-iv-p"]}
                    </li>
                  </ol>
                </li>
                <li id="sec_7_2_1_B_d">{chapterDb["7-2-1-B-d-p"]}
                </li>
              </ol>{chapterDb["7-2-1-B-p2"]}
              <Table7B docLang={props.docLang} />
              {chapterDb["7-2-1-B-p3"]}
              <Table7C docLang={props.docLang} />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="7.2.2" title={chapterDb["7-2-2-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_7_2_2_A">
              <p><b>{chapterDb["7-2-2-A-title"]}</b></p>
              <p>{chapterDb["7-2-2-A-p1"]}
              </p>
              <ol className="list-[lower-alpha]">
                <li id="sec_7_2_2_A_a">{chapterDb["7-2-2-A-a-p"]}
                </li>
                <li id="sec_7_2_2_A_b">{chapterDb["7-2-2-A-b-p"]}
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_2_A_b_i">{chapterDb["7-2-2-A-b-i-p"]}
                    </li>
                    <li id="sec_7_2_2_A_b_ii">{chapterDb["7-2-2-A-b-ii-p"]}
                    </li>
                    <li id="sec_7_2_2_A_b_iii">{chapterDb["7-2-2-A-b-iii-p"]}
                    </li>
                    <li id="sec_7_2_2_A_b_iv">{chapterDb["7-2-2-A-b-iv-p"]}
                    </li>
                    <li id="sec_7_2_2_A_b_v">{chapterDb["7-2-2-A-b-v-p"]}
                    </li>
                  </ol>
                </li>
                <li id="sec_7_2_2_A_c">{chapterDb["7-2-2-A-c-p"]}
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_2_A_c_i">{chapterDb["7-2-2-A-c-i-p"]}
                    </li>
                    <li id="sec_7_2_2_A_c_ii">{chapterDb["7-2-2-A-c-ii-p"]}
                    </li>
                    <li id="sec_7_2_2_A_c_iii">{chapterDb["7-2-2-A-c-iii-p"]}
                    </li>
                    <li id="sec_7_2_2_A_c_iv">{chapterDb["7-2-2-A-c-iv-p"]}
                    </li>
                    <li id="sec_7_2_2_A_c_v">{chapterDb["7-2-2-A-c-v-p"]}
                    </li>
                    <li id="sec_7_2_2_A_c_vi">{chapterDb["7-2-2-A-c-vi-p"]}
                    </li>
                  </ol>
                </li>
              </ol>
              <p>{chapterDb["7-2-2-A-p2"]}
              </p>
              <Table7D docLang={props.docLang} />
            </li>
            <li id="sec_7_2_2_B">
              <p><b>{chapterDb["7-2-2-B-title"]}</b></p>
              <p>{chapterDb["7-2-2-B-p"]}
              </p>
              <ol className="list-[lower-alpha]">
                <li id="sec_7_2_2_B_a">
                  <p>{chapterDb["7-2-2-B-a-title"]}
                  </p>
                  <p>{chapterDb["7-2-2-B-a-p1"]}
                  </p>
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_2_B_a_i">{chapterDb["7-2-2-B-a-i"]}
                    </li>
                    <li id="sec_7_2_2_B_a_ii">{chapterDb["7-2-2-B-a-ii"]}
                    </li>
                  </ol>
                  <p>{chapterDb["7-2-2-B-a-p2"]}
                  </p>
                  <Table7E docLang={props.docLang} />
                </li>
                <li id="sec_7_2_2_B_b">
                  <p>{chapterDb["7-2-2-B-b-title"]}
                  </p>
                  <p>{chapterDb["7-2-2-B-b-p1"]}
                  </p>
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_2_B_b_i">{chapterDb["7-2-2-B-b-i"]}
                    </li>
                    <li id="sec_7_2_2_B_b_ii">{chapterDb["7-2-2-B-b-ii"]}
                      <ul className="list-disc">
                        <li>{chapterDb["7-2-2-B-b-ii-1"]}
                        </li>
                        <li>{chapterDb["7-2-2-B-b-ii-2"]}
                        </li>
                        <li>{chapterDb["7-2-2-B-b-ii-3"]}
                        </li>
                        <li>{chapterDb["7-2-2-B-b-ii-4"]}
                        </li>
                      </ul>
                    </li>
                    <li id="sec_7_2_2_B_b_iii">{chapterDb["7-2-2-B-b-iii"]}
                      <ul className="list-disc">
                        <li>{chapterDb["7-2-2-B-b-iii-1"]}
                        </li>
                        <li>{chapterDb["7-2-2-B-b-iii-2"]}
                        </li>
                        <li>{chapterDb["7-2-2-B-b-iii-3"]}
                        </li>
                        <li>{chapterDb["7-2-2-B-b-iii-4"]}
                        </li>
                      </ul>
                    </li>
                  </ol>
                  <p>{chapterDb["7-2-2-B-b-p2"]}
                  </p>
                  <Table7F docLang={props.docLang} />
                </li>
                <li id="sec_7_2_2_B_c">
                  <p>{chapterDb["7-2-2-B-c-title"]}
                  </p>
                  <p>{chapterDb["7-2-2-B-c-p1"]}
                  </p>
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_2_B_c_i">{chapterDb["7-2-2-B-c-i"]}
                    </li>
                    <li id="sec_7_2_2_B_c_ii">{chapterDb["7-2-2-B-c-ii"]}
                    </li>
                  </ol>
                  <p>{chapterDb["7-2-2-B-c-p2"]}
                  </p>
                  <Table7G docLang={props.docLang} />
                </li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="7.2.3" title={chapterDb["7-2-3-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_7_2_3_A">
              <p><b>{chapterDb["7-2-3-A-title"]}</b></p>
              <p>{chapterDb["7-2-3-A-p"]}
              </p>
              <Table7H docLang={props.docLang} />
            </li>
            <li id="sec_7_2_3_B">
              <p><b>{chapterDb["7-2-3-B-title"]}</b></p>
              <p>{chapterDb["7-2-3-B-p"]}
              </p>
              <Table7I docLang={props.docLang} />

            </li>
          </ol>
        </HX>
        <HX level={3} navText="7.2.4" title={chapterDb["7-2-4-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_7_2_4_A">
              <p><b>{chapterDb["7-2-4-A-title"]}</b></p>
              <p>{chapterDb["7-2-4-A-p"]}
              </p>
              <Table7J docLang={props.docLang} />

            </li>
            <li id="sec_7_2_4_B">
              <p><b>{chapterDb["7-2-4-B-title"]}</b></p>
              <p>{chapterDb["7-2-4-B-p"]}
              </p>
              <Table7K docLang={props.docLang} />

            </li>
          </ol>
        </HX>
        <HX level={3} navText="7.2.5" title={chapterDb["7-2-5-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_7_2_5_A">
              <p><b>{chapterDb["7-2-5-A-title"]}</b></p>
              <ol className="list-[lower-alpha]">
                <li id="sec_7_2_5_A_a">
                  <p>{chapterDb["7-2-5-A-a-p"]}
                  </p>
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_5_A_a_i">{chapterDb["7-2-5-A-a-i-p"]}
                    </li>
                    <li id="sec_7_2_5_A_a_ii">{chapterDb["7-2-5-A-a-ii-p"]}
                    </li>
                    <li id="sec_7_2_5_A_a_iii">{chapterDb["7-2-5-A-a-iii-p"]}
                    </li>
                  </ol>
                </li>
                <li id="sec_7_2_5_A_b">
                  <p>{chapterDb["7-2-5-A-b-p"]}
                  </p>
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_5_A_b_i">{chapterDb["7-2-5-A-b-i-p"]}
                    </li>
                    <li id="sec_7_2_5_A_b_ii">{chapterDb["7-2-5-A-b-ii-p"]}
                    </li>
                    <li id="sec_7_2_5_A_b_iii">{chapterDb["7-2-5-A-b-iii-p"]}
                    </li>
                    <li id="sec_7_2_5_A_b_iv">{chapterDb["7-2-5-A-b-iv-p"]}
                    </li>
                    <li id="sec_7_2_5_A_b_v">{chapterDb["7-2-5-A-b-v-p"]}
                    </li>
                    <li id="sec_7_2_5_A_b_vi">{chapterDb["7-2-5-A-b-vi-p"]}
                    </li>
                  </ol>
                </li>
                <li id="sec_7_2_5_A_c">
                  <p>{chapterDb["7-2-5-A-c-p"]}
                  </p>
                  <ol className="list-[lower-roman]">
                    <li id="sec_7_2_5_A_c_i">{chapterDb["7-2-5-A-c-i-p"]}
                    </li>
                    <li id="sec_7_2_5_A_c_ii">{chapterDb["7-2-5-A-c-ii-p"]}
                    </li>
                    <li id="sec_7_2_5_A_c_iii">{chapterDb["7-2-5-A-c-iii-p"]}
                    </li>
                  </ol>
                  <p>{chapterDb["7-2-5-A-c-p2"]}
                  </p>
                  <Table7L docLang={props.docLang} />

                </li>
              </ol>
            </li>
            <li id="sec_7_2_5_B">
              <p><b>{chapterDb["7-2-5-B-title"]}</b></p>
              <p>{chapterDb["7-2-5-B-p"]}
              </p>
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="7.3" title={chapterDb["7-3-title"]}>
        <HX level={3} navText="7.3.1" title={chapterDb["7-3-1-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_7_3_1_A">
              <p><b>{chapterDb["7-3-1-A-title"]}</b></p>
              <p>{chapterDb["7-3-1-A-p"]}
              </p>
              <Table7M docLang={props.docLang} />

            </li>
            <li id="sec_7_3_1_B">
              <p><b>{chapterDb["7-3-1-B-title"]}</b></p>
              <p>{chapterDb["7-3-1-B-p1"]}
              </p>
              <Table7N docLang={props.docLang} />

              <p>{chapterDb["7-3-1-B-p2"]}
              </p>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="7.3.2" title={chapterDb["7-3-2-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_7_3_2_A">
              <p><b>{chapterDb["7-3-2-A-title"]}</b></p>
              <p>{chapterDb["7-3-2-A-p"]}
              </p>
              <Table7O docLang={props.docLang} />

            </li>
            <li id="sec_7_3_2_B">
              <p><b>{chapterDb["7-3-2-B-title"]}</b></p>
              <p>{chapterDb["7-3-2-B-p"]}
              </p>
              <Table7P docLang={props.docLang} />

            </li>
          </ol>
        </HX>
        <HX level={3} navText="7.3.3" title={chapterDb["7-3-3-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_7_3_3_A">
              <p><b>{chapterDb["7-3-3-A-title"]}</b></p>
              <p>{chapterDb["7-3-3-A-p"]}
              </p>
              <Table7Q docLang={props.docLang} />

            </li>
            <li id="sec_7_3_3_B">
              <p><b>{chapterDb["7-3-3-B-title"]}</b></p>
              <p>{chapterDb["7-3-3-B-p"]}
              </p>
              <Table7R docLang={props.docLang} />

            </li>
          </ol>
        </HX>
        <HX level={4} navText="7.3.4" title={chapterDb["7-3-4-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_7_3_4_A">
              <p><b>{chapterDb["7-3-4-A-title"]}</b></p>
              <p>{chapterDb["7-3-4-A-p"]}
              </p>
              <Table7S docLang={props.docLang} />

            </li>
            <li id="sec_7_3_4_B">
              <p><b>{chapterDb["7-3-4-B-title"]}</b></p>
              <p>{chapterDb["7-3-4-B-p"]}
              </p>
              <Table7T docLang={props.docLang} />

            </li>
          </ol>
        </HX>
        <HX level={4} navText="7.3.5" title={chapterDb["7-3-5-title"]}>
          <p>{chapterDb["7-3-5-p"]}
          </p>
          <Table7U docLang={props.docLang} />

        </HX>
      </HX>
      <hr />
      <HX level={2} navText="7.4" title={chapterDb["7-4-title"]}>
        <p>{chapterDb["7-4-p"]}
        </p>
        <Table7V docLang={props.docLang} />

      </HX>
      <hr />
    </HX>
  </ChapterTemplate>;
};
