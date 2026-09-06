import Link from "next/link";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

const rules = [
  "Built with Qiskit and IBM Quantum tools",
  "Open-source libraries allowed, credited properly",
  "All development during the hackathon window",
  "No plagiarism or undisclosed pre-built code",
];

/**
 * Tone flips to dark here — this is the deep end of the scroll, and the
 * lattice behind the page crosses over to its signal palette at the same
 * point.
 */
export default function HackathonTeaser() {
  return (
    <Section
      id="hackathon"
      tone="dark"
      transparent
      className="overflow-hidden py-24 md:py-36"
    >
      {/* Scrim: keeps copy legible while letting the lattice glow through. */}
      <div
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgb(8 7 13 / 0.97) 0%, rgb(8 7 13 / 0.80) 40%, rgb(8 7 13 / 0.93) 100%)",
        }}
      />
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">The hackathon</p>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-4 text-balance text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-7xl">
                Build it.
                <br />
                Then defend it.
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p
                className="mt-7 max-w-lg text-pretty text-lg leading-relaxed"
                style={{ color: "var(--ink-muted)" }}
              >
                The prompt drops at the end of day two. You get one working session
                to turn it into something real, then you present it to a judging
                panel. Top teams take prizes — everyone who takes part gets an IBM
                Quantum certificate.
              </p>
            </Reveal>
            <Reveal i={3}>
              <Link
                href="/hackathon"
                className="mt-10 inline-block rounded-full px-7 py-3.5 text-[15px] font-medium transition-transform hover:scale-[1.03]"
                style={{ background: "var(--color-signal)", color: "#05040a" }}
              >
                Rules, tracks &amp; judging
              </Link>
            </Reveal>
          </div>

          <Reveal i={2}>
            <div
              className="rounded-2xl p-8"
              style={{ border: "1px solid var(--line)", background: "var(--surface-raised)" }}
            >
              <p className="eyebrow">Non-negotiables</p>
              <ul className="mt-6 space-y-4">
                {rules.map((r) => (
                  <li key={r} className="flex gap-3.5 text-sm leading-relaxed">
                    <span
                      className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--color-signal)" }}
                    />
                    <span style={{ color: "var(--ink-muted)" }}>{r}</span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-8 border-t pt-6 text-xs leading-relaxed"
                style={{ borderColor: "var(--line)", color: "var(--ink-faint)" }}
              >
                These follow the Qiskit Fall Fest programme rules. Full detail,
                including judging criteria and the submission process, on the
                hackathon page.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
