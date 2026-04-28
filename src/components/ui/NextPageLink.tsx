"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface NextPageLinkProps {
  /** Where the link goes (e.g. "/events") */
  href: string;
  /** Short eyebrow label, e.g. "Up next" */
  eyebrow?: string;
  /** The headline of the destination, e.g. "See what's happening" */
  label: string;
}

/**
 * Quiet end-of-page link that points to the natural next destination.
 * Sits above the footer; doesn't compete with the page's primary CTAs.
 */
export function NextPageLink({
  href,
  eyebrow = "Up next",
  label,
}: NextPageLinkProps) {
  return (
    <section className="relative pt-4 pb-16 md:pb-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center">
          <p className="font-body text-xs font-bold tracking-widest uppercase text-lavender-500 mb-3">
            {eyebrow}
          </p>
          <Link
            href={href}
            className="group inline-flex items-center gap-2 font-display text-2xl md:text-3xl font-semibold text-violet-deep hover:text-lavender-500 transition-colors"
          >
            {label}
            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
