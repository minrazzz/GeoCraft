import { Dispatch, SetStateAction } from "react";

export type Shape2dModel = "rectangle" | "square" | "circle" | "triangle";
export type UnitsModel = "m" | "cm" | "in";
export interface DimensionModel {
  [key: string]: number;
}

export type ControlOptionsModel = "shapes" | "units";

export interface ShapeControlsProps {
  selectedShape: Shape2dModel;
  setSelectedShape: Dispatch<SetStateAction<Shape2dModel>>;
  selectedUnit: UnitsModel;
  setSelectedUnit: Dispatch<SetStateAction<UnitsModel>>;
}

export interface ControlSelectorProps {
  selectedValue: Shape2dModel | UnitsModel;
  setSelectedValue: Dispatch<SetStateAction<any>>;
  title: ControlOptionsModel;
}

export interface selectOptions {
  label: string;
  value: Shape2dModel | UnitsModel;
}

export interface SelectComponentProps extends ControlSelectorProps {
  options: selectOptions[];
}

export interface DynamicInputsProps {
  dimension: DimensionModel;
  onChange: (key: string, value: number) => void;
  selectedShape: Shape2dModel;
}

export interface InputProps {
  value: number;
  onChange: (key: string, value: number) => void;
  type?: string;
  id: string;
  title: string;
  error?: string;
}

export interface FormulaInfoProps {
  selectedShape: Shape2dModel;
}

export interface ShapeResultProps extends FormulaInfoProps {
  dimension: DimensionModel;
  unit: UnitsModel;
}
