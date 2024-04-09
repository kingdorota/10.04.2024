const person = {
  username: "Maciej",
  showName: function () {
    console.log(this.username);
  },
};

// Testowanie metody showName()
person.showName();

const bookshelf = {
  authors: [],
  getAuthors: function () {
    return this.authors;
  },
  addAuthor: function (authorName) {
    this.authors.push(authorName);
  },
};

// Dodawanie autorów do półki na książki
bookshelf.addAuthor("Stephen King");
bookshelf.addAuthor("J.K. Rowling");
bookshelf.addAuthor("George Orwell");

// Pobieranie listy autorów
const authorsList = bookshelf.getAuthors();
console.log(authorsList);
