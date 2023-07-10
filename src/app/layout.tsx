import type { PropsWithChildren } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Metadata } from "next";
import {
  Arima,
  Cookie,
  Finlandica,
  Inter,
  Lobster,
  Oswald,
  Roboto,
  ZCOOL_KuaiLe,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const arima = Arima({
  subsets: ["latin"],
  variable: "--font-arima",
});

const cookie = Cookie({
  subsets: ["latin"],
  variable: "--font-cookie",
  weight: "400",
});

const finlandica = Finlandica({
  subsets: ["latin"],
  variable: "--font-finlandica",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

const zcool_kuaile = ZCOOL_KuaiLe({
  subsets: ["latin"],
  variable: "--font-zcool-kuaile",
  weight: "400",
});

const lobster = Lobster({
  subsets: ["latin"],
  variable: "--font-lobster",
  weight: "400",
});

const editorFonts = `${arima.variable} ${cookie.variable} ${finlandica.variable} ${oswald.variable} ${roboto.variable} ${zcool_kuaile.variable} ${lobster.variable}`;

export const metadata: Metadata = {
  title: "Spotify Banner Creator",
  description: "Tool to create minimalistic Spotify Playlist Banners",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-[100svh] flex-col bg-slate-100 dark:bg-slate-800 ${editorFonts}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
