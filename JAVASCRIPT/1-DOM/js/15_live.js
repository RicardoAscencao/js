console.log('ola')


let lista = document.querySelector('ul');

let itemsLive = document.getElementsByTagName('li');
let itemsStatic = document.querySelectorAll('li');

console.log(itemsLive);
console.log(itemsStatic);

let novoLi = document.createElement('li');
novoLi.textContent ='teste';
lista.append(novoLi);

//destacar(itemslive)
destacar(itemsLive)

function destacar(items){ // function declaration
    for (const item of items) {
        item.classList.add('destaque');
    }
}