
inicio
	
    inteiro A, B, maior, menor, diferenca

    escrever "Indique o primeiro valor: "
    ler A

    escrever "Indique o segundo valor: "
    ler B

    se (A > B) entao
        maior <- A
        menor <- B
    senao
        maior <- B
        menor <- A
    fimse
    
    diferenca <- maior - menor

    escrever "A diferença entre o maior e o menor valor é: ", diferenca
    
fim
