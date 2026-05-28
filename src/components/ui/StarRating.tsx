import { Star } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < Math.floor(rating)
              ? "fill-gold text-gold"
              : "fill-rose-light text-rose-soft"
          }`}
        />
      ))}
      <span className="ml-1.5 text-xs font-medium text-rose-deep/80">{rating}</span>
    </div>
  );
}
