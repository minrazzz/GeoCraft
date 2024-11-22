import { DimensionModel, DynamicInputsProps, Shape3dModel } from "@/types";
import { FC, useState } from "react";
import InputComponent from "./controllers/InputComponent";
import { validate3DShapeDimensions } from "@/utils/reusables";

const renderInputDimension = (
  dimension: DimensionModel,
  selectedShape: Shape3dModel,
  handleChange: (key: string, value: number) => void,
  errors: Record<string, string>
) => {
  switch (selectedShape) {
    case "cube":
      return (
        <InputComponent
          id="cside"
          onChange={handleChange}
          value={dimension?.cside as number}
          type="number"
          title="Side"
          error={errors?.cside}
        />
      );
    case "cuboid":
      return (
        <div className="flex gap-x-7 flex-wrap">
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
          <InputComponent
            id="height"
            onChange={handleChange}
            value={dimension?.height as number}
            type="number"
            title="Height"
            error={errors?.height}
          />
        </div>
      );
    case "sphere":
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
    case "tetrahedron":
      return (
        <InputComponent
          id="tside"
          onChange={handleChange}
          value={dimension?.tside as number}
          type="number"
          title="Side"
          error={errors?.tside}
        />
      );
    default:
      return (
        <InputComponent
          id="cside"
          onChange={handleChange}
          value={dimension?.cside as number}
          type="number"
          title="Side"
          error={errors?.cside}
        />
      );
  }
};

const ThreeDDimensionControls: FC<DynamicInputsProps> = ({
  dimension,
  onChange,
  selectedShape,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [inputValues, setInputValues] = useState<DimensionModel>(dimension);

  const handleChange = (key: string, value: number) => {
    setInputValues((prev) => ({ ...prev, [key]: value }));
    const updatedDimensions = { ...dimension, [key]: value };
    const validationErrors = validate3DShapeDimensions(
      selectedShape as Shape3dModel,
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
        selectedShape as Shape3dModel,
        handleChange,
        errors
      )}
    </div>
  );
};

export default ThreeDDimensionControls;
