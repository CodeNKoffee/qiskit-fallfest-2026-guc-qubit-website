import type { Metadata } from "next";
import { event } from "@/data/event";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Code of conduct",
  description:
    "The code of conduct for Qiskit Fall Fest 2026 at the German University in Cairo. It applies to every attendee, speaker, mentor and organiser.",
};

const sections = [
  {
    t: "Who this applies to",
    b: "Everyone. Attendees, speakers, mentors, judges, sponsors and organisers, across every session, the hackathon, social events, and any online space we run for this event.",
  },
  {
    t: "What we expect",
    b: "Treat people as colleagues. Assume good faith, be patient with beginners, and remember that most people here are learning something genuinely hard for the first time. Ask before you touch someone's laptop or work.",
  },
  {
    t: "What is not acceptable",
    b: "Harassment in any form — including comments about gender, gender identity, sexual orientation, disability, physical appearance, body size, race, religion or nationality. Sexual imagery or attention, deliberate intimidation, stalking, unwanted photography or recording, sustained disruption of sessions, and any threat of these.",
  },
  {
    t: "Academic honesty",
    b: "Hackathon submissions must be your own work, built during the event, with anything borrowed clearly credited. Passing off other people's work as yours is a code of conduct matter, not just a scoring one.",
  },
  {
    t: "If something happens",
    b: `Tell an organiser — in person at the venue, or by email. Reports are taken seriously and handled discreetly. Organisers are identifiable at the venue and reachable at ${event.contactEmail}.`,
  },
  {
    t: "Consequences",
    b: "Organisers may take any action they judge appropriate, from a warning to removal from the event without refund or recognition, and where relevant may involve university authorities.",
  },
];

export default function CodeOfConductPage() {
  return (
    <>
      <Section tone="light" className="pt-40 pb-16 md:pt-48">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Required reading</p>
          </Reveal>
          <Reveal i={1}>
            <h1 className="mt-5 max-w-3xl text-balance text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Code of conduct
            </h1>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              This event is for people who are learning. That only works if everyone
              here can do it without being made to feel unwelcome.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="light" className="pb-28 md:pb-36">
        <div className="shell max-w-3xl">
          {sections.map((s, i) => (
            <Reveal key={s.t} i={Math.min(i, 4)}>
              <section className="py-8" style={{ borderTop: "1px solid var(--line)" }}>
                <h2 className="text-2xl font-medium tracking-[-0.02em]">{s.t}</h2>
                <p className="mt-3 text-pretty leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {s.b}
                </p>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <p className="mt-10 text-xs leading-relaxed" style={{ color: "var(--ink-faint)" }}>
              This code of conduct is a placeholder drafted for the site and should be
              reviewed against the official Qiskit Fall Fest and {event.university}{" "}
              policies before the event is announced publicly.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
