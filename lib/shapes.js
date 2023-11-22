// EXPORTS "TRIANGLE, CIRCLE, AND SQUARE" CLASSES
class Shape {
  constructor(shapeName, color, textColor, text) {
    this.shapeName = shapeName;
    this.text = text;
    this.color = color;
    this.textColor = textColor;
  }
}

class Circle extends Shape {
  constructor(shapeName, color, textColor, text) {
    super(shapeName, color, textColor, text);
  }
  render() {
    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<circle cx="50" cy="50" r="40" fill="${this.color}" />
<text x="50" y="53" fill="${this.textColor}" font-size="30" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
  </svg>
  `;
  }
}

class Square extends Shape {
  constructor(shapeName, color, textColor, text) {
    super(shapeName, color, textColor, text);
  }
  render() {
    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<rect x="10" y="10" width="80" height="80" fill="${this.color}" />
<text x="50" y="53" fill="${this.textColor}" font-size="30" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
  </svg>
  `;
  }
}

class Triangle extends Shape {
  constructor(shapeName, color, textColor, text) {
    super(shapeName, color, textColor, text);
  }
  render() {
    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<polygon points="50,10 90,90 10,90" fill="${this.color}" />
<text x="50" y="64" fill="${this.textColor}" font-size="20" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
  </svg>
  `;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};
