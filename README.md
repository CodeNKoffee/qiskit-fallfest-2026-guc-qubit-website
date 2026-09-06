# Qiskit Fall Fest 2026 — Qubit @ GUC

Event site for Qiskit Fall Fest 2026, hosted by **Qubit — Quantum Computing Club**
at the **German University in Cairo**.

## The concept

IBM's official theme for Fall Fest 2026 is **"a decade of quantum on the cloud"** —
ten years since IBM put the world's first open-access quantum computer online.
That is a timeline, so the site is built as one: a scroll spine that walks from
2016 to 2026.

The 3D centrepiece is a **heavy-hex lattice** — the actual qubit connectivity
topology IBM builds its processors on, not a generic particle field. It sits
fixed behind the page, and its lit node count tracks the qubit count of whichever
year you are scrolled to (5 in 2016 → 1,121 in 2026). Activation sweeps outward
from the origin, so the geometry grows the way the field did.

**Colour** follows 2026 rather than the usual quantum-purple default: Pantone's
Color of the Year 2026, *Cloud Dancer*, is the ground. The page inverts to deep
space through the hackathon half and resolves back to light at registration.
IBM Quantum blue and Qiskit purple carry the brand; ice teal is the signal colour
of the inverted half.

**Type** is IBM Plex Sans + Plex Mono — IBM's own open-source family.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind v4 · React Three Fiber · Lenis

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Editing content

All copy lives in typed data files — you should not need to touch a component
to update the event.

| File | What it holds |
|---|---|
| `src/data/event.ts` | Dates, venue, contact, socials, global stats |
| `src/data/decade.ts` | The ten-year timeline. `qubits` drives lattice density |
| `src/data/schedule.ts` | Day-by-day agenda and track colours |
| `src/data/speakers.ts` | Speaker roster |
| `src/data/team.ts` | Organisers |
| `src/data/timeline.ts` | Event roadmap. Flip a phase's `status` as it opens |
| `src/data/venue.ts` | Address, coordinates, travel notes, GUC logo path |
| `src/data/sponsors.ts` | Sponsor tiers |
| `src/data/faq.ts` | FAQ |
| `src/data/format.ts` | The four track cards |

**Everything marked `TBA` is a placeholder** and needs replacing before launch:
dates, venue hall, contact email, social links, speakers, sponsors, and the
three unfilled organiser slots.

### The GUC logo

`venue.logoSrc` is `null`, so the site renders a typographic GUC lockup. To use
the real mark, drop the file into `public/` and point at it:

```ts
// src/data/venue.ts
logoSrc: "/guc-logo.svg",
```

It defaults to type rather than an image on purpose — the page never ships a
broken asset, and never an approximation of a mark we do not have.

### Registration endpoint

The form at the end of the page POSTs JSON to
`NEXT_PUBLIC_REGISTRATION_ENDPOINT` (see `.env.example`). Any service that
accepts a JSON POST works — Formspree, Getform, a Google Apps Script web app,
or your own API route.

While that variable is unset the form validates normally but reports
*"registration isn't open yet"* on submit, rather than silently discarding
entries. Set it when registration opens.

### Map

The venue map is a keyless OpenStreetMap embed centred on the GUC campus
(29.98758°N, 31.44182°E) — no API key, no third-party ad cookies on visitors.
"Get directions" hands off to Google Maps.

## Architecture notes

- **Tone system.** Every section carries `data-tone="light" | "dark"`, which
  republishes the full surface token set (`--surface`, `--ink`, `--line`, …).
  The light→dark inversion is just those attributes in sequence — no global
  theme state, and the nav samples the tone under itself so it inverts too.
- **Scroll never re-renders React.** `src/lib/scroll.ts` is a mutable module
  singleton. Lenis writes it, the r3f frame loop reads it; React only hears
  about coarse changes (which milestone is active).
- **The decade section measures itself** rather than slicing global page
  progress, so the year in the sticky card, the qubit count, and the lattice
  density always describe the milestone actually on screen.
- **Grids use per-cell hairlines**, not the `gap-px` + container-background
  trick. A partial last row then simply ends, instead of painting empty cells
  as phantom cards.
- **The timeline rail reveals as one unit.** Items further along a
  horizontally-scrolling rail never intersect the viewport, so a per-item
  IntersectionObserver would leave them stuck invisible.
- **WebGL is optional.** The canvas mounts after first paint, and bails out
  entirely for `prefers-reduced-motion`, missing WebGL, or low-power devices
  (falling back to a CSS wash). Low-power devices get a smaller lattice and
  DPR 1. The page is fully readable without it.

## Programme compliance

`/hackathon` carries the Fall Fest rules that events are required to run under:
projects must use Qiskit and IBM Quantum tools, open-source libraries are allowed
with credit, all development happens during the hackathon window, no plagiarism
or undisclosed pre-built code. `/code-of-conduct` is a first-class page.

> The code of conduct is a **draft** and should be reviewed against the official
> Qiskit Fall Fest and GUC policies before the site is announced publicly.

Qiskit, IBM Quantum and IBM are trademarks of International Business Machines
Corporation. This event is organised independently by students at the GUC.
