import Image from "next/image";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { BookModal } from "@/components/layout/book-modal";

import placeHolderAbout from "@/public/images/placeholder-about.jpg";
import { siteConfig } from "@/config/site";

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
      <div className="container space-y-10 py-14 lg:space-y-16">
        <section>
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
        </section>

        <section className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
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
            src={placeHolderAbout}
            quality={100}
            alt="Placeholder about"
            className="rounded-sm object-cover"
          />
        </section>

        <section className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <Image
            src={placeHolderAbout}
            quality={100}
            alt="Placeholder about"
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
        </section>

        <section className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
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
            src={placeHolderAbout}
            quality={100}
            alt="Placeholder about"
            className="rounded-sm object-cover"
          />
        </section>

        <section className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <Image
            src={placeHolderAbout}
            quality={100}
            alt="Placeholder about"
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
        </section>

        <section className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
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
            src={placeHolderAbout}
            quality={100}
            alt="Placeholder about"
            className="rounded-sm object-cover"
          />
        </section>
      </div>
    </div>
  );
}
