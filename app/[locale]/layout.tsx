import "../globals.css";

import Script from "next/script";
import type { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import { siteConfig } from "@/config/site";
import { fontGrostesk, fontObra } from "@/lib/font";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Organization, WithContext } from "schema-dts";
import { absoluteUrl } from "@/lib/utils";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: `${siteConfig.name} | %s`,
    },
    metadataBase: new URL(siteConfig.url),
    description: t("description"),
    keywords: [
      "restaurant",
      "Ibiza",
      "food",
      "drinks",
      "tapas",
      "argentina",
      "carne",
      "carne argentina",
      "cocktails",
      "cocktail de autor",
      "bar",
    ],
    openGraph: {
      type: "website",
      locale: locale,
      url: "/es",
      title: `${siteConfig.name} | ${t("title")}`,
      description: t("description"),
      siteName: siteConfig.name,
      ...siteConfig.openGraphImage,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${t("title")}`,
      description: t("description"),
      ...siteConfig.openGraphImage,
    },
    alternates: {
      canonical: `/es`,
      languages: {
        "x-default": "/es",
        es: "/es",
        fr: "/fr",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Chamana Ibiza",
    logo: absoluteUrl("/images/logo-chamana.png"),
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    url: absoluteUrl(`/${locale}`),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Josep Lluis Sert 4",
      addressLocality: "Ibiza",
      postalCode: "07800",
      addressCountry: "ES",
    },
    telephone: "+34 628 222 222", //TODO: update
  };

  return (
    <html
      lang={locale}
      className={`${fontGrostesk.variable} ${fontObra.variable}`}
    >
      <>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <body>
          <NextIntlClientProvider messages={messages}>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <div className="border-b">{children}</div>
              </main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </body>
      </>
    </html>
  );
}
