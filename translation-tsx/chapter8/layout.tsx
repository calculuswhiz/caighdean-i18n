import { ChapterTemplate, HX, SampleBox, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";
import { Table8A, Table8B, Table8C, Table8D, Table8E, Table8F } from "./tables";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const Chapter8 = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);
  const commonDb = getCommonTranslator(props.docLang);
  
  return <ChapterTemplate
    title={chapterDb["8-title"]}
    chapterNumber={8}
    docLang={props.docLang}>
      <HX level={1} navText="8" title={chapterDb["8-title"]}>
    <HX level={2} navText="8.1" title={chapterDb["8-1-title"]}>
      <HX level={3} navText="8.1.1">
        <p>{chapterDb["8-1-1-p"]}</p>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="8.2" title={chapterDb["8-2-title"]}>
      <HX level={3} navText="8.2.1">
        <p>{chapterDb["8-2-1-p"]}</p>
        <Table8A docLang={props.docLang}/>
        
      </HX>
      <HX level={3} navText="8.2.2">
        <p>{chapterDb["8-2-2-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={6} samplePrefix="8-2-2-sample"/>
      </HX>
      <HX level={3} navText="8.2.3">
        <p>{chapterDb["8-2-3-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={5} samplePrefix="8-2-3-sample"/>
      </HX>
      <HX level={3} navText="8.2.4">
        <p>{chapterDb["8-2-4-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="8-2-4-sample"/>
      </HX>
      <HX level={3} navText="8.2.5">
        <p>{chapterDb["8-2-5-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={12} samplePrefix="8-2-5-sample"/>
      </HX>
      <HX level={3} navText="8.2.6">
        <p>{chapterDb["8-2-6-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={5} samplePrefix="8-2-6-sample"/>
      </HX>
      <HX level={3} navText="8.2.7">
        <p>{chapterDb["8-2-7-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="8-2-7-sample"/>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="8.3" title={chapterDb["8-3-title"]}>
      <HX level={3} navText="8.3.1">
        <p>{chapterDb["8-3-1-p"]}</p>
        <Table8B docLang={props.docLang}/>
        
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="8-3-1-sample"/>
      </HX>
      <HX level={3} navText="8.3.2">
        <p>{chapterDb["8-3-2-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="8-3-2-sample"/>
      </HX>
      <HX level={3} navText="8.3.3">
        <p>{chapterDb["8-3-3-p"]}</p>
        <Table8C docLang={props.docLang}/>
        
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="8-3-3-sample"/>
      </HX>
      <HX level={3} navText="8.3.4">
        <p>{chapterDb["8-3-4-p"]}</p>
        <ol className="list-[lower-alpha]">
          <li id="sec_8_3_4_a">{chapterDb["8-3-4-a-p"]}
          </li>
          <li id="sec_8_3_4_b">{chapterDb["8-3-4-b-p"]}
          </li>
        </ol>
        <Table8D docLang={props.docLang}/>
        
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={8} samplePrefix="8-3-4-sample"/>
      </HX>
      <HX level={3} navText="8.3.5">
        <p>{chapterDb["8-3-5-p"]}</p>
        <Table8E docLang={props.docLang}/>
        
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="8-3-5-sample"/>
      </HX>
      <HX level={3} navText="8.3.6">
        <p>{chapterDb["8-3-6-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={8} samplePrefix="8-3-6-sample"/>
      </HX>
      <HX level={3} navText="8.3.7">
        <p>{chapterDb["8-3-7-p"]}</p>
        <table className="samplebox">
          <colgroup> 
            <col className="w-1/3"/>
            <col className="w-1/3"/>
            <col className="w-1/3"/>
          </colgroup>
          <tbody>
            <tr>
              <td className="font-bold">de + a</td>
              <td className="font-bold">&rarr;</td>
              <td className="font-bold">dá</td>
            </tr>
            <tr>
              <td className="font-bold">do + a</td>
              <td className="font-bold">&rarr;</td>
              <td className="font-bold">dá</td>
            </tr>
            <tr>
              <td className="font-bold">de + ár</td>
              <td className="font-bold">&rarr;</td>
              <td className="font-bold">dár</td>
            </tr>
            <tr>
              <td className="font-bold">do + ár</td>
              <td className="font-bold">&rarr;</td>
              <td className="font-bold">dár</td>
            </tr>
          </tbody>
        </table>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={8} samplePrefix="8-3-7-sample"/>
      </HX>
      <HX level={3} navText="8.3.8">
        <p>{chapterDb["8-3-8-p"]}</p>
        <ol className="list-[lower-alpha]">
          <li id="sec_8_3_8_a">
            <p>{chapterDb["8-3-8-a-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="8-3-8-a-sample"/>
          </li>
          <li id="sec_8_3_8_b">
            <p>{chapterDb["8-3-8-b-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="8-3-8-b-sample"/>
          </li>
          <li id="sec_8_3_8_c">
            <p>{chapterDb["8-3-8-c-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="8-3-8-c-sample"/>
          </li>
          <li id="sec_8_3_8_d">
            <p>{chapterDb["8-3-8-d-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="8-3-8-d-sample"/>
          </li>
          <li id="sec_8_3_8_e">
            <p>{chapterDb["8-3-8-e-p"]}</p>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={2} samplePrefix="8-3-8-e-sample"/>
            <aside>
              <p><b>{commonDb["Nóta"]}</b>: {chapterDb["8-3-8-e-note"]}</p>
            </aside>
            <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="8-3-8-e-sample" startAt={3}/>
          </li>
        </ol>
      </HX>
      <HX level={3} navText="8.3.9">
        <p>{chapterDb["8-3-9-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="8-3-9-sample"/>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="8.4" title={chapterDb["8-4-title"]}>
      <Table8F docLang={props.docLang}/>
      {chapterDb["8-4-p"]}
      <ol className="list-[lower-alpha]">
        <li id="sec_8_4_a">{chapterDb["8-4-a-p"]}
        </li>
        <li id="sec_8_4_b">{chapterDb["8-4-b-p"]}
        </li>
      </ol>
    </HX>
    <hr/>
    <HX level={2} navText="8.5" title={chapterDb["8-5-title"]}>
      <HX level={3} navText="8.5.1">
        <p>{chapterDb["8-5-1-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={8} samplePrefix="8-5-1-sample"/>
      </HX>
      <HX level={3} navText="8.5.2">
        <p>{chapterDb["8-5-2-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="8-5-2-sample"/>
      </HX>
      <HX level={3} navText="8.5.3">
        <p>{chapterDb["8-5-3-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="8-5-3-sample"/>
      </HX>
      <HX level={3} navText="8.5.4">
        <p>{chapterDb["8-5-4-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={8} samplePrefix="8-5-4-sample"/>
      </HX>
      <HX level={3} navText="8.5.5">
        <p>{chapterDb["8-5-5-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={3} samplePrefix="8-5-5-sample"/>
      </HX>
    </HX>
    <hr/>
    <HX level={2} navText="8.6" title={chapterDb["8-6-title"]}>
      <HX level={3} navText="8.6.1">
        <p>{chapterDb["8-6-1-p"]}</p>
        <ol className="list-[lower-alpha]">
          <li id="sec_8_6_1_a">{chapterDb["8-6-1-a-p"]}
          </li>
          <li id="sec_8_6_1_b">{chapterDb["8-6-1-b-p"]}
          </li>
          <li id="sec_8_6_1_c">{chapterDb["8-6-1-c-p"]}
          </li>
          <li id="sec_8_6_1_d">{chapterDb["8-6-1-d-p"]}
          </li>
        </ol>
      </HX>
      <HX level={3} navText="8.6.2">
        <p>{chapterDb["8-6-2-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={9} samplePrefix="8-6-2-sample"/>
      </HX>
      <HX level={3} navText="8.6.3">
        <p>{chapterDb["8-6-3-p"]}</p>
        <SampleBox docLang={props.docLang} gaDb={chapterDictionaries.ga_IE} tlDb={chapterDb} sampleCount={4} samplePrefix="8-6-3-sample"/>
      </HX>
    </HX>
    <hr/>
  </HX>
  </ChapterTemplate>;
};
