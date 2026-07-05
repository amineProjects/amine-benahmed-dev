import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";

// Required for `output: "export"` — render this route to a static file at build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/experience`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const studyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${base}/case-studies/${study.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...routes, ...studyRoutes];
}
