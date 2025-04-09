
/* let items = document.querySelectorAll('li');

for (const item of items) {
    item.addEventListener('click', eliminarItem, false);
} */

let lista = document.querySelector('ul');    
lista.addEventListener('click', eliminarItem, false);



function eliminarItem(event) {
    
    let itemAEliminar = event.target.parentElement;
    itemAEliminar.remove();

    /* if(event.target.nodeName === 'EM'){
        event.target.parentElement.parentElement.remove();
    } else {
        event.target.parentElement.remove();
    } */

    console.log(event);
    
    event.preventDefault(); // previne o comportamento normal de um elemento ( neste caso da hiperliagação)

   
}