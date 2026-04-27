import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  /** Optional: use gradient styling on title */
  titleGradient?: boolean;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  titleGradient = false,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <AnimatedSection
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2",
            align === "center" && "mx-auto"
          )}
        >
          {/* Pixel dots */}
          <span className="w-1 h-1 bg-lavender-400 inline-block" />
          <span className="w-1 h-1 bg-lavender-400 inline-block" />
          <span
            className="text-xs font-bold tracking-[0.15em] uppercase text-lavender-500 font-body"
            style={{ letterSpacing: "0.15em" }}
          >
            {eyebrow}
          </span>
          <span className="w-1 h-1 bg-lavender-400 inline-block" />
          <span className="w-1 h-1 bg-lavender-400 inline-block" />
        </div>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl font-semibold leading-tight",
          titleGradient
            ? "text-gradient"
            : "text-violet-deep"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-body text-lg text-slate-500 max-w-2xl leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
