export type Speaker = {
  name: string;
  role: string;
  org: string;
  bio: string;
  topic?: string;
};

/** Placeholder roster — replace with confirmed speakers. */
export const speakers: Speaker[] = [
  { name: "TBA", role: "Keynote speaker", org: "IBM Quantum", bio: "Speaker announcement coming soon.", topic: "A decade of quantum on the cloud" },
  { name: "TBA", role: "Researcher", org: "German University in Cairo", bio: "Speaker announcement coming soon.", topic: "Quantum algorithms" },
  { name: "TBA", role: "IBM Quantum Ambassador", org: "IBM Quantum", bio: "Speaker announcement coming soon.", topic: "Building with Qiskit" },
  { name: "TBA", role: "Workshop lead", org: "Qubit @ GUC", bio: "Speaker announcement coming soon.", topic: "Your first circuit" },
];
