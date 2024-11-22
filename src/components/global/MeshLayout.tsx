import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const MeshLayout = ({ children }: { children: React.ReactNode }) => {
  const meshRef = useRef<any>(null);
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.25;
  });
  return <mesh ref={meshRef}>{children}</mesh>;
};

export default MeshLayout;
