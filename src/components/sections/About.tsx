"use client";

import { motion } from "framer-motion";
import { ChefHat, Heart } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PremiumImage } from "@/components/ui/PremiumImage";
import { IMAGES } from "@/lib/constants";

const highlights = [
  { icon: Heart, label: "Feito com carinho" },
  { icon: ChefHat, label: "Receitas exclusivas" },
];

export function About() {
  return (
    <AnimatedSection id="sobre" className="section-padding relative overflow-hidden bg-cream-warm/40">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glow-rose relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-2 ring-white/80">
              <PremiumImage
                src={IMAGES.about}
                alt="Produção artesanal Doce Manifesto"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                placeholderVariant="chocolate"
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
            <motion.div
              className="glass absolute -bottom-5 -right-2 rounded-2xl p-5 shadow-xl sm:right-4 lg:-right-6"
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <p className="font-display text-3xl text-rose-burnt">+500</p>
              <p className="text-sm text-chocolate/70">Momentos adoçados</p>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.span
              className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-burnt"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Sobre a marca
            </motion.span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-chocolate sm:text-5xl">
              Cada mordida conta uma história
            </h2>
            <p className="mt-6 text-base leading-relaxed text-chocolate/75 sm:text-lg">
              A <strong className="font-medium text-rose-deep">Doce Manifesto</strong> nasceu do
              desejo de transformar o simples em extraordinário. Somos uma confeitaria artesanal
              especializada em brownies gourmet e doces que carregam alma em cada receita.
            </p>
            <p className="mt-4 text-base leading-relaxed text-chocolate/75 sm:text-lg">
              Selecionamos ingredientes premium, preparamos tudo à mão e colocamos carinho em cada
              detalhe — porque acreditamos que comer um doce deve ser uma experiência especial.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {highlights.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="glass flex items-center gap-3 rounded-2xl px-5 py-3 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(183,110,121,0.15)" }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-light text-rose-burnt">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-chocolate">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
