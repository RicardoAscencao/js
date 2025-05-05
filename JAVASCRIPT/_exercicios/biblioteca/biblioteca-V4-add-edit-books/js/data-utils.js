
import {livros} from './data.js';

let myBooks = [...livros];

/// metodo ler todos os livros
export const getBooks = () => myBooks;

// metodo para mostrar livros ja lidos
export const getReadBooks = () => myBooks.filter( livro => livro.alreadyRead === true);

// metodo para mostrar livros nao lidos
export const getNotReadBooks = () => myBooks.filter( livro => livro.alreadyRead === false);

// pesquisa pelo titulo
export const getBooksByAuthorTitle = (text) => myBooks.filter( livro => {
    let title = livro.title.toLowerCase();
    let author = livro.author.toLowerCase();

    return (author.search(text) > -1 ) || (title.search(text) > -1 )
});

// delete do book por id
export const deleteBook = (id) => myBooks = myBooks.filter( livro => livro.id !== Number(id));

// acrescentar um book
export const addBook = (book) => {
    myBooks.push(book);
    return myBooks;
}

// seleccionar livro por id
export const getBooksById = (id) => myBooks.find( b => b.id === Number(id));

export const updateBooks = book => myBooks = myBooks.map (b => {

    if (b.id == book.id) {
        return {
            ...b,
            title : book.title,
            author : book.author,
            alreadyRead : book.alreadyRead,
            imageUrl : book.imageUrl,
            imageUrlGr : book.imageUrlGr,
        }

    } else {
        return b;
    }
})
 