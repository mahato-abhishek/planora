import { MdCheckCircle } from "react-icons/md";
import { TbCircleDashed, TbAlertCircleFilled } from "react-icons/tb";
import { RiProgress2Line, RiDeleteBinLine, RiEditLine } from "react-icons/ri";

import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
import { geistMono, geistSans } from "@/lib/fonts";
import { useState } from "react";
type Props = {
  taskName: string;
  taskId: number;
  description: string | null;
  projectName: string;
  status: string;
  priority: string;
  date: string;
  deleteTask: (id: number) => void;
  editTask: () => void;
  changeStatus: (id: number, status: string) => void;
};

export const AllTasks = ({
  taskName,
  taskId,
  description,
  projectName,
  status,
  priority,
  date,
  deleteTask,
  editTask,
  changeStatus,
}: Props) => {
  const [acitveStatus, setActiveStatus] = useState<boolean>(false);

  const statusArr = [
    { name: "To Do", icon: <TbCircleDashed size="16" fill="grey" /> },
    { name: "In Progress", icon: <RiProgress2Line size="16" fill="blue" /> },
    { name: "In Review", icon: <TbAlertCircleFilled size="16" fill="red" /> },
    { name: "Done", icon: <MdCheckCircle size="16" fill="green" /> },
  ];
  const handleDelete = () => {
    deleteTask(taskId);
  };
  const handleChangeStatus = (name: string) => {
    changeStatus(taskId, name);
    setActiveStatus((prev) => !prev);
  };

  return (
    <div
      className={`${geistSans.className} grid min-h-16 grid-cols-17 w-full items-center gap-2 border-b border-mist-200 bg-mist-50 px-4 py-2 text-sm transition-colors hover:bg-white dark:border-mist-800 dark:bg-mist-950 dark:hover:bg-mist-900`}
    >
      <p className="col-span-3 min-w-0 truncate border-r border-mist-200 py-2 pr-2 font-semibold dark:border-mist-800">
        {taskName}
      </p>
      <p className="col-span-4 min-w-0 truncate border-r border-mist-200 py-2 pr-2 text-sm text-gray-700 dark:border-mist-800 dark:text-gray-400">
        {description || "No description"}
      </p>
      <p className="col-span-3 min-w-0 truncate border-r border-mist-200 py-2 pr-2 dark:border-mist-800">
        {projectName}
      </p>
      <p
        className={`${geistMono.className} col-span-2 border-r border-mist-200 py-2 pr-2 text-xs dark:border-mist-800`}
      >
        {date}
      </p>

      <div className="relative col-span-2 border-r border-mist-200 py-2 pr-2 dark:border-mist-800">
        <button
          type="button"
          onClick={() => setActiveStatus((prev) => !prev)}
          className="flex max-w-full items-center gap-1 rounded-md border border-mist-300 px-2 py-1 text-xs dark:border-mist-700"
        >
          {status === "To Do" ? (
            <TbCircleDashed size="16" fill="grey" />
          ) : status === "In Progress" ? (
            <RiProgress2Line size="16" fill="blue" />
          ) : status === "In Review" ? (
            <TbAlertCircleFilled size="16" fill="red" />
          ) : status === "Done" ? (
            <MdCheckCircle size="16" fill="green" />
          ) : (
            ""
          )}

          <span className="truncate">{status}</span>
          <span aria-hidden="true">⌄</span>
        </button>
        {acitveStatus && (
          <div className="absolute left-0 top-11 z-20 flex min-w-36 flex-col gap-1 rounded-lg border border-mist-300 bg-mist-50 p-1 text-sm shadow-lg dark:border-mist-600 dark:bg-mist-800">
            {statusArr.map((val) => (
              <button
                value={val.name}
                key={val.name}
                onClick={(e) => handleChangeStatus(e.currentTarget.value)}
                className="flex gap-1 rounded-md px-2 py-1 text-left hover:bg-mist-200 dark:hover:bg-mist-700"
              >
                {val.icon}
                {val.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <p className="col-span-2 flex items-center gap-2 border-r border-mist-200 py-2 pr-2 dark:border-mist-800">
        {priority === "Low" ? (
          <FcLowPriority size="20" />
        ) : priority === "Medium" ? (
          <FcMediumPriority size="20" />
        ) : priority === "High" ? (
          <FcHighPriority size="20" />
        ) : (
          ""
        )}
        {priority}
      </p>

      <div className="flex gap-1.5">
        <button
          type="button"
          aria-label={`Delete ${taskName}`}
          onClick={handleDelete}
          className="rounded-lg border border-mist-300 p-1.5 text-red-600 hover:bg-red-50 dark:border-mist-700 dark:hover:bg-red-950/30"
        >
          <RiDeleteBinLine size="16" />
        </button>

        <button
          type="button"
          onClick={editTask}
          aria-label={`Edit ${taskName}`}
          className="rounded-lg border border-mist-300 p-1.5 hover:bg-mist-200 dark:border-mist-700 dark:hover:bg-mist-800"
        >
          <RiEditLine size="16" />
        </button>
      </div>
    </div>
  );
};
