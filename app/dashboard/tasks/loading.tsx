const TaskRowSkeleton = () => (
  <div className="grid animate-pulse grid-cols-17 items-center gap-2 border border-mist-300 px-4 py-3 dark:border-mist-700">
    <div className="col-span-3 h-5 rounded bg-mist-200 dark:bg-mist-800" />
    <div className="col-span-4 h-5 rounded bg-mist-200 dark:bg-mist-800" />
    <div className="col-span-3 h-5 rounded bg-mist-200 dark:bg-mist-800" />
    <div className="col-span-2 h-5 rounded bg-mist-200 dark:bg-mist-800" />
    <div className="col-span-2 h-5 rounded bg-mist-200 dark:bg-mist-800" />
    <div className="col-span-2 h-5 rounded bg-mist-200 dark:bg-mist-800" />
    <div className="col-span-1 h-5 rounded bg-mist-200 dark:bg-mist-800" />
  </div>
);

export default function Loading() {
  return (
    <div className="space-y-4 pb-8" aria-label="Loading tasks">
      <div className="flex animate-pulse flex-col gap-3 border-b border-mist-300 px-4 py-6 dark:border-mist-800 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div className="space-y-2">
          <div className="h-3 w-32 rounded bg-mist-200 dark:bg-mist-800" />
          <div className="h-8 w-64 rounded bg-mist-200 dark:bg-mist-800" />
          <div className="h-4 w-80 max-w-full rounded bg-mist-200 dark:bg-mist-800" />
        </div>
        <div className="h-10 w-full rounded-lg bg-mist-200 dark:bg-mist-800 sm:w-32" />
      </div>
      <div className="flex animate-pulse items-center justify-between gap-3 border-b border-mist-300 bg-mist-50 px-4 py-3 dark:border-mist-800 dark:bg-mist-950 sm:px-6">
        <div className="h-8 w-full max-w-xl rounded bg-mist-200 dark:bg-mist-800" />
        <div className="h-9 w-28 rounded bg-mist-200 dark:bg-mist-800" />
      </div>
      <div className="overflow-x-auto p-3 sm:p-6">
        <div className="min-w-[920px] animate-pulse overflow-hidden rounded-xl border border-mist-300 dark:border-mist-700">
          <div className="grid grid-cols-17 items-center gap-2 border-b border-mist-300 bg-mist-100 px-4 py-3 dark:border-mist-700 dark:bg-mist-900">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="col-span-2 h-4 rounded bg-mist-200 dark:bg-mist-800"
              />
            ))}
          </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <TaskRowSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
