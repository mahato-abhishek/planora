const ProjectCardSkeleton = () => (
  <div className="animate-pulse space-y-3 rounded-xl border border-mist-300 p-3 dark:border-mist-700">
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-2">
        <div className="h-5 w-32 rounded bg-mist-200 dark:bg-mist-800" />
        <div className="h-4 w-20 rounded bg-mist-200 dark:bg-mist-800" />
      </div>
      <div className="h-6 w-14 rounded-full bg-mist-200 dark:bg-mist-800" />
    </div>
    <div className="h-5 w-full rounded bg-mist-200 dark:bg-mist-800" />
    <div className="h-24 w-full rounded border border-mist-200 dark:border-mist-800" />
    <div className="flex justify-between">
      <div className="h-8 w-8 rounded-full bg-mist-200 dark:bg-mist-800" />
      <div className="h-8 w-8 rounded-full bg-mist-200 dark:bg-mist-800" />
    </div>
  </div>
);

export default function Loading() {
  return (
    <div className="space-y-4 p-4" aria-label="Loading projects">
      <div className="flex animate-pulse items-center justify-between gap-4">
        <div className="h-10 w-64 rounded-full bg-mist-200 dark:bg-mist-800" />
        <div className="h-10 w-32 rounded-lg bg-mist-200 dark:bg-mist-800" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
