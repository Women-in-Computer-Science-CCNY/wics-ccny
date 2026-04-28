import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BeaverHacksBanner } from "@/components/sections/BeaverHacksBanner";
import { HomeExplore } from "@/components/sections/HomeExplore";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BeaverHacksBanner />
        <HomeExplore />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
