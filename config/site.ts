import { Metadata } from "next";
import { env } from "@/env.mjs";
import { Facebook } from "@/components/icons/facebook";
import { Instagram } from "@/components/icons/instagram";

export const siteConfig = {
  name: "Chamana Restaurant Ibiza",
  shortName: "Chamana",
  phoneNumber: "+34662318408",
  email: "reservations@chamanaibiza.com",
  url: env.NEXT_PUBLIC_APP_URL,
  openGraphImage: {
    images: [`${env.NEXT_PUBLIC_APP_URL}/images/og.png`],
  } as Metadata["openGraph"],
  socialLinks: [
    {
      title: "Instagram",
      href: "https://www.instagram.com/chamana.ibiza/",
      icon: Instagram,
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61552224514424",
      icon: Facebook,
    },
  ],
  navLinks: [
    {
      href: "/",
      i18nKey: "home",
    },
    {
      href: "/about",
      i18nKey: "about",
    },
  ],
  menusLinks: {
    i18nKey: "menus",
    items: [
      {
        i18nKey: "menu",
      },
      {
        i18nKey: "cocktails",
      },
      {
        i18nKey: "wine",
      },
    ],
  },
} as const;
