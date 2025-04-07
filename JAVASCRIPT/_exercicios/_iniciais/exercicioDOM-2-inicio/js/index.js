
console.log(livros);

let grid = document.getElementById('grid');

showBooks(getBooks());
//showBooks(getReadBooks());
//showBooks(getnotReadBooks());

function showBooks(arrayBooks) {
    arrayBooks.map(book => {
    grid.innerHTML += `
    <article>
        <h1>${book.title}</h1>
        <h2>${book.author}</h2>
        <img src="livros/${book.imageUrl}" alt="${book.title}">
        <p>AlreadyRead: ${book.alreadyRead ? '✅' : '❌'} </p>
    </article>
    `;
    })
}
