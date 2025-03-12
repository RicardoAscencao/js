inicio
   
   inteiro alunos
   escrever "Indique o número de alunos: "
   ler alunos
   
   real soma_notas
   real nota
   inteiro contador <- 1
   
   repete
       escrever "Indique a nota do aluno ", contador, ": "
       ler nota
       soma_notas <- soma_notas + nota
       contador <- contador + 1
   
   ate contador > alunos

   escrever "A média das notas da turma é: ", soma_notas / alunos
   
fim
