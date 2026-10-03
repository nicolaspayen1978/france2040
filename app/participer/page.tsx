import Link from "next/link";
import { ShareAction } from "@/components/ShareAction";
import { sectionMetadata } from "@/lib/paperMeta";

export const metadata = sectionMetadata({
  title: "Participer à France 2040",
  description:
    "Critiquer les travaux, contribuer à la recherche, faire connaître le projet ou soutenir son financement.",
  path: "/participer",
});

export default function ParticipatePage() {
  return (
    <article className="page-prose participation-page">
      <p className="kicker">Projet de recherche indépendant</p>
      <h1>Participer à France 2040</h1>
      <p className="lede">
        France 2040 est un projet de recherche indépendant et ouvert à la contradiction.
      </p>
      <p>
        Vous pouvez y participer en critiquant une hypothèse, en apportant une source ou une
        expertise, en faisant connaître les travaux, ou en contribuant à leur financement.
      </p>

      <div className="participation-options">
        <section className="participation-option" id="critiquer-les-travaux">
          <p className="participation-number" aria-hidden="true">
            01
          </p>
          <h2>Critiquer les travaux</h2>
          <p>
            Contester une hypothèse, signaler une erreur, apporter une source ou proposer une autre
            lecture fait partie du travail. Les documents sont versionnés pour que la critique
            puisse viser un texte et un passage précis.
          </p>
          <p className="participation-note">
            Sur chaque document et visuel, « Critiquer » à côté d’un passage ouvre le formulaire déjà
            ciblé (document, version, ancre, section). Après confirmation de votre e-mail, le
            commentaire est examiné avant publication et n’altère pas le texte versionné.
          </p>
          <p className="participation-links">
            <Link href="/commentaires">Déposer ou lire un commentaire</Link>
            <Link href="/documents">Examiner les documents</Link>
          </p>
          <h3 id="revue-avec-un-modele-de-langage">Revue avec un modèle de langage</h3>
          <p>
            Un lecteur qui dispose d’un modèle avancé (Anthropic, OpenAI ou autre) peut lui faire
            relire le corpus <strong>actuel</strong>, puis déposer une critique sourcée. Ne pas
            mélanger les anciennes versions : le pack ci-dessous ne contient que les textes
            courants.
          </p>
          <p className="participation-note">
            Demander au modèle de citer le titre et l’identifiant de version, de distinguer
            hypothèse de scénario et nombre calculé, et de ne pas traiter les 700 Md€ comme une
            cible. La critique humaine passe ensuite par le formulaire ; elle n’écrit pas dans le
            snapshot.
          </p>
          <p className="participation-links">
            <a href="/llms-full.txt">Pack Markdown à coller dans le modèle</a>
            <a href="/llms.txt">Liste des versions actuelles à citer</a>
            <Link href="/commentaires">Envoyer la critique</Link>
          </p>
        </section>

        <section className="participation-option" id="contribuer-a-la-recherche">
          <p className="participation-number" aria-hidden="true">
            02
          </p>
          <h2>Contribuer à la recherche</h2>
          <p>
            Économistes, banquiers, chercheurs, agents publics, entrepreneurs et praticiens peuvent
            apporter une expertise, des données, un retour de terrain ou proposer une analyse.
          </p>
          <p className="participation-note">
            Un mécanisme de contact dédié sera publié ici. Les questions qui structurent déjà le
            travail sont accessibles dès maintenant.
          </p>
          <p className="participation-links">
            <Link href="/documents/questions-ouvertes">Voir les questions ouvertes</Link>
          </p>
        </section>

        <section className="participation-option" id="faire-connaitre-le-projet">
          <p className="participation-number" aria-hidden="true">
            03
          </p>
          <h2>Faire connaître le projet</h2>
          <p>
            Partager un document, une version citée, un visuel ou France 2040 lui-même permet
            d’élargir la contradiction et de faire circuler les travaux au-delà de leur premier
            public.
          </p>
          <p>
            <ShareAction
              title="France 2040"
              text="Projet de recherche indépendant et ouvert à la contradiction."
              url="/"
              label="Partager France 2040"
            />
          </p>
          <p className="participation-links">
            <Link href="/documents">Parcourir les documents</Link>
            <Link href="/en-images">Découvrir En images</Link>
          </p>
        </section>

        <section className="participation-option" id="soutenir-financierement">
          <p className="participation-number" aria-hidden="true">
            04
          </p>
          <h2>Soutenir financièrement</h2>
          <p>
            Vous pouvez contribuer à la poursuite des travaux et à leur publication en accès libre
            par un don du montant de votre choix.
          </p>
          <p>
            Cette contribution est volontaire et n’ouvre pas droit à une réduction fiscale. Le
            paiement est effectué sur la page de paiement Stripe ; ce site ne collecte pas vos
            données de paiement.
          </p>
          <p className="participation-action">
            <a
              href="https://buy.stripe.com/dRmcN68Sg14Sdxq79S7kc00"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Faire un don sur Stripe — ouvre la page de paiement dans un nouvel onglet"
            >
              Faire un don sur Stripe
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
