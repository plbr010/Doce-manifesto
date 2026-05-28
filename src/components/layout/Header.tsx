"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled ? "glass py-3 shadow-sm shadow-rose-burnt/5" : "bg-transparent py-5",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="#" className="flex shrink-0 items-center">
          <Image
            src={LOGO}
            alt="Doce Manifesto — logo com borboleta"
            width={200}
            height={200}
            className="h-14 w-auto object-contain sm:h-[4.5rem]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-chocolate/80 transition-colors hover:text-rose-burnt"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#pedido"
            className="rounded-full bg-gradient-to-r from-rose-burnt to-rose-deep px-5 py-2 text-sm font-medium text-white shadow-md shadow-rose-burnt/25 transition-transform hover:scale-105"
          >
            Pedir agora
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full glass md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.nav
          className="glass mx-4 mt-3 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-chocolate hover:bg-rose-light/50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#pedido"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-rose-burnt px-4 py-3 text-center text-sm font-medium text-white"
          >
            Pedir agora
          </Link>
        </motion.nav>
      )}
    </motion.header>
  );
}
