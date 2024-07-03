import * as React from "react";
import { useTranslations } from "next-intl";
import { Clock, HourglassIcon, Mail, MapPin, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { BookModal } from "@/components/layout/book-modal";
import { siteConfig } from "@/config/site";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="pb-5 pt-10 md:px-8">
      <div className="container flex flex-col gap-6">
        <div>
          <div className="mx-auto flex flex-col gap-6 lg:flex-row lg:gap-0">
            <div className="w-full space-y-6 lg:w-1/4">
              <div className="space-y-2">
                <h6 className="font-bold uppercase">{t("address")}</h6>
                <div className="flex items-center gap-1">
                  <MapPin className="h-5 w-5 stroke-primary" />
                  <a
                    className="text-balance"
                    href="https://maps.app.goo.gl/udsfppCSizCRMReZ6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Carrer Josep Lluis Sert 4, 07800 Ibiza
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="font-bold uppercase">
                  {t("openingHours.title")}
                </h6>
                <div className="flex items-center gap-1">
                  <Clock className="h-5 w-5 stroke-primary" />
                  <p>{t("openingHours.text")}</p>
                </div>
              </div>
            </div>
            <div className="w-full space-y-6 lg:w-1/4">
              <div className="space-y-2">
                <h6 className="font-bold uppercase">{t("call")}</h6>
                <div className="flex items-center gap-1">
                  <Phone className="h-5 w-5 stroke-primary" />
                  <a
                    href={`tel:${siteConfig.phoneNumber}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {siteConfig.phoneNumber}
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="font-bold uppercase">{t("email")}</h6>
                <div className="flex items-center gap-1">
                  <Mail className="h-5 w-5 stroke-primary" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full space-y-2 lg:w-1/4">
              <h6 className="font-bold uppercase">{t("reserve.title")}</h6>
              <BookModal
                trigger={
                  <p className="w-fit cursor-pointer border-b-2 border-primary font-medium uppercase">
                    {t("reserve.text")}
                  </p>
                }
              />
            </div>
            <div className="w-full space-y-2 lg:w-1/4">
              <h6 className="font-bold uppercase">{t("follow")}</h6>
              <div className="flex items-center gap-3">
                {siteConfig.socialLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.title}
                  >
                    <link.icon className="h-5 w-5 fill-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <p className="text-balance text-center leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} {siteConfig.name} | {t("rights")}
        </p>
      </div>
    </footer>
  );
}
