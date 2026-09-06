import { event, globalStats } from "@/data/event";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <Section id="about" tone="light" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="What this is"
          title={<>The world&rsquo;s largest student-run quantum event, on our campus.</>}
          lede="Qiskit Fall Fest is a global series of quantum computing events — workshops, talks and hackathons run by students, for students, with support from IBM Quantum. This is our edition of it."
        />

        <dl className="grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4"
            style={{ background: "var(--line)" }}>
          {globalStats.map((s, i) => (
            <Reveal key={s.label} i={i} className="p-7" as="div">
              <div style={{ background: "var(--surface)" }} className="h-full">
                <dt
                  className="font-mono text-4xl font-medium tabular-nums tracking-tight md:text-5xl"
                  style={{ color: "var(--color-quantum)" }}
                >
                  {s.value}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {s.label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h3 className="text-2xl font-medium tracking-[-0.02em]">Why {event.universityShort}, why now</h3>
            <p className="mt-4 text-pretty leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              Quantum computing stopped being a spectator sport the moment anyone
              could run a circuit from a browser. A decade on, the barrier is no
              longer access to hardware — it&rsquo;s knowing where to start. That is
              exactly what this event is for.
            </p>
          </Reveal>
          <Reveal i={1}>
            <h3 className="text-2xl font-medium tracking-[-0.02em]">No background required</h3>
            <p className="mt-4 text-pretty leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              Day one assumes nothing. You will write your first quantum circuit
              before lunch, run it on real IBM hardware by day two, and defend a
              project of your own by day three. Bring a laptop and some curiosity.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
