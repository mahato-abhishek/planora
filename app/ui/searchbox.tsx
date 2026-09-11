"use client";
import { Modal } from "../components/modal/Modal";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRef } from "react";
import useClickOutside from "../components/modal/useClickOutside";

export const Searchbox = ({
  close,
}: {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const searchboxRef = useRef<HTMLDivElement>(null!);
  useClickOutside(searchboxRef, () => close(false));
  return (
    <Modal>
      <div
        className=" dark:bg-mist-900 bg-mist-100 dark:brightness-140 p-[6px] gap-2 h-120 flex justify-center flex-col  w-150  rounded-[20px]   border border-mist-400 dark:border-mist-600 "
        ref={searchboxRef}
      >
        <div className=" h-10 flex items-center justify-left px-5  gap-2 ">
          <FaMagnifyingGlass fill="gray" />
          <input
            type="text"
            className="w-full  focus:outline-none"
            placeholder="Search here..."
          />
        </div>
        <div className="h-full w-full bg-white outline-mist-300 dark:bg-mist-950 rounded-2xl dark:outline-mist-600 outline"></div>
        <div className="h-10"></div>
      </div>
    </Modal>
  );
};
