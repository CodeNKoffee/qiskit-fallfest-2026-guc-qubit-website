export type Member = {
  name: string;
  /** Event-specific title. */
  role: string;
  /** Club role, shown on a second line where it differs from the event role. */
  club?: string;
  confirmed?: boolean;
};

/**
 * Event roles are used where they exist. The Qiskit Fall Fest roles
 * (Lead Organizer, Co-Organizer) are Qubit members' roles for this event
 * and sit alongside their club positions.
 */
export const team: Member[] = [
  { name: "Hatem Soliman", role: "Lead Organizer, Qiskit Fall Fest 2026", club: "Vice President, QubitGUC", confirmed: true },
  { name: "Islam Salem", role: "Co-Organizer, Qiskit Fall Fest 2026", club: "President, QubitGUC", confirmed: true },
  { name: "Dana Ashraf", role: "Director of Human Resources", confirmed: true },
  { name: "Fatma Bassuni", role: "Director of Public Relations", confirmed: true },
  { name: "Ali Hafez", role: "Director of Technology", confirmed: true },
  { name: "Raghad", role: "Director of Media", confirmed: true },
  { name: "Youssef Adel", role: "Co-organizer", confirmed: true },
  { name: "Abu-bakr", role: "Co-organizer", confirmed: true },
  { name: "Mohamed Walid", role: "Co-organizer", confirmed: true },
];
