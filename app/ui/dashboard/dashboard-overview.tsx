import { BiSolidCheckCircle } from "react-icons/bi";
import { TbProgress } from "react-icons/tb";
import { GoCodeReview } from "react-icons/go";
import { spaceMono } from "@/lib/fonts";
import { FcTodoList } from "react-icons/fc";
import { RiTodoLine } from "react-icons/ri";
import { ProjectType, TaskType } from "@/lib/types/types";
import { RiArrowUpLine } from "react-icons/ri";

type Props = {
  title: string;
  count: number;
  icon: React.ReactElement;
};
const OverviewCard = ({ title, count, icon }: Props) => (
  <div className="min-w-0 rounded-xl border border-mist-300 bg-mist-50 p-4 dark:border-mist-800 dark:bg-mist-950 sm:p-5">
    <div className="flex items-center justify-between gap-2">
      <p
        className={`${spaceMono.className} truncate text-xs font-bold uppercase tracking-wide text-mist-600 dark:text-mist-400`}
      >
        {title}
      </p>
      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-mist-200 dark:bg-mist-800">
        {icon}
      </span>
    </div>
    <div className="mt-5 flex items-end justify-between gap-2">
      <p className="text-3xl font-semibold tracking-tight">{count}</p>
      <span className="flex items-center gap-1 text-xs text-mist-500">
        <RiArrowUpLine size="14" /> Live
      </span>
    </div>
  </div>
);

const DashOverview = ({
  projectData,
  taskData,
}: {
  projectData: ProjectType[];
  taskData: TaskType[];
}) => {
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
  return (
    <div className="grid h-fit grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-5">
      {viewList.map((list) => (
        <OverviewCard
          key={list.title}
          title={list.title}
          icon={list.icon}
          count={list.count}
        />
      ))}
    </div>
  );
};
export default DashOverview;
