"use client";

import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";

import { Link, usePathname } from "@/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookModal } from "@/components/layout/book-modal";

import logo from "@/public/images/logo-chamana.png";
import { LocaleSwitcher } from "../locale-switcher";

export function MobileHeader() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="flex h-20 w-full items-center justify-between px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-14 flex items-center space-x-2">
            <Image
              src={logo}
              priority
              alt="Chamana Ibiza logo"
              className="h-auto w-40"
            />
            <span className="sr-only">Chamana Ibiza</span>
          </Link>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <svg
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
              >
                <path
                  d="M3 5H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[90%] pr-0">
            <div className="flex w-full items-center justify-between">
              <MobileLink
                href="/"
                className="flex items-center"
                onOpenChange={setOpen}
              >
                <Image
                  src={logo}
                  priority
                  alt="Chamana Ibiza logo"
                  className="h-auto w-44"
                />
              </MobileLink>
              <LocaleSwitcher />
            </div>

            <div className="my-12 flex flex-col space-y-3">
              {siteConfig.navLinks?.map(
                (link) =>
                  link.href && (
                    <MobileLink
                      key={link.href}
                      href={link.href}
                      onOpenChange={setOpen}
                      className={clsx("text-xl font-semibold uppercase", {
                        "text-primary": pathname === link.href,
                      })}
                    >
                      {t(`menu.${link.i18nKey}`)}
                    </MobileLink>
                  ),
              )}

              <p className="text-lg font-semibold uppercase">
                {t("menu.menus.title")}
              </p>

              <BookModal
                trigger={
                  <p className="w-fit cursor-pointer border-b-2 border-primary text-lg font-semibold uppercase">
                    {t("menu.book")}
                  </p>
                }
              />
            </div>

            <div className="flex items-center gap-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.title}
                >
                  <link.icon className="h-6 w-6 fill-primary" />
                </a>
              ))}
            </div>

            <Separator className="my-12" />

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="stroke-primary" />
                <a
                  className="text-balance text-lg"
                  href="https://maps.app.goo.gl/udsfppCSizCRMReZ6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Carrer Josep Lluis Sert 4, 07800 Ibiza
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="stroke-primary" />
                <a
                  className="text-lg"
                  href="tel:+34662318408"
                  target="_blank"
                  rel="noreferrer"
                >
                  +34 662 31 84 08
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="stroke-primary" />
                <a
                  className="text-lg"
                  href="mailto:reservations@chamanaibiza.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  reservations@chamanaibiza.com
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

interface MobileLinkProps extends Omit<LinkProps, "locale"> {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
