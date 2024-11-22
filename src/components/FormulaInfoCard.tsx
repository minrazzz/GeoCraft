import { FormulaInfoProps } from "@/types";
import { Descriptions } from "@/utils/constants";
import { FC, useMemo } from "react";

const FormulaInfoCard: FC<FormulaInfoProps> = ({ selectedShape }) => {
  const content = useMemo(() => Descriptions?.[selectedShape], [selectedShape]);

  return (
    <div className="w-full flex flex-col gap-y-7">
      <p className="text-2xl  font-[300]">Formula</p>
      <div className="p-2 sm:p5 bg-gray-2 rounded-sm">
        <pre className="text-sm sm:tex-base">{content.formula}</pre>
      </div>
      <div className="flex flex-col gap-y-1">
        <p>{content?.description}</p>
        <p className="text-gray-600">{content?.realWorld}</p>
      </div>
    </div>
  );
};

export default FormulaInfoCard;
