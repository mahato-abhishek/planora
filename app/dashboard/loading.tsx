export default function Loading() {
  return (
    <div className="animate-pulse space-y-4 p-4" aria-label="Loading dashboard">
      <div className="h-16 rounded-xl bg-mist-200 dark:bg-mist-800" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="h-28 rounded-xl bg-mist-200 dark:bg-mist-800" />
        <div className="h-28 rounded-xl bg-mist-200 dark:bg-mist-800" />
        <div className="h-28 rounded-xl bg-mist-200 dark:bg-mist-800" />
      </div>
      <div className="h-64 rounded-xl bg-mist-200 dark:bg-mist-800" />
    </div>
  );
}
