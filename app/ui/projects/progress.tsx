import { TaskType } from "@/lib/types/types";
import { FC } from "react";

type Prop = {
  taskData: TaskType[] | undefined;
  projectName: string;
};
export const Progress: FC<Prop> = ({ taskData, projectName }) => {
  const totalTasks = taskData?.filter(
    (task) => task.project_name === projectName,
  );
  const total = totalTasks?.length == 0 ? 1 : totalTasks?.length;
  const count = totalTasks?.filter(
    (task) => task.task_status === "Done",
  ).length;
  let percent;
  if (count != undefined && total != undefined) {
    percent = Math.round((count / total) * 100);
  }

  const widthPercent = percent === 0 ? `${percent + 10}%` : `${percent}%`;

  return (
    <div className="flex flex-col align-center -justify-center gap-2">
      <div className="flex items-center justify-between text-sm font-bold ">
        <p className="text-sm font-semibold">Progress</p>
        <p>{widthPercent}</p>
      </div>
      <div className=" h-2 rounded-full  dark:bg-mist-700 bg-mist-300">
        <div
          style={{ width: widthPercent }}
          className={` h-full rounded-full  bg-linear-to-r  from-indigo-800 to-purple-400`}
        ></div>
      </div>
    </div>
  );
};
