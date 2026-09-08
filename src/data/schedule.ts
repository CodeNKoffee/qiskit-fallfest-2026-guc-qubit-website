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

/** Daily schedule aligned with the revised event timeline. */
export const schedule: Day[] = [
  {
    id: "to-be-announced",
    label: "To be announced",
    date: "TBA",
    summary: "The daily programme is still being finalised.",
    sessions: [
      { time: "TBA", title: "To be announced", track: "talk", room: "TBA" },
      { time: "TBA", title: "To be announced", track: "workshop", room: "TBA" },
      { time: "TBA", title: "To be announced", track: "lab", room: "TBA" },
    ],
  },
];
