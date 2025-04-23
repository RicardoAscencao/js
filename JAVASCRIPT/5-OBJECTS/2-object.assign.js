let obj1 = {
    nome: 'Joao',
    apelido: 'Silva',
    morada: {
        rua:'Rua do Alecrim',
        numero:{
            porta: 7,
            letra:'A'
        }
    }
}

const carro = {
    marca: 'Lexus',
    ano: 2022,
}



let {nome, apelido, morada:{numero:{porta, letra}}} = obj1

console.log(obj1.morada.numero.porta);
console.log(porta);
console.log(letra);

console.log('---------------------');

//? Composition - Object.assign()
const newObj = Object.assign( {}, obj1, {pais: 'Portugal'} );

console.log('obj1: ', obj1);
console.log('newObj: ', newObj);

obj1.nome = 'Manuel';
console.log('obj1: ', obj1);
console.log('newObj: ', newObj);

// clone
const newObj2 = {...obj1};
console.log('obj1: ', obj1);
console.log('newObj2: ', newObj2);
console.log('---------------------');


const objComCarro = Object.assign({}, obj1, carro);
console.log('objComCarro: ', objComCarro);

const objComCarro2 = { // composition
    ...obj1,
    ...carro,
    ...{pais: ' Espanha'}
}

console.log('objComCarro2: ', objComCarro2);

