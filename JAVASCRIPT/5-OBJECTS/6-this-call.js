
let pessoa = {
    nome: 'Nuno',
    verNome: function(){
        return this.nome;
    }
};

let outraPessoa = Object.create(pessoa);

console.log(pessoa.verNome());
outraPessoa.nome = 'Ana';
console.log(outraPessoa.verNome());

console.log(outraPessoa.verNome.call(pessoa));





