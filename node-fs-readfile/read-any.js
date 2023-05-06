import fs from 'node:fs/promises';

async function readAnyFile() { // Define an async function called readAnyFile
  try {
    const fileName = process.argv[2]; // Get the filename from the command line argument
    const data = await fs.readFile(fileName, 'utf-8'); // Read the file using the Promises version of fs.readFile
    console.log(data); // Print the contents of the file to the console
  } catch (error) {
    console.error('Error reading file:', error); // Handle errors by logging them to the console
  }
}

readAnyFile();

// `process.argv[2]
// The `process.argv` array contains all the command - line arguments passed to the script, with the:
// first two elements being the Node.js executable path and the script file path, respectively.
// The third element, `process.argv[2]`, should be the filename.
