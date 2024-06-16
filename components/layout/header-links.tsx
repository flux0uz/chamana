"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { Link, usePathname } from "@/navigation";

import { Menus } from "@/components/menus";

export function HeaderLinks() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 lg:gap-8">
      {siteConfig.navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "border-b-2 border-transparent text-lg font-semibold uppercase text-foreground/60 transition-colors hover:border-primary hover:text-foreground/80",
            {
              "border-primary": pathname === link.href,
            },
          )}
        >
          {t(`menu.${link.i18nKey}`)}
        </Link>
      ))}
      <Menus />
    </nav>
  );
}
