const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach(values => console.log(values));

console.log('Reverse order:');
// values.reverse().forEach(values => console.log(values));

values.forEach((element, index, array) => {
  console.log(array[array.length - 1 - index]);
});
