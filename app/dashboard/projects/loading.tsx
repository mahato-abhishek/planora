const ProjectCardSkeleton = () => (
  <article className="flex h-full min-w-0 animate-pulse flex-col gap-4 rounded-xl border border-mist-300 bg-mist-50 p-4 dark:border-mist-700 dark:bg-mist-950">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0 flex-1 space-y-2">
        <div className="h-5 w-3/4 rounded bg-mist-200 dark:bg-mist-800" />
        <div className="h-3 w-1/2 rounded bg-mist-200 dark:bg-mist-800" />
      </div>
      <div className="h-6 w-16 shrink-0 rounded-full bg-mist-200 dark:bg-mist-800" />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="h-4 w-16 rounded bg-mist-200 dark:bg-mist-800" />
        <div className="h-4 w-10 rounded bg-mist-200 dark:bg-mist-800" />
      </div>
      <div className="h-2 rounded-full bg-mist-200 dark:bg-mist-800" />
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="h-3 w-14 rounded bg-mist-200 dark:bg-mist-800" />
        <div className="h-3 w-20 rounded bg-mist-200 dark:bg-mist-800" />
      </div>
      <div className="h-10 rounded bg-mist-200 dark:bg-mist-800" />
    </div>
    <div className="mt-auto flex items-center justify-between border-t border-mist-200 pt-3 dark:border-mist-800">
      <div className="size-8 rounded-lg border border-mist-300 bg-mist-100 dark:border-mist-700 dark:bg-mist-900" />
      <div className="size-8 rounded-lg border border-mist-300 bg-mist-100 dark:border-mist-700 dark:bg-mist-900" />
    </div>
  </article>
);

export default function Loading() {
  return (
    <div role="status" aria-label="Loading projects" className="min-w-0 animate-pulse pb-8">
      <header className="border-b border-mist-300 px-4 py-5 dark:border-mist-800 sm:px-6 sm:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="h-8 w-48 rounded bg-mist-200 dark:bg-mist-800 sm:h-9" />
            <div className="h-4 w-72 max-w-full rounded bg-mist-200 dark:bg-mist-800" />
          </div>
          <div className="h-10 w-full rounded-lg bg-mist-200 dark:bg-mist-800 sm:w-36" />
        </div>
      </header>

      <div className="flex flex-col gap-3 border-b border-mist-300 px-4 py-3 dark:border-mist-800 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto pb-1">
          {[28, 12, 16, 12].map((width, index) => (
            <div
              key={index}
              className={`h-8 shrink-0 rounded-md ${index === 0 ? "bg-mist-800 dark:bg-mist-200" : "bg-mist-200 dark:bg-mist-800"}`}
              style={{ width: `${width * 4}px` }}
            />
          ))}
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {Array.from({ length: 6 }, (_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
