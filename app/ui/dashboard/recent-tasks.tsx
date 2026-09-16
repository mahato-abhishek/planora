import { geistSans } from "@/lib/fonts";
import { TaskType } from "@/lib/types/types";
import Link from "next/link";

import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";

export const RecentTasks = ({ taskData }: { taskData: TaskType[] }) => {
  const sortedTasks = [...taskData].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
  return (
    <div
      className={`${geistSans.className} col-span-1 min-w-0 overflow-hidden rounded-xl border border-mist-300 bg-mist-50 p-2 dark:border-mist-800 dark:bg-mist-950 lg:col-span-2`}
    >
      <div className=" flex items-center p-4 justify-between border-b border-mist-300 dark:border-mist-800">
        <div>
          <p className="font-semibold">Recent tasks</p>
          <p className="mt-1 text-xs text-mist-500">Latest activity</p>
        </div>
        <Link
          href="/dashboard/tasks"
          className="text-blue-700 dark:text-blue-400 text-sm"
        >
          View All
        </Link>
      </div>
      <div className="w-full space-y-2 overflow-y-auto p-3">
        {sortedTasks.slice(0, 5).map((task) => (
          <div
            key={task.id}
            className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-mist-200 p-3 dark:border-mist-800"
          >
            <div className="min-w-0">
              <p className="truncate font-medium">{task.task_name}</p>
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
