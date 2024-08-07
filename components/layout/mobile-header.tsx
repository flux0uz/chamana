"use client";

import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Link, usePathname } from "@/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { MenusAccordion } from "@/components/menus-accordion";

import logo from "@/public/images/logo-chamana.png";

export function MobileHeader() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const [showHeader, setShowHeader] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isTransparent, setIsTransparent] = React.useState(true);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);

      setIsTransparent(window.scrollY === 0);
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-transform duration-300 md:hidden",
        {
          "bg-black/10 backdrop-blur": !isTransparent,
          "bg-transparent": isTransparent,
          "translate-y-0 transform": showHeader,
          "-translate-y-full transform": !showHeader,
        },
      )}
    >
      <div className="flex h-20 w-full items-center justify-end px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="858.432"
                height="766.535"
                viewBox="0 0 858.432 766.535"
                className="h-7 w-7"
              >
                <path
                  d="M307.843,342.656c11.442-.534,23.257-.323,35.06-1.186,11.748-.9,23.535-2.888,34.415-7.937,1.447-.682,3.064-1.154,4.822-1.448.877-.148,1.785-.252,2.714-.321.937-.067,1.885-.099,2.766-.118,1.805-.029,3.654.064,5.47.228.421.042.839.083,1.254.125.386.047.77.093,1.148.138.76.099,1.505.211,2.229.33l.822.135.412.067.231.066.932.277.954.297c.103.021.109.06.293.068l.714-.006,1.426-.011c3.751-.011,7.75-.119,10.989.057,6.939.154,13.251.524,19.619.74,3.114.151,6.228.267,9.344.343,3.121.072,6.143.184,9.227.205,6.173.031,12.216.026,18.368-.279,3.637-.159,7.58.824,10.844-.007,16.662-4.192,33.336-4.194,49.88-3.246,16.554.95,33.031,2.768,49.47,2.283,23.204-.707,46.316,3.053,69.716-2.74,12.95-3.217,28.31-1.537,42.478-.709,21.359,1.261,42.705,2.752,64.084,4.482,21.405,1.749,42.741,3.664,64.474,6.07,3.4.387,6.631.796,9.693,1.494,3.053.692,5.839,1.61,8.206,2.924,4.873,2.699,7.968,6.951,8.172,14.138.13,4.077,2.963,7.896,5.578,11.983,2.771,4.157,5.261,8.627,4.708,13.769-.682,6.74-2.567,12.877-5.162,18.323-.649,1.361-1.345,2.679-2.079,3.951-.729,1.27-1.499,2.497-2.394,3.696-1.75,2.387-3.704,4.586-5.844,6.576-8.75,8.022-21.409,12.938-37.948,13.684-14.792.669-29.936-.723-45.004-.801-28.844-.105-57.592,5.036-86.633-3.253-10.362-2.959-23.118-1.39-34.654-.692-32.88,2.008-65.141-1.924-97.513-4.458-10.335-.81-21.066-2.42-31.04-1.01-13.18,1.843-26.294,3.198-39.293,4.283-12.989,1.068-25.967,1.888-38.189,2.834l-2.182.167-2.058.216c-1.37.145-2.735.29-4.099.435-1.441.127-2.517.324-3.739.477l-3.951.49c-2.275.291-4.557.551-6.844.776-1.896.118-3.789.211-5.693.279-.94.03-1.931.07-2.833.071-.885-.012-1.771-.025-2.66-.037-1.777-.039-3.563-.109-5.358-.214-3.643-.252-7.23-.262-10.908-.064-3.605.154-7.232.483-10.885.89-7.241.765-14.538,1.811-21.681,2.233-18.918,1.141-37.662,2.783-56.415,3.707-18.746.917-37.484,1.112-56.245-.761-43.625,8.546-89.357-1.351-132.972,10.152-13.536,3.567-29.635,4.439-45.301.698-36.696-8.779-40.585-14.074-26.109-42.535,3.44-6.791,7.945-13.358,12.965-19.524,7.103-8.726,15.609-13.341,31.141-14.219,21.67-1.225,43.045-7.584,63.969-13.065,16.771-4.391,32.759-9.617,51.196-7.646,6.638.713,13.891-1.201,20.671-2.516,30.998-6.029,62.214-8.318,95.229-5.35Z"
                  fill="#FFF"
                  strokeWidth="0"
                />
                <path
                  d="M283.221,4.184c5.742.098,11.574.333,17.465.536,5.898.178,11.816.276,17.766.228,11.844-.155,23.732-1.097,34.923-4.059,2.952-.818,6.806-.97,10.675-.854,1.905.047,3.853.176,5.764.348.893.084,1.776.166,2.639.247.849.096,1.679.189,2.48.279l1.71.212,1.364.193,1.383.204c.131.015.199.041.382.046l.654-.003,1.307-.006c3.452,0,7.051-.091,10.17.069,6.525.144,12.648.493,18.809.732,3.038.161,6.076.297,9.117.406,3.01.115,6.028.23,9.056.345,6.052.125,12.039.281,18.107.235,3.595-.004,7.49.679,10.728.277,16.545-1.988,33.071-1.335,49.505-.258,16.441,1.069,32.822,2.556,49.179,2.913,11.536.234,23.065,1.101,34.611,1.564,11.547.479,23.109.661,34.726-.171,12.85-.932,28.129.583,42.219,1.585,21.239,1.476,42.461,3.086,63.682,4.847l15.917,1.353c5.304.439,10.613.996,15.928,1.26,10.636.59,21.304.543,32.096-.194,6.703-.523,13.053-1.071,17.857-.742,2.429.222,4.465.674,5.944,1.627,1.486.907,2.404,2.289,2.652,4.242.281,2.203,3.206,3.932,5.975,6.073,2.861,2.181,5.521,4.878,5.238,8.304-.34,4.464-1.89,8.571-4.235,11.699-1.198,1.585-2.509,2.88-4.173,4.009-1.649,1.106-3.523,1.982-5.616,2.59-4.26,1.268-9.484,1.607-15.774,1.369-6.275-.236-13.582-1.069-21.894-1.901-3.711-.408-7.467-.726-11.231-1.012-3.762-.308-7.549-.495-11.346-.646-7.59-.255-15.223-.272-22.809-.307-29.035.029-57.884,2.578-87.168-.463-10.443-1.128-23.236-.202-34.82.385-33.02,1.646-65.455.86-97.978.539-10.387-.093-21.161-.594-31.206.6-13.273,1.563-26.498,2.953-39.652,4.272-13.147,1.276-26.291,2.618-38.931,4.189l-2.253.276-2.168.327c-1.442.218-2.879.435-4.314.652-1.486.197-2.729.48-4.067.718l-1.979.361-2.213.38c-2.019.325-4.045.631-6.078.913-1.781.191-3.563.366-5.355.524-.888.075-1.81.162-2.675.214-.854.042-1.71.084-2.568.126-1.716.074-3.44.128-5.175.157-3.542.028-7.071.204-10.676.53-3.556.283-7.141.684-10.751,1.145-7.176.87-14.416,1.949-21.52,2.577-37.584,3.17-74.855,8.891-112.365,7.68-5.446,1.15-10.924,2.068-16.433,2.833-5.508.776-11.039,1.421-16.591,1.944-11.101,1.051-22.27,1.656-33.437,2.335-11.168.683-22.334,1.439-33.437,2.895-11.103,1.5-22.141,3.769-33.057,7.442-13.543,4.573-29.655,6.858-45.337,4.337-9.182-1.521-16.31-3.076-21.614-5.036-5.303-1.928-8.781-4.279-10.658-7.455-3.78-6.333-1.042-16.051,6.18-31.884,3.449-7.544,7.961-14.734,12.986-21.341,7.109-9.357,15.614-13.959,31.142-14.382,10.831-.327,21.591-1.93,32.256-3.937,10.666-2.024,21.236-4.392,31.697-6.529,16.767-3.453,32.753-7.252,51.196-4.508,6.64.971,13.896-.319,20.679-1.055,15.509-1.725,31.077-2.636,46.906-2.522,15.831.102,31.925,1.165,48.483,3.117Z"
                  fill="#FFF"
                  strokeWidth="0"
                />
                <path
                  d="M628.558,762.906c-17.941-.874-37.325-3.106-55.067,1.006-2.327.575-5.358.592-8.38.437-1.491-.073-3.014-.21-4.508-.381-1.432-.156-2.712-.318-3.982-.505-1.064-.149-1.604-.247-2.343-.372l-1.065-.187c-.057-.021-.237-.023-.415-.025l-.515-.009-1.029-.019c-2.736-.053-5.527-.072-7.974-.254-5.122-.237-9.9-.636-14.724-.949-2.379-.185-4.758-.35-7.141-.495-2.356-.151-4.719-.302-7.088-.454-4.744-.223-9.427-.482-14.188-.569-2.814-.082-5.856-.691-8.403-.446-13.011,1.205-25.95.337-38.812-.85-12.864-1.189-25.676-2.695-38.49-3.322-9.038-.429-18.058-1.35-27.099-1.956-9.042-.621-18.102-1.004-27.226-.599-10.093.458-22.039-1.05-33.063-2.129-16.619-1.603-33.222-3.309-49.821-5.133l-12.449-1.393c-4.148-.454-8.299-1.004-12.46-1.32-8.326-.686-16.689-.87-25.164-.52-2.645.119-5.201.235-7.569.342-1.191.044-2.33.032-3.408.022-1.081-.001-2.094-.046-3.034-.154-3.805-.422-6.316-1.698-6.616-4.772-.175-1.73-2.43-3.143-4.555-4.875-2.198-1.767-4.224-3.928-3.937-6.605.352-3.488,1.644-6.673,3.547-9.075.97-1.216,2.031-2.205,3.355-3.053,1.316-.832,2.805-1.479,4.46-1.913,3.366-.904,7.471-1.06,12.398-.744,4.913.342,10.629,1.105,17.127,1.945,5.813.772,11.719,1.389,17.666,1.771,5.945.358,11.928.534,17.876.718,22.763.59,45.435-.804,68.329,2.197,8.163,1.102,18.212.647,27.306.433,25.922-.595,51.335.71,76.825,1.648,8.142.294,16.578.915,24.478.192,10.44-.939,20.836-1.752,31.18-2.5,10.337-.722,20.665-1.479,30.615-2.417,2.415-.188,4.598-.525,6.876-.784,2.325-.271,4.101-.646,6.41-.945,1.598-.214,3.201-.413,4.81-.593,1.457-.129,2.82-.215,4.243-.304l2.112-.114,2.017-.042c1.347-.021,2.701-.025,4.063-.011,11.095.203,22.56-1.741,33.763-2.477,29.532-1.755,58.87-5.403,88.25-3.68,8.585-1.554,17.264-2.435,25.989-3.045,8.725-.589,17.493-.828,26.262-1.125,8.769-.3,17.539-.657,26.273-1.564,8.735-.941,17.437-2.485,26.071-5.131,10.713-3.295,23.392-4.745,35.633-2.443,7.167,1.384,12.722,2.751,16.838,4.396,4.117,1.621,6.793,3.534,8.199,6.06,2.83,5.037.481,12.586-5.512,24.829-2.862,5.833-6.55,11.367-10.627,16.433-5.77,7.175-12.534,10.599-24.715,10.604-8.499.028-16.967,1.057-25.371,2.404-8.404,1.361-16.741,2.992-24.986,4.445-13.218,2.351-25.83,4.988-40.231,2.453-5.185-.899-10.901-.043-16.234.391-12.195,1.024-24.419,1.41-36.826.988-12.409-.413-25.004-1.583-37.944-3.46Z"
                  fill="#FFF"
                  strokeWidth="0"
                />
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[90%] pr-0">
            <div className="flex w-full items-center justify-between">
              <MobileLink
                href="/"
                className="flex items-center"
                onOpenChange={setOpen}
              >
                <Image
                  src={logo}
                  priority
                  alt="Chamana Ibiza logo"
                  className="h-auto w-44"
                />
              </MobileLink>
            </div>

            <div className="my-8 flex flex-col space-y-3">
              {siteConfig.navLinks?.map(
                (link) =>
                  link.href && (
                    <MobileLink
                      key={link.href}
                      href={link.href}
                      onOpenChange={setOpen}
                      className={clsx("text-xl font-semibold uppercase", {
                        "text-primary": pathname === link.href,
                      })}
                    >
                      {t(`menu.${link.i18nKey}`)}
                    </MobileLink>
                  ),
              )}

              <MenusAccordion />

              <Link
                href="/reservations"
                className="w-fit cursor-pointer border-b-2 border-primary text-center text-xl font-semibold uppercase"
              >
                {t("menu.book")}
              </Link>
            </div>

            <div className="mb-8">
              <LocaleSwitcher className="text-xl uppercase text-foreground" />
            </div>

            <div className="flex items-center gap-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.title}
                >
                  <link.icon className="h-6 w-6 fill-primary" />
                </a>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 stroke-primary" />
                <p className="text-lg">{t("menu.openingHours.text")}</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 stroke-primary" />
                <a
                  className="text-balance text-lg"
                  href="https://maps.app.goo.gl/udsfppCSizCRMReZ6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Carrer Josep Lluis Sert 4, 07800 Ibiza
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 stroke-primary" />
                <a
                  className="text-lg"
                  href={`tel:${siteConfig.phoneNumber}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 stroke-primary" />
                <a
                  className="text-lg"
                  href={`mailto:${siteConfig.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

interface MobileLinkProps extends Omit<LinkProps, "locale"> {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
