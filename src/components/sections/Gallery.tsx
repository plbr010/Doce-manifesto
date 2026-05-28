"use client";

import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PremiumImage } from "@/components/ui/PremiumImage";
import { galleryItems, INSTAGRAM, INSTAGRAM_HANDLE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const layoutClass = {
  tall: "gallery-item-tall",
  wide: "gallery-item-wide",
  square: "",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Gallery() {
  return (
    <AnimatedSection
      id="galeria"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-cream-warm/60 via-cream to-rose-light/20"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex flex-col items-center text-center sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-burnt">
            Galeria
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-chocolate sm:text-5xl lg:text-6xl">
            Momentos Instagramáveis ✨
          </h2>
          <p className="mt-3 max-w-md text-base text-chocolate/65 sm:text-lg">
            Doces que merecem ir direto para o feed 🍫
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="glass mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-rose-deep shadow-md transition-all hover:scale-105 hover:bg-white/90 hover:shadow-lg"
          >
            <InstagramIcon className="h-4 w-4" />
            {INSTAGRAM_HANDLE}
          </a>
        </motion.div>

        <motion.div
          className="gallery-masonry"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {galleryItems.map((item) => (
            <motion.figure
              key={item.src}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-2xl shadow-lg shadow-rose-burnt/10 ring-1 ring-white/80 transition-shadow duration-500 hover:shadow-2xl hover:shadow-rose-burnt/25 sm:rounded-3xl",
                layoutClass[item.layout],
              )}
            >
              <div className="relative h-full min-h-full w-full">
                <PremiumImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  containerClassName="absolute inset-0 h-full w-full min-h-[140px]"
                  className="transition-transform duration-700 ease-out group-hover:scale-110"
                  placeholderVariant="cream"
                />
                <div className="gallery-shine absolute inset-0 z-10" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-chocolate/50 via-chocolate/0 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="glass w-fit rounded-full px-3 py-1.5 text-xs font-medium text-chocolate">
                    {item.alt}
                  </span>
                </div>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
