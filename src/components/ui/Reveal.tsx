"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Stagger index — multiplied into the transition delay. */
  i?: number;
  as?: "div" | "li" | "section" | "article";
  className?: string;
};

/**
 * IntersectionObserver reveal. Cheaper than a scroll library for simple
 * entrances, and the [data-reveal] CSS escape hatch in globals.css keeps
 * content visible when motion is reduced.
 */
export default function Reveal({ children, i = 0, as = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // React 19 takes `ref` as a plain prop, so a polymorphic tag only needs
  // the element attribute surface to typecheck.
  const Tag = as as unknown as React.FC<
    React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
  >;

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(18px)",
        transition: `opacity .75s var(--ease-out-quant) ${i * 70}ms, transform .75s var(--ease-out-quant) ${i * 70}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
