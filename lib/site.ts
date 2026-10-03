import type { Metadata } from "next";

export const siteName = "France 2040";

export const siteDescription =
  "Projet de recherche indépendant. Le Pacte du bilan français est une hypothèse à examiner, non un programme arrêté.";

export const publisherDescription =
  "Projet de recherche indépendant. Ce site n’est pas un site officiel de l’État.";

export const homeDescription =
  "France 2040 publie le Pacte du bilan français : une hypothèse de crédit adossé au logement. Ce projet teste ce qu’elle pourrait changer pour les ménages, l’investissement productif et les finances publiques — et à quelles conditions.";

export const socialImage = {
  url: "/og/france-2040.jpeg",
  width: 1672,
  height: 941,
  alt: "France 2040 — Travailler au bilan de demain, panorama de Paris et de la tour Eiffel",
};

export function socialTwitter(
  title: string,
  description: string,
): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: socialImage.url, alt: socialImage.alt }],
  };
}

/**
 * Absolute origin for canonicals. Vercel injects the production domain at build time.
 * A local build uses localhost and is not the deployed HTML. No site URL is hardcoded.
 */
export function siteOrigin(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production}`;

  const deployment = process.env.VERCEL_URL?.trim();
  if (deployment) return `https://${deployment}`;

  return "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  const origin = siteOrigin();
  if (path === "/" || path === "") return origin;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function siteId(): string {
  return `${siteOrigin()}/#site`;
}

export function publisherId(): string {
  return `${siteOrigin()}/#projet`;
}

export function siteGraph(): Record<string, unknown> {
  const home = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": siteId(),
        name: siteName,
        url: home,
        inLanguage: "fr",
        description: siteDescription,
        publisher: { "@id": publisherId() },
      },
      {
        "@type": "Organization",
        "@id": publisherId(),
        name: siteName,
        url: home,
        description: publisherDescription,
      },
    ],
  };
}
