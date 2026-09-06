export type SponsorTier = {
  tier: string;
  note: string;
  sponsors: { name: string; href?: string }[];
};

export const sponsorTiers: SponsorTier[] = [
  { tier: "Programme partner", note: "Qiskit Fall Fest is supported globally by IBM Quantum.", sponsors: [{ name: "IBM Quantum", href: "https://www.ibm.com/quantum" }] },
  { tier: "Host", note: "", sponsors: [{ name: "German University in Cairo" }, { name: "Qubit — Quantum Computing Club" }] },
  { tier: "Partners", note: "Sponsorship slots open.", sponsors: [{ name: "TBA" }, { name: "TBA" }, { name: "TBA" }] },
];
