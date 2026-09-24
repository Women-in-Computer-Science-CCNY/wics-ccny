import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Partners } from "@/components/sections/Partners";
import { NextPageLink } from "@/components/ui/NextPageLink";

export const metadata: Metadata = {
  title: "Partners — WiCS @ CCNY",
  description:
    "Partner with WiCS to sponsor events, host workshops, recruit talent, or mentor students from one of NYC's most diverse public colleges.",
};

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="For Companies"
          title="Partner with WiCS."
          titleGradient
          subtitle="We're building the next generation of women in tech — and we'd love to do it alongside organizations that share that goal."
        />
        <Partners />
        <NextPageLink
          href="/about"
          eyebrow="Curious about us first"
          label="Meet the team behind WiCS"
        />
      </main>
      <Footer />
    </>
  );
}
