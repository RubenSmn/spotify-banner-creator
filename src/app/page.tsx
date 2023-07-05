import BannerProvider from "@/components/Provider";
import Preview from "@/components/Preview";
import Editor from "@/components/Editor";
import {
  Arima,
  Cookie,
  Finlandica,
  Lobster,
  Oswald,
  Roboto,
  ZCOOL_KuaiLe,
} from "next/font/google";

// https://fonts.googleapis.com/css2?family=Arima:wght@100;200;300;400;500;600;700&family=Cookie&family=Finlandica:wght@400;500;600;700&family=Oswald:wght@200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&family=ZCOOL+KuaiLe&family=Lobster&display=swap

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

const fonts = `${arima.variable} ${cookie.variable} ${finlandica.variable} ${oswald.variable} ${roboto.variable} ${zcool_kuaile.variable} ${lobster.variable}`;

export default function Home() {
  return (
    <BannerProvider>
      <main
        className={`mx-auto grid max-w-screen-lg flex-1 grid-cols-1 gap-8 px-4 text-black dark:text-white md:grid-cols-2 md:gap-4 ${fonts}`}
      >
        <Preview />
        <Editor />
      </main>
    </BannerProvider>
  );
}
