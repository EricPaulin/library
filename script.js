/* Opens and Closes the Popup */

document.getElementById("add").onclick = openPopup;

function openPopup() {
    document.getElementById("popUp").style.display = "grid";
}

function closePopup() {
    document.getElementById("popUp").style.display = "none";
}

 
window.addEventListener('mouseup', function(event) {
    if (!event.target.closest("#popUp")) {
        closePopup();
    }
});


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