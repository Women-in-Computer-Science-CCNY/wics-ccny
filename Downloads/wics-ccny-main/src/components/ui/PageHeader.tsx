"use client";

import { motion } from "framer-motion";
import { PixelCloud } from "@/components/ui/PixelCloud";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  /** Use the brand gradient on the title */
  titleGradient?: boolean;
  subtitle?: string;
}

/**
 * Compact page header used at the top of sub-routes (about, events, etc.)
 * Sits below the sticky navbar. The page-wide gradient is provided by layout.
 */
export function PageHeader({
  eyebrow,
  title,
  titleGradient = false,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
      <PixelCloud
        size="lg"
        className="absolute top-24 -left-8 opacity-30"
        animationDelay={0}
      />
      <PixelCloud
        size="md"
        className="absolute top-32 right-0 opacity-25 translate-x-4"
        animationDelay={1.5}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-1 h-1 bg-lavender-400 inline-block" />
            <span className="w-1 h-1 bg-lavender-400 inline-block" />
            <span className="text-xs font-bold tracking-widest uppercase text-lavender-500 font-body">
              {eyebrow}
            </span>
            <span className="w-1 h-1 bg-lavender-400 inline-block" />
            <span className="w-1 h-1 bg-lavender-400 inline-block" />
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`font-display text-5xl md:text-7xl font-semibold leading-[1.05] ${titleGradient ? "text-gradient" : "text-violet-deep"}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mt-4"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
