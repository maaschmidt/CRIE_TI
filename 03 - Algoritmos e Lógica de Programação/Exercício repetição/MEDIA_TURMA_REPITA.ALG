Algoritmo "media_turma_repita"
var
   cont, malta:inteiro
   n1,n2,n3,m,somam,mg:real
   nome:caracter

Inicio
      repita
           escreva("Nome do aluno: ")
           leia(nome)
           escreva("Nota 1: ")
           leia(n1)
           escreva("Nota 2: ")
           leia(n2)
           escreva("Nota 3: ")
           leia(n3)
      
           m <- (n1+n2+n3) / 3
           somam <- somam + m
           
           escreval
           escreval("A media de ", nome," é:",m)
           se (m > 7) entao
              escreval("APROVADO")
              malta <- malta + 1
           senao
                escreval("REPROVADO")
           fimse
           cont <- cont + 1
      ate  cont = 3

      mg<-somam/3

   escreval
   escreval("A média da turma é :", mg:5:2)
   escreval("A quantidade de alunos com media maior de 8 é:", malta)
Fimalgoritmo