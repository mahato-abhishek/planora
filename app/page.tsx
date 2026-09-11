import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full">
      <nav className=" h-18  w-full mx-auto top-0 left-0 fixed p-2">
        <div className=" h-full w-full max-w-6xl mx-auto rounded-full flex items-center justify-between px-2 dark:bg-mist-800  bg-white shadow-xs">
          <h1 className="text-2xl px-2 font-bold">Planora</h1>
          <div className="flex items-center justify-center gap-4  ">
            <a href="#features">Features</a>
            <a href="#solution">Solutions</a>
            <a href="#resources">Resources</a>
            <a href="#about">About</a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="./auth"
              className=" py-2 px-4 rounded-full dark:bg-mist-100 dark:text-black bg-mist-950  text-white border-mist-200 dark:border-mist-800"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <section
        id="hero"
        className="min-h-screen max-w-6xl w-98/100 mx-auto  pt-20 flex items-center flex-col"
      >
        <p className="text-7xl pt-12 text-center max-w-3xl w-98/100">
          Effortless to-do list for seamless management
        </p>
        <p className="text-lg dark:text-mist-400 text-mist-800 text-center p-5 max-w-xl w-98/100">
          Planora inspires person to dream higher, react beyond potential, bring
          team members together and celebrate success.
        </p>
        <Link
          href="./auth"
          className="py-2 px-4 rounded-full dark:bg-white dark:text-black bg-black text-white"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
