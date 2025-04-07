
/// metodo para ler todos os livros
const getBooks = () => livros;

/// metodo para mostrar livros já lidos
const getReadBooks = () => livros.filter(livro => livro.alreadyRead === true);

/// metodo para mostrar livros não lidos
const getNoReadBooks = () => livros.filter(livro => livro.alreadyRead === false);
