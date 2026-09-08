import { event } from "@/data/event";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

export default function Register() {
  return (
    <Section id="register" tone="light" className="py-24 md:py-32">
      <div className="shell max-w-3xl">
        <Reveal>
          <p className="eyebrow">Registration</p>
        </Reveal>

        <Reveal i={1}>
          <h2 className="mt-5 text-balance text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Save your spot.
          </h2>
        </Reveal>

        <Reveal i={2}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            Register via the Google Form and we&rsquo;ll be in touch with the event details,
            venue info, and the final programme.
          </p>
        </Reveal>

        <Reveal i={3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex rounded-full px-8 py-4 text-[15px] font-medium transition-transform hover:scale-[1.03]"
              style={{ background: "var(--color-quantum)", color: "#fff" }}
            >
              Register via Google Form
            </a>
            <span className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: "var(--ink-faint)" }}>
              Free to attend
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
