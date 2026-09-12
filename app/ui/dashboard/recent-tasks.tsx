"use server";
import { getTaskData } from "@/lib/actions/actions";
import { geistSans } from "@/lib/fonts";

import Link from "next/link";

import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";

export const RecentTasks = async () => {
  const taskData = await getTaskData();

  taskData.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  return (
    <div
      className={`${geistSans.className} col-span-2 border rounded-xl dark:border-mist-800 border-mist-300 p-2`}
    >
      <div className=" flex items-center p-4 justify-between border-b border-mist-300 dark:border-mist-800">
        <p className="font-semibold ">Recent Tasks</p>
        <Link
          href="/dashboard/tasks"
          className="text-blue-700 dark:text-blue-400 text-sm"
        >
          View All
        </Link>
      </div>
      <div className="w-full p-3 space-y-3 ">
        {taskData.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium ">{task.task_name}</p>
              <p className="text-sm dark:text-gray-400 text-gray-600">
                {task.project_name}
              </p>
            </div>
            <div className="text-left h-full py-2 col-span-2  flex justify-center gap-2">
              <p className="text-sm font-medium">{task.priority}</p>
              {task.priority === "Low" ? (
                <FcLowPriority size="24" />
              ) : task.priority === "Medium" ? (
                <FcMediumPriority size="24" />
              ) : task.priority === "High" ? (
                <FcHighPriority size="24" />
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
