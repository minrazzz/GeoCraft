import { FormulaInfoProps, Shape2dModel, Shape3dModel } from "@/types";
import { Descriptions, ThreeDDescriptions } from "@/utils/constants";
import { FC, useMemo } from "react";

const FormulaInfoCard: FC<FormulaInfoProps> = ({ selectedShape, type }) => {
  const content = useMemo(() => {
    if (type === "3D") {
      return ThreeDDescriptions?.[selectedShape as Shape3dModel];
    } else if (type === "2D") {
      return Descriptions?.[selectedShape as Shape2dModel];
    }
  }, [selectedShape]);

  return (
    <div className="w-full flex flex-col gap-y-7">
      <p className="text-2xl  font-[300]">Formula</p>
      <div className="p-2 sm:p5 bg-gray-2 rounded-sm">
        <pre className="text-sm sm:tex-base">{content?.formula as string}</pre>
      </div>
      <div className="flex flex-col gap-y-1">
        <p>{content?.description}</p>
        <p className="text-gray-600">{content?.realWorld}</p>
      </div>
    </div>
  );
};

export default FormulaInfoCard;
