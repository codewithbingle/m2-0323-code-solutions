import fs from 'node:fs/promises';

async function writeNewNote() {
  try {
    const newNote = process.argv[2] + '\n';
    await fs.writeFile('note.txt', newNote);
    console.log('Note saved!');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

writeNewNote();
