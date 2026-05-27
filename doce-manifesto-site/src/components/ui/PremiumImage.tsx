"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

type PremiumImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
  placeholderVariant?: "rose" | "chocolate" | "cream";
};

export function PremiumImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  containerClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 33vw",
  placeholderVariant = "rose",
}: PremiumImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const markLoaded = useCallback(() => setLoaded(true), []);
  const markFailed = useCallback(() => setFailed(true), []);

  if (failed) {
    return (
      <ImagePlaceholder
        alt={alt}
        variant={placeholderVariant}
        className={containerClassName}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill && "h-full min-h-full w-full",
        containerClassName,
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 z-10">
          <ImagePlaceholder alt={alt} variant={placeholderVariant} />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        unoptimized={src.startsWith("/")}
        className={cn(
          "object-cover transition-all duration-700",
          fill && "absolute inset-0 h-full w-full",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onLoad={markLoaded}
        onLoadingComplete={markLoaded}
        onError={markFailed}
      />
    </div>
  );
}
