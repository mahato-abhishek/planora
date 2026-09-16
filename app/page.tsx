import { Nav } from "./ui/home/nav-bar";
import { Hero } from "./ui/home/hero";
import { Features } from "./ui/home/features";
import { Solutions } from "./ui/home/solution";
import { ProductPreview } from "./ui/home/product-preview";
import { Benefits } from "./ui/home/benefits";
import { FinalCta } from "./ui/home/final-cta";
export default function Home() {
  return (
    <div className=" w-full">
      <Nav />
      <Hero />
      <Benefits />
      <Features />
      <ProductPreview />
      <Solutions />
      <FinalCta />
    </div>
  );
}
