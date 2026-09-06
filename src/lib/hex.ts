/**
 * Heavy-hex lattice generation.
 *
 * This is the actual qubit connectivity topology IBM uses on its
 * processors: a hexagonal lattice where every vertex carries a qubit
 * AND every edge carries one too (the "heavy" part). Vertex qubits have
 * degree 3, edge qubits degree 2 — the low connectivity is what keeps
 * crosstalk manageable on real hardware.
 *
 * Using the real topology rather than a generic particle field means the
 * geometry on screen is the thing the event is actually about.
 */

export type HexNode = {
  x: number;
  y: number;
  /** vertex = degree-3 lattice site, edge = degree-2 "heavy" site */
  kind: "vertex" | "edge";
  /** Distance from origin, normalised 0..1 — drives outward activation. */
  radius: number;
};

export type HexLattice = {
  nodes: HexNode[];
  /** Index pairs into `nodes`, one per physical coupling. */
  links: [number, number][];
};

/** Snap to a grid so shared vertices between hexagons dedupe cleanly. */
const key = (x: number, y: number) => `${Math.round(x * 1000)}:${Math.round(y * 1000)}`;

/**
 * @param rings Hex-shaped extent of the lattice in axial coordinates.
 *              rings=8 yields ~1,080 qubits — roughly the scale of the
 *              processors this event's final milestone talks about.
 * @param size  Circumradius of one hexagon in world units.
 */
export function buildHeavyHex(rings: number, size = 1): HexLattice {
  const centers: [number, number][] = [];

  // Hex-shaped patch of pointy-top hexagons in axial (q, r) coords.
  for (let q = -rings; q <= rings; q++) {
    const rLo = Math.max(-rings, -q - rings);
    const rHi = Math.min(rings, -q + rings);
    for (let r = rLo; r <= rHi; r++) {
      centers.push([
        size * Math.sqrt(3) * (q + r / 2),
        size * 1.5 * r,
      ]);
    }
  }

  const index = new Map<string, number>();
  const nodes: HexNode[] = [];
  const linkSet = new Set<string>();
  const links: [number, number][] = [];

  const addNode = (x: number, y: number, kind: HexNode["kind"]) => {
    const k = key(x, y);
    const existing = index.get(k);
    if (existing !== undefined) return existing;
    const id = nodes.length;
    index.set(k, id);
    nodes.push({ x, y, kind, radius: Math.hypot(x, y) });
    return id;
  };

  const addLink = (a: number, b: number) => {
    const k = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (linkSet.has(k)) return;
    linkSet.add(k);
    links.push([a, b]);
  };

  for (const [cx, cy] of centers) {
    // Pointy-top: one vertex straight up, the rest every 60 degrees.
    const corners: [number, number][] = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 180) * (60 * i + 30);
      corners.push([cx + size * Math.cos(a), cy + size * Math.sin(a)]);
    }

    for (let i = 0; i < 6; i++) {
      const [ax, ay] = corners[i];
      const [bx, by] = corners[(i + 1) % 6];

      const a = addNode(ax, ay, "vertex");
      const b = addNode(bx, by, "vertex");
      // The heavy qubit sitting on the coupling itself.
      const mid = addNode((ax + bx) / 2, (ay + by) / 2, "edge");

      addLink(a, mid);
      addLink(mid, b);
    }
  }

  // Normalise radius so activation can sweep outward from the origin —
  // the lattice grows the way the field did, from one point in 2016.
  const maxRadius = nodes.reduce((m, n) => Math.max(m, n.radius), 0) || 1;
  for (const n of nodes) n.radius /= maxRadius;

  return { nodes, links };
}

/**
 * Order nodes by distance from centre. Activating them in this order and
 * cutting at `qubits` makes the lit lattice literally count the qubits of
 * whichever year the reader is scrolled to.
 */
export function activationOrder(lattice: HexLattice): number[] {
  return lattice.nodes
    .map((n, i) => [i, n.radius] as const)
    .sort((a, b) => a[1] - b[1])
    .map(([i]) => i);
}
