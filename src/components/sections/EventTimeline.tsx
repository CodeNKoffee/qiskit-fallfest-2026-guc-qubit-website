import { steps } from "@/data/timeline";
import { event } from "@/data/event";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Art from "../ui/Art";

/** Wrap [bracketed placeholders] in monospace so they read as pending. */
function withPlaceholders(text: string) {
  return text.split(/(\[[^\]]+\])/).map((part, i) =>
    part.startsWith("[") ? (
      <span
        key={i}
        className="rounded px-1.5 py-0.5 font-mono text-[0.85em]"
        style={{ background: "rgb(201 164 92 / 0.18)", color: "var(--ink)" }}
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}

/**
 * The Symposium Timeline: one linear programme. Replaces the earlier
 * roadmap-plus-day-schedule pair, which described the same event twice.
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
          title="Seven sessions, one programme."
          lede={`${event.dates}. Bring a laptop to every technical session.`}
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
                  <span className="font-mono text-base md:text-lg" style={{ color: "var(--color-quantum-ink)" }}>
                    {s.when}
                  </span>
                  <span>: {s.title}</span>
                </h3>
                <p
                  className="mt-3 max-w-2xl text-pretty leading-relaxed"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {withPlaceholders(s.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
