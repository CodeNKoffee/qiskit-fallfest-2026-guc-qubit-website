"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { scrollState } from "@/lib/scroll";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Smooth scroll + the single writer of `scrollState`.
 * Disabled entirely under prefers-reduced-motion, where we fall back to
 * native scrolling and a plain rAF loop that still feeds the store.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const readNative = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollState.y = window.scrollY;
      scrollState.progress = max > 0 ? window.scrollY / max : 0;
    };

    if (prefersReducedMotion()) {
      readNative();
      window.addEventListener("scroll", readNative, { passive: true });
      window.addEventListener("resize", readNative);
      return () => {
        window.removeEventListener("scroll", readNative);
        window.removeEventListener("resize", readNative);
      };
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ({ scroll, limit, velocity }: { scroll: number; limit: number; velocity: number }) => {
      scrollState.y = scroll;
      scrollState.progress = limit > 0 ? scroll / limit : 0;
      scrollState.velocity = velocity;
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
