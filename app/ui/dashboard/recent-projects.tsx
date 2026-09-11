"use client";
import { ProjectType } from "@/lib/types/types";
import { FC, useState } from "react";
import Link from "next/link";
import { geistSans } from "@/lib/fonts";
import { TaskType } from "@/lib/types/types";
import { Progress } from "../projects/progress";

type Props = {
  projectData: ProjectType[];
  taskData: TaskType[];
};

const RecentProjects: FC<Props> = ({ projectData, taskData }) => {
  const [projects, setProjects] = useState<ProjectType[]>(projectData);
  projects.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  return (
    <div
      className={`${geistSans.className} col-span-3 font-medium border  rounded-xl dark:border-mist-800 border-mist-300 p-2`}
    >
      <div className=" flex items-center p-4 justify-between border-b border-mist-300 dark:border-mist-800">
        <p className="font-semibold ">Recent Projects</p>
        <Link
          href="/dashboard/projects"
          className="text-blue-700 dark:text-blue-400 text-sm"
        >
          View All
        </Link>
      </div>
      <div className="w-full p-3 space-y-3">
        {projects.map((p) => (
          <div key={p.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{p.project_name}</p>
              <p className="text-sm dark:text-gray-400 text-gray-600">
                {p.project_type}
              </p>
            </div>
            <div className="w-50/100">
              {" "}
              <Progress taskData={taskData} projectName={p.project_name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentProjects;
