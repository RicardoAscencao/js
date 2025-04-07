
let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');

/* username.onblur = checkUsername;

function checkUsername(){ /// function declaration (hosisting)
    if (username.value.length < 5){
        feedback.textContent = 'Tem que ter mais de 5 caracteres'
    } else {
        feedback.textContent = '';
    }
} */

/*     username.onblur = function (){ /// event handler - função anónima
        if (username.value.length < 5){
            feedback.textContent = 'Tem que ter mais de 5 caracteres'
        } else {
            feedback.textContent = '';
        }
    } */

username.onblur = () => { 
    if (username.value.length < 5){
    feedback.textContent = 'Tem que ter mais de 5 caracteres'
    } else {
        feedback.textContent = '';
    }
}