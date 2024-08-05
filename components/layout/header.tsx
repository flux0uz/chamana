"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/navigation";

import { HeaderLinks } from "@/components/layout/header-links";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "../locale-switcher";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Header");

  const [showHeader, setShowHeader] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isTransparent, setIsTransparent] = React.useState(true);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);

      setIsTransparent(window.scrollY === 0);
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 hidden w-full transition-transform duration-300 md:block",
        {
          "bg-black/10 backdrop-blur": !isTransparent,
          "bg-transparent": isTransparent,
          "translate-y-0 transform": showHeader,
          "-translate-y-full transform": !showHeader,
        },
      )}
    >
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <HeaderLinks />
        <div className="flex flex-1 items-center justify-between space-x-8 md:justify-end">
          <LocaleSwitcher />
          <Button asChild className="text-lg font-semibold uppercase" size="lg">
            <Link
              href="/reservations"
              className="w-fit cursor-pointer border-b-2 border-primary text-center font-medium uppercase md:text-xl"
            >
              {t("menu.book")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
