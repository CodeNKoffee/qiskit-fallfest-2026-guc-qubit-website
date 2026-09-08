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
    id: "opening",
    label: "01",
    when: "Sunday 8/11",
    title: "Opening",
    body: "The event kicks off with the opening session and first welcome to the programme.",
    status: "live",
  },
  {
    id: "session-1",
    label: "02",
    when: "Monday",
    title: "Session 1",
    body: "Core workshop content and hands-on learning for the first technical session.",
    status: "upcoming",
  },
  {
    id: "session-2",
    label: "03",
    when: "Wednesday",
    title: "Session 2",
    body: "The second session continues the technical track and deeper labs.",
    status: "upcoming",
  },
  {
    id: "session-3-guest",
    label: "04",
    when: "Thursday",
    title: "Session 3 / Guest Speaker",
    body: "A featured guest talk alongside the third main session of the event.",
    status: "upcoming",
  },
  {
    id: "guest-speaker-2",
    label: "05",
    when: "Saturday",
    title: "Guest Speaker",
    body: "An additional guest session is scheduled mid-week to expand the programme.",
    status: "upcoming",
  },
  {
    id: "session-3-guest-2",
    label: "06",
    when: "Sunday",
    title: "Session 3 / Guest Speaker",
    body: "The programme continues with another technical session and guest appearance.",
    status: "upcoming",
  },
  {
    id: "presentations-closing",
    label: "07",
    when: "Tuesday",
    title: "Presentations + closing",
    body: "Final project presentations and the close of the event programme.",
    status: "upcoming",
  },
];
