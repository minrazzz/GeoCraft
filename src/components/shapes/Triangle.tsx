import { FC } from "react";
import AnimateShapes from "../global/AnimateShapes";

interface TraingleProps {
  base: number;
  height: number;
  sideA: number;
  sideB: number;
  sideC: number;
}

const Triangle: FC<TraingleProps> = ({ base, height, sideA, sideB, sideC }) => {
  return (
    <AnimateShapes>
      <div
        className="relative"
        style={{
          width: `${base * 25}px`,
          height: `${height * 25}px`,
        }}
      >
        <div
          className="flex justify-center items-center w-full h-full bg-purple-500/20 border-2 border-purple-500 relative"
          style={{
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
          }}
        />
        <div className=" text-purple-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {base} × {height}
        </div>
        <div className="absolute text-sm text-purple-700 top-1/2 -translate-y-1/2 -left-7">
          sideA: {sideA}
        </div>
        <div className="absolute text-sm text-purple-700 left-1/2 -bottom-5 -translate-x-1/2">
          sideB: {sideB}
        </div>
        <div className="absolute text-sm text-purple-700 -right-7 top-1/2 -translate-y-1/2">
          sideC: {sideC}
        </div>
      </div>
    </AnimateShapes>
  );
};

export default Triangle;
