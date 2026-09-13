import { FaFolder, FaRegCircleCheck } from "react-icons/fa6";
import { BsListTask } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";

import { FaArrowRight } from "react-icons/fa6";

export const Solutions = () => {
  const data = [
    {
      icon: <FaFolder size="24" />,
      name: "Create roject",
      description: "Set up your project with detail and choose a type.",
    },
    {
      icon: <BsListTask size="24" />,
      name: "Add Tasks",
      description: "Break it down with tasks with clear descriptions.",
    },
    {
      icon: <GiProgression size="24" />,
      name: "Track Progress",
      description: "Keep an eye on your progress and track your schedule.",
    },
    {
      icon: <FaRegCircleCheck size="24" />,
      name: "Get Things Dome",
      description: "Complete your task and achieve your goals.",
    },
  ];

  return (
    <section
      id="solutions"
      className=" flex items-center flex-col dark:bg-mist-900"
    >
      <div className="p-10 flex items-center flex-col max-w-6xl space-y-10">
        <p className="text-center text-lg border-2 rounded-full px-4 py-1 dark:border-mist-700 border-mist-300 bg-indigo-700/10">
          How it works
        </p>
        <div>
          <p className="text-3xl font-semibold p-2">
            From idea to execution, effortlessly
          </p>
          <p className="dark:text-mist-400 text-center">
            Get started with planora in just few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-4  gap-10">
          {data.map((val) => (
            <div
              key={val.name}
              className="  rounded-xl flex flex-col align-left justify-between p-2   gap-2  "
            >
              <div className="flex items-center justify-between">
                {val.icon}
                <FaArrowRight size="24" />
              </div>

              <p className="text-xl font-bold ">
                <span>{val.name}</span>
              </p>
              <p className="w-90/100 text-sm">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
