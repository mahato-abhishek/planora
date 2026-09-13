import Link from "next/link";

export const Nav = () => {
  return (
    <div>
      <nav className=" h-18  w-full mx-auto top-0 left-0 fixed p-2">
        <div className=" h-full w-full max-w-6xl mx-auto rounded-full flex items-center justify-between px-2 dark:bg-mist-800  bg-white shadow-xs">
          <a className="text-2xl px-2 font-bold " href="#hero">
            Planora
          </a>
          <div className="flex items-center justify-center gap-4  ">
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
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
    </div>
  );
};
