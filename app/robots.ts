import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const preview = process.env.VERCEL_ENV === "preview";

  return {
    rules: preview
      ? { userAgent: "*", disallow: "/" }
      : {
          userAgent: "*",
          allow: "/",
          disallow: ["/commentaires/moderation", "/commentaires/verifier", "/api/"],
        },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
