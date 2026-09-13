import Header from "@/app/components/header";
import { FaTasks } from "react-icons/fa";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header name="Tasks" icon={<FaTasks />} />
      <div className="grow p-2  ">{children}</div>
    </>
  );
}
