import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProductsCarousel } from "@/components/sections/ProductsCarousel";
import { Differentials } from "@/components/sections/Differentials";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductsCarousel />
      <Differentials />
      <Gallery />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
