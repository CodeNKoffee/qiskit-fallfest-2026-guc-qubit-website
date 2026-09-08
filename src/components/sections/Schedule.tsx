"use client";

import { useState } from "react";
import { schedule, trackMeta, type SessionTrack } from "@/data/schedule";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const allTracks = Object.keys(trackMeta) as SessionTrack[];

export default function Schedule() {
  const [dayIdx, setDayIdx] = useState(0);
  const [filter, setFilter] = useState<SessionTrack | "all">("all");

  const day = schedule[dayIdx];
  const sessions = day.sessions.filter((s) => filter === "all" || s.track === filter);

  return (
    <Section id="schedule" tone="light" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Schedule"
          title="To be announced"
          lede="The detailed daily programme will be shared closer to the event."
        />

        {/* Day tabs */}
        <div role="tablist" aria-label="Event days" className="scroll-x flex gap-2 pb-2">
          {schedule.map((d, i) => {
            const selected = i === dayIdx;
            return (
              <button
                key={d.id}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${d.id}`}
                id={`tab-${d.id}`}
                onClick={() => setDayIdx(i)}
                className="inline-flex min-h-11 shrink-0 items-center rounded-full px-5 text-sm font-medium transition-all"
                style={{
                  background: selected ? "var(--color-quantum)" : "transparent",
                  color: selected ? "#fff" : "var(--ink-muted)",
                  border: `1px solid ${selected ? "var(--color-quantum)" : "var(--line-strong)"}`,
                }}
              >
                {d.label}
              </button>
            );
          })}
        </div>

        {/* Track filter */}
        <div className="scroll-x mt-4 flex items-center gap-2 pb-2">
          <span className="eyebrow shrink-0 pr-1">Filter</span>
          {(["all", ...allTracks] as const).map((t) => {
            const selected = filter === t;
            const label = t === "all" ? "Everything" : trackMeta[t].label;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(t)}
                className="inline-flex min-h-11 shrink-0 items-center rounded-full px-4 font-mono text-[11px] uppercase tracking-[0.12em] transition-all"
                style={{
                  border: `1px solid ${selected ? "var(--ink)" : "var(--line)"}`,
                  color: selected ? "var(--ink)" : "var(--ink-faint)",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${day.id}`}
          aria-labelledby={`tab-${day.id}`}
          className="mt-10"
        >
          <p className="mb-6 text-sm" style={{ color: "var(--ink-muted)" }}>
            <span className="font-mono">{day.date}</span> — {day.summary}
          </p>

          {sessions.length === 0 ? (
            <p className="py-12 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
              Nothing on this track today.
            </p>
          ) : (
            <ul>
              {sessions.map((s, i) => (
                <li
                  key={`${day.id}-${s.time}-${s.title}-${i}`}
                  className="grid grid-cols-[4.5rem_1fr] items-baseline gap-x-5 gap-y-1 py-5 md:grid-cols-[6rem_1fr_10rem] md:gap-x-8"
                  style={{ borderTop: i === 0 ? "none" : "1px solid var(--line)" }}
                >
                  <span className="font-mono text-sm tabular-nums" style={{ color: "var(--ink-faint)" }}>
                    {s.time}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-lg font-medium tracking-[-0.015em] md:text-xl">{s.title}</h3>
                      <span
                        className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]"
                        style={{
                          color: trackMeta[s.track].color,
                          border: `1px solid ${trackMeta[s.track].color}`,
                        }}
                      >
                        {trackMeta[s.track].label}
                      </span>
                    </div>
                    {s.speaker && (
                      <p className="mt-1 text-sm" style={{ color: "var(--ink-muted)" }}>
                        {s.speaker}
                      </p>
                    )}
                  </div>

                  <span
                    className="col-start-2 font-mono text-xs md:col-start-3 md:text-right"
                    style={{ color: "var(--ink-faint)" }}
                  >
                    {s.room}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Reveal>
          <p className="mt-10 text-sm" style={{ color: "var(--ink-faint)" }}>
            Full programme published closer to the event.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
