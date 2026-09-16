import { FC } from "react";

type Prop = {
  progress?: { total: number; completed: number };
};
export const Progress: FC<Prop> = ({ progress }) => {
  const total = progress?.total || 1;
  const percent = Math.round(((progress?.completed || 0) / total) * 100);

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
