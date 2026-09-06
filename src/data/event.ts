/**
 * Single source of truth for event facts.
 * Anything marked TBA is a placeholder — replace before launch.
 */
export const event = {
  name: "Qiskit Fall Fest 2026",
  host: "Qubit",
  hostLong: "Qubit — Quantum Computing Club",
  university: "German University in Cairo",
  universityShort: "GUC",
  city: "Cairo, Egypt",
  venue: "TBA — GUC Campus, New Cairo",

  /** IBM's official 2026 theme. */
  theme: "A Decade of Quantum on the Cloud",
  themeBlurb:
    "Ten years since IBM put the world's first quantum computer on the cloud — and opened the field to everyone.",

  dates: "TBA — October 2026",
  datesISO: { start: "2026-10-01", end: "2026-10-03" },

  registerUrl: "#register",
  tagline: "Quantum computing, opened up. On our campus.",

  contactEmail: "TBA@guc.edu.eg",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Discord", href: "#" },
    { label: "GitHub", href: "#" },
  ],
} as const;

/** Verified global Fall Fest figures, used in the About section. */
export const globalStats = [
  { value: "150+", label: "Host organizations worldwide" },
  { value: "32,000+", label: "Participants in the last edition" },
  { value: "10", label: "Years of quantum on the cloud" },
  { value: "100%", label: "Student-led, on campus" },
] as const;
