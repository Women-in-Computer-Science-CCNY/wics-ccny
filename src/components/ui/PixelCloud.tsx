"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PixelCloudProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /** Kept for API compatibility — the new pixel-art cloud uses fixed colors. */
  variant?: "lavender" | "sky" | "blush" | "white";
  animate?: boolean;
  animationDelay?: number;
}

const sizes = {
  sm: "w-20 h-20",
  md: "w-32 h-32",
  lg: "w-48 h-48",
  xl: "w-72 h-72",
};

export function PixelCloud({
  className,
  size = "md",
  animate = true,
  animationDelay = 0,
}: PixelCloudProps) {
  const cloudImg = (
    <Image
      src="/cloud-deco.png"
      alt=""
      fill
      className="object-contain pixel-art"
      sizes="(max-width: 640px) 25vw, 20vw"
    />
  );

  if (!animate) {
    return (
      <div
        className={cn("relative", sizes[size], className)}
        aria-hidden="true"
      >
        {cloudImg}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("relative", sizes[size], className)}
      aria-hidden="true"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 5 + animationDelay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animationDelay,
      }}
    >
      {cloudImg}
    </motion.div>
  );
}

/** Decorative cluster of clouds for section backgrounds */
export function CloudCluster({ className }: { className?: string }) {
  return (
    <div className={cn("relative pointer-events-none", className)}>
      <PixelCloud
        size="xl"
        variant="lavender"
        animationDelay={0}
        className="absolute -top-4 -left-8 opacity-50"
      />
      <PixelCloud
        size="lg"
        variant="sky"
        animationDelay={1.5}
        className="absolute top-8 left-32 opacity-40"
      />
      <PixelCloud
        size="md"
        variant="blush"
        animationDelay={0.8}
        className="absolute -top-8 right-16 opacity-45"
      />
      <PixelCloud
        size="sm"
        variant="white"
        animationDelay={2}
        className="absolute top-2 right-4 opacity-60"
      />
    </div>
  );
}
