import { FC } from "react";
import AnimateShapes from "../global/AnimateShapes";

interface CircleProps {
  radius: number;
}

const Circle: FC<CircleProps> = ({ radius }) => {
  return (
    <AnimateShapes>
      <div
        className="bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center"
        style={{
          width: `${radius * 25}px`,
          height: `${radius * 25}px`,
        }}
      >
        <div className="text-green-700">r = {radius}</div>
      </div>
    </AnimateShapes>
  );
};

export default Circle;
