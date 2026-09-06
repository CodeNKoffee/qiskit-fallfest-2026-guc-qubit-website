"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Short measurement-themed hold: |0> resolves into |psi> and the curtain
 * lifts. Capped hard at ~1.1s and skipped entirely for reduced motion —
 * a preloader that outstays its welcome is just a slower site.
 */
export default function Preloader() {
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion() || sessionStorage.getItem("qff-seen") === "1") return;
    setDone(false);
    const t = setTimeout(() => {
      setDone(true);
      try {
        sessionStorage.setItem("qff-seen", "1");
      } catch {
        /* private mode — just don't remember */
      }
    }, 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[70] flex items-center justify-center"
      style={{
        background: "var(--color-cloud)",
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "auto",
        transition: "opacity .7s var(--ease-out-quant)",
      }}
    >
      <div className="font-mono text-sm tracking-[0.2em]" style={{ color: "#55525f" }}>
        <span style={{ opacity: done ? 0 : 1, transition: "opacity .3s" }}>|0⟩</span>
        <span className="mx-3" style={{ color: "#0530ad" }}>—→</span>
        <span style={{ color: "#6929c4" }}>|ψ⟩</span>
      </div>
    </div>
  );
}
