"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type ImageWithSkeletonProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImageWithSkeleton({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  containerClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  const markLoaded = useCallback(() => setLoaded(true), []);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill && "h-full min-h-full w-full",
        containerClassName,
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 z-10 shimmer" aria-hidden="true" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={cn(
          "object-cover transition-opacity duration-500",
          fill && "absolute inset-0 h-full w-full",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onLoad={markLoaded}
        onLoadingComplete={markLoaded}
        onError={markLoaded}
      />
    </div>
  );
}
