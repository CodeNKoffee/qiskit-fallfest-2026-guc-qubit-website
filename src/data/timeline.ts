export type Step = {
  n: string;
  /** Date and time as published. "Time TBD" where a time is not yet set. */
  when: string;
  title: string;
  /** Short lines under the title, one per point. */
  points: string[];
  /** Renders the Previous Winners panel under this step. */
  winners?: boolean;
};

/** The Symposium Timeline: one linear programme, 22 November to 1 December 2026. */
export const steps: Step[] = [
  {
    n: "01",
    when: "Sunday, November 22, 2026 · 4:30 PM – 6:30 PM",
    title: "Opening Session with Dr. Ahmed Maarouf",
    points: ["Welcome to the program.", "Hackathon theme announcement."],
    winners: true,
  },
  {
    n: "02",
    when: "Monday, November 23, 2026 · 5:30 PM – 7:30 PM",
    title: "Session 1",
    points: ["Core workshop content and beginner-friendly hands-on learning for the first technical session."],
  },
  {
    n: "03",
    when: "Wednesday, November 25, 2026 · 5:30 PM – 7:30 PM",
    title: "Session 2",
    points: ["The second session continues the technical track and introduces deeper hands-on sessions (bring your laptop)."],
  },
  {
    n: "04",
    when: "Thursday, November 26, 2026 · Time TBD",
    title: "Online Session",
    points: ["Held online."],
  },
  {
    n: "05",
    when: "Saturday, November 28, 2026 · Time TBD",
    title: "Online Session",
    points: ["Held online."],
  },
  {
    n: "06",
    when: "Sunday, November 29, 2026 · Time TBD",
    title: "Online Session",
    points: ["Held online."],
  },
  {
    n: "07",
    when: "Sunday, November 29, 2026",
    title: "Hackathon Submission Deadline",
    points: ["All hackathon projects must be submitted by this date."],
  },
  {
    n: "08",
    when: "Tuesday, December 1, 2026",
    title: "Final Presentations, Judging & Closing with Dr. Mohammad Shehab",
    points: [
      "Top projects will present in person.",
      "All attendees will receive their certificates.",
      "The final winners will be announced.",
    ],
  },
];
