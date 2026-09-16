export const Greetings = ({ name }: { name: string }) => {
  return (
    <div>
      <p className="text-2xl font-semibold">Hi, {name} </p>
      <p className="text-sm">Here&apos;s a quick look at your tasks.</p>
    </div>
  );
};
