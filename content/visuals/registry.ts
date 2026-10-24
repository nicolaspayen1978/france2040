import { casCentralPhase2 } from "@/content/visuals/cas-central-phase-2";
import { chocAdverseEtArret } from "@/content/visuals/choc-adverse-et-arret";
import { demographie20272040 } from "@/content/visuals/demographie-2027-2040";
import { empruntMoyenCapacite } from "@/content/visuals/emprunt-moyen-capacite";
import { empruntMoyenMensualite } from "@/content/visuals/emprunt-moyen-mensualite";
import { financementRetraites } from "@/content/visuals/financement-retraites";
import { intensiteBilanResidentiel } from "@/content/visuals/intensite-bilan-residentiel";
import { leRatioNEstPasLeService } from "@/content/visuals/le-ratio-n-est-pas-le-service";
import { lesQuatreBilans } from "@/content/visuals/les-quatre-bilans";
import { mecanismeDuEuro } from "@/content/visuals/mecanisme-du-euro";
import { memeCreditTransmissionFaible } from "@/content/visuals/meme-credit-transmission-faible";
import { parcoursMenageInteretsSeuls } from "@/content/visuals/parcours-menage-interets-seuls";
import { partIoNEstPasLeLtvConsolide } from "@/content/visuals/part-io-n-est-pas-le-ltv-consolide";
import { deuxPontsBancaires } from "@/content/visuals/deux-ponts-bancaires";
import { patrimoineVsEnveloppe } from "@/content/visuals/patrimoine-vs-enveloppe";
import { picOriginationContreProduction } from "@/content/visuals/pic-origination-contre-production";
import { quatreNombresDuResultat } from "@/content/visuals/quatre-nombres-du-resultat";
import { vagueMaturite20472060 } from "@/content/visuals/vague-maturite-2047-2060";
import { retraitesVsActifs } from "@/content/visuals/retraites-vs-actifs";
import { sureteDistinctePasEchelle } from "@/content/visuals/surete-distincte-pas-echelle";
import { quatreVoiesVersUnMarche } from "@/content/visuals/quatre-voies-vers-un-marche";
import { memeCapitalTroisMesures } from "@/content/visuals/meme-capital-trois-mesures";
import { trajectoireCredit20272040 } from "@/content/visuals/trajectoire-credit-2027-2040";
import type { Visual } from "@/content/visuals/types";

export type VisualGroup = {
  id: string;
  title: string;
  items: Visual[];
};

/** Editorial order: impact first, then mechanism, then supporting context. */
export const visualGroups: VisualGroup[] = [
  {
    id: "pacte-en-quatre-images",
    title: "Le Pacte en quatre images",
    items: [lesQuatreBilans, casCentralPhase2, memeCreditTransmissionFaible, chocAdverseEtArret],
  },
  {
    id: "comprendre-le-mecanisme",
    title: "Comprendre le mécanisme",
    items: [
      empruntMoyenMensualite,
      empruntMoyenCapacite,
      parcoursMenageInteretsSeuls,
      patrimoineVsEnveloppe,
      trajectoireCredit20272040,
      deuxPontsBancaires,
      quatreNombresDuResultat,
      mecanismeDuEuro,
      partIoNEstPasLeLtvConsolide,
      sureteDistinctePasEchelle,
      quatreVoiesVersUnMarche,
      memeCapitalTroisMesures,
      leRatioNEstPasLeService,
    ],
  },
  {
    id: "reperes-risques-contexte",
    title: "Repères, risques et contexte",
    items: [
      picOriginationContreProduction,
      vagueMaturite20472060,
      demographie20272040,
      retraitesVsActifs,
      financementRetraites,
      intensiteBilanResidentiel,
    ],
  },
];

export const visuals: Visual[] = visualGroups.flatMap((group) => group.items);
