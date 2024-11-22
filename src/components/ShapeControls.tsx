import { ShapeControlsProps } from "@/types";
import ControlSelector from "./ControlSelector";

export default function ShapeControls({
  selectedShape,
  selectedUnit,
  setSelectedShape,
  setSelectedUnit,
  title,
}: ShapeControlsProps) {
  return (
    <div className="w-full">
      <p className="text-2xl mb-7 font-[300]">Shape Controls</p>
      <div className="flex gap-x-7">
        <div className="flex-1">
          <ControlSelector
            selectedValue={selectedShape}
            setSelectedValue={setSelectedShape}
            title={title}
          />
        </div>
        <div className="flex-1">
          <ControlSelector
            selectedValue={selectedUnit}
            setSelectedValue={setSelectedUnit}
            title="units"
          />
        </div>
      </div>
    </div>
  );
}
