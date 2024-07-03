import Image from "next/image";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { BookModal } from "@/components/layout/book-modal";

import kitchenImage from "@/public/images/kitchen.png";
import sistersImage from "@/public/images/sisters.png";
import sanctuaryImage from "@/public/images/sanctuary.png";
import boticaImage from "@/public/images/botica.png";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("about.title"),
    description: t("about.description"),
    openGraph: {
      title: `${t("about.title")} | ${siteConfig.name}`,
      description: t("about.description"),
      type: "website",
      locale,
      siteName: siteConfig.name,
      url: `/${locale}/about`,
      ...siteConfig.openGraphImage,
    },
    twitter: {
      title: `${t("about.title")} | ${siteConfig.name}`,
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

      <section className="pb-20 pt-10 md:pb-32 md:pt-20 lg:pb-40 lg:pt-24">
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
              alt="founder sisters"
              src={sistersImage}
              priority
              width={500}
              height={500}
              placeholder="blur"
              className="rounded-sm object-cover"
            />
            <p className="whitespace-pre-line text-pretty text-lg">
              {t("story.text")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-32 lg:py-40">
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
                {t("culinary.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("culinary.title")}
              </h2>
            </div>
            <p className="whitespace-pre-line text-lg">{t("culinary.text")}</p>
            <Button variant="link" size="none" asChild>
              <a
                href={`/menus/chamana-carta-${locale}.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                {t("culinary.cta")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-14">
          <div className="w-full space-y-2 lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("sanctuary.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("sanctuary.title")}
              </h2>
            </div>
            <p className="whitespace-pre-line text-lg">{t("sanctuary.text")}</p>
            <BookModal
              trigger={
                <p className="w-fit cursor-pointer border-b-2 border-primary font-medium uppercase">
                  {t("sanctuary.cta")}
                </p>
              }
            />
          </div>
          <Image
            alt="chamana sanctuary"
            src={sanctuaryImage}
            width={500}
            height={500}
            placeholder="blur"
            className="rounded-sm object-cover"
          />
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-14">
          <Image
            alt="the botica"
            src={boticaImage}
            width={500}
            height={500}
            placeholder="blur"
            className="rounded-sm object-cover"
          />
          <div className="w-full space-y-2 lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("boutique.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("boutique.title")}
              </h2>
            </div>
            <p className="whitespace-pre-line text-lg">{t("boutique.text")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container max-w-3xl text-center">
          <div className="flex w-full flex-col items-center justify-center gap-8 space-y-2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("commitment.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("commitment.title")}
              </h2>
            </div>
            <p className="whitespace-pre-line text-lg">
              {t("commitment.text")}
            </p>
            <BookModal
              trigger={
                <p className="w-fit cursor-pointer border-b-2 border-primary font-medium uppercase">
                  {t("sanctuary.cta")}
                </p>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
