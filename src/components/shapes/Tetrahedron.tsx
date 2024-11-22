import MeshLayout from "../global/MeshLayout";

const Tetrahedron = ({ side }: { side: number }) => {
  return (
    <MeshLayout>
      <tetrahedronGeometry args={[side * 0.3]} />
      <meshStandardMaterial color="green" />
    </MeshLayout>
  );
};

export default Tetrahedron;
