"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FloatingDecorProps = {
  className?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
};

export function FloatingDecor({ className, delay = 0, size = "md" }: FloatingDecorProps) {
  const sizes = { sm: "h-3 w-3", md: "h-5 w-5", lg: "h-8 w-8" };

  return (
    <motion.span
      className={cn(
        "pointer-events-none absolute block rounded-full bg-gradient-to-br from-gold-soft to-gold opacity-60",
        sizes[size],
        className,
      )}
      animate={{ y: [0, -14, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
