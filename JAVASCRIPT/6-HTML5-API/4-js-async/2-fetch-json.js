
let output = document.querySelector('#output');

fetch('pessoa.json')
    .then( resp => resp.json() )
    .then( data  => {
        output.innerHTML = `
        <h2> ${data.nome} ${data.apelido}</h2>
        <p> ${data.pais}</p>
        `;
    })
    .catch( () => output.textContent = 'Ocorreu um erro, tente mais tarde');
