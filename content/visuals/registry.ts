import { demographie20272040 } from "@/content/visuals/demographie-2027-2040";
import { empruntMoyenCapacite } from "@/content/visuals/emprunt-moyen-capacite";
import { empruntMoyenMensualite } from "@/content/visuals/emprunt-moyen-mensualite";
import { financementRetraites } from "@/content/visuals/financement-retraites";
import { leRatioNEstPasLeService } from "@/content/visuals/le-ratio-n-est-pas-le-service";
import { lesQuatreBilans } from "@/content/visuals/les-quatre-bilans";
import { mecanismeDuEuro } from "@/content/visuals/mecanisme-du-euro";
import { parcoursMenageInteretsSeuls } from "@/content/visuals/parcours-menage-interets-seuls";
import { patrimoineVsEnveloppe } from "@/content/visuals/patrimoine-vs-enveloppe";
import { retraitesVsActifs } from "@/content/visuals/retraites-vs-actifs";
import { trajectoireCredit20272040 } from "@/content/visuals/trajectoire-credit-2027-2040";
import type { Visual } from "@/content/visuals/types";

/** Image 0 first; Le problème demography trio; then household arithmetic; mechanism, path, stock. */
export const visuals: Visual[] = [
  lesQuatreBilans,
  retraitesVsActifs,
  demographie20272040,
  financementRetraites,
  parcoursMenageInteretsSeuls,
  empruntMoyenMensualite,
  empruntMoyenCapacite,
  leRatioNEstPasLeService,
  trajectoireCredit20272040,
  mecanismeDuEuro,
  patrimoineVsEnveloppe,
];
