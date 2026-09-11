"use client";

import { BiSearch } from "react-icons/bi";
import { BiCommand } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <button className="border border-mist-200 dark:border-mist-700 flex items-center justify-center gap-2 rounded-lg pl-2  p-1 bg-mist-100 dark:bg-mist-800 cursor-pointer">
      <BiSearch height="24" />
      <p className="text-xs px-2">Search ...</p>
      <p className="dark:bg-mist-600 bg-mist-200 rounded p-1 text-xs flex items-center-justify-center gap-1">
        {" "}
        <BiCommand height="20" /> K
      </p>
    </button>
  );
};
