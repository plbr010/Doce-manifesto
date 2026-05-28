"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MAIN } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section id="pedido" className="relative overflow-hidden px-5 py-24 sm:px-8 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-burnt via-rose-deep to-chocolate" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(201,169,98,0.35),_transparent_45%)]" />
      <div className="absolute inset-0 bg-dots opacity-20" />

      <motion.div
        className="pointer-events-none absolute left-1/4 top-10 h-32 w-32 rounded-full bg-gold-soft/25 blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-gold-soft" />
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Seu doce favorito está a um clique 🍰✨
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/88 sm:text-lg">
            Peça agora pelo WhatsApp e receba doces fresquinhos, feitos com todo carinho da Doce
            Manifesto.
          </p>
          <div className="mt-10">
            <Button
              href={WHATSAPP_MAIN}
              variant="whatsapp"
              size="lg"
              external
              className="!px-10 !py-5 text-lg shadow-2xl"
            >
              <MessageCircle className="h-6 w-6" />
              Chamar no WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
