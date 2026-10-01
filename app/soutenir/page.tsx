import { sectionMetadata } from "@/lib/paperMeta";

export const metadata = sectionMetadata({
  title: "Soutenir France 2040",
  description:
    "Contribuer volontairement au travail de recherche indépendant et à la publication en accès libre de France 2040.",
  path: "/soutenir",
});

export default function SupportPage() {
  return (
    <article className="page-prose support-page">
      <p className="kicker">Projet de recherche indépendant</p>
      <h1>Soutenir France 2040</h1>
      <p className="lede">
        France 2040 est un projet de recherche indépendant. Si vous souhaitez contribuer à la
        poursuite de nos travaux et à leur publication en accès libre, vous pouvez faire un don du
        montant de votre choix.
      </p>
      <p>Cette contribution est volontaire et n’ouvre pas droit à une réduction fiscale.</p>
      <p>
        Le paiement est effectué sur la page de paiement Stripe. Ce site ne collecte pas vos
        données de paiement.
      </p>
      <p className="support-action">
        <a
          href="https://buy.stripe.com/dRmcN68Sg14Sdxq79S7kc00"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Faire un don sur Stripe — ouvre la page de paiement dans un nouvel onglet"
        >
          Faire un don sur Stripe
        </a>
      </p>
    </article>
  );
}
