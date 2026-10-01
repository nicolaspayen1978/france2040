import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "Cette adresse ne correspond à aucune page.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <h1>Page introuvable</h1>
      <p className="intro">Cette adresse ne correspond à aucune page.</p>
    </>
  );
}
