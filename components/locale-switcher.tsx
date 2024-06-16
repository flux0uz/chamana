"use client";

import * as React from "react";
import clsx from "clsx";
import { Link, locales, usePathname } from "@/navigation";
import { useLocale } from "next-intl";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc, i) => (
        <React.Fragment key={loc}>
          <Link
            className={clsx("text-lg font-semibold uppercase text-muted", {
              "font-bold text-primary": loc === locale,
            })}
            href={pathname}
            locale={loc}
          >
            {loc}
          </Link>
          <span>{i < locales.length - 1 && "|"}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
