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
      onClick={handleSignOut}
      className="flex itmes-center justify-center gap-2 p-2 hover:bg-mist-300 dark:hover:bg-mist-600 cursor-pointer w-full rounded-lg"
    >
      Sign Out <FaSignOutAlt size="20" />
    </button>
  );
}
