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

  /** Dates are being confirmed; shown wherever the site would print them. */
  dates: "22 November – 1 December 2026",


  registerUrl: "https://forms.gle/4FKbpGTYfuUSXQh39",
  /** Hackathon team list. Empty until it is ready; the button stays disabled. */
  hackathonTeamUrl: "",
  tagline: "Quantum computing, opened up. On our campus.",

  contactEmail: "qubitclub.guc@gmail.com",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/qubitguc?stkn=ODdwYTI5cWp1Y3V6" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/qubit-guc-quantum-computing-club" },
  ],
} as const;
