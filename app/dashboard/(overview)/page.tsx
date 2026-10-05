"use server";

import { Greetings } from "@/app/ui/dashboard/greetings";
import DashOverview from "@/app/ui/dashboard/dashboard-overview";
import { getProjectData, getUser } from "@/lib/actions/actions";
import { getTaskData } from "@/lib/actions/actions";

import RecentProjects from "@/app/ui/dashboard/recent-projects";
import { RecentTasks } from "@/app/ui/dashboard/recent-tasks";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";


const Dashboard = async () => {
  const user = await getUser();
  const [projectData, taskData] = await Promise.all([
    getProjectData(),
    getTaskData(),
  ]);
  ; // Replace with actual logic to get the user's name
  return (
    <>
      <div className="flex flex-col gap-4 border-b border-mist-300 px-4 py-6 dark:border-mist-800 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <Greetings name={user?.name} />
        <Link
          href="/dashboard/tasks"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-mist-300 px-4 py-2 text-sm hover:bg-mist-200 dark:border-mist-700 dark:hover:bg-mist-800 sm:w-fit"
        >
          Review tasks <RiArrowRightLine size="16" />
        </Link>
      </div>
      <DashOverview projectData={projectData} taskData={taskData} />
      <div className="grid grid-cols-1 gap-4 p-3 sm:p-5 lg:grid-cols-5">
        <RecentProjects projectData={projectData} taskData={taskData} />
        <RecentTasks taskData={taskData} />
      </div>
    </>
  );
};

export default Dashboard;
