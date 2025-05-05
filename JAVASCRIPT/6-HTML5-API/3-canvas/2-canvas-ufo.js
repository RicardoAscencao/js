let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let menosBtn = document.querySelector('#menosBtn');
let maisBtn = document.querySelector('#maisBtn');

menosBtn.addEventListener('click', diminuirVel, false);
maisBtn.addEventListener('click', aumentarVel, false);

canvas.addEventListener('click', lerDados, false);

let ufo = new Image();
let x = 0;
let y = 30;
let vel = 5;
ufo.src = 'ufo.png';

/// ufo.addEventListener('load', draw, false);

let anim = setInterval(draw, 30);
///setTimeout()

function draw(){
    drawBackground();
    ctx.drawImage(ufo, x, y);
    x += vel

    if (x > 301){
        x = -50;
        y = Math.random() * 250;
    }

    if (x < -51){
        x = 300;
        y = Math.random() * 250;
    }
}

function diminuirVel(){
    clearInterval(anim);
    anim = setInterval(draw, 30);
    vel -= 3;

}

function aumentarVel(){
    clearInterval(anim);
    anim = setInterval(draw, 30);
    vel += 3;
    
}

function lerDados(event){
    console.log('Ler dados:', event);
    ///vel = 0;
    clearInterval(anim);
}

function drawBackground(){ // passar codigo no dontpad
    //ceuu
    let lineGrad = ctx.createLinearGradient(0, 0, 0, 300);
    lineGrad.addColorStop(0, 'black');
    lineGrad.addColorStop(1, '#5498d1');
    ctx.fillStyle = lineGrad;
    ctx.fillRect(0, 0, 300, 300);

    //estrelas
    ctx.fillStyle = 'white';

    ctx.beginPath();
    ctx.arc(55, 58, 3, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(227, 128, 2, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(214, 50, 1, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(138, 117, 1, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(43, 195, 1, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(294, 15, 2, 0, Math.PI*2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(185, 223, 1, 0, Math.PI*2, false);
    ctx.fill();	
}