import { ControlOptionsModel, Shape2dModel, UnitsModel } from "@/types";

export const SHAPES_2D = {
  RECTANGLE: "rectangle",
  SQUARE: "square",
  CIRCLE: "circle",
  TRIANGLE: "triangle",
} as const;

export const UNITS = {
  METERS: "m",
  CENTIMETERS: "cm",
  INCHES: "in",
} as const;

export const CONTROL_OPTIONS: Record<
  ControlOptionsModel,
  Array<UnitsModel | Shape2dModel>
> = {
  shapes: ["rectangle", "square", "circle", "triangle"],
  units: ["m", "cm", "in"],
};

export const Descriptions = {
  rectangle: {
    formula: "Area = length × width\nPerimeter = 2(length + width)",
    description:
      "A rectangle is a 2D shape with four right angles and opposite sides that are equal in length.",
    realWorld: "Examples: Rooms, screens, books",
  },
  square: {
    formula: "Area = side²\nPerimeter = 4 × side",
    description:
      "A square is a 2D shape with four equal sides and four right angles.",
    realWorld: "Examples: Chessboards, tiles, windows",
  },
  circle: {
    formula: "Area = π × Radius²\nPerimeter = 2 × π × Radius",
    description:
      "A circle is a 2D shape where all points are equidistant from the center.",
    realWorld: "Examples: Wheels, coins, pizza",
  },
  triangle: {
    formula:
      "Area = ½ × base × height\nPerimeter = a + b + c(sum of all sides)",
    description: "A triangle is a 2D shape with three sides and three angles.",
    realWorld: "Examples: Roofs, pyramids, sails",
  },
};
