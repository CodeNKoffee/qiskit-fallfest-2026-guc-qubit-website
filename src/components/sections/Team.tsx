import { team } from "@/data/team";
import { event } from "@/data/event";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Team() {
  return (
    <Section id="team" tone="dark" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Organising committee"
          title="2026 Executive Committee"
          lede={`Qiskit Fall Fest events are organised by students on their own campus. This edition is run by ${event.hostLong} at the ${event.university}.`}
        />

        <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid var(--line)" }}>
        <ul className="-mb-px -mr-px grid sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal as="li" key={`${m.role}-${i}`} i={i % 3}>
              <div
                className="h-full p-7"
                style={{
                  background: "var(--surface)",
                  borderRight: "1px solid var(--line)",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <p
                  className="font-mono text-xs tracking-[0.14em]"
                  style={{ color: m.confirmed ? "var(--color-signal)" : "var(--ink-faint)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className={`mt-5 font-medium tracking-[-0.02em] ${m.confirmed ? "text-xl" : "text-base leading-snug"}`}
                  style={{ color: m.confirmed ? "var(--ink)" : "var(--ink-faint)" }}
                >
                  {m.name}
                </h3>
                <p className="mt-1 font-mono text-xs tracking-[0.04em]" style={{ color: "var(--ink-muted)" }}>
                  {m.role}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
        </div>
      </div>
    </Section>
  );
}
