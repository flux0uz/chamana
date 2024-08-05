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
            className={cn(
              "border-b-2 text-xl font-semibold uppercase text-white transition-colors hover:border-primary",
              className,
              {
                "border-primary": loc === locale,
                "border-transparent": loc !== locale,
              },
            )}
            href={pathname}
            locale={loc}
          >
            {loc === "en" ? "English" : "Español"}
          </Link>
          <span className="text-white">{i < locales.length - 1 && "|"}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
