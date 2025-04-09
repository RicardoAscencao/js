let username = document.querySelector('#username');
let password = document.querySelector('#password');
let apelido = document.querySelector('#apelido');

username.focus();

username.addEventListener('blur', (event) => check(event, 5), false);
apelido.addEventListener('blur',  (event) => check(event, 7), false);
password.addEventListener('blur', (event) => check(event, 9), false);

function check(event, min){
    
    let campoAValidar = event.target;
    let divMsgErro = campoAValidar.nextElementSibling;

    if (campoAValidar.value.length < min) {
        divMsgErro.textContent = `O ${event.target.id}, tem que ter mais de ${min} caracteres`
    } else {
        divMsgErro.textContent = '';
    }
}