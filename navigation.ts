import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const defaultLocale = "es" as const;
export const locales = ["es", "en"] as const;
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
