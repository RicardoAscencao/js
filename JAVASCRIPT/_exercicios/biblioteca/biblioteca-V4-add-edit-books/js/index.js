import {showPopup, closePopup} from './dom-utils.js';
import {getBooks,getReadBooks , getNotReadBooks, getBooksByAuthorTitle, deleteBook, addBook, getBooksById, } from './data-utils.js';
import { Book } from './data.js';

/// Definição das variáveis locais
let grid = document.getElementById('grid');
let filters = document.getElementById('filters');
let popup = document.getElementById('popup');

/// Definição das variáveis do Form
let addEditForm = document.querySelector('.addEditForm');
let form = addEditForm.querySelector('form');
let title = form.title;
let author = form.author;
let alreadyRead = form.alreadyRead;
let imageUrl = form.imageUrl;
let imageUrlGr = form.imageUrlGr;
let selectorBook;
let updateBookBtn = document.querySelector('#updateBookBtn');
let addBookBtn = document.querySelector('#addBookBtn');

/// Eventos da aplicação

filters.addEventListener('click', filterEvents, false);
filters.addEventListener('input', filterEvents, false);
grid.addEventListener('click', gridEvents, false);
popup.addEventListener('click', closePopup, false);

/// Submit do Form
addBookBtn.addEventListener('click', addBookForm, false);
updateBookBtn.addEventListener('click', updateBookForm, false);


/// Listeners

function filterEvents( {target:{id, value}, type}){


  if (id === 'allBtn') {
    showBooks(getBooks());
  }

  if (id === 'readBtn') {
    showBooks(getReadBooks());
  }

  if (id === 'notReadBtn') {
    showBooks(getNoReadBooks());
  }

  if ((id === 'searchTxt') && (type === 'input')) {
    let text = value.toLowerCase();
    showBooks(getBooksByAuthorTitle(text))
  }

  if (id === 'showForm'){
    addEditForm.classList.toggle('open');
    addBookBtn.classList.add('hide');
    updateBookBtn.classList.remove('hide');
  }

}

function gridEvents({target:{nodeName, textContent, dataset:{type, popup, idbook}}}){

  
  if ((nodeName === 'P') && (textContent.search('✅') > -1) ){
    showBooks(getReadBooks());
  }

  if ((nodeName === 'P') && (textContent.search('❌') > -1) ){
    showBooks(getNoReadBooks());
  }

  if (type === 'deleteBtn'){
    showBooks(deleteBook(idbook));
  }

  if (type === 'thumbnail'){
    showPopup (popup);
  }

  if (type === 'editBtn'){
    fillBookForm(idbook);
    addBookBtn.classList.add('hide');
    updateBookBtn.classList. remove('hide');
  }

}

function addBookForm(event){

  let id = Data.now();
  let book = new Book (id, title.value, author.value, alreadyRead.cheked, imageUrl.value, imageUrlGr.value);

  showBooks(addBook(book));

  form.reset();

  event.preventDefault();
}

function fillBookForm(id){
  addEditForm.classList.toggle('open');


  selectorBook = getBooksById(id);
  let {title: editTitle, author: editAuthor, alreadyRead: editAlreadyRead, imageUrl: editImageURL, imageUrlGr: editImageUrlGr} = selectorBook;

  title.value = editTitle;
  author.value = editAuthor;
  alreadyRead.cheked = editAlreadyRead;
  imageUrl.value = editImageURL;
  imageUrlGr.value = editImageUrlGr;


}

function updateBookForm(event){

  let updateBook = {
    id: selectorBook.id,
    title: title.value,
    author: author.value,
    alreadyRead: alreadyRead.cheked,
    imageUrl: imageUrl.value,
    imageUrlGr: imageUrlGr.value,
  }

  showBooks(updateBooks(updateBook));
  form.reset();
  event.preventDefault();
}

/// Business Logic
// console.log(livros);
showBooks(getBooks());

function showBooks(arrayBooks) {

  grid.innerHTML = '';

    arrayBooks.map(book => {
    grid.innerHTML += `
    <article>
        <h1>${book.title}</h1>
        <h2>${book.author}</h2>
        <img src="livros/${book.imageUrl}"
          alt="${book.title}"
          data-type='thumbnail'
          data-popup='livros/${book.imageUrlGr}'
          class='thumbnail'>
        <p>AlreadyRead: ${book.alreadyRead ? '✅' : '❌'} </p>
        <button class='btn' data-type='deleteBtn' data-idbook=${book.id}> Delete </button>
        <button class='btn' data-type='editBtn'  data-idbook=${book.id}> Edit </button>
    </article>
    `;
    })
}