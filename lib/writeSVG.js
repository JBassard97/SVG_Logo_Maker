const fs = require("fs");
const colors = require("jbassard97nodecolors");

function writeSVG(shape) {
  console.log(shape);
  fs.writeFile("./OUTPUT/output.svg", shape.render(), (err) => {
    if (err) {
      // throw new Error("Unable to write file!");
      console.log(err);
    } else {
      console.log(
        colors.RainbowText("SVG file successfully written to output folder")
      );
    }
  });
}

module.exports = { writeSVG };
