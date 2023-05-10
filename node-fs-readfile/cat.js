import fs from 'node:fs/promises';

async function cat() {
  try {
    const files = process.argv.slice(2);
    const contents = await Promise.all(files.map(file => fs.readFile(file, 'utf-8')));
    console.log(contents.join('\n'));
  } catch (error) {
    console.error('Error:', error);
  }
}

cat();
