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
        "Create and organize projects with types,description and deadline.",
    },
    {
      icon: <MdOutlineTaskAlt size="24" />,
      name: "Tasks",
      description:
        "Breaks projects into managable tasks and track their progress.",
    },
    {
      icon: <GiProgression size="24" />,
      name: "Progress",
      description: "See what's completed, pending and in progress at a glance.",
    },
    {
      icon: <RiCalendarScheduleFill size="24" />,
      name: "Schedule",
      description:
        "Organize deadlines to stay on track and never miss what matters.",
    },
  ];

  return (
    <section
      id="features"
      className=" flex items-center flex-col dark:bg-mist-900"
    >
      <div className="p-10 flex items-center flex-col max-w-6xl space-y-10">
        <p className="text-center text-lg border-2 rounded-full px-4 py-1 dark:border-mist-700 border-mist-300 bg-indigo-700/10">
          Features
        </p>
        <div>
          <p className="text-3xl font-semibold p-2">
            Everything You Need, in one place
          </p>
          <p className="dark:text-mist-400">
            Planora gives you the tool to manage your work efficently and stay
            productive.
          </p>
        </div>

        <div className="grid grid-cols-4  gap-4">
          {data.map((val) => (
            <div
              key={val.name}
              className=" border-2 rounded-xl flex flex-col align-left justify-between  p-5  gap-4 bg-mist-300  dark:bg-mist-950 dark:border-mist-800 border-mist-300"
            >
              <p className="text-xl font-bold space-y-4">
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
