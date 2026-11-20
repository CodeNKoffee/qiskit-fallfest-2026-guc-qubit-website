import { steps } from "@/data/timeline";
import { previousWinners } from "@/data/winners";
import { event } from "@/data/event";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Art from "../ui/Art";

/** The Previous Winners display shown inside the Opening Session. */
function PreviousWinners() {
  return (
    <div
      className="mt-6 rounded-2xl p-5 md:p-6"
      style={{ border: "1px solid var(--line-strong)", background: "rgb(255 255 255 / 0.55)" }}
    >
      <p className="eyebrow">Previous Winners</p>
      {previousWinners.length === 0 ? (
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          Winning teams and projects from previous editions will be showcased here soon.
        </p>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {previousWinners.map((w) => (
            <li
              key={`${w.place}-${w.team}`}
              className="rounded-xl p-4"
              style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
            >
              <p className="font-mono text-xs" style={{ color: "var(--color-qiskit-ink)" }}>
                {w.place}
                {w.edition ? ` · ${w.edition}` : ""}
              </p>
              <p className="mt-1.5 font-medium">{w.team}</p>
              <p className="mt-0.5 text-sm" style={{ color: "var(--ink-muted)" }}>
                {w.project}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * The Symposium Timeline: one linear programme. Dates and times are held
 * Dates and times come from data/timeline.ts.
 */
export default function EventTimeline() {
  return (
    <Section id="timeline" tone="light" className="overflow-hidden py-24 md:py-32">
      <Art
        src="/art/birds-left.webp"
        edge="left"
        className="right-0 top-16 hidden h-[52rem] max-h-[92%] w-auto -scale-x-100 object-cover lg:block"
        opacity={0.8}
      />

      <div className="shell relative">
        <SectionHeading
          eyebrow="Symposium Timeline"
          title="The programme, step by step."
          lede={`${event.dates}. Bring a laptop to every session.`}
        />

        <ol className="relative max-w-3xl">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} i={Math.min(i, 3)}>
              <div
                className={`relative pl-9 md:pl-12 ${i === steps.length - 1 ? "pb-0" : "pb-12"}`}
                style={{ borderLeft: "1px solid var(--line-strong)" }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[6.5px] top-1.5 block h-3 w-3 rounded-full"
                  style={{
                    background: "var(--color-quantum)",
                    boxShadow: "0 0 0 5px rgb(15 98 254 / 0.13)",
                  }}
                />
                <h3 className="text-xl font-medium leading-snug tracking-[-0.015em] md:text-2xl">
                  <span className="font-mono text-base" style={{ color: "var(--color-qiskit-ink)" }}>
                    {s.n}
                  </span>
                  <span className="mx-2.5" style={{ color: "var(--ink-faint)" }} aria-hidden="true">
                    |
                  </span>
                  {s.title}
                </h3>
                <p className="mt-2 font-mono text-sm" style={{ color: "var(--color-quantum-ink)" }}>
                  {s.when}
                </p>
                <ul className="mt-3 max-w-2xl space-y-1.5" style={{ color: "var(--ink-muted)" }}>
                  {s.points.map((pt) => (
                    <li key={pt} className="text-pretty leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>
                {s.winners && <PreviousWinners />}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
