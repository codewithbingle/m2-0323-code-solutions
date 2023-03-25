/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    const area = Math.PI * radius ** 2;
    const circumference = 2 * Math.PI * radius;
    super(area, circumference);
    this.radius = radius;
  }

  print() {
    return super.print() + 'The radius of the circle is ' + this.radius + '.';
  }
}

const myCircle = new Circle(2);
console.log(myCircle.print());
