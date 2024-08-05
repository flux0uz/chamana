import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { FoodCarousel } from "@/components/food-carousel";
import { AmbianceCarousel } from "@/components/ambiance-carousel";

import logo from "@/public/images/logo-chamana-white.png";
import welcomeImage from "@/public/images/welcome.png";
import heroBanner from "@/public/images/hero-banner.png";
import tapasImage from "@/public/images/tapas.png";

export default async function Home() {
  const t = await getTranslations("Home");
  const locale = await getLocale();

  return (
    <>
      <div className="relative top-0 h-dvh">
        <Image
          alt="Chamana ibiza"
          src={heroBanner}
          placeholder="blur"
          quality={100}
          sizes="100vw"
          priority
          fill
          style={{
            objectFit: "cover",
            zIndex: 20,
          }}
        />
        <div className="absolute inset-0 z-20 bg-black/60" />
        <div className="absolute inset-0 z-20 mx-auto flex max-w-4xl items-center justify-center px-6">
          <div className="flex flex-col items-center space-y-6 text-white">
            <Image
              src={logo}
              priority
              alt="Chamana Ibiza logo"
              className="h-auto w-96"
            />
            <h1 className="text-center text-4xl font-black md:text-5xl">
              {t("tagline")}
            </h1>
            <Button asChild className="text-2xl uppercase" size="lg">
              <Link href="/reservations">{t("book.cta")}</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 md:flex-row">
          <div className="w-full space-y-4 text-center md:text-left lg:w-1/2">
            <h2 className="text-balance text-4xl md:text-6xl">
              {t("about.title")}
            </h2>
            <p className="whitespace-pre-wrap text-balance text-xl">
              {t("about.text")}
            </p>
            <Button variant="link" size="none" asChild>
              <Link href="/reservations">{t("book.cta")}</Link>
            </Button>
          </div>
          <Image
            alt="Chamana"
            src={welcomeImage}
            placeholder="blur"
            width={500}
            height={500}
            className="overflow-hidden"
          />
        </div>
      </section>

      <section className="w-full">
        <FoodCarousel />
      </section>

      <section className="w-full bg-secondary py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:px-6">
          <Image
            alt="Tapas"
            src={tapasImage}
            placeholder="blur"
            width={500}
            height={500}
            className="overflow-hidden"
          />
          <div className="space-y-4 text-center md:text-left lg:w-1/2">
            <h2 className="text-balance text-4xl md:text-6xl">
              {t("menu.title")}
            </h2>
            <p className="whitespace-pre-wrap text-balance text-xl">
              {t("menu.text")}
            </p>
            <div className="flex items-center justify-center gap-6 sm:justify-normal">
              <Button variant="link" size="none" asChild>
                <a
                  href={`/menus/chamana-carta-${locale}.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("menu.ctaMenu")}
                </a>
              </Button>
              <Button variant="link" size="none" asChild>
                <a
                  href={`/menus/chamana-coktails-${locale}.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("menu.ctaCocktails")}
                </a>
              </Button>
              <Button variant="link" size="none" asChild>
                <a
                  href={`/menus/chamana-vinos-${locale}.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("menu.ctaVinos")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <AmbianceCarousel />
      </section>

      <section className="relative w-full py-12 md:py-24 lg:py-32">
        {/* <div className="absolute inset-0 bg-black opacity-30" /> */}
        <div className="container relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <div className="space-y-4">
            <h2 className="text-balance text-4xl md:text-6xl">
              {t("book.title")}
            </h2>
            <p className="whitespace-pre-wrap text-balance text-xl">
              {t("book.text")}
            </p>
            <Button asChild className="text-2xl font-bold uppercase" size="lg">
              <Link href="/reservations">{t("book.cta")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
