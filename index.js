// My module that easily colors text in console (MY version of "chalk")
const colors = require("jbassard97nodecolors");
// Importing shape classes
const { Circle, Square, Triangle } = require("./lib/shapes");
// List of all/most common CSS colors to check answer against later
const { cssColorKeywords } = require("./lib/CSScolorKeywords");
// Importing inquirer
const inquirer = require("inquirer");
const { empty } = require("rxjs");

myCirc = new Circle("Hi", "Pink", "Circle");
// console.log(myCirc.render());

console.log(
  `Welcome to the ${colors.RainbowText("SVG_Logo_Generator")}\n`,
  "You will be asked for the shape to be used, the color of the shape, and the text to be centered within!"
);

const emptyObject = {};

inquirer
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

    return inquirer.prompt([
      {
        type: "input",
        message: `What's the logo's color? ${colors.RedText(
          "color keyword or Hex code starting with #)"
        )} `,
        name: "color",
      },
    ]);
  })
  .then((answer) => {
    if (cssColorKeywords.includes(answer.color.toLowerCase())) {
      console.log(`You chose ${answer.color}, that's a valid keyword!`);
      emptyObject.color = answer.color;
    } else if (
      answer.color.startsWith("#") &&
      (answer.color.length == 7 || answer.color.length == 4)
    ) {
      console.log(
        `You entered ${answer.color}, that's a valid hexadecimal code!`
      );
      emptyObject.color = answer.color;
    } else {
      throw new Error("Input a valid color keyword or hexadecimal ONLY");
    }

    return inquirer
      .prompt([
        {
          type: "input",
          message: "What text would you like in the center of your logo?",
          name: "text",
        },
      ])
      .then((answer) => {
        if (!answer.text) {
          console.log(
            "You've decided to not use text in your logo! That's OK..."
          );
        } else {
          console.log(
            `You've entered: ${answer.text}, which will be centered in your logo!`
          );
          emptyObject.text = answer.text;
        }
        console.log(emptyObject);
      });
  });
