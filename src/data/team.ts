export type Member = {
  name: string;
  role: string;
  /** Marks a confirmed member so open slots read as pending, not as people. */
  confirmed?: boolean;
};

/**
 * Functional titles only — no "Organizer" / "Co-Organizer", which collide
 * with IBM's own naming for the Fall Fest host programme.
 */
export const team: Member[] = [
  { name: "Islam Salem", role: "President, QubitGUC", confirmed: true },
  { name: "Hatem Soliman", role: "GUC Operations Liaison", confirmed: true },
  { name: "Youssef Adel", role: "Committee Member", confirmed: true },
  { name: "Abu-bakr", role: "Committee Member", confirmed: true },
  { name: "Mohamed Walid", role: "Committee Member", confirmed: true },
  { name: "[Committee in process of being finalized]", role: "TBD" },
];
