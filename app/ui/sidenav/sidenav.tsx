"use client";
import Image from "next/image";
import logo from "@/public/logo.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Account } from "./account";
import { Space_Mono } from "next/font/google";
import { RiHome6Fill, RiCalendarTodoFill, RiTodoLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";

const links = [
  { name: "Home", href: "/dashboard", icon: <RiHome6Fill height="24" /> },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: <RiTodoLine height="24" />,
  },
  { name: "Tasks", href: "/dashboard/tasks", icon: <FaTasks height="24" /> },
  {
    name: "Schedule",
    href: "/dashboard/schedule",
    icon: <RiCalendarTodoFill height="24" />,
  },
];
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function SideNav({
  name,
  email,
}: {
  name: string | undefined;
  email: string | undefined;
}) {
  const pathname = usePathname();
  console.log("SideNav render");
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 gap-4 dark:bg-mist-900 bg-mist-100">
      <Link
        key="logo"
        href="/dashboard"
        className="h-fit pb-4 px-2 border-b border-gray-300 dark:border-gray-700"
      >
        <div className="h-10 flex items-center justify-left gap-2">
          <Image src={logo} alt="logo" height="48" />
          <div className="flex flex-col justify-left  ">
            {" "}
            <h1 className="text-xl font-bold ">Planora</h1>
            <p className="text-xs text-gray-500  ">Plan better</p>
          </div>
        </div>
      </Link>

      <div className="flex h-full flex-col px-2 space-y-2">
        <p className={`${spaceMono.className} text-xs text-gray-500 p-2`}>
          MAIN MENU
        </p>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-8 grow items-center justify-center gap-2  rounded-md  p-2 text-sm font-medium dark:hover:bg-mist-800 hover:bg-mist-200  md:flex-none md:justify-start md:p-2 text-gray-700 dark:text-gray-500 dark:hover:text-white hover:text-black",
                {
                  "dark:bg-mist-800 bg-mist-200 dark:text-white text-black":
                    pathname === link.href,
                },
              )}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="bg-mist-200 dark:bg-mist-800 rounded-lg p-2 border dark:border-mist-600 border-mist-300">
        <Account name={name} email={email} />
      </div>
    </div>
  );
}
