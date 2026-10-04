export default function Loading() {
  return (
    <div role="status" aria-label="Loading calendar" className="min-w-0 animate-pulse pb-8">
      <header className="border-b border-mist-300 px-4 py-5 dark:border-mist-800 sm:px-6 sm:py-6">
        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="h-8 w-48 rounded bg-mist-200 dark:bg-mist-800" />
            <div className="h-4 w-64 max-w-full rounded bg-mist-200 dark:bg-mist-800" />
          </div>
          <div className="h-9 w-full rounded-lg bg-mist-200 dark:bg-mist-800 sm:w-16" />
        </div>
      </header>

      <main className="p-3 sm:p-6">
        <section className="overflow-hidden rounded-xl border border-mist-300 bg-mist-50 dark:border-mist-700 dark:bg-mist-950">
          <div className="flex items-center justify-between border-b border-mist-300 px-3 py-3 dark:border-mist-700 sm:px-5">
            <div className="size-9 rounded-lg border border-mist-300 bg-mist-100 dark:border-mist-700 dark:bg-mist-900" />
            <div className="flex items-center gap-2">
              <div className="size-5 rounded bg-mist-200 dark:bg-mist-800" />
              <div className="h-6 w-36 rounded bg-mist-200 dark:bg-mist-800" />
            </div>
            <div className="size-9 rounded-lg border border-mist-300 bg-mist-100 dark:border-mist-700 dark:bg-mist-900" />
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[620px]">
              <div className="grid grid-cols-7 border-b border-mist-300 dark:border-mist-700">
                {Array.from({ length: 7 }, (_, index) => (
                  <div key={index} className="flex justify-center px-2 py-3">
                    <div className="h-3 w-8 rounded bg-mist-200 dark:bg-mist-800" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {Array.from({ length: 42 }, (_, index) => (
                  <div
                    key={index}
                    className="min-h-24 border-b border-r border-mist-200 p-2 dark:border-mist-800 sm:min-h-28"
                  >
                    <div className="size-6 rounded-full bg-mist-200 dark:bg-mist-800" />
                    <div className="mt-2 hidden space-y-1 sm:block">
                      {index % 5 === 1 && (
                        <>
                          <div className="h-5 rounded border-l-2 border-red-400 bg-mist-200 dark:bg-mist-800" />
                          {index % 3 === 1 && (
                            <div className="h-5 w-4/5 rounded border-l-2 border-yellow-400 bg-mist-200 dark:bg-mist-800" />
                          )}
                        </>
                      )}
                    </div>
                    {index % 5 === 1 && (
                      <div className="mt-2 flex gap-1 sm:hidden">
                        <div className="size-1.5 rounded-full bg-mist-500" />
                        {index % 3 === 1 && (
                          <div className="size-1.5 rounded-full bg-mist-800 dark:bg-mist-200" />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-mist-300 bg-mist-50 dark:border-mist-700 dark:bg-mist-950">
          <div className="flex items-center justify-between border-b border-mist-300 px-4 py-4 dark:border-mist-700">
            <div className="space-y-2">
              <div className="h-3 w-20 rounded bg-mist-200 dark:bg-mist-800" />
              <div className="h-6 w-44 rounded bg-mist-200 dark:bg-mist-800" />
            </div>
            <div className="h-4 w-16 rounded bg-mist-200 dark:bg-mist-800" />
          </div>
          <div className="divide-y divide-mist-200 dark:divide-mist-800">
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-3">
                <div className="size-8 shrink-0 rounded-lg bg-mist-200 dark:bg-mist-800" />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-4 w-2/3 rounded bg-mist-200 dark:bg-mist-800" />
                  <div className="h-3 w-1/2 rounded bg-mist-200 dark:bg-mist-800" />
                </div>
                <div className="h-3 w-12 shrink-0 rounded bg-mist-200 dark:bg-mist-800" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div >
  );
}
