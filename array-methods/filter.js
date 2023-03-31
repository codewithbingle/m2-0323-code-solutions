const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

/* const numbersEven = numbers.filter(function (x) {
  return x % 2 === 0;
}); */

const numbersEven = numbers.filter(x => !(x % 2));
console.log('Even numbers:');
console.log(numbersEven);

console.log('No D');
const onlyDd = names.filter(element => !(element.toUpperCase().includes('D')));
console.log(onlyDd);
