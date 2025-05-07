
let output = document.querySelector('#output');

fetch('https://picsum.photos/200/300')
    .then( resp => resp.blob())
    .then( data => {
        let image = new Image();
        let imgUrl = URL.createObjectURL(data);
        image.scr = imgUrl;
        output.append(image);

    })