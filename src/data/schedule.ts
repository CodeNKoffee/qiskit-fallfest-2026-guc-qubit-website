export type SessionTrack = "workshop" | "talk" | "lab" | "hackathon" | "social";

export type Session = {
  time: string;
  title: string;
  speaker?: string;
  room?: string;
  track: SessionTrack;
};

export type Day = {
  id: string;
  label: string;
  date: string;
  summary: string;
  sessions: Session[];
};

export const trackMeta: Record<SessionTrack, { label: string; color: string }> = {
  workshop: { label: "Workshop", color: "var(--color-quantum-400)" },
  talk: { label: "Talk", color: "var(--color-qiskit)" },
  lab: { label: "Lab", color: "var(--color-signal)" },
  hackathon: { label: "Hackathon", color: "var(--color-ember)" },
  social: { label: "Social", color: "var(--color-aubergine)" },
};

/** Placeholder agenda — shape is real, content is TBA. */
export const schedule: Day[] = [
  {
    id: "day-1",
    label: "Day 01",
    date: "TBA — October 2026",
    summary: "Foundations. No quantum background needed.",
    sessions: [
      { time: "09:00", title: "Doors open & check-in", track: "social", room: "TBA" },
      { time: "10:00", title: "Opening ceremony", speaker: "TBA", track: "talk", room: "TBA" },
      { time: "11:00", title: "What is a qubit, really?", speaker: "TBA", track: "workshop", room: "TBA" },
      { time: "13:00", title: "Lunch", track: "social", room: "TBA" },
      { time: "14:00", title: "Your first Qiskit circuit", speaker: "TBA", track: "lab", room: "TBA" },
      { time: "16:30", title: "Ten years on the cloud", speaker: "TBA", track: "talk", room: "TBA" },
    ],
  },
  {
    id: "day-2",
    label: "Day 02",
    date: "TBA — October 2026",
    summary: "Depth. Algorithms, noise, and real hardware.",
    sessions: [
      { time: "10:00", title: "Quantum algorithms & complexity", speaker: "TBA", track: "talk", room: "TBA" },
      { time: "11:30", title: "Optimization with Qiskit", speaker: "TBA", track: "workshop", room: "TBA" },
      { time: "13:00", title: "Lunch", track: "social", room: "TBA" },
      { time: "14:00", title: "Error correction lab", speaker: "TBA", track: "lab", room: "TBA" },
      { time: "16:00", title: "Running on real IBM hardware", speaker: "TBA", track: "lab", room: "TBA" },
      { time: "18:00", title: "Hackathon prompt reveal", track: "hackathon", room: "TBA" },
    ],
  },
  {
    id: "day-3",
    label: "Day 03",
    date: "TBA — October 2026",
    summary: "Build it, then defend it.",
    sessions: [
      { time: "09:00", title: "Hack begins", track: "hackathon", room: "TBA" },
      { time: "12:00", title: "Mentor office hours", speaker: "TBA", track: "hackathon", room: "TBA" },
      { time: "16:00", title: "Submissions close", track: "hackathon", room: "TBA" },
      { time: "17:00", title: "Project defence & judging", track: "hackathon", room: "TBA" },
      { time: "19:00", title: "Awards & closing", track: "social", room: "TBA" },
    ],
  },
];
