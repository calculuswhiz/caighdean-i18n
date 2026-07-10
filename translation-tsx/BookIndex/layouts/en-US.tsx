import { HX } from "../../bodyMatter";
import type { SupportedLocales } from "../../bodyMatter";
import { en_US } from "../dbs/en-US";
import { ga_IE } from "../dbs/ga-IE";
import { links } from "../dbs/links";

const chapterDictionaries = { en_US, ga_IE };
function getChapterTranslator(locale: SupportedLocales) {
  return chapterDictionaries[locale] ?? chapterDictionaries.ga_IE;
}

export const En_US_Layout = (props: {
  docLang: SupportedLocales;
}) => {
  const chapterDb = getChapterTranslator(props.docLang);

  if (props.docLang !== "en_US")
    return null;

  return <HX level={1} navText="title" title={chapterDb["teidealNaCaibidle"]}>
    <HX level={2} navText="A">
      <ol>
        <li>abbreviation: {links["giorrúchán_links"]}
          <ol>
            <li>adjectival function {links["giorrúchán_feidhm_aidiachtach_links"]}
            </li>
            <li>plural {links["giorrúchán_iolra_links"]}
            </li>
            <li>with the article {links["giorrúchán_leis_an_alt_links"]}
            </li>
            <li>without the article {links["giorrúchán_gan_an_t-alt_links"]}
            </li>
          </ol>
        </li>
        <li>accusative case: {links["cuspóireach_links"]}
        </li>
        <li>acronym: {links["acrainm_links"]}
          <ol>
            <li>adjectival function {links["acrainm_feidhm_aidiachtach_links"]}
            </li>
            <li>plural {links["acrainm_iolra_links"]}
            </li>
            <li>with the article {links["acrainm_leis_an_alt_links"]}
            </li>
            <li>without the article {links["acrainm_gan_an_t-alt_links"]}
            </li>
          </ol>
        </li>
        <li>adjective: {links["aidiacht_links"]}
          <ol>
            <li>adverbial {links["aidiacht_dobhriathra_links"]}
            </li>
            <li>case {links["aidiacht_tuiseal_links"]}
            </li>
            <li>comparative degree {links["aidiacht_breischéim_links"]}
            </li>
            <li>consonant, broad {links["aidiacht_consan_leathan_links"]}
            </li>
            <li>consonant, slender {links["aidiacht_consan_caol_links"]}
            </li>
            <li>declension, first {links["aidiacht_an_chéad_díochlaonadh_links"]}
            </li>
            <li>declension, second {links["aidiacht_an_dara_díochlaonadh_links"]}
            </li>
            <li>declension, third {links["aidiacht_an_tríú_díochlaonadh_links"]}
            </li>
            <li>demonstrative adjectives {links["aidiacht_aidiacht_thaispeántach_links"]}
            </li>
            <li>eclipsis {links["aidiacht_urú_links"]}
            </li>
            <li>emphatic particle {links["aidiacht_mír_réimír_threise_links"]}
            </li>
            <li>feminine {links["aidiacht_baininscneach_links"]}
            </li>
            <li>gender {links["aidiacht_inscne_links"]}
            </li>
            <li>genitive {links["aidiacht_ginideach_links"]}
            </li>
            <li>irregular forms {links["aidiacht_foirmeacha_neamhrialta_links"]}
            </li>
            <li>lenition {links["aidiacht_séimhiú_links"]}
            </li>
            <li>Lenition System {links["aidiacht_Córas_an_tSéimhithe_links"]}
            </li>
            <li>masculine {links["aidiacht_firinscneach_links"]}
            </li>
            <li>monosyllabic adjectives {links["aidiacht_aidiachtaí_aonsiollacha_links"]}
            </li>
            <li>nominative {links["aidiacht_ainmneach_links"]}
            </li>
            <li>number {links["aidiacht_uimhir_links"]}
            </li>
            <li>partitive adjectives {links["aidiacht_aidiacht_rannach_links"]}
            </li>
            <li>plural {links["aidiacht_iolra_links"]}
            </li>
            <li>possessive {links["aidiacht_uatha_links"]}
            </li>
            <li>possessive adjectives {links["aidiacht_aidiacht_shealbhach_links"]}
            </li>
            <li>qualitative adjectives {links["aidiacht_aidiacht_cháilíochta_links"]}
            </li>
            <li>summary {links["aidiacht_achoimre_links"]}
            </li>
            <li>syncope {links["aidiacht_coimriú_links"]}
            </li>
            <li>vocative {links["aidiacht_gairmeach_links"]}
            </li>
          </ol>
        </li>
        <li>adverb: {links["dobhriathar_links"]}
          <li>
            <ol>
              <li>adjective {links["dobhriathar_aidiacht_links"]}
              </li>
              <li>adverb in measurement contexts {links["dobhriathar_i_gcúrsaí_tomhais_links"]}
              </li>
              <li>comparative adverb {links["dobhriathar_dobhriathar_breischéime_links"]}
              </li>
              <li>compass points {links["dobhriathar_airde_an_chompáis_links"]}
              </li>
              <li>directional adverb {links["dobhriathar_dobhriathar_treo_links"]}
              </li>
              <li>frequency adverb {links["dobhriathar_dobhriathar_minicíochta_links"]}
              </li>
              <li>intensifying adverb {links["dobhriathar_dobhriathar_treise_links"]}
              </li>
              <li>interrogative adverb {links["dobhriathar_dobhriathar_ceisteach_links"]}
              </li>
              <li>adverb used as adjective {links["dobhriathar_dobhriathar_a_úsáid_go_haidiachtach_links"]}
              </li>
              <li>modal adverb {links["dobhriathar_dobhriathar_modha_links"]}
              </li>
              <li>noun {links["dobhriathar_ainmfhocal_links"]}
              </li>
              <li>place adverb {links["dobhriathar_dobhriathar_áite_links"]}
              </li>
              <li>quantitative adverb {links["dobhriathar_dobhriathar_cainníochta_links"]}
              </li>
              <li>temporal adverb/adverb of time {links["dobhriathar_dobhriathar_ama_links"]}
              </li>
            </ol>
          </li>
        </li>
        <li>article: {links["an_t_alt_links"]}
          <li>
            <ol>
              <li>abstract meaning {links["an_t_alt_brí_theibí_links"]}
              </li>
              <li>battle cries {links["an_t_alt_roisc_chatha_links"]}
              </li>
              <li>conceptual meaning {links["an_t_alt_brí_choincheapúil_links"]}
              </li>
              <li>countries {links["an_t_alt_tíortha_links"]}
              </li>
              <li>dates {links["an_t_alt_dátaí_links"]}
              </li>
              <li>days of the week {links["an_t_alt_laethanta_na_seachtaine_links"]}
              </li>
              <li>definite noun {links["an_t_alt_ainmfhocal_cinnte_links"]}
              </li>
              <li>diseases {links["an_t_alt_tinnis_links"]}
              </li>
              <li>distributive use {links["an_t_alt_úsáid_dháileach_links"]}
              </li>
              <li>festivals {links["an_t_alt_féilte_links"]}
              </li>
              <li>form {links["an_t_alt_foirm_links"]}
              </li>
              <li>government department titles {links["an_t_alt_teidil_ranna_rialtais_links"]}
              </li>
              <li>languages {links["an_t_alt_teangacha_links"]}
              </li>
              <li>months of the year {links["an_t_alt_míonna_na_bliana_links"]}
              </li>
              <li>mountains {links["an_t_alt_sléibhte_links"]}
              </li>
              <li>official titles {links["an_t_alt_teidil_oifige_links"]}
              </li>
              <li>person's title {links["an_t_alt_teideal_duine_links"]}
              </li>
              <li>prayers {links["an_t_alt_paidreacha_links"]}
              </li>
              <li>regions {links["an_t_alt_réigiúin_links"]}
              </li>
              <li>rivers {links["an_t_alt_aibhneacha_links"]}
              </li>
              <li>towns {links["an_t_alt_bailte_links"]}
              </li>
            </ol>
          </li>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="B">
      <ol>
        <li>brackets: {links["lúibíní_links"]}
        </li>
      </ol>
    </HX>
    <HX level={2} navText="C">
      <ol>
        <li>copula: {links["an_chopail_links"]}
        </li>
        <li>
          <ol>
            <li><i>dá</i> (two) {links["an_chopail_dá_links"]}
            </li>
            <li><i>má</i> (if) {links["an_chopail_má_links"]}
            </li>
            <li>after <i>ní</i> {links["an_chopail_i_ndiaidh_ní_links"]}
            </li>
            <li>compound forms {links["an_chopail_foirmeacha_cumaisc_links"]}
            </li>
            <li>conjunctions {links["an_chopail_cónaisc_links"]}
            </li>
            <li>direct relative clause {links["an_chopail_clásal_coibhneasta_díreach_links"]}
            </li>
            <li>functions {links["an_chopail_feidhmeanna_links"]}
            </li>
            <li>indirect relative clause {links["an_chopail_clásal_coibhneasta_indíreach_links"]}
            </li>
            <li>initial mutations {links["an_chopail_athruithe_tosaigh_links"]}
            </li>
            <li>interrogative pronominal {links["an_chopail_forainmneach_ceisteach_links"]}
            </li>
            <li>lenition {links["an_chopail_séimhiú_links"]}
            </li>
            <li>prepositions {links["an_chopail_réamhfhocail_links"]}
            </li>
            <li>simple forms {links["an_chopail_foirmeacha_simplí_links"]}
            </li>
            <li>subjunctive mood {links["an_chopail_modh_foshuiteach_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="D">
      <ol>
        <li><i>de chuid</i>: {links["de_chuid_links"]}
        </li>
        <li>dative: {links["tabharthach_links"]}
        </li>
        <li>
          <ol>
            <li>Core System {links["tabharthach_an_Córas_Lárnach_links"]}
            </li>
            <li>Lenition System {links["tabharthach_Córas_an_tSéimhithe_links"]}
            </li>
            <li>partitive dative {links["tabharthach_tabharthach_rannaíoch_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="E">
      <ol>
        <li>eclipsable consonants: {links["consan_inuraithe_links"]}
        </li>
      </ol>
    </HX>
    <HX level={2} navText="G">
      <ol>
        <li><i>gach</i>: {links["gach_links"]}
        </li>
        <li>genitive: {links["ginideach_links"]}
          <ol>
            <li><i>chun</i> {links["ginideach_chun_links"]}
            </li>
            <li>feminine {links["ginideach_baininscneach_links"]}
            </li>
            <li>masculine {links["ginideach_firinscneach_links"]}
            </li>
            <li>qualifier {links["ginideach_cáilitheoir_links"]}
            </li>
            <li>plurals, strong {links["ginideach_tréaniolraí_links"]}
            </li>
            <li>plurals, weak {links["ginideach_lagiolraí_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="H">
      <ol>
        <li>hyphen: {links["fleiscín_links"]}
        </li>
      </ol>
    </HX>
    <HX level={2} navText="I">
      <ol>
        <li>initial mutations: {links["athruithe_tosaigh_links"]}
          <ol>
            <li>summary {links["athruithe_tosaigh_achoimre_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="L">
      <ol>
        <li>lenitable consonants: {links["consan_inséimhithe_links"]}
        </li>
        <li>lenition following feminine noun: {links["séimhiú_i_ndiaidh_ainmfhocal_baininscneach_links"]}
        </li>
        <li>lenition following noun in the plural that ends in a slender consonant: {links["séimhiú_i_ndiaidh_ainmfhocal_baininscneach_séimhiú_i_ndiaidh_ainmfhocal_san_iolra_a_chríochnaíonn_ar_chonsan_caol_links"]}
        </li>
      </ol>
    </HX>
    <HX level={2} navText="N">
      <ol>
        <li>nominative: {links["ainmneach_links"]}
          <ol>
            <li>nominative plural {links["ainmneach_iolra_links"]}
            </li>
            <li>nominative singular {links["ainmneach_uatha_links"]}
            </li>
          </ol>
        </li>
        <li>nominative in place of the genitive: {links["ainmneach_in_ionad_an_ghinidigh_links"]}
          <ol>
            <li><i>chun</i> (for) {links["ainmneach_in_ionad_an_ghinidigh_chun_links"]}
            </li>
            <li>association names {links["ainmneach_in_ionad_an_ghinidigh_ainm_cumainn_links"]}
            </li>
            <li>company names {links["ainmneach_in_ionad_an_ghinidigh_ainm_comhlachta_links"]}
            </li>
            <li>compound preposition {links["ainmneach_in_ionad_an_ghinidigh_réamhfhocal_comhshuite_links"]}
            </li>
            <li>definite noun {links["ainmneach_in_ionad_an_ghinidigh_ainmfhocal_cinnte_links"]}
            </li>
            <li>definite quantity {links["ainmneach_in_ionad_an_ghinidigh_cainníocht_chinnte_links"]}
            </li>
            <li>emphatic particle {links["ainmneach_in_ionad_an_ghinidigh_réimír_threise_links"]}
            </li>
            <li>indefinite adjective {links["ainmneach_in_ionad_an_ghinidigh_aidiacht_éiginnte_links"]}
            </li>
            <li>indefinite quantity {links["ainmneach_in_ionad_an_ghinidigh_cainníocht_éiginnte_links"]}
            </li>
            <li>noun in adjective form {links["ainmneach_in_ionad_an_ghinidigh_ainmfhocal_i_gcáil_aidiachta_links"]}
            </li>
            <li>partitive genitive {links["ainmneach_in_ionad_an_ghinidigh_ginideach_rannaíoch_links"]}
            </li>
            <li>program names {links["ainmneach_in_ionad_an_ghinidigh_ainm_cláir_links"]}
            </li>
            <li>qualified indefinite noun {links["ainmneach_in_ionad_an_ghinidigh_ainmfhocal_éiginnte_cáilithe_links"]}
            </li>
            <li>qualifier {links["ainmneach_in_ionad_an_ghinidigh_cáilitheoir_links"]}
            </li>
            <li>qualitative adjective {links["ainmneach_in_ionad_an_ghinidigh_aidiacht_cháilíochta_links"]}
            </li>
            <li>relative clause {links["ainmneach_in_ionad_an_ghinidigh_clásal_coibhneasta_links"]}
            </li>
            <li>specific multi-word phrases {links["ainmneach_in_ionad_an_ghinidigh_frásaí_ilfhoclacha_áirithe_links"]}
            </li>
            <li>summary {links["ainmneach_in_ionad_an_ghinidigh_achoimre_links"]}
            </li>
            <li>verbal noun {links["ainmneach_in_ionad_an_ghinidigh_ainm_briathartha_links"]}
            </li>
          </ol>
        </li>
        <li>noun: {links["ainmfhocal_links"]}
          <ol>
            <li>broadening {links["ainmfhocal_leathnú_links"]}
            </li>
            <li>common nouns {links["ainmfhocal_ainmneacha_ceana_links"]}
            </li>
            <li>compound {links["ainmfhocal_comhfhocal_links"]}
            </li>
            <li>declension, fifth {links["ainmfhocal_an_cúigiú_díochlaonadh_links"]}
            </li>
            <li>declension, first {links["ainmfhocal_an_chéad_díochlaonadh_links"]}
            </li>
            <li>declension, fourth {links["ainmfhocal_an_ceathrú_díochlaonadh_links"]}
            </li>
            <li>declension, second {links["ainmfhocal_an_dara_díochlaonadh_links"]}
            </li>
            <li>declension, third {links["ainmfhocal_an_tríú_díochlaonadh_links"]}
            </li>
            <li>definite {links["ainmfhocal_cinnte_links"]}
            </li>
            <li>exchange {links["ainmfhocal_malartú_links"]}
            </li>
            <li>feminine {links["ainmfhocal_baininscneach_links"]}
            </li>
            <li>indefinite {links["ainmfhocal_éiginnte_links"]}
            </li>
            <li>irregular nouns {links["ainmfhocal_ainmfhocail_neamhrialta_links"]}
            </li>
            <li>lenition {links["ainmfhocal_séimhiú_links"]}
            </li>
            <li>masculine {links["ainmfhocal_firinscneach_links"]}
            </li>
            <li>narrowing {links["ainmfhocal_caolú_links"]}
            </li>
            <li>plural {links["ainmfhocal_iolra_links"]}
            </li>
            <li>plurals, strong {links["ainmfhocal_tréaniolraí_links"]}
            </li>
            <li>plurals, weak {links["ainmfhocal_lagiolraí_links"]}
            </li>
            <li>proper noun {links["ainmfhocal_ainm_dílis_links"]}
            </li>
            <li>syncope {links["ainmfhocal_coimriú_links"]}
            </li>
            <li>years {links["ainmfhocal_blianta_links"]}
            </li>
          </ol>
        </li>
        <li>noun in the plural that ends in a slender consonant: {links["ainmfhocal_san_iolra_a_chríochnaíonn_ar_chonsan_caol_links"]}
        </li>
        <li>number: {links["uimhir_links"]}
          <ol>
            <li><i>déag</i> {links["uimhir_déag_links"]}
            </li>
            <li>adjective {links["uimhir_aidiacht_links"]}
            </li>
            <li>article {links["uimhir_an_t-alt_links"]}
            </li>
            <li>bare number {links["uimhir_maoluimhir_links"]}
            </li>
            <li>cardinal number {links["uimhir_bunuimhir_links"]}
            </li>
            <li>decimal number {links["uimhir_uimhir_dheachúlach_links"]}
            </li>
            <li>eclipsis {links["uimhir_urú_links"]}
            </li>
            <li>established system {links["uimhir_córas_seanbhunaithe_links"]}
            </li>
            <li>figures {links["uimhir_figiúirí_links"]}
            </li>
            <li>fraction {links["uimhir_codán_links"]}
            </li>
            <li>genitive {links["uimhir_ginideach_links"]}
            </li>
            <li>lenition {links["uimhir_séimhiú_links"]}
            </li>
            <li>ordinal number {links["uimhir_orduimhir_links"]}
            </li>
            <li>personal number {links["uimhir_uimhir_phearsanta_links"]}
            </li>
            <li>plural forms {links["uimhir_leaganacha_iolra_links"]}
            </li>
            <li>simplified system {links["uimhir_córas_simplithe_links"]}
            </li>
            <li>summary {links["uimhir_achoimre_links"]}
            </li>
            <li>tens {links["uimhir_deicheanna_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="P">
      <ol>
        <li>place names: {links["logainmneacha_links"]}
          <ol>
            <li>countries {links["logainmneacha_tíortha_links"]}
            </li>
            <li>Ireland {links["logainmneacha_Éire_links"]}
            </li>
            <li>mountains {links["logainmneacha_sléibhte_links"]}
            </li>
            <li>regions {links["logainmneacha_réigiúin_links"]}
            </li>
            <li>rivers {links["logainmneacha_aibhneacha_links"]}
            </li>
            <li>towns {links["logainmneacha_bailte_links"]}
            </li>
          </ol>
        </li>
        <li>preposition: {links["réamhfhocal_links"]}
          <ol>
            <li>compound preposition {links["réamhfhocal_réamhfhocal_comhshuite_links"]}
            </li>
            <li>eclipsis {links["réamhfhocal_urú_links"]}
            </li>
            <li>compound {links["réamhfhocal_i_gcumasc_links"]}
            </li>
            <li>lenition {links["réamhfhocal_séimhiú_links"]}
            </li>
            <li>prepositional subordinate clause {links["réamhfhocal_fochlásal_réamhfhoclach_links"]}
            </li>
          </ol>
        </li>
        <li>pronominal: {links["forainmneach_links"]}
          <ol>
            <li><i>arna</i> {links["forainmneach_arna_links"]}
            </li>
            <li><i>dhá</i> {links["forainmneach_dhá_links"]}
            </li>
            <li><i>thú</i> {links["forainmneach_thú_links"]}
            </li>
            <li>compound {links["forainmneach_i_gcumasc_links"]}
            </li>
            <li>demonstrative pronominal {links["forainmneach_forainmneach_taispeántach_links"]}
            </li>
            <li>interrogative pronominal {links["forainmneach_forainmneach_ceisteach_links"]}
            </li>
            <li>masculine singular {links["forainmneach_firinscneach_uatha_links"]}
            </li>
            <li>object of the verbal noun {links["forainmneach_cuspóir_ainm_bhriathartha_links"]}
            </li>
            <li>personal pronominal {links["forainmneach_forainmneach_pearsanta_links"]}
            </li>
            <li>possessive adjective {links["forainmneach_aidiacht_shealbhach_links"]}
            </li>
            <li>preposition {links["forainmneach_réamhfhocal_links"]}
            </li>
            <li>prepositional pronominal {links["forainmneach_forainmneach_réamhfhoclach_links"]}
            </li>
            <li>proleptic pronominal {links["forainmneach_forainmneach_réamhthagrach_links"]}
            </li>
            <li>strong form {links["forainmneach_foirm_threise_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="R">
      <ol>
        <li>relative clause: {links["an_clásal_coibhneasta_links"]}
          <ol>
            <li>adverb {links["an_clásal_coibhneasta_dobhriathar_links"]}
            </li>
            <li>antecedents {links["an_clásal_coibhneasta_réamhtheachtaí_links"]}
            </li>
            <li>comparative clause {links["an_clásal_coibhneasta_clásal_breischéime_links"]}
            </li>
            <li>compound forms {links["an_clásal_coibhneasta_foirmeacha_cumaisc_links"]}
            </li>
            <li>dependent form {links["an_clásal_coibhneasta_an_fhoirm_spleách_links"]}
            </li>
            <li>direct relative clause {links["an_clásal_coibhneasta_clásal_coibhneasta_díreach_links"]}
            </li>
            <li>independent form {links["an_clásal_coibhneasta_an_fhoirm_neamhspleách_links"]}
            </li>
            <li>indirect relative clause {links["an_clásal_coibhneasta_clásal_coibhneasta_indíreach_links"]}
            </li>
            <li>main clause {links["an_clásal_coibhneasta_príomhchlásal_links"]}
            </li>
            <li>parenthetical clause {links["an_clásal_coibhneasta_clásal_idiraisnéiseach_links"]}
            </li>
            <li>prepositions {links["an_clásal_coibhneasta_réamhfhocail_links"]}
            </li>
            <li>relative form {links["an_clásal_coibhneasta_an_fhoirm_choibhneasta_links"]}
            </li>
            <li>relative particle {links["an_clásal_coibhneasta_an_mhír_choibhneasta_links"]}
            </li>
            <li>subordinate clause {links["an_clásal_coibhneasta_fochlásal_links"]}
            </li>
            <li>successor {links["an_clásal_coibhneasta_iartheachtaí_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
    <HX level={2} navText="S">
      <ol>
        <li>slender consonant: {links["consan_caol_links"]}
          <ol>
            <li>adjective {links["consan_caol_aidiacht_links"]}
            </li>
            <li>genitive singular {links["consan_caol_ginideach_uatha_links"]}
            </li>
            <li>nominative plural {links["consan_caol_ainmneach_iolra_links"]}
            </li>
          </ol>
        </li>
        <li>surnames: {links["sloinnte_links"]}
        </li>
      </ol>
    </HX>
    <HX level={2} navText="V">
      <ol>
        <li>verb: {links["briathar_links"]}
          <ol>
            <li><i>má</i> and <i>nuair</i> {links["briathar_má_agus_nuair_links"]}
            </li>
            <li><i>muid</i> {links["briathar_muid_links"]}
            </li>
            <li><i>ná</i> {links["briathar_ná_links"]}
            </li>
            <li>conjugation, first {links["briathar_an_chéad_réimniú_links"]}
            </li>
            <li>conjugation, second {links["briathar_an_dara_réimniú_links"]}
            </li>
            <li>dependent {links["briathar_spleách_links"]}
            </li>
            <li>eclipsis {links["briathar_urú_links"]}
            </li>
            <li>independent {links["briathar_neamhspleách_links"]}
            </li>
            <li>irregular {links["briathar_neamhrialta_links"]}
            </li>
            <li>lenition {links["briathar_séimhiú_links"]}
            </li>
            <li>monosyllabic roots {links["briathar_fréamhacha_aonsiollacha_links"]}
            </li>
            <li>negative particle {links["briathar_an_mhír_dhiúltach_links"]}
            </li>
            <li>polysyllabic roots {links["briathar_fréamhacha_ilsiollacha_links"]}
            </li>
            <li>subjunctive mood {links["briathar_an_modh_foshuiteach_links"]}
            </li>
            <li>syncope {links["briathar_coimriú_links"]}
            </li>
            <li>verbal adjective {links["briathar_aidiacht_bhriathartha_links"]}
            </li>
            <li>verbal noun {links["briathar_ainm_briathartha_links"]}
            </li>
          </ol>
        </li>
        <li>verbal noun: {links["ainm_briathartha_links"]}
          <ol>
            <li>adjectival function {links["ainm_briathartha_feidhm_aidiachta_links"]}
            </li>
            <li>conjugation, first {links["ainm_briathartha_an_chéad_réimniú_links"]}
            </li>
            <li>conjugation, second {links["ainm_briathartha_an_dara_réimniú_links"]}
            </li>
            <li>declension {links["ainm_briathartha_díochlaonadh_links"]}
            </li>
            <li>genitive {links["ainm_briathartha_ginideach_links"]}
            </li>
            <li>nominal function {links["ainm_briathartha_feidhm_ainmfhocail_links"]}
            </li>
            <li>plural {links["ainm_briathartha_iolra_links"]}
            </li>
          </ol>
        </li>
        <li>vocative: {links["gairmeach_links"]}
          <ol>
            <li>vocative particle {links["gairmeach_an_mhír_ghairmeach_links"]}
            </li>
            <li>vocative plural {links["gairmeach_gairmeach_iolra_links"]}
            </li>
            <li>vocative singular {links["gairmeach_gairmeach_uatha_links"]}
            </li>
          </ol>
        </li>
      </ol>
    </HX>
  </HX>;
}