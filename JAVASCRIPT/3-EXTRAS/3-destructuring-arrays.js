
/// Destructuring de array

let arr = [1, 2, 3,] //trailing comma ES8
//console.log(arr.length);

let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a);
console.log(b);
console.log(c);

let [um, dois, tres] = [1, 2, 3,] //arr; // destructuring
console.log(um);
console.log(dois);
console.log(tres);

let [g, ...h] = [1,2,3,4,5,6,7,8,9]
console.log(g);
console.log(h);

function xpto(){
    let nome = 'Nuno';
    let pais = 'Portugal';

    return [nome, pais];
}

let [nome, pais] = xpto();
console.log(nome);
