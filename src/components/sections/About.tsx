import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Art from "../ui/Art";

export default function About() {
  return (
    <Section id="about" tone="light" className="overflow-hidden py-24 md:py-32">
      <Art
        src="/art/birds-right.webp"
        edge="right"
        className="right-0 top-0 hidden h-full w-auto max-w-[46%] object-cover object-left md:block"
      />

      <div className="shell relative">
        <SectionHeading
          eyebrow="About the event"
          title="Empowering Egypt's Quantum Community"
        />

        <div className="grid gap-8 md:max-w-4xl md:grid-cols-2 md:gap-14">
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              Qiskit Fall Fest is a global series of quantum computing events supported by
              IBM Quantum. Here in Egypt, the German University in Cairo (GUC) is proud to
              be one of two exclusive host campuses for 2026, opening its doors to
              innovators from all universities.
            </p>
          </Reveal>
          <Reveal i={1}>
            <p className="text-pretty text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              No prior quantum background is required. This educational fest is built from
              the ground up for beginners. We will start with the foundational mechanics,
              write your first Qiskit code, and work up to building a project in a
              hackathon, then presenting it.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
