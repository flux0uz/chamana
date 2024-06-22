import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, defaultLocale } from "@/navigation";

export default createMiddleware({
  defaultLocale,
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
