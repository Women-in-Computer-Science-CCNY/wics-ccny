"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { upcomingEvents, pastEvents, type WicsEvent } from "@/lib/data/events";

const categoryColors: Record<string, string> = {
  workshop: "bg-lavender-100 text-lavender-600 border-lavender-200",
  panel: "bg-sky-100 text-sky-600 border-sky-200",
  social: "bg-blush-100 text-pink-500 border-blush-200",
  hackathon: "bg-amber-50 text-amber-600 border-amber-100",
  conference: "bg-emerald-50 text-emerald-600 border-emerald-100",
};

const categoryLabels: Record<string, string> = {
  workshop: "Workshop",
  panel: "Panel",
  social: "Social",
  hackathon: "Hackathon",
  conference: "Conference",
};

function EventCard({ event }: { event: WicsEvent }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="glass rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider border ${categoryColors[event.category]}`}
        >
          {categoryLabels[event.category]}
        </span>
        <div className="flex items-center gap-1.5 text-slate-400">
          <Calendar size={12} />
          <span className="font-body text-xs">{event.date}</span>
        </div>
      </div>

      <h3 className="font-display text-lg font-semibold text-violet-deep mb-2 leading-snug">
        {event.title}
      </h3>
      <p className="font-body text-sm text-slate-500 leading-relaxed">
        {event.description}
      </p>

      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-4 font-body text-xs font-semibold text-lavender-500 hover:text-lavender-600 transition-colors"
        >
          Learn more <ExternalLink size={11} />
        </a>
      )}
    </motion.div>
  );
}

export function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const events = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Events"
          title="Always something happening."
          subtitle="From technical workshops to social events, there's always a reason to show up."
          className="mb-12"
        />

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-lavender-100 gap-1">
            {(["upcoming", "past"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-6 py-2.5 rounded-xl font-body text-sm font-semibold transition-colors duration-200 capitalize"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-white rounded-xl shadow-card"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${activeTab === tab ? "text-violet-deep" : "text-slate-400"}`}
                >
                  {tab === "upcoming" ? "Upcoming" : "Past Events"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Events grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* Note for upcoming */}
        {activeTab === "upcoming" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center font-body text-xs text-slate-400 mt-8"
          >
            Follow our socials for exact dates and times →{" "}
            <a
              href="#join"
              className="text-lavender-500 font-semibold hover:underline"
            >
              Join our LinkTree
            </a>
          </motion.p>
        )}
      </div>
    </section>
  );
}
