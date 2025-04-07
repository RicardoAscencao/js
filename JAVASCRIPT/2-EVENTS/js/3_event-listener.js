
let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');

/// Event Listener
username.addEventListener('blur', checkUsername, false);

/// LISTENERS
function checkUsername(){
    if (username.value.length < 5){
        feedback.textContent = 'Tem que ter mais de 5 caracteres'
    } else {
        feedback.textContent = '';
    }
}


/* username.addEventListener('blur', function (){
    if (username.value.length < 5){
        feedback.textContent = 'Tem que ter mais de 5 caracteres'
    } else {
        feedback.textContent = '';
    }
}  , false);   */

/* username.addEventListener('blur', () => {
    if (username.value.length < 5){
        feedback.textContent = 'Tem que ter mais de 5 caracteres'
    } else {
        feedback.textContent = '';
    }
}  , false);  */ 