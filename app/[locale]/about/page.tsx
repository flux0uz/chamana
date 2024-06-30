import Image from "next/image";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { BookModal } from "@/components/layout/book-modal";

import storyImage from "@/public/images/story.png";
import tapasImage from "@/public/images/tapas.png";
import sanctuaryImage from "@/public/images/sanctuary.png";
import boticaImage from "@/public/images/botica.png";
import commitmentImage from "@/public/images/commitment.png";

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
      <section className="bg-secondary py-20">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="w-full space-y-2 lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("story.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("story.title")}
              </h2>
            </div>
            <p className="text-lg">{t("story.text")}</p>
          </div>
          <Image
            alt="about chamana"
            src={storyImage}
            placeholder="blur"
            quality={100}
            className="rounded-sm object-cover"
          />
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <Image
            alt="our tapas"
            src={tapasImage}
            placeholder="blur"
            quality={100}
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
            <p className="text-lg">{t("culinary.text")}</p>
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
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="w-full space-y-2 lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("sanctuary.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("sanctuary.title")}
              </h2>
            </div>
            <p className="text-lg">{t("sanctuary.text")}</p>
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
            placeholder="blur"
            quality={100}
            className="rounded-sm object-cover"
          />
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <Image
            alt="the botica"
            src={boticaImage}
            placeholder="blur"
            quality={100}
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
            <p className="text-lg">{t("boutique.text")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="w-full space-y-2 lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("commitment.subTitle")}
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {t("commitment.title")}
              </h2>
            </div>
            <p className="text-lg">{t("commitment.text")}</p>
            <BookModal
              trigger={
                <p className="w-fit cursor-pointer border-b-2 border-primary font-medium uppercase">
                  {t("sanctuary.cta")}
                </p>
              }
            />
          </div>
          <Image
            alt="our commitment"
            src={commitmentImage}
            placeholder="blur"
            quality={100}
            className="rounded-sm object-cover"
          />
        </div>
      </section>
    </div>
  );
}
