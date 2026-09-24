import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { EventCalendar } from "@/components/sections/EventCalendar";
import { Events } from "@/components/sections/Events";
import { NextPageLink } from "@/components/ui/NextPageLink";
import { upcomingEvents } from "@/lib/data/events";

const featuredEvent = upcomingEvents[0];

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
          subtitle="From technical workshops to socials, panels, and community events — here's where to find every WiCS event."
        />

        <section className="relative py-8 md:py-12">
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-[2rem] border border-lavender-200/80 bg-gradient-to-br from-white/80 via-lavender-50/70 to-sky-50/70 p-6 shadow-card backdrop-blur-sm md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-lavender-500">
                    Featured event
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-violet-deep md:text-4xl">
                    {featuredEvent.title}
                  </h2>
                  <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 md:text-base">
                    {featuredEvent.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-lavender-200 bg-white/80 px-4 py-3 shadow-soft">
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Next up
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold text-violet-deep">
                    {featuredEvent.date}
                  </p>
                  <p className="font-body text-sm text-slate-500">
                    {featuredEvent.time}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
                <div className="rounded-2xl bg-white/70 px-4 py-3 border border-lavender-100">
                  <span className="block font-body text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Time
                  </span>
                  <span className="mt-2 block font-semibold text-violet-deep">
                    {featuredEvent.time}
                  </span>
                </div>
                <div className="rounded-2xl bg-white/70 px-4 py-3 border border-lavender-100">
                  <span className="block font-body text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Location
                  </span>
                  <span className="mt-2 block font-semibold text-violet-deep">
                    {featuredEvent.location}
                  </span>
                </div>
                <div className="rounded-2xl bg-white/70 px-4 py-3 border border-lavender-100">
                  <span className="block font-body text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Collaborators
                  </span>
                  <span className="mt-2 block font-semibold text-violet-deep">
                    {featuredEvent.collaborators}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EventCalendar />
        <Events />
        <NextPageLink href="/join" label="Join the community" />
      </main>
      <Footer />
    </>
  );
}
