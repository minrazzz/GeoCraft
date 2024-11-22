import React from "react";
import MeshLayout from "../global/MeshLayout";

const Sphere = ({ radius }: { radius: number }) => {
  return (
    <MeshLayout>
      <sphereGeometry args={[radius * 0.3, 64, 64]} />
      <meshStandardMaterial color="red" roughness={0.5} metalness={0.5} />
    </MeshLayout>
  );
};

export default Sphere;
