import { FC } from "react";
import MeshLayout from "../global/MeshLayout";

interface CubeProps {
  side: number;
}
const Cube: FC<CubeProps> = ({ side }) => {
  return (
    <MeshLayout>
      <boxGeometry args={[side * 0.3, side * 0.3, side * 0.3]} />
      <meshStandardMaterial color="orange" />
    </MeshLayout>
  );
};

export default Cube;
