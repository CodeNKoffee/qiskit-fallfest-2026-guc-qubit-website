export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Coarse pointer + small viewport = ship the cheaper scene. */
export const isLowPower = () => {
  if (typeof window === "undefined") return false;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const small = window.innerWidth < 900;
  const cores = navigator.hardwareConcurrency ?? 8;
  return (coarse && small) || cores <= 4;
};

export const clamp = (v: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, v));

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Smoothstep-based remap, used to turn scroll progress into scene state. */
export const remap = (v: number, inMin: number, inMax: number) => {
  const t = clamp((v - inMin) / (inMax - inMin || 1));
  return t * t * (3 - 2 * t);
};
