export type PhaseStatus = "done" | "live" | "upcoming";

export type Phase = {
  id: string;
  label: string;
  /** Date string — kept free-form while the programme is unconfirmed. */
  when: string;
  title: string;
  body: string;
  status: PhaseStatus;
};

/**
 * The event roadmap — distinct from the day-by-day agenda in `schedule.ts`.
 * This is the "where are we in the run-up" view. Flip `status` as each
 * phase opens; the rail fills to the last non-upcoming phase automatically.
 */
export const phases: Phase[] = [
  {
    id: "announce",
    label: "01",
    when: "TBA",
    title: "Event announced",
    body: "Dates, venue and the speaker roster go live. Follow Qubit for the drop.",
    status: "live",
  },
  {
    id: "registration",
    label: "02",
    when: "TBA",
    title: "Registration opens",
    body: "Free places open to GUC students first, then to the wider quantum-curious.",
    status: "upcoming",
  },
  {
    id: "prep",
    label: "03",
    when: "TBA",
    title: "Prep week",
    body: "Setup guide goes out — IBM Quantum account, Python and Qiskit installed before you arrive.",
    status: "upcoming",
  },
  {
    id: "workshops",
    label: "04",
    when: "TBA — Day 01–02",
    title: "Workshops, talks & labs",
    body: "From your first circuit to running on real IBM hardware. No background assumed.",
    status: "upcoming",
  },
  {
    id: "prompt",
    label: "05",
    when: "TBA — end of Day 02",
    title: "Hackathon prompt drops",
    body: "Teams form, the prompt is revealed, and the build window opens.",
    status: "upcoming",
  },
  {
    id: "judging",
    label: "06",
    when: "TBA — Day 03",
    title: "Judging & awards",
    body: "Defend your project in front of the panel. Prizes, then closing.",
    status: "upcoming",
  },
  {
    id: "certificates",
    label: "07",
    when: "After the event",
    title: "Certificates issued",
    body: "IBM Quantum certificates go out to everyone who took part.",
    status: "upcoming",
  },
];
