import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Events } from "@/components/sections/Events";
import { NextPageLink } from "@/components/ui/NextPageLink";

export const metadata: Metadata = {
  title: "Events — WiCS @ CCNY",
  description:
    "Workshops, panels, socials, and our annual hackathon — see what's coming up and what we've done.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Events"
          title="Always something happening."
          subtitle="From technical workshops to socials, panels, and our flagship hackathon — here's where to find every WiCS event."
        />
        <Events />
        <NextPageLink href="/join" label="Join the community" />
      </main>
      <Footer />
    </>
  );
}
