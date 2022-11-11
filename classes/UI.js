class UI {
    addBook(title, author, isbn) {
        const list = document.querySelector(".book-list")
        const booklistrow = document.createElement("tr");

        const newTitle = document.createElement("td");
        newTitle.innerHTML = title;
        booklistrow.appendChild(newTitle);
        const newAuthor = document.createElement("td");
        newAuthor.innerHTML = author;
        booklistrow.appendChild(newAuthor);
        const newibms = document.createElement("td");
        newibms.innerHTML = isbn;
        booklistrow.appendChild(newibms);

        const newlink = document.createElement("td");
        const link = document.createElement("a");
        link.className = "secondary-content";
        link.appendChild(document.createTextNode("X"));
        link.setAttribute("href", "#");

        newlink.appendChild(link);
        booklistrow.appendChild(newlink);
        list.appendChild(booklistrow)

    }
}