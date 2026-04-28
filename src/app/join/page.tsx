import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Join } from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Join — WiCS @ CCNY",
  description:
    "Follow our Linktree, join our Discord, and stay updated on every workshop, panel, and event. All majors and experience levels welcome.",
};

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Get Involved"
          title="Join the community."
          subtitle="Scan the QR, hop into Discord, or follow us anywhere — we'd love to have you."
        />
        <Join />
      </main>
      <Footer />
    </>
  );
}
