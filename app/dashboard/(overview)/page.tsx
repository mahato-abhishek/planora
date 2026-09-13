"use server";

import { Greetings } from "@/app/ui/dashboard/greetings";
import DashOverview from "@/app/ui/dashboard/dashboard-overview";
import { getProjectData } from "@/lib/actions/actions";
import { getTaskData } from "@/lib/actions/actions";

import { Suspense } from "react";

import RecentProjects from "@/app/ui/dashboard/recent-projects";
import { RecentTasks } from "@/app/ui/dashboard/recent-tasks";
import { TaskSkeleton } from "@/app/skeleton/task-skeleton";

const Dashboard = async () => {
  const [projectData, taskData] = await Promise.all([
    getProjectData(),
    getTaskData(),
  ]);

  return (
    <>
      <Suspense fallback={<TaskSkeleton />}></Suspense>
      <div className=" h-20 m-2 px-4 flex items-center justify-between ">
        <Greetings name="Abhishek" />
      </div>
      <DashOverview projectData={projectData} taskData={taskData} />
      <div className="grid grid-cols-5 p-5 gap-4">
        <RecentProjects projectData={projectData} taskData={taskData} />
        <RecentTasks taskData={taskData} />
      </div>
    </>
  );
};

export default Dashboard;
