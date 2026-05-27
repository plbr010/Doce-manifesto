import { Cake } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  alt: string;
  className?: string;
  variant?: "rose" | "chocolate" | "cream";
};

const variants = {
  rose: "from-rose-light via-rose-soft/80 to-cream",
  chocolate: "from-cream-warm via-rose-light/60 to-chocolate/10",
  cream: "from-cream via-gold-soft/30 to-rose-light",
};

export function ImagePlaceholder({
  alt,
  className,
  variant = "rose",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[200px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br",
        variants[variant],
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,98,0.2),transparent_50%)]" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-soft/25 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-rose-burnt/15 blur-2xl" />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/50 shadow-inner ring-1 ring-white/80">
          <Cake className="h-7 w-7 text-rose-burnt/80" strokeWidth={1.25} />
        </span>
        <p className="max-w-[140px] text-xs font-medium leading-snug text-chocolate/50">
          {alt}
        </p>
      </div>
      <div className="absolute inset-0 shimmer opacity-40" aria-hidden />
    </div>
  );
}
