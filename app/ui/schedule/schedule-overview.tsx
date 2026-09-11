"use client";
import { ProjectType, TaskType } from "@/lib/types/types";
import { FC, useState } from "react";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
import Header from "@/app/components/header";
import { RiCalendar2Fill } from "react-icons/ri";
import { spaceMono, geistSans, geistMono } from "@/lib/fonts";

interface Props {
  taskData: TaskType[];
  projectData: ProjectType[];
}

const ScheduleView: FC<Props> = ({ taskData, projectData }) => {
  const [tasks, setTasks] = useState<TaskType[]>(taskData);
  const [projects, setProjects] = useState<ProjectType[]>(projectData);
  tasks.sort((a, b) => a.deadline.getTime() - b.deadline.getTime());

  return (
    <div>
      <Header name="Schedule" icon={<RiCalendar2Fill />} />
      <div
        className={`${geistSans.className} flex items-center justify-between p-4`}
      >
        <div className="grid grid-cols-9 w-full gap-6">
          <div className=" h-50  col-span-4 space-y-4">
            <p className="text-xl font-medium p-2 ">Project Deadline</p>
            <div className="fit w-full  space-y-1">
              <div
                className={`${spaceMono.className} border-2 py-2 px-4 h-full rounded-t-xl w-full grid grid-cols-6 gap-2 items-center  bg-mist-100 dark:border-mist-700 border-mist-300 dark:bg-mist-900 text-mist-500  text-sm `}
              >
                <p className="text-left col-span-2 border-r dark:border-mist-700 border-mist-300 font-semibold">
                  Deadline <span className="text-xs">(D/M/Y)</span>
                </p>

                <p className="text-left col-span-3 border-r dark:border-mist-700 border-mist-300 font-semibold">
                  Project
                </p>
                <p className="text-left col-span-1  dark:border-mist-700 border-mist-300 font-semibold">
                  Priority
                </p>
              </div>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`${geistSans.className} border-2 px-4 h-full  w-full grid grid-cols-6 gap-2 items-center  bg-mist-100 dark:border-mist-700 border-mist-300 dark:bg-mist-950  `}
                >
                  <p
                    className={`${geistMono.className} text-left h-full py-2 col-span-2 border-r dark:border-mist-700 border-mist-300 font-medium`}
                  >
                    {project.deadline.toLocaleDateString("en-In")}
                  </p>
                  <p className="col-span-3 h-full py-2 border-r dark:border-mist-700 border-mist-300 text-left  ">
                    {project.project_name}
                  </p>

                  <p className="flex items-center justify-center gap-2 h-full py-2 col-span-1  dark:border-mist-700 border-mist-300 text-sm">
                    {project.priority}
                    {project.priority === "Low" ? (
                      <FcLowPriority size="24" />
                    ) : project.priority === "Medium" ? (
                      <FcMediumPriority size="24" />
                    ) : project.priority === "High" ? (
                      <FcHighPriority size="24" />
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" h-50 space-y-4 col-span-5">
            <p className="text-xl font-medium p-2">Upcoming Tasks</p>
            <div className="fit w-full  space-y-1">
              <div
                className={`${spaceMono.className} border-2 py-2 px-4 h-full rounded-t-xl w-full grid grid-cols-9 gap-2 items-center  bg-mist-100 dark:border-mist-700 border-mist-300 dark:bg-mist-900 text-mist-500  text-sm `}
              >
                <p className="text-left col-span-2 border-r dark:border-mist-700 border-mist-300 font-semibold">
                  Date <span className="text-xs">(D/M/Y)</span>
                </p>
                <p className="col-span-3 border-r dark:border-mist-700 border-mist-300 text-left font-semibold ">
                  Task Name
                </p>
                <p className="text-left col-span-3 border-r dark:border-mist-700 border-mist-300 font-semibold">
                  Project
                </p>
                <p className="text-left col-span-1  dark:border-mist-700 border-mist-300 font-semibold">
                  Priority
                </p>
              </div>
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`${geistSans.className} border-2 px-4 h-full  w-full grid grid-cols-9 gap-2 items-center  bg-mist-100 dark:border-mist-700 border-mist-300 dark:bg-mist-950`}
                >
                  <p
                    className={`${geistMono.className} text-left h-full py-2 col-span-2 border-r dark:border-mist-700 border-mist-300 font-medium`}
                  >
                    {task.deadline.toLocaleDateString("en-In")}
                  </p>
                  <p className="col-span-3 h-full py-2 border-r dark:border-mist-700 border-mist-300 text-left ">
                    {task.task_name}
                  </p>
                  <p className="text-left h-full py-2 col-span-3 border-r dark:border-mist-700 border-mist-300 ">
                    {task.project_name}
                  </p>
                  <p className="flex items-center justify-center gap-2 h-full py-2 col-span-1  dark:border-mist-700 border-mist-300 text-xs">
                    {task.priority === "Low" ? (
                      <FcLowPriority size="24" />
                    ) : task.priority === "Medium" ? (
                      <FcMediumPriority size="24" />
                    ) : task.priority === "High" ? (
                      <FcHighPriority size="24" />
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScheduleView;
