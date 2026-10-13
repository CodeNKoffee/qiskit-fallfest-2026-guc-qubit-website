import Link from "next/link";
import { event } from "@/data/event";
import Reveal from "../ui/Reveal";
import InstitutionMark from "../ui/InstitutionMark";

const tags = ["OFFICIAL EVENT", "OPEN TO ALL STUDENTS", "CAIRO, EGYPT"];

export default function Hero() {
  return (
    <section
      data-tone="light"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-14 pt-32 md:pb-20"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Keeps hero copy legible over the lattice without hiding it. */}
      <div
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgb(240 238 233 / 0.86) 0%, rgb(240 238 233 / 0.46) 42%, rgb(240 238 233 / 0.9) 100%)",
        }}
      />

      <div className="shell w-full">
        <Reveal>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.16em]" style={{ color: "var(--ink-muted)" }}>
            {tags.map((t) => (
              <li key={t}>[ {t} ]</li>
            ))}
          </ul>
        </Reveal>

        <Reveal i={1}>
          <h1 className="mt-6 text-balance text-[9.5vw] font-medium leading-[0.92] tracking-[-0.045em] sm:text-[8vw] lg:text-[6.25rem]">
            IBM Qiskit
            <br />
            Fall Fest 2026:
            <br />
            <span style={{ color: "var(--color-quantum)" }}>Egypt</span>
          </h1>
        </Reveal>

        <div className="mt-9 grid gap-9 md:mt-12 md:grid-cols-[1.25fr_1fr] md:items-end md:gap-14">
          <Reveal i={2}>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed md:text-xl" style={{ color: "var(--ink-muted)" }}>
              Celebrating a decade of quantum on the cloud. Hosted at the German University
              in Cairo and proudly open to all university students across Egypt, join us for
              a beginner-friendly, hands-on introduction to quantum computing. Learn the
              fundamentals, run your first circuits on real IBM hardware, compete in a
              hackathon, and earn your official certification.
            </p>
          </Reveal>

          <Reveal i={3}>
            <div className="flex max-w-md flex-col gap-3 xl:max-w-none xl:flex-row xl:flex-wrap xl:items-center">
              <a
                href={event.registerUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 items-center rounded-full px-7 w-full justify-center text-center xl:w-auto text-[15px] font-medium transition-transform hover:scale-[1.03]"
                style={{ background: "var(--color-quantum)", color: "#fff" }}
              >
                Register Now (Closes {event.registrationCloses})
              </a>
              <Link
                href="#timeline"
                className="inline-flex min-h-12 items-center rounded-full px-7 w-full justify-center text-center xl:w-auto text-[15px] font-medium"
                style={{ border: "1px solid var(--line-strong)", color: "var(--ink)" }}
              >
                View Timeline
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Trust badge — the certificate is the reason most people register. */}
        <Reveal i={4}>
          <div
            className="mt-9 flex items-start gap-4 rounded-2xl p-5 md:max-w-3xl md:items-center md:p-6"
            style={{
              border: "1px solid rgb(15 98 254 / 0.35)",
              background: "rgb(15 98 254 / 0.07)",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 md:mt-0">
              <path d="M15 2l3.1 2.3 3.8-.2 1.3 3.6 3.2 2.1-1 3.7 1 3.7-3.2 2.1-1.3 3.6-3.8-.2L15 28l-3.1-2.3-3.8.2-1.3-3.6L3.6 20.2l1-3.7-1-3.7 3.2-2.1 1.3-3.6 3.8.2L15 2z" fill="var(--color-quantum)" opacity="0.14" stroke="var(--color-quantum)" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M10 15.2l3.3 3.3L20 11.8" stroke="var(--color-quantum-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-base font-medium leading-snug md:text-lg">
              Includes Official IBM Quantum Certification upon completion.
            </p>
          </div>
        </Reveal>

        <Reveal i={5}>
          <div
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 md:mt-16"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--ink-faint)" }}>
              Hosted at
            </span>
            <InstitutionMark height={34} />
            <span aria-hidden="true" className="hidden h-6 w-px sm:block" style={{ background: "var(--line-strong)" }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--ink-faint)" }}>
              Supported by IBM Quantum
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
