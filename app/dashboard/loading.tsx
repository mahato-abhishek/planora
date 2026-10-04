export default function Loading() {
  return (
    <div role="status" aria-label="Loading dashboard" className="animate-pulse">
      <div className="flex h-16 items-center justify-between gap-3 border-b border-gray-300 px-3 dark:border-gray-700 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded bg-mist-200 dark:bg-mist-800" />
          <div className="h-6 w-28 rounded bg-mist-200 dark:bg-mist-800" />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="size-8 rounded-full bg-mist-200 dark:bg-mist-800" />
          <div className="h-9 w-10 rounded-lg bg-mist-200 dark:bg-mist-800 sm:w-36" />
        </div>
      </div>

      <div className="grow p-2">
        <div className="flex flex-col gap-4 border-b border-mist-300 px-4 py-6 dark:border-mist-800 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div className="space-y-2">
            <div className="h-7 w-36 rounded bg-mist-200 dark:bg-mist-800" />
            <div className="h-4 w-52 max-w-full rounded bg-mist-200 dark:bg-mist-800" />
          </div>
          <div className="h-9 w-full rounded-lg bg-mist-200 dark:bg-mist-800 sm:w-32" />
        </div>

        <div className="grid h-fit grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-5">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="min-w-0 rounded-xl border border-mist-300 bg-mist-50 p-4 dark:border-mist-800 dark:bg-mist-950 sm:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="h-3 w-24 rounded bg-mist-200 dark:bg-mist-800" />
                <div className="size-7 rounded-md bg-mist-200 dark:bg-mist-800" />
              </div>
              <div className="mt-5 flex items-end justify-between gap-2">
                <div className="h-9 w-10 rounded bg-mist-200 dark:bg-mist-800" />
                <div className="h-3 w-12 rounded bg-mist-200 dark:bg-mist-800" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 p-3 sm:p-5 lg:grid-cols-5">
          <div className="min-w-0 overflow-hidden rounded-xl border border-mist-300 bg-mist-50 p-2 dark:border-mist-800 dark:bg-mist-950 lg:col-span-3">
            <div className="flex items-center justify-between border-b border-mist-300 p-4 dark:border-mist-800">
              <div className="space-y-2">
                <div className="h-5 w-32 rounded bg-mist-200 dark:bg-mist-800" />
                <div className="h-3 w-36 rounded bg-mist-200 dark:bg-mist-800" />
              </div>
              <div className="h-4 w-14 rounded bg-mist-200 dark:bg-mist-800" />
            </div>
            <div className="space-y-2 p-3">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-mist-200 p-3 dark:border-mist-800"
                >
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="h-4 w-3/4 rounded bg-mist-200 dark:bg-mist-800" />
                    <div className="h-4 w-1/2 rounded bg-mist-200 dark:bg-mist-800" />
                  </div>
                  <div className="w-1/2 shrink-0 space-y-2">
                    <div className="h-3 w-20 rounded bg-mist-200 dark:bg-mist-800" />
                    <div className="h-2 rounded bg-mist-200 dark:bg-mist-800" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-xl border border-mist-300 bg-mist-50 p-2 dark:border-mist-800 dark:bg-mist-950 lg:col-span-2">
            <div className="flex items-center justify-between border-b border-mist-300 p-4 dark:border-mist-800">
              <div className="space-y-2">
                <div className="h-5 w-28 rounded bg-mist-200 dark:bg-mist-800" />
                <div className="h-3 w-24 rounded bg-mist-200 dark:bg-mist-800" />
              </div>
              <div className="h-4 w-14 rounded bg-mist-200 dark:bg-mist-800" />
            </div>
            <div className="space-y-2 p-3">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-mist-200 p-3 dark:border-mist-800"
                >
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="h-4 w-3/4 rounded bg-mist-200 dark:bg-mist-800" />
                    <div className="h-4 w-1/2 rounded bg-mist-200 dark:bg-mist-800" />
                  </div>
                  <div className="h-5 w-14 shrink-0 rounded bg-mist-200 dark:bg-mist-800" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
