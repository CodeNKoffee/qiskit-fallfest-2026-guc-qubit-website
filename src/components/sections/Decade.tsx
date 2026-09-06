"use client";

import { useEffect, useRef, useState } from "react";
import { decade } from "@/data/decade";
import { scrollState, setMilestone } from "@/lib/scroll";
import { clamp } from "@/lib/motion";
import { event } from "@/data/event";

/**
 * The theme spine. This section owns the decade readout: it measures its
 * own position rather than slicing global page progress, so the year in
 * the sticky card, the qubit count, and the density of the lattice behind
 * the page always describe the milestone actually on screen.
 */
export default function Decade() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      const list = listRef.current;
      if (!list) return;

      // Progress of this section past the viewport midline, 0..1.
      const rect = list.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const t = clamp((mid - rect.top) / (rect.height || 1));
      scrollState.decade = t;

      // Active milestone = whichever item's midpoint is nearest the line.
      let best = 0;
      let bestDist = Infinity;
      items.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });

      setActive(best);
      setMilestone(best);
      raf = requestAnimationFrame(measure);
    };

    raf = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(raf);
  }, []);

  const current = decade[Math.min(active, decade.length - 1)];

  return (
    <section
      id="decade"
      data-tone="light"
      className="relative"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="shell grid gap-x-16 py-24 md:py-32 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]">
        {/* Sticky readout */}
        <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
          <Frost className="p-6 md:p-7">
            <p className="eyebrow">The 2026 theme</p>
            <h2 className="mt-3 text-balance text-3xl font-medium leading-[1.03] tracking-[-0.03em] md:text-4xl">
              {event.theme}
            </h2>

            <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--line)" }}>
              <p className="eyebrow">Now showing</p>
              <p
                className="mt-2 font-mono text-6xl font-medium leading-none tabular-nums"
                style={{ color: "var(--color-quantum)" }}
              >
                {current.year}
              </p>

              <p className="mt-5 text-sm" style={{ color: "var(--ink-muted)" }}>
                Qubits on the lattice
              </p>
              <p className="font-mono text-2xl tabular-nums" style={{ color: "var(--color-qiskit)" }}>
                {current.qubits.toLocaleString()}
              </p>
            </div>

            <p className="mt-6 text-xs leading-relaxed" style={{ color: "var(--ink-faint)" }}>
              The lattice behind this page is a heavy-hex graph — the real qubit
              topology IBM builds on. It grows as you scroll.
            </p>
          </Frost>
        </div>

        {/* Milestones */}
        <ol ref={listRef} className="mt-14 lg:mt-0">
          {decade.map((m, i) => {
            const isActive = i === active;
            return (
              <li
                key={m.year}
                ref={(el) => {
                  items.current[i] = el;
                }}
                className="relative py-6 pl-6 md:pl-10"
                style={{ borderLeft: `1px solid ${isActive ? "var(--color-quantum)" : "var(--line)"}` }}
              >
                <span
                  className="absolute -left-[6.5px] top-14 block h-3 w-3 rounded-full transition-all duration-500"
                  style={{
                    background: isActive ? "var(--color-quantum)" : "var(--line-strong)",
                    transform: isActive ? "scale(1.35)" : "scale(1)",
                    boxShadow: isActive ? "0 0 0 6px rgb(5 48 173 / 0.13)" : "none",
                  }}
                />

                <Frost
                  className="p-6 transition-opacity duration-500 md:p-8"
                  style={{ opacity: isActive ? 1 : 0.72 }}
                >
                  <p className="font-mono text-sm tracking-[0.1em]" style={{ color: "var(--color-qiskit)" }}>
                    {m.year} — {m.qubits.toLocaleString()} qubits
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                    {m.title}
                  </h3>
                  <p
                    className="mt-3 max-w-xl text-pretty leading-relaxed"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {m.body}
                  </p>
                </Frost>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/**
 * Frosted panel. The lattice is the point of this section, so content sits
 * on translucent glass rather than an opaque card — you still read the
 * geometry through it, but the text keeps its contrast.
 */
function Frost({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{
        background: "rgb(244 242 238 / 0.9)",
        backdropFilter: "blur(14px) saturate(1.1)",
        WebkitBackdropFilter: "blur(14px) saturate(1.1)",
        border: "1px solid rgb(20 19 26 / 0.07)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
