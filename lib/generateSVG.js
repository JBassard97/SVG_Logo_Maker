const { Circle, Square, Triangle } = require("./shapes");
const { writeSVG } = require("./writeSVG");
const colors = require("jbassard97nodecolors");

function generateSVG(emptyObject) {
  if (emptyObject.shapeName == "Circle") {
    let newCircle = new Circle(
      emptyObject.shapeName,
      emptyObject.color,
      emptyObject.textColor,
      emptyObject.text
    );
    console.log(`${colors.BrightMagentaText("Here's the preview:")}`);
    writeSVG(newCircle);
  }
  if (emptyObject.shapeName == "Square") {
    let newSquare = new Square(
      emptyObject.shapeName,
      emptyObject.color,
      emptyObject.textColor,
      emptyObject.text
    );
    console.log(`${colors.BrightMagentaText("Here's the preview:")}`);
    writeSVG(newSquare);
  }
  if (emptyObject.shapeName == "Triangle") {
    let newTriangle = new Triangle(
      emptyObject.shapeName,
      emptyObject.color,
      emptyObject.textColor,
      emptyObject.text
    );
    console.log(`${colors.BrightMagentaText("Here's the preview:")}`);
    writeSVG(newTriangle);
  }
}

module.exports = { generateSVG };
