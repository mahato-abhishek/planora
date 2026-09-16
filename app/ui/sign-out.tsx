"use client";
import { signOut } from "@/lib/actions/auth-actions";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

export function SignOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };
  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-mist-300 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-50 dark:border-mist-700 dark:text-red-300 dark:hover:bg-red-950/30"
    >
      Sign Out <FaSignOutAlt size="20" />
    </button>
  );
}
