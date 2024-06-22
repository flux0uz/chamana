"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

export function Menus() {
  const t = useTranslations("Header.menu");
  const locale = useLocale();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg font-semibold uppercase">
            {t("menus.title")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-[200px] flex-col gap-3 p-4">
              <ListItem
                href={`/menus/chamana-carta-${locale}.pdf`}
                target="_blank"
                rel="noreferrer"
                title={t("menus.menu")}
                className="w-fit cursor-pointer border-b-2 border-transparent font-medium hover:border-primary"
              />
              <ListItem
                href={`/menus/chamana-cocktails-${locale}.pdf`}
                target="_blank"
                rel="noreferrer"
                title={t("menus.cocktails")}
                className="w-fit cursor-pointer border-b-2 border-transparent font-medium hover:border-primary"
              />
              <ListItem
                href={`/menus/chamana-vinos-${locale}.pdf`} //TODO: add file
                target="_blank"
                rel="noreferrer"
                title={t("menus.wine")}
                className="w-fit cursor-pointer border-b-2 border-transparent font-medium hover:border-primary"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 leading-none no-underline outline-none",
            className,
          )}
          {...props}
        >
          <div className="text-foreground/60 transition-colors hover:text-foreground/80">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
