import fs from 'node:fs/promises';

async function readDijkstraFile() {
  try {
    const data = await fs.readFile('dijkstra.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readDijkstraFile();

// Here's a breakdown of what's happening in the code:

// 1) `import fs from 'node:fs/promises';`:
//    This imports the Promise version of the `fs` module.The `fs/promises` module is the Promise - based version of the Node.js built -in `fs` module, which provides file system - related functionality.

// 2) `async function readDijkstraFile() { ... }`:
//    This declares an `async` function named `readDijkstraFile` that will read the contents of the file.

// 3) `try { ... } catch (error) { ... }`:
//    This wraps the `await fs.readFile(...)` call in a `try-catch` block to handle any errors that may occur when reading the file.

// 4) `const data = await fs.readFile('dijkstra.txt', 'utf-8')`;:
//     This uses the `await` keyword to wait for the Promise returned by the `fs.readFile` method to resolve.Once the Promise resolves, the contents of the file are stored in the `data` variable.

// 5) `console.log(data);`:
//    This prints the contents of the file to the console.

// 6) `console.error('Error reading file:', error);`:
//    If there is an error while reading the file, this prints an error message to the console.

// 7) `readDijkstraFile();`:
//    This calls the `readDijkstraFile` function to initiate the file reading process.

// When you declare a function as `async`, it automatically returns a Promise. Inside the function, you can use the `await` keyword to pause the execution of the function until a Promise is resolved or rejected. This makes it easier to work with asynchronous code that relies on promises, as it lets you write code that looks more synchronous and easier to read
