import {Book,Store,UI} from "./library.js";

//Event : Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event : Add a book
document.querySelector("#book-form").addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    console.log(`${title} , ${author} , ${isbn}`);
    if (title == "" || author == "" || isbn == "") {
        alert("Please fill all the fields");
    }
    else {
        const book = new Book(title, author, isbn);
        UI.addBookToList(book);//working fine
        Store.addBook(book);
        UI.clearFields();
    }
})

//Event : Remove a book
document.querySelector("#books").addEventListener("click",(e)=>{
    UI.deleteBook(e.target);
    let isbn = e.target.parentElement.textContent.split("ISBN: ")[1].split(')')[0];
    console.log("=>",e.target.parentElement.textContent.split("ISBN: ")[1].split(')')[0]);
    Store.removeBook(isbn);
})