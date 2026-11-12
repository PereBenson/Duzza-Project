import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { getAllEquipment, getAllWork } from "@/lib/content/repository";

const staticPaths = [
  "/",
  "/about",
  "/businesses",
  "/projects",
  "/projects/equipment",
  "/branding",
  "/work",
  "/contact",
  "/contact/project-enquiry",
  "/contact/branding-brief",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    ...staticPaths,
    ...getAllWork().map((item) => `/work/${item.slug}`),
    ...getAllEquipment().map((item) => `/projects/equipment/${item.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
