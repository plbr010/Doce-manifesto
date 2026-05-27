"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_MAIN } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_MAIN}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="bg-whatsapp fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-whatsapp/25 transition-colors sm:bottom-8 sm:right-8 sm:h-16 sm:w-16 animate-pulse-soft"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
    </motion.a>
  );
}
