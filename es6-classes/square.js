/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  print() {
    return super.print() + 'The width of the square is ' + this.width + '.';
  }
}

const mySquare = new Square(60);
console.log(mySquare.print());
