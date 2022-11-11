ui = new UI();
ls = new LS();

const form = document.querySelector("#newbook");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

form.addEventListener("click", addBook);

function addBook(e){
    const book = new Book(titleInput.value, authorInput.value, isbnInput.value);
    ui.addBook(book.title, book.author, book.isbn);
    book.addedToUI()
    ls.addBook(book);
    e.preventDefault();

}
