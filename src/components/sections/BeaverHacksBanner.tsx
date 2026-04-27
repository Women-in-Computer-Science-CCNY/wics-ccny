"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { PixelCloud } from "@/components/ui/PixelCloud";
import { Sparkles } from "lucide-react";

export function BeaverHacksBanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-blush-200/30 blur-2xl" />

      {/* Clouds */}
      <PixelCloud
        size="lg"
        variant="white"
        className="absolute top-2 left-4 opacity-40"
        animationDelay={0}
      />
      <PixelCloud
        size="md"
        variant="lavender"
        className="absolute bottom-2 right-8 opacity-35"
        animationDelay={1.5}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left text */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 mb-4">
                <Sparkles size={12} className="text-violet-deep" />
                <span className="font-body text-xs font-bold tracking-widest uppercase text-violet-deep">
                  Upcoming Event
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white drop-shadow-sm mb-3 leading-tight">
                BeaverHacks is{" "}
                <span className="italic">coming.</span>
              </h2>
              <p className="font-body text-white/90 text-lg max-w-lg leading-relaxed mb-2">
                A 2-day hackathon co-hosted by WiCS × ACM × SWE × GWC.
                All majors welcome. Prizes, pizza, and workshops provided.
              </p>
              <p className="font-body text-white/70 text-sm">
                No prior hackathon experience required.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-center gap-4">
              {/* Animated pixel badge */}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex flex-col items-center justify-center gap-1"
              >
                <span className="text-3xl">🦫</span>
                <span className="font-body text-[10px] font-bold text-white uppercase tracking-wide">
                  Hacks!
                </span>
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href="#events"
                  size="md"
                  className="bg-white text-violet-deep hover:bg-white/90"
                >
                  Learn More
                </Button>
                <Button
                  href="#join"
                  size="md"
                  className="bg-violet-deep/80 text-white border border-white/20 hover:bg-violet-deep"
                >
                  Sign Up for Updates
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
