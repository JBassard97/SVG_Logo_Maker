const { generateSVG } = require("../generateSVG");
const { writeSVG } = require("../writeSVG");
const { Circle, Square, Triangle } = require("../shapes");
const colors = require("jbassard97nodecolors");

jest.mock("../writeSVG", () => ({
  writeSVG: jest.fn(),
}));

jest.mock("jbassard97nodecolors", () => ({
  BrightMagentaText: jest.fn(),
}));

describe("generateSVG function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("generates SVG for Circle", () => {
    const emptyObject = {
      shapeName: "Circle",
      color: "red",
      textColor: "white",
      text: "Hello",
    };

    generateSVG(emptyObject);

    expect(writeSVG).toHaveBeenCalledWith(expect.any(Circle));
  });
});
