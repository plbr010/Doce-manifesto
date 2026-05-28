"use client";

import { motion } from "framer-motion";
import { Award, Heart, Leaf, Sparkles, Truck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { differentials } from "@/lib/constants";

const iconMap = {
  sparkles: Sparkles,
  leaf: Leaf,
  heart: Heart,
  truck: Truck,
  award: Award,
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Differentials() {
  return (
    <AnimatedSection className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream via-rose-light/30 to-cream" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-burnt">
            Por que escolher
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-chocolate sm:text-5xl">
            Nossos diferenciais
          </h2>
        </div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {differentials.map((diff) => {
            const Icon = iconMap[diff.icon];
            return (
              <motion.div
                key={diff.title}
                variants={item}
                className="group relative rounded-3xl bg-white p-6 shadow-md shadow-rose-burnt/5 ring-1 ring-rose-light/60 transition-all duration-500 hover:shadow-xl hover:shadow-rose-burnt/15"
                whileHover={{ y: -6 }}
              >
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-rose-burnt/0 via-gold-soft/0 to-rose-light/0 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100 group-hover:from-rose-burnt/10 group-hover:via-gold-soft/20 group-hover:to-rose-light/30" />
                <div className="relative">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-light to-rose-soft text-rose-burnt shadow-inner">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-chocolate">{diff.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-chocolate/65">{diff.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
