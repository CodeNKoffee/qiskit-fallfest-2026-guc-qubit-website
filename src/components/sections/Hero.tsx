import Link from "next/link";
import { event } from "@/data/event";
import Reveal from "../ui/Reveal";

export default function Hero() {
  return (
    <section
      data-tone="light"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 md:pb-24"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Keeps hero copy legible over the lattice without hiding it. */}
      <div
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgb(240 238 233 / 0.86) 0%, rgb(240 238 233 / 0.42) 42%, rgb(240 238 233 / 0.88) 100%)",
        }}
      />

      <div className="shell w-full">
        <Reveal>
          <p className="eyebrow">
            {event.city} · {event.dates}
          </p>
        </Reveal>

        <Reveal i={1}>
          <h1 className="mt-6 text-balance text-[13vw] font-medium leading-[0.87] tracking-[-0.045em] sm:text-[10vw] lg:text-[8.5rem]">
            Qiskit
            <br />
            Fall Fest
            <span style={{ color: "var(--color-quantum)" }}> 26</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1.1fr_1fr] md:items-end">
          <Reveal i={2}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed md:text-xl" style={{ color: "var(--ink-muted)" }}>
              {event.themeBlurb} Three days of workshops, talks and a hackathon —
              hosted by <strong style={{ color: "var(--ink)" }}>{event.hostLong}</strong> at the{" "}
              {event.university}.
            </p>
          </Reveal>

          <Reveal i={3}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={event.registerUrl}
                className="rounded-full px-7 py-3.5 text-[15px] font-medium transition-transform hover:scale-[1.03]"
                style={{ background: "var(--color-quantum)", color: "#fff" }}
              >
                Register — it&rsquo;s free
              </Link>
              <Link
                href="#decade"
                className="rounded-full px-7 py-3.5 text-[15px] font-medium transition-colors"
                style={{ border: "1px solid var(--line-strong)", color: "var(--ink)" }}
              >
                Ten years in
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal i={4}>
          <div
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 font-mono text-[11px] uppercase tracking-[0.16em] md:mt-20"
            style={{ borderTop: "1px solid var(--line)", color: "var(--ink-faint)" }}
          >
            <span>Theme — {event.theme}</span>
            <span aria-hidden="true">·</span>
            <span>Supported by IBM Quantum</span>
            <span aria-hidden="true">·</span>
            <span>Student-led</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
