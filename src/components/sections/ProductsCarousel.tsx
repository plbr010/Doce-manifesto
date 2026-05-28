"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PremiumImage } from "@/components/ui/PremiumImage";
import { StarRating } from "@/components/ui/StarRating";
import { products } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <motion.article
      className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-rose-burnt/8 ring-1 ring-rose-light/80 transition-shadow duration-500 hover:shadow-2xl hover:shadow-rose-burnt/20"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {product.bestseller && (
        <span className="absolute left-4 top-4 z-20 rounded-full bg-gradient-to-r from-gold to-gold-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-chocolate shadow-md">
          Mais Pedido
        </span>
      )}
      <div className="relative aspect-[4/3] min-h-[200px] overflow-hidden bg-cream-warm">
        <PremiumImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 85vw, 320px"
          className="transition-transform duration-700 group-hover:scale-110"
          placeholderVariant="chocolate"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-chocolate">{product.name}</h3>
          <p className="shrink-0 font-display text-xl font-bold text-rose-burnt">{product.price}</p>
        </div>
        <StarRating rating={product.rating} />
        <p className="mt-2 flex-1 text-sm leading-relaxed text-chocolate/65">{product.description}</p>
        <motion.a
          href={product.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-burnt to-rose-deep py-3 text-sm font-medium text-white shadow-md shadow-rose-burnt/25"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingBag className="h-4 w-4" />
          Pedir Agora
        </motion.a>
      </div>
    </motion.article>
  );
}

export function ProductsCarousel() {
  const emblaPlugins = useMemo(
    () => [Autoplay({ delay: 4500, stopOnInteraction: false })],
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, slidesToScroll: 1 },
    emblaPlugins,
  );
  const [canPrev, setCanPrev] = useState(true);
  const [canNext, setCanNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <AnimatedSection id="cardapio" className="section-padding overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-burnt">
            Cardápio
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-chocolate sm:text-5xl">
            Sabores que encantam
          </h2>
          <p className="mt-3 max-w-lg text-chocolate/65">
            Deslize e descubra nossos queridinhos — cada um preparado para despertar desejo imediato.
          </p>
        </div>

        <div className="relative">
          <div className="mb-4 hidden justify-end gap-2 sm:flex">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canPrev}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full glass transition-opacity",
                !canPrev && "opacity-40",
              )}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-rose-deep" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canNext}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full glass transition-opacity",
                !canNext && "opacity-40",
              )}
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5 text-rose-deep" />
            </button>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y gap-5 pl-1">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_55%] md:flex-[0_0_40%] lg:flex-[0_0_32%]"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
