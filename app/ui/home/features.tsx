import { FaFolder } from "react-icons/fa6";
import { MdOutlineTaskAlt } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { RiCalendarScheduleFill } from "react-icons/ri";

export const Features = () => {
  const data = [
    {
      icon: <FaFolder size="24" />,
      name: "Project",
      description:
        "Create and organize projects with types, descriptions, and deadlines.",
    },
    {
      icon: <MdOutlineTaskAlt size="24" />,
      name: "Tasks",
      description:
        "Break projects into manageable tasks and track their progress.",
    },
    {
      icon: <GiProgression size="24" />,
      name: "Progress",
      description:
        "See what is completed, pending, or in progress at a glance.",
    },
    {
      icon: <RiCalendarScheduleFill size="24" />,
      name: "Schedule",
      description: "Organize deadlines so important work stays on track.",
    },
  ];

  return (
    <section
      id="features"
      className="flex scroll-mt-20 flex-col items-center border-t border-mist-300 dark:border-mist-800 dark:bg-mist-900"
    >
      <div className="p-10 flex items-center flex-col max-w-6xl space-y-10">
        <p className="rounded-full border border-mist-300 px-4 py-1 text-center text-sm dark:border-mist-700">
          Features
        </p>
        <div>
          <p className="p-2 text-center text-2xl font-semibold sm:text-3xl">
            Everything you need, in one place
          </p>
          <p className="text-center text-sm text-mist-700 dark:text-mist-400 sm:text-base">
            Planora gives you the tools to manage your work efficiently and stay
            productive.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((val) => (
            <div
              key={val.name}
              className="flex flex-col justify-between gap-4 rounded-xl border border-mist-300 bg-mist-100 p-5 dark:border-mist-800 dark:bg-mist-950"
            >
              <p className="flex flex-col gap-3 text-xl font-bold">
                {val.icon}
                <span>{val.name}</span>
              </p>
              <p className="">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
