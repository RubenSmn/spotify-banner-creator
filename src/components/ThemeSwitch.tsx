"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

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
  const root = document.documentElement;
  const isDark = newTheme === "dark";

  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(newTheme);
}

function useTheme(
  defaultTheme: ThemeType,
): [
  theme: ThemeType,
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>,
] {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  return [theme, setTheme];
}

export function ThemeSwitch() {
  const [theme, setTheme] = useTheme("dark");

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
      aria-label={`toggle ${theme === "dark" ? "light" : "dark"} theme`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-amber-300 dark:text-gray-800 dark:hover:bg-amber-400 dark:focus:ring-amber-200"
    >
      {theme === "dark" ? (
        <SunIcon height={24} width={24} />
      ) : (
        <MoonIcon height={24} width={24} />
      )}
    </button>
  );
}
