
let scriptResults = document.getElementById('scriptResults');

let item2 = document.querySelector('#two');

console.log(item2.textContent);
//item2.textContent = 'Morangos';

item2.innerText = 'teste'; /// não é standart

scriptResults.innerHTML = '<p>Olá Universo</p>'; /// cuidado com o innerHTML
