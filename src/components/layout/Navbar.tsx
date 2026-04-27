"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Events", href: "#events" },
  { label: "E-Board", href: "#eboard" },
  { label: "Join", href: "#join" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass shadow-soft py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="WiCS home"
          >
            {/* WiCS brand logo */}
            <div className="w-9 h-9 relative rounded-lg overflow-hidden">
              <Image
                src="/wics-logo.png"
                alt="WiCS @ CCNY logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-display text-xl font-semibold text-violet-deep">
              WiCS<span className="text-lavender-400"> @ CCNY</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-xl text-sm font-semibold font-body text-slate-600 hover:text-violet-deep hover:bg-lavender-100 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#join")}
              className="ml-2 px-5 py-2.5 rounded-2xl text-sm font-bold font-body bg-gradient-to-r from-lavender-400 to-sky-300 text-violet-deep shadow-soft hover:shadow-soft-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Join Us ✦
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-violet-deep hover:bg-lavender-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 glass border-t border-lavender-200/50 shadow-soft-lg p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold font-body text-slate-700 hover:bg-lavender-100 text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#join")}
                className="mt-2 px-4 py-3 rounded-2xl text-sm font-bold font-body bg-gradient-to-r from-lavender-400 to-sky-300 text-violet-deep text-center"
              >
                Join WiCS ✦
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
