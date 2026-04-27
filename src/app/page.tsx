import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyJoin } from "@/components/sections/WhyJoin";
import { BeaverHacksBanner } from "@/components/sections/BeaverHacksBanner";
import { Events } from "@/components/sections/Events";
import { EBoard } from "@/components/sections/EBoard";
import { Join } from "@/components/sections/Join";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <BeaverHacksBanner />
        <WhyJoin />
        <Events />
        <EBoard />
        <Join />
      </main>
      <Footer />
    </>
  );
}
