// EXPORTS "TRIANGLE, CIRCLE, AND SQUARE" CLASSES
class Shape {
  constructor(text, color, shapeName) {
    this.text = text;
    this.color = color;
    this.shapeName = shapeName;
  }
}

class Circle extends Shape {
  constructor(text, color, shapeName) {
    super(text, color, shapeName);
  }
  render() {
    return `
        <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" fill="${this.color}" />
        <text x="50" y="50" fill="white" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
        </svg>`;
  }
}


class Square extends Shape {
  constructor(text, color, shapeName) {
    super(text, color, shapeName);
  }
  render() {
    return `<svg width="100" height="100">
        <rect x="10" y="10" width="80" height="80" fill="${this.color}" />
        <text x="50" y="50" fill="white" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, color, shapeName) {
    super(text, color, shapeName);
  }
  render() {
    return `<svg width="100" height="100">
        <polygon points="50,10 90,90 10,90" fill="${this.color}" />
        <text x="50" y="50" fill="white" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

module.exports = {
    Circle,
    Square,
    Triangle
};


