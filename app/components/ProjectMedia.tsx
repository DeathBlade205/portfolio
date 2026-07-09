"use client";

import { useState } from "react";

/**
 * Project preview image with a graceful placeholder.
 * Drop a screenshot at the `src` path (under /public) and it shows automatically;
 * until then a styled placeholder is rendered.
 */
export default function ProjectMedia({
  src,
  title,
  host,
  size = "md",
}: {
  src: string;
  title: string;
  host?: string;
  size?: "md" | "lg";
}) {
  const [errored, setErrored] = useState(false);
  const showImage = src && !errored;
  // Mobile keeps the screenshot's shape via aspect-ratio; larger screens get a
  // fixed editorial height with object-cover cropping.
  const height =
    size === "lg"
      ? "aspect-[4/3] sm:aspect-auto sm:h-[540px]"
      : "aspect-[4/3] sm:aspect-auto sm:h-[460px]";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[10px] border border-line bg-surf ${height}`}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${title} — screenshot`}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span
            aria-hidden="true"
            className="sg-spin select-none text-5xl leading-none text-accent/30"
          >
            ✶
          </span>
          <span className="font-serif text-2xl italic text-ink sm:text-3xl">
            {title}
          </span>
          {host && (
            <span className="font-mono text-[11px] tracking-[0.16em] text-accent">
              {host} ↗
            </span>
          )}
        </div>
      )}
    </div>
  );
}
