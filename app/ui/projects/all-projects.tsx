import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import { Progress } from "./progress";

export const AllProjects = ({
  projectName,
  projectType,
  description,
  priority,
  projectId,
  deleteItem,
  editItem,
  progress,
}: {
  projectName: string;
  projectType: string;
  description: string | null;
  priority: string;
  projectId: number;

  deleteItem: (id: number) => void;
  editItem: () => void;
  progress?: { total: number; completed: number };
}) => {
  const handleDelete = () => {
    deleteItem(projectId);
  };

  return (
    <article className="flex h-full min-w-0 flex-col gap-4 rounded-xl border border-mist-300 bg-mist-50 p-4 dark:border-mist-700 dark:bg-mist-950">
      <div className="flex items-start justify-between gap-3">
        <p className="flex min-w-0 flex-col gap-1">
          <span className="truncate font-semibold">{projectName}</span>
          <span className="truncate text-xs font-medium text-mist-600 dark:text-mist-400">
            {projectType}
          </span>
        </p>
        <span
          className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase ${priority === "High" ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300" : priority === "Medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300" : "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"}`}
        >
          {priority}
        </span>
      </div>

      <Progress progress={progress} />
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-mist-500">
          <span>Progress</span>
          <span>
            {progress?.completed ?? 0} / {progress?.total ?? 0} tasks
          </span>
        </div>
        <p className="line-clamp-2 min-h-10 text-sm text-mist-600 dark:text-mist-400">
          {description || "No description"}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-mist-200 pt-3 dark:border-mist-800">
        <button
          onClick={handleDelete}
          className="rounded-lg border border-mist-300 p-1.5 text-red-600 hover:bg-red-50 dark:border-mist-700 dark:hover:bg-red-950/30 cursor-pointer"
        >
          <RiDeleteBinLine fill="red" size="16" />
        </button>

        <button
          type="button"
          onClick={editItem}
          aria-label={`Edit ${projectName}`}
          className="rounded-lg border border-mist-300 p-1.5 hover:bg-mist-200 dark:border-mist-700 dark:hover:bg-mist-800 cursor-pointer"
        >
          <RiEditLine size="16" />
        </button>
      </div>
    </article>
  );
};
