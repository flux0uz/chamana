import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/navigation";

import logo from "@/public/images/logo-chamana.png";

import { HeaderLinks } from "@/components/layout/header-links";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "../locale-switcher";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50 hidden w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:block">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-14 flex items-center space-x-2">
            <Image
              src={logo}
              priority
              alt="Chamana Ibiza logo"
              className="h-auto w-48"
            />
            <span className="sr-only">Chamana Ibiza</span>
          </Link>
          <HeaderLinks />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-8 md:justify-end">
          <Button asChild className="text-lg font-semibold uppercase">
            <Link
              href="/reservations"
              className="w-fit cursor-pointer border-b-2 border-primary text-center font-medium uppercase md:text-xl"
            >
              {t("menu.book")}
            </Link>
          </Button>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
