import Link from "next/link";
import { COMMENT_DATA_CONTROLLER, COMMENT_PRIVACY_EMAIL } from "@/lib/commentPolicy";
import { sectionMetadata } from "@/lib/paperMeta";

export const metadata = sectionMetadata({
  title: "Données personnelles des commentaires",
  description: "Comment France 2040 utilise et conserve les données envoyées avec un commentaire.",
  path: "/commentaires/confidentialite",
});

export default function CommentPrivacyPage() {
  return (
    <article className="page-prose comments-page">
      <p className="kicker">Participation</p>
      <h1>Données personnelles des commentaires</h1>
      <p>
        Cette notice concerne les commentaires déposés sur France 2040. Le chat HEA dispose de son
        propre formulaire d’information et traite les échanges qui lui sont adressés séparément.
      </p>

      <h2>Responsable et contact</h2>
      <p>
        Le responsable du traitement des commentaires est {COMMENT_DATA_CONTROLLER}. Pour toute
        question ou demande concernant vos données de commentaire,
        écrivez à <a href={`mailto:${COMMENT_PRIVACY_EMAIL}`}>{COMMENT_PRIVACY_EMAIL}</a>.
      </p>

      <h2>Données et utilisation</h2>
      <p>
        Nous recueillons votre prénom, votre nom, votre adresse e-mail, le texte du commentaire,
        le lien LinkedIn si vous le fournissez, ainsi que la référence du document ou du passage
        commenté. Nous enregistrons les dates d’envoi, de vérification et de modération, ainsi que
        la date et la version de votre accord de publication. Une empreinte de l’adresse IP est
        conservée pendant une heure pour limiter les abus.
      </p>
      <p>
        Ces données servent à vérifier l’adresse e-mail, examiner la contribution et, si elle est
        acceptée, publier le prénom, le nom, le commentaire, sa date, sa référence et le lien LinkedIn
        éventuel. Votre adresse e-mail et la preuve de votre accord ne sont pas publiées. Aucun
        envoi commercial n’est lié au formulaire de commentaire.
      </p>

      <h2>Fondement et destinataires</h2>
      <p>
        Votre consentement fonde la publication des informations indiquées dans la case à cocher
        du formulaire. La prévention des abus et la sécurité du formulaire reposent sur l’intérêt
        légitime du projet. Seul le responsable du projet accède à la file de modération. Vercel
        héberge le site, Upstash conserve les commentaires et Resend envoie le courriel de
        vérification ; ces prestataires reçoivent les données nécessaires à leur service.
      </p>
      <p>
        Ces prestataires peuvent traiter des données hors de l’Espace économique européen,
        notamment aux États-Unis. Leurs accords de traitement décrivent les garanties applicables
        aux transferts : <a href="https://vercel.com/legal/dpa">Vercel</a>,{" "}
        <a href="https://upstash.com/trust/dpa.pdf">Upstash</a> et{" "}
        <a href="https://resend.com/legal/dpa">Resend</a>. Vous pouvez aussi demander ces
        informations à l’adresse de contact ci-dessus.
      </p>

      <h2>Durées de conservation</h2>
      <p>Dans notre base de commentaires, les durées maximales sont les suivantes :</p>
      <ul>
        <li>Commentaire non confirmé : 48 heures après l’envoi.</li>
        <li>Commentaire confirmé en attente : 90 jours après la confirmation.</li>
        <li>Commentaire refusé : 90 jours après la décision.</li>
        <li>Commentaire publié : trois ans après la décision de publication, sauf suppression demandée plus tôt.</li>
      </ul>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l’accès, la rectification ou l’effacement de vos données et retirer
        votre accord de publication à tout moment en écrivant à{" "}
        <a href={`mailto:${COMMENT_PRIVACY_EMAIL}`}>{COMMENT_PRIVACY_EMAIL}</a>.
        Indiquez l’adresse e-mail utilisée lors de l’envoi pour nous aider à retrouver votre
        contribution. Vous pouvez aussi demander la limitation du traitement, vous opposer au
        traitement fondé sur l’intérêt légitime, demander la portabilité lorsque ce droit
        s’applique, et déposer une réclamation auprès de la{" "}
        <a href="https://www.cnil.fr/fr/plaintes">CNIL</a>.
      </p>

      <p>
        <Link href="/commentaires/regles">Règles de publication</Link> ·{" "}
        <Link href="/commentaires">Retour aux commentaires</Link>
      </p>
    </article>
  );
}
