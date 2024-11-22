import { FC } from "react";
import AnimateShapes from "../global/AnimateShapes";

interface RectangleProps {
  length: number;
  width: number;
}

const Rectangle: FC<RectangleProps> = ({ length, width }) => {
  return (
    <AnimateShapes>
      <div
        className="bg-blue-500/20 border-2 border-blue-500 transition-all flex items-center justify-center"
        style={{
          width: `${width * 25}px`,
          height: `${length * 25}px`,
        }}
      >
        <div className="text-blue-700">
          {length} × {width}
        </div>
      </div>
    </AnimateShapes>
  );
};

export default Rectangle;
