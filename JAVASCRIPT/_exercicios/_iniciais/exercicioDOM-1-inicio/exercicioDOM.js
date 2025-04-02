/*
1 - Acrescentar um novo item no inicio e no final da lista
2 - aplicar a class "cool" a todos os itens da lista
3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista
*/

let lista = document.querySelector('ul');

//1 - Acrescentar um novo item no inicio e no final da lista
let itemInicio = document.createElement('li');
let itemFim = document.createElement('li');

// acrescentar aos li's
itemInicio.textContent = 'Inicio';
itemFim.textContent = 'Fim';

// acrescentar os li's a ul
lista.append(itemFim);
// lista.insertBefore(itemInicio, ul.firstElementChild)
lista.prepend(itemInicio);

//2 - aplicar a class "cool" a todos os itens da lista
let itemsLi = document.querySelectorAll('li');

for (const item of itemsLi) {
    item.className = 'cool';
}

//3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista
let contador = document.createElement('span');
let h2 = document.querySelector('h2');
contador.textContent = itemsLi.length;
//console.log(contador.textContent)
h2.append(contador);














