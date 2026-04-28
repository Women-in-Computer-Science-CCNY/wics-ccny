"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  StaggerContainer,
  staggerItem,
} from "@/components/ui/AnimatedSection";

const cards = [
  {
    href: "/about",
    eyebrow: "About",
    title: "Who we are.",
    description:
      "Mission, pillars, what we do, and the e-board making it happen.",
    accent: "from-lavender-200 to-sky-200",
  },
  {
    href: "/events",
    eyebrow: "Events",
    title: "What's happening.",
    description:
      "Workshops, panels, socials, and our flagship hackathon.",
    accent: "from-sky-200 to-blush-200",
  },
  {
    href: "/partners",
    eyebrow: "Companies",
    title: "Partner with us.",
    description:
      "Sponsor an event, host a workshop, recruit, or mentor our community.",
    accent: "from-blush-200 to-lavender-200",
  },
];

export function HomeExplore() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Explore"
          title="Where to next?"
          subtitle="Pick the page that matches what brought you here."
          className="mb-12"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <motion.div key={card.href} variants={staggerItem}>
              <Link
                href={card.href}
                className="group block relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-90`}
                />
                <div className="absolute inset-0 bg-white/55 backdrop-blur-sm group-hover:bg-white/45 transition-colors" />

                <div className="relative p-7 md:p-8 flex flex-col gap-3 h-full">
                  <p className="font-body text-xs font-bold tracking-widest uppercase text-lavender-500">
                    {card.eyebrow}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-violet-deep leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-lavender-500 group-hover:text-lavender-600 transition-colors mt-2">
                    Explore
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
