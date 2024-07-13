import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";

import welcomeImage from "@/public/images/welcome.png";
import landingImage from "@/public/images/landing.png";
import mateImage from "@/public/images/mate.png";
import tapasImage from "@/public/images/tapas.png";
import cocktailsImage from "@/public/images/cocktails.png";
import vinosImage from "@/public/images/wines.png";
import { HomeCarousel } from "@/components/home-carousel";

export default async function Home() {
  const t = await getTranslations("Home");
  const locale = await getLocale();

  return (
    <div className="min-h-dvh flex-1">
      <header className="relative h-[calc(100dvh-80px)]">
        <Image
          alt="logo chamana ibiza"
          src={landingImage}
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
        <div className="absolute inset-0 z-10 bg-secondary" />
        <div className="absolute inset-0 z-20 mx-auto flex max-w-4xl items-center justify-center px-6">
          <h1 className="text-center text-4xl text-white sm:text-5xl md:text-6xl">
            {t("tagline")}
          </h1>
        </div>
      </header>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:px-6">
          <div className="w-full space-y-4 text-center md:text-left lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("about.subTitle")}
              </span>
              <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl">
                {t("about.title")}
              </h2>
            </div>
            <p className="text-lg">{t("about.text")}</p>
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

      <section>
        <HomeCarousel />
      </section>

      <div className="flex flex-col">
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
              <div>
                <span className="text-lg font-semibold uppercase text-muted">
                  {t("tapas.subTitle")}
                </span>
                <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
                  {t("tapas.title")}
                </h2>
              </div>
              <p className="text-lg">{t("tapas.text")}</p>
              <Button variant="link" size="none" asChild>
                <a
                  href={`/menus/chamana-carta-${locale}.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("tapas.cta")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container flex flex-col-reverse items-center justify-center gap-8 px-4 md:flex-row md:px-6">
            <div className="space-y-4 text-center md:text-left lg:w-1/2">
              <div>
                <span className="text-lg font-semibold uppercase text-muted">
                  {t("cocktails.subTitle")}
                </span>
                <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
                  {t("cocktails.title")}
                </h2>
              </div>
              <p className="whitespace-pre-line text-lg">
                {t("cocktails.text")}
              </p>
              <Button variant="link" size="none" asChild>
                <a
                  href={`/menus/chamana-cocktails-${locale}.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("cocktails.cta")}
                </a>
              </Button>
            </div>
            <Image
              alt="Cocktails"
              src={cocktailsImage}
              placeholder="blur"
              width={500}
              height={500}
              className="overflow-hidden"
            />
          </div>
        </section>

        <section className="w-full bg-secondary py-20 md:py-32 lg:py-40">
          <div className="container flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:px-6">
            <Image
              alt="Vinos"
              src={vinosImage}
              placeholder="blur"
              width={500}
              height={500}
              className="overflow-hidden"
            />
            <div className="space-y-4 text-center md:text-left lg:w-1/2">
              <div>
                <span className="text-lg font-semibold uppercase text-muted">
                  {t("wine.subTitle")}
                </span>
                <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
                  {t("wine.title")}
                </h2>
              </div>
              <p className="text-lg">{t("wine.text")}</p>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container flex flex-col-reverse items-center justify-center gap-8 px-4 md:flex-row md:px-6">
            <div className="space-y-4 text-center md:text-left lg:w-1/2">
              <div>
                <span className="text-lg font-semibold uppercase text-muted">
                  {t("mate.subTitle")}
                </span>
                <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
                  {t("mate.title")}
                </h2>
              </div>
              <p className="whitespace-pre-line text-lg">{t("mate.text")}</p>
            </div>
            <Image
              alt="Mate"
              src={mateImage}
              placeholder="blur"
              width={500}
              height={500}
              className="overflow-hidden"
            />
          </div>
        </section>
      </div>

      <section className="relative w-full bg-secondary bg-center py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="container relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <div className="space-y-4 text-white">
            <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
              {t("book.title")}
            </h2>
            <p className="text-lg md:text-xl">{t("book.text")}</p>
            <div className="flex items-center justify-center">
              <Link
                href="/reservations"
                className="w-fit cursor-pointer border-b-2 border-primary text-center font-medium uppercase md:text-xl"
              >
                {t("book.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
