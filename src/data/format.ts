export type Track = {
  id: string;
  label: string;
  title: string;
  body: string;
  meta: string;
};

export const tracks: Track[] = [
  {
    id: "workshops",
    label: "01",
    title: "Workshops",
    body: "From first principles. Qubits, superposition, entanglement and your first circuit — no physics background assumed, just a laptop.",
    meta: "Beginner · Hands-on",
  },
  {
    id: "talks",
    label: "02",
    title: "Talks",
    body: "Researchers and IBM Quantum voices on where the field actually is — and the ten years of experiments that got it here.",
    meta: "All levels",
  },
  {
    id: "labs",
    label: "03",
    title: "Labs",
    body: "Run real circuits on real IBM Quantum hardware and simulators. Optimization, error correction, and what noise does to your results.",
    meta: "Intermediate · Real hardware",
  },
  {
    id: "hackathon",
    label: "04",
    title: "Hackathon",
    body: "Build something with Qiskit against the prompt, then defend it in front of a judging panel. Prizes and IBM Quantum certificates.",
    meta: "Teams · Judged",
  },
];
