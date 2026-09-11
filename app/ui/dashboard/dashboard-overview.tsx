import { BiSolidCheckCircle } from "react-icons/bi";
import { TbProgress } from "react-icons/tb";
import { GoCodeReview } from "react-icons/go";
import { spaceMono } from "@/lib/fonts";
import { FcTodoList } from "react-icons/fc";
import { RiTodoLine } from "react-icons/ri";
import { ProjectType, TaskType } from "@/lib/types/types";
import { FC } from "react";
type Props = {
  title: string;
  count: number;
  icon: React.ReactElement;
};
type props = {
  projectData: ProjectType[];
  taskData: TaskType[];
};

export const DashOverview: FC<props> = ({ projectData, taskData }) => {
  const viewList = [
    {
      title: "TOTAL PROJECTS",
      count: projectData.length,
      icon: <RiTodoLine fill="orange" size="16" />,
    },
    {
      title: "TOTAL TASKS",
      count: taskData.length,
      icon: <FcTodoList fill="blue" size="16" />,
    },

    {
      title: "IN PROGRESS",
      count: taskData.filter((task) => task.task_status === "In Progress")
        .length,
      icon: <TbProgress fill="yellow" size="16" />,
    },
    {
      title: "IN REVIEW",
      count: taskData.filter((task) => task.task_status === "In Review").length,
      icon: <GoCodeReview fill="orange" size="16" />,
    },
    {
      title: "TASK COMPLETED",
      count: taskData.filter((task) => task.task_status === "Done").length,
      icon: <BiSolidCheckCircle fill="green" size="16" />,
    },
  ];
  const Overviews = (props: Props) => {
    return (
      <div
        className={`  border rounded-xl p-5 border-mist-300  dark:border-mist-800 hover:shadow-md flex  justify-left gap-4 flex-col`}
      >
        <div className="flex gap-2">
          {" "}
          {props.icon}
          <p
            className={`${spaceMono.className}  font-bold text-sm dark:text-gray-300 text-gray-600`}
          >
            {props.title}
          </p>
        </div>
        <p className="text-sm  text-gray-600 dark:text-gray-400">
          <span className="text-4xl text-black dark:text-white">
            {props.count}{" "}
          </span>{" "}
          {props.title === "TOTAL PROJECTS" ? "Projects" : "Tasks"}
        </p>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-5 h-fit  gap-4 p-4">
      {viewList.map((list) => (
        <Overviews
          key={list.title}
          title={list.title}
          icon={list.icon}
          count={list.count}
        />
      ))}
    </div>
  );
};
