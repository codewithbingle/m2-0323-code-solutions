/* exported Shape */

class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return 'The area of the shape is ' + this.area + ' and the circumference is ' + this.circumference + '.';
  }
}

const myShape = new Shape(40, 50);
console.log(myShape.print());
