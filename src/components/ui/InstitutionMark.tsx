"use client";

import { useState } from "react";
import { venue } from "@/data/venue";

/**
 * GUC lockup.
 *
 * Renders the official logo when `venue.logoSrc` points at a file in
 * `public/`; otherwise a typographic lockup. Defaulting to type rather than
 * to an image means the page never shows a broken asset, and we never ship
 * an approximation of a mark we do not have.
 */
export default function InstitutionMark({
  className = "",
  height = 44,
}: {
  className?: string;
  height?: number;
}) {
  const [failed, setFailed] = useState(false);
  const src = venue.logoSrc;

  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={venue.name}
        style={{ height, width: "auto" }}
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <span
        className="flex shrink-0 items-center justify-center rounded-lg font-mono font-medium"
        style={{
          height,
          width: height * 1.3,
          border: "1.5px solid var(--color-quantum)",
          color: "var(--color-quantum)",
          fontSize: height * 0.33,
          letterSpacing: "0.05em",
        }}
      >
        GUC
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-medium">German University</span>
        <span className="block text-sm" style={{ color: "var(--ink-muted)" }}>
          in Cairo
        </span>
      </span>
    </span>
  );
}
