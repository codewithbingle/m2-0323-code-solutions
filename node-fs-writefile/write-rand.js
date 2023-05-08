import fs from 'node:fs/promises';

async function writeRandomNumber() {
  try {
    const randomNumber = Math.random();
    await fs.writeFile('random.txt', `${randomNumber}\n`);
    console.log(`Random number ${randomNumber}written to file random.txt`);
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

writeRandomNumber();
