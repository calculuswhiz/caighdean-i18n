import { ChapterTemplate, HX, SampleBox, type SupportedLocales } from "../bodyMatter";
import { romanCount } from "../util";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { Table1A, Table1B, Table1C, Table1D, Table1E, Table1F, Table1G, Table1H, Table1I, Table1J, Table1K, Table1L, Table1M } from "./tables";
const chapterDictionaries = { en_US, ga_IE };

export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

export const Chapter1 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  return <ChapterTemplate 
    title={chapterDb["1-title"]}
    chapterNumber={1}
    docLang={props.docLang}>
    <HX level={1} navText="1" title={chapterDb["1-title"]}>
      <HX level={2} navText="1.1" title={chapterDb["1-1-title"]}>
        {([1, 2, 3, 4] as const).map(val =>
          <HX level={3} navText={`1.1.${val}`}>
            <p>{chapterDb[`1-1-${val}-p`]}</p>
          </HX>
        )}

        <HX level={3} navText="1.1.5">
          <p>{chapterDb['1-1-5-p']}</p>

          <ol className="list-[lower-alpha]">
            <li id="sec_1_1_5_a">
              <p>{chapterDb["1-1-5-a-p"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={4}
                samplePrefix="1-1-5-a-sample" />
            </li>
            <li id="sec_1_1_5_b">
              <p>{chapterDb["1-1-5-b-p"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={4}
                samplePrefix="1-1-5-b-sample" />
            </li>
            <li id="sec_1_1_5_c">
              <p>{chapterDb["1-1-5-c-p"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={6}
                samplePrefix="1-1-5-c-sample" />
            </li>
            <li id="sec_1_1_5_d">
              <p>{chapterDb["1-1-5-d-p1"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={3}
                samplePrefix="1-1-5-d-sample" />
              <p>{chapterDb["1-1-5-d-p2"]}</p>
            </li>
            <li id="sec_1_1_5_e">
              <p>{chapterDb["1-1-5-e-p1"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={3}
                samplePrefix="1-1-5-e-sample" />
              <p>{chapterDb["1-1-5-e-p2"]}</p>
              <p>{chapterDb["1-1-5-e-p3"]}</p>
            </li>
            <li id="sec_1_1_5_f">
              <p>{chapterDb["1-1-5-f-p1"]}</p>
              <p>{chapterDb["1-1-5-f-p2"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={2}
                samplePrefix="1-1-5-f-sample" />
            </li>
            <li id="sec_1_1_5_g">
              <p>{chapterDb["1-1-5-g-p1"]}</p>
              <p>{chapterDb["1-1-5-g-p2"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={5}
                samplePrefix="1-1-5-g-sample" />
              <p>{chapterDb["1-1-5-g-p3"]}</p>
            </li>
            <li id="sec_1_1_5_h">
              <p>{chapterDb["1-1-5-h-p1"]}</p>
              <ol className="list-[lower-roman]">
                {
                  romanCount(3).map(val => (
                    <li key={val} id={`sec_1_1_5_h_${val}`}>
                      {chapterDb[`1-1-5-h-${val}`]}
                    </li>
                  ))
                }
              </ol>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={3}
                samplePrefix="1-1-5-h-sample" />
            </li>
            <li id="sec_1_1_5_i">
              <p>{chapterDb["1-1-5-i-p1"]}</p>
              <ol className="list-[upper-alpha]">
                <li id="sec_1_1_5_i_A">
                  <p>{chapterDb["1-1-5-i-A-p1"]}</p>
                  <ol className="list-[lower-roman]">
                    {
                      romanCount(3).map(val => (
                        <li key={val} id={`sec_1_1_5_i_A_${val}`}>
                          {chapterDb[`1-1-5-i-A-${val}`]}
                        </li>
                      ))
                    }
                  </ol>
                  <p>{chapterDb["1-1-5-i-A-p2"]}</p>
                  <SampleBox
                    docLang={props.docLang}
                    gaDb={chapterDictionaries.ga_IE}
                    tlDb={chapterDb}
                    sampleCount={2}
                    samplePrefix="1-1-5-i-A-sample" />
                </li>
                <li id="sec_1_1_5_i_B">
                  <p>{chapterDb["1-1-5-i-B-p"]}</p>
                  <ol className="list-[lower-roman]">
                    {
                      romanCount(4).map(val => (
                        <li key={val} id={`sec_1_1_5_i_B_${val}`}>
                          {chapterDb[`1-1-5-i-B-${val}`]}
                        </li>
                      ))
                    }
                  </ol>
                </li>
                <li id="sec_1_1_5_i_C">
                  <p>{chapterDb["1-1-5-i-C-p"]}</p>
                  <SampleBox
                    docLang={props.docLang}
                    gaDb={chapterDictionaries.ga_IE}
                    tlDb={chapterDb}
                    sampleCount={2}
                    samplePrefix="1-1-5-i-C-sample" />
                </li>
              </ol>
            </li>
            <li id="sec_1_1_5_j">
              <p>{chapterDb["1-1-5-j-p"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={3}
                samplePrefix="1-1-5-j-sample" />
            </li>
            <li id="sec_1_1_5_k">
              <p>{chapterDb["1-1-5-k-p1"]}</p>
              <p>{chapterDb["1-1-5-k-p2"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={3}
                samplePrefix="1-1-5-k-sample" />
            </li>
            <li id="sec_1_1_5_l">
              <p>{chapterDb["1-1-5-l-p1"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={7}
                samplePrefix="1-1-5-l-sample" />
              <p>{chapterDb["1-1-5-l-p2"]}</p>
            </li>
            <li id="sec_1_1_5_m">
              <p>{chapterDb["1-1-5-m-p"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={2}
                samplePrefix="1-1-5-m-sample" />
            </li>
            <li id="sec_1_1_5_n">
              <p>{chapterDb["1-1-5-n-p1"]}</p>
              <SampleBox
                docLang={props.docLang}
                gaDb={chapterDictionaries.ga_IE}
                tlDb={chapterDb}
                sampleCount={3}
                samplePrefix="1-1-5-n-sample" />
              <p>{chapterDb["1-1-5-n-p2"]}</p>
            </li>
          </ol>
        </HX>
        <hr />
      </HX>

      <HX level={2} navText=".gp2-5" title={chapterDb["h2-gp-2-5-title"]}>
        <p>{chapterDb["h2-gp-2-5-p"]}</p>

        <HX level={3} navText="1.2" title={chapterDb["1-2-title"]}>
          <>{chapterDb["1-2-p1"]}</>
          <Table1A docLang={props.docLang} />
          <>{chapterDb['LenitionNote']}</>
        </HX>
        <hr />

        <HX level={3} navText="1.3" title={chapterDb["1-3-title"]}>
          {
            ([1, 2, 3] as const).map(row => (
              <HX level={4} navText={`1.3.${row}`} key={row}>
                <p>{chapterDb[`1-3-${row}-p`]}</p>
              </HX>
            ))
          }

          <HX level={4} navText="1.3.4">
            <p>{chapterDb['1-3-4-p']}</p>
            <table>
              <colgroup>
                <col className="w-2/5" />
                <col className="w-1/5" />
              </colgroup>
              <tbody>
                <tr>
                  <td>de + an</td>
                  <td>&rarr;</td>
                  <td>den</td>
                </tr>
                <tr>
                  <td>do + an</td>
                  <td>&rarr;</td>
                  <td>don</td>
                </tr>
                <tr>
                  <td>faoi + an</td>
                  <td>&rarr;</td>
                  <td>faoin</td>
                </tr>
                <tr>
                  <td>i + an</td>
                  <td>&rarr;</td>
                  <td>sa, san</td>
                </tr>
                <tr>
                  <td>ó + an</td>
                  <td>&rarr;</td>
                  <td>ón</td>
                </tr>
              </tbody>
            </table>
          </HX>

          <HX level={4} navText="1.3.5">
            <p>{chapterDb['1-3-5-p']}</p>
            <table>
              <colgroup>
                <col className="w-2/5" />
                <col className="w-1/5" />
              </colgroup>
              <tbody>
                <tr>
                  <td>fara + an</td>
                  <td>&rarr;</td>
                  <td>fairis an</td>
                </tr>
                <tr>
                  <td>le + an</td>
                  <td>&rarr;</td>
                  <td>leis an</td>
                </tr>
                <tr>
                  <td>trí + an</td>
                  <td>&rarr;</td>
                  <td>tríd an</td>
                </tr>
              </tbody>
            </table>
          </HX>
        </HX>
        <hr />

        <HX level={3} navText="1.4" title={chapterDb["1-4-title"]}>
          <HX level={4} navText="1.4.1">
            <p>{chapterDb['1-4-1-p']}</p>
            <Table1B docLang={props.docLang} />
          </HX>

          <HX level={4} navText="1.4.2">
            <p>{chapterDb['1-4-2-p']}</p>
            <Table1C docLang={props.docLang} />
          </HX>

          <HX level={4} navText="1.4.3">
            <p>{chapterDb['1-4-3-p']}</p>
            <Table1D docLang={props.docLang} />
          </HX>

          <HX level={4} navText="1.4.4">
            <p>{chapterDb['1-4-4-p']}</p>
            <Table1E docLang={props.docLang} />
            <b>N.B.</b>
            <aside>
              <p>{chapterDb['1-4-4-NB-p1']}</p>
              <ol className="list-[lower-alpha]">
                <li>{chapterDb['1-4-4-NB-a']}</li>
                <li>{chapterDb['1-4-4-NB-b']}</li>
              </ol>
            </aside>
          </HX>
        </HX>
        <hr />

        <HX level={3} navText="1.5" title={chapterDb["1-5-title"]}>
          <HX level={4} navText="1.5.1">
            <p>{chapterDb['1-5-1-p1']}</p>
            <ol className="list-[lower-alpha]">
              <li id="sec_1_5_1_a">
                <p>{chapterDb['1-5-1-a-p']}</p>
                <SampleBox
                  docLang={props.docLang}
                  gaDb={chapterDictionaries.ga_IE}
                  tlDb={chapterDb}
                  samplePrefix="1-5-1-a-sample"
                  sampleCount={2} />
              </li>
              <li id="sec_1_5_1_b">
                <p>{chapterDb['1-5-1-b-p']}</p>
                <SampleBox
                  docLang={props.docLang}
                  gaDb={chapterDictionaries.ga_IE}
                  tlDb={chapterDb}
                  samplePrefix="1-5-1-b-sample"
                  sampleCount={2} />
              </li>
              <li id="sec_1_5_1_c">
                <p>{chapterDb['1-5-1-c-p']}</p>
                <SampleBox
                  docLang={props.docLang}
                  gaDb={chapterDictionaries.ga_IE}
                  tlDb={chapterDb}
                  samplePrefix="1-5-1-c-sample"
                  sampleCount={2} />
              </li>
              <li id="sec_1_5_1_d">
                <p>{chapterDb['1-5-1-d-p']}</p>
                <SampleBox
                  docLang={props.docLang}
                  gaDb={chapterDictionaries.ga_IE}
                  tlDb={chapterDb}
                  samplePrefix="1-5-1-d-sample"
                  sampleCount={2} />
              </li>
              <li id="sec_1_5_1_e">
                <p>{chapterDb['1-5-1-e-p']}</p>
                <SampleBox
                  docLang={props.docLang}
                  gaDb={chapterDictionaries.ga_IE}
                  tlDb={chapterDb}
                  samplePrefix="1-5-1-e-sample"
                  sampleCount={2} />
              </li>
            </ol>
          </HX>
          <p>{chapterDb['1-5-1-p2']}</p>

          <HX level={4} navText="1.5.2">
            <p>{chapterDb['1-5-2-p']}</p>
            <Table1F docLang={props.docLang} />
            <p>{chapterDb['LenitionNote']}</p>
          </HX>
        </HX>
      </HX>

      <hr />

      <HX level={2} navText="1.6" title={chapterDb["1-6-title"]}>
        <>{chapterDb['1-6-p']}</>

        <HX level={3} navText="1.6.1" title={chapterDb["1-6-1-title"]}>
          <p>{chapterDb['1-6-1-p1']}</p>
          <Table1G docLang={props.docLang} />
        </HX>

        <HX level={3} navText="1.6.2" title={chapterDb["1-6-2-title"]}>
          <p>{chapterDb['1-6-2-p1']}</p>
          <Table1H docLang={props.docLang} />
        </HX>

        <HX level={3} navText="1.6.3" title={chapterDb["1-6-3-title"]}>
          <p>{chapterDb['1-6-3-p']}</p>
          <Table1I docLang={props.docLang} />
          <p>{chapterDb['EclipsisNote']}</p>
        </HX>
      </HX>

      <hr />

      <HX level={2} navText="1.7" title={chapterDb["1-7-title"]}>
        <HX level={3} navText="1.7.1">
          <p>{chapterDb['1-7-1-p']}</p>
        </HX>

        <HX level={3} navText="1.7.2">
          <p>{chapterDb['1-7-2-p']}</p>
        </HX>

        <HX level={3} navText="1.7.3">
          <p>{chapterDb['1-7-3-p']}</p>
          <Table1J docLang={props.docLang} />
        </HX>

        <HX level={3} navText="1.7.4">
          <p>{chapterDb['1-7-4-p']}</p>
          <Table1K docLang={props.docLang} />
        </HX>

        <HX level={3} navText="1.7.5">
          <p>{chapterDb['1-7-5-p']}</p>
          <Table1L docLang={props.docLang} />
        </HX>

        <HX level={3} navText="1.7.6">
          <p>{chapterDb['1-7-6-p']}</p>
          <Table1M docLang={props.docLang} />
        </HX>
      </HX>
      <hr />
    </HX>
  </ChapterTemplate>;
};
