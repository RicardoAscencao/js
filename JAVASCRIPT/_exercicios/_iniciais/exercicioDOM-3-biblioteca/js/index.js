
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

let filtroLidos = document.getElementById('filtroLidos');
let filtroTexto = document.getElementById('filtroTexto');

filtroLidos.addEventListener('change', applyFilters);
filtroTexto.addEventListener('input', applyFilters);

function applyFilters() {
  let filtroStatus = filtroLidos.value; // 'todos', 'lidos' ou 'nao-lidos'
  let filtroPesquisa = filtroTexto.value.toLowerCase();

  // Filtra os livros conforme o filtro de leitura e de texto
  let livrosFiltrados = livros.filter(book => {
    const correspondeTexto =
      book.title.toLowerCase().includes(filtroPesquisa) ||
      book.author.toLowerCase().includes(filtroPesquisa);

    const correspondeStatus =
      filtroStatus === 'todos' ||
      (filtroStatus === 'lidos' && book.alreadyRead) ||
      (filtroStatus === 'nao-lidos' && !book.alreadyRead);

    return correspondeTexto && correspondeStatus;
  });

  // Exibe os livros filtrados
  showBooks(livrosFiltrados);
}
