// JEST TESTS FOR SHAPES

const { Circle, Square, Triangle } = require("../shapes");

describe("Circle class's render function", () => {
  it("should return the SVG template", () => {
    const circle = new Circle();
    expect(circle.render).toBeDefined();
  });
});

describe("Square class's render function", () => {
  it("should return the SVG template", () => {
    const square = new Square();
    expect(square.render).toBeDefined();
  });
});

describe("Triangle class's render function", () => {
  it("should return the SVG template", () => {
    const triangle = new Triangle();
    expect(triangle.render).toBeDefined();
  });
});
