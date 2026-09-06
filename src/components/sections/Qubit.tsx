import { event } from "@/data/event";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

/**
 * The host club. Deliberately sits between the global framing (About) and
 * the practical detail — readers should know who is actually running this
 * before they read a schedule.
 */
export default function Qubit() {
  return (
    <Section id="qubit" tone="light" className="py-24 md:py-32">
      <div className="shell">
        <div
          className="overflow-hidden rounded-3xl p-8 md:p-16"
          style={{
            border: "1px solid var(--line)",
            background:
              "linear-gradient(135deg, rgb(5 48 173 / 0.05), rgb(105 41 196 / 0.07))",
          }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow">The host</p>
              </Reveal>
              <Reveal i={1}>
                <h2 className="mt-4 text-balance text-5xl font-medium leading-[0.95] tracking-[-0.035em] md:text-7xl">
                  {event.host}
                </h2>
              </Reveal>
              <Reveal i={2}>
                <p className="mt-4 font-mono text-sm" style={{ color: "var(--color-qiskit)" }}>
                  {event.university}
                </p>
              </Reveal>
            </div>

            <div className="space-y-6">
              <Reveal i={2}>
                <p className="text-pretty text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {event.hostLong} is the student community at {event.universityShort} for
                  people who want to actually build with quantum computing rather than
                  just read about it — study sessions, hands-on labs, and now a Qiskit
                  Fall Fest of our own.
                </p>
              </Reveal>
              <Reveal i={3}>
                <p className="text-pretty leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  We are one of the host organisations selected to run an official Fall
                  Fest event this year, joining campuses across the world marking a
                  decade of quantum on the cloud.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
