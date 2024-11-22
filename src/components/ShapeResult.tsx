import { Shape2dModel, ShapeResultProps } from "@/types";
import { calculateAreaAndPerimeter, hasDecimal } from "@/utils/reusables";
import { AnimatePresence } from "motion/react";
import { FC, useMemo } from "react";
import Circle from "./shapes/Circle";
import Rectangle from "./shapes/Rectangle";
import Square from "./shapes/Square";
import Triangle from "./shapes/Triangle";

const ShapeResult: FC<ShapeResultProps> = ({
  dimension,
  selectedShape,
  unit,
}) => {
  const metrics = useMemo(
    () =>
      calculateAreaAndPerimeter(
        selectedShape as Shape2dModel,
        dimension as Record<string, number>
      ),
    [selectedShape, dimension]
  );

  return (
    <div className="h-auto  flex-1 flex-grow flex justify-center items-center flex-col relative">
      <div className="">
        <AnimatePresence mode="wait">
          {selectedShape === "rectangle" && (
            <Rectangle
              length={dimension?.length as number}
              width={dimension?.width as number}
            />
          )}
          {selectedShape === "square" && (
            <Square side={dimension?.side as number} />
          )}
          {selectedShape === "circle" && (
            <Circle radius={dimension?.radius as number} />
          )}
          {selectedShape === "triangle" && (
            <Triangle
              base={dimension?.base as number}
              height={dimension?.height as number}
              sideA={dimension?.sideA as number}
              sideB={dimension?.sideB as number}
              sideC={dimension?.sideC as number}
            />
          )}
        </AnimatePresence>
        <div className={selectedShape === "triangle" ? "mt-5" : ""}>
          <p>
            Area:{" "}
            {hasDecimal(metrics?.area as number)
              ? metrics?.area?.toFixed(2)
              : metrics?.area}{" "}
            {unit}²
          </p>
          <p>
            {selectedShape === "circle" ? "Cirumference" : "Perimeter"}{" "}
            {/* {metrics?.perimeter} {unit} */}
            {hasDecimal(metrics?.perimeter as number)
              ? metrics?.perimeter?.toFixed(2)
              : metrics?.perimeter}{" "}
            {unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShapeResult;
