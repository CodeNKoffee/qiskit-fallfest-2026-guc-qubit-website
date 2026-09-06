"use client";

import { useId, useState } from "react";
import { event } from "@/data/event";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

/**
 * Registration form.
 *
 * Posts to NEXT_PUBLIC_REGISTRATION_ENDPOINT (a Formspree/Getform/Apps Script
 * URL — anything that accepts a JSON POST). When that is unset the form
 * renders in a clearly-labelled "not open yet" state rather than pretending
 * to submit into the void.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_REGISTRATION_ENDPOINT ?? "";

const TRACKS = [
  { id: "workshops", label: "Workshops" },
  { id: "talks", label: "Talks" },
  { id: "labs", label: "Hardware labs" },
  { id: "hackathon", label: "Hackathon" },
];

const YEARS = ["Semester 1–2", "Semester 3–4", "Semester 5–6", "Semester 7+", "Postgraduate", "Staff / faculty", "Not a student"];

const EXPERIENCE = [
  { id: "none", label: "Total beginner — that's the point" },
  { id: "python", label: "Comfortable with Python, new to quantum" },
  { id: "some", label: "Some quantum background" },
  { id: "lots", label: "I've built with Qiskit before" },
];

const TEAM = [
  { id: "solo", label: "Registering solo — find me a team" },
  { id: "have", label: "I already have a team" },
  { id: "no-hack", label: "Not doing the hackathon" },
];

type Errors = Partial<Record<"name" | "email" | "university" | "tracks", string>>;

export default function Register() {
  const uid = useId();
  const [tracks, setTracks] = useState<string[]>(["workshops"]);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const toggleTrack = (id: string) =>
    setTracks((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // Bots fill every field they see; humans never see this one.
    if (fd.get("company")) return;

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const university = String(fd.get("university") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!email) next.email = "We need an email to send your confirmation.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email doesn't look right.";
    if (!university) next.university = "Which university or organisation are you coming from?";
    if (tracks.length === 0) next.tracks = "Pick at least one thing you want to attend.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      document.getElementById(`${uid}-${Object.keys(next)[0]}`)?.focus();
      return;
    }

    if (!ENDPOINT) {
      setState("error");
      return;
    }

    setState("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          university,
          faculty: fd.get("faculty"),
          year: fd.get("year"),
          experience: fd.get("experience"),
          team: fd.get("team"),
          notes: fd.get("notes"),
          tracks,
          event: event.name,
        }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <Section id="register" tone="light" className="py-28 md:py-40">
        <div className="shell max-w-2xl text-center">
          <p className="font-mono text-5xl" style={{ color: "var(--color-qiskit)" }}>
            |ψ⟩
          </p>
          <h2 className="mt-8 text-balance text-4xl font-medium tracking-[-0.035em] md:text-6xl">
            You&rsquo;re in.
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            Check your inbox for a confirmation. We&rsquo;ll send the setup guide and
            the final schedule before the event.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="register" tone="light" className="py-24 md:py-32">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Registration</p>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 text-balance text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Ten years in.
              <br />
              <span style={{ color: "var(--color-quantum)" }}>Your turn.</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-6 text-pretty text-lg leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              Free to attend. Open to {event.universityShort} students and the wider
              quantum-curious. Bring a laptop.
            </p>
          </Reveal>
        </div>

        <Reveal i={2}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="mx-auto mt-14 max-w-3xl rounded-3xl p-7 md:p-11"
            style={{ border: "1px solid var(--line)", background: "var(--surface-raised)" }}
          >
            {/* Honeypot */}
            <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
              <label htmlFor={`${uid}-company`}>Company</label>
              <input id={`${uid}-company`} name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Field
                uid={uid}
                name="name"
                label="Full name"
                required
                autoComplete="name"
                error={errors.name}
              />
              <Field
                uid={uid}
                name="email"
                type="email"
                label="Email"
                required
                autoComplete="email"
                error={errors.email}
              />
              <Field
                uid={uid}
                name="university"
                label="University or organisation"
                required
                defaultValue={event.university}
                error={errors.university}
              />
              <Field uid={uid} name="faculty" label="Faculty or major" placeholder="Optional" />

              <Select uid={uid} name="year" label="Where you are" options={YEARS} />
              <Select
                uid={uid}
                name="experience"
                label="Experience with quantum"
                options={EXPERIENCE.map((e) => e.label)}
              />
            </div>

            {/* Tracks */}
            <fieldset className="mt-8">
              <legend className="text-sm font-medium">
                What do you want to join?{" "}
                <span style={{ color: "var(--ink-faint)" }}>Pick any.</span>
              </legend>
              <div
                className="mt-3 flex flex-wrap gap-2.5"
                id={`${uid}-tracks`}
                tabIndex={-1}
                aria-describedby={errors.tracks ? `${uid}-tracks-err` : undefined}
              >
                {TRACKS.map((t) => {
                  const on = tracks.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleTrack(t.id)}
                      className="rounded-full px-5 py-2.5 text-sm font-medium transition-all"
                      style={{
                        background: on ? "var(--color-quantum)" : "transparent",
                        color: on ? "#fff" : "var(--ink-muted)",
                        border: `1px solid ${on ? "var(--color-quantum)" : "var(--line-strong)"}`,
                      }}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
              {errors.tracks && <ErrorText id={`${uid}-tracks-err`}>{errors.tracks}</ErrorText>}
            </fieldset>

            <div className="mt-8 grid gap-6">
              <Select
                uid={uid}
                name="team"
                label="Hackathon team"
                options={TEAM.map((t) => t.label)}
              />

              <div>
                <label htmlFor={`${uid}-notes`} className="text-sm font-medium">
                  Anything else?{" "}
                  <span style={{ color: "var(--ink-faint)" }}>
                    Accessibility needs, dietary requirements, questions.
                  </span>
                </label>
                <textarea
                  id={`${uid}-notes`}
                  name="notes"
                  rows={3}
                  className="mt-2 w-full rounded-xl px-4 py-3 text-[15px]"
                  style={{
                    border: "1px solid var(--line-strong)",
                    background: "var(--surface)",
                    color: "var(--ink)",
                  }}
                />
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={state === "sending"}
                className="rounded-full px-8 py-4 text-[15px] font-medium transition-transform hover:scale-[1.03] disabled:opacity-60"
                style={{ background: "var(--color-quantum)", color: "#fff" }}
              >
                {state === "sending" ? "Sending…" : "Register — it's free"}
              </button>
              <p className="text-xs leading-relaxed" style={{ color: "var(--ink-faint)" }}>
                By registering you agree to the{" "}
                <a href="/code-of-conduct" style={{ textDecoration: "underline" }}>
                  code of conduct
                </a>
                .
              </p>
            </div>

            {state === "error" && (
              <p
                role="alert"
                className="mt-6 rounded-xl p-4 text-sm leading-relaxed"
                style={{
                  border: "1px solid var(--color-quantum)",
                  color: "var(--ink-muted)",
                  background: "rgb(5 48 173 / 0.05)",
                }}
              >
                {ENDPOINT
                  ? "Something went wrong sending that. Try again, or email us — the address is in the footer."
                  : "Registration isn't open yet — the form goes live once dates are confirmed. Follow Qubit for the announcement."}
              </p>
            )}
          </form>
        </Reveal>

        <p
          className="mt-8 text-center font-mono text-xs uppercase tracking-[0.16em]"
          style={{ color: "var(--ink-faint)" }}
        >
          {event.dates} · {event.city}
        </p>
      </div>
    </Section>
  );
}

/* ---------- field primitives ---------- */

function Field({
  uid,
  name,
  label,
  type = "text",
  required,
  error,
  ...rest
}: {
  uid: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: string;
}) {
  const id = `${uid}-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span style={{ color: "var(--color-qiskit)" }}> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className="mt-2 w-full rounded-xl px-4 py-3 text-[15px]"
        style={{
          border: `1px solid ${error ? "#c2334d" : "var(--line-strong)"}`,
          background: "var(--surface)",
          color: "var(--ink)",
        }}
        {...rest}
      />
      {error && <ErrorText id={`${id}-err`}>{error}</ErrorText>}
    </div>
  );
}

function Select({
  uid,
  name,
  label,
  options,
}: {
  uid: string;
  name: string;
  label: string;
  options: readonly string[];
}) {
  const id = `${uid}-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-xl px-4 py-3 text-[15px]"
        style={{
          border: "1px solid var(--line-strong)",
          background: "var(--surface)",
          color: "var(--ink)",
        }}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs" style={{ color: "#c2334d" }}>
      {children}
    </p>
  );
}
