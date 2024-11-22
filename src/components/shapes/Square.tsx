import { FC } from "react";
import AnimateShapes from "../global/AnimateShapes";

interface SquareProps {
  side: number;
}

const Square: FC<SquareProps> = ({ side }) => {
  return (
    <AnimateShapes>
      <div
        className="bg-orange-500/20 border-2 border-orange-500 transition-all flex items-center justify-center"
        style={{
          width: `${side * 25}px`,
          height: `${side * 25}px`,
        }}
      >
        <div className="">
          {side} × {side}
        </div>
      </div>
    </AnimateShapes>
  );
};

export default Square;
