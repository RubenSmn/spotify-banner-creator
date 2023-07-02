"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function getInitialTheme(): ThemeType {
  const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (userMedia.matches) {
    return "dark";
  }

  // return dark as a default theme
  return "dark";
}

type ThemeType = "light" | "dark";

function rawSetTheme(newTheme: ThemeType) {
  const root = window.document.documentElement;
  const isDark = newTheme === "dark";

  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(newTheme);
}

export function ThemeSwitch() {
  const [theme, setTheme] = useState<ThemeType>(getInitialTheme());

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark");
      return newTheme;
    });
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-amber-600 dark:text-black dark:hover:bg-amber-700 dark:focus:ring-amber-500"
    >
      {theme === "dark" ? (
        <SunIcon className="text-white" height={24} width={24} />
      ) : (
        <MoonIcon className="text-white" height={24} width={24} />
      )}
    </button>
  );
}
