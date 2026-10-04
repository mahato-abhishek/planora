const TaskRowSkeleton = () => (
  <div className="grid min-h-16 w-full grid-cols-17 items-center gap-2 border-b border-mist-200 bg-mist-50 px-4 py-2 dark:border-mist-800 dark:bg-mist-950">
    <div className="col-span-3 min-w-0 border-r border-mist-200 py-2 pr-2 dark:border-mist-800">
      <div className="h-4 w-3/4 rounded bg-mist-200 dark:bg-mist-800" />
    </div>
    <div className="col-span-4 min-w-0 border-r border-mist-200 py-2 pr-2 dark:border-mist-800">
      <div className="h-4 w-full rounded bg-mist-200 dark:bg-mist-800" />
    </div>
    <div className="col-span-3 min-w-0 border-r border-mist-200 py-2 pr-2 dark:border-mist-800">
      <div className="h-4 w-2/3 rounded bg-mist-200 dark:bg-mist-800" />
    </div>
    <div className="col-span-2 border-r border-mist-200 py-2 pr-2 dark:border-mist-800">
      <div className="h-3 w-4/5 rounded bg-mist-200 dark:bg-mist-800" />
    </div>
    <div className="col-span-2 border-r border-mist-200 py-2 pr-2 dark:border-mist-800">
      <div className="h-7 w-full max-w-24 rounded-md border border-mist-300 bg-mist-100 dark:border-mist-700 dark:bg-mist-900" />
    </div>
    <div className="col-span-2 flex items-center gap-2 border-r border-mist-200 py-2 pr-2 dark:border-mist-800">
      <div className="size-5 rounded-full bg-mist-200 dark:bg-mist-800" />
      <div className="h-4 w-12 rounded bg-mist-200 dark:bg-mist-800" />
    </div>
    <div className="flex gap-1.5">
      <div className="size-8 rounded-lg border border-mist-300 bg-mist-100 dark:border-mist-700 dark:bg-mist-900" />
      <div className="size-8 rounded-lg border border-mist-300 bg-mist-100 dark:border-mist-700 dark:bg-mist-900" />
    </div>
  </div>
);

export default function Loading() {
  return (
    <div role="status" aria-label="Loading tasks" className="min-w-0 animate-pulse pb-8">
      <header className="border-b border-mist-300 px-4 py-5 dark:border-mist-800 sm:px-6 sm:py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <div className="h-8 w-56 rounded bg-mist-200 dark:bg-mist-800 sm:h-9" />
            <div className="h-4 w-80 max-w-full rounded bg-mist-200 dark:bg-mist-800" />
          </div>
          <div className="h-10 w-full rounded-lg bg-mist-200 dark:bg-mist-800 sm:w-32" />
        </div>
      </header>

      <div className="flex flex-col gap-3 border-b border-mist-300 bg-mist-50/80 px-4 py-3 dark:border-mist-800 dark:bg-mist-950/80 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto pb-1">
          {[24, 12, 20, 20, 12].map((width, index) => (
            <div
              key={index}
              className={`h-8 shrink-0 rounded-lg ${index === 0 ? "bg-mist-800 dark:bg-mist-200" : "border border-mist-300 dark:border-mist-700"}`}
              style={{ width: `${width * 4}px` }}
            />
          ))}
        </div>
        <div className="flex w-full shrink-0 items-center gap-1 rounded-lg border border-mist-300 p-1 dark:border-mist-700 sm:w-fit">
          <div className="h-8 flex-1 rounded bg-mist-200 dark:bg-mist-800 sm:w-20 sm:flex-none" />
          <div className="h-8 flex-1 rounded sm:w-20 sm:flex-none" />
        </div>
      </div>

      <div className="overflow-x-auto p-3 sm:p-6">
        <div className="min-w-[920px] overflow-hidden rounded-xl border border-mist-300 dark:border-mist-700">
          <div className="grid grid-cols-17 items-center gap-2 border-b border-mist-300 bg-mist-100 px-4 py-3 dark:border-mist-700 dark:bg-mist-900">
            <div className="col-span-3 h-4 rounded bg-mist-200 dark:bg-mist-800" />
            <div className="col-span-4 h-4 rounded bg-mist-200 dark:bg-mist-800" />
            <div className="col-span-3 h-4 rounded bg-mist-200 dark:bg-mist-800" />
            <div className="col-span-2 h-4 rounded bg-mist-200 dark:bg-mist-800" />
            <div className="col-span-2 h-4 rounded bg-mist-200 dark:bg-mist-800" />
            <div className="col-span-2 h-4 rounded bg-mist-200 dark:bg-mist-800" />
            <div className="col-span-1 h-4 rounded bg-mist-200 dark:bg-mist-800" />
          </div>
          {Array.from({ length: 6 }, (_, index) => (
            <TaskRowSkeleton key={index} />
          ))}
        </div>
      </div>
    </div >
  );
}
