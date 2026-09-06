import { tracks } from "@/data/format";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Format() {
  return (
    <Section id="format" tone="light" className="py-24 md:py-32" >
      <div className="shell">
        <SectionHeading
          eyebrow="The format"
          title="Four ways in."
          lede="Come for one track or all of them. Everything is free, and everything runs on campus."
        />

        <ul className="grid gap-px overflow-hidden rounded-2xl md:grid-cols-2"
            style={{ background: "var(--line)" }}>
          {tracks.map((t, i) => (
            <Reveal as="li" key={t.id} i={i}>
              <article
                className="group relative h-full p-8 transition-colors md:p-10"
                style={{ background: "var(--surface)" }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.16em]" style={{ color: "var(--color-qiskit)" }}>
                    {t.label}
                  </span>
                  <span className="eyebrow">{t.meta}</span>
                </div>
                <h3 className="mt-6 text-3xl font-medium tracking-[-0.025em] md:text-4xl">
                  {t.title}
                </h3>
                <p className="mt-4 max-w-md text-pretty leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {t.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
