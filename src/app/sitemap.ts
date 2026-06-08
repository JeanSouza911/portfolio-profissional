import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectEntries: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${siteConfig.url}/projects/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
