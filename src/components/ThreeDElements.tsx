import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeDElements = () => {
  const meshRef = useRef<any>(null);
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.25;
    // meshRef.current.rotation.y += delta * 0.25;
    // meshRef.current.rotation.z += delta * 0.25;
  });
  return (
    <mesh ref={meshRef}>
      <OrbitControls />
      <ambientLight intensity={2} />
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={"orange"} />
      <directionalLight position={[2, 1, 1]} />
    </mesh>
  );
};

export default ThreeDElements;
