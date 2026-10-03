import type { Metadata } from "next";
import { supersededVersionRobots } from "@/lib/crawl";
import type { PaperVersion, WorkingPaper } from "@/content/papers/types";
import { paperPath, versionPath } from "@/lib/papers";
import {
  absoluteUrl,
  publisherDescription,
  publisherId,
  siteId,
  siteName,
  socialImage,
  socialTwitter,
} from "@/lib/site";

export type PaperPlacement = "alias" | "version";

export type Crumb = {
  name: string;
  path: string;
};

export function paperCrumbs(
  paper: WorkingPaper,
  version: PaperVersion,
  placement: PaperPlacement,
): Crumb[] {
  const crumbs: Crumb[] = [
    { name: "Accueil", path: "/" },
    { name: "Documents", path: "/documents" },
    { name: paper.title, path: paperPath(paper) },
  ];

  if (placement === "version") {
    crumbs.push({
      name: `Version ${version.id}`,
      path: versionPath(paper, version.id),
    });
  }

  return crumbs;
}

export function documentMetadata(paper: WorkingPaper, version: PaperVersion): Metadata {
  const path = versionPath(paper, version.id);
  const title = `${paper.title} — ${version.id}`;

  return {
    title,
    description: paper.summary,
    ...supersededVersionRobots(version.id === paper.currentVersionId),
    alternates: {
      canonical: path,
      languages: { fr: path },
    },
    openGraph: {
      title: `${title} — ${siteName}`,
      description: paper.summary,
      url: path,
      siteName,
      locale: "fr_FR",
      type: "article",
      publishedTime: version.published,
      images: [socialImage],
    },
    twitter: socialTwitter(`${title} — ${siteName}`, paper.summary),
  };
}

export function sectionMetadata(page: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const openGraphTitle = page.title ? `${page.title} — ${siteName}` : siteName;

  return {
    ...(page.title ? { title: page.title } : {}),
    description: page.description,
    alternates: {
      canonical: page.path,
      languages: { fr: page.path },
    },
    openGraph: {
      title: openGraphTitle,
      description: page.description,
      url: page.path,
      siteName,
      locale: "fr_FR",
      type: "website",
      images: [socialImage],
    },
    twitter: socialTwitter(openGraphTitle, page.description),
  };
}

export function paperJsonLd(
  paper: WorkingPaper,
  version: PaperVersion,
  placement: PaperPlacement,
): Record<string, unknown> {
  const path = versionPath(paper, version.id);
  const url = absoluteUrl(path);
  const crumbs = paperCrumbs(paper, version, placement);
  const pagePath = placement === "version" ? path : paperPath(paper);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ScholarlyArticle",
        "@id": url,
        headline: paper.title,
        abstract: paper.summary,
        inLanguage: "fr",
        datePublished: version.published,
        version: version.id,
        url,
        mainEntityOfPage: url,
        isAccessibleForFree: true,
        creativeWorkStatus: version.verdict,
        isPartOf: {
          "@id": siteId(),
          "@type": "WebSite",
          name: siteName,
          url: absoluteUrl("/"),
        },
        publisher: {
          "@type": "Organization",
          "@id": publisherId(),
          name: siteName,
          url: absoluteUrl("/"),
          description: publisherDescription,
        },
        citation: paper.sources.map((source) => ({
          "@type": "CreativeWork",
          name: source.citation,
          ...(source.href ? { url: source.href } : {}),
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(pagePath)}#fil`,
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      },
    ],
  };
}
