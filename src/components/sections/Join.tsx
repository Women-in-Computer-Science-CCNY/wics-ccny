"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { PixelCloud } from "@/components/ui/PixelCloud";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const socials = [
  {
    name: "Instagram",
    handle: "@wics.ccny",
    href: "https://www.instagram.com/wics.ccny/",
    description: "Events, updates & community moments",
    gradient: "from-pink-400 via-purple-400 to-yellow-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    handle: "WiCS CCNY",
    href: "https://discord.gg/ezP92mWv9F",
    description: "Chat, resources & club announcements",
    gradient: "from-indigo-500 to-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.14 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "WiCS @ CCNY",
    href: "https://www.linkedin.com/company/women-in-computer-science-at-ccny/",
    description: "Professional updates & opportunities",
    gradient: "from-blue-600 to-blue-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Join() {
  return (
    <section id="join" className="relative py-24 md:py-32 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-lavender-300/25 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blush-300/20 blur-3xl" />

      {/* Clouds */}
      <PixelCloud
        size="xl"
        variant="lavender"
        className="absolute top-0 left-0 opacity-30 -translate-x-8 -translate-y-4"
        animationDelay={0}
      />
      <PixelCloud
        size="lg"
        variant="blush"
        className="absolute bottom-0 right-0 opacity-35 translate-x-4 translate-y-2"
        animationDelay={1.8}
      />
      <PixelCloud
        size="md"
        variant="sky"
        className="absolute top-12 right-1/4 opacity-30"
        animationDelay={1}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero CTA card */}
        <AnimatedSection className="mb-16">
          <div className="relative rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl" />
            <div className="absolute inset-0 border border-lavender-200/60 rounded-4xl" />

            <div className="relative p-8 md:p-14 text-center">
              {/* Mascot */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 relative mx-auto mb-6 pixel-art"
              >
                <Image
                  src="/mascot.png"
                  alt="WiCS beaver"
                  fill
                  className="object-contain pixel-art"
                />
              </motion.div>

              <h2 className="font-display text-4xl md:text-6xl font-semibold text-violet-deep mb-4 leading-tight">
                Ready to join the{" "}
                <span className="italic text-gradient">community?</span>
              </h2>
              <p className="font-body text-lg text-slate-500 max-w-xl mx-auto mb-8">
                Scan our Linktree to follow WiCS&apos; socials, join our
                Discord, and stay updated on everything happening.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="https://linktr.ee/wics_ccny" external size="lg">
                  Open Linktree ✦
                </Button>
                <Button href="mailto:wics.ccny@gmail.com" variant="secondary" size="lg">
                  Email Us
                </Button>
              </div>

              {/* Linktree QR code */}
              <div className="mt-10 inline-flex flex-col items-center gap-3">
                <a
                  href="https://linktr.ee/wics_ccny"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WiCS Linktree"
                  className="relative w-32 h-32 rounded-2xl bg-white p-3 border border-lavender-200 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <Image
                    src="/qr-linktree.png"
                    alt="Scan to open WiCS Linktree"
                    fill
                    className="object-contain p-2"
                    sizes="128px"
                  />
                </a>
                <p className="font-body text-xs text-slate-500">
                  Scan to follow our Linktree
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Social cards */}
        <div className="mb-8">
          <AnimatedSection className="text-center mb-8">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-lavender-500">
              Find us everywhere
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                variants={staggerItem}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center mb-4 shadow-soft group-hover:shadow-soft-lg transition-shadow`}
                >
                  {social.icon}
                </div>
                <p className="font-display text-lg font-semibold text-violet-deep">
                  {social.name}
                </p>
                <p className="font-body text-sm font-semibold text-lavender-500 mb-1">
                  {social.handle}
                </p>
                <p className="font-body text-xs text-slate-500">
                  {social.description}
                </p>
              </motion.a>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
