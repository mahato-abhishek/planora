const benefits = [
  { value: "One view", label: "for projects, tasks, and deadlines" },
  { value: "Less noise", label: "with clear priorities and simple status" },
  { value: "More momentum", label: "from a plan you can actually follow" },
];

export const Benefits = () => {
  return (
    <section className="border-y border-mist-300 bg-mist-100 dark:border-mist-800 dark:bg-mist-900">
      <div className="mx-auto grid max-w-6xl divide-y divide-mist-300 px-5 py-2 dark:divide-mist-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.value}
            className="px-5 py-7 text-center sm:text-left"
          >
            <p className="text-lg font-semibold">{benefit.value}</p>
            <p className="mt-1 text-sm text-mist-700 dark:text-mist-400">
              {benefit.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
