inicio
   
   inteiro alunos
   escrever "Indique o n�mero de alunos: "
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

   escrever "A m�dia das notas da turma �: ", soma_notas / alunos
   
fim
