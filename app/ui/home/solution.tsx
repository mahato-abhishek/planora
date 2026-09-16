import { FaFolder, FaRegCircleCheck } from "react-icons/fa6";
import { BsListTask } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";

import { FaArrowRight, FaArrowDown } from "react-icons/fa6";

export const Solutions = () => {
  const data = [
    {
      icon: <FaFolder size="24" />,
      name: "Create a project",
      description: "Set up a project with the details and type it needs.",
    },
    {
      icon: <BsListTask size="24" />,
      name: "Add Tasks",
      description: "Break it down into tasks with clear descriptions.",
    },
    {
      icon: <GiProgression size="24" />,
      name: "Track Progress",
      description: "Keep an eye on progress and upcoming deadlines.",
    },
    {
      icon: <FaRegCircleCheck size="24" />,
      name: "Get Things Done",
      description: "Complete your tasks and keep moving toward your goals.",
    },
  ];

  return (
    <section
      id="solutions"
      className="flex scroll-mt-20 flex-col items-center border-t border-mist-300 dark:border-mist-800 dark:bg-mist-900"
    >
      <div className="p-10 flex items-center flex-col max-w-6xl space-y-10">
        <p className="rounded-full border border-mist-300 px-4 py-1 text-center text-sm dark:border-mist-700">
          How it works
        </p>
        <div>
          <p className="p-2 text-center text-2xl font-semibold sm:text-3xl">
            From idea to execution, effortlessly
          </p>
          <p className="text-center text-sm text-mist-700 dark:text-mist-400 sm:text-base">
            Get started with Planora in a few simple steps.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((val) => (
            <div
              key={val.name}
              className="flex flex-col justify-between gap-3 rounded-xl border border-mist-300 p-4 dark:border-mist-800"
            >
              <div className="flex items-center justify-between text-mist-700 dark:text-mist-300">
                {val.icon}
                {val.name !== "Get Things Done" && (
                  <>
                    <FaArrowRight size="20" className="hidden sm:block" />
                    <FaArrowDown size="20" className="sm:hidden" />
                  </>
                )}
              </div>

              <p className="text-xl font-bold ">
                <span>{val.name}</span>
              </p>
              <p className="text-sm text-mist-700 dark:text-mist-400">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
