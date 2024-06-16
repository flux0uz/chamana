import { MetadataRoute } from "next";
import { env } from "@/env.mjs";

const CLIENT_BASE_URL = env.NEXT_PUBLIC_APP_URL;

const pages: MetadataRoute.Sitemap = [
  {
    url: "/",
    priority: 1,
    changeFrequency: "weekly",
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = pages.map((page) => ({
    url: `${CLIENT_BASE_URL}${page.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        es: `${CLIENT_BASE_URL}/es${page.url}`,
        en: `${CLIENT_BASE_URL}/en${page.url}`,
      },
    },
  })) as MetadataRoute.Sitemap;

  return routes;
}
