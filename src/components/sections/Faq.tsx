import { faq } from "@/data/faq";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

/**
 * Native <details> — keyboard accessible, works without JS, and the
 * open state survives a print or a find-in-page.
 */
export default function Faq() {
  return (
    <Section id="faq" tone="light" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Before you ask."
          lede="Still stuck? Email us — the address is in the footer."
        />

        <div className="max-w-3xl">
          {faq.map((item, i) => (
            <Reveal key={item.q} i={Math.min(i, 4)}>
              <details
                className="group py-1"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <summary
                  className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-medium tracking-[-0.015em] md:text-xl"
                >
                  <span className="text-pretty">{item.q}</span>
                  <span
                    className="mt-1.5 shrink-0 transition-transform duration-300 group-open:rotate-45"
                    style={{ color: "var(--color-quantum)" }}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p
                  className="max-w-2xl text-pretty pb-6 leading-relaxed"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
