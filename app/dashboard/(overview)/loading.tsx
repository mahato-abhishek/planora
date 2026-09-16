const Skeleton = ({ className }: { className: string }) => (
  <div
    className={`animate-pulse rounded-xl bg-mist-200 dark:bg-mist-800 ${className}`}
  />
);

export default function Loading() {
  return (
    <div className="space-y-4 p-4" aria-label="Loading dashboard">
      <Skeleton className="h-20 w-full" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-28 w-full" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 p-1 md:grid-cols-5">
        <Skeleton className="h-105 w-full md:col-span-3" />
        <Skeleton className="h-105 w-full md:col-span-2" />
      </div>
    </div>
  );
}
