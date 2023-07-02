import type { PropsWithChildren } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Banner Creator",
  description: "Tool to create minimalistic Spotify Playlist Banners",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-[100svh] flex-col bg-slate-100 dark:bg-slate-800`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
