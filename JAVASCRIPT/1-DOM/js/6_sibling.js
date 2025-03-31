
let item2 = document.querySelector('#two');

// Item anterior
let itemAnterior = item2.previousElementSibling;
//let itemAnterior = item2.previousSibling;
itemAnterior.className = 'cool';

// Item seguinte
let itemSeguinte = item2.nextElementSibling;
itemSeguinte.className = 'complete';
