function ExampleConstructor() {}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var aExampleConstructor = new ExampleConstructor();
console.log('value of aExampleConstructor:', aExampleConstructor);

console.log('is aExampleConstructor instanceof ExampleConstructor:', aExampleConstructor instanceof ExampleConstructor);
