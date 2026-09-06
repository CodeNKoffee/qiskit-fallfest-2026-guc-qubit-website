import Link from "next/link";
import { event } from "@/data/event";

export default function Footer() {
  return (
    <footer data-tone="dark" className="relative pt-20 pb-10">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-medium tracking-tight">{event.name}</p>
            <p className="mt-2 max-w-sm text-pretty" style={{ color: "var(--ink-muted)" }}>
              Hosted by {event.hostLong} at the {event.university}.
            </p>
            <p className="mt-6 font-mono text-xs" style={{ color: "var(--ink-faint)" }}>
              {event.city} · {event.dates}
            </p>
          </div>

          <nav aria-label="Site">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/#timeline", label: "Timeline" },
                { href: "/#schedule", label: "Schedule" },
                { href: "/hackathon", label: "Hackathon" },
                { href: "/#team", label: "Organisers" },
                { href: "/#venue", label: "Venue & map" },
                { href: "/resources", label: "Resources" },
                { href: "/code-of-conduct", label: "Code of conduct" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "var(--ink-muted)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5 text-sm">
              {event.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} style={{ color: "var(--ink-muted)" }}>
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${event.contactEmail}`} style={{ color: "var(--ink-muted)" }}>
                  {event.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col gap-4 pt-8 text-xs md:flex-row md:items-center md:justify-between"
          style={{ borderTop: "1px solid var(--line)", color: "var(--ink-faint)" }}
        >
          <p className="max-w-2xl text-pretty leading-relaxed">
            Qiskit Fall Fest is a global programme supported by IBM Quantum. Qiskit, IBM
            Quantum and IBM are trademarks of International Business Machines Corporation.
            This event is organised independently by students at the {event.university}.
          </p>
          <p className="font-mono whitespace-nowrap">© {new Date().getFullYear()} {event.host} @ {event.universityShort}</p>
        </div>
      </div>
    </footer>
  );
}
