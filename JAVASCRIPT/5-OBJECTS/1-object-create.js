
const obj1 = { // Object Literal
    nome: 'Maria',
    apelido: 'Silva',
    /* nomeCompleto: function(){
        return `${this.nome} ${this.apelido}`
    } */

}

console.log('Obj1: ', obj1);
obj1.pais = 'Portugal';
console.log('Obj1: ', obj1);
obj1.nomeCompleto = function(){
    return `${this.nome} ${this.apelido}`
}
console.log(obj1.nomeCompleto());
console.log('Obj1: ', obj1);

//? Object.create()
console.log('-----------------------');

const obj2 = Object.create(obj1);
console.log('Obj2: ', obj2);
console.log('Obj2: ', obj2.nome);

obj2.nome = 'Joaquina';
console.log('Obj2: ', obj2);
console.log('Obj2: ', obj2.nome);
console.log('Obj2: ', obj2.nomeCompleto());

console.log(obj1.nomeCompleto());
console.log('Obj2: ', obj2.xpto);
