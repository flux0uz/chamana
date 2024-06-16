import Image from "next/image";

import placeHolderAbout from "@/public/images/placeholder-about.jpg";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="min-h-dvh flex-1">
      <header className="relative h-[calc(100dvh-80px)]">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-center text-4xl text-white sm:text-5xl md:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
      </header>

      <section className="container py-14">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="w-full space-y-2 lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                {t("about.subTitle")}
              </span>
              <h2 className="text-balance text-3xl md:text-4xl">
                {t("about.title")}
              </h2>
            </div>
            <p>{t("about.text")}</p>
          </div>
          <Image
            src={placeHolderAbout}
            objectFit="cover"
            quality={100}
            alt="Placeholder about"
            className="rounded-sm"
          />
        </div>
      </section>
    </div>
  );
}
