export type Member = {
  name: string;
  role: string;
  /** Marks the confirmed core so placeholders read as pending, not fake. */
  confirmed?: boolean;
};

/** Fall Fest is student-led by design — this section is the point, not filler. */
export const team: Member[] = [
  { name: "Hatem Soliman", role: "Lead organizer", confirmed: true },
  { name: "Youssef Adel", role: "Co-organizer", confirmed: true },
  { name: "TBA", role: "Workshops & labs" },
  { name: "TBA", role: "Hackathon" },
  { name: "TBA", role: "Partnerships & outreach" },
];
