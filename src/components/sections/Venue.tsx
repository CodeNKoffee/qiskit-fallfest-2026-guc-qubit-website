import { venue, mapEmbedSrc, directionsUrl, largerMapUrl } from "@/data/venue";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import InstitutionMark from "../ui/InstitutionMark";

export default function Venue() {
  return (
    <Section id="venue" tone="light" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading eyebrow="Getting there" title="Venue & Access (GUC Gate 3)" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <Reveal>
              <InstitutionMark height={46} />
            </Reveal>

            <Reveal i={1}>
              <p className="mt-8 text-pretty text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                Many of the Fall Fest sessions are hosted on-campus at the German University
                in Cairo. Logistic assistance is provided to help external applicants
                commute comfortably.{" "}
                <strong style={{ color: "var(--ink)" }}>
                  All attendees (GUC and external) must enter through {venue.gate}.
                </strong>
              </p>
            </Reveal>

            <Reveal i={2}>
              <address className="mt-7 not-italic leading-relaxed">
                <span className="block font-medium">{venue.name}</span>
                <span className="block" style={{ color: "var(--ink-muted)" }}>
                  {venue.street}
                </span>
                <span className="block" style={{ color: "var(--ink-muted)" }}>
                  {venue.city}, {venue.country}
                </span>
              </address>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center rounded-full px-6 w-full justify-center text-center sm:w-auto text-sm font-medium transition-transform hover:scale-[1.03]"
                  style={{ background: "var(--color-quantum)", color: "#fff" }}
                >
                  Get directions
                </a>
                <a
                  href={largerMapUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center rounded-full px-6 w-full justify-center text-center sm:w-auto text-sm font-medium"
                  style={{ border: "1px solid var(--line-strong)", color: "var(--ink)" }}
                >
                  Open larger map
                </a>
              </div>
            </Reveal>

            <Reveal i={1}>
              <h3 className="mt-14 text-2xl font-medium tracking-[-0.02em]">
                Public Transit (Mowasalat) Guidelines
              </h3>
              <p className="mt-3 text-pretty leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                For attendees utilizing public transportation, follow these official routes
                to reach the campus:
              </p>
              <ul className="mt-5 space-y-3">
                {venue.mowasalatLines.map((line) => (
                  <li
                    key={line}
                    className="rounded-xl px-4 py-3.5 font-mono text-[13px] leading-relaxed"
                    style={{ border: "1px dashed var(--line-strong)", color: "var(--ink-muted)" }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal i={1}>
              <div
                role="note"
                className="mt-8 flex gap-4 rounded-2xl p-5 md:p-6"
                style={{
                  border: "1px solid var(--color-sand)",
                  background: "rgb(201 164 92 / 0.13)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                  <path d="M11 2.5l9 16H2l9-16z" stroke="#8f6b1c" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M11 9v4.2M11 15.6v.1" stroke="#8f6b1c" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <p className="text-sm leading-relaxed md:text-[15px]" style={{ color: "var(--ink-muted)" }}>
                  You can use Google Maps for routing from your exact location, but{" "}
                  <strong style={{ color: "var(--ink)" }}>
                    please ignore the estimated arrival times on Google Maps
                  </strong>
                  . Their transit timelines for Cairo are highly pessimistic. Plan your
                  commute based on standard local traffic expectations.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal i={1} className="lg:sticky lg:top-28 lg:h-fit">
            <figure>
              <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid var(--line)" }}>
                <iframe
                  src={mapEmbedSrc}
                  title={`Map showing ${venue.name} in ${venue.city}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                  style={{ border: 0, height: "clamp(19rem, 58vw, 34rem)" }}
                />
              </div>
              <figcaption className="mt-3 font-mono text-xs" style={{ color: "var(--ink-faint)" }}>
                {venue.lat.toFixed(5)}°N, {venue.lon.toFixed(5)}°E · Google Maps · pin marks the campus, enter via {venue.gate}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
