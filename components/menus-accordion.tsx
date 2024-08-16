"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MenusAccordion() {
  const t = useTranslations("Header");
  const locale = useLocale();

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="justify-start gap-1 text-xl font-semibold uppercase tracking-normal">
          {t("menu.menus.title")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1 pb-0">
          <a
            href={`/menus/chamana-carta-${locale}.pdf`}
            target="_blank"
            rel="noreferrer"
            className="w-fit text-lg font-medium"
          >
            {t("menu.menus.menu")}
          </a>
          <a
            href={`/menus/chamana-cocktails-${locale}.pdf`}
            target="_blank"
            rel="noreferrer"
            className="w-fit text-lg font-medium"
          >
            {t("menu.menus.cocktails")}
          </a>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
