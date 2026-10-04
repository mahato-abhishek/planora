"use client";

import Image from "next/image";
import profile from "@/public/profile.webp";
import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine, RiUser3Line } from "react-icons/ri";
import { SignOut } from "../../ui/sign-out";

type ProfileProps = {
  size?: number;
};

export const Profile = ({ size = 44 }: ProfileProps) => (
  <Image
    src={profile}
    alt="Profile photo"
    width={size}
    height={size}
    className="size-11 rounded-xl border border-mist-300 bg-mist-300 object-cover dark:border-mist-600 dark:bg-mist-700"
  />
);

export const Account = ({
  name,
  email,
}: {
  name: string | undefined;
  email: string | undefined;
}) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const displayName = name || "Planora user";
  const displayEmail = email || "No email available";

  return (
    <div className="space-y-2">
      <button
        type="button"
        aria-expanded={profileOpen}
        onClick={() => setProfileOpen((open) => !open)}
        className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-mist-300 dark:hover:bg-mist-700 cursor-pointer "
      >
        <Profile />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold">
            {displayName}
          </span>
          <span className="mt-0.5 block truncate text-xs text-mist-600 dark:text-mist-400">
            {displayEmail}
          </span>
        </span>
        <span className="shrink-0 text-mist-500">
          {profileOpen ? (
            <RiArrowDownSLine size="18" />
          ) : (
            <RiArrowUpSLine size="18" />
          )}
        </span>
      </button>

      {profileOpen && (
        <div className="space-y-2 border-t border-mist-300 pt-2 dark:border-mist-600">
          <div className="rounded-lg bg-mist-100 p-3 dark:bg-mist-900">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-mist-500">
              <RiUser3Line size="15" /> Profile
            </div>
            <p className="mt-2 truncate text-sm font-medium">{displayName}</p>
            <p className="mt-1 break-all text-xs text-mist-600 dark:text-mist-400">
              {displayEmail}
            </p>
          </div>
          <SignOut />
        </div>
      )}
    </div>
  );
};
