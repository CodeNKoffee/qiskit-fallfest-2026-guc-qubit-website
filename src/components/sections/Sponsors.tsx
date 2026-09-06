import { sponsorTiers } from "@/data/sponsors";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Sponsors() {
  return (
    <Section id="sponsors" tone="dark" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Partners"
          title="Who makes it possible."
          lede="Qiskit Fall Fest runs globally with the support of IBM Quantum. Locally, it runs on our university and our partners."
        />

        <div className="space-y-14">
          {sponsorTiers.map((tier, ti) => (
            <Reveal key={tier.tier} i={ti}>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="eyebrow">{tier.tier}</h3>
                  {tier.note && (
                    <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
                      {tier.note}
                    </p>
                  )}
                </div>

                <div
                  className="mt-5 overflow-hidden rounded-2xl"
                  style={{ border: "1px solid var(--line)" }}
                >
                <ul className="-mb-px -mr-px grid sm:grid-cols-2 lg:grid-cols-3">
                  {tier.sponsors.map((s, i) => (
                    <li key={`${s.name}-${i}`}>
                      <div
                        className="flex h-28 items-center justify-center p-6 text-center"
                        style={{
                          background: "var(--surface)",
                          borderRight: "1px solid var(--line)",
                          borderBottom: "1px solid var(--line)",
                        }}
                      >
                        {s.href ? (
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-lg font-medium tracking-tight"
                          >
                            {s.name}
                          </a>
                        ) : (
                          <span
                            className="text-lg font-medium tracking-tight"
                            style={{ color: s.name === "TBA" ? "var(--ink-faint)" : "var(--ink)" }}
                          >
                            {s.name}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 text-sm" style={{ color: "var(--ink-muted)" }}>
            Interested in supporting the event?{" "}
            <a href="#register" style={{ color: "var(--color-signal)" }}>
              Get in touch
            </a>
            .
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
