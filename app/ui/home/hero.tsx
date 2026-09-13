import Link from "next/link";
import Image from "next/image";
import dash from "@/public/dash-dark.png";
export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen max-w-6xl w-98/100 mx-auto  pt-20 flex items-center flex-col"
    >
      <p className="text-7xl pt-12 text-center max-w-3xl w-98/100">
        Work flows better when everything clicks
      </p>
      <p className="text-lg dark:text-mist-400 text-mist-800 text-center p-5 max-w-xl w-98/100">
        Planora inspires you to dream higher, react beyond potential, bring team
        members together and celebrate success.
      </p>
      <Link
        href="./auth"
        className="py-2 px-4 rounded-full dark:bg-white dark:text-black bg-black text-white"
      >
        Get Started
      </Link>

      <div className="h-100 overflow-hidden  p-2 dark:bg-mist-900 rounded-t-xl mt-10 ">
        <Image
          src={dash}
          alt="dashboard image"
          className="rounded-xl"
          height={500}
        ></Image>
      </div>
    </section>
  );
};
