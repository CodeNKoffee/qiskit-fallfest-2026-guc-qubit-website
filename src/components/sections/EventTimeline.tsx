import { phases } from "@/data/timeline";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const dot = {
  done: "var(--color-quantum)",
  live: "var(--color-qiskit)",
  upcoming: "var(--line-strong)",
} as const;

/**
 * Event roadmap: the run-up and the run-of-show as one rail. Distinct from
 * the day-by-day agenda below it — this answers "where are we now", not
 * "what time is the lab".
 *
 * The rail fills up to the last phase that is not `upcoming`, so flipping a
 * status in `data/timeline.ts` is the only edit needed as the event moves.
 */
export default function EventTimeline() {
  const lastActive = phases.reduce(
    (acc, p, i) => (p.status !== "upcoming" ? i : acc),
    0
  );
  const fill = phases.length > 1 ? (lastActive / (phases.length - 1)) * 100 : 0;

  return (
    <Section id="timeline" tone="light" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Timeline"
          title="How it unfolds."
          lede="From announcement to certificates. Dates land here as each phase is confirmed."
        />
      </div>

      {/* Full-bleed rail so it can scroll past the shell edge on narrow screens.
          Revealed as a single unit: items further along the rail sit outside
          the viewport horizontally and would never trip a per-item observer. */}
      <Reveal>
        <div className="scroll-x pb-4">
          <ol className="flex min-w-max gap-0 px-6 lg:px-12">
          {phases.map((p, i) => {
            const isLast = i === phases.length - 1;
            return (
              <li
                key={p.id}
                style={{
                  animation: "qff-rail-in .6s var(--ease-out-quant) both",
                  animationDelay: `${Math.min(i, 6) * 70}ms`,
                }}
              >
                <div className="relative w-[16.5rem] pr-8 md:w-[19rem] md:pr-10">
                  {/* Connector track */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[7px] block h-px w-full"
                      style={{ background: "var(--line)" }}
                    />
                  )}
                  {/* Filled portion of the connector, up to the live phase */}
                  {!isLast && i < lastActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[7px] block h-px w-full"
                      style={{ background: "var(--color-quantum)" }}
                    />
                  )}

                  <span
                    className="relative block h-[15px] w-[15px] rounded-full"
                    style={{
                      background: dot[p.status],
                      boxShadow:
                        p.status === "live"
                          ? "0 0 0 6px rgb(105 41 196 / 0.14)"
                          : "none",
                    }}
                  />

                  <div className="mt-6">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="font-mono text-xs tracking-[0.14em]"
                        style={{ color: "var(--ink-faint)" }}
                      >
                        {p.label}
                      </span>
                      {p.status === "live" && (
                        <span
                          className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]"
                          style={{
                            color: "var(--color-qiskit)",
                            border: "1px solid var(--color-qiskit)",
                          }}
                        >
                          Now
                        </span>
                      )}
                    </div>

                    <p
                      className="mt-2 font-mono text-sm"
                      style={{ color: "var(--color-quantum)" }}
                    >
                      {p.when}
                    </p>

                    <h3 className="mt-2 text-xl font-medium tracking-[-0.02em]">
                      {p.title}
                    </h3>
                    <p
                      className="mt-2 text-pretty text-sm leading-relaxed"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
          </ol>
        </div>
      </Reveal>

      <div className="shell">
        <p className="mt-6 text-sm" style={{ color: "var(--ink-faint)" }}>
          Scroll the rail sideways to see the full run-up.
        </p>
      </div>
    </Section>
  );
}
