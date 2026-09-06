/**
 * Frame-loop scroll store.
 *
 * The 3D scene reads scroll every frame. Routing that through React state
 * would re-render the tree 60x a second, so progress lives in a mutable
 * module singleton: Lenis writes it, the r3f render loop reads it, and
 * React only hears about coarse changes (which milestone is active).
 */

type ScrollState = {
  /** Whole-document progress, 0..1. */
  progress: number;
  /** Progress through the decade section specifically, 0..1. */
  decade: number;
  /** Raw scroll offset in px. */
  y: number;
  velocity: number;
};

export const scrollState: ScrollState = {
  progress: 0,
  decade: 0,
  y: 0,
  velocity: 0,
};

type Listener = (milestone: number) => void;
const listeners = new Set<Listener>();
let lastMilestone = -1;

/** Coarse-grained subscription: fires only when the active year changes. */
export function onMilestone(fn: Listener) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function setMilestone(i: number) {
  if (i === lastMilestone) return;
  lastMilestone = i;
  for (const fn of listeners) fn(i);
}
