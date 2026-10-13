export type Step = {
  n: string;
  /** Weekday and dd/mm, as the programme is published locally. */
  when: string;
  title: string;
  body: string;
};

/**
 * The Symposium Timeline — one linear programme, Sunday 8 to Tuesday
 * 17 November 2026. Anything in [square brackets] is a placeholder and is
 * rendered in monospace so it reads as pending rather than as copy.
 */
export const steps: Step[] = [
  {
    n: "01",
    when: "Sunday 8/11",
    title: "Opening",
    body: "The event kicks off with the opening session and your first welcome to the program, as well as the hackathon theme announcement.",
  },
  {
    n: "02",
    when: "Monday 9/11",
    title: "Session 1",
    body: "Core workshop content and beginner-friendly hands-on learning for the first technical session.",
  },
  {
    n: "03",
    when: "Wednesday 11/11",
    title: "Session 2",
    body: "The second session continues the technical track and introduces deeper hands-on sessions (bring your laptop).",
  },
  {
    n: "04",
    when: "Thursday 12/11",
    title: "Session 3 & Guest Speaker",
    body: "A featured guest talk [Speaker TBA] alongside the third main technical session of the event (bring your laptop).",
  },
  {
    n: "05",
    when: "Saturday 14/11",
    title: "Featured Guest Speaker",
    body: "An additional guest session [Speaker TBA] is scheduled mid-week to expand the program and share industry insights.",
  },
  {
    n: "06",
    when: "Sunday 15/11",
    title: "Technical Session & Guest Speaker",
    body: "The program continues with another focused technical session and an additional guest appearance [Speaker TBA].",
  },
  {
    n: "07",
    when: "Tuesday 17/11",
    title: "Presentations & Closing",
    body: "Final capstone project presentations, official IBM certification awards, and the close of the event.",
  },
];
