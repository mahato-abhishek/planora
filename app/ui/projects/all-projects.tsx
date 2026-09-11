import { TaskType } from "@/lib/types/types";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Progress } from "./progress";

export const AllProjects = ({
  projectName,
  projectType,
  description,
  priority,
  projectId,
  deleteItem,
  taskData,
}: {
  projectName: string;
  projectType: string;
  description: string | null;
  priority: string;
  projectId: number;

  deleteItem: (id: number) => void;
  taskData: TaskType[];
}) => {
  const handleDelete = () => {
    deleteItem(projectId);
  };

  return (
    <div className="flex flex-col gap-2 p-3 border rounded-xl dark:border-mist-700 border-mist-300 h-fit ">
      <div className="flex items-center justify-between">
        <p className="font-bold flex flex-col ">
          {projectName}
          <span className="text-sm font-medium dark:text-mist-400 text-mist-600">
            {projectType}
          </span>
        </p>
        <span
          className={` ${priority == "High" ? "bg-red-500" : ""} ${priority == "Medium" ? "bg-yellow-500" : ""} bg-green-600 rounded-full px-2 py-1 text-xs font-bold`}
        >
          {priority}
        </span>
      </div>

      <Progress projectName={projectName} taskData={taskData} />
      <div className="space-y-2">
        <p className="text-sm font-semibold">Description</p>
        <div className="border rounded h-fit border-mist-200 dark:border-mist-800 ">
          <p className="p-2 text-sm text-gray-600 dark:text-gray-400 h-20 overflow-hidden">
            {description}
          </p>
        </div>
      </div>
      <hr className="text-mist-300 dark:text-mist-800 my-1" />
      <div className="flex items-center justify-between ">
        <button
          onClick={handleDelete}
          className="px-2 py-1 border rounded-full border-mist-300 dark:border-mist-700 cursor-pointer"
        >
          <MdDelete fill="red" size="20" />
        </button>
        <button className="px-2 py-1 border rounded-full border-mist-300 dark:border-mist-700 ">
          <FaRegEdit size="18" />
        </button>
      </div>
    </div>
  );
};
