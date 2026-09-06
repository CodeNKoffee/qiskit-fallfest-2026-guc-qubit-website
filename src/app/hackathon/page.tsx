import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Hackathon",
  description:
    "Rules, tracks, judging criteria and prizes for the Qiskit Fall Fest 2026 hackathon at the German University in Cairo.",
};

const rules = [
  {
    t: "Use Qiskit",
    d: "Projects must be developed using Qiskit and IBM Quantum tools. That is a programme requirement, not a house preference.",
  },
  {
    t: "Credit what you borrow",
    d: "Other open-source libraries and APIs are allowed, as long as they are properly credited in your submission.",
  },
  {
    t: "Build it here",
    d: "All development has to happen inside the hackathon window. Bringing a half-finished project is not allowed.",
  },
  {
    t: "Your own work",
    d: "No plagiarism and no undisclosed pre-built code. Anything you did not write, you declare.",
  },
  {
    t: "Follow the prompt",
    d: "Submissions are judged against the prompt released at the start. Off-prompt projects are not eligible.",
  },
  {
    t: "Be decent",
    d: "The event code of conduct applies for the whole hackathon, on and offline.",
  },
];

const criteria = [
  { t: "Quantum relevance", d: "Does the solution genuinely use quantum computing, or is it classical work wearing a costume?" },
  { t: "Technical execution", d: "Does it run? Is the circuit design sound, and does it handle the realities of noisy hardware?" },
  { t: "Originality", d: "Is the idea yours, and does it approach the prompt in a way the panel has not already seen four times." },
  { t: "Presentation", d: "Can you explain what you built, why it works, and what you would do next — clearly and in the time given." },
];

export default function HackathonPage() {
  return (
    <>
      <Section tone="dark" className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Hackathon</p>
          </Reveal>
          <Reveal i={1}>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-8xl">
              One prompt.
              <br />
              One working session.
            </h1>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              The prompt is released at the close of day two. You build against it
              overnight and through day three, then present to a judging panel.
              Everyone who takes part receives an IBM Quantum certificate.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" className="pb-24 md:pb-32">
        <div className="shell grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.025em] md:text-4xl">The rules</h2>
            <ul className="mt-8">
              {rules.map((r, i) => (
                <Reveal as="li" key={r.t} i={Math.min(i, 4)}>
                  <div className="py-6" style={{ borderTop: "1px solid var(--line)" }}>
                    <h3 className="text-lg font-medium">{r.t}</h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                      {r.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-medium tracking-[-0.025em] md:text-4xl">How it&rsquo;s judged</h2>
            <ul className="mt-8">
              {criteria.map((c, i) => (
                <Reveal as="li" key={c.t} i={Math.min(i, 4)}>
                  <div className="py-6" style={{ borderTop: "1px solid var(--line)" }}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs" style={{ color: "var(--color-signal)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-medium">{c.t}</h3>
                    </div>
                    <p className="mt-2 text-pretty text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                      {c.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal>
              <div
                className="mt-10 rounded-2xl p-7"
                style={{ border: "1px solid var(--line)", background: "var(--surface-raised)" }}
              >
                <p className="eyebrow">Prizes</p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  Prize pool and category awards to be announced. IBM Quantum
                  certificates for all participants.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="shell mt-20">
          <Link
            href="/#register"
            className="inline-block rounded-full px-7 py-3.5 text-[15px] font-medium"
            style={{ background: "var(--color-signal)", color: "#05040a" }}
          >
            Register for the hackathon
          </Link>
          <p className="mt-6 text-sm" style={{ color: "var(--ink-faint)" }}>
            Read the{" "}
            <Link href="/code-of-conduct" style={{ color: "var(--ink-muted)", textDecoration: "underline" }}>
              code of conduct
            </Link>{" "}
            before you register — it applies to everyone.
          </p>
        </div>
      </Section>
    </>
  );
}
