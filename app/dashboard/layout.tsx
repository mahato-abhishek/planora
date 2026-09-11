import SideNav from "@/app/ui/sidenav/sidenav";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
      <div className="w-full hidden lg:block flex-none md:w-64 border-r border-gray-300 dark:border-gray-700">
        <SideNav name={session.user.name} email={session.user.email} />
      </div>
      <div className="grow p-2 md:overflow-y-auto dark:bg-mist-950 bg-mist-50">
        {children}
      </div>
    </div>
  );
}
