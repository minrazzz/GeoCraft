import { DynamicInputsProps, DimensionModel, Shape2dModel } from "@/types";
import { FC, useState } from "react";
import InputComponent from "./controllers/InputComponent";
import { validateShapeDimensions } from "@/utils/reusables";

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
            value={dimension?.length}
            type="number"
            title="Length"
            error={errors?.length}
          />
          <InputComponent
            id="width"
            onChange={handleChange}
            value={dimension?.width}
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
          value={dimension?.side}
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
          value={dimension?.radius}
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
              value={dimension?.base}
              type="number"
              title="Base"
              error={errors?.base}
            />
            <InputComponent
              id="height"
              onChange={handleChange}
              value={dimension?.height}
              type="number"
              title="Height"
              error={errors?.height}
            />
          </div>
          <InputComponent
            id="sideA"
            onChange={handleChange}
            value={dimension?.sideA}
            type="number"
            title="SideA"
            error={errors?.sideA}
          />
          <InputComponent
            id="sideB"
            onChange={handleChange}
            value={dimension?.sideB}
            type="number"
            title="sideB"
            error={errors?.sideB}
          />
          <InputComponent
            id="sideC"
            onChange={handleChange}
            value={dimension?.sideC}
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
            value={dimension?.length}
            type="number"
            title="Length"
            error={errors?.length}
          />
          <InputComponent
            id="width"
            onChange={handleChange}
            value={dimension?.width}
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

  const [inputValues, setInputValues] = useState<DimensionModel>(dimension);

  const handleChange = (key: string, value: number) => {
    setInputValues((prev) => ({ ...prev, [key]: value }));
    const updatedDimensions = { ...dimension, [key]: value };
    const validationErrors = validateShapeDimensions(
      selectedShape,
      updatedDimensions,
      key
    );

    if (!validationErrors[key]) {
      onChange(key, value);
    }

    setErrors(validationErrors);
  };

  return (
    <div>
      {renderInputDimension(inputValues, selectedShape, handleChange, errors)}
    </div>
  );
};

export default DimensionControls;
