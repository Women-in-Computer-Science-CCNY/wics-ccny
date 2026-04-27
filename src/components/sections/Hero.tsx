"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { PixelCloud } from "@/components/ui/PixelCloud";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Radial glow spots ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-lavender-300/30 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-blush-300/20 blur-3xl" />

      {/* ── Floating clouds (background) ── */}
      <PixelCloud
        size="xl"
        variant="lavender"
        animationDelay={0}
        className="absolute top-16 -left-8 opacity-40"
      />
      <PixelCloud
        size="lg"
        variant="sky"
        animationDelay={2}
        className="absolute top-24 right-0 opacity-35 translate-x-4"
      />
      <PixelCloud
        size="md"
        variant="blush"
        animationDelay={1.2}
        className="absolute bottom-32 left-8 opacity-40"
      />
      <PixelCloud
        size="lg"
        variant="white"
        animationDelay={3}
        className="absolute bottom-48 right-12 opacity-50"
      />
      <PixelCloud
        size="sm"
        variant="lavender"
        animationDelay={1.8}
        className="absolute top-48 left-1/4 opacity-30"
      />

      {/* ── Sparkle decorations ── */}
      {[
        { top: "20%", left: "15%", delay: 0 },
        { top: "35%", right: "12%", delay: 1 },
        { bottom: "40%", left: "8%", delay: 2 },
        { top: "60%", right: "20%", delay: 0.5 },
        { bottom: "25%", right: "8%", delay: 1.5 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-lavender-400 pointer-events-none"
          style={pos as React.CSSProperties}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 3,
            delay: pos.delay as number,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={i % 2 === 0 ? 16 : 12} />
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* ── Eyebrow badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-lavender-300/40 shadow-soft">
              <span className="w-2 h-2 bg-lavender-400 rounded-none inline-block" />
              <span className="font-body text-xs font-bold tracking-widest uppercase text-lavender-600">
                CCNY · Women in Computer Science
              </span>
              <span className="w-2 h-2 bg-sky-300 rounded-none inline-block" />
            </div>
          </motion.div>

          {/* ── Beaver mascot ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-28 h-28 md:w-36 md:h-36 relative mx-auto"
            >
              <Image
                src="/mascot.png"
                alt="WiCS pixel beaver mascot"
                fill
                className="object-contain pixel-art"
                priority
              />
            </motion.div>
            {/* Glow under mascot */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-lavender-300/40 rounded-full blur-md" />
          </motion.div>

          {/* ── Headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-3"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-violet-deep">
              Women in{" "}
              <span className="italic text-gradient">Computer Science</span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-lavender-300" />
              <p className="font-display text-xl md:text-2xl text-slate-500 italic">
                at The City College of New York
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-lavender-300" />
            </div>
          </motion.div>

          {/* ── Subheadline ── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-body text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed"
          >
            Mentorship. Community. Workshops. Career support.{" "}
            <span className="font-semibold text-violet-deep">
              You don&apos;t have to navigate tech alone.
            </span>
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button href="#join" size="lg">
              Join WiCS ✦
            </Button>
            <Button
              href="#about"
              variant="secondary"
              size="lg"
            >
              Learn More
            </Button>
          </motion.div>

          {/* ── Stat pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            {[
              { value: "Est. 2017", label: "Founded" },
              { value: "All Majors", label: "Welcome" },
              { value: "Any Level", label: "Experience" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl glass border border-lavender-200/50"
              >
                <span className="font-body font-bold text-sm text-violet-deep">
                  {stat.value}
                </span>
                <span className="text-lavender-300 font-body text-xs">·</span>
                <span className="font-body text-xs text-slate-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-violet-deep transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-body text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
