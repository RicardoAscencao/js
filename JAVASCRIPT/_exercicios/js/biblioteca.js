
//Funçao para gerar numero aleatorio entre 2 numeros
/* *         
    vi, vf
    Math.random() * (vf - vi) + vi --- Math.random() * (50 - 30) + 30
    Math.round( Math.random() * (vf - vi) + vi )
*/

function randomIntBetweenNumbers(vi=0 , vf=1){
    let random = Math.round(Math.random() * (vf - vi) + vi);
    return random;
}



/// Funcao calcular areaRect
function calcularAreaRect (altura = 1, comprimento = 1){
    let area = altura * comprimento;
    return area;
}
