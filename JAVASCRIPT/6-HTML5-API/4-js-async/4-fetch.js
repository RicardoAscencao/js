
let output = document.querySelector('#output');

 fetch('texto.txt')
    .then(response => response.text())
    .then(data => output.textContent = data + 'fetch')
    .catch(()=> output.textContent = 'Ocorreu um erro de comunicação'); 

// Asynt / Await functions

 (async function (){
    
    let response = await fetch('texto.txt');
    let data = await response.text();
    output.textContent = data + 'async-await';
   
})(); 

/* (async function lertexto(){
    try{
    let response = await fetch('textos.txt');
    if(!response.ok){
        throw new Error('Erro na Comunicação')
    }
    let data = await response.text();
    output.textContent = data;
    } catch (error) {
        console.log('Ocorreu um erro');
    }
})(); */

/* (async function lertexto(){
    let response = await fetch('textos.txt');
    let data = await response.text();
    output.textContent = data;
}; */

/* lertexto().catch(err => output.textContent = 'Ocorreu um errode função assincrona') */

// Função assincrona retornam promises
async function ola() {
    return 'Olá da função assicrona'
}

ola().then( v=> console.log(v))
