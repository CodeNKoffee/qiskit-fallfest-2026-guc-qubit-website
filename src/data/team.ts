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
  { name: "Islam Salem", role: "Co-organizer", confirmed: true },
  { name: "Abu-bakr", role: "Co-organizer", confirmed: true },
  { name: "Mohamed Walid", role: "Co-organizer", confirmed: true },
];
