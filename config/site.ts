import { Facebook } from "@/components/icons/facebook";
import { Instagram } from "@/components/icons/instagram";
import { env } from "@/env.mjs";
import { Metadata } from "next";

export const siteConfig = {
  name: "Chamana Ibiza",
  shortName: "Chamana",
  url: env.NEXT_PUBLIC_APP_URL,
  openGraphImage: {
    images: [`${env.NEXT_PUBLIC_APP_URL}/`],
  } as Metadata["openGraph"],
  socialLinks: [
    {
      title: "Instagram",
      href: "https://www.instagram.com/chamana.ibiza/",
      icon: Instagram,
    },
    // {
    //   title: "Facebook",
    //   href: "",
    //   icon: Facebook,
    // },
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
