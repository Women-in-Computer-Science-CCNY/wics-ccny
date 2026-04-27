"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const ways = [
  {
    emoji: "💸",
    title: "Sponsor an event",
    description:
      "Fund BeaverHacks, our flagship hackathon, or back a workshop, panel, or speaker series. Sponsors get logo placement, shoutouts, and direct community visibility.",
    tag: "Funding",
  },
  {
    emoji: "🎤",
    title: "Host a workshop or talk",
    description:
      "Send your engineers, recruiters, or designers to lead a technical workshop, share your career path, or run a mock interview. We bring the room — you bring the expertise.",
    tag: "Engagement",
  },
  {
    emoji: "💼",
    title: "Recruit our members",
    description:
      "Connect with computer science students at one of NYC's most diverse public colleges. Set up info sessions, table at our career events, or share roles directly with our community.",
    tag: "Hiring",
  },
  {
    emoji: "🤝",
    title: "Mentor students",
    description:
      "Pair your team with members for 1:1 mentorship — from resume reviews to long-term career guidance. A small time commitment with a real impact.",
    tag: "Mentorship",
  },
];

const tagColors: Record<string, string> = {
  Funding: "bg-amber-50 text-amber-600 border-amber-100",
  Engagement: "bg-lavender-100 text-lavender-600 border-lavender-200",
  Hiring: "bg-sky-100 text-sky-600 border-sky-200",
  Mentorship: "bg-blush-100 text-pink-500 border-blush-200",
};

const stats = [
  { value: "100+", label: "Active members" },
  { value: "All majors", label: "& experience levels" },
  { value: "CCNY", label: "A top public NYC college" },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="For Companies"
          title="Partner with WiCS."
          titleGradient
          subtitle="We're building the next generation of women in tech — and we'd love to do it alongside organizations that share that goal."
          className="mb-16"
        />

        {/* Pitch card with stats */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div className="relative rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-white/55 backdrop-blur-md" />
            <div className="absolute inset-0 border border-lavender-200/60 rounded-4xl" />
            <div className="relative p-8 md:p-12">
              <p className="font-body text-xs font-bold tracking-widest uppercase text-lavender-500 mb-3">
                Why partner with us
              </p>
              <p className="font-display text-2xl md:text-3xl text-violet-deep leading-relaxed mb-8 max-w-3xl">
                Direct access to a community of computer science students
                already invested in their careers — at a school known for its
                diversity, drive, and graduates who go everywhere.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-gradient-to-br from-lavender-100 to-sky-100 border border-lavender-200/40 p-5"
                  >
                    <div className="font-display text-2xl md:text-3xl font-semibold text-violet-deep">
                      {stat.value}
                    </div>
                    <div className="font-body text-xs text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Ways to engage */}
        <AnimatedSection delay={0.15} className="mb-8">
          <p className="font-body text-center text-xs font-bold tracking-widest uppercase text-lavender-500">
            Ways to engage
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {ways.map((way) => (
            <motion.div
              key={way.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-6 md:p-7 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{way.emoji}</div>
                <div className="flex-1">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-2 border ${tagColors[way.tag]}`}
                  >
                    {way.tag}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-violet-deep mb-2">
                    {way.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">
                    {way.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div className="relative rounded-4xl overflow-hidden shadow-card-hover ring-1 ring-white/30">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-lavender-400 to-blush-400" />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-deep/30 via-transparent to-transparent" />

            <div className="relative p-8 md:p-12 text-center">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white drop-shadow-sm mb-3">
                Let&apos;s talk.
              </h3>
              <p className="font-body text-white/95 text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
                Whether it&apos;s a one-off event or an ongoing partnership,
                we&apos;d love to hear what you have in mind.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  href="mailto:wics.ccny@gmail.com?subject=Partnership%20Inquiry"
                  size="lg"
                  variant="secondary"
                >
                  <Mail size={16} />
                  Email us
                </Button>
                <a
                  href="#join"
                  className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  Or follow our socials first
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
