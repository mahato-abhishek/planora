"use client";
import SideNav from "@/app/ui/sidenav/sidenav";
import { getUser } from "@/lib/actions/actions";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  type Props = {
    userName: string | undefined;
    email: string | undefined;
  };
  const [session, setSession] = useState<Props | null>();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setSession({ userName: user?.name, email: user?.email });
      console.log(user);
    };
    fetchUser();
  }, []);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
      <div className="w-full hidden lg:block flex-none md:w-64 border-r border-gray-300 dark:border-gray-700">
        <SideNav name={session?.userName} email={session?.email} />
      </div>
      <div className="grow p-2 md:overflow-y-auto dark:bg-mist-950 bg-mist-50">
        {children}
      </div>
    </div>
  );
}
