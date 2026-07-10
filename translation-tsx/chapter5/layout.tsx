import { ChapterTemplate, HX, InlineTl, SampleBox, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { Table5A, Table5B, Table5C, Table5D, Table5E, Table5F, Table5G, Table5H, Table5I, Table5J, Table5K, Table5L, Table5M, Table5N, Table5O, Table5P, Table5Q, Table5R, Table5S, Table5T, Table5U, Table5V, Table5W, Table5X, Table5Y, Table5Z, Table5AA, Table5BB, Table5CC, Table5DD, Table5EE, Table5FF } from "./tables";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter5 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);

  return <ChapterTemplate
    title={chapterDb["5-title"]}
    chapterNumber={5}
    docLang={props.docLang}>
    <HX level={1} navText="5" title={chapterDb["5-title"]}>
      <HX level={2} navText="5.1" title={chapterDb["5-1-title"]}>
        <HX level={3} navText="5.1.1">
          <p>{chapterDb["5-1-1-p"]}</p>
        </HX>
        <HX level={3} navText="5.1.2">
          <p>{chapterDb["5-1-2-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_5_1_2_a">{chapterDb["5-1-2-a-p"]}</li>
            <li id="sec_5_1_2_b">{chapterDb["5-1-2-b-p"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="5.1.3">
          <p>{chapterDb["5-1-3-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_5_1_3_a">{chapterDb["5-1-3-a-p"]}</li>
            <li id="sec_5_1_3_b">{chapterDb["5-1-3-b-p"]}</li>
            <li id="sec_5_1_3_c">{chapterDb["5-1-3-c-p"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="5.1.4">
          <p>{chapterDb["5-1-4-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_5_1_4_a">{chapterDb["5-1-4-a-p"]}</li>
            <li id="sec_5_1_4_b">{chapterDb["5-1-4-b-p"]}</li>
          </ol>
        </HX>
        <HX level={3} navText="5.1.5" title={chapterDb["5-1-5-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_5_1_5_a">
              <p>{chapterDb["5-1-5-a-p"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_5_1_5_a_i">{chapterDb["5-1-5-a-i-p"]}</li>
                <li id="sec_5_1_5_a_ii">{chapterDb["5-1-5-a-ii-p"]}</li>
                <li id="sec_5_1_5_a_iii">{chapterDb["5-1-5-a-iii-p"]}</li>
              </ol>
            </li>
            <li id="sec_5_1_5_b">
              <p>&nbsp;</p>
              <ol className="list-[lower-roman]">
                <li id="sec_5_1_5_b_i">{chapterDb["5-1-5-b-i-p"]}</li>
                <li id="sec_5_1_5_b_ii">{chapterDb["5-1-5-b-ii-p"]}</li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="5.1.6" title={chapterDb["5-1-6-title"]}>
          <p>{chapterDb["5-1-6-p"]}</p>
        </HX>
        <HX level={3} navText="5.1.7" title={chapterDb["5-1-7-title"]}>
          <p>{chapterDb["5-1-7-p"]}</p>
        </HX>
        <HX level={3} navText="5.1.8" title={chapterDb["5-1-8-title"]}>
          <p>{chapterDb["5-1-8-p"]}</p>
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["5-1-8-note"]}
          </aside>
        </HX>
        <HX level={3} navText="5.1.9" title={chapterDb["5-1-9-title"]}>
          <p>{chapterDb["5-1-9-p"]}</p>
        </HX>
        <HX level={3} navText="5.1.10" title={chapterDb["5-1-10-title"]}>
          <p>{chapterDb["5-1-10-p"]}</p>
          <Table5A docLang={props.docLang} />
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="5.2" title={chapterDb["5-2-title"]}>
        <HX level={3} navText="5.2.1" title={chapterDb["5-2-1-title"]}>
          <Table5B docLang={props.docLang} />
          <Table5C docLang={props.docLang} />
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["Table5C-Note"]}
          </aside>
          <ol className="list-[lower-alpha]">
            <li id="sec_5_2_1_a">{chapterDb["5-2-1-a-p"]}</li>
            <li id="sec_5_2_1_b">
              <p>{chapterDb["5-2-1-b-p"]}</p>
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan={2}>{chapterDb["5-2-1-b-Table-col1"]}
                    </th>
                    <th colSpan={2}>{chapterDb["5-2-1-b-Table-col2"]}
                    </th>
                  </tr>
                  <tr>
                    <th className="bg-stone-300 text-black"></th>
                    <th className="bg-stone-300 text-black">-t(h) + t-</th>
                    <th className="bg-stone-300 text-black">-t-</th>
                    <th className="bg-stone-300 text-black">-t(h) + t-</th>
                    <th className="bg-stone-300 text-black">-t-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="font-bold" rowSpan={2}>{chapterDb["PresentTense"]}
                    </th>
                    <td>at + tar</td>
                    <td>atar</td>
                    <td>loit + tear</td>
                    <td>loitear</td>
                  </tr>
                  <tr>
                    <td>leath + tar</td>
                    <td>leatar</td>
                    <td>caith + tear</td>
                    <td>caitear</td>
                  </tr>
                  <tr>
                    <th className="font-bold" rowSpan={2}>{chapterDb["PastHabitualTense"]}
                    </th>
                    <td>d&#8217;at + taí</td>
                    <td>d&#8217;ataí</td>
                    <td>loit + tí</td>
                    <td>loití</td>
                  </tr>
                  <tr>
                    <td>leath + taí</td>
                    <td>leataí</td>
                    <td>caith + tí</td>
                    <td>chaití</td>
                  </tr>
                  <tr>
                    <th className="font-bold" rowSpan={2}>{chapterDb["VerbalAdjective"]}
                    </th>
                    <td>at + ta</td>
                    <td>ata</td>
                    <td>loit + te</td>
                    <td>loite</td>
                  </tr>
                  <tr>
                    <td>leath + ta</td>
                    <td>leata</td>
                    <td>caith + te</td>
                    <td>caite</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_5_2_1_c">
              <p>{chapterDb["5-2-1-c-p"]}</p>
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan={2}>{chapterDb["EndsWith"]}&nbsp;<i>-bh</i>
                    </th>
                    <th colSpan={2}>{chapterDb["EndsWith"]}&nbsp;<i>-mh</i>
                    </th>
                  </tr>
                  <tr>
                    <th className="bg-stone-300 text-black"></th>
                    <th className="bg-stone-300 text-black">-bh + th-</th>
                    <th className="bg-stone-300 text-black">-f-</th>
                    <th className="bg-stone-300 text-black">-mh + th-</th>
                    <th className="bg-stone-300 text-black">-f-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="font-bold" rowSpan={2}>{chapterDb["VerbalNoun"]}
                    </th>
                    <td>gabh + tha</td>
                    <td>gafa</td>
                    <td>ríomh + tha</td>
                    <td>ríofa</td>
                  </tr>
                  <tr>
                    <td>scríobh + tha</td>
                    <td>scríofa</td>
                    <td>promh + tha</td>
                    <td>profa</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_5_2_1_d">
              <p>{chapterDb["5-2-1-d-p"]}</p>
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan={2}>{chapterDb["EndsWith"]}&nbsp;<i>-bh</i>
                    </th>
                    <th colSpan={2}>{chapterDb["EndsWith"]}&nbsp;<i>-mh</i>
                    </th>
                    <th colSpan={2}>{chapterDb["EndsWith"]}&nbsp;<i>-th</i>
                    </th>
                  </tr>
                  <tr>
                    <th className="bg-stone-300 text-black"></th>
                    <th className="bg-stone-300 text-black">-bh + f-</th>
                    <th className="bg-stone-300 text-black">-bhf-</th>
                    <th className="bg-stone-300 text-black">-mh + f-</th>
                    <th className="bg-stone-300 text-black">-mhf-</th>
                    <th className="bg-stone-300 text-black">-th + f-</th>
                    <th className="bg-stone-300 text-black">-thf-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="font-bold">{chapterDb["ConditionalMood"]}
                    </th>
                    <td>scríobh + fá</td>
                    <td>scríobhfá</td>
                    <td>ríomh + fá</td>
                    <td>ríomhfá</td>
                    <td>chaith + fí</td>
                    <td>chaithfí</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="5.2.2" title={chapterDb["5-2-2-title"]}>
          <Table5D docLang={props.docLang} />
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["Table5D-note"]}
          </aside>
          <Table5E docLang={props.docLang} />
          <ol className="list-[lower-alpha]">
            <li id="sec_5_2_2_a">{chapterDb["5-2-2-a-p"]}
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th>{chapterDb["5-2-2-tables-col1"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col2"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col3"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col4"]}
                    </th>
                    {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>bácáil</td>
                    <td>bácálaim</td>
                    <td>bácáil</td>
                    <td>bácáilte</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-bácáil"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>cóipeáil</td>
                    <td>cóipeálaim</td>
                    <td>cóipeáil</td>
                    <td>cóipeáilte</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-cóipeáil"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>nótáil</td>
                    <td>nótálaim</td>
                    <td>nótáil</td>
                    <td>nótáilte</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-nótáil"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>péinteáil</td>
                    <td>péinteálaim</td>
                    <td>péinteáil</td>
                    <td>péinteáilte</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-péinteáil"]}</InlineTl></td>}
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_5_2_2_b">{chapterDb["5-2-2-b-p"]}
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th>{chapterDb["5-2-2-tables-col1"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col2"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col3"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col4"]}
                    </th>
                    {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>adhair</td>
                    <td>adhraim</td>
                    <td>adhradh</td>
                    <td>adhartha</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-adhair"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>adhlaic</td>
                    <td>adhlacaim</td>
                    <td>adhlacadh</td>
                    <td>adhlactha</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-adhlaic"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>ceiliúir</td>
                    <td>ceiliúraim</td>
                    <td>ceiliúradh</td>
                    <td>ceiliúrtha</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-ceiliúir"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>seachaid</td>
                    <td>seachadaim</td>
                    <td>seachadadh</td>
                    <td>seachadta</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-seachaid"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>tionóil</td>
                    <td>tionólaim</td>
                    <td>tionól</td>
                    <td>tionólta</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-tionóil"]}</InlineTl></td>}
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_5_2_2_c">{chapterDb["5-2-2-c-p"]}
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th>{chapterDb["5-2-2-tables-col1"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col2"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col3"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col4"]}
                    </th>
                    {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>toirmisc</td>
                    <td>toirmiscim</td>
                    <td>toirmeasc</td>
                    <td>toirmiscthe</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-toirmisc"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>tiomáin</td>
                    <td>tiomáinim</td>
                    <td>tiomáint</td>
                    <td>tiomáinte</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-tiomáin"]}</InlineTl></td>}
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_5_2_2_d">{chapterDb["5-2-2-d-p"]}
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th>{chapterDb["5-2-2-tables-col1"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col2"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col3"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col4"]}
                    </th>
                    {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>coimeád</td>
                    <td>coimeádaim</td>
                    <td>coimeád</td>
                    <td>coimeádta</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-coimeád"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>gearán</td>
                    <td>gearánaim</td>
                    <td>gearán</td>
                    <td>gearánta</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-gearán"]}</InlineTl></td>}
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["5-2-2-note"]}
          </aside>
        </HX>
        <HX level={3} navText="5.2.3" title={chapterDb["5-2-3-title"]}>
          <ol className="list-[upper-alpha]">
            <li id="sec_5_2_3_A">
              <p><b>Cráigh</b>, <b>dóigh</b></p>
              <Table5F docLang={props.docLang} />
              <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["Table5F-note"]}
              </aside>
              <Table5G docLang={props.docLang} />
              <ol className="list-[lower-alpha]">
                <li id="sec_5_2_3_A_a">
                  <p>{chapterDb["5-2-3-A-a-p"]}</p>
                  <table className="chapter-5">
                    <thead>
                      <tr>
                        <th>{chapterDb["5-2-2-tables-col1"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col2"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col3"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col4"]}
                        </th>
                        {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>báigh</td>
                        <td>báim</td>
                        <td>bá</td>
                        <td>báite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-báigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>cneáigh</td>
                        <td>cneáim</td>
                        <td>cneá</td>
                        <td>cneáite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-cneáigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>meáigh</td>
                        <td>meáim</td>
                        <td>meá</td>
                        <td>meáite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-meáigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>leáigh</td>
                        <td>leáim</td>
                        <td>leá</td>
                        <td>leáite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-leáigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>clóigh</td>
                        <td>clóim</td>
                        <td>cló</td>
                        <td>clóite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-clóigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>breoigh</td>
                        <td>breoim</td>
                        <td>breo</td>
                        <td>breoite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-breoigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>dreoigh</td>
                        <td>dreoim</td>
                        <td>dreo</td>
                        <td>dreoite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-dreoigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>feoigh</td>
                        <td>feoim</td>
                        <td>feo</td>
                        <td>feoite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-feoigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>reoigh</td>
                        <td>reoim</td>
                        <td>reo</td>
                        <td>reoite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-reoigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>brúigh</td>
                        <td>brúim</td>
                        <td>brú</td>
                        <td>brúite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-brúigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>crúigh</td>
                        <td>crúim</td>
                        <td>crú</td>
                        <td>crúite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-crúigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>liúigh</td>
                        <td>liúim</td>
                        <td>liú</td>
                        <td>liúite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-liúigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>súigh</td>
                        <td>súim</td>
                        <td>sú</td>
                        <td>súite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-súigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>luaigh</td>
                        <td>luaim</td>
                        <td>lua</td>
                        <td>luaite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-luaigh"]}</InlineTl></td>}
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li id="sec_5_2_3_A_b">
                  <p>{chapterDb["5-2-3-A-b-p"]}</p>
                  <table className="chapter-5">
                    <thead>
                      <tr>
                        <th>{chapterDb["5-2-2-tables-col1"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col2"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col3"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col4"]}
                        </th>
                        {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>beoigh</td>
                        <td>beoim</td>
                        <td>beochan</td>
                        <td>beoite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-beoigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>buaigh</td>
                        <td>buaim</td>
                        <td>buachan</td>
                        <td>buaite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-buaigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>cruaigh</td>
                        <td>cruaim</td>
                        <td>cruachan</td>
                        <td>cruaite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-cruaigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>fuaigh</td>
                        <td>fuaim</td>
                        <td>fuáil</td>
                        <td>fuaite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-fuaigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>glaoigh</td>
                        <td>glaoim</td>
                        <td>glaoch</td>
                        <td>glaoite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-glaoigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>iaigh</td>
                        <td>iaim</td>
                        <td>iamh</td>
                        <td>iata</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-iaigh"]}</InlineTl></td>}
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ol>
            </li>
            <li id="sec_5_2_3_B">
              <p><b>Léigh</b>, <b>nigh</b> </p>
              <p>{chapterDb["5-2-3-B-p"]}</p>
              <Table5H docLang={props.docLang} />
              <Table5I docLang={props.docLang} />
              <ol className="list-[lower-alpha]">
                <li id="sec_5_2_3_B_a">
                  <p>{chapterDb["5-2-3-B-a-p"]}</p>
                  <table className="chapter-5">
                    <thead>
                      <tr>
                        <th>{chapterDb["5-2-2-tables-col1"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col2"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col3"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col4"]}
                        </th>
                        {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>éigh</td>
                        <td>éim</td>
                        <td>éamh</td>
                        <td>éite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-éigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>téigh ({commonDb["saBhrí"]} <i>teas</i>)</td>
                        <td>téim</td>
                        <td>téamh</td>
                        <td>téite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-téigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>pléigh</td>
                        <td>pléim</td>
                        <td>plé</td>
                        <td>pléite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-pléigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>spréigh</td>
                        <td>spréim</td>
                        <td>spré</td>
                        <td>spréite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-spréigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>caígh</td>
                        <td>caím</td>
                        <td>caí</td>
                        <td>caíte</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-caígh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>cloígh</td>
                        <td>cloím</td>
                        <td>cloí</td>
                        <td>cloíte</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-cloígh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>cnaígh</td>
                        <td>cnaím</td>
                        <td>cnaí</td>
                        <td>cnaíte</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-cnaígh"]}</InlineTl></td>}
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li id="sec_5_2_3_B_b">
                  <p>{chapterDb["5-2-3-B-b-p"]}</p>
                  <table className="chapter-5">
                    <thead>
                      <tr>
                        <th>{chapterDb["5-2-2-tables-col1"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col2"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col3"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col4"]}
                        </th>
                        {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>dligh</td>
                        <td>dlím</td>
                        <td>dlí</td>
                        <td>dlite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-dligh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>figh</td>
                        <td>fím</td>
                        <td>fí</td>
                        <td>fite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-figh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>guigh</td>
                        <td>guím</td>
                        <td>guí</td>
                        <td>guite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-guigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>ligh</td>
                        <td>lím</td>
                        <td>lí</td>
                        <td>lite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-ligh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>luigh</td>
                        <td>luím</td>
                        <td>luí</td>
                        <td>luite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-luigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>snigh</td>
                        <td>sním</td>
                        <td>sní</td>
                        <td>snite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-snigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>snoigh</td>
                        <td>snoím</td>
                        <td>snoí</td>
                        <td>snoite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-snoigh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>suigh</td>
                        <td>suím</td>
                        <td>suí</td>
                        <td>suite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-suigh"]}</InlineTl></td>}
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li id="sec_5_2_3_B_c">
                  <p>{chapterDb["5-2-3-B-c-p"]}</p>
                  <table className="chapter-5">
                    <thead>
                      <tr>
                        <th>{chapterDb["5-2-2-tables-col1"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col2"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col3"]}
                        </th>
                        <th>{chapterDb["5-2-2-tables-col4"]}
                        </th>
                        {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>bligh</td>
                        <td>blím</td>
                        <td>bleán</td>
                        <td>blite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-bligh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>buígh</td>
                        <td>buím</td>
                        <td>buíochan</td>
                        <td>buíte</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-buígh"]}</InlineTl></td>}
                      </tr>
                      <tr>
                        <td>righ</td>
                        <td>rím</td>
                        <td>ríochan</td>
                        <td>rite</td>
                        {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-righ"]}</InlineTl></td>}
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ol>
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="5.3" title={chapterDb["5-3-title"]}>
        <HX level={3} navText="5.3.1" title={chapterDb["5-3-1-title"]}>
          <Table5J docLang={props.docLang} />
          <Table5K docLang={props.docLang} />
          <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["5-3-1-note"]}
          </aside>
        </HX>
        <HX level={3} navText="5.3.2" title={chapterDb["5-3-2-title"]}>
          <Table5L docLang={props.docLang} />
          <Table5M docLang={props.docLang} />
          <ol className="list-[lower-alpha]">
            <li id="sec_5_3_2_a">
              <p>{chapterDb["5-3-2-a-p"]}</p>
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th>{chapterDb["5-2-2-tables-col1"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col2"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col3"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col4"]}
                    </th>
                    {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>codail</td>
                    <td>codlaím</td>
                    <td>codladh</td>
                    <td>codalta</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-codail"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>fógair</td>
                    <td>fógraím</td>
                    <td>fógairt</td>
                    <td>fógartha</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-fógair"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>labhair</td>
                    <td>labhraím</td>
                    <td>labhairt</td>
                    <td>labhartha</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-labhair"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>oscail</td>
                    <td>osclaím</td>
                    <td>oscailt</td>
                    <td>oscailte</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-oscail"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>tionscain</td>
                    <td>tionscnaím</td>
                    <td>tionscnamh</td>
                    <td>tionscanta</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-tionscain"]}</InlineTl></td>}
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_5_3_2_b">
              <p>{chapterDb["5-3-2-b-p"]}</p>
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th>{chapterDb["5-2-2-tables-col1"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col2"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col3"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col4"]}
                    </th>
                    {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>aithin</td>
                    <td>aithním</td>
                    <td>aithint</td>
                    <td>aitheanta</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-aithin"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>eitil</td>
                    <td>eitlím</td>
                    <td>eitilt</td>
                    <td>eitilte</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-eitil"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>imir</td>
                    <td>imrím</td>
                    <td>imirt</td>
                    <td>imeartha</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-imir"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>inis</td>
                    <td>insím</td>
                    <td>insint</td>
                    <td>inste</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-inis"]}</InlineTl></td>}
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="5.3.3" title={chapterDb["5-3-3-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_5_3_3_a">
              <p>{chapterDb["5-3-3-a-p"]}</p>
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th>{chapterDb["5-2-2-tables-col1"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col2"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col3"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col4"]}
                    </th>
                    {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>foghlaim</td>
                    <td>foghlaimím</td>
                    <td>foghlaim</td>
                    <td>foghlamtha</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-foghlaim"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>fulaing</td>
                    <td>fulaingím</td>
                    <td>fulaingt</td>
                    <td>fulaingthe</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-fulaing"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>tarraing</td>
                    <td>tarraingím</td>
                    <td>tarraingt</td>
                    <td>tarraingthe</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-tarraing"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>tuirling</td>
                    <td>tuirlingím</td>
                    <td>tuirlingt</td>
                    <td>tuirlingthe</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-tuirling"]}</InlineTl></td>}
                  </tr>
                </tbody>
              </table>
            </li>
            <li id="sec_5_3_3_b">
              <p>{chapterDb["5-3-3-b-p"]}</p>
              <table className="chapter-5">
                <thead>
                  <tr>
                    <th>{chapterDb["5-2-2-tables-col1"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col2"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col3"]}
                    </th>
                    <th>{chapterDb["5-2-2-tables-col4"]}
                    </th>
                    {props.docLang !== "ga_IE" && <th>{commonDb["SaBhrí-title"]}</th>}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>aithris</td>
                    <td>aithrisím</td>
                    <td>aithris</td>
                    <td>aithriste</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-aithris"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>freastail</td>
                    <td>freastalaím</td>
                    <td>freastal</td>
                    <td>freastalta</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-freastail"]}</InlineTl></td>}
                  </tr>
                  <tr>
                    <td>taistil</td>
                    <td>taistealaím</td>
                    <td>taisteal</td>
                    <td>taistealta</td>
                    {props.docLang !== "ga_IE" && <td><InlineTl lang={props.docLang}>{chapterDb["briathar-taistil"]}</InlineTl></td>}
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="5.4" title={chapterDb["5-4-title"]}>
        <HX level={3} navText="5.4.1">
          <p>{chapterDb["5-4-1-p"]}</p>
        </HX>
        <HX level={3} navText="5.4.2">
          <p>{chapterDb["5-4-2-p"]}</p>
        </HX>
        <HX level={3} navText="5.4.3">
          <p>{chapterDb["5-4-3-p"]}</p>
        </HX>
        <HX level={3} navText="5.4.4">
          <p>{chapterDb["5-4-4-p"]}</p>
        </HX>
        <HX level={3} navText="5.4.5" title={chapterDb["5-4-5-title"]}>
          <p>{chapterDb["5-4-5-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_5_4_5_a">
              <p>{chapterDb["5-4-5-a-p"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={5} samplePrefix="5-4-5-SampleBox-" />
              <p>{chapterDb["5-4-5-a-p2"]}</p>
              <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={5} samplePrefix="5-4-5-SampleBox2-" />
            </li>
            <li id="sec_5_4_5_b">
              <p>{chapterDb["5-4-5-b-p"]}</p>
            </li>
            <li id="sec_5_4_5_c">
              <p>{chapterDb["5-4-5-c-p"]}</p>
            </li>
          </ol>
        </HX>
        <Table5N docLang={props.docLang} />

        <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["Table5N-Note"]}
        </aside>
        <Table5O docLang={props.docLang} />

        <Table5P docLang={props.docLang} />

        <p>*{chapterDb["Table5P-footnote"]}</p>
        <Table5Q docLang={props.docLang} />

        <Table5R docLang={props.docLang} />

        <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["Table5R-Note"]}
        </aside>
        <Table5S docLang={props.docLang} />

        <Table5T docLang={props.docLang} />

        <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["Table5T-Note"]}
        </aside>
        <Table5U docLang={props.docLang} />

        <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["Table5U-Note"]}
        </aside>
        <Table5V docLang={props.docLang} />

        <Table5W docLang={props.docLang} />

        <Table5X docLang={props.docLang} />

      </HX>
      <hr />
      <HX level={2} navText="5.5" title={chapterDb["5-5-title"]}>
        <HX level={3} navText="5.5.1" title={chapterDb["5-5-1-title"]}>
          <p>{chapterDb["5-5-1-p"]}</p>
          <Table5Y docLang={props.docLang} />

        </HX>
        <HX level={3} navText="5.5.2" title={chapterDb["5-5-2-title"]}>
          <p>{chapterDb["5-5-2-p"]}</p>
          <Table5Z docLang={props.docLang} />

        </HX>
      </HX>
      <hr />
      <HX level={2} navText="5.6" title={chapterDb["5-6-title"]}>
        <HX level={3} navText="5.6.1" title={chapterDb["5-6-1-title"]}>
          <ol className="list-[lower-alpha]">
            <li id="sec_5_6_1_a">
              <p>{chapterDb["5-6-1-a-p"]}</p>
              <Table5AA docLang={props.docLang} />

              <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["Table5AA-Note"]}
              </aside>
            </li>
            <li id="sec_5_6_1_b">
              <p>{chapterDb["5-6-1-b-p"]}</p>
              <ol className="list-[lower-roman]">
                <li id="sec_5_6_1_b_i">
                  <p>{chapterDb["5-6-1-b-i-p"]}</p>
                  <Table5BB docLang={props.docLang} />

                </li>
                <li id="sec_5_6_1_b_ii">
                  <p>{chapterDb["5-6-1-b-ii-p"]}</p>
                  <Table5CC docLang={props.docLang} />

                  <aside><b>{commonDb["Nóta"]}</b>: {chapterDb["Table5CC-Note"]}
                  </aside>
                </li>
                <li id="sec_5_6_1_b_iii">
                  <p>{chapterDb["5-6-1-b-iii-p"]}</p>
                  <Table5DD docLang={props.docLang} />

                </li>
              </ol>
            </li>
            <li id="sec_5_6_1_c">
              <p>{chapterDb["5-6-1-c-p"]}</p>
              <Table5EE docLang={props.docLang} />

              <ol className="list-[lower-roman]">
                <li id="sec_5_6_1_c_i">{chapterDb["5-6-1-c-i-p"]}</li>
                <li id="sec_5_6_1_c_ii">
                  <p>{chapterDb["5-6-1-c-ii-p"]}</p>
                  <Table5FF docLang={props.docLang} />

                </li>
              </ol>
            </li>
          </ol>
        </HX>
        <HX level={3} navText="5.6.2" title={chapterDb["5-6-2-title"]}>
          <p>{chapterDb["5-6-2-p"]}</p>
          <ol className="list-[lower-alpha]">
            <li id="sec_5_6_2_a">{chapterDb["5-6-2-a-p"]}</li>
            <li id="sec_5_6_2_b">{chapterDb["5-6-2-b-p"]}</li>
            <li id="sec_5_6_2_c">{chapterDb["5-6-2-c-p"]}</li>
            <li id="sec_5_6_2_d">{chapterDb["5-6-2-d-p"]}</li>
            <li id="sec_5_6_2_e">{chapterDb["5-6-2-e-p"]}</li>
          </ol>
        </HX>
      </HX>
      <hr />
      <HX level={2} navText="5.7" title={chapterDb["5-7-title"]}>
        <HX level={3} navText="5.7.1" title={chapterDb["5-7-1-title"]}>
          <p>{chapterDb["5-7-1-p"]}</p>
        </HX>
      </HX>
      <hr />
    </HX>
  </ChapterTemplate>;
};
