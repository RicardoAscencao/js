import {numeros} from './data.js';

export let nome = 'Jose';
let apelido = 'Vicente';

export const olaUniverso = () => `Olá ${nome} ${apelido}`;

export default () => "Ola do Export Default do Modulo de ES6";

console.log('ES6: ', numeros);