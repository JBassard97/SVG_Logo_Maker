const { generateSVG } = require("../generateSVG");
const { writeSVG } = require("../writeSVG");
const { Circle, Square, Triangle } = require("../shapes");
const colors = require("jbassard97nodecolors");

describe("generateSVG function", () => {
  test("generates SVG for Circle", () => {
    const emptyObject = {
      shapeName: "Circle",
      color: "red",
      textColor: "black",
      text: "Sample Text",
    };
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    generateSVG(emptyObject);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Here's the preview:")
    );
    consoleSpy.mockRestore();
  });

  test("generates SVG for Square", () => {
    const emptyObject = {
      shapeName: "Square",
      color: "gold",
      textColor: "white",
      text: "Sample Text",
    };
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    generateSVG(emptyObject);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Here's the preview:")
    );
    consoleSpy.mockRestore();
  });

  test("generates SVG for Triangle", () => {
    const emptyObject = {
      shapeName: "Triangle",
      color: "chartreuse",
      textColor: "white",
      text: "Sample Text",
    };
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    generateSVG(emptyObject);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Here's the preview:")
    );
    consoleSpy.mockRestore();
  });
});
