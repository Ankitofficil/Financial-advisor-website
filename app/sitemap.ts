import type { MetadataRoute } from "next";
import { articles } from "@/lib/insights";

// TODO(client): set the real production domain.
const BASE = "https://meridianwealth.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/process",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    "/disclosures",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = articles.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
