
// definição das variáveis locais
let grid = document.getElementById('grid');
let filters = document.getElementById('filters');

showBooks(getBooks());

//Eventos da aplicação
filters.addEventListener('click', filterEvents, false);
filters.addEventListener('input', filterEvents, false);
grid.addEventListener('click', gridEvents, false);

//Listeners
function filterEvents(event){
  let element = event.target;

  if (element.id === 'allBtn') {
    showBooks(getBooks());
  }

  if (element.id === 'readBtn') {
    showBooks(getReadBooks());
  }

  if (element.id === 'notReadBtn') {
    showBooks(getNoReadBooks());
  }

  if ((element.id === 'searchTxt') && (event.type === 'input')) {
    let text = element.value.toLowerCase();
    showBooks(getBooksByTitle(text))
  }
}

function gridEvents(event){
  
  if ((event.target.nodeName === 'P') && (event.target.textContent.search('✅') > -1) ){
    showBooks(getReadBooks());
  }

  if ((event.target.nodeName === 'P') && (event.target.textContent.search('❌') > -1) ){
    showBooks(getNoReadBooks());
  }

  if (event.target.dataset.type === 'deleteBtn'){
    showBooks(deleteBook(event.target.dataset.idbook));
  }
}



// Business Logic
// console.log(livros);
showBooks(getBooks());

function showBooks(arrayBooks) {

  grid.innerHTML = '';

    arrayBooks.map(book => {
    grid.innerHTML += `
    <article>
        <h1>${book.title}</h1>
        <h2>${book.author}</h2>
        <img src="livros/${book.imageUrl}" alt="${book.title}">
        <p>AlreadyRead: ${book.alreadyRead ? '✅' : '❌'} </p>
        <button class='btn' data-type='deleteBtn' data-idbook=${book.id}> Delete </button>
        <button class='btn' data-type='editBtn'  data-idbook=${book.id}> Edit </button>
    </article>
    `;
    })
}