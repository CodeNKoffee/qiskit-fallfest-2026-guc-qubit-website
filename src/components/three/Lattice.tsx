"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { buildHeavyHex, activationOrder } from "@/lib/hex";
import { decade } from "@/data/decade";
import { scrollState, setMilestone } from "@/lib/scroll";
import { clamp, lerp } from "@/lib/motion";

const VERTEX_COLOR = new THREE.Color("#0530ad"); // IBM Quantum blue
const EDGE_COLOR = new THREE.Color("#6929c4");   // Qiskit purple
const SIGNAL_COLOR = new THREE.Color("#6fe3d4"); // ice teal, dark half
const DORMANT_LIGHT = new THREE.Color("#cfcbc2");
const DORMANT_DARK = new THREE.Color("#2b2a3d");

const dummy = new THREE.Object3D();
const scratch = new THREE.Color();

type Props = {
  /** rings=8 gives ~1,080 sites; drop it on low-power devices. */
  rings: number;
  quality: "high" | "low";
};

export default function Lattice({ rings, quality }: Props) {
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const { lattice, order, rank, linkGeometry, maxQubits } = useMemo(() => {
    const lat = buildHeavyHex(rings, 1);
    const ord = activationOrder(lat);

    // rank[nodeIndex] = its position in the activation sweep
    const rk = new Int32Array(lat.nodes.length);
    ord.forEach((nodeIdx, position) => {
      rk[nodeIdx] = position;
    });

    const positions = new Float32Array(lat.links.length * 6);
    lat.links.forEach(([a, b], i) => {
      const na = lat.nodes[a];
      const nb = lat.nodes[b];
      positions.set([na.x, na.y, 0, nb.x, nb.y, 0], i * 6);
    });

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return {
      lattice: lat,
      order: ord,
      rank: rk,
      linkGeometry: geom,
      maxQubits: decade[decade.length - 1].qubits,
    };
  }, [rings]);

  // Per-instance colour buffer, mutated in place each frame.
  const colorAttr = useMemo(
    () => new THREE.InstancedBufferAttribute(new Float32Array(lattice.nodes.length * 3), 3),
    [lattice.nodes.length]
  );

  // Static layout — instance matrices never change, only colour and scale.
  const laidOut = useRef(false);

  useFrame((state, delta) => {
    const mesh = nodesRef.current;
    const group = groupRef.current;
    if (!mesh || !group) return;

    const p = clamp(scrollState.progress);

    // The Decade section measures its own position and publishes it, so the
    // lattice density tracks the milestone genuinely on screen rather than a
    // guessed slice of page progress.
    const decadeT = clamp(scrollState.decade);
    const slot = decadeT * (decade.length - 1);

    // Interpolate qubit count between milestones so the lattice grows
    // continuously rather than popping between years.
    const lo = decade[Math.floor(slot)];
    const hi = decade[Math.min(decade.length - 1, Math.ceil(slot))];
    const frac = slot - Math.floor(slot);
    const qubits = lerp(lo.qubits, hi.qubits, frac);

    const litCount = clamp(qubits / maxQubits) * lattice.nodes.length;

    // Tone crossfade: light ground early, deep space through the hack half.
    const darkness = clamp((p - 0.5) / 0.16);
    const dormant = scratch.copy(DORMANT_LIGHT).lerp(DORMANT_DARK, darkness);

    const t = state.clock.elapsedTime;

    for (let i = 0; i < lattice.nodes.length; i++) {
      const node = lattice.nodes[i];
      const position = rank[i];

      // Soft activation edge so the wavefront has a glow rather than a hard cut.
      const lit = clamp((litCount - position) / 60);

      const base = node.kind === "vertex" ? VERTEX_COLOR : EDGE_COLOR;
      scratch.copy(dormant).lerp(base, lit);
      if (darkness > 0) scratch.lerp(SIGNAL_COLOR, lit * darkness * 0.7);

      // Gentle breathing on lit sites only — keeps the dormant field calm.
      const pulse = lit > 0.02 ? 1 + Math.sin(t * 1.4 + node.radius * 9) * 0.09 * lit : 1;
      scratch.multiplyScalar(0.55 + 0.45 * pulse);

      colorAttr.setXYZ(i, scratch.r, scratch.g, scratch.b);

      if (!laidOut.current) {
        dummy.position.set(node.x, node.y, 0);
        const s = node.kind === "vertex" ? 0.13 : 0.085;
        dummy.scale.setScalar(s);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
    }

    if (!laidOut.current) {
      mesh.instanceMatrix.needsUpdate = true;
      laidOut.current = true;
    }
    colorAttr.needsUpdate = true;

    // Camera-ish motion done on the group: cheaper and keeps the canvas
    // usable behind arbitrary DOM.
    const targetZ = lerp(1, 0.42, decadeT);
    const scale = targetZ * Math.min(1, viewport.width / 14);
    group.scale.setScalar(lerp(group.scale.x || scale, scale, 1 - Math.pow(0.001, delta)));

    group.rotation.z = lerp(-0.18, 0.1, p);
    group.rotation.x = lerp(0.55, 0.12, decadeT) + Math.sin(t * 0.18) * 0.02;
    group.position.y = lerp(-1.2, 1.6, p);

    if (linesRef.current) {
      const mat = linesRef.current.material as THREE.LineBasicMaterial;
      // Fade the whole field back once the reader is past the decade story —
      // below that point the lattice is atmosphere, not the subject.
      const past = clamp((p - 0.34) / 0.12);
      mat.opacity = lerp(lerp(0.34, 0.16, past), 0.55, darkness);
      mat.color.copy(dormant).lerp(SIGNAL_COLOR, darkness * 0.75);
    }

    // Same falloff for the nodes, applied through the group.
    const past = clamp((p - 0.34) / 0.12);
    group.visible = true;
    if (nodesRef.current) {
      const nodeMat = nodesRef.current.material as THREE.MeshBasicMaterial;
      nodeMat.opacity = lerp(1, lerp(0.35, 1, darkness), past);
      nodeMat.transparent = true;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments ref={linesRef} geometry={linkGeometry}>
        <lineBasicMaterial transparent opacity={0.2} depthWrite={false} />
      </lineSegments>

      <instancedMesh
        ref={nodesRef}
        args={[undefined, undefined, lattice.nodes.length]}
        frustumCulled={false}
      >
        <sphereGeometry
          args={quality === "high" ? [1, 12, 12] : [1, 6, 6]}
          attach="geometry"
        >
          <primitive object={colorAttr} attach="attributes-color" />
        </sphereGeometry>
        <meshBasicMaterial vertexColors toneMapped={false} />
      </instancedMesh>
    </group>
  );
}
