"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-gradient-to-r from-rose-burnt to-rose-deep text-white shadow-lg shadow-rose-burnt/30 hover:shadow-xl hover:shadow-rose-burnt/40",
  secondary:
    "glass text-chocolate hover:bg-white/80 shadow-md shadow-rose-burnt/10",
  outline:
    "border-2 border-rose-burnt/40 text-rose-deep hover:bg-rose-light/50 bg-transparent",
  whatsapp:
    "bg-whatsapp text-white shadow-lg shadow-whatsapp/25 hover:shadow-xl hover:shadow-whatsapp/30 hover:bg-whatsapp-hover",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors",
    variants[variant],
    sizes[size],
    className,
  );

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    if (href.startsWith("#")) {
      return (
        <motion.a href={href} className={classes} {...motionProps}>
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
