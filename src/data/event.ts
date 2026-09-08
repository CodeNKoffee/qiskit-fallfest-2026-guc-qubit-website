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
  city: "",
  venue: "TBA — GUC Campus, New Cairo",

  /** IBM's official 2026 theme. */
  theme: "A Decade of Quantum on the Cloud",
  themeBlurb:
    "Ten years since IBM put the world's first quantum computer on the cloud — and opened the field to everyone.",

  dates: "",
  datesISO: { start: "TBA", end: "TBA" },

  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdF2yXzUKRcqW94SU6yoFV_7ODHgwXQ3omjFKnfcSNSJEBoxA/viewform?usp=publish-editor",
  hackathonTeamUrl: "https://docs.google.com/forms/d/e/1FAIpQLScOSYtgJ8CUMWNpiWqqzt2lokLMooRJMAA11R8Htn6jnx0zpQ/viewform?usp=publish-editor",
  tagline: "Quantum computing, opened up. On our campus.",

  contactEmail: "qubitclub.guc@gmail.com",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/qubitguc?stkn=ODdwYTI5cWp1Y3V6" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/qubit-guc-quantum-computing-club" },
    { label: "Discord", href: "#" },
  ],
} as const;

/** Verified global Fall Fest figures, used in the About section. */
export const globalStats = [
  { value: "150+", label: "Host organizations worldwide" },
  { value: "32,000+", label: "Participants in the last edition" },
  { value: "10", label: "Years of quantum on the cloud" },
  { value: "100%", label: "Student-led, on campus" },
] as const;
