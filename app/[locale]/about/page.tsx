import Image from "next/image";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

import kitchenImage from "@/public/images/kitchen.png";
import sistersImage from "@/public/images/sisters.png";
import boticaImage from "@/public/images/botica.png";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("about.title"),
    description: t("about.description"),
    openGraph: {
      title: `${siteConfig.name} | ${t("about.title")}`,
      description: t("about.description"),
      type: "website",
      locale,
      siteName: siteConfig.name,
      url: `/${locale}/about`,
      ...siteConfig.openGraphImage,
    },
    twitter: {
      title: `${siteConfig.name} | ${t("about.title")}`,
      description: t("about.description"),
      card: "summary_large_image",
      ...siteConfig.openGraphImage,
    },
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        "x-default": "/es/about",
        es: "/es/about",
        en: "/en/about",
      },
    },
  };
}

export default async function Page() {
  const t = await getTranslations("About");
  const locale = await getLocale();

  return (
    <div className="min-h-dvh flex-1">
      <section className="hidden">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>
      </section>

      <section className="bg-secondary pb-20 pt-20 md:pb-32 lg:pb-40 lg:pt-24">
        <div className="container max-w-3xl text-center">
          <div className="flex w-full flex-col items-center justify-center gap-8 space-y-2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("story.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("story.title")}
              </h2>
            </div>
            <Image
              alt="Chamana sisters"
              src={sistersImage}
              priority
              width={400}
              height={400}
              placeholder="blur"
              className="rounded-sm object-cover"
            />
            <p className="whitespace-pre-line text-pretty text-xl">
              {t("story.text")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-14">
          <Image
            alt="our tapas"
            src={kitchenImage}
            width={500}
            height={500}
            placeholder="blur"
            className="rounded-sm object-cover"
          />
          <div className="w-full space-y-2 lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("filosofía.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("filosofía.title")}
              </h2>
            </div>
            <p className="whitespace-pre-line text-xl">{t("filosofía.text")}</p>
            <Button variant="link" size="none" asChild>
              <a
                href={`/menus/chamana-carta-${locale}.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                {t("filosofía.cta")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-14">
          <div className="w-full space-y-2 lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("boutique.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("boutique.title")}
              </h2>
            </div>
            <p className="whitespace-pre-line text-xl">{t("boutique.text")}</p>
          </div>
          <Image
            alt="the botica"
            src={boticaImage}
            width={500}
            height={500}
            placeholder="blur"
            className="rounded-sm object-cover"
          />
        </div>
      </section>
    </div>
  );
}
