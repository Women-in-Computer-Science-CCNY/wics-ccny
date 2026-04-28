"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { PixelCloud } from "@/components/ui/PixelCloud";

const activities = [
  {
    emoji: "🎤",
    title: "Career Panels",
    description:
      "Hear directly from professionals at top companies. Real stories, real advice.",
    tag: "Professional",
  },
  {
    emoji: "📄",
    title: "Resume Workshops",
    description:
      "Craft a resume that gets callbacks. We'll review, refine, and get it ready.",
    tag: "Career",
  },
  {
    emoji: "🤝",
    title: "Mentorship",
    description:
      "Get paired with upperclassmen and industry mentors who've been in your shoes.",
    tag: "Growth",
  },
  {
    emoji: "🌐",
    title: "Networking",
    description:
      "Build real connections with students, alumni, and industry professionals.",
    tag: "Community",
  },
  {
    emoji: "💻",
    title: "Technical Workshops",
    description:
      "Hands-on learning in web dev, data science, quantum computing, Figma, and more.",
    tag: "Technical",
  },
  {
    emoji: "🏆",
    title: "Hackathons",
    description:
      "Build something in 48 hours. BeaverHacks is our signature event — all majors welcome.",
    tag: "Events",
  },
  {
    emoji: "✨",
    title: "Social Events",
    description:
      "Bracelet making, game nights, and more. Because community is built outside the classroom too.",
    tag: "Social",
  },
  {
    emoji: "🤜",
    title: "Collaborations",
    description:
      "We partner with ACM, SWE, GWC, and external orgs for cross-community events.",
    tag: "Collab",
  },
];

const tagColors: Record<string, string> = {
  Professional: "bg-lavender-100 text-lavender-600",
  Career: "bg-sky-100 text-sky-600",
  Growth: "bg-blush-100 text-pink-500",
  Community: "bg-green-50 text-emerald-600",
  Technical: "bg-violet-50 text-violet-600",
  Events: "bg-amber-50 text-amber-600",
  Social: "bg-rose-50 text-rose-500",
  Collab: "bg-teal-50 text-teal-600",
};

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <PixelCloud
        size="lg"
        variant="blush"
        className="absolute bottom-16 -left-4 opacity-25"
        animationDelay={1}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="What We Do"
          title="Something for everyone."
          subtitle="Whether you're a freshman exploring tech or a senior gearing up for your first role — we have programs for you."
          className="mb-16"
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default"
            >
              {/* Emoji with pixel-feel treatment */}
              <div className="text-3xl mb-4 leading-none">{activity.emoji}</div>

              <span
                className={`inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-3 ${tagColors[activity.tag]}`}
              >
                {activity.tag}
              </span>

              <h3 className="font-display text-lg font-semibold text-violet-deep mb-2">
                {activity.title}
              </h3>
              <p className="font-body text-xs text-slate-500 leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
