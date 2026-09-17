import Header from "@/app/components/header";
import { RiCalendar2Fill } from "react-icons/ri";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header name="Calendar" icon={<RiCalendar2Fill />} />
      <div className="grow p-2 ">{children}</div>
    </>
  );
}
