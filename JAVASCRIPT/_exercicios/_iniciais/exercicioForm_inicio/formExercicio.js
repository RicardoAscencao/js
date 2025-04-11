/*
1 - esconder o form, e deixar visivel somente o botao NewItem
2 - Ao clicar no botao NewItem mostrar o form e esconder o botao
3 - escrevendo um novo produto e clicando no boto "Add", acrescentar novo item á lista, voltar a esconder o form e mostrar botao NovoItem
4 - ao clicar num item, verificar se tem a class 'complete', se tiver eliminar o item, senao aplicar a class complete, e mover para o final da lista
5 - apresentar no H2, inserindo dentro de uma tag <span> o numero de items por comprar
6 - depois de apagar, se fizer ctrl + Z, repoe o item eliminado
*/

// DEFINIR VARIÁVEIS GLOBAIS
let newItemForm = document.getElementById('newItemForm');
let newItemButton = document.getElementById('newItemButton');
let showForm = document.getElementById('showForm');
let itemDescription = document.getElementById('itemDescription');
let ul = document.querySelector('ul');
let h2 = document.querySelector('h2');
let deletedItem = null;

// 1 - esconder o form, e deixar visivel somente o botao NewItem
newItemForm.className = 'hide';
newItemButton.className = 'show';

// DEFINIR O BUSINESS LOGIC
atualizarNumItems ();

// DEFINIR EVENTOS
showForm.addEventListener('click', mostrarForm, false);
newItemForm.addEventListener('submit', acrescentarItem, false);
ul.addEventListener('click', removerItem, false);
document.addEventListener('keydown', reporItem, false);



// DEFINIR LISTENERS
// 2 - Ao clicar no botao NewItem mostrar o form e esconder o botao
function mostrarForm(){
    newItemForm.className = 'show';
    newItemButton.className = 'hide';
    itemDescription.focus();
}

// 3 - escrevendo um novo produto e clicando no boto "Add", acrescentar novo item á lista, voltar a esconder o form e mostrar botao NovoItem
function acrescentarItem(event){
    let novoItem = document.createElement('li');
    novoItem.textContent = itemDescription.value;
    ul.prepend(novoItem);

    newItemForm.className = 'hide';
    newItemButton.className = 'show';
    itemDescription.value = '';

    atualizarNumItems();

    event.preventDefault();
}

//4 - ao clicar num item, verificar se tem a class 'complete', se tiver eliminar o item, senao aplicar a class complete, e mover para o final da lista
function removerItem(event){
    let item = event.target;

    if(item.className ==='complete') {
        deletedItem = item;
        //console.log ('1-', deletedItem);
        item.remove();
        //console.log ('2-', deletedItem);
    } else {
        item.className = 'complete';
        ul.append(item);
    }
    atualizarNumItems();
}

// 5 - apresentar no H2, inserindo dentro de uma tag <span> o numero de items por comprar
function atualizarNumItems(){
    let numItems = ul.querySelectorAll('li:not(.complete)').length;
    h2.innerHTML = `
    Buy groceries <span> ${numItems} </span>
    `;

}

// 6 - depois de apagar, se fizer ctrl + Z, repoe o item eliminado
function reporItem(event){
    //console.log(event);
    if (deletedItem &&
        (
            (event.ctrlKey && event.key === 'z') || (event.metaKey && event.key === 'z')
        )
 ) {
    ul.append(deletedItem);
    deletedItem = null;
 }
}

