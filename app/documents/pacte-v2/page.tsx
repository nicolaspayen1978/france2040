import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pacte du Bilan Français — V2",
  description:
    "Document de travail V2 du 28 septembre 2026. Hypothèse de recherche, non une recommandation de politique publique.",
};

export default function WorkingPaperPage() {
  return (
    <article className="pact">
      <p className="kicker">Document de travail · 28 septembre 2026</p>
      <h1>Pacte du Bilan Français</h1>
      <p className="lede">Texte complet de l’hypothèse. Version V2.</p>
      <div className="version-box">
        <p>Document de travail V2 — 28 septembre 2026</p>
        <p>
          Ce document présente une hypothèse de recherche, non une recommandation de politique
          publique. Les hypothèses, le modèle et les conclusions sont appelés à évoluer à mesure
          que la proposition est mise à l’épreuve. La critique et les tentatives de réfutation sont
          encouragées.
        </p>
      </div>
      <p>
        Ce fichier est le texte de référence. La page <Link href="/pacte">Le Pacte</Link> en est
        une lecture courte. Elle ne le remplace pas.
      </p>
      <ul className="downloads">
        <li>
          <a href="/sources/pacte-du-bilan-francais-v2.docx">Télécharger le document Word</a>
        </li>
      </ul>
    </article>
  );
}
