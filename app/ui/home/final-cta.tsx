import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export const FinalCta = () => {
  return (
    <>
      <section className="border-t border-mist-300 dark:border-mist-800">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-mist-600 dark:text-mist-400">
            Make room for better work
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
            Start with a plan. Finish with progress.
          </h2>
          <p className="mt-5 max-w-xl text-mist-700 dark:text-mist-400">
            Bring your projects, tasks, and schedule together in Planora and
            make the next step obvious.
          </p>
          <Link
            href="/auth"
            className="mt-8 flex items-center gap-2 rounded-full bg-mist-950 px-5 py-2 text-white dark:bg-mist-50 dark:text-black"
          >
            Start planning
            <RiArrowRightLine size="17" />
          </Link>
        </div>
      </section>
      <footer className="border-t border-mist-300 dark:border-mist-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-mist-600 dark:text-mist-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-semibold text-mist-950 dark:text-mist-100">
            Planora
          </p>
          <p>Plan better. Work clearer.</p>
        </div>
      </footer>
    </>
  );
};
