import { Dispatch, SetStateAction } from "react";

export type Shape2dModel = "rectangle" | "square" | "circle" | "triangle";
export type Shape3dModel = "cube" | "cuboid" | "sphere" | "tetrahedron";
export type UnitsModel = "m" | "cm" | "in";
export interface DimensionModel {
  [key: string]: number | { [key: string]: number };
}

export interface ThreeDimensionModel {
  [key: string]: number | { [key: string]: number };
}

export type ControlOptionsModel = "2Dshapes" | "units" | "3Dshapes";

export interface ShapeControlsProps {
  selectedShape: Shape2dModel | Shape3dModel;
  setSelectedShape: Dispatch<SetStateAction<any>>;
  selectedUnit: UnitsModel;
  setSelectedUnit: Dispatch<SetStateAction<UnitsModel>>;
  title: ControlOptionsModel;
}

export interface ControlSelectorProps {
  selectedValue: Shape2dModel | UnitsModel | Shape3dModel;
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
  selectedShape: Shape2dModel | Shape3dModel;
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
  selectedShape: Shape2dModel | Shape3dModel;
  type?: "3D" | "2D";
}

export interface ShapeResultProps extends FormulaInfoProps {
  dimension: DimensionModel;
  unit: UnitsModel;
}

interface CubeDimensions {
  side: number;
}

interface TetrahedronDimensions {
  side: number;
}

interface CuboidDimensions {
  length: number;
  width: number;
  height: number;
}

interface SphereDimensions {
  radius: number;
}

export interface ThreeDShapeDimensionModel {
  cube: CubeDimensions;
  tetrahedron: TetrahedronDimensions;
  cuboid?: CuboidDimensions;
  sphere?: SphereDimensions;
}
