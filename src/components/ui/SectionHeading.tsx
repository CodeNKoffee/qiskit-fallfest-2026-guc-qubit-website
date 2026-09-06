import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  id?: string;
};

export default function SectionHeading({ eyebrow, title, lede, id }: Props) {
  return (
    <header className="mb-12 max-w-3xl md:mb-16">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal i={1}>
        <h2
          id={id}
          className="mt-4 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl"
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal i={2}>
          <p
            className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--ink-muted)" }}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </header>
  );
}
