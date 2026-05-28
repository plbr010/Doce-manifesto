"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <AnimatedSection id="depoimentos" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-burnt">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-chocolate sm:text-5xl">
            Quem provou, amou
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              className="glass relative flex flex-col rounded-3xl p-6 shadow-md shadow-rose-burnt/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(183,110,121,0.12)" }}
            >
              <Quote className="mb-3 h-8 w-8 text-gold-soft" strokeWidth={1.25} />
              <p className="flex-1 font-display text-lg italic leading-snug text-chocolate">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-rose-light/80 pt-4">
                <StarRating rating={t.rating} />
                <cite className="mt-2 block text-sm font-medium not-italic text-rose-deep/80">
                  — {t.name}
                </cite>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
