import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://rajatv.in", lastModified: new Date() },
    { url: "https://rajatv.in/experience", lastModified: new Date() },
    { url: "https://rajatv.in/projects", lastModified: new Date() },
    { url: "https://rajatv.in/blog", lastModified: new Date() },
  ];
}
