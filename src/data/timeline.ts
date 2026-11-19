export type Step = {
  n: string;
  /** Left as "To be announced soon" until the programme is confirmed. */
  when: string;
  title: string;
  /** Short lines under the title, one per point. */
  points: string[];
  /** Renders the Previous Winners panel under this step. */
  winners?: boolean;
};

const TBA = "To be announced soon";

/** The Symposium Timeline: one linear programme, dates and times still TBA. */
export const steps: Step[] = [
  {
    n: "01",
    when: TBA,
    title: "Opening Session with Dr. Ahmed Maarouf",
    points: ["Welcome to the program.", "Hackathon theme announcement."],
    winners: true,
  },
  {
    n: "02",
    when: TBA,
    title: "Session 1",
    points: ["Core workshop content and beginner-friendly hands-on learning for the first technical session."],
  },
  {
    n: "03",
    when: TBA,
    title: "Session 2",
    points: ["The second session continues the technical track and introduces deeper hands-on sessions (bring your laptop)."],
  },
  {
    n: "04",
    when: TBA,
    title: "Session 3: Quantum Key Distribution (QKD)",
    points: [
      "The third technical session of the event, on QKD (bring your laptop).",
      "Hackathon submissions are due Saturday at 11:59 PM.",
    ],
  },
  {
    n: "05",
    when: TBA,
    title: "Presentations & Judgment with Dr. Mohammad Shehab",
    points: [
      "Top projects will present in person.",
      "All attendees will receive their certificates.",
      "The final winners will be announced.",
    ],
  },
];
