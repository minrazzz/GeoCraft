import {
  DimensionModel,
  Shape3dModel,
  ShapeResultProps,
  UnitsModel,
} from "@/types";
import { UNITS } from "@/utils/constants";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, useCallback, useMemo, useState } from "react";
import FormulaInfoCard from "../FormulaInfoCard";
import BackgroundWrapper from "../global/BackgroundWrapper";
import Wrapper from "../global/Wrapper";
import ShapeControls from "../ShapeControls";
import Cube from "../shapes/Cube";
import Cuboid from "../shapes/Cuboid";
import Sphere from "../shapes/Sphere";
import Tetrahedron from "../shapes/Tetrahedron";
import ThreeDDimensionControls from "../ThreeDDimensionControls";
import { calculateThreeDAreaAndPerimeter, hasDecimal } from "@/utils/reusables";

const ThreeDVisualizer = () => {
  const [selectedShape, setSelectedShape] = useState<Shape3dModel>("cube");
  const [dimension, setDimension] = useState<DimensionModel>({
    cside: 10,
    tside: 4,
    length: 4,
    width: 3,
    height: 5,
    radius: 5,
  });
  const [selectedUnit, setSelectedUnit] = useState<UnitsModel>(UNITS.METERS);

  const handleDimensionChange = useCallback(
    (key: string, value: number) => {
      setDimension((prev) => ({ ...prev, [key]: value }));
    },
    [setDimension]
  );

  const metrics = useMemo(
    () =>
      calculateThreeDAreaAndPerimeter(
        selectedShape as Shape3dModel,
        dimension as Record<string, number>
      ),
    [selectedShape, dimension]
  );

  return (
    <Wrapper>
      <BackgroundWrapper>
        <div className="flex flex-col gap-y-5 pb-4">
          <ShapeControls
            selectedShape={selectedShape}
            setSelectedShape={setSelectedShape}
            selectedUnit={selectedUnit}
            setSelectedUnit={setSelectedUnit}
            title="3Dshapes"
          />
          <ThreeDDimensionControls
            dimension={dimension}
            onChange={handleDimensionChange}
            selectedShape={selectedShape}
          />
        </div>
      </BackgroundWrapper>
      <div className="flex-1  flex justify-center items-center relative">
        <Canvas className="" style={{ height: "500px" }}>
          <ambientLight intensity={3} />
          <directionalLight position={[3, 1, 1]} />
          <OrbitControls enableZoom={false} />
          {selectedShape === "cube" && (
            <Cube side={dimension.cside as number} />
          )}
          {selectedShape === "cuboid" && (
            <Cuboid
              length={dimension.length as number}
              width={dimension?.width as number}
              height={dimension?.height as number}
            />
          )}
          {selectedShape === "sphere" && (
            <Sphere radius={dimension.radius as number} />
          )}
          {selectedShape === "tetrahedron" && (
            <Tetrahedron side={dimension.tside as number} />
          )}
        </Canvas>
      </div>
      <div>
        <p>
          Surface Area:{" "}
          {hasDecimal(metrics?.surfaceArea as number)
            ? metrics?.surfaceArea?.toFixed(2)
            : metrics?.surfaceArea}{" "}
          {selectedUnit}²
        </p>
        <p>
          Volume:
          {hasDecimal(metrics?.volume as number)
            ? metrics?.volume?.toFixed(2)
            : metrics?.volume}{" "}
          {selectedUnit}³
        </p>
      </div>
      <BackgroundWrapper>
        <FormulaInfoCard
          selectedShape={selectedShape as Shape3dModel}
          type="3D"
        />
      </BackgroundWrapper>
    </Wrapper>
  );
};

export default ThreeDVisualizer;
