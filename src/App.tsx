import Wrapper from "@/components/global/Wrapper";
import Header from "@/components/Header";
import { DimensionModel, Shape2dModel, UnitsModel } from "@/types";
import { useCallback, useState } from "react";
import "./App.css";
import DimensionControls from "./components/DimensionControls";
import FormulaInfoCard from "./components/FormulaInfoCard";
import BackgroundWrapper from "./components/global/BackgroundWrapper";
import ShapeControls from "./components/ShapeControls";
import ShapeResult from "./components/ShapeResult";
import { SHAPES_2D, UNITS } from "./utils/constants";

function App() {
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
      <div className="w-full p-3 bg-gray-1 flex flex-col">
        <Wrapper>
          <Header />
          <BackgroundWrapper>
            <div className="flex flex-col gap-y-5 pb-4">
              <ShapeControls
                selectedShape={selectedShape}
                setSelectedShape={setSelectedShape}
                selectedUnit={selectedUnit}
                setSelectedUnit={setSelectedUnit}
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
            <FormulaInfoCard selectedShape={selectedShape} />
          </BackgroundWrapper>
        </Wrapper>
      </div>
    </>
  );
}

export default App;
