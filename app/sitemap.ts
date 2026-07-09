import type { MetadataRoute } from "next";

const base = "https://sadatmd.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    { url: `${base}/work`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.8 },
  ];
}
