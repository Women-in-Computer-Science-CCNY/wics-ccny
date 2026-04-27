"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { PixelCloud } from "@/components/ui/PixelCloud";

const pillars = [
  {
    icon: "⚖️",
    title: "Gender Equality",
    description:
      "We empower women and support them in achieving careers in computer science, advocating for a more equitable tech industry.",
    color: "from-lavender-100 to-lavender-200",
    border: "border-lavender-300/40",
  },
  {
    icon: "🎓",
    title: "Educate",
    description:
      "We provide resources and a network of connections to increase rates of success through equity, mentorship, and guidance.",
    color: "from-sky-100 to-sky-200",
    border: "border-sky-300/40",
  },
  {
    icon: "🌸",
    title: "Community",
    description:
      "We foster an inclusive environment where people from diverse backgrounds can share ideas, dialogue, and advice.",
    color: "from-blush-100 to-blush-200",
    border: "border-blush-300/40",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative cloud */}
      <PixelCloud
        size="xl"
        variant="sky"
        className="absolute top-0 right-0 opacity-20 translate-x-8 -translate-y-4"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Who We Are"
          title="More than a club."
          titleGradient
          subtitle="WiCS is a student-led organization dedicated to supporting and empowering women and underrepresented students in technology at CCNY."
          className="mb-16"
        />

        {/* Mission statement card */}
        <AnimatedSection delay={0.1} className="mb-16">
          <div className="relative rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 via-sky-100 to-blush-100" />
            <div className="relative p-8 md:p-12">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="hidden md:flex w-12 h-12 rounded-2xl bg-white/70 items-center justify-center text-2xl flex-shrink-0 shadow-soft">
                  ✦
                </div>
                <div>
                  <p className="font-body text-xs font-bold tracking-widest uppercase text-lavender-500 mb-3">
                    Our Mission
                  </p>
                  <blockquote className="font-display text-2xl md:text-3xl font-medium text-violet-deep leading-relaxed italic">
                    &ldquo;WiCS builds a supportive community for women in tech
                    at CCNY by providing mentorship, career resources,
                    workshops, and inclusive spaces to grow.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Pillars */}
        <AnimatedSection delay={0.2} className="mb-8">
          <p className="font-body text-center text-xs font-bold tracking-widest uppercase text-lavender-500">
            Our Three Pillars
          </p>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className={`rounded-3xl bg-gradient-to-br ${pillar.color} border ${pillar.border} p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="font-display text-xl font-semibold text-violet-deep mb-2">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Founded note */}
        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <p className="font-body text-sm text-slate-400">
            Founded in{" "}
            <span className="font-semibold text-lavender-500">2017</span> as a
            student-led initiative — and still growing stronger every year.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
