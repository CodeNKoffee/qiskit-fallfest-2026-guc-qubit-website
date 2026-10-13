export type Member = {
  name: string;
  role: string;
  /** Marks a confirmed member so open slots read as pending, not as people. */
  confirmed?: boolean;
};

export const team: Member[] = [
  { name: "Hatem Soliman", role: "Lead organizer", confirmed: true },
  { name: "Islam Salem", role: "Co-organizer", confirmed: true },
  { name: "Youssef Adel", role: "Co-organizer", confirmed: true },
  { name: "Abu-bakr", role: "Co-organizer", confirmed: true },
  { name: "Mohamed Walid", role: "Co-organizer", confirmed: true },
  { name: "[Committee in process of being finalized]", role: "TBD" },
];
