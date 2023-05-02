import addTwo from './add.js';
import subtractTwo from './subtract.js';
import multiplyTwo from './multiply.js';
import divideTwo from './divide.js';

const num1 = parseInt(process.argv[2]);
const operator = process.argv[3];
const num2 = parseInt(process.argv[4]);

let result;

if (operator === '+' || operator === 'plus') {
  result = addTwo(num1, num2);
} else if (operator === '-' || operator === 'minus') {
  result = subtractTwo(num1, num2);
} else if (operator === '*' || operator === 'times') {
  result = multiplyTwo(num1, num2);
} else if (operator === '/' || operator === 'over') {
  result = divideTwo(num1, num2);
} else {
  console.log('Invalid operation. Please use +, -, *, or /');
  process.exit(1);
}

console.log(`result: ${result}`);
