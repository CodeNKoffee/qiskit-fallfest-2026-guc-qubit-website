/**
 * Decorative artwork, blended into the page rather than boxed on it.
 *
 * The source illustrations carry their own pale-blue sky, so they are
 * multiplied into the Cloud Dancer ground and faded out with a radial mask
 * centred on the edge they sit against — no visible frame, and the grid
 * lines show through. Purely ornamental: hidden from assistive tech, never
 * interactive, lazy-loaded, and dropped below `md` where the copy needs the
 * room.
 */
export default function Art({
  src,
  edge,
  className = "",
  opacity = 1,
}: {
  src: string;
  /** Which edge of the section the art is anchored to. */
  edge: "left" | "right" | "bottom-right";
  className?: string;
  opacity?: number;
}) {
  const origin =
    edge === "right" ? "100% 50%" : edge === "left" ? "0% 50%" : "85% 100%";
  const mask = `radial-gradient(ellipse at ${origin}, #000 18%, transparent 60%)`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        mixBlendMode: "multiply",
        opacity,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}
