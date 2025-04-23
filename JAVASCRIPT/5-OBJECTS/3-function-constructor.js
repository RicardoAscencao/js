
function Pessoa(nome = 'John', apelido = 'Doe'){
    this.nome = nome;
    this.apelido = apelido;

    this.nomeCompleto = function(){
        return `Foi criada uma Pessoa com o nome: ${this.nome} ${this.apelido}`;
    }
}

let nuno = new Pessoa('Nuno', 'Ascenção');
console.log(nuno);
console.log(nuno.nomeCompleto());

console.log('___________________________');

let manuel = new Pessoa('Manuel');
console.log(manuel);
console.log(manuel.nomeCompleto());

console.log('___________________________');

nuno.pais = 'PT';
console.log(nuno);
console.log('____________________________');

Pessoa.prototype.titulo = 'Sr.';

/// Herança
function Developer (nome, apelido, linguagem='Javacript'){
    Pessoa.call(this, nome, apelido);

    this.linguagem = linguagem;

    this.programa = function(){
        return `Foi criado um Dev: ${this.nome} ${this.apelido} que gosta de ${linguagem}`
    }
}

let antonio = new Developer('António');
console.log(antonio);