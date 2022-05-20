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

class Book {
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
    }
}

/* Array storing each book */
let myLibrary = [];

/* Add Book to Library (pushes it to end of array) */
const bookInput = document.querySelectorAll('.book-input');

function addBookToLibrary() {
    const book = new Book (
        bookInput[0].value,
        bookInput[1].value,
        bookInput[2].value,
        bookInput[3].checked,)
        myLibrary.push(book)
}

const books = document.querySelector('.books');
const addBook = document.querySelector('.add-book');
const plusBtn = document.querySelector('.plusBtn');
const addBookBtn = document.querySelector('.add-book-btn');

/* Form (Adding and Printing) */

plusBtn.addEventListener('click', () => {
    for (i = 0; i < 3; i++) {
        bookInput[i].value = ''
    }
    addBook.style.display = ('grid');
})

addBookBtn.addEventListener('click', () => {
    for (i = 0; i < 3; i++) {
        if (!bookInput[i].value) return
    }
    addBookToLibrary();
    printLibrary();
    addBook.style.display = 'none';
})

addBook.addEventListener("submit", (e) => {
    e.preventDefault();
})

function printLibrary() {
    const booksListInitial = document.querySelector('.books-list');
    books.removeChild(booksListInitial);

    const booksListAfter = document.createElement('div');
    booksListAfter.classList.add('books-list');

    for (let unit of myLibrary) {
        const card = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPageCount = document.createElement('div');
        const readBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        /* Making and Adding to a new Card */
        card.classList.add('card');
        bookTitle.classList.add('bookTitle');
        bookAuthor.classList.add('bookAuthor');
        bookPageCount.classList.add('bookPageCount');
        readBtn.classList.add('readBtn');
        deleteBtn.classList.add('deleteBtn');

        bookTitle.textContent = unit.title;
        bookAuthor.textContent = unit.author;
        bookPageCount.textContent = unit.pageCount + ' Pages';

        let readStatus = 'Read';
        card.style.borderColor = 'black';
        if (unit.readStatus) {
            readStatus = 'Not Read';
            card.style.borderColor = '#822634';
        }
        readBtn.textContent = readStatus;

        deleteBtn.textContent = 'Delete';

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPageCount);
        card.appendChild(readBtn);
        card.appendChild(deleteBtn);
        booksListAfter.appendChild(card);
        console.log(unit)
    }

    books.appendChild(booksListAfter);
    readBtnEvents();
    deleteBtnEvents();
    addBook.style.display = 'none';
}

printLibrary();

/* Functions for Read + Delete */

function readBtnEvents() {
    const readBtn = document.querySelectorAll('.readBtn');
    let readBtnArray = Array.from(readBtn);

    readBtnArray.forEach((button) => {
        button.addEventListener('click', () => {
            myLibrary[readBtnArray.indexOf(button)].readStatus = !(myLibrary[readBtnArray.indexOf(button).readStatus])
            printLibrary();
        });
    });
}

function deleteBtnEvents() {
    const deleteBtn = document.querySelectorAll('.deleteBtn');
    let deleteBtnArray = Array.from(deleteBtn);
    deleteBtnArray.forEach((button) => {
        button.addEventListener('click', () => {
            myLibrary.splice(deleteBtnArray.indexOf(button), 1);
        });
    });
}