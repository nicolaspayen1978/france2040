import type { MetadataRoute } from "next";
import { getWorkingPapers, versionPath } from "@/lib/papers";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const papers = getWorkingPapers();
  const published = papers.flatMap((paper) => paper.versions.map((version) => version.published));
  const latest = published.sort().at(-1);
  const latestDate = latest ? new Date(`${latest}T00:00:00.000Z`) : undefined;

  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: latestDate },
    { url: absoluteUrl("/projet"), lastModified: latestDate },
    { url: absoluteUrl("/documents"), lastModified: latestDate },
  ];

  for (const paper of papers) {
    for (const version of paper.versions) {
      pages.push({
        url: absoluteUrl(versionPath(paper, version.id)),
        lastModified: new Date(`${version.published}T00:00:00.000Z`),
      });
    }
  }

  return pages;
}
