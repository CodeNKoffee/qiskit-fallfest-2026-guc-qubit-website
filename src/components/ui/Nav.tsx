"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { event } from "@/data/event";

const links = [
  { href: "/#decade", label: "The decade" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#speakers", label: "Speakers" },
  { href: "/hackathon", label: "Hackathon" },
  { href: "/#venue", label: "Venue" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);
  const [tone, setTone] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Read the tone of whatever section is currently under the bar, so the
    // nav inverts along with the page instead of staying a bright slab over
    // the dark half.
    const sample = () => {
      setLifted(window.scrollY > 24);
      const el = document
        .elementsFromPoint(window.innerWidth / 2, 34)
        .find((n) => n instanceof HTMLElement && n.closest("[data-tone]"));
      const host = (el as HTMLElement | undefined)?.closest("[data-tone]");
      setTone(host?.getAttribute("data-tone") === "dark" ? "dark" : "light");
    };

    sample();
    window.addEventListener("scroll", sample, { passive: true });
    window.addEventListener("resize", sample);
    return () => {
      window.removeEventListener("scroll", sample);
      window.removeEventListener("resize", sample);
    };
  }, []);

  const dark = tone === "dark";
  const ink = dark ? "#f4f3f7" : "#14131a";
  const inkMuted = dark ? "#a5a1b4" : "#55525f";
  const inkFaint = dark ? "#6b6880" : "#8a8794";
  const sheet = dark ? "rgb(8 7 13 / 0.82)" : "rgb(240 238 233 / 0.82)";
  const hairline = dark ? "rgb(244 243 247 / 0.12)" : "rgb(20 19 26 / 0.09)";
  const cta = dark ? "#6fe3d4" : "#0530ad";
  const ctaInk = dark ? "#05040a" : "#fff";

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:px-4 focus:py-2"
        style={{ background: "var(--color-quantum)", color: "#fff" }}
      >
        Skip to content
      </a>

      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: lifted ? sheet : "transparent",
          backdropFilter: lifted ? "blur(14px) saturate(1.4)" : "none",
          borderBottom: `1px solid ${lifted ? hairline : "transparent"}`,
          color: ink,
        }}
      >
        <nav className="shell flex h-[68px] items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-2.5" style={{ color: ink }}>
            <QubitMark dark={dark} />
            <span className="text-[15px] font-medium tracking-tight">
              {event.host}
              <span className="mx-1.5" style={{ color: inkFaint }}>/</span>
              <span style={{ color: inkMuted }}>Fall Fest 26</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[13.5px] transition-colors"
                  style={{ color: inkMuted }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/#register"
              className="hidden rounded-full px-5 py-2.5 text-[13.5px] font-medium transition-transform hover:scale-[1.03] sm:inline-block"
              style={{ background: cta, color: ctaInk }}
            >
              Register
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
              style={{ border: `1px solid ${hairline}`, color: ink }}
            >
              <span className="relative block h-3 w-4">
                <span
                  className="absolute left-0 block h-px w-4 transition-all duration-300"
                  style={{ background: "currentColor", top: open ? 6 : 1, transform: open ? "rotate(45deg)" : "none" }}
                />
                <span
                  className="absolute left-0 block h-px w-4 transition-all duration-300"
                  style={{ background: "currentColor", top: open ? 6 : 11, transform: open ? "rotate(-45deg)" : "none" }}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        className="fixed inset-0 z-40 lg:hidden"
        style={{
          background: dark ? "rgb(8 7 13 / 0.97)" : "rgb(240 238 233 / 0.97)",
          backdropFilter: "blur(20px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .4s var(--ease-out-quant)",
        }}
      >
        <ul className="shell flex h-full flex-col justify-center gap-1">
          {links.map((l, i) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-3xl font-medium tracking-tight"
                style={{
                  color: ink,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(14px)",
                  transition: `all .5s var(--ease-out-quant) ${i * 50}ms`,
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-6">
            <Link
              href="/#register"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full px-7 py-3.5 text-base font-medium"
              style={{ background: cta, color: ctaInk }}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

/** Bloch-sphere-ish mark: a qubit state vector on a ring. */
function QubitMark({ dark }: { dark: boolean }) {
  const ring = dark ? "#6fe3d4" : "#0530ad";
  const vec = dark ? "#a78bfa" : "#6929c4";
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <circle cx="13" cy="13" r="10.5" stroke={ring} strokeWidth="1.2" opacity="0.35" />
      <ellipse cx="13" cy="13" rx="10.5" ry="4" stroke={vec} strokeWidth="1.2" opacity="0.55" />
      <path d="M13 13L19 7" stroke={ring} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="19" cy="7" r="2.1" fill={vec} />
    </svg>
  );
}
