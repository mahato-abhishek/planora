import Link from "next/link";
import { Nav } from "./ui/home/nav-bar";
import { Hero } from "./ui/home/hero";
import { Features } from "./ui/home/features";
import { Solutions } from "./ui/home/solution";
export default function Home() {
  return (
    <div className=" w-full">
      <Nav />
      <Hero />
      <Features />
      <Solutions />
    </div>
  );
}
