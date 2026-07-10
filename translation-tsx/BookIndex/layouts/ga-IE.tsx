import { HX } from "../../bodyMatter";
import type { SupportedLocales } from "../../bodyMatter";
import { en_US } from "../dbs/en-US";
import { ga_IE } from "../dbs/ga-IE";
import { links } from "../dbs/links";

const chapterDictionaries = { en_US, ga_IE };
function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

export const Ga_IE_Layout = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  if (props.docLang !== "ga_IE")
    return null;

  return <HX level={1} navText="title" title={chapterDb["teidealNaCaibidle"]}>
    <HX level={2} navText="A">
      <ol>
        <li>acrainm: {links["acrainm_links"]}
          <ol>
            <li>feidhm aidiachtach {links["acrainm_feidhm_aidiachtach_links"]}
            </li>
            <li>gan an t&#x2011;alt {links["acrainm_gan_an_t-alt_links"]}
            </li>
            <li>iolra {links["acrainm_iolra_links"]}
            </li>
            <li>leis an alt {links["acrainm_leis_an_alt_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>aidiacht: {links["aidiacht_links"]}
          <ol>
            <li>achoimre {links["aidiacht_achoimre_links"]}
            </li>
            <li>aidiachtaí aonsiollacha {links["aidiacht_aidiachtaí_aonsiollacha_links"]}
            </li>
            <li>aidiacht cháilíochta {links["aidiacht_aidiacht_cháilíochta_links"]}
            </li>
            <li>aidiacht rannach {links["aidiacht_aidiacht_rannach_links"]}
            </li>
            <li>aidiacht shealbhach {links["aidiacht_aidiacht_shealbhach_links"]}
            </li>
            <li>aidiacht thaispeántach {links["aidiacht_aidiacht_thaispeántach_links"]}
            </li>
            <li>ainmneach {links["aidiacht_ainmneach_links"]}
            </li>
            <li>an chéad díochlaonadh {links["aidiacht_an_chéad_díochlaonadh_links"]}
            </li>
            <li>an dara díochlaonadh {links["aidiacht_an_dara_díochlaonadh_links"]}
            </li>
            <li>an tríú díochlaonadh {links["aidiacht_an_tríú_díochlaonadh_links"]}
            </li>
            <li>baininscneach {links["aidiacht_baininscneach_links"]}
            </li>
            <li>breischéim {links["aidiacht_breischéim_links"]}
            </li>
            <li>coimriú {links["aidiacht_coimriú_links"]}
            </li>
            <li>consan caol {links["aidiacht_consan_caol_links"]}
            </li>
            <li>consan leathan {links["aidiacht_consan_leathan_links"]}
            </li>
            <li>Córas an tSéimhithe {links["aidiacht_Córas_an_tSéimhithe_links"]}
            </li>
            <li>dobhriathra {links["aidiacht_dobhriathra_links"]}
            </li>
            <li>firinscneach {links["aidiacht_firinscneach_links"]}
            </li>
            <li>foirmeacha neamhrialta {links["aidiacht_foirmeacha_neamhrialta_links"]}
            </li>
            <li>gairmeach {links["aidiacht_gairmeach_links"]}
            </li>
            <li>ginideach {links["aidiacht_ginideach_links"]}
            </li>
            <li>inscne {links["aidiacht_inscne_links"]}
            </li>
            <li>iolra {links["aidiacht_iolra_links"]}
            </li>
            <li>mír/réimír threise {links["aidiacht_mír_réimír_threise_links"]}
            </li>
            <li>séimhiú {links["aidiacht_séimhiú_links"]}
            </li>
            <li>tuiseal {links["aidiacht_tuiseal_links"]}
            </li>
            <li>uatha {links["aidiacht_uatha_links"]}
            </li>
            <li>uimhir {links["aidiacht_uimhir_links"]}
            </li>
            <li>urú {links["aidiacht_urú_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>ainm briathartha: {links["ainm_briathartha_links"]}
          <ol>
            <li>an chéad réimniú {links["ainm_briathartha_an_chéad_réimniú_links"]}
            </li>
            <li>an dara réimniú {links["ainm_briathartha_an_dara_réimniú_links"]}
            </li>
            <li>díochlaonadh {links["ainm_briathartha_díochlaonadh_links"]}
            </li>
            <li>feidhm aidiachta {links["ainm_briathartha_feidhm_aidiachta_links"]}
            </li>
            <li>feidhm ainmfhocail {links["ainm_briathartha_feidhm_ainmfhocail_links"]}
            </li>
            <li>ginideach {links["ainm_briathartha_ginideach_links"]}
            </li>
            <li>iolra {links["ainm_briathartha_iolra_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>ainmfhocal: {links["ainmfhocal_links"]}
          <ol>
            <li>ainm dílis {links["ainmfhocal_ainm_dílis_links"]}
            </li>
            <li>ainmfhocail neamhrialta {links["ainmfhocal_ainmfhocail_neamhrialta_links"]}
            </li>
            <li>ainmneacha ceana {links["ainmfhocal_ainmneacha_ceana_links"]}
            </li>
            <li>an ceathrú díochlaonadh {links["ainmfhocal_an_ceathrú_díochlaonadh_links"]}
            </li>
            <li>an chéad díochlaonadh {links["ainmfhocal_an_chéad_díochlaonadh_links"]}
            </li>
            <li>an cúigiú díochlaonadh {links["ainmfhocal_an_cúigiú_díochlaonadh_links"]}
            </li>
            <li>an dara díochlaonadh {links["ainmfhocal_an_dara_díochlaonadh_links"]}
            </li>
            <li>an tríú díochlaonadh {links["ainmfhocal_an_tríú_díochlaonadh_links"]}
            </li>
            <li>baininscneach {links["ainmfhocal_baininscneach_links"]}
            </li>
            <li>blianta {links["ainmfhocal_blianta_links"]}
            </li>
            <li>caolú {links["ainmfhocal_caolú_links"]}
            </li>
            <li>cinnte {links["ainmfhocal_cinnte_links"]}
            </li>
            <li>coimriú {links["ainmfhocal_coimriú_links"]}
            </li>
            <li>comhfhocal {links["ainmfhocal_comhfhocal_links"]}
            </li>
            <li>éiginnte {links["ainmfhocal_éiginnte_links"]}
            </li>
            <li>firinscneach {links["ainmfhocal_firinscneach_links"]}
            </li>
            <li>lagiolraí {links["ainmfhocal_lagiolraí_links"]}
            </li>
            <li>iolra {links["ainmfhocal_iolra_links"]}
            </li>
            <li>leathnú {links["ainmfhocal_leathnú_links"]}
            </li>
            <li>malartú {links["ainmfhocal_malartú_links"]}
            </li>
            <li>séimhiú {links["ainmfhocal_séimhiú_links"]}
            </li>
            <li>tréaniolraí {links["ainmfhocal_tréaniolraí_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>ainmfhocal san iolra a chríochnaíonn ar chonsan caol: {links["ainmfhocal_san_iolra_a_chríochnaíonn_ar_chonsan_caol_links"]}
        </li>
      </ol>
      <ol>
        <li>ainmneach: {links["ainmneach_links"]}
          <ol>
            <li>ainmneach iolra {links["ainmneach_iolra_links"]}
            </li>
            <li>ainmneach uatha {links["ainmneach_uatha_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>ainmneach in ionad an ghinidigh: {links["ainmneach_in_ionad_an_ghinidigh_links"]}
          <ol>
            <li>achoimre {links["ainmneach_in_ionad_an_ghinidigh_achoimre_links"]}
            </li>
            <li>aidiacht cháilíochta {links["ainmneach_in_ionad_an_ghinidigh_aidiacht_cháilíochta_links"]}
            </li>
            <li>aidiacht éiginnte {links["ainmneach_in_ionad_an_ghinidigh_aidiacht_éiginnte_links"]}
            </li>
            <li>ainm briathartha {links["ainmneach_in_ionad_an_ghinidigh_ainm_briathartha_links"]}
            </li>
            <li>ainm cláir {links["ainmneach_in_ionad_an_ghinidigh_ainm_cláir_links"]}
            </li>
            <li>ainm comhlachta {links["ainmneach_in_ionad_an_ghinidigh_ainm_comhlachta_links"]}
            </li>
            <li>ainm cumainn {links["ainmneach_in_ionad_an_ghinidigh_ainm_cumainn_links"]}
            </li>
            <li>ainmfhocal cinnte {links["ainmneach_in_ionad_an_ghinidigh_ainmfhocal_cinnte_links"]}
            </li>
            <li>ainmfhocal éiginnte cáilithe {links["ainmneach_in_ionad_an_ghinidigh_ainmfhocal_éiginnte_cáilithe_links"]}
            </li>
            <li>ainmfhocal i gcáil aidiachta {links["ainmneach_in_ionad_an_ghinidigh_ainmfhocal_i_gcáil_aidiachta_links"]}
            </li>
            <li>cáilitheoir {links["ainmneach_in_ionad_an_ghinidigh_cáilitheoir_links"]}
            </li>
            <li>cainníocht chinnte {links["ainmneach_in_ionad_an_ghinidigh_cainníocht_chinnte_links"]}
            </li>
            <li>cainníocht éiginnte {links["ainmneach_in_ionad_an_ghinidigh_cainníocht_éiginnte_links"]}
            </li>
            <li>chun {links["ainmneach_in_ionad_an_ghinidigh_chun_links"]}
            </li>
            <li>clásal coibhneasta {links["ainmneach_in_ionad_an_ghinidigh_clásal_coibhneasta_links"]}
            </li>
            <li>frásaí ilfhoclacha áirithe {links["ainmneach_in_ionad_an_ghinidigh_frásaí_ilfhoclacha_áirithe_links"]}
            </li>
            <li>ginideach rannaíoch {links["ainmneach_in_ionad_an_ghinidigh_ginideach_rannaíoch_links"]}
            </li>
            <li>réamhfhocal comhshuite {links["ainmneach_in_ionad_an_ghinidigh_réamhfhocal_comhshuite_links"]}
            </li>
            <li>réimír threise {links["ainmneach_in_ionad_an_ghinidigh_réimír_threise_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>an t-alt: {links["an_t_alt_links"]}
          <ol>
            <li>aibhneacha {links["an_t_alt_aibhneacha_links"]}
            </li>
            <li>ainmfhocal cinnte {links["an_t_alt_ainmfhocal_cinnte_links"]}
            </li>
            <li>bailte {links["an_t_alt_bailte_links"]}
            </li>
            <li>brí choincheapúil {links["an_t_alt_brí_choincheapúil_links"]}
            </li>
            <li>brí theibí {links["an_t_alt_brí_theibí_links"]}
            </li>
            <li>dátaí {links["an_t_alt_dátaí_links"]}
            </li>
            <li>féilte {links["an_t_alt_féilte_links"]}
            </li>
            <li>foirm {links["an_t_alt_foirm_links"]}
            </li>
            <li>laethanta na seachtaine {links["an_t_alt_laethanta_na_seachtaine_links"]}
            </li>
            <li>míonna na bliana {links["an_t_alt_míonna_na_bliana_links"]}
            </li>
            <li>paidreacha {links["an_t_alt_paidreacha_links"]}
            </li>
            <li>réigiúin {links["an_t_alt_réigiúin_links"]}
            </li>
            <li>roisc chatha {links["an_t_alt_roisc_chatha_links"]}
            </li>
            <li>sléibhte {links["an_t_alt_sléibhte_links"]}
            </li>
            <li>teangacha {links["an_t_alt_teangacha_links"]}
            </li>
            <li>teideal duine {links["an_t_alt_teideal_duine_links"]}
            </li>
            <li>teidil oifige {links["an_t_alt_teidil_oifige_links"]}
            </li>
            <li>teidil ranna rialtais {links["an_t_alt_teidil_ranna_rialtais_links"]}
            </li>
            <li>tinnis {links["an_t_alt_tinnis_links"]}
            </li>
            <li>tíortha {links["an_t_alt_tíortha_links"]}
            </li>
            <li>úsáid dháileach {links["an_t_alt_úsáid_dháileach_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>athruithe tosaigh: {links["athruithe_tosaigh_links"]}
          <ol>
            <li>achoimre {links["athruithe_tosaigh_achoimre_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="B">
      <ol>
        <li>briathar: {links["briathar_links"]}
          <ol>
            <li>aidiacht bhriathartha {links["briathar_aidiacht_bhriathartha_links"]}
            </li>
            <li>an chéad réimniú {links["briathar_an_chéad_réimniú_links"]}
            </li>
            <li>an dara réimniú {links["briathar_an_dara_réimniú_links"]}
            </li>
            <li>an mhír dhiúltach {links["briathar_an_mhír_dhiúltach_links"]}
            </li>
            <li>an modh foshuiteach {links["briathar_an_modh_foshuiteach_links"]}
            </li>
            <li>coimriú {links["briathar_coimriú_links"]}
            </li>
            <li>fréamhacha aonsiollacha {links["briathar_fréamhacha_aonsiollacha_links"]}
            </li>
            <li>fréamhacha ilsiollacha {links["briathar_fréamhacha_ilsiollacha_links"]}
            </li>
            <li>má agus nuair {links["briathar_má_agus_nuair_links"]}
            </li>
            <li>muid {links["briathar_muid_links"]}
            </li>
            <li>ná {links["briathar_ná_links"]}
            </li>
            <li>neamhrialta {links["briathar_neamhrialta_links"]}
            </li>
            <li>neamhspleách {links["briathar_neamhspleách_links"]}
            </li>
            <li>séimhiú {links["briathar_séimhiú_links"]}
            </li>
            <li>spleách {links["briathar_spleách_links"]}
            </li>
            <li>urú {links["briathar_urú_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="C">
      <ol>
        <li>an chopail: {links["an_chopail_links"]}
          <ol>
            <li>athruithe tosaigh {links["an_chopail_athruithe_tosaigh_links"]}
            </li>
            <li>clásal coibhneasta díreach {links["an_chopail_clásal_coibhneasta_díreach_links"]}
            </li>
            <li>clásal coibhneasta indíreach {links["an_chopail_clásal_coibhneasta_indíreach_links"]}
            </li>
            <li>cónaisc {links["an_chopail_cónaisc_links"]}
            </li>
            <li>dá {links["an_chopail_dá_links"]}
            </li>
            <li>feidhmeanna {links["an_chopail_feidhmeanna_links"]}
            </li>
            <li>foirmeacha cumaisc {links["an_chopail_foirmeacha_cumaisc_links"]}
            </li>
            <li>foirmeacha simplí {links["an_chopail_foirmeacha_simplí_links"]}
            </li>
            <li>forainmneach ceisteach {links["an_chopail_forainmneach_ceisteach_links"]}
            </li>
            <li>i ndiaidh ní {links["an_chopail_i_ndiaidh_ní_links"]}
            </li>
            <li>má {links["an_chopail_má_links"]}
            </li>
            <li>modh foshuiteach {links["an_chopail_modh_foshuiteach_links"]}
            </li>
            <li>réamhfhocail {links["an_chopail_réamhfhocail_links"]}
            </li>
            <li>séimhiú {links["an_chopail_séimhiú_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>an clásal coibhneasta: {links["an_clásal_coibhneasta_links"]}
          <ol>
            <li>an fhoirm choibhneasta {links["an_clásal_coibhneasta_an_fhoirm_choibhneasta_links"]}
            </li>
            <li>an fhoirm neamhspleách {links["an_clásal_coibhneasta_an_fhoirm_neamhspleách_links"]}
            </li>
            <li>an fhoirm spleách {links["an_clásal_coibhneasta_an_fhoirm_spleách_links"]}
            </li>
            <li>an mhír choibhneasta {links["an_clásal_coibhneasta_an_mhír_choibhneasta_links"]}
            </li>
            <li>clásal breischéime {links["an_clásal_coibhneasta_clásal_breischéime_links"]}
            </li>
            <li>clásal coibhneasta díreach {links["an_clásal_coibhneasta_clásal_coibhneasta_díreach_links"]}
            </li>
            <li>clásal coibhneasta indíreach {links["an_clásal_coibhneasta_clásal_coibhneasta_indíreach_links"]}
            </li>
            <li>clásal idiraisnéiseach {links["an_clásal_coibhneasta_clásal_idiraisnéiseach_links"]}
            </li>
            <li>dobhriathar {links["an_clásal_coibhneasta_dobhriathar_links"]}
            </li>
            <li>fochlásal {links["an_clásal_coibhneasta_fochlásal_links"]}
            </li>
            <li>foirmeacha cumaisc {links["an_clásal_coibhneasta_foirmeacha_cumaisc_links"]}
            </li>
            <li>iartheachtaí {links["an_clásal_coibhneasta_iartheachtaí_links"]}
            </li>
            <li>príomhchlásal {links["an_clásal_coibhneasta_príomhchlásal_links"]}
            </li>
            <li>réamhfhocail {links["an_clásal_coibhneasta_réamhfhocail_links"]}
            </li>
            <li>réamhtheachtaí {links["an_clásal_coibhneasta_réamhtheachtaí_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>consan caol: {links["consan_caol_links"]}
          <ol>
            <li>aidiacht {links["consan_caol_aidiacht_links"]}
            </li>
            <li>ainmneach iolra {links["consan_caol_ainmneach_iolra_links"]}
            </li>
            <li>ginideach uatha {links["consan_caol_ginideach_uatha_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>consan inséimhithe: {links["consan_inséimhithe_links"]}
        </li>
      </ol>
      <ol>
        <li>consan inuraithe: {links["consan_inuraithe_links"]}
        </li>
      </ol>
      <ol>
        <li>cuspóireach: {links["cuspóireach_links"]}
        </li>
      </ol>
    </HX>
    <HX level={2} navText="D">
      <ol>
        <li>de chuid: {links["de_chuid_links"]}
        </li>
      </ol>
      <ol>
        <li>dobhriathar: {links["dobhriathar_links"]}
          <ol>
            <li>aidiacht {links["dobhriathar_aidiacht_links"]}
            </li>
            <li>ainmfhocal {links["dobhriathar_ainmfhocal_links"]}
            </li>
            <li>airde an chompáis {links["dobhriathar_airde_an_chompáis_links"]}
            </li>
            <li>dobhriathar áite {links["dobhriathar_dobhriathar_áite_links"]}
            </li>
            <li>dobhriathar ama {links["dobhriathar_dobhriathar_ama_links"]}
            </li>
            <li>dobhriathar a úsáid go haidiachtach {links["dobhriathar_dobhriathar_a_úsáid_go_haidiachtach_links"]}
            </li>
            <li>dobhriathar breischéime {links["dobhriathar_dobhriathar_breischéime_links"]}
            </li>
            <li>dobhriathar cainníochta {links["dobhriathar_dobhriathar_cainníochta_links"]}
            </li>
            <li>dobhriathar ceisteach {links["dobhriathar_dobhriathar_ceisteach_links"]}
            </li>
            <li>dobhriathar minicíochta {links["dobhriathar_dobhriathar_minicíochta_links"]}
            </li>
            <li>dobhriathar modha {links["dobhriathar_dobhriathar_modha_links"]}
            </li>
            <li>dobhriathar treise {links["dobhriathar_dobhriathar_treise_links"]}
            </li>
            <li>dobhriathar treo {links["dobhriathar_dobhriathar_treo_links"]}
            </li>
            <li>i gcúrsaí tomhais {links["dobhriathar_i_gcúrsaí_tomhais_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="F">
      <ol>
        <li>fleiscín: {links["fleiscín_links"]}
        </li>
      </ol>
      <ol>
        <li>forainmneach: {links["forainmneach_links"]}
          <ol>
            <li>aidiacht shealbhach {links["forainmneach_aidiacht_shealbhach_links"]}
            </li>
            <li>arna {links["forainmneach_arna_links"]}
            </li>
            <li>cuspóir ainm bhriathartha {links["forainmneach_cuspóir_ainm_bhriathartha_links"]}
            </li>
            <li>dhá {links["forainmneach_dhá_links"]}
            </li>
            <li>firinscneach uatha {links["forainmneach_firinscneach_uatha_links"]}
            </li>
            <li>foirm threise {links["forainmneach_foirm_threise_links"]}
            </li>
            <li>forainmneach ceisteach {links["forainmneach_forainmneach_ceisteach_links"]}
            </li>
            <li>forainmneach pearsanta {links["forainmneach_forainmneach_pearsanta_links"]}
            </li>
            <li>forainmneach réamhfhoclach {links["forainmneach_forainmneach_réamhfhoclach_links"]}
            </li>
            <li>forainmneach réamhthagrach {links["forainmneach_forainmneach_réamhthagrach_links"]}
            </li>
            <li>forainmneach taispeántach {links["forainmneach_forainmneach_taispeántach_links"]}
            </li>
            <li>i gcumasc {links["forainmneach_i_gcumasc_links"]}
            </li>
            <li>réamhfhocal {links["forainmneach_réamhfhocal_links"]}
            </li>
            <li>thú {links["forainmneach_thú_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="G">
      <ol>
        <li>gach: {links["gach_links"]}
        </li>
      </ol>
      <ol>
        <li>gairmeach: {links["gairmeach_links"]}
          <ol>
            <li>an mhír ghairmeach {links["gairmeach_an_mhír_ghairmeach_links"]}
            </li>
            <li>gairmeach iolra {links["gairmeach_gairmeach_iolra_links"]}
            </li>
            <li>gairmeach uatha {links["gairmeach_gairmeach_uatha_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>ginideach: {links["ginideach_links"]}
          <ol>
            <li>baininscneach {links["ginideach_baininscneach_links"]}
            </li>
            <li>cáilitheoir {links["ginideach_cáilitheoir_links"]}
            </li>
            <li>chun {links["ginideach_chun_links"]}
            </li>
            <li>firinscneach {links["ginideach_firinscneach_links"]}
            </li>
            <li>lagiolraí {links["ginideach_lagiolraí_links"]}
            </li>
            <li>tréaniolraí {links["ginideach_tréaniolraí_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>giorrúchán: {links["giorrúchán_links"]}
          <ol>
            <li>feidhm aidiachtach {links["giorrúchán_feidhm_aidiachtach_links"]}
            </li>
            <li>gan an t-alt {links["giorrúchán_gan_an_t-alt_links"]}
            </li>
            <li>iolra {links["giorrúchán_iolra_links"]}
            </li>
            <li>leis an alt {links["giorrúchán_leis_an_alt_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="L">
      <ol>
        <li>logainmneacha: {links["logainmneacha_links"]}
          <ol>
            <li>aibhneacha {links["logainmneacha_aibhneacha_links"]}
            </li>
            <li>bailte {links["logainmneacha_bailte_links"]}
            </li>
            <li>Éire {links["logainmneacha_Éire_links"]}
            </li>
            <li>réigiúin {links["logainmneacha_réigiúin_links"]}
            </li>
            <li>sléibhte {links["logainmneacha_sléibhte_links"]}
            </li>
            <li>tíortha {links["logainmneacha_tíortha_links"]}
            </li>
          </ol>
        </li>
      </ol>
      <ol>
        <li>lúibíní: {links["lúibíní_links"]}
        </li>
      </ol>
    </HX>
    <HX level={2} navText="R">
      <ol>
        <li>réamhfhocal: {links["réamhfhocal_links"]}
          <ol>
            <li>fochlásal réamhfhoclach {links["réamhfhocal_fochlásal_réamhfhoclach_links"]}
            </li>
            <li>i gcumasc {links["réamhfhocal_i_gcumasc_links"]}
            </li>
            <li>réamhfhocal comhshuite {links["réamhfhocal_réamhfhocal_comhshuite_links"]}
            </li>
            <li>séimhiú {links["réamhfhocal_séimhiú_links"]}
            </li>
            <li>urú {links["réamhfhocal_urú_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="S">
      <ol>
        <li>séimhiú i ndiaidh ainmfhocal baininscneach: {links["séimhiú_i_ndiaidh_ainmfhocal_baininscneach_links"]}
        </li>
      </ol>
      <ol>
        <li>séimhiú i ndiaidh ainmfhocal san iolra a chríochnaíonn ar chonsan caol: {links["séimhiú_i_ndiaidh_ainmfhocal_baininscneach_séimhiú_i_ndiaidh_ainmfhocal_san_iolra_a_chríochnaíonn_ar_chonsan_caol_links"]}
        </li>
      </ol>
      <ol>
        <li>sloinnte: {links["sloinnte_links"]}
        </li>
      </ol>
    </HX>
    <HX level={2} navText="T">
      <ol>
        <li>tabharthach: {links["tabharthach_links"]}
          <ol>
            <li>an Córas Lárnach {links["tabharthach_an_Córas_Lárnach_links"]}
            </li>
            <li>Córas an tSéimhithe {links["tabharthach_Córas_an_tSéimhithe_links"]}
            </li>
            <li>tabharthach rannaíoch {links["tabharthach_tabharthach_rannaíoch_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="U">
      <ol>
        <li>uimhir: {links["uimhir_links"]}
          <ol>
            <li>achoimre {links["uimhir_achoimre_links"]}
            </li>
            <li>aidiacht {links["uimhir_aidiacht_links"]}
            </li>
            <li>an t-alt {links["uimhir_an_t-alt_links"]}
            </li>
            <li>bunuimhir {links["uimhir_bunuimhir_links"]}
            </li>
            <li>codán {links["uimhir_codán_links"]}
            </li>
            <li>córas seanbhunaithe {links["uimhir_córas_seanbhunaithe_links"]}
            </li>
            <li>córas simplithe {links["uimhir_córas_simplithe_links"]}
            </li>
            <li>déag {links["uimhir_déag_links"]}
            </li>
            <li>deicheanna {links["uimhir_deicheanna_links"]}
            </li>
            <li>figiúirí {links["uimhir_figiúirí_links"]}
            </li>
            <li>ginideach {links["uimhir_ginideach_links"]}
            </li>
            <li>leaganacha iolra {links["uimhir_leaganacha_iolra_links"]}
            </li>
            <li>maoluimhir {links["uimhir_maoluimhir_links"]}
            </li>
            <li>orduimhir {links["uimhir_orduimhir_links"]}
            </li>
            <li>séimhiú {links["uimhir_séimhiú_links"]}
            </li>
            <li>uimhir dheachúlach {links["uimhir_uimhir_dheachúlach_links"]}
            </li>
            <li>uimhir phearsanta {links["uimhir_uimhir_phearsanta_links"]}
            </li>
            <li>urú {links["uimhir_urú_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
  </HX>;
};