import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tpark.ru/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}