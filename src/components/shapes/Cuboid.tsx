import { FC } from "react";
import MeshLayout from "../global/MeshLayout";
interface CuboidProps {
  length: number;
  width: number;
  height: number;
}

const Cuboid: FC<CuboidProps> = ({ length, width, height }) => {
  return (
    <MeshLayout>
      <boxGeometry args={[length * 0.3, width * 0.3, height * 0.3]} />
      <meshStandardMaterial color="green" />
    </MeshLayout>
  );
};

export default Cuboid;
