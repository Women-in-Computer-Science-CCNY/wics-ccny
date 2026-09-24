"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-gradient-to-r from-lavender-400 to-sky-300 text-violet-deep font-bold shadow-soft hover:shadow-soft-lg",
  secondary:
    "bg-white text-violet-deep font-semibold shadow-card hover:shadow-card-hover border border-lavender-200",
  ghost:
    "bg-transparent text-lavender-500 font-semibold hover:bg-lavender-100",
  outline:
    "bg-transparent border-2 border-lavender-300 text-violet-deep font-semibold hover:bg-lavender-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-2xl",
  lg: "px-8 py-4 text-lg rounded-2xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  external = false,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-body transition-all duration-200",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <MotionWrapper>
        <Link
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <button onClick={onClick} className={classes} disabled={disabled}>
        {children}
      </button>
    </MotionWrapper>
  );
}
