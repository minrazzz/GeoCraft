import Wrapper from "@/components/global/Wrapper";
import Header from "@/components/Header";
import { DimensionModel, Shape2dModel, UnitsModel } from "@/types";
import { useCallback, useState } from "react";

import DimensionControls from "@/components/DimensionControls";
import FormulaInfoCard from "@/components/FormulaInfoCard";
import BackgroundWrapper from "@/components/global/BackgroundWrapper";
import ShapeControls from "@/components/ShapeControls";
import ShapeResult from "@/components/ShapeResult";
import { SHAPES_2D, UNITS } from "@/utils/constants";

const TwoDVisualizer = () => {
  const [selectedShape, setSelectedShape] = useState<Shape2dModel>(
    SHAPES_2D.RECTANGLE
  );
  const [selectedUnit, setSelectedUnit] = useState<UnitsModel>(UNITS.METERS);
  const [dimension, setDimension] = useState<DimensionModel>({
    height: 7,
    width: 5,
    length: 7,
    side: 7,
    radius: 9,
    base: 5,
    sideA: 5,
    sideB: 4,
    sideC: 15,
  });

  const handleDimensionChange = useCallback(
    (key: string, value: number) => {
      setDimension((prev) => ({ ...prev, [key]: value }));
    },
    [setDimension]
  );
  return (
    <>
      <BackgroundWrapper>
        <div className="flex flex-col gap-y-5 pb-4">
          <ShapeControls
            selectedShape={selectedShape}
            setSelectedShape={setSelectedShape}
            selectedUnit={selectedUnit}
            setSelectedUnit={setSelectedUnit}
            title="2Dshapes"
          />
          <DimensionControls
            dimension={dimension}
            onChange={handleDimensionChange}
            selectedShape={selectedShape}
          />
        </div>
      </BackgroundWrapper>
      <ShapeResult
        selectedShape={selectedShape}
        dimension={dimension}
        unit={selectedUnit}
      />
      <BackgroundWrapper>
        <FormulaInfoCard type="2D" selectedShape={selectedShape} />
      </BackgroundWrapper>
    </>
  );
};

export default TwoDVisualizer;
