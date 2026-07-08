import type { MetadataRoute } from "next";

// TODO(client): set the real production domain.
const BASE = "https://meridianwealth.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
