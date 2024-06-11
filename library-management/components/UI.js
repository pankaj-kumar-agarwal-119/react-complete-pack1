export class UI {
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book) => {
            UI.addBookToList(book);
        })
    }
    static addBookToList(book) {
        const list = document.querySelector("#books");
        const li = document.createElement("li");
        li.innerHTML = `
     ${book.title} by ${book.author} (ISBN: ${book.isbn})
     <button class="btn btn-danger delete">Delete</button>
     `;
        list.appendChild(li);
    }

    static deleteBook(el) {
     if(el.classList.contains("delete")){
        el.parentElement.remove();
     }
    }

    static clearFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}