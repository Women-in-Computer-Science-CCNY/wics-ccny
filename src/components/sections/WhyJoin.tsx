"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { PixelCloud } from "@/components/ui/PixelCloud";

const reasons = [
  {
    number: "01",
    title: "Find your people",
    description:
      "Connect with women and allies who share your passion for tech. Build friendships that last beyond graduation.",
    gradient: "from-lavender-200 to-lavender-300",
  },
  {
    number: "02",
    title: "Navigate with support",
    description:
      "Get help with internship applications, class choices, and career planning from people who've done it.",
    gradient: "from-sky-200 to-sky-300",
  },
  {
    number: "03",
    title: "Learn from the best",
    description:
      "Industry speakers from companies like Amazon share their paths, tips, and real-world insights.",
    gradient: "from-blush-200 to-blush-300",
  },
  {
    number: "04",
    title: "Lead something",
    description:
      "Step into organizing events, workshops, and collaborations. Build real leadership experience.",
    gradient: "from-lavender-100 to-sky-200",
  },
  {
    number: "05",
    title: "All majors, all levels",
    description:
      "You don't need to be a CS major or have any experience. If you're curious about tech, you belong here.",
    gradient: "from-blush-100 to-lavender-200",
  },
  {
    number: "06",
    title: "Have fun",
    description:
      "Bracelet making, game nights, conferences — we believe community is also built through joy.",
    gradient: "from-sky-100 to-blush-200",
  },
];

export function WhyJoin() {
  return (
    <section id="why-join" className="relative py-16 md:py-24 overflow-hidden">
      <PixelCloud
        size="xl"
        variant="sky"
        className="absolute -top-8 right-0 opacity-20 translate-x-12"
        animationDelay={0.5}
      />
      <PixelCloud
        size="md"
        variant="lavender"
        className="absolute bottom-8 left-0 opacity-25 -translate-x-4"
        animationDelay={2}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why Join"
          title="You don't have to navigate tech alone."
          subtitle="Here's what you gain when you become part of WiCS."
          className="mb-16"
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason) => (
            <motion.div
              key={reason.number}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-60`}
              />
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

              <div className="relative p-6 md:p-8">
                {/* Number */}
                <div className="font-display text-5xl font-bold text-violet-deep/10 absolute top-4 right-6 select-none">
                  {reason.number}
                </div>
                <div className="mb-4">
                  <span className="font-body text-xs font-bold tracking-widest uppercase text-lavender-500">
                    {reason.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-violet-deep mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="font-body text-slate-500">
              Ready to be part of something great?
            </p>
            <Button href="/join" size="lg">
              Join WiCS Today ✦
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
