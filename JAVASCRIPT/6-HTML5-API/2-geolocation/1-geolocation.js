let geoBtn = document.querySelector('#geoBtn');
let outupt = document.querySelector('#outupt');

geoBtn.addEventListener('click', lerCoordenadas, false);

function lerCoordenadas(){
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(sucesso, erro);
    }
}

function sucesso(event){
    console.log(event);

    let {coords:{altitude, longitude, latitude, accuracy}} = event;

    output.innerHTML = `
    <h1>Latitude: ${latitude} </h1>
    <h1>Longitude: ${longitude} </h1>
    <h1>Altitude: ${altitude}m </h1>
    <h1>Accuracy: ${accuracy}m </h1>
    `;
}

function erro(error){
    output.innerHTML= `
    <h1>Erro: ${error.code}, ${error.message}</h1>
    `;
}