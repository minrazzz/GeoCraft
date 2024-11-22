import { ShapeResultProps } from "@/types";
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
    () => calculateAreaAndPerimeter(selectedShape, dimension),
    [selectedShape, dimension]
  );

  return (
    <div className="h-auto  flex-1 flex-grow flex justify-center items-center flex-col relative">
      <div className="">
        <AnimatePresence mode="wait">
          {selectedShape === "rectangle" && (
            <Rectangle length={dimension?.length} width={dimension?.width} />
          )}
          {selectedShape === "square" && <Square side={dimension?.side} />}
          {selectedShape === "circle" && <Circle radius={dimension?.radius} />}
          {selectedShape === "triangle" && (
            <Triangle
              base={dimension?.base}
              height={dimension?.height}
              sideA={dimension?.sideA}
              sideB={dimension?.sideB}
              sideC={dimension?.sideC}
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
