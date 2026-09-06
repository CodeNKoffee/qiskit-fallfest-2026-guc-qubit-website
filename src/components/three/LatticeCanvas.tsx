"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Lattice from "./Lattice";
import { isLowPower, prefersReducedMotion } from "@/lib/motion";

/**
 * Fixed-position WebGL layer sitting behind the whole document.
 *
 * Mounts only after first paint, so three.js never blocks the hero, and
 * bails out entirely for reduced-motion users and for devices that would
 * drop frames — the DOM content below is fully readable without it.
 */
export default function LatticeCanvas() {
  const [mode, setMode] = useState<"pending" | "high" | "low" | "off">("pending");

  useEffect(() => {
    if (prefersReducedMotion()) {
      setMode("off");
      return;
    }

    // Confirm WebGL actually exists before paying for the bundle's setup.
    const probe = document.createElement("canvas");
    const gl =
      probe.getContext("webgl2") ?? probe.getContext("webgl");
    if (!gl) {
      setMode("off");
      return;
    }

    // Defer past first paint so LCP is DOM text, never the canvas.
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setMode(isLowPower() ? "low" : "high"))
      : window.setTimeout(() => setMode(isLowPower() ? "low" : "high"), 200);

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id as number);
      else clearTimeout(id as number);
    };
  }, []);

  if (mode === "off" || mode === "pending") {
    return <StaticField dimmed={mode === "off"} />;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
      data-lattice={mode}
    >
      <Canvas
        gl={{ antialias: mode === "high", alpha: true, powerPreference: "high-performance" }}
        dpr={mode === "high" ? [1, 1.75] : 1}
        camera={{ position: [0, 0, 16], fov: 42 }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <Lattice rings={mode === "high" ? 8 : 5} quality={mode === "high" ? "high" : "low"} />
        </Suspense>
      </Canvas>
    </div>
  );
}

/**
 * CSS-only stand-in: a faint hex wash so the page never looks unfinished
 * before (or without) WebGL.
 */
function StaticField({ dimmed }: { dimmed: boolean }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
      style={{
        opacity: dimmed ? 0.5 : 0.8,
        backgroundImage:
          "radial-gradient(circle at 22% 18%, rgb(5 48 173 / 0.10), transparent 42%), radial-gradient(circle at 78% 62%, rgb(105 41 196 / 0.10), transparent 46%)",
      }}
    />
  );
}
