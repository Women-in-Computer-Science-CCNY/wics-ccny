import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HomeExplore } from "@/components/sections/HomeExplore";
import { UpcomingEventsPreview } from "@/components/sections/UpcomingEventsPreview";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeExplore />
        <UpcomingEventsPreview />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
