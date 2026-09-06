/**
 * The 2026 theme spine: ten years of quantum on the cloud.
 * `qubits` drives the density of the 3D heavy-hex lattice at each
 * scroll waypoint, so the geometry itself tells the story.
 */
export type DecadeMilestone = {
  year: number;
  title: string;
  body: string;
  qubits: number;
};

export const decade: DecadeMilestone[] = [
  {
    year: 2016,
    title: "Quantum goes public",
    body: "IBM puts a 5-qubit processor on the cloud — the first quantum computer anyone could run a circuit on, from anywhere.",
    qubits: 5,
  },
  {
    year: 2017,
    title: "The toolkit arrives",
    body: "Qiskit is released as an open-source SDK, giving the community a shared language for building quantum circuits.",
    qubits: 16,
  },
  {
    year: 2019,
    title: "Out of the lab",
    body: "Integrated quantum systems move beyond research facilities and into commercial availability.",
    qubits: 27,
  },
  {
    year: 2021,
    title: "Breaking 100",
    body: "Processors cross the hundred-qubit threshold, pushing past what classical machines can brute-force simulate.",
    qubits: 127,
  },
  {
    year: 2023,
    title: "Utility, not just scale",
    body: "Error mitigation turns noisy hardware into a useful scientific instrument — quantum utility before fault tolerance.",
    qubits: 433,
  },
  {
    year: 2026,
    title: "Your turn",
    body: "A decade in, 100+ qubit workloads are routine research tools — and the next decade belongs to the students in this room.",
    qubits: 1121,
  },
];
