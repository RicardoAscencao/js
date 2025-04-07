
let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');

username.focus();

/// username.addEventListener('blur', checkUsername, false);
/* function validar(){
    check(6);
} */

/* username.addEventListener('blur', function (){
    check(7);
}, false); */

username.addEventListener('blur', () => check(7), false);

function check(min){
    if (username.value.length < min){
        feedback.textContent = `Tem que ter mais de ${min} caracteres`;
    } else {
        feedback.textContent = '';
    }
}