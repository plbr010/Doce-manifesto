"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: defaultVariants.hidden,
        visible: {
          ...defaultVariants.visible,
          transition: {
            ...(typeof defaultVariants.visible === "object" &&
            defaultVariants.visible !== null &&
            "transition" in defaultVariants.visible
              ? defaultVariants.visible.transition
              : {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
}
