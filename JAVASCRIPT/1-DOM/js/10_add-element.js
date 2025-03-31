
let lista = document.querySelector('ul');

/// acrecentar um li no final da lista
// 1- criar o li
let itemFim = document.createElement('li');
// 2- criar texto para o li
itemFim.textContent = 'banana';
// 3- acrescentar à lista
lista.append(itemFim);

/// acrecentar um li no inicio da lista
// 1- criar o li
let itemInicio = document.createElement('li');
// 2- criar texto para o li
itemInicio.textContent = 'item inicio';
// 3- acrescentar à lista
lista.insertBefore(itemInicio, lista.firstElementChild);

lista.append(itemInicio);


