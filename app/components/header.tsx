"use client";

import { useState } from "react";
import { Searchbox } from "../ui/searchbox";
import { useKeyBindings } from "./modal/useKeyBinding";
import { BiSearch } from "react-icons/bi";
import { BiCommand } from "react-icons/bi";
import { ThemeToggle } from "./theme-toggle";

type Props = {
  name: "Dashboard" | "Tasks" | "Schedule" | "Projects" | "Activity";
  icon: React.ReactElement;
};

const Header = (prop: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useKeyBindings([
    {
      keys: ["Control", "k"],
      callback: () => setIsOpen((prev) => !prev),
    },
    {
      keys: ["Control", "d"],
      callback: () => setIsOpen((prev) => !prev),
    },
    {
      keys: ["Escape"],
      callback: () => setIsOpen(false),
    },
  ]);

  return (
    <>
      <div className="flex h-16 items-center justify-between gap-3 border-b border-gray-300 px-3 dark:border-gray-700 sm:px-4">
        <div className="flex min-w-0 items-center justify-center gap-2 text-lg sm:text-xl">
          {prop.icon} <h2>{prop.name}</h2>
        </div>
        <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Search projects and tasks"
            className="flex items-center justify-center gap-2 rounded-lg border border-mist-200 bg-mist-100 p-2 dark:border-mist-700 dark:bg-mist-800 sm:pl-2"
          >
            <BiSearch height="24" />
            <p className="hidden px-2 text-xs sm:block">Search...</p>
            <p className="hidden items-center-justify-center gap-1 rounded bg-mist-200 p-1 text-xs dark:bg-mist-600 sm:flex">
              <BiCommand height="20" /> K
            </p>
          </button>
        </div>
      </div>
      {isOpen && <Searchbox close={setIsOpen} />}
    </>
  );
};

export default Header;
