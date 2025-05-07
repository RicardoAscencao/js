
let grid = document.querySelector('#grid');

fetch('https://randomuser.me/api/?results=30')
    .then(response => response.json())
    .then(data => mostrarUsers(data))
    .catch(()=> grid.textContent = 'Ocorreu um erro de comunicação');

function mostrarUsers(users){
    console.log(users);
    users.map( ({name, email, address:{city}, website:site}) => {


        grid.innerHTML += `
            <article>
            <h1> ${name}</h1>
            <h2> ${email}</h2>
            <p> ${city}</p>
            <p> ${site}</p>
            <hr>
            </article>
        `;
    })
}    