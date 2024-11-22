import { Shape2dModel, UnitsModel } from "@/types";

export const calculateRectangleArea = (length: number, width: number): number =>
  length * width;
export const calculateRectanglePerimeter = (
  length: number,
  width: number
): number => 2 * (length + width);

export const calculateCircleArea = (radius: number): number =>
  Math.PI * radius * radius;
export const calculateCirclePerimeter = (radius: number): number =>
  2 * Math.PI * radius;

export const calculateSquareArea = (side: number): number => side * side;
export const calculateSquarePerimeter = (side: number): number => 4 * side;

export const calculateTriangleArea = (base: number, height: number): number =>
  (base * height) / 2;
export const calculateTrianglePerimeter = (
  a: number,
  b: number,
  c: number
): number => a + b + c;

export const calculateAreaAndPerimeter = (
  selectedShape: Shape2dModel,
  dimension: Record<string, number>
) => {
  switch (selectedShape) {
    case "rectangle":
      return {
        area: calculateRectangleArea(dimension?.length, dimension?.width),
        perimeter: calculateRectanglePerimeter(
          dimension?.length,
          dimension?.width
        ),
      };
    case "square":
      return {
        area: calculateSquareArea(dimension?.side),
        perimeter: calculateSquarePerimeter(dimension?.side),
      };
    case "circle":
      return {
        area: calculateCircleArea(dimension?.radius),
        perimeter: calculateCirclePerimeter(dimension?.radius),
      };
    case "triangle":
      return {
        area: calculateTriangleArea(dimension?.base, dimension?.height),
        perimeter: calculateTrianglePerimeter(
          dimension?.sideA,
          dimension?.sideB,
          dimension?.sideC
        ),
      };
    default:
      return null;
  }
};

export const hasDecimal = (num: number): boolean =>
  num.toString().includes(".");

const isPositiveNumber = (value: number): boolean => value > 0;

const validateRectangleDimensions = (
  dimensions: Record<string, number>
): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (!isPositiveNumber(dimensions.length)) {
    errors.length = "Length must be greater than 0.";
  }
  if (!isPositiveNumber(dimensions.width)) {
    errors.width = "Width must be greater than 0.";
  }
  return errors;
};

const validateSquareDimensions = (dimensions: Record<string, number>) => {
  const errors: Record<string, string> = {};
  if (!isPositiveNumber(dimensions.side)) {
    errors.side = "Side length must be greater than 0.";
  }
  return errors;
};

const validateCircleDimensions = (dimensions: Record<string, number>) => {
  const errors: Record<string, string> = {};
  if (!isPositiveNumber(dimensions.radius)) {
    errors.radius = "Radius must be greater than 0.";
  }
  return errors;
};

const validateTriangleSides = (
  dimensions: Record<string, number>,
  key: string
) => {
  const errors: Record<string, string> = {};

  const { sideA, sideB, sideC, base, height } = dimensions;

  if (base <= 0) errors.base = "base must be a positive number.";
  if (height <= 0) errors.height = "height must be a positive number.";

  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    if (sideA <= 0) errors.sideA = "Side A must be a positive number.";
    if (sideB <= 0) errors.sideB = "Side B must be a positive number.";
    if (sideC <= 0) errors.sideC = "Side C must be a positive number.";
  } else {
    switch (key) {
      case "sideA":
        if (sideB + sideC <= sideA) {
          errors.sideA =
            "Side A must be smaller than the sum of Side B + Side C.";
        }
        break;
      case "sideB":
        if (sideA + sideC <= sideB) {
          errors.sideB =
            "Side B must be smaller than the sum of Side A + Side C.";
        }
        break;
      case "sideC":
        if (sideA + sideB <= sideC) {
          errors.sideC =
            "Side C must be smaller than the sum of Side A + Side B.";
        }
        break;
      default:
        break;
    }
  }

  return errors;
};

export const validateShapeDimensions = (
  selectedShape: Shape2dModel,
  dimensions: Record<string, number>,
  key: string
): Record<string, string> => {
  const errors: Record<string, string> = {};

  switch (selectedShape) {
    case "rectangle":
      return validateRectangleDimensions(dimensions);

    case "square":
      return validateSquareDimensions(dimensions);

    case "circle":
      return validateCircleDimensions(dimensions);

    case "triangle":
      return validateTriangleSides(dimensions, key);

    default:
      errors.general = "Invalid shape selected.";
      return errors;
  }
};

export const extractFullUnitNames = (unit: UnitsModel) => {
  switch (unit) {
    case "in":
      return "Inches";
    case "cm":
      return "Centimeters";
    case "m":
      return "Meters";
    default:
      return "Meters";
  }
};