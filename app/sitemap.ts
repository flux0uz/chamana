import { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/navigation";
import { env } from "@/env.mjs";

const host = env.NEXT_PUBLIC_APP_URL;
const pathnames = ["/", "/about", "/reservations"];

function getUrl(pathname: string, locale: string) {
  return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return pathnames.map((path, i) => ({
    url: getUrl(path, defaultLocale),
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: i === 0 ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(path, locale)]),
      ),
    },
  }));
}
