import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Prep & resources",
  description:
    "What to install and what to read before Qiskit Fall Fest 2026 at the German University in Cairo.",
};

const steps = [
  {
    t: "Make an IBM Quantum account",
    d: "Free, takes two minutes, and it is what lets you send circuits to real hardware during the labs. Do this before you arrive.",
    href: "https://quantum.ibm.com/",
    cta: "quantum.ibm.com",
  },
  {
    t: "Install Python and Qiskit",
    d: "Python 3.9 or newer, then `pip install qiskit qiskit-ibm-runtime`. If you would rather not install anything, the browser-based notebooks work too.",
    href: "https://www.ibm.com/quantum/qiskit",
    cta: "Qiskit",
  },
  {
    t: "Brush up on Python",
    d: "You do not need to be fluent. If you are comfortable with lists, loops and importing a package, you will keep up in every session.",
  },
  {
    t: "Skim the basics (optional)",
    d: "If you want a head start, read up on what a qubit is and what superposition and entanglement actually mean. We cover all of it from scratch on day one regardless.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Section tone="light" className="pt-40 pb-20 md:pt-48">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Before you come</p>
          </Reveal>
          <Reveal i={1}>
            <h1 className="mt-5 max-w-3xl text-balance text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Twenty minutes of prep saves you an hour on the day.
            </h1>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              None of this is mandatory. All of it means you spend the labs building
              instead of watching a progress bar.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="light" className="pb-28 md:pb-36">
        <div className="shell max-w-3xl">
          <ol>
            {steps.map((s, i) => (
              <Reveal as="li" key={s.t} i={Math.min(i, 4)}>
                <div className="py-8" style={{ borderTop: "1px solid var(--line)" }}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm" style={{ color: "var(--color-qiskit)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-medium tracking-[-0.02em]">{s.t}</h2>
                  </div>
                  <p className="mt-3 text-pretty leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                    {s.d}
                  </p>
                  {s.href && (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-block font-mono text-sm"
                      style={{ color: "var(--color-quantum)" }}
                    >
                      {s.cta} &rarr;
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <div
              className="mt-12 rounded-2xl p-7"
              style={{ border: "1px solid var(--line)", background: "var(--surface-sunken)" }}
            >
              <p className="eyebrow">On the day</p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                Bring a laptop and a charger. Power and Wi-Fi are provided. Notebooks
                and slides are published here after each session.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
