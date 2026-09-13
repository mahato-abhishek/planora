import Header from "@/app/components/header";
import { RiTodoLine } from "react-icons/ri";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header name="Projects" icon={<RiTodoLine />} />
      <div className="grow p-2 md:overflow-y-auto dark:bg-mist-950 bg-mist-50">
        {children}
      </div>
    </>
  );
}
