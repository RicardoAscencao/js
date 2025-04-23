
function lerMusica(){
    console.log('Contexto de execução Global');
}

let jukebox = {
    musicas: [
        {titulo: 'So Long', artista: 'Fisher Z'},
        {titulo: 'La Folie', artista: 'Stranglers'},
    ],
    lerMusica: function(musica){
        console.log(`Playing: ${musica.titulo} - ${musica.artista}`);
    },
    lerMusicas: function(){

        this.musicas.forEach(
            (musica) => this.lerMusica(musica)
            ///arrow function expression - não tem contexto de execução prórprio 
        )
    }
}

jukebox.lerMusicas();


