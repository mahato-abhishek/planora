import { MdDelete, MdEdit, MdCheckCircle } from "react-icons/md";
import { TbCircleDashed, TbAlertCircleFilled } from "react-icons/tb";
import { RiProgress2Line } from "react-icons/ri";

import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
import { geistMono, geistSans } from "@/lib/fonts";
import { ReactEventHandler, useState } from "react";
type Props = {
  taskName: string;
  taskId: number;
  description: string | null;
  projectName: string;
  status: string;
  priority: string;
  date: string;
  deleteTask: (id: number) => void;
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
      className={`${geistSans.className} border  px-4 h-full p w-full grid grid-cols-17 gap-2 items-center  bg-mist-100 dark:border-mist-700 border-mist-300 dark:bg-mist-950    `}
    >
      <p className="col-span-3 font-semibold  py-2  h-full border-r dark:border-mist-700 border-mist-300 text-left  ">
        {taskName}
      </p>
      <p className="col-span-4 h-full py-2  text-sm  border-r dark:border-mist-700 border-mist-300 text-left  text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <p className="text-left h-full py-2  col-span-3 border-r dark:border-mist-700 border-mist-300 ">
        {projectName}
      </p>
      <p
        className={`${geistMono.className} text-left h-full py-2  col-span-2 border-r dark:border-mist-700 border-mist-300 `}
      >
        {date}
      </p>

      <div className="text-center relative flex justify-left h-full py-2 col-span-2 border-r dark:border-mist-700 border-mist-300 ">
        {" "}
        <button
          onClick={() => setActiveStatus((prev) => !prev)}
          className="absolute flex items-center justify-center gap-1 border-2 rounded-full py-1 px-2 text-[13px] border-mist-300 dark:border-mist-700 cursor-pointer"
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

          {status}
          {"  ⏷"}
        </button>
        {acitveStatus && (
          <div className="border  rounded-lg z-20 relative top-9 left-[-4px] bg-mist-50 border-mist-300 dark:bg-mist-800 dark:border-mist-600 flex flex-col gap-1 p-1  text-sm">
            {statusArr.map((val) => (
              <button
                value={val.name}
                key={val.name}
                onClick={(e) => handleChangeStatus(e.currentTarget.value)}
                className="text-left hover:bg-mist-200 py-1 px-2 rounded-md dark:hover:bg-mist-700 flex gap-1 "
              >
                {val.icon}
                {val.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <p className="text-left h-full py-2 col-span-2 border-r dark:border-mist-700 border-mist-300 flex justify-left gap-2">
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

      <div className="flex  gap-2">
        <button className=" border-2 rounded border-mist-300 dark:border-mist-700 p-1 ">
          <MdDelete size="18" fill="red" onClick={handleDelete} />
        </button>

        <button className="border-2 rounded border-mist-300 dark:border-mist-700 p-1">
          <MdEdit size="18" />
        </button>
      </div>
    </div>
  );
};
