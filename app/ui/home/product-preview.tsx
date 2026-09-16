import Image from "next/image";
import {
  RiCalendarScheduleLine,
  RiCheckLine,
  RiDashboardLine,
  RiFolderLine,
  RiListCheck2,
} from "react-icons/ri";

const workspaceViews = [
  {
    name: "Projects",
    description: "See progress across every project.",
    image: "/projects-dark.png",
    icon: <RiFolderLine size="17" />,
  },
  {
    name: "Tasks",
    description: "Keep priorities and statuses clear.",
    image: "/tasks-dark.png",
    icon: <RiListCheck2 size="17" />,
  },
  {
    name: "Schedule",
    description: "Plan deadlines before they become urgent.",
    image: "/schedule-dark.png",
    icon: <RiCalendarScheduleLine size="17" />,
  },
];

const points = [
  "One workspace for projects, tasks, and deadlines",
  "A clear view of what is active, next, and complete",
  "Simple tools that help you keep moving",
];

export const ProductPreview = () => {
  return (
    <section
      id="workspace"
      className="scroll-mt-20 border-t border-mist-300 dark:border-mist-800"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-mist-600 dark:text-mist-400">
              <RiDashboardLine size="17" /> Your workspace
            </p>
            <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">
              Everything important, visible at a glance.
            </h2>
            <p className="mt-5 max-w-lg text-mist-700 dark:text-mist-400">
              Planora brings the full rhythm of your work into one calm place.
              Move between the overview, projects, tasks, and schedule without
              losing the thread.
            </p>
            <ul className="mt-7 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <RiCheckLine className="mt-0.5 shrink-0" size="18" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-mist-300 bg-mist-100 p-2 dark:border-mist-700 dark:bg-mist-900">
            <div className="mb-2 flex items-center justify-between px-2 py-1 text-xs text-mist-500">
              <span className="font-semibold">Dashboard overview</span>
              <span>Planora workspace</span>
            </div>
            <Image
              src="/dash-dark.png"
              alt="Planora dashboard overview"
              width={1440}
              height={900}
              className="h-auto w-full rounded-sm"
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {workspaceViews.map((view) => (
            <article
              key={view.name}
              className="overflow-hidden border border-mist-300 bg-mist-100 dark:border-mist-700 dark:bg-mist-900"
            >
              <div className="flex items-center gap-2 border-b border-mist-300 px-4 py-3 dark:border-mist-700">
                <span className="flex size-7 items-center justify-center rounded-md bg-mist-200 dark:bg-mist-800">
                  {view.icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{view.name}</h3>
                  <p className="text-xs text-mist-500">{view.description}</p>
                </div>
              </div>
              <div className="bg-mist-200 p-2 dark:bg-mist-950">
                <Image
                  src={view.image}
                  alt={`Planora ${view.name.toLowerCase()} view`}
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-sm"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
