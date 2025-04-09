/*
1 - Acrescentar uma secção de filtros para poder filtrar por já lidos, não lidos, todos e por titulo ou autor do livro
2 - dentro de cada card, acrescentar um botão de delete, para apagar ao respectivo livro
3 - ao clicar no thumbnail mostrar popup da capa do livro
*/

/// metodo para ler todos os livros
const getBooks = () => livros;

/// metodo para mostrar livros já lidos
const getReadBooks = () => livros.filter(livro => livro.alreadyRead === true);

/// metodo para mostrar livros não lidos
const getNoReadBooks = () => livros.filter(livro => livro.alreadyRead === false);
