import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { NextPageLink } from "@/components/ui/NextPageLink";
import { About } from "@/components/sections/About";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyJoin } from "@/components/sections/WhyJoin";
import { EBoard } from "@/components/sections/EBoard";

export const metadata: Metadata = {
  title: "About — WiCS @ CCNY",
  description:
    "Who we are: a student-led community building mentorship, workshops, and career resources for women in tech at CCNY. Meet our mission, our activities, and our 2025-2026 e-board.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About Us"
          title="More than a club."
          titleGradient
          subtitle="WiCS is a student-led community at CCNY — built on mentorship, workshops, career support, and the people who show up for each other."
        />
        <About />
        <WhatWeDo />
        <WhyJoin />
        <EBoard />
        <NextPageLink
          href="/events"
          label="See what's happening"
        />
      </main>
      <Footer />
    </>
  );
}
