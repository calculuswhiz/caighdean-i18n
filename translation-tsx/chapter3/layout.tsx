import { ChapterTemplate, HX, SampleBox, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { Table3A, Table3B, Table3C, Table3D, Table3E, Table3F, Table3G } from "./tables";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter3 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);

  return <ChapterTemplate
    title={chapterDb["3-title"]}
    chapterNumber={3}
    docLang={props.docLang}>
    <HX level={1} navText="3" title={chapterDb["3-title"]}>
      <HX level={2} navText="3.1" title={chapterDb["3-1-title"]}>
        <HX level={3} navText="3.1.1">
          <p>{chapterDb["3-1-1-p"]}
          </p>
        </HX>
        <HX level={3} navText="3.1.2">
          <p>{chapterDb["3-1-2-p"]}
          </p>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_1_2_a">
              <p>{chapterDb["3-1-2-a"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-2-a-sample" />
            </li>
            <li id="sec_3_1_2_b">
              <p>{chapterDb["3-1-2-b"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-1-2-b-sample" />
            </li>
            <li id="sec_3_1_2_c">
              <p>{chapterDb["3-1-2-c"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="3-1-2-c-sample" />
            </li>
            <li id="sec_3_1_2_d">
              <p>{chapterDb["3-1-2-d"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-1-2-d-sample" />
            </li>
            <li id="sec_3_1_2_e">
              <p>{chapterDb["3-1-2-e"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-2-e-sample" />
            </li>
            <li id="sec_3_1_2_f">
              <p>{chapterDb["3-1-2-f"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="3-1-2-f-sample" />
            </li>
            <li id="sec_3_1_2_g">
              <p>{chapterDb["3-1-2-g"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-2-g-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.1.3">
          <p>{chapterDb["3-1-3-p1"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-3-sample" />
          <p>{chapterDb["3-1-3-p2"]}
          </p>
        </HX>
        <HX level={3} navText="3.1.4">
          <p>{chapterDb["3-1-4-p1"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-4-p1-sample" />
          <p>{chapterDb["3-1-4-p2"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-4-p2-sample" />
        </HX>
        <HX level={3} navText="3.1.5">
          <p>{chapterDb["3-1-5-p"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-5-p-sample" />
        </HX>
        <HX level={3} navText="3.1.6">
          <p>{chapterDb["3-1-6-p1"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-6-p1-sample" />
          <p>{chapterDb["3-1-6-p2"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-6-p2-sample" />
        </HX>
        <HX level={3} navText="3.1.7">
          <p>{chapterDb["3-1-7-p1"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-7-p1-sample" />
          <p>{chapterDb["3-1-7-p2"]}
          </p>
        </HX>
        <HX level={3} navText="3.1.8">
          <p>{chapterDb["3-1-8-p"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-1-8-p-sample" />
        </HX>
        <HX level={3} navText="3.1.9">
          <p>{chapterDb["3-1-9-p"]}
          </p>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_1_9_a">
              <p>{chapterDb["3-1-9-a-p"]}
              </p>
              <table>
                <colgroup>
                  <col className="w-4/9" />
                  <col className="w-1/9" />
                  <col className="w-4/9" />
                </colgroup>
                <tbody>
                  <tr>
                    <td>an cóta + an bhean</td>
                    <td>&rarr;</td>
                    <td>Is é sin <b>cóta na mná</b>.</td>
                  </tr>
                  <tr>
                    <td>an t&#x2011;údar + na leabhair</td>
                    <td>&rarr;</td>
                    <td>Is í <b>údar na leabhar</b> í.</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_3_1_9_b">
              <p>{chapterDb["3-1-9-b-p"]}
              </p>
              <table>
                <colgroup>
                  <col className="w-4/9" />
                  <col className="w-1/9" />
                  <col className="w-4/9" />
                </colgroup>
                <tbody>
                  <tr>
                    <td>cóta + bean</td>
                    <td>&rarr;</td>
                    <td>Is <b>cóta mná</b> é.</td>
                  </tr>
                  <tr>
                    <td>údar + leabhair</td>
                    <td>&rarr;</td>
                    <td>Is <b>údar leabhar</b> í.</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_3_1_9_c">
              <p>{chapterDb["3-1-9-c-p"]}
              </p>
              <table>
                <colgroup>
                  <col className="w-2/7" />
                  <col className="w-1/7" />
                  <col className="w-4/7" />
                </colgroup>
                <tbody>
                  <tr>
                    <td>an cóta + bean</td>
                    <td>&rarr;</td>
                    <td>An bhfaca tú <b>an cóta mná</b> sin?</td>
                  </tr>
                  <tr>
                    <td>an t&#x2011;údar + leabhair</td>
                    <td>&rarr;</td>
                    <td>Is í <b>an t&#x2011;údar leabhar</b> is cáiliúla in Éirinn í.</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.1.10">
          <p>{chapterDb["3-1-10-p"]}
          </p>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_1_10_a">
              <p>{chapterDb["3-1-10-a-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-10-a-p-sample" />
            </li>
            <li id="sec_3_1_10_b">
              <p>{chapterDb["3-1-10-b-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-10-b-p-sample" />
            </li>
            <li id="sec_3_1_10_c">
              <p>{chapterDb["3-1-10-c-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-10-c-p-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.1.11">
          <p>{chapterDb["3-1-11-p"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="3-1-11-p-sample" />
          <aside>{commonDb["Nóta"]}: {chapterDb["3-1-11-note"]}
          </aside>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-1-11-p-sample" startAt={5} />
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="3.2" title={chapterDb["3-2-title"]}>
        <HX level={3} navText="3.2.1" title={chapterDb["3-2-1-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_2_1_a">
              <p>{chapterDb["3-2-1-a-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-2-1-a-p-sample" />
            </li>
            <li id="sec_3_2_1_b">
              <p>{chapterDb["3-2-1-b-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-2-1-b-p-sample" />
            </li>
            <li id="sec_3_2_1_c">
              <p>{chapterDb["3-2-1-c-p1"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-2-1-c-p1-sample" />
              <p>{chapterDb["3-2-1-c-p2"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-2-1-c-p2-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.2.2" title={chapterDb["3-2-2-title"]}>
          <p>{chapterDb["3-2-2-p"]}
          </p>
          <ol className="list-[upper-alpha]">
            <li id="sec_3_2_2_A"><b>{chapterDb["3-2-2-A-title"]}</b>
              <ol className="list-[lower-alpha]">
                <li id="sec_3_2_2_A_a">
                  <p>{chapterDb["3-2-2-A-a-p"]}
                  </p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={5} samplePrefix="3-2-2-A-a-p-sample" />
                </li>
                <li id="sec_3_2_2_A_b">
                  <p>{chapterDb["3-2-2-A-b-p"]}
                  </p>
                  <table className="samplebox my-1">
                    <tbody>
                      <tr>
                        <td>An <b>é</b> FSS a bhfuil freagracht <b>air</b> as cúrsaí sláinte?</td>
                      </tr>
                      <tr>
                        <td>Maidir le NA, is é 193 líon <b>a</b> bhall.</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ol>
            </li>
            <li id="sec_3_2_2_B"><b>{chapterDb["3-2-2-B-title"]}</b>
              <p>{chapterDb["3-2-2-B-p"]}
              </p>
              <ol className="list-[lower-alpha]">
                <li id="sec_3_2_2_B_a">
                  <p>{chapterDb["3-2-2-B-a-p"]}
                  </p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-2-2-B-a-p-sample" />
                </li>
                <li id="sec_3_2_2_B_b">
                  <p>{chapterDb["3-2-2-B-b-p"]}
                  </p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-2-2-B-b-p-sample" />
                </li>
                <li id="sec_3_2_2_B_c">
                  <p>{chapterDb["3-2-2-B-c-p"]}
                  </p>
                  <table className="samplebox my-1">
                    <tbody>
                      <tr>
                        <td>Maidir leis <b>na NA</b>, is é 193 líon <b>a</b> bhall.</td>
                      </tr>
                      <tr>
                        <td>Síníodh <b>an IEA</b> sa bhliain 1986 agus tá feidhm reachtach <b>aige</b>.</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.2.3" title={chapterDb["3-2-3-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_2_3_a">
              <p>{chapterDb["3-2-3-a-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="3-2-3-a-p-sample" />
            </li>
            <li id="sec_3_2_3_b">
              <p>{chapterDb["3-2-3-b-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="3-2-3-b-p-sample" />
            </li>
            <li id="sec_3_2_3_c">
              <p>{chapterDb["3-2-3-c-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-2-3-c-p-sample" />
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="3.3" title={chapterDb["3-3-title"]}>
        <HX level={3} navText="3.3.1" title={chapterDb["3-3-1-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_3_1_a">
              <p>{chapterDb["3-3-1-a-p1"]}
              </p>
              <ol className="list-[lower-roman]">
                <li id="sec_3_3_1_a_i">
                  <p>{chapterDb["3-3-1-a-i-p"]}
                  </p>
                  <table>
                    <colgroup>
                      <col className="w-4/9" />
                      <col className="w-1/9" />
                      <col className="w-4/9" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <td>Sin é <b>teach Ghráinne</b>.</td>
                        <td>&rarr;</td>
                        <td>Sin í <b>eochair theach Ghráinne</b>.</td>
                      </tr>
                      <tr>
                        <td>An raibh <b>foireann Chorcaí</b> ann?</td>
                        <td>&rarr;</td>
                        <td>Bhí <b>bus fhoireann Chorcaí</b> ann.</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li id="sec_3_3_1_a_ii">
                  <p>{chapterDb["3-3-1-a-ii-p"]}
                  </p>
                  <table>
                    <colgroup>
                      <col className="w-4/9" />
                      <col className="w-1/9" />
                      <col className="w-4/9" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <td>Pléadh <b>forais chreidmheasa an Stáit</b>.</td>
                        <td>&rarr;</td>
                        <td>Dúradh go bhfuil <b>cobhsaíocht fhorais chreidmheasa an Stáit</b> ríthábhachtach.</td>
                      </tr>
                      <tr>
                        <td>Ar labhair tú le <b>bainisteoir na hoifige</b>?</td>
                        <td>&rarr;</td>
                        <td>D&rsquo;fhág mé nóta <b>le haghaidh bhainisteoir na hoifige</b>.</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li id="sec_3_3_1_a_iii">
                  <p>{chapterDb["3-3-1-a-iii-p"]}
                  </p>
                  <table>
                    <colgroup>
                      <col className="w-4/9" />
                      <col className="w-1/9" />
                      <col className="w-4/9" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <td>Cad atá á dhéanamh le <b>doras a ghluaisteáin</b>?</td>
                        <td>&rarr;</td>
                        <td>Tá an meicneoir <b>ag deisiú dhoras a ghluaisteáin</b>.</td>
                      </tr>
                      <tr>
                        <td>An le toil <b>a dtuismitheoirí</b> a rinne siad é?</td>
                        <td>&rarr;</td>
                        <td>Ní hea, ach <b>in éadan thoil a dtuismitheoirí</b>.</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li id="sec_3_3_1_a_iv">
                  <p>{chapterDb["3-3-1-a-iv-p"]}
                  </p>
                  <table>
                    <colgroup>
                      <col className="w-4/9" />
                      <col className="w-1/9" />
                      <col className="w-4/9" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <td>Cheartaigh sé <b>ceacht gach linbh</b>.</td>
                        <td>&rarr;</td>
                        <td>Chuir sé réalta órga <b>ag bun cheacht gach linbh</b>.</td>
                      </tr>
                      <tr>
                        <td>Tá <b>cearta gach aon saoránaigh</b> tábhachtach.</td>
                        <td>&rarr;</td>
                        <td>Tá siad ag gníomhú <b>ar son chearta gach aon saoránaigh</b>.</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li id="sec_3_3_1_a_v">
                  <p>{chapterDb["3-3-1-a-v-p"]}
                  </p>
                  <table>
                    <colgroup>
                      <col className="w-4/9" />
                      <col className="w-1/9" />
                      <col className="w-4/9" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <td>Sin é <b>Traein 20</b>.</td>
                        <td>&rarr;</td>
                        <td>Cá bhfuil <b>tiománaí Thraein 20</b>?</td>
                      </tr>
                      <tr>
                        <td>Ar luaigh tú <b>fomhír (i)</b>?</td>
                        <td>&rarr;</td>
                        <td>Luaigh, tá an fhaisnéis <b>i lár fhomhír (i)</b>.</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li id="sec_3_3_1_a_vi">
                  <p>{chapterDb["3-3-1-a-vi-p"]}
                  </p>
                  <table>
                    <colgroup>
                      <col className="w-4/9" />
                      <col className="w-1/9" />
                      <col className="w-4/9" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <td>Tá <b>téarmaí an Achta</b> soiléir.</td>
                        <td>&rarr;</td>
                        <td>Tá na ceapacháin <b>faoi réir théarmaí an Achta</b>.</td>
                      </tr>
                      <tr>
                        <td>Cá bhfuil <b>bainisteoir an óstáin</b>?</td>
                        <td>&rarr;</td>
                        <td>Tá <b>oifigí bhainisteoir an óstáin</b> san fhoirgneamh sin.</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ol>
              <p>{chapterDb["3-3-1-a-p2"]}
              </p>
            </li>
            <li id="sec_3_3_1_b">
              <p>{chapterDb["3-3-1-b-p"]}
              </p>
              <ol className="list-[lower-roman]">
                <li id="sec_3_3_1_b_i">
                  <p>{chapterDb["3-3-1-b-i-p"]}
                  </p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-3-1-b-i-p-sample" />
                </li>
                <li id="sec_3_3_1_b_ii">
                  <p>{chapterDb["3-3-1-b-ii-p"]}
                  </p>
                  <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-3-1-b-ii-p-sample" />
                </li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.3.2" title={chapterDb["3-3-2-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_3_2_a">
              <p>{chapterDb["3-3-2-a-p"]}
              </p>
              <Table3A docLang={props.docLang}></Table3A>
            </li>
            <li id="sec_3_3_2_b">
              <p>{chapterDb["3-3-2-b-p1"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="3-3-2-b-p1-sample" />
              <p>{chapterDb["3-3-2-b-p2"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-3-2-b-p2-sample" />
            </li>
            <li id="sec_3_3_2_c">
              <p>{chapterDb["3-3-2-c-p1"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-3-2-c-p1-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.3.3" title={chapterDb["3-3-3-title"]}>
          <p>{chapterDb["3-3-3-p"]}
          </p>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_3_3_a">
              <p>{chapterDb["3-3-3-a-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-3-3-a-p-sample" />
            </li>
            <li id="sec_3_3_3_b">
              <p>{chapterDb["3-3-3-b-p1"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={7} samplePrefix="3-3-3-b-p1-sample" />
              <p>{chapterDb["3-3-3-b-p2"]}
              </p>
            </li>
            <li id="sec_3_3_3_c">
              <p>{chapterDb["3-3-3-c-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-3-3-c-p-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.3.4" title={chapterDb["3-3-4-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_3_4_a">
              <p>{chapterDb["3-3-4-a-p1"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-3-4-a-p1-sample" />
              <p>{chapterDb["3-3-4-a-p2"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-3-4-a-p2-sample" />
            </li>
            <li id="sec_3_3_4_b">
              <p>{chapterDb["3-3-4-b-p1"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="3-3-4-b-p1-sample" />
              <p>{chapterDb["3-3-4-b-p2"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="3-3-4-b-p2-sample" />
            </li>
            <li id="sec_3_3_4_c">
              <p>{chapterDb["3-3-4-c-p1"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="3-3-4-c-p1-sample" />
              <p>{chapterDb["3-3-4-c-p2"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-3-4-c-p2-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.3.5" title={chapterDb["3-3-5-title"]}>
          <p>{chapterDb["3-3-5-p1"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={9} samplePrefix="3-3-5-p1-sample" />
          <p>{chapterDb["3-3-5-p2"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={7} samplePrefix="3-3-5-p2-sample" />
        </HX>
        <HX level={3} navText="3.3.6" title={chapterDb["3-3-6-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_3_6_a">
              <p>{chapterDb["3-3-6-a-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-3-6-a-p-sample" />
            </li>
            <li id="sec_3_3_6_b">
              <p>{chapterDb["3-3-6-b-p"]}
              </p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="3-3-6-b-p-sample" />
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.3.7" title={chapterDb["3-3-7-title"]}>
          <p>{chapterDb["3-3-7-p1"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="3-3-7-p1-sample" />
          <p>{chapterDb["3-3-7-p2"]}
          </p>
          <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="3-3-7-p2-sample" />
        </HX>
        <HX level={3} navText="3.3.8" title={chapterDb["3-3-8-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_3_8_a">{chapterDb["3-3-8-a-p"]}
            </li>
            <li id="sec_3_3_8_b">{chapterDb["3-3-8-b-p"]}
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.3.9" title={chapterDb["3-3-9-title"]}>
          <p>{chapterDb["3-3-9-p"]}
          </p>
          <Table3B docLang={props.docLang}></Table3B>
        </HX>
        <HX level={3} navText="3.3.10" title={chapterDb["3-3-10-title"]}>
          <p>{chapterDb["3-3-10-p1"]}
          </p>
          <Table3C docLang={props.docLang}></Table3C>
          <p>{chapterDb["3-3-10-p2"]}
          </p>
        </HX>
        <HX level={3} navText="3.3.11" title={chapterDb["3-3-11-title"]}>
          <p>{chapterDb["3-3-11-p1"]}
          </p>
          <Table3D docLang={props.docLang}></Table3D>
          <p>{chapterDb["3-3-11-p2"]}
          </p>
        </HX>
        <HX level={3} navText="3.3.12" title={chapterDb["3-3-12-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_3_3_12_a">
              <p>{chapterDb["3-3-12-a-p"]}
              </p>
              <Table3E docLang={props.docLang}></Table3E>
            </li>
            <li id="sec_3_3_12_b">
              <p>{chapterDb["3-3-12-b-p"]}
              </p>
              <Table3F docLang={props.docLang}></Table3F>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="3.3.13" title={chapterDb["3-3-13-title"]}>
          <p>{chapterDb["3-3-13-p"]}
          </p>
          <Table3G docLang={props.docLang}></Table3G>
        </HX>
      </HX>
      <hr />
    </HX>
  </ChapterTemplate>;
};
