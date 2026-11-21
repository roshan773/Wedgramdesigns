"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface InvitationCardProps {
  textureUrl?: string;
}

function InvitationCardMesh({ textureUrl = "/images/Dark Orange and Gold Bordered Wedding Invitation.png" }: InvitationCardProps) {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useTexture(textureUrl);

  // Subtle interactive tilting on mouse move
  useFrame((state) => {
    if (!meshRef.current) return;
    const { x, y } = state.pointer;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      x * 0.35,
      0.05
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -y * 0.25,
      0.05
    );
  });

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={meshRef} rotation={[0, -0.15, 0.05]}>
        {/* Main Wedding Invitation Card Base */}
        <RoundedBox args={[3.2, 4.4, 0.08]} radius={0.04} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial
            attach="material-0"
            color="#E8D9A9" // Champagne Gold Side Bevels
            metalness={0.6}
            roughness={0.3}
          />
          <meshStandardMaterial
            attach="material-1"
            color="#E8D9A9"
            metalness={0.6}
            roughness={0.3}
          />
          <meshStandardMaterial
            attach="material-2"
            color="#E8D9A9"
            metalness={0.6}
            roughness={0.3}
          />
          <meshStandardMaterial
            attach="material-3"
            color="#E8D9A9"
            metalness={0.6}
            roughness={0.3}
          />
          <meshStandardMaterial
            attach="material-4" // Front Face
            map={texture}
            roughness={0.4}
            metalness={0.1}
          />
          <meshStandardMaterial
            attach="material-5" // Back Face
            color="#FFFDF9"
            roughness={0.5}
          />
        </RoundedBox>

        {/* Delicate Golden Foil Shadow Plane */}
        <mesh position={[0.1, -0.1, -0.1]}>
          <planeGeometry args={[3.3, 4.5]} />
          <meshBasicMaterial color="#765078" opacity={0.15} transparent />
        </mesh>
      </group>
    </Float>
  );
}

export default function ThreeInvitationCard({ textureUrl }: InvitationCardProps) {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] relative">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 6]} intensity={1.8} color="#FFF7E6" castShadow />
        <directionalLight position={[-5, -2, -2]} intensity={0.6} color="#E8D9A9" />
        <pointLight position={[0, 0, 4]} intensity={0.5} color="#FFFDF9" />
        <InvitationCardMesh textureUrl={textureUrl} />
      </Canvas>
    </div>
  );
}
