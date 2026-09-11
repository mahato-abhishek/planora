import Header from "@/app/components/header";
import { Greetings } from "@/app/ui/dashboard/greetings";
import { DashOverview } from "@/app/ui/dashboard/dashboard-overview";

import { RiHome6Fill } from "react-icons/ri";

import RecentProjects from "@/app/ui/dashboard/recent-projects";
import { RecentTasks } from "@/app/ui/dashboard/recent-tasks";
import { getProjectData, getTaskData } from "@/lib/actions/actions";
import { ProjectType, TaskType } from "@/lib/types/types";

const Dashboard = async () => {
  const projects: ProjectType[] = await getProjectData();
  const tasks: TaskType[] = await getTaskData();

  return (
    <div>
      <Header name="Dashboard" icon={<RiHome6Fill />} />
      <div className=" h-20 m-2 px-4 flex items-center justify-between ">
        <Greetings name="Abhishek" />
      </div>
      <DashOverview projectData={projects} taskData={tasks} />
      <div className="grid grid-cols-5 p-5 gap-4">
        <RecentProjects projectData={projects} taskData={tasks} />
        <RecentTasks taskData={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
