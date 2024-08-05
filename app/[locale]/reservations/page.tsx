import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { TableoIframe } from "@/components/layout/tableo-iframe";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("reservation.title"),
    description: t("reservation.description"),
    openGraph: {
      title: `${siteConfig.name} | ${t("reservation.title")}`,
      description: t("reservation.description"),
      type: "website",
      locale,
      siteName: siteConfig.name,
      url: `/${locale}/reservation`,
      ...siteConfig.openGraphImage,
    },
    twitter: {
      title: `${siteConfig.name} | ${t("reservation.title")}`,
      description: t("reservation.description"),
      card: "summary_large_image",
      ...siteConfig.openGraphImage,
    },
    alternates: {
      canonical: `/${locale}/reservation`,
      languages: {
        "x-default": "/es/reservation",
        es: "/es/reservation",
        en: "/en/reservation",
      },
    },
  };
}

export default async function ReservationsPage() {
  const t = await getTranslations("Reservations");
  const locale = await getLocale();

  return (
    <div className="min-h-dvh flex-1 bg-secondary">
      <section className="pb-20 pt-10 md:pt-20 lg:pt-24">
        <h1 className="text-center text-4xl md:text-6xl">{t("title")}</h1>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl">
          <TableoIframe />
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold md:text-5xl">
              {t("groups.title")}
            </h2>
            <p className="whitespace-pre-line text-pretty text-xl">
              {t("groups.text")}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={`tel:${siteConfig.phoneNumber}`}
              target="_blank"
              rel="noreferrer"
              className="w-fit cursor-pointer border-b-2 border-primary text-center text-xl font-medium uppercase"
            >
              {t("groups.callCta")}
            </a>
            <a
              href={`tel:${siteConfig.email}`}
              target="_blank"
              rel="noreferrer"
              className="w-fit cursor-pointer border-b-2 border-primary text-center text-xl font-medium uppercase"
            >
              {t("groups.emailCta")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
