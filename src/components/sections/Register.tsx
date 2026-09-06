import Link from "next/link";
import { event } from "@/data/event";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

export default function Register() {
  return (
    <Section id="register" tone="light" className="py-28 md:py-40">
      <div className="shell text-center">
        <Reveal>
          <p className="eyebrow">Registration</p>
        </Reveal>
        <Reveal i={1}>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Ten years in.
            <br />
            <span style={{ color: "var(--color-quantum)" }}>Your turn.</span>
          </h2>
        </Reveal>
        <Reveal i={2}>
          <p
            className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed"
            style={{ color: "var(--ink-muted)" }}
          >
            Free to attend. Open to {event.universityShort} students and the wider
            quantum-curious. Bring a laptop.
          </p>
        </Reveal>
        <Reveal i={3}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-full px-8 py-4 text-[15px] font-medium transition-transform hover:scale-[1.03]"
              style={{ background: "var(--color-quantum)", color: "#fff" }}
            >
              Register now
            </a>
            <Link
              href="/resources"
              className="rounded-full px-8 py-4 text-[15px] font-medium"
              style={{ border: "1px solid var(--line-strong)", color: "var(--ink)" }}
            >
              Prep before you come
            </Link>
          </div>
        </Reveal>
        <Reveal i={4}>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em]" style={{ color: "var(--ink-faint)" }}>
            {event.dates} · {event.venue}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
