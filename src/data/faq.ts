export type FaqItem = { q: string; a: string };

export const faq: FaqItem[] = [
  {
    q: "Do I need a physics or quantum background?",
    a: "No. Day one starts from first principles and assumes nothing beyond curiosity and a laptop. Plenty of participants write their first quantum circuit at this event.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Basic Python helps a lot, especially for the labs and hackathon. If you can write a for-loop and install a package, you will keep up. We publish a short prep guide before the event.",
  },
  {
    q: "What do I need to bring?",
    a: "A laptop, a charger, and a free IBM Quantum account. We will send setup instructions — Qiskit installed ahead of time saves you the first twenty minutes of every lab.",
  },
  {
    q: "Is it free?",
    a: "Yes. Qiskit Fall Fest events are free to attend.",
  },
  {
    q: "Who can attend?",
    a: "GUC students first, with places for students from other universities and quantum-curious researchers. Details on the registration form.",
  },
  {
    q: "Do I get a certificate?",
    a: "Participants receive an IBM Quantum certificate for taking part in Qiskit Fall Fest.",
  },
  {
    q: "Do I need a team for the hackathon?",
    a: "No — you can register solo and we will help you find teammates at the team-forming session before the prompt drops.",
  },
  {
    q: "What can I use to build my project?",
    a: "Your project must be built with Qiskit and IBM Quantum tools. Other open-source libraries and APIs are allowed as long as you credit them properly, and all development has to happen during the hackathon window.",
  },
];
