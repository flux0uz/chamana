import localFont from "next/font/local";
import { Darker_Grotesque } from "next/font/google";

const fontGrostesk = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontObra = localFont({
  src: "../assets/fonts/KCObraLetraRegular.woff2",
  weight: "300 900",
  style: "normal",
  variable: "--font-header",
  display: "swap",
});

export { fontGrostesk, fontObra };
