let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'tomato';
context.fillRect(20,20 , 400, 200);

context.strokeStyle = 'green';
context.lineWidth = 10;
context.strokeRect(20,20 , 400, 200)