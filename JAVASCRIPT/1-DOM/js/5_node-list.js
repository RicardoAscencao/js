
let items = document.getElementsByTagName('li');
let itemsHot = document.querySelectorAll('li.hot');

console.log(items);
console.log(itemsHot);

for (const item of itemsHot) {
    item.className = 'cool';
}

// let outraLista = Array.from(items);
let outraLista = [... itemsHot];
outraLista.map(item => item.className = 'cool');

//get ... Live Nodes
// query... Static Nodes
