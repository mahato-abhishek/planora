const ScheduleTableSkeleton = () => (
  <div className="space-y-1">
    <div className="grid animate-pulse grid-cols-9 items-center gap-2 rounded-t-xl border-2 border-mist-300 bg-mist-100 px-4 py-3 dark:border-mist-700 dark:bg-mist-900">
      <div className="col-span-2 h-5 rounded bg-mist-200 dark:bg-mist-800" />
      <div className="col-span-3 h-5 rounded bg-mist-200 dark:bg-mist-800" />
      <div className="col-span-3 h-5 rounded bg-mist-200 dark:bg-mist-800" />
      <div className="col-span-1 h-5 rounded bg-mist-200 dark:bg-mist-800" />
    </div>
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className="grid animate-pulse grid-cols-9 items-center gap-2 border border-mist-300 bg-mist-100 px-4 py-3 dark:border-mist-700 dark:bg-mist-950"
      >
        <div className="col-span-2 h-5 rounded bg-mist-200 dark:bg-mist-800" />
        <div className="col-span-3 h-5 rounded bg-mist-200 dark:bg-mist-800" />
        <div className="col-span-3 h-5 rounded bg-mist-200 dark:bg-mist-800" />
        <div className="col-span-1 h-5 rounded bg-mist-200 dark:bg-mist-800" />
      </div>
    ))}
  </div>
);

export default function Loading() {
  return (
    <div className="space-y-4 pb-8" aria-label="Loading schedule">
      <div className="animate-pulse space-y-2 border-b border-mist-300 px-4 py-6 dark:border-mist-800 sm:px-6">
        <div className="h-3 w-40 rounded bg-mist-200 dark:bg-mist-800" />
        <div className="h-8 w-64 rounded bg-mist-200 dark:bg-mist-800" />
        <div className="h-4 w-96 max-w-full rounded bg-mist-200 dark:bg-mist-800" />
      </div>
      <div className="grid animate-pulse grid-cols-1 gap-4 p-3 sm:p-6 xl:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-mist-300 dark:border-mist-700">
          <div className="h-20 bg-mist-100 dark:bg-mist-900" />
          <ScheduleTableSkeleton />
        </div>
        <div className="overflow-hidden rounded-xl border border-mist-300 dark:border-mist-700">
          <div className="h-20 bg-mist-100 dark:bg-mist-900" />
          <ScheduleTableSkeleton />
        </div>
      </div>
    </div>
  );
}
