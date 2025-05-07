
let manterPalavra = true;

let promise = new Promise( (resolve, reject) => {
    if(manterPalavra){
        resolve('Promessa cumprida')
    } else {
        reject('Promessa Quebrada')
    }
});

//console.log(promise);

let promise2 = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        //resolve('Promessa Cumprida')
        reject('Promessa Quebrada')
    }, 3000)
});

//console.log(promise2);

promise2
    .then( val => console.log(val))
    .then( ( ) => console.log('Instrução dummy'))
    .catch( err => console.log(err))
    .finally( () => console.log('Executando idependentemente fe ser ou não cumprida'))