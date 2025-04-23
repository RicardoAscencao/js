
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

        let self = this;

        this.musicas.forEach(
            function(musica){
                ///this.lerMusica(musica)
                self.lerMusica(musica)
            }///.bind(this)
        )
    }
}

jukebox.lerMusicas();


