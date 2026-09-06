type Props = {
  id?: string;
  tone?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
  /** Let the fixed WebGL layer show through this section. */
  transparent?: boolean;
};

/**
 * Every section owns its tone. The scroll-long light -> dark inversion is
 * just these attributes in sequence, so the token set swaps atomically and
 * nothing has to know about global theme state.
 */
export default function Section({
  id,
  tone = "light",
  className = "",
  children,
  transparent = false,
}: Props) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={`relative ${className}`}
      style={transparent ? { backgroundColor: "transparent" } : undefined}
    >
      {children}
    </section>
  );
}
