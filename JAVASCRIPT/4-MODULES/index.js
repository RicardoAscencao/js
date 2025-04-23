import xpto, {olaUniverso, nome} from './libEs6.js'
import {numeros} from './data.js';

let output = document.querySelector('#output');

output.innerHTML  = `<h2> A utilizar o modulo de ES5,<br> Nome: ${libEs5.nome} </h2>`;
output.innerHTML += `<h2> ES5, DizerOla: <br> Nome: ${libEs5.sayHi()} </h2>`;
output.innerHTML += '<hr>';
output.innerHTML += `<h2> A utilizar o modulo de ES6,<br> Universo: ${olaUniverso()} </h2>`;
output.innerHTML += `<h2> ES6,<br> Nome: ${nome} </h2>`;
output.innerHTML += `<h2> ES6 EXPORT DEFAULT,<br> Default: ${xpto()} </h2>`;

console.log(numeros);