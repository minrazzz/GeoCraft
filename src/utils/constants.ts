import {
  ControlOptionsModel,
  Shape2dModel,
  Shape3dModel,
  UnitsModel,
} from "@/types";

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
  Array<UnitsModel | Shape2dModel | Shape3dModel>
> = {
  "2Dshapes": ["rectangle", "square", "circle", "triangle"],
  units: ["m", "cm", "in"],
  "3Dshapes": ["cube", "cuboid", "sphere", "tetrahedron"],
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

export const SHAPES_3D = {
  CUBE: "cube",
  CUBOID: "cuboid",
  SPHERE: "sphere",
  TETRAHEDRON: "tetrahedron",
} as const;

export const ThreeDDescriptions = {
  cube: {
    formula: "Surface Area = 6 × side²\nVolume = side³",
    description:
      "A cube is a 3D shape with six equal square faces. All edges are of equal length.",
    realWorld: "Examples: Dice, boxes, Rubik's cubes",
  },
  cuboid: {
    formula: "Surface Area = 2lw + 2lh + 2wh\nVolume = l × w × h",
    description:
      "A cuboid is a 3D shape with six rectangular faces. Opposite faces are equal.",
    realWorld: "Examples: Boxes, books, refrigerators",
  },
  sphere: {
    formula: "Surface Area = 4 × π × radius²\nVolume = 4/3 × π × radius³",
    description:
      "A sphere is a 3D shape where all points are equidistant from the center.",
    realWorld: "Examples: Ball, planets, soap bubbles",
  },
  tetrahedron: {
    formula: "Surface Area = √3 × side²\nVolume = (side³) / (6√2)",
    description:
      "A tetrahedron is a 3D shape with four triangular faces, six edges, and four vertices.",
    realWorld: "Examples: Pyramids, triangular tents, crystal formations",
  },
};
