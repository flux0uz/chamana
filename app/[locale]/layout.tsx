import "../globals.css";

import * as React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Organization, WithContext } from "schema-dts";
import { GoogleTagManager } from "@next/third-parties/google";

import { siteConfig } from "@/config/site";
import { fontGrostesk, fontObra } from "@/lib/font";
import { absoluteUrl } from "@/lib/utils";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileHeader } from "@/components/layout/mobile-header";
import { NavigationEvents } from "@/components/layout/navigation-events";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: string } }>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: t("description"),
    keywords: [
      "restaurant",
      "Ibiza",
      "food",
      "drinks",
      "tapas",
      "Argentina",
      "carne",
      "carne argentina",
      "cocktails",
      "cocktail de autor",
      "bar",
    ],
    openGraph: {
      type: "website",
      locale: locale,
      url: `/${locale}`,
      title: `${t("title")} | ${siteConfig.name}`,
      description: t("description"),
      siteName: siteConfig.name,
      ...siteConfig.openGraphImage,
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} | ${siteConfig.name}`,
      description: t("description"),
      ...siteConfig.openGraphImage,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "x-default": "/es",
        es: "/es",
        en: "/en",
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
    name: siteConfig.name,
    logo: absoluteUrl("/images/logo-chamana.png"),
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    url: absoluteUrl(`/${locale}`),
    image: absoluteUrl("/images/og.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Josep Lluis Sert 4",
      addressLocality: "Ibiza",
      postalCode: "07800",
      addressCountry: "ES",
    },
    openingHours: "We-Su 18:00-02:00",
    telephone: siteConfig.phoneNumber,
    email: siteConfig.email,
    hasMenu: absoluteUrl(`/menus/chamana-carta-${locale}.pdf`),
    acceptsReservations: absoluteUrl(`/${locale}`),
    servesCuisine: ["Argentinian", "Tapas", "Cocktails"],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      reviewCount: "131",
      ratingCount: "131",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <html
      lang={locale}
      className={`${fontGrostesk.variable} ${fontObra.variable}`}
    >
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <GoogleTagManager gtmId="GTM-K6SC72WQ" />

      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <MobileHeader />
            <main className="flex-1">
              <div className="border-b">{children}</div>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>

        <React.Suspense fallback={null}>
          <NavigationEvents />
        </React.Suspense>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6SC72WQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
