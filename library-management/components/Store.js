export class Store {
    static getBooks() {
        let books;
        if (!localStorage.getItem("books")) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book) {
        const books = Store.getBooks();
        console.log("The current book list1 : ",books);
        console.log("book is : ",book);
        books.push({
            title : book.title,
            author : book.author,
            isbn : book.isbn
        });
        console.log("The current book list2 : ",books);
        localStorage.setItem("books", JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        const filteredBooks = books.filter((bookEl) => {
            return bookEl.isbn != isbn;
        })
        localStorage.setItem("books", JSON.stringify(filteredBooks));
    }
}