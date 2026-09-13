import Header from "@/app/components/header";
import { RiHome6Fill } from "react-icons/ri";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header name="Tasks" icon={<RiHome6Fill />} />
      <div className="grow p-2 ">{children}</div>
    </>
  );
}
