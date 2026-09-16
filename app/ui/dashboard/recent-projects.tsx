import Link from "next/link";
import { geistSans } from "@/lib/fonts";
import { TaskType } from "@/lib/types/types";
import { ProjectType } from "@/lib/types/types";
import { Progress } from "../projects/progress";

const RecentProjects = ({
  projectData,
  taskData,
}: {
  projectData: ProjectType[];
  taskData: TaskType[];
}) => {
  projectData.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  return (
    <div
      className={`${geistSans.className} col-span-1 min-w-0 overflow-hidden rounded-xl border border-mist-300 bg-mist-50 p-2 font-medium dark:border-mist-800 dark:bg-mist-950 lg:col-span-3`}
    >
      <div className=" flex items-center p-4 justify-between border-b border-mist-300 dark:border-mist-800">
        <div>
          <p className="font-semibold">Recent projects</p>
          <p className="mt-1 text-xs text-mist-500">Your latest workspaces</p>
        </div>
        <Link
          href="/dashboard/projects"
          className="text-blue-700 dark:text-blue-400 text-sm"
        >
          View All
        </Link>
      </div>
      <div className="w-full space-y-2 overflow-y-auto p-3">
        {projectData.slice(0, 5).map((p) => (
          <div
            key={p.id}
            className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-mist-200 p-3 dark:border-mist-800"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{p.project_name}</p>
              <p className="text-sm dark:text-gray-400 text-gray-600">
                {p.project_type}
              </p>
            </div>
            <div className="w-1/2 shrink-0">
              <Progress
                progress={(() => {
                  const projectTasks = taskData.filter(
                    (task) => task.project_name === p.project_name,
                  );
                  return {
                    total: projectTasks.length,
                    completed: projectTasks.filter(
                      (task) => task.task_status === "Done",
                    ).length,
                  };
                })()}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentProjects;
