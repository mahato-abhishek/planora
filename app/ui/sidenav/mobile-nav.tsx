"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FaTasks } from "react-icons/fa";
import { RiCalendarTodoFill, RiHome6Fill, RiTodoLine } from "react-icons/ri";

const links = [
  { name: "Home", href: "/dashboard", icon: <RiHome6Fill size="18" /> },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: <RiTodoLine size="18" />,
  },
  { name: "Tasks", href: "/dashboard/tasks", icon: <FaTasks size="16" /> },
  {
    name: "Schedule",
    href: "/dashboard/schedule",
    icon: <RiCalendarTodoFill size="18" />,
  },
];

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-mist-300 bg-mist-100/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-sm dark:border-mist-800 dark:bg-mist-900/95 lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-[11px] font-medium text-mist-600 dark:text-mist-400",
                isActive &&
                  "bg-mist-950 text-white dark:bg-mist-50 dark:text-black",
              )}
            >
              {link.icon}
              <span className="truncate">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
