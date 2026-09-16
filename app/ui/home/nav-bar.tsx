"use client";

import Link from "next/link";
import { RiArrowRightLine, RiMenuLine } from "react-icons/ri";
import { useState } from "react";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed left-0 top-0 z-30 h-18 w-full p-2">
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between rounded-full border border-mist-200 bg-white px-2 shadow-xs dark:border-mist-700 dark:bg-mist-800">
          <a className="px-2 text-2xl font-bold" href="#hero">
            Planora
          </a>
          <div className="hidden items-center justify-center gap-5 text-sm lg:flex">
            <a className="hover:underline" href="#features">
              Features
            </a>
            <a className="hover:underline" href="#solutions">
              How it works
            </a>
            <a className="hover:underline" href="#workspace">
              Workspace
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="hidden text-sm text-mist-600 dark:text-mist-300 sm:block">
              Ready to plan?
            </span>
            <Link
              href="/auth"
              className="flex items-center gap-1 rounded-full border border-mist-950 bg-mist-950 px-4 py-2 text-sm text-white dark:border-mist-100 dark:bg-mist-100 dark:text-black"
            >
              Open Planora
              <RiArrowRightLine size="16" />
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-full border border-mist-300 p-2 lg:hidden dark:border-mist-600"
            >
              <RiMenuLine size="18" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mx-auto mt-2 flex w-full max-w-6xl flex-col gap-1 rounded-2xl border border-mist-200 bg-white p-2 text-sm shadow-xs dark:border-mist-700 dark:bg-mist-800 lg:hidden">
            <a
              className="rounded-lg px-3 py-2 hover:bg-mist-100 dark:hover:bg-mist-700"
              href="#features"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              className="rounded-lg px-3 py-2 hover:bg-mist-100 dark:hover:bg-mist-700"
              href="#solutions"
              onClick={() => setMenuOpen(false)}
            >
              How it works
            </a>
            <a
              className="rounded-lg px-3 py-2 hover:bg-mist-100 dark:hover:bg-mist-700"
              href="#workspace"
              onClick={() => setMenuOpen(false)}
            >
              Workspace
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};
