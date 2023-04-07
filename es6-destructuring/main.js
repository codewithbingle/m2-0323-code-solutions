const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

const { title: bTitle, author: bAuthor, libraryID: bLibraryID } = book1;

console.log(`The title of the book is ${bTitle}, the author is ${bAuthor}, abd the library id is ${bLibraryID}`);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};

const { title: b2Title, author: b2Author, libraryID: b2LibraryID } = book2;

console.log(`The title of the book is ${b2Title}, the author is ${b2Author}, and the library id is ${b2LibraryID}`);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of the Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const [book3, book4, book5] = library;

console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);

const [,,, book6] = library;

/* const{ 4: fifth } = myArr */

console.log('book6:', book6);