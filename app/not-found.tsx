import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <>
      <h1>Page introuvable</h1>
      <p className="intro">Cette adresse ne correspond à aucune page.</p>
    </>
  );
}
