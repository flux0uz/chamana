import { MetadataRoute } from "next";

import { env } from "@/env.mjs";

const CLIENT_BASE_URL = env.NEXT_PUBLIC_APP_URL;
const DOMAIN = env.NEXT_PUBLIC_APP_DOMAIN;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: `${CLIENT_BASE_URL}/sitemap.xml`,
    host: DOMAIN,
  };
}
