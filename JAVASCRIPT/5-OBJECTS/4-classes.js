
class Pessoa {
    //ES10
    nome = '';
    apelido = '';
    #titulo = "Sr. " /// propriedade privada

    constructor(nome = 'John', apelido = 'Doe') {
        this.nome = nome;
        this.apelido = apelido;
    }

    verNome(){
        return `Nome ${this.#titulo} ${this.nome} ${this.apelido}`
    }

    ///Getters e Setters
    get titulo(){
        console.log('- Dar acesso a propriedade privada - ');
        return this.#titulo;
    }

    set titulo(novoTitulo){
        this.#titulo = novoTitulo;
    }
}

let nuno = new Pessoa('Nuno', 'Ascenção');
console.log(nuno);
console.log(nuno.apelido);
//console.log(nuno.#titulo);
nuno.nome = 'Nuno Ricardo';
console.log(nuno);
console.log(nuno.titulo);
nuno.titulo = 'Tenente';
console.log(nuno.titulo);
console.log(nuno);

// Herança em classes
class Developer extends Pessoa {
    constructor(nome, apelido, linguagem='JavaScript'){
        super(nome, apelido);
        this.linguagem = linguagem;
    }

    programa() {
        return `Foi criado um Dev: ${this.nome} ${this.apelido} que gosta de ${this.linguagem}`
    }
}

let jose = new Developer('José', 'Silva');
console.log(jose);
console.log(jose.verNome());

/* let teste = new String('Nuno');
console.log(teste); */
