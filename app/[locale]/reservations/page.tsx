import { siteConfig } from "@/config/site";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ReservationsPage() {
  const t = await getTranslations("Reservations");
  const locale = await getLocale();

  return (
    <div className="min-h-dvh flex-1 bg-secondary">
      <section className="pb-20 pt-10 md:pt-20 lg:pt-24">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl">
          <iframe
            title="Tableo booking widget"
            src={`https://app.tableo.com/widget/chamana-ibiza-spain/?bgColor=%23ffffff&textColor=%23000000&googleFont=Raleway&fontSize=14&cornerStyle=none&textAlignment=left&formControlBgColor=%23ffffff&formControlColor=%23000000&formControlBorderColor=%23444444&formControlBorderShadow=0&formControlBorderWidth=1&formControlBorderOpacity=0.3&buttonBgColor=%237e6d5f&buttonTextColor=%23ffffff&language=${locale}`}
            width="100%"
            height=" 100%"
            style={{ border: "none", minHeight: "700px" }}
          />
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
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
              className="w-fit cursor-pointer border-b-2 border-primary text-center font-medium uppercase md:text-xl"
            >
              {t("groups.callCta")}
            </a>
            <a
              href={`tel:${siteConfig.email}`}
              target="_blank"
              rel="noreferrer"
              className="w-fit cursor-pointer border-b-2 border-primary text-center font-medium uppercase md:text-xl"
            >
              {t("groups.emailCta")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
