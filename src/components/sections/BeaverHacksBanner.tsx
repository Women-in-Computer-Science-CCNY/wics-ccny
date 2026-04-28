"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { PixelCloud } from "@/components/ui/PixelCloud";
import { Sparkles } from "lucide-react";

export function BeaverHacksBanner() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          {/* Spotlight card — saturated gradient so the white type reads */}
          <div className="relative rounded-4xl overflow-hidden shadow-card-hover ring-1 ring-white/30">
            {/* Card background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-lavender-400 to-blush-400" />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-deep/30 via-transparent to-transparent" />

            {/* Glow blobs inside the card */}
            <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-white/25 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-blush-200/40 blur-2xl" />

            {/* Decorative clouds inside the card */}
            <PixelCloud
              size="lg"
              className="absolute -top-6 -left-6 opacity-50"
              animationDelay={0}
            />
            <PixelCloud
              size="md"
              className="absolute -bottom-6 -right-4 opacity-45"
              animationDelay={1.5}
            />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left text */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 mb-4">
                    <Sparkles size={12} className="text-white" />
                    <span className="font-body text-xs font-bold tracking-widest uppercase text-white">
                      Upcoming Event
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white drop-shadow-sm mb-3 leading-tight">
                    BeaverHacks is{" "}
                    <span className="italic">coming.</span>
                  </h2>
                  <p className="font-body text-white/95 text-lg max-w-lg leading-relaxed mb-2">
                    A 2-day hackathon co-hosted by WiCS × ACM × SWE × GWC.
                    All majors welcome. Prizes, pizza, and workshops provided.
                  </p>
                  <p className="font-body text-white/80 text-sm">
                    No prior hackathon experience required.
                  </p>
                </div>

                {/* Right CTA */}
                <div className="flex flex-col items-center gap-4">
                  {/* Animated pixel badge */}
                  <motion.div
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-24 h-24 rounded-3xl bg-white/25 backdrop-blur-sm border-2 border-white/50 flex flex-col items-center justify-center gap-1 shadow-soft"
                  >
                    <span className="text-3xl">🦫</span>
                    <span className="font-body text-[10px] font-bold text-white uppercase tracking-wide">
                      Hacks!
                    </span>
                  </motion.div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      href="/events"
                      size="md"
                      variant="secondary"
                    >
                      Learn More
                    </Button>
                    <Button
                      href="/join"
                      size="md"
                      className="bg-violet-deep text-white border border-white/30 hover:bg-violet-deep/90"
                    >
                      Sign Up for Updates
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
