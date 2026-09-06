import { venue, mapEmbedSrc, directionsUrl, osmUrl } from "@/data/venue";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import InstitutionMark from "../ui/InstitutionMark";

export default function Venue() {
  return (
    <Section id="venue" tone="light" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Getting there"
          title="On campus, at the GUC."
          lede="The whole event runs at the German University in Cairo's main campus in New Cairo."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          {/* Address + travel */}
          <div>
            <Reveal>
              <InstitutionMark height={46} />
            </Reveal>

            <Reveal i={1}>
              <address className="mt-8 not-italic leading-relaxed">
                <span className="block text-lg font-medium">{venue.name}</span>
                <span className="block" style={{ color: "var(--ink-muted)" }}>
                  {venue.street}
                </span>
                <span className="block" style={{ color: "var(--ink-muted)" }}>
                  {venue.city}, {venue.country}
                </span>
                <span
                  className="mt-3 block font-mono text-xs"
                  style={{ color: "var(--ink-faint)" }}
                >
                  {venue.building}
                </span>
              </address>
            </Reveal>

            <Reveal i={2}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.03]"
                  style={{ background: "var(--color-quantum)", color: "#fff" }}
                >
                  Get directions
                </a>
                <a
                  href={osmUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full px-6 py-3 text-sm font-medium"
                  style={{ border: "1px solid var(--line-strong)", color: "var(--ink)" }}
                >
                  Open larger map
                </a>
              </div>
            </Reveal>

            <dl className="mt-10">
              {venue.gettingHere.map((g, i) => (
                <Reveal key={g.t} i={i}>
                  <div className="py-5" style={{ borderTop: "1px solid var(--line)" }}>
                    <dt className="text-base font-medium">{g.t}</dt>
                    <dd
                      className="mt-1.5 text-pretty text-sm leading-relaxed"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {g.d}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          {/* Map */}
          <Reveal i={1}>
            <figure className="h-full">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ border: "1px solid var(--line)" }}
              >
                <iframe
                  src={mapEmbedSrc}
                  title={`Map showing ${venue.name} in ${venue.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[380px] w-full md:h-[560px]"
                  style={{ border: 0 }}
                />
              </div>
              <figcaption
                className="mt-3 font-mono text-xs"
                style={{ color: "var(--ink-faint)" }}
              >
                {venue.lat.toFixed(5)}°N, {venue.lon.toFixed(5)}°E · map ©{" "}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "underline" }}
                >
                  OpenStreetMap
                </a>{" "}
                contributors
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
