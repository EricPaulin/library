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
        console.log(`${title} is by author ${author} and has ${pageCount} pgs`)
    }
}

/* Array storing each book + valriable for temp storing current new book */
let myLibrary = [];
let addBook;


/* Pushes new Book titles to the end of the array */
function addBookToLibrary() {
    popUp.style.display = 'none';
    newBook = new book(title, author, pageCount, read);
    myLibrary.push(newBook);
    bookCard();
    form.reset();
}


/* Creates Book Card Visual */
function bookCard() {
    const display = document.getElementById('book-list');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (var i = 0; i < myLibrary.length; i++){
        createCard(myLibrary[i]);
    }
}


/* Opens and Closes the Popup */

function openPopup() {
    document.getElementById("popUp").style.display = "grid";
}

function closePopup() {
    document.getElementById("popUp").style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById('popUp');
    if (event.target == modal) {
      closePopup();
    }
}

document.getElementById("add").onclick = openPopup;
document.getElementById("window").onclick = closePopup;

