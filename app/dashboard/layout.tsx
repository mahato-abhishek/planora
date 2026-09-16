import SideNav from "@/app/ui/sidenav/sidenav";
import { MobileNav } from "@/app/ui/sidenav/mobile-nav";
import { getUser } from "@/lib/actions/actions";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    return <div>Not authenticated</div>;
  }
  console.log("layout render");

  return (
    <div className="flex min-h-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
      <MobileNav />
      <div className="hidden w-full flex-none border-r border-gray-300 dark:border-gray-700 lg:block lg:h-screen lg:w-64 lg:overflow-y-auto">
        <SideNav name={user.name} email={user.email} />
      </div>
      <div className="min-w-0 grow bg-mist-50 pb-20 dark:bg-mist-950 sm:p-2 lg:h-screen lg:overflow-y-auto lg:pb-2">
        {children}
      </div>
    </div>
  );
}
