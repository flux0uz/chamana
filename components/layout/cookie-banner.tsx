"use client";

import * as React from "react";
import clsx from "clsx";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { useLocale, useTranslations } from "next-intl";

import { env } from "@/env.mjs";

import { Button } from "../ui/button";
import { allConsentGranted } from "@/lib/gtm";

const IS_PROD = env.NEXT_PUBLIC_NODE_ENV === "production";

interface CookieBannerProps {
  waitBeforeShow?: number;
}

export function CookieBanner({ waitBeforeShow = 10000 }: CookieBannerProps) {
  const t = useTranslations("CookieBanner");
  const locale = useLocale();

  const isConsent = getCookie("cookie_consent");

  const [isShown, setIsShown] = React.useState<boolean>(false);
  const [consent, setConsent] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsShown(true), waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  React.useEffect(() => {
    setConsent(hasCookie("cookie_consent"));
    if (IS_PROD) {
      if (isConsent === "true" && isShown) {
        allConsentGranted();
      }
    }
  }, [isConsent, isShown]);

  const acceptCookie = async () => {
    setConsent(true);
    allConsentGranted();
    setCookie("cookie_consent", "true", { maxAge: 60 * 60 * 24 * 365 });
  };

  const closeBanner = async () => {
    allConsentGranted();
    setConsent(true);
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie("cookie_consent", "false", { maxAge: 14 * 24 * 60 * 60 });
  };

  if (!isShown || consent === true) {
    return null;
  }

  return (
    <div
      className={clsx(
        "fixed bottom-3 left-3 z-50 w-5/6 rounded-lg bg-card p-4 shadow-md sm:w-2/4 lg:w-2/5 xl:w-1/3",
        {
          hidden: consent,
          block: !consent,
        },
      )}
    >
      <p
        onClick={closeBanner}
        className="float-right mb-2 cursor-pointer font-normal"
      >
        {t("close")}
      </p>
      <div />
      <h2 className="clear-both text-2xl font-bold">{t("title")}</h2>
      <p className="mt-2 text-lg font-normal">{t("description")}</p>
      <span className="mb-3 text-lg">
        {t.rich("cookiePolicy", {
          a: (chunk) => (
            <a
              className="font-medium underline"
              href="/legal/cookies_policy_chamana.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {chunk}
            </a>
          ),
        })}
      </span>

      <div className="mt-2 flex justify-between align-middle">
        <button onClick={denyCookie} className="font-medium hover:underline">
          {t("continueNoAccept")}
        </button>
        <Button size="sm" onClick={acceptCookie}>
          {t("accept")}
        </Button>
      </div>
    </div>
  );
}
