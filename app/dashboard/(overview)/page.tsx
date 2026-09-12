import Header from "@/app/components/header";
import { Greetings } from "@/app/ui/dashboard/greetings";
import { DashOverview } from "@/app/ui/dashboard/dashboard-overview";

import { RiHome6Fill } from "react-icons/ri";

import RecentProjects from "@/app/ui/dashboard/recent-projects";
import { RecentTasks } from "@/app/ui/dashboard/recent-tasks";

const Dashboard = () => {
  return (
    <>
      <Header name="Dashboard" icon={<RiHome6Fill />} />
      <div className=" h-20 m-2 px-4 flex items-center justify-between ">
        <Greetings name="Abhishek" />
      </div>
      <DashOverview />
      <div className="grid grid-cols-5 p-5 gap-4">
        <RecentProjects />
        <RecentTasks />
      </div>
    </>
  );
};

export default Dashboard;
