/// IIFE - Imediate Invoked Function Expression
// Closure - expor determinados membros da funcao

let libEs5 = (function(){
    let nome = 'Joao';

    let apelido = 'Goncalves';

    function dizerOla(){
        return `Olá ${nome} ${apelido}`;
    }

    return {
        nome,
        sayHi : dizerOla,
    }

})();

//console.log(libEs5.nome);