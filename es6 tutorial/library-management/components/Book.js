export class Book {
    #title;
    #author;
    #isbn;
    constructor(title, author, isbn) {
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
    }
    get title(){
        return this.#title;
    }
    get author(){
        return this.#author;
    }
    get isbn(){
        return this.#isbn;
    }
}