/* Pre ES6 Prototyping */

/*function book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

book.prototype.info = function(title, author, pageCount) {
    console.log(`${this.title} is by author ${this.author} and has a page count of ${this.pageCount}`)
}


const book1 = new book("A Song of Ice and Fire", "George R.R Martin", 1400, false);
//book1.info();     */

/* Post ES6 "syntactical sugar" classes */

class book {
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
    }
    info(title, author, pageCount) {
        console.log(`${this.title} is by author ${this.author} and has a page count of ${this.pageCount}`)
    }
}

const ASOIAF = new book('A Song of Ice and Fire', 'George R.R Martin', 1400, true);
ASOIAF.info();

/* Array storing each book + valriable for temp storing current new book */
let myLibrary = [];
let addBook;


/* Pushes new Book titles to the end of the array */
function addBookToLibrary() {
    newBook = new book(title, author, pageCount, read);
    myLibrary.push(newBook);
}