
/// ES6 - Spread Operador

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let novaArr = [100, 'Nuno', ...arr2, true, ...arr1, {nome: 'Nuno', apelido: 'Ascenção'}];
console.log('novaArr:', novaArr);

///Copy by reference
console.log('_______________');
let copyRef = arr1;
console.log('arr1:', arr1);
console.log('copyRef:', copyRef);

arr1.push(10);
console.log('arr1:', arr1);
console.log('copyRef:', copyRef);

copyRef.push(100);
console.log('arr1:', arr1);
console.log('copyRef:', copyRef);

/// Copy by value - clone
console.log('_______________');
let clone =[ ...arr1];
console.log('arr1:', arr1);
console.log('clone:', clone);

arr1.push(123);
console.log('arr1:', arr1);
console.log('clone:', clone);

clone.push (9999);
console.log('arr1:', arr1);
console.log('clone:', clone);

///Utilizar spread como parametros de funções
console.log('_______________');

let params = [5, 9];

console.log('addNums: ', addNums(...params));

function addNums(num1, num2){ //function declaration (hosting)
    return num1 + num2
}

let nome = 'Manuel da Silva';
let letras = [...nome]
console.log(...nome);
console.log(letras);