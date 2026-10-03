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
import { patrimoineVsEnveloppe } from "@/content/visuals/patrimoine-vs-enveloppe";
import { retraitesVsActifs } from "@/content/visuals/retraites-vs-actifs";
import { trajectoireCredit20272040 } from "@/content/visuals/trajectoire-credit-2027-2040";
import type { Visual } from "@/content/visuals/types";

/** Image 0 first; Le problème; household; mechanism; Phase 2 simulation trio; path, stock; EC-08. */
export const visuals: Visual[] = [
  lesQuatreBilans,
  retraitesVsActifs,
  demographie20272040,
  financementRetraites,
  parcoursMenageInteretsSeuls,
  empruntMoyenMensualite,
  empruntMoyenCapacite,
  partIoNEstPasLeLtvConsolide,
  leRatioNEstPasLeService,
  trajectoireCredit20272040,
  mecanismeDuEuro,
  casCentralPhase2,
  memeCreditTransmissionFaible,
  chocAdverseEtArret,
  patrimoineVsEnveloppe,
  intensiteBilanResidentiel,
];
