// My module that easily colors text in console (MY version of "chalk")
const colors = require("jbassard97nodecolors");
// Importing shape classes
const { Circle, Square, Triangle } = require("./lib/shapes");
// List of all/most common CSS colors to check answer against later
const { cssColorKeywords } = require("./lib/CSScolorKeywords");
// Importing inquirer
const inquirer = require("inquirer");
const { generateSVG } = require("./lib/generateSVG");

console.log(
  `Welcome to the ${colors.RainbowText("SVG_Logo_Generator")}\n`,
  `You will be asked for the ${colors.BrightRedText(
    "shape"
  )} to be used, the ${colors.BrightBlueText(
    "color"
  )} of the shape, the ${colors.BrightYellowText(
    "text color"
  )}, and the ${colors.BrightGreenText("text")} to be centered within!`
);

const emptyObject = {};

inquirer
  // SHAPE
  .prompt([
    {
      type: "list",
      message: "What shape would you like to use?",
      name: "shapeName",
      choices: ["Circle", "Square", "Triangle"],
    },
  ])
  .then((answer) => {
    console.log(`You selected a ${colors.BrightCyanText(answer.shapeName)}! `);
    emptyObject.shapeName = answer.shapeName;
    // SHAPE COLOR
    return inquirer.prompt([
      {
        type: "input",
        message: `What is the shape's color? ${colors.RedText(
          "color keyword or Hex code starting with #)"
        )} `,
        name: "color",
      },
    ]);
  })
  .then((answer) => {
    if (cssColorKeywords.includes(answer.color.toLowerCase().trim())) {
      console.log(
        `You chose ${answer.color}, that's a ${colors.BrightGreenText(
          "valid"
        )} keyword!`
      );
      emptyObject.color = answer.color;
    } else if (
      answer.color.startsWith("#") &&
      (answer.color.length == 7 || answer.color.length == 4)
    ) {
      console.log(
        `You entered ${answer.color}, that's a ${colors.BrightGreenText(
          "valid"
        )} hexadecimal code!`
      );
      emptyObject.color = answer.color.trim();
    } else {
      throw new Error("Input a valid color keyword or hexadecimal ONLY");
    }
    // TEXT COLOR
    return inquirer.prompt([
      {
        type: "input",
        message: `What's the logo's text color? ${colors.RedText(
          "color keyword or Hex code starting with #)"
        )} `,
        name: "textColor",
      },
    ]);
  })
  .then((answer) => {
    if (cssColorKeywords.includes(answer.textColor.toLowerCase().trim())) {
      console.log(
        `You chose ${answer.textColor.trim()}, that's a ${colors.BrightGreenText(
          "valid"
        )} keyword!`
      );
      emptyObject.textColor = answer.textColor.trim();
    } else if (
      answer.textColor.startsWith("#") &&
      (answer.textColor.length == 7 || answer.textColor.length == 4)
    ) {
      console.log(
        `You entered ${answer.textColorolor}, that's a ${colors.BrightGreenText(
          "valid"
        )} hexadecimal code!`
      );
      emptyObject.textColor = answer.textColor;
    } else {
      throw new Error("Input a valid color keyword or hexadecimal ONLY");
    }
    // TEXT
    return inquirer
      .prompt([
        {
          type: "input",
          message: `What text would you like in the center of your logo? ${colors.RedText(
            "Input 3 characters AT MOST"
          )}`,
          name: "text",
        },
      ])
      .then((answer) => {
        if (!answer.text) {
          throw new Error("You must put SOMETHING here!");
        } else if (answer.text.length > 3) {
          throw new Error(
            "Please keep your text to THREE (3) characters long!"
          );
        } else {
          console.log(
            `You've entered: ${answer.text.toUpperCase()}, which will be centered in your logo!`
          );
          emptyObject.text = answer.text.toUpperCase();
          generateSVG(emptyObject);
        }
      });
  });
