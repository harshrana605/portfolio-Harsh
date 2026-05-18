"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Float, Environment } from "@react-three/drei";
import ParticleField from "./ParticleField";
import FloatingOrb from "./FloatingOrb";

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#b44fff" />
        <pointLight position={[-5, -5, 3]} intensity={0.8} color="#00c3ff" />
        <pointLight position={[0, 3, 0]} intensity={0.5} color="#00fff5" />

        <Stars
          radius={80}
          depth={50}
          count={3000}
          factor={4}
          saturation={0.5}
          fade
          speed={0.5}
        />

        <ParticleField count={1500} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <FloatingOrb />
        </Float>

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
