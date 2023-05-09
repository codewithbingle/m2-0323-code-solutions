import fs from 'node:fs/promises';

async function copyFile() {
  try {
    const sourceFile = process.argv[2];
    const destinationFile = process.argv[3];
    const fileData = await fs.readFile(sourceFile);
    await fs.writeFile(destinationFile, fileData);
    console.log(`${sourceFile} was successfully copied to ${destinationFile}`);
  } catch (error) {
    console.error('Error copying file:', error);
  }
}

copyFile();
