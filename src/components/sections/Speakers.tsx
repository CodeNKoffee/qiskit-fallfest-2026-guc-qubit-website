import { speakers } from "@/data/speakers";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Speakers() {
  return (
    <Section id="speakers" tone="light" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Speakers"
          title="Who you'll hear from."
          lede="Researchers, IBM Quantum voices, and the people who run the labs. Roster announced as speakers confirm."
        />

        <ul className="grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4"
            style={{ background: "var(--line)" }}>
          {speakers.map((s, i) => (
            <Reveal as="li" key={`${s.name}-${i}`} i={i}>
              <article className="flex h-full flex-col p-7" style={{ background: "var(--surface)" }}>
                {/* Placeholder portrait: lattice motif, not a grey box */}
                <div
                  className="mb-6 flex aspect-[4/5] items-center justify-center rounded-xl"
                  style={{
                    background:
                      "linear-gradient(150deg, rgb(5 48 173 / 0.07), rgb(105 41 196 / 0.10))",
                    border: "1px solid var(--line)",
                  }}
                >
                  <span className="font-mono text-3xl" style={{ color: "rgb(5 48 173 / 0.35)" }}>
                    |ψ⟩
                  </span>
                </div>

                <h3 className="text-xl font-medium tracking-[-0.02em]">{s.name}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}>
                  {s.role}
                </p>
                <p className="font-mono text-xs" style={{ color: "var(--ink-faint)" }}>
                  {s.org}
                </p>
                {s.topic && (
                  <p
                    className="mt-5 border-t pt-4 text-sm leading-relaxed"
                    style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
                  >
                    {s.topic}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
