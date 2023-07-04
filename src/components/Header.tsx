import Link from "next/link";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export function Header() {
  return (
    <header className="flex items-center p-4">
      <h1 className="text-3xl font-bold text-green-700 dark:text-green-400">
        Spotify Banner Creator
      </h1>
      <div className="ml-auto flex items-center gap-3">
        <Link
          href="https://github.com/rubensmn/spotify-banner-creator"
          className="text-black dark:text-white"
        >
          Github
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
}
