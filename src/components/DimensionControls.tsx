import { DimensionModel, DynamicInputsProps, Shape2dModel } from "@/types";
import { validateShapeDimensions } from "@/utils/reusables";
import { FC, useState } from "react";
import InputComponent from "./controllers/InputComponent";

const renderInputDimension = (
  dimension: DimensionModel,
  selectedShape: Shape2dModel,
  handleChange: (key: string, value: number) => void,
  errors: Record<string, string>
) => {
  switch (selectedShape) {
    case "rectangle":
      return (
        <div className="flex gap-x-7">
          <InputComponent
            id="length"
            onChange={handleChange}
            value={dimension?.length as number}
            type="number"
            title="Length"
            error={errors?.length}
          />
          <InputComponent
            id="width"
            onChange={handleChange}
            value={dimension?.width as number}
            type="number"
            title="Width"
            error={errors?.width}
          />
        </div>
      );

    case "square":
      return (
        <InputComponent
          id="side"
          onChange={handleChange}
          value={dimension?.side as number}
          type="number"
          title="Side length"
          error={errors?.side}
        />
      );

    case "circle":
      return (
        <InputComponent
          id="radius"
          onChange={handleChange}
          value={dimension?.radius as number}
          type="number"
          title="Radius"
          error={errors?.radius}
        />
      );

    case "triangle":
      return (
        <div className="flex gap-x-7 flex-wrap">
          <div className="w-full flex gap-x-5 mb-5">
            <InputComponent
              id="base"
              onChange={handleChange}
              value={dimension?.base as number}
              type="number"
              title="Base"
              error={errors?.base}
            />
            <InputComponent
              id="height"
              onChange={handleChange}
              value={dimension?.height as number}
              type="number"
              title="Height"
              error={errors?.height}
            />
          </div>
          <InputComponent
            id="sideA"
            onChange={handleChange}
            value={dimension?.sideA as number}
            type="number"
            title="SideA"
            error={errors?.sideA}
          />
          <InputComponent
            id="sideB"
            onChange={handleChange}
            value={dimension?.sideB as number}
            type="number"
            title="sideB"
            error={errors?.sideB}
          />
          <InputComponent
            id="sideC"
            onChange={handleChange}
            value={dimension?.sideC as number}
            type="number"
            title="SideC"
            error={errors?.sideC}
          />
        </div>
      );

    default:
      return (
        <div className=" flex gap-x-7">
          <InputComponent
            id="length"
            onChange={handleChange}
            value={dimension?.length as number}
            type="number"
            title="Length"
            error={errors?.length}
          />
          <InputComponent
            id="width"
            onChange={handleChange}
            value={dimension?.width as number}
            type="number"
            title="Width"
            error={errors?.width}
          />
        </div>
      );
  }
};

const DimensionControls: FC<DynamicInputsProps> = ({
  dimension,
  onChange,
  selectedShape,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [inputValues, setInputValues] = useState<DimensionModel>(
    dimension as DimensionModel
  );

  const handleChange = (key: string, value: number) => {
    setInputValues((prev) => ({ ...prev, [key]: value }));
    const updatedDimensions = { ...dimension, [key]: value };
    const validationErrors = validateShapeDimensions(
      selectedShape as Shape2dModel,
      updatedDimensions as Record<string, number>,
      key
    );

    if (!validationErrors[key]) {
      onChange(key, value);
    }

    setErrors(validationErrors);
  };

  return (
    <div>
      {renderInputDimension(
        inputValues,
        selectedShape as Shape2dModel,
        handleChange,
        errors
      )}
    </div>
  );
};

export default DimensionControls;
