"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FloatingDecor } from "@/components/ui/FloatingDecor";
import { PremiumImage } from "@/components/ui/PremiumImage";
import { IMAGES, WHATSAPP_MAIN } from "@/lib/constants";

export function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const yImg = useTransform(scrollY, [0, 500], [0, 40]);
  const yText = useTransform(scrollY, [0, 400], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.65]);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-24">
      <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ y: yBg }}>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-light/90 via-cream to-cream-warm" />
        <div className="absolute -right-32 top-16 h-[520px] w-[520px] rounded-full bg-rose-soft/50 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-gold-soft/35 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,_rgba(201,169,98,0.18),_transparent_55%)]" />
      </motion.div>

      <FloatingDecor className="left-[10%] top-[30%]" delay={0.3} size="md" />
      <FloatingDecor className="right-[15%] top-[20%]" delay={0.8} size="sm" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-12 lg:pb-28">
        <motion.div style={{ y: yText, opacity }} className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-5"
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Confeitaria gourmet · Muriaé/MG
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl font-semibold leading-[1.05] text-chocolate sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-gradient-gold">Doce</span>
            Manifesto
          </motion.h1>

          <motion.p
            className="mt-5 font-display text-2xl italic text-rose-burnt sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            Adoçando momentos com atitude ✨
          </motion.p>

          <motion.p
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-chocolate/70 sm:text-lg lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            Brownies artesanais, doces gourmet e experiências que transformam qualquer
            instante em algo inesquecível.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button href={WHATSAPP_MAIN} variant="primary" size="lg" external>
              Fazer Pedido
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#cardapio" variant="secondary" size="lg">
              Ver Cardápio
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] w-full sm:aspect-square lg:aspect-[4/5]">
            <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-rose-burnt/25 via-gold-soft/40 to-rose-light/50 blur-md" />
            <div className="glow-rose relative h-full min-h-[300px] w-full overflow-hidden rounded-[1.85rem] ring-2 ring-white/70">
              <PremiumImage
                src={IMAGES.hero}
                alt="Brownie gourmet Doce Manifesto"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="transition-transform duration-700 hover:scale-[1.03]"
                placeholderVariant="chocolate"
              />
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-chocolate/35 via-chocolate/5 to-transparent" />
              <div className="gallery-shine pointer-events-none absolute inset-0 z-20" />
            </div>

            <motion.div
              className="glass absolute -bottom-4 -left-2 z-30 max-w-[200px] rounded-2xl p-4 shadow-lg sm:-left-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-display text-lg text-rose-burnt">100%</p>
              <p className="text-xs text-chocolate/70">Artesanal & feito com amor</p>
            </motion.div>

            <motion.div
              className="glass absolute -right-2 top-8 z-30 rounded-2xl px-4 py-3 shadow-lg sm:-right-5"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-chocolate">⭐ 4.9</p>
              <p className="text-xs text-chocolate/60">Clientes felizes</p>
            </motion.div>
          </div>

          <motion.div
            className="glow-gold absolute -bottom-6 right-0 z-20 hidden h-36 w-36 overflow-hidden rounded-2xl ring-2 ring-white shadow-xl lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <PremiumImage
              src={IMAGES.heroAccent}
              alt="Brigadeiros gourmet"
              fill
              sizes="144px"
              containerClassName="h-36 w-36"
              placeholderVariant="cream"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
