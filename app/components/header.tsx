"use client";

import { useState } from "react";
import { Searchbox } from "../ui/searchbox";
import { useKeyBindings } from "./modal/useKeyBinding";
import { BiSearch } from "react-icons/bi";
import { BiCommand } from "react-icons/bi";

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
      <div className="border-b border-gray-300 dark:border-gray-700 h-16 flex items-center justify-between px-4">
        <div className="flex items-center justify-center gap-2 text-xl">
          {prop.icon} <h2>{prop.name}</h2>
        </div>
        <div className="flex items-center justify-center gap-5 ">
          <button
            onClick={() => setIsOpen(true)}
            className="border border-mist-200 dark:border-mist-700 flex items-center justify-center gap-2 rounded-lg pl-2  p-1 bg-mist-100 dark:bg-mist-800"
          >
            <BiSearch height="24" />
            <p className="text-xs px-2">Search...</p>
            <p className="dark:bg-mist-600 bg-mist-200 rounded p-1 text-xs flex items-center-justify-center gap-1">
              {" "}
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
