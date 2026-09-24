"use client";

import { motion } from "framer-motion";
import { Calendar, Clock3, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { upcomingEvents } from "@/lib/data/events";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

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

export function UpcomingEventsPreview() {
  const previewEvents = upcomingEvents.slice(0, 2);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-lavender-500 mb-3">
            What's happening
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-violet-deep mb-4">
            Upcoming Events
          </h2>
          <p className="font-body text-slate-600 max-w-2xl mx-auto">
            Join us for workshops, socials, and career-focused events throughout the semester.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {previewEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-lavender-200/80 bg-gradient-to-br from-white/80 via-lavender-50/70 to-sky-50/70 p-6 shadow-card hover:shadow-card-hover transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider border ${categoryColors[event.category]}`}
                >
                  {categoryLabels[event.category]}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-violet-deep mb-3 leading-snug">
                {event.title}
              </h3>

              <p className="font-body text-sm text-slate-500 leading-relaxed mb-4">
                {event.description}
              </p>

              <div className="space-y-2 text-[11px] font-body text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar size={12} className="text-lavender-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 size={12} className="text-lavender-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-lavender-500" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-body text-sm font-bold bg-gradient-to-r from-lavender-400 to-sky-300 text-violet-deep shadow-soft hover:shadow-soft-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            View all events <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
