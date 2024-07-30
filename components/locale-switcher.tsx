"use client";

import * as React from "react";
import clsx from "clsx";
import { Link, locales, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

interface ILocaleSwitcherProps {
  className?: string;
}

export function LocaleSwitcher({ className }: ILocaleSwitcherProps) {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc, i) => (
        <React.Fragment key={loc}>
          <Link
            className={cn("text-lg", className, {
              "border-b-2 border-primary font-semibold text-primary":
                loc === locale,
              "font-medium text-muted hover:text-primary": loc !== locale,
            })}
            href={pathname}
            locale={loc}
          >
            {loc === "en" ? "English" : "Español"}
          </Link>
          <span>{i < locales.length - 1 && "|"}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
