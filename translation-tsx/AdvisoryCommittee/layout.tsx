import { HX, Page, type SupportedLocales } from "../bodyMatter";
import { en_US } from "./dbs/en-US";
import { ga_IE } from "./dbs/ga-IE";
import { en_US as en_US_common } from "../common/en-US";
import { ga_IE as ga_IE_common } from "../common/ga-IE";

const chapterDictionaries = { en_US, ga_IE };
export function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

const commonDictionaries = { en_US: en_US_common, ga_IE: ga_IE_common };
export function getCommonTranslator(locale: SupportedLocales) {
  return commonDictionaries[locale] ?? commonDictionaries.ga_IE;
}

export const AdvisoryCommittee = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  return <Page
    title={chapterDb["ChoisteChomhairligh"]}
    docLang={props.docLang}>
    <HX level={1} navText="Members of the Advisory Committee" title={chapterDb["ChoisteChomhairligh"]}>
      <b>An Dr Éamonn Ó hÓgáin ({chapterDb["Cathaoirleach"]}),</b><br />{chapterDb["name1-line1"]}<br />{chapterDb["name1-line2"]}
      <hr /><b>Máirín de Brún,</b><br />{chapterDb["name2-line1"]}<br />{chapterDb["name2-line2"]}
      <hr /><b>An Dr Deirbhile Nic Craith,</b><br />{chapterDb["name3-line1"]}<br />{chapterDb["name3-line2"]}
      <hr /><b>An Dr Malachy Ó Néill,</b><br />{chapterDb["name4-line1"]}<br />{chapterDb["name4-line2"]}
      <hr /><b>Éamonn Ó Dónaill,</b><br />{chapterDb["name5-line1"]}<br />{chapterDb["name5-line2"]}
      <hr /><b>Séamas de Barra,</b><br />{chapterDb["name6-line1"]}<br />{chapterDb["name6-line2"]}
      <hr /><b>Colmcille Ó Monacháin,</b><br />{chapterDb["name7-line1"]}<br />{chapterDb["name7-line2"]}
      <hr /><b>Gráinne Ní Lúbaigh,</b><br />{chapterDb["name8-line1"]}<br />{chapterDb["name8-line2"]}<br />{chapterDb["name8-line3"]}
      <hr /><b>Maeve Eason,</b><br />{chapterDb["name9-line1"]}
      <hr /><b>Tadhg Ó hÚrdail,</b><br />{chapterDb["name10-line1"]}<br />{chapterDb["name10-line2"]}
      <hr /><b>Eoin Ó Droighneáin,</b><br />{chapterDb["name11-line1"]}<br />{chapterDb["name11-line2"]}<br />{chapterDb["name11-line3"]}
      <hr /><b>Bríd de Staic,</b><br />{chapterDb["name12-line1"]}
      <hr /><b>Oilibhéar de Búrca,</b><br />{chapterDb["name13-line1"]}<br />{chapterDb["name13-line2"]}
      <hr /><b>Labhrás Ó Finneadha,</b><br />{chapterDb["name14-line1"]}<br />{chapterDb["name14-line2"]}
      <hr /><b>Colm Breathnach,</b><br />{chapterDb["name15-line1"]}<br />{chapterDb["name15-line2"]}
      <hr /><b>An Dr Ciarán Mac Murchaidh,</b><br />{chapterDb["name16-line1"]}<br />{chapterDb["name16-line2"]}
      <hr /><b>Áine Ní Chonghaile,</b><br />{chapterDb["name17-line1"]}
      <hr /><b>An Fhoireann Tacaíochta</b>
      <hr /><b>Breda Ní Mhaoláin,</b><br />{chapterDb["name18-line1"]}
      <hr /><b>Julie O&rsquo;Farrell,</b><br />{chapterDb["name19-line1"]}
    </HX>
  </Page>;
};
