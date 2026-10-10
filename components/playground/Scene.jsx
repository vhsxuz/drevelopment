"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

/**
 * A distorted mesh that leans toward the pointer. The pointer target is
 * lerped rather than applied directly, which is the 3D equivalent of a
 * critically damped spring - it follows without jitter and never overshoots.
 */
function Blob({ reduceMotion }) {
  const mesh = useRef();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const { x, y } = state.pointer;
    target.current.x += (y * 0.4 - target.current.x) * Math.min(1, delta * 4);
    target.current.y += (x * 0.6 - target.current.y) * Math.min(1, delta * 4);
    mesh.current.rotation.x = target.current.x;
    mesh.current.rotation.y = target.current.y + (reduceMotion ? 0 : state.clock.elapsedTime * 0.12);
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.35, 24]} />
      <MeshDistortMaterial
        color="#0071e3"
        roughness={0.18}
        metalness={0.65}
        distort={reduceMotion ? 0.12 : 0.38}
        speed={reduceMotion ? 0 : 1.4}
      />
    </mesh>
  );
}

export default function Scene() {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  return (
    <Canvas
      // Capping DPR at 2 is the single biggest win on a high-density phone.
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      // `demand` means it renders when something changes, not 60fps forever.
      frameloop={reduceMotion ? "demand" : "always"}
      onCreated={() => setReady(true)}
      style={{ opacity: ready ? 1 : 0, transition: "opacity 400ms ease-out" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.4} />
      <Blob reduceMotion={reduceMotion} />
      <Environment preset="city" />
    </Canvas>
  );
}
