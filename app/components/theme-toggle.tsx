"use client";

import { useSyncExternalStore } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export const ThemeToggle = () => {
  const dark = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("planora-theme-change", onChange);
      return () => window.removeEventListener("planora-theme-change", onChange);
    },
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );

  const toggleTheme = () => {
    const nextDark = !dark;
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("planora-theme", nextDark ? "dark" : "light");
    window.dispatchEvent(new Event("planora-theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-8 items-center justify-center rounded-lg border border-mist-200 bg-mist-100 text-mist-700 hover:bg-mist-200 dark:border-mist-700 dark:bg-mist-800 dark:text-mist-200 dark:hover:bg-mist-700 cursor-pointer"
    >
      {dark ? <RiSunLine size="18" /> : <RiMoonLine size="18" />}
    </button>
  );
};
