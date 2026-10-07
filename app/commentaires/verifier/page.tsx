import Link from "next/link";
import { verifyCommentToken } from "@/lib/comments";
import { sectionMetadata } from "@/lib/paperMeta";

export const dynamic = "force-dynamic";

export const metadata = {
  ...sectionMetadata({
    title: "Confirmation du commentaire",
    description: "Confirmation de l’adresse e-mail pour un commentaire France 2040.",
    path: "/commentaires/verifier",
  }),
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Promise<{ token?: string }>;
};

export default async function VerifyCommentPage({ searchParams }: PageProps) {
  const params = await searchParams;
  let ok = false;
  let message = "Lien de confirmation invalide ou expiré.";

  try {
    const record = await verifyCommentToken(params.token);
    ok = true;
    if (record.status === "accepted") {
      message = "Ce commentaire a déjà été confirmé et publié.";
    } else if (record.status === "rejected") {
      message = "Ce commentaire a déjà été traité.";
    } else {
      message =
        "Adresse confirmée. Votre commentaire est en file de modération. Vous n’avez rien d’autre à faire : s’il est accepté, il apparaîtra sur la page des commentaires.";
    }
  } catch (error) {
    message = error instanceof Error ? error.message : message;
  }

  return (
    <article className="page-prose comments-page wide-page">
      <p className="kicker">Participation</p>
      <h1>Confirmation</h1>
      <p className={ok ? "comment-form-success" : "comment-form-error"} role="status">
        {message}
      </p>
      <p className="participation-links">
        <Link href="/commentaires">Retour aux commentaires</Link>
      </p>
    </article>
  );
}
